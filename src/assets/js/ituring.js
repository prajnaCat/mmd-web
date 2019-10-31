var Markdown, _typeof;
if (!
function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    }: t(n)
} ("undefined" != typeof window ? window: this,
function(n, t) {
    function ri(n) {
        var t = n.length,
        r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }
    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n,
        function(n, i) {
            return !! t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n,
        function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (re.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n,
        function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function hr(n, t) {
        do n = n[t];
        while (n && 1 !== n.nodeType);
        return n
    }
    function ee(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [],
        function(n, i) {
            t[i] = !0
        }),
        t
    }
    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }
    function a() { (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (cr(), i.ready())
    }
    function yr(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: ar.test(r) ? i.parseJSON(r) : r
                } catch(f) {}
                i.data(n, t, r)
            } else r = void 0
        }
        return r
    }
    function ei(n) {
        for (var t in n) if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
            l = n.nodeType,
            o = l ? i.cache: n,
            f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = l ? n[h] = c.pop() || i.guid++:h),
            o[f] || (o[f] = l ? {}: {
                toJSON: i.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
            e = o[f],
            u || (e.data || (e.data = {}), e = e.data),
            void 0 !== r && (e[i.camelCase(t)] = r),
            "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e,
            s
        }
    }
    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType,
            f = h ? i.cache: n,
            e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = (t in o) ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
                    if (u ? !ei(o) : !i.isEmptyObject(o)) return
                } (u || (delete f[e].data, ei(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
            }
        }
    }
    function vt() {
        return ! 0
    }
    function it() {
        return ! 1
    }
    function dr() {
        try {
            return u.activeElement
        } catch(n) {}
    }
    function gr(n) {
        var i = nu.split("|"),
        t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, s = 0,
        r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : void 0;
        if (!r) for (r = [], e = n.childNodes || n; null != (u = e[s]); s++) ! t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function we(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function ou(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function su(n) {
        var t = ve.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function li(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function hu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
            r = i._data(t, s),
            e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({},
            r.data))
        }
    }
    function be(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (ou(t).text = n.text, su(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected: ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }
    function cu(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body),
        e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display: i.css(u[0], "display");
        return u.detach(),
        e
    }
    function yt(n) {
        var r = u,
        t = ai[n];
        return t || (t = cu(n, r), "none" !== t && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t),
        t
    }
    function au(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i) return i ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function pu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--;) if (t = yu[i] + r, t in n) return t;
        return u
    }
    function wu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u],
        r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f: i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "": "none"));
        return n
    }
    function bu(n, t, i) {
        var r = no.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function ku(n, t, r, u, f) {
        for (var e = r === (u ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)"margin" === r && (o += i.css(n, r + w[e], !0, f)),
        u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }
    function du(n, t, u) {
        var o = !0,
        f = "width" === t ? n.offsetWidth: n.offsetHeight,
        e = k(n),
        s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = d(n, t, e), (0 > f || null == f) && (f = n.style[t]), pt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + ku(n, t, u || (s ? "border": "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }
    function nf() {
        return setTimeout(function() {
            rt = void 0
        }),
        rt = i.now()
    }
    function kt(n, t) {
        var r, i = {
            height: n
        },
        u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u],
        i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function tf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e > r; r++) if (u = f[r].call(i, t, n)) return u
    }
    function fo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this,
        y = {},
        o = n.style,
        c = n.nodeType && et(n),
        e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"), null == s.unqueued && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
            s.unqueued || w()
        }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t) if (a = t[f], ro.exec(a)) {
            if (delete t[f], p = p || "toggle" === a, a === (c ? "hide": "show")) {
                if ("show" !== a || !e || void 0 === e[f]) continue;
                c = !0
            }
            y[f] = e && e[f] || i.style(n, f)
        } else h = void 0;
        if (i.isEmptyObject(y))"inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (f in y) v = tf(c ? e[f] : 0, f, l),
            f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
        }
    }
    function eo(n, t) {
        var r, f, e, u, o;
        for (r in n) if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
            u = o.expand(u);
            delete n[f];
            for (r in u) r in n || (n[r] = u[r], t[r] = e)
        } else t[f] = e
    }
    function rf(n, t, r) {
        var h, e, o = 0,
        l = bt.length,
        f = i.Deferred().always(function() {
            delete c.elem
        }),
        c = function() {
            if (e) return ! 1;
            for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t: (f.resolveWith(n, [u]), !1)
        },
        u = f.promise({
            elem: n,
            props: i.extend({},
            t),
            opts: i.extend(!0, {
                specialEasing: {}
            },
            r),
            originalProperties: t,
            originalOptions: r,
            startTime: rt || nf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0,
                r = t ? u.tweens.length: 0;
                if (e) return this;
                for (e = !0; r > i; i++) u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }),
        s = u.props;
        for (eo(s, u.opts.specialEasing); l > o; o++) if (h = bt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, tf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function af(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
            e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r)) while (u = e[f++])"+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [],
            function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }),
            h
        }
        var f = {},
        o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n: u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ao(n, t, i) {
        for (var o, e, u, f, s = n.contents,
        r = n.dataTypes;
        "*" === r[0];) r.shift(),
        void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e) for (f in s) if (s[f] && s[f].test(e)) {
            r.unshift(f);
            break
        }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return (u !== r[0] && r.unshift(u), i[u])
    }
    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {},
        c = n.dataTypes.slice();
        if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;) if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift()) if ("*" === u) u = e;
        else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f) for (h in o) if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                break
            }
            if (f !== !0) if (f && n.throws) t = f(t);
            else try {
                t = f(t)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: f ? l: "No conversion from " + e + " to " + u
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t,
        function(t, i) {
            r || po.test(n) ? u(n, i) : di(n + "[" + ("object" == typeof i ? t: "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }
    function pf() {
        try {
            return new n.XMLHttpRequest
        } catch(t) {}
    }
    function go() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function wf(n) {
        return i.isWindow(n) ? n: 9 === n.nodeType ? n.defaultView || n.parentWindow: !1
    }
    var c = [],
    l = c.slice,
    ir = c.concat,
    ii = c.push,
    rr = c.indexOf,
    ct = {},
    df = ct.toString,
    tt = ct.hasOwnProperty,
    r = {},
    ur = "1.11.1",
    i = function(n, t) {
        return new i.fn.init(n, t)
    },
    gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ne = /^-ms-/,
    te = /-([\da-z])/gi,
    ie = function(n, t) {
        return t.toUpperCase()
    },
    p,
    or,
    sr,
    h,
    fi,
    lt,
    o,
    lr,
    ar,
    vr,
    ot,
    ai,
    uf,
    ef,
    of,
    gt,
    gi,
    ti,
    nr,
    tr,
    bf,
    kf;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this,
            function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(n) {
            var i = this.length,
            t = +n + (0 > n ? i: 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
        u = 1,
        c = arguments.length,
        h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {},
        u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++) if (null != (o = arguments[u])) for (f in o) r = n[f],
        t = o[f],
        n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r: []) : s = r && i.isPlainObject(r) ? r: {},
        n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray ||
        function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return ! i.isArray(n) && n - parseFloat(n) >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n) return ! 1;
            return ! 0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return ! 1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(u) {
                return ! 1
            }
            if (r.ownLast) for (t in n) return tt.call(n, t);
            for (t in n);
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "": "object" == typeof n || "function" == typeof n ? ct[df.call(n)] || "object": typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript ||
            function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(ne, "ms-").replace(te, ie)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
            f = n.length,
            e = ri(n);
            if (i) {
                if (e) {
                    for (; f > r; r++) if (u = t.apply(n[r], i), u === !1) break
                } else for (r in n) if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++) if (u = t.call(n[r], r, n[r]), u === !1) break
            } else for (r in n) if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n
        },
        trim: function(n) {
            return null == n ? "": (n + "").replace(gf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i: 0; r > i; i++) if (i in t && t[i] === n) return i
            }
            return - 1
        },
        merge: function(n, t) {
            for (var r = +t.length,
            i = 0,
            u = n.length; r > i;) n[u++] = t[i++];
            if (r !== r) while (void 0 !== t[i]) n[u++] = t[i++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r),
            u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
            e = n.length,
            o = ri(n),
            f = [];
            if (o) for (; e > r; r++) u = t(n[r], r, i),
            null != u && f.push(u);
            else for (r in n) u = t(n[r], r, i),
            null != u && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t], t = n, n = f),
            i.isFunction(n) ? (u = l.call(arguments, 2), r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            },
            r.guid = n.guid = n.guid || i.guid++, r) : void 0
        },
        now: function() {
            return + new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function r(n, t, i, r) {
            var w, h, c, v, k, y, d, l, nt, g;
            if ((t ? t.ownerDocument || t: s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n) return i;
            if (1 !== (v = t.nodeType) && 9 !== v) return [];
            if (a && !r) {
                if (w = sr.exec(n)) if (c = w[1]) {
                    if (9 === v) {
                        if (h = t.getElementById(c), !h || !h.parentNode) return i;
                        if (h.id === c) return i.push(h),
                        i
                    } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c) return i.push(h),
                    i
                } else {
                    if (w[2]) return b.apply(i, t.getElementsByTagName(n)),
                    i;
                    if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)),
                    i
                }
                if (u.qsa && (!o || !o.test(n))) {
                    if (l = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = et(n), (d = t.getAttribute("id")) ? l = d.replace(hr, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length; k--;) y[k] = l + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)),
                        i
                    } catch(tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, i, r)
        }
        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function h(n) {
            return n[f] = !0,
            n
        }
        function c(n) {
            var t = e.createElement("div");
            try {
                return !! n(t)
            } catch(i) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }
        function wi(n, t) {
            var i = t && n,
            r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
            if (r) return r;
            if (i) while (i = i.nextSibling) if (i === t) return - 1;
            return n ? 1 : -1
        }
        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function tt(n) {
            return h(function(t) {
                return t = +t,
                h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }
        function bi() {}
        function yt(n) {
            for (var t = 0,
            r = n.length,
            i = ""; r > t; t++) i += n[t].value;
            return i
        }
        function ri(n, t, i) {
            var r = t.dir,
            u = i && "parentNode" === r,
            e = ki++;
            return t.first ?
            function(t, i, f) {
                while (t = t[r]) if (1 === t.nodeType || u) return n(t, i, f)
            }: function(t, i, o) {
                var s, h, c = [v, e];
                if (o) {
                    while (t = t[r]) if ((1 === t.nodeType || u) && n(t, i, o)) return ! 0
                } else while (t = t[r]) if (1 === t.nodeType || u) {
                    if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e) return c[2] = s[2];
                    if (h[r] = c, c[2] = n(t, i, o)) return ! 0
                }
            }
        }
        function ui(n) {
            return n.length > 1 ?
            function(t, i, r) {
                for (var u = n.length; u--;) if (!n[u](t, i, r)) return ! 1;
                return ! 0
            }: n[0]
        }
        function ar(n, t, i) {
            for (var u = 0,
            f = t.length; f > u; u++) r(n, t[u], i);
            return i
        }
        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }
        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)),
            u && !u[f] && (u = fi(u, e)),
            h(function(f, e, o, s) {
                var l, c, a, p = [],
                y = [],
                w = e.length,
                k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                v = !n || !f && t ? k: pt(k, p, n, o, s),
                h = i ? u || (f ? n: w || r) ? [] : e: v;
                if (i && i(v, h, o, s), r) for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h),
                u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function ei(n) {
            for (var s, u, r, o = n.length,
            h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                return n === s
            },
            c, !0), a = ri(function(n) {
                return nt.call(s, n) > -1
            },
            c, !0), e = [function(n, t, i) {
                return ! h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }]; o > i; i++) if (u = t.relative[n[i].type]) e = [ri(ui(e), u)];
            else {
                if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                    for (r = ++i; o > r; r++) if (t.relative[n[r].type]) break;
                    return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                        value: " " === n[i - 2].type ? "*": ""
                    })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
                }
                e.push(u)
            }
            return ui(e)
        }
        function vr(n, i) {
            var u = i.length > 0,
            f = n.length > 0,
            o = function(o, s, h, c, l) {
                var y, d, w, k = 0,
                a = "0",
                g = o && [],
                p = [],
                nt = ct,
                tt = o || f && t.find.TAG("*", l),
                it = v += null == nt ? 1 : Math.random() || .1,
                rt = tt.length;
                for (l && (ct = s !== e && s); a !== rt && null != (y = tt[a]); a++) {
                    if (f && y) {
                        for (d = 0; w = n[d++];) if (w(y, s, h)) {
                            c.push(y);
                            break
                        }
                        l && (v = it)
                    }
                    u && ((y = !w && y) && k--, o && g.push(y))
                }
                if (k += a, u && a !== k) {
                    for (d = 0; w = i[d++];) w(g, p, s, h);
                    if (o) {
                        if (k > 0) while (a--) g[a] || p[a] || (p[a] = gi.call(c));
                        p = pt(p)
                    }
                    b.apply(c, p);
                    l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                }
                return l && (v = it, ct = nt),
                g
            };
            return u ? h(o) : o
        }
        var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date,
        s = n.document,
        v = 0,
        ki = 0,
        hi = ni(),
        ci = ni(),
        li = ni(),
        bt = function(n, t) {
            return n === t && (rt = !0),
            0
        },
        ut = "undefined",
        ai = -2147483648,
        di = {}.hasOwnProperty,
        w = [],
        gi = w.pop,
        nr = w.push,
        b = w.push,
        vi = w.slice,
        nt = w.indexOf ||
        function(n) {
            for (var t = 0,
            i = this.length; i > t; t++) if (this[t] === n) return t;
            return - 1
        },
        kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        i = "[\\x20\\t\\r\\n\\f]",
        ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        yi = ft.replace("w", "w#"),
        pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]",
        dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)",
        at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
        tr = new RegExp("^" + i + "*," + i + "*"),
        ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
        rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
        ur = new RegExp(dt),
        fr = new RegExp("^" + yi + "$"),
        vt = {
            ID: new RegExp("^#(" + ft + ")"),
            CLASS: new RegExp("^\\.(" + ft + ")"),
            TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + pi),
            PSEUDO: new RegExp("^" + dt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + kt + ")$", "i"),
            needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
        },
        er = /^(?:input|select|textarea|button)$/i,
        or = /^h\d$/i,
        st = /^[^{]+\{\s*\[native \w/,
        sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        gt = /[+~]/,
        hr = /'|\\/g,
        k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
        d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            b.apply(w = vi.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch(yr) {
            b = {
                apply: w.length ?
                function(n, t) {
                    nr.apply(n, vi.call(t))
                }: function(n, t) {
                    for (var i = n.length,
                    r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        oi = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        };
        p = r.setDocument = function(n) {
            var v, r = n ? n.ownerDocument || n: s,
            h = r.defaultView;
            return r !== e && 9 === r.nodeType && r.documentElement ? (e = r, l = r.documentElement, a = !oi(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload",
            function() {
                p()
            },
            !1) : h.attachEvent && h.attachEvent("onunload",
            function() {
                p()
            })), u.attributes = c(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }), u.getElementsByTagName = c(function(n) {
                return n.appendChild(r.createComment("")),
                !n.getElementsByTagName("*").length
            }), u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }), u.getById = c(function(n) {
                return l.appendChild(n).id = f,
                !r.getElementsByName || !r.getElementsByName(f).length
            }), u.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && a) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            },
            t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = u.getElementsByTagName ?
            function(n, t) {
                if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n)
            }: function(n, t) {
                var i, r = [],
                f = 0,
                u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            },
            t.find.CLASS = u.getElementsByClassName &&
            function(n, t) {
                if (typeof t.getElementsByClassName !== ut && a) return t.getElementsByClassName(n)
            },
            g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function(n) {
                u.disconnectedMatch = lt.call(n, "div");
                lt.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st.test(l.compareDocumentPosition), ot = v || st.test(l.contains) ?
            function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement: n,
                i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }: function(n, t) {
                if (t) while (t = t.parentNode) if (t === n) return ! 0;
                return ! 1
            },
            bt = v ?
            function(n, t) {
                if (n === t) return rt = !0,
                0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i: (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
            }: function(n, t) {
                if (n === t) return rt = !0,
                0;
                var i, u = 0,
                o = n.parentNode,
                h = t.parentNode,
                f = [n],
                e = [t];
                if (!o || !h) return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h) return wi(n, t);
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
            },
            r) : e
        };
        r.matches = function(n, t) {
            return r(n, null, null, t)
        };
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), !(!u.matchesSelector || !a || g && g.test(t) || o && o.test(t))) try {
                var i = lt.call(n, t);
                if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch(f) {}
            return r(t, e, null, [n]).length > 0
        };
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n),
            ot(n, t)
        };
        r.attr = function(n, i) { (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
            r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : void 0;
            return void 0 !== r ? r: u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value: null
        };
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        r.uniqueSort = function(n) {
            var r, f = [],
            t = 0,
            i = 0;
            if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
                while (r = n[i++]) r === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return y = null,
            n
        };
        ht = r.getText = function(n) {
            var r, i = "",
            u = 0,
            t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += ht(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else while (r = n[u++]) i += ht(r);
            return i
        };
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(k, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null: (n[3] ? n[2] = n[4] || n[5] || "": t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ?
                    function() {
                        return ! 0
                    }: function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n,
                    function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return null == f ? "!=" === t: t ? (f += "", "=" === t ? f === i: "!=" === t ? f !== i: "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice( - i.length) === i: "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                    o = "last" !== n.slice( - 4),
                    e = "of-type" === t;
                    return 1 === r && 0 === u ?
                    function(n) {
                        return !! n.parentNode
                    }: function(t, i, h) {
                        var a, k, c, l, y, w, b = s !== o ? "nextSibling": "previousSibling",
                        p = t.parentNode,
                        g = e && t.nodeName.toLowerCase(),
                        d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];) if (e ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) return ! 1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return ! 0
                            }
                            if (w = [o ? p.firstChild: p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();) if (1 === c.nodeType && ++l && c === t) {
                                    k[n] = [v, y, l];
                                    break
                                }
                            } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                            else while (c = ++y && c && c[b] || (l = y = 0) || w.pop()) if ((e ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--;) r = nt.call(n, f[e]),
                        n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }) : u
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                    r = [],
                    t = wt(n.replace(at, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return fr.test(n || "") || r.error("unsupported lang: " + n),
                    n = n.replace(k, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                        if (i = a ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(),
                        i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === l
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(n) {
                    return ! t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t: i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t: i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t: i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) t.pseudos[it] = cr(it);
        for (it in {
            submit: !0,
            reset: !0
        }) t.pseudos[it] = lr(it);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        et = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) { (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                e = !1; (f = ir.exec(u)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), u = u.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), u = u.slice(e.length));
                if (!e) break
            }
            return i ? u.length: u ? r.error(n) : ci(n, h).slice(0)
        },
        wt = r.compile = function(n, t) {
            var r, u = [],
            e = [],
            i = li[n + " "];
            if (!i) {
                for (t || (t = et(n)), r = t.length; r--;) i = ei(t[r]),
                i[f] ? u.push(i) : e.push(i);
                i = li(n, vr(e, u));
                i.selector = n
            }
            return i
        },
        si = r.select = function(n, i, r, f) {
            var s, e, o, l, v, c = "function" == typeof n && n,
            h = !f && et(n = c.selector || n);
            if (r = r || [], 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && a && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i) return r;
                    c && (i = i.parentNode);
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[l = o.type]) break;
                    if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(r, f),
                        r;
                        break
                    }
                }
            }
            return (c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i),
            r
        },
        u.sortStable = f.split("").sort(bt).join("") === f,
        u.detectDuplicates = !!rt,
        p(),
        u.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }),
        c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width",
        function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        u.attributes && c(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ti("value",
        function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }),
        c(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt,
        function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        r
    } (n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
    er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    re = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t,
        function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
            u = this,
            f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; f > t; t++) if (i.contains(u[t], this)) return ! 0
            }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n: n,
            r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !! ui(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document,
    ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    fe = i.fn.init = function(n, t) {
        var r, f;
        if (!n) return this;
        if ("string" == typeof n) {
            if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : ue.exec(n), !r || !r[1] && t) return ! t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: u, !0)), er.test(r[1]) && i.isPlainObject(t)) for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (f = u.getElementById(r[2]), f && f.parentNode) {
                if (f.id !== r[2]) return ft.find(n);
                this.length = 1;
                this[0] = f
            }
            return this.context = u,
            this.selector = n,
            this
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ft.ready ? ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    fe.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r));) 1 === u.nodeType && f.push(u),
            u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
            u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++) if (i.contains(this, r[t])) return ! 0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0,
            o = this.length,
            u = [], e = fr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++) for (r = this[f]; r && r !== t; r = r.parentNode) if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                u.push(r);
                break
            }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject: this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document: i.merge([], n.childNodes)
        }
    },
    function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice( - 5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? fi[n] || ee(n) : i.extend({},
        n);
        var o, u, h, f, e, c, t = [],
        r = !n.once && [],
        l = function(i) {
            for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++) if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                u = !1;
                break
            }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        },
        s = {
            add: function() {
                if (t) {
                    var r = t.length; !
                    function e(r) {
                        i.each(r,
                        function(r, u) {
                            var f = i.type(u);
                            "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                        })
                    } (arguments);
                    o ? f = t.length: u && (c = r, l(u))
                }
                return this
            },
            remove: function() {
                return t && i.each(arguments,
                function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1),
                    o && (f >= u && f--, e >= u && e--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
            },
            empty: function() {
                return t = [],
                f = 0,
                this
            },
            disable: function() {
                return t = r = u = void 0,
                this
            },
            disabled: function() {
                return ! t
            },
            lock: function() {
                return r = void 0,
                u || s.disable(),
                this
            },
            locked: function() {
                return ! r
            },
            fireWith: function(n, i) {
                return ! t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! h
            }
        };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
            f = "pending",
            r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u,
                        function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            },
            t = {};
            return r.pipe = r.then,
            i.each(u,
            function(n, i) {
                var e = i[2],
                o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                },
                u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r: this, arguments),
                    this
                };
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0,
            u = l.call(arguments),
            r = u.length,
            e = 1 !== r || n && i.isFunction(n.promise) ? r: 0,
            f = 1 === e ? n: i.Deferred(),
            h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            },
            o,
            c,
            s;
            if (r > 1) for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++:i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait: !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt) if (lt = i.Deferred(), "complete" === u.readyState) setTimeout(i.ready);
        else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1),
        n.addEventListener("load", a, !1);
        else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = null == n.frameElement && u.documentElement
            } catch(e) {}
            r && r.doScroll && !
            function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch(n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            } ()
        }
        return lt.promise(t)
    };
    o = "undefined";
    for (lr in i(r)) break;
    r.ownLast = "0" !== lr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        n = u.getElementsByTagName("body")[0];
        n && n.style && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth, f && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
        var n = u.createElement("div");
        if (null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch(t) {
                r.deleteExpando = !1
            }
        }
        n = null
    } ();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
        r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0],
            o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) o[f] && (u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), yr(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return (t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
            e = r.length,
            u = r.shift(),
            f = i._queueHooks(n, t),
            o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f)); ! e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this: this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1,
            e = i.Deferred(),
            u = this,
            o = this.length,
            s = function() {--f || e.resolveWith(u, [u])
            };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"),
            r && r.empty && (f++, r.empty.add(s));
            return s(),
            e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = ["Top", "Right", "Bottom", "Left"],
    et = function(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    },
    b = i.access = function(n, t, r, u, f, e, o) {
        var s = 0,
        c = n.length,
        h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r) i.access(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
            return h.call(i(n), r)
        })), t)) for (; c > s; s++) t(n[s], r, o ? u: u.call(n[s], s, t(n[s], r)));
        return f ? n: h ? t.call(n) : c ? t(n[0], r) : e
    },
    oi = /^(?:checkbox|radio)$/i; !
    function() {
        var t = u.createElement("input"),
        n = u.createElement("div"),
        i = u.createDocumentFragment();
        if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick",
        function() {
            r.noCloneEvent = !1
        }), n.cloneNode(!0).click()), null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch(f) {
                r.deleteExpando = !1
            }
        }
    } (),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + t,
        (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    } ();
    var si = /^(?:input|select|textarea)$/i,
    oe = /^key/,
    se = /^(?:mouse|pointer|contextmenu)|click/,
    br = /^(?:focusinfocus|focusoutblur)$/,
    kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                    if (typeof i !== o && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;) w = kr.exec(t[b]) || [],
                e = d = w[1],
                k = (w[2] || "").split(".").sort(),
                e && (s = i.event.special[e] || {},
                e = (f ? s.delegateType: s.bindType) || e, s = i.event.special[e] || {},
                l = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                },
                p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), e) {
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType: c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y],
                    !f && k !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                } else for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
            s = tt.call(t, "type") ? t.type: t,
            v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t: new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {},
            e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o),
                    h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p: c.bindType || s,
                l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                l && l.apply(o, r),
                l = a && o[a],
                l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch(b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
            h = l.call(arguments),
            c = (i._data(this, "events") || {})[n.type] || [],
            u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0; (r = s[e++]) && !n.isPropagationStopped();) for (n.currentTarget = r.elem, o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
            s = t.delegateCount,
            r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type)) for (; r != this; r = r.parentNode || this) if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                for (u = [], o = 0; s > o; o++) e = t[o],
                f = e.selector + " ",
                void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length),
                u[f] && u.push(e);
                u.length && h.push({
                    elem: r,
                    handlers: u
                })
            }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
            f = n,
            t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks: oe.test(r) ? this.keyHooks: {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e],
            n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode: t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement: o),
                n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur) return (this.blur(), !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return (this.click(), !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ?
    function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }: function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? vt: it) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                r = n.relatedTarget,
                e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t),
                u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit",
            function(n) {
                var r = n.target,
                t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form: void 0;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit",
                function(n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return si.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change",
            function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }), i.event.add(this, "click._change",
            function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1) : void i.event.add(this, "beforeactivate._change",
            function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change",
                function(n) { ! this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = it;
            else if (!u) return this;
            return 1 === f && (e = u, u = function(n) {
                return i().off(n),
                e.apply(this, arguments)
            },
            u.guid = e.guid || (e.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj,
            i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace: u.origType, u.selector, u.handler),
            this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0),
            r === !1 && (r = it),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    he = / jQuery\d+="(?:null|\d+)"/g,
    tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
    hi = /^\s+/,
    iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ru = /<([\w:]+)/,
    uu = /<tbody/i,
    ce = /<|&#?\w+;/,
    le = /<(?:script|style|link)/i,
    ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fu = /^$|\/(?:java|ecma)script/i,
    ve = /^true\/(.*)/,
    ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    s = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    },
    pe = gr(u),
    ci = pe.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n))) for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && be(c, e[o]);
            if (t) if (u) for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) hu(c, e[o]);
            else hu(n, s);
            return e = f(s, "script"),
            e.length > 0 && li(e, !l && f(n, "script")),
            e = h = c = null,
            s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length,
            v = gr(t), l = [], y = 0; k > y; y++) if (o = n[y], o || 0 === o) if ("object" === i.type(o)) i.merge(l, o.nodeType ? [o] : o);
            else if (ce.test(o)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody) for (o = "table" !== p || uu.test(o) ? "<table>" !== a[1] || uu.test(o) ? 0 : h: h.firstChild, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), we), y = 0; o = l[y++];) if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u)) for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
            return h = null,
            v
        },
        cleanData: function(n, t) {
            for (var u, e, f, s, a = 0,
            h = i.expando,
            l = i.cache,
            v = r.deleteExpando,
            y = i.event.special; null != (u = n[a]); a++) if ((t || i.acceptData(u)) && (f = u[h], s = f && l[f])) {
                if (s.events) for (e in s.events) y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, s.handle);
                l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
            }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this,
            function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            },
            null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(f(r)),
            r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n: t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this,
            function(n) {
                var t = this[0] || {},
                u = 0,
                e = this.length;
                if (void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(he, "") : void 0;
                if (! ("string" != typeof n || le.test(n) || !r.htmlSerialize && tu.test(n) || !r.leadingWhitespace && hi.test(n) || s[(ru.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; e > u; u++) t = this[u] || {},
                        1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch(o) {}
                }
                t && this.empty().append(n)
            },
            null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments,
            function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }),
            n && (n.length || n.nodeType) ? this: this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0,
            l = this.length,
            p = this,
            w = l - 1,
            a = n[0],
            y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone && ae.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; l > e; e++) u = s,
                e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))),
                t.call(this[e], u, e);
                if (c) for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; c > e; e++) u = o[e],
                fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0,
            f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this: this.clone(!0),
            i(e[r])[t](u),
            ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {}; !
    function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (null != n) return n;
            n = !1;
            var t, i, r;
            return i = u.getElementsByTagName("body")[0],
            i && i.style ? (t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = 3 !== t.offsetWidth), i.removeChild(r), n) : void 0
        }
    } ();
    var lu = /^margin/,
    pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
    k,
    d,
    ke = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    },
    d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n),
        u = r ? r.getPropertyValue(t) || r[t] : void 0,
        r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)),
        void 0 === u ? u: u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    },
    d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n),
        r = i ? i[t] : void 0,
        null == r && u && u[t] && (r = u[t]),
        pt.test(r) && !ke.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em": r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)),
        void 0 === r ? r: r + "" || "auto"
    }); !
    function() {
        var f, t, l, o, s, e, h;
        if (f = u.createElement("div"), f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", l = f.getElementsByTagName("a")[0], t = l && l.style) {
            t.cssText = "float:left;opacity:.5";
            r.opacity = "0.5" === t.opacity;
            r.cssFloat = !!t.cssFloat;
            f.style.backgroundClip = "content-box";
            f.cloneNode(!0).style.backgroundClip = "";
            r.clearCloneStyle = "content-box" === f.style.backgroundClip;
            r.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing;
            i.extend(r, {
                reliableHiddenOffsets: function() {
                    return null == e && c(),
                    e
                },
                boxSizingReliable: function() {
                    return null == s && c(),
                    s
                },
                pixelPosition: function() {
                    return null == o && c(),
                    o
                },
                reliableMarginRight: function() {
                    return null == h && c(),
                    h
                }
            });
            function c() {
                var i, r, f, t;
                r = u.getElementsByTagName("body")[0];
                r && r.style && (i = u.createElement("div"), f = u.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(f).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, h = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(i, null) || {}).top, s = "4px" === (n.getComputedStyle(i, null) || {
                    width: "4px"
                }).width, t = i.appendChild(u.createElement("div")), t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight)), i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = 0 === t[0].offsetHeight, e && (t[0].style.display = "", t[1].style.display = "none", e = 0 === t[0].offsetHeight), r.removeChild(f))
            }
        }
    } ();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u],
        n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i,
    de = /opacity\s*=\s*([^)]*)/,
    ge = /^(none|table(?!-c[ea]).+)/,
    no = new RegExp("^(" + at + ")(.*)$", "i"),
    to = new RegExp("^([+-])=(" + at + ")", "i"),
    io = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    vu = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return "" === i ? "1": i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, h, e, s = i.camelCase(t),
                c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return e && "get" in e && void 0 !== (o = e.get(n, !1, f)) ? o: c[t];
                if (h = typeof u, "string" === h && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != u && u === u && ("number" !== h || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(e && "set" in e && void 0 === (u = e.set(n, u, f))))) try {
                    c[t] = u
                } catch(l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)),
            e = i.cssHooks[t] || i.cssHooks[o],
            e && "get" in e && (f = e.get(n, !0, r)),
            void 0 === f && (f = d(n, t, u)),
            "normal" === f && t in vu && (f = vu[t]),
            "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"],
    function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return ge.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, io,
                function() {
                    return du(n, t, u)
                }) : du(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return bu(n, u, f ? ku(n, t, f, r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter: n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(n, t) {
            var r = n.style,
            u = n.currentStyle,
            e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            f = u && u.filter || r.filter || "";
            r.zoom = 1; (t >= 1 || "" === t) && "" === i.trim(f.replace(vi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight,
    function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        },
        d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0,
                f = {},
                u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this,
            function(n, t, r) {
                var f, e, o = {},
                u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            },
            n, t, arguments.length > 1)
        },
        show: function() {
            return wu(this, !0)
        },
        hide: function() {
            return wu(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "": "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : e.propHooks._default.set(this),
            this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t: 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return.5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, ro = /^(?:toggle|show|hide)$/,
    gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
    uo = /queueHooks$/,
    bt = [fo],
    st = {
        "*": [function(n, t) {
            var f = this.createTween(n, t),
            s = f.cur(),
            r = gu.exec(t),
            e = r && r[3] || (i.cssNumber[n] ? "": "px"),
            u = (i.cssNumber[n] || "px" !== e && +s) && gu.exec(i.css(f.elem, n)),
            o = 1,
            h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do o = o || ".5",
                u /= o,
                i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }]
    };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0,
            f = n.length; f > u; u++) r = n[u],
            st[r] = st[r] || [],
            st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? bt.unshift(n) : bt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({},
        n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration: u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        },
        u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            },
            n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
            e = i.speed(t, r, u),
            f = function() {
                var t = rf(this, i.extend({},
                n), e); (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t, t = n, n = void 0),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0,
                t = null != n && n + "queueHooks",
                e = i.timers,
                f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]);
                else for (t in f) f[t] && f[t].stop && uo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1)); (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this),
                r = f[n + "queue"],
                e = f[n + "queueHooks"],
                u = i.timers,
                o = r ? r.length: 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"],
    function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: kt("show"),
        slideUp: kt("hide"),
        slideToggle: kt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers,
        t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t],
        r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(wt);
        wt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n: n,
        t = t || "fx",
        this.queue(t,
        function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var n, t, f, i, e;
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        f = u.createElement("select");
        e = f.appendChild(u.createElement("option"));
        n = t.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = "t" !== t.className;
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = "/a" === i.getAttribute("href");
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = "" === n.getAttribute("value");
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = "t" === n.value
    } ();
    uf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "": "number" == typeof u ? u += "": i.isArray(u) && (u = i.map(u,
                function(n) {
                    return null == n ? "": n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r: (r = u.value, "string" == typeof r ? r.replace(uf, "") : null == r ? "": r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t: i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options,
                    u = n.selectedIndex,
                    f = "select-one" === n.type || 0 > u,
                    h = f ? null: [], c = f ? u + 1 : s.length, e = 0 > u ? c: f ? u: 0; c > e; e++) if (t = s[e], !(!t.selected && e !== u || (r.optDisabled ? t.disabled: null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                        if (o = i(t).val(), f) return o;
                        h.push(o)
                    }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options,
                    o = i.makeArray(t), e = u.length; e--;) if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                        r.selected = f = !0
                    } catch(s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return f || (n.selectedIndex = -1),
                    u
                }
            }
        }
    });
    i.each(["radio", "checkbox"],
    function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on": n.value
        })
    });
    var ut, ff, v = i.expr.attrHandle,
    yi = /^(?:checked|selected)$/i,
    g = r.getSetAttribute,
    dt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === o ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff: ut)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f: (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f: (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
            f = t && t.match(h);
            if (f && 1 === n.nodeType) while (r = f[e++]) u = i.propFix[r] || r,
            i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
            n.removeAttribute(g ? r: u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t),
                        u && (n.value = u),
                        t
                    }
                }
            }
        }
    });
    ff = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g),
    function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = dt && g || !yi.test(t) ?
        function(n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, v[t] = f),
            u
        }: function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    dt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void(n.defaultValue = t) : ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
            r.value = t += "",
            "value" === i || t === n.getAttribute(i) ? t: void 0
        }
    },
    v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value: null
    },
    i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"],
    function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i) return (n.setAttribute(t, "auto"), i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    ef = /^(?:input|select|textarea|button|object)$/i;
    of = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch(t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n),
            o && (t = i.propFix[t] || t, u = i.propHooks[t]),
            void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f: n[t] = r: u && "get" in u && null !== (f = u.get(n, t)) ? f: n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ef.test(n.nodeName) || of.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"],
    function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
            c = this.length,
            l = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l) for (o = (n || "").match(h) || []; c > e; e++) if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : " ")) {
                for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                f = i.trim(r);
                t.className !== f && (t.className = f)
            }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
            c = this.length,
            l = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l) for (o = (n || "").match(h) || []; c > e; e++) if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : "")) {
                for (s = 0; u = o[s++];) while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                f = n ? i.trim(r) : "";
                t.className !== f && (t.className = f)
            }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ?
            function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }: function() {
                if ("string" === r) for (var t, f = 0,
                u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "": i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ",
            t = 0,
            r = this.length; r > t; t++) if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return ! 0;
            return ! 1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now(),
    wi = /\?/,
    oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
        u = i.trim(t + "");
        return u && !i.trim(u.replace(oo,
        function(n, t, i, u) {
            return f && t && (r = 0),
            0 === r ? n: (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch(f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    };
    var nt, y, so = /#.*$/,
    sf = /([?&])_=[^&]*/,
    ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    co = /^(?:GET|HEAD)$/,
    lo = /^\/\//,
    hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    cf = {},
    bi = {},
    lf = "*/".concat("*");
    try {
        y = location.href
    } catch(ns) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = hf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                2 !== e && (e = 2, k && clearTimeout(k), a = void 0, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ao(r, u, s)), y = vo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent": 304 === n ? c = "notmodified": (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = void 0, l && d.trigger(v ? "ajaxSuccess": "ajaxError", [u, r, v ? it: nt]), tt.fireWith(o, [u, c]), l && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0);
            t = t || {};
            var s, c, f, b, k, l, a, v, r = i.ajaxSetup({},
            t),
            o = r.context || r,
            d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
            g = i.Deferred(),
            tt = i.Callbacks("once memory"),
            p = r.statusCode || {},
            it = {},
            rt = {},
            e = 0,
            ut = "canceled",
            u = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === e) {
                        if (!v) for (v = {}; t = ho.exec(b);) v[t[1].toLowerCase()] = t[2];
                        t = v[n.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === e ? b: null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return e || (n = rt[i] = rt[i] || n, it[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return e || (r.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n) if (2 > e) for (t in n) p[t] = [p[t], n[t]];
                    else u.always(n[u.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ut;
                    return a && a.abort(t),
                    w(0, t),
                    this
                }
            };
            if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], null == r.crossDomain && (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80": "443")) === (nt[3] || ("http:" === nt[1] ? "80": "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), vf(cf, r, t, u), 2 === e) return u;
            l = r.global;
            l && 0 == i.active++&&i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !co.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&": "?") + r.data, delete r.data), r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&": "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f])); (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + lf + "; q=0.01": "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
            ut = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) u[c](r[c]);
            if (a = vf(bi, r, t, u)) {
                u.readyState = 1;
                l && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                },
                r.timeout));
                try {
                    e = 1;
                    a.send(it, w)
                } catch(ft) {
                    if (! (2 > e)) throw ft;
                    w( - 1, ft)
                }
            } else w( - 1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"],
    function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0),
            i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ?
            function(t) {
                i(this).wrapInner(n.call(this, t))
            }: function() {
                var t = i(this),
                r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
    };
    i.expr.filters.visible = function(n) {
        return ! i.expr.filters.hidden(n)
    };
    var yo = /%20/g,
    po = /\[\]$/,
    yf = /\r?\n/g,
    wo = /^(?:submit|button|image|reset|file)$/i,
    bo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
        f = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "": t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n,
        function() {
            f(this.name, this.value)
        });
        else for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(yo, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null: i.isArray(r) ? i.map(r,
                function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(yf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
    }: pf;
    var ko = 0,
    ni = {},
    ht = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload",
    function() {
        for (var n in ni) ni[n](void 0, !0)
    }),
    r.cors = !!ht && "withCredentials" in ht,
    ht = r.ajax = !!ht,
    ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(),
                    o = ++ko;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields) for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || 4 === f.readyState)) if (delete ni[o], t = void 0, f.onreadystatechange = i.noop, e) 4 !== f.readyState && f.abort();
                        else {
                            h = {};
                            s = f.status;
                            "string" == typeof f.responseText && (h.text = f.responseText);
                            try {
                                c = f.statusText
                            } catch(l) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                        }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    };
                    n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = ni[o] = t: t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script",
    function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    }),
    i.ajaxTransport("script",
    function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) { (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    };
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }),
    gi = [],
    ti = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp",
    function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&": "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"),
            e[0]
        },
        t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        },
        u.always(function() {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = void 0
        }), "script")
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && (r = t, t = !1);
        t = t || u;
        var f = er.exec(n),
        e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    },
    nr = i.fn.load,
    i.fn.load = function(n, t, r) {
        if ("string" != typeof n && nr) return nr.apply(this, arguments);
        var u, o, s, f = this,
        e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)),
        i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r &&
        function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }),
        this
    },
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers,
        function(t) {
            return n === t.elem
        }).length
    },
    tr = n.document.documentElement,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
            a = i(n),
            f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this: this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {
                top: 0,
                left: 0
            },
            r = this[0],
            e = r && r.ownerDocument;
            if (e) return t = e.documentElement,
            i.contains(t, r) ? (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = wf(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                },
                u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || tr
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this,
            function(n, u, f) {
                var e = wf(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f: i(e).scrollTop()) : n[u] = f)
            },
            n, u, arguments.length, null)
        }
    }),
    i.each(["top", "left"],
    function(n, t) {
        i.cssHooks[t] = au(r.pixelPosition,
        function(n, r) {
            if (r) return (r = d(n, t), pt.test(r) ? i(n).position()[t] + "px": r)
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    },
    function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        },
        function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u),
                o = r || (u === !0 || f === !0 ? "margin": "border");
                return b(this,
                function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                },
                t, e ? u: void 0, e, null)
            }
        })
    }),
    i.fn.size = function() {
        return this.length
    },
    i.fn.andSelf = i.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return i
    }),
    bf = n.jQuery,
    kf = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = kf),
        t && n.jQuery === i && (n.jQuery = bf),
        i
    },
    typeof t === o && (n.jQuery = n.$ = i),
    i
}),
function(n) {
    function i(n, t) {
        for (var i = window,
        r = (n || "").split("."); i && r.length;) i = i[r.shift()];
        return typeof i == "function" ? i: (t.push(n), Function.constructor.apply(null, t))
    }
    function u(n) {
        return n === "GET" || n === "POST"
    }
    function o(n, t) {
        u(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
    }
    function s(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function(t, r) {
            var f;
            switch (u) {
            case "BEFORE":
                f = r.firstChild;
                n("<div />").html(i).contents().each(function() {
                    r.insertBefore(this, f)
                });
                break;
            case "AFTER":
                n("<div />").html(i).contents().each(function() {
                    r.appendChild(this)
                });
                break;
            case "REPLACE-WITH":
                n(r).replaceWith(i);
                break;
            default:
                n(r).html(i)
            }
        }))
    }
    function f(t, r) {
        var e, h, f, c; (e = t.getAttribute("data-ajax-confirm"), !e || window.confirm(e)) && (h = n(t.getAttribute("data-ajax-loading")), c = parseInt(t.getAttribute("data-ajax-loading-duration"), 10) || 0, n.extend(r, {
            type: t.getAttribute("data-ajax-method") || undefined,
            url: t.getAttribute("data-ajax-url") || undefined,
            cache: !!t.getAttribute("data-ajax-cache"),
            beforeSend: function(n) {
                var r;
                return o(n, f),
                r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(t, arguments),
                r !== !1 && h.show(c),
                r
            },
            complete: function() {
                h.hide(c);
                i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(t, arguments)
            },
            success: function(n, r, u) {
                s(t, n, u.getResponseHeader("Content-Type") || "text/html");
                i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(t, arguments)
            },
            error: function() {
                i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(t, arguments)
            }
        }), r.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }), f = r.type.toUpperCase(), u(f) || (r.type = "POST", r.data.push({
            name: "X-HTTP-Method-Override",
            value: f
        })), n.ajax(r))
    }
    function h(t) {
        var i = n(t).data(e);
        return ! i || !i.validate || i.validate()
    }
    var t = "unobtrusiveAjaxClick",
    r = "unobtrusiveAjaxClickTarget",
    e = "unobtrusiveValidation";
    n(document).on("click", "a[data-ajax=true]",
    function(n) {
        n.preventDefault();
        f(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    });
    n(document).on("click", "form[data-ajax=true] input[type=image]",
    function(i) {
        var r = i.target.name,
        u = n(i.target),
        f = n(u.parents("form")[0]),
        e = u.offset();
        f.data(t, [{
            name: r + ".x",
            value: Math.round(i.pageX - e.left)
        },
        {
            name: r + ".y",
            value: Math.round(i.pageY - e.top)
        }]);
        setTimeout(function() {
            f.removeData(t)
        },
        0)
    });
    n(document).on("click", "form[data-ajax=true] :submit",
    function(i) {
        var f = i.currentTarget.name,
        e = n(i.target),
        u = n(e.parents("form")[0]);
        u.data(t, f ? [{
            name: f,
            value: i.currentTarget.value
        }] : []);
        u.data(r, e);
        setTimeout(function() {
            u.removeData(t);
            u.removeData(r)
        },
        0)
    });
    n(document).on("submit", "form[data-ajax=true]",
    function(i) {
        var e = n(this).data(t) || [],
        u = n(this).data(r),
        o = u && u.hasClass("cancel"); (i.preventDefault(), o || h(this)) && f(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(n(this).serializeArray())
        })
    })
} (jQuery),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
} (function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i: (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click",
            function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                n(t.target).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var t, i;
            return n(this[0]).is("form") ? t = this.validate().form() : (t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t
            })),
            t
        },
        removeAttrs: function(t) {
            var i = {},
            r = this;
            return n.each(t.split(/\s/),
            function(n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r = this[0],
            e,
            s,
            f,
            u,
            o,
            h;
            if (t) {
                e = n.data(r.form, "validator").settings;
                s = e.rules;
                f = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i));
                    delete f.messages;
                    s[r.name] = f;
                    i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (h = {},
                    n.each(i.split(/\s/),
                    function(t, i) {
                        h[i] = f[i];
                        delete f[i];
                        i === "required" && n(r).removeAttr("aria-required")
                    }), h) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({},
            n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r),
            u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            },
            u), n(r).attr("aria-required", "true")),
            u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })),
            u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return ! n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !! n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return ! n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {},
        n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return arguments.length === 1 ?
        function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }: (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i,
        function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"),
            function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) { ! this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) { (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this[0].form, "validator"),
                    u = "on" + t.type.replace(/^validate/, ""),
                    i = r.settings;
                    i[u] && !this.is(i.ignore) && i[u].call(r, this[0], t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.groups = {},
                t;
                n.each(this.settings.groups,
                function(t, i) {
                    typeof i == "string" && (i = i.split(/\s/));
                    n.each(i,
                    function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t,
                function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", i).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({},
                this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0,
                t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                i = this.validationTargetFor(u),
                r = !0;
                return this.lastElement = i,
                i === undefined ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0),
                n(t).attr("aria-invalid", !r),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList,
                    function(n) {
                        return ! (n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0;
                for (var i in n) t++;
                return t
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch(t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList,
                function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this,
                i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, u = n(t),
                r = t.type;
                return r === "radio" || r === "checkbox" ? n("input[name='" + t.name + "']:checked").val() : r === "number" && typeof t.validity != "undefined" ? t.validity.badInput ? !1 : u.val() : (i = u.val(), typeof i == "string") ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i = n(t).rules(),
                s = n.map(i,
                function(n, t) {
                    return t
                }).length,
                e = !1,
                h = this.elementValue(t),
                r,
                u,
                f;
                for (u in i) {
                    f = {
                        method: u,
                        parameters: i[u]
                    };
                    try {
                        if (r = n.validator.methods[u].call(this, h, t, f.parameters), r === "dependency-mismatch" && s === 1) {
                            e = !0;
                            continue
                        }
                        if (e = !1, r === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!r) return this.formatAndAdd(t, f),
                        !1
                    } catch(o) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + f.method + "' method.", o);
                        throw o;
                    }
                }
                if (!e) return this.objectLength(i) && this.successList.push(t),
                !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i: i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++) if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n],
                this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight) for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, o, e, r = this.errorsFor(t),
                s = this.idOrName(t),
                f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", s) : r.parents("label[for='" + s + "']").length === 0 && (e = r.attr("id"), f ? f.match(new RegExp("\b" + e + "\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), o = this.groups[t.name], o && n.each(this.groups,
                function(t, i) {
                    i === o && n("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                }))); ! i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                u = n(t).attr("aria-describedby"),
                i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + u.replace(/\s+/g, ", #")),
                this.errors().filter(i)
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name: n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !! n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return ! n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i: n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
            r = n(t).attr("class");
            return r && n.each(r.split(" "),
            function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var u = {},
            e = n(t),
            f = t.getAttribute("type"),
            r,
            i;
            for (r in n.validator.methods) r === "required" ? (i = t.getAttribute(r), i === "" && (i = !0), i = !!i) : i = e.attr(r),
            /min|max/.test(r) && (f === null || /number|range|text/.test(f)) && (i = Number(i)),
            i || i === 0 ? u[r] = i: f === r && f !== "range" && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength,
            u
        },
        dataRules: function(t) {
            var i, r, u = {},
            f = n(t);
            for (i in n.validator.methods) r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
            r !== undefined && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {},
            r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t,
            function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param: !0 : delete t[r]
                }
            }),
            n.each(t,
            function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength"],
            function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"],
            function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/),
                function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r: n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return ! 1;
                var f = 0,
                i = 0,
                u = !1,
                r, e;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return ! 1;
                for (r = n.length - 1; r >= 0; r--) e = n.charAt(r),
                i = parseInt(e, 10),
                u && (i *= 2) > 9 && (i -= 9),
                f += i,
                u = !u;
                return f % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo",
                function() {
                    n(i).valid()
                }),
                t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var f = this.previousValue(i),
                u,
                e;
                return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, f.old === t) ? f.valid: (f.old = t, u = this, this.startRequest(i), e = {},
                e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o = r === !0 || r === "true",
                        s, e, h;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        o ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {},
                        e = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = o;
                        u.stopRequest(i, o)
                    }
                },
                r)), "pending")
            }
        }
    });
    n.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
    var t = {},
    i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r: n.ajaxSettings).mode,
        u = ("port" in r ? r: n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    });
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i,
            function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}),
function(n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }
    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,./: ; <= >?@\ [\\\] ^ ` { |
        }~]) / g,
        "\\$1")
    }
    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)),
        n
    }
    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
        u = r.attr("data-valmsg-replace"),
        e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"),
        r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList,
        function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function a(t) {
        var i = t.data("unobtrusiveContainer"),
        r = i.attr("data-valmsg-replace"),
        u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }
    function v() {
        var t = n(this);
        t.data("validator").resetForm();
        t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }
    function s(t) {
        var i = n(t),
        f = i.data(u),
        s = n.proxy(v, t),
        e = r.unobtrusive.options || {},
        o = function(i, r) {
            var u = e[i];
            u && n.isFunction(u) && u.apply(t, r)
        };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments);
                    o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments);
                    o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments);
                    o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, f)),
        f
    }
    var r = n.validator,
    t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
            f = u.parents("form")[0],
            r,
            e,
            o;
            f && (r = s(f), r.options.rules[t.name] = e = {},
            r.options.messages[t.name] = o = {},
            n.each(this.adapters,
            function() {
                var i = "data-val-" + this.name,
                r = u.attr(i),
                s = {};
                r !== undefined && (i += "-", n.each(this.params,
                function() {
                    s[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: s,
                    rules: e,
                    messages: o
                }))
            }), n.extend(e, {
                __dummy__: !0
            }), i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t),
            u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            });
            u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    };
    t = r.unobtrusive.adapters;
    t.add = function(n, t, i) {
        return i || (i = t, t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    };
    t.addBool = function(n, t) {
        return this.add(n,
        function(r) {
            i(r, t || n, !0)
        })
    };
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"],
        function(n) {
            var f = n.params.min,
            e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    };
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"],
        function(u) {
            i(u, r || n, u.params[t])
        })
    };
    r.addMethod("__dummy__",
    function() {
        return ! 0
    });
    r.addMethod("regex",
    function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    r.addMethod("nonalphamin",
    function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i),
        r
    });
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
    t.addSingleVal("regex", "pattern");
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    t.add("equalto", ["other"],
    function(t) {
        var r = e(t.element.name),
        u = t.params.other,
        s = o(u, r),
        h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    });
    t.add("required",
    function(n) { (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    });
    t.add("remote", ["url", "type", "additionalfields"],
    function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        },
        u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name),
        function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                return n(t.form).find(":input").filter("[name='" + f(s) + "']").val()
            }
        });
        i(t, "remote", r)
    });
    t.add("password", ["min", "nonalphamin", "regex"],
    function(n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    });
    n(function() {
        r.unobtrusive.parse(document)
    })
} (jQuery),
Markdown = typeof exports == "object" && typeof require == "function" ? exports: {},
function() {
    function i(n) {
        return n
    }
    function r() {
        return ! 1
    }
    function n() {}
    function t() {}
    n.prototype = {
        chain: function(n, t) {
            var r = this[n];
            if (!r) throw new Error("unknown hook " + n);
            this[n] = r === i ? t: function(n) {
                return t(r(n))
            }
        },
        set: function(n, t) {
            if (!this[n]) throw new Error("unknown hook " + n);
            this[n] = t
        },
        addNoop: function(n) {
            this[n] = i
        },
        addFalse: function(n) {
            this[n] = r
        }
    };
    Markdown.HookCollection = n;
    t.prototype = {
        set: function(n, t) {
            this["s_" + n] = t
        },
        get: function(n) {
            return this["s_" + n]
        }
    };
    Markdown.Converter = function() {
        function rt(n) {
            return n.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,
            function(n, t, u, f, e, o) {
                return (t = t.toLowerCase(), i.set(t, d(u)), e) ? f: (o && r.set(t, o.replace(/"/g, "&quot;")), "")
            })
        }
        function y(n) {
            return n = n.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, e),
            n = n.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, e),
            n = n.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, e),
            n = n.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, e),
            n.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, e)
        }
        function e(n, t) {
            var i = t;
            return i = i.replace(/^\n+/, ""),
            i = i.replace(/\n+$/g, ""),
            "\n\n~K" + (s.push(i) - 1) + "K\n\n"
        }
        function c(n, t) {
            n = ot(n);
            var i = "<hr />\n";
            return n = n.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, i),
            n = n.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, i),
            n = n.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, i),
            n = w(n),
            n = st(n),
            n = at(n),
            n = y(n),
            vt(n, t)
        }
        function o(n) {
            return n = ct(n),
            n = ut(n),
            n = yt(n),
            n = et(n),
            n = ft(n),
            n = pt(n),
            n = d(n),
            n = lt(n),
            nt.autoNewLine ? n.replace(/\n/g, " <br>\n") : n.replace(/  +\n/g, " <br>\n")
        }
        function ut(n) {
            return n.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,
            function(n) {
                var t = n.replace(/(.)<\/?code>(?=.)/g, "$1`");
                return u(t, n.charAt(1) == "!" ? "\\`*_/": "\\`*_")
            })
        }
        function ft(n) {
            return n = n.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, l),
            n = n.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, l),
            n.replace(/(\[([^\[\]]+)\])()()()()()/g, l)
        }
        function l(n, t, f, e, o, s, h, c) {
            var y;
            c == undefined && (c = "");
            var p = t,
            w = f,
            a = e.toLowerCase(),
            l = o,
            v = c;
            if (l == "") if (a == "" && (a = w.toLowerCase().replace(/ ?\n/g, " ")), l = "#" + a, i.get(a) != undefined) l = i.get(a),
            r.get(a) != undefined && (v = r.get(a));
            else if (p.search(/\(\s*\)$/m) > -1) l = "";
            else return p;
            return l = bt(l),
            l = u(l, "*_"),
            y = '<a href="' + l + '"',
            v != "" && (v = v.replace(/"/g, "&quot;"), v = u(v, "*_"), y += ' title="' + v + '"'),
            y + (">" + w + "<\/a>")
        }
        function et(n) {
            return n = n.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, p),
            n.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, p)
        }
        function p(n, t, f, e, o, s, h, c) {
            var w = t,
            y = f,
            a = e.toLowerCase(),
            v = o,
            l = c,
            p;
            if (l || (l = ""), v == "") if (a == "" && (a = y.toLowerCase().replace(/ ?\n/g, " ")), v = "#" + a, i.get(a) != undefined) v = i.get(a),
            r.get(a) != undefined && (l = r.get(a));
            else return w;
            return y = y.replace(/"/g, "&quot;"),
            v = u(v, "*_"),
            p = '<img src="' + v + '" alt="' + y + '"',
            l = l.replace(/"/g, "&quot;"),
            l = u(l, "*_"),
            p += ' title="' + l + '"',
            p + " />"
        }
        function ot(n) {
            return n = n.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            function(n, t) {
                return "<h1>" + o(t) + "<\/h1>\n\n"
            }),
            n = n.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
            function(n, t) {
                return "<h2>" + o(t) + "<\/h2>\n\n"
            }),
            n.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
            function(n, t, i) {
                var r = t.length;
                return "<h" + r + ">" + o(i) + "<\/h" + r + ">\n\n"
            })
        }
        function w(n) {
            n += "~0";
            var t = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
            return h ? n = n.replace(t,
            function(n, t, i) {
                var f = t,
                r = i.search(/[*+-]/g) > -1 ? "ul": "ol",
                u = b(f, r);
                return u = u.replace(/\s+$/, ""),
                "<" + r + ">" + u + "<\/" + r + ">\n"
            }) : (t = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, n = n.replace(t,
            function(n, t, i, r) {
                var f = t,
                e = i,
                u = r.search(/[*+-]/g) > -1 ? "ul": "ol",
                o = b(e, u);
                return f + "<" + u + ">\n" + o + "<\/" + u + ">\n"
            })),
            n.replace(/~0/, "")
        }
        function b(n, t) {
            h++;
            n = n.replace(/\n{2,}$/, "\n") + "~0";
            var i = tt[t],
            u = new RegExp("(^[ \\t]*)(" + i + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + i + ")[ \\t]+))", "gm"),
            r = !1;
            return n = n.replace(u,
            function(n, t, i, u) {
                var f = u,
                h = t,
                e = /\n\n$/.test(f),
                s = e || f.search(/\n{2,}/) > -1;
                return s || r ? f = c(a(f), !0) : (f = w(a(f)), f = f.replace(/\n$/, ""), f = o(f)),
                r = e,
                "<li>" + f + "<\/li>\n"
            }),
            n = n.replace(/~0/g, ""),
            h--,
            n
        }
        function st(n) {
            return n += "~0",
            n = n.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
            function(n, t, i) {
                var r = t,
                u = i;
                return r = k(a(r)),
                r = g(r),
                r = r.replace(/^\n+/g, ""),
                r = r.replace(/\n+$/g, ""),
                r = "<pre><code>" + r + "\n<\/code><\/pre>",
                "\n\n" + r + "\n\n" + u
            }),
            n.replace(/~0/, "")
        }
        function ht(n) {
            return n = n.replace(/(^\n+|\n+$)/g, ""),
            "\n\n~K" + (s.push(n) - 1) + "K\n\n"
        }
        function ct(n) {
            return n.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function(n, t, i, r) {
                var u = r;
                return u = u.replace(/^([ \t]*)/g, ""),
                u = u.replace(/[ \t]*$/g, ""),
                u = k(u),
                t + "<code>" + u + "<\/code>"
            })
        }
        function k(n) {
            return n = n.replace(/&/g, "&amp;"),
            n = n.replace(/</g, "&lt;"),
            n = n.replace(/>/g, "&gt;"),
            u(n, "*_{}[]\\", !1)
        }
        function lt(n) {
            return n = n.replace(/([^A-Za-z0-9]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2(?=[^A-Za-z0-9]|$)/g, "$1<strong>$3<\/strong>"),
            n.replace(/([^A-Za-z0-9]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2(?=[^A-Za-z0-9]|$)/g, "$1<em>$3<\/em>")
        }
        function at(n) {
            return n.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
            function(n, t) {
                var i = t;
                return i = i.replace(/^[ \t]*>[ \t]?/gm, "~0"),
                i = i.replace(/~0/g, ""),
                i = i.replace(/^[ \t]+$/gm, ""),
                i = c(i),
                i = i.replace(/(^|\n)/g, "$1  "),
                i = i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,
                function(n, t) {
                    var i = t;
                    return i = i.replace(/^  /mg, "~0"),
                    i.replace(/~0/g, "")
                }),
                ht("<blockquote>\n" + i + "\n<\/blockquote>")
            })
        }
        function vt(n, t) {
            var i, r, f;
            n = n.replace(/^\n+/g, "");
            n = n.replace(/\n+$/g, "");
            var h = n.split(/\n{2,}/g),
            u = [],
            e = h.length;
            for (r = 0; r < e; r++) i = h[r],
            i.search(/~K(\d+)K/g) >= 0 ? u.push(i) : i.search(/\S/) >= 0 && (i = o(i), i = i.replace(/^([ \t]*)/g, "<p>"), i += "<\/p>", u.push(i));
            if (!t) for (e = u.length, r = 0; r < e; r++) while (u[r].search(/~K(\d+)K/) >= 0) f = s[RegExp.$1],
            f = f.replace(/\$/g, "$$$$"),
            u[r] = u[r].replace(/~K\d+K/, f);
            return u.join("\n\n")
        }
        function d(n) {
            return n = n.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"),
            n.replace(/<(?![a-z\/?\$!])/gi, "&lt;")
        }
        function yt(n) {
            return n = n.replace(/\\(\\)/g, v),
            n.replace(/\\([`*_{}\[\]()>#+-.!])/g, v)
        }
        function pt(n) {
            n = n.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi, "$1<$2$3>$4");
            var t = function(n, t) {
                return '<a href="' + t + '">' + f.plainLinkText(t) + "<\/a>"
            };
            return n.replace(/<((https?|ftp):[^'">\s]+)>/gi, t)
        }
        function wt(n) {
            return n.replace(/~E(\d+)E/g,
            function(n, t) {
                var i = parseInt(t);
                return String.fromCharCode(i)
            })
        }
        function a(n) {
            return n = n.replace(/^(\t|[ ]{1,4})/gm, "~0"),
            n.replace(/~0/g, "")
        }
        function g(n) {
            if (!/\t/.test(n)) return n;
            var r = ["    ", "   ", "  ", " "],
            t = 0,
            i;
            return n.replace(/[\n\t]/g,
            function(n, u) {
                return n === "\n" ? (t = u + 1, n) : (i = (u - t) % 4, t = u + 1, r[i])
            })
        }
        function bt(n) {
            if (!n) return "";
            var t = n.length;
            return n.replace(it,
            function(i, r) {
                return i == "~D" ? "%24": i == ":" && (r == t - 1 || /[0-9\/]/.test(n.charAt(r + 1))) ? ":": "%" + i.charCodeAt(0).toString(16)
            })
        }
        function u(n, t, i) {
            var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])",
            u;
            return i && (r = "\\\\" + r),
            u = new RegExp(r, "g"),
            n.replace(u, v)
        }
        function v(n, t) {
            var i = t.charCodeAt(0);
            return "~E" + i + "E"
        }
        var f = this.hooks = new n,
        nt, i, r, s, h, tt, it;
        f.addNoop("plainLinkText");
        f.addNoop("preConversion");
        f.addNoop("postConversion");
        nt = this;
        this.autoNewLine = !1;
        this.makeHtml = function(n) {
            if (i) throw new Error("Recursive call to converter.makeHtml");
            return i = new t,
            r = new t,
            s = [],
            h = 0,
            n = f.preConversion(n),
            n = n.replace(/~/g, "~T"),
            n = n.replace(/\$/g, "~D"),
            n = n.replace(/\r\n/g, "\n"),
            n = n.replace(/\r/g, "\n"),
            n = "\n\n" + n + "\n\n",
            n = g(n),
            n = n.replace(/^[ \t]+$/mg, ""),
            n = y(n),
            n = rt(n),
            n = c(n),
            n = wt(n),
            n = n.replace(/~D/g, "$$"),
            n = n.replace(/~T/g, "~"),
            n = f.postConversion(n),
            s = r = i = null,
            n
        };
        tt = {
            ol: "\\d+[.]",
            ul: "[*+-]"
        };
        it = /(?:["'*()[\]:]|~D)/g
    }
} (),
function() {
    function i(n) {
        return n.replace(/<[^>]*>?/gi, e)
    }
    function e(n) {
        return n.match(r) || n.match(u) || n.match(f) ? n: ""
    }
    function o(n) {
        var i, t;
        if (n == "") return "";
        var s = /<\/?\w+[^>]*(\s|$|>)/g,
        r = n.toLowerCase().match(s),
        f = (r || []).length;
        if (f == 0) return n;
        var e, h, u, o = [],
        c = [],
        l = !1;
        for (t = 0; t < f; t++) if (e = r[t].replace(/<\/?(\w+).*/, "$1"), !o[t] && !("<p><img><br><li><hr>".search("<" + e + ">") > -1)) {
            if (h = r[t], u = -1, !/^<\//.test(h)) for (i = t + 1; i < f; i++) if (!o[i] && r[i] == "<\/" + e + ">") {
                u = i;
                break
            }
            u == -1 ? l = c[t] = !0 : o[u] = !0
        }
        return l ? (t = 0, n.replace(s,
        function(n) {
            var i = c[t] ? "": n;
            return t++,
            i
        })) : n
    }
    var n, t;
    typeof exports == "object" && typeof require == "function" ? (n = exports, t = require("./Markdown.Converter").Converter) : (n = window.Markdown, t = n.Converter);
    n.getSanitizingConverter = function() {
        var n = new t;
        return n.hooks.chain("postConversion", i),
        n.hooks.chain("postConversion", o),
        n
    };
    var r = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,
    u = /^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
    f = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i
} (),
function() {
    function s() {}
    function a(t) {
        this.buttonBar = n.getElementById("wmd-button-bar" + t);
        this.preview = n.getElementById("wmd-preview" + t);
        this.input = n.getElementById("wmd-input" + t)
    }
    function v(n, i) {
        var l = this,
        e = [],
        r = 0,
        o = "none",
        f,
        v,
        a,
        s = function(n, t) {
            o != n && (o = n, t || y());
            u.isIE && o == "moving" ? a = null: v = top.setTimeout(c, 1)
        },
        c = function(n) {
            a = new h(i, n);
            v = undefined
        };
        this.setCommandMode = function() {
            o = "command";
            y();
            v = top.setTimeout(c, 0)
        };
        this.canUndo = function() {
            return r > 1
        };
        this.canRedo = function() {
            return e[r + 1] ? !0 : !1
        };
        this.undo = function() {
            l.canUndo() && (f ? (f.restore(), f = null) : (e[r] = new h(i), e[--r].restore(), n && n()));
            o = "none";
            i.input.focus();
            c()
        };
        this.redo = function() {
            l.canRedo() && (e[++r].restore(), n && n());
            o = "none";
            i.input.focus();
            c()
        };
        var y = function() {
            var t = a || new h(i);
            if (!t) return ! 1;
            if (o == "moving") {
                f || (f = t);
                return
            }
            f && (e[r - 1].text != f.text && (e[r++] = f), f = null);
            e[r++] = t;
            e[r + 1] = null;
            n && n()
        },
        p = function(n) {
            var t = !1,
            i, r;
            if (n.ctrlKey || n.metaKey) {
                i = n.charCode || n.keyCode;
                r = String.fromCharCode(i);
                switch (r) {
                case "y":
                    l.redo();
                    t = !0;
                    break;
                case "z":
                    n.shiftKey ? l.redo() : l.undo();
                    t = !0
                }
            }
            if (t) {
                n.preventDefault && n.preventDefault();
                top.event && (top.event.returnValue = !1);
                return
            }
        },
        w = function(n) {
            if (!n.ctrlKey && !n.metaKey) {
                var t = n.keyCode;
                t >= 33 && t <= 40 || t >= 63232 && t <= 63235 ? s("moving") : t == 8 || t == 46 || t == 127 ? s("deleting") : t == 13 ? s("newlines") : t == 27 ? s("escape") : (t < 16 || t > 20) && t != 91 && s("typing")
            }
        },
        b = function() {
            t.addEvent(i.input, "keypress",
            function(n) { (n.ctrlKey || n.metaKey) && (n.keyCode == 89 || n.keyCode == 90) && n.preventDefault()
            });
            var n = function() { (u.isIE || a && a.text != i.input.value) && v == undefined && (o = "paste", y(), c())
            };
            t.addEvent(i.input, "keydown", p);
            t.addEvent(i.input, "keydown", w);
            t.addEvent(i.input, "mousedown",
            function() {
                s("moving")
            });
            i.input.onpaste = n;
            i.input.ondrop = n
        },
        k = function() {
            b();
            c(!0);
            y()
        };
        k()
    }
    function h(i, r) {
        var e = this,
        f = i.input;
        this.init = function() {
            t.isVisible(f) && (r || !n.activeElement || n.activeElement === f) && (this.setInputAreaSelectionStartEnd(), this.scrollTop = f.scrollTop, (!this.text && f.selectionStart || f.selectionStart === 0) && (this.text = f.value))
        };
        this.setInputAreaSelection = function() {
            if (t.isVisible(f)) if (f.selectionStart === undefined || u.isOpera) {
                if (n.selection) {
                    if (n.activeElement && n.activeElement !== f) return;
                    f.focus();
                    var i = f.createTextRange();
                    i.moveStart("character", -f.value.length);
                    i.moveEnd("character", -f.value.length);
                    i.moveEnd("character", e.end);
                    i.moveStart("character", e.start);
                    i.select()
                }
            } else f.focus(),
            f.selectionStart = e.start,
            f.selectionEnd = e.end,
            f.scrollTop = e.scrollTop
        };
        this.setInputAreaSelectionStartEnd = function() {
            var r, s, h;
            if (!i.ieRetardedClick && (f.selectionStart || f.selectionStart === 0)) e.start = f.selectionStart,
            e.end = f.selectionEnd;
            else if (n.selection) {
                e.text = t.fixEolChars(f.value);
                i.ieRetardedClick && i.ieCachedRange ? (r = i.ieCachedRange, i.ieRetardedClick = !1) : r = n.selection.createRange();
                var u = t.fixEolChars(r.text),
                o = "\x07",
                c = o + u + o;
                if (r.text = c, s = t.fixEolChars(f.value), r.moveStart("character", -c.length), r.text = u, e.start = s.indexOf(o), e.end = s.lastIndexOf(o) - o.length, h = e.text.length - t.fixEolChars(f.value).length, h) {
                    for (r.moveStart("character", -u.length); h--;) u += "\n",
                    e.end += 1;
                    r.text = u
                }
                this.setInputAreaSelection()
            }
        };
        this.restore = function() {
            e.text != undefined && e.text != f.value && (f.value = e.text);
            this.setInputAreaSelection();
            f.scrollTop = e.scrollTop
        };
        this.getChunks = function() {
            var n = new s;
            return n.before = t.fixEolChars(e.text.substring(0, e.start)),
            n.startTag = "",
            n.selection = t.fixEolChars(e.text.substring(e.start, e.end)),
            n.endTag = "",
            n.after = t.fixEolChars(e.text.substring(e.end)),
            n.scrollTop = e.scrollTop,
            n
        };
        this.setChunks = function(n) {
            n.before = n.before + n.startTag;
            n.after = n.endTag + n.after;
            this.start = n.before.length;
            this.end = n.before.length + n.selection.length;
            this.text = n.before + n.selection + n.after;
            this.scrollTop = n.scrollTop
        };
        this.init()
    }
    function y(i, r, e) {
        var ut = this,
        s, h, c, a = 3e3,
        v = "delayed",
        g = function(n, i) {
            t.addEvent(n, "input", i);
            n.onpaste = i;
            n.ondrop = i;
            t.addEvent(n, "keypress", i);
            t.addEvent(n, "keydown", i)
        },
        y = function() {
            var t = 0;
            return top.innerHeight ? t = top.pageYOffset: n.documentElement && n.documentElement.scrollTop ? t = n.documentElement.scrollTop: n.body && (t = n.body.scrollTop),
            t
        },
        l = function() {
            var n, t, u;
            r.preview && ((n = r.input.value, n && n == c) || (c = n, t = (new Date).getTime(), n = i.makeHtml(n), u = (new Date).getTime(), h = u - t, k(n)))
        },
        p = function() {
            if (s && (top.clearTimeout(s), s = undefined), v !== "manual") {
                var n = 0;
                v === "delayed" && (n = h);
                n > a && (n = a);
                s = top.setTimeout(l, n)
            }
        },
        nt = function(n) {
            return n.scrollHeight <= n.clientHeight ? 1 : n.scrollTop / (n.scrollHeight - n.clientHeight)
        },
        tt = function() {
            r.preview && (r.preview.scrollTop = (r.preview.scrollHeight - r.preview.clientHeight) * nt(r.preview))
        },
        k,
        d;
        this.refresh = function(n) {
            n ? (c = "", l()) : p()
        };
        this.processingTime = function() {
            return h
        };
        var w = !0,
        it = function(n) {
            var t = r.preview,
            i = t.parentNode,
            u = t.nextSibling;
            i.removeChild(t);
            t.innerHTML = n;
            u ? i.insertBefore(t, u) : i.appendChild(t)
        },
        b = function(n) {
            r.preview.innerHTML = n
        },
        o,
        rt = function(n) {
            if (o) return o(n);
            try {
                b(n);
                o = b
            } catch(t) {
                o = it;
                o(n)
            }
        };
        ff = typeof r.preview.innerText != "undefined" ? !1 : !0;
        k = function(n) {
            var i = f.getTop(r.input) - y(),
            t;
            if (r.preview && (rt(n), e()), tt(), w) {
                w = !1;
                return
            }
            t = f.getTop(r.input) - y();
            u.isIE ? top.setTimeout(function() {
                top.scrollBy(0, t - i)
            },
            0) : top.scrollBy(0, t - i);
            document.getElementById("wmd-char-count") && (document.getElementById("wmd-char-count").innerHTML = ff ? r.preview.textContent.length: r.preview.innerText.length)
        };
        d = function() {
            g(r.input, p);
            l();
            r.preview && (r.preview.scrollTop = 0)
        };
        d()
    }
    function p(i, r, f, e, s, c) {
        function a(n) {
            var t;
            if (y.focus(), n.textOp) {
                if (f && f.setCommandMode(), t = new h(r), !t) return;
                var i = t.getChunks(),
                u = function() {
                    y.focus();
                    i && t.setChunks(i);
                    t.restore();
                    e.refresh()
                },
                o = n.textOp(i, u);
                o || u()
            }
            n.execute && n.execute(f)
        }
        function p(t, i) {
            var e = "0px",
            o = "-40px",
            f = t.getElementsByTagName("span")[0];
            i ? (f.style.backgroundPosition = t.XShift + " " + e, t.onmouseover = function() {
                f.style.backgroundPosition = this.XShift + " " + o
            },
            t.onmouseout = function() {
                f.style.backgroundPosition = this.XShift + " " + e
            },
            u.isIE && (t.onmousedown = function() {
                n.activeElement && n.activeElement !== r.input || (r.ieRetardedClick = !0, r.ieCachedRange = document.selection.createRange())
            }), t.isHelp || (t.onclick = function() {
                return this.onmouseout && this.onmouseout(),
                a(this),
                !1
            })) : (f.style.backgroundPosition = t.XShift + " -20px", t.onmouseover = t.onmouseout = t.onclick = function() {})
        }
        function v(n) {
            return typeof n == "string" && (n = s[n]),
            function() {
                n.apply(s, arguments)
            }
        }
        function k() {
            var a = r.buttonBar,
            u = document.createElement("ul"),
            s,
            t,
            h;
            u.id = "wmd-button-row" + i;
            u.className = "wmd-button-row";
            u = a.appendChild(u);
            var f = 0,
            n = function(n, t, r, e) {
                var o = document.createElement("li"),
                s;
                return o.className = "wmd-button",
                o.style.left = f + "px",
                f += 25,
                s = document.createElement("span"),
                o.id = n + i,
                o.appendChild(s),
                o.title = t,
                o.XShift = r,
                e && (o.textOp = e),
                p(o, !0),
                u.appendChild(o),
                o
            },
            e = function(n) {
                var t = document.createElement("li");
                t.className = "wmd-spacer wmd-spacer" + n;
                t.id = "wmd-spacer" + n + i;
                u.appendChild(t);
                f += 25
            };
            l.bold = n("wmd-bold-button", "Strong <strong> Ctrl+B", "0px", v("doBold"));
            l.italic = n("wmd-italic-button", "Emphasis <em> Ctrl+I", "-20px", v("doItalic"));
            e(1);
            l.link = n("wmd-link-button", "Hyperlink <a> Ctrl+L", "-40px", v(function(n, t) {
                return this.doLinkOrImage(n, t, !1)
            }));
            l.quote = n("wmd-quote-button", "Blockquote <blockquote> Ctrl+Q", "-60px", v("doBlockquote"));
            l.code = n("wmd-code-button", "Code Sample <pre><code> Ctrl+K", "-80px", v("doCode"));
            l.image = n("wmd-image-button", "Image <img> Ctrl+G", "-100px", v(function(n, t) {
                return this.doLinkOrImage(n, t, !0)
            }));
            e(2);
            l.olist = n("wmd-olist-button", "Numbered List <ol> Ctrl+O", "-120px", v(function(n, t) {
                this.doList(n, t, !0)
            }));
            l.ulist = n("wmd-ulist-button", "Bulleted List <ul> Ctrl+U", "-140px", v(function(n, t) {
                this.doList(n, t, !1)
            }));
            l.heading = n("wmd-heading-button", "Heading <h1>/<h2> Ctrl+H", "-160px", v("doHeading"));
            l.hr = n("wmd-hr-button", "Horizontal Rule <hr> Ctrl+R", "-180px", v("doHorizontalRule"));
            e(3);
            l.undo = n("wmd-undo-button", "Undo - Ctrl+Z", "-200px", null);
            l.undo.execute = function(n) {
                n && n.undo()
            };
            s = /win/.test(o.platform.toLowerCase()) ? "Redo - Ctrl+Y": "Redo - Ctrl+Shift+Z";
            l.redo = n("wmd-redo-button", s, "-220px", null);
            l.redo.execute = function(n) {
                n && n.redo()
            };
            c && (t = document.createElement("li"), h = document.createElement("span"), t.appendChild(h), t.className = "wmd-button wmd-help-button", t.id = "wmd-help-button" + i, t.XShift = "-240px", t.isHelp = !0, t.style.right = "0px", t.title = c.title || nt, t.onclick = c.handler, p(t, !0), u.appendChild(t), l.help = t);
            b()
        }
        function b() {
            f && (p(l.undo, f.canUndo()), p(l.redo, f.canRedo()))
        }
        var y = r.input,
        l = {},
        w;
        k();
        w = "keydown";
        u.isOpera && (w = "keypress");
        t.addEvent(y, w,
        function(n) {
            if ((n.ctrlKey || n.metaKey) && !n.altKey) {
                var t = n.charCode || n.keyCode,
                i = String.fromCharCode(t).toLowerCase();
                switch (i) {
                case "b":
                    a(l.bold);
                    break;
                case "i":
                    a(l.italic);
                    break;
                case "l":
                    a(l.link);
                    break;
                case "q":
                    a(l.quote);
                    break;
                case "k":
                    a(l.code);
                    break;
                case "g":
                    a(l.image);
                    break;
                case "o":
                    a(l.olist);
                    break;
                case "u":
                    a(l.ulist);
                    break;
                case "h":
                    a(l.heading);
                    break;
                case "r":
                    a(l.hr);
                    break;
                case "y":
                    a(l.redo);
                    break;
                case "z":
                    n.shiftKey ? a(l.redo) : a(l.undo);
                    break;
                default:
                    return
                }
                n.preventDefault && n.preventDefault();
                top.event && (top.event.returnValue = !1)
            }
        });
        t.addEvent(y, "keyup",
        function(n) {
            if (n.shiftKey && !n.ctrlKey && !n.metaKey) {
                var t = n.charCode || n.keyCode;
                t === 13 && (fakeButton = {},
                fakeButton.textOp = v("doAutoindent"), a(fakeButton))
            }
        });
        u.isIE && t.addEvent(y, "keydown",
        function(n) {
            var t = n.keyCode;
            if (t === 27) return ! 1
        });
        this.setUndoRedoButtonStates = b
    }
    function l(n) {
        this.hooks = n
    }
    function w(n) {
        return n.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,
        function(n, t, i) {
            return t = t.replace(/\?.*$/,
            function(n) {
                return n.replace(/\+/g, " ")
            }),
            t = decodeURIComponent(t),
            t = encodeURI(t).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"),
            t = t.replace(/\?.*$/,
            function(n) {
                return n.replace(/\+/g, "%2b")
            }),
            i && (i = i.trim ? i.trim() : i.replace(/^\s*/, "").replace(/\s*$/, ""), i = $.trim(i).replace(/"/g, "quot;").replace(/\(/g, "&#40;").replace(/\)/g, "&#41;").replace(/</g, "<").replace(/>/g, ">")),
            i ? t + ' "' + i + '"': t
        })
    }
    var t = {},
    f = {},
    e = {},
    n = top.document,
    i = top.RegExp,
    o = top.navigator,
    c = {
        lineLength: 72
    },
    u = {
        isIE: /msie/.test(o.userAgent.toLowerCase()),
        isIE_5or6: /msie 6/.test(o.userAgent.toLowerCase()) || /msie 5/.test(o.userAgent.toLowerCase()),
        isOpera: /opera/.test(o.userAgent.toLowerCase())
    },
    b = '<p><b>Insert Hyperlink<\/b><\/p><p>http://example.com/ "optional title"<\/p>',
    k = "<p><b>Insert Image<\/b><\/p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?<\/a><\/p>",
    d = "http://",
    g = "http://",
    nt = "Markdown Editing Help",
    r;
    Markdown.Editor = function(t, i, r) {
        var u, e, f;
        i = i || "";
        u = this.hooks = new Markdown.HookCollection;
        u.addNoop("onPreviewRefresh");
        u.addNoop("postBlockquoteCreation");
        u.addFalse("insertImageDialog");
        this.getConverter = function() {
            return t
        };
        e = this;
        this.run = function() {
            var h, o, c, s, w;
            f || (f = new a(i), h = new l(u), o = new y(t, f,
            function() {
                u.onPreviewRefresh()
            }), /\?noundo/.test(n.location.href) || (c = new v(function() {
                o.refresh();
                s && s.setUndoRedoButtonStates()
            },
            f)), s = new p(i, f, c, o, h, r), s.setUndoRedoButtonStates(), w = e.refreshPreview = function() {
                o.refresh(!0)
            },
            w())
        }
    };
    s.prototype.findTags = function(n, i) {
        var r = this,
        u;
        n && (u = t.extendRegExp(n, "", "$"), this.before = this.before.replace(u,
        function(n) {
            return r.startTag = r.startTag + n,
            ""
        }), u = t.extendRegExp(n, "^", ""), this.selection = this.selection.replace(u,
        function(n) {
            return r.startTag = r.startTag + n,
            ""
        }));
        i && (u = t.extendRegExp(i, "", "$"), this.selection = this.selection.replace(u,
        function(n) {
            return r.endTag = n + r.endTag,
            ""
        }), u = t.extendRegExp(i, "^", ""), this.after = this.after.replace(u,
        function(n) {
            return r.endTag = n + r.endTag,
            ""
        }))
    };
    s.prototype.trimWhitespace = function(n) {
        this.selection = this.selection.replace(/^(\s*)/, "");
        n || (this.before += i.$1);
        this.selection = this.selection.replace(/(\s*)$/, "");
        n || (this.after = i.$1 + this.after)
    };
    s.prototype.skipLines = function(n, t, r) {
        n === undefined && (n = 1);
        t === undefined && (t = 1);
        n++;
        t++;
        var u, f;
        if (navigator.userAgent.match(/Chrome/) && "X".match(/()./), this.selection = this.selection.replace(/(^\n*)/, ""), this.startTag = this.startTag + i.$1, this.selection = this.selection.replace(/(\n*$)/, ""), this.endTag = this.endTag + i.$1, this.startTag = this.startTag.replace(/(^\n*)/, ""), this.before = this.before + i.$1, this.endTag = this.endTag.replace(/(\n*$)/, ""), this.after = this.after + i.$1, this.before) {
            for (u = f = ""; n--;) u += "\\n?",
            f += "\n";
            r && (u = "\\n*");
            this.before = this.before.replace(new i(u + "$", ""), f)
        }
        if (this.after) {
            for (u = f = ""; t--;) u += "\\n?",
            f += "\n";
            r && (u = "\\n*");
            this.after = this.after.replace(new i(u, ""), f)
        }
    };
    t.isVisible = function(n) {
        return window.getComputedStyle ? window.getComputedStyle(n, null).getPropertyValue("display") !== "none": n.currentStyle ? n.currentStyle.display !== "none": void 0
    };
    t.addEvent = function(n, t, i) {
        n.attachEvent ? n.attachEvent("on" + t, i) : n.addEventListener(t, i, !1)
    };
    t.removeEvent = function(n, t, i) {
        n.detachEvent ? n.detachEvent("on" + t, i) : n.removeEventListener(t, i, !1)
    };
    t.fixEolChars = function(n) {
        return n = n.replace(/\r\n/g, "\n"),
        n.replace(/\r/g, "\n")
    };
    t.extendRegExp = function(n, t, r) { (t === null || t === undefined) && (t = ""); (r === null || r === undefined) && (r = "");
        var u = n.toString(),
        f;
        return u = u.replace(/\/([gim]*)$/, ""),
        f = i.$1,
        u = u.replace(/(^\/|\/$)/g, ""),
        u = t + u + r,
        new i(u, f)
    };
    f.getTop = function(n, t) {
        var i = n.offsetTop;
        if (!t) while (n = n.offsetParent) i += n.offsetTop;
        return i
    };
    f.getHeight = function(n) {
        return n.offsetHeight || n.scrollHeight
    };
    f.getWidth = function(n) {
        return n.offsetWidth || n.scrollWidth
    };
    f.getPageSize = function() {
        var r, u, t, i, f, e;
        return self.innerHeight && self.scrollMaxY ? (r = n.body.scrollWidth, u = self.innerHeight + self.scrollMaxY) : n.body.scrollHeight > n.body.offsetHeight ? (r = n.body.scrollWidth, u = n.body.scrollHeight) : (r = n.body.offsetWidth, u = n.body.offsetHeight),
        self.innerHeight ? (t = self.innerWidth, i = self.innerHeight) : n.documentElement && n.documentElement.clientHeight ? (t = n.documentElement.clientWidth, i = n.documentElement.clientHeight) : n.body && (t = n.body.clientWidth, i = n.body.clientHeight),
        f = Math.max(r, t),
        e = Math.max(u, i),
        [f, e, t, i]
    };
    e.createBackground = function() {
        var t = n.createElement("div"),
        i;
        return t.className = "wmd-prompt-background",
        style = t.style,
        style.position = "absolute",
        style.top = "0",
        style.zIndex = "1000",
        u.isIE ? style.filter = "alpha(opacity=50)": style.opacity = "0.5",
        i = f.getPageSize(),
        style.height = i[1] + "px",
        u.isIE ? (style.left = n.documentElement.scrollLeft, style.width = n.documentElement.clientWidth) : (style.left = "0", style.width = "100%"),
        n.body.appendChild(t),
        t
    };
    e.prompt = function(i, r, e) {
        var o, s;
        r === undefined && (r = "");
        var c = function(n) {
            var t = n.charCode || n.keyCode;
            t === 27 && h(!0)
        },
        h = function(i) {
            t.removeEvent(n.body, "keydown", c);
            var r = s.value;
            return i ? r = null: (r = r.replace("http://http://", "http://"), r = r.replace("http://https://", "https://"), r = r.replace("http://ftp://", "ftp://"), r.indexOf("http://") === -1 && r.indexOf("ftp://") === -1 && r.indexOf("https://") === -1 && (r = "http://" + r)),
            o.parentNode.removeChild(o),
            e(r),
            !1
        },
        l = function() {
            var v, e, l, a;
            o = n.createElement("div");
            o.className = "wmd-prompt-dialog";
            o.style.padding = "10px;";
            o.style.position = "fixed";
            o.style.width = "400px";
            o.style.zIndex = "1001";
            v = n.createElement("div");
            v.innerHTML = i;
            v.style.padding = "5px";
            o.appendChild(v);
            e = n.createElement("form");
            e.onsubmit = function() {
                return h(!1)
            };
            style = e.style;
            style.padding = "0";
            style.margin = "0";
            style.cssFloat = "left";
            style.width = "100%";
            style.textAlign = "center";
            style.position = "relative";
            o.appendChild(e);
            s = n.createElement("input");
            s.type = "text";
            s.value = r;
            style = s.style;
            style.display = "block";
            style.width = "80%";
            style.marginLeft = style.marginRight = "auto";
            e.appendChild(s);
            l = n.createElement("input");
            l.type = "button";
            l.onclick = function() {
                return h(!1)
            };
            l.value = "OK";
            style = l.style;
            style.margin = "10px";
            style.display = "inline";
            style.width = "7em";
            a = n.createElement("input");
            a.type = "button";
            a.onclick = function() {
                return h(!0)
            };
            a.value = "Cancel";
            style = a.style;
            style.margin = "10px";
            style.display = "inline";
            style.width = "7em";
            e.appendChild(l);
            e.appendChild(a);
            t.addEvent(n.body, "keydown", c);
            o.style.top = "50%";
            o.style.left = "50%";
            o.style.display = "block";
            u.isIE_5or6 && (o.style.position = "absolute", o.style.top = n.documentElement.scrollTop + 200 + "px", o.style.left = "50%");
            n.body.appendChild(o);
            o.style.marginTop = -(f.getHeight(o) / 2) + "px";
            o.style.marginLeft = -(f.getWidth(o) / 2) + "px"
        };
        top.setTimeout(function() {
            var t, n;
            l();
            t = r.length;
            s.selectionStart !== undefined ? (s.selectionStart = 0, s.selectionEnd = t) : s.createTextRange && (n = s.createTextRange(), n.collapse(!1), n.moveStart("character", -t), n.moveEnd("character", t), n.select());
            s.focus()
        },
        0)
    };
    r = l.prototype;
    r.prefixes = "(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)";
    r.unwrap = function(n) {
        var t = new i("([^\\n])\\n(?!(\\n|" + this.prefixes + "))", "g");
        n.selection = n.selection.replace(t, "$1 $2")
    };
    r.wrap = function(n, t) {
        this.unwrap(n);
        var r = new i("(.{1," + t + "})( +|$\\n?)", "gm");
        n.selection = n.selection.replace(r,
        function(n, t) {
            return new i("^" + this.prefixes, "").test(n) ? n: t + "\n"
        });
        n.selection = n.selection.replace(/\s+$/, "")
    };
    r.doBold = function(n, t) {
        return this.doBorI(n, t, 2, "strong text")
    };
    r.doItalic = function(n, t) {
        return this.doBorI(n, t, 1, "emphasized text")
    };
    r.doBorI = function(n, t, r, u) {
        var s, f, e, h, o;
        n.trimWhitespace();
        n.selection = n.selection.replace(/\n{2,}/g, "\n");
        n.before.search(/(\**$)/);
        s = i.$1;
        n.after.search(/(^\**)/);
        f = i.$1;
        e = Math.min(s.length, f.length);
        e >= r && (e != 2 || r != 1) ? (n.before = n.before.replace(i("[*]{" + r + "}$", ""), ""), n.after = n.after.replace(i("^[*]{" + r + "}", ""), "")) : !n.selection && f ? (n.after = n.after.replace(/^([*_]*)/, ""), n.before = n.before.replace(/(\s?)$/, ""), h = i.$1, n.before = n.before + f + h) : (n.selection || f || (n.selection = u), o = r <= 1 ? "*": "**", n.before = n.before + o, n.after = o + n.after);
        return
    };
    r.stripLinkDefs = function(n, t) {
        return n.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,
        function(n, i, r, u, f) {
            return (t[i] = n.replace(/\s*$/, ""), u) ? (t[i] = n.replace(/["(](.+?)[")]$/, ""), u + f) : ""
        })
    };
    r.addLinkDef = function(n, t) {
        var r = 0,
        i = {},
        s;
        n.before = this.stripLinkDefs(n.before, i);
        n.selection = this.stripLinkDefs(n.selection, i);
        n.after = this.stripLinkDefs(n.after, i);
        var e = "",
        u = /(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,
        o = function(n) {
            r++;
            n = n.replace(/^[ ]{0,3}\[(\d+)\]:/, "  [" + r + "]:");
            e += "\n" + n
        },
        f = function(n, t, e, s, h, c) {
            return (e = e.replace(u, f), i[h]) ? (o(i[h]), t + e + s + r + c) : n
        };
        return n.before = n.before.replace(u, f),
        t ? o(t) : n.selection = n.selection.replace(u, f),
        s = r,
        n.after = n.after.replace(u, f),
        n.after && (n.after = n.after.replace(/\n*$/, "")),
        n.after || (n.selection = n.selection.replace(/\n*$/, "")),
        n.after += "\n\n" + e,
        s
    };
    r.doLinkOrImage = function(n, t, i) {
        var u, f, r;
        if (n.trimWhitespace(), n.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/), n.endTag.length > 1) n.startTag = n.startTag.replace(/!?\[/, ""),
        n.endTag = "",
        this.addLinkDef(n, null);
        else {
            if (/\n\n/.test(n.selection)) {
                this.addLinkDef(n, null);
                return
            }
            return f = this,
            r = function(r) {
                if (u.parentNode.removeChild(u), r !== null) {
                    n.startTag = n.endTag = "";
                    var e = " [999]: " + w(r),
                    o = f.addLinkDef(n, e);
                    n.startTag = i ? "![": "[";
                    n.endTag = "][" + o + "]";
                    n.selection || (n.selection = i ? "enter image description here": "enter link description here")
                }
                t()
            },
            u = e.createBackground(),
            i ? this.hooks.insertImageDialog(r) || e.prompt(k, d, r) : e.prompt(b, g, r),
            !0
        }
    };
    r.doAutoindent = function(n) {
        var t = this;
        n.before = n.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/, "\n\n");
        n.before = n.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/, "\n\n");
        n.before = n.before.replace(/(\n|^)[ \t]+\n$/, "\n\n");
        /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(n.before) && t.doList && t.doList(n);
        /(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(n.before) && t.doBlockquote && t.doBlockquote(n);
        /(\n|^)(\t|[ ]{4,}).*\n$/.test(n.before) && t.doCode && t.doCode(n)
    };
    r.doBlockquote = function(n) {
        var t, u, i, o, r, f, e, s;
        if (n.selection = n.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,
        function(t, i, r, u) {
            return n.before += i,
            n.after = u + n.after,
            r
        }), n.before = n.before.replace(/(>[ \t]*)$/,
        function(t, i) {
            return n.selection = i + n.selection,
            ""
        }), n.selection = n.selection.replace(/^(\s|>)+$/, ""), n.selection = n.selection || "Blockquote", t = "", u = "", n.before) {
            for (o = n.before.replace(/\n$/, "").split("\n"), r = !1, f = 0; f < o.length; f++) e = !1,
            i = o[f],
            r = r && i.length > 0,
            /^>/.test(i) ? (e = !0, !r && i.length > 1 && (r = !0)) : e = /^[ \t]*$/.test(i) ? !0 : r,
            e ? t += i + "\n": (u += t + i, t = "\n");
            /(^|\n)>/.test(t) || (u += t, t = "")
        }
        n.startTag = t;
        n.before = u;
        n.after && (n.after = n.after.replace(/^\n?/, "\n"));
        n.after = n.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,
        function(t) {
            return n.endTag = t,
            ""
        });
        s = function(t) {
            var i = t ? "> ": "";
            n.startTag && (n.startTag = n.startTag.replace(/\n((>|\s)*)\n$/,
            function(n, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, i) + "\n"
            }));
            n.endTag && (n.endTag = n.endTag.replace(/^\n((>|\s)*)\n/,
            function(n, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, i) + "\n"
            }))
        };
        /^(?![ ]{0,3}>)/m.test(n.selection) ? (this.wrap(n, c.lineLength - 2), n.selection = n.selection.replace(/^/gm, "> "), s(!0), n.skipLines()) : (n.selection = n.selection.replace(/^[ ]{0,3}> ?/gm, ""), this.unwrap(n), s(!1), !/^(\n|^)[ ]{0,3}>/.test(n.selection) && n.startTag && (n.startTag = n.startTag.replace(/\n{0,2}$/, "\n\n")), !/(\n|^)[ ]{0,3}>.*$/.test(n.selection) && n.endTag && (n.endTag = n.endTag.replace(/^\n{0,2}/, "\n\n")));
        n.selection = this.hooks.postBlockquoteCreation(n.selection);
        /\n/.test(n.selection) || (n.selection = n.selection.replace(/^(> *)/,
        function(t, i) {
            return n.startTag += i,
            ""
        }))
    };
    r.doCode = function(n) {
        var r = /\S[ ]*$/.test(n.before),
        u = /^[ ]*\S/.test(n.after),
        t,
        i; (u || r) && !/\n/.test(n.selection) ? (n.trimWhitespace(), n.findTags(/`/, /`/), n.startTag || n.endTag ? n.endTag && !n.startTag ? (n.before += n.endTag, n.endTag = "") : n.startTag = n.endTag = "": (n.startTag = n.endTag = "`", n.selection || (n.selection = "enter code here"))) : (n.before = n.before.replace(/[ ]{4}$/,
        function(t) {
            return n.selection = t + n.selection,
            ""
        }), t = 1, i = 1, /\n(\t|[ ]{4,}).*\n$/.test(n.before) && (t = 0), /^\n(\t|[ ]{4,})/.test(n.after) && (i = 0), n.skipLines(t, i), n.selection ? n.selection = /^[ ]{0,3}\S/m.test(n.selection) ? n.selection.replace(/^/gm, "    ") : n.selection.replace(/^[ ]{4}/gm, "") : (n.startTag = "    ", n.selection = "enter code here"))
    };
    r.doList = function(n, t, r) {
        var l = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,
        a = "-",
        v = 1,
        y = function() {
            var n;
            return r ? (n = " " + v + ". ", v++) : n = " " + a + " ",
            n
        },
        u = function(n) {
            return r === undefined && (r = /^\s*\d/.test(n)),
            n.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,
            function() {
                return y()
            })
        },
        f,
        e,
        o,
        s,
        h; (n.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null), !n.before || /\n$/.test(n.before) || /^\n/.test(n.startTag) || (n.before += n.startTag, n.startTag = ""), n.startTag && (f = /\d+[.]/.test(n.startTag), n.startTag = "", n.selection = n.selection.replace(/\n[ ]{4}/g, "\n"), this.unwrap(n), n.skipLines(), f && (n.after = n.after.replace(l, u)), r == f)) || (e = 1, n.before = n.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,
        function(n) {
            return /^\s*([*+-])/.test(n) && (a = i.$1),
            e = /[^\n]\n\n[^\n]/.test(n) ? 1 : 0,
            u(n)
        }), n.selection || (n.selection = "List item"), o = y(), s = 1, n.after = n.after.replace(l,
        function(n) {
            return s = /[^\n]\n\n[^\n]/.test(n) ? 1 : 0,
            u(n)
        }), n.trimWhitespace(!0), n.skipLines(e, s, !0), n.startTag = o, h = o.replace(/./g, " "), this.wrap(n, c.lineLength - h.length), n.selection = n.selection.replace(/\n/g, "\n" + h))
    };
    r.doHeading = function(n) {
        var t, u, f, r;
        if (n.selection = n.selection.replace(/\s+/g, " "), n.selection = n.selection.replace(/(^\s+|\s+$)/g, ""), !n.selection) {
            n.startTag = "## ";
            n.selection = "Heading";
            n.endTag = " ##";
            return
        }
        if (t = 0, n.findTags(/#+[ ]*/, /[ ]*#+/), /#+/.test(n.startTag) && (t = i.lastMatch.length), n.startTag = n.endTag = "", n.findTags(null, /\s?(-+|=+)/), /=+/.test(n.endTag) && (t = 1), /-+/.test(n.endTag) && (t = 2), n.startTag = n.endTag = "", n.skipLines(1, 1), u = t == 0 ? 2 : t - 1, u > 0) for (f = u >= 2 ? "-": "=", r = n.selection.length, r > c.lineLength && (r = c.lineLength), n.endTag = "\n"; r--;) n.endTag += f
    };
    r.doHorizontalRule = function(n) {
        n.startTag = "----------\n";
        n.selection = "";
        n.skipLines(2, 1, !0)
    }
} (),
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
function(n) {
    return typeof n
}: function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": typeof n
},
"undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(n) {
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
} (jQuery); +
function(n) {
    function t() {
        var i = document.createElement("bootstrap"),
        n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var t in n) if (void 0 !== i.style[t]) return {
            end: n[t]
        };
        return ! 1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
        u = this,
        r;
        n(this).one("bsTransitionEnd",
        function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        },
        setTimeout(r, t),
        this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
} (jQuery); +
function(n) {
    function u(i) {
        return this.each(function() {
            var r = n(this),
            u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
    t = function(t) {
        n(t).on("click", i, this.close)
    },
    r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
        u = f.attr("data-target"),
        r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r,
        this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
} (jQuery); +
function(n) {
    function i(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.button"),
            f = "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function i(t, r) {
        this.$element = n(t);
        this.options = n.extend({},
        i.DEFAULTS, r);
        this.isLoading = !1
    },
    r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled",
        r = this.$element,
        f = r.is("input") ? "val": "html",
        u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        },
        this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
        i = this.$element.closest('[data-toggle="buttons"]'),
        n;
        i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r,
        this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
    function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
    function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
} (jQuery); +
function(n) {
    function i(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.carousel"),
            f = n.extend({},
            t.DEFAULTS, u.data(), "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i),
            e = "string" == typeof i ? i: f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    },
    u,
    r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
        this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"),
        this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
        f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
        r,
        u;
        return f && !this.options.wrap ? t: (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
        t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (! (n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next": "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
        u = r || this.getItemForDirection(i, e),
        l = this.interval,
        f = "next" == i ? "left": "right",
        a = this,
        o,
        s,
        h,
        c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd",
        function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            },
            0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u,
        this
    };
    r = function(t) {
        var o, r = n(this),
        u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
        e,
        f;
        u.hasClass("carousel") && (e = n.extend({},
        u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load",
    function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
} (jQuery); +
function(n) {
    function i(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }
    function r(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.collapse"),
            f = n.extend({},
            t.DEFAULTS, u.data(), "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i); ! r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function i(t, r) {
        this.$element = n(t);
        this.options = n.extend({},
        i.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    },
    u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width": "height"
    };
    t.prototype.show = function() {
        var f, i, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(i && i.length && (f = i.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (i && i.length && (r.call(i, "hide"), f || i.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse")
            },
            !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(),
        this.$element[i](this.$element[i]())[0].offsetHeight,
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
        this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
        this.transitioning = 1,
        u = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        },
        n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, r) {
            var u = n(r);
            this.addAriaAndCollapsedClass(i(u), u)
        },
        this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = r;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u,
        this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = i(u),
        e = f.data("bs.collapse"),
        o = e ? "toggle": u.data();
        r.call(f, o)
    })
} (jQuery); +
function(n) {
    function r(t) {
        var i = t.attr("data-target"),
        r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
        r = i && n(i),
        r && r.length ? r: t.parent()
    }
    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var u = n(this),
            i = r(u),
            f = {
                relatedTarget: this
            };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function e(i) {
        return this.each(function() {
            var r = n(this),
            u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
    i = '[data-toggle="dropdown"]',
    t = function(t) {
        n(t).on("click.bs.dropdown", this.toggle)
    },
    f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this),
        i,
        o,
        e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                    relatedTarget: this
                },
                i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return ! 1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"),
            e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f,
        this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form",
    function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
} (jQuery); +
function(n) {
    function i(i, r) {
        return this.each(function() {
            var f = n(this),
            u = f.data("bs.modal"),
            e = n.extend({},
            t.DEFAULTS, f.data(), "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    },
    r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
        u = n.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
        function() {
            r.$element.one("mouseup.dismiss.bs.modal",
            function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"),
            u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd",
            function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        },
        this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
        f = this.$element.hasClass("fade") ? "fade": "",
        r,
        u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            },
            this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        },
        n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth: "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth: ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
        t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
        t;
        return n.className = "modal-scrollbar-measure",
        this.$body.append(n),
        t = n.offsetWidth - n.clientWidth,
        this.$body[0].removeChild(n),
        t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r,
        this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(t) {
        var r = n(this),
        f = r.attr("href"),
        u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
        e = u.data("bs.modal") ? "toggle": n.extend({
            remote: !/#/.test(f) && f
        },
        u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal",
        function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal",
            function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
} (jQuery); +
function(n) {
    function r(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.tooltip"),
            f = "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i; ! r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    },
    i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;) if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
        else "manual" != u && (o = "hover" == u ? "mouseenter": "focusin", s = "hover" == u ? "mouseleave": "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({},
        this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
        i = this.getDefaults();
        return this._options && n.each(this._options,
        function(n, r) {
            i[n] != r && (t[n] = r)
        }),
        t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t: n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)),
        t instanceof n.Event && (i.inState["focusin" == t.type ? "focus": "hover"] = !0),
        i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        },
        i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState) if (this.inState[n]) return ! 0;
        return ! 1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t: n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus": "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        },
        i.options.delay.hide)) : i.hide()
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
        l,
        p,
        e,
        w,
        h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
            r = this.tip(),
            a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            v = /\s?auto?\s?/i,
            y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
            o = r[0].offsetWidth,
            s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top": "top" == i && f.top - s < e.top ? "bottom": "right" == i && f.right + o > e.width ? "left": "left" == i && f.left - o < e.left ? "right": i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
        l = r[0].offsetWidth,
        e = r[0].offsetHeight,
        o = parseInt(r.css("margin-top"), 10),
        s = parseInt(r.css("margin-left"), 10),
        h,
        f,
        u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        },
        t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left: t.top += u.top;
        var c = /top|bottom/.test(i),
        a = c ? 2 * u.left - l + h: 2 * u.top - e + f,
        v = c ? "offsetWidth": "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left": "top", 50 * (1 - n / t) + "%").css(i ? "top": "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
        t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html": "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function f() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
        u = n(this.$tip),
        e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"),
        n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(),
        this.hoverState = null,
        this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element; (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0],
        u = "BODY" == r.tagName,
        i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({},
        i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
        e = u ? {
            top: 0,
            left: 0
        }: f ? null: t.offset(),
        o = {
            scroll: u ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
        },
        s = u ? {
            width: n(window).width(),
            height: n(window).height()
        }: null;
        return n.extend({},
        i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        }: "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        }: "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        }: {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        },
        e,
        u,
        o,
        s,
        h,
        c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o: s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h: c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
        n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~ (1e6 * Math.random());
        while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i,
        this
    }
} (jQuery); +
function(n) {
    function r(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.popover"),
            f = "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i; ! r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.init("popover", n, t)
    },
    i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({},
    n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({},
    n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
        i = this.getTitle(),
        t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html": "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html": "append": "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
        n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i,
        this
    }
} (jQuery); +
function(n) {
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window: i);
        this.options = n.extend({},
        t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    function i(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.scrollspy"),
            f = "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
        i = "offset",
        r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
            u = f.data("target") || f.attr("href"),
            t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
        f = this.getScrollHeight(),
        e = this.options.offset + f - this.$scrollElement.height(),
        t = this.offsets,
        r = this.targets,
        u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null,
        this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r,
        this
    };
    n(window).on("load.bs.scrollspy.data-api",
    function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
} (jQuery); +
function(n) {
    function r(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
        this.element = n(t)
    },
    u,
    i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
        f = t.closest("ul:not(.dropdown-menu)"),
        i = t.data("target"),
        u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
            e = n.Event("hide.bs.tab", {
                relatedTarget: t[0]
            }),
            o = n.Event("show.bs.tab", {
                relatedTarget: r[0]
            }); (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(),
            function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
        o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u,
        this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
} (jQuery); +
function(n) {
    function i(i) {
        return this.each(function() {
            var u = n(this),
            r = u.data("bs.affix"),
            f = "object" == ("undefined" == typeof i ? "undefined": _typeof(i)) && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function i(t, r) {
        this.options = n.extend({},
        i.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(t);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    },
    r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
        f = this.$element.offset(),
        e = this.$target.height();
        if (null != i && "top" == this.affixed) return u < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom": !(u + e <= n - r) && "bottom";
        var o = null == this.affixed,
        s = o ? u: f.top,
        h = o ? e: t;
        return null != i && u <= i ? "top": null != r && s + h >= n - r && "bottom"
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
        i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var r, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
            i = this.options.offset,
            f = i.top,
            u = i.bottom,
            h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != ("undefined" == typeof i ? "undefined": _typeof(i)) && (u = f = i), "function" == typeof f && (f = i.top(this.$element)), "function" == typeof u && (u = i.bottom(this.$element)), r = this.getState(h, s, f, u), this.affixed != r) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (r ? "-" + r: ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = r;
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r,
        this
    };
    n(window).on("load",
    function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
            t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
} (jQuery); !
function(n) {
    "use strict";
    n.fn.selectOrDie = function(t) {
        var e, f, s = {
            customID: null,
            customClass: "",
            placeholder: null,
            placeholderOption: !1,
            prefix: null,
            cycle: !1,
            stripEmpty: !1,
            links: !1,
            linksExternal: !1,
            size: 0,
            tabIndex: 0,
            onChange: n.noop
        },
        r = {},
        u = !1,
        i = {
            initSoD: function(t) {
                return r = n.extend({},
                s, t),
                this.each(function() {
                    if (n(this).parent().hasClass("sod_select")) console.log("Select or Die: It looks like the SoD already exists");
                    else {
                        var u, e, f, t = n(this),
                        y = t.data("custom-id") ? t.data("custom-id") : r.customID,
                        p = t.data("custom-class") ? t.data("custom-class") : r.customClass,
                        o = t.data("prefix") ? t.data("prefix") : r.prefix,
                        s = t.data("placeholder") ? t.data("placeholder") : r.placeholder,
                        c = t.data("placeholder-option") ? t.data("placeholder-option") : r.placeholderOption,
                        w = t.data("cycle") ? t.data("cycle") : r.cycle,
                        b = t.data("links") ? t.data("links") : r.links,
                        k = t.data("links-external") ? t.data("links-external") : r.linksExternal,
                        l = parseInt(t.data("size")) ? t.data("size") : r.size,
                        d = parseInt(t.data("tabindex")) ? t.data("tabindex") : r.tabIndex ? r.tabIndex: t.attr("tabindex") ? t.attr("tabindex") : r.tabIndex,
                        g = t.data("strip-empty") ? t.data("strip-empty") : r.stripEmpty,
                        nt = t.prop("title") ? t.prop("title") : null,
                        tt = t.is(":disabled") ? " disabled": "",
                        h = "",
                        a = "",
                        v = 0;
                        o && (h = '<span class="sod_prefix">' + o + "<\/span> ");
                        a += s && !o ? '<span class="sod_label sod_placeholder">' + s + "<\/span>": '<span class="sod_label">' + h + "<\/span>";
                        u = n("<span/>", {
                            id: y,
                            "class": "sod_select " + p + tt,
                            title: nt,
                            tabindex: d,
                            html: a,
                            "data-cycle": w,
                            "data-links": b,
                            "data-links-external": k,
                            "data-placeholder": s,
                            "data-placeholder-option": c,
                            "data-prefix": o,
                            "data-filter": ""
                        }).insertAfter(this);
                        i.isTouch() && u.addClass("touch");
                        e = n("<span/>", {
                            "class": "sod_list_wrapper"
                        }).appendTo(u);
                        f = n("<span/>", {
                            "class": "sod_list"
                        }).appendTo(e);
                        n("option, optgroup", t).each(function(t) {
                            var r = n(this);
                            g && !n.trim(r.text()) ? r.remove() : 0 === t && c && !h ? i.populateSoD(r, f, u, !0) : i.populateSoD(r, f, u, !1)
                        });
                        l && (e.show(), n(".sod_option:lt(" + l + ")", f).each(function() {
                            v += n(this).outerHeight()
                        }), e.removeAttr("style"), f.css({
                            "max-height": v
                        }));
                        t.appendTo(u);
                        u.on("focusin", i.focusSod).on("click", i.triggerSod).on("click", ".sod_option", i.optionClick).on("mousemove", ".sod_option", i.optionHover).on("keydown", i.keyboardUse);
                        t.on("change", i.selectChange);
                        n(document).on("click", "label[for='" + t.attr("id") + "']",
                        function(n) {
                            n.preventDefault();
                            u.focus()
                        })
                    }
                })
            },
            populateSoD: function(t, i, r, u) {
                var o = r.data("placeholder"),
                c = r.data("placeholder-option"),
                s = r.data("prefix"),
                l = r.find(".sod_label"),
                a = t.parent(),
                e = t.text(),
                y = t.val(),
                p = t.data("custom-id") ? t.data("custom-id") : null,
                w = t.data("custom-class") ? t.data("custom-class") : "",
                v = t.is(":disabled") ? " disabled ": "",
                f = t.is(":selected") ? " selected active ": "",
                b = t.data("link") ? " link ": "",
                k = t.data("link-external") ? " linkexternal": "",
                h = t.prop("label");
                t.is("option") ? (n("<span/>", {
                    "class": "sod_option " + w + v + f + b + k,
                    id: p,
                    title: e,
                    html: e,
                    "data-value": y
                }).appendTo(i), u && !s ? (r.data("label", e), r.data("placeholder", e), t.prop("disabled", !0), i.find(".sod_option:last").addClass("is-placeholder disabled"), f && l.addClass("sod_placeholder")) : f && o && !c && !s ? r.data("label", o) : f && r.data("label", e), (f && !o || f && c || f && s) && l.append(e), a.is("optgroup") && (i.find(".sod_option:last").addClass("groupchild"), a.is(":disabled") && i.find(".sod_option:last").addClass("disabled"))) : n("<span/>", {
                    "class": "sod_option optgroup " + v,
                    title: h,
                    html: h,
                    "data-label": h
                }).appendTo(i)
            },
            focusSod: function() {
                var t = n(this);
                t.hasClass("disabled") ? i.blurSod(t) : (i.blurSod(n(".sod_select.focus").not(t)), t.addClass("focus"), n("html").on("click.sodBlur",
                function() {
                    i.blurSod(t)
                }))
            },
            triggerSod: function(t) {
                t.stopPropagation();
                var r = n(this),
                e = r.find(".sod_list"),
                u = r.data("placeholder"),
                o = r.find(".active"),
                s = r.find(".selected");
                r.hasClass("disabled") || r.hasClass("open") || r.hasClass("touch") ? (clearTimeout(f), r.removeClass("open"), u && (r.find(".sod_label").get(0).lastChild.nodeValue = o.text())) : (r.addClass("open"), u && !r.data("prefix") && r.find(".sod_label").addClass("sod_placeholder").html(u), i.listScroll(e, s), i.checkViewport(r, e))
            },
            keyboardUse: function(t) {
                var o, f, c, r = n(this),
                l = r.find(".sod_list"),
                h = r.find(".sod_option"),
                a = r.find(".sod_label"),
                v = r.data("cycle"),
                s = h.filter(".active");
                return t.which > 36 && t.which < 41 ? (37 === t.which || 38 === t.which ? (f = s.prevAll(":not('.disabled, .optgroup')").first(), c = h.not(".disabled, .optgroup").last()) : (39 === t.which || 40 === t.which) && (f = s.nextAll(":not('.disabled, .optgroup')").first(), c = h.not(".disabled, .optgroup").first()), !f.hasClass("sod_option") && v && (f = c), (f.hasClass("sod_option") || v) && (s.removeClass("active"), f.addClass("active"), a.get(0).lastChild.nodeValue = f.text(), i.listScroll(l, f), r.hasClass("open") || (u = !0)), !1) : (13 === t.which || 32 === t.which && r.hasClass("open") && (" " === r.data("filter")[0] || "" === r.data("filter")) ? (t.preventDefault(), s.click()) : 32 !== t.which || r.hasClass("open") || " " !== r.data("filter")[0] && "" !== r.data("filter") ? 27 === t.which && i.blurSod(r) : (t.preventDefault(), u = !1, r.click()), 0 !== t.which && (clearTimeout(e), r.data("filter", r.data("filter") + String.fromCharCode(t.which)), o = h.filter(function() {
                    return 0 === n(this).text().toLowerCase().indexOf(r.data("filter").toLowerCase())
                }).not(".disabled, .optgroup").first(), o.length && (s.removeClass("active"), o.addClass("active"), i.listScroll(l, o), a.get(0).lastChild.nodeValue = o.text(), r.hasClass("open") || (u = !0)), e = setTimeout(function() {
                    r.data("filter", "")
                },
                500)), void 0)
            },
            optionHover: function() {
                var t = n(this);
                t.hasClass("disabled") || t.hasClass("optgroup") || t.siblings().removeClass("active").end().addClass("active")
            },
            optionClick: function(t) {
                t.stopPropagation();
                var r = n(this),
                i = r.closest(".sod_select"),
                u = r.hasClass("disabled"),
                e = r.hasClass("optgroup"),
                o = i.find(".sod_option:not('.optgroup')").index(this);
                i.hasClass("touch") || (u || e || (i.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder"), r.addClass("selected"), i.find("select option")[o].selected = !0, i.find("select").change()), clearTimeout(f), i.removeClass("open"))
            },
            selectChange: function() {
                var u = n(this),
                t = u.find(":selected"),
                f = t.text(),
                i = u.closest(".sod_select");
                i.find(".sod_label").get(0).lastChild.nodeValue = f;
                i.data("label", f);
                r.onChange.call(this); ! i.data("links") && !t.data("link") || t.data("link-external") ? (i.data("links-external") || t.data("link-external")) && window.open(t.val(), "_blank") : window.location.href = t.val()
            },
            blurSod: function(t) {
                if (n("body").find(t).length) {
                    var o = t.data("label"),
                    s = t.data("placeholder"),
                    i = t.find(".active"),
                    e = t.find(".selected"),
                    r = !1;
                    clearTimeout(f);
                    u && !i.hasClass("selected") ? (i.click(), r = !0) : i.hasClass("selected") || (i.removeClass("active"), e.addClass("active")); ! r && s ? t.find(".sod_label").get(0).lastChild.nodeValue = e.text() : r || (t.find(".sod_label").get(0).lastChild.nodeValue = o);
                    u = !1;
                    t.removeClass("open focus");
                    t.blur();
                    n("html").off(".sodBlur")
                }
            },
            checkViewport: function(t, r) {
                var u = t[0].getBoundingClientRect(),
                e = r.outerHeight();
                u.bottom + e + 10 > n(window).height() && u.top - e > 10 ? t.addClass("above") : t.removeClass("above");
                f = setTimeout(function() {
                    i.checkViewport(t, r)
                },
                200)
            },
            listScroll: function(n, t) {
                var i = n[0].getBoundingClientRect(),
                r = t[0].getBoundingClientRect();
                i.top > r.top ? n.scrollTop(n.scrollTop() - i.top + r.top) : i.bottom < r.bottom && n.scrollTop(n.scrollTop() - i.bottom + r.bottom)
            },
            isTouch: function() {
                return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            }
        },
        o = {
            destroy: function() {
                return this.each(function() {
                    var t = n(this),
                    i = t.parent();
                    i.hasClass("sod_select") ? (t.off("change"), i.find("span").remove(), t.unwrap()) : console.log("Select or Die: There's no SoD to destroy")
                })
            },
            update: function() {
                return this.each(function() {
                    var r = n(this),
                    t = r.parent(),
                    u = t.find(".sod_list:first");
                    t.hasClass("sod_select") ? (u.empty(), t.find(".sod_label").get(0).lastChild.nodeValue = "", r.is(":disabled") && t.addClass("disabled"), n("option, optgroup", r).each(function() {
                        i.populateSoD(n(this), u, t)
                    })) : console.log("Select or Die: There's no SoD to update")
                })
            },
            disable: function(t) {
                return this.each(function() {
                    var r = n(this),
                    i = r.parent();
                    i.hasClass("sod_select") ? "undefined" != typeof t ? (i.find(".sod_list:first .sod_option[data-value='" + t + "']").addClass("disabled"), i.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").addClass("disabled"), n("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", !0)) : i.hasClass("sod_select") && (i.addClass("disabled"), r.prop("disabled", !0)) : console.log("Select or Die: There's no SoD to disable")
                })
            },
            enable: function(t) {
                return this.each(function() {
                    var r = n(this),
                    i = r.parent();
                    i.hasClass("sod_select") ? "undefined" != typeof t ? (i.find(".sod_list:first .sod_option[data-value='" + t + "']").removeClass("disabled"), i.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").removeClass("disabled"), n("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", !1)) : i.hasClass("sod_select") && (i.removeClass("disabled"), r.prop("disabled", !1)) : console.log("Select or Die: There's no SoD to enable")
                })
            }
        };
        return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (n.error('Select or Die: Oh no! No such method "' + t + '" for the SoD instance'), void 0) : i.initSoD.apply(this, arguments)
    }
} (jQuery); !
function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
} (function(n) {
    "use strict";
    function o(n, t, i) {
        var r;
        return function() {
            var u = this,
            f = arguments,
            e = function() {
                r = null;
                i || n.apply(u, f)
            },
            o = i && !r;
            clearTimeout(r);
            r = setTimeout(e, t);
            o && n.apply(u, f)
        }
    }
    function s(n) {
        var t = ++c;
        return String(null == n ? "rmjs-": n) + t
    }
    function u(n) {
        var t = n.clone().css({
            height: "auto",
            width: n.width(),
            maxHeight: "none",
            overflow: "hidden"
        }).insertAfter(n),
        u = t.outerHeight(),
        i = parseInt(t.css({
            maxHeight: ""
        }).css("max-height").replace(/[^-\d\.]/g, ""), 10),
        f = n.data("defaultHeight"),
        r;
        t.remove();
        r = i || n.data("collapsedHeight") || f;
        n.data({
            expandedHeight: u,
            maxHeight: i,
            collapsedHeight: r
        }).css({
            maxHeight: "none"
        })
    }
    function h(n) {
        if (!e[n.selector]) {
            var t = " ";
            n.embedCSS && "" !== n.blockCSS && (t += n.selector + " + [data-readmore-toggle], " + n.selector + "[data-readmore]{" + n.blockCSS + "}");
            t += n.selector + "[data-readmore]{transition: height " + n.speed + "ms;overflow: hidden;}",
            function(n, t) {
                var i = n.createElement("style");
                i.type = "text/css";
                i.styleSheet ? i.styleSheet.cssText = t: i.appendChild(n.createTextNode(t));
                n.getElementsByTagName("head")[0].appendChild(i)
            } (document, t);
            e[n.selector] = !0
        }
    }
    function r(r, u) {
        this.element = r;
        this.options = n.extend({},
        f, u);
        h(this.options);
        this._defaults = f;
        this._name = t;
        this.init();
        window.addEventListener ? (window.addEventListener("load", i), window.addEventListener("resize", i)) : (window.attachEvent("load", i), window.attachEvent("resize", i))
    }
    var t = "readmore",
    f = {
        speed: 100,
        collapsedHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More<\/a>',
        lessLink: '<a href="#">Close<\/a>',
        embedCSS: !0,
        blockCSS: "display: block; width: 100%;",
        startOpen: !1,
        beforeToggle: function() {},
        afterToggle: function() {}
    },
    e = {},
    c = 0,
    i = o(function() {
        n("[data-readmore]").each(function() {
            var t = n(this),
            i = "true" === t.attr("aria-expanded");
            u(t);
            t.css({
                height: t.data(i ? "expandedHeight": "collapsedHeight")
            })
        })
    },
    100);
    r.prototype = {
        init: function() {
            var t = n(this.element),
            i,
            f,
            r,
            e;
            if (t.data({
                defaultHeight: this.options.collapsedHeight,
                heightMargin: this.options.heightMargin
            }), u(t), i = t.data("collapsedHeight"), f = t.data("heightMargin"), t.outerHeight(!0) <= i + f) return ! 0;
            r = t.attr("id") || s();
            e = this.options.startOpen ? this.options.lessLink: this.options.moreLink;
            t.attr({
                "data-readmore": "",
                "aria-expanded": this.options.startOpen,
                id: r
            });
            t.after(n(e).on("click",
            function(n) {
                return function(i) {
                    n.toggle(this, t[0], i)
                }
            } (this)).attr({
                "data-readmore-toggle": "",
                "aria-controls": r
            }));
            this.options.startOpen || t.css({
                height: i
            })
        },
        toggle: function(t, i, r) {
            r && r.preventDefault();
            t || (t = n('[aria-controls="' + _this.element.id + '"]')[0]);
            i || (i = _this.element);
            var u = n(i),
            e = "",
            o = "",
            f = !1,
            s = u.data("collapsedHeight");
            u.height() <= s ? (e = u.data("expandedHeight") + "px", o = "lessLink", f = !0) : (e = s, o = "moreLink");
            this.options.beforeToggle(t, u, !f);
            u.css({
                height: e
            });
            u.on("transitionend",
            function(i) {
                return function() {
                    i.options.afterToggle(t, u, f);
                    n(this).attr({
                        "aria-expanded": f
                    }).off("transitionend")
                }
            } (this));
            n(t).replaceWith(n(this.options[o]).on("click",
            function(n) {
                return function(t) {
                    n.toggle(this, i, t)
                }
            } (this)).attr({
                "data-readmore-toggle": "",
                "aria-controls": u.attr("id")
            }))
        },
        destroy: function() {
            n(this.element).each(function() {
                var t = n(this);
                t.attr({
                    "data-readmore": null,
                    "aria-expanded": null
                }).css({
                    maxHeight: "",
                    height: ""
                }).next("[data-readmore-toggle]").remove();
                t.removeData()
            })
        }
    };
    n.fn.readmore = function(i) {
        var u = arguments,
        f = this.selector;
        return i = i || {},
        "object" == typeof i ? this.each(function() {
            if (n.data(this, "plugin_" + t)) {
                var u = n.data(this, "plugin_" + t);
                u.destroy.apply(u)
            }
            i.selector = f;
            n.data(this, "plugin_" + t, new r(this, i))
        }) : "string" == typeof i && "_" !== i[0] && "init" !== i ? this.each(function() {
            var f = n.data(this, "plugin_" + t);
            f instanceof r && "function" == typeof f[i] && f[i].apply(f, Array.prototype.slice.call(u, 1))
        }) : void 0
    }
}),
function() {
    var t = [],
    i = new Array([]),
    n = 0,
    r;
    t[n] = "北京";
    i[n] = ["--请选择--", "东城区", "西城区", "朝阳区", "丰台区", "海淀区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县", "门头沟区", "石景山区"];
    n++;
    t[n] = "天津";
    i[n] = ["--请选择--", "蓟县", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "和平区"];
    n++;
    t[n] = "河北省";
    i[n] = ["--请选择--", "石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"];
    n++;
    t[n] = "内蒙古自治区";
    i[n] = ["--请选择--", "呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "乌兰察布盟", "锡林郭勒盟", "巴彦淖尔盟", "阿拉善盟", "兴安盟"];
    n++;
    t[n] = "山西省";
    i[n] = ["--请选择--", "太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"];
    n++;
    t[n] = "辽宁省";
    i[n] = ["--请选择--", "沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "葫芦岛市", "营口市", "盘锦市", "阜新市", "辽阳市", "铁岭市", "朝阳市"];
    n++;
    t[n] = "吉林省";
    i[n] = ["--请选择--", "长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"];
    n++;
    t[n] = "黑龙江省";
    i[n] = ["--请选择--", "哈尔滨市", "齐齐哈尔市", "鹤岗市", "双鸭山市", "鸡西市", "大庆市", "伊春市", "牡丹江市", "佳木斯市", "七台河市", "黑河市", "绥化市", "大兴安岭地区"];
    n++;
    t[n] = "上海";
    i[n] = ["--请选择--", "黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县", "浦东新区(不含南汇区)"];
    n++;
    t[n] = "安徽省";
    i[n] = ["--请选择--", "合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "巢湖市", "六安市", "亳州市", "池州市", "宣城市"];
    n++;
    t[n] = "江苏省";
    i[n] = ["--请选择--", "南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"];
    n++;
    t[n] = "浙江省";
    i[n] = ["--请选择--", "杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州舟山市", "台州市", "丽水市"];
    n++;
    t[n] = "福建省";
    i[n] = ["--请选择--", "福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"];
    n++;
    t[n] = "江西省";
    i[n] = ["--请选择--", "南昌市", "景德镇市", "萍乡市", "新余市", "九江市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"];
    n++;
    t[n] = "山东省";
    i[n] = ["--请选择--", "济南市", "青岛市", "淄博市", "枣庄市", "东营市", "潍坊市", "烟台市", "威海市", "济宁市", "泰安市", "日照市", "莱芜市", "德州市", "临沂市", "聊城市", "滨州市", "菏泽市"];
    n++;
    t[n] = "河南省";
    i[n] = ["--请选择--", "郑州市", "开封市", "洛阳市", "平顶山市", "焦作市", "鹤壁市", "新乡市", "安阳市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "济源"];
    n++;
    t[n] = "湖北省";
    i[n] = ["--请选择--", "武汉市", "黄石市", "襄樊市", "十堰市", "荆州市", "宜昌市", "荆门市", "鄂州市", "孝感市", "黄冈市", "咸宁市", "随州市", "仙桃市", "天门市", "潜江市", "神农架林区", "恩施土家族苗族自治州"];
    n++;
    t[n] = "湖南省";
    i[n] = ["--请选择--", "长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西土家族苗族自治州"];
    n++;
    t[n] = "广东省";
    i[n] = ["--请选择--", "广州市", "深圳市", "珠海市", "汕头市", "韶关市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"];
    n++;
    t[n] = "广西壮族自治区";
    i[n] = ["--请选择--", "南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"];
    n++;
    t[n] = "海南省";
    i[n] = ["--请选择--", "海口市", "三亚市", "五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "澄迈市", "定安市", "屯昌市", "临高市", "白沙黎族自治县昌", "江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县"];
    n++;
    t[n] = "重庆";
    i[n] = ["--请选择--", "忠县", "开县", "南岸区", "高新区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "江津市", "合川市", "永川市", "南川市", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "渝中区", "江北区", "云阳县", "奉节县", "巫山县", "巫溪县", "九龙坡区", "大渡口区", "沙坪坝区", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"];
    n++;
    t[n] = "四川省";
    i[n] = ["--请选择--", "成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "宜宾市", "广安市", "达州市", "眉山市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"];
    n++;
    t[n] = "贵州省";
    i[n] = ["--请选择--", "贵阳市", "六盘水市", "遵义市", "安顺市", "铜仁市", "毕节市", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "黔南布依族苗族自治州"];
    n++;
    t[n] = "云南省";
    i[n] = ["--请选择--", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "思茅市", "临沧市", "文山壮族苗族自治州", "红河哈尼族彝族自治州", "西双版纳傣族自治州", "楚雄彝族自治州", "大理白族自治州", "德宏傣族景颇族自治州 ", "怒江傈傈族自治州", "迪庆藏族自治州"];
    n++;
    t[n] = "西藏自治区";
    i[n] = ["--请选择--", "拉萨市", "那曲地区", "昌都地区", "山南地区", "日喀则地区", "阿里地区", "林芝地区"];
    n++;
    t[n] = "陕西省";
    i[n] = ["--请选择--", "西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"];
    n++;
    t[n] = "甘肃省";
    i[n] = ["--请选择--", "兰州市", "金昌市", "白银市", "天水市", "嘉峪关市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州"];
    n++;
    t[n] = "青海省";
    i[n] = ["--请选择--", "西宁市", "海东市", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"];
    n++;
    t[n] = "宁夏回族自治区";
    i[n] = ["--请选择--", "银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"];
    n++;
    t[n] = "新疆维吾尔自治区";
    i[n] = ["--请选择--", "北屯市", "和田地区", "喀什地区", "塔城地区", "石河子市", "阿拉尔市", "五家渠市", "哈密地区", "铁门关市", "克拉玛依市", "阿克苏地区", "图木舒克市", "吐鲁番地区", "乌鲁木齐市", "阿勒泰地区", "昌吉回族自治州", "伊犁哈萨克自治州", "博尔塔拉蒙古自治州", "巴音郭楞蒙古自治州", "克孜勒苏柯尔克孜自治州"];
    n++;
    t[n] = "香港";
    i[n] = ["香港"];
    n++;
    t[n] = "澳门";
    i[n] = ["澳门"];
    n++;
    t[n] = "台湾省";
    i[n] = ["--请选择--", "台北市", "新北市", "桃园市", "台中市", "台南市", "高雄市", "嘉义市", "基隆市", "新竹市", "宜兰县市", "新竹县市", "苗栗县市", "彰化县市", "南投县市", "嘉义县市", "云林县市", "屏东县市", "台东县市", "花莲县市", "澎湖县"];
    n++;
    t[n] = "-----------";
    i[n] = ["-----------"];
    n++;
    t[n] = "奥地利";
    i[n] = ["奥地利"];
    n++;
    t[n] = "澳大利亚";
    i[n] = ["澳大利亚"];
    n++;
    t[n] = "爱尔兰";
    i[n] = ["爱尔兰"];
    n++;
    t[n] = "巴布亚新几内亚";
    i[n] = ["巴布亚新几内亚"];
    n++;
    t[n] = "比利时";
    i[n] = ["比利时"];
    n++;
    t[n] = "朝鲜";
    i[n] = ["朝鲜"];
    n++;
    t[n] = "丹麦";
    i[n] = ["丹麦"];
    n++;
    t[n] = "德国";
    i[n] = ["德国"];
    n++;
    t[n] = "法国";
    i[n] = ["法国"];
    n++;
    t[n] = "芬兰";
    i[n] = ["芬兰"];
    n++;
    t[n] = "菲律宾";
    i[n] = ["菲律宾"];
    n++;
    t[n] = "韩国";
    i[n] = ["韩国"];
    n++;
    t[n] = "加拿大";
    i[n] = ["加拿大"];
    n++;
    t[n] = "柬埔寨";
    i[n] = ["柬埔寨"];
    n++;
    t[n] = "卢森堡";
    i[n] = ["卢森堡"];
    n++;
    t[n] = "美国";
    i[n] = ["美国"];
    n++;
    t[n] = "蒙古";
    i[n] = ["蒙古"];
    n++;
    t[n] = "马来西亚";
    i[n] = ["马来西亚"];
    n++;
    t[n] = "马耳他";
    i[n] = ["马耳他"];
    n++;
    t[n] = "挪威";
    i[n] = ["挪威"];
    n++;
    t[n] = "葡萄牙";
    i[n] = ["葡萄牙"];
    n++;
    t[n] = "日本";
    i[n] = ["日本"];
    n++;
    t[n] = "瑞典";
    i[n] = ["瑞典"];
    n++;
    t[n] = "瑞士";
    i[n] = ["瑞士"];
    n++;
    t[n] = "泰国";
    i[n] = ["泰国"];
    n++;
    t[n] = "希腊";
    i[n] = ["希腊"];
    n++;
    t[n] = "新加坡";
    i[n] = ["新加坡"];
    n++;
    t[n] = "新西兰";
    i[n] = ["新西兰"];
    n++;
    t[n] = "西班牙";
    i[n] = ["西班牙"];
    n++;
    t[n] = "印度尼西亚";
    i[n] = ["印度尼西亚"];
    n++;
    t[n] = "意大利";
    i[n] = ["意大利"];
    n++;
    t[n] = "英国";
    i[n] = ["英国"];
    n++;
    t[n] = "越南";
    i[n] = ["越南"];
    n++;
    t[n] = "其他";
    i[n] = ["其他"];
    r = {
        province: t,
        city: i,
        writeProvince: function(n) {
            $(n).append(t.map(function(n) {
                return "<option value=" + n + ">" + n + "<\/option>"
            }).reduce(function(n, t) {
                return n + t
            }))
        },
        writeCity: function(n, r) {
            var u = t.indexOf($(r).val());
            u != -1 && ($(n).html(i[u].map(function(n) {
                return n === "--请选择--" ? "<option value=''>" + n + "<\/option>": "<option value=" + n + ">" + n + "<\/option>"
            }).reduce(function(n, t) {
                return n + t
            })), $(n).click())
        }
    };
    window.address = r
} (); !
function(n, t, i, r) {
    "use strict";
    function f(i, r, u, f) {
        function a() {
            y = t.devicePixelRatio > 1;
            v(u);
            r("delay") >= 0 && setTimeout(function() {
                h(!0)
            },
            r("delay")); (r("delay") < 0 || r("combined")) && (f.e = d(r("throttle"),
            function(n) {
                "resize" === n.type && (o = s = -1);
                h(n.all)
            }), f.a = function(n) {
                v(n);
                u.push.apply(u, n)
            },
            f.g = function() {
                return u = n(u).filter(function() {
                    return ! n(this).data(r("loadedName"))
                })
            },
            h(), n(r("appendScroll")).on("scroll." + i.name + " resize." + i.name, f.e))
        }
        function v(t) {
            var u;
            if (t = n(t).filter(function() {
                return ! n(this).data(r("handledName")) && (n(this).attr(r("attribute")) || n(this).attr(r("loaderAttribute")))
            }).data("plugin_" + i.name, i), r("defaultImage") || r("placeholder")) for (u = 0; u < t.length; u++) {
                var f = n(t[u]),
                o = t[u].tagName.toLowerCase(),
                e = "background-image";
                "img" == o && r("defaultImage") && !f.attr("src") ? f.attr("src", r("defaultImage")) : "img" == o || !r("placeholder") || f.css(e) && "none" != f.css(e) || f.css(e, "url(" + r("placeholder") + ")")
            }
        }
        function h(t) {
            if (!u.length) return void(r("autoDestroy") && i.destroy());
            for (var o = !1,
            f = r("imageBase") ? r("imageBase") : "", e = 0; e < u.length; e++)(function(i) {
                if (w(i) || t) {
                    var h, u = n(i),
                    e = i.tagName.toLowerCase(),
                    s = u.attr(r("attribute")); ! u.data(r("handledName")) && (!r("visibleOnly") || u.is(":visible")) && (s && ("img" == e && f + s != u.attr("src") || "img" != e && f + s != u.css("background-image")) || (h = u.attr(r("loaderAttribute")))) && (o = !0, u.data(r("handledName"), !0), p(u, e, f, h))
                }
            })(u[e]);
            o && (u = n(u).filter(function() {
                return ! n(this).data(r("handledName"))
            }))
        }
        function p(t, i, u, f) {
            var s, o; ++l;
            s = function() {
                e("onError", t);
                c()
            }; (e("beforeLoad", t), f) ? (t.off("error").one("error", s), t.one("load",
            function() {
                r("removeAttribute") && t.removeAttr(r("loaderAttribute"));
                t.data(r("loadedName"), !0);
                e("afterLoad", t);
                c()
            }), e(f, t,
            function(n) {
                n ? t.load() : t.error()
            }) || t.error()) : (o = n(new Image), o.one("error", s), o.one("load",
            function() {
                t.hide();
                "img" == i ? t.attr("src", o.attr("src")) : t.css("background-image", "url('" + o.attr("src") + "')");
                t[r("effect")](r("effectTime"));
                r("removeAttribute") && t.removeAttr(r("attribute") + " " + r("retinaAttribute"));
                t.data(r("loadedName"), !0);
                e("afterLoad", t);
                o.remove();
                c()
            }), o.attr("src", u + t.attr(r(y && t.attr(r("retinaAttribute")) ? "retinaAttribute": "attribute"))), o.complete && o.load())
        }
        function w(n) {
            var t = n.getBoundingClientRect(),
            u = r("scrollDirection"),
            i = r("threshold"),
            f = k() + i > t.top && -i < t.bottom,
            e = b() + i > t.left && -i < t.right;
            return "vertical" == u ? f: "horizontal" == u ? e: f && e
        }
        function b() {
            return o >= 0 ? o: o = n(t).width()
        }
        function k() {
            return s >= 0 ? s: s = n(t).height()
        }
        function d(n, t) {
            var u, f = 0;
            return function(e, o) {
                function s() {
                    f = +new Date;
                    t.call(i, e)
                }
                var h = +new Date - f;
                u && clearTimeout(u);
                h > n || !r("enableThrottle") || o ? s() : u = setTimeout(s, n - h)
            }
        }
        function c() {--l;
            u.length || l || e("onFinishedAll")
        }
        function e(n) {
            return (n = r(n)) ? (n.apply(i, [].slice.call(arguments, 1)), !0) : !1
        }
        var l = 0,
        o = -1,
        s = -1,
        y = !1; !
        function() {
            "event" == r("bind") ? a() : n(t).on("load." + i.name, a)
        } ()
    }
    function u(i, u) {
        var e = this,
        s = n.extend({},
        e.configuration, u),
        o = {};
        return e.config = function(n, t) {
            return t === r ? s[n] : (s[n] = t, e)
        },
        e.addItems = function(t) {
            return o.a && o.a("string" === n.type(t) ? n(t) : t),
            e
        },
        e.getItems = function() {
            return o.g ? o.g() : {}
        },
        e.update = function(n) {
            return o.e && o.e({},
            !n),
            e
        },
        e.loadAll = function() {
            return o.e && o.e({
                all: !0
            },
            !0),
            e
        },
        e.destroy = function() {
            return n(e.config("appendScroll")).off("." + e.name, o.e),
            n(t).off("." + e.name),
            o = {},
            r
        },
        f(e, e.config, i, o),
        e.config("chainable") ? i: e
    }
    n.fn.Lazy = n.fn.lazy = function(n) {
        return new u(this, n)
    };
    n.extend(u.prototype, {
        name: "lazy",
        configuration: {
            chainable: !0,
            autoDestroy: !0,
            bind: "load",
            threshold: 500,
            visibleOnly: !1,
            appendScroll: t,
            scrollDirection: "both",
            imageBase: null,
            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
            placeholder: null,
            delay: -1,
            combined: !1,
            attribute: "data-src",
            retinaAttribute: "data-retina",
            loaderAttribute: "data-loader",
            removeAttribute: !0,
            handledName: "handled",
            loadedName: "loaded",
            effect: "show",
            effectTime: 0,
            enableThrottle: !0,
            throttle: 250,
            beforeLoad: null,
            afterLoad: null,
            onError: null,
            onFinishedAll: null
        }
    })
} (jQuery, window, document),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery)
} (function(n) {
    function i(n) {
        return t.raw ? n: encodeURIComponent(n)
    }
    function f(n) {
        return t.raw ? n: decodeURIComponent(n)
    }
    function e(n) {
        return i(t.json ? JSON.stringify(n) : String(n))
    }
    function o(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return n = decodeURIComponent(n.replace(u, " ")),
            t.json ? JSON.parse(n) : n
        } catch(i) {}
    }
    function r(i, r) {
        var u = t.raw ? i: o(i);
        return n.isFunction(r) ? r(u) : u
    }
    var u = /\+/g,
    t = n.cookie = function(u, o, s) {
        var v, c;
        if (arguments.length > 1 && !n.isFunction(o)) return s = n.extend({},
        t.defaults, s),
        typeof s.expires == "number" && (v = s.expires, c = s.expires = new Date, c.setMilliseconds(c.getMilliseconds() + v * 864e5)),
        document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path: "", s.domain ? "; domain=" + s.domain: "", s.secure ? "; secure": ""].join("");
        for (var l = u ? undefined: {},
        y = document.cookie ? document.cookie.split("; ") : [], a = 0, b = y.length; a < b; a++) {
            var p = y[a].split("="),
            w = f(p.shift()),
            h = p.join("=");
            if (u === w) {
                l = r(h, o);
                break
            }
            u || (h = r(h)) === undefined || (l[w] = h)
        }
        return l
    };
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t, "", n.extend({},
        i, {
            expires: -1
        })),
        !n.cookie(t)
    }
}),
function(n) {
    function s(f) {
        return t = n(f.data.el),
        t.blur(),
        i = o(f).y,
        r = t.height() - i,
        t.css("opacity", .25),
        n(document).mousemove(e).mouseup(u),
        !1
    }
    function e(n) {
        var s = o(n).y,
        e = r + s;
        return i >= s && (e -= 5),
        i = s,
        e = Math.max(f, e),
        t.height(e + "px"),
        e < f && u(n),
        !1
    }
    function u() {
        n(document).unbind("mousemove", e).unbind("mouseup", u);
        t.css("opacity", 1);
        t.focus();
        t = null;
        r = null;
        i = 0
    }
    function o(n) {
        return {
            x: n.clientX + document.documentElement.scrollLeft,
            y: n.clientY + document.documentElement.scrollTop
        }
    }
    var t, r, i = 0,
    f = 32;
    n.fn.TextAreaResizer = function() {
        return this.each(function() {
            t = n(this).addClass("processed");
            r = null;
            n(this).wrap('<div class="resizable-textarea"><span><\/span><\/div>').parent().append(n('<div class="grippie"><\/div>').bind("mousedown", {
                el: this
            },
            s));
            var i = n("div.grippie", n(this).parent())[0];
            i.style.marginRight = i.offsetWidth - n(this)[0].offsetWidth + "px"
        })
    }
} (jQuery),
function() {
    $(function() {
        var t, n;
        $("#head-navbar-toggle").on("click",
        function() {
            return $("#head-nav-primary, #head-nav-secondary").toggleClass("on"),
            !1
        });
        n = 0;
        $(".itr-tab>dl>dt>a").bind("click mouseenter",
        function(t) {
            return $(this).parent().parent().hasClass("on") || ($("dl", $(this).parent().parent().parent()).removeClass("on"), $(this).parent().parent().addClass("on"), n = (new Date).valueOf()),
            t.type === "click" && $(this).attr("href") !== "#" && (new Date).valueOf() - n > 200
        });
        $(".itr-tab>dl:first-child").addClass("on");
        $("#head-nav .key").on("focus",
        function() {
            $(this).select()
        });
        $("textarea.resizable:not(.processed)").TextAreaResizer();
        $("div.resizable:not(.processed)").TextAreaResizer();
        $(".navbar-close > a").on("click",
        function() {
            return $("#head-nav-primary, #head-nav-secondary").removeClass("on"),
            !1
        });
        $(".profile-sidenav > .sidenav-major").on("click",
        function() {
            for (var n = $(this).next(); n.is("li") && !n.hasClass("sidenav-major");) n.toggle(),
            n = n.next()
        });
        $(".category-sidenav > .sidenav-major > a > .toggle, .category-sidenav > .sidenav-major > a.toggle").on("click",
        function(n) {
            var t;
            return n.preventDefault(),
            t = $(this).parents(".sidenav-major"),
            t.toggleClass("collapsed"),
            !1
        });
        $(".category-sidenav > .sidenav-header > a .toggle").on("click",
        function(n) {
            var t;
            return n.preventDefault(),
            t = $(this).parents(".category-sidenav"),
            t.toggleClass("expanded"),
            !1
        });
        $(".bar select, select.sod").selectOrDie();
        t = $(".show-type");
        t.on("click", "a",
        function() {
            $(this).parent().toggleClass("active").siblings().toggleClass("active");
            $(".main .block-books").toggleClass("block-books-list block-books-grid");
            $(".main .block-articles").toggleClass("block-articles-list block-articles-grid")
        });
        $(".show-more").on("click",
        function() {
            $(this).toggleClass("open");
            $(this).hasClass("open") ? $(this).text("收起全部") : $(this).text("展开全部");
            $(".catalogue-main").toggleClass("open")
        });
        $(".photo-collapse").on("click",
        function() {
            $(this).toggleClass("expanded")
        });
        $(".photo-collapse + .readmore-toggle").on("click",
        function() {
            var n, t, i;
            return t = $(this),
            n = t.prev(),
            n.toggleClass("expanded"),
            n.hasClass("expanded") ? (t.removeClass("more").addClass("less"), t.affix({
                offset: {
                    top: n.offset().top - $(window).height() + 100,
                    bottom: $(document).height() - n.offset().top - n.height()
                }
            }), t.css("left", n.offset().left + n.width() / 2 - 75)) : ($(this).removeClass("less affix").addClass("more"), i = n.offset().top + n.height() - 100, $(window).scrollTop() > i && $(window).scrollTop(i)),
            !1
        });
        $('[data-toggle="marquee"]').on("click",
        function(n) {
            var i, t, r, u;
            return n.preventDefault(),
            t = $(this).attr("data-target"),
            i = $($("#" + t + " > ul")[0]),
            r = i.width() * 1.0092,
            $(this).attr("data-act") === "left" && (r = -r),
            u = i.scrollLeft() + r,
            i.animate({
                scrollLeft: u
            },
            300),
            u <= 0 ? $('[data-toggle="marquee"][data-act="left"][data-target="' + t + '"]').attr("disabled", "disabled") : $('[data-toggle="marquee"][data-act="left"][data-target="' + t + '"]').removeAttr("disabled"),
            u >= i.get(0).scrollWidth - r ? $('[data-toggle="marquee"][data-act="right"][data-target="' + t + '"]').attr("disabled", "disabled") : $('[data-toggle="marquee"][data-act="right"][data-target="' + t + '"]').removeAttr("disabled"),
            $(this).blur(),
            !1
        });
        $(".readmore").readmore({
            speed: 75,
            collapsedHeight: 100,
            heightMargin: 0,
            moreLink: '<a href="#" class="readmore-toggle more">全部展开<\/a>',
            lessLink: '<a href="#" class="readmore-toggle less">全部收起<\/a>',
            embedCSS: !1,
            afterToggle: function(n, t, i) {
                var r;
                i || (r = t.offset().top + t.height() - 100, $(window).scrollTop() > r && $(window).scrollTop(r))
            }
        })
    })
}.call(this)