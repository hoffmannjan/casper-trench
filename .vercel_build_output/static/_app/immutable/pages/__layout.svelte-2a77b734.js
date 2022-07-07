import {
	S as n,
	i as l,
	s as c,
	F as s,
	k as d,
	G as v,
	d as w,
	m,
	g as h,
	H as g,
	I as x,
	J as b,
	r as u,
	p as f
} from '../chunks/index-d017537a.js';
function y(r) {
	let a, o;
	const p = r[1].default,
		e = s(p, r, r[0], null);
	return {
		c() {
			(a = d()), e && e.c(), this.h();
		},
		l(t) {
			v('[data-svelte="svelte-4mpla6"]', document.head).forEach(w),
				(a = m(t)),
				e && e.l(t),
				this.h();
		},
		h() {
			document.title = 'Occhio Studios';
		},
		m(t, i) {
			h(t, a, i), e && e.m(t, i), (o = !0);
		},
		p(t, [i]) {
			e && e.p && (!o || i & 1) && g(e, p, t, t[0], o ? b(p, t[0], i, null) : x(t[0]), null);
		},
		i(t) {
			o || (u(e, t), (o = !0));
		},
		o(t) {
			f(e, t), (o = !1);
		},
		d(t) {
			t && w(a), e && e.d(t);
		}
	};
}
function k(r, a, o) {
	let { $$slots: p = {}, $$scope: e } = a;
	return (
		(r.$$set = (t) => {
			'$$scope' in t && o(0, (e = t.$$scope));
		}),
		[e, p]
	);
}
class _ extends n {
	constructor(a) {
		super(), l(this, a, k, y, c, {});
	}
}
export { _ as default };
