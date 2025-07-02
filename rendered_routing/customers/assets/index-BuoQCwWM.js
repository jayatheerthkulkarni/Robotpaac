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
const V0 = !1;
var n0 = Array.isArray,
  Xl = Array.prototype.indexOf,
  i0 = Array.from,
  Qs = Object.defineProperty,
  Pn = Object.getOwnPropertyDescriptor,
  $l = Object.getOwnPropertyDescriptors,
  Kl = Object.prototype,
  Yl = Array.prototype,
  ef = Object.getPrototypeOf,
  G0 = Object.isExtensible;
const Tr = () => {};
function ql(e) {
  return e();
}
function Oi(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
const bt = 2,
  tf = 4,
  ea = 8,
  a0 = 16,
  hr = 32,
  dn = 64,
  s0 = 128,
  Dt = 256,
  Ri = 512,
  Ut = 1024,
  lr = 2048,
  Vr = 4096,
  ar = 8192,
  f0 = 16384,
  rf = 32768,
  o0 = 65536,
  j0 = 1 << 18,
  Jl = 1 << 19,
  nf = 1 << 20,
  Va = 1 << 21,
  Ln = Symbol('$state');
function af(e) {
  return e === this.v;
}
function sf(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function ff(e) {
  return !sf(e, this.v);
}
function Zl(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Ql() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function ec(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function tc() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function rc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function nc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function ic() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Qn = !1,
  ac = !1;
function sc() {
  Qn = !0;
}
const fc = 1,
  oc = 2,
  lc = 16,
  cc = 1,
  uc = 2,
  dt = Symbol();
function hc(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let Me = null;
function z0(e) {
  Me = e;
}
function l0(e, t = !1, r) {
  var n = (Me = {
    p: Me,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  Qn && !t && (Me.l = { s: null, u: null, r1: [], r2: Gn(!1) }),
    h0(() => {
      n.d = !0;
    });
}
function c0(e) {
  const t = Me;
  if (t !== null) {
    const s = t.e;
    if (s !== null) {
      var r = ye,
        n = me;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          Sr(a.effect), Qt(a.reaction), _f(a.fn);
        }
      } finally {
        Sr(r), Qt(n);
      }
    }
    (Me = t.p), (t.m = !0);
  }
  return {};
}
function ei() {
  return !Qn || (Me !== null && Me.l === null);
}
function Dn(e) {
  if (typeof e != 'object' || e === null || Ln in e) return e;
  const t = ef(e);
  if (t !== Kl && t !== Yl) return e;
  var r = new Map(),
    n = n0(e),
    i = ir(0),
    a = me,
    s = (f) => {
      var l = me;
      Qt(a);
      var o = f();
      return Qt(l), o;
    };
  return (
    n && r.set('length', ir(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          rc();
        var c = r.get(l);
        return (
          c === void 0
            ? (c = s(() => {
                var h = ir(o.value);
                return r.set(l, h), h;
              }))
            : Le(c, o.value, !0),
          !0
        );
      },
      deleteProperty(f, l) {
        var o = r.get(l);
        if (o === void 0) {
          if (l in f) {
            const u = s(() => ir(dt));
            r.set(l, u), Fa(i);
          }
        } else {
          if (n && typeof l == 'string') {
            var c = r.get('length'),
              h = Number(l);
            Number.isInteger(h) && h < c.v && Le(c, h);
          }
          Le(o, dt), Fa(i);
        }
        return !0;
      },
      get(f, l, o) {
        if (l === Ln) return e;
        var c = r.get(l),
          h = l in f;
        if (
          (c === void 0 &&
            (!h || Pn(f, l)?.writable) &&
            ((c = s(() => {
              var d = Dn(h ? f[l] : dt),
                p = ir(d);
              return p;
            })),
            r.set(l, c)),
          c !== void 0)
        ) {
          var u = de(c);
          return u === dt ? void 0 : u;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = r.get(l);
          c && (o.value = de(c));
        } else if (o === void 0) {
          var h = r.get(l),
            u = h?.v;
          if (h !== void 0 && u !== dt)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        if (l === Ln) return !0;
        var o = r.get(l),
          c = (o !== void 0 && o.v !== dt) || Reflect.has(f, l);
        if (o !== void 0 || (ye !== null && (!c || Pn(f, l)?.writable))) {
          o === void 0 &&
            ((o = s(() => {
              var u = c ? Dn(f[l]) : dt,
                d = ir(u);
              return d;
            })),
            r.set(l, o));
          var h = de(o);
          if (h === dt) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var h = r.get(l),
          u = l in f;
        if (n && l === 'length')
          for (var d = o; d < h.v; d += 1) {
            var p = r.get(d + '');
            p !== void 0
              ? Le(p, dt)
              : d in f && ((p = s(() => ir(dt))), r.set(d + '', p));
          }
        if (h === void 0)
          (!u || Pn(f, l)?.writable) &&
            ((h = s(() => ir(void 0))), Le(h, Dn(o)), r.set(l, h));
        else {
          u = h.v !== dt;
          var x = s(() => Dn(o));
          Le(h, x);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, l);
        if ((m?.set && m.set.call(c, o), !u)) {
          if (n && typeof l == 'string') {
            var S = r.get('length'),
              y = Number(l);
            Number.isInteger(y) && y >= S.v && Le(S, y + 1);
          }
          Fa(i);
        }
        return !0;
      },
      ownKeys(f) {
        de(i);
        var l = Reflect.ownKeys(f).filter((h) => {
          var u = r.get(h);
          return u === void 0 || u.v !== dt;
        });
        for (var [o, c] of r) c.v !== dt && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        nc();
      },
    })
  );
}
function Fa(e, t = 1) {
  Le(e, e.v + t);
}
function u0(e) {
  var t = bt | lr,
    r = me !== null && (me.f & bt) !== 0 ? me : null;
  return (
    ye === null || (r !== null && (r.f & Dt) !== 0) ? (t |= Dt) : (ye.f |= nf),
    {
      ctx: Me,
      deps: null,
      effects: null,
      equals: af,
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
function xc(e) {
  const t = u0(e);
  return (t.equals = ff), t;
}
function of(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1) wr(t[r]);
  }
}
function dc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & bt) === 0) return t;
    t = t.parent;
  }
  return null;
}
function lf(e) {
  var t,
    r = ye;
  Sr(dc(e));
  try {
    of(e), (t = Rf(e));
  } finally {
    Sr(r);
  }
  return t;
}
function cf(e) {
  var t = lf(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = Cf())), !vn)) {
    var r = (_r || (e.f & Dt) !== 0) && e.deps !== null ? Vr : Ut;
    er(e, r);
  }
}
const Vn = new Map();
function Gn(e, t) {
  var r = { f: 0, v: e, reactions: null, equals: af, rv: 0, wv: 0 };
  return r;
}
function ir(e, t) {
  const r = Gn(e);
  return Fc(r), r;
}
function kr(e, t = !1, r = !0) {
  const n = Gn(e);
  return (
    t || (n.equals = ff),
    Qn && r && Me !== null && Me.l !== null && (Me.l.s ??= []).push(n),
    n
  );
}
function Le(e, t, r = !1) {
  me !== null &&
    (!Zt || (me.f & j0) !== 0) &&
    ei() &&
    (me.f & (bt | a0 | j0)) !== 0 &&
    !(Mt?.[1].includes(e) && Mt[0] === me) &&
    ic();
  let n = r ? Dn(t) : t;
  return uf(e, n);
}
function uf(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    vn ? Vn.set(e, t) : Vn.set(e, r),
      (e.v = t),
      (e.f & bt) !== 0 &&
        ((e.f & lr) !== 0 && lf(e), er(e, (e.f & Dt) === 0 ? Ut : Vr)),
      (e.wv = Cf()),
      hf(e, lr),
      ei() &&
        ye !== null &&
        (ye.f & Ut) !== 0 &&
        (ye.f & (hr | dn)) === 0 &&
        (Lt === null ? Cc([e]) : Lt.push(e));
  }
  return t;
}
function hf(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = ei(), i = r.length, a = 0; a < i; a++) {
      var s = r[a],
        f = s.f;
      (f & lr) === 0 &&
        ((!n && s === ye) ||
          (er(s, t),
          (f & (Ut | Dt)) !== 0 && ((f & bt) !== 0 ? hf(s, Vr) : v0(s))));
    }
}
let pc = !1;
var X0, xf, df, pf;
function vc() {
  if (X0 === void 0) {
    (X0 = window), (xf = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      t = Node.prototype,
      r = Text.prototype;
    (df = Pn(t, 'firstChild').get),
      (pf = Pn(t, 'nextSibling').get),
      G0(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      G0(r) && (r.__t = void 0);
  }
}
function vf(e = '') {
  return document.createTextNode(e);
}
function Ni(e) {
  return df.call(e);
}
function ta(e) {
  return pf.call(e);
}
function Ce(e, t) {
  return Ni(e);
}
function Ca(e, t) {
  {
    var r = Ni(e);
    return r instanceof Comment && r.data === '' ? ta(r) : r;
  }
}
function Xe(e, t = 1, r = !1) {
  let n = e;
  for (; t--; ) n = ta(n);
  return n;
}
function mc(e) {
  e.textContent = '';
}
function mf(e) {
  ye === null && me === null && ec(),
    me !== null && (me.f & Dt) !== 0 && ye === null && Ql(),
    vn && Zl();
}
function _c(e, t) {
  var r = t.last;
  r === null
    ? (t.last = t.first = e)
    : ((r.next = e), (e.prev = r), (t.last = e));
}
function pn(e, t, r, n = !0) {
  var i = ye,
    a = {
      ctx: Me,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | lr,
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
      p0(a), (a.f |= rf);
    } catch (l) {
      throw (wr(a), l);
    }
  else t !== null && v0(a);
  var s =
    r &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (nf | s0)) === 0;
  if (!s && n && (i !== null && _c(a, i), me !== null && (me.f & bt) !== 0)) {
    var f = me;
    (f.effects ??= []).push(a);
  }
  return a;
}
function h0(e) {
  const t = pn(ea, null, !1);
  return er(t, Ut), (t.teardown = e), t;
}
function Ga(e) {
  mf();
  var t = ye !== null && (ye.f & hr) !== 0 && Me !== null && !Me.m;
  if (t) {
    var r = Me;
    (r.e ??= []).push({ fn: e, effect: ye, reaction: me });
  } else {
    var n = _f(e);
    return n;
  }
}
function gc(e) {
  return mf(), gf(e);
}
function Ec(e) {
  const t = pn(dn, e, !0);
  return (r = {}) =>
    new Promise((n) => {
      r.outro
        ? Di(t, () => {
            wr(t), n(void 0);
          })
        : (wr(t), n(void 0));
    });
}
function _f(e) {
  return pn(tf, e, !1);
}
function gf(e) {
  return pn(ea, e, !0);
}
function Dr(e, t = [], r = u0) {
  const n = t.map(r);
  return x0(() => e(...n.map(de)));
}
function x0(e, t = 0) {
  return pn(ea | a0 | t, e, !0);
}
function jn(e, t = !0) {
  return pn(ea | hr, e, !0, t);
}
function Ef(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = vn,
      n = me;
    $0(!0), Qt(null);
    try {
      t.call(null);
    } finally {
      $0(r), Qt(n);
    }
  }
}
function Tf(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & dn) !== 0 ? (r.parent = null) : wr(r, t), (r = n);
  }
}
function Tc(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & hr) === 0 && wr(t), (t = r);
  }
}
function wr(e, t = !0) {
  var r = !1;
  (t || (e.f & Jl) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (wc(e.nodes_start, e.nodes_end), (r = !0)),
    Tf(e, t && !r),
    Bi(e, 0),
    er(e, f0);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  Ef(e);
  var i = e.parent;
  i !== null && i.first !== null && wf(e),
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
function wc(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : ta(e);
    e.remove(), (e = r);
  }
}
function wf(e) {
  var t = e.parent,
    r = e.prev,
    n = e.next;
  r !== null && (r.next = n),
    n !== null && (n.prev = r),
    t !== null &&
      (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Di(e, t) {
  var r = [];
  d0(e, r, !0),
    Sf(r, () => {
      wr(e), t && t();
    });
}
function Sf(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e) i.out(n);
  } else t();
}
function d0(e, t, r) {
  if ((e.f & ar) === 0) {
    if (((e.f ^= ar), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & o0) !== 0 || (n.f & hr) !== 0;
      d0(n, t, a ? r : !1), (n = i);
    }
  }
}
function ki(e) {
  Af(e, !0);
}
function Af(e, t) {
  if ((e.f & ar) !== 0) {
    e.f ^= ar;
    for (var r = e.first; r !== null; ) {
      var n = r.next,
        i = (r.f & o0) !== 0 || (r.f & hr) !== 0;
      Af(r, i ? t : !1), (r = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || t) && a.in();
  }
}
let Ii = [];
function Sc() {
  var e = Ii;
  (Ii = []), Oi(e);
}
function Ac(e) {
  Ii.length === 0 && queueMicrotask(Sc), Ii.push(e);
}
function yc(e) {
  var t = ye;
  if ((t.f & rf) === 0) {
    if ((t.f & s0) === 0) throw e;
    t.fn(e);
  } else yf(e, t);
}
function yf(e, t) {
  for (; t !== null; ) {
    if ((t.f & s0) !== 0)
      try {
        t.fn(e);
        return;
      } catch {}
    t = t.parent;
  }
  throw e;
}
let ja = !1,
  Pi = null,
  Lr = !1,
  vn = !1;
function $0(e) {
  vn = e;
}
let Ai = [];
let me = null,
  Zt = !1;
function Qt(e) {
  me = e;
}
let ye = null;
function Sr(e) {
  ye = e;
}
let Mt = null;
function Fc(e) {
  me !== null && me.f & Va && (Mt === null ? (Mt = [me, [e]]) : Mt[1].push(e));
}
let lt = null,
  Ft = 0,
  Lt = null;
function Cc(e) {
  Lt = e;
}
let Ff = 1,
  Li = 0,
  _r = !1;
function Cf() {
  return ++Ff;
}
function ra(e) {
  var t = e.f;
  if ((t & lr) !== 0) return !0;
  if ((t & Vr) !== 0) {
    var r = e.deps,
      n = (t & Dt) !== 0;
    if (r !== null) {
      var i,
        a,
        s = (t & Ri) !== 0,
        f = n && ye !== null && !_r,
        l = r.length;
      if (s || f) {
        var o = e,
          c = o.parent;
        for (i = 0; i < l; i++)
          (a = r[i]),
            (s || !a?.reactions?.includes(o)) && (a.reactions ??= []).push(o);
        s && (o.f ^= Ri), f && c !== null && (c.f & Dt) === 0 && (o.f ^= Dt);
      }
      for (i = 0; i < l; i++)
        if (((a = r[i]), ra(a) && cf(a), a.wv > e.wv)) return !0;
    }
    (!n || (ye !== null && !_r)) && er(e, Ut);
  }
  return !1;
}
function Of(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (Mt?.[1].includes(e) && Mt[0] === me) ||
        ((a.f & bt) !== 0
          ? Of(a, t, !1)
          : t === a && (r ? er(a, lr) : (a.f & Ut) !== 0 && er(a, Vr), v0(a)));
    }
}
function Rf(e) {
  var t = lt,
    r = Ft,
    n = Lt,
    i = me,
    a = _r,
    s = Mt,
    f = Me,
    l = Zt,
    o = e.f;
  (lt = null),
    (Ft = 0),
    (Lt = null),
    (_r = (o & Dt) !== 0 && (Zt || !Lr || me === null)),
    (me = (o & (hr | dn)) === 0 ? e : null),
    (Mt = null),
    z0(e.ctx),
    (Zt = !1),
    Li++,
    (e.f |= Va);
  try {
    var c = (0, e.fn)(),
      h = e.deps;
    if (lt !== null) {
      var u;
      if ((Bi(e, Ft), h !== null && Ft > 0))
        for (h.length = Ft + lt.length, u = 0; u < lt.length; u++)
          h[Ft + u] = lt[u];
      else e.deps = h = lt;
      if (!_r || ((o & bt) !== 0 && e.reactions !== null))
        for (u = Ft; u < h.length; u++) (h[u].reactions ??= []).push(e);
    } else h !== null && Ft < h.length && (Bi(e, Ft), (h.length = Ft));
    if (
      ei() &&
      Lt !== null &&
      !Zt &&
      h !== null &&
      (e.f & (bt | Vr | lr)) === 0
    )
      for (u = 0; u < Lt.length; u++) Of(Lt[u], e);
    return (
      i !== null &&
        i !== e &&
        (Li++, Lt !== null && (n === null ? (n = Lt) : n.push(...Lt))),
      c
    );
  } catch (d) {
    yc(d);
  } finally {
    (lt = t),
      (Ft = r),
      (Lt = n),
      (me = i),
      (_r = a),
      (Mt = s),
      z0(f),
      (Zt = l),
      (e.f ^= Va);
  }
}
function Oc(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? (r = t.reactions = null) : ((r[n] = r[i]), r.pop());
    }
  }
  r === null &&
    (t.f & bt) !== 0 &&
    (lt === null || !lt.includes(t)) &&
    (er(t, Vr), (t.f & (Dt | Ri)) === 0 && (t.f ^= Ri), of(t), Bi(t, 0));
}
function Bi(e, t) {
  var r = e.deps;
  if (r !== null) for (var n = t; n < r.length; n++) Oc(e, r[n]);
}
function p0(e) {
  var t = e.f;
  if ((t & f0) === 0) {
    er(e, Ut);
    var r = ye,
      n = Lr;
    (ye = e), (Lr = !0);
    try {
      (t & a0) !== 0 ? Tc(e) : Tf(e), Ef(e);
      var i = Rf(e);
      (e.teardown = typeof i == 'function' ? i : null), (e.wv = Ff);
      var a;
      V0 && ac && (e.f & lr) !== 0 && e.deps;
    } finally {
      (Lr = n), (ye = r);
    }
  }
}
function Rc() {
  try {
    tc();
  } catch (e) {
    if (Pi !== null) yf(e, Pi);
    else throw e;
  }
}
function Nc() {
  var e = Lr;
  try {
    var t = 0;
    for (Lr = !0; Ai.length > 0; ) {
      t++ > 1e3 && Rc();
      var r = Ai,
        n = r.length;
      Ai = [];
      for (var i = 0; i < n; i++) {
        var a = kc(r[i]);
        Dc(a);
      }
      Vn.clear();
    }
  } finally {
    (ja = !1), (Lr = e), (Pi = null);
  }
}
function Dc(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (f0 | ar)) === 0 &&
        ra(n) &&
        (p0(n),
        n.deps === null &&
          n.first === null &&
          n.nodes_start === null &&
          (n.teardown === null ? wf(n) : (n.fn = null)));
    }
}
function v0(e) {
  ja || ((ja = !0), queueMicrotask(Nc));
  for (var t = (Pi = e); t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (dn | hr)) !== 0) {
      if ((r & Ut) === 0) return;
      t.f ^= Ut;
    }
  }
  Ai.push(t);
}
function kc(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f,
      i = (n & (hr | dn)) !== 0,
      a = i && (n & Ut) !== 0;
    if (!a && (n & ar) === 0) {
      (n & tf) !== 0 ? t.push(r) : i ? (r.f ^= Ut) : ra(r) && p0(r);
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
function de(e) {
  var t = e.f,
    r = (t & bt) !== 0;
  if (me !== null && !Zt) {
    if (!Mt?.[1].includes(e) || Mt[0] !== me) {
      var n = me.deps;
      e.rv < Li &&
        ((e.rv = Li),
        lt === null && n !== null && n[Ft] === e
          ? Ft++
          : lt === null
            ? (lt = [e])
            : (!_r || !lt.includes(e)) && lt.push(e));
    }
  } else if (r && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & Dt) === 0 && (i.f ^= Dt);
  }
  return r && ((i = e), ra(i) && cf(i)), vn && Vn.has(e) ? Vn.get(e) : e.v;
}
function na(e) {
  var t = Zt;
  try {
    return (Zt = !0), e();
  } finally {
    Zt = t;
  }
}
const Ic = -7169;
function er(e, t) {
  e.f = (e.f & Ic) | t;
}
function Pc(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Ln in e) za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == 'object' && r && Ln in r && za(r);
      }
  }
}
function za(e, t = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !t.has(e)
  ) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        za(e[n], t);
      } catch {}
    const r = ef(e);
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const n = $l(r);
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
const Lc = ['touchstart', 'touchmove'];
function Bc(e) {
  return Lc.includes(e);
}
let K0 = !1;
function Mc() {
  K0 ||
    ((K0 = !0),
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
function Nf(e) {
  var t = me,
    r = ye;
  Qt(null), Sr(null);
  try {
    return e();
  } finally {
    Qt(t), Sr(r);
  }
}
function bc(e, t, r, n = r) {
  e.addEventListener(t, () => Nf(r));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    Mc();
}
const Uc = new Set(),
  Y0 = new Set();
function Hc(e, t, r, n = {}) {
  function i(a) {
    if ((n.capture || kn.call(t, a), !a.cancelBubble))
      return Nf(() => r?.call(this, a));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? Ac(() => {
          t.addEventListener(e, i, n);
        })
      : t.addEventListener(e, i, n),
    i
  );
}
function qr(e, t, r, n, i) {
  var a = { capture: n, passive: i },
    s = Hc(e, t, r, a);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    h0(() => {
      t.removeEventListener(e, s, a);
    });
}
function kn(e) {
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
    Qs(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || r;
      },
    });
    var c = me,
      h = ye;
    Qt(null), Sr(null);
    try {
      for (var u, d = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var x = a['__' + n];
          if (x != null && (!a.disabled || e.target === a))
            if (n0(x)) {
              var [m, ...S] = x;
              m.apply(a, [e, ...S]);
            } else x.call(a, e);
        } catch (y) {
          u ? d.push(y) : (u = y);
        }
        if (e.cancelBubble || p === t || p === null) break;
        a = p;
      }
      if (u) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw u;
      }
    } finally {
      (e.__root = t), delete e.currentTarget, Qt(c), Sr(h);
    }
  }
}
function Wc(e) {
  var t = document.createElement('template');
  return (t.innerHTML = e.replaceAll('<!>', '<!---->')), t.content;
}
function q0(e, t) {
  var r = ye;
  r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function Tt(e, t) {
  var r = (t & cc) !== 0,
    n = (t & uc) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Wc(a ? e : '<!>' + e)), r || (i = Ni(i)));
    var s = n || xf ? document.importNode(i, !0) : i.cloneNode(!0);
    if (r) {
      var f = Ni(s),
        l = s.lastChild;
      q0(f, l);
    } else q0(s, s);
    return s;
  };
}
function pt(e, t) {
  e !== null && e.before(t);
}
function On(e, t) {
  var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
  r !== (e.__t ??= e.nodeValue) && ((e.__t = r), (e.nodeValue = r + ''));
}
function Vc(e, t) {
  return Gc(e, t);
}
const Jr = new Map();
function Gc(
  e,
  { target: t, anchor: r, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  vc();
  var f = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var d = h[u];
        if (!f.has(d)) {
          f.add(d);
          var p = Bc(d);
          t.addEventListener(d, kn, { passive: p });
          var x = Jr.get(d);
          x === void 0
            ? (document.addEventListener(d, kn, { passive: p }), Jr.set(d, 1))
            : Jr.set(d, x + 1);
        }
      }
    };
  l(i0(Uc)), Y0.add(l);
  var o = void 0,
    c = Ec(() => {
      var h = r ?? t.appendChild(vf());
      return (
        jn(() => {
          if (a) {
            l0({});
            var u = Me;
            u.c = a;
          }
          i && (n.$$events = i), (o = e(h, n) || {}), a && c0();
        }),
        () => {
          for (var u of f) {
            t.removeEventListener(u, kn);
            var d = Jr.get(u);
            --d === 0
              ? (document.removeEventListener(u, kn), Jr.delete(u))
              : Jr.set(u, d);
          }
          Y0.delete(l), h !== r && h.parentNode?.removeChild(h);
        }
      );
    });
  return jc.set(o, c), o;
}
let jc = new WeakMap();
function Nr(e, t, [r, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = dt,
    l = r > 0 ? o0 : 0,
    o = !1;
  const c = (u, d = !0) => {
      (o = !0), h(d, u);
    },
    h = (u, d) => {
      f !== (f = u) &&
        (f
          ? (a ? ki(a) : d && (a = jn(() => d(i))),
            s &&
              Di(s, () => {
                s = null;
              }))
          : (s ? ki(s) : d && (s = jn(() => d(i, [r + 1, n]))),
            a &&
              Di(a, () => {
                a = null;
              })));
    };
  x0(() => {
    (o = !1), t(c), o || h(null, null);
  }, l);
}
function zc(e, t, r, n) {
  for (var i = [], a = t.length, s = 0; s < a; s++) d0(t[s].e, i, !0);
  var f = a > 0 && i.length === 0 && r !== null;
  if (f) {
    var l = r.parentNode;
    mc(l), l.append(r), n.clear(), mr(e, t[0].prev, t[a - 1].next);
  }
  Sf(i, () => {
    for (var o = 0; o < a; o++) {
      var c = t[o];
      f || (n.delete(c.k), mr(e, c.prev, c.next)), wr(c.e, !f);
    }
  });
}
function Xc(e, t, r, n, i, a = null) {
  var s = e,
    f = { flags: t, items: new Map(), first: null };
  {
    var l = e;
    s = l.appendChild(vf());
  }
  var o = null,
    c = !1,
    h = xc(() => {
      var u = r();
      return n0(u) ? u : u == null ? [] : i0(u);
    });
  x0(() => {
    var u = de(h),
      d = u.length;
    (c && d === 0) ||
      ((c = d === 0),
      $c(u, f, s, i, t, n, r),
      a !== null &&
        (d === 0
          ? o
            ? ki(o)
            : (o = jn(() => a(s)))
          : o !== null &&
            Di(o, () => {
              o = null;
            })),
      de(h));
  });
}
function $c(e, t, r, n, i, a, s) {
  var f = e.length,
    l = t.items,
    o = t.first,
    c = o,
    h,
    u = null,
    d = [],
    p = [],
    x,
    m,
    S,
    y;
  for (y = 0; y < f; y += 1) {
    if (((x = e[y]), (m = a(x, y)), (S = l.get(m)), S === void 0)) {
      var F = c ? c.e.nodes_start : r;
      (u = Yc(F, t, u, u === null ? t.first : u.next, x, m, y, n, i, s)),
        l.set(m, u),
        (d = []),
        (p = []),
        (c = u.next);
      continue;
    }
    if ((Kc(S, x, y), (S.e.f & ar) !== 0 && ki(S.e), S !== c)) {
      if (h !== void 0 && h.has(S)) {
        if (d.length < p.length) {
          var D = p[0],
            W;
          u = D.prev;
          var Z = d[0],
            R = d[d.length - 1];
          for (W = 0; W < d.length; W += 1) J0(d[W], D, r);
          for (W = 0; W < p.length; W += 1) h.delete(p[W]);
          mr(t, Z.prev, R.next),
            mr(t, u, Z),
            mr(t, R, D),
            (c = D),
            (u = R),
            (y -= 1),
            (d = []),
            (p = []);
        } else
          h.delete(S),
            J0(S, c, r),
            mr(t, S.prev, S.next),
            mr(t, S, u === null ? t.first : u.next),
            mr(t, u, S),
            (u = S);
        continue;
      }
      for (d = [], p = []; c !== null && c.k !== m; )
        (c.e.f & ar) === 0 && (h ??= new Set()).add(c), p.push(c), (c = c.next);
      if (c === null) continue;
      S = c;
    }
    d.push(S), (u = S), (c = S.next);
  }
  if (c !== null || h !== void 0) {
    for (var U = h === void 0 ? [] : i0(h); c !== null; )
      (c.e.f & ar) === 0 && U.push(c), (c = c.next);
    var P = U.length;
    if (P > 0) {
      var V = f === 0 ? r : null;
      zc(t, U, V, l);
    }
  }
  (ye.first = t.first && t.first.e), (ye.last = u && u.e);
}
function Kc(e, t, r, n) {
  uf(e.v, t), (e.i = r);
}
function Yc(e, t, r, n, i, a, s, f, l, o) {
  var c = (l & fc) !== 0,
    h = (l & lc) === 0,
    u = c ? (h ? kr(i, !1, !1) : Gn(i)) : i,
    d = (l & oc) === 0 ? s : Gn(s),
    p = { i: d, v: u, k: a, a: null, e: null, prev: r, next: n };
  try {
    return (
      (p.e = jn(() => f(e, u, d, o), pc)),
      (p.e.prev = r && r.e),
      (p.e.next = n && n.e),
      r === null ? (t.first = p) : ((r.next = p), (r.e.next = p.e)),
      n !== null && ((n.prev = p), (n.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function J0(e, t, r) {
  for (
    var n = e.next ? e.next.e.nodes_start : r,
      i = t ? t.e.nodes_start : r,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = ta(a);
    i.before(a), (a = s);
  }
}
function mr(e, t, r) {
  t === null ? (e.first = r) : ((t.next = r), (t.e.next = r && r.e)),
    r !== null && ((r.prev = t), (r.e.prev = t && t.e));
}
const Z0 = [
  ...` 	
\r\f \v\uFEFF`,
];
function qc(e, t, r) {
  var n = '' + e;
  if (r) {
    for (var i in r)
      if (r[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || Z0.includes(n[s - 1])) &&
          (f === n.length || Z0.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function Zr(e, t, r, n, i, a) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var f = qc(r, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = r);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
function Qr(e, t, r = t) {
  var n = ei();
  bc(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = Oa(e) ? Ra(a) : a), r(a), n && a !== (a = t()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    na(t) == null && e.value && r(Oa(e) ? Ra(e.value) : e.value),
    gf(() => {
      var i = t();
      (Oa(e) && i === Ra(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function Oa(e) {
  var t = e.type;
  return t === 'number' || t === 'range';
}
function Ra(e) {
  return e === '' ? null : +e;
}
function Jc(e) {
  return function (...t) {
    var r = t[0];
    return r.preventDefault(), e?.apply(this, t);
  };
}
function Zc(e = !1) {
  const t = Me,
    r = t.l.u;
  if (!r) return;
  let n = () => Pc(t.s);
  if (e) {
    let i = 0,
      a = {};
    const s = u0(() => {
      let f = !1;
      const l = t.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => de(s);
  }
  r.b.length &&
    gc(() => {
      Q0(t, n), Oi(r.b);
    }),
    Ga(() => {
      const i = na(() => r.m.map(ql));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    r.a.length &&
      Ga(() => {
        Q0(t, n), Oi(r.a);
      });
}
function Q0(e, t) {
  if (e.l.s) for (const r of e.l.s) de(r);
  t();
}
function m0(e, t, r) {
  if (e == null) return t(void 0), r && r(void 0), Tr;
  const n = na(() => e.subscribe(t, r));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const en = [];
function Qc(e, t) {
  return { subscribe: sn(e, t).subscribe };
}
function sn(e, t = Tr) {
  let r = null;
  const n = new Set();
  function i(f) {
    if (sf(e, f) && ((e = f), r)) {
      const l = !en.length;
      for (const o of n) o[1](), en.push(o, e);
      if (l) {
        for (let o = 0; o < en.length; o += 2) en[o][0](en[o + 1]);
        en.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = Tr) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (r = t(i, a) || Tr),
      f(e),
      () => {
        n.delete(o), n.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function eu(e, t, r) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = t.length < 2;
  return Qc(r, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      h = Tr;
    const u = () => {
        if (c) return;
        h();
        const p = t(n ? o[0] : o, s, f);
        a ? s(p) : (h = typeof p == 'function' ? p : Tr);
      },
      d = i.map((p, x) =>
        m0(
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
        Oi(d), h(), (l = !1);
      }
    );
  });
}
function tu(e) {
  let t;
  return m0(e, (r) => (t = r))(), t;
}
let Xa = Symbol();
function tn(e, t, r) {
  const n = (r[t] ??= { store: null, source: kr(void 0), unsubscribe: Tr });
  if (n.store !== e && !(Xa in r))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = Tr);
    else {
      var i = !0;
      (n.unsubscribe = m0(e, (a) => {
        i ? (n.source.v = a) : Le(n.source, a);
      })),
        (i = !1);
    }
  return e && Xa in r ? tu(e) : de(n.source);
}
function ru(e, t) {
  return e.set(t), t;
}
function nu() {
  const e = {};
  function t() {
    h0(() => {
      for (var r in e) e[r].unsubscribe();
      Qs(e, Xa, { enumerable: !1, value: !0 });
    });
  }
  return [e, t];
}
function Df(e) {
  Me === null && hc(),
    Qn && Me.l !== null
      ? iu(Me).m.push(e)
      : Ga(() => {
          const t = na(e);
          if (typeof t == 'function') return t;
        });
}
function iu(e) {
  var t = e.l;
  return (t.u ??= { a: [], b: [], m: [] });
}
const au = '5';
typeof window < 'u' && ((window.__svelte ??= {}).v ??= new Set()).add(au);
sc();
function kf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: su } = Object.prototype,
  { getPrototypeOf: _0 } = Object,
  { iterator: ia, toStringTag: If } = Symbol,
  aa = ((e) => (t) => {
    const r = su.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $t = (e) => ((e = e.toLowerCase()), (t) => aa(t) === e),
  sa = (e) => (t) => typeof t === e,
  { isArray: mn } = Array,
  zn = sa('undefined');
function fu(e) {
  return (
    e !== null &&
    !zn(e) &&
    e.constructor !== null &&
    !zn(e.constructor) &&
    vt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Pf = $t('ArrayBuffer');
function ou(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pf(e.buffer)),
    t
  );
}
const lu = sa('string'),
  vt = sa('function'),
  Lf = sa('number'),
  fa = (e) => e !== null && typeof e == 'object',
  cu = (e) => e === !0 || e === !1,
  yi = (e) => {
    if (aa(e) !== 'object') return !1;
    const t = _0(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(If in e) &&
      !(ia in e)
    );
  },
  uu = $t('Date'),
  hu = $t('File'),
  xu = $t('Blob'),
  du = $t('FileList'),
  pu = (e) => fa(e) && vt(e.pipe),
  vu = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (vt(e.append) &&
          ((t = aa(e)) === 'formdata' ||
            (t === 'object' &&
              vt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  mu = $t('URLSearchParams'),
  [_u, gu, Eu, Tu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    $t,
  ),
  wu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ti(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), mn(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), t.call(null, e[f], f, e);
  }
}
function Bf(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    i;
  for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Pr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Mf = (e) => !zn(e) && e !== Pr;
function $a() {
  const { caseless: e } = (Mf(this) && this) || {},
    t = {},
    r = (n, i) => {
      const a = (e && Bf(t, i)) || i;
      yi(t[a]) && yi(n)
        ? (t[a] = $a(t[a], n))
        : yi(n)
          ? (t[a] = $a({}, n))
          : mn(n)
            ? (t[a] = n.slice())
            : (t[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ti(arguments[n], r);
  return t;
}
const Su = (e, t, r, { allOwnKeys: n } = {}) => (
    ti(
      t,
      (i, a) => {
        r && vt(i) ? (e[a] = kf(i, r)) : (e[a] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  Au = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  yu = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  Fu = (e, t, r, n) => {
    let i, a, s;
    const f = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, e, t)) && !f[s] && ((t[s] = e[s]), (f[s] = !0));
      e = r !== !1 && _0(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Cu = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  Ou = (e) => {
    if (!e) return null;
    if (mn(e)) return e;
    let t = e.length;
    if (!Lf(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  Ru = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && _0(Uint8Array)),
  Nu = (e, t) => {
    const n = (e && e[ia]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      t.call(e, a[0], a[1]);
    }
  },
  Du = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  ku = $t('HTMLFormElement'),
  Iu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  es = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Pu = $t('RegExp'),
  bf = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    ti(r, (i, a) => {
      let s;
      (s = t(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  Lu = (e) => {
    bf(e, (t, r) => {
      if (vt(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (vt(n)) {
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
  Bu = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((a) => {
          r[a] = !0;
        });
      };
    return mn(e) ? n(e) : n(String(e).split(t)), r;
  },
  Mu = () => {},
  bu = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Uu(e) {
  return !!(e && vt(e.append) && e[If] === 'FormData' && e[ia]);
}
const Hu = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (fa(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            t[i] = n;
            const a = mn(n) ? [] : {};
            return (
              ti(n, (s, f) => {
                const l = r(s, i + 1);
                !zn(l) && (a[f] = l);
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
  Wu = $t('AsyncFunction'),
  Vu = (e) => e && (fa(e) || vt(e)) && vt(e.then) && vt(e.catch),
  Uf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            Pr.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Pr && a === r && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Pr.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    vt(Pr.postMessage),
  ),
  Gu =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Pr)
      : (typeof process < 'u' && process.nextTick) || Uf,
  ju = (e) => e != null && vt(e[ia]),
  M = {
    isArray: mn,
    isArrayBuffer: Pf,
    isBuffer: fu,
    isFormData: vu,
    isArrayBufferView: ou,
    isString: lu,
    isNumber: Lf,
    isBoolean: cu,
    isObject: fa,
    isPlainObject: yi,
    isReadableStream: _u,
    isRequest: gu,
    isResponse: Eu,
    isHeaders: Tu,
    isUndefined: zn,
    isDate: uu,
    isFile: hu,
    isBlob: xu,
    isRegExp: Pu,
    isFunction: vt,
    isStream: pu,
    isURLSearchParams: mu,
    isTypedArray: Ru,
    isFileList: du,
    forEach: ti,
    merge: $a,
    extend: Su,
    trim: wu,
    stripBOM: Au,
    inherits: yu,
    toFlatObject: Fu,
    kindOf: aa,
    kindOfTest: $t,
    endsWith: Cu,
    toArray: Ou,
    forEachEntry: Nu,
    matchAll: Du,
    isHTMLForm: ku,
    hasOwnProperty: es,
    hasOwnProp: es,
    reduceDescriptors: bf,
    freezeMethods: Lu,
    toObjectSet: Bu,
    toCamelCase: Iu,
    noop: Mu,
    toFiniteNumber: bu,
    findKey: Bf,
    global: Pr,
    isContextDefined: Mf,
    isSpecCompliantForm: Uu,
    toJSONObject: Hu,
    isAsyncFn: Wu,
    isThenable: Vu,
    setImmediate: Uf,
    asap: Gu,
    isIterable: ju,
  };
function ue(e, t, r, n, i) {
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
M.inherits(ue, Error, {
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
const Hf = ue.prototype,
  Wf = {};
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
  Wf[e] = { value: e };
});
Object.defineProperties(ue, Wf);
Object.defineProperty(Hf, 'isAxiosError', { value: !0 });
ue.from = (e, t, r, n, i, a) => {
  const s = Object.create(Hf);
  return (
    M.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    ue.call(s, e.message, t, r, n, i),
    (s.cause = e),
    (s.name = e.name),
    a && Object.assign(s, a),
    s
  );
};
const zu = null;
function Ka(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Vf(e) {
  return M.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ts(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, a) {
          return (i = Vf(i)), !r && a ? '[' + i + ']' : i;
        })
        .join(r ? '.' : '')
    : t;
}
function Xu(e) {
  return M.isArray(e) && !e.some(Ka);
}
const $u = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function oa(e, t, r) {
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
    if (M.isBoolean(p)) return p.toString();
    if (!l && M.isBlob(p))
      throw new ue('Blob is not supported. Use a Buffer instead.');
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
        (M.isArray(p) && Xu(p)) ||
        ((M.isFileList(p) || M.endsWith(x, '[]')) && (S = M.toArray(p)))
      )
        return (
          (x = Vf(x)),
          S.forEach(function (F, D) {
            !(M.isUndefined(F) || F === null) &&
              t.append(
                s === !0 ? ts([x], D, a) : s === null ? x : x + '[]',
                o(F),
              );
          }),
          !1
        );
    }
    return Ka(p) ? !0 : (t.append(ts(m, x, a), o(p)), !1);
  }
  const h = [],
    u = Object.assign($u, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: Ka,
    });
  function d(p, x) {
    if (!M.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      h.push(p),
        M.forEach(p, function (S, y) {
          (!(M.isUndefined(S) || S === null) &&
            i.call(t, S, M.isString(y) ? y.trim() : y, x, u)) === !0 &&
            d(S, x ? x.concat(y) : [y]);
        }),
        h.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError('data must be an object');
  return d(e), t;
}
function rs(e) {
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
function g0(e, t) {
  (this._pairs = []), e && oa(e, this, t);
}
const Gf = g0.prototype;
Gf.append = function (t, r) {
  this._pairs.push([t, r]);
};
Gf.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, rs);
      }
    : rs;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + '=' + r(i[1]);
    }, '')
    .join('&');
};
function Ku(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function jf(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Ku;
  M.isFunction(r) && (r = { serialize: r });
  const i = r && r.serialize;
  let a;
  if (
    (i
      ? (a = i(t, r))
      : (a = M.isURLSearchParams(t) ? t.toString() : new g0(t, r).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class ns {
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
const zf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Yu = typeof URLSearchParams < 'u' ? URLSearchParams : g0,
  qu = typeof FormData < 'u' ? FormData : null,
  Ju = typeof Blob < 'u' ? Blob : null,
  Zu = {
    isBrowser: !0,
    classes: { URLSearchParams: Yu, FormData: qu, Blob: Ju },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  E0 = typeof window < 'u' && typeof document < 'u',
  Ya = (typeof navigator == 'object' && navigator) || void 0,
  Qu =
    E0 &&
    (!Ya || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ya.product) < 0),
  eh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  th = (E0 && window.location.href) || 'http://localhost',
  rh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: E0,
        hasStandardBrowserEnv: Qu,
        hasStandardBrowserWebWorkerEnv: eh,
        navigator: Ya,
        origin: th,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  at = { ...rh, ...Zu };
function nh(e, t) {
  return oa(
    e,
    new at.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, i, a) {
          return at.isNode && M.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function ih(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function ah(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++) (a = r[n]), (t[a] = e[a]);
  return t;
}
function Xf(e) {
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
          t(r, n, i[s], a) && M.isArray(i[s]) && (i[s] = ah(i[s])),
          !f)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return (
      M.forEachEntry(e, (n, i) => {
        t(ih(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function sh(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (r || JSON.stringify)(e);
}
const ri = {
  transitional: zf,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = M.isObject(t);
      if ((a && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return i ? JSON.stringify(Xf(t)) : t;
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
          return nh(t, this.formSerializer).toString();
        if ((f = M.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return oa(
            f ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (r.setContentType('application/json', !1), sh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || ri.transitional,
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
              ? ue.from(f, ue.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: at.classes.FormData, Blob: at.classes.Blob },
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
  ri.headers[e] = {};
});
const fh = M.toObjectSet([
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
  oh = (e) => {
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
              !(!r || (t[r] && fh[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n));
          }),
      t
    );
  },
  is = Symbol('internals');
function Rn(e) {
  return e && String(e).trim().toLowerCase();
}
function Fi(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Fi) : String(e);
}
function lh(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const ch = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Na(e, t, r, n, i) {
  if (M.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!M.isString(t))) {
    if (M.isString(n)) return t.indexOf(n) !== -1;
    if (M.isRegExp(n)) return n.test(t);
  }
}
function uh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function hh(e, t) {
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
let mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(f, l, o) {
      const c = Rn(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = M.findKey(i, c);
      (!h || i[h] === void 0 || o === !0 || (o === void 0 && i[h] !== !1)) &&
        (i[h || l] = Fi(f));
    }
    const s = (f, l) => M.forEach(f, (o, c) => a(o, c, l));
    if (M.isPlainObject(t) || t instanceof this.constructor) s(t, r);
    else if (M.isString(t) && (t = t.trim()) && !ch(t)) s(oh(t), r);
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
    if (((t = Rn(t)), t)) {
      const n = M.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return lh(i);
        if (M.isFunction(r)) return r.call(this, i, n);
        if (M.isRegExp(r)) return r.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, r) {
    if (((t = Rn(t)), t)) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Na(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = Rn(s)), s)) {
        const f = M.findKey(n, s);
        f && (!r || Na(n, n[f], f, r)) && (delete n[f], (i = !0));
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
      (!t || Na(this, this[a], a, t, !0)) && (delete this[a], (i = !0));
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
          (r[s] = Fi(i)), delete r[a];
          return;
        }
        const f = t ? uh(a) : String(a).trim();
        f !== a && delete r[a], (r[f] = Fi(i)), (n[f] = !0);
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
    const n = (this[is] = this[is] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = Rn(s);
      n[f] || (hh(i, s), (n[f] = !0));
    }
    return M.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
mt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
M.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
M.freezeMethods(mt);
function Da(e, t) {
  const r = this || ri,
    n = t || r,
    i = mt.from(n.headers);
  let a = n.data;
  return (
    M.forEach(e, function (f) {
      a = f.call(r, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function $f(e) {
  return !!(e && e.__CANCEL__);
}
function _n(e, t, r) {
  ue.call(this, e ?? 'canceled', ue.ERR_CANCELED, t, r),
    (this.name = 'CanceledError');
}
M.inherits(_n, ue, { __CANCEL__: !0 });
function Kf(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new ue(
          'Request failed with status code ' + r.status,
          [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function xh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function dh(e, t) {
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
      const d = c && o - c;
      return d ? Math.round((u * 1e3) / d) : void 0;
    }
  );
}
function ph(e, t) {
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
const Mi = (e, t, r = 3) => {
    let n = 0;
    const i = dh(50, 250);
    return ph((a) => {
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
  as = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  ss =
    (e) =>
    (...t) =>
      M.asap(() => e(...t)),
  vh = at.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, at.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(at.origin),
        at.navigator && /(msie|trident)/i.test(at.navigator.userAgent),
      )
    : () => !0,
  mh = at.hasStandardBrowserEnv
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
function _h(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function gh(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Yf(e, t, r) {
  let n = !_h(t);
  return e && (n || r == !1) ? gh(e, t) : t;
}
const fs = (e) => (e instanceof mt ? { ...e } : e);
function br(e, t) {
  t = t || {};
  const r = {};
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
    headers: (o, c, h) => i(fs(o), fs(c), h, !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = l[c] || i,
        u = h(e[c], t[c], c);
      (M.isUndefined(u) && h !== f) || (r[c] = u);
    }),
    r
  );
}
const qf = (e) => {
    const t = br({}, e);
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = t;
    (t.headers = s = mt.from(s)),
      (t.url = jf(
        Yf(t.baseURL, t.url, t.allowAbsoluteUrls),
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
      if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
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
      at.hasStandardBrowserEnv &&
      (n && M.isFunction(n) && (n = n(t)), n || (n !== !1 && vh(t.url)))
    ) {
      const o = i && a && mh.read(a);
      o && s.set(i, o);
    }
    return t;
  },
  Eh = typeof XMLHttpRequest < 'u',
  Th =
    Eh &&
    function (e) {
      return new Promise(function (r, n) {
        const i = qf(e);
        let a = i.data;
        const s = mt.from(i.headers).normalize();
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
        function S() {
          if (!m) return;
          const F = mt.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            W = {
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
          Kf(
            function (R) {
              r(R), x();
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
              (n(new ue('Request aborted', ue.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new ue('Network Error', ue.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let D = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const W = i.transitional || zf;
            i.timeoutErrorMessage && (D = i.timeoutErrorMessage),
              n(
                new ue(
                  D,
                  W.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            M.forEach(s.toJSON(), function (D, W) {
              m.setRequestHeader(W, D);
            }),
          M.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([u, p] = Mi(o, !0)), m.addEventListener('progress', u)),
          l &&
            m.upload &&
            (([h, d] = Mi(l)),
            m.upload.addEventListener('progress', h),
            m.upload.addEventListener('loadend', d)),
          (i.cancelToken || i.signal) &&
            ((c = (F) => {
              m &&
                (n(!F || F.type ? new _n(null, e, m) : F),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const y = xh(i.url);
        if (y && at.protocols.indexOf(y) === -1) {
          n(new ue('Unsupported protocol ' + y + ':', ue.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  wh = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof ue ? c : new _n(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), a(new ue(`timeout ${t} of ms exceeded`, ue.ETIMEDOUT));
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
  Sh = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  Ah = async function* (e, t) {
    for await (const r of yh(e)) yield* Sh(r, t);
  },
  yh = async function* (e) {
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
  os = (e, t, r, n) => {
    const i = Ah(e, t);
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
  la =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Jf = la && typeof ReadableStream == 'function',
  Fh =
    la &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Zf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Ch =
    Jf &&
    Zf(() => {
      let e = !1;
      const t = new Request(at.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  ls = 64 * 1024,
  qa = Jf && Zf(() => M.isReadableStream(new Response('').body)),
  bi = { stream: qa && ((e) => e.body) };
la &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !bi[t] &&
        (bi[t] = M.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new ue(
                `Response type '${t}' is not supported`,
                ue.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const Oh = async (e) => {
    if (e == null) return 0;
    if (M.isBlob(e)) return e.size;
    if (M.isSpecCompliantForm(e))
      return (
        await new Request(at.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (M.isArrayBufferView(e) || M.isArrayBuffer(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ''), M.isString(e)))
      return (await Fh(e)).byteLength;
  },
  Rh = async (e, t) => {
    const r = M.toFiniteNumber(e.getContentLength());
    return r ?? Oh(t);
  },
  Nh =
    la &&
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
      } = qf(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let d = wh([i, a && a.toAbortSignal()], s),
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
          Ch &&
          r !== 'get' &&
          r !== 'head' &&
          (m = await Rh(c, n)) !== 0
        ) {
          let W = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
            Z;
          if (
            (M.isFormData(n) &&
              (Z = W.headers.get('content-type')) &&
              c.setContentType(Z),
            W.body)
          ) {
            const [R, U] = as(m, Mi(ss(l)));
            n = os(W.body, ls, R, U);
          }
        }
        M.isString(h) || (h = h ? 'include' : 'omit');
        const S = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...u,
          signal: d,
          method: r.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: S ? h : void 0,
        });
        let y = await fetch(p, u);
        const F = qa && (o === 'stream' || o === 'response');
        if (qa && (f || (F && x))) {
          const W = {};
          ['status', 'statusText', 'headers'].forEach((P) => {
            W[P] = y[P];
          });
          const Z = M.toFiniteNumber(y.headers.get('content-length')),
            [R, U] = (f && as(Z, Mi(ss(f), !0))) || [];
          y = new Response(
            os(y.body, ls, R, () => {
              U && U(), x && x();
            }),
            W,
          );
        }
        o = o || 'text';
        let D = await bi[M.findKey(bi, o) || 'text'](y, e);
        return (
          !F && x && x(),
          await new Promise((W, Z) => {
            Kf(W, Z, {
              data: D,
              headers: mt.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (S) {
        throw (
          (x && x(),
          S && S.name === 'TypeError' && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new ue('Network Error', ue.ERR_NETWORK, e, p), {
                cause: S.cause || S,
              })
            : ue.from(S, S && S.code, e, p))
        );
      }
    }),
  Ja = { http: zu, xhr: Th, fetch: Nh };
M.forEach(Ja, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const cs = (e) => `- ${e}`,
  Dh = (e) => M.isFunction(e) || e === null || e === !1,
  Qf = {
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
          !Dh(r) && ((n = Ja[(s = String(r)).toLowerCase()]), n === void 0))
        )
          throw new ue(`Unknown adapter '${s}'`);
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
              a.map(cs).join(`
`)
            : ' ' + cs(a[0])
          : 'as no adapter specified';
        throw new ue(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: Ja,
  };
function ka(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new _n(null, e);
}
function us(e) {
  return (
    ka(e),
    (e.headers = mt.from(e.headers)),
    (e.data = Da.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Qf.getAdapter(e.adapter || ri.adapter)(e).then(
      function (n) {
        return (
          ka(e),
          (n.data = Da.call(e, e.transformResponse, n)),
          (n.headers = mt.from(n.headers)),
          n
        );
      },
      function (n) {
        return (
          $f(n) ||
            (ka(e),
            n &&
              n.response &&
              ((n.response.data = Da.call(e, e.transformResponse, n.response)),
              (n.response.headers = mt.from(n.response.headers)))),
          Promise.reject(n)
        );
      },
    )
  );
}
const eo = '1.10.0',
  ca = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    ca[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const hs = {};
ca.transitional = function (t, r, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      eo +
      "] Transitional option '" +
      a +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (a, s, f) => {
    if (t === !1)
      throw new ue(
        i(s, ' has been removed' + (r ? ' in ' + r : '')),
        ue.ERR_DEPRECATED,
      );
    return (
      r &&
        !hs[s] &&
        ((hs[s] = !0),
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
ca.spelling = function (t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function kh(e, t, r) {
  if (typeof e != 'object')
    throw new ue('options must be an object', ue.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = t[a];
    if (s) {
      const f = e[a],
        l = f === void 0 || s(f, a, e);
      if (l !== !0)
        throw new ue('option ' + a + ' must be ' + l, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ue('Unknown option ' + a, ue.ERR_BAD_OPTION);
  }
}
const Ci = { assertOptions: kh, validators: ca },
  Yt = Ci.validators;
let Br = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new ns(), response: new ns() });
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
      (r = br(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 &&
      Ci.assertOptions(
        n,
        {
          silentJSONParsing: Yt.transitional(Yt.boolean),
          forcedJSONParsing: Yt.transitional(Yt.boolean),
          clarifyTimeoutError: Yt.transitional(Yt.boolean),
        },
        !1,
      ),
      i != null &&
        (M.isFunction(i)
          ? (r.paramsSerializer = { serialize: i })
          : Ci.assertOptions(
              i,
              { encode: Yt.function, serialize: Yt.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Ci.assertOptions(
        r,
        {
          baseUrl: Yt.spelling('baseURL'),
          withXsrfToken: Yt.spelling('withXSRFToken'),
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
      (r.headers = mt.concat(s, a));
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
      h = 0,
      u;
    if (!l) {
      const p = [us.bind(this), void 0];
      for (
        p.unshift.apply(p, f),
          p.push.apply(p, o),
          u = p.length,
          c = Promise.resolve(r);
        h < u;

      )
        c = c.then(p[h++], p[h++]);
      return c;
    }
    u = f.length;
    let d = r;
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
      c = us.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, u = o.length; h < u; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(t) {
    t = br(this.defaults, t);
    const r = Yf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return jf(r, t.params, t.paramsSerializer);
  }
};
M.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Br.prototype[t] = function (r, n) {
    return this.request(
      br(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
M.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (a, s, f) {
      return this.request(
        br(f || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (Br.prototype[t] = r()), (Br.prototype[t + 'Form'] = r(!0));
});
let Ih = class to {
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
        n.reason || ((n.reason = new _n(a, s, f)), r(n.reason));
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
      token: new to(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Ph(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function Lh(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Za = {
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
Object.entries(Za).forEach(([e, t]) => {
  Za[t] = e;
});
function ro(e) {
  const t = new Br(e),
    r = kf(Br.prototype.request, t);
  return (
    M.extend(r, Br.prototype, t, { allOwnKeys: !0 }),
    M.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return ro(br(e, i));
    }),
    r
  );
}
const ke = ro(ri);
ke.Axios = Br;
ke.CanceledError = _n;
ke.CancelToken = Ih;
ke.isCancel = $f;
ke.VERSION = eo;
ke.toFormData = oa;
ke.AxiosError = ue;
ke.Cancel = ke.CanceledError;
ke.all = function (t) {
  return Promise.all(t);
};
ke.spread = Ph;
ke.isAxiosError = Lh;
ke.mergeConfig = br;
ke.AxiosHeaders = mt;
ke.formToJSON = (e) => Xf(M.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = Qf.getAdapter;
ke.HttpStatusCode = Za;
ke.default = ke;
const {
  Axios: G_,
  AxiosError: j_,
  CanceledError: z_,
  isCancel: X_,
  CancelToken: $_,
  VERSION: K_,
  all: Y_,
  Cancel: q_,
  isAxiosError: J_,
  spread: Z_,
  toFormData: Q_,
  AxiosHeaders: eg,
  HttpStatusCode: tg,
  formToJSON: rg,
  getAdapter: ng,
  mergeConfig: ig,
} = ke;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Ui = {};
Ui.version = '0.18.5';
var no = 1252,
  Bh = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  io = function (e) {
    Bh.indexOf(e) != -1 && (no = e);
  };
function Mh() {
  io(1252);
}
var Xn = function (e) {
  io(e);
};
function bh() {
  Xn(1200), Mh();
}
var vi = function (t) {
    return String.fromCharCode(t);
  },
  xs = function (t) {
    return String.fromCharCode(t);
  },
  Hi,
  gr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function $n(e) {
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
      (t += gr.charAt(a) + gr.charAt(s) + gr.charAt(f) + gr.charAt(l));
  return t;
}
function cr(e) {
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
    (a = gr.indexOf(e.charAt(o++))),
      (s = gr.indexOf(e.charAt(o++))),
      (r = (a << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (f = gr.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (t += String.fromCharCode(n)),
      (l = gr.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (t += String.fromCharCode(i));
  return t;
}
var ge = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  xr = (function () {
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
function Ur(e) {
  return ge
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function ds(e) {
  return ge
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var jt = function (t) {
  return ge
    ? xr(t, 'binary')
    : t.split('').map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function ua(e) {
  if (typeof ArrayBuffer > 'u') return jt(e);
  for (
    var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
    n != e.length;
    ++n
  )
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function ni(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join('');
}
function Uh(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(e);
}
var Ze = ge
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : xr(t);
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
function Hh(e) {
  for (
    var t = [], r = 0, n = e.length + 250, i = Ur(e.length + 255), a = 0;
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
    r > n && (t.push(i.slice(0, r)), (r = 0), (i = Ur(65535)), (n = 65530));
  }
  return t.push(i.slice(0, r)), Ze(t);
}
var Bn = /\u0000/g,
  mi = /[\u0001-\u0006]/g;
function ln(e) {
  for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function zt(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Be('0', t - r.length) + r;
}
function T0(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Be(' ', t - r.length) + r;
}
function Wi(e, t) {
  var r = '' + e;
  return r.length >= t ? r : r + Be(' ', t - r.length);
}
function Wh(e, t) {
  var r = '' + Math.round(e);
  return r.length >= t ? r : Be('0', t - r.length) + r;
}
function Vh(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Be('0', t - r.length) + r;
}
var ps = Math.pow(2, 32);
function rn(e, t) {
  if (e > ps || e < -ps) return Wh(e, t);
  var r = Math.round(e);
  return Vh(r, t);
}
function Vi(e, t) {
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
var vs = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Ia = [
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
function Gh(e) {
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
var be = {
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
  ms = {
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
  jh = {
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
function Gi(e, t, r) {
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
function _i(e, t, r) {
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
      r && (a = Jh(l, s));
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
var ao = new Date(1899, 11, 31, 0, 0, 0),
  zh = ao.getTime(),
  Xh = new Date(1900, 2, 1, 0, 0, 0);
function so(e, t) {
  var r = e.getTime();
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= Xh && (r += 24 * 60 * 60 * 1e3),
    (r - (zh + (e.getTimezoneOffset() - ao.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function w0(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function $h(e) {
  return e.indexOf('E') == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function Kh(e) {
  var t = e < 0 ? 12 : 11,
    r = w0(e.toFixed(12));
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t)
    ? r
    : e.toExponential(5);
}
function Yh(e) {
  var t = w0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0'
    ? e.toPrecision(6)
    : t;
}
function qh(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
        ? (r = Kh(e))
        : t === 10
          ? (r = e.toFixed(10).substr(0, 12))
          : (r = Yh(e)),
    w0($h(r.toUpperCase()))
  );
}
function Qa(e, t) {
  switch (typeof e) {
    case 'string':
      return e;
    case 'boolean':
      return e ? 'TRUE' : 'FALSE';
    case 'number':
      return (e | 0) === e ? e.toString(10) : qh(e);
    case 'undefined':
      return '';
    case 'object':
      if (e == null) return '';
      if (e instanceof Date) return Ar(14, so(e, t && t.date1904), t);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function Jh(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function Zh(e, t, r, n) {
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
          return Ia[r.m - 1][1];
        case 5:
          return Ia[r.m - 1][0];
        default:
          return Ia[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.d), (o = t.length);
          break;
        case 3:
          return vs[r.q][0];
        default:
          return vs[r.q][1];
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
        ? zt(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (r.S + r.u))),
          a >= 60 * s && (a = 0),
          t === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = zt(a, 2 + n)),
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
  var c = o > 0 ? zt(l, o) : '';
  return c;
}
function Er(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? ',' : '') + e.substr(r, t);
  return n;
}
var fo = /%/g;
function Qh(e, t, r) {
  var n = t.replace(fo, ''),
    i = t.length - n.length;
  return sr(e, n, r * Math.pow(10, 2 * i)) + Be('%', i);
}
function e1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return sr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function oo(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + oo(e, -t);
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
var lo = /# (\?+)( ?)\/( ?)(\d+)/;
function t1(e, t, r) {
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
      ? Be(' ', e[1].length + 1 + e[4].length)
      : T0(s, e[1].length) + e[2] + '/' + e[3] + zt(f, e[4].length))
  );
}
function r1(e, t, r) {
  return r + (t === 0 ? '' : '' + t) + Be(' ', e[1].length + 2 + e[4].length);
}
var co = /^#*0*\.([0#]+)/,
  uo = /\).*[0#]/,
  ho = /\(###\) ###\\?-####/;
function ct(e) {
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
function _s(e, t) {
  var r = Math.pow(10, t);
  return '' + Math.round(e * r) / r;
}
function gs(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t);
  return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function n1(e, t) {
  return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length
    ? 1
    : 0;
}
function i1(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e);
}
function Pt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(uo)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? Pt('n', n, r) : '(' + Pt('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return e1(e, t, r);
  if (t.indexOf('%') !== -1) return Qh(e, t, r);
  if (t.indexOf('E') !== -1) return oo(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + Pt(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + rn(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = rn(r, 0)),
      i === '0' && (i = ''),
      i.length > t.length ? i : ct(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(lo))) return t1(a, l, o);
  if (t.match(/^#+0+$/)) return o + rn(l, t.length - t.indexOf('0'));
  if ((a = t.match(co)))
    return (
      (i = _s(r, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + ct(a[1]))
        .replace(/\.$/, '.' + ct(a[1]))
        .replace(/\.(\d*)$/, function (p, x) {
          return '.' + x + Be('0', ct(a[1]).length - x.length);
        })),
      t.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((t = t.replace(/^#+([0.])/, '$1')), (a = t.match(/^(0*)\.(#*)$/))))
    return (
      o +
      _s(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + Er(rn(l, 0));
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? '-' + Pt(e, t, -r)
      : Er('' + (Math.floor(r) + n1(r, a[1].length))) +
          '.' +
          zt(gs(r, a[1].length), a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return Pt(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = ln(Pt(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      ln(
        ln(t.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(ho))
    return (
      (i = Pt(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Gi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = sr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Wi(f[2], s)),
      c.length < a[4].length &&
        (c = ct(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Gi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? T0(f[1], s) + a[2] + '/' + a[3] + Wi(f[2], s)
          : Be(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = rn(r, 0)),
      t.length <= i.length ? i : ct(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = t.indexOf('.') - s,
      u = t.length - i.length - h;
    return ct(t.substr(0, h) + i + t.substr(t.length - u));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = gs(r, a[1].length)),
      r < 0
        ? '-' + Pt(e, t, -r)
        : Er(i1(r))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (p) {
              return '00,' + (p.length < 3 ? zt(0, 3 - p.length) : '') + p;
            }) +
          '.' +
          zt(s, a[1].length)
    );
  switch (t) {
    case '###,##0.00':
      return Pt(e, '#,##0.00', r);
    case '###,###':
    case '##,###':
    case '#,###':
      var d = Er(rn(l, 0));
      return d !== '0' ? o + d : '';
    case '###,###.00':
      return Pt(e, '###,##0.00', r).replace(/^0\./, '.');
    case '#,###.00':
      return Pt(e, '#,##0.00', r).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + t + '|');
}
function a1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return sr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function s1(e, t, r) {
  var n = t.replace(fo, ''),
    i = t.length - n.length;
  return sr(e, n, r * Math.pow(10, 2 * i)) + Be('%', i);
}
function xo(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + xo(e, -t);
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
function qt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(uo)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? qt('n', n, r) : '(' + qt('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return a1(e, t, r);
  if (t.indexOf('%') !== -1) return s1(e, t, r);
  if (t.indexOf('E') !== -1) return xo(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + qt(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + zt(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = '' + r),
      r === 0 && (i = ''),
      i.length > t.length ? i : ct(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(lo))) return r1(a, l, o);
  if (t.match(/^#+0+$/)) return o + zt(l, t.length - t.indexOf('0'));
  if ((a = t.match(co)))
    return (
      (i = ('' + r)
        .replace(/^([^\.]+)$/, '$1.' + ct(a[1]))
        .replace(/\.$/, '.' + ct(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (p, x) {
        return '.' + x + Be('0', ct(a[1]).length - x.length);
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
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + Er('' + l);
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? '-' + qt(e, t, -r) : Er('' + r) + '.' + Be('0', a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return qt(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = ln(qt(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      ln(
        ln(t.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(ho))
    return (
      (i = qt(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Gi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = sr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Wi(f[2], s)),
      c.length < a[4].length &&
        (c = ct(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Gi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? T0(f[1], s) + a[2] + '/' + a[3] + Wi(f[2], s)
          : Be(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = '' + r),
      t.length <= i.length ? i : ct(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = t.indexOf('.') - s,
      u = t.length - i.length - h;
    return ct(t.substr(0, h) + i + t.substr(t.length - u));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? '-' + qt(e, t, -r)
      : Er('' + r)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (p) {
            return '00,' + (p.length < 3 ? zt(0, 3 - p.length) : '') + p;
          }) +
          '.' +
          zt(0, a[1].length);
  switch (t) {
    case '###,###':
    case '##,###':
    case '#,###':
      var d = Er('' + l);
      return d !== '0' ? o + d : '';
    default:
      if (t.match(/\.[0#?]*$/))
        return (
          qt(e, t.slice(0, t.lastIndexOf('.')), r) +
          ct(t.slice(t.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + t + '|');
}
function sr(e, t, r) {
  return (r | 0) === r ? qt(e, t, r) : Pt(e, t, r);
}
function f1(e) {
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
var po = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function vo(e) {
  for (var t = 0, r = '', n = ''; t < e.length; )
    switch ((r = e.charAt(t))) {
      case 'G':
        Vi(e, t) && (t += 6), t++;
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
        if (n.match(po)) return !0;
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
function o1(e, t, r, n) {
  for (
    var i = [], a = '', s = 0, f = '', l = 't', o, c, h, u = 'H';
    s < e.length;

  )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!Vi(e, s))
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
        (i[i.length] = { t: 'T', v: t }), ++s;
        break;
      case 'B':
      case 'b':
        if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
          if (o == null && ((o = _i(t, r, e.charAt(s + 1) === '2')), o == null))
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
        if (t < 0 || (o == null && ((o = _i(t, r)), o == null))) return '';
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
          (o == null && (o = _i(t, r)),
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
        if (a.match(po)) {
          if (o == null && ((o = _i(t, r)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            vo(e) || (i[i.length] = { t: 't', v: a }));
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
    D;
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
        (i[s].v = Zh(i[s].t.charCodeAt(0), i[s].v, o, S)), (i[s].t = 't');
        break;
      case 'n':
      case '?':
        for (
          D = s + 1;
          i[D] != null &&
          ((f = i[D].t) === '?' ||
            f === 'D' ||
            ((f === ' ' || f === 't') &&
              i[D + 1] != null &&
              (i[D + 1].t === '?' ||
                (i[D + 1].t === 't' && i[D + 1].v === '/'))) ||
            (i[s].t === '(' && (f === ' ' || f === 'n' || f === ')')) ||
            (f === 't' &&
              (i[D].v === '/' ||
                (i[D].v === ' ' && i[D + 1] != null && i[D + 1].t == '?'))));

        )
          (i[s].v += i[D].v), (i[D] = { v: '', t: ';' }), ++D;
        (F += i[s].v), (s = D - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = Qa(t, r));
        break;
    }
  var W = '',
    Z,
    R;
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((Z = t < 0 && F.charCodeAt(0) === 45 ? -t : t), (R = sr('n', F, Z)))
      : ((Z = t < 0 && n > 1 ? -t : t),
        (R = sr('n', F, Z)),
        Z < 0 &&
          i[0] &&
          i[0].t == 't' &&
          ((R = R.substr(1)), (i[0].v = '-' + i[0].v))),
      (D = R.length - 1);
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
          (D >= i[s].v.length - 1
            ? ((D -= i[s].v.length), (i[s].v = R.substr(D + 1, i[s].v.length)))
            : D < 0
              ? (i[s].v = '')
              : ((i[s].v = R.substr(0, D + 1)), (D = -1)),
          (i[s].t = 't'),
          (P = s));
      D >= 0 && P < i.length && (i[P].v = R.substr(0, D + 1) + i[P].v);
    } else if (U !== i.length && R.indexOf('E') === -1) {
      for (D = R.indexOf('.') - 1, s = U; s >= 0; --s)
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
            D >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (W = R.charAt(D--) + W);
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
      for (
        D >= 0 && P < i.length && (i[P].v = R.substr(0, D + 1) + i[P].v),
          D = R.indexOf('.') + 1,
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
            D < R.length && (W += R.charAt(D++));
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((Z = n > 1 && t < 0 && s > 0 && i[s - 1].v === '-' ? -t : t),
      (i[s].v = sr(i[s].t, i[s].v, Z)),
      (i[s].t = 't'));
  var V = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (V += i[s].v);
  return V;
}
var Es = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Ts(e, t) {
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
function l1(e, t) {
  var r = f1(e),
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
    var s = r[0].match(Es),
      f = r[1].match(Es);
    return Ts(t, s)
      ? [n, r[0]]
      : Ts(t, f)
        ? [n, r[1]]
        : [n, r[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function Ar(e, t, r) {
  r == null && (r = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && r.dateNF
        ? (n = r.dateNF)
        : (n = (r.table != null ? r.table : be)[e]),
        n == null && (n = (r.table && r.table[ms[e]]) || be[ms[e]]),
        n == null && (n = jh[e] || 'General');
      break;
  }
  if (Vi(n, 0)) return Qa(t, r);
  t instanceof Date && (t = so(t, r.date1904));
  var i = l1(n, t);
  if (Vi(i[1])) return Qa(t, r);
  if (t === !0) t = 'TRUE';
  else if (t === !1) t = 'FALSE';
  else if (t === '' || t == null) return '';
  return o1(i[1], t, r, i[0]);
}
function mo(e, t) {
  if (typeof t != 'number') {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (be[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (be[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return (be[t] = e), t;
}
function ha(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && mo(e[t], t);
}
function xa() {
  be = Gh();
}
var _o = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function c1(e) {
  var t = typeof e == 'number' ? be[e] : e;
  return (t = t.replace(_o, '(\\d+)')), new RegExp('^' + t + '$');
}
function u1(e, t, r) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (t.match(_o) || []).forEach(function (h, u) {
    var d = parseInt(r[u + 1], 10);
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
var h1 = (function () {
    var e = {};
    e.version = '1.2.0';
    function t() {
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
    var r = t();
    function n(R) {
      var U = 0,
        P = 0,
        V = 0,
        z = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (V = 0; V != 256; ++V) z[V] = R[V];
      for (V = 0; V != 256; ++V)
        for (P = R[V], U = 256 + V; U < 4096; U += 256)
          P = z[U] = (P >>> 8) ^ R[P & 255];
      var K = [];
      for (V = 1; V != 16; ++V)
        K[V - 1] =
          typeof Int32Array < 'u'
            ? z.subarray(V * 256, V * 256 + 256)
            : z.slice(V * 256, V * 256 + 256);
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
      d = i[8],
      p = i[9],
      x = i[10],
      m = i[11],
      S = i[12],
      y = i[13],
      F = i[14];
    function D(R, U) {
      for (var P = U ^ -1, V = 0, z = R.length; V < z; )
        P = (P >>> 8) ^ r[(P ^ R.charCodeAt(V++)) & 255];
      return ~P;
    }
    function W(R, U) {
      for (var P = U ^ -1, V = R.length - 15, z = 0; z < V; )
        P =
          F[R[z++] ^ (P & 255)] ^
          y[R[z++] ^ ((P >> 8) & 255)] ^
          S[R[z++] ^ ((P >> 16) & 255)] ^
          m[R[z++] ^ (P >>> 24)] ^
          x[R[z++]] ^
          p[R[z++]] ^
          d[R[z++]] ^
          u[R[z++]] ^
          h[R[z++]] ^
          c[R[z++]] ^
          o[R[z++]] ^
          l[R[z++]] ^
          f[R[z++]] ^
          s[R[z++]] ^
          a[R[z++]] ^
          r[R[z++]];
      for (V += 15; z < V; ) P = (P >>> 8) ^ r[(P ^ R[z++]) & 255];
      return ~P;
    }
    function Z(R, U) {
      for (var P = U ^ -1, V = 0, z = R.length, K = 0, re = 0; V < z; )
        (K = R.charCodeAt(V++)),
          K < 128
            ? (P = (P >>> 8) ^ r[(P ^ K) & 255])
            : K < 2048
              ? ((P = (P >>> 8) ^ r[(P ^ (192 | ((K >> 6) & 31))) & 255]),
                (P = (P >>> 8) ^ r[(P ^ (128 | (K & 63))) & 255]))
              : K >= 55296 && K < 57344
                ? ((K = (K & 1023) + 64),
                  (re = R.charCodeAt(V++) & 1023),
                  (P = (P >>> 8) ^ r[(P ^ (240 | ((K >> 8) & 7))) & 255]),
                  (P = (P >>> 8) ^ r[(P ^ (128 | ((K >> 2) & 63))) & 255]),
                  (P =
                    (P >>> 8) ^
                    r[(P ^ (128 | ((re >> 6) & 15) | ((K & 3) << 4))) & 255]),
                  (P = (P >>> 8) ^ r[(P ^ (128 | (re & 63))) & 255]))
                : ((P = (P >>> 8) ^ r[(P ^ (224 | ((K >> 12) & 15))) & 255]),
                  (P = (P >>> 8) ^ r[(P ^ (128 | ((K >> 6) & 63))) & 255]),
                  (P = (P >>> 8) ^ r[(P ^ (128 | (K & 63))) & 255]));
      return ~P;
    }
    return (e.table = r), (e.bstr = D), (e.buf = W), (e.str = Z), e;
  })(),
  Ae = (function () {
    var t = {};
    t.version = '1.2.1';
    function r(v, E) {
      for (
        var _ = v.split('/'),
          g = E.split('/'),
          T = 0,
          w = 0,
          k = Math.min(_.length, g.length);
        T < k;
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
      var k = E & 31;
      E >>>= 5;
      var H = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(H), g.setSeconds(k << 1), g
      );
    }
    function f(v) {
      Ot(v, 0);
      for (var E = {}, _ = 0; v.l <= v.length - 4; ) {
        var g = v.read_shift(2),
          T = v.read_shift(2),
          w = v.l + T,
          k = {};
        switch (g) {
          case 21589:
            (_ = v.read_shift(1)),
              _ & 1 && (k.mtime = v.read_shift(4)),
              T > 5 &&
                (_ & 2 && (k.atime = v.read_shift(4)),
                _ & 4 && (k.ctime = v.read_shift(4))),
              k.mtime && (k.mt = new Date(k.mtime * 1e3));
            break;
        }
        (v.l = w), (E[g] = k);
      }
      return E;
    }
    var l;
    function o() {
      return l || (l = {});
    }
    function c(v, E) {
      if (v[0] == 80 && v[1] == 75) return pi(v, E);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return Hl(v, E);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        k = 0,
        H = 0,
        N = 0,
        I = [],
        L = v.slice(0, 512);
      Ot(L, 0);
      var Y = h(L);
      switch (((_ = Y[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (Y[1] == 0) return pi(v, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = v.slice(0, g)), Ot(L, 28));
      var te = v.slice(0, g);
      u(L, _);
      var ae = L.read_shift(4, 'i');
      if (_ === 3 && ae !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + ae);
      (L.l += 4),
        (k = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (H = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (N = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var J = -1, ne = 0;
        ne < 109 && ((J = L.read_shift(4, 'i')), !(J < 0));
        ++ne
      )
        I[ne] = J;
      var ce = d(v, g);
      m(N, w, ce, g, I);
      var Ie = y(ce, k, I, g);
      (Ie[k].name = '!Directory'),
        T > 0 && H !== re && (Ie[H].name = '!MiniFAT'),
        (Ie[I[0]].name = '!FAT'),
        (Ie.fat_addrs = I),
        (Ie.ssz = g);
      var Pe = {},
        it = [],
        yn = [],
        Fn = [];
      F(k, Ie, ce, it, T, Pe, yn, H), p(yn, Fn, it), it.shift();
      var Cn = { FileIndex: yn, FullPaths: Fn };
      return E && E.raw && (Cn.raw = { header: te, sectors: ce }), Cn;
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
        var g = 0, T = 0, w = 0, k = 0, H = 0, N = _.length, I = [], L = [];
        g < N;
        ++g
      )
        (I[g] = L[g] = g), (E[g] = _[g]);
      for (; H < L.length; ++H)
        (g = L[H]),
          (T = v[g].L),
          (w = v[g].R),
          (k = v[g].C),
          I[g] === g &&
            (T !== -1 && I[T] !== T && (I[g] = I[T]),
            w !== -1 && I[w] !== w && (I[g] = I[w])),
          k !== -1 && (I[k] = g),
          T !== -1 &&
            g != I[g] &&
            ((I[T] = I[g]), L.lastIndexOf(T) < H && L.push(T)),
          w !== -1 &&
            g != I[g] &&
            ((I[w] = I[g]), L.lastIndexOf(w) < H && L.push(w));
      for (g = 1; g < N; ++g)
        I[g] === g &&
          (w !== -1 && I[w] !== w
            ? (I[g] = I[w])
            : T !== -1 && I[T] !== T && (I[g] = I[T]));
      for (g = 1; g < N; ++g)
        if (v[g].type !== 0) {
          if (((H = g), H != I[H]))
            do (H = I[H]), (E[g] = E[H] + '/' + E[g]);
            while (H !== 0 && I[H] !== -1 && H != I[H]);
          I[g] = -1;
        }
      for (E[0] += '/', g = 1; g < N; ++g) v[g].type !== 2 && (E[g] += '/');
    }
    function x(v, E, _) {
      for (var g = v.start, T = v.size, w = [], k = g; _ && T > 0 && k >= 0; )
        w.push(E.slice(k * K, k * K + K)), (T -= K), (k = Ir(_, k * 4));
      return w.length === 0 ? b(0) : Ze(w).slice(0, v.size);
    }
    function m(v, E, _, g, T) {
      var w = re;
      if (v === re) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var k = _[v],
          H = (g >>> 2) - 1;
        if (!k) return;
        for (var N = 0; N < H && (w = Ir(k, N * 4)) !== re; ++N) T.push(w);
        m(Ir(k, g - 4), E - 1, _, g, T);
      }
    }
    function S(v, E, _, g, T) {
      var w = [],
        k = [];
      T || (T = []);
      var H = g - 1,
        N = 0,
        I = 0;
      for (N = E; N >= 0; ) {
        (T[N] = !0), (w[w.length] = N), k.push(v[N]);
        var L = _[Math.floor((N * 4) / g)];
        if (((I = (N * 4) & H), g < 4 + I))
          throw new Error('FAT boundary crossed: ' + N + ' 4 ' + g);
        if (!v[L]) break;
        N = Ir(v[L], I);
      }
      return { nodes: w, data: Rs([k]) };
    }
    function y(v, E, _, g) {
      var T = v.length,
        w = [],
        k = [],
        H = [],
        N = [],
        I = g - 1,
        L = 0,
        Y = 0,
        te = 0,
        ae = 0;
      for (L = 0; L < T; ++L)
        if (((H = []), (te = L + E), te >= T && (te -= T), !k[te])) {
          N = [];
          var J = [];
          for (Y = te; Y >= 0; ) {
            (J[Y] = !0), (k[Y] = !0), (H[H.length] = Y), N.push(v[Y]);
            var ne = _[Math.floor((Y * 4) / g)];
            if (((ae = (Y * 4) & I), g < 4 + ae))
              throw new Error('FAT boundary crossed: ' + Y + ' 4 ' + g);
            if (!v[ne] || ((Y = Ir(v[ne], ae)), J[Y])) break;
          }
          w[te] = { nodes: H, data: Rs([N]) };
        }
      return w;
    }
    function F(v, E, _, g, T, w, k, H) {
      for (
        var N = 0, I = g.length ? 2 : 0, L = E[v].data, Y = 0, te = 0, ae;
        Y < L.length;
        Y += 128
      ) {
        var J = L.slice(Y, Y + 128);
        Ot(J, 64), (te = J.read_shift(2)), (ae = C0(J, 0, te - I)), g.push(ae);
        var ne = {
            name: ae,
            type: J.read_shift(1),
            color: J.read_shift(1),
            L: J.read_shift(4, 'i'),
            R: J.read_shift(4, 'i'),
            C: J.read_shift(4, 'i'),
            clsid: J.read_shift(16),
            state: J.read_shift(4, 'i'),
            start: 0,
            size: 0,
          },
          ce =
            J.read_shift(2) +
            J.read_shift(2) +
            J.read_shift(2) +
            J.read_shift(2);
        ce !== 0 && (ne.ct = D(J, J.l - 8));
        var Ie =
          J.read_shift(2) + J.read_shift(2) + J.read_shift(2) + J.read_shift(2);
        Ie !== 0 && (ne.mt = D(J, J.l - 8)),
          (ne.start = J.read_shift(4, 'i')),
          (ne.size = J.read_shift(4, 'i')),
          ne.size < 0 &&
            ne.start < 0 &&
            ((ne.size = ne.type = 0), (ne.start = re), (ne.name = '')),
          ne.type === 5
            ? ((N = ne.start), T > 0 && N !== re && (E[N].name = '!StreamData'))
            : ne.size >= 4096
              ? ((ne.storage = 'fat'),
                E[ne.start] === void 0 &&
                  (E[ne.start] = S(_, ne.start, E.fat_addrs, E.ssz)),
                (E[ne.start].name = ne.name),
                (ne.content = E[ne.start].data.slice(0, ne.size)))
              : ((ne.storage = 'minifat'),
                ne.size < 0
                  ? (ne.size = 0)
                  : N !== re &&
                    ne.start !== re &&
                    E[N] &&
                    (ne.content = x(ne, E[N].data, (E[H] || {}).data))),
          ne.content && Ot(ne.content, 0),
          (w[ae] = ne),
          k.push(ne);
      }
    }
    function D(v, E) {
      return new Date(
        ((Nt(v, E + 4) / 1e7) * Math.pow(2, 32) +
          Nt(v, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function W(v, E) {
      return o(), c(l.readFileSync(v), E);
    }
    function Z(v, E) {
      var _ = E && E.type;
      switch (
        (_ || (ge && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return W(v, E);
        case 'base64':
          return c(jt(cr(v)), E);
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
      if (!Ae.find(v, '/' + E)) {
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
        var k = new Date(1987, 1, 19),
          H = 0,
          N = Object.create ? Object.create(null) : {},
          I = [];
        for (T = 0; T < v.FullPaths.length; ++T)
          (N[v.FullPaths[T]] = !0),
            v.FileIndex[T].type !== 0 &&
              I.push([v.FullPaths[T], v.FileIndex[T]]);
        for (T = 0; T < I.length; ++T) {
          var L = n(I[T][0]);
          (g = N[L]),
            g ||
              (I.push([
                L,
                {
                  name: i(L).replace('/', ''),
                  type: 1,
                  clsid: Ge,
                  ct: k,
                  mt: k,
                  content: null,
                },
              ]),
              (N[L] = !0));
        }
        for (
          I.sort(function (ae, J) {
            return r(ae[0], J[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            T = 0;
          T < I.length;
          ++T
        )
          (v.FullPaths[T] = I[T][0]), (v.FileIndex[T] = I[T][1]);
        for (T = 0; T < I.length; ++T) {
          var Y = v.FileIndex[T],
            te = v.FullPaths[T];
          if (
            ((Y.name = i(te).replace('/', '')),
            (Y.L = Y.R = Y.C = -(Y.color = 1)),
            (Y.size = Y.content ? Y.content.length : 0),
            (Y.start = 0),
            (Y.clsid = Y.clsid || Ge),
            T === 0)
          )
            (Y.C = I.length > 1 ? 1 : -1), (Y.size = 0), (Y.type = 5);
          else if (te.slice(-1) == '/') {
            for (H = T + 1; H < I.length && n(v.FullPaths[H]) != te; ++H);
            for (
              Y.C = H >= I.length ? -1 : H, H = T + 1;
              H < I.length && n(v.FullPaths[H]) != n(te);
              ++H
            );
            (Y.R = H >= I.length ? -1 : H), (Y.type = 1);
          } else
            n(v.FullPaths[T + 1] || '') == n(te) && (Y.R = T + 1), (Y.type = 2);
        }
      }
    }
    function V(v, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return Wl(v, _);
      switch ((P(v), _.fileType)) {
        case 'zip':
          return Sa(v, _);
      }
      var g = (function (ae) {
          for (var J = 0, ne = 0, ce = 0; ce < ae.FileIndex.length; ++ce) {
            var Ie = ae.FileIndex[ce];
            if (Ie.content) {
              var Pe = Ie.content.length;
              Pe > 0 &&
                (Pe < 4096 ? (J += (Pe + 63) >> 6) : (ne += (Pe + 511) >> 9));
            }
          }
          for (
            var it = (ae.FullPaths.length + 3) >> 2,
              yn = (J + 7) >> 3,
              Fn = (J + 127) >> 7,
              Cn = yn + ne + it + Fn,
              Rr = (Cn + 127) >> 7,
              ya = Rr <= 109 ? 0 : Math.ceil((Rr - 109) / 127);
            (Cn + Rr + ya + 127) >> 7 > Rr;

          )
            ya = ++Rr <= 109 ? 0 : Math.ceil((Rr - 109) / 127);
          var nr = [1, ya, Rr, Fn, it, ne, J, 0];
          return (
            (ae.FileIndex[0].size = J << 6),
            (nr[7] =
              (ae.FileIndex[0].start =
                nr[0] + nr[1] + nr[2] + nr[3] + nr[4] + nr[5]) +
              ((nr[6] + 7) >> 3)),
            nr
          );
        })(v),
        T = b(g[7] << 9),
        w = 0,
        k = 0;
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, le[w]);
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
        for (k = 0; k < g[1]; ++k) {
          for (; w < 236 + k * 127; ++w)
            T.write_shift(-4, w < g[2] ? g[1] + w : -1);
          T.write_shift(-4, k === g[1] - 1 ? re : k + 1);
        }
      var H = function (ae) {
        for (k += ae; w < k - 1; ++w) T.write_shift(-4, w + 1);
        ae && (++w, T.write_shift(-4, re));
      };
      for (k = w = 0, k += g[1]; w < k; ++w) T.write_shift(-4, Ne.DIFSECT);
      for (k += g[2]; w < k; ++w) T.write_shift(-4, Ne.FATSECT);
      H(g[3]), H(g[4]);
      for (var N = 0, I = 0, L = v.FileIndex[0]; N < v.FileIndex.length; ++N)
        (L = v.FileIndex[N]),
          L.content &&
            ((I = L.content.length),
            !(I < 4096) && ((L.start = k), H((I + 511) >> 9)));
      for (H((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, Ne.ENDOFCHAIN);
      for (k = w = 0, N = 0; N < v.FileIndex.length; ++N)
        (L = v.FileIndex[N]),
          L.content &&
            ((I = L.content.length),
            !(!I || I >= 4096) && ((L.start = k), H((I + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, Ne.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var Y = v.FullPaths[w];
        if (!Y || Y.length === 0) {
          for (N = 0; N < 17; ++N) T.write_shift(4, 0);
          for (N = 0; N < 3; ++N) T.write_shift(4, -1);
          for (N = 0; N < 12; ++N) T.write_shift(4, 0);
          continue;
        }
        (L = v.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : re);
        var te = (w === 0 && _.root) || L.name;
        if (
          ((I = 2 * (te.length + 1)),
          T.write_shift(64, te, 'utf16le'),
          T.write_shift(2, I),
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
          if (((T.l = (L.start + 1) << 9), ge && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 511; ++N) T.write_shift(1, 0);
          }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (ge && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 63; ++N) T.write_shift(1, 0);
          }
      if (ge) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function z(v, E) {
      var _ = v.FullPaths.map(function (N) {
          return N.toUpperCase();
        }),
        g = _.map(function (N) {
          var I = N.split('/');
          return I[I.length - (N.slice(-1) == '/' ? 2 : 1)];
        }),
        T = !1;
      E.charCodeAt(0) === 47
        ? ((T = !0), (E = _[0].slice(0, -1) + E))
        : (T = E.indexOf('/') !== -1);
      var w = E.toUpperCase(),
        k = T === !0 ? _.indexOf(w) : g.indexOf(w);
      if (k !== -1) return v.FileIndex[k];
      var H = !w.match(mi);
      for (
        w = w.replace(Bn, ''), H && (w = w.replace(mi, '!')), k = 0;
        k < _.length;
        ++k
      )
        if (
          (H ? _[k].replace(mi, '!') : _[k]).replace(Bn, '') == w ||
          (H ? g[k].replace(mi, '!') : g[k]).replace(Bn, '') == w
        )
          return v.FileIndex[k];
      return null;
    }
    var K = 64,
      re = -2,
      _e = 'd0cf11e0a1b11ae1',
      le = [208, 207, 17, 224, 161, 177, 26, 225],
      Ge = '00000000000000000000000000000000',
      Ne = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: re,
        FREESECT: -1,
        HEADER_SIGNATURE: _e,
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
    function wt(v, E, _) {
      o();
      var g = V(v, _);
      l.writeFileSync(E, g);
    }
    function Ue(v) {
      for (var E = new Array(v.length), _ = 0; _ < v.length; ++_)
        E[_] = String.fromCharCode(v[_]);
      return E.join('');
    }
    function xt(v, E) {
      var _ = V(v, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : Ue(_);
        case 'base64':
          return $n(typeof _ == 'string' ? _ : Ue(_));
        case 'buffer':
          if (ge) return Buffer.isBuffer(_) ? _ : xr(_);
        case 'array':
          return typeof _ == 'string' ? jt(_) : _;
      }
      return _;
    }
    var rt;
    function A(v) {
      try {
        var E = v.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          rt = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function B(v, E) {
      if (!rt) return xi(v, E);
      var _ = rt.InflateRaw,
        g = new _(),
        T = g._processChunk(v.slice(v.l), g._finishFlushFlag);
      return (v.l += g.bytesRead), T;
    }
    function O(v) {
      return rt ? rt.deflateRawSync(v) : li(v);
    }
    var C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      j = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      se = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function fe(v) {
      var E =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var X = typeof Uint8Array < 'u', q = X ? new Uint8Array(256) : [], xe = 0;
      xe < 256;
      ++xe
    )
      q[xe] = fe(xe);
    function oe(v, E) {
      var _ = q[v & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | q[(v >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | q[(v >> 16) & 255]), _ >>> (24 - E)));
    }
    function Fe(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 6 ? 0 : v[g + 1] << 8)) >>> _) & 3;
    }
    function pe(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 5 ? 0 : v[g + 1] << 8)) >>> _) & 7;
    }
    function St(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 4 ? 0 : v[g + 1] << 8)) >>> _) & 15;
    }
    function De(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 3 ? 0 : v[g + 1] << 8)) >>> _) & 31;
    }
    function ie(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 1 ? 0 : v[g + 1] << 8)) >>> _) & 127;
    }
    function nt(v, E, _) {
      var g = E & 7,
        T = E >>> 3,
        w = (1 << _) - 1,
        k = v[T] >>> g;
      return (
        _ < 8 - g ||
          ((k |= v[T + 1] << (8 - g)), _ < 16 - g) ||
          ((k |= v[T + 2] << (16 - g)), _ < 24 - g) ||
          (k |= v[T + 3] << (24 - g)),
        k & w
      );
    }
    function Wt(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (v[T] |= (_ & 7) << g)
          : ((v[T] |= (_ << g) & 255), (v[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function rr(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (v[T] |= _), E + 1;
    }
    function At(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (v[T] |= _ & 255), (_ >>>= 8), (v[T + 1] = _), E + 8;
    }
    function dr(v, E, _) {
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
    function Or(v, E) {
      var _ = v.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return v;
      if (ge) {
        var w = ds(g);
        if (v.copy) v.copy(w);
        else for (; T < v.length; ++T) w[T] = v[T];
        return w;
      } else if (X) {
        var k = new Uint8Array(g);
        if (k.set) k.set(v);
        else for (; T < _; ++T) k[T] = v[T];
        return k;
      }
      return (v.length = g), v;
    }
    function It(v) {
      for (var E = new Array(v), _ = 0; _ < v; ++_) E[_] = 0;
      return E;
    }
    function pr(v, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        k = 0,
        H = 0,
        N = v.length,
        I = X ? new Uint16Array(32) : It(32);
      for (w = 0; w < 32; ++w) I[w] = 0;
      for (w = N; w < _; ++w) v[w] = 0;
      N = v.length;
      var L = X ? new Uint16Array(N) : It(N);
      for (w = 0; w < N; ++w) I[(T = v[w])]++, g < T && (g = T), (L[w] = 0);
      for (I[0] = 0, w = 1; w <= g; ++w) I[w + 16] = H = (H + I[w - 1]) << 1;
      for (w = 0; w < N; ++w) (H = v[w]), H != 0 && (L[w] = I[H + 16]++);
      var Y = 0;
      for (w = 0; w < N; ++w)
        if (((Y = v[w]), Y != 0))
          for (
            H = oe(L[w], g) >> (g - Y), k = (1 << (g + 4 - Y)) - 1;
            k >= 0;
            --k
          )
            E[H | (k << Y)] = (Y & 15) | (w << 4);
      return g;
    }
    var yt = X ? new Uint16Array(512) : It(512),
      Kr = X ? new Uint16Array(32) : It(32);
    if (!X) {
      for (var Kt = 0; Kt < 512; ++Kt) yt[Kt] = 0;
      for (Kt = 0; Kt < 32; ++Kt) Kr[Kt] = 0;
    }
    (function () {
      for (var v = [], E = 0; E < 32; E++) v.push(5);
      pr(v, Kr, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      pr(_, yt, 288);
    })();
    var ga = (function () {
      for (
        var E = X ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < se.length - 1;
        ++_
      )
        for (; g < se[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = X ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < j.length - 1; ++_)
        for (; g < j[_ + 1]; ++g) T[g] = _;
      function w(H, N) {
        for (var I = 0; I < H.length; ) {
          var L = Math.min(65535, H.length - I),
            Y = I + L == H.length;
          for (
            N.write_shift(1, +Y),
              N.write_shift(2, L),
              N.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            N[N.l++] = H[I++];
        }
        return N.l;
      }
      function k(H, N) {
        for (
          var I = 0, L = 0, Y = X ? new Uint16Array(32768) : [];
          L < H.length;

        ) {
          var te = Math.min(65535, H.length - L);
          if (te < 10) {
            for (
              I = Wt(N, I, +(L + te == H.length)),
                I & 7 && (I += 8 - (I & 7)),
                N.l = (I / 8) | 0,
                N.write_shift(2, te),
                N.write_shift(2, ~te & 65535);
              te-- > 0;

            )
              N[N.l++] = H[L++];
            I = N.l * 8;
            continue;
          }
          I = Wt(N, I, +(L + te == H.length) + 2);
          for (var ae = 0; te-- > 0; ) {
            var J = H[L];
            ae = ((ae << 5) ^ J) & 32767;
            var ne = -1,
              ce = 0;
            if (
              (ne = Y[ae]) &&
              ((ne |= L & -32768), ne > L && (ne -= 32768), ne < L)
            )
              for (; H[ne + ce] == H[L + ce] && ce < 250; ) ++ce;
            if (ce > 2) {
              (J = T[ce]),
                J <= 22
                  ? (I = At(N, I, q[J + 1] >> 1) - 1)
                  : (At(N, I, 3), (I += 5), At(N, I, q[J - 23] >> 5), (I += 3));
              var Ie = J < 8 ? 0 : (J - 4) >> 2;
              Ie > 0 && (dr(N, I, ce - j[J]), (I += Ie)),
                (J = E[L - ne]),
                (I = At(N, I, q[J] >> 3)),
                (I -= 3);
              var Pe = J < 4 ? 0 : (J - 2) >> 1;
              Pe > 0 && (dr(N, I, L - ne - se[J]), (I += Pe));
              for (var it = 0; it < ce; ++it)
                (Y[ae] = L & 32767), (ae = ((ae << 5) ^ H[L]) & 32767), ++L;
              te -= ce - 1;
            } else
              J <= 143 ? (J = J + 48) : (I = rr(N, I, 1)),
                (I = At(N, I, q[J])),
                (Y[ae] = L & 32767),
                ++L;
          }
          I = At(N, I, 0) - 1;
        }
        return (N.l = ((I + 7) / 8) | 0), N.l;
      }
      return function (N, I) {
        return N.length < 8 ? w(N, I) : k(N, I);
      };
    })();
    function li(v) {
      var E = b(50 + Math.floor(v.length * 1.1)),
        _ = ga(v, E);
      return E.slice(0, _);
    }
    var Sn = X ? new Uint16Array(32768) : It(32768),
      ci = X ? new Uint16Array(32768) : It(32768),
      ui = X ? new Uint16Array(128) : It(128),
      hi = 1,
      An = 1;
    function Ea(v, E) {
      var _ = De(v, E) + 257;
      E += 5;
      var g = De(v, E) + 1;
      E += 5;
      var T = St(v, E) + 4;
      E += 4;
      for (
        var w = 0,
          k = X ? new Uint8Array(19) : It(19),
          H = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          N = 1,
          I = X ? new Uint8Array(8) : It(8),
          L = X ? new Uint8Array(8) : It(8),
          Y = k.length,
          te = 0;
        te < T;
        ++te
      )
        (k[C[te]] = w = pe(v, E)), N < w && (N = w), I[w]++, (E += 3);
      var ae = 0;
      for (I[0] = 0, te = 1; te <= N; ++te) L[te] = ae = (ae + I[te - 1]) << 1;
      for (te = 0; te < Y; ++te) (ae = k[te]) != 0 && (H[te] = L[ae]++);
      var J = 0;
      for (te = 0; te < Y; ++te)
        if (((J = k[te]), J != 0)) {
          ae = q[H[te]] >> (8 - J);
          for (var ne = (1 << (7 - J)) - 1; ne >= 0; --ne)
            ui[ae | (ne << J)] = (J & 7) | (te << 3);
        }
      var ce = [];
      for (N = 1; ce.length < _ + g; )
        switch (((ae = ui[ie(v, E)]), (E += ae & 7), (ae >>>= 3))) {
          case 16:
            for (w = 3 + Fe(v, E), E += 2, ae = ce[ce.length - 1]; w-- > 0; )
              ce.push(ae);
            break;
          case 17:
            for (w = 3 + pe(v, E), E += 3; w-- > 0; ) ce.push(0);
            break;
          case 18:
            for (w = 11 + ie(v, E), E += 7; w-- > 0; ) ce.push(0);
            break;
          default:
            ce.push(ae), N < ae && (N = ae);
            break;
        }
      var Ie = ce.slice(0, _),
        Pe = ce.slice(_);
      for (te = _; te < 286; ++te) Ie[te] = 0;
      for (te = g; te < 30; ++te) Pe[te] = 0;
      return (hi = pr(Ie, Sn, 286)), (An = pr(Pe, ci, 30)), E;
    }
    function Ta(v, E) {
      if (v[0] == 3 && !(v[1] & 3)) return [Ur(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = ds(E || 1 << 18),
          w = 0,
          k = T.length >>> 0,
          H = 0,
          N = 0;
        (g & 1) == 0;

      ) {
        if (((g = pe(v, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((H = 9), (N = 5))
            : ((_ = Ea(v, _)), (H = hi), (N = An));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var I = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), I > 0))
            for (
              !E && k < w + I && ((T = Or(T, w + I)), (k = T.length));
              I-- > 0;

            )
              (T[w++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && k < w + 32767 && ((T = Or(T, w + 32767)), (k = T.length));
          var L = nt(v, _, H),
            Y = g >>> 1 == 1 ? yt[L] : Sn[L];
          if (((_ += Y & 15), (Y >>>= 4), ((Y >>> 8) & 255) === 0)) T[w++] = Y;
          else {
            if (Y == 256) break;
            Y -= 257;
            var te = Y < 8 ? 0 : (Y - 4) >> 2;
            te > 5 && (te = 0);
            var ae = w + j[Y];
            te > 0 && ((ae += nt(v, _, te)), (_ += te)),
              (L = nt(v, _, N)),
              (Y = g >>> 1 == 1 ? Kr[L] : ci[L]),
              (_ += Y & 15),
              (Y >>>= 4);
            var J = Y < 4 ? 0 : (Y - 2) >> 1,
              ne = se[Y];
            for (
              J > 0 && ((ne += nt(v, _, J)), (_ += J)),
                !E && k < ae && ((T = Or(T, ae + 100)), (k = T.length));
              w < ae;

            )
              (T[w] = T[w - ne]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function xi(v, E) {
      var _ = v.slice(v.l || 0),
        g = Ta(_, E);
      return (v.l += g[1]), g[0];
    }
    function di(v, E) {
      if (v) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function pi(v, E) {
      var _ = v;
      Ot(_, 0);
      var g = [],
        T = [],
        w = { FileIndex: g, FullPaths: T };
      R(w, { root: E.root });
      for (
        var k = _.length - 4;
        (_[k] != 80 || _[k + 1] != 75 || _[k + 2] != 5 || _[k + 3] != 6) &&
        k >= 0;

      )
        --k;
      (_.l = k + 4), (_.l += 4);
      var H = _.read_shift(2);
      _.l += 6;
      var N = _.read_shift(4);
      for (_.l = N, k = 0; k < H; ++k) {
        _.l += 20;
        var I = _.read_shift(4),
          L = _.read_shift(4),
          Y = _.read_shift(2),
          te = _.read_shift(2),
          ae = _.read_shift(2);
        _.l += 8;
        var J = _.read_shift(4),
          ne = f(_.slice(_.l + Y, _.l + Y + te));
        _.l += Y + te + ae;
        var ce = _.l;
        (_.l = J + 4), wa(_, I, L, w, ne), (_.l = ce);
      }
      return w;
    }
    function wa(v, E, _, g, T) {
      v.l += 2;
      var w = v.read_shift(2),
        k = v.read_shift(2),
        H = s(v);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var N = v.read_shift(4),
          I = v.read_shift(4),
          L = v.read_shift(4),
          Y = v.read_shift(2),
          te = v.read_shift(2),
          ae = '',
          J = 0;
        J < Y;
        ++J
      )
        ae += String.fromCharCode(v[v.l++]);
      if (te) {
        var ne = f(v.slice(v.l, v.l + te));
        (ne[21589] || {}).mt && (H = ne[21589].mt),
          ((T || {})[21589] || {}).mt && (H = T[21589].mt);
      }
      v.l += te;
      var ce = v.slice(v.l, v.l + I);
      switch (k) {
        case 8:
          ce = B(v, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + k);
      }
      var Ie = !1;
      w & 8 &&
        ((N = v.read_shift(4)),
        N == 134695760 && ((N = v.read_shift(4)), (Ie = !0)),
        (I = v.read_shift(4)),
        (L = v.read_shift(4))),
        I != E && di(Ie, 'Bad compressed size: ' + E + ' != ' + I),
        L != _ && di(Ie, 'Bad uncompressed size: ' + _ + ' != ' + L),
        Aa(g, ae, ce, { unsafe: !0, mt: H });
    }
    function Sa(v, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = b(1),
        k = _.compression ? 8 : 0,
        H = 0,
        N = 0,
        I = 0,
        L = 0,
        Y = 0,
        te = v.FullPaths[0],
        ae = te,
        J = v.FileIndex[0],
        ne = [],
        ce = 0;
      for (N = 1; N < v.FullPaths.length; ++N)
        if (
          ((ae = v.FullPaths[N].slice(te.length)),
          (J = v.FileIndex[N]),
          !(!J.size || !J.content || ae == 'Sh33tJ5'))
        ) {
          var Ie = L,
            Pe = b(ae.length);
          for (I = 0; I < ae.length; ++I)
            Pe.write_shift(1, ae.charCodeAt(I) & 127);
          (Pe = Pe.slice(0, Pe.l)), (ne[Y] = h1.buf(J.content, 0));
          var it = J.content;
          k == 8 && (it = O(it)),
            (w = b(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, H),
            w.write_shift(2, k),
            J.mt ? a(w, J.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ne[Y]),
            w.write_shift(4, it.length),
            w.write_shift(4, J.content.length),
            w.write_shift(2, Pe.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += Pe.length),
            g.push(Pe),
            (L += it.length),
            g.push(it),
            (w = b(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, H),
            w.write_shift(2, k),
            w.write_shift(4, 0),
            w.write_shift(-4, ne[Y]),
            w.write_shift(4, it.length),
            w.write_shift(4, J.content.length),
            w.write_shift(2, Pe.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Ie),
            (ce += w.l),
            T.push(w),
            (ce += Pe.length),
            T.push(Pe),
            ++Y;
        }
      return (
        (w = b(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, Y),
        w.write_shift(2, Y),
        w.write_shift(4, ce),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        Ze([Ze(g), Ze(T), w])
      );
    }
    var Oe = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function je(v, E) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && Oe[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && Oe[g[1]]))
        ? Oe[g[1]]
        : 'application/octet-stream';
    }
    function ot(v) {
      for (var E = $n(v), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function Yr(v) {
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
        for (var k = 0; k < w.length; ) {
          var H = 76,
            N = w.slice(k, k + H);
          N.charAt(H - 1) == '='
            ? H--
            : N.charAt(H - 2) == '='
              ? (H -= 2)
              : N.charAt(H - 3) == '=' && (H -= 3),
            (N = w.slice(k, k + H)),
            (k += H),
            k < w.length && (N += '='),
            _.push(N);
        }
      }
      return _.join(`\r
`);
    }
    function bl(v) {
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
    function Ul(v, E, _) {
      for (var g = '', T = '', w = '', k, H = 0; H < 10; ++H) {
        var N = E[H];
        if (!N || N.match(/^\s*$/)) break;
        var I = N.match(/^(.*?):\s*([^\s].*)$/);
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
          k = jt(cr(E.slice(H).join('')));
          break;
        case 'quoted-printable':
          k = bl(E.slice(H));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = Aa(v, g.slice(_.length), k, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function Hl(v, E) {
      if (Ue(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (ge && Buffer.isBuffer(v) ? v.toString('binary') : Ue(v)).split(`\r
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
      var k = (g[1] || '').match(/boundary="(.*?)"/);
      if (!k) throw new Error('MAD cannot find boundary');
      var H = '--' + (k[1] || ''),
        N = [],
        I = [],
        L = { FileIndex: N, FullPaths: I };
      R(L);
      var Y,
        te = 0;
      for (T = 0; T < g.length; ++T) {
        var ae = g[T];
        (ae !== H && ae !== H + '--') ||
          (te++ && Ul(L, g.slice(Y, T), _), (Y = T));
      }
      return L;
    }
    function Wl(v, E) {
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
          k = w,
          H = v.FileIndex[0],
          N = 1;
        N < v.FullPaths.length;
        ++N
      )
        if (
          ((k = v.FullPaths[N].slice(w.length)),
          (H = v.FileIndex[N]),
          !(!H.size || !H.content || k == 'Sh33tJ5'))
        ) {
          k = k
            .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (ce) {
              return '_x' + ce.charCodeAt(0).toString(16) + '_';
            })
            .replace(/[\u0080-\uFFFF]/g, function (ce) {
              return '_u' + ce.charCodeAt(0).toString(16) + '_';
            });
          for (
            var I = H.content,
              L = ge && Buffer.isBuffer(I) ? I.toString('binary') : Ue(I),
              Y = 0,
              te = Math.min(1024, L.length),
              ae = 0,
              J = 0;
            J <= te;
            ++J
          )
            (ae = L.charCodeAt(J)) >= 32 && ae < 128 && ++Y;
          var ne = Y >= (te * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + k,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (ne ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + je(H, k)),
            T.push(''),
            T.push(ne ? Yr(L) : ot(L));
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
    function Vl(v) {
      var E = {};
      return R(E, v), E;
    }
    function Aa(v, E, _, g) {
      var T = g && g.unsafe;
      T || R(v);
      var w = !T && Ae.find(v, E);
      if (!w) {
        var k = v.FullPaths[0];
        E.slice(0, k.length) == k
          ? (k = E)
          : (k.slice(-1) != '/' && (k += '/'),
            (k = (k + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          v.FileIndex.push(w),
          v.FullPaths.push(k),
          T || Ae.utils.cfb_gc(v);
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
    function Gl(v, E) {
      R(v);
      var _ = Ae.find(v, E);
      if (_) {
        for (var g = 0; g < v.FileIndex.length; ++g)
          if (v.FileIndex[g] == _)
            return v.FileIndex.splice(g, 1), v.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function jl(v, E, _) {
      R(v);
      var g = Ae.find(v, E);
      if (g) {
        for (var T = 0; T < v.FileIndex.length; ++T)
          if (v.FileIndex[T] == g)
            return (v.FileIndex[T].name = i(_)), (v.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function zl(v) {
      P(v, !0);
    }
    return (
      (t.find = z),
      (t.read = Z),
      (t.parse = c),
      (t.write = xt),
      (t.writeFile = wt),
      (t.utils = {
        cfb_new: Vl,
        cfb_add: Aa,
        cfb_del: Gl,
        cfb_mov: jl,
        cfb_gc: zl,
        ReadShift: bn,
        CheckField: Bo,
        prep_blob: Ot,
        bconcat: Ze,
        use_zlib: A,
        _deflateRaw: li,
        _inflateRaw: xi,
        consts: Ne,
      }),
      t
    );
  })();
function x1(e) {
  return typeof e == 'string' ? ua(e) : Array.isArray(e) ? Uh(e) : e;
}
function ii(e, t, r) {
  if (typeof Deno < 'u') {
    if (r && typeof t == 'string')
      switch (r) {
        case 'utf8':
          t = new TextEncoder(r).encode(t);
          break;
        case 'binary':
          t = ua(t);
          break;
        default:
          throw new Error('Unsupported encoding ' + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == 'utf8' ? Yn(t) : t;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e);
  if (typeof Blob < 'u') {
    var i = new Blob([x1(n)], { type: 'application/octet-stream' });
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
        Array.isArray(t) && (t = ni(t)),
        f.write(t),
        f.close(),
        t
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function tt(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function ws(e, t) {
  for (var r = [], n = tt(e), i = 0; i !== n.length; ++i)
    r[e[n[i]][t]] == null && (r[e[n[i]][t]] = n[i]);
  return r;
}
function S0(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function da(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function d1(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var ji = new Date(1899, 11, 30, 0, 0, 0);
function gt(e, t) {
  var r = e.getTime(),
    n = ji.getTime() + (e.getTimezoneOffset() - ji.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var go = new Date(),
  p1 = ji.getTime() + (go.getTimezoneOffset() - ji.getTimezoneOffset()) * 6e4,
  Ss = go.getTimezoneOffset();
function Eo(e) {
  var t = new Date();
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + p1),
    t.getTimezoneOffset() !== Ss &&
      t.setTime(t.getTime() + (t.getTimezoneOffset() - Ss) * 6e4),
    t
  );
}
var As = new Date('2017-02-19T19:06:09.000Z'),
  To = isNaN(As.getFullYear()) ? new Date('2/19/17') : As,
  v1 = To.getFullYear() == 2017;
function ht(e, t) {
  var r = new Date(e);
  if (v1)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    );
  if (e instanceof Date) return e;
  if (To.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
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
function pa(e, t) {
  if (ge && Buffer.isBuffer(e)) return e.toString('binary');
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
function Et(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Et(e[r]));
  return t;
}
function Be(e, t) {
  for (var r = ''; r.length < t; ) r += e;
  return r;
}
function fr(e) {
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
var m1 = [
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
function Kn(e) {
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
      s.length > 3 && m1.indexOf(s) == -1)
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
function he(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == 'string') {
      var n;
      return ge ? (n = xr(r)) : (n = Hh(r)), Ae.utils.cfb_add(e, t, n);
    }
    Ae.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function A0() {
  return Ae.utils.cfb_new();
}
var Ve = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  _1 = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  y0 = S0(_1),
  F0 = /[&<>'"]/g,
  g1 = /[\u0000-\u0008\u000b-\u001f]/g;
function we(e) {
  var t = e + '';
  return t
    .replace(F0, function (r) {
      return y0[r];
    })
    .replace(g1, function (r) {
      return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function ys(e) {
  return we(e).replace(/ /g, '_x0020_');
}
var wo = /[\u0000-\u001f]/g;
function E1(e) {
  var t = e + '';
  return t
    .replace(F0, function (r) {
      return y0[r];
    })
    .replace(/\n/g, '<br/>')
    .replace(wo, function (r) {
      return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function T1(e) {
  var t = e + '';
  return t
    .replace(F0, function (r) {
      return y0[r];
    })
    .replace(wo, function (r) {
      return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function w1(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function S1(e) {
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
function Pa(e) {
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
function Fs(e) {
  var t = Ur(2 * e.length),
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
function Cs(e) {
  return xr(e, 'binary').toString('utf8');
}
var gi = 'foo bar bazâð£',
  Mn = (ge && ((Cs(gi) == Pa(gi) && Cs) || (Fs(gi) == Pa(gi) && Fs))) || Pa,
  Yn = ge
    ? function (e) {
        return xr(e, 'utf8').toString('binary');
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
  A1 = (function () {
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
  So = /(^\s|\s$|\n)/;
function Qe(e, t) {
  return (
    '<' +
    e +
    (t.match(So) ? ' xml:space="preserve"' : '') +
    '>' +
    t +
    '</' +
    e +
    '>'
  );
}
function qn(e) {
  return tt(e)
    .map(function (t) {
      return ' ' + t + '="' + e[t] + '"';
    })
    .join('');
}
function Q(e, t, r) {
  return (
    '<' +
    e +
    (r != null ? qn(r) : '') +
    (t != null
      ? (t.match(So) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e
      : '/') +
    '>'
  );
}
function e0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, '');
  } catch (r) {
    if (t) throw r;
  }
  return '';
}
function y1(e, t) {
  switch (typeof e) {
    case 'string':
      var r = Q('vt:lpwstr', we(e));
      return (r = r.replace(/&quot;/g, '_x0022_')), r;
    case 'number':
      return Q((e | 0) == e ? 'vt:i4' : 'vt:r8', we(String(e)));
    case 'boolean':
      return Q('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return Q('vt:filetime', e0(e));
  throw new Error('Unable to serialize ' + e);
}
var $e = {
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
  gn = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  Rt = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function F1(e, t) {
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
function C1(e, t, r) {
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
var Os = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += r)
          t.push.apply(t, e[0][n].slice(i, i + r));
    return t;
  },
  Rs = ge
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : xr(t);
              }),
            )
          : Os(e);
      }
    : Os,
  Ns = function (e, t, r) {
    for (var n = [], i = t; i < r; i += 2)
      n.push(String.fromCharCode(In(e, i)));
    return n.join('').replace(Bn, '');
  },
  C0 = ge
    ? function (e, t, r) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', t, r).replace(Bn, '')
          : Ns(e, t, r);
      }
    : Ns,
  Ds = function (e, t, r) {
    for (var n = [], i = t; i < t + r; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  Ao = ge
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : Ds(e, t, r);
      }
    : Ds,
  ks = function (e, t, r) {
    for (var n = [], i = t; i < r; i++) n.push(String.fromCharCode(fn(e, i)));
    return n.join('');
  },
  ai = ge
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : ks(t, r, n);
      }
    : ks,
  yo = function (e, t) {
    var r = Nt(e, t);
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : '';
  },
  Fo = yo,
  Co = function (e, t) {
    var r = Nt(e, t);
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : '';
  },
  Oo = Co,
  Ro = function (e, t) {
    var r = 2 * Nt(e, t);
    return r > 0 ? ai(e, t + 4, t + 4 + r - 1) : '';
  },
  No = Ro,
  Do = function (t, r) {
    var n = Nt(t, r);
    return n > 0 ? C0(t, r + 4, r + 4 + n) : '';
  },
  ko = Do,
  Io = function (e, t) {
    var r = Nt(e, t);
    return r > 0 ? ai(e, t + 4, t + 4 + r) : '';
  },
  Po = Io,
  Lo = function (e, t) {
    return F1(e, t);
  },
  zi = Lo,
  O0 = function (t) {
    return (
      Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  };
ge &&
  ((Fo = function (t, r) {
    if (!Buffer.isBuffer(t)) return yo(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (Oo = function (t, r) {
    if (!Buffer.isBuffer(t)) return Co(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (No = function (t, r) {
    if (!Buffer.isBuffer(t)) return Ro(t, r);
    var n = 2 * t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n - 1);
  }),
  (ko = function (t, r) {
    if (!Buffer.isBuffer(t)) return Do(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n);
  }),
  (Po = function (t, r) {
    if (!Buffer.isBuffer(t)) return Io(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf8', r + 4, r + 4 + n);
  }),
  (zi = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Lo(t, r);
  }),
  (O0 = function (t) {
    return (
      Buffer.isBuffer(t) ||
      Array.isArray(t) ||
      (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  }));
var fn = function (e, t) {
    return e[t];
  },
  In = function (e, t) {
    return e[t + 1] * 256 + e[t];
  },
  O1 = function (e, t) {
    var r = e[t + 1] * 256 + e[t];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  Nt = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
  },
  Ir = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
  },
  R1 = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
  };
function bn(e, t) {
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
      if (((o = this.l), ge && Buffer.isBuffer(this)))
        r = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (r += String.fromCharCode(In(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      r = ai(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (r = C0(this, this.l, this.l + e));
      break;
    case 'wstr':
      return bn.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (r = Fo(this, this.l)), (e = 4 + Nt(this, this.l));
      break;
    case 'lpstr-cp':
      (r = Oo(this, this.l)), (e = 4 + Nt(this, this.l));
      break;
    case 'lpwstr':
      (r = No(this, this.l)), (e = 4 + 2 * Nt(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + Nt(this, this.l)), (r = ko(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + Nt(this, this.l)),
        (r = Po(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, r = ''; (s = fn(this, this.l + e++)) !== 0; ) a.push(vi(s));
      r = a.join('');
      break;
    case '_wstr':
      for (e = 0, r = ''; (s = In(this, this.l + e)) !== 0; )
        a.push(vi(s)), (e += 2);
      (e += 2), (r = a.join(''));
      break;
    case 'dbcs-cont':
      for (r = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = fn(this, o)),
            (this.l = o + 1),
            (f = bn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(vi(In(this, o))), (o += 2);
      }
      (r = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (r = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = fn(this, o)),
            (this.l = o + 1),
            (f = bn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(vi(fn(this, o))), (o += 1);
      }
      r = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = fn(this, this.l)), this.l++, n;
        case 2:
          return (n = (t === 'i' ? O1 : In)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return t === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? Ir : R1)(this, this.l)), (this.l += 4), n)
            : ((i = Nt(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (t === 'f')
            return (
              e == 8
                ? (i = zi(this, this.l))
                : (i = zi(
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
          r = Ao(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var N1 = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255);
  },
  D1 = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255);
  },
  k1 = function (e, t, r) {
    (e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255);
  };
function I1(e, t, r) {
  var n = 0,
    i = 0;
  if (r === 'dbcs') {
    for (i = 0; i != t.length; ++i) k1(this, t.charCodeAt(i), this.l + 2 * i);
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
        (n = 4), N1(this, t, this.l);
        break;
      case 8:
        if (((n = 8), r === 'f')) {
          C1(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), D1(this, t, this.l);
        break;
    }
  return (this.l += n), this;
}
function Bo(e, t) {
  var r = Ao(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r);
  this.l += e.length >> 1;
}
function Ot(e, t) {
  (e.l = t), (e.read_shift = bn), (e.chk = Bo), (e.write_shift = I1);
}
function tr(e, t) {
  e.l += t;
}
function b(e) {
  var t = Ur(e);
  return Ot(t, 0), t;
}
function _t() {
  var e = [],
    t = ge ? 256 : 2048,
    r = function (o) {
      var c = b(o);
      return Ot(c, 0), c;
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
      return i(), Ze(e);
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
    n || (n = Fm[i].p || (r || []).length || 0),
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
    n > 0 && O0(r) && e.push(r);
  }
}
function Un(e, t, r) {
  var n = Et(e);
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
function Is(e, t, r) {
  var n = Et(e);
  return (n.s = Un(n.s, t.s, r)), (n.e = Un(n.e, t.s, r)), n;
}
function Hn(e, t) {
  if (e.cRel && e.c < 0) for (e = Et(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Et(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = Se(e);
  return (
    !e.cRel && e.cRel != null && (r = B1(r)),
    !e.rRel && e.rRel != null && (r = P1(r)),
    r
  );
}
function La(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        st(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        st(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (t.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        et(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        et(e.e.r)
      : Hn(e.s, t.biff) + ':' + Hn(e.e, t.biff);
}
function R0(e) {
  return parseInt(L1(e), 10) - 1;
}
function et(e) {
  return '' + (e + 1);
}
function P1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function L1(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function N0(e) {
  for (var t = M1(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function st(e) {
  if (e < 0) throw new Error('invalid column ' + e);
  var t = '';
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode(((e - 1) % 26) + 65) + t;
  return t;
}
function B1(e) {
  return e.replace(/^([A-Z])/, '$$$1');
}
function M1(e) {
  return e.replace(/^\$([A-Z])/, '$1');
}
function b1(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function Ke(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (t = 10 * t + (i - 48))
      : i >= 65 && i <= 90 && (r = 26 * r + (i - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function Se(e) {
  for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function kt(e) {
  var t = e.indexOf(':');
  return t == -1
    ? { s: Ke(e), e: Ke(e) }
    : { s: Ke(e.slice(0, t)), e: Ke(e.slice(t + 1)) };
}
function We(e, t) {
  return typeof t > 'u' || typeof t == 'number'
    ? We(e.s, e.e)
    : (typeof e != 'string' && (e = Se(e)),
      typeof t != 'string' && (t = Se(t)),
      e == t ? e : e + ':' + t);
}
function Re(e) {
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
function Ps(e, t) {
  var r = e.t == 'd' && t instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Ar(e.z, r ? gt(t) : t));
    } catch {}
  try {
    return (e.w = Ar((e.XF || {}).numFmtId || (r ? 14 : 0), r ? gt(t) : t));
  } catch {
    return '' + t;
  }
}
function ur(e, t, r) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
        e.t == 'e' ? si[e.v] || e.v : t == null ? Ps(e, e.v) : Ps(e, t));
}
function Gr(e, t) {
  var r = t && t.sheet ? t.sheet : 'Sheet1',
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function Mo(e, t, r) {
  var n = r || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Ke(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = Re(a['!ref']);
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
          var d = { v: t[h][u] },
            p = s + h,
            x = f + u;
          if (
            (o.s.r > p && (o.s.r = p),
            o.s.c > x && (o.s.c = x),
            o.e.r < p && (o.e.r = p),
            o.e.c < x && (o.e.c = x),
            t[h][u] &&
              typeof t[h][u] == 'object' &&
              !Array.isArray(t[h][u]) &&
              !(t[h][u] instanceof Date))
          )
            d = t[h][u];
          else if (
            (Array.isArray(d.v) && ((d.f = t[h][u][1]), (d.v = d.v[0])),
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
                  ? ((d.z = n.dateNF || be[14]),
                    n.cellDates
                      ? ((d.t = 'd'), (d.w = Ar(d.z, gt(d.v))))
                      : ((d.t = 'n'), (d.v = gt(d.v)), (d.w = Ar(d.z, d.v))))
                  : (d.t = 's');
          if (i)
            a[p] || (a[p] = []),
              a[p][x] && a[p][x].z && (d.z = a[p][x].z),
              (a[p][x] = d);
          else {
            var m = Se({ c: x, r: p });
            a[m] && a[m].z && (d.z = a[m].z), (a[m] = d);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = We(o)), a;
}
function En(e, t) {
  return Mo(null, e, t);
}
function U1(e) {
  return e.read_shift(4, 'i');
}
function Xt(e, t) {
  return t || (t = b(4)), t.write_shift(4, e), t;
}
function ft(e) {
  var t = e.read_shift(4);
  return t === 0 ? '' : e.read_shift(t, 'dbcs');
}
function Ye(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = b(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
function H1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function W1(e, t) {
  return t || (t = b(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function D0(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    i = ft(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(H1(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + t), s;
}
function V1(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = b(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    Ye(e.t, t),
    r ? t.slice(0, t.l) : t
  );
}
var G1 = D0;
function j1(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = b(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    Ye(e.t, t),
    t.write_shift(4, 1),
    W1({}, t),
    r ? t.slice(0, t.l) : t
  );
}
function Ht(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r };
}
function jr(e, t) {
  return (
    t == null && (t = b(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
function zr(e) {
  var t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t };
}
function Xr(e, t) {
  return (
    t == null && (t = b(4)),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
var z1 = ft,
  bo = Ye;
function k0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs');
}
function Xi(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = b(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
var X1 = ft,
  t0 = k0,
  I0 = Xi;
function Uo(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? zi([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Ir(t, 0) >> 2;
  return r ? i / 100 : i;
}
function Ho(e, t) {
  t == null && (t = b(4));
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
function Wo(e) {
  var t = { s: {}, e: {} };
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  );
}
function $1(e, t) {
  return (
    t || (t = b(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  );
}
var $r = Wo,
  Tn = $1;
function wn(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function Hr(e, t) {
  return (t || b(8)).write_shift(8, e, 'f');
}
function K1(e) {
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
      var o = nx[i];
      o && (t.rgb = zs(o));
      break;
    case 2:
      t.rgb = zs([s, f, l]);
      break;
    case 3:
      t.theme = i;
      break;
  }
  return a != 0 && (t.tint = a > 0 ? a / 32767 : a / 32768), t;
}
function $i(e, t) {
  if ((t || (t = b(8)), !e || e.auto))
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
function Y1(e) {
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
function q1(e, t) {
  t || (t = b(2));
  var r =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Vo = 2,
  Ct = 3,
  Ei = 11,
  Ki = 19,
  Ti = 64,
  J1 = 65,
  Z1 = 71,
  Q1 = 4108,
  ex = 4126,
  Je = 80,
  Ls = {
    1: { n: 'CodePage', t: Vo },
    2: { n: 'Category', t: Je },
    3: { n: 'PresentationFormat', t: Je },
    4: { n: 'ByteCount', t: Ct },
    5: { n: 'LineCount', t: Ct },
    6: { n: 'ParagraphCount', t: Ct },
    7: { n: 'SlideCount', t: Ct },
    8: { n: 'NoteCount', t: Ct },
    9: { n: 'HiddenCount', t: Ct },
    10: { n: 'MultimediaClipCount', t: Ct },
    11: { n: 'ScaleCrop', t: Ei },
    12: { n: 'HeadingPairs', t: Q1 },
    13: { n: 'TitlesOfParts', t: ex },
    14: { n: 'Manager', t: Je },
    15: { n: 'Company', t: Je },
    16: { n: 'LinksUpToDate', t: Ei },
    17: { n: 'CharacterCount', t: Ct },
    19: { n: 'SharedDoc', t: Ei },
    22: { n: 'HyperlinksChanged', t: Ei },
    23: { n: 'AppVersion', t: Ct, p: 'version' },
    24: { n: 'DigSig', t: J1 },
    26: { n: 'ContentType', t: Je },
    27: { n: 'ContentStatus', t: Je },
    28: { n: 'Language', t: Je },
    29: { n: 'Version', t: Je },
    255: {},
    2147483648: { n: 'Locale', t: Ki },
    2147483651: { n: 'Behavior', t: Ki },
    1919054434: {},
  },
  Bs = {
    1: { n: 'CodePage', t: Vo },
    2: { n: 'Title', t: Je },
    3: { n: 'Subject', t: Je },
    4: { n: 'Author', t: Je },
    5: { n: 'Keywords', t: Je },
    6: { n: 'Comments', t: Je },
    7: { n: 'Template', t: Je },
    8: { n: 'LastAuthor', t: Je },
    9: { n: 'RevNumber', t: Je },
    10: { n: 'EditTime', t: Ti },
    11: { n: 'LastPrinted', t: Ti },
    12: { n: 'CreatedDate', t: Ti },
    13: { n: 'ModifiedDate', t: Ti },
    14: { n: 'PageCount', t: Ct },
    15: { n: 'WordCount', t: Ct },
    16: { n: 'CharCount', t: Ct },
    17: { n: 'Thumbnail', t: Z1 },
    18: { n: 'Application', t: Je },
    19: { n: 'DocSecurity', t: Ct },
    255: {},
    2147483648: { n: 'Locale', t: Ki },
    2147483651: { n: 'Behavior', t: Ki },
    1919054434: {},
  };
function tx(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  });
}
var rx = tx([
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
  nx = Et(rx),
  si = {
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
  ix = {
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
  wi = {
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
function Go() {
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
function jo(e, t) {
  var r = d1(ix),
    n = [],
    i;
  (n[n.length] = Ve),
    (n[n.length] = Q('Types', null, {
      xmlns: $e.CT,
      'xmlns:xsd': $e.xsd,
      'xmlns:xsi': $e.xsi,
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
        return Q('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var a = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((i = e[l][0]),
        (n[n.length] = Q('Override', null, {
          PartName: (i[0] == '/' ? '' : '/') + i,
          ContentType: wi[l][t.bookType] || wi[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = Q('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: wi[l][t.bookType] || wi[l].xlsx,
        });
      });
    },
    f = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = Q('Override', null, {
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
var ve = {
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
function zo(e) {
  var t = e.lastIndexOf('/');
  return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels';
}
function cn(e) {
  var t = [Ve, Q('Relationships', null, { xmlns: $e.RELS })];
  return (
    tt(e['!id']).forEach(function (r) {
      t[t.length] = Q('Relationship', null, e['!id'][r]);
    }),
    t.length > 2 &&
      ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Te(e, t, r, n, i, a) {
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
    [ve.HLINK, ve.XPATH, ve.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + t);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), t;
}
function ax(e) {
  var t = [Ve];
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
function Ms(e, t, r) {
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
function sx(e, t) {
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
function fx(e) {
  var t = [Ve];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(Ms(e[r][0], e[r][1])), t.push(sx('', e[r][0]));
  return t.push(Ms('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('');
}
function Xo() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Ui.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Mr = [
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
function Ba(e, t, r, n, i) {
  i[e] != null ||
    t == null ||
    t === '' ||
    ((i[e] = t), (t = we(t)), (n[n.length] = r ? Q(e, t, r) : Qe(e, t)));
}
function $o(e, t) {
  var r = t || {},
    n = [
      Ve,
      Q('cp:coreProperties', null, {
        'xmlns:cp': $e.CORE_PROPS,
        'xmlns:dc': $e.dc,
        'xmlns:dcterms': $e.dcterms,
        'xmlns:dcmitype': $e.dcmitype,
        'xmlns:xsi': $e.xsi,
      }),
    ],
    i = {};
  if (!e && !r.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      Ba(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : e0(e.CreatedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      Ba(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : e0(e.ModifiedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != Mr.length; ++a) {
    var s = Mr[a],
      f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && Ba(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var un = [
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
  Ko = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function Yo(e) {
  var t = [],
    r = Q;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (t[t.length] = Ve),
    (t[t.length] = Q('Properties', null, {
      xmlns: $e.EXT_PROPS,
      'xmlns:vt': $e.vt,
    })),
    un.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = we(String(e[n[1]]));
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
          return '<vt:lpstr>' + we(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function qo(e) {
  var t = [
    Ve,
    Q('Properties', null, { xmlns: $e.CUST_PROPS, 'xmlns:vt': $e.vt }),
  ];
  if (!e) return t.join('');
  var r = 1;
  return (
    tt(e).forEach(function (i) {
      ++r,
        (t[t.length] = Q('property', y1(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: r,
          name: we(i),
        }));
    }),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
var bs = {
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
function ox(e, t) {
  var r = [];
  return (
    tt(bs)
      .map(function (n) {
        for (var i = 0; i < Mr.length; ++i) if (Mr[i][1] == n) return Mr[i];
        for (i = 0; i < un.length; ++i) if (un[i][1] == n) return un[i];
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
            r.push(Qe(bs[n[1]] || n[1], i));
        }
      }),
    Q('DocumentProperties', r.join(''), { xmlns: Rt.o })
  );
}
function lx(e, t) {
  var r = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      tt(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < Mr.length; ++s) if (a == Mr[s][1]) return;
          for (s = 0; s < un.length; ++s) if (a == un[s][1]) return;
          for (s = 0; s < r.length; ++s) if (a == r[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(Q(ys(a), f, { 'dt:dt': l }));
        }
      }),
    t &&
      tt(t).forEach(function (a) {
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
            i.push(Q(ys(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + Rt.o + '">' + i.join('') + '</' + n + '>'
  );
}
function cx(e) {
  var t = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    r = t.getTime() / 1e3 + 11644473600,
    n = r % Math.pow(2, 32),
    i = (r - n) / Math.pow(2, 32);
  (n *= 1e7), (i *= 1e7);
  var a = (n / Math.pow(2, 32)) | 0;
  a > 0 && ((n = n % Math.pow(2, 32)), (i += a));
  var s = b(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function Us(e, t) {
  var r = b(4),
    n = b(4);
  switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      (n = b(8)), n.write_shift(8, t, 'f');
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = cx(t);
      break;
    case 31:
    case 80:
      for (
        n = b(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
          n.write_shift(4, t.length + 1),
          n.write_shift(0, t, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + t);
  }
  return Ze([r, n]);
}
var Jo = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function ux(e) {
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
function Hs(e, t, r) {
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
    !t)
  ) {
    (o = b(8)), o.write_shift(4, 0), i.unshift(o);
    var c = [b(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var h = e[f][0];
      for (
        l = b(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)),
          l.write_shift(4, f + 2),
          l.write_shift(4, h.length + 1),
          l.write_shift(0, h, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = Ze(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(t && !t[e[f][0]]) &&
      !(Jo.indexOf(e[f][0]) > -1 || Ko.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var u = e[f][1],
        d = 0;
      if (t) {
        d = +t[e[f][0]];
        var p = r[d];
        if (p.p == 'version' && typeof u == 'string') {
          var x = u.split('.');
          u = (+x[0] << 16) + (+x[1] || 0);
        }
        l = Us(p.t, u);
      } else {
        var m = ux(u);
        m == -1 && ((m = 31), (u = String(u))), (l = Us(m, u));
      }
      a.push(l),
        (o = b(8)),
        o.write_shift(4, t ? d : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var S = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, S), (S += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), Ze([n].concat(i).concat(a))
  );
}
function Ws(e, t, r, n, i, a) {
  var s = b(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Ae.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, t, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = Hs(e, r, n);
  if ((f.push(l), i)) {
    var o = Hs(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return Ze(f);
}
function hx(e, t) {
  t || (t = b(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function xx(e, t) {
  return e.read_shift(t) === 1;
}
function ut(e, t) {
  return t || (t = b(2)), t.write_shift(2, +!!e), t;
}
function Zo(e) {
  return e.read_shift(2, 'u');
}
function Bt(e, t) {
  return t || (t = b(2)), t.write_shift(2, e), t;
}
function Qo(e, t, r) {
  return (
    r || (r = b(2)),
    r.write_shift(1, t == 'e' ? +e : +!!e),
    r.write_shift(1, t == 'e' ? 1 : 0),
    r
  );
}
function el(e, t, r) {
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
function dx(e) {
  var t = e.t || '',
    r = b(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = b(2 * t.length);
  n.write_shift(2 * t.length, t, 'utf16le');
  var i = [r, n];
  return Ze(i);
}
function px(e, t, r) {
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
function vx(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : px(e, n, r);
}
function mx(e, t, r) {
  if (r.biff > 5) return vx(e, t, r);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function tl(e, t, r) {
  return (
    r || (r = b(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, 'utf16le'),
    r
  );
}
function Vs(e, t) {
  t || (t = b(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function _x(e) {
  var t = b(512),
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
  if (a == 28) (n = n.slice(1)), Vs(n, t);
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
    t.write_shift(2, 0), a & 8 && Vs(i > -1 ? n.slice(i + 1) : '', t);
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
function Wr(e, t, r, n) {
  return (
    n || (n = b(6)),
    n.write_shift(2, e),
    n.write_shift(2, t),
    n.write_shift(2, r || 0),
    n
  );
}
function gx(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function Ex(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: i, r } };
}
function rl(e, t) {
  return (
    t || (t = b(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  );
}
function P0(e, t, r) {
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
  var a = b(i);
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
function Tx(e, t) {
  var r = !t || t.biff == 8,
    n = b(r ? 112 : 54);
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
function wx(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1,
    n = b(8 + r * e.name.length);
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    t.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(r * e.name.length, e.name, t.biff < 8 ? 'sbcs' : 'utf16le');
  var i = n.slice(0, n.l);
  return (i.l = n.l), i;
}
function Sx(e, t) {
  var r = b(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = dx(e[i]);
  var a = Ze([r].concat(n));
  return (
    (a.parts = [r.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function Ax() {
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
function yx(e) {
  var t = b(18),
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
function Fx(e, t) {
  var r = e.name || 'Arial',
    n = t && t.biff == 5,
    i = n ? 15 + r.length : 16 + 2 * r.length,
    a = b(i);
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
function Cx(e, t, r, n) {
  var i = b(10);
  return Wr(e, t, n, i), i.write_shift(4, r), i;
}
function Ox(e, t, r, n, i) {
  var a = !i || i.biff == 8,
    s = b(8 + +a + (1 + a) * r.length);
  return (
    Wr(e, t, n, s),
    s.write_shift(2, r.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * r.length, r, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function Rx(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = b(i ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, t.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * t.length, t, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function Nx(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2,
    n = b(2 * r + 6);
  return (
    n.write_shift(r, e.s.r),
    n.write_shift(r, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function Gs(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = b(i ? 16 : 20)),
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
function Dx(e) {
  var t = b(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function kx(e, t, r, n, i, a) {
  var s = b(8);
  return Wr(e, t, n, s), Qo(r, a, s), s;
}
function Ix(e, t, r, n) {
  var i = b(14);
  return Wr(e, t, n, i), Hr(r, i), i;
}
function Px(e, t, r) {
  if (r.biff < 8) return Lx(e, t, r);
  for (
    var n = [], i = e.l + t, a = e.read_shift(r.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(gx(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function Lx(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = el(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Bx(e) {
  var t = b(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) rl(e[r], t);
  return t;
}
function Mx(e) {
  var t = b(24),
    r = Ke(e[0]);
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
  return Ze([t, _x(e[1])]);
}
function bx(e) {
  var t = e[1].Tooltip,
    r = b(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Ke(e[0]);
  r.write_shift(2, n.r),
    r.write_shift(2, n.r),
    r.write_shift(2, n.c),
    r.write_shift(2, n.c);
  for (var i = 0; i < t.length; ++i) r.write_shift(2, t.charCodeAt(i));
  return r.write_shift(2, 0), r;
}
function Ux(e) {
  return e || (e = b(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Hx(e, t, r) {
  if (!r.cellStyles) return tr(e, t);
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
function Wx(e, t) {
  var r = b(12);
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
function Vx(e) {
  for (var t = b(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function Gx(e, t, r) {
  var n = b(15);
  return oi(n, e, t), n.write_shift(8, r, 'f'), n;
}
function jx(e, t, r) {
  var n = b(9);
  return oi(n, e, t), n.write_shift(2, r), n;
}
var zx = (function () {
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
      t = S0({
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
        c = Ur(1);
      switch (l.type) {
        case 'base64':
          c = jt(cr(f));
          break;
        case 'binary':
          c = jt(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      Ot(c, 0);
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
      var S = c.read_shift(2),
        y = l.codepage || 1252;
      h != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (y = e[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        p && (c.l += 36);
      for (
        var F = [],
          D = {},
          W = Math.min(c.length, h == 2 ? 521 : m - 10 - (d ? 264 : 0)),
          Z = p ? 32 : 11;
        c.l < W && c[c.l] != 13;

      )
        switch (
          ((D = {}),
          (D.name = Hi.utils
            .decode(y, c.slice(c.l, c.l + Z))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += Z),
          (D.type = String.fromCharCode(c.read_shift(1))),
          h != 2 && !p && (D.offset = c.read_shift(4)),
          (D.len = c.read_shift(1)),
          h == 2 && (D.offset = c.read_shift(2)),
          (D.dec = c.read_shift(1)),
          D.name.length && F.push(D),
          h != 2 && (c.l += p ? 13 : 14),
          D.type)
        ) {
          case 'B':
            (!d || D.len != 8) &&
              l.WTF &&
              console.log('Skipping ' + D.name + ':' + D.type);
            break;
          case 'G':
          case 'P':
            l.WTF && console.log('Skipping ' + D.name + ':' + D.type);
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
            throw new Error('Unknown Field Type: ' + D.type);
        }
      if ((c[c.l] !== 13 && (c.l = m - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l]);
      c.l = m;
      var R = 0,
        U = 0;
      for (o[0] = [], U = 0; U != F.length; ++U) o[0][U] = F[U].name;
      for (; x-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += S;
          continue;
        }
        for (++c.l, o[++R] = [], U = 0, U = 0; U != F.length; ++U) {
          var P = c.slice(c.l, c.l + F[U].len);
          (c.l += F[U].len), Ot(P, 0);
          var V = Hi.utils.decode(y, P);
          switch (F[U].type) {
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
              if (!u)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + h.toString(16),
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
              if (d && F[U].len == 8) {
                o[R][U] = P.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              P.l += F[U].len;
              break;
            case '0':
              if (F[U].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + F[U].type);
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
      var c = En(r(f, o), o);
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
        return Gr(n(f, l), l);
      } catch (o) {
        if (l && l.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(f, l) {
      var o = l || {};
      if ((+o.codepage >= 0 && Xn(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = _t(),
        h = Qi(f, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        d = h.slice(1),
        p = f['!cols'] || [],
        x = 0,
        m = 0,
        S = 0,
        y = 1;
      for (x = 0; x < u.length; ++x) {
        if (((p[x] || {}).DBF || {}).name) {
          (u[x] = p[x].DBF.name), ++S;
          continue;
        }
        if (u[x] != null) {
          if (
            (++S,
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
      var F = Re(f['!ref']),
        D = [],
        W = [],
        Z = [];
      for (x = 0; x <= F.e.c - F.s.c; ++x) {
        var R = '',
          U = '',
          P = 0,
          V = [];
        for (m = 0; m < d.length; ++m) d[m][x] != null && V.push(d[m][x]);
        if (V.length == 0 || u[x] == null) {
          D[x] = '?';
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
            ((R = 'N'), (Z[x] = p[x].DBF.dec), (P = p[x].DBF.len)),
          (W[x] = R == 'C' || U == 'N' ? P : a[R] || 0),
          (y += W[x]),
          (D[x] = R);
      }
      var z = c.next(32);
      for (
        z.write_shift(4, 318902576),
          z.write_shift(4, d.length),
          z.write_shift(2, 296 + 32 * S),
          z.write_shift(2, y),
          x = 0;
        x < 4;
        ++x
      )
        z.write_shift(4, 0);
      for (
        z.write_shift(4, 0 | ((+t[no] || 3) << 8)), x = 0, m = 0;
        x < u.length;
        ++x
      )
        if (u[x] != null) {
          var K = c.next(32),
            re = (u[x].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          K.write_shift(1, re, 'sbcs'),
            K.write_shift(1, D[x] == '?' ? 'C' : D[x], 'sbcs'),
            K.write_shift(4, m),
            K.write_shift(1, W[x] || a[D[x]] || 0),
            K.write_shift(1, Z[x] || 0),
            K.write_shift(1, 2),
            K.write_shift(4, 0),
            K.write_shift(1, 0),
            K.write_shift(4, 0),
            K.write_shift(4, 0),
            (m += W[x] || a[D[x]] || 0);
        }
      var _e = c.next(264);
      for (_e.write_shift(4, 13), x = 0; x < 65; ++x) _e.write_shift(4, 0);
      for (x = 0; x < d.length; ++x) {
        var le = c.next(y);
        for (le.write_shift(1, 0), m = 0; m < u.length; ++m)
          if (u[m] != null)
            switch (D[m]) {
              case 'L':
                le.write_shift(1, d[x][m] == null ? 63 : d[x][m] ? 84 : 70);
                break;
              case 'B':
                le.write_shift(8, d[x][m] || 0, 'f');
                break;
              case 'N':
                var Ge = '0';
                for (
                  typeof d[x][m] == 'number' &&
                    (Ge = d[x][m].toFixed(Z[m] || 0)),
                    S = 0;
                  S < W[m] - Ge.length;
                  ++S
                )
                  le.write_shift(1, 32);
                le.write_shift(1, Ge, 'sbcs');
                break;
              case 'D':
                d[x][m]
                  ? (le.write_shift(
                      4,
                      ('0000' + d[x][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    le.write_shift(
                      2,
                      ('00' + (d[x][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    le.write_shift(
                      2,
                      ('00' + d[x][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : le.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var Ne = String(d[x][m] != null ? d[x][m] : '').slice(0, W[m]);
                for (
                  le.write_shift(1, Ne, 'sbcs'), S = 0;
                  S < W[m] - Ne.length;
                  ++S
                )
                  le.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  Xx = (function () {
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
          tt(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      r = function (u, d) {
        var p = e[d];
        return typeof p == 'number' ? xs(p) : p;
      },
      n = function (u, d, p) {
        var x = ((d.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return x == 59 ? u : xs(x);
      };
    e['|'] = 254;
    function i(u, d) {
      switch (d.type) {
        case 'base64':
          return a(cr(u), d);
        case 'binary':
          return a(u, d);
        case 'buffer':
          return a(ge && Buffer.isBuffer(u) ? u.toString('binary') : ni(u), d);
        case 'array':
          return a(pa(u), d);
      }
      throw new Error('Unrecognized type ' + d.type);
    }
    function a(u, d) {
      var p = u.split(/[\n\r]+/),
        x = -1,
        m = -1,
        S = 0,
        y = 0,
        F = [],
        D = [],
        W = null,
        Z = {},
        R = [],
        U = [],
        P = [],
        V = 0,
        z;
      for (+d.codepage >= 0 && Xn(+d.codepage); S !== p.length; ++S) {
        V = 0;
        var K = p[S].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          re = K.replace(/;;/g, '\0')
            .split(';')
            .map(function (C) {
              return C.replace(/\u0000/g, ';');
            }),
          _e = re[0],
          le;
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
              re[1].charAt(0) == 'P' && D.push(K.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var Ge = !1,
                Ne = !1,
                wt = !1,
                Ue = !1,
                xt = -1,
                rt = -1;
              for (y = 1; y < re.length; ++y)
                switch (re[y].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(re[y].slice(1)) - 1), (Ne = !0);
                    break;
                  case 'Y':
                    for (
                      x = parseInt(re[y].slice(1)) - 1,
                        Ne || (m = 0),
                        z = F.length;
                      z <= x;
                      ++z
                    )
                      F[z] = [];
                    break;
                  case 'K':
                    (le = re[y].slice(1)),
                      le.charAt(0) === '"'
                        ? (le = le.slice(1, le.length - 1))
                        : le === 'TRUE'
                          ? (le = !0)
                          : le === 'FALSE'
                            ? (le = !1)
                            : isNaN(fr(le))
                              ? isNaN(Kn(le).getDate()) || (le = ht(le))
                              : ((le = fr(le)),
                                W !== null && vo(W) && (le = Eo(le))),
                      (Ge = !0);
                    break;
                  case 'E':
                    Ue = !0;
                    var A = jd(re[y].slice(1), { r: x, c: m });
                    F[x][m] = [F[x][m], A];
                    break;
                  case 'S':
                    (wt = !0), (F[x][m] = [F[x][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    xt = parseInt(re[y].slice(1)) - 1;
                    break;
                  case 'C':
                    rt = parseInt(re[y].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + K);
                }
              if (
                (Ge &&
                  (F[x][m] && F[x][m].length == 2
                    ? (F[x][m][0] = le)
                    : (F[x][m] = le),
                  (W = null)),
                wt)
              ) {
                if (Ue)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var B = xt > -1 && F[xt][rt];
                if (!B || !B[1])
                  throw new Error('SYLK shared formula cannot find base');
                F[x][m][1] = zd(B[1], { r: x - xt, c: m - rt });
              }
              break;
            case 'F':
              var O = 0;
              for (y = 1; y < re.length; ++y)
                switch (re[y].charAt(0)) {
                  case 'X':
                    (m = parseInt(re[y].slice(1)) - 1), ++O;
                    break;
                  case 'Y':
                    for (
                      x = parseInt(re[y].slice(1)) - 1, z = F.length;
                      z <= x;
                      ++z
                    )
                      F[z] = [];
                    break;
                  case 'M':
                    V = parseInt(re[y].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    W = D[parseInt(re[y].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      P = re[y].slice(1).split(' '), z = parseInt(P[0], 10);
                      z <= parseInt(P[1], 10);
                      ++z
                    )
                      (V = parseInt(P[2], 10)),
                        (U[z - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                        L0(U[z - 1]);
                    break;
                  case 'C':
                    (m = parseInt(re[y].slice(1)) - 1), U[m] || (U[m] = {});
                    break;
                  case 'R':
                    (x = parseInt(re[y].slice(1)) - 1),
                      R[x] || (R[x] = {}),
                      V > 0
                        ? ((R[x].hpt = V), (R[x].hpx = fl(V)))
                        : V === 0 && (R[x].hidden = !0);
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + K);
                }
              O < 1 && (W = null);
              break;
            default:
              if (d && d.WTF) throw new Error('SYLK bad record ' + K);
          }
      }
      return (
        R.length > 0 && (Z['!rows'] = R),
        U.length > 0 && (Z['!cols'] = U),
        d && d.sheetRows && (F = F.slice(0, d.sheetRows)),
        [F, Z]
      );
    }
    function s(u, d) {
      var p = i(u, d),
        x = p[0],
        m = p[1],
        S = En(x, d);
      return (
        tt(m).forEach(function (y) {
          S[y] = m[y];
        }),
        S
      );
    }
    function f(u, d) {
      return Gr(s(u, d), d);
    }
    function l(u, d, p, x) {
      var m = 'C;Y' + (p + 1) + ';X' + (x + 1) + ';K';
      switch (u.t) {
        case 'n':
          (m += u.v || 0), u.f && !u.F && (m += ';E' + M0(u.f, { r: p, c: x }));
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
          : (typeof p.width == 'number' && !p.wpx && (p.wpx = Yi(p.width)),
            typeof p.wpx == 'number' && !p.wch && (p.wch = qi(p.wpx)),
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
            : p.hpx && (m += 'M' + 20 * Ji(p.hpx) + ';'),
          m.length > 2 && u.push(m + 'R' + (x + 1));
      });
    }
    function h(u, d) {
      var p = ['ID;PWXL;N;E'],
        x = [],
        m = Re(u['!ref']),
        S,
        y = Array.isArray(u),
        F = `\r
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
      for (var D = m.s.r; D <= m.e.r; ++D)
        for (var W = m.s.c; W <= m.e.c; ++W) {
          var Z = Se({ r: D, c: W });
          (S = y ? (u[D] || [])[W] : u[Z]),
            !(!S || (S.v == null && (!S.f || S.F))) && x.push(l(S, u, D, W));
        }
      return p.join(F) + F + x.join(F) + F + 'E' + F;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: h };
  })(),
  $x = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return t(cr(a), s);
        case 'binary':
          return t(a, s);
        case 'buffer':
          return t(ge && Buffer.isBuffer(a) ? a.toString('binary') : ni(a), s);
        case 'array':
          return t(pa(a), s);
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
                  : isNaN(fr(p))
                    ? isNaN(Kn(p).getDate())
                      ? (h[l][o] = p)
                      : (h[l][o] = ht(p))
                    : (h[l][o] = fr(p)),
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
    function r(a, s) {
      return En(e(a, s), s);
    }
    function n(a, s) {
      return Gr(r(a, s), s);
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
          c = Re(l['!ref']),
          h,
          u = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var d = c.s.r; d <= c.e.r; ++d) {
          s(o, -1, 0, 'BOT');
          for (var p = c.s.c; p <= c.e.c; ++p) {
            var x = Se({ r: d, c: p });
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
                h.w || (h.w = Ar(h.z || be[14], gt(ht(h.v)))),
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
  nl = (function () {
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
        var d = h.split(`
`),
          p = -1,
          x = -1,
          m = 0,
          S = [];
        m !== d.length;
        ++m
      ) {
        var y = d[m].trim().split(':');
        if (y[0] === 'cell') {
          var F = Ke(y[1]);
          if (S.length <= F.r)
            for (p = S.length; p <= F.r; ++p) S[p] || (S[p] = []);
          switch (((p = F.r), (x = F.c), y[2])) {
            case 't':
              S[p][x] = e(y[3]);
              break;
            case 'v':
              S[p][x] = +y[3];
              break;
            case 'vtf':
              var D = y[y.length - 1];
            case 'vtc':
              switch (y[3]) {
                case 'nl':
                  S[p][x] = !!+y[4];
                  break;
                default:
                  S[p][x] = +y[4];
                  break;
              }
              y[2] == 'vtf' && (S[p][x] = [S[p][x], D]);
          }
        }
      }
      return u && u.sheetRows && (S = S.slice(0, u.sheetRows)), S;
    }
    function n(h, u) {
      return En(r(h, u), u);
    }
    function i(h, u) {
      return Gr(n(h, u), u);
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
          m = kt(h['!ref']),
          S = Array.isArray(h),
          y = m.s.r;
        y <= m.e.r;
        ++y
      )
        for (var F = m.s.c; F <= m.e.c; ++F)
          if (
            ((x = Se({ r: y, c: F })),
            (p = S ? (h[y] || [])[F] : h[x]),
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
                var D = gt(ht(p.v));
                (d[2] = 'vtc'),
                  (d[3] = 'nd'),
                  (d[4] = '' + D),
                  (d[5] = p.w || Ar(p.z || be[14], D));
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
  Kx = (function () {
    function e(c, h, u, d, p) {
      p.raw
        ? (h[u][d] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (h[u][d] = !0)
            : c === 'FALSE'
              ? (h[u][d] = !1)
              : isNaN(fr(c))
                ? isNaN(Kn(c).getDate())
                  ? (h[u][d] = c)
                  : (h[u][d] = ht(c))
                : (h[u][d] = fr(c)));
    }
    function t(c, h) {
      var u = h || {},
        d = [];
      if (!c || c.length === 0) return d;
      for (
        var p = c.split(/[\r\n]/), x = p.length - 1;
        x >= 0 && p[x].length === 0;

      )
        --x;
      for (var m = 10, S = 0, y = 0; y <= x; ++y)
        (S = p[y].indexOf(' ')),
          S == -1 ? (S = p[y].length) : S++,
          (m = Math.max(m, S));
      for (y = 0; y <= x; ++y) {
        d[y] = [];
        var F = 0;
        for (
          e(p[y].slice(0, m).trim(), d, y, F, u), F = 1;
          F <= (p[y].length - m) / 10 + 1;
          ++F
        )
          e(p[y].slice(m + (F - 1) * 10, m + F * 10).trim(), d, y, F, u);
      }
      return u.sheetRows && (d = d.slice(0, u.sheetRows)), d;
    }
    var r = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var h = {}, u = !1, d = 0, p = 0; d < c.length; ++d)
        (p = c.charCodeAt(d)) == 34
          ? (u = !u)
          : !u && p in r && (h[p] = (h[p] || 0) + 1);
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
        r[p.pop()[1]] || 44
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
        S = 0,
        y = 0,
        F = 0,
        D = 0,
        W = d.charCodeAt(0),
        Z = !1,
        R = 0,
        U = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var P = u.dateNF != null ? c1(u.dateNF) : null;
      function V() {
        var z = c.slice(F, D),
          K = {};
        if (
          (z.charAt(0) == '"' &&
            z.charAt(z.length - 1) == '"' &&
            (z = z.slice(1, -1).replace(/""/g, '"')),
          z.length === 0)
        )
          K.t = 'z';
        else if (u.raw) (K.t = 's'), (K.v = z);
        else if (z.trim().length === 0) (K.t = 's'), (K.v = z);
        else if (z.charCodeAt(0) == 61)
          z.charCodeAt(1) == 34 && z.charCodeAt(z.length - 1) == 34
            ? ((K.t = 's'), (K.v = z.slice(2, -1).replace(/""/g, '"')))
            : Xd(z)
              ? ((K.t = 'n'), (K.f = z.slice(1)))
              : ((K.t = 's'), (K.v = z));
        else if (z == 'TRUE') (K.t = 'b'), (K.v = !0);
        else if (z == 'FALSE') (K.t = 'b'), (K.v = !1);
        else if (!isNaN((y = fr(z))))
          (K.t = 'n'), u.cellText !== !1 && (K.w = z), (K.v = y);
        else if (!isNaN(Kn(z).getDate()) || (P && z.match(P))) {
          K.z = u.dateNF || be[14];
          var re = 0;
          P &&
            z.match(P) &&
            ((z = u1(z, u.dateNF, z.match(P) || [])), (re = 1)),
            u.cellDates
              ? ((K.t = 'd'), (K.v = ht(z, re)))
              : ((K.t = 'n'), (K.v = gt(ht(z, re)))),
            u.cellText !== !1 &&
              (K.w = Ar(K.z, K.v instanceof Date ? gt(K.v) : K.v)),
            u.cellNF || delete K.z;
        } else (K.t = 's'), (K.v = z);
        if (
          (K.t == 'z' ||
            (u.dense
              ? (p[m] || (p[m] = []), (p[m][S] = K))
              : (p[Se({ c: S, r: m })] = K)),
          (F = D + 1),
          (U = c.charCodeAt(F)),
          x.e.c < S && (x.e.c = S),
          x.e.r < m && (x.e.r = m),
          R == W)
        )
          ++S;
        else if (((S = 0), ++m, u.sheetRows && u.sheetRows <= m)) return !0;
      }
      e: for (; D < c.length; ++D)
        switch ((R = c.charCodeAt(D))) {
          case 34:
            U === 34 && (Z = !Z);
            break;
          case W:
          case 10:
          case 13:
            if (!Z && V()) break e;
            break;
        }
      return D - F > 0 && V(), (p['!ref'] = We(x)), p;
    }
    function s(c, h) {
      return !(h && h.PRN) ||
        h.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, h)
        : En(t(c, h), h);
    }
    function f(c, h) {
      var u = '',
        d = h.type == 'string' ? [0, 0, 0, 0] : s_(c, h);
      switch (h.type) {
        case 'base64':
          u = cr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          h.codepage == 65001
            ? (u = c.toString('utf8'))
            : (h.codepage && typeof Hi < 'u') ||
              (u = ge && Buffer.isBuffer(c) ? c.toString('binary') : ni(c));
          break;
        case 'array':
          u = pa(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + h.type);
      }
      return (
        d[0] == 239 && d[1] == 187 && d[2] == 191
          ? (u = Mn(u.slice(3)))
          : h.type != 'string' && h.type != 'buffer' && h.codepage == 65001
            ? (u = Mn(u))
            : h.type == 'binary' && typeof Hi < 'u',
        u.slice(0, 19) == 'socialcalc:version:'
          ? nl.to_sheet(h.type == 'string' ? u : Mn(u), h)
          : s(u, h)
      );
    }
    function l(c, h) {
      return Gr(f(c, h), h);
    }
    function o(c) {
      for (
        var h = [], u = Re(c['!ref']), d, p = Array.isArray(c), x = u.s.r;
        x <= u.e.r;
        ++x
      ) {
        for (var m = [], S = u.s.c; S <= u.e.c; ++S) {
          var y = Se({ r: x, c: S });
          if (((d = p ? (c[x] || [])[S] : c[y]), !d || d.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var F = (d.w || (ur(d), d.w) || '').slice(0, 10);
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
  js = (function () {
    function e(A, B, O) {
      if (A) {
        Ot(A, A.l || 0);
        for (var C = O.Enum || xt; A.l < A.length; ) {
          var j = A.read_shift(2),
            se = C[j] || C[65535],
            fe = A.read_shift(2),
            X = A.l + fe,
            q = se.f && se.f(A, fe, O);
          if (((A.l = X), B(q, se, j))) return;
        }
      }
    }
    function t(A, B) {
      switch (B.type) {
        case 'base64':
          return r(jt(cr(A)), B);
        case 'binary':
          return r(jt(A), B);
        case 'buffer':
        case 'array':
          return r(A, B);
      }
      throw 'Unsupported type ' + B.type;
    }
    function r(A, B) {
      if (!A) return A;
      var O = B || {},
        C = O.dense ? [] : {},
        j = 'Sheet1',
        se = '',
        fe = 0,
        X = {},
        q = [],
        xe = [],
        oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        Fe = O.sheetRows || 0;
      if (
        A[2] == 0 &&
        (A[3] == 8 || A[3] == 9) &&
        A.length >= 16 &&
        A[14] == 5 &&
        A[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (A[2] == 2)
        (O.Enum = xt),
          e(
            A,
            function (ie, nt, Wt) {
              switch (Wt) {
                case 0:
                  (O.vers = ie), ie >= 4096 && (O.qpro = !0);
                  break;
                case 6:
                  oe = ie;
                  break;
                case 204:
                  ie && (se = ie);
                  break;
                case 222:
                  se = ie;
                  break;
                case 15:
                case 51:
                  O.qpro || (ie[1].v = ie[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Wt == 14 &&
                    (ie[2] & 112) == 112 &&
                    (ie[2] & 15) > 1 &&
                    (ie[2] & 15) < 15 &&
                    ((ie[1].z = O.dateNF || be[14]),
                    O.cellDates && ((ie[1].t = 'd'), (ie[1].v = Eo(ie[1].v)))),
                    O.qpro &&
                      ie[3] > fe &&
                      ((C['!ref'] = We(oe)),
                      (X[j] = C),
                      q.push(j),
                      (C = O.dense ? [] : {}),
                      (oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (fe = ie[3]),
                      (j = se || 'Sheet' + (fe + 1)),
                      (se = ''));
                  var rr = O.dense ? (C[ie[0].r] || [])[ie[0].c] : C[Se(ie[0])];
                  if (rr) {
                    (rr.t = ie[1].t),
                      (rr.v = ie[1].v),
                      ie[1].z != null && (rr.z = ie[1].z),
                      ie[1].f != null && (rr.f = ie[1].f);
                    break;
                  }
                  O.dense
                    ? (C[ie[0].r] || (C[ie[0].r] = []),
                      (C[ie[0].r][ie[0].c] = ie[1]))
                    : (C[Se(ie[0])] = ie[1]);
                  break;
              }
            },
            O,
          );
      else if (A[2] == 26 || A[2] == 14)
        (O.Enum = rt),
          A[2] == 14 && ((O.qpro = !0), (A.l = 0)),
          e(
            A,
            function (ie, nt, Wt) {
              switch (Wt) {
                case 204:
                  j = ie;
                  break;
                case 22:
                  ie[1].v = ie[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (ie[3] > fe &&
                      ((C['!ref'] = We(oe)),
                      (X[j] = C),
                      q.push(j),
                      (C = O.dense ? [] : {}),
                      (oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (fe = ie[3]),
                      (j = 'Sheet' + (fe + 1))),
                    Fe > 0 && ie[0].r >= Fe)
                  )
                    break;
                  O.dense
                    ? (C[ie[0].r] || (C[ie[0].r] = []),
                      (C[ie[0].r][ie[0].c] = ie[1]))
                    : (C[Se(ie[0])] = ie[1]),
                    oe.e.c < ie[0].c && (oe.e.c = ie[0].c),
                    oe.e.r < ie[0].r && (oe.e.r = ie[0].r);
                  break;
                case 27:
                  ie[14e3] && (xe[ie[14e3][0]] = ie[14e3][1]);
                  break;
                case 1537:
                  (xe[ie[0]] = ie[1]), ie[0] == fe && (j = ie[1]);
                  break;
              }
            },
            O,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + A[2]);
      if (((C['!ref'] = We(oe)), (X[se || j] = C), q.push(se || j), !xe.length))
        return { SheetNames: q, Sheets: X };
      for (var pe = {}, St = [], De = 0; De < xe.length; ++De)
        X[q[De]]
          ? (St.push(xe[De] || q[De]), (pe[xe[De]] = X[xe[De]] || X[q[De]]))
          : (St.push(xe[De]), (pe[xe[De]] = { '!ref': 'A1' }));
      return { SheetNames: St, Sheets: pe };
    }
    function n(A, B) {
      var O = B || {};
      if ((+O.codepage >= 0 && Xn(+O.codepage), O.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var C = _t(),
        j = Re(A['!ref']),
        se = Array.isArray(A),
        fe = [];
      ee(C, 0, a(1030)), ee(C, 6, l(j));
      for (var X = Math.min(j.e.r, 8191), q = j.s.r; q <= X; ++q)
        for (var xe = et(q), oe = j.s.c; oe <= j.e.c; ++oe) {
          q === j.s.r && (fe[oe] = st(oe));
          var Fe = fe[oe] + xe,
            pe = se ? (A[q] || [])[oe] : A[Fe];
          if (!(!pe || pe.t == 'z'))
            if (pe.t == 'n')
              (pe.v | 0) == pe.v && pe.v >= -32768 && pe.v <= 32767
                ? ee(C, 13, d(q, oe, pe.v))
                : ee(C, 14, x(q, oe, pe.v));
            else {
              var St = ur(pe);
              ee(C, 15, h(q, oe, St.slice(0, 239)));
            }
        }
      return ee(C, 1), C.end();
    }
    function i(A, B) {
      var O = B || {};
      if ((+O.codepage >= 0 && Xn(+O.codepage), O.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var C = _t();
      ee(C, 0, s(A));
      for (var j = 0, se = 0; j < A.SheetNames.length; ++j)
        (A.Sheets[A.SheetNames[j]] || {})['!ref'] &&
          ee(C, 27, Ue(A.SheetNames[j], se++));
      var fe = 0;
      for (j = 0; j < A.SheetNames.length; ++j) {
        var X = A.Sheets[A.SheetNames[j]];
        if (!(!X || !X['!ref'])) {
          for (
            var q = Re(X['!ref']),
              xe = Array.isArray(X),
              oe = [],
              Fe = Math.min(q.e.r, 8191),
              pe = q.s.r;
            pe <= Fe;
            ++pe
          )
            for (var St = et(pe), De = q.s.c; De <= q.e.c; ++De) {
              pe === q.s.r && (oe[De] = st(De));
              var ie = oe[De] + St,
                nt = xe ? (X[pe] || [])[De] : X[ie];
              if (!(!nt || nt.t == 'z'))
                if (nt.t == 'n') ee(C, 23, V(pe, De, fe, nt.v));
                else {
                  var Wt = ur(nt);
                  ee(C, 22, R(pe, De, fe, Wt.slice(0, 239)));
                }
            }
          ++fe;
        }
      }
      return ee(C, 1), C.end();
    }
    function a(A) {
      var B = b(2);
      return B.write_shift(2, A), B;
    }
    function s(A) {
      var B = b(26);
      B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
      for (var O = 0, C = 0, j = 0, se = 0; se < A.SheetNames.length; ++se) {
        var fe = A.SheetNames[se],
          X = A.Sheets[fe];
        if (!(!X || !X['!ref'])) {
          ++j;
          var q = kt(X['!ref']);
          O < q.e.r && (O = q.e.r), C < q.e.c && (C = q.e.c);
        }
      }
      return (
        O > 8191 && (O = 8191),
        B.write_shift(2, O),
        B.write_shift(1, j),
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
        j = o(A, B, O);
      if (((j[1].t = 's'), O.vers == 20768)) {
        A.l++;
        var se = A.read_shift(1);
        return (j[1].v = A.read_shift(se, 'utf8')), j;
      }
      return O.qpro && A.l++, (j[1].v = A.read_shift(C - A.l, 'cstr')), j;
    }
    function h(A, B, O) {
      var C = b(7 + O.length);
      C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(1, 39);
      for (var j = 0; j < C.length; ++j) {
        var se = O.charCodeAt(j);
        C.write_shift(1, se >= 128 ? 95 : se);
      }
      return C.write_shift(1, 0), C;
    }
    function u(A, B, O) {
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
        j = o(A, B, O);
      if (((j[1].v = A.read_shift(8, 'f')), O.qpro)) A.l = C;
      else {
        var se = A.read_shift(2);
        D(A.slice(A.l, A.l + se), j), (A.l += se);
      }
      return j;
    }
    function S(A, B, O) {
      var C = B & 32768;
      return (
        (B &= -32769),
        (B = (C ? A : 0) + (B >= 8192 ? B - 16384 : B)),
        (C ? '' : '$') + (O ? st(B) : et(B))
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
    function D(A, B) {
      Ot(A, 0);
      for (
        var O = [], C = 0, j = '', se = '', fe = '', X = '';
        A.l < A.length;

      ) {
        var q = A[A.l++];
        switch (q) {
          case 0:
            O.push(A.read_shift(8, 'f'));
            break;
          case 1:
            (se = S(B[0].c, A.read_shift(2), !0)),
              (j = S(B[0].r, A.read_shift(2), !1)),
              O.push(se + j);
            break;
          case 2:
            {
              var xe = S(B[0].c, A.read_shift(2), !0),
                oe = S(B[0].r, A.read_shift(2), !1);
              (se = S(B[0].c, A.read_shift(2), !0)),
                (j = S(B[0].r, A.read_shift(2), !1)),
                O.push(xe + oe + ':' + se + j);
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
              for (var Fe = ''; (q = A[A.l++]); ) Fe += String.fromCharCode(q);
              O.push('"' + Fe.replace(/"/g, '""') + '"');
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
            (X = O.pop()),
              (fe = O.pop()),
              O.push(['AND', 'OR'][q - 20] + '(' + fe + ',' + X + ')');
            break;
          default:
            if (q < 32 && F[q])
              (X = O.pop()), (fe = O.pop()), O.push(fe + F[q] + X);
            else if (y[q]) {
              if (((C = y[q][1]), C == 69 && (C = A[A.l++]), C > O.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    q.toString(16) +
                    ':|' +
                    O.join('|') +
                    '|',
                );
                return;
              }
              var pe = O.slice(-C);
              (O.length -= C), O.push(y[q][0] + '(' + pe.join(',') + ')');
            } else
              return q <= 7
                ? console.error('WK1 invalid opcode ' + q.toString(16))
                : q <= 24
                  ? console.error('WK1 unsupported op ' + q.toString(16))
                  : q <= 30
                    ? console.error('WK1 invalid opcode ' + q.toString(16))
                    : q <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + q.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + q.toString(16),
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
    function Z(A, B) {
      var O = W(A);
      return (O[1].t = 's'), (O[1].v = A.read_shift(B - 4, 'cstr')), O;
    }
    function R(A, B, O, C) {
      var j = b(6 + C.length);
      j.write_shift(2, A),
        j.write_shift(1, O),
        j.write_shift(1, B),
        j.write_shift(1, 39);
      for (var se = 0; se < C.length; ++se) {
        var fe = C.charCodeAt(se);
        j.write_shift(1, fe >= 128 ? 95 : fe);
      }
      return j.write_shift(1, 0), j;
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
        j = A.read_shift(4),
        se = A.read_shift(2);
      if (se == 65535)
        return (
          C === 0 && j === 3221225472
            ? ((O[1].t = 'e'), (O[1].v = 15))
            : C === 0 && j === 3489660928
              ? ((O[1].t = 'e'), (O[1].v = 42))
              : (O[1].v = 0),
          O
        );
      var fe = se & 32768;
      return (
        (se = (se & 32767) - 16446),
        (O[1].v =
          (1 - fe * 2) * (j * Math.pow(2, se + 32) + C * Math.pow(2, se))),
        O
      );
    }
    function V(A, B, O, C) {
      var j = b(14);
      if (
        (j.write_shift(2, A), j.write_shift(1, O), j.write_shift(1, B), C == 0)
      )
        return (
          j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j
        );
      var se = 0,
        fe = 0,
        X = 0,
        q = 0;
      return (
        C < 0 && ((se = 1), (C = -C)),
        (fe = Math.log2(C) | 0),
        (C /= Math.pow(2, fe - 31)),
        (q = C >>> 0),
        (q & 2147483648) == 0 && ((C /= 2), ++fe, (q = C >>> 0)),
        (C -= q),
        (q |= 2147483648),
        (q >>>= 0),
        (C *= Math.pow(2, 32)),
        (X = C >>> 0),
        j.write_shift(4, X),
        j.write_shift(4, q),
        (fe += 16383 + (se ? 32768 : 0)),
        j.write_shift(2, fe),
        j
      );
    }
    function z(A, B) {
      var O = P(A);
      return (A.l += B - 14), O;
    }
    function K(A, B) {
      var O = W(A),
        C = A.read_shift(4);
      return (O[1].v = C >> 6), O;
    }
    function re(A, B) {
      var O = W(A),
        C = A.read_shift(8, 'f');
      return (O[1].v = C), O;
    }
    function _e(A, B) {
      var O = re(A);
      return (A.l += B - 10), O;
    }
    function le(A, B) {
      return A[A.l + B - 1] == 0 ? A.read_shift(B, 'cstr') : '';
    }
    function Ge(A, B) {
      var O = A[A.l++];
      O > B - 1 && (O = B - 1);
      for (var C = ''; C.length < O; ) C += String.fromCharCode(A[A.l++]);
      return C;
    }
    function Ne(A, B, O) {
      if (!(!O.qpro || B < 21)) {
        var C = A.read_shift(1);
        (A.l += 17), (A.l += 1), (A.l += 2);
        var j = A.read_shift(B - 21, 'cstr');
        return [C, j];
      }
    }
    function wt(A, B) {
      for (var O = {}, C = A.l + B; A.l < C; ) {
        var j = A.read_shift(2);
        if (j == 14e3) {
          for (O[j] = [0, ''], O[j][0] = A.read_shift(2); A[A.l]; )
            (O[j][1] += String.fromCharCode(A[A.l])), A.l++;
          A.l++;
        }
      }
      return O;
    }
    function Ue(A, B) {
      var O = b(5 + A.length);
      O.write_shift(2, 14e3), O.write_shift(2, B);
      for (var C = 0; C < A.length; ++C) {
        var j = A.charCodeAt(C);
        O[O.l++] = j > 127 ? 95 : j;
      }
      return (O[O.l++] = 0), O;
    }
    var xt = {
        0: { n: 'BOF', f: Zo },
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
        204: { n: 'SHEETNAMECS', f: le },
        222: { n: 'SHEETNAMELP', f: Ge },
        65535: { n: '' },
      },
      rt = {
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
        22: { n: 'LABEL16', f: Z },
        23: { n: 'NUMBER17', f: P },
        24: { n: 'NUMBER18', f: U },
        25: { n: 'FORMULA19', f: z },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: wt },
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
        204: { n: 'SHEETNAMECS', f: le },
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
        1537: { n: 'SHEETINFOQP', f: Ne },
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
  Yx = /^\s|\s$|[\t\n\r]/;
function il(e, t) {
  if (!t.bookSST) return '';
  var r = [Ve];
  r[r.length] = Q('sst', null, {
    xmlns: gn[0],
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
          i.t.match(Yx) && (a += ' xml:space="preserve"'),
          (a += '>' + we(i.t) + '</t>')),
        (a += '</si>'),
        (r[r.length] = a);
    }
  return (
    r.length > 2 &&
      ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function qx(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Jx(e, t) {
  return (
    t || (t = b(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
  );
}
var Zx = V1;
function Qx(e) {
  var t = _t();
  G(t, 159, Jx(e));
  for (var r = 0; r < e.length; ++r) G(t, 19, Zx(e[r]));
  return G(t, 160), t.end();
}
function ed(e) {
  for (var t = [], r = e.split(''), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function al(e) {
  var t = 0,
    r,
    n = ed(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (r = Ur(i), r[0] = n.length, a = 1; a != i; ++a) r[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = r[a]),
      (f = (t & 16384) === 0 ? 0 : 1),
      (l = (t << 1) & 32767),
      (o = f | l),
      (t = o ^ s);
  return t ^ 52811;
}
var td = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return t(cr(i), a);
      case 'binary':
        return t(i, a);
      case 'buffer':
        return t(ge && Buffer.isBuffer(i) ? i.toString('binary') : ni(i), a);
      case 'array':
        return t(pa(i), a);
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
        for (var u = /\\\w+\b/g, d = 0, p, x = -1; (p = u.exec(c)); ) {
          switch (p[0]) {
            case '\\cell':
              var m = c.slice(d, u.lastIndex - p[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++x, m.length)) {
                var S = { v: m, t: 's' };
                Array.isArray(f) ? (f[h][x] = S) : (f[Se({ r: h, c: x })] = S);
              }
              break;
          }
          d = u.lastIndex;
        }
        x > o.e.c && (o.e.c = x);
      }),
      (f['!ref'] = We(o)),
      f
    );
  }
  function r(i, a) {
    return Gr(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = Re(i['!ref']),
        f,
        l = Array.isArray(i),
        o = s.s.r;
      o <= s.e.r;
      ++o
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var h = Se({ r: o, c });
        (f = l ? (i[o] || [])[c] : i[h]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (a.push(' ' + (f.w || (ur(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function zs(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var rd = 6,
  or = rd;
function Yi(e) {
  return Math.floor((e + Math.round(128 / or) / 256) * or);
}
function qi(e) {
  return Math.floor(((e - 5) / or) * 100 + 0.5) / 100;
}
function r0(e) {
  return Math.round(((e * or + 5) / or) * 256) / 256;
}
function L0(e) {
  e.width
    ? ((e.wpx = Yi(e.width)), (e.wch = qi(e.wpx)), (e.MDW = or))
    : e.wpx
      ? ((e.wch = qi(e.wpx)), (e.width = r0(e.wch)), (e.MDW = or))
      : typeof e.wch == 'number' &&
        ((e.width = r0(e.wch)), (e.wpx = Yi(e.width)), (e.MDW = or)),
    e.customWidth && delete e.customWidth;
}
var nd = 96,
  sl = nd;
function Ji(e) {
  return (e * 96) / sl;
}
function fl(e) {
  return (e * sl) / 96;
}
function id(e) {
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
          (t[t.length] = Q('numFmt', null, {
            numFmtId: n,
            formatCode: we(e[n]),
          }));
    }),
    t.length === 1
      ? ''
      : ((t[t.length] = '</numFmts>'),
        (t[0] = Q('numFmts', null, { count: t.length - 2 }).replace('/>', '>')),
        t.join(''))
  );
}
function ad(e) {
  var t = [];
  return (
    (t[t.length] = Q('cellXfs', null)),
    e.forEach(function (r) {
      t[t.length] = Q('xf', null, r);
    }),
    (t[t.length] = '</cellXfs>'),
    t.length === 2
      ? ''
      : ((t[0] = Q('cellXfs', null, { count: t.length - 2 }).replace(
          '/>',
          '>',
        )),
        t.join(''))
  );
}
function ol(e, t) {
  var r = [Ve, Q('styleSheet', null, { xmlns: gn[0], 'xmlns:vt': $e.vt })],
    n;
  return (
    e.SSF && (n = id(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = ad(t.cellXfs)) && (r[r.length] = n),
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
function sd(e, t) {
  var r = e.read_shift(2),
    n = ft(e);
  return [r, n];
}
function fd(e, t, r) {
  r || (r = b(6 + 4 * t.length)), r.write_shift(2, e), Ye(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function od(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = Y1(e);
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
    (l > 0 && (n.charset = l), e.l++, (n.color = K1(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = ft(e)), n;
}
function ld(e, t) {
  t || (t = b(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    q1(e, t),
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
    $i(e.color, t);
  var n = 0;
  return (
    (n = 2),
    t.write_shift(1, n),
    Ye(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
var cd = [
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
  Ma,
  ud = tr;
function Xs(e, t) {
  t || (t = b(4 * 3 + 8 * 7 + 16 * 1)), Ma || (Ma = S0(cd));
  var r = Ma[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for ($i({ auto: 1 }, t), $i({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function hd(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: i };
}
function ll(e, t, r) {
  r || (r = b(16)),
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
function Nn(e, t) {
  return (
    t || (t = b(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var xd = tr;
function dd(e, t) {
  return (
    t || (t = b(51)),
    t.write_shift(1, 0),
    Nn(null, t),
    Nn(null, t),
    Nn(null, t),
    Nn(null, t),
    Nn(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function pd(e, t) {
  return (
    t || (t = b(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    Xi(e.name || '', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function vd(e, t, r) {
  var n = b(2052);
  return (
    n.write_shift(4, e),
    Xi(t, n),
    Xi(r, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function md(e, t) {
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
        (G(e, 615, Xt(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            t[i] != null && G(e, 44, fd(i, t[i]));
        }),
        G(e, 616));
  }
}
function _d(e) {
  var t = 1;
  G(e, 611, Xt(t)),
    G(e, 43, ld({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    G(e, 612);
}
function gd(e) {
  var t = 2;
  G(e, 603, Xt(t)),
    G(e, 45, Xs({ patternType: 'none' })),
    G(e, 45, Xs({ patternType: 'gray125' })),
    G(e, 604);
}
function Ed(e) {
  var t = 1;
  G(e, 613, Xt(t)), G(e, 46, dd()), G(e, 614);
}
function Td(e) {
  var t = 1;
  G(e, 626, Xt(t)), G(e, 47, ll({ numFmtId: 0 }, 65535)), G(e, 627);
}
function wd(e, t) {
  G(e, 617, Xt(t.length)),
    t.forEach(function (r) {
      G(e, 47, ll(r, 0));
    }),
    G(e, 618);
}
function Sd(e) {
  var t = 1;
  G(e, 619, Xt(t)), G(e, 48, pd({ xfId: 0, name: 'Normal' })), G(e, 620);
}
function Ad(e) {
  var t = 0;
  G(e, 505, Xt(t)), G(e, 506);
}
function yd(e) {
  var t = 0;
  G(e, 508, vd(t, 'TableStyleMedium9', 'PivotStyleMedium4')), G(e, 509);
}
function Fd(e, t) {
  var r = _t();
  return (
    G(r, 278),
    md(r, e.SSF),
    _d(r),
    gd(r),
    Ed(r),
    Td(r),
    wd(r, t.cellXfs),
    Sd(r),
    Ad(r),
    yd(r),
    G(r, 279),
    r.end()
  );
}
function cl(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var r = [Ve];
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
function Cd(e, t) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: ft(e) };
}
function Od(e) {
  var t = b(12 + 2 * e.name.length);
  return (
    t.write_shift(4, e.flags),
    t.write_shift(4, e.version),
    Ye(e.name, t),
    t.slice(0, t.l)
  );
}
function Rd(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Nd(e) {
  var t = b(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function Dd(e, t) {
  var r = b(8 + 2 * t.length);
  return r.write_shift(4, e), Ye(t, r), r.slice(0, r.l);
}
function kd(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function Id(e, t) {
  var r = b(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function Pd() {
  var e = _t();
  return (
    G(e, 332),
    G(e, 334, Xt(1)),
    G(e, 335, Od({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    G(e, 336),
    G(e, 339, Dd(1, 'XLDAPR')),
    G(e, 52),
    G(e, 35, Xt(514)),
    G(e, 4096, Xt(0)),
    G(e, 4097, Bt(1)),
    G(e, 36),
    G(e, 53),
    G(e, 340),
    G(e, 337, Id(1)),
    G(e, 51, Nd([[1, 0]])),
    G(e, 338),
    G(e, 333),
    e.end()
  );
}
function ul() {
  var e = [Ve];
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
function Ld(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = Se(r));
  var n = e.read_shift(1);
  return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t;
}
var on = 1024;
function hl(e, t) {
  for (
    var r = [21600, 21600],
      n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
      i = [
        Q('xml', null, {
          'xmlns:v': Rt.v,
          'xmlns:o': Rt.o,
          'xmlns:x': Rt.x,
          'xmlns:mv': Rt.mv,
        }).replace(/\/>/, '>'),
        Q('o:shapelayout', Q('o:idmap', null, { 'v:ext': 'edit', data: e }), {
          'v:ext': 'edit',
        }),
        Q(
          'v:shapetype',
          [
            Q('v:stroke', null, { joinstyle: 'miter' }),
            Q('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n },
        ),
      ];
    on < e * 1e3;

  )
    on += 1e3;
  return (
    t.forEach(function (a) {
      var s = Ke(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? Q('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = Q('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++on,
        (i = i.concat([
          '<v:shape' +
            qn({
              id: '_x0000_s' + on,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (a[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          o,
          Q('v:shadow', null, c),
          Q('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          Qe(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          Qe('x:AutoFill', 'False'),
          Qe('x:Row', String(s.r)),
          Qe('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function xl(e) {
  var t = [Ve, Q('comments', null, { xmlns: gn[0] })],
    r = [];
  return (
    t.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = we(i.a);
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
              l.a && (i = r.indexOf(we(l.a))), a.push(l.t || '');
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        t.push(Qe('t', we(a[0] || '')));
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
        t.push(Qe('t', we(s)));
      }
      t.push('</text></comment>');
    }),
    t.push('</commentList>'),
    t.length > 2 &&
      ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Bd(e, t, r) {
  var n = [
    Ve,
    Q('ThreadedComments', null, { xmlns: $e.TCMNT }).replace(/[\/]>/, '>'),
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
          n.push(Q('threadedComment', Qe('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function Md(e) {
  var t = [
    Ve,
    Q('personList', null, { xmlns: $e.TCMNT, 'xmlns:x': gn[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    e.forEach(function (r, n) {
      t.push(
        Q('person', null, {
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
function bd(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = $r(e);
  return (t.rfx = r.s), (t.ref = Se(r.s)), (e.l += 16), t;
}
function Ud(e, t) {
  return (
    t == null && (t = b(36)),
    t.write_shift(4, e[1].iauthor),
    Tn(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var Hd = ft;
function Wd(e) {
  return Ye(e.slice(0, 54));
}
function Vd(e) {
  var t = _t(),
    r = [];
  return (
    G(t, 628),
    G(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        r.indexOf(i.a) > -1 || (r.push(i.a.slice(0, 54)), G(t, 632, Wd(i.a)));
      });
    }),
    G(t, 631),
    G(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = r.indexOf(i.a);
        var a = { s: Ke(n[0]), e: Ke(n[0]) };
        G(t, 635, Ud([a, i])),
          i.t && i.t.length > 0 && G(t, 637, j1(i)),
          G(t, 636),
          delete i.iauthor;
      });
    }),
    G(t, 634),
    G(t, 629),
    t.end()
  );
}
function Gd(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var i = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Ae.utils.cfb_add(e, i, t.FileIndex[n].content);
    }
  });
}
var dl = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  jd = (function () {
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
        i + (f ? '' : '$') + st(c) + (l ? '' : '$') + et(o)
      );
    }
    return function (i, a) {
      return (t = a), i.replace(e, r);
    };
  })(),
  B0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  M0 = (function () {
    return function (t, r) {
      return t.replace(B0, function (n, i, a, s, f, l) {
        var o = N0(s) - (a ? 0 : r.c),
          c = R0(l) - (f ? 0 : r.r),
          h = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          u = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + h + 'C' + u;
      });
    };
  })();
function zd(e, t) {
  return e.replace(B0, function (r, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : st(N0(a) + t.c)) +
      (s == '$' ? s + f : et(R0(f) + t.r))
    );
  });
}
function Xd(e) {
  return e.length != 1;
}
function He(e) {
  e.l += 1;
}
function yr(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function pl(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return vl(e);
    r.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n),
    a = e.read_shift(n),
    s = yr(e),
    f = yr(e);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: f[0], cRel: f[1], rRel: f[2] },
  };
}
function vl(e) {
  var t = yr(e),
    r = yr(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: i, cRel: r[1], rRel: r[2] },
  };
}
function $d(e, t, r) {
  if (r.biff < 8) return vl(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    i = e.read_shift(r.biff == 12 ? 4 : 2),
    a = yr(e),
    s = yr(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function ml(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Kd(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    i = yr(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function Kd(e) {
  var t = yr(e),
    r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function Yd(e) {
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
function qd(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return Jd(e);
  var i = e.read_shift(n >= 12 ? 4 : 2),
    a = e.read_shift(2),
    s = (a & 16384) >> 14,
    f = (a & 32768) >> 15;
  if (((a &= 16383), f == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: f };
}
function Jd(e) {
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
function Zd(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = pl(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, i];
}
function Qd(e, t, r) {
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
  var s = pl(e, a, r);
  return [n, i, s];
}
function ep(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function tp(e, t, r) {
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
function rp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = $d(e, t - 1, r);
  return [n, i];
}
function np(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function $s(e) {
  var t = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [t, r];
}
function ip(e, t, r) {
  e.l += 2;
  for (
    var n = e.read_shift(r && r.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return i;
}
function ap(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function sp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function fp(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [t, e.read_shift(2)];
}
function op(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function _l(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1);
  return [t, r];
}
function lp(e) {
  return e.read_shift(2), _l(e);
}
function cp(e) {
  return e.read_shift(2), _l(e);
}
function up(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = ml(e, 0, r);
  return [n, i];
}
function hp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = qd(e, 0, r);
  return [n, i];
}
function xp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var a = ml(e, 0, r);
  return [n, i, a];
}
function dp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [dv[i], Tl[i], n];
}
function pp(e, t, r) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : vp(e);
  return [i, (a[0] === 0 ? Tl : xv)[a[1]]];
}
function vp(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function mp(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function _p(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0];
  var n = e.read_shift(2),
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function gp(e) {
  return e.l++, si[e.read_shift(1)];
}
function Ep(e) {
  return e.l++, e.read_shift(2);
}
function Tp(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function wp(e) {
  return e.l++, wn(e);
}
function Sp(e, t, r) {
  return e.l++, el(e, t - 1, r);
}
function Ap(e, t) {
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
      (r[1] = xx(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (r[1] = si[e[e.l]]), (e.l += t == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = wn(e);
      break;
    case 2:
      r[1] = mx(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error('Bad SerAr: ' + r[0]);
  }
  return r;
}
function yp(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((r.biff == 12 ? $r : Ex)(e));
  return i;
}
function Fp(e, t, r) {
  var n = 0,
    i = 0;
  r.biff == 12
    ? ((n = e.read_shift(4)), (i = e.read_shift(4)))
    : ((i = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var f = 0; f != i; ++f) s[a][f] = Ap(e, r.biff);
  return s;
}
function Cp(e, t, r) {
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
function Op(e, t, r) {
  if (r.biff == 5) return Rp(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function Rp(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [t, r, n];
}
function Np(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Dp(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function kp(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Ip(e, t, r) {
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
var Pp = tr,
  Lp = tr,
  Bp = tr;
function fi(e, t, r) {
  return (e.l += 2), [Yd(e)];
}
function b0(e) {
  return (e.l += 6), [];
}
var Mp = fi,
  bp = b0,
  Up = b0,
  Hp = fi;
function gl(e) {
  return (e.l += 2), [Zo(e), e.read_shift(2) & 1];
}
var Wp = fi,
  Vp = gl,
  Gp = b0,
  jp = fi,
  zp = fi,
  Xp = [
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
function $p(e) {
  e.l += 2;
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    i = e.read_shift(2),
    a = e.read_shift(2),
    s = Xp[(r >> 2) & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: i, C: a };
}
function Kp(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function Yp(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function qp(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function Jp(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function Zp(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function Qp(e) {
  return (e.l += 4), [0, 0];
}
var Ks = {
    1: { n: 'PtgExp', f: _p },
    2: { n: 'PtgTbl', f: Bp },
    3: { n: 'PtgAdd', f: He },
    4: { n: 'PtgSub', f: He },
    5: { n: 'PtgMul', f: He },
    6: { n: 'PtgDiv', f: He },
    7: { n: 'PtgPower', f: He },
    8: { n: 'PtgConcat', f: He },
    9: { n: 'PtgLt', f: He },
    10: { n: 'PtgLe', f: He },
    11: { n: 'PtgEq', f: He },
    12: { n: 'PtgGe', f: He },
    13: { n: 'PtgGt', f: He },
    14: { n: 'PtgNe', f: He },
    15: { n: 'PtgIsect', f: He },
    16: { n: 'PtgUnion', f: He },
    17: { n: 'PtgRange', f: He },
    18: { n: 'PtgUplus', f: He },
    19: { n: 'PtgUminus', f: He },
    20: { n: 'PtgPercent', f: He },
    21: { n: 'PtgParen', f: He },
    22: { n: 'PtgMissArg', f: He },
    23: { n: 'PtgStr', f: Sp },
    26: { n: 'PtgSheet', f: Yp },
    27: { n: 'PtgEndSheet', f: qp },
    28: { n: 'PtgErr', f: gp },
    29: { n: 'PtgBool', f: Tp },
    30: { n: 'PtgInt', f: Ep },
    31: { n: 'PtgNum', f: wp },
    32: { n: 'PtgArray', f: np },
    33: { n: 'PtgFunc', f: dp },
    34: { n: 'PtgFuncVar', f: pp },
    35: { n: 'PtgName', f: Cp },
    36: { n: 'PtgRef', f: up },
    37: { n: 'PtgArea', f: Zd },
    38: { n: 'PtgMemArea', f: Np },
    39: { n: 'PtgMemErr', f: Pp },
    40: { n: 'PtgMemNoMem', f: Lp },
    41: { n: 'PtgMemFunc', f: Dp },
    42: { n: 'PtgRefErr', f: kp },
    43: { n: 'PtgAreaErr', f: ep },
    44: { n: 'PtgRefN', f: hp },
    45: { n: 'PtgAreaN', f: rp },
    46: { n: 'PtgMemAreaN', f: Jp },
    47: { n: 'PtgMemNoMemN', f: Zp },
    57: { n: 'PtgNameX', f: Op },
    58: { n: 'PtgRef3d', f: xp },
    59: { n: 'PtgArea3d', f: Qd },
    60: { n: 'PtgRefErr3d', f: Ip },
    61: { n: 'PtgAreaErr3d', f: tp },
    255: {},
  },
  ev = {
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
  tv = {
    1: { n: 'PtgElfLel', f: gl },
    2: { n: 'PtgElfRw', f: jp },
    3: { n: 'PtgElfCol', f: Mp },
    6: { n: 'PtgElfRwV', f: zp },
    7: { n: 'PtgElfColV', f: Hp },
    10: { n: 'PtgElfRadical', f: Wp },
    11: { n: 'PtgElfRadicalS', f: Gp },
    13: { n: 'PtgElfColS', f: bp },
    15: { n: 'PtgElfColSV', f: Up },
    16: { n: 'PtgElfRadicalLel', f: Vp },
    25: { n: 'PtgList', f: $p },
    29: { n: 'PtgSxName', f: Kp },
    255: {},
  },
  rv = {
    0: { n: 'PtgAttrNoop', f: Qp },
    1: { n: 'PtgAttrSemi', f: op },
    2: { n: 'PtgAttrIf', f: sp },
    4: { n: 'PtgAttrChoose', f: ip },
    8: { n: 'PtgAttrGoto', f: ap },
    16: { n: 'PtgAttrSum', f: mp },
    32: { n: 'PtgAttrBaxcel', f: $s },
    33: { n: 'PtgAttrBaxcel', f: $s },
    64: { n: 'PtgAttrSpace', f: lp },
    65: { n: 'PtgAttrSpaceSemi', f: cp },
    128: { n: 'PtgAttrIfError', f: fp },
    255: {},
  };
function nv(e, t, r, n) {
  if (n.biff < 8) return tr(e, t);
  for (var i = e.l + t, a = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case 'PtgArray':
        (r[s][1] = Fp(e, 0, n)), a.push(r[s][1]);
        break;
      case 'PtgMemArea':
        (r[s][2] = yp(e, r[s][1], n)), a.push(r[s][2]);
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
  return (t = i - e.l), t !== 0 && a.push(tr(e, t)), a;
}
function iv(e, t, r) {
  for (var n = e.l + t, i, a, s = []; n != e.l; )
    (t = n - e.l),
      (a = e[e.l]),
      (i = Ks[a] || Ks[ev[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? tv : rv)[e[e.l + 1]]),
      !i || !i.f ? tr(e, t) : s.push([i.n, i.f(e, t, r)]);
  return s;
}
function av(e) {
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
var sv = {
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
function fv(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function El(e, t, r) {
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
function Ys(e, t, r) {
  var n = El(e, t, r);
  return n == '#REF' ? n : fv(n, r);
}
function xn(e, t, r, n, i) {
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
  for (var x = -1, m = '', S = 0, y = e[0].length; S < y; ++S) {
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
              m = Be(' ', e[0][x][1][1]);
              break;
            case 1:
              m = Be('\r', e[0][x][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          (o = o + m), (x = -1);
        }
        f.push(o + sv[F[0]] + l);
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
        (c = Un(F[1][1], s, i)), f.push(Hn(c, a));
        break;
      case 'PtgRefN':
        (c = r ? Un(F[1][1], r, i) : F[1][1]), f.push(Hn(c, a));
        break;
      case 'PtgRef3d':
        (h = F[1][1]),
          (c = Un(F[1][2], s, i)),
          (p = Ys(n, h, i)),
          f.push(p + '!' + Hn(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var D = F[1][0],
          W = F[1][1];
        D || (D = 0), (D &= 127);
        var Z = D == 0 ? [] : f.slice(-D);
        (f.length -= D),
          W === 'User' && (W = Z.shift()),
          f.push(W + '(' + Z.join(',') + ')');
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
        (d = Is(F[1][1], r ? { s: r } : s, i)), f.push(La(d, i));
        break;
      case 'PtgArea':
        (d = Is(F[1][1], s, i)), f.push(La(d, i));
        break;
      case 'PtgArea3d':
        (h = F[1][1]),
          (d = F[1][2]),
          (p = Ys(n, h, i)),
          f.push(p + '!' + La(d, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = F[1][2];
        var R = (n.names || [])[u - 1] || (n[0] || [])[u],
          U = R ? R.Name : 'SH33TJSNAME' + String(u);
        U && U.slice(0, 6) == '_xlfn.' && !i.xlfn && (U = U.slice(6)),
          f.push(U);
        break;
      case 'PtgNameX':
        var P = F[1][1];
        u = F[1][2];
        var V;
        if (i.biff <= 5) P < 0 && (P = -P), n[P] && (V = n[P][u]);
        else {
          var z = '';
          if (
            (((n[P] || [])[0] || [])[0] == 14849 ||
              (((n[P] || [])[0] || [])[0] == 1025
                ? n[P][u] &&
                  n[P][u].itab > 0 &&
                  (z = n.SheetNames[n[P][u].itab - 1] + '!')
                : (z = n.SheetNames[u - 1] + '!')),
            n[P] && n[P][u])
          )
            z += n[P][u].Name;
          else if (n[0] && n[0][u]) z += n[0][u].Name;
          else {
            var K = (El(n, P, i) || '').split(';;');
            K[u - 1] ? (z = K[u - 1]) : (z += 'SH33TJSERRX');
          }
          f.push(z);
          break;
        }
        V || (V = { Name: 'SH33TJSERRY' }), f.push(V.Name);
        break;
      case 'PtgParen':
        var re = '(',
          _e = ')';
        if (x >= 0) {
          switch (((m = ''), e[0][x][1][0])) {
            case 2:
              re = Be(' ', e[0][x][1][1]) + re;
              break;
            case 3:
              re = Be('\r', e[0][x][1][1]) + re;
              break;
            case 4:
              _e = Be(' ', e[0][x][1][1]) + _e;
              break;
            case 5:
              _e = Be('\r', e[0][x][1][1]) + _e;
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
        c = { c: F[1][1], r: F[1][0] };
        var le = { c: r.c, r: r.r };
        if (n.sharedf[Se(c)]) {
          var Ge = n.sharedf[Se(c)];
          f.push(xn(Ge, s, le, n, i));
        } else {
          var Ne = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(xn(o[1], s, le, n, i)), (Ne = !0);
              break;
            }
          Ne || f.push(F[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + av(F[1]) + '}');
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
    var wt = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && x >= 0 && wt.indexOf(e[0][S][0]) == -1) {
      F = e[0][x];
      var Ue = !0;
      switch (F[1][0]) {
        case 4:
          Ue = !1;
        case 0:
          m = Be(' ', F[1][1]);
          break;
        case 5:
          Ue = !1;
        case 1:
          m = Be('\r', F[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0]);
      }
      f.push((Ue ? m : '') + f.pop() + (Ue ? '' : m)), (x = -1);
    }
  }
  if (f.length > 1 && i.WTF) throw new Error('bad formula stack');
  return f[0];
}
function ov(e) {
  if (e == null) {
    var t = b(8);
    return (
      t.write_shift(1, 3),
      t.write_shift(1, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 65535),
      t
    );
  } else if (typeof e == 'number') return Hr(e);
  return Hr(0);
}
function lv(e, t, r, n, i) {
  var a = Wr(t, r, i),
    s = ov(e.v),
    f = b(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = b(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var h = Ze([a, s, f, o]);
  return h;
}
function va(e, t, r) {
  var n = e.read_shift(4),
    i = iv(e, n, r),
    a = e.read_shift(4),
    s = a > 0 ? nv(e, a, i, r) : null;
  return [i, s];
}
var cv = va,
  ma = va,
  uv = va,
  hv = va,
  xv = {
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
  Tl = {
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
  dv = {
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
function pv(e) {
  var t = 'of:=' + e.replace(B0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return t.replace(/;/g, '|').replace(/,/g, ';');
}
function vv(e) {
  return e.replace(/\./, '!');
}
var Wn = typeof Map < 'u';
function U0(e, t, r) {
  var n = 0,
    i = e.length;
  if (r) {
    if (Wn ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var a = Wn ? r.get(t) : r[t]; n < a.length; ++n)
        if (e[a[n]].t === t) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === t) return e.Count++, n;
  return (
    (e[i] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (Wn
        ? (r.has(t) || r.set(t, []), r.get(t).push(i))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []),
          r[t].push(i))),
    i
  );
}
function _a(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    t.MDW && (or = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
        ? (n = qi(t.wpx))
        : t.wch != null && (n = t.wch),
    n > -1
      ? ((r.width = r0(n)), (r.customWidth = 1))
      : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  );
}
function wl(e, t) {
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
function Cr(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && r.ssf) {
    for (; i < 392; ++i)
      if (r.ssf[i] == null) {
        mo(t.z, i), (r.ssf[i] = t.z), (r.revssf[t.z] = n = i);
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
function mv(e, t, r) {
  if (e && e['!ref']) {
    var n = Re(e['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + r + '): ' + e['!ref']);
  }
}
function _v(e) {
  if (e.length === 0) return '';
  for (
    var t = '<mergeCells count="' + e.length + '">', r = 0;
    r != e.length;
    ++r
  )
    t += '<mergeCell ref="' + We(e[r]) + '"/>';
  return t + '</mergeCells>';
}
function gv(e, t, r, n, i) {
  var a = !1,
    s = {},
    f = null;
  if (n.bookType !== 'xlsx' && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = Yn(we(l)));
  }
  if (e && e['!outline']) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e['!outline'].above && (o.summaryBelow = 0),
      e['!outline'].left && (o.summaryRight = 0),
      (f = (f || '') + Q('outlinePr', null, o));
  }
  (!a && !f) || (i[i.length] = Q('sheetPr', f, s));
}
var Ev = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  Tv = [
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
function wv(e) {
  var t = { sheet: 1 };
  return (
    Ev.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = '1');
    }),
    Tv.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = '0');
    }),
    e.password && (t.password = al(e.password).toString(16).toUpperCase()),
    Q('sheetProtection', null, t)
  );
}
function Sv(e) {
  return wl(e), Q('pageMargins', null, e);
}
function Av(e, t) {
  for (var r = ['<cols>'], n, i = 0; i != t.length; ++i)
    (n = t[i]) && (r[r.length] = Q('col', null, _a(i, n)));
  return (r[r.length] = '</cols>'), r.join('');
}
function yv(e, t, r, n) {
  var i = typeof e.ref == 'string' ? e.ref : We(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }),
    r.Workbook.Names || (r.Workbook.Names = []);
  var a = r.Workbook.Names,
    s = kt(i);
  s.s.r == s.e.r && ((s.e.r = kt(t['!ref']).e.r), (i = We(s)));
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
    Q('autoFilter', null, { ref: i })
  );
}
function Fv(e, t, r, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    Q('sheetViews', Q('sheetView', null, i), {})
  );
}
function Cv(e, t, r, n) {
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
        i = si[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = ht(e.v, -1).toISOString())
          : ((e = Et(e)), (e.t = 'n'), (i = '' + (e.v = gt(ht(e.v))))),
          typeof e.z > 'u' && (e.z = be[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = Qe('v', we(i)),
    l = { r: t },
    o = Cr(n.cellXfs, e, n);
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
        (f = Qe('v', '' + U0(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null;
    f = Q('f', we(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && r['!links'].push([t, e.l]), e.D && (l.cm = 1), Q('c', f, l);
}
function Ov(e, t, r, n) {
  var i = [],
    a = [],
    s = Re(e['!ref']),
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
    S = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = st(u);
  for (h = s.s.r; h <= s.e.r; ++h) {
    for (a = [], o = et(h), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + o;
      var y = p ? (e[h] || [])[u] : e[l];
      y !== void 0 && (f = Cv(y, l, e, t)) != null && a.push(f);
    }
    (a.length > 0 || (d && d[h])) &&
      ((x = { r: o }),
      d &&
        d[h] &&
        ((m = d[h]),
        m.hidden && (x.hidden = 1),
        (S = -1),
        m.hpx ? (S = Ji(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((x.ht = S), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level)),
      (i[i.length] = Q('row', a.join(''), x)));
  }
  if (d)
    for (; h < d.length; ++h)
      d &&
        d[h] &&
        ((x = { r: h + 1 }),
        (m = d[h]),
        m.hidden && (x.hidden = 1),
        (S = -1),
        m.hpx ? (S = Ji(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((x.ht = S), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level),
        (i[i.length] = Q('row', '', x)));
  return i.join('');
}
function Sl(e, t, r, n) {
  var i = [Ve, Q('worksheet', null, { xmlns: gn[0], 'xmlns:r': $e.r })],
    a = r.SheetNames[e],
    s = 0,
    f = '',
    l = r.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = Re(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = We(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var h = [];
  gv(l, r, e, t, i),
    (i[i.length] = Q('dimension', null, { ref: o })),
    (i[i.length] = Fv(l, t, e, r)),
    t.sheetFormat &&
      (i[i.length] = Q('sheetFormatPr', null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
        baseColWidth: t.sheetFormat.baseColWidth || '10',
        outlineLevelRow: t.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = Av(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = Ov(l, t)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = wv(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = yv(l['!autofilter'], l, r, e)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = _v(l['!merges']));
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
            ((p = Te(n, -1, we(x[1].Target).replace(/#.*$/, ''), ve.HLINK)),
            (d['r:id'] = 'rId' + p)),
          (u = x[1].Target.indexOf('#')) > -1 &&
            (d.location = we(x[1].Target.slice(u + 1))),
          x[1].Tooltip && (d.tooltip = we(x[1].Tooltip)),
          (i[i.length] = Q('hyperlink', null, d)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = Sv(l['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (i[i.length] = Qe(
        'ignoredErrors',
        Q('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    h.length > 0 &&
      ((p = Te(n, -1, '../drawings/drawing' + (e + 1) + '.xml', ve.DRAW)),
      (i[i.length] = Q('drawing', null, { 'r:id': 'rId' + p })),
      (l['!drawing'] = h)),
    l['!comments'].length > 0 &&
      ((p = Te(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', ve.VML)),
      (i[i.length] = Q('legacyDrawing', null, { 'r:id': 'rId' + p })),
      (l['!legacy'] = p)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function Rv(e, t) {
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
function Nv(e, t, r) {
  var n = b(145),
    i = (r['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = Ji(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
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
      for (var h = -1, u = -1, d = c << 10; d < (c + 1) << 10; ++d) {
        o.c = d;
        var p = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[Se(o)];
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
function Dv(e, t, r, n) {
  var i = Nv(n, r, t);
  (i.length > 17 || (t['!rows'] || [])[n]) && G(e, 0, i);
}
var kv = $r,
  Iv = Tn;
function Pv() {}
function Lv(e, t) {
  var r = {},
    n = e[e.l];
  return (
    ++e.l,
    (r.above = !(n & 64)),
    (r.left = !(n & 128)),
    (e.l += 18),
    (r.name = z1(e)),
    r
  );
}
function Bv(e, t, r) {
  r == null && (r = b(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var i = 1; i < 3; ++i) r.write_shift(1, 0);
  return (
    $i({ auto: 1 }, r),
    r.write_shift(-4, -1),
    r.write_shift(-4, -1),
    bo(e, r),
    r.slice(0, r.l)
  );
}
function Mv(e) {
  var t = Ht(e);
  return [t];
}
function bv(e, t, r) {
  return r == null && (r = b(8)), jr(t, r);
}
function Uv(e) {
  var t = zr(e);
  return [t];
}
function Hv(e, t, r) {
  return r == null && (r = b(4)), Xr(t, r);
}
function Wv(e) {
  var t = Ht(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function Vv(e, t, r) {
  return r == null && (r = b(9)), jr(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Gv(e) {
  var t = zr(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function jv(e, t, r) {
  return r == null && (r = b(5)), Xr(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function zv(e) {
  var t = Ht(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function Xv(e, t, r) {
  return r == null && (r = b(9)), jr(t, r), r.write_shift(1, e.v), r;
}
function $v(e) {
  var t = zr(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function Kv(e, t, r) {
  return (
    r == null && (r = b(8)),
    Xr(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  );
}
function Yv(e) {
  var t = Ht(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function qv(e, t, r) {
  return r == null && (r = b(12)), jr(t, r), r.write_shift(4, t.v), r;
}
function Jv(e) {
  var t = zr(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function Zv(e, t, r) {
  return r == null && (r = b(8)), Xr(t, r), r.write_shift(4, t.v), r;
}
function Qv(e) {
  var t = Ht(e),
    r = wn(e);
  return [t, r, 'n'];
}
function e2(e, t, r) {
  return r == null && (r = b(16)), jr(t, r), Hr(e.v, r), r;
}
function t2(e) {
  var t = zr(e),
    r = wn(e);
  return [t, r, 'n'];
}
function r2(e, t, r) {
  return r == null && (r = b(12)), Xr(t, r), Hr(e.v, r), r;
}
function n2(e) {
  var t = Ht(e),
    r = Uo(e);
  return [t, r, 'n'];
}
function i2(e, t, r) {
  return r == null && (r = b(12)), jr(t, r), Ho(e.v, r), r;
}
function a2(e) {
  var t = zr(e),
    r = Uo(e);
  return [t, r, 'n'];
}
function s2(e, t, r) {
  return r == null && (r = b(8)), Xr(t, r), Ho(e.v, r), r;
}
function f2(e) {
  var t = Ht(e),
    r = D0(e);
  return [t, r, 'is'];
}
function o2(e) {
  var t = Ht(e),
    r = ft(e);
  return [t, r, 'str'];
}
function l2(e, t, r) {
  return (
    r == null && (r = b(12 + 4 * e.v.length)),
    jr(t, r),
    Ye(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function c2(e) {
  var t = zr(e),
    r = ft(e);
  return [t, r, 'str'];
}
function u2(e, t, r) {
  return (
    r == null && (r = b(8 + 4 * e.v.length)),
    Xr(t, r),
    Ye(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function h2(e, t, r) {
  var n = e.l + t,
    i = Ht(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (r.cellFormula) {
    e.l += 2;
    var f = ma(e, n - e.l, r);
    s[3] = xn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function x2(e, t, r) {
  var n = e.l + t,
    i = Ht(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (r.cellFormula) {
    e.l += 2;
    var f = ma(e, n - e.l, r);
    s[3] = xn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function d2(e, t, r) {
  var n = e.l + t,
    i = Ht(e);
  i.r = r['!row'];
  var a = wn(e),
    s = [i, a, 'n'];
  if (r.cellFormula) {
    e.l += 2;
    var f = ma(e, n - e.l, r);
    s[3] = xn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function p2(e, t, r) {
  var n = e.l + t,
    i = Ht(e);
  i.r = r['!row'];
  var a = ft(e),
    s = [i, a, 'str'];
  if (r.cellFormula) {
    e.l += 2;
    var f = ma(e, n - e.l, r);
    s[3] = xn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
var v2 = $r,
  m2 = Tn;
function _2(e, t) {
  return t == null && (t = b(4)), t.write_shift(4, e), t;
}
function g2(e, t) {
  var r = e.l + t,
    n = $r(e),
    i = k0(e),
    a = ft(e),
    s = ft(e),
    f = ft(e);
  e.l = r;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function E2(e, t) {
  var r = b(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  Tn({ s: Ke(e[0]), e: Ke(e[0]) }, r), I0('rId' + t, r);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return Ye(i || '', r), Ye(e[1].Tooltip || '', r), Ye('', r), r.slice(0, r.l);
}
function T2() {}
function w2(e, t, r) {
  var n = e.l + t,
    i = Wo(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), r.cellFormula)) {
    var f = cv(e, n - e.l, r);
    s[1] = f;
  } else e.l = n;
  return s;
}
function S2(e, t, r) {
  var n = e.l + t,
    i = $r(e),
    a = [i];
  if (r.cellFormula) {
    var s = hv(e, n - e.l, r);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function A2(e, t, r) {
  r == null && (r = b(18));
  var n = _a(e, t);
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
var Al = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function y2(e) {
  var t = {};
  return (
    Al.forEach(function (r) {
      t[r] = wn(e);
    }),
    t
  );
}
function F2(e, t) {
  return (
    t == null && (t = b(6 * 8)),
    wl(e),
    Al.forEach(function (r) {
      Hr(e[r], t);
    }),
    t
  );
}
function C2(e) {
  var t = e.read_shift(2);
  return (e.l += 28), { RTL: t & 32 };
}
function O2(e, t, r) {
  r == null && (r = b(30));
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
function R2(e) {
  var t = b(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), Tn(e, t), t;
}
function N2(e, t) {
  return (
    t == null && (t = b(16 * 4 + 2)),
    t.write_shift(2, e.password ? al(e.password) : 0),
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
function D2() {}
function k2() {}
function I2(e, t, r, n, i, a, s) {
  if (t.v === void 0) return !1;
  var f = '';
  switch (t.t) {
    case 'b':
      f = t.v ? '1' : '0';
      break;
    case 'd':
      (t = Et(t)), (t.z = t.z || be[14]), (t.v = gt(ht(t.v))), (t.t = 'n');
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
    ((l.s = Cr(i.cellXfs, t, i)),
    t.l && a['!links'].push([Se(l), t.l]),
    t.c && a['!comments'].push([Se(l), t.c]),
    t.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = U0(i.Strings, t.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? G(e, 18, Zv(t, l)) : G(e, 7, qv(t, l)))
          : ((l.t = 'str'), s ? G(e, 17, u2(t, l)) : G(e, 6, l2(t, l))),
        !0
      );
    case 'n':
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? G(e, 13, s2(t, l))
            : G(e, 2, i2(t, l))
          : s
            ? G(e, 16, r2(t, l))
            : G(e, 5, e2(t, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? G(e, 15, jv(t, l)) : G(e, 4, Vv(t, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? G(e, 14, Kv(t, l)) : G(e, 3, Xv(t, l)), !0;
  }
  return s ? G(e, 12, Hv(t, l)) : G(e, 1, bv(t, l)), !0;
}
function P2(e, t, r, n) {
  var i = Re(t['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  G(e, 145);
  var l = Array.isArray(t),
    o = i.e.r;
  t['!rows'] && (o = Math.max(i.e.r, t['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = et(c)), Dv(e, t, i, c);
    var h = !1;
    if (c <= i.e.r)
      for (var u = i.s.c; u <= i.e.c; ++u) {
        c === i.s.r && (f[u] = st(u)), (a = f[u] + s);
        var d = l ? (t[c] || [])[u] : t[a];
        if (!d) {
          h = !1;
          continue;
        }
        h = I2(e, d, c, u, n, t, h);
      }
  }
  G(e, 146);
}
function L2(e, t) {
  !t ||
    !t['!merges'] ||
    (G(e, 177, _2(t['!merges'].length)),
    t['!merges'].forEach(function (r) {
      G(e, 176, m2(r));
    }),
    G(e, 178));
}
function B2(e, t) {
  !t ||
    !t['!cols'] ||
    (G(e, 390),
    t['!cols'].forEach(function (r, n) {
      r && G(e, 60, A2(n, r));
    }),
    G(e, 391));
}
function M2(e, t) {
  !t || !t['!ref'] || (G(e, 648), G(e, 649, R2(Re(t['!ref']))), G(e, 650));
}
function b2(e, t, r) {
  t['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = Te(r, -1, n[1].Target.replace(/#.*$/, ''), ve.HLINK);
      G(e, 494, E2(n, i));
    }
  }),
    delete t['!links'];
}
function U2(e, t, r, n) {
  if (t['!comments'].length > 0) {
    var i = Te(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', ve.VML);
    G(e, 551, I0('rId' + i)), (t['!legacy'] = i);
  }
}
function H2(e, t, r, n) {
  if (t['!autofilter']) {
    var i = t['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : We(i.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }),
      r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names,
      f = kt(a);
    f.s.r == f.e.r && ((f.e.r = kt(t['!ref']).e.r), (a = We(f)));
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
      G(e, 161, Tn(Re(a))),
      G(e, 162);
  }
}
function W2(e, t, r) {
  G(e, 133), G(e, 137, O2(t, r)), G(e, 138), G(e, 134);
}
function V2(e, t) {
  t['!protect'] && G(e, 535, N2(t['!protect']));
}
function G2(e, t, r, n) {
  var i = _t(),
    a = r.SheetNames[e],
    s = r.Sheets[a] || {},
    f = a;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = Re(s['!ref'] || 'A1');
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
    (r.vbaraw || s['!outline']) && G(i, 147, Bv(f, s['!outline'])),
    G(i, 148, Iv(l)),
    W2(i, s, r.Workbook),
    B2(i, s),
    P2(i, s, e, t),
    V2(i, s),
    H2(i, s, r, e),
    L2(i, s),
    b2(i, s, n),
    s['!margins'] && G(i, 476, F2(s['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) && M2(i, s),
    U2(i, s, e, n),
    G(i, 130),
    i.end()
  );
}
function j2(e, t) {
  e.l += 10;
  var r = ft(e);
  return { name: r };
}
var z2 = [
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
function X2(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : S1(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var $2 = '][*?/\\'.split('');
function yl(e, t) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var r = !0;
  return (
    $2.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    r
  );
}
function K2(e, t, r) {
  e.forEach(function (n, i) {
    yl(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (r) {
      var s = (t && t[i] && t[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function Y2(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var t = (e.Workbook && e.Workbook.Sheets) || [];
  K2(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    mv(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Fl(e) {
  var t = [Ve];
  t[t.length] = Q('workbook', null, { xmlns: gn[0], 'xmlns:r': $e.r });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  e.Workbook &&
    e.Workbook.WBProps &&
    (z2.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = Q('workbookPr', null, n));
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
    var s = { name: we(e.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    t[t.length] = Q('sheet', null, s);
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
            f.Ref && (t[t.length] = Q('definedName', we(f.Ref), l));
        }),
      (t[t.length] = '</definedNames>')),
    t.length > 2 &&
      ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function q2(e, t) {
  var r = {};
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = t0(e)),
    (r.name = ft(e)),
    r
  );
}
function J2(e, t) {
  return (
    t || (t = b(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    I0(e.strRelID, t),
    Ye(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function Z2(e, t) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var i = t > 8 ? ft(e) : '';
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
function Q2(e, t) {
  t || (t = b(72));
  var r = 0;
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    bo((e && e.CodeName) || 'ThisWorkbook', t),
    t.slice(0, t.l)
  );
}
function em(e, t, r) {
  var n = e.l + t;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = X1(e),
    s = uv(e, 0, r),
    f = k0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function tm(e, t) {
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
    G(e, 156, J2(i));
  }
  G(e, 144);
}
function rm(e, t) {
  t || (t = b(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return (
    Ye('SheetJS', t),
    Ye(Ui.version, t),
    Ye(Ui.version, t),
    Ye('7262', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function nm(e, t) {
  t || (t = b(29)),
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
function im(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, i = -1, a = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && i == -1)
        ? (i = n)
        : r[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (G(e, 135), G(e, 158, nm(i)), G(e, 136));
  }
}
function am(e, t) {
  var r = _t();
  return (
    G(r, 131),
    G(r, 128, rm()),
    G(r, 153, Q2((e.Workbook && e.Workbook.WBProps) || null)),
    im(r, e),
    tm(r, e),
    G(r, 132),
    r.end()
  );
}
function sm(e, t, r) {
  return (t.slice(-4) === '.bin' ? am : Fl)(e);
}
function fm(e, t, r, n, i) {
  return (t.slice(-4) === '.bin' ? G2 : Sl)(e, r, n, i);
}
function om(e, t, r) {
  return (t.slice(-4) === '.bin' ? Fd : ol)(e, r);
}
function lm(e, t, r) {
  return (t.slice(-4) === '.bin' ? Qx : il)(e, r);
}
function cm(e, t, r) {
  return (t.slice(-4) === '.bin' ? Vd : xl)(e);
}
function um(e) {
  return (e.slice(-4) === '.bin' ? Pd : ul)();
}
function hm(e, t) {
  var r = [];
  return (
    e.Props && r.push(ox(e.Props, t)),
    e.Custprops && r.push(lx(e.Props, e.Custprops)),
    r.join('')
  );
}
function xm() {
  return '';
}
function dm(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    t.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(Q('NumberFormat', null, { 'ss:Format': we(be[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      r.push(Q('Style', a.join(''), s));
    }),
    Q('Styles', r.join(''))
  );
}
function Cl(e) {
  return Q('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + M0(e.Ref, { r: 0, c: 0 }),
  });
}
function pm(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var i = t[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || r.push(Cl(i)));
  }
  return Q('Names', r.join(''));
}
function vm(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || a.push(Cl(f)));
  }
  return a.join('');
}
function mm(e, t, r, n) {
  if (!e) return '';
  var i = [];
  if (
    (e['!margins'] &&
      (i.push('<PageSetup>'),
      e['!margins'].header &&
        i.push(Q('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer &&
        i.push(Q('Footer', null, { 'x:Margin': e['!margins'].footer })),
      i.push(
        Q('PageMargins', null, {
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
        Q(
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
      (i.push(Qe('ProtectContents', 'True')),
      e['!protect'].objects && i.push(Qe('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(Qe('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(Qe('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(Qe('EnableSelection', 'UnlockedCells')),
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
    i.length == 0 ? '' : Q('WorksheetOptions', i.join(''), { xmlns: Rt.x })
  );
}
function _m(e) {
  return e
    .map(function (t) {
      var r = w1(t.t || ''),
        n = Q('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return Q('Comment', n, { 'ss:Author': t.a });
    })
    .join('');
}
function gm(e, t, r, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + we(M0(e.f, s))),
    e.F && e.F.slice(0, t.length) == t)
  ) {
    var l = Ke(e.F.slice(t.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = we(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = we(e.l.Tooltip))),
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
      (h = 'Error'), (u = si[e.v]);
      break;
    case 'd':
      (h = 'DateTime'),
        (u = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || be[14]);
      break;
    case 's':
      (h = 'String'), (u = T1(e.v || ''));
      break;
  }
  var d = Cr(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + d)), (f['ss:Index'] = s.c + 1);
  var p = e.v != null ? u : '',
    x = e.t == 'z' ? '' : '<Data ss:Type="' + h + '">' + p + '</Data>';
  return (e.c || []).length > 0 && (x += _m(e.c)), Q('Cell', x, f);
}
function Em(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = fl(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + '>'
  );
}
function Tm(e, t, r, n) {
  if (!e['!ref']) return '';
  var i = Re(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, S) {
      L0(m);
      var y = !!m.width,
        F = _a(S, m),
        D = { 'ss:Index': S + 1 };
      y && (D['ss:Width'] = Yi(F.width)),
        m.hidden && (D['ss:Hidden'] = '1'),
        f.push(Q('Column', null, D));
    });
  for (var l = Array.isArray(e), o = i.s.r; o <= i.e.r; ++o) {
    for (var c = [Em(o, (e['!rows'] || [])[o])], h = i.s.c; h <= i.e.c; ++h) {
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
          p = Se(d),
          x = l ? (e[o] || [])[h] : e[p];
        c.push(gm(x, p, e, t, r, n, d));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function wm(e, t, r) {
  var n = [],
    i = r.SheetNames[e],
    a = r.Sheets[i],
    s = a ? vm(a, t, e, r) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? Tm(a, t, e, r) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(mm(a, t, e, r)),
    n.join('')
  );
}
function Sm(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = Et(be)),
    e.SSF &&
      (xa(),
      ha(e.SSF),
      (t.revssf = da(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      Cr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(hm(e, t)), r.push(xm()), r.push(''), r.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(Q('Worksheet', wm(n, t, e), { 'ss:Name': we(e.SheetNames[n]) }));
  return (
    (r[2] = dm(e, t)),
    (r[3] = pm(e)),
    Ve +
      Q('Workbook', r.join(''), {
        xmlns: Rt.ss,
        'xmlns:o': Rt.o,
        'xmlns:x': Rt.x,
        'xmlns:ss': Rt.ss,
        'xmlns:dt': Rt.dt,
        'xmlns:html': Rt.html,
      })
  );
}
var ba = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function Am(e, t) {
  var r = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = ws(Ls, 'n'),
    l = ws(Bs, 'n');
  if (e.Props)
    for (s = tt(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? r
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = tt(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    Jo.indexOf(i[a][0]) > -1 ||
      Ko.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Ae.utils.cfb_add(t, '/SummaryInformation', Ws(n, ba.SI, l, Bs)),
    (r.length || o.length) &&
      Ae.utils.cfb_add(
        t,
        '/DocumentSummaryInformation',
        Ws(r, ba.DSI, f, Ls, o.length ? o : null, ba.UDI),
      );
}
function ym(e, t) {
  var r = t || {},
    n = Ae.utils.cfb_new({ root: 'R' }),
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
    Ae.utils.cfb_add(n, i, Ol(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && Am(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      Gd(
        n,
        Ae.read(e.vbaraw, {
          type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var Fm = {
  0: { f: Rv },
  1: { f: Mv },
  2: { f: n2 },
  3: { f: zv },
  4: { f: Wv },
  5: { f: Qv },
  6: { f: o2 },
  7: { f: Yv },
  8: { f: p2 },
  9: { f: d2 },
  10: { f: h2 },
  11: { f: x2 },
  12: { f: Uv },
  13: { f: a2 },
  14: { f: $v },
  15: { f: Gv },
  16: { f: t2 },
  17: { f: c2 },
  18: { f: Jv },
  19: { f: D0 },
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
  39: { f: em },
  40: {},
  42: {},
  43: { f: od },
  44: { f: sd },
  45: { f: ud },
  46: { f: xd },
  47: { f: hd },
  48: {},
  49: { f: U1 },
  50: {},
  51: { f: Rd },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Hx },
  62: { f: f2 },
  63: { f: Ld },
  64: { f: D2 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: tr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: C2 },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: Lv },
  148: { f: kv, p: 16 },
  151: { f: T2 },
  152: {},
  153: { f: Z2 },
  154: {},
  155: {},
  156: { f: q2 },
  157: {},
  158: {},
  159: { T: 1, f: qx },
  160: { T: -1 },
  161: { T: 1, f: $r },
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
  176: { f: v2 },
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
  335: { f: Cd },
  336: { T: -1 },
  337: { f: kd, T: 1 },
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
  355: { f: t0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Px },
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
  426: { f: w2 },
  427: { f: S2 },
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
  476: { f: y2 },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: Pv },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: g2 },
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
  550: { f: t0 },
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
  632: { f: Hd },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: bd },
  636: { T: -1 },
  637: { f: G1 },
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
  651: { f: j2 },
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
  1053: { f: k2 },
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
function ee(e, t, r, n) {
  var i = t;
  if (!isNaN(i)) {
    var a = n || (r || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && O0(r) && e.push(r);
  }
}
function Cm(e, t, r, n) {
  var i = (r || []).length || 0;
  if (i <= 8224) return ee(e, t, r, i);
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
function oi(e, t, r) {
  return (
    e || (e = b(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function Om(e, t, r, n) {
  var i = b(9);
  return oi(i, e, t), Qo(r, n || 'b', i), i;
}
function Rm(e, t, r) {
  var n = b(8 + 2 * r.length);
  return (
    oi(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function Nm(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case 'd':
      case 'n':
        var i = t.t == 'd' ? gt(ht(t.v)) : t.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? ee(e, 2, jx(r, n, i))
          : ee(e, 3, Gx(r, n, i));
        return;
      case 'b':
      case 'e':
        ee(e, 5, Om(r, n, t.v, t.t));
        return;
      case 's':
      case 'str':
        ee(e, 4, Rm(r, n, (t.v || '').slice(0, 255)));
        return;
    }
  ee(e, 1, oi(null, r, n));
}
function Dm(e, t, r, n) {
  var i = Array.isArray(t),
    a = Re(t['!ref'] || 'A1'),
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
      (s = We(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = et(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = st(c)), (s = l[c] + f);
      var h = i ? (t[o] || [])[c] : t[s];
      h && Nm(e, h, o, c);
    }
  }
}
function km(e, t) {
  for (var r = t || {}, n = _t(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == r.sheet && (i = a);
  if (i == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error('Sheet not found: ' + r.sheet);
  return (
    ee(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, P0(e, 16, r)),
    Dm(n, e.Sheets[e.SheetNames[i]], i, r),
    ee(n, 10),
    n.end()
  );
}
function Im(e, t, r) {
  ee(e, 49, Fx({ sz: 12, name: 'Arial' }, r));
}
function Pm(e, t, r) {
  t &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        t[i] != null && ee(e, 1054, Rx(i, t[i], r));
    });
}
function Lm(e, t) {
  var r = b(19);
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    ee(e, 2151, r),
    (r = b(39)),
    r.write_shift(4, 2152),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 1),
    r.write_shift(4, 4),
    r.write_shift(2, 0),
    rl(Re(t['!ref'] || 'A1'), r),
    r.write_shift(4, 4),
    ee(e, 2152, r);
}
function Bm(e, t) {
  for (var r = 0; r < 16; ++r) ee(e, 224, Gs({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function (n) {
    ee(e, 224, Gs(n, 0, t));
  });
}
function Mm(e, t) {
  for (var r = 0; r < t['!links'].length; ++r) {
    var n = t['!links'][r];
    ee(e, 440, Mx(n)), n[1].Tooltip && ee(e, 2048, bx(n));
  }
  delete t['!links'];
}
function bm(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function (n, i) {
      ++r <= 256 && n && ee(e, 125, Wx(_a(i, n), i));
    });
  }
}
function Um(e, t, r, n, i) {
  var a = 16 + Cr(i.cellXfs, t, i);
  if (t.v == null && !t.bf) {
    ee(e, 513, Wr(r, n, a));
    return;
  }
  if (t.bf) ee(e, 6, lv(t, r, n, i, a));
  else
    switch (t.t) {
      case 'd':
      case 'n':
        var s = t.t == 'd' ? gt(ht(t.v)) : t.v;
        ee(e, 515, Ix(r, n, s, a));
        break;
      case 'b':
      case 'e':
        ee(e, 517, kx(r, n, t.v, a, i, t.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = U0(i.Strings, t.v, i.revStrings);
          ee(e, 253, Cx(r, n, f, a));
        } else ee(e, 516, Ox(r, n, (t.v || '').slice(0, 255), a, i));
        break;
      default:
        ee(e, 513, Wr(r, n, a));
    }
}
function Hm(e, t, r) {
  var n = _t(),
    i = r.SheetNames[e],
    a = r.Sheets[i] || {},
    s = (r || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = t.biff == 8,
    c,
    h = '',
    u = [],
    d = Re(a['!ref'] || 'A1'),
    p = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= p) {
    if (t.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (d.e.c = Math.min(d.e.c, 255)), (d.e.r = Math.min(d.e.c, p - 1));
  }
  ee(n, 2057, P0(r, 16, t)),
    ee(n, 13, Bt(1)),
    ee(n, 12, Bt(100)),
    ee(n, 15, ut(!0)),
    ee(n, 17, ut(!1)),
    ee(n, 16, Hr(0.001)),
    ee(n, 95, ut(!0)),
    ee(n, 42, ut(!1)),
    ee(n, 43, ut(!1)),
    ee(n, 130, Bt(1)),
    ee(n, 128, Dx()),
    ee(n, 131, ut(!1)),
    ee(n, 132, ut(!1)),
    o && bm(n, a['!cols']),
    ee(n, 512, Nx(d, t)),
    o && (a['!links'] = []);
  for (var x = d.s.r; x <= d.e.r; ++x) {
    h = et(x);
    for (var m = d.s.c; m <= d.e.c; ++m) {
      x === d.s.r && (u[m] = st(m)), (c = u[m] + h);
      var S = l ? (a[x] || [])[m] : a[c];
      S && (Um(n, S, x, m, t), o && S.l && a['!links'].push([c, S.l]));
    }
  }
  var y = f.CodeName || f.name || i;
  return (
    o && ee(n, 574, yx((s.Views || [])[0])),
    o && (a['!merges'] || []).length && ee(n, 229, Bx(a['!merges'])),
    o && Mm(n, a),
    ee(n, 442, tl(y)),
    o && Lm(n, a),
    ee(n, 10),
    n.end()
  );
}
function Wm(e, t, r) {
  var n = _t(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = r.biff == 8,
    l = r.biff == 5;
  if (
    (ee(n, 2057, P0(e, 5, r)),
    r.bookType == 'xla' && ee(n, 135),
    ee(n, 225, f ? Bt(1200) : null),
    ee(n, 193, hx(2)),
    l && ee(n, 191),
    l && ee(n, 192),
    ee(n, 226),
    ee(n, 92, Tx('SheetJS', r)),
    ee(n, 66, Bt(f ? 1200 : 1252)),
    f && ee(n, 353, Bt(0)),
    f && ee(n, 448),
    ee(n, 317, Vx(e.SheetNames.length)),
    f && e.vbaraw && ee(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    ee(n, 442, tl(o));
  }
  ee(n, 156, Bt(17)),
    ee(n, 25, ut(!1)),
    ee(n, 18, ut(!1)),
    ee(n, 19, Bt(0)),
    f && ee(n, 431, ut(!1)),
    f && ee(n, 444, Bt(0)),
    ee(n, 61, Ax()),
    ee(n, 64, ut(!1)),
    ee(n, 141, Bt(0)),
    ee(n, 34, ut(X2(e) == 'true')),
    ee(n, 14, ut(!0)),
    f && ee(n, 439, ut(!1)),
    ee(n, 218, Bt(0)),
    Im(n, e, r),
    Pm(n, e.SSF, r),
    Bm(n, r),
    f && ee(n, 352, ut(!1));
  var c = n.end(),
    h = _t();
  f && ee(h, 140, Ux()), f && r.Strings && Cm(h, 252, Sx(r.Strings)), ee(h, 10);
  var u = h.end(),
    d = _t(),
    p = 0,
    x = 0;
  for (x = 0; x < e.SheetNames.length; ++x)
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[x].length;
  var m = c.length + p + u.length;
  for (x = 0; x < e.SheetNames.length; ++x) {
    var S = a[x] || {};
    ee(
      d,
      133,
      wx({ pos: m, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[x] }, r),
    ),
      (m += t[x].length);
  }
  var y = d.end();
  if (p != y.length) throw new Error('BS8 ' + p + ' != ' + y.length);
  var F = [];
  return (
    c.length && F.push(c), y.length && F.push(y), u.length && F.push(u), Ze(F)
  );
}
function Vm(e, t) {
  var r = t || {},
    n = [];
  e && !e.SSF && (e.SSF = Et(be)),
    e &&
      e.SSF &&
      (xa(),
      ha(e.SSF),
      (r.revssf = da(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    H0(r),
    (r.cellXfs = []),
    Cr(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = Hm(i, r, e);
  return n.unshift(Wm(e, n, r)), Ze(n);
}
function Ol(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n['!ref'])) {
      var i = kt(n['!ref']);
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
      return Vm(e, t);
    case 4:
    case 3:
    case 2:
      return km(e, t);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function Gm(e, t, r, n) {
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
      var c = Se({ r, c: s }),
        h = n.dense ? (e[r] || [])[s] : e[c],
        u = (h && h.v != null && (h.h || E1(h.w || (ur(h), h.w) || ''))) || '',
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
        a.push(Q('td', u, d));
    }
  }
  var p = '<tr>';
  return p + a.join('') + '</tr>';
}
var jm =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  zm = '</body></html>';
function Xm(e, t, r) {
  var n = [];
  return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>';
}
function Rl(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : jm,
    i = r.footer != null ? r.footer : zm,
    a = [n],
    s = kt(e['!ref']);
  (r.dense = Array.isArray(e)), a.push(Xm(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(Gm(e, s, f, r));
  return a.push('</table>' + i), a.join('');
}
function Nl(e, t, r) {
  var n = r || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? Ke(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = t.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = kt(e['!ref']);
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
    S = 0,
    y = 0,
    F = 0;
  for (e['!cols'] || (e['!cols'] = []); p < f.length && x < l; ++p) {
    var D = f[p];
    if (qs(D)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var W = D.children;
    for (m = S = 0; m < W.length; ++m) {
      var Z = W[m];
      if (!(n.display && qs(Z))) {
        var R = Z.hasAttribute('data-v')
            ? Z.getAttribute('data-v')
            : Z.hasAttribute('v')
              ? Z.getAttribute('v')
              : A1(Z.innerHTML),
          U = Z.getAttribute('data-z') || Z.getAttribute('z');
        for (u = 0; u < h.length; ++u) {
          var P = h[u];
          P.s.c == S + a &&
            P.s.r < x + i &&
            x + i <= P.e.r &&
            ((S = P.e.c + 1 - a), (u = -1));
        }
        (F = +Z.getAttribute('colspan') || 1),
          ((y = +Z.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            h.push({
              s: { r: x + i, c: S + a },
              e: { r: x + i + (y || 1) - 1, c: S + a + (F || 1) - 1 },
            });
        var V = { t: 's', v: R },
          z = Z.getAttribute('data-t') || Z.getAttribute('t') || '';
        R != null &&
          (R.length == 0
            ? (V.t = z || 'z')
            : n.raw ||
              R.trim().length == 0 ||
              z == 's' ||
              (R === 'TRUE'
                ? (V = { t: 'b', v: !0 })
                : R === 'FALSE'
                  ? (V = { t: 'b', v: !1 })
                  : isNaN(fr(R))
                    ? isNaN(Kn(R).getDate()) ||
                      ((V = { t: 'd', v: ht(R) }),
                      n.cellDates || (V = { t: 'n', v: gt(V.v) }),
                      (V.z = n.dateNF || be[14]))
                    : (V = { t: 'n', v: fr(R) }))),
          V.z === void 0 && U != null && (V.z = U);
        var K = '',
          re = Z.getElementsByTagName('A');
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
        K && K.charAt(0) != '#' && (V.l = { Target: K }),
          n.dense
            ? (e[x + i] || (e[x + i] = []), (e[x + i][S + a] = V))
            : (e[Se({ c: S + a, r: x + i })] = V),
          o.e.c < S + a && (o.e.c = S + a),
          (S += F);
      }
    }
    ++x;
  }
  return (
    h.length && (e['!merges'] = (e['!merges'] || []).concat(h)),
    (o.e.r = Math.max(o.e.r, x - 1 + i)),
    (e['!ref'] = We(o)),
    x >= l && (e['!fullref'] = We(((o.e.r = f.length - p + x - 1 + i), o))),
    e
  );
}
function Dl(e, t) {
  var r = t || {},
    n = r.dense ? [] : {};
  return Nl(n, e, t);
}
function $m(e, t) {
  return Gr(Dl(e, t), t);
}
function qs(e) {
  var t = '',
    r = Km(e);
  return (
    r && (t = r(e).getPropertyValue('display')),
    t || (t = e.style && e.style.display),
    t === 'none'
  );
}
function Km(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var Ym = (function () {
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
        qn({
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
      return Ve + t;
    };
  })(),
  Js = (function () {
    var e = function (a) {
        return we(a)
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
            we(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          h = kt(a['!ref'] || 'A1'),
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
            l.push(t);
          for (; c <= h.e.c; ++c) {
            var S = !1,
              y = {},
              F = '';
            for (d = 0; d != u.length; ++d)
              if (
                !(u[d].s.c > c) &&
                !(u[d].s.r > o) &&
                !(u[d].e.c < c) &&
                !(u[d].e.r < o)
              ) {
                (u[d].s.c != c || u[d].s.r != o) && (S = !0),
                  (y['table:number-columns-spanned'] = u[d].e.c - u[d].s.c + 1),
                  (y['table:number-rows-spanned'] = u[d].e.r - u[d].s.r + 1);
                break;
              }
            if (S) {
              l.push(r);
              continue;
            }
            var D = Se({ r: o, c }),
              W = p ? (a[o] || [])[c] : a[D];
            if (
              W &&
              W.f &&
              ((y['table:formula'] = we(pv(W.f))),
              W.F && W.F.slice(0, D.length) == D)
            ) {
              var Z = kt(W.F);
              (y['table:number-matrix-columns-spanned'] = Z.e.c - Z.s.c + 1),
                (y['table:number-matrix-rows-spanned'] = Z.e.r - Z.s.r + 1);
            }
            if (!W) {
              l.push(t);
              continue;
            }
            switch (W.t) {
              case 'b':
                (F = W.v ? 'TRUE' : 'FALSE'),
                  (y['office:value-type'] = 'boolean'),
                  (y['office:boolean-value'] = W.v ? 'true' : 'false');
                break;
              case 'n':
                (F = W.w || String(W.v || 0)),
                  (y['office:value-type'] = 'float'),
                  (y['office:value'] = W.v || 0);
                break;
              case 's':
              case 'str':
                (F = W.v == null ? '' : W.v),
                  (y['office:value-type'] = 'string');
                break;
              case 'd':
                (F = W.w || ht(W.v).toISOString()),
                  (y['office:value-type'] = 'date'),
                  (y['office:date-value'] = ht(W.v).toISOString()),
                  (y['table:style-name'] = 'ce1');
                break;
              default:
                l.push(t);
                continue;
            }
            var R = e(F);
            if (W.l && W.l.Target) {
              var U = W.l.Target;
              (U = U.charAt(0) == '#' ? '#' + vv(U.slice(1)) : U),
                U.charAt(0) != '#' && !U.match(/^\w+:/) && (U = '../' + U),
                (R = Q('text:a', R, {
                  'xlink:href': U.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                Q('table:table-cell', Q('text:p', R, {}), y) +
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
                L0(h), (h.ods = f);
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
      var l = [Ve],
        o = qn({
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
        c = qn({
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
          l.push(Xo().replace(/office:document-meta/g, 'office:meta')))
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
function kl(e, t) {
  if (t.bookType == 'fods') return Js(e, t);
  var r = A0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    he(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    he(r, n, Js(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    he(r, n, Ym(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    he(r, n, Ve + Xo()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    he(r, n, fx(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    he(r, n, ax(i)),
    r
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function Zi(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function qm(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : jt(Yn(e));
}
function Jm(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e;
    return !0;
  }
  return !1;
}
function Fr(e) {
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
function Zm(e, t, r) {
  var n =
      Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    i = r / Math.pow(10, n - 6176);
  (e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[t + a] = i & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Jn(e, t) {
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
function Ee(e) {
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
function hn(e) {
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
function ze(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      i = Jn(e, r),
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
        (s = Jn(e, r)), (f = e.slice(r[0], r[0] + s)), (r[0] += s);
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
function qe(e) {
  var t = [];
  return (
    e.forEach(function (r, n) {
      r.forEach(function (i) {
        i.data &&
          (t.push(Ee(n * 8 + i.type)),
          i.type == 2 && t.push(Ee(i.data.length)),
          t.push(i.data));
      });
    }),
    Fr(t)
  );
}
function Vt(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var i = Jn(e, n),
      a = ze(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: hn(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = ze(f.data),
        o = hn(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (t = a[3]) != null && t[0] && (s.merge = hn(a[3][0].data) >>> 0 > 0),
      r.push(s);
  }
  return r;
}
function nn(e) {
  var t = [];
  return (
    e.forEach(function (r) {
      var n = [];
      (n[1] = [{ data: Ee(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: Ee(+!!r.merge), type: 0 }]);
      var i = [];
      r.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: Ee(s.data.length) }]),
          n[2].push({ data: qe(s.meta), type: 2 });
      });
      var a = qe(n);
      t.push(Ee(a.length)),
        t.push(a),
        i.forEach(function (s) {
          return t.push(s);
        });
    }),
    Fr(t)
  );
}
function Qm(e, t) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var r = [0], n = Jn(t, r), i = []; r[0] < t.length; ) {
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
        (i = [Fr(i)]),
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
  var c = Fr(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Gt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      i = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), t.push(Qm(n, e.slice(r, r + i))), (r += i);
  }
  if (r !== e.length) throw new Error('data is not a valid framed stream!');
  return Fr(t);
}
function an(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      i = new Uint8Array(4);
    t.push(i);
    var a = Ee(n),
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
  return Fr(t);
}
function Ua(e, t) {
  var r = new Uint8Array(32),
    n = Zi(r),
    i = 12,
    a = 0;
  switch (((r[0] = 5), e.t)) {
    case 'n':
      (r[1] = 2), Zm(r, i, e.v), (a |= 1), (i += 16);
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
function Ha(e, t) {
  var r = new Uint8Array(32),
    n = Zi(r),
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
function vr(e) {
  var t = ze(e);
  return Jn(t[1][0].data);
}
function e_(e, t, r) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      hn(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = Zi(e[7][0].data),
      c = 0,
      h = [],
      u = Zi(e[4][0].data),
      d = 0,
      p = [],
      x = 0;
    x < t.length;
    ++x
  ) {
    if (t[x] == null) {
      o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, c, !0), u.setUint16(x * 2, d, !0);
    var m, S;
    switch (typeof t[x]) {
      case 'string':
        (m = Ua({ t: 's', v: t[x] }, r)), (S = Ha({ t: 's', v: t[x] }, r));
        break;
      case 'number':
        (m = Ua({ t: 'n', v: t[x] }, r)), (S = Ha({ t: 'n', v: t[x] }, r));
        break;
      case 'boolean':
        (m = Ua({ t: 'b', v: t[x] }, r)), (S = Ha({ t: 'b', v: t[x] }, r));
        break;
      default:
        throw new Error('Unsupported value ' + t[x]);
    }
    h.push(m), (c += m.length), p.push(S), (d += S.length), ++l;
  }
  for (e[2][0].data = Ee(l); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535, !0);
  return (e[6][0].data = Fr(h)), (e[3][0].data = Fr(p)), l;
}
function t_(e, t) {
  if (!t || !t.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = kt(r['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(We(n)),
      );
  var a = Qi(r, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (B) {
    return B.forEach(function (O) {
      typeof O == 'string' && s.push(O);
    });
  });
  var f = {},
    l = [],
    o = Ae.read(t.numbers, { type: 'base64' });
  o.FileIndex.map(function (B, O) {
    return [B, o.FullPaths[O]];
  }).forEach(function (B) {
    var O = B[0],
      C = B[1];
    if (O.type == 2 && O.name.match(/\.iwa/)) {
      var j = O.content,
        se = Gt(j),
        fe = Vt(se);
      fe.forEach(function (X) {
        l.push(X.id),
          (f[X.id] = {
            deps: [],
            location: C,
            type: hn(X.messages[0].meta[1][0].data),
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
      return [B, Ee(B)];
    });
  o.FileIndex.map(function (B, O) {
    return [B, o.FullPaths[O]];
  }).forEach(function (B) {
    var O = B[0];
    if ((B[1], !!O.name.match(/\.iwa/))) {
      var C = Vt(Gt(O.content));
      C.forEach(function (j) {
        j.messages.forEach(function (se) {
          c.forEach(function (fe) {
            j.messages.some(function (X) {
              return hn(X.meta[1][0].data) != 11006 && Jm(X.data, fe[1]);
            }) && f[fe[0]].deps.push(j.id);
          });
        });
      });
    }
  });
  for (
    var h = Ae.find(o, f[1].location), u = Vt(Gt(h.content)), d, p = 0;
    p < u.length;
    ++p
  ) {
    var x = u[p];
    x.id == 1 && (d = x);
  }
  var m = vr(ze(d.messages[0].data)[1][0].data);
  for (
    h = Ae.find(o, f[m].location), u = Vt(Gt(h.content)), p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  for (
    m = vr(ze(d.messages[0].data)[2][0].data),
      h = Ae.find(o, f[m].location),
      u = Vt(Gt(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  for (
    m = vr(ze(d.messages[0].data)[2][0].data),
      h = Ae.find(o, f[m].location),
      u = Vt(Gt(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  var S = ze(d.messages[0].data);
  {
    (S[6][0].data = Ee(n.e.r + 1)), (S[7][0].data = Ee(n.e.c + 1));
    var y = vr(S[46][0].data),
      F = Ae.find(o, f[y].location),
      D = Vt(Gt(F.content));
    {
      for (var W = 0; W < D.length && D[W].id != y; ++W);
      if (D[W].id != y) throw 'Bad ColumnRowUIDMapArchive';
      var Z = ze(D[W].messages[0].data);
      (Z[1] = []), (Z[2] = []), (Z[3] = []);
      for (var R = 0; R <= n.e.c; ++R) {
        var U = [];
        (U[1] = U[2] = [{ type: 0, data: Ee(R + 420690) }]),
          Z[1].push({ type: 2, data: qe(U) }),
          Z[2].push({ type: 0, data: Ee(R) }),
          Z[3].push({ type: 0, data: Ee(R) });
      }
      (Z[4] = []), (Z[5] = []), (Z[6] = []);
      for (var P = 0; P <= n.e.r; ++P)
        (U = []),
          (U[1] = U[2] = [{ type: 0, data: Ee(P + 726270) }]),
          Z[4].push({ type: 2, data: qe(U) }),
          Z[5].push({ type: 0, data: Ee(P) }),
          Z[6].push({ type: 0, data: Ee(P) });
      D[W].messages[0].data = qe(Z);
    }
    (F.content = an(nn(D))), (F.size = F.content.length), delete S[46];
    var V = ze(S[4][0].data);
    {
      V[7][0].data = Ee(n.e.r + 1);
      var z = ze(V[1][0].data),
        K = vr(z[2][0].data);
      (F = Ae.find(o, f[K].location)), (D = Vt(Gt(F.content)));
      {
        if (D[0].id != K) throw 'Bad HeaderStorageBucket';
        var re = ze(D[0].messages[0].data);
        for (P = 0; P < a.length; ++P) {
          var _e = ze(re[2][0].data);
          (_e[1][0].data = Ee(P)),
            (_e[4][0].data = Ee(a[P].length)),
            (re[2][P] = { type: re[2][0].type, data: qe(_e) });
        }
        D[0].messages[0].data = qe(re);
      }
      (F.content = an(nn(D))), (F.size = F.content.length);
      var le = vr(V[2][0].data);
      (F = Ae.find(o, f[le].location)), (D = Vt(Gt(F.content)));
      {
        if (D[0].id != le) throw 'Bad HeaderStorageBucket';
        for (re = ze(D[0].messages[0].data), R = 0; R <= n.e.c; ++R)
          (_e = ze(re[2][0].data)),
            (_e[1][0].data = Ee(R)),
            (_e[4][0].data = Ee(n.e.r + 1)),
            (re[2][R] = { type: re[2][0].type, data: qe(_e) });
        D[0].messages[0].data = qe(re);
      }
      (F.content = an(nn(D))), (F.size = F.content.length);
      var Ge = vr(V[4][0].data);
      (function () {
        for (
          var B = Ae.find(o, f[Ge].location), O = Vt(Gt(B.content)), C, j = 0;
          j < O.length;
          ++j
        ) {
          var se = O[j];
          se.id == Ge && (C = se);
        }
        var fe = ze(C.messages[0].data);
        {
          fe[3] = [];
          var X = [];
          s.forEach(function (oe, Fe) {
            (X[1] = [{ type: 0, data: Ee(Fe) }]),
              (X[2] = [{ type: 0, data: Ee(1) }]),
              (X[3] = [{ type: 2, data: qm(oe) }]),
              fe[3].push({ type: 2, data: qe(X) });
          });
        }
        C.messages[0].data = qe(fe);
        var q = nn(O),
          xe = an(q);
        (B.content = xe), (B.size = B.content.length);
      })();
      var Ne = ze(V[3][0].data);
      {
        var wt = Ne[1][0];
        delete Ne[2];
        var Ue = ze(wt.data);
        {
          var xt = vr(Ue[2][0].data);
          (function () {
            for (
              var B = Ae.find(o, f[xt].location),
                O = Vt(Gt(B.content)),
                C,
                j = 0;
              j < O.length;
              ++j
            ) {
              var se = O[j];
              se.id == xt && (C = se);
            }
            var fe = ze(C.messages[0].data);
            {
              delete fe[6], delete Ne[7];
              var X = new Uint8Array(fe[5][0].data);
              fe[5] = [];
              for (var q = 0, xe = 0; xe <= n.e.r; ++xe) {
                var oe = ze(X);
                (q += e_(oe, a[xe], s)),
                  (oe[1][0].data = Ee(xe)),
                  fe[5].push({ data: qe(oe), type: 2 });
              }
              (fe[1] = [{ type: 0, data: Ee(n.e.c + 1) }]),
                (fe[2] = [{ type: 0, data: Ee(n.e.r + 1) }]),
                (fe[3] = [{ type: 0, data: Ee(q) }]),
                (fe[4] = [{ type: 0, data: Ee(n.e.r + 1) }]);
            }
            C.messages[0].data = qe(fe);
            var Fe = nn(O),
              pe = an(Fe);
            (B.content = pe), (B.size = B.content.length);
          })();
        }
        wt.data = qe(Ue);
      }
      V[3][0].data = qe(Ne);
    }
    S[4][0].data = qe(V);
  }
  d.messages[0].data = qe(S);
  var rt = nn(u),
    A = an(rt);
  return (h.content = A), (h.size = h.content.length), o;
}
function r_(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      r[i[0]] === void 0 && (r[i[0]] = i[1]),
        i[2] === 'n' && (r[i[0]] = Number(r[i[0]]));
    }
  };
}
function H0(e) {
  r_([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(e);
}
function n_(e, t) {
  return t.bookType == 'ods'
    ? kl(e, t)
    : t.bookType == 'numbers'
      ? t_(e, t)
      : t.bookType == 'xlsb'
        ? i_(e, t)
        : a_(e, t);
}
function i_(e, t) {
  (on = 1024),
    e && !e.SSF && (e.SSF = Et(be)),
    e &&
      e.SSF &&
      (xa(),
      ha(e.SSF),
      (t.revssf = da(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Wn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
    n = dl.indexOf(t.bookType) > -1,
    i = Go();
  H0((t = t || {}));
  var a = A0(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    Cr(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    he(a, s, $o(e.Props, t)),
    i.coreprops.push(s),
    Te(t.rels, 2, s, ve.CORE_PROPS),
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
      he(a, s, Yo(e.Props)),
      i.extprops.push(s),
      Te(t.rels, 3, s, ve.EXT_PROPS),
      e.Custprops !== e.Props &&
        tt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        he(a, s, qo(e.Custprops)),
        i.custprops.push(s),
        Te(t.rels, 4, s, ve.CUST_PROPS)),
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
          he(a, s, fm(f - 1, s, t, e, c)),
          i.sheets.push(s),
          Te(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, ve.WS[0]);
    }
    if (h) {
      var d = h['!comments'],
        p = !1,
        x = '';
      d &&
        d.length > 0 &&
        ((x = 'xl/comments' + f + '.' + r),
        he(a, x, cm(d, x)),
        i.comments.push(x),
        Te(c, -1, '../comments' + f + '.' + r, ve.CMNT),
        (p = !0)),
        h['!legacy'] &&
          p &&
          he(a, 'xl/drawings/vmlDrawing' + f + '.vml', hl(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    c['!id'].rId1 && he(a, zo(s), cn(c));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      he(a, s, lm(t.Strings, s, t)),
      i.strs.push(s),
      Te(t.wbrels, -1, 'sharedStrings.' + r, ve.SST)),
    (s = 'xl/workbook.' + r),
    he(a, s, sm(e, s)),
    i.workbooks.push(s),
    Te(t.rels, 1, s, ve.WB),
    (s = 'xl/theme/theme1.xml'),
    he(a, s, cl(e.Themes, t)),
    i.themes.push(s),
    Te(t.wbrels, -1, 'theme/theme1.xml', ve.THEME),
    (s = 'xl/styles.' + r),
    he(a, s, om(e, s, t)),
    i.styles.push(s),
    Te(t.wbrels, -1, 'styles.' + r, ve.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      he(a, s, e.vbaraw),
      i.vba.push(s),
      Te(t.wbrels, -1, 'vbaProject.bin', ve.VBA)),
    (s = 'xl/metadata.' + r),
    he(a, s, um(s)),
    i.metadata.push(s),
    Te(t.wbrels, -1, 'metadata.' + r, ve.XLMETA),
    he(a, '[Content_Types].xml', jo(i, t)),
    he(a, '_rels/.rels', cn(t.rels)),
    he(a, 'xl/_rels/workbook.' + r + '.rels', cn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function a_(e, t) {
  (on = 1024),
    e && !e.SSF && (e.SSF = Et(be)),
    e &&
      e.SSF &&
      (xa(),
      ha(e.SSF),
      (t.revssf = da(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Wn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = 'xml',
    n = dl.indexOf(t.bookType) > -1,
    i = Go();
  H0((t = t || {}));
  var a = A0(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    Cr(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    he(a, s, $o(e.Props, t)),
    i.coreprops.push(s),
    Te(t.rels, 2, s, ve.CORE_PROPS),
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
    he(a, s, Yo(e.Props)),
    i.extprops.push(s),
    Te(t.rels, 3, s, ve.EXT_PROPS),
    e.Custprops !== e.Props &&
      tt(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      he(a, s, qo(e.Custprops)),
      i.custprops.push(s),
      Te(t.rels, 4, s, ve.CUST_PROPS));
  var c = ['SheetJ5'];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var h = { '!id': {} },
      u = e.Sheets[e.SheetNames[f - 1]],
      d = (u || {})['!type'] || 'sheet';
    switch (d) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + r),
          he(a, s, Sl(f - 1, t, e, h)),
          i.sheets.push(s),
          Te(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, ve.WS[0]);
    }
    if (u) {
      var p = u['!comments'],
        x = !1,
        m = '';
      if (p && p.length > 0) {
        var S = !1;
        p.forEach(function (y) {
          y[1].forEach(function (F) {
            F.T == !0 && (S = !0);
          });
        }),
          S &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + r),
            he(a, m, Bd(p, c, t)),
            i.threadedcomments.push(m),
            Te(
              h,
              -1,
              '../threadedComments/threadedComment' + f + '.' + r,
              ve.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + r),
          he(a, m, xl(p)),
          i.comments.push(m),
          Te(h, -1, '../comments' + f + '.' + r, ve.CMNT),
          (x = !0);
      }
      u['!legacy'] &&
        x &&
        he(a, 'xl/drawings/vmlDrawing' + f + '.vml', hl(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    h['!id'].rId1 && he(a, zo(s), cn(h));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      he(a, s, il(t.Strings, t)),
      i.strs.push(s),
      Te(t.wbrels, -1, 'sharedStrings.' + r, ve.SST)),
    (s = 'xl/workbook.' + r),
    he(a, s, Fl(e)),
    i.workbooks.push(s),
    Te(t.rels, 1, s, ve.WB),
    (s = 'xl/theme/theme1.xml'),
    he(a, s, cl(e.Themes, t)),
    i.themes.push(s),
    Te(t.wbrels, -1, 'theme/theme1.xml', ve.THEME),
    (s = 'xl/styles.' + r),
    he(a, s, ol(e, t)),
    i.styles.push(s),
    Te(t.wbrels, -1, 'styles.' + r, ve.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      he(a, s, e.vbaraw),
      i.vba.push(s),
      Te(t.wbrels, -1, 'vbaProject.bin', ve.VBA)),
    (s = 'xl/metadata.' + r),
    he(a, s, ul()),
    i.metadata.push(s),
    Te(t.wbrels, -1, 'metadata.' + r, ve.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      he(a, s, Md(c)),
      i.people.push(s),
      Te(t.wbrels, -1, 'persons/person.xml', ve.PEOPLE)),
    he(a, '[Content_Types].xml', jo(i, t)),
    he(a, '_rels/.rels', cn(t.rels)),
    he(a, 'xl/_rels/workbook.' + r + '.rels', cn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function s_(e, t) {
  var r = '';
  switch ((t || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case 'base64':
      r = cr(e.slice(0, 12));
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
function Il(e, t) {
  switch (t.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      t.type = '';
      break;
    case 'file':
      return ii(t.file, Ae.write(e, { type: ge ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + t.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
  return Ae.write(e, t);
}
function f_(e, t) {
  var r = Et(t || {}),
    n = n_(e, r);
  return o_(n, r);
}
function o_(e, t) {
  var r = {},
    n = ge ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
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
    ? Ae.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
        compression: !!t.compression,
      })
    : e.generate(r);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (t.type == 'binary' || t.type == 'base64') return i;
    i = new Uint8Array(ua(i));
  }
  return t.password && typeof encrypt_agile < 'u'
    ? Il(encrypt_agile(i, t.password), t)
    : t.type === 'file'
      ? ii(t.file, i)
      : t.type == 'string'
        ? Mn(i)
        : i;
}
function l_(e, t) {
  var r = t || {},
    n = ym(e, r);
  return Il(n, r);
}
function Jt(e, t, r) {
  r || (r = '');
  var n = r + e;
  switch (t.type) {
    case 'base64':
      return $n(Yn(n));
    case 'binary':
      return Yn(n);
    case 'string':
      return e;
    case 'file':
      return ii(t.file, n, 'utf8');
    case 'buffer':
      return ge
        ? xr(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : Jt(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function c_(e, t) {
  switch (t.type) {
    case 'base64':
      return $n(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return ii(t.file, e, 'binary');
    case 'buffer':
      return ge
        ? xr(e, 'binary')
        : e.split('').map(function (r) {
            return r.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function Si(e, t) {
  switch (t.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == 'base64' ? $n(r) : t.type == 'string' ? Mn(r) : r;
    case 'file':
      return ii(t.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
}
function Pl(e, t) {
  bh(), Y2(e);
  var r = Et(t || {});
  if (
    (r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')
  ) {
    r.type = 'binary';
    var n = Pl(e, r);
    return (r.type = 'array'), ua(n);
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
      return Jt(Sm(e, r), r);
    case 'slk':
    case 'sylk':
      return Jt(Xx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'htm':
    case 'html':
      return Jt(Rl(e.Sheets[e.SheetNames[i]], r), r);
    case 'txt':
      return c_(Ll(e.Sheets[e.SheetNames[i]], r), r);
    case 'csv':
      return Jt(W0(e.Sheets[e.SheetNames[i]], r), r, '\uFEFF');
    case 'dif':
      return Jt($x.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'dbf':
      return Si(zx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'prn':
      return Jt(Kx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'rtf':
      return Jt(td.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'eth':
      return Jt(nl.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'fods':
      return Jt(kl(e, r), r);
    case 'wk1':
      return Si(js.sheet_to_wk1(e.Sheets[e.SheetNames[i]], r), r);
    case 'wk3':
      return Si(js.book_to_wk3(e, r), r);
    case 'biff2':
      r.biff || (r.biff = 2);
    case 'biff3':
      r.biff || (r.biff = 3);
    case 'biff4':
      return r.biff || (r.biff = 4), Si(Ol(e, r), r);
    case 'biff5':
      r.biff || (r.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return r.biff || (r.biff = 8), l_(e, r);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return f_(e, r);
    default:
      throw new Error('Unrecognized bookType |' + r.bookType + '|');
  }
}
function u_(e) {
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
function h_(e, t, r) {
  var n = {};
  return (n.type = 'file'), (n.file = t), u_(n), Pl(e, n);
}
function x_(e, t, r, n, i, a, s, f) {
  var l = et(r),
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
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var p = s ? e[r][d] : e[n[d] + l];
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
              : ur(p, x, f);
        x != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function Qi(e, t) {
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
      l = Re(c);
      break;
    case 'number':
      (l = Re(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var h = et(l.s.r),
    u = [],
    d = [],
    p = 0,
    x = 0,
    m = Array.isArray(e),
    S = l.s.r,
    y = 0,
    F = {};
  m && !e[S] && (e[S] = []);
  var D = (o.skipHidden && e['!cols']) || [],
    W = (o.skipHidden && e['!rows']) || [];
  for (y = l.s.c; y <= l.e.c; ++y)
    if (!(D[y] || {}).hidden)
      switch (((u[y] = st(y)), (r = m ? e[S][y] : e[u[y] + h]), n)) {
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
            (f = s = ur(r, null, o)),
            (x = F[s] || 0),
            !x)
          )
            F[s] = 1;
          else {
            do f = s + '_' + x++;
            while (F[f]);
            (F[s] = x), (F[f] = 1);
          }
          a[y] = f;
      }
  for (S = l.s.r + i; S <= l.e.r; ++S)
    if (!(W[S] || {}).hidden) {
      var Z = x_(e, l, S, u, n, a, m, o);
      (Z.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (d[p++] = Z.row);
    }
  return (d.length = p), d;
}
var Zs = /"/g;
function d_(e, t, r, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', h = et(r), u = t.s.c; u <= t.e.c; ++u)
    if (n[u]) {
      var d = f.dense ? (e[r] || [])[u] : e[n[u] + h];
      if (d == null) c = '';
      else if (d.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && d.t == 'n' ? d.v : ur(d, null, f)));
        for (var p = 0, x = 0; p !== c.length; ++p)
          if (
            (x = c.charCodeAt(p)) === i ||
            x === a ||
            x === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(Zs, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        d.f != null && !d.F
          ? ((l = !1),
            (c = '=' + d.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(Zs, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function W0(e, t) {
  var r = [],
    n = t ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = Re(e['!ref']),
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
    (u[p] || {}).hidden || (h[p] = st(p));
  for (var x = 0, m = i.s.r; m <= i.e.r; ++m)
    (d[m] || {}).hidden ||
      ((c = d_(e, i, m, h, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && r.push((x++ ? f : '') + c)));
  return delete n.dense, r.join('');
}
function Ll(e, t) {
  t || (t = {}),
    (t.FS = '	'),
    (t.RS = `
`);
  var r = W0(e, t);
  return r;
}
function p_(e) {
  var t = '',
    r,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = Re(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = st(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = et(c), f = i.s.c; f <= i.e.c; ++f)
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
function Bl(e, t, r) {
  var n = r || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Ke(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + i } };
  if (a['!ref']) {
    var h = Re(a['!ref']);
    (c.e.c = Math.max(c.e.c, h.e.c)),
      (c.e.r = Math.max(c.e.r, h.e.r)),
      s == -1 && ((s = h.e.r + 1), (c.e.r = s + t.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + i));
  var u = n.header || [],
    d = 0;
  t.forEach(function (x, m) {
    tt(x).forEach(function (S) {
      (d = u.indexOf(S)) == -1 && (u[(d = u.length)] = S);
      var y = x[S],
        F = 'z',
        D = '',
        W = Se({ c: f + d, r: s + m + i });
      (o = Zn(a, W)),
        y && typeof y == 'object' && !(y instanceof Date)
          ? (a[W] = y)
          : (typeof y == 'number'
              ? (F = 'n')
              : typeof y == 'boolean'
                ? (F = 'b')
                : typeof y == 'string'
                  ? (F = 's')
                  : y instanceof Date
                    ? ((F = 'd'),
                      n.cellDates || ((F = 'n'), (y = gt(y))),
                      (D = n.dateNF || be[14]))
                    : y === null && n.nullError && ((F = 'e'), (y = 0)),
            o
              ? ((o.t = F), (o.v = y), delete o.w, delete o.R, D && (o.z = D))
              : (a[W] = o = { t: F, v: y }),
            D && (o.z = D));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + u.length - 1));
  var p = et(s);
  if (i) for (d = 0; d < u.length; ++d) a[st(d + f) + p] = { t: 's', v: u[d] };
  return (a['!ref'] = We(c)), a;
}
function v_(e, t) {
  return Bl(null, e, t);
}
function Zn(e, t, r) {
  if (typeof t == 'string') {
    if (Array.isArray(e)) {
      var n = Ke(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[t] || (e[t] = { t: 'z' });
  }
  return typeof t != 'number' ? Zn(e, Se(t)) : Zn(e, Se({ r: t, c: r || 0 }));
}
function m_(e, t) {
  if (typeof t == 'number') {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error('Cannot find sheet # ' + t);
  } else if (typeof t == 'string') {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error('Cannot find sheet name |' + t + '|');
  } else throw new Error('Cannot find sheet |' + t + '|');
}
function __() {
  return { SheetNames: [], Sheets: {} };
}
function g_(e, t, r, n) {
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
  if ((yl(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error('Worksheet with name |' + r + '| already exists!');
  return e.SheetNames.push(r), (e.Sheets[r] = t), r;
}
function E_(e, t, r) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = m_(e, t);
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
function T_(e, t) {
  return (e.z = t), e;
}
function Ml(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function w_(e, t, r) {
  return Ml(e, '#' + t, r);
}
function S_(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' });
}
function A_(e, t, r, n) {
  for (
    var i = typeof t != 'string' ? t : Re(t),
      a = typeof t == 'string' ? t : We(t),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = Zn(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = r), n && (l.D = !0));
    }
  return e;
}
var Wa = {
    encode_col: st,
    encode_row: et,
    encode_cell: Se,
    encode_range: We,
    decode_col: N0,
    decode_row: R0,
    split_cell: b1,
    decode_cell: Ke,
    decode_range: kt,
    format_cell: ur,
    sheet_add_aoa: Mo,
    sheet_add_json: Bl,
    sheet_add_dom: Nl,
    aoa_to_sheet: En,
    json_to_sheet: v_,
    table_to_sheet: Dl,
    table_to_book: $m,
    sheet_to_csv: W0,
    sheet_to_txt: Ll,
    sheet_to_json: Qi,
    sheet_to_html: Rl,
    sheet_to_formulae: p_,
    sheet_to_row_object_array: Qi,
    sheet_get_cell: Zn,
    book_new: __,
    book_append_sheet: g_,
    book_set_sheet_visibility: E_,
    cell_set_number_format: T_,
    cell_set_hyperlink: Ml,
    cell_set_internal_link: w_,
    cell_add_comment: S_,
    sheet_set_array_formula: A_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  y_ = Tt(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/customers/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function F_(e, t) {
  l0(t, !0);
  let r = ir('');
  Df(() => {
    Le(r, window.location.pathname, !0), console.log('currentPath:', de(r));
  });
  function n(U) {
    return U === '/' ? de(r) === '/' : de(r).startsWith(U);
  }
  var i = y_(),
    a = Xe(Ce(i), 2),
    s = Ce(a),
    f = Ce(s);
  let l;
  var o = Xe(s, 2),
    c = Ce(o);
  let h;
  var u = Xe(o, 2),
    d = Ce(u);
  let p;
  var x = Xe(u, 2),
    m = Ce(x);
  let S;
  var y = Xe(x, 2),
    F = Ce(y);
  let D;
  var W = Xe(y, 2),
    Z = Ce(W);
  let R;
  Dr(
    (U, P, V, z, K, re) => {
      (l = Zr(f, 1, 'svelte-1t3skh', null, l, U)),
        (h = Zr(c, 1, 'svelte-1t3skh', null, h, P)),
        (p = Zr(d, 1, 'svelte-1t3skh', null, p, V)),
        (S = Zr(m, 1, 'svelte-1t3skh', null, S, z)),
        (D = Zr(F, 1, 'svelte-1t3skh', null, D, K)),
        (R = Zr(Z, 1, 'svelte-1t3skh', null, R, re));
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
    pt(e, i),
    c0();
}
var C_ = Tt('<p class="status svelte-jezgyt">Loading customers...</p>'),
  O_ = Tt('<p class="status error svelte-jezgyt"> </p>'),
  R_ = Tt('<p class="status svelte-jezgyt">No customers found.</p>'),
  N_ = Tt('<p class="status svelte-jezgyt"> </p>'),
  D_ = Tt('<input type="text" class="edit-input svelte-jezgyt" required/>'),
  k_ = Tt('<span class="cell-content svelte-jezgyt"> </span>'),
  I_ = Tt('<input type="text" class="edit-input svelte-jezgyt" required/>'),
  P_ = Tt('<span class="cell-content svelte-jezgyt"> </span>'),
  L_ = Tt(
    '<button class="btn save-btn svelte-jezgyt" title="Save Changes">Save</button> <button class="btn cancel-btn svelte-jezgyt" title="Cancel Edit">Cancel</button>',
    1,
  ),
  B_ = Tt(
    '<button class="btn edit-btn svelte-jezgyt" title="Edit Customer">Edit</button> <button class="btn delete-btn svelte-jezgyt" title="Delete Customer">Delete</button>',
    1,
  ),
  M_ = Tt(
    '<tr><td class="svelte-jezgyt"><span class="cell-content svelte-jezgyt"> </span></td><td class="svelte-jezgyt"><!></td><td class="svelte-jezgyt"><!></td><td class="svelte-jezgyt"><!></td></tr>',
  ),
  b_ = Tt(
    '<div class="table-container svelte-jezgyt"><table class="svelte-jezgyt"><thead class="svelte-jezgyt"><tr><th class="svelte-jezgyt">Code</th><th class="svelte-jezgyt">Name</th><th class="svelte-jezgyt">Contact</th><th class="svelte-jezgyt">Actions</th></tr></thead><tbody></tbody></table></div>',
  ),
  U_ = Tt(
    '<!> <div class="wrapper svelte-jezgyt"><div class="card svelte-jezgyt"><div class="header svelte-jezgyt"><h2>Manage Customers</h2> <div class="controls svelte-jezgyt"><input placeholder="Search..." class="search-input svelte-jezgyt"/> <button class="btn excel-btn svelte-jezgyt">Export Excel</button></div></div> <div class="add-supplier-form svelte-jezgyt"><form><input placeholder="Customer Code" required class="svelte-jezgyt"/> <input placeholder="Customer Name" required class="svelte-jezgyt"/> <input placeholder="Contact" required class="svelte-jezgyt"/> <button type="submit" class="btn add-btn svelte-jezgyt">Add Customer</button></form></div> <!></div></div>',
    1,
  );
function H_(e, t) {
  l0(t, !1);
  const [r, n] = nu(),
    i = () => tn(S, '$editingCustomerCode', r),
    a = () => tn(c, '$rawCustomers', r),
    s = () => tn(d, '$searchTerm', r),
    f = () => tn(h, '$isLoading', r),
    l = () => tn(u, '$errorMessage', r),
    o = () => tn(Z, '$filteredCustomers', r),
    c = sn([]),
    h = sn(!0),
    u = sn(''),
    d = sn('');
  let p = kr(''),
    x = kr(''),
    m = kr('');
  const S = sn(null);
  let y = kr(''),
    F = kr('');
  const D = 'http://localhost:3000/api/customers';
  async function W() {
    h.set(!0), u.set('');
    try {
      const X = await ke.get(D);
      c.set(Array.isArray(X.data) ? X.data : []);
    } catch (X) {
      const q =
        X.response?.data?.error || X.message || 'Failed to fetch customers.';
      u.set(q), c.set([]);
    } finally {
      h.set(!1);
    }
  }
  Df(W);
  const Z = eu([c, d], ([X, q]) => {
    if (!q.trim()) return X;
    const xe = q.toLowerCase();
    return X.filter(
      (oe) =>
        (oe.code && String(oe.code).toLowerCase().includes(xe)) ||
        (oe.name && oe.name.toLowerCase().includes(xe)) ||
        (oe.contact && oe.contact.toLowerCase().includes(xe)),
    );
  });
  async function R() {
    if (!de(p).trim() || !de(x).trim() || !de(m).trim()) {
      u.set('Customer Code, Name, and Contact are required.');
      return;
    }
    u.set('');
    try {
      await ke.post(D, {
        custcode: de(p).trim(),
        custname: de(x).trim(),
        custcontact: de(m).trim(),
      }),
        Le(p, ''),
        Le(x, ''),
        Le(m, ''),
        await W();
    } catch (X) {
      const q =
        X.response?.data?.error ||
        X.response?.statusText ||
        X.message ||
        'Failed to add customer.';
      u.set(`Error adding customer: ${q}`);
    }
  }
  async function U(X) {
    if (i() !== null) {
      u.set('Please save or cancel the current edit before deleting.');
      return;
    }
    if (confirm('Are you sure you want to delete this customer?')) {
      u.set('');
      try {
        await ke.delete(`${D}/${X}`), await W();
      } catch (q) {
        const xe =
          q.response?.data?.error || q.message || 'Failed to delete customer.';
        u.set(xe);
      }
    }
  }
  function P(X) {
    u.set(''), S.set(X.code), Le(y, X.name), Le(F, X.contact);
  }
  function V() {
    u.set(''), S.set(null), Le(y, ''), Le(F, '');
  }
  async function z(X) {
    if (!de(y).trim() || !de(F).trim()) {
      u.set('Customer Name and Contact cannot be empty.');
      return;
    }
    u.set('');
    try {
      await ke.put(`${D}/${X}`, {
        custname: de(y).trim(),
        custcontact: de(F).trim(),
      }),
        await W(),
        V();
    } catch (q) {
      const xe =
        q.response?.data?.error || q.message || 'Failed to update customer.';
      u.set(`Error updating customer: ${xe}`);
    }
  }
  function K() {
    const X = a();
    if (!X || X.length === 0) {
      alert('No customer data to export.');
      return;
    }
    const q = X.map((Fe) => ({
        'Customer Code': Fe.code,
        Name: Fe.name,
        Contact: Fe.contact,
      })),
      xe = Wa.json_to_sheet(q),
      oe = Wa.book_new();
    Wa.book_append_sheet(oe, xe, 'Customers'), h_(oe, 'Customers.xlsx');
  }
  Zc();
  var re = U_(),
    _e = Ca(re);
  F_(_e, {});
  var le = Xe(_e, 2),
    Ge = Ce(le),
    Ne = Ce(Ge),
    wt = Xe(Ce(Ne), 2),
    Ue = Ce(wt),
    xt = Xe(Ue, 2),
    rt = Xe(Ne, 2),
    A = Ce(rt),
    B = Ce(A),
    O = Xe(B, 2),
    C = Xe(O, 2),
    j = Xe(rt, 2);
  {
    var se = (X) => {
        var q = C_();
        pt(X, q);
      },
      fe = (X, q) => {
        {
          var xe = (Fe) => {
              var pe = O_(),
                St = Ce(pe);
              Dr(() => On(St, l())), pt(Fe, pe);
            },
            oe = (Fe, pe) => {
              {
                var St = (ie) => {
                    var nt = R_();
                    pt(ie, nt);
                  },
                  De = (ie, nt) => {
                    {
                      var Wt = (At) => {
                          var dr = N_(),
                            Or = Ce(dr);
                          Dr(() =>
                            On(Or, `No customers match "${s() ?? ''}".`),
                          ),
                            pt(At, dr);
                        },
                        rr = (At) => {
                          var dr = b_(),
                            Or = Ce(dr),
                            It = Xe(Ce(Or));
                          Xc(
                            It,
                            5,
                            o,
                            (pr) => pr.code,
                            (pr, yt) => {
                              var Kr = M_(),
                                Kt = Ce(Kr),
                                ga = Ce(Kt),
                                li = Ce(ga),
                                Sn = Xe(Kt),
                                ci = Ce(Sn);
                              {
                                var ui = (Oe) => {
                                    var je = D_();
                                    Qr(
                                      je,
                                      () => de(y),
                                      (ot) => Le(y, ot),
                                    ),
                                      pt(Oe, je);
                                  },
                                  hi = (Oe) => {
                                    var je = k_(),
                                      ot = Ce(je);
                                    Dr(() => On(ot, de(yt).name ?? 'N/A')),
                                      pt(Oe, je);
                                  };
                                Nr(ci, (Oe) => {
                                  i() === de(yt).code ? Oe(ui) : Oe(hi, !1);
                                });
                              }
                              var An = Xe(Sn),
                                Ea = Ce(An);
                              {
                                var Ta = (Oe) => {
                                    var je = I_();
                                    Qr(
                                      je,
                                      () => de(F),
                                      (ot) => Le(F, ot),
                                    ),
                                      pt(Oe, je);
                                  },
                                  xi = (Oe) => {
                                    var je = P_(),
                                      ot = Ce(je);
                                    Dr(() => On(ot, de(yt).contact ?? 'N/A')),
                                      pt(Oe, je);
                                  };
                                Nr(Ea, (Oe) => {
                                  i() === de(yt).code ? Oe(Ta) : Oe(xi, !1);
                                });
                              }
                              var di = Xe(An),
                                pi = Ce(di);
                              {
                                var wa = (Oe) => {
                                    var je = L_(),
                                      ot = Ca(je),
                                      Yr = Xe(ot, 2);
                                    qr('click', ot, () => z(de(yt).code)),
                                      qr('click', Yr, V),
                                      pt(Oe, je);
                                  },
                                  Sa = (Oe) => {
                                    var je = B_(),
                                      ot = Ca(je),
                                      Yr = Xe(ot, 2);
                                    Dr(() => (Yr.disabled = i() !== null)),
                                      qr('click', ot, () => P(de(yt))),
                                      qr('click', Yr, () => U(de(yt).code)),
                                      pt(Oe, je);
                                  };
                                Nr(pi, (Oe) => {
                                  i() === de(yt).code ? Oe(wa) : Oe(Sa, !1);
                                });
                              }
                              Dr(() => On(li, de(yt).code ?? 'N/A')),
                                pt(pr, Kr);
                            },
                          ),
                            pt(At, dr);
                        };
                      Nr(
                        ie,
                        (At) => {
                          o().length === 0 && s().trim() ? At(Wt) : At(rr, !1);
                        },
                        nt,
                      );
                    }
                  };
                Nr(
                  Fe,
                  (ie) => {
                    a().length === 0 ? ie(St) : ie(De, !1);
                  },
                  pe,
                );
              }
            };
          Nr(
            X,
            (Fe) => {
              l() ? Fe(xe) : Fe(oe, !1);
            },
            q,
          );
        }
      };
    Nr(j, (X) => {
      f() && a().length === 0 ? X(se) : X(fe, !1);
    });
  }
  Qr(Ue, s, (X) => ru(d, X)),
    qr('click', xt, K),
    Qr(
      B,
      () => de(p),
      (X) => Le(p, X),
    ),
    Qr(
      O,
      () => de(x),
      (X) => Le(x, X),
    ),
    Qr(
      C,
      () => de(m),
      (X) => Le(m, X),
    ),
    qr('submit', A, Jc(R)),
    pt(e, re),
    c0(),
    n();
}
Vc(H_, { target: document.getElementById('app') });
