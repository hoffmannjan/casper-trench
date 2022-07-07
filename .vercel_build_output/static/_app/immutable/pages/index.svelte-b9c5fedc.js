import {
	S as H,
	i as J,
	s as V,
	e as P,
	c as F,
	a as c,
	d as l,
	b as a,
	f as U,
	g as S,
	n as D,
	P as zt,
	F as it,
	H as nt,
	I as ot,
	J as st,
	r as _,
	p as z,
	D as at,
	T as rt,
	o as xt,
	q as Yt,
	U as $t,
	M as v,
	N as p,
	K as f,
	x as L,
	k as tt,
	y as X,
	m as et,
	z as I,
	C as T,
	L as jt,
	t as yt,
	h as _t
} from '../chunks/index-d017537a.js';
const ut = /[a-zA-Z]/,
	vt = (s, t = 0) => [...Array(s).keys()].map((r) => r + t);
function pt(s, t, r) {
	const e = s.slice();
	return (e[6] = t[r]), e;
}
function gt(s) {
	let t;
	return {
		c() {
			(t = P('div')), this.h();
		},
		l(r) {
			(t = F(r, 'DIV', { class: !0, style: !0 })), c(t).forEach(l), this.h();
		},
		h() {
			a(t, 'class', 'circle svelte-f3v7i'), U(t, 'animation-delay', (s[5] / 3) * (s[6] - 1) + s[4]);
		},
		m(r, e) {
			S(r, t, e);
		},
		p: D,
		d(r) {
			r && l(t);
		}
	};
}
function Et(s) {
	let t,
		r = vt(3, 1),
		e = [];
	for (let i = 0; i < r.length; i += 1) e[i] = gt(pt(s, r, i));
	return {
		c() {
			t = P('div');
			for (let i = 0; i < e.length; i += 1) e[i].c();
			this.h();
		},
		l(i) {
			t = F(i, 'DIV', { class: !0, style: !0 });
			var n = c(t);
			for (let o = 0; o < e.length; o += 1) e[o].l(n);
			n.forEach(l), this.h();
		},
		h() {
			a(t, 'class', 'wrapper svelte-f3v7i'),
				U(t, '--size', s[3] + s[1]),
				U(t, '--color', s[0]),
				U(t, '--duration', s[2]);
		},
		m(i, n) {
			S(i, t, n);
			for (let o = 0; o < e.length; o += 1) e[o].m(t, null);
		},
		p(i, [n]) {
			if (n & 48) {
				r = vt(3, 1);
				let o;
				for (o = 0; o < r.length; o += 1) {
					const d = pt(i, r, o);
					e[o] ? e[o].p(d, n) : ((e[o] = gt(d)), e[o].c(), e[o].m(t, null));
				}
				for (; o < e.length; o += 1) e[o].d(1);
				e.length = r.length;
			}
			n & 10 && U(t, '--size', i[3] + i[1]),
				n & 1 && U(t, '--color', i[0]),
				n & 4 && U(t, '--duration', i[2]);
		},
		i: D,
		o: D,
		d(i) {
			i && l(t), zt(e, i);
		}
	};
}
function Ct(s, t, r) {
	let { color: e = '#FF3E00' } = t,
		{ unit: i = 'px' } = t,
		{ duration: n = '1s' } = t,
		{ size: o = '60' } = t,
		d = n.match(ut)[0],
		b = n.replace(ut, '');
	return (
		(s.$$set = (m) => {
			'color' in m && r(0, (e = m.color)),
				'unit' in m && r(1, (i = m.unit)),
				'duration' in m && r(2, (n = m.duration)),
				'size' in m && r(3, (o = m.size));
		}),
		[e, i, n, o, d, b]
	);
}
class St extends H {
	constructor(t) {
		super(), J(this, t, Ct, Et, V, { color: 0, unit: 1, duration: 2, size: 3 });
	}
}
function qt(s) {
	let t, r, e;
	const i = s[2].default,
		n = it(i, s, s[1], null);
	return {
		c() {
			(t = P('h1')), n && n.c(), this.h();
		},
		l(o) {
			t = F(o, 'H1', { class: !0 });
			var d = c(t);
			n && n.l(d), d.forEach(l), this.h();
		},
		h() {
			a(t, 'class', (r = 'text-xl ' + s[0].class));
		},
		m(o, d) {
			S(o, t, d), n && n.m(t, null), (e = !0);
		},
		p(o, [d]) {
			n && n.p && (!e || d & 2) && nt(n, i, o, o[1], e ? st(i, o[1], d, null) : ot(o[1]), null),
				(!e || (d & 1 && r !== (r = 'text-xl ' + o[0].class))) && a(t, 'class', r);
		},
		i(o) {
			e || (_(n, o), (e = !0));
		},
		o(o) {
			z(n, o), (e = !1);
		},
		d(o) {
			o && l(t), n && n.d(o);
		}
	};
}
function Ot(s, t, r) {
	let { $$slots: e = {}, $$scope: i } = t;
	return (
		(s.$$set = (n) => {
			r(0, (t = at(at({}, t), rt(n)))), '$$scope' in n && r(1, (i = n.$$scope));
		}),
		(t = rt(t)),
		[t, i, e]
	);
}
class ht extends H {
	constructor(t) {
		super(), J(this, t, Ot, qt, V, {});
	}
}
const Gt = (s) => ({}),
	bt = (s) => ({}),
	Bt = (s) => ({}),
	kt = (s) => ({});
function Mt(s) {
	let t;
	const r = s[3].default,
		e = it(r, s, s[2], null);
	return {
		c() {
			e && e.c();
		},
		l(i) {
			e && e.l(i);
		},
		m(i, n) {
			e && e.m(i, n), (t = !0);
		},
		p(i, n) {
			e && e.p && (!t || n & 4) && nt(e, r, i, i[2], t ? st(r, i[2], n, null) : ot(i[2]), null);
		},
		i(i) {
			t || (_(e, i), (t = !0));
		},
		o(i) {
			z(e, i), (t = !1);
		},
		d(i) {
			e && e.d(i);
		}
	};
}
function At(s) {
	let t;
	const r = s[3].svg,
		e = it(r, s, s[2], bt),
		i = e || Lt();
	return {
		c() {
			i && i.c();
		},
		l(n) {
			i && i.l(n);
		},
		m(n, o) {
			i && i.m(n, o), (t = !0);
		},
		p(n, o) {
			e && e.p && (!t || o & 4) && nt(e, r, n, n[2], t ? st(r, n[2], o, Gt) : ot(n[2]), bt);
		},
		i(n) {
			t || (_(i, n), (t = !0));
		},
		o(n) {
			z(i, n), (t = !1);
		},
		d(n) {
			i && i.d(n);
		}
	};
}
function Ut(s) {
	let t;
	const r = s[3].img,
		e = it(r, s, s[2], kt),
		i = e || Xt();
	return {
		c() {
			i && i.c();
		},
		l(n) {
			i && i.l(n);
		},
		m(n, o) {
			i && i.m(n, o), (t = !0);
		},
		p(n, o) {
			e && e.p && (!t || o & 4) && nt(e, r, n, n[2], t ? st(r, n[2], o, Bt) : ot(n[2]), kt);
		},
		i(n) {
			t || (_(i, n), (t = !0));
		},
		o(n) {
			z(i, n), (t = !1);
		},
		d(n) {
			i && i.d(n);
		}
	};
}
function Lt(s) {
	let t;
	return {
		c() {
			(t = v('svg')), this.h();
		},
		l(r) {
			(t = p(r, 'svg', { class: !0 })), c(t).forEach(l), this.h();
		},
		h() {
			a(t, 'class', 'svelte-zayrdb');
		},
		m(r, e) {
			S(r, t, e);
		},
		d(r) {
			r && l(t);
		}
	};
}
function Xt(s) {
	let t;
	return {
		c() {
			(t = P('img')), this.h();
		},
		l(r) {
			(t = F(r, 'IMG', { alt: !0, class: !0 })), this.h();
		},
		h() {
			a(t, 'alt', ''), a(t, 'class', 'svelte-zayrdb');
		},
		m(r, e) {
			S(r, t, e);
		},
		d(r) {
			r && l(t);
		}
	};
}
function It(s) {
	let t, r, e, i, n;
	const o = [Ut, At, Mt],
		d = [];
	function b(m, h) {
		return m[1].img ? 0 : m[1].svg ? 1 : 2;
	}
	return (
		(r = b(s)),
		(e = d[r] = o[r](s)),
		{
			c() {
				(t = P('div')), e.c(), this.h();
			},
			l(m) {
				t = F(m, 'DIV', { class: !0 });
				var h = c(t);
				e.l(h), h.forEach(l), this.h();
			},
			h() {
				a(t, 'class', (i = 'icon ' + s[0].class + ' svelte-zayrdb'));
			},
			m(m, h) {
				S(m, t, h), d[r].m(t, null), (n = !0);
			},
			p(m, [h]) {
				let k = r;
				(r = b(m)),
					r === k
						? d[r].p(m, h)
						: (xt(),
						  z(d[k], 1, 1, () => {
								d[k] = null;
						  }),
						  Yt(),
						  (e = d[r]),
						  e ? e.p(m, h) : ((e = d[r] = o[r](m)), e.c()),
						  _(e, 1),
						  e.m(t, null)),
					(!n || (h & 1 && i !== (i = 'icon ' + m[0].class + ' svelte-zayrdb'))) &&
						a(t, 'class', i);
			},
			i(m) {
				n || (_(e), (n = !0));
			},
			o(m) {
				z(e), (n = !1);
			},
			d(m) {
				m && l(t), d[r].d();
			}
		}
	);
}
function Tt(s, t, r) {
	let { $$slots: e = {}, $$scope: i } = t;
	const n = $t(e);
	return (
		(s.$$set = (o) => {
			r(0, (t = at(at({}, t), rt(o)))), '$$scope' in o && r(2, (i = o.$$scope));
		}),
		(t = rt(t)),
		[t, n, i, e]
	);
}
class wt extends H {
	constructor(t) {
		super(), J(this, t, Tt, It, V, {});
	}
}
function Dt(s) {
	let t, r, e, i, n, o, d, b, m, h, k, u, g, C, x, y, q, O, Y, Z, G, $, N, B, j, K, M, E, W, A;
	return {
		c() {
			(t = v('svg')),
				(r = v('path')),
				(e = v('path')),
				(i = v('path')),
				(n = v('path')),
				(o = v('path')),
				(d = v('path')),
				(b = v('path')),
				(m = v('path')),
				(h = v('path')),
				(k = v('path')),
				(u = v('path')),
				(g = v('path')),
				(C = v('path')),
				(x = v('defs')),
				(y = v('linearGradient')),
				(q = v('stop')),
				(O = v('stop')),
				(Y = v('linearGradient')),
				(Z = v('stop')),
				(G = v('stop')),
				($ = v('linearGradient')),
				(N = v('stop')),
				(B = v('stop')),
				(j = v('linearGradient')),
				(K = v('stop')),
				(M = v('stop')),
				(E = v('linearGradient')),
				(W = v('stop')),
				(A = v('stop')),
				this.h();
		},
		l(Q) {
			t = p(Q, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 });
			var w = c(t);
			(r = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(r).forEach(l),
				(e = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(e).forEach(l),
				(i = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(i).forEach(l),
				(n = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(n).forEach(l),
				(o = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(o).forEach(l),
				(d = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(d).forEach(l),
				(b = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(b).forEach(l),
				(m = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(m).forEach(l),
				(h = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(h).forEach(l),
				(k = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(k).forEach(l),
				(u = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(u).forEach(l),
				(g = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(g).forEach(l),
				(C = p(w, 'path', { d: !0, stroke: !0, 'stroke-width': !0, 'stroke-miterlimit': !0 })),
				c(C).forEach(l),
				(x = p(w, 'defs', {}));
			var R = c(x);
			y = p(R, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 });
			var lt = c(y);
			(q = p(lt, 'stop', { 'stop-color': !0 })),
				c(q).forEach(l),
				(O = p(lt, 'stop', { offset: !0, 'stop-color': !0, 'stop-opacity': !0 })),
				c(O).forEach(l),
				lt.forEach(l),
				(Y = p(R, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 }));
			var mt = c(Y);
			(Z = p(mt, 'stop', { 'stop-color': !0 })),
				c(Z).forEach(l),
				(G = p(mt, 'stop', { offset: !0, 'stop-color': !0, 'stop-opacity': !0 })),
				c(G).forEach(l),
				mt.forEach(l),
				($ = p(R, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 }));
			var ct = c($);
			(N = p(ct, 'stop', { 'stop-color': !0 })),
				c(N).forEach(l),
				(B = p(ct, 'stop', { offset: !0, 'stop-color': !0, 'stop-opacity': !0 })),
				c(B).forEach(l),
				ct.forEach(l),
				(j = p(R, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 }));
			var dt = c(j);
			(K = p(dt, 'stop', { 'stop-color': !0 })),
				c(K).forEach(l),
				(M = p(dt, 'stop', { offset: !0, 'stop-color': !0, 'stop-opacity': !0 })),
				c(M).forEach(l),
				dt.forEach(l),
				(E = p(R, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 }));
			var ft = c(E);
			(W = p(ft, 'stop', { 'stop-color': !0 })),
				c(W).forEach(l),
				(A = p(ft, 'stop', { offset: !0, 'stop-color': !0, 'stop-opacity': !0 })),
				c(A).forEach(l),
				ft.forEach(l),
				R.forEach(l),
				w.forEach(l),
				this.h();
		},
		h() {
			a(r, 'd', 'M24.3555 6.23425L29.9454 6.23425'),
				a(r, 'stroke', 'url(#paint0_linear_26_1157)'),
				a(r, 'stroke-width', '3'),
				a(r, 'stroke-miterlimit', '10'),
				a(
					e,
					'd',
					'M48.7695 9.7745V6.09448C48.7695 4.83675 49.8409 3.85852 51.1452 3.85852C52.4495 3.85852 53.5209 4.88334 53.5209 6.09448V9.7745'
				),
				a(e, 'stroke', 'url(#paint1_linear_26_1157)'),
				a(e, 'stroke-width', '3'),
				a(e, 'stroke-miterlimit', '10'),
				a(
					i,
					'd',
					'M12.4811 22.7245C18.2696 22.7245 22.9621 18.0319 22.9621 12.2434C22.9621 6.45486 18.2696 1.76233 12.4811 1.76233C6.69253 1.76233 2 6.45486 2 12.2434C2 18.0319 6.69253 22.7245 12.4811 22.7245Z'
				),
				a(i, 'stroke', 'black'),
				a(i, 'stroke-width', '3'),
				a(i, 'stroke-miterlimit', '10'),
				a(
					n,
					'd',
					'M119.155 22.7245C124.943 22.7245 129.636 18.0319 129.636 12.2434C129.636 6.45486 124.943 1.76233 119.155 1.76233C113.366 1.76233 108.674 6.45486 108.674 12.2434C108.674 18.0319 113.366 22.7245 119.155 22.7245Z'
				),
				a(n, 'stroke', 'black'),
				a(n, 'stroke-width', '3'),
				a(n, 'stroke-miterlimit', '10'),
				a(
					o,
					'd',
					'M44.8556 20.6283C43.0855 21.9326 40.9427 22.7245 38.567 22.7245C32.7908 22.7245 28.0859 18.0196 28.0859 12.2434C28.0859 6.46716 32.7908 1.76233 38.567 1.76233C40.9427 1.76233 43.1321 2.55423 44.8556 3.85854'
				),
				a(o, 'stroke', 'black'),
				a(o, 'stroke-width', '3'),
				a(o, 'stroke-miterlimit', '10'),
				a(
					d,
					'd',
					'M44.8555 3.85852C47.4175 5.7684 49.0479 8.79627 49.0479 12.2434C49.0479 15.6905 47.4175 18.7183 44.8555 20.6282'
				),
				a(d, 'stroke', 'url(#paint2_linear_26_1157)'),
				a(d, 'stroke-width', '3'),
				a(d, 'stroke-miterlimit', '10'),
				a(
					b,
					'd',
					'M70.0099 20.6283C68.2398 21.9326 66.097 22.7245 63.7213 22.7245C57.9451 22.7245 53.2402 18.0196 53.2402 12.2434C53.2402 6.46716 57.9451 1.76233 63.7213 1.76233C66.097 1.76233 68.2864 2.55423 70.0099 3.85854'
				),
				a(b, 'stroke', 'black'),
				a(b, 'stroke-width', '3'),
				a(b, 'stroke-miterlimit', '10'),
				a(
					m,
					'd',
					'M70.0098 3.85852C72.5718 5.7684 74.2022 8.79627 74.2022 12.2434C74.2022 15.6905 72.5718 18.7183 70.0098 20.6282'
				),
				a(m, 'stroke', 'url(#paint3_linear_26_1157)'),
				a(m, 'stroke-width', '3'),
				a(m, 'stroke-miterlimit', '10'),
				a(h, 'd', 'M79.3271 0.364868L79.3271 24.122'),
				a(h, 'stroke', 'black'),
				a(h, 'stroke-width', '3'),
				a(h, 'stroke-miterlimit', '10'),
				a(k, 'd', 'M96.0967 0.364868L96.0967 24.122'),
				a(k, 'stroke', 'black'),
				a(k, 'stroke-width', '3'),
				a(k, 'stroke-miterlimit', '10'),
				a(u, 'd', 'M79.3271 12.4762H96.0969'),
				a(u, 'stroke', 'black'),
				a(u, 'stroke-width', '3'),
				a(u, 'stroke-miterlimit', '10'),
				a(g, 'd', 'M102.618 0.364868L102.618 24.122'),
				a(g, 'stroke', 'black'),
				a(g, 'stroke-width', '3'),
				a(g, 'stroke-miterlimit', '10'),
				a(C, 'd', 'M71.5938 6.23425H77.1837'),
				a(C, 'stroke', 'url(#paint4_linear_26_1157)'),
				a(C, 'stroke-width', '3'),
				a(C, 'stroke-miterlimit', '10'),
				a(q, 'stop-color', '#B0B0B0'),
				a(O, 'offset', '1'),
				a(O, 'stop-color', '#A0A0A0'),
				a(O, 'stop-opacity', '0'),
				a(y, 'id', 'paint0_linear_26_1157'),
				a(y, 'x1', '27.1504'),
				a(y, 'y1', '6.23425'),
				a(y, 'x2', '27.1504'),
				a(y, 'y2', '7.23425'),
				a(y, 'gradientUnits', 'userSpaceOnUse'),
				a(Z, 'stop-color', '#B0B0B0'),
				a(G, 'offset', '1'),
				a(G, 'stop-color', '#A0A0A0'),
				a(G, 'stop-opacity', '0'),
				a(Y, 'id', 'paint1_linear_26_1157'),
				a(Y, 'x1', '51.1452'),
				a(Y, 'y1', '3.85852'),
				a(Y, 'x2', '51.1452'),
				a(Y, 'y2', '9.7745'),
				a(Y, 'gradientUnits', 'userSpaceOnUse'),
				a(N, 'stop-color', '#B0B0B0'),
				a(B, 'offset', '1'),
				a(B, 'stop-color', '#A0A0A0'),
				a(B, 'stop-opacity', '0'),
				a($, 'id', 'paint2_linear_26_1157'),
				a($, 'x1', '46.9517'),
				a($, 'y1', '3.85852'),
				a($, 'x2', '46.9517'),
				a($, 'y2', '20.6282'),
				a($, 'gradientUnits', 'userSpaceOnUse'),
				a(K, 'stop-color', '#B0B0B0'),
				a(M, 'offset', '1'),
				a(M, 'stop-color', '#A0A0A0'),
				a(M, 'stop-opacity', '0'),
				a(j, 'id', 'paint3_linear_26_1157'),
				a(j, 'x1', '72.106'),
				a(j, 'y1', '3.85852'),
				a(j, 'x2', '72.106'),
				a(j, 'y2', '20.6282'),
				a(j, 'gradientUnits', 'userSpaceOnUse'),
				a(W, 'stop-color', '#B0B0B0'),
				a(A, 'offset', '1'),
				a(A, 'stop-color', '#A0A0A0'),
				a(A, 'stop-opacity', '0'),
				a(E, 'id', 'paint4_linear_26_1157'),
				a(E, 'x1', '74.3887'),
				a(E, 'y1', '6.23425'),
				a(E, 'x2', '74.3887'),
				a(E, 'y2', '7.23425'),
				a(E, 'gradientUnits', 'userSpaceOnUse'),
				a(t, 'width', '132'),
				a(t, 'height', '25'),
				a(t, 'viewBox', '0 0 132 25'),
				a(t, 'fill', 'none'),
				a(t, 'xmlns', 'http://www.w3.org/2000/svg');
		},
		m(Q, w) {
			S(Q, t, w),
				f(t, r),
				f(t, e),
				f(t, i),
				f(t, n),
				f(t, o),
				f(t, d),
				f(t, b),
				f(t, m),
				f(t, h),
				f(t, k),
				f(t, u),
				f(t, g),
				f(t, C),
				f(t, x),
				f(x, y),
				f(y, q),
				f(y, O),
				f(x, Y),
				f(Y, Z),
				f(Y, G),
				f(x, $),
				f($, N),
				f($, B),
				f(x, j),
				f(j, K),
				f(j, M),
				f(x, E),
				f(E, W),
				f(E, A);
		},
		p: D,
		i: D,
		o: D,
		d(Q) {
			Q && l(t);
		}
	};
}
class Pt extends H {
	constructor(t) {
		super(), J(this, t, null, Dt, V, {});
	}
}
function Ft(s) {
	let t, r;
	return {
		c() {
			(t = P('img')), this.h();
		},
		l(e) {
			(t = F(e, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			jt(t.src, (r = '/images/png/logo.png')) || a(t, 'src', r),
				a(t, 'alt', 'JEM LOGO'),
				a(t, 'class', 'svelte-1lyw79n');
		},
		m(e, i) {
			S(e, t, i);
		},
		d(e) {
			e && l(t);
		}
	};
}
function Rt(s) {
	let t, r;
	return (
		(t = new Pt({})),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				X(t.$$.fragment, e);
			},
			m(e, i) {
				I(t, e, i), (r = !0);
			},
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				T(t, e);
			}
		}
	);
}
function Ht(s) {
	let t;
	return {
		c() {
			t = yt('Occhio Studios - Base Project');
		},
		l(r) {
			t = _t(r, 'Occhio Studios - Base Project');
		},
		m(r, e) {
			S(r, t, e);
		},
		d(r) {
			r && l(t);
		}
	};
}
function Jt(s) {
	let t;
	return {
		c() {
			t = yt('Init Project');
		},
		l(r) {
			t = _t(r, 'Init Project');
		},
		m(r, e) {
			S(r, t, e);
		},
		d(r) {
			r && l(t);
		}
	};
}
function Vt(s) {
	let t, r, e, i, n, o, d, b, m, h, k;
	return (
		(r = new wt({
			props: {
				slot: 'img',
				class: 'h-12 w-12 mt-3 mb-1',
				$$slots: { default: [Ft] },
				$$scope: { ctx: s }
			}
		})),
		(i = new wt({
			props: {
				slot: 'svg',
				class: 'h-24 w-24 my-1',
				$$slots: { default: [Rt] },
				$$scope: { ctx: s }
			}
		})),
		(o = new ht({ props: { $$slots: { default: [Ht] }, $$scope: { ctx: s } } })),
		(b = new ht({
			props: { class: 'text-xs my-3', $$slots: { default: [Jt] }, $$scope: { ctx: s } }
		})),
		(h = new St({ props: { size: '60', color: '#FF3E00', unit: 'px', duration: '1s' } })),
		{
			c() {
				(t = P('main')),
					L(r.$$.fragment),
					(e = tt()),
					L(i.$$.fragment),
					(n = tt()),
					L(o.$$.fragment),
					(d = tt()),
					L(b.$$.fragment),
					(m = tt()),
					L(h.$$.fragment),
					this.h();
			},
			l(u) {
				t = F(u, 'MAIN', { class: !0 });
				var g = c(t);
				X(r.$$.fragment, g),
					(e = et(g)),
					X(i.$$.fragment, g),
					(n = et(g)),
					X(o.$$.fragment, g),
					(d = et(g)),
					X(b.$$.fragment, g),
					(m = et(g)),
					X(h.$$.fragment, g),
					g.forEach(l),
					this.h();
			},
			h() {
				a(t, 'class', 'svelte-1lyw79n');
			},
			m(u, g) {
				S(u, t, g),
					I(r, t, null),
					f(t, e),
					I(i, t, null),
					f(t, n),
					I(o, t, null),
					f(t, d),
					I(b, t, null),
					f(t, m),
					I(h, t, null),
					(k = !0);
			},
			p(u, [g]) {
				const C = {};
				g & 1 && (C.$$scope = { dirty: g, ctx: u }), r.$set(C);
				const x = {};
				g & 1 && (x.$$scope = { dirty: g, ctx: u }), i.$set(x);
				const y = {};
				g & 1 && (y.$$scope = { dirty: g, ctx: u }), o.$set(y);
				const q = {};
				g & 1 && (q.$$scope = { dirty: g, ctx: u }), b.$set(q);
			},
			i(u) {
				k ||
					(_(r.$$.fragment, u),
					_(i.$$.fragment, u),
					_(o.$$.fragment, u),
					_(b.$$.fragment, u),
					_(h.$$.fragment, u),
					(k = !0));
			},
			o(u) {
				z(r.$$.fragment, u),
					z(i.$$.fragment, u),
					z(o.$$.fragment, u),
					z(b.$$.fragment, u),
					z(h.$$.fragment, u),
					(k = !1);
			},
			d(u) {
				u && l(t), T(r), T(i), T(o), T(b), T(h);
			}
		}
	);
}
class Zt extends H {
	constructor(t) {
		super(), J(this, t, null, Vt, V, {});
	}
}
function Nt(s) {
	let t, r;
	return (
		(t = new Zt({})),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				X(t.$$.fragment, e);
			},
			m(e, i) {
				I(t, e, i), (r = !0);
			},
			p: D,
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				T(t, e);
			}
		}
	);
}
class Wt extends H {
	constructor(t) {
		super(), J(this, t, null, Nt, V, {});
	}
}
export { Wt as default };
