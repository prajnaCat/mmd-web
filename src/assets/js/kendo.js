!
function(n, t) {
    t([], n)
} (function() {
    return function(n, t) {
        function g() {}
        function hr(n, t) {
            if (t) return "'" + n.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var i = n.charAt(0),
            r = n.substring(1);
            return "=" === i ? "+(" + r + ")+": ":" === i ? "+e(" + r + ")+": ";" + n + ";o+="
        }
        function f(n, t, i) {
            return n += "",
            t = t || 2,
            i = t - n.length,
            i ? hi[t].substring(0, i) + n: n
        }
        function wt(n) {
            var u = n.css(i.support.transitions.css + "box-shadow") || n.css("box-shadow"),
            t = u ? u.match(fu) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
            r = d.max( + t[3], +(t[4] || 0));
            return {
                left: -t[1] + r,
                right: +t[1] + r,
                bottom: +t[2] + r
            }
        }
        function cr(t, i) {
            var s, u, f, e, h, c, o, l, a = r.browser,
            v = "rtl" == t.css("direction");
            return t.parent().hasClass("k-animation-container") ? (o = t.parent(".k-animation-container"), l = o[0].style, o.is(":hidden") && o.show(), s = ft.test(l.width) || ft.test(l.height), s || o.css({
                width: t.outerWidth(),
                height: t.outerHeight(),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (u = wt(t), f = t[0].style.width, e = t[0].style.height, h = ft.test(f), c = ft.test(e), a.opera && (u.left = u.right = u.bottom = 5), s = h || c, !h && (!i || i && f) && (f = t.outerWidth()), !c && (!i || i && e) && (e = t.outerHeight()), t.wrap(n("<div/>").addClass("k-animation-container").css({
                width: f,
                height: e,
                marginLeft: u.left * (v ? 1 : -1),
                paddingLeft: u.left,
                paddingRight: u.right,
                paddingBottom: u.bottom
            })), s && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })),
            a.msie && d.floor(a.version) <= 7 && (t.css({
                zoom: 1
            }), t.children(".k-menu").width(t.width())),
            t.parent()
        }
        function bt(n) {
            for (var t = 1,
            i = arguments.length,
            t = 1; i > t; t++) kt(n, arguments[t]);
            return n
        }
        function kt(n, t) {
            var u, r, f, e, o = i.data.ObservableArray,
            s = i.data.DataSource,
            h = i.data.HierarchicalDataSource;
            for (u in t) r = t[u],
            f = typeof r,
            f === p && null !== r && r.constructor !== Array && r.constructor !== o && r.constructor !== s && r.constructor !== h ? r instanceof Date ? n[u] = new Date(r.getTime()) : b(r.clone) ? n[u] = r.clone() : (e = n[u], n[u] = typeof e === p ? e || {}: {},
            kt(n[u], r)) : f !== ot && (n[u] = r);
            return n
        }
        function st(n, i, r) {
            for (var u in i) if (i.hasOwnProperty(u) && i[u].test(n)) return u;
            return r !== t ? r: n
        }
        function lr(n) {
            return n.replace(/([a-z][A-Z])/g,
            function(n) {
                return n.charAt(0) + "-" + n.charAt(1).toLowerCase()
            })
        }
        function dt(n) {
            return n.replace(/\-(\w)/g,
            function(n, t) {
                return t.toUpperCase()
            })
        }
        function ar(t, r) {
            var u, f = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (u = document.defaultView.getComputedStyle(t, ""), r && n.each(r,
            function(n, t) {
                f[t] = u.getPropertyValue(t)
            })) : (u = t.currentStyle, r && n.each(r,
            function(n, t) {
                f[t] = u[dt(t)]
            })),
            i.size(f) || (f = u),
            f
        }
        function vr(n) {
            var t, i = 0;
            for (t in n) n.hasOwnProperty(t) && "toJSON" != t && i++;
            return i
        }
        function yr(n, t, i) {
            t || (t = "offset");
            var u = n[t]();
            return r.browser.msie && (r.pointers || r.msPointers) && !i && (u.top -= window.pageYOffset - document.documentElement.scrollTop, u.left -= window.pageXOffset - document.documentElement.scrollLeft),
            u
        }
        function pr(n) {
            var t = {};
            return it("string" == typeof n ? n.split(" ") : n,
            function(n) {
                t[n] = this
            }),
            t
        }
        function wr(n) {
            return new i.effects.Element(n)
        }
        function br(n, t, i, r) {
            return typeof n === e && (b(t) && (r = t, t = 400, i = !1), b(i) && (r = i, i = !1), typeof t === er && (i = t, t = 400), n = {
                effects: n,
                duration: t,
                reverse: i,
                complete: r
            }),
            s({
                effects: {},
                duration: 400,
                reverse: !1,
                init: rt,
                teardown: rt,
                hide: !1
            },
            n, {
                completeCallback: n.complete,
                complete: rt
            })
        }
        function gt(t, i, r, u, f) {
            for (var e, o = 0,
            s = t.length; s > o; o++) e = n(t[o]),
            e.queue(function() {
                v.promise(e, br(i, r, u, f))
            });
            return t
        }
        function kr(n, t, i, r) {
            return t && (t = t.split(" "), it(t,
            function(t, i) {
                n.toggleClass(i, r)
            })),
            n
        }
        function dr(n) {
            return ("" + n).replace(li, "&amp;").replace(ai, "&lt;").replace(pi, "&gt;").replace(vi, "&quot;").replace(yi, "&#39;")
        }
        function ht(n, r) {
            var u;
            return 0 === r.indexOf("data") && (r = r.substring(4), r = r.charAt(0).toLowerCase() + r.substring(1)),
            r = r.replace(nr, "-$1"),
            u = n.getAttribute("data-" + i.ns + r),
            null === u ? u = t: "null" === u ? u = null: "true" === u ? u = !0 : "false" === u ? u = !1 : eu.test(u) ? u = parseFloat(u) : di.test(u) && !gi.test(u) && (u = Function("return (" + u + ")")()),
            u
        }
        function ni(r, u) {
            var e, f, o = {};
            for (e in u) f = ht(r, e),
            f !== t && (ki.test(e) && (f = i.template(n("#" + f).html())), o[e] = f);
            return o
        }
        function gr(t, i) {
            return n.contains(t, i) ? -1 : 1
        }
        function nu() {
            var t = n(this);
            return n.inArray(t.attr("data-role"), ["slider", "rangeslider"]) > 0 || t.is(":visible")
        }
        function tu(n, t) {
            var i = n.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(i) ? !n.disabled: "a" === i ? n.href || t: t) && iu(n)
        }
        function iu(t) {
            return ! n(t).parents().addBack().filter(function() {
                return "hidden" === n.css(this, "visibility") || n.expr.filters.hidden(this)
            }).length
        }
        function o(n, t) {
            return new o.fn.init(n, t)
        }
        var a, b, ti, ii, nt, ri, ui, fi, ei, oi, si, hi, ci, v, li, ai, vi, yi, pi, ct, wi, bi, k, ki, di, gi, nr, lt, tr, at, ir, u, y, rr, vt, tt, ur, fr, c, i = window.kendo = window.kendo || {
            cultures: {}
        },
        s = n.extend,
        it = n.each,
        ru = n.isArray,
        yt = n.proxy,
        rt = n.noop,
        d = Math,
        ut = window.JSON || {},
        r = {},
        ft = /%/,
        uu = /\{(\d+)(:[^\}]+)?\}/g,
        fu = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
        eu = /^(\+|-?)\d+(\.?)\d*$/,
        h = "function",
        e = "string",
        l = "number",
        p = "object",
        et = "null",
        er = "boolean",
        ot = "undefined",
        or = {},
        sr = {},
        pt = [].slice,
        w = window.Globalize;
        i.version = "2014.1.416";
        g.extend = function(n) {
            var t, r, u = function() {},
            f = this,
            i = n && n.init ? n.init: function() {
                f.apply(this, arguments)
            };
            u.prototype = f.prototype;
            r = i.fn = i.prototype = new u;
            for (t in n) r[t] = null != n[t] && n[t].constructor === Object ? s(!0, {},
            u.prototype[t], n[t]) : n[t];
            return r.constructor = i,
            i.extend = f.extend,
            i
        };
        g.prototype._initOptions = function(n) {
            this.options = bt({},
            this.options, n)
        };
        b = i.isFunction = function(n) {
            return "function" == typeof n
        };
        ti = function() {
            this._defaultPrevented = !0
        };
        ii = function() {
            return this._defaultPrevented === !0
        };
        nt = g.extend({
            init: function() {
                this._events = {}
            },
            bind: function(n, i, r) {
                var u, c, s, f, l, o = this,
                a = typeof n === e ? [n] : n,
                v = typeof i === h;
                if (i === t) {
                    for (u in n) o.bind(u, n[u]);
                    return o
                }
                for (u = 0, c = a.length; c > u; u++) n = a[u],
                f = v ? i: i[n],
                f && (r && (s = f, f = function() {
                    o.unbind(n, f);
                    s.apply(o, arguments)
                },
                f.original = s), l = o._events[n] = o._events[n] || [], l.push(f));
                return o
            },
            one: function(n, t) {
                return this.bind(n, t, !0)
            },
            first: function(n, t) {
                for (var r, o, u = this,
                s = typeof n === e ? [n] : n, c = typeof t === h, i = 0, f = s.length; f > i; i++) n = s[i],
                r = c ? t: t[n],
                r && (o = u._events[n] = u._events[n] || [], o.unshift(r));
                return u
            },
            trigger: function(n, t) {
                var r, f, u = this,
                i = u._events[n];
                if (i) {
                    for (t = t || {},
                    t.sender = u, t._defaultPrevented = !1, t.preventDefault = ti, t.isDefaultPrevented = ii, i = i.slice(), r = 0, f = i.length; f > r; r++) i[r].call(u, t);
                    return t._defaultPrevented === !0
                }
                return ! 1
            },
            unbind: function(n, i) {
                var r, f = this,
                u = f._events[n];
                if (n === t) f._events = {};
                else if (u) if (i) for (r = u.length - 1; r >= 0; r--)(u[r] === i || u[r].original === i) && u.splice(r, 1);
                else f._events[n] = [];
                return f
            }
        });
        ri = /^\w+/;
        ui = /\$\{([^}]*)\}/g;
        fi = /\\\}/g;
        ei = /__CURLY__/g;
        oi = /\\#/g;
        si = /__SHARP__/g;
        hi = ["", "0", "00", "000", "0000"];
        a = {
            paramName: "data",
            useWithBlock: !0,
            render: function(n, t) {
                for (var u = "",
                i = 0,
                r = t.length; r > i; i++) u += n(t[i]);
                return u
            },
            compile: function(t, r) {
                var o, e, f, h = s({},
                this, r),
                c = h.paramName,
                a = c.match(ri)[0],
                l = h.useWithBlock,
                u = "var o,e=kendo.htmlEncode;";
                if (b(t)) return 2 === t.length ?
                function(i) {
                    return t(n, {
                        data: i
                    }).join("")
                }: t;
                for (u += l ? "with(" + c + "){": "", u += "o=", e = t.replace(fi, "__CURLY__").replace(ui, "#=e($1)#").replace(ei, "}").replace(oi, "__SHARP__").split("#"), f = 0; e.length > f; f++) u += hr(e[f], f % 2 == 0);
                u += l ? ";}": ";";
                u += "return o;";
                u = u.replace(si, "#");
                try {
                    return o = Function(a, u),
                    o._slotCount = Math.floor(e.length / 2),
                    o
                } catch(v) {
                    throw Error(i.format("Invalid template:'{0}' Generated code:'{1}'", t, u));
                }
            }
        },
        function() {
            function u(n) {
                return o.lastIndex = 0,
                o.test(n) ? '"' + n.replace(o,
                function(n) {
                    var t = s[n];
                    return typeof t === e ? t: "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice( - 4)
                }) + '"': '"' + n + '"'
            }
            function i(f, o) {
                var a, w, v, k, y, b, d = n,
                s = o[f];
                if (s && typeof s === p && typeof s.toJSON === h && (s = s.toJSON(f)), typeof t === h && (s = t.call(o, f, s)), b = typeof s, b === e) return u(s);
                if (b === l) return isFinite(s) ? s + "": et;
                if (b === er || b === et) return s + "";
                if (b === p) {
                    if (!s) return et;
                    if (n += r, y = [], "[object Array]" === c.apply(s)) {
                        for (k = s.length, a = 0; k > a; a++) y[a] = i(a, s) || et;
                        return v = 0 === y.length ? "[]": n ? "[\n" + n + y.join(",\n" + n) + "\n" + d + "]": "[" + y.join(",") + "]",
                        n = d,
                        v
                    }
                    if (t && typeof t === p) for (k = t.length, a = 0; k > a; a++) typeof t[a] === e && (w = t[a], v = i(w, s), v && y.push(u(w) + (n ? ": ": ":") + v));
                    else for (w in s) Object.hasOwnProperty.call(s, w) && (v = i(w, s), v && y.push(u(w) + (n ? ": ": ":") + v));
                    return v = 0 === y.length ? "{}": n ? "{\n" + n + y.join(",\n" + n) + "\n" + d + "}": "{" + y.join(",") + "}",
                    n = d,
                    v
                }
            }
            var n, r, t, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            c = {}.toString;
            typeof Date.prototype.toJSON !== h && (Date.prototype.toJSON = function() {
                var n = this;
                return isFinite(n.valueOf()) ? f(n.getUTCFullYear(), 4) + "-" + f(n.getUTCMonth() + 1) + "-" + f(n.getUTCDate()) + "T" + f(n.getUTCHours()) + ":" + f(n.getUTCMinutes()) + ":" + f(n.getUTCSeconds()) + "Z": null
            },
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            typeof ut.stringify !== h && (ut.stringify = function(u, f, o) {
                var s;
                if (n = "", r = "", typeof o === l) for (s = 0; o > s; s += 1) r += " ";
                else typeof o === e && (r = o);
                if (t = f, f && typeof f !== h && (typeof f !== p || typeof f.length !== l)) throw Error("JSON.stringify");
                return i("", {
                    "": u
                })
            })
        } (),
        function() {
            function v(n) {
                if (n) {
                    if (n.numberFormat) return n;
                    if (typeof n === e) {
                        var t = i.cultures;
                        return t[n] || t[n.split("-")[0]] || null
                    }
                    return null
                }
                return null
            }
            function y(n) {
                return n && (n = v(n)),
                n || i.cultures.current
            }
            function k(n) {
                n.groupSizes = n.groupSize;
                n.percent.groupSizes = n.percent.groupSize;
                n.currency.groupSizes = n.currency.groupSize
            }
            function g(n, i, r) {
                r = y(r);
                var u = r.calendars.standard,
                e = u.days,
                o = u.months;
                return i = u.patterns[i] || i,
                i.replace(tt,
                function(i) {
                    var r;
                    return "d" === i ? r = n.getDate() : "dd" === i ? r = f(n.getDate()) : "ddd" === i ? r = e.namesAbbr[n.getDay()] : "dddd" === i ? r = e.names[n.getDay()] : "M" === i ? r = n.getMonth() + 1 : "MM" === i ? r = f(n.getMonth() + 1) : "MMM" === i ? r = o.namesAbbr[n.getMonth()] : "MMMM" === i ? r = o.names[n.getMonth()] : "yy" === i ? r = f(n.getFullYear() % 100) : "yyyy" === i ? r = f(n.getFullYear(), 4) : "h" === i ? r = n.getHours() % 12 || 12 : "hh" === i ? r = f(n.getHours() % 12 || 12) : "H" === i ? r = n.getHours() : "HH" === i ? r = f(n.getHours()) : "m" === i ? r = n.getMinutes() : "mm" === i ? r = f(n.getMinutes()) : "s" === i ? r = n.getSeconds() : "ss" === i ? r = f(n.getSeconds()) : "f" === i ? r = d.floor(n.getMilliseconds() / 100) : "ff" === i ? (r = n.getMilliseconds(), r > 99 && (r = d.floor(r / 10)), r = f(r)) : "fff" === i ? r = f(n.getMilliseconds(), 3) : "tt" === i && (r = n.getHours() < 12 ? u.AM[0] : u.PM[0]),
                    r !== t ? r: i.slice(1, i.length - 1)
                })
            }
            function nt(n, i, f) {
                f = y(f);
                var vt, ft, ot, yt, bt, k, w, nt, ei, e, tt, d, kt, ri, g, v, l, pt, dt, ui, gt, fi, ct, c = f.numberFormat,
                st = c.groupSize[0],
                lt = c[a],
                wt = c[u],
                at = c.decimals,
                ni = c.pattern[0],
                ti = [],
                et = 0 > n,
                ii = r,
                p = r,
                ht = -1;
                if (n === t) return r;
                if (!isFinite(n)) return n;
                if (!i) return f.name.length ? n.toLocaleString() : "" + n;
                if (bt = it.exec(i)) {
                    if (i = bt[1].toLowerCase(), ft = "c" === i, ot = "p" === i, (ft || ot) && (c = ft ? c.currency: c.percent, st = c.groupSize[0], lt = c[a], wt = c[u], at = c.decimals, vt = c.symbol, ni = c.pattern[et ? 0 : 1]), yt = bt[2], yt && (at = +yt), "e" === i) return yt ? n.toExponential(at) : n.toExponential();
                    if (ot && (n *= 100), n = o(n, at), et = 0 > n, n = n.split(u), k = n[0], w = n[1], et && (k = k.substring(1)), p = k, nt = k.length, nt >= st) for (p = r, e = 0; nt > e; e++) e > 0 && (nt - e) % st == 0 && (p += lt),
                    p += k.charAt(e);
                    if (w && (p += wt + w), "n" === i && !et) return p;
                    for (n = r, e = 0, tt = ni.length; tt > e; e++) d = ni.charAt(e),
                    n += "n" === d ? p: "$" === d || "%" === d ? vt: d;
                    return n
                }
                if (et && (n = -n), (i.indexOf("'") > -1 || i.indexOf('"') > -1 || i.indexOf("\\") > -1) && (i = i.replace(rt,
                function(n) {
                    var t = n.charAt(0).replace("\\", ""),
                    i = n.slice(1).replace(t, "");
                    return ti.push(i),
                    b
                })), i = i.split(";"), et && i[1]) i = i[1],
                ri = !0;
                else if (0 === n) {
                    if (i = i[2] || i[0], -1 == i.indexOf(s) && -1 == i.indexOf(h)) return i
                } else i = i[0];
                if (ui = i.indexOf("%"), gt = i.indexOf("$"), ot = -1 != ui, ft = -1 != gt, ot && (n *= 100), ft && "\\" === i[gt - 1] && (i = i.split("\\").join(""), ft = !1), (ft || ot) && (c = ft ? c.currency: c.percent, st = c.groupSize[0], lt = c[a], wt = c[u], at = c.decimals, vt = c.symbol), kt = i.indexOf(a) > -1, kt && (i = i.replace(ut, r)), g = i.indexOf(u), tt = i.length, -1 != g ? (w = ("" + n).split("e"), w = w[1] ? o(n, Math.abs(w[1])) : w[0], w = w.split(u)[1] || r, l = i.lastIndexOf(h) - g, v = i.lastIndexOf(s) - g, pt = l > -1, dt = v > -1, e = w.length, pt || dt || (i = i.substring(0, g) + i.substring(g + 1), tt = i.length, g = -1, e = 0), pt && l > v ? e = l: v > l && (dt && e > v ? e = v: pt && l > e && (e = l)), e > -1 && (n = o(n, e))) : n = o(n), v = i.indexOf(s), fi = l = i.indexOf(h), ht = -1 == v && -1 != l ? l: -1 != v && -1 == l ? v: v > l ? l: v, v = i.lastIndexOf(s), l = i.lastIndexOf(h), ct = -1 == v && -1 != l ? l: -1 != v && -1 == l ? v: v > l ? v: l, ht == tt && (ct = ht), -1 != ht) {
                    if (p = ("" + n).split(u), k = p[0], w = p[1] || r, nt = k.length, ei = w.length, et && -1 * n >= 0 && (et = !1), kt) if (nt === st && g - fi > nt) k = lt + k;
                    else if (nt > st) {
                        for (p = r, e = 0; nt > e; e++) e > 0 && (nt - e) % st == 0 && (p += lt),
                        p += k.charAt(e);
                        k = p
                    }
                    for (n = i.substring(0, ht), et && !ri && (n += "-"), e = ht; tt > e; e++) {
                        if (d = i.charAt(e), -1 == g) {
                            if (nt > ct - e) {
                                n += k;
                                break
                            }
                        } else if ( - 1 != l && e > l && (ii = r), nt >= g - e && g - e > -1 && (n += k, e = g), g === e) {
                            n += (w ? wt: r) + w;
                            e += ct - g + 1;
                            continue
                        }
                        d === h ? (n += d, ii = d) : d === s && (n += ii)
                    }
                    if (ct >= ht && (n += i.substring(ct + 1)), ft || ot) {
                        for (p = r, e = 0, tt = n.length; tt > e; e++) d = n.charAt(e),
                        p += "$" === d || "%" === d ? vt: d;
                        n = p
                    }
                    if (tt = ti.length) for (e = 0; tt > e; e++) n = n.replace(b, ti[e])
                }
                return n
            }
            var o, c, tt = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|"[^"]*"|'[^']*'/g,
            it = /^(n|c|p|e)(\d*)$/i,
            rt = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
            ut = /\,/g,
            r = "",
            u = ".",
            a = ",",
            s = "#",
            h = "0",
            b = "??",
            p = "en-US",
            ft = {}.toString;
            i.cultures["en-US"] = {
                name: p,
                numberFormat: {
                    pattern: ["-n"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    percent: {
                        pattern: ["-n %", "n %"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "%"
                    },
                    currency: {
                        pattern: ["($n)", "$n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "$"
                    }
                },
                calendars: {
                    standard: {
                        days: {
                            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        },
                        months: {
                            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        },
                        AM: ["AM", "am", "AM"],
                        PM: ["PM", "pm", "PM"],
                        patterns: {
                            d: "M/d/yyyy",
                            D: "dddd, MMMM dd, yyyy",
                            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                            g: "M/d/yyyy h:mm tt",
                            G: "M/d/yyyy h:mm:ss tt",
                            m: "MMMM dd",
                            M: "MMMM dd",
                            s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                            t: "h:mm tt",
                            T: "h:mm:ss tt",
                            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                            y: "MMMM, yyyy",
                            Y: "MMMM, yyyy"
                        },
                        "/": "/",
                        ":": ":",
                        firstDay: 0,
                        twoDigitYearMax: 2029
                    }
                }
            };
            i.culture = function(n) {
                var r, u = i.cultures;
                return n === t ? u.current: (r = v(n) || u[p], r.calendar = r.calendars.standard, u.current = r, w && k(r.numberFormat), t)
            };
            i.findCulture = v;
            i.getCulture = y;
            i.culture(p);
            o = function(n, t) {
                return t = t || 0,
                n = ("" + n).split("e"),
                n = Math.round( + (n[0] + "e" + (n[1] ? +n[1] + t: t))),
                n = ("" + n).split("e"),
                n = +(n[0] + "e" + (n[1] ? +n[1] - t: -t)),
                n.toFixed(t)
            };
            c = function(n, i, r) {
                if (i) {
                    if ("[object Date]" === ft.call(n)) return g(n, i, r);
                    if (typeof n === l) return nt(n, i, r)
                }
                return n !== t ? n: ""
            };
            w && (c = function(t, i, r) {
                return n.isPlainObject(r) && (r = r.name),
                w.format(t, i, r)
            });
            i.format = function(n) {
                var t = arguments;
                return n.replace(uu,
                function(n, i, r) {
                    var u = t[parseInt(i, 10) + 1];
                    return c(u, r ? r.substring(1) : "")
                })
            };
            i._extractFormat = function(n) {
                return "{0:" === n.slice(0, 3) && (n = n.slice(3, n.length - 1)),
                n
            };
            i._activeElement = function() {
                try {
                    return document.activeElement
                } catch(n) {
                    return document.documentElement.activeElement
                }
            };
            i._round = o;
            i.toString = c
        } (),
        function() {
            function r(n, t, i) {
                return ! (n >= t && i >= n)
            }
            function c(n) {
                return n.charAt(0)
            }
            function u(t) {
                return n.map(t, c)
            }
            function a(n, t) {
                t || 23 !== n.getHours() || n.setHours(n.getHours() + 2)
            }
            function v(n) {
                for (var t = 0,
                r = n.length,
                i = []; r > t; t++) i[t] = (n[t] + "").toLowerCase();
                return i
            }
            function f(n) {
                var t, i = {};
                for (t in n) i[t] = v(n[t]);
                return i
            }
            function y(n, i, e) {
                if (!n) return null;
                var c, o, dt, yt, pt, wt, gt, d, ht, ct, lt, ft, ni, et, y = function(n) {
                    for (var t = 0; i[rt] === n;) t++,
                    rt++;
                    return t > 0 && (rt -= 1),
                    t
                },
                nt = function(t) {
                    var r = s[t] || RegExp("^\\d{1," + t + "}"),
                    i = n.substr(w, t).match(r);
                    return i ? (i = i[0], w += i.length, parseInt(i, 10)) : null
                },
                at = function(t, i) {
                    for (var f, e, r, u = 0,
                    o = t.length; o > u; u++) if (f = t[u], e = f.length, r = n.substr(w, e), i && (r = r.toLowerCase()), r == f) return w += e,
                    u + 1;
                    return null
                },
                ot = function() {
                    var t = !1;
                    return n.charAt(w) === i[rt] && (w++, t = !0),
                    t
                },
                v = e.calendars.standard,
                l = null,
                tt = null,
                p = null,
                h = null,
                it = null,
                ut = null,
                g = null,
                rt = 0,
                w = 0,
                bt = !1,
                kt = new Date,
                vt = v.twoDigitYearMax || 2029,
                st = kt.getFullYear();
                for (i || (i = "d"), yt = v.patterns[i], yt && (i = yt), i = i.split(""), dt = i.length; dt > rt; rt++) if (c = i[rt], bt)"'" === c ? bt = !1 : ot();
                else if ("d" === c) {
                    if (o = y("d"), v._lowerDays || (v._lowerDays = f(v.days)), p = 3 > o ? nt(2) : at(v._lowerDays[3 == o ? "namesAbbr": "names"], !0), null === p || r(p, 1, 31)) return null
                } else if ("M" === c) {
                    if (o = y("M"), v._lowerMonths || (v._lowerMonths = f(v.months)), tt = 3 > o ? nt(2) : at(v._lowerMonths[3 == o ? "namesAbbr": "names"], !0), null === tt || r(tt, 1, 12)) return null;
                    tt -= 1
                } else if ("y" === c) {
                    if (o = y("y"), l = nt(o), null === l) return null;
                    2 == o && ("string" == typeof vt && (vt = st + parseInt(vt, 10)), l = st - st % 100 + l, l > vt && (l -= 100))
                } else if ("h" === c) {
                    if (y("h"), h = nt(2), 12 == h && (h = 0), null === h || r(h, 0, 11)) return null
                } else if ("H" === c) {
                    if (y("H"), h = nt(2), null === h || r(h, 0, 23)) return null
                } else if ("m" === c) {
                    if (y("m"), it = nt(2), null === it || r(it, 0, 59)) return null
                } else if ("s" === c) {
                    if (y("s"), ut = nt(2), null === ut || r(ut, 0, 59)) return null
                } else if ("f" === c) {
                    if (o = y("f"), et = n.substr(w, o).match(s[3]), g = nt(o), null !== g && (et = et[0].length, 3 > et && (g *= Math.pow(10, 3 - et)), o > 3 && (g = parseInt(("" + g).substring(0, 3), 10))), null === g || r(g, 0, 999)) return null
                } else if ("t" === c) {
                    if (o = y("t"), ht = v.AM, ct = v.PM, 1 === o && (ht = u(ht), ct = u(ct)), pt = at(ct), !pt && !at(ht)) return null
                } else if ("z" === c) {
                    if (wt = !0, o = y("z"), "Z" === n.substr(w, 1)) {
                        if (!gt) return null;
                        ot();
                        continue
                    }
                    if ((d = n.substr(w, 6).match(o > 2 ? k: b), !d) || (d = d[0], w = d.length, d = d.split(":"), lt = parseInt(d[0], 10), r(lt, -12, 13)) || o > 2 && (ft = parseInt(d[1], 10), isNaN(ft) || r(ft, 0, 59))) return null
                } else if ("T" === c) gt = ot();
                else if ("'" === c) bt = !0,
                ot();
                else if (!ot()) return null;
                return ni = null !== h || null !== it || ut || null,
                null === l && null === tt && null === p && ni ? (l = st, tt = kt.getMonth(), p = kt.getDate()) : (null === l && (l = st), null === p && (p = 1)),
                pt && 12 > h && (h += 12),
                wt ? (lt && (h += -lt), ft && (it += -ft), n = new Date(Date.UTC(l, tt, p, h, it, ut, g))) : (n = new Date(l, tt, p, h, it, ut, g), a(n, h)),
                100 > l && n.setFullYear(l),
                n.getDate() !== p && wt === t ? null: n
            }
            var e = /\u00A0/g,
            p = /[eE][\-+]?[0-9]+/,
            b = /[+|\-]\d{1,2}/,
            k = /[+|\-]\d{1,2}:\d{2}/,
            d = /^\/Date\((.*?)\)\/$/,
            g = /[+-]/,
            o = ["G", "g", "d", "F", "D", "y", "m", "T", "t"],
            s = {
                2 : /^\d{1,2}/,
                3 : /^\d{1,3}/,
                4 : /^\d{4}/
            },
            h = {}.toString;
            i.parseDate = function(n, t, r) {
                var f, u, s, c, e;
                if ("[object Date]" === h.call(n)) return n;
                if (f = 0, u = null, n && 0 === n.indexOf("/D") && (u = d.exec(n))) return e = u = u[1],
                u = parseInt(u, 10),
                e = e.substring(1).split(g)[1],
                e && (u -= parseInt(e, 10) * i.date.MS_PER_MINUTE),
                new Date(u);
                if (r = i.getCulture(r), !t) {
                    for (t = [], c = r.calendar.patterns, s = o.length; s > f; f++) t[f] = c[o[f]];
                    f = 0;
                    t = ["yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM/dd", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"].concat(t)
                }
                for (t = ru(t) ? t: [t], s = t.length; s > f; f++) if (u = y(n, t[f], r)) return u;
                return u
            };
            i.parseInt = function(n, t) {
                var r = i.parseFloat(n, t);
                return r && (r = 0 | r),
                r
            };
            i.parseFloat = function(n, t, r) {
                if (!n && 0 !== n) return null;
                if (typeof n === l) return n;
                n = "" + n;
                t = i.getCulture(t);
                var f, h, u = t.numberFormat,
                c = u.percent,
                a = u.currency,
                s = a.symbol,
                v = c.symbol,
                o = n.indexOf("-");
                return p.test(n) ? (n = parseFloat(n.replace(u["."], ".")), isNaN(n) && (n = null), n) : o > 0 ? null: (o = o > -1, n.indexOf(s) > -1 || r && r.toLowerCase().indexOf("c") > -1 ? (u = a, f = u.pattern[0].replace("$", s).split("n"), n.indexOf(f[0]) > -1 && n.indexOf(f[1]) > -1 && (n = n.replace(f[0], "").replace(f[1], ""), o = !0)) : n.indexOf(v) > -1 && (h = !0, u = c, s = v), n = n.replace("-", "").replace(s, "").replace(e, " ").split(u[","].replace(e, " ")).join("").replace(u["."], "."), n = parseFloat(n), isNaN(n) ? n = null: o && (n *= -1), n && h && (n /= 100), n)
            };
            w && (i.parseDate = function(n, t, i) {
                return "[object Date]" === h.call(n) ? n: w.parseDate(n, t, i)
            },
            i.parseFloat = function(i, r) {
                return typeof i === l ? i: i === t || null === i ? null: (n.isPlainObject(r) && (r = r.name), i = w.parseFloat(i, r), isNaN(i) ? null: i)
            })
        } (),
        function() {
            var s, f, h, o, u, i, c;
            r.scrollbar = function() {
                var t, n = document.createElement("div");
                return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both",
                n.innerHTML = "&nbsp;",
                document.body.appendChild(n),
                t = n.offsetWidth - n.scrollWidth,
                document.body.removeChild(n),
                t
            };
            r.isRtl = function(t) {
                return n(t).closest(".k-rtl").length > 0
            };
            s = document.createElement("table");
            try {
                s.innerHTML = "<tr><td><\/td><\/tr>";
                r.tbodyInnerHtml = !0
            } catch(l) {
                r.tbodyInnerHtml = !1
            }
            r.touch = "ontouchstart" in window;
            r.msPointers = window.MSPointerEvent;
            r.pointers = window.PointerEvent;
            f = r.transitions = !1;
            h = r.transforms = !1;
            o = "HTMLElement" in window ? HTMLElement.prototype: [];
            r.hasHW3D = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style;
            it(["Moz", "webkit", "O", "ms"],
            function() {
                var n, i = "" + this,
                r = typeof s.style[i + "Transition"] === e;
                return r || typeof s.style[i + "Transform"] === e ? (n = i.toLowerCase(), h = {
                    css: "ms" != n ? "-" + n + "-": "",
                    prefix: i,
                    event: "o" === n || "webkit" === n ? n: ""
                },
                r && (f = h, f.event = f.event ? f.event + "TransitionEnd": "transitionend"), !1) : t
            });
            s = null;
            r.transforms = h;
            r.transitions = f;
            r.devicePixelRatio = window.devicePixelRatio === t ? 1 : window.devicePixelRatio;
            try {
                r.screenWidth = window.outerWidth || window.screen ? window.screen.availWidth: window.innerWidth;
                r.screenHeight = window.outerHeight || window.screen ? window.screen.availHeight: window.innerHeight
            } catch(l) {
                r.screenWidth = window.screen.availWidth;
                r.screenHeight = window.screen.availHeight
            }
            r.detectOS = function(n) {
                var u, i, t = !1,
                f = [],
                o = !/mobile safari/i.test(n),
                e = {
                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                },
                s = {
                    ios: /^i(phone|pad|pod)$/i,
                    android: /^android|fire$/i,
                    blackberry: /^blackberry|playbook/i,
                    windows: /windows/,
                    wp: /wp/,
                    flat: /sailfish|ffos|tizen/i,
                    meego: /meego/
                },
                h = {
                    tablet: /playbook|ipad|fire/i
                },
                c = {
                    omini: /Opera\sMini/i,
                    omobile: /Opera\sMobi/i,
                    firefox: /Firefox|Fennec/i,
                    mobilesafari: /version\/.*safari/i,
                    chrome: /chrome|crios/i,
                    webkit: /webkit/i,
                    ie: /MSIE|Windows\sPhone/i
                };
                for (i in e) if (e.hasOwnProperty(i) && (f = n.match(e[i]))) {
                    if ("windows" == i && "plugins" in navigator) return ! 1;
                    t = {};
                    t.device = i;
                    t.tablet = st(i, h, !1);
                    t.browser = st(n, c, "default");
                    t.name = st(i, s);
                    t[t.name] = !0;
                    t.majorVersion = f[2];
                    t.minorVersion = f[3].replace("_", ".");
                    u = t.minorVersion.replace(".", "").substr(0, 2);
                    t.flatVersion = t.majorVersion + u + Array(3 - (3 > u.length ? u.length: 2)).join("0");
                    t.cordova = typeof PhoneGap !== ot || typeof cordova !== ot;
                    t.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || t.cordova;
                    t.android && (1.5 > r.devicePixelRatio && 400 > t.flatVersion || o) && (r.screenWidth > 800 || r.screenHeight > 800) && (t.tablet = i);
                    break
                }
                return t
            };
            u = r.mobileOS = r.detectOS(navigator.userAgent);
            r.wpDevicePixelRatio = u.wp ? screen.width / 320 : 0;
            r.kineticScrollNeeded = u && (r.touch || r.msPointers || r.pointers);
            r.hasNativeScrolling = !1; (u.ios || u.android && u.majorVersion > 2 || u.wp) && (r.hasNativeScrolling = u);
            r.mouseAndTouchPresent = r.touch && !(r.mobileOS.ios || r.mobileOS.android);
            r.detectBrowser = function(n) {
                var i, t = !1,
                r = [],
                u = {
                    webkit: /(chrome)[ \/]([\w.]+)/i,
                    safari: /(webkit)[ \/]([\w.]+)/i,
                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                };
                for (i in u) if (u.hasOwnProperty(i) && (r = n.match(u[i]))) {
                    t = {};
                    t[i] = !0;
                    t[r[1].toLowerCase()] = !0;
                    t.version = parseInt(document.documentMode || r[2], 10);
                    break
                }
                return t
            };
            r.browser = r.detectBrowser(navigator.userAgent);
            r.zoomLevel = function() {
                try {
                    return r.touch ? document.documentElement.clientWidth / window.innerWidth: r.browser.msie && r.browser.version >= 10 ? (top || window).document.documentElement.offsetWidth / (top || window).innerWidth: 1
                } catch(n) {
                    return 1
                }
            };
            r.cssBorderSpacing = t !== document.documentElement.style.borderSpacing && !(r.browser.msie && 8 > r.browser.version),
            function(t) {
                var i = "",
                u = n(document.documentElement),
                f = parseInt(t.version, 10);
                t.msie ? i = "ie": t.mozilla ? i = "ff": t.safari ? i = "safari": t.webkit ? i = "webkit": t.opera && (i = "opera");
                i && (i = "k-" + i + " k-" + i + f);
                r.mobileOS && (i += " k-mobile");
                u.addClass(i)
            } (r.browser);
            r.eventCapture = document.documentElement.addEventListener;
            i = document.createElement("input");
            r.placeholder = "placeholder" in i;
            r.propertyChangeEvent = "onpropertychange" in i;
            r.input = function() {
                for (var n, r = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], e = r.length, u = "test", f = {},
                t = 0; e > t; t++) n = r[t],
                i.setAttribute("type", n),
                i.value = u,
                f[n.replace("-", "")] = "text" !== i.type && i.value !== u;
                return f
            } ();
            i.style.cssText = "float:left;";
            r.cssFloat = !!i.style.cssFloat;
            i = null;
            r.stableSort = function() {
                for (var t = [{
                    index: 0,
                    field: "b"
                }], n = 1; 513 > n; n++) t.push({
                    index: n,
                    field: "a"
                });
                return t.sort(function(n, t) {
                    return n.field > t.field ? 1 : t.field > n.field ? -1 : 0
                }),
                1 === t[0].index
            } ();
            r.matchesSelector = o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.matchesSelector ||
            function(t) {
                for (var i = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : n(t), r = i.length; r--;) if (i[r] == this) return ! 0;
                return ! 1
            };
            r.pushState = window.history && window.history.pushState;
            c = document.documentMode;
            r.hashChange = "onhashchange" in window && !(r.browser.msie && (!c || 8 >= c))
        } ();
        ci = {
            left: {
                reverse: "right"
            },
            right: {
                reverse: "left"
            },
            down: {
                reverse: "up"
            },
            up: {
                reverse: "down"
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out"
            },
            out: {
                reverse: "in"
            }
        };
        v = {};
        n.extend(v, {
            enabled: !0,
            Element: function(t) {
                this.element = n(t)
            },
            promise: function(n, t) {
                n.is(":visible") || n.css({
                    display: n.data("olddisplay") || "block"
                }).css("display");
                t.hide && n.data("olddisplay", n.css("display")).hide();
                t.init && t.init();
                t.completeCallback && t.completeCallback(n);
                n.dequeue()
            },
            disable: function() {
                this.enabled = !1;
                this.promise = this.promiseShim
            },
            enable: function() {
                this.enabled = !0;
                this.promise = this.animatedPromise
            }
        });
        v.promiseShim = v.promise;
        "kendoAnimate" in n.fn || s(n.fn, {
            kendoStop: function(n, t) {
                return this.stop(n, t)
            },
            kendoAnimate: function(n, t, i, r) {
                return gt(this, n, t, i, r)
            },
            kendoAddClass: function(n, t) {
                return i.toggleClass(this, n, t, !0)
            },
            kendoRemoveClass: function(n, t) {
                return i.toggleClass(this, n, t, !1)
            },
            kendoToggleClass: function(n, t, r) {
                return i.toggleClass(this, n, t, r)
            }
        });
        li = /&/g;
        ai = /</g;
        vi = /"/g;
        yi = /'/g;
        pi = />/g;
        ct = function(n) {
            return n.target
        };
        r.touch && (ct = function(n) {
            var t = "originalEvent" in n ? n.originalEvent.changedTouches: "changedTouches" in n ? n.changedTouches: null;
            return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : n.target
        },
        it(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"],
        function(t, i) {
            n.fn[i] = function(n) {
                return this.bind(i, n)
            }
        }));
        r.touch ? r.mobileOS ? (r.mousedown = "touchstart", r.mouseup = "touchend", r.mousemove = "touchmove", r.mousecancel = "touchcancel", r.click = "touchend", r.resize = "orientationchange") : (r.mousedown = "mousedown touchstart", r.mouseup = "mouseup touchend", r.mousemove = "mousemove touchmove", r.mousecancel = "mouseleave touchcancel", r.click = "click", r.resize = "resize") : r.pointers ? (r.mousemove = "pointermove", r.mousedown = "pointerdown", r.mouseup = "pointerup", r.mousecancel = "pointercancel", r.click = "pointerup", r.resize = "orientationchange resize") : r.msPointers ? (r.mousemove = "MSPointerMove", r.mousedown = "MSPointerDown", r.mouseup = "MSPointerUp", r.mousecancel = "MSPointerCancel", r.click = "MSPointerUp", r.resize = "orientationchange resize") : (r.mousemove = "mousemove", r.mousedown = "mousedown", r.mouseup = "mouseup", r.mousecancel = "mouseleave", r.click = "click", r.resize = "resize");
        wi = function(n, t) {
            for (var r, i, o = t || "d",
            e = 1,
            u = 0,
            f = n.length; f > u; u++) i = n[u],
            "" !== i && (r = i.indexOf("["), 0 !== r && ( - 1 == r ? i = "." + i: (e++, i = "." + i.substring(0, r) + " || {})" + i.substring(r))), e++, o += i + (f - 1 > u ? " || {})": ")"));
            return Array(e).join("(") + o
        };
        bi = /^([a-z]+:)?\/\//i;
        s(i, {
            ui: i.ui || {},
            fx: i.fx || wr,
            effects: i.effects || v,
            mobile: i.mobile || {},
            data: i.data || {},
            dataviz: i.dataviz || {
                ui: {
                    roles: {}
                }
            },
            keys: {
                INSERT: 45,
                DELETE: 46,
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                END: 35,
                HOME: 36,
                SPACEBAR: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                F2: 113,
                F10: 121,
                F12: 123,
                NUMPAD_PLUS: 107,
                NUMPAD_MINUS: 109,
                NUMPAD_DOT: 110
            },
            support: i.support || r,
            animate: i.animate || gt,
            ns: "",
            attr: function(n) {
                return "data-" + i.ns + n
            },
            getShadows: wt,
            wrap: cr,
            deepExtend: bt,
            getComputedStyles: ar,
            size: vr,
            toCamelCase: dt,
            toHyphens: lr,
            getOffset: i.getOffset || yr,
            parseEffects: i.parseEffects || pr,
            toggleClass: i.toggleClass || kr,
            directions: i.directions || ci,
            Observable: nt,
            Class: g,
            Template: a,
            template: yt(a.compile, a),
            render: yt(a.render, a),
            stringify: yt(ut.stringify, ut),
            eventTarget: ct,
            htmlEncode: dr,
            isLocalUrl: function(n) {
                return n && !bi.test(n)
            },
            expr: function(n, t, i) {
                return n = n || "",
                typeof t == e && (i = t, t = !1),
                i = i || "d",
                n && "[" !== n.charAt(0) && (n = "." + n),
                n = t ? wi(n.split("."), i) : i + n
            },
            getter: function(n, t) {
                return or[n] = or[n] || Function("d", "return " + i.expr(n, t))
            },
            setter: function(n) {
                return sr[n] = sr[n] || Function("d,value", i.expr(n) + "=value")
            },
            accessor: function(n) {
                return {
                    get: i.getter(n),
                    set: i.setter(n)
                }
            },
            guid: function() {
                for (var t, i = "",
                n = 0; 32 > n; n++) t = 16 * d.random() | 0,
                (8 == n || 12 == n || 16 == n || 20 == n) && (i += "-"),
                i += (12 == n ? 4 : 16 == n ? 3 & t | 8 : t).toString(16);
                return i
            },
            roleSelector: function(n) {
                return n.replace(/(\S+)/g, "[" + i.attr("role") + "=$1],").slice(0, -1)
            },
            triggeredByInput: function(n) {
                return /^(label|input|textarea|select)$/i.test(n.target.tagName)
            },
            logToConsole: function(n) {
                var i = window.console;
                t !== i && i.log && i.log(n)
            }
        });
        k = nt.extend({
            init: function(n, t) {
                var r = this;
                r.element = i.jQuery(n).handler(r);
                nt.fn.init.call(r);
                t = r.options = s(!0, {},
                r.options, t);
                r.element.attr(i.attr("role")) || r.element.attr(i.attr("role"), (t.name || "").toLowerCase());
                r.element.data("kendo" + t.prefix + t.name, r);
                r.bind(r.events, t)
            },
            events: [],
            options: {
                prefix: ""
            },
            _hasBindingTarget: function() {
                return !! this.element[0].kendoBindingTarget
            },
            _tabindex: function(n) {
                n = n || this.wrapper;
                var i = this.element,
                t = "tabindex",
                r = n.attr(t) || i.attr(t);
                i.removeAttr(t);
                n.attr(t, isNaN(r) ? 0 : r)
            },
            setOptions: function(t) {
                this._setEvents(t);
                n.extend(this.options, t)
            },
            _setEvents: function(n) {
                for (var i, t = this,
                r = 0,
                u = t.events.length; u > r; r++) i = t.events[r],
                t.options[i] && n[i] && t.unbind(i, t.options[i]);
                t.bind(t.events, n)
            },
            resize: function(n) {
                var t = this.getSize(),
                i = this._size; (n || !i || t.width !== i.width || t.height !== i.height) && (this._resize(t), this.trigger("resize", t), this._size = t)
            },
            getSize: function() {
                return i.dimensions(this.element)
            },
            size: function(n) {
                return n ? (this.setSize(n), t) : this.getSize()
            },
            setSize: n.noop,
            _resize: n.noop,
            destroy: function() {
                var n = this;
                n.element.removeData("kendo" + n.options.prefix + n.options.name);
                n.element.removeData("handler");
                n.unbind()
            }
        });
        i.dimensions = function(n, t) {
            var i = n[0];
            return t && n.css(t),
            {
                width: i.offsetWidth,
                height: i.offsetHeight
            }
        };
        i.notify = rt;
        ki = /template$/i;
        di = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/;
        gi = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/;
        nr = /([A-Z])/g;
        i.initWidget = function(r, u, f) {
            var s, a, o, l, y, h, v, c;
            if (f ? f.roles && (f = f.roles) : f = i.ui.roles, r = r.nodeType ? r: r[0], h = r.getAttribute("data-" + i.ns + "role"), h && (o = -1 === h.indexOf(".") ? f[h] : i.getter(h)(window))) {
                for (c = ht(r, "dataSource"), u = n.extend({},
                ni(r, o.fn.options), u), c && (u.dataSource = typeof c === e ? i.getter(c)(window) : c), l = 0, y = o.fn.events.length; y > l; l++) a = o.fn.events[l],
                v = ht(r, a),
                v !== t && (u[a] = i.getter(v)(window));
                return s = n(r).data("kendo" + o.fn.options.prefix + o.fn.options.name),
                s ? s.setOptions(u) : s = new o(r, u),
                s
            }
        };
        i.rolesFromNamespaces = function(n) {
            var t, r, u = [];
            for (n[0] || (n = [i.ui, i.dataviz.ui]), t = 0, r = n.length; r > t; t++) u[t] = n[t].roles;
            return s.apply(null, [{}].concat(u.reverse()))
        };
        i.init = function(t) {
            var r = i.rolesFromNamespaces(pt.call(arguments, 1));
            n(t).find("[data-" + i.ns + "role]").addBack().each(function() {
                i.initWidget(this, {},
                r)
            })
        };
        i.destroy = function(t) {
            n(t).find("[data-" + i.ns + "role]").addBack().each(function() {
                var t = i.widgetInstance(n(this));
                t && t.destroy()
            })
        };
        i.resize = function(t) {
            var r, u = n(t).find("[data-" + i.ns + "role]").addBack().filter(nu);
            u.length && (r = n.makeArray(u), r.sort(gr), n.each(r,
            function() {
                var t = i.widgetInstance(n(this));
                t && t.resize()
            }))
        };
        i.parseOptions = ni;
        s(i.ui, {
            Widget: k,
            roles: {},
            progress: function(t, r) {
                var f, o, s, e, u = t.find(".k-loading-mask"),
                h = i.support,
                c = h.browser;
                r ? u.length || (f = h.isRtl(t), o = f ? "right": "left", e = t.scrollLeft(), s = c.webkit ? f ? t[0].scrollWidth - t.width() - 2 * e: 0 : 0, u = n("<div class='k-loading-mask'><span class='k-loading-text'>Loading...<\/span><div class='k-loading-image'/><div class='k-loading-color'/><\/div>").width("100%").height("100%").css("top", t.scrollTop()).css(o, Math.abs(e) + s).prependTo(t)) : u && u.remove()
            },
            plugin: function(r, u, f) {
                var s, o = r.fn.options.name;
                u = u || i.ui;
                f = f || "";
                u[o] = r;
                u.roles[o.toLowerCase()] = r;
                s = "getKendo" + f + o;
                o = "kendo" + f + o;
                n.fn[o] = function(u) {
                    var f, s = this;
                    return typeof u === e ? (f = pt.call(arguments, 1), this.each(function() {
                        var r, e, c = n.data(this, o);
                        if (!c) throw Error(i.format("Cannot call method '{0}' of {1} before it is initialized", u, o));
                        if (r = c[u], typeof r !== h) throw Error(i.format("Cannot find method '{0}' of {1}", u, o));
                        return e = r.apply(c, f),
                        e !== t ? (s = e, !1) : t
                    })) : this.each(function() {
                        new r(this, u)
                    }),
                    s
                };
                n.fn[s] = function() {
                    return this.data(o)
                }
            }
        });
        lt = {
            bind: function() {
                return this
            },
            nullObject: !0
        };
        tr = k.extend({
            init: function(n, t) {
                k.fn.init.call(this, n, t);
                this.element.autoApplyNS();
                this.wrapper = this.element;
                this.element.addClass("km-widget")
            },
            destroy: function() {
                k.fn.destroy.call(this);
                this.element.kendoDestroy()
            },
            options: {
                prefix: "Mobile"
            },
            events: [],
            view: function() {
                var n = this.element.closest(i.roleSelector("view splitview modalview drawer"));
                return i.widgetInstance(n, i.mobile.ui) || lt
            },
            viewHasNativeScrolling: function() {
                var n = this.view();
                return n && n.options.useNativeScrolling
            },
            container: function() {
                var n = this.element.closest(i.roleSelector("view layout modalview drawer"));
                return i.widgetInstance(n, i.mobile.ui) || lt
            }
        });
        s(i.mobile, {
            init: function(n) {
                i.init(n, i.mobile.ui, i.ui, i.dataviz.ui)
            },
            appLevelNativeScrolling: function() {
                return i.mobile.application && i.mobile.application.options && i.mobile.application.options.useNativeScrolling
            },
            ui: {
                Widget: tr,
                roles: {},
                plugin: function(n) {
                    i.ui.plugin(n, i.mobile.ui, "Mobile")
                }
            }
        });
        i.touchScroller = function(t, u) {
            return n(t).map(function(t, f) {
                return f = n(f),
                r.kineticScrollNeeded && i.mobile.ui.Scroller && !f.data("kendoMobileScroller") ? (f.kendoMobileScroller(u), f.data("kendoMobileScroller")) : !1
            })[0]
        };
        i.preventDefault = function(n) {
            n.preventDefault()
        };
        i.widgetInstance = function(n, t) {
            var u, e, o, s, r = n.data(i.ns + "role"),
            f = [];
            if (r) {
                if ("content" === r && (r = "scroller"), t) if (t[0]) for (u = 0, e = t.length; e > u; u++) f.push(t[u].roles[r]);
                else f.push(t.roles[r]);
                else f = [i.ui.roles[r], i.dataviz.ui.roles[r], i.mobile.ui.roles[r]];
                for (r.indexOf(".") >= 0 && (f = [i.getter(r)(window)]), u = 0, e = f.length; e > u; u++) if (o = f[u], o && (s = n.data("kendo" + o.fn.options.prefix + o.fn.options.name))) return s
            }
        };
        i.onResize = function(t) {
            var i = t;
            return r.mobileOS.android && (i = function() {
                setTimeout(t, 600)
            }),
            n(window).on(r.resize, i),
            i
        };
        i.unbindResize = function(t) {
            n(window).off(r.resize, t)
        };
        i.attrValue = function(n, t) {
            return n.data(i.ns + t)
        };
        i.days = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        };
        n.extend(n.expr[":"], {
            kendoFocusable: function(t) {
                var i = n.attr(t, "tabindex");
                return tu(t, !isNaN(i) && i > -1)
            }
        });
        at = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"];
        ir = "label, input, [data-rel=external]";
        u = {
            setupMouseMute: function() {
                var i, t = 0,
                f = at.length,
                e = document.documentElement;
                if (!u.mouseTrap && r.eventCapture) for (u.mouseTrap = !0, u.bustClick = !1, u.captureMouse = !1, i = function(t) {
                    u.captureMouse && ("click" === t.type ? u.bustClick && !n(t.target).is(ir) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
                }; f > t; t++) e.addEventListener(at[t], i, !0)
            },
            muteMouse: function(n) {
                u.captureMouse = !0;
                n.data.bustClick && (u.bustClick = !0);
                clearTimeout(u.mouseTrapTimeoutID)
            },
            unMuteMouse: function() {
                clearTimeout(u.mouseTrapTimeoutID);
                u.mouseTrapTimeoutID = setTimeout(function() {
                    u.captureMouse = !1;
                    u.bustClick = !1
                },
                400)
            }
        };
        y = {
            down: "touchstart mousedown",
            move: "mousemove touchmove",
            up: "mouseup touchend touchcancel",
            cancel: "mouseleave touchcancel"
        };
        r.touch && (r.mobileOS.ios || r.mobileOS.android) ? y = {
            down: "touchstart",
            move: "touchmove",
            up: "touchend touchcancel",
            cancel: "touchcancel"
        }: r.pointers ? y = {
            down: "pointerdown",
            move: "pointermove",
            up: "pointerup",
            cancel: "pointercancel pointerleave"
        }: r.msPointers && (y = {
            down: "MSPointerDown",
            move: "MSPointerMove",
            up: "MSPointerUp",
            cancel: "MSPointerCancel MSPointerLeave"
        }); ! r.msPointers || "onmspointerenter" in window || n.each({
            MSPointerEnter: "MSPointerOver",
            MSPointerLeave: "MSPointerOut"
        },
        function(t, i) {
            n.event.special[t] = {
                delegateType: i,
                bindType: i,
                handle: function(t) {
                    var u, f = this,
                    r = t.relatedTarget,
                    e = t.handleObj;
                    return (!r || r !== f && !n.contains(f, r)) && (t.type = e.origType, u = e.handler.apply(this, arguments), t.type = i),
                    u
                }
            }
        });
        rr = function(n) {
            return y[n] || n
        };
        vt = /([^ ]+)/g;
        i.applyEventMap = function(n, t) {
            return n = n.replace(vt, rr),
            t && (n = n.replace(vt, "$1." + t)),
            n
        };
        tt = n.fn.on;
        s(!0, o, n);
        o.fn = o.prototype = new n;
        o.fn.constructor = o;
        o.fn.init = function(t, i) {
            return i && i instanceof n && !(i instanceof o) && (i = o(i)),
            n.fn.init.call(this, t, i, ur)
        };
        o.fn.init.prototype = o.fn;
        ur = o(document);
        s(o.fn, {
            handler: function(n) {
                return this.data("handler", n),
                this
            },
            autoApplyNS: function(n) {
                return this.data("kendoNS", n || i.guid()),
                this
            },
            on: function() {
                var s, n, f, o, h, c, t = this,
                l = t.data("kendoNS");
                return 1 === arguments.length ? tt.call(t, arguments[0]) : (s = t, n = pt.call(arguments), typeof n[n.length - 1] === ot && n.pop(), f = n[n.length - 1], o = i.applyEventMap(n[0], l), r.mouseAndTouchPresent && o.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (u.setupMouseMute(), h = 2 === n.length ? null: n[1], c = o.indexOf("click") > -1 && o.indexOf("touchend") > -1, tt.call(this, {
                    touchstart: u.muteMouse,
                    touchend: u.unMuteMouse
                },
                h, {
                    bustClick: c
                })), typeof f === e && (s = t.data("handler"), f = s[f], n[n.length - 1] = function(n) {
                    f.call(s, n)
                }), n[0] = o, tt.apply(t, n), t)
            },
            kendoDestroy: function(n) {
                return n = n || this.data("kendoNS"),
                n && this.off("." + n),
                this
            }
        });
        i.jQuery = o;
        i.eventMap = y;
        i.timezone = function() {
            function t(t, i) {
                var u, o, s, c = i[3],
                e = i[4],
                f = i[5],
                h = i[8];
                return h || (i[8] = h = {}),
                h[t] ? h[t] : (isNaN(e) ? 0 === e.indexOf("last") ? (u = new Date(Date.UTC(t, n[c] + 1, 1, f[0] - 24, f[1], f[2], 0)), o = r[e.substr(4, 3)], s = u.getUTCDay(), u.setUTCDate(u.getUTCDate() + o - s - (o > s ? 7 : 0))) : e.indexOf(">=") >= 0 && (u = new Date(Date.UTC(t, n[c], e.substr(5), f[0], f[1], f[2], 0)), o = r[e.substr(0, 3)], s = u.getUTCDay(), u.setUTCDate(u.getUTCDate() + o - s + (s > o ? 7 : 0))) : u = new Date(Date.UTC(t, n[c], e, f[0], f[1], f[2], 0)), h[t] = u)
            }
            function u(n, i, r) {
                var f, e, u, o;
                return (i = i[r]) ? (u = new Date(n).getUTCFullYear(), i = jQuery.grep(i,
                function(n) {
                    var i = n[0],
                    t = n[1];
                    return u >= i && (t >= u || i == u && "only" == t || "max" == t)
                }), i.push(n), i.sort(function(n, i) {
                    return "number" != typeof n && (n = +t(u, n)),
                    "number" != typeof i && (i = +t(u, i)),
                    n - i
                }), o = i[jQuery.inArray(n, i) - 1] || i[i.length - 1], isNaN(o) ? o: null) : (f = r.split(":"), e = 0, f.length > 1 && (e = 60 * f[0] + +f[1]), [ - 1e6, "max", "-", "Jan", 1, [0, 0, 0], e, "-"])
            }
            function f(n, t, i) {
                var u, f, e, r = t[i];
                if ("string" == typeof r && (r = t[r]), !r) throw Error('Timezone "' + i + '" is either incorrect, or kendo.timezones.min.js is not included.');
                for (u = r.length - 1; u >= 0 && (f = r[u][3], !(f && n > f)); u--);
                if (e = r[u + 1], !e) throw Error('Timezone "' + i + '" not found on ' + n + ".");
                return e
            }
            function i(n, t, i, r) {
                typeof n != l && (n = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
                var e = f(n, t, r);
                return {
                    zone: e,
                    rule: u(n, i, e[1])
                }
            }
            function o(n, t) {
                var r, u, f;
                return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (r = i(n, this.zones, this.rules, t), u = r.zone, f = r.rule, f ? u[0] - f[6] : u[0])
            }
            function s(n, t) {
                var f = i(n, this.zones, this.rules, t),
                e = f.zone,
                r = f.rule,
                u = e[2];
                return u.indexOf("/") >= 0 ? u.split("/")[r && +r[6] ? 1 : 0] : u.indexOf("%s") >= 0 ? u.replace("%s", r && "-" != r[7] ? r[7] : "") : u
            }
            function h(n, t, i) {
                var r, u;
                return typeof t == e && (t = this.offset(n, t)),
                typeof i == e && (i = this.offset(n, i)),
                r = n.getTimezoneOffset(),
                n = new Date(n.getTime() + 6e4 * (t - i)),
                u = n.getTimezoneOffset(),
                new Date(n.getTime() + 6e4 * (u - r))
            }
            function c(n, t) {
                return this.convert(n, n.getTimezoneOffset(), t)
            }
            function a(n, t) {
                return this.convert(n, t, n.getTimezoneOffset())
            }
            function v(n) {
                return this.apply(new Date(n), "Etc/UTC")
            }
            var n = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            },
            r = {
                Sun: 0,
                Mon: 1,
                Tue: 2,
                Wed: 3,
                Thu: 4,
                Fri: 5,
                Sat: 6
            };
            return {
                zones: {},
                rules: {},
                offset: o,
                convert: h,
                apply: c,
                remove: a,
                abbr: s,
                toLocalDate: v
            }
        } ();
        i.date = function() {
            function t(n, t) {
                return 0 === t && 23 === n.getHours() ? (n.setHours(n.getHours() + 2), !0) : !1
            }
            function e(n, i, r) {
                var u = n.getHours();
                r = r || 1;
                i = (i - n.getDay() + 7 * r) % 7;
                n.setDate(n.getDate() + i);
                t(n, u)
            }
            function c(n, t, i) {
                return n = new Date(n),
                e(n, t, i),
                n
            }
            function o(n) {
                return new Date(n.getFullYear(), n.getMonth(), 1)
            }
            function l(n) {
                var t = new Date(n.getFullYear(), n.getMonth() + 1, 0),
                i = o(n),
                r = Math.abs(t.getTimezoneOffset() - i.getTimezoneOffset());
                return r && t.setHours(i.getHours() + r / 60),
                t
            }
            function i(n) {
                return n = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0),
                t(n, 0),
                n
            }
            function a(n) {
                return Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())
            }
            function r(n) {
                return n.getTime() - i(n)
            }
            function v(t, i, u) {
                var f, e = r(i),
                o = r(u);
                return t && e != o ? (i >= u && (u += n), f = r(t), e > f && (f += n), e > o && (o += n), f >= e && o >= f) : !0
            }
            function y(t, i, r) {
                var u, e = i.getTime(),
                f = r.getTime();
                return e >= f && (f += n),
                u = t.getTime(),
                u >= e && f >= u
            }
            function u(i, r) {
                var u = i.getHours();
                return i = new Date(i),
                s(i, r * n),
                t(i, u),
                i
            }
            function s(n, t, i) {
                var r, u = n.getTimezoneOffset();
                n.setTime(n.getTime() + t);
                i || (r = n.getTimezoneOffset() - u, n.setTime(n.getTime() + r * f))
            }
            function h() {
                return i(new Date)
            }
            function p(n) {
                return i(n).getTime() == h().getTime()
            }
            function w(n) {
                var t = new Date(1980, 1, 1, 0, 0, 0);
                return n && t.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()),
                t
            }
            var f = 6e4,
            n = 864e5;
            return {
                adjustDST: t,
                dayOfWeek: c,
                setDayOfWeek: e,
                getDate: i,
                isInDateRange: y,
                isInTimeRange: v,
                isToday: p,
                nextDay: function(n) {
                    return u(n, 1)
                },
                previousDay: function(n) {
                    return u(n, -1)
                },
                toUtcTime: a,
                MS_PER_DAY: n,
                MS_PER_HOUR: 60 * f,
                MS_PER_MINUTE: f,
                setTime: s,
                addDays: u,
                today: h,
                toInvariantTime: w,
                firstDayOfMonth: o,
                lastDayOfMonth: l,
                getMilliseconds: r
            }
        } ();
        i.stripWhitespace = function(n) {
            var t, u, r;
            if (document.createNodeIterator) for (t = document.createNodeIterator(n, NodeFilter.SHOW_TEXT,
            function(t) {
                return t.parentNode == n ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_REJECT
            },
            !1); t.nextNode();) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
            else for (u = 0; n.childNodes.length > u; u++) r = n.childNodes[u],
            3 != r.nodeType || /\S/.test(r.nodeValue) || (n.removeChild(r), u--),
            1 == r.nodeType && i.stripWhitespace(r)
        };
        fr = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(n) {
            setTimeout(n, 1e3 / 60)
        };
        i.animationFrame = function(n) {
            fr.call(window, n)
        };
        c = [];
        i.queueAnimation = function(n) {
            c[c.length] = n;
            1 === c.length && i.runNextAnimation()
        };
        i.runNextAnimation = function() {
            i.animationFrame(function() {
                c[0] && (c.shift()(), c[0] && i.runNextAnimation())
            })
        };
        i.parseQueryStringParams = function(n) {
            for (var u = n.split("?")[1] || "", r = {},
            i = u.split(/&|=/), f = i.length, t = 0; f > t; t += 2)"" !== i[t] && (r[decodeURIComponent(i[t])] = decodeURIComponent(i[t + 1]));
            return r
        };
        i.elementUnderCursor = function(n) {
            return document.elementFromPoint(n.x.client, n.y.client)
        };
        i.wheelDeltaY = function(n) {
            var r, i = n.originalEvent,
            u = i.wheelDeltaY;
            return i.wheelDelta ? (u === t || u) && (r = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (r = 10 * -i.detail),
            r
        };
        i.caret = function(i, r, u) {
            var f, e, o, h, s = r !== t;
            if (u === t && (u = r), i[0] && (i = i[0]), !s || !i.disabled) {
                try {
                    i.selectionStart !== t ? s ? (i.focus(), i.setSelectionRange(r, u)) : r = [i.selectionStart, i.selectionEnd] : document.selection && (n(i).is(":visible") && i.focus(), f = i.createTextRange(), s ? (f.collapse(!0), f.moveStart("character", r), f.moveEnd("character", u - r), f.select()) : (e = f.duplicate(), f.moveToBookmark(document.selection.createRange().getBookmark()), e.setEndPoint("EndToStart", f), o = e.text.length, h = o + f.text.length, r = [o, h]))
                } catch(c) {
                    r = []
                }
                return r
            }
        }
    } (jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min"], n)
} (function() {
    return function(n, t) {
        function lt(n, t, i, r) {
            var f, u = n.getFullYear(),
            e = t.getFullYear(),
            o = i.getFullYear();
            return u -= u % r,
            f = u + (r - 1),
            e > u && (u = e),
            f > o && (f = o),
            u + "-" + f
        }
        function y(n) {
            for (var i, t = 0,
            f = n.min,
            e = n.max,
            r = n.start,
            o = n.setter,
            s = n.build,
            h = n.cells || 12,
            c = n.perRow || 4,
            l = n.content || nr,
            a = n.empty || tr,
            u = n.html || '<table tabindex="0" role="grid" class="k-content k-meta-view" cellspacing="0"><tbody><tr role="row">'; h > t; t++) t > 0 && t % c == 0 && (u += '<\/tr><tr role="row">'),
            i = s(r, t),
            u += w(r, f, e) ? l(i) : a(i),
            o(r, 1);
            return u + "<\/tr><\/tbody><\/table>"
        }
        function tt(n, t, i) {
            var f = n.getFullYear(),
            r = t.getFullYear(),
            e = r,
            u = 0;
            return i && (r -= r % i, e = r - r % i + i - 1),
            f > e ? u = 1 : r > f && (u = -1),
            u
        }
        function p() {
            var n = new i;
            return new i(n.getFullYear(), n.getMonth(), n.getDate())
        }
        function l(n, t, r) {
            var u = p();
            return n && (u = new i( + n)),
            t > u ? u = new i( + t) : u > r && (u = new i( + r)),
            u
        }
        function w(n, t, i) {
            return + n >= +t && +i >= +n
        }
        function at(n, t) {
            return n.slice(t).concat(n.slice(0, t))
        }
        function vt(n, t, r) {
            t = t instanceof i ? t.getFullYear() : n.getFullYear() + r * t;
            n.setFullYear(t)
        }
        function yt(t) {
            n(this).toggleClass(ur, fr.indexOf(t.type) > -1 || t.type == si)
        }
        function wi(n) {
            n.preventDefault()
        }
        function it(n) {
            return bt(n).calendars.standard
        }
        function rt(n) {
            var i = o[n.start],
            r = o[n.depth],
            u = bt(n.culture);
            n.format = gi(n.format || u.calendars.standard.patterns.d);
            isNaN(i) && (i = 0, n.start = v); (r === t || r > i) && (n.depth = v);
            n.dates || (n.dates = [])
        }
        function pt(n) {
            ir && n.find("*").attr("unselectable", "on")
        }
        function bi(n, t) {
            for (var i = 0,
            r = t.length; r > i; i++) if (n === +t[i]) return ! 0;
            return ! 1
        }
        function ki(n, t) {
            return n ? n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate() : !1
        }
        function di(n, t) {
            return n ? n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() : !1
        }
        var f, r = window.kendo,
        ut = r.support,
        wt = r.ui,
        b = wt.Widget,
        u = r.keys,
        ft = r.parseDate,
        k = r.date.adjustDST,
        gi = r._extractFormat,
        a = r.template,
        bt = r.getCulture,
        kt = r.support.transitions,
        dt = kt ? kt.css + "transform-origin": "",
        nr = a('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link" href="\\#" data-#=data.ns#value="#=data.dateString#">#=data.value#<\/a><\/td>', {
            useWithBlock: !1
        }),
        tr = a('<td role="gridcell">&nbsp;<\/td>', {
            useWithBlock: !1
        }),
        gt = r.support.browser,
        ir = gt.msie && 9 > gt.version,
        e = ".kendoCalendar",
        s = "click" + e,
        rr = "keydown" + e,
        et = "id",
        ni = "min",
        ti = "left",
        ot = "slideIn",
        v = "month",
        ii = "century",
        st = "change",
        ri = "navigate",
        ht = "value",
        ur = "k-state-hover",
        h = "k-state-disabled",
        c = "k-state-focused",
        d = "k-other-month",
        ui = ' class="' + d + '"',
        fi = "k-nav-today",
        ei = "td:has(.k-link)",
        oi = "blur" + e,
        si = "focus",
        hi = si + e,
        fr = ut.touch ? "touchstart": "mouseenter",
        ci = ut.touch ? "touchstart" + e: "mouseenter" + e,
        li = ut.touch ? "touchend" + e + " touchmove" + e: "mouseleave" + e,
        er = 6e4,
        ai = 864e5,
        g = "_prevArrow",
        nt = "_nextArrow",
        ct = "aria-disabled",
        vi = "aria-selected",
        yi = n.proxy,
        pi = n.extend,
        i = Date,
        o = {
            month: 0,
            year: 1,
            decade: 2,
            century: 3
        },
        or = b.extend({
            init: function(t, u) {
                var h, a, f = this;
                b.fn.init.call(f, t, u);
                t = f.wrapper = f.element;
                u = f.options;
                u.url = window.unescape(u.url);
                f._templates();
                f._header();
                f._footer(f.footer);
                a = t.addClass("k-widget k-calendar").on(ci + " " + li, ei, yt).on(rr, "table.k-content", yi(f._move, f)).on(s, ei,
                function(t) {
                    var i = t.currentTarget.firstChild; - 1 != i.href.indexOf("#") && t.preventDefault();
                    f._click(n(i))
                }).on("mouseup" + e, "table.k-content, .k-footer",
                function() {
                    f._focusView(f.options.focusOnNav !== !1)
                }).attr(et);
                a && (f._cellID = a + "_cell_selected");
                rt(u);
                h = ft(u.value, u.format, u.culture);
                f._index = o[u.start];
                f._current = new i( + l(h, u.min, u.max));
                f._addClassProxy = function() {
                    f._active = !0;
                    f._cell.addClass(c)
                };
                f._removeClassProxy = function() {
                    f._active = !1;
                    f._cell.removeClass(c)
                };
                f.value(h);
                r.notify(f)
            },
            options: {
                name: "Calendar",
                value: null,
                min: new i(1900, 0, 1),
                max: new i(2099, 11, 31),
                dates: [],
                url: "",
                culture: "",
                footer: "",
                format: "",
                month: {},
                start: v,
                depth: v,
                animation: {
                    horizontal: {
                        effects: ot,
                        reverse: !0,
                        duration: 500,
                        divisor: 2
                    },
                    vertical: {
                        effects: "zoomIn",
                        duration: 400
                    }
                }
            },
            events: [st, ri],
            setOptions: function(n) {
                var t = this;
                rt(n);
                n.dates[0] || (n.dates = t.options.dates);
                b.fn.setOptions.call(t, n);
                t._templates();
                t._footer(t.footer);
                t._index = o[t.options.start];
                t.navigate()
            },
            destroy: function() {
                var n = this,
                t = n._today;
                n.element.off(e);
                n._title.off(e);
                n[g].off(e);
                n[nt].off(e);
                r.destroy(n._table);
                t && r.destroy(t.off(e));
                b.fn.destroy.call(n)
            },
            current: function() {
                return this._current
            },
            view: function() {
                return this._view
            },
            focus: function(n) {
                n = n || this._table;
                this._bindTable(n);
                n.focus()
            },
            min: function(n) {
                return this._option(ni, n)
            },
            max: function(n) {
                return this._option("max", n)
            },
            navigateToPast: function() {
                this._navigate(g, -1)
            },
            navigateToFuture: function() {
                this._navigate(nt, 1)
            },
            navigateUp: function() {
                var n = this,
                t = n._index;
                n._title.hasClass(h) || n.navigate(n._current, ++t)
            },
            navigateDown: function(n) {
                var i = this,
                r = i._index,
                u = i.options.depth;
                if (n) return r === o[u] ? ( + i._value != +n && (i.value(n), i.trigger(st)), t) : (i.navigate(n, --r), t)
            },
            navigate: function(r, u) {
                u = isNaN(u) ? o[u] : u;
                var b, a, k, s, e = this,
                v = e.options,
                tt = v.culture,
                p = v.min,
                w = v.max,
                it = e._title,
                y = e._table,
                d = e._oldTable,
                rt = e._value,
                ut = e._current,
                ft = r && +r > +ut,
                et = u !== t && u !== e._index;
                r || (r = ut);
                e._current = r = new i( + l(r, p, w));
                u === t ? u = e._index: e._index = u;
                e._view = a = f.views[u];
                k = a.compare;
                s = u === o[ii];
                it.toggleClass(h, s).attr(ct, s);
                s = k(r, p) < 1;
                e[g].toggleClass(h, s).attr(ct, s);
                s = k(r, w) > -1;
                e[nt].toggleClass(h, s).attr(ct, s);
                y && d && d.data("animating") && (d.kendoStop(!0, !0), y.kendoStop(!0, !0));
                e._oldTable = y; (!y || e._changeView) && (it.html(a.title(r, p, w, tt)), e._table = b = n(a.content(pi({
                    min: p,
                    max: w,
                    date: r,
                    url: v.url,
                    dates: v.dates,
                    format: v.format,
                    culture: tt
                },
                e[a.name]))), pt(b), e._animate({
                    from: y,
                    to: b,
                    vertical: et,
                    future: ft
                }), e._focus(r), e.trigger(ri));
                u === o[v.depth] && rt && e._class("k-state-selected", a.toDateString(rt));
                e._class(c, a.toDateString(r)); ! y && e._cell && e._cell.removeClass(c);
                e._changeView = !0
            },
            value: function(n) {
                var r = this,
                f = r._view,
                u = r.options,
                e = r._view,
                o = u.min,
                s = u.max;
                return n === t ? r._value: (n = ft(n, u.format, u.culture), null !== n && (n = new i( + n), w(n, o, s) || (n = null)), r._value = n, e && null === n && r._cell ? r._cell.removeClass("k-state-selected") : (r._changeView = !n || f && 0 !== f.compare(n, r._current), r.navigate(n)), t)
            },
            _move: function(t) {
                var c, o, a, v, f = this,
                y = f.options,
                e = t.keyCode,
                p = f._view,
                w = f._index,
                s = new i( + f._current),
                h = r.support.isRtl(f.wrapper);
                return t.target === f._table[0] && (f._active = !0),
                t.ctrlKey ? e == u.RIGHT && !h || e == u.LEFT && h ? (f.navigateToFuture(), o = !0) : e == u.LEFT && !h || e == u.RIGHT && h ? (f.navigateToPast(), o = !0) : e == u.UP ? (f.navigateUp(), o = !0) : e == u.DOWN && (f._click(n(f._cell[0].firstChild)), o = !0) : (e == u.RIGHT && !h || e == u.LEFT && h ? (c = 1, o = !0) : e == u.LEFT && !h || e == u.RIGHT && h ? (c = -1, o = !0) : e == u.UP ? (c = 0 === w ? -7 : -4, o = !0) : e == u.DOWN ? (c = 0 === w ? 7 : 4, o = !0) : e == u.ENTER ? (f._click(n(f._cell[0].firstChild)), o = !0) : e == u.HOME || e == u.END ? (a = e == u.HOME ? "first": "last", v = p[a](s), s = new i(v.getFullYear(), v.getMonth(), v.getDate(), s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), o = !0) : e == u.PAGEUP ? (o = !0, f.navigateToPast()) : e == u.PAGEDOWN && (o = !0, f.navigateToFuture()), (c || a) && (a || p.setDate(s, c), f._focus(l(s, y.min, y.max)))),
                o && t.preventDefault(),
                f._current
            },
            _animate: function(n) {
                var t = this,
                i = n.from,
                r = n.to,
                u = t._active;
                i ? i.parent().data("animating") ? (i.parent().kendoStop(!0, !0).remove(), i.remove(), r.insertAfter(t.element[0].firstChild), t._focusView(u)) : i.is(":visible") && t.options.animation !== !1 ? t[n.vertical ? "_vertical": "_horizontal"](i, r, n.future) : (r.insertAfter(i), i.remove(), t._focusView(u)) : (r.insertAfter(t.element[0].firstChild), t._bindTable(r))
            },
            _horizontal: function(n, i, r) {
                var u = this,
                o = u._active,
                f = u.options.animation.horizontal,
                s = f.effects,
                e = n.outerWidth();
                s && -1 != s.indexOf(ot) && (n.add(i).css({
                    width: e
                }), n.wrap("<div/>"), u._focusView(o, n), n.parent().css({
                    position: "relative",
                    width: 2 * e,
                    float: ti,
                    "margin-left": r ? 0 : -e
                }), i[r ? "insertAfter": "insertBefore"](n), pi(f, {
                    effects: ot + ":" + (r ? "right": ti),
                    complete: function() {
                        n.remove();
                        i.unwrap();
                        u._focusView(o);
                        u._oldTable = t
                    }
                }), n.parent().kendoStop(!0, !0).kendoAnimate(f))
            },
            _vertical: function(n, i) {
                var f, u, r = this,
                e = r.options.animation.vertical,
                o = e.effects,
                s = r._active;
                o && -1 != o.indexOf("zoom") && (i.css({
                    position: "absolute",
                    top: n.prev().outerHeight(),
                    left: 0
                }).insertBefore(n), dt && (f = r._cellByDate(r._view.toDateString(r._current)), u = f.position(), u = u.left + parseInt(f.width() / 2, 10) + "px " + (u.top + parseInt(f.height() / 2, 10) + "px"), i.css(dt, u)), n.kendoStop(!0, !0).kendoAnimate({
                    effects: "fadeOut",
                    duration: 600,
                    complete: function() {
                        n.remove();
                        i.css({
                            position: "static",
                            top: 0,
                            left: 0
                        });
                        r._focusView(s);
                        r._oldTable = t
                    }
                }), i.kendoStop(!0, !0).kendoAnimate(e))
            },
            _cellByDate: function(t) {
                return this._table.find("td:not(." + d + ")").filter(function() {
                    return n(this.firstChild).attr(r.attr(ht)) === t
                })
            },
            _class: function(t, i) {
                var u = this,
                e = u._cellID,
                f = u._cell;
                f && f.removeAttr(vi).removeAttr("aria-label").removeAttr(et);
                f = u._table.find("td:not(." + d + ")").removeClass(t).filter(function() {
                    return n(this.firstChild).attr(r.attr(ht)) === i
                }).attr(vi, !0);
                t !== c || u._active || u.options.focusOnNav === !1 || (t = "");
                f.addClass(t);
                f[0] && (u._cell = f);
                e && (f.attr(et, e), u._table.removeAttr("aria-activedescendant").attr("aria-activedescendant", e))
            },
            _bindTable: function(n) {
                n.on(hi, this._addClassProxy).on(oi, this._removeClassProxy)
            },
            _click: function(n) {
                var u = this,
                f = u.options,
                e = new Date( + u._current),
                t = n.attr(r.attr(ht)).split("/");
                t = new i(t[0], t[1], t[2]);
                k(t, 0);
                u._view.setDate(e, t);
                u.navigateDown(l(e, f.min, f.max))
            },
            _focus: function(n) {
                var t = this,
                i = t._view;
                0 !== i.compare(n, t._current) ? t.navigate(n) : (t._current = n, t._class(c, i.toDateString(n)))
            },
            _focusView: function(n, t) {
                n && this.focus(t)
            },
            _footer: function(i) {
                var u = this,
                e = p(),
                o = u.element,
                f = o.find(".k-footer");
                return i ? (f[0] || (f = n('<div class="k-footer"><a href="#" class="k-link k-nav-today"><\/a><\/div>').appendTo(o)), u._today = f.show().find(".k-link").html(i(e)).attr("title", r.toString(e, "D", u.options.culture)), u._toggle(), t) : (u._toggle(!1), f.hide(), t)
            },
            _header: function() {
                var t, n = this,
                i = n.element;
                i.find(".k-header")[0] || i.html('<div class="k-header"><a href="#" role="button" class="k-link k-nav-prev"><span class="k-icon k-i-arrow-w"><\/span><\/a><a href="#" role="button" aria-live="assertive" aria-atomic="true" class="k-link k-nav-fast"><\/a><a href="#" role="button" class="k-link k-nav-next"><span class="k-icon k-i-arrow-e"><\/span><\/a><\/div>');
                t = i.find(".k-link").on(ci + " " + li + " " + hi + " " + oi, yt).click(!1);
                n._title = t.eq(1).on(s,
                function() {
                    n._focusView(n.options.focusOnNav !== !1);
                    n.navigateUp()
                });
                n[g] = t.eq(0).on(s,
                function() {
                    n._focusView(n.options.focusOnNav !== !1);
                    n.navigateToPast()
                });
                n[nt] = t.eq(2).on(s,
                function() {
                    n._focusView(n.options.focusOnNav !== !1);
                    n.navigateToFuture()
                })
            },
            _navigate: function(n, t) {
                var r = this,
                e = r._index + 1,
                u = new i( + r._current);
                n = r[n];
                n.hasClass(h) || (e > 3 ? u.setFullYear(u.getFullYear() + 100 * t) : f.views[e].setDate(u, t), r.navigate(u))
            },
            _option: function(n, r) {
                var e, u = this,
                f = u.options,
                o = u._value || u._current;
                return r === t ? f[n] : (r = ft(r, f.format, f.culture), r && (f[n] = new i( + r), e = n === ni ? r > o: o > r, (e || di(o, r)) && (e && (u._value = null), u._changeView = !0), u._changeView || (u._changeView = !(!f.month.content && !f.month.empty)), u.navigate(u._value), u._toggle()), t)
            },
            _toggle: function(n) {
                var i = this,
                u = i.options,
                r = i._today;
                n === t && (n = w(p(), u.min, u.max));
                r && (r.off(s), n ? r.addClass(fi).removeClass(h).on(s, yi(i._todayClick, i)) : r.removeClass(fi).addClass(h).on(s, wi))
            },
            _todayClick: function(n) {
                var t = this,
                r = o[t.options.depth],
                i = p();
                n.preventDefault();
                0 === t._view.compare(t._current, i) && t._index == r && (t._changeView = !1);
                t._value = i;
                t.navigate(i, r);
                t.trigger(st)
            },
            _templates: function() {
                var n = this,
                t = n.options,
                i = t.footer,
                u = t.month,
                f = u.content,
                e = u.empty;
                n.month = {
                    content: a('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link#=data.linkClass#" href="#=data.url#" ' + r.attr("value") + '="#=data.dateString#" title="#=data.title#">' + (f || "#=data.value#") + "<\/a><\/td>", {
                        useWithBlock: !!f
                    }),
                    empty: a('<td role="gridcell">' + (e || "&nbsp;") + "<\/td>", {
                        useWithBlock: !!e
                    })
                };
                n.footer = i !== !1 ? a(i || '#= kendo.toString(data,"D","' + t.culture + '") #', {
                    useWithBlock: !1
                }) : null
            }
        });
        wt.plugin(or);
        f = {
            firstDayOfMonth: function(n) {
                return new i(n.getFullYear(), n.getMonth(), 1)
            },
            firstVisibleDay: function(n, t) {
                t = t || r.culture().calendar;
                for (var e = t.firstDay,
                u = new i(n.getFullYear(), n.getMonth(), 0, n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()); u.getDay() != e;) f.setTime(u, -1 * ai);
                return u
            },
            setTime: function(n, t) {
                var u = n.getTimezoneOffset(),
                r = new i(n.getTime() + t),
                f = r.getTimezoneOffset() - u;
                n.setTime(r.getTime() + f * er)
            },
            views: [{
                name: v,
                title: function(n, t, i, r) {
                    return it(r).months.names[n.getMonth()] + " " + n.getFullYear()
                },
                content: function(n) {
                    for (var u = this,
                    e = 0,
                    o = n.min,
                    s = n.max,
                    h = n.date,
                    c = n.dates,
                    nt = n.format,
                    l = n.culture,
                    p = n.url,
                    tt = p && c[0], a = it(l), w = a.firstDay, b = a.days, rt = at(b.names, w), ut = at(b.namesShort, w), v = f.firstVisibleDay(h, a), ft = u.first(h), et = u.last(h), ot = u.toDateString, t = new i, g = '<table tabindex="0" role="grid" class="k-content" cellspacing="0"><thead><tr role="row">'; 7 > e; e++) g += '<th scope="col" title="' + rt[e] + '">' + ut[e] + "<\/th>";
                    return t = new i(t.getFullYear(), t.getMonth(), t.getDate()),
                    k(t, 0),
                    t = +t,
                    y({
                        cells: 42,
                        perRow: 7,
                        html: g += '<\/tr><\/thead><tbody><tr role="row">',
                        start: new i(v.getFullYear(), v.getMonth(), v.getDate()),
                        min: new i(o.getFullYear(), o.getMonth(), o.getDate()),
                        max: new i(s.getFullYear(), s.getMonth(), s.getDate()),
                        content: n.content,
                        empty: n.empty,
                        setter: u.setDate,
                        build: function(n) {
                            var i = [],
                            u = n.getDay(),
                            f = "",
                            e = "#";
                            return (ft > n || n > et) && i.push(d),
                            +n === t && i.push("k-today"),
                            (0 === u || 6 === u) && i.push("k-weekend"),
                            tt && bi( + n, c) && (e = p.replace("{0}", r.toString(n, nt, l)), f = " k-action-link"),
                            {
                                date: n,
                                dates: c,
                                ns: r.ns,
                                title: r.toString(n, "D", l),
                                value: n.getDate(),
                                dateString: ot(n),
                                cssClass: i[0] ? ' class="' + i.join(" ") + '"': "",
                                linkClass: f,
                                url: e
                            }
                        }
                    })
                },
                first: function(n) {
                    return f.firstDayOfMonth(n)
                },
                last: function(n) {
                    var t = new i(n.getFullYear(), n.getMonth() + 1, 0),
                    r = f.firstDayOfMonth(n),
                    u = Math.abs(t.getTimezoneOffset() - r.getTimezoneOffset());
                    return u && t.setHours(r.getHours() + u / 60),
                    t
                },
                compare: function(n, t) {
                    var i = n.getMonth(),
                    r = n.getFullYear(),
                    u = t.getMonth(),
                    f = t.getFullYear();
                    return r > f ? 1 : f > r ? -1 : i == u ? 0 : i > u ? 1 : -1
                },
                setDate: function(n, t) {
                    var r = n.getHours();
                    t instanceof i ? n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()) : f.setTime(n, t * ai);
                    k(n, r)
                },
                toDateString: function(n) {
                    return n.getFullYear() + "/" + n.getMonth() + "/" + n.getDate()
                }
            },
            {
                name: "year",
                title: function(n) {
                    return n.getFullYear()
                },
                content: function(n) {
                    var f = it(n.culture).months.namesAbbr,
                    e = this.toDateString,
                    t = n.min,
                    u = n.max;
                    return y({
                        min: new i(t.getFullYear(), t.getMonth(), 1),
                        max: new i(u.getFullYear(), u.getMonth(), 1),
                        start: new i(n.date.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(n) {
                            return {
                                value: f[n.getMonth()],
                                ns: r.ns,
                                dateString: e(n),
                                cssClass: ""
                            }
                        }
                    })
                },
                first: function(n) {
                    return new i(n.getFullYear(), 0, n.getDate())
                },
                last: function(n) {
                    return new i(n.getFullYear(), 11, n.getDate())
                },
                compare: function(n, t) {
                    return tt(n, t)
                },
                setDate: function(n, t) {
                    var r, u = n.getHours();
                    t instanceof i ? (r = t.getMonth(), n.setFullYear(t.getFullYear(), r, n.getDate()), r !== n.getMonth() && n.setDate(0)) : (r = n.getMonth() + t, n.setMonth(r), r > 11 && (r -= 12), r > 0 && n.getMonth() != r && n.setDate(0));
                    k(n, u)
                },
                toDateString: function(n) {
                    return n.getFullYear() + "/" + n.getMonth() + "/1"
                }
            },
            {
                name: "decade",
                title: function(n, t, i) {
                    return lt(n, t, i, 10)
                },
                content: function(n) {
                    var t = n.date.getFullYear(),
                    u = this.toDateString;
                    return y({
                        start: new i(t - t % 10 - 1, 0, 1),
                        min: new i(n.min.getFullYear(), 0, 1),
                        max: new i(n.max.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(n, t) {
                            return {
                                value: n.getFullYear(),
                                ns: r.ns,
                                dateString: u(n),
                                cssClass: 0 === t || 11 == t ? ui: ""
                            }
                        }
                    })
                },
                first: function(n) {
                    var t = n.getFullYear();
                    return new i(t - t % 10, n.getMonth(), n.getDate())
                },
                last: function(n) {
                    var t = n.getFullYear();
                    return new i(t - t % 10 + 9, n.getMonth(), n.getDate())
                },
                compare: function(n, t) {
                    return tt(n, t, 10)
                },
                setDate: function(n, t) {
                    vt(n, t, 1)
                },
                toDateString: function(n) {
                    return n.getFullYear() + "/0/1"
                }
            },
            {
                name: ii,
                title: function(n, t, i) {
                    return lt(n, t, i, 100)
                },
                content: function(n) {
                    var o = n.date.getFullYear(),
                    f = n.min.getFullYear(),
                    e = n.max.getFullYear(),
                    s = this.toDateString,
                    t = f,
                    u = e;
                    return t -= t % 10,
                    u -= u % 10,
                    10 > u - t && (u = t + 9),
                    y({
                        start: new i(o - o % 100 - 10, 0, 1),
                        min: new i(t, 0, 1),
                        max: new i(u, 0, 1),
                        setter: this.setDate,
                        build: function(n, t) {
                            var i = n.getFullYear(),
                            u = i + 9;
                            return f > i && (i = f),
                            u > e && (u = e),
                            {
                                ns: r.ns,
                                value: i + " - " + u,
                                dateString: s(n),
                                cssClass: 0 === t || 11 == t ? ui: ""
                            }
                        }
                    })
                },
                first: function(n) {
                    var t = n.getFullYear();
                    return new i(t - t % 100, n.getMonth(), n.getDate())
                },
                last: function(n) {
                    var t = n.getFullYear();
                    return new i(t - t % 100 + 99, n.getMonth(), n.getDate())
                },
                compare: function(n, t) {
                    return tt(n, t, 100)
                },
                setDate: function(n, t) {
                    vt(n, t, 10)
                },
                toDateString: function(n) {
                    var t = n.getFullYear();
                    return t - t % 10 + "/0/1"
                }
            }]
        };
        f.isEqualDatePart = ki;
        f.makeUnselectable = pt;
        f.restrictValue = l;
        f.isInRange = w;
        f.normalize = rt;
        f.viewsEnum = o;
        r.calendar = f
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min"], n)
} (function() {
    return function(n, t) {
        function b(t) {
            return n.map(k(t),
            function(n) {
                return n.name
            }).join(", ")
        }
        function k(n) {
            var t = n[0];
            return t.files ? d(t.files) : [{
                name: lt(t.value),
                extension: g(t.value),
                size: null
            }]
        }
        function d(t) {
            return n.map(t,
            function(n) {
                return ct(n)
            })
        }
        function ct(n) {
            var t = n.name || n.fileName;
            return {
                name: i.htmlEncode(t),
                extension: g(t),
                size: n.size || n.fileSize,
                rawFile: n
            }
        }
        function g(n) {
            var t = n.match(at);
            return t ? t[0] : ""
        }
        function lt(n) {
            var t = n.lastIndexOf("\\");
            return - 1 != t ? n.substr(t + 1) : n
        }
        function h(t, r) {
            var u = i.guid();
            return n.map(t,
            function(n) {
                return n.uid = r ? i.guid() : u,
                n
            })
        }
        function nt(t, i, r) {
            var u, f;
            i._supportsRemove() && (u = t.data("fileNames"), f = n.map(u,
            function(n) {
                return n.name
            }), i._submitRemove(f, r,
            function(n, r, f) {
                i._removeFileEntry(t);
                i.trigger(p, {
                    operation: "remove",
                    files: u,
                    response: n,
                    XMLHttpRequest: f
                })
            },
            function(n) {
                i.trigger(o, {
                    operation: "remove",
                    files: u,
                    XMLHttpRequest: n
                });
                et("Server response: " + n.responseText)
            }))
        }
        function tt(t, i, r) {
            var u = !1,
            f = "";
            try {
                f = n.parseJSON(it(t));
                u = !0
            } catch(e) {
                r()
            }
            u && i(f)
        }
        function it(n) {
            return (t === n || "" === n) && (n = "{}"),
            n
        }
        function rt(n) {
            n.stopPropagation();
            n.preventDefault()
        }
        function ut(n, t, i, r) {
            var u, f;
            n.on("dragenter" + t,
            function() {
                i();
                f = new Date;
                u || (u = setInterval(function() {
                    var n = new Date - f;
                    n > 100 && (r(), clearInterval(u), u = null)
                },
                100))
            }).on("dragover" + t,
            function() {
                f = new Date
            })
        }
        function ft(n) {
            return n.is(".k-file-progress, .k-file-success, .k-file-error")
        }
        function r(t) {
            return n(t.target).closest(".k-file")
        }
        function c() {
            var i = {},
            r = n("meta[name=csrf-token]").attr("content"),
            u = n("meta[name=csrf-param]").attr("content");
            return n("input[name^='__RequestVerificationToken']").each(function() {
                i[this.name] = this.value
            }),
            u !== t && r !== t && (i[u] = r),
            i
        }
        var l, a, i = window.kendo,
        e = i.ui.Widget,
        et = i.logToConsole,
        at = /\.([^\.]+)$/,
        u = ".kendoUpload",
        v = "select",
        y = "upload",
        p = "success",
        o = "error",
        ot = "complete",
        s = "cancel",
        st = "progress",
        f = "remove",
        w = e.extend({
            init: function(t, r) {
                var o, s, h, f = this;
                e.fn.init.call(f, t, r);
                f.name = t.name;
                f.multiple = f.options.multiple;
                f.localization = f.options.localization;
                o = f.element;
                f.wrapper = o.closest(".k-upload");
                0 === f.wrapper.length && (f.wrapper = f._wrapInput(o));
                f._activeInput(o);
                f.toggle(f.options.enabled);
                s = f._ns = u + "-" + i.guid();
                o.closest("form").on("submit" + s, n.proxy(f._onParentFormSubmit, f)).on("reset" + s, n.proxy(f._onParentFormReset, f));
                f.options.async.saveUrl ? (f._module = f._supportsFormData() ? new a(f) : new l(f), f._async = !0, h = f.options.files, h.length > 0 && f._renderInitialFiles(h)) : f._module = new ht(f);
                f._supportsDrop() && f._setupDropZone();
                f.wrapper.on("click", ".k-upload-action", n.proxy(f._onFileAction, f)).on("click", ".k-upload-selected", n.proxy(f._onUploadSelected, f));
                f.element.val() && f._onInputChange({
                    target: f.element
                })
            },
            events: [v, y, p, o, ot, s, st, f],
            options: {
                name: "Upload",
                enabled: !0,
                multiple: !0,
                showFileList: !0,
                template: "",
                files: [],
                async: {
                    removeVerb: "POST",
                    autoUpload: !0
                },
                localization: {
                    select: "Select files...",
                    cancel: "Cancel",
                    retry: "Retry",
                    remove: "Remove",
                    uploadSelectedFiles: "Upload files",
                    dropFilesHere: "drop files here to upload",
                    statusUploading: "uploading",
                    statusUploaded: "uploaded",
                    statusWarning: "warning",
                    statusFailed: "failed",
                    headerStatusUploading: "Uploading...",
                    headerStatusUploaded: "Done"
                }
            },
            setOptions: function(n) {
                var t = this,
                i = t.element;
                e.fn.setOptions.call(t, n);
                t.multiple = t.options.multiple;
                i.attr("multiple", t._supportsMultiple() ? t.multiple: !1);
                t.toggle(t.options.enabled)
            },
            enable: function(n) {
                n = t === n ? !0 : n;
                this.toggle(n)
            },
            disable: function() {
                this.toggle(!1)
            },
            toggle: function(n) {
                n = t === n ? n: !n;
                this.wrapper.toggleClass("k-state-disabled", n);
                this.element.prop("disabled", n)
            },
            destroy: function() {
                var t = this;
                n(document).add(n(".k-dropzone", t.wrapper)).add(t.wrapper.closest("form")).off(t._ns);
                n(t.element).off(u);
                e.fn.destroy.call(t)
            },
            _addInput: function(t) {
                if (t[0].nodeType) {
                    var i = this,
                    r = t.clone().val("");
                    r.insertAfter(i.element).data("kendoUpload", i);
                    n(i.element).hide().removeAttr("id").off(u);
                    i._activeInput(r)
                }
            },
            _activeInput: function(t) {
                var i = this,
                r = i.wrapper;
                i.element = t;
                t.attr("multiple", i._supportsMultiple() ? i.multiple: !1).attr("autocomplete", "off").on("click" + u,
                function(n) {
                    r.hasClass("k-state-disabled") && n.preventDefault()
                }).on("focus" + u,
                function() {
                    n(this).parent().addClass("k-state-focused")
                }).on("blur" + u,
                function() {
                    n(this).parent().removeClass("k-state-focused")
                }).on("change" + u, n.proxy(i._onInputChange, i))
            },
            _onInputChange: function(t) {
                var i = this,
                r = n(t.target),
                u = h(i._inputFiles(r), i._isAsyncNonBatch()),
                f = i.trigger(v, {
                    files: u
                });
                f ? (i._addInput(r), r.remove()) : i._module.onSelect({
                    target: r
                },
                u)
            },
            _onDrop: function(t) {
                var r, e = t.originalEvent.dataTransfer,
                i = this,
                u = e.files,
                f = h(d(u), i._isAsyncNonBatch());
                rt(t);
                u.length > 0 && (r = i.trigger(v, {
                    files: f
                }), r || i._module.onSelect({
                    target: n(".k-dropzone", i.wrapper)
                },
                f))
            },
            _isAsyncNonBatch: function() {
                return this._async && !this.options.async.batch || !1
            },
            _renderInitialFiles: function(t) {
                var u, i, e = this,
                r = 0;
                for (t = h(t, !0), r = 0; t.length > r; r++) u = t[r],
                i = e._enqueueFile(u.name, {
                    fileNames: [u]
                }),
                i.addClass("k-file-success").data("files", [t[r]]),
                n(".k-progress", i).width("100%"),
                n(".k-upload-status", i).prepend("<span class='k-upload-pct'>100%<\/span>"),
                e._fileAction(i, f)
            },
            _prepareTemplateData: function(n, t) {
                for (var u = t.fileNames,
                i = {},
                f = 0,
                r = 0,
                r = 0; u.length > r; r++) f += u[r].size;
                return i.name = n,
                i.size = f,
                i.files = t.fileNames,
                i
            },
            _prepareDefaultFileEntryTemplate: function(t, i) {
                var r = "",
                u = n("<li class='k-file'><span class='k-progress'><\/span><span class='k-icon'><\/span><span class='k-filename' title='" + t + "'>" + t + "<\/span><strong class='k-upload-status'><\/strong><\/li>");
                return 1 == i.fileNames.length && i.fileNames[0].extension && (r = i.fileNames[0].extension.substring(1), n(".k-icon", u).addClass("k-i-" + r)),
                u
            },
            _enqueueFile: function(t, r) {
                var s, f, h, u = this,
                c = r.fileNames[0].uid,
                e = n(".k-upload-files", u.wrapper),
                l = u.options,
                o = l.template;
                return 0 === e.length && (e = n("<ul class='k-upload-files k-reset'><\/ul>").appendTo(u.wrapper), u.options.showFileList || e.hide(), u.wrapper.removeClass("k-upload-empty")),
                s = n(".k-file", e),
                o ? (h = u._prepareTemplateData(t, r), o = i.template(o), f = n("<li class='k-file'>" + o(h) + "<\/li>"), f.find(".k-upload-action").addClass("k-button k-button-bare")) : f = u._prepareDefaultFileEntryTemplate(t, r),
                f.attr(i.attr("uid"), c).appendTo(e).data(r),
                u._async || n(".k-progress", f).width("100%"),
                !u.multiple && s.length > 0 && u._module.onRemove({
                    target: n(s, u.wrapper)
                }),
                f
            },
            _removeFileEntry: function(t) {
                var i, u, f = this,
                r = t.closest(".k-upload-files");
                t.remove();
                i = n(".k-file", r);
                u = n(".k-file-success, .k-file-error", r);
                u.length === i.length && this._hideUploadButton();
                0 === i.length && (r.remove(), f.wrapper.addClass("k-upload-empty"), f._hideHeaderUploadstatus())
            },
            _fileAction: function(n, t) {
                var i = {
                    remove: "k-delete",
                    cancel: "k-cancel",
                    retry: "k-retry"
                },
                r = {
                    remove: "k-i-close",
                    cancel: "k-i-close",
                    retry: "k-i-refresh"
                };
                i.hasOwnProperty(t) && (this._clearFileAction(n), this.options.template ? n.find(".k-upload-action").addClass("k-button k-button-bare").append("<span class='k-icon " + r[t] + " " + i[t] + "' title='" + this.localization[t] + "'><\/span>").show() : (n.find(".k-upload-status .k-upload-action").remove(), n.find(".k-upload-status").append(this._renderAction(i[t], this.localization[t], r[t]))))
            },
            _fileState: function(t, i) {
                var r = this.localization,
                f = {
                    uploading: {
                        text: r.statusUploading
                    },
                    uploaded: {
                        text: r.statusUploaded
                    },
                    failed: {
                        text: r.statusFailed
                    }
                },
                u = f[i];
                u && n(".k-icon:not(.k-delete, .k-cancel, .k-retry)", t).text(u.text)
            },
            _renderAction: function(t, i, r) {
                return "" !== t ? n("<button type='button' class='k-button k-button-bare k-upload-action'><span class='k-icon " + r + " " + t + "' title='" + i + "'><\/span><\/button>") : n("<button type='button' class='k-button'>" + i + "<\/button>")
            },
            _clearFileAction: function(t) {
                n(".k-upload-action", t).empty().hide()
            },
            _onFileAction: function(t) {
                var o, u, r, e, i = this;
                return i.wrapper.hasClass("k-state-disabled") || (o = n(t.target).closest(".k-upload-action"), u = o.find(".k-icon"), r = o.closest(".k-file"), e = {
                    files: r.data("fileNames")
                },
                u.hasClass("k-delete") ? i.trigger(f, e) || i._module.onRemove({
                    target: n(r, i.wrapper)
                },
                e.data) : u.hasClass("k-cancel") ? (i.trigger(s, e), i._module.onCancel({
                    target: n(r, i.wrapper)
                }), this._checkAllComplete(), i._updateHeaderUploadStatus()) : u.hasClass("k-retry") && (n(".k-warning", r).remove(), i._module.onRetry({
                    target: n(r, i.wrapper)
                }))),
                !1
            },
            _onUploadSelected: function() {
                return this._module.onSaveSelected(),
                !1
            },
            _onFileProgress: function(t, i) {
                var u;
                this.options.template ? n(".k-progress", t.target).width(i + "%") : (u = n(".k-upload-pct", t.target), 0 === u.length && n(".k-upload-status", t.target).prepend("<span class='k-upload-pct'><\/span>"), n(".k-upload-pct", t.target).text(i + "%"), n(".k-progress", t.target).width(i + "%"));
                this.trigger(st, {
                    files: r(t).data("fileNames"),
                    percentComplete: i
                })
            },
            _onUploadSuccess: function(n, t, i) {
                var u = r(n);
                this._fileState(u, "uploaded");
                u.removeClass("k-file-progress").addClass("k-file-success");
                this._updateHeaderUploadStatus();
                this.trigger(p, {
                    files: u.data("fileNames"),
                    response: t,
                    operation: "upload",
                    XMLHttpRequest: i
                });
                this._supportsRemove() ? this._fileAction(u, f) : this._clearFileAction(u);
                this._checkAllComplete()
            },
            _onUploadError: function(t, i) {
                var u = r(t),
                f = n(".k-upload-pct", u);
                this._fileState(u, "failed");
                u.removeClass("k-file-progress").addClass("k-file-error");
                n(".k-progress", u).width("100%");
                f.length > 0 ? f.empty().removeClass("k-upload-pct").addClass("k-icon k-warning") : n(".k-upload-status", u).prepend("<span class='k-icon k-warning'><\/span>");
                this._updateHeaderUploadStatus();
                this._fileAction(u, "retry");
                this.trigger(o, {
                    operation: "upload",
                    files: u.data("fileNames"),
                    XMLHttpRequest: i
                });
                et("Server response: " + i.responseText);
                this._checkAllComplete()
            },
            _showUploadButton: function() {
                var t = n(".k-upload-selected", this.wrapper);
                0 === t.length && (t = this._renderAction("", this.localization.uploadSelectedFiles).addClass("k-upload-selected"));
                this.wrapper.append(t)
            },
            _hideUploadButton: function() {
                n(".k-upload-selected", this.wrapper).remove()
            },
            _showHeaderUploadStatus: function() {
                var i = this.localization,
                r = n(".k-dropzone", this.wrapper),
                t = n(".k-upload-status-total", this.wrapper);
                0 !== t.length && t.remove();
                t = '<strong class="k-upload-status k-upload-status-total">' + i.headerStatusUploading + '<span class="k-icon k-loading">' + i.statusUploading + "<\/span><\/strong>";
                r.length > 0 ? r.append(t) : n(".k-upload-button", this.wrapper).after(t)
            },
            _updateHeaderUploadStatus: function() {
                var i, r, u, t = this,
                f = t.localization,
                e = n(".k-file", t.wrapper).not(".k-file-success, .k-file-error");
                0 === e.length && (i = n(".k-file.k-file-error", t.wrapper), r = n(".k-upload-status-total", t.wrapper), u = n(".k-icon", r).removeClass("k-loading").addClass(0 !== i.length ? "k-warning": "k-i-tick").text(0 !== i.length ? f.statusWarning: f.statusUploaded), r.text(t.localization.headerStatusUploaded).append(u))
            },
            _hideHeaderUploadstatus: function() {
                n(".k-upload-status-total", this.wrapper).remove()
            },
            _onParentFormSubmit: function() {
                var i, u = this,
                r = u.element;
                t !== this._module.onAbort && this._module.onAbort();
                r.value || (i = n(r), i.attr("disabled", "disabled"), window.setTimeout(function() {
                    i.removeAttr("disabled")
                },
                0))
            },
            _onParentFormReset: function() {
                n(".k-upload-files", this.wrapper).remove()
            },
            _supportsFormData: function() {
                return "undefined" != typeof FormData
            },
            _supportsMultiple: function() {
                var n = this._userAgent().indexOf("Windows") > -1;
                return ! (i.support.browser.opera || i.support.browser.safari && n)
            },
            _supportsDrop: function() {
                var n = this._userAgent().toLowerCase(),
                t = /chrome/.test(n),
                i = !t && /safari/.test(n),
                r = i && /windows/.test(n);
                return ! r && this._supportsFormData() && this.options.async.saveUrl
            },
            _userAgent: function() {
                return navigator.userAgent
            },
            _setupDropZone: function() {
                var i, t, r = this;
                n(".k-upload-button", this.wrapper).wrap("<div class='k-dropzone'><\/div>");
                i = r._ns;
                t = n(".k-dropzone", r.wrapper).append(n("<em>" + r.localization.dropFilesHere + "<\/em>")).on("dragenter" + i, rt).on("dragover" + i,
                function(n) {
                    n.preventDefault()
                }).on("drop" + i, n.proxy(this._onDrop, this));
                ut(t, i,
                function() {
                    t.addClass("k-dropzone-hovered")
                },
                function() {
                    t.removeClass("k-dropzone-hovered")
                });
                ut(n(document), i,
                function() {
                    t.addClass("k-dropzone-active");
                    t.closest(".k-upload").removeClass("k-upload-empty")
                },
                function() {
                    t.removeClass("k-dropzone-active");
                    0 === n("li.k-file", t.closest(".k-upload")).length && t.closest(".k-upload").addClass("k-upload-empty")
                })
            },
            _supportsRemove: function() {
                return !! this.options.async.removeUrl
            },
            _submitRemove: function(t, i, r, u) {
                var e = this,
                o = e.options.async.removeField || "fileNames",
                f = n.extend(i, c());
                f[o] = t;
                jQuery.ajax({
                    type: this.options.async.removeVerb,
                    dataType: "json",
                    dataFilter: it,
                    url: this.options.async.removeUrl,
                    traditional: !0,
                    data: f,
                    success: r,
                    error: u
                })
            },
            _wrapInput: function(n) {
                var t = this,
                i = t.options;
                return n.wrap("<div class='k-widget k-upload k-header'><div class='k-button k-upload-button'><\/div><\/div>"),
                i.async.saveUrl || n.closest(".k-upload").addClass("k-upload-sync"),
                n.closest(".k-upload").addClass("k-upload-empty"),
                n.closest(".k-button").append("<span>" + this.localization.select + "<\/span>"),
                n.closest(".k-upload")
            },
            _checkAllComplete: function() {
                0 === n(".k-file.k-file-progress", this.wrapper).length && this.trigger(ot)
            },
            _inputFiles: function(n) {
                return k(n)
            }
        }),
        ht = function(n) {
            this.name = "syncUploadModule";
            this.element = n.wrapper;
            this.upload = n;
            this.element.closest("form").attr("enctype", "multipart/form-data").attr("encoding", "multipart/form-data")
        };
        ht.prototype = {
            onSelect: function(t, i) {
                var e, r = this.upload,
                u = n(t.target);
                r._addInput(u);
                e = r._enqueueFile(b(u), {
                    relatedInput: u,
                    fileNames: i
                });
                r._fileAction(e, f)
            },
            onRemove: function(n) {
                var t = r(n);
                t.data("relatedInput").remove();
                this.upload._removeFileEntry(t)
            }
        };
        l = function(n) {
            this.name = "iframeUploadModule";
            this.element = n.wrapper;
            this.upload = n;
            this.iframes = []
        };
        w._frameId = 0;
        l.prototype = {
            onSelect: function(t, i) {
                var r = this.upload,
                e = n(t.target),
                u = this.prepareUpload(e, i);
                r.options.async.autoUpload ? this.performUpload(u) : (r._supportsRemove() && this.upload._fileAction(u, f), r._showUploadButton())
            },
            prepareUpload: function(t, i) {
                var u, e, f, r = this.upload,
                o = n(r.element),
                s = r.options.async.saveField || t.attr("name");
                return r._addInput(t),
                t.attr("name", s),
                u = this.createFrame(r.name + "_" + w._frameId++),
                this.registerFrame(u),
                e = this.createForm(r.options.async.saveUrl, u.attr("name")).append(o),
                f = r._enqueueFile(b(t), {
                    frame: u,
                    relatedInput: o,
                    fileNames: i
                }),
                u.data({
                    form: e,
                    file: f
                }),
                f
            },
            performUpload: function(t) {
                var f, e, o, u = {
                    files: t.data("fileNames")
                },
                r = t.data("frame"),
                i = this.upload;
                if (i.trigger(y, u)) i._removeFileEntry(r.data("file")),
                this.cleanupFrame(r),
                this.unregisterFrame(r);
                else {
                    i._hideUploadButton();
                    i._showHeaderUploadStatus();
                    r.appendTo(document.body);
                    f = r.data("form").attr("action", i.options.async.saveUrl).appendTo(document.body);
                    u.data = n.extend({},
                    u.data, c());
                    for (e in u.data) o = f.find("input[name='" + e + "']"),
                    0 === o.length && (o = n("<input>", {
                        type: "hidden",
                        name: e
                    }).prependTo(f)),
                    o.val(u.data[e]);
                    i._fileAction(t, s);
                    i._fileState(t, "uploading");
                    n(t).addClass("k-file-progress");
                    r.one("load", n.proxy(this.onIframeLoad, this));
                    f[0].submit()
                }
            },
            onSaveSelected: function() {
                var t = this;
                n(".k-file", this.element).each(function() {
                    var i = n(this),
                    r = ft(i);
                    r || t.performUpload(i)
                })
            },
            onIframeLoad: function(t) {
                var i, r = n(t.target);
                try {
                    i = r.contents().text()
                } catch(u) {
                    i = "Error trying to get server response: " + u
                }
                this.processResponse(r, i)
            },
            processResponse: function(t, i) {
                var f = t.data("file"),
                r = this,
                u = {
                    responseText: i
                };
                tt(i,
                function(i) {
                    n.extend(u, {
                        statusText: "OK",
                        status: "200"
                    });
                    r.upload._onFileProgress({
                        target: n(f, r.upload.wrapper)
                    },
                    100);
                    r.upload._onUploadSuccess({
                        target: n(f, r.upload.wrapper)
                    },
                    i, u);
                    r.cleanupFrame(t);
                    r.unregisterFrame(t)
                },
                function() {
                    n.extend(u, {
                        statusText: "error",
                        status: "500"
                    });
                    r.upload._onUploadError({
                        target: n(f, r.upload.wrapper)
                    },
                    u)
                })
            },
            onCancel: function(t) {
                var i = n(t.target).data("frame");
                this.stopFrameSubmit(i);
                this.cleanupFrame(i);
                this.unregisterFrame(i);
                this.upload._removeFileEntry(i.data("file"))
            },
            onRetry: function(n) {
                var t = r(n);
                this.performUpload(t)
            },
            onRemove: function(n, t) {
                var i = r(n),
                u = i.data("frame");
                u ? (this.unregisterFrame(u), this.upload._removeFileEntry(i), this.cleanupFrame(u)) : nt(i, this.upload, t)
            },
            onAbort: function() {
                var t = this.element,
                i = this;
                n.each(this.iframes,
                function() {
                    n("input", this.data("form")).appendTo(t);
                    i.stopFrameSubmit(this[0]);
                    this.data("form").remove();
                    this.remove()
                });
                this.iframes = []
            },
            createFrame: function(t) {
                return n("<iframe name='" + t + "' id='" + t + "' style='display:none;' />")
            },
            createForm: function(t, i) {
                return n("<form enctype='multipart/form-data' method='POST' action='" + t + "' target='" + i + "'/>")
            },
            stopFrameSubmit: function(n) {
                t !== n.stop ? n.stop() : n.document && n.document.execCommand("Stop")
            },
            registerFrame: function(n) {
                this.iframes.push(n)
            },
            unregisterFrame: function(t) {
                this.iframes = n.grep(this.iframes,
                function(n) {
                    return n.attr("name") != t.attr("name")
                })
            },
            cleanupFrame: function(n) {
                var t = n.data("form");
                n.data("file").data("frame", null);
                setTimeout(function() {
                    t.remove();
                    n.remove()
                },
                1)
            }
        };
        a = function(n) {
            this.name = "formDataUploadModule";
            this.element = n.wrapper;
            this.upload = n
        };
        a.prototype = {
            onSelect: function(t, i) {
                var r = this.upload,
                u = this,
                e = n(t.target),
                o = this.prepareUpload(e, i);
                n.each(o,
                function() {
                    r.options.async.autoUpload ? u.performUpload(this) : (r._supportsRemove() && r._fileAction(this, f), r._showUploadButton())
                })
            },
            prepareUpload: function(t, i) {
                var r = this.enqueueFiles(i);
                return t.is("input") && (n.each(r,
                function() {
                    n(this).data("relatedInput", t)
                }), t.data("relatedFileEntries", r), this.upload._addInput(t)),
                r
            },
            enqueueFiles: function(t) {
                var r, u, f, i, e = this.upload,
                s = t.length,
                o = [];
                if (e.options.async.batch === !0) r = n.map(t,
                function(n) {
                    return n.name
                }).join(", "),
                i = e._enqueueFile(r, {
                    fileNames: t
                }),
                i.data("files", t),
                o.push(i);
                else for (u = 0; s > u; u++) f = t[u],
                r = f.name,
                i = e._enqueueFile(r, {
                    fileNames: [f]
                }),
                i.data("files", [f]),
                o.push(i);
                return o
            },
            performUpload: function(t) {
                var u, i = this.upload,
                f = this.createFormData(),
                e = new XMLHttpRequest,
                r = {
                    files: t.data("fileNames"),
                    XMLHttpRequest: e
                };
                if (i.trigger(y, r)) this.removeFileEntry(t);
                else {
                    i._fileAction(t, s);
                    i._hideUploadButton();
                    i._showHeaderUploadStatus();
                    r.data = n.extend({},
                    r.data, c());
                    for (u in r.data) f.append(u, r.data[u]);
                    this.populateFormData(f, t.data("files"));
                    i._fileState(t, "uploading");
                    n(t).addClass("k-file-progress");
                    this.postFormData(i.options.async.saveUrl, f, t, e)
                }
            },
            onSaveSelected: function() {
                var t = this;
                n(".k-file", this.element).each(function() {
                    var i = n(this),
                    r = ft(i);
                    r || t.performUpload(i)
                })
            },
            onCancel: function(n) {
                var t = r(n);
                this.stopUploadRequest(t);
                this.removeFileEntry(t)
            },
            onRetry: function(n) {
                var t = r(n);
                this.performUpload(t)
            },
            onRemove: function(n, t) {
                var i = r(n);
                i.hasClass("k-file-success") ? nt(i, this.upload, t) : this.removeFileEntry(i)
            },
            postFormData: function(n, t, i, r) {
                var u = this;
                i.data("request", r);
                r.addEventListener("load",
                function(n) {
                    u.onRequestSuccess.call(u, n, i)
                },
                !1);
                r.addEventListener(o,
                function(n) {
                    u.onRequestError.call(u, n, i)
                },
                !1);
                r.upload.addEventListener("progress",
                function(n) {
                    u.onRequestProgress.call(u, n, i)
                },
                !1);
                r.open("POST", n, !0);
                r.withCredentials = "true";
                r.send(t)
            },
            createFormData: function() {
                return new FormData
            },
            populateFormData: function(n, t) {
                for (var r = this.upload,
                u = t.length,
                i = 0; u > i; i++) n.append(r.options.async.saveField || r.name, t[i].rawFile);
                return n
            },
            onRequestSuccess: function(t, i) {
                function f() {
                    r.upload._onUploadError({
                        target: n(i, r.upload.wrapper)
                    },
                    u)
                }
                var u = t.target,
                r = this;
                u.status >= 200 && 299 >= u.status ? tt(u.responseText,
                function(t) {
                    r.upload._onFileProgress({
                        target: n(i, r.upload.wrapper)
                    },
                    100);
                    r.upload._onUploadSuccess({
                        target: n(i, r.upload.wrapper)
                    },
                    t, u);
                    r.cleanupFileEntry(i)
                },
                f) : f()
            },
            onRequestError: function(t, i) {
                var r = t.target;
                this.upload._onUploadError({
                    target: n(i, this.upload.wrapper)
                },
                r)
            },
            cleanupFileEntry: function(t) {
                var i = t.data("relatedInput"),
                r = !0;
                i && (n.each(i.data("relatedFileEntries") || [],
                function() {
                    this.parent().length > 0 && this[0] != t[0] && (r = r && this.hasClass("k-file-success"))
                }), r && i.remove())
            },
            removeFileEntry: function(n) {
                this.cleanupFileEntry(n);
                this.upload._removeFileEntry(n)
            },
            onRequestProgress: function(t, i) {
                var r = Math.round(100 * t.loaded / t.total);
                this.upload._onFileProgress({
                    target: n(i, this.upload.wrapper)
                },
                r)
            },
            stopUploadRequest: function(n) {
                n.data("request").abort()
            }
        };
        i.ui.plugin(w)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min", "./kendo.data.odata.min", "./kendo.data.xml.min"], n)
} (function() {
    return function(n, t) {
        function vt(n, t, i, u) {
            return function(f) {
                var o, e = {};
                for (o in f) e[o] = f[o];
                e.field = u ? i + "." + f.field: i;
                t == r && n._notifyChange && n._notifyChange(e);
                n.trigger(t, e)
            }
        }
        function ci(t, i) {
            if (t === i) return ! 0;
            var u, r = n.type(t),
            f = n.type(i);
            if (r !== f) return ! 1;
            if ("date" === r) return t.getTime() === i.getTime();
            if ("object" !== r && "array" !== r) return ! 1;
            for (u in t) if (!ci(t[u], i[u])) return ! 1;
            return ! 0
        }
        function wr(n, t) {
            var i;
            for (var r in n) if ((i = n[r], k(i) && i.field && i.field === t) || i === t) return i;
            return null
        }
        function u(n) {
            this.data = n || []
        }
        function rt(n, i) {
            if (n) {
                var r = typeof n === o ? {
                    field: n,
                    dir: i
                }: n,
                u = l(r) ? r: r !== t ? [r] : [];
                return ru(u,
                function(n) {
                    return !! n.dir
                })
            }
        }
        function li(n) {
            var i, f, r, t, u = n.filters;
            if (u) for (i = 0, f = u.length; f > i; i++) r = u[i],
            t = r.operator,
            t && typeof t === o && (r.operator = or[t.toLowerCase()] || t),
            li(r)
        }
        function ot(n) {
            return n && !nt(n) ? ((l(n) || !n.filters) && (n = {
                logic: "and",
                filters: l(n) ? n: [n]
            }), li(n), n) : t
        }
        function br(n) {
            return l(n) ? n: [n]
        }
        function ut(n, i) {
            var r = typeof n === o ? {
                field: n,
                dir: i
            }: n,
            u = l(r) ? r: r !== t ? [r] : [];
            return bt(u,
            function(n) {
                return {
                    field: n.field,
                    dir: n.dir || "asc",
                    aggregates: n.aggregates
                }
            })
        }
        function kr(n, t) {
            return n && n.getTime && t && t.getTime ? n.getTime() === t.getTime() : n === t
        }
        function dr(n, t, r, u, f, e) {
            var h, c, s, l, o;
            for (t = t || [], l = t.length, h = 0; l > h; h++) c = t[h],
            s = c.aggregate,
            o = c.field,
            n[o] = n[o] || {},
            e[o] = e[o] || {},
            e[o][s] = e[o][s] || {},
            n[o][s] = sr[s.toLowerCase()](n[o][s], r, i.accessor(o), u, f, e[o][s])
        }
        function a(n) {
            return "number" == typeof n && !isNaN(n)
        }
        function gr(n) {
            for (var i = n.length,
            r = Array(i), t = 0; i > t; t++) r[t] = n[t].toJSON();
            return r
        }
        function ai(n, t) {
            t = t || {};
            var i = new u(n),
            f = t.aggregate,
            r = t.filter;
            return r && (i = i.filter(r)),
            i.aggregate(f)
        }
        function nu(n, t, i, r, u) {
            for (var e, f, o, s = 0,
            h = n.length; h > s; s++) {
                e = n[s];
                for (f in t) o = u[f],
                o && o !== f && (e[o] = t[f](e), delete e[f])
            }
        }
        function vi(n, t, i, r, u) {
            for (var e, f, o, s = 0,
            h = n.length; h > s; s++) {
                e = n[s];
                for (f in t) e[f] = i._parse(f, t[f](e)),
                o = u[f],
                o && o !== f && delete e[o]
            }
        }
        function yi(n, t, i, r, u) {
            for (var f, o, e = 0,
            s = n.length; s > e; e++) f = n[e],
            o = r[f.field],
            o && o != f.field && (f.field = o),
            f.value = i._parse(f.field, f.value),
            f.hasSubgroups ? yi(f.items, t, i, r, u) : vi(f.items, t, i, r, u)
        }
        function yt(n, t, i, r, u, f) {
            return function(e) {
                return e = n(e),
                e && !nt(r) && ("[object Array]" === at.call(e) || e instanceof w || (e = [e]), i(e, r, new t, u, f)),
                e || []
            }
        }
        function pt(n, t, i, r) {
            for (var f, u, o, e = 0; t.length && r && (f = t[e], u = f.items, o = u.length, n && n.field === f.field && n.value === f.value ? (n.hasSubgroups && n.items.length ? pt(n.items[n.items.length - 1], f.items, i, r) : (u = u.slice(i, i + r), n.items = n.items.concat(u)), t.splice(e--, 1)) : f.hasSubgroups && u.length ? pt(f, u, i, r) : (u = u.slice(i, i + r), f.items = u, f.items.length || t.splice(e--, 1)), 0 === u.length ? i -= o: (i = 0, r -= u.length), !(++e >= t.length)););
            t.length > e && t.splice(e, t.length - e)
        }
        function pi(n) {
            for (var i = [], t = 0, r = n.length; r > t; t++) i = n[t].hasSubgroups ? i.concat(pi(n[t].items)) : i.concat(n[t].items.slice());
            return i
        }
        function wi(n, t) {
            var r, f, u, i;
            if (t) for (r = 0, f = n.length; f > r; r++) u = n[r],
            i = u.items,
            u.hasSubgroups ? wi(i, t) : !i.length || i[0] instanceof t || (i.type = t, i.wrapAll(i, i))
        }
        function bi(n, t) {
            for (var i = 0,
            r = n.length; r > i; i++) if (n[i].hasSubgroups) {
                if (bi(n[i].items, t)) return ! 0
            } else if (t(n[i].items, n[i])) return ! 0
        }
        function ki(n, t) {
            for (var i = 0,
            r = n.length; r > i; i++) if (n[i].uid == t.uid) return t = n[i],
            n.splice(i, 1),
            t
        }
        function wt(n, t) {
            for (var i, u, r = n.length - 1,
            f = 0; r >= f; r--) u = n[r],
            i = {
                value: t.get(u.field),
                field: u.field,
                items: i ? [i] : [t],
                hasSubgroups: !!i,
                aggregates: {}
            };
            return i
        }
        function di(n, t) {
            return t ? nr(n,
            function(n) {
                return n[t.idField] === t.id
            }) : -1
        }
        function gi(n, t) {
            return t ? nr(n,
            function(n) {
                return n.uid == t.uid
            }) : -1
        }
        function nr(n, t) {
            for (var i = 0,
            r = n.length; r > i; i++) if (t(n[i])) return i;
            return - 1
        }
        function tr(n, t) {
            var i, r;
            return n && !nt(n) ? (i = n[t], r = k(i) ? i.from || i.field || t: n[t] || t, v(r) ? t: r) : t
        }
        function ir(n, t) {
            var r, f, u, i = {};
            for (u in n)"filters" !== u && (i[u] = n[u]);
            if (n.filters) for (i.filters = [], r = 0, f = n.filters.length; f > r; r++) i.filters[r] = ir(n.filters[r], t);
            else i.field = tr(t.fields, i.field);
            return i
        }
        function st(n, t) {
            for (var i, u, f, o = [], r = 0, e = n.length; e > r; r++) {
                i = {};
                u = n[r];
                for (f in u) i[f] = u[f];
                i.field = tr(t.fields, i.field);
                i.aggregates && l(i.aggregates) && (i.aggregates = st(i.aggregates, t));
                o.push(i)
            }
            return o
        }
        function tu(t, i) {
            for (var e, u, r, s = n(t)[0].children, h = [], c = i[0], l = i[1], f = 0, o = s.length; o > f; f++) e = {},
            r = s[f],
            r.disabled || (e[c.field] = r.text, u = r.attributes.value, u = u && u.specified ? r.value: r.text, e[l.field] = u, h.push(e));
            return h
        }
        function iu(t, i) {
            for (var r, h, f, e, o, c = n(t)[0].tBodies[0], l = c ? c.rows: [], v = i.length, a = [], u = 0, s = l.length; s > u; u++) {
                for (f = {},
                o = !0, h = l[u].cells, r = 0; v > r; r++) e = h[r],
                "th" !== e.nodeName.toLowerCase() && (o = !1, f[i[r].field] = e.innerHTML);
                o || a.push(f)
            }
            return a
        }
        function rr(n) {
            return function() {
                var t = this._data,
                i = h.fn[n].apply(this, hi.call(arguments));
                return this._data != t && this._attachBubbleHandlers(),
                i
            }
        }
        function ur(t, i) {
            function s(n, t) {
                return n.filter(t).add(n.find(t))
            }
            for (var r, f, h, o, c, u, a = n(t).children(), v = [], b = i[0].field, y = i[1] && i[1].field, p = i[2] && i[2].field, w = i[3] && i[3].field, e = 0, l = a.length; l > e; e++) r = {
                _loaded: !0
            },
            f = a.eq(e),
            o = f[0].firstChild,
            u = f.children(),
            t = u.filter("ul"),
            u = u.filter(":not(ul)"),
            h = f.attr("data-id"),
            h && (r.id = h),
            o && (r[b] = 3 == o.nodeType ? o.nodeValue: u.text()),
            y && (r[y] = s(u, "a").attr("href")),
            w && (r[w] = s(u, "img").attr("src")),
            p && (c = s(u, ".k-sprite").prop("className"), r[p] = c && n.trim(c.replace("k-sprite", ""))),
            t.length && (r.items = ur(t.eq(0), i)),
            "true" == f.attr("data-hasChildren") && (r.hasChildren = !0),
            v.push(r);
            return v
        }
        var bt, ht, fr, er, or, sr, kt, dt, g, gt, h, ni, ti, b, ii, hr, e = n.extend,
        c = n.proxy,
        k = n.isPlainObject,
        nt = n.isEmptyObject,
        l = n.isArray,
        ru = n.grep,
        ri = n.ajax,
        ui = n.each,
        d = n.noop,
        i = window.kendo,
        v = i.isFunction,
        tt = i.Observable,
        ct = i.Class,
        o = "string",
        fi = "function",
        cr = "create",
        lr = "read",
        ar = "update",
        vr = "destroy",
        r = "change",
        yr = "sync",
        ei = "get",
        p = "error",
        ft = "requestStart",
        oi = "progress",
        it = "requestEnd",
        uu = [cr, lr, ar, vr],
        et = function(n) {
            return n
        },
        lt = i.getter,
        si = i.stringify,
        f = Math,
        fu = [].push,
        eu = [].join,
        ou = [].pop,
        su = [].splice,
        hu = [].shift,
        hi = [].slice,
        cu = [].unshift,
        at = {}.toString,
        lu = i.support.stableSort,
        au = /^\/Date\((.*?)\)\/$/,
        vu = /(\r+|\n+)/g,
        yu = /(?=['\\])/g,
        w = tt.extend({
            init: function(n, t) {
                var i = this;
                i.type = t || s;
                tt.fn.init.call(i);
                i.length = n.length;
                i.wrapAll(n, i)
            },
            toJSON: function() {
                for (var t, i = this.length,
                r = Array(i), n = 0; i > n; n++) t = this[n],
                t instanceof s && (t = t.toJSON()),
                r[n] = t;
                return r
            },
            parent: d,
            wrapAll: function(n, t) {
                var i, r, u = this,
                f = function() {
                    return u
                };
                for (t = t || [], i = 0, r = n.length; r > i; i++) t[i] = u.wrap(n[i], f);
                return t
            },
            wrap: function(n, t) {
                var u, i = this;
                return null !== n && "[object Object]" === at.call(n) && (u = n instanceof i.type || n instanceof y, u || (n = n instanceof s ? n.toJSON() : n, n = new i.type(n)), n.parent = t, n.bind(r,
                function(n) {
                    i.trigger(r, {
                        field: n.field,
                        node: n.node,
                        index: n.index,
                        items: n.items || [this],
                        action: n.node ? n.action || "itemchange": "itemchange"
                    })
                })),
                n
            },
            push: function() {
                var n, i = this.length,
                t = this.wrapAll(arguments);
                return n = fu.apply(this, t),
                this.trigger(r, {
                    action: "add",
                    index: i,
                    items: t
                }),
                n
            },
            slice: hi,
            join: eu,
            pop: function() {
                var n = this.length,
                t = ou.apply(this);
                return n && this.trigger(r, {
                    action: "remove",
                    index: n - 1,
                    items: [t]
                }),
                t
            },
            splice: function(n, t, i) {
                var u, f, e, o = this.wrapAll(hi.call(arguments, 2));
                if (u = su.apply(this, [n, t].concat(o)), u.length) for (this.trigger(r, {
                    action: "remove",
                    index: n,
                    items: u
                }), f = 0, e = u.length; e > f; f++) u[f].children && u[f].unbind(r);
                return i && this.trigger(r, {
                    action: "add",
                    index: n,
                    items: o
                }),
                u
            },
            shift: function() {
                var t = this.length,
                n = hu.apply(this);
                return t && this.trigger(r, {
                    action: "remove",
                    index: 0,
                    items: [n]
                }),
                n
            },
            unshift: function() {
                var n, t = this.wrapAll(arguments);
                return n = cu.apply(this, t),
                this.trigger(r, {
                    action: "add",
                    index: 0,
                    items: t
                }),
                n
            },
            indexOf: function(n) {
                for (var r = this,
                t = 0,
                i = r.length; i > t; t++) if (r[t] === n) return t;
                return - 1
            },
            forEach: function(n) {
                for (var t = 0,
                i = this.length; i > t; t++) n(this[t], t, this)
            },
            map: function(n) {
                for (var t = 0,
                i = [], r = this.length; r > t; t++) i[t] = n(this[t], t, this);
                return i
            },
            filter: function(n) {
                for (var i, t = 0,
                r = [], u = this.length; u > t; t++) i = this[t],
                n(i, t, this) && (r[r.length] = i);
                return r
            },
            find: function(n) {
                for (var i, t = 0,
                r = this.length; r > t; t++) if (i = this[t], n(i, t, this)) return i
            },
            every: function(n) {
                for (var i, t = 0,
                r = this.length; r > t; t++) if (i = this[t], !n(i, t, this)) return ! 1;
                return ! 0
            },
            some: function(n) {
                for (var i, t = 0,
                r = this.length; r > t; t++) if (i = this[t], n(i, t, this)) return ! 0;
                return ! 1
            },
            remove: function(n) {
                this.splice(this.indexOf(n), 1)
            },
            empty: function() {
                this.splice(0, this.length)
            }
        }),
        s = tt.extend({
            init: function(n) {
                var r, t, u = this,
                f = function() {
                    return u
                };
                tt.fn.init.call(this);
                for (t in n) r = n[t],
                "_" != t.charAt(0) && (r = u.wrap(r, t, f)),
                u[t] = r;
                u.uid = i.guid()
            },
            shouldSerialize: function(n) {
                return this.hasOwnProperty(n) && "_events" !== n && typeof this[n] !== fi && "uid" !== n
            },
            forEach: function(n) {
                for (var t in this) this.shouldSerialize(t) && n(this[t], t)
            },
            toJSON: function() {
                var n, t, i = {};
                for (t in this) this.shouldSerialize(t) && (n = this[t], (n instanceof s || n instanceof w) && (n = n.toJSON()), i[t] = n);
                return i
            },
            get: function(n) {
                var r, t = this;
                return t.trigger(ei, {
                    field: n
                }),
                r = "this" === n ? t: i.getter(n, !0)(t)
            },
            _set: function(n, t) {
                var r, u, f, o = this,
                e = n.indexOf(".") >= 0;
                if (e) for (r = n.split("."), u = ""; r.length > 1;) {
                    if (u += r.shift(), f = i.getter(u, !0)(o), f instanceof s) return f.set(r.join("."), t),
                    e;
                    u += "."
                }
                return i.setter(n)(o, t),
                e
            },
            set: function(n, t) {
                var u = this,
                f = n.indexOf(".") >= 0,
                e = i.getter(n, !0)(u);
                e !== t && (u.trigger("set", {
                    field: n,
                    value: t
                }) || (f || (t = u.wrap(t, n,
                function() {
                    return u
                })), (!u._set(n, t) || n.indexOf("(") >= 0 || n.indexOf("[") >= 0) && u.trigger(r, {
                    field: n
                })))
            },
            parent: d,
            wrap: function(n, t, i) {
                var u, f, o = this,
                e = at.call(n);
                return null == n || "[object Object]" !== e && "[object Array]" !== e || (u = n instanceof w, f = n instanceof h, "[object Object]" !== e || f || u ? ("[object Array]" === e || u || f) && (u || f || (n = new w(n)), n.parent() != i() && n.bind(r, vt(o, r, t, !1))) : (n instanceof s || (n = new s(n)), n.parent() != i() && (n.bind(ei, vt(o, ei, t, !0)), n.bind(r, vt(o, r, t, !0)))), n.parent = i),
                n
            }
        }),
        pr = {
            number: function(n) {
                return i.parseFloat(n)
            },
            date: function(n) {
                return i.parseDate(n)
            },
            boolean: function(n) {
                return typeof n === o ? "true" === n.toLowerCase() : null != n ? !!n: n
            },
            string: function(n) {
                return null != n ? n + "": n
            },
            "default": function(n) {
                return n
            }
        },
        pu = {
            string: "",
            number: 0,
            date: new Date,
            boolean: !1,
            "default": ""
        },
        y = s.extend({
            init: function(i) {
                var r = this; (!i || n.isEmptyObject(i)) && (i = n.extend({},
                r.defaults, i));
                s.fn.init.call(r, i);
                r.dirty = !1;
                r.idField && (r.id = r.get(r.idField), r.id === t && (r.id = r._defaultId))
            },
            shouldSerialize: function(n) {
                return s.fn.shouldSerialize.call(this, n) && "uid" !== n && !("id" !== this.idField && "id" === n) && "dirty" !== n && "_accessors" !== n
            },
            _parse: function(n, t) {
                var i, u = this,
                f = n,
                r = u.fields || {};
                return n = r[n],
                n || (n = wr(r, f)),
                n && (i = n.parse, !i && n.type && (i = pr[n.type.toLowerCase()])),
                i ? i(t) : t
            },
            _notifyChange: function(n) {
                var t = n.action; ("add" == t || "remove" == t) && (this.dirty = !0)
            },
            editable: function(n) {
                return n = (this.fields || {})[n],
                n ? n.editable !== !1 : !0
            },
            set: function(n, t, i) {
                var r = this;
                r.editable(n) && (t = r._parse(n, t), ci(t, r.get(n)) || (r.dirty = !0, s.fn.set.call(r, n, t, i)))
            },
            accept: function(n) {
                var i, r, t = this,
                u = function() {
                    return t
                };
                for (i in n) r = n[i],
                "_" != i.charAt(0) && (r = t.wrap(n[i], i, u)),
                t._set(i, r);
                t.idField && (t.id = t.get(t.idField));
                t.dirty = !1
            },
            isNew: function() {
                return this.id === this._defaultId
            }
        });
        y.define = function(n, i) {
            i === t && (i = n, n = y);
            var s, f, u, v, c, l, w, h, r = e({
                defaults: {}
            },
            i),
            p = {},
            a = r.id;
            if (a && (r.idField = a), r.id && delete r.id, a && (r.defaults[a] = r._defaultId = ""), "[object Array]" === at.call(r.fields)) {
                for (l = 0, w = r.fields.length; w > l; l++) u = r.fields[l],
                typeof u === o ? p[u] = {}: u.field && (p[u.field] = u);
                r.fields = p
            }
            for (f in r.fields) u = r.fields[f],
            v = u.type || "default",
            c = null,
            h = f,
            f = typeof u.field === o ? u.field: f,
            u.nullable || (c = r.defaults[h !== f ? h: f] = u.defaultValue !== t ? u.defaultValue: pu[v.toLowerCase()]),
            i.id === f && (r._defaultId = c),
            r.defaults[h !== f ? h: f] = c,
            u.parse = u.parse || pr[v];
            return s = n.extend(r),
            s.define = function(n) {
                return y.define(s, n)
            },
            r.fields && (s.fields = r.fields, s.idField = r.idField),
            s
        };
        ht = {
            selector: function(n) {
                return v(n) ? n: lt(n)
            },
            compare: function(n) {
                var t = this.selector(n);
                return function(n, i) {
                    return n = t(n),
                    i = t(i),
                    null == n && null == i ? 0 : null == n ? -1 : null == i ? 1 : n.localeCompare ? n.localeCompare(i) : n > i ? 1 : i > n ? -1 : 0
                }
            },
            create: function(n) {
                var t = n.compare || this.compare(n.field);
                return "desc" == n.dir ?
                function(n, i) {
                    return t(i, n, !0)
                }: t
            },
            combine: function(n) {
                return function(t, i) {
                    for (var u = n[0](t, i), r = 1, f = n.length; f > r; r++) u = u || n[r](t, i);
                    return u
                }
            }
        };
        fr = e({},
        ht, {
            asc: function(n) {
                var t = this.selector(n);
                return function(n, i) {
                    var r = t(n),
                    u = t(i);
                    return r && r.getTime && u && u.getTime && (r = r.getTime(), u = u.getTime()),
                    r === u ? n.__position - i.__position: null == r ? -1 : null == u ? 1 : r.localeCompare ? r.localeCompare(u) : r > u ? 1 : -1
                }
            },
            desc: function(n) {
                var t = this.selector(n);
                return function(n, i) {
                    var u = t(n),
                    r = t(i);
                    return u && u.getTime && r && r.getTime && (u = u.getTime(), r = r.getTime()),
                    u === r ? n.__position - i.__position: null == u ? 1 : null == r ? -1 : r.localeCompare ? r.localeCompare(u) : r > u ? 1 : -1
                }
            },
            create: function(n) {
                return this[n.dir](n.field)
            }
        });
        bt = function(n, t) {
            for (var r = n.length,
            u = Array(r), i = 0; r > i; i++) u[i] = t(n[i], i, n);
            return u
        };
        er = function() {
            function t(n) {
                return n.replace(yu, "\\").replace(vu, "")
            }
            function n(n, i, r, u) {
                var f;
                return null != r && (typeof r === o && (r = t(r), f = au.exec(r), f ? r = new Date( + f[1]) : u ? (r = "'" + r.toLowerCase() + "'", i = "(" + i + " || '').toLowerCase()") : r = "'" + r + "'"), r.getTime && (i = "(" + i + "?" + i + ".getTime():" + i + ")", r = r.getTime())),
                i + " " + n + " " + r
            }
            return {
                eq: function(t, i, r) {
                    return n("==", t, i, r)
                },
                neq: function(t, i, r) {
                    return n("!=", t, i, r)
                },
                gt: function(t, i, r) {
                    return n(">", t, i, r)
                },
                gte: function(t, i, r) {
                    return n(">=", t, i, r)
                },
                lt: function(t, i, r) {
                    return n("<", t, i, r)
                },
                lte: function(t, i, r) {
                    return n("<=", t, i, r)
                },
                startswith: function(n, i, r) {
                    return r && (n = "(" + n + " || '').toLowerCase()", i && (i = i.toLowerCase())),
                    i && (i = t(i)),
                    n + ".lastIndexOf('" + i + "', 0) == 0"
                },
                endswith: function(n, i, r) {
                    return r && (n = "(" + n + " || '').toLowerCase()", i && (i = i.toLowerCase())),
                    i && (i = t(i)),
                    n + ".indexOf('" + i + "', " + n + ".length - " + (i || "").length + ") >= 0"
                },
                contains: function(n, i, r) {
                    return r && (n = "(" + n + " || '').toLowerCase()", i && (i = i.toLowerCase())),
                    i && (i = t(i)),
                    n + ".indexOf('" + i + "') >= 0"
                },
                doesnotcontain: function(n, i, r) {
                    return r && (n = "(" + n + " || '').toLowerCase()", i && (i = i.toLowerCase())),
                    i && (i = t(i)),
                    n + ".indexOf('" + i + "') == -1"
                }
            }
        } ();
        u.filterExpr = function(n) {
            for (var r, f, h, c, a = [], e = [], o = [], v = n.filters, s = 0, l = v.length; l > s; s++) r = v[s],
            h = r.field,
            c = r.operator,
            r.filters ? (f = u.filterExpr(r), r = f.expression.replace(/__o\[(\d+)\]/g,
            function(n, t) {
                return t = +t,
                "__o[" + (o.length + t) + "]"
            }).replace(/__f\[(\d+)\]/g,
            function(n, t) {
                return t = +t,
                "__f[" + (e.length + t) + "]"
            }), o.push.apply(o, f.operators), e.push.apply(e, f.fields)) : (typeof h === fi ? (f = "__f[" + e.length + "](d)", e.push(h)) : f = i.expr(h), typeof c === fi ? (r = "__o[" + o.length + "](" + f + ", " + r.value + ")", o.push(c)) : r = er[(c || "eq").toLowerCase()](f, r.value, r.ignoreCase !== t ? r.ignoreCase: !0)),
            a.push(r);
            return {
                expression: "(" + a.join({
                    and: " && ",
                    or: " || "
                } [n.logic]) + ")",
                fields: e,
                operators: o
            }
        };
        or = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte",
            notsubstringof: "doesnotcontain"
        };
        u.normalizeFilter = ot;
        u.prototype = {
            toArray: function() {
                return this.data
            },
            range: function(n, t) {
                return new u(this.data.slice(n, n + t))
            },
            skip: function(n) {
                return new u(this.data.slice(n))
            },
            take: function(n) {
                return new u(this.data.slice(0, n))
            },
            select: function(n) {
                return new u(bt(this.data, n))
            },
            order: function(n, t) {
                var i = {
                    dir: t
                };
                return n && (n.compare ? i.compare = n.compare: i.field = n),
                new u(this.data.slice(0).sort(ht.create(i)))
            },
            orderBy: function(n) {
                return this.order(n, "asc")
            },
            orderByDescending: function(n) {
                return this.order(n, "desc")
            },
            sort: function(n, t, i) {
                var r, f, u = rt(n, t),
                e = [];
                if (i = i || ht, u.length) {
                    for (r = 0, f = u.length; f > r; r++) e.push(i.create(u[r]));
                    return this.orderBy({
                        compare: i.combine(e)
                    })
                }
                return this
            },
            filter: function(n) {
                var t, r, s, i, h, f, e, o, c = this.data,
                l = [];
                if (n = ot(n), !n || 0 === n.filters.length) return this;
                for (i = u.filterExpr(n), f = i.fields, e = i.operators, h = o = Function("d, __f, __o", "return " + i.expression), (f.length || e.length) && (o = function(n) {
                    return h(n, f, e)
                }), t = 0, s = c.length; s > t; t++) r = c[t],
                o(r) && l.push(r);
                return new u(l)
            },
            group: function(n, t) {
                n = ut(n || []);
                t = t || this.data;
                var i, f = this,
                r = new u(f.data);
                return n.length > 0 && (i = n[0], r = r.groupBy(i).select(function(r) {
                    var f = new u(t).filter([{
                        field: r.field,
                        operator: "eq",
                        value: r.value,
                        ignoreCase: !1
                    }]);
                    return {
                        field: r.field,
                        value: r.value,
                        items: n.length > 1 ? new u(r.items).group(n.slice(1), f.toArray()).toArray() : r.items,
                        hasSubgroups: n.length > 1,
                        aggregates: f.aggregate(i.aggregates)
                    }
                })),
                r
            },
            groupBy: function(n) {
                if (nt(n) || !this.data.length) return new u([]);
                for (var o, s, t = n.field,
                h = this._sortForGrouping(t, n.dir || "asc"), l = i.accessor(t), f = l.get(h[0], t), e = {
                    field: t,
                    value: f,
                    items: []
                },
                a = [e], r = 0, c = h.length; c > r; r++) o = h[r],
                s = l.get(o, t),
                kr(f, s) || (f = s, e = {
                    field: t,
                    value: f,
                    items: []
                },
                a.push(e)),
                e.items.push(o);
                return new u(a)
            },
            _sortForGrouping: function(n, t) {
                var i, f, r = this.data;
                if (!lu) {
                    for (i = 0, f = r.length; f > i; i++) r[i].__position = i;
                    for (r = new u(r).sort(n, t, fr).toArray(), i = 0, f = r.length; f > i; i++) delete r[i].__position;
                    return r
                }
                return this.sort(n, t).toArray()
            },
            aggregate: function(n) {
                var t, i, r = {},
                u = {};
                if (n && n.length) for (t = 0, i = this.data.length; i > t; t++) dr(r, n, this.data[t], t, i, u);
                return r
            }
        };
        sr = {
            sum: function(n, t, i) {
                var r = i.get(t);
                return a(n) ? a(r) && (n += r) : n = r,
                n
            },
            count: function(n) {
                return (n || 0) + 1
            },
            average: function(n, i, r, u, f, e) {
                var o = r.get(i);
                return e.count === t && (e.count = 0),
                a(n) ? a(o) && (n += o) : n = o,
                a(o) && e.count++,
                u == f - 1 && a(n) && (n /= e.count),
                n
            },
            max: function(n, t, i) {
                var r = i.get(t);
                return a(n) || (n = r),
                r > n && a(r) && (n = r),
                n
            },
            min: function(n, t, i) {
                var r = i.get(t);
                return a(n) || (n = r),
                n > r && a(r) && (n = r),
                n
            }
        };
        u.process = function(n, i) {
            i = i || {};
            var e, r = new u(n),
            f = i.group,
            o = ut(f || []).concat(rt(i.sort || [])),
            s = i.filter,
            h = i.skip,
            c = i.take;
            return s && (r = r.filter(s), e = r.toArray().length),
            o && (r = r.sort(o), f && (n = r.toArray())),
            h !== t && c !== t && (r = r.range(h, c)),
            f && (r = r.group(f, n)),
            {
                total: e,
                data: r.toArray()
            }
        };
        kt = ct.extend({
            init: function(n) {
                this.data = n.data
            },
            read: function(n) {
                n.success(this.data)
            },
            update: function(n) {
                n.success(n.data)
            },
            create: function(n) {
                n.success(n.data)
            },
            destroy: function(n) {
                n.success(n.data)
            }
        });
        dt = ct.extend({
            init: function(n) {
                var i, t = this;
                n = t.options = e({},
                t.options, n);
                ui(uu,
                function(t, i) {
                    typeof n[i] === o && (n[i] = {
                        url: n[i]
                    })
                });
                t.cache = n.cache ? g.create(n.cache) : {
                    find: d,
                    add: d
                };
                i = n.parameterMap;
                v(n.push) && (t.push = n.push);
                t.push || (t.push = et);
                t.parameterMap = v(i) ? i: function(n) {
                    var t = {};
                    return ui(n,
                    function(n, r) {
                        n in i && (n = i[n], k(n) && (r = n.value(r), n = n.key));
                        t[n] = r
                    }),
                    t
                }
            },
            options: {
                parameterMap: et
            },
            create: function(n) {
                return ri(this.setup(n, cr))
            },
            read: function(i) {
                var r, o, u, f = this,
                e = f.cache;
                i = f.setup(i, lr);
                r = i.success || d;
                o = i.error || d;
                u = e.find(i.data);
                u !== t ? r(u) : (i.success = function(n) {
                    e.add(i.data, n);
                    r(n)
                },
                n.ajax(i))
            },
            update: function(n) {
                return ri(this.setup(n, ar))
            },
            destroy: function(n) {
                return ri(this.setup(n, vr))
            },
            setup: function(n, t) {
                n = n || {};
                var r, u = this,
                i = u.options[t],
                f = v(i.data) ? i.data(n.data) : i.data;
                return n = e(!0, {},
                i, n),
                r = e(!0, {},
                f, n.data),
                n.data = u.parameterMap(r, t),
                v(n.url) && (n.url = n.url(r)),
                n
            }
        });
        g = ct.extend({
            init: function() {
                this._store = {}
            },
            add: function(n, i) {
                n !== t && (this._store[si(n)] = i)
            },
            find: function(n) {
                return this._store[si(n)]
            },
            clear: function() {
                this._store = {}
            },
            remove: function(n) {
                delete this._store[si(n)]
            }
        });
        g.create = function(n) {
            var t = {
                inmemory: function() {
                    return new g
                }
            };
            return k(n) && v(n.find) ? n: n === !0 ? new g: t[n]()
        };
        gt = ct.extend({
            init: function(n) {
                var l, e, i, p, a, w, b, u, s, v, f, h, r, t = this;
                n = n || {};
                for (l in n) e = n[l],
                t[l] = typeof e === o ? lt(e) : e;
                p = n.modelBase || y;
                k(t.model) && (t.model = i = p.define(t.model));
                t.model && (a = c(t.data, t), w = c(t.groups, t), b = c(t.serialize, t), u = {},
                s = {},
                v = {},
                f = {},
                h = !1, i = t.model, i.fields && (ui(i.fields,
                function(n, t) {
                    var i;
                    r = n;
                    k(t) && t.field ? r = t.field: typeof t === o && (r = t);
                    k(t) && t.from && (i = t.from);
                    h = h || i && i !== n || r !== n;
                    s[n] = lt(i || r);
                    v[n] = lt(n);
                    u[i || r] = n;
                    f[n] = i || r
                }), !n.serialize && h && (t.serialize = yt(b, i, nu, v, u, f))), t._dataAccessFunction = a, t.data = yt(a, i, vi, s, u, f), t.groups = yt(w, i, yi, s, u, f))
            },
            errors: function(n) {
                return n ? n.errors: null
            },
            parse: et,
            data: et,
            total: function(n) {
                return n.length
            },
            groups: et,
            aggregates: function() {
                return {}
            },
            serialize: function(n) {
                return n
            }
        });
        h = tt.extend({
            init: function(n) {
                var o, f, u = this;
                n && (f = n.data);
                n = u.options = e({},
                u.options, n);
                u._map = {};
                u._prefetch = {};
                u._data = [];
                u._pristineData = [];
                u._ranges = [];
                u._view = [];
                u._pristineTotal = 0;
                u._destroyed = [];
                u._pageSize = n.pageSize;
                u._page = n.page || (n.pageSize ? 1 : t);
                u._sort = rt(n.sort);
                u._filter = ot(n.filter);
                u._group = ut(n.group);
                u._aggregate = n.aggregate;
                u._total = n.total;
                tt.fn.init.call(u);
                u.transport = ni.create(n, f);
                v(u.transport.push) && u.transport.push({
                    pushCreate: c(u._pushCreate, u),
                    pushUpdate: c(u._pushUpdate, u),
                    pushDestroy: c(u._pushDestroy, u)
                });
                u.reader = new i.data.readers[n.schema.type || "json"](n.schema);
                o = u.reader.model || {};
                u._data = u._observe(u._data);
                u.bind(["push", p, r, ft, yr, it, oi], n)
            },
            options: {
                data: [],
                schema: {
                    modelBase: y
                },
                serverSorting: !1,
                serverPaging: !1,
                serverFiltering: !1,
                serverGrouping: !1,
                serverAggregates: !1,
                batch: !1
            },
            _isServerGrouped: function() {
                var n = this.group() || [];
                return this.options.serverGrouping && n.length
            },
            _pushCreate: function(n) {
                this._push(n, "pushCreate")
            },
            _pushUpdate: function(n) {
                this._push(n, "pushUpdate")
            },
            _pushDestroy: function(n) {
                this._push(n, "pushDestroy")
            },
            _push: function(n, t) {
                var i = this._readData(n);
                i || (i = n);
                this[t](i)
            },
            _flatData: function(n) {
                return this._isServerGrouped() ? pi(n) : n
            },
            parent: d,
            get: function(n) {
                for (var i = this._flatData(this._data), t = 0, r = i.length; r > t; t++) if (i[t].id == n) return i[t]
            },
            getByUid: function(n) {
                var t, r, i = this._flatData(this._data);
                if (i) for (t = 0, r = i.length; r > t; t++) if (i[t].uid == n) return i[t]
            },
            indexOf: function(n) {
                return gi(this._data, n)
            },
            at: function(n) {
                return this._data[n]
            },
            data: function(n) {
                var i = this;
                return n === t ? i._data: (i._data = this._observe(n), i._pristineData = n.slice(0), i._ranges = [], i._addRange(i._data), i._total = i._data.length, i._pristineTotal = i._total, i._process(i._data), t)
            },
            view: function() {
                return this._view
            },
            add: function(n) {
                return this.insert(this._data.length, n)
            },
            _createNewModel: function(n) {
                return this.reader.model ? new this.reader.model(n) : new s(n)
            },
            insert: function(n, t) {
                return t || (t = n, n = 0),
                t instanceof y || (t = this._createNewModel(t)),
                this._isServerGrouped() ? this._data.splice(n, 0, wt(this.group(), t)) : this._data.splice(n, 0, t),
                t
            },
            pushCreate: function(n) {
                var t, i, f, u, r;
                for (l(n) || (n = [n]), t = [], i = 0; n.length > i; i++) f = n[i],
                u = this.add(f),
                t.push(u),
                r = u.toJSON(),
                this._isServerGrouped() && (r = wt(this.group(), r)),
                this._pristineData.push(r);
                t.length && this.trigger("push", {
                    type: "create",
                    items: t
                })
            },
            pushUpdate: function(n) {
                var r, u, i, f, t;
                for (l(n) || (n = [n]), r = [], u = 0; n.length > u; u++) i = n[u],
                f = this._createNewModel(i),
                t = this.get(f.id),
                t ? (r.push(t), t.accept(i), t.trigger("change"), this._updatePristineForModel(t, i)) : this.pushCreate(i);
                r.length && this.trigger("push", {
                    type: "update",
                    items: r
                })
            },
            pushDestroy: function(n) {
                var t, f, i, e, r, u;
                l(n) || (n = [n]);
                t = [];
                f = this.options.autoSync;
                this.options.autoSync = !1;
                try {
                    for (i = 0; n.length > i; i++) e = n[i],
                    r = this._createNewModel(e),
                    u = !1,
                    this._eachItem(this._data,
                    function(n) {
                        for (var i = 0; n.length > i; i++) if (n[i].id === r.id) {
                            t.push(n[i]);
                            n.splice(i, 1);
                            u = !0;
                            break
                        }
                    }),
                    u && (this._removePristineForModel(r), this._destroyed.pop())
                } finally {
                    this.options.autoSync = f
                }
                t.length && this.trigger("push", {
                    type: "destroy",
                    items: t
                })
            },
            remove: function(n) {
                var i, r = this,
                u = r._isServerGrouped();
                return this._eachItem(r._data,
                function(f) {
                    return i = ki(f, n),
                    i && u ? (i.isNew && i.isNew() || r._destroyed.push(i), !0) : t
                }),
                this._removeModelFromRanges(n),
                this._updateRangesLength(),
                n
            },
            sync: function() {
                var i, f, r, t = this,
                e = [],
                o = [],
                s = t._destroyed,
                u = t._flatData(t._data);
                if (t.reader.model) {
                    for (i = 0, f = u.length; f > i; i++) u[i].isNew() ? e.push(u[i]) : u[i].dirty && o.push(u[i]);
                    r = t._send("create", e);
                    r.push.apply(r, t._send("update", o));
                    r.push.apply(r, t._send("destroy", s));
                    n.when.apply(null, r).then(function() {
                        for (var n = 0,
                        i = arguments.length; i > n; n++) t._accept(arguments[n]);
                        t._change({
                            action: "sync"
                        });
                        t.trigger(yr)
                    })
                }
            },
            cancelChanges: function(n) {
                var t = this;
                n instanceof i.data.Model ? t._cancelModel(n) : (t._destroyed = [], t._data = t._observe(t._pristineData), t.options.serverPaging && (t._total = t._pristineTotal), t._change())
            },
            hasChanges: function() {
                var n, i, t = this._data;
                if (this._destroyed.length) return ! 0;
                for (n = 0, i = t.length; i > n; n++) if (t[n].isNew() || t[n].dirty) return ! 0;
                return ! 1
            },
            _accept: function(t) {
                var o, r = this,
                f = t.models,
                i = t.response,
                u = 0,
                s = r._isServerGrouped(),
                h = r._pristineData,
                e = t.type;
                if (r.trigger(it, {
                    response: i,
                    type: e
                }), i && !nt(i)) {
                    if (i = r.reader.parse(i), r._handleCustomErrors(i)) return;
                    i = r.reader.data(i);
                    l(i) || (i = [i])
                } else i = n.map(f,
                function(n) {
                    return n.toJSON()
                });
                for ("destroy" === e && (r._destroyed = []), u = 0, o = f.length; o > u; u++)"destroy" !== e ? (f[u].accept(i[u]), "create" === e ? h.push(s ? wt(r.group(), f[u]) : i[u]) : "update" === e && r._updatePristineForModel(f[u], i[u])) : r._removePristineForModel(f[u])
            },
            _updatePristineForModel: function(n, t) {
                this._executeOnPristineForModel(n,
                function(n, r) {
                    i.deepExtend(r[n], t)
                })
            },
            _executeOnPristineForModel: function(n, i) {
                this._eachPristineItem(function(r) {
                    var u = di(r, n);
                    return u > -1 ? (i(u, r), !0) : t
                })
            },
            _removePristineForModel: function(n) {
                this._executeOnPristineForModel(n,
                function(n, t) {
                    t.splice(n, 1)
                })
            },
            _readData: function(n) {
                var t = this._isServerGrouped() ? this.reader.groups: this.reader.data;
                return t(n)
            },
            _eachPristineItem: function(n) {
                this._eachItem(this._pristineData, n)
            },
            _eachItem: function(n, t) {
                n && n.length && (this._isServerGrouped() ? bi(n, t) : t(n))
            },
            _pristineForModel: function(n) {
                var r, i, u = function(u) {
                    return i = di(u, n),
                    i > -1 ? (r = u[i], !0) : t
                };
                return this._eachPristineItem(u),
                r
            },
            _cancelModel: function(n) {
                var t, i = this._pristineForModel(n);
                this._eachItem(this._data,
                function(r) {
                    t = gi(r, n); - 1 != t && (!n.isNew() && i ? r[t].accept(i) : r.splice(t, 1))
                })
            },
            _promise: function(t, i, r) {
                var u = this,
                f = u.transport;
                return n.Deferred(function(n) {
                    u.trigger(ft, {
                        type: r
                    });
                    f[r].call(f, e({
                        success: function(t) {
                            n.resolve({
                                response: t,
                                models: i,
                                type: r
                            })
                        },
                        error: function(t, i, r) {
                            n.reject(t);
                            u.error(t, i, r)
                        }
                    },
                    t))
                }).promise()
            },
            _send: function(n, t) {
                var i, f, r = this,
                u = [],
                e = r.reader.serialize(gr(t));
                if (r.options.batch) t.length && u.push(r._promise({
                    data: {
                        models: e
                    }
                },
                t, n));
                else for (i = 0, f = t.length; f > i; i++) u.push(r._promise({
                    data: e[i]
                },
                [t[i]], n));
                return u
            },
            read: function(n) {
                var t = this,
                i = t._params(n);
                t._queueRequest(i,
                function() {
                    t.trigger(ft, {
                        type: "read"
                    }) ? t._dequeueRequest() : (t.trigger(oi), t._ranges = [], t.transport.read({
                        data: i,
                        success: c(t.success, t),
                        error: c(t.error, t)
                    }))
                })
            },
            success: function(n) {
                var i = this,
                r = i.options;
                return i.trigger(it, {
                    response: n,
                    type: "read"
                }),
                n = i.reader.parse(n),
                i._handleCustomErrors(n) ? (i._dequeueRequest(), t) : (i._total = i.reader.total(n), i._pristineTotal = i._total, i._aggregate && r.serverAggregates && (i._aggregateResult = i.reader.aggregates(n)), n = i._readData(n), i._pristineData = n.slice(0), i._data = i._observe(n), i._addRange(i._data), i._process(i._data), i._dequeueRequest(), t)
            },
            _addRange: function(n) {
                var t = this,
                i = t._skip || 0,
                r = i + t._flatData(n).length;
                t._ranges.push({
                    start: i,
                    end: r,
                    data: n
                });
                t._ranges.sort(function(n, t) {
                    return n.start - t.start
                })
            },
            error: function(n, t, i) {
                this._dequeueRequest();
                this.trigger(it, {});
                this.trigger(p, {
                    xhr: n,
                    status: t,
                    errorThrown: i
                })
            },
            _params: function(n) {
                var t = this,
                i = e({
                    take: t.take(),
                    skip: t.skip(),
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t._sort,
                    filter: t._filter,
                    group: t._group,
                    aggregate: t._aggregate
                },
                n);
                return t.options.serverPaging || (delete i.take, delete i.skip, delete i.page, delete i.pageSize),
                t.options.serverGrouping ? t.reader.model && i.group && (i.group = st(i.group, t.reader.model)) : delete i.group,
                t.options.serverFiltering ? t.reader.model && i.filter && (i.filter = ir(i.filter, t.reader.model)) : delete i.filter,
                t.options.serverSorting ? t.reader.model && i.sort && (i.sort = st(i.sort, t.reader.model)) : delete i.sort,
                t.options.serverAggregates ? t.reader.model && i.aggregate && (i.aggregate = st(i.aggregate, t.reader.model)) : delete i.aggregate,
                i
            },
            _queueRequest: function(n, i) {
                var r = this;
                r._requestInProgress ? r._pending = {
                    callback: c(i, r),
                    options: n
                }: (r._requestInProgress = !0, r._pending = t, i())
            },
            _dequeueRequest: function() {
                var n = this;
                n._requestInProgress = !1;
                n._pending && n._queueRequest(n._pending.options, n._pending.callback)
            },
            _handleCustomErrors: function(n) {
                if (this.reader.errors) {
                    var t = this.reader.errors(n);
                    if (t) return this.trigger(p, {
                        xhr: null,
                        status: "customerror",
                        errorThrown: "custom error",
                        errors: t
                    }),
                    !0
                }
                return ! 1
            },
            _observe: function(n) {
                var t = this,
                i = t.reader.model,
                u = !1;
                return i && n.length && (u = !(n[0] instanceof i)),
                n instanceof w ? u && (n.type = t.reader.model, n.wrapAll(n, n)) : (n = new w(n, t.reader.model), n.parent = function() {
                    return t.parent()
                }),
                t._isServerGrouped() && wi(n, i),
                t._changeHandler && t._data && t._data instanceof w ? t._data.unbind(r, t._changeHandler) : t._changeHandler = c(t._change, t),
                n.bind(r, t._changeHandler)
            },
            _change: function(n) {
                var r, f, u, t = this,
                i = n ? n.action: "";
                if ("remove" === i) for (r = 0, f = n.items.length; f > r; r++) n.items[r].isNew && n.items[r].isNew() || t._destroyed.push(n.items[r]); ! t.options.autoSync || "add" !== i && "remove" !== i && "itemchange" !== i ? (u = parseInt(t._total || t._pristineTotal, 10), "add" === i ? u += n.items.length: "remove" === i ? u -= n.items.length: "itemchange" === i || "sync" === i || t.options.serverPaging ? "sync" === i && (u = t._pristineTotal = parseInt(t._total, 10)) : u = t._pristineTotal, t._total = u, t._process(t._data, n)) : t.sync()
            },
            _process: function(n, i) {
                var o, f = this,
                e = {};
                f.options.serverPaging !== !0 && (e.skip = f._skip, e.take = f._take || f._pageSize, e.skip === t && f._page !== t && f._pageSize !== t && (e.skip = (f._page - 1) * f._pageSize));
                f.options.serverSorting !== !0 && (e.sort = f._sort);
                f.options.serverFiltering !== !0 && (e.filter = f._filter);
                f.options.serverGrouping !== !0 && (e.group = f._group);
                f.options.serverAggregates !== !0 && (e.aggregate = f._aggregate, f._aggregateResult = ai(n, e));
                o = u.process(n, e);
                f._view = o.data;
                o.total === t || f.options.serverFiltering || (f._total = o.total);
                i = i || {};
                i.items = i.items || f._view;
                f.trigger(r, i)
            },
            _mergeState: function(n) {
                var i = this;
                return n !== t && (i._pageSize = n.pageSize, i._page = n.page, i._sort = n.sort, i._filter = n.filter, i._group = n.group, i._aggregate = n.aggregate, i._skip = n.skip, i._take = n.take, i._skip === t && (i._skip = i.skip(), n.skip = i.skip()), i._take === t && i._pageSize !== t && (i._take = i._pageSize, n.take = i._take), n.sort && (i._sort = n.sort = rt(n.sort)), n.filter && (i._filter = n.filter = ot(n.filter)), n.group && (i._group = n.group = ut(n.group)), n.aggregate && (i._aggregate = n.aggregate = br(n.aggregate))),
                n
            },
            query: function(n) {
                var f, i = this,
                e = i.options.serverSorting || i.options.serverPaging || i.options.serverFiltering || i.options.serverGrouping || i.options.serverAggregates;
                e || (i._data === t || 0 === i._data.length) && !i._destroyed.length ? i.read(i._mergeState(n)) : i.trigger(ft, {
                    type: "read"
                }) || (i.trigger(oi), f = u.process(i._data, i._mergeState(n)), i.options.serverFiltering || (i._total = f.total !== t ? f.total: i._data.length), i._view = f.data, i._aggregateResult = ai(i._data, n), i.trigger(it, {}), i.trigger(r, {
                    items: f.data
                }))
            },
            fetch: function(t) {
                var i = this;
                return n.Deferred(function(n) {
                    var f = function(r) {
                        i.unbind(p, u);
                        n.resolve();
                        t && t.call(i, r)
                    },
                    u = function(t) {
                        n.reject(t)
                    };
                    i.one(r, f);
                    i.one(p, u);
                    i._query()
                }).promise()
            },
            _query: function(n) {
                var t = this;
                t.query(e({},
                {
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t.sort(),
                    filter: t.filter(),
                    group: t.group(),
                    aggregate: t.aggregate()
                },
                n))
            },
            next: function(n) {
                var i = this,
                r = i.page(),
                u = i.total();
                return n = n || {},
                !r || u && r + 1 > i.totalPages() ? t: (i._skip = r * i.take(), r += 1, n.page = r, i._query(n), r)
            },
            prev: function(n) {
                var i = this,
                r = i.page();
                return n = n || {},
                r && 1 !== r ? (i._skip = i._skip - i.take(), r -= 1, n.page = r, i._query(n), r) : t
            },
            page: function(n) {
                var r, i = this;
                return n !== t ? (n = f.max(f.min(f.max(n, 1), i.totalPages()), 1), i._query({
                    page: n
                }), t) : (r = i.skip(), r !== t ? f.round((r || 0) / (i.take() || 1)) + 1 : t)
            },
            pageSize: function(n) {
                var i = this;
                return n !== t ? (i._query({
                    pageSize: n,
                    page: 1
                }), t) : i.take()
            },
            sort: function(n) {
                var i = this;
                return n !== t ? (i._query({
                    sort: n
                }), t) : i._sort
            },
            filter: function(n) {
                var i = this;
                return n === t ? i._filter: (i._query({
                    filter: n,
                    page: 1
                }), t)
            },
            group: function(n) {
                var i = this;
                return n !== t ? (i._query({
                    group: n
                }), t) : i._group
            },
            total: function() {
                return parseInt(this._total || 0, 10)
            },
            aggregate: function(n) {
                var i = this;
                return n !== t ? (i._query({
                    aggregate: n
                }), t) : i._aggregate
            },
            aggregates: function() {
                return this._aggregateResult
            },
            totalPages: function() {
                var n = this,
                t = n.pageSize() || n.total();
                return f.ceil((n.total() || 0) / t)
            },
            inRange: function(n, t) {
                var i = this,
                r = f.min(n + t, i.total());
                return ! i.options.serverPaging && i._data.length > 0 ? !0 : i._findRange(n, r).length > 0
            },
            lastRange: function() {
                var n = this._ranges;
                return n[n.length - 1] || {
                    start: 0,
                    end: 0,
                    data: []
                }
            },
            firstItemUid: function() {
                var n = this._ranges;
                return n.length && n[0].data.length && n[0].data[0].uid
            },
            range: function(n, i) {
                var r, e, u, o, s, h, c, l;
                if (n = f.min(n || 0, this.total()), r = this, e = f.max(f.floor(n / i), 0) * i, u = f.min(e + i, r.total()), o = r._findRange(n, f.min(n + i, r.total())), o.length) {
                    r._skip = n > r.skip() ? f.min(u, (r.totalPages() - 1) * r.take()) : e;
                    r._take = i;
                    s = r.options.serverPaging;
                    h = r.options.serverSorting;
                    c = r.options.serverFiltering;
                    l = r.options.serverAggregates;
                    try {
                        r.options.serverPaging = !0;
                        r._isServerGrouped() || r.group() && r.group().length || (r.options.serverSorting = !0);
                        r.options.serverFiltering = !0;
                        r.options.serverPaging = !0;
                        r.options.serverAggregates = !0;
                        s && (r._data = o = r._observe(o));
                        r._process(o)
                    } finally {
                        r.options.serverPaging = s;
                        r.options.serverSorting = h;
                        r.options.serverFiltering = c;
                        r.options.serverAggregates = l
                    }
                } else i !== t && (r._rangeExists(e, u) ? n > e && r.prefetch(u, i,
                function() {
                    r.range(n, i)
                }) : r.prefetch(e, i,
                function() {
                    n > e && u < r.total() && !r._rangeExists(u, f.min(u + i, r.total())) ? r.prefetch(u, i,
                    function() {
                        r.range(n, i)
                    }) : r.range(n, i)
                }))
            },
            _findRange: function(n, i) {
                for (var r, h, c, l, p, a, v, y, e, d, f = this,
                b = f._ranges,
                k = [], s = f.options, g = s.serverSorting || s.serverPaging || s.serverFiltering || s.serverGrouping || s.serverAggregates, o = 0, w = b.length; w > o; o++) if (r = b[o], n >= r.start && r.end >= n) {
                    for (e = 0, h = o; w > h; h++) if (r = b[h], y = f._flatData(r.data), y.length && n + e >= r.start && (p = r.data, a = r.end, g || (d = ut(f.group() || []).concat(rt(f.sort() || [])), v = u.process(r.data, {
                        sort: d,
                        filter: f.filter()
                    }), y = p = v.data, v.total !== t && (a = v.total)), c = 0, n + e > r.start && (c = n + e - r.start), l = y.length, a > i && (l -= a - i), e += l - c, k = f._mergeGroups(k, p, c, l), r.end >= i && e == i - n)) return k;
                    break
                }
                return []
            },
            _mergeGroups: function(n, t, i, r) {
                if (this._isServerGrouped()) {
                    var u, f = t.toJSON();
                    return n.length && (u = n[n.length - 1]),
                    pt(u, f, i, r),
                    n.concat(f)
                }
                return n.concat(t.slice(i, r))
            },
            skip: function() {
                var n = this;
                return n._skip === t ? n._page !== t ? (n._page - 1) * (n.take() || 1) : t: n._skip
            },
            take: function() {
                return this._take || this._pageSize
            },
            _prefetchSuccessHandler: function(n, t, i) {
                var u = this;
                return function(f) {
                    var o, h, s, c = !1,
                    e = {
                        start: n,
                        end: t,
                        data: []
                    };
                    if (u._dequeueRequest(), u.trigger(it, {
                        response: f,
                        type: "read"
                    }), f = u.reader.parse(f), s = u._readData(f), s.length) {
                        for (o = 0, h = u._ranges.length; h > o; o++) if (u._ranges[o].start === n) {
                            c = !0;
                            e = u._ranges[o];
                            break
                        }
                        c || u._ranges.push(e)
                    }
                    e.data = u._observe(s);
                    e.end = e.start + u._flatData(e.data).length;
                    u._ranges.sort(function(n, t) {
                        return n.start - t.start
                    });
                    u._total = u.reader.total(f);
                    i && s.length ? i() : u.trigger(r, {})
                }
            },
            prefetch: function(n, t, i) {
                var r = this,
                u = f.min(n + t, r.total()),
                e = {
                    take: t,
                    skip: n,
                    page: n / t + 1,
                    pageSize: t,
                    sort: r._sort,
                    filter: r._filter,
                    group: r._group,
                    aggregate: r._aggregate
                };
                r._rangeExists(n, u) ? i && i() : (clearTimeout(r._timeout), r._timeout = setTimeout(function() {
                    r._queueRequest(e,
                    function() {
                        r.trigger(ft, {
                            type: "read"
                        }) ? r._dequeueRequest() : r.transport.read({
                            data: r._params(e),
                            success: r._prefetchSuccessHandler(n, u, i)
                        })
                    })
                },
                100))
            },
            _rangeExists: function(n, t) {
                for (var f = this,
                r = f._ranges,
                i = 0,
                u = r.length; u > i; i++) if (n >= r[i].start && r[i].end >= t) return ! 0;
                return ! 1
            },
            _removeModelFromRanges: function(n) {
                for (var i, r, u, t = 0,
                f = this._ranges.length; f > t && (u = this._ranges[t], this._eachItem(u.data,
                function(t) {
                    i = ki(t, n);
                    i && (r = !0)
                }), !r); t++);
            },
            _updateRangesLength: function() {
                for (var n, i, u = 0,
                t = 0,
                r = this._ranges.length; r > t; t++) n = this._ranges[t],
                n.start = n.start - u,
                i = this._flatData(n.data).length,
                u = n.end - i,
                n.end = n.start + i
            }
        });
        ni = {};
        ni.create = function(n, t) {
            var u, r = n.transport;
            return r ? (r.read = typeof r.read === o ? {
                url: r.read
            }: r.read, n.type && (i.data.transports[n.type] && !k(i.data.transports[n.type]) ? u = new i.data.transports[n.type](e(r, {
                data: t
            })) : r = e(!0, {},
            i.data.transports[n.type], r), n.schema = e(!0, {},
            i.data.schemas[n.type], n.schema)), u || (u = v(r.read) ? r: new dt(r))) : u = new kt({
                data: n.data
            }),
            u
        };
        h.create = function(n) { (l(n) || n instanceof w) && (n = {
                data: n
            });
            var u, a, f, t = n || {},
            o = t.data,
            r = t.fields,
            s = t.table,
            v = t.select,
            c = {};
            if (o || !r || t.transport || (s ? o = iu(s, r) : v && (o = tu(v, r))), i.data.Model && r && (!t.schema || !t.schema.model)) {
                for (u = 0, a = r.length; a > u; u++) f = r[u],
                f.type && (c[f.field] = f);
                nt(c) || (t.schema = e(!0, t.schema, {
                    model: {
                        fields: c
                    }
                }))
            }
            return t.data = o,
            s = null,
            t.table = null,
            t instanceof h ? t: new h(t)
        };
        ti = y.define({
            init: function(n) {
                var t = this,
                r = t.hasChildren || n && n.hasChildren,
                f = "items",
                u = {};
                i.data.Model.fn.init.call(t, n);
                typeof t.children === o && (f = t.children);
                u = {
                    schema: {
                        data: f,
                        model: {
                            hasChildren: r,
                            id: t.idField
                        }
                    }
                };
                typeof t.children !== o && e(u, t.children);
                u.data = n;
                r || (r = u.schema.data);
                typeof r === o && (r = i.getter(r));
                v(r) && (t.hasChildren = !!r.call(t, t));
                t._childrenOptions = u;
                t.hasChildren && t._initChildren();
                t._loaded = !(!n || !n[f] && !n._loaded)
            },
            _initChildren: function() {
                var t, i, u, n = this;
                n.children instanceof b || (t = n.children = new b(n._childrenOptions), i = t.transport, u = i.parameterMap, i.parameterMap = function(t, i) {
                    return t[n.idField || "id"] = n.id,
                    u && (t = u(t, i)),
                    t
                },
                t.parent = function() {
                    return n
                },
                t.bind(r,
                function(t) {
                    t.node = t.node || n;
                    n.trigger(r, t)
                }), t.bind(p,
                function(t) {
                    var i = n.parent();
                    i && (t.node = t.node || n, i.trigger(p, t))
                }), n._updateChildrenField())
            },
            append: function(n) {
                this._initChildren();
                this.loaded(!0);
                this.children.add(n)
            },
            hasChildren: !1,
            level: function() {
                for (var n = this.parentNode(), t = 0; n && n.parentNode;) t++,
                n = n.parentNode ? n.parentNode() : null;
                return t
            },
            _updateChildrenField: function() {
                var n = this._childrenOptions.schema.data;
                this[n || "items"] = this.children.data()
            },
            _childrenLoaded: function() {
                this._loaded = !0;
                this._updateChildrenField()
            },
            load: function() {
                var n, i = {},
                u = "_query";
                this.hasChildren ? (this._initChildren(), n = this.children, i[this.idField || "id"] = this.id, this._loaded || (n._data = t, u = "read"), n.one(r, c(this._childrenLoaded, this)), n[u](i)) : this.loaded(!0)
            },
            parentNode: function() {
                var n = this.parent();
                return n.parent()
            },
            loaded: function(n) {
                return n === t ? this._loaded: (this._loaded = n, t)
            },
            shouldSerialize: function(n) {
                return y.fn.shouldSerialize.call(this, n) && "children" !== n && "_loaded" !== n && "hasChildren" !== n && "_childrenOptions" !== n
            }
        });
        b = h.extend({
            init: function(n) {
                var t = ti.define({
                    children: n
                });
                h.fn.init.call(this, e(!0, {},
                {
                    schema: {
                        modelBase: t,
                        model: t
                    }
                },
                n));
                this._attachBubbleHandlers()
            },
            _attachBubbleHandlers: function() {
                var n = this;
                n._data.bind(p,
                function(t) {
                    n.trigger(p, t)
                })
            },
            remove: function(n) {
                var r, t = n.parentNode(),
                i = this;
                return t && t._initChildren && (i = t.children),
                r = h.fn.remove.call(i, n),
                t && !i.data().length && (t.hasChildren = !1),
                r
            },
            success: rr("success"),
            data: rr("data"),
            insert: function(n, t) {
                var i = this.parent();
                return i && i._initChildren && (i.hasChildren = !0, i._initChildren()),
                h.fn.insert.call(this, n, t)
            },
            _find: function(n, t) {
                var i, e, r, u, f;
                if (r = h.fn[n].call(this, t)) return r;
                if (u = this._flatData(this.data())) for (i = 0, e = u.length; e > i; i++) if (f = u[i].children, f instanceof b && (r = f[n](t))) return r
            },
            get: function(n) {
                return this._find("get", n)
            },
            getByUid: function(n) {
                return this._find("getByUid", n)
            }
        });
        b.create = function(n) {
            n = n && n.push ? {
                data: n
            }: n;
            var t = n || {},
            i = t.data,
            r = t.fields,
            u = t.list;
            return i && i._dataSource ? i._dataSource: (i || !r || t.transport || u && (i = ur(u, r)), t.data = i, t instanceof b ? t: new b(t))
        };
        ii = i.Observable.extend({
            init: function(n, t, r) {
                i.Observable.fn.init.call(this);
                this._prefetching = !1;
                this.dataSource = n;
                this.prefetch = !r;
                var u = this;
                n.bind("change",
                function() {
                    u._change()
                });
                this._syncWithDataSource();
                this.setViewSize(t)
            },
            setViewSize: function(n) {
                this.viewSize = n;
                this._recalculate()
            },
            at: function(n) {
                var i, u, r = this.pageSize;
                return n >= this.total() ? (this.trigger("endreached", {
                    index: n
                }), t) : this.useRanges ? (this.useRanges && ((this.dataOffset > n || n > this.skip + r) && (u = Math.floor(n / r) * r, this.range(u)), n === this.prefetchThreshold && this._prefetch(), n === this.midPageThreshold ? this.range(this.nextMidRange) : n === this.nextPageThreshold ? this.range(this.nextFullRange) : n === this.pullBackThreshold && (this.offset === this.skip ? this.range(this.previousMidRange) : this.range(this.previousFullRange)), i = this.dataSource.at(n - this.dataOffset)), i === t && this.trigger("endreached", {
                    index: n
                }), i) : this.dataSource.view()[n]
            },
            indexOf: function(n) {
                return this.dataSource.data().indexOf(n) + this.dataOffset
            },
            total: function() {
                return parseInt(this.dataSource.total(), 10)
            },
            next: function() {
                var n = this,
                t = n.pageSize,
                i = n.skip - n.viewSize,
                r = f.max(f.floor(i / t), 0) * t + t;
                this.offset = i;
                this.dataSource.prefetch(r, t,
                function() {
                    n._goToRange(i, !0)
                })
            },
            range: function(n) {
                if (this.offset !== n) {
                    var r = this,
                    t = this.pageSize,
                    u = f.max(f.floor(n / t), 0) * t + t,
                    i = this.dataSource;
                    this.offset = n;
                    this._recalculate();
                    i.inRange(n, t) ? this._goToRange(n) : this.prefetch && i.prefetch(u, t,
                    function() {
                        r._goToRange(n, !0)
                    })
                }
            },
            syncDataSource: function() {
                var n = this.offset;
                this.offset = null;
                this.range(n)
            },
            destroy: function() {
                this.unbind()
            },
            _prefetch: function() {
                var i = this,
                n = this.pageSize,
                t = this.skip + n,
                r = this.dataSource;
                r.inRange(t, n) || this._prefetching || !this.prefetch || (this._prefetching = !0, this.trigger("prefetching", {
                    skip: t,
                    take: n
                }), r.prefetch(t, n,
                function() {
                    i._prefetching = !1;
                    i.trigger("prefetched", {
                        skip: t,
                        take: n
                    })
                }))
            },
            _goToRange: function(n, t) {
                this.offset === n && (this.dataOffset = n, this._expanding = t, this.dataSource.range(n, this.pageSize))
            },
            _change: function() {
                var n = this.dataSource,
                t = n.firstItemUid();
                this.length = this.useRanges ? n.lastRange().end: n.view().length;
                this._firstItemUid === t && this.useRanges || (this._syncWithDataSource(), this._recalculate(), this.trigger("reset", {
                    offset: this.offset
                }));
                this.trigger("resize");
                this._expanding && this.trigger("expand");
                delete this._expanding
            },
            _syncWithDataSource: function() {
                var n = this.dataSource;
                this._firstItemUid = n.firstItemUid();
                this.dataOffset = this.offset = n.skip() || 0;
                this.pageSize = n.pageSize();
                this.useRanges = n.options.serverPaging
            },
            _recalculate: function() {
                var t = this.pageSize,
                r = this.offset,
                i = this.viewSize,
                n = Math.ceil(r / t) * t;
                this.skip = n;
                this.midPageThreshold = n + t - 1;
                this.nextPageThreshold = n + i - 1;
                this.prefetchThreshold = n + Math.floor(t / 3 * 2);
                this.pullBackThreshold = this.offset - 1;
                this.nextMidRange = n + t - i;
                this.nextFullRange = n;
                this.previousMidRange = r - i;
                this.previousFullRange = n - t
            }
        });
        hr = i.Observable.extend({
            init: function(n, t) {
                var r = this;
                i.Observable.fn.init.call(r);
                this.dataSource = n;
                this.batchSize = t;
                this._total = 0;
                this.buffer = new ii(n, 3 * t);
                this.buffer.bind({
                    endreached: function(n) {
                        r.trigger("endreached", {
                            index: n.index
                        })
                    },
                    prefetching: function(n) {
                        r.trigger("prefetching", {
                            skip: n.skip,
                            take: n.take
                        })
                    },
                    prefetched: function(n) {
                        r.trigger("prefetched", {
                            skip: n.skip,
                            take: n.take
                        })
                    },
                    reset: function() {
                        r._total = 0;
                        r.trigger("reset")
                    },
                    resize: function() {
                        r._total = Math.ceil(this.length / r.batchSize);
                        r.trigger("resize", {
                            total: r.total(),
                            offset: this.offset
                        })
                    }
                })
            },
            syncDataSource: function() {
                this.buffer.syncDataSource()
            },
            at: function(n) {
                var u, i, r = this.buffer,
                f = n * this.batchSize,
                o = this.batchSize,
                e = [];
                for (r.offset > f && r.at(r.offset - 1), i = 0; o > i && (u = r.at(f + i), u !== t); i++) e.push(u);
                return e
            },
            total: function() {
                return this._total
            },
            destroy: function() {
                this.buffer.destroy();
                this.unbind()
            }
        });
        e(!0, i.data, {
            readers: {
                json: gt
            },
            Query: u,
            DataSource: h,
            HierarchicalDataSource: b,
            Node: ti,
            ObservableObject: s,
            ObservableArray: w,
            LocalTransport: kt,
            RemoteTransport: dt,
            Cache: g,
            DataReader: gt,
            Model: y,
            Buffer: ii,
            BatchBuffer: hr
        })
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min"], n)
} (function() {
    return function(n) {
        function c(n, t) {
            var i = n.x.location,
            r = n.y.location,
            u = t.x.location,
            f = t.y.location,
            e = i - u,
            o = r - f;
            return {
                center: {
                    x: (i + u) / 2,
                    y: (r + f) / 2
                },
                distance: Math.sqrt(e * e + o * o)
            }
        }
        function f(n) {
            var s, f, r, t = [],
            u = n.originalEvent,
            e = n.currentTarget,
            o = 0;
            if (n.api) t.push({
                id: 2,
                event: n,
                target: n.target,
                currentTarget: n.target,
                location: n
            });
            else if (n.type.match(/touch/)) for (f = u ? u.changedTouches: [], s = f.length; s > o; o++) r = f[o],
            t.push({
                location: r,
                event: n,
                target: r.target,
                currentTarget: e,
                id: r.identifier
            });
            else i.pointers || i.msPointers ? t.push({
                location: u,
                event: n,
                target: n.target,
                currentTarget: e,
                id: u.pointerId
            }) : t.push({
                id: 1,
                event: n,
                target: n.target,
                currentTarget: e,
                location: n
            });
            return t
        }
        function ft(t) {
            var i, r, u;
            t.preventDefault();
            i = n(t.data.root);
            r = i.closest(".k-widget").parent();
            r[0] || (r = i.parent());
            u = n.extend(!0, {},
            t, {
                target: i[0]
            });
            r.trigger(n.Event(t.type, u))
        }
        function l(n) {
            for (var r = t.eventMap.up.split(" "), i = 0, u = r.length; u > i; i++) n(r[i])
        }
        var t = window.kendo,
        i = t.support,
        et = window.document,
        a = t.Class,
        v = t.Observable,
        u = n.now,
        e = n.extend,
        y = i.mobileOS,
        ot = y && y.android,
        p = 800,
        st = i.browser.msie ? 5 : 0,
        w = "press",
        b = "hold",
        k = "select",
        d = "start",
        o = "move",
        s = "end",
        g = "cancel",
        h = "tap",
        nt = "release",
        ht = "gesturestart",
        tt = "gesturechange",
        it = "gestureend",
        rt = "gesturetap",
        ut = a.extend({
            init: function(n, t) {
                var i = this;
                i.axis = n;
                i._updateLocationData(t);
                i.startLocation = i.location;
                i.velocity = i.delta = 0;
                i.timeStamp = u()
            },
            move: function(n) {
                var t = this,
                i = n["page" + t.axis],
                r = u(),
                f = r - t.timeStamp || 1; (i || !ot) && (t.delta = i - t.location, t._updateLocationData(n), t.initialDelta = i - t.startLocation, t.velocity = t.delta / f, t.timeStamp = r)
            },
            _updateLocationData: function(n) {
                var t = this,
                i = t.axis;
                t.location = n["page" + i];
                t.client = n["client" + i];
                t.screen = n["screen" + i]
            }
        }),
        ct = a.extend({
            init: function(n, t, i) {
                e(this, {
                    x: new ut("X", i.location),
                    y: new ut("Y", i.location),
                    userEvents: n,
                    target: t,
                    currentTarget: i.currentTarget,
                    initialTouch: i.target,
                    id: i.id,
                    pressEvent: i,
                    _moved: !1,
                    _finished: !1
                })
            },
            press: function() {
                this._holdTimeout = setTimeout(n.proxy(this, "_hold"), this.userEvents.minHold);
                this._trigger(w, this.pressEvent)
            },
            _hold: function() {
                this._trigger(b, this.pressEvent)
            },
            move: function(n) {
                var t = this;
                if (!t._finished) {
                    if (t.x.move(n.location), t.y.move(n.location), !t._moved) {
                        if (t._withinIgnoreThreshold()) return;
                        if (r.current && r.current !== t.userEvents) return t.dispose();
                        t._start(n)
                    }
                    t._finished || t._trigger(o, n)
                }
            },
            end: function(n) {
                var t = this;
                t.endTime = u();
                t._finished || (t._finished = !0, t._moved ? t._trigger(s, n) : t._trigger(h, n), clearTimeout(t._holdTimeout), t._trigger(nt, n), t.dispose())
            },
            dispose: function() {
                var i = this.userEvents,
                t = i.touches;
                this._finished = !0;
                this.pressEvent = null;
                clearTimeout(this._holdTimeout);
                t.splice(n.inArray(this, t), 1)
            },
            skip: function() {
                this.dispose()
            },
            cancel: function() {
                this.dispose()
            },
            isMoved: function() {
                return this._moved
            },
            _start: function(n) {
                clearTimeout(this._holdTimeout);
                this.startTime = u();
                this._moved = !0;
                this._trigger(d, n)
            },
            _trigger: function(n, t) {
                var i = this,
                r = t.event,
                u = {
                    touch: i,
                    x: i.x,
                    y: i.y,
                    target: i.target,
                    event: r
                };
                i.userEvents.notify(n, u) && r.preventDefault()
            },
            _withinIgnoreThreshold: function() {
                var n = this.x.initialDelta,
                t = this.y.initialDelta;
                return Math.sqrt(n * n + t * t) <= this.userEvents.threshold
            }
        }),
        r = v.extend({
            init: function(r, u) {
                var a, y, ut, f = this,
                c = t.guid();
                u = u || {};
                a = f.filter = u.filter;
                f.threshold = u.threshold || st;
                f.minHold = u.minHold || p;
                f.touches = [];
                f._maxTouches = u.multiTouch ? 2 : 1;
                f.allowSelection = u.allowSelection;
                f.captureUpIfMoved = u.captureUpIfMoved;
                f.eventNS = c;
                r = n(r).handler(f);
                v.fn.init.call(f);
                e(f, {
                    element: r,
                    surface: u.global ? n(et.documentElement) : n(u.surface || r),
                    stopPropagation: u.stopPropagation,
                    pressed: !1
                });
                f.surface.handler(f).on(t.applyEventMap("move", c), "_move").on(t.applyEventMap("up cancel", c), "_end");
                r.on(t.applyEventMap("down", c), a, "_start"); (i.pointers || i.msPointers) && r.css("-ms-touch-action", "pinch-zoom double-tap-zoom");
                u.preventDragEvent && r.on(t.applyEventMap("dragstart", c), t.preventDefault);
                r.on(t.applyEventMap("mousedown selectstart", c), a, {
                    root: r
                },
                "_select");
                f.captureUpIfMoved && i.eventCapture && (y = f.surface[0], ut = n.proxy(f.preventIfMoving, f), l(function(n) {
                    y.addEventListener(n, ut, !0)
                }));
                f.bind([w, b, h, d, o, s, nt, g, ht, tt, it, rt, k], u)
            },
            preventIfMoving: function(n) {
                this._isMoved() && n.preventDefault()
            },
            destroy: function() {
                var t, n = this;
                n._destroyed || (n._destroyed = !0, n.captureUpIfMoved && i.eventCapture && (t = n.surface[0], l(function(i) {
                    t.removeEventListener(i, n.preventIfMoving)
                })), n.element.kendoDestroy(n.eventNS), n.surface.kendoDestroy(n.eventNS), n.element.removeData("handler"), n.surface.removeData("handler"), n._disposeAll(), n.unbind(), delete n.surface, delete n.element, delete n.currentTarget)
            },
            capture: function() {
                r.current = this
            },
            cancel: function() {
                this._disposeAll();
                this.trigger(g)
            },
            notify: function(n, t) {
                var r = this,
                i = r.touches;
                if (this._isMultiTouch()) {
                    switch (n) {
                    case o:
                        n = tt;
                        break;
                    case s:
                        n = it;
                        break;
                    case h:
                        n = rt
                    }
                    e(t, {
                        touches: i
                    },
                    c(i[0], i[1]))
                }
                return this.trigger(n, t)
            },
            press: function(n, t, i) {
                this._apiCall("_start", n, t, i)
            },
            move: function(n, t) {
                this._apiCall("_move", n, t)
            },
            end: function(n, t) {
                this._apiCall("_end", n, t)
            },
            _isMultiTouch: function() {
                return this.touches.length > 1
            },
            _maxTouchesReached: function() {
                return this.touches.length >= this._maxTouches
            },
            _disposeAll: function() {
                for (var n = this.touches; n.length > 0;) n.pop().dispose()
            },
            _isMoved: function() {
                return n.grep(this.touches,
                function(n) {
                    return n.isMoved()
                }).length
            },
            _select: function(n) { (!this.allowSelection || this.trigger(k, {
                    event: n
                })) && ft(n)
            },
            _start: function(t) {
                var e, u, i = this,
                o = 0,
                c = i.filter,
                s = f(t),
                l = s.length,
                h = t.which;
                if (! (h && h > 1 || i._maxTouchesReached())) for (r.current = null, i.currentTarget = t.currentTarget, i.stopPropagation && t.stopPropagation(); l > o && !i._maxTouchesReached(); o++) u = s[o],
                e = c ? n(u.currentTarget) : i.element,
                e.length && (u = new ct(i, e, u), i.touches.push(u), u.press(), i._isMultiTouch() && i.notify("gesturestart", {}))
            },
            _move: function(n) {
                this._eachTouch("move", n)
            },
            _end: function(n) {
                this._eachTouch("end", n)
            },
            _eachTouch: function(n, t) {
                for (var r, u, e, c = this,
                o = {},
                s = f(t), h = c.touches, i = 0; h.length > i; i++) r = h[i],
                o[r.id] = r;
                for (i = 0; s.length > i; i++) u = s[i],
                e = o[u.id],
                e && e[n](u)
            },
            _apiCall: function(t, i, r, u) {
                this[t]({
                    api: !0,
                    pageX: i,
                    pageY: r,
                    clientX: i,
                    clientY: r,
                    target: n(u || this.element)[0],
                    stopPropagation: n.noop,
                    preventDefault: n.noop
                })
            }
        });
        r.minHold = function(n) {
            p = n
        };
        t.getTouches = f;
        t.touchDelta = c;
        t.UserEvents = r
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.data.min", "./kendo.draganddrop.min"], n)
} (function() {
    return function(n, t) {
        function ot(n) {
            return function(t) {
                var i = t.children(".k-animation-container");
                return i.length || (i = t),
                i.children(n)
            }
        }
        function c(n) {
            return i.template(n, {
                useWithBlock: !1
            })
        }
        function rt(n) {
            return n.children("div").find(".k-checkbox:first :checkbox")
        }
        function st(n) {
            return function(t, i) {
                i = i.closest(u);
                var f, r = i.parent();
                return r.parent().is("li") && (f = r.parent()),
                this._dataSourceMove(t, r, f,
                function(t, r) {
                    return this._insert(t.data(), r, i.index() + n)
                })
            }
        }
        function ri(t, i) {
            for (var r; t && "ul" != t.nodeName.toLowerCase();) r = t,
            t = t.nextSibling,
            3 == r.nodeType && (r.nodeValue = n.trim(r.nodeValue)),
            lt.test(r.className) ? i.insertBefore(r, i.firstChild) : i.appendChild(r)
        }
        function d(t) {
            var i = t.children("div"),
            u = t.children("ul"),
            f = i.children(".k-icon"),
            e = t.children(":checkbox"),
            r = i.children(".k-in");
            t.hasClass("k-treeview") || (i.length || (i = n("<div />").prependTo(t)), !f.length && u.length ? f = n("<span class='k-icon' />").prependTo(i) : u.length && u.children().length || (f.remove(), u.remove()), e.length && n("<span class='k-checkbox' />").appendTo(i).append(e), r.length || (r = t.children("a").eq(0).addClass("k-in"), r.length || (r = n("<span class='k-in' />")), r.appendTo(i), i.length && ri(i[0].nextSibling, r[0])))
        }
        function ht(n) {
            var t = this;
            t.treeview = n;
            t.hovered = n.element;
            t._draggable = new ut.Draggable(n.element, {
                filter: "div:not(.k-state-disabled) .k-in",
                hint: function(t) {
                    return n.templates.dragClue({
                        item: n.dataItem(t),
                        treeview: n.options
                    })
                },
                cursorOffset: {
                    left: 10,
                    top: i.support.touch || i.support.msPointers || i.support.pointers ? -40 / i.support.zoomLevel() : 10
                },
                dragstart: r(t.dragstart, t),
                dragcancel: r(t.dragcancel, t),
                drag: r(t.drag, t),
                dragend: r(t.dragend, t)
            })
        }
        var ct, o, a, g, lt, i = window.kendo,
        ut = i.ui,
        ui = i.data,
        v = n.extend,
        at = i.template,
        y = n.isArray,
        nt = ut.Widget,
        vt = ui.HierarchicalDataSource,
        r = n.proxy,
        s = i.keys,
        f = ".kendoTreeView",
        ft = "select",
        yt = "navigate",
        p = "change",
        pt = "error",
        e = "checked",
        h = "indeterminate",
        wt = "dragstart",
        bt = "drag",
        kt = "drop",
        dt = "dragend",
        gt = "dataBound",
        ni = "click",
        tt = "visibility",
        l = "undefined",
        w = "k-state-hover",
        b = "k-treeview",
        fi = ":visible",
        u = ".k-item",
        it = "string",
        et = "aria-selected",
        ti = "aria-disabled",
        k = {
            text: "dataTextField",
            url: "dataUrlField",
            spriteCssClass: "dataSpriteCssClassField",
            imageUrl: "dataImageUrlField"
        },
        ii = function(n) {
            return "object" == typeof HTMLElement ? n instanceof HTMLElement: n && "object" == typeof n && 1 === n.nodeType && typeof n.nodeName === it
        };
        o = ot(".k-group");
        a = ot(".k-group,.k-content");
        g = function(n) {
            return n.children("div").children(".k-icon")
        };
        lt = /k-sprite/;
        ct = nt.extend({
            init: function(n, t) {
                var e, u, r = this,
                f = !1,
                o = t && !!t.dataSource;
                y(t) && (e = !0, t = {
                    dataSource: t
                });
                t && typeof t.loadOnDemand == l && y(t.dataSource) && (t.loadOnDemand = !1);
                nt.prototype.init.call(r, n, t);
                n = r.element;
                t = r.options;
                u = n.is("ul") && n || n.hasClass(b) && n.children("ul");
                f = !o && u.length;
                f && (t.dataSource.list = u);
                r._animation();
                r._accessors();
                r._templates();
                n.hasClass(b) ? (r.wrapper = n, r.root = n.children("ul").eq(0)) : (r._wrapper(), u && (r.root = n, r._group(r.wrapper)));
                r._tabindex();
                r.wrapper.filter("[role=tree]").length || r.wrapper.attr("role", "tree");
                r._dataSource(f);
                r._attachEvents();
                r._dragging();
                f ? r._syncHtmlAndDataSource() : t.autoBind && (r._progress(!0), r.dataSource.fetch());
                t.checkboxes && t.checkboxes.checkChildren && r.updateIndeterminate();
                r.element[0].id && (r._ariaId = i.format("{0}_tv_active", r.element[0].id))
            },
            _attachEvents: function() {
                var t = this,
                i = ".k-in:not(.k-state-selected,.k-state-disabled)",
                u = "mouseenter";
                t.wrapper.on(u + f, ".k-in.k-state-selected",
                function(n) {
                    n.preventDefault()
                }).on(u + f, i,
                function() {
                    n(this).addClass(w)
                }).on("mouseleave" + f, i,
                function() {
                    n(this).removeClass(w)
                }).on(ni + f, i, r(t._click, t)).on("dblclick" + f, ".k-in:not(.k-state-disabled)", r(t._toggleButtonClick, t)).on(ni + f, ".k-plus,.k-minus", r(t._toggleButtonClick, t)).on("keydown" + f, r(t._keydown, t)).on("focus" + f, r(t._focus, t)).on("blur" + f, r(t._blur, t)).on("mousedown" + f, ".k-in,.k-checkbox :checkbox,.k-plus,.k-minus", r(t._mousedown, t)).on("change" + f, ".k-checkbox :checkbox", r(t._checkboxChange, t)).on("click" + f, ".k-checkbox :checkbox", r(t._checkboxClick, t)).on("click" + f, ".k-request-retry", r(t._retryRequest, t)).on("click" + f,
                function(i) {
                    n(i.target).is(":kendoFocusable") || t.focus()
                })
            },
            _checkboxClick: function(t) {
                var i = n(t.target);
                i.data(h) && (i.data(h, !1).prop(h, !1).prop(e, !0), this._checkboxChange(t))
            },
            _syncHtmlAndDataSource: function(n, t) {
                var s, h, c, l, o, r, u, f;
                for (n = n || this.root, t = t || this.dataSource, s = t.view(), h = i.attr("uid"), c = i.attr("expanded"), l = this.options.checkboxes, o = n.children("li"), r = 0; o.length > r; r++) f = s[r],
                u = o.eq(r),
                u.attr("role", "treeitem").attr(h, f.uid),
                f.expanded = "true" === u.attr(c),
                l && (f.checked = rt(u).prop(e)),
                this._syncHtmlAndDataSource(u.children("ul"), f.children)
            },
            _animation: function() {
                var t = this.options,
                n = t.animation;
                n === !1 ? n = {
                    expand: {
                        effects: {}
                    },
                    collapse: {
                        hide: !0,
                        effects: {}
                    }
                }: n.collapse && "effects" in n.collapse || (n.collapse = v({
                    reverse: !0
                },
                n.expand));
                v(n.collapse, {
                    hide: !0
                });
                t.animation = n
            },
            _dragging: function() {
                var t = this.options.dragAndDrop,
                n = this.dragging;
                t && !n ? this.dragging = new ht(this) : !t && n && (n.destroy(), this.dragging = null)
            },
            _templates: function() {
                var t = this,
                n = t.options,
                u = r(t._fieldAccessor, t);
                n.template && typeof n.template == it ? n.template = at(n.template) : n.template || (n.template = c("# var text = " + u("text") + "(data.item); ## if (typeof data.item.encoded != 'undefined' && data.item.encoded === false) {##= text ## } else { ##: text ## } #"));
                t._checkboxes();
                t.templates = {
                    wrapperCssClass: function(n, t) {
                        var i = "k-item",
                        r = t.index;
                        return n.firstLevel && 0 === r && (i += " k-first"),
                        r == n.length - 1 && (i += " k-last"),
                        i
                    },
                    cssClass: function(n, t) {
                        var r = "",
                        i = t.index,
                        u = n.length - 1;
                        return n.firstLevel && 0 === i && (r += "k-top "),
                        r + (0 === i && i != u ? "k-top": i == u ? "k-bot": "k-mid")
                    },
                    textClass: function(n) {
                        var t = "k-in";
                        return n.enabled === !1 && (t += " k-state-disabled"),
                        n.selected === !0 && (t += " k-state-selected"),
                        t
                    },
                    toggleButtonClass: function(n) {
                        var t = "k-icon";
                        return t += n.expanded !== !0 ? " k-plus": " k-minus",
                        n.enabled === !1 && (t += "-disabled"),
                        t
                    },
                    groupAttributes: function(n) {
                        return n.expanded !== !0 ? " style='display:none'": ""
                    },
                    groupCssClass: function(n) {
                        var t = "k-group";
                        return n.firstLevel && (t += " k-treeview-lines"),
                        t
                    },
                    dragClue: c("<div class='k-header k-drag-clue'><span class='k-icon k-drag-status' />#= data.treeview.template(data) #<\/div>"),
                    group: c("<ul class='#= data.r.groupCssClass(data.group) #'#= data.r.groupAttributes(data.group) # role='group'>#= data.renderItems(data) #<\/ul>"),
                    itemContent: c("# var imageUrl = " + u("imageUrl") + "(data.item); ## var spriteCssClass = " + u("spriteCssClass") + "(data.item); ## if (imageUrl) { #<img class='k-image' alt='' src='#= imageUrl #'># } ## if (spriteCssClass) { #<span class='k-sprite #= spriteCssClass #' /># } ##= data.treeview.template(data) #"),
                    itemElement: c("# var item = data.item, r = data.r; ## var url = " + u("url") + "(item); #<div class='#= r.cssClass(data.group, item) #'># if (item.hasChildren) { #<span class='#= r.toggleButtonClass(item) #' role='presentation' /># } ## if (data.treeview.checkboxes) { #<span class='k-checkbox' role='presentation'>#= data.treeview.checkboxes.template(data) #<\/span># } ## var tag = url ? 'a' : 'span'; ## var textAttr = url ? ' href=\\'' + url + '\\'' : ''; #<#=tag#  class='#= r.textClass(item) #'#= textAttr #>#= r.itemContent(data) #<\/#=tag#><\/div>"),
                    item: c("# var item = data.item, r = data.r; #<li role='treeitem' class='#= r.wrapperCssClass(data.group, item) #' " + i.attr("uid") + "='#= item.uid #'#=item.selected ? \"aria-selected='true'\" : ''##=item.enabled === false ? \"aria-disabled='true'\" : ''#>#= r.itemElement(data) #<\/li>"),
                    loading: c("<div class='k-icon k-loading' /> #: data.messages.loading #"),
                    retry: c("#: data.messages.requestFailed # <button class='k-button k-request-retry'>#: data.messages.retry #<\/button>")
                }
            },
            items: function() {
                return this.element.find(".k-item")
            },
            setDataSource: function(n) {
                this.options.dataSource = n;
                this._dataSource();
                this.dataSource.fetch()
            },
            _bindDataSource: function() {
                this._refreshHandler = r(this.refresh, this);
                this._errorHandler = r(this._error, this);
                this.dataSource.bind(p, this._refreshHandler);
                this.dataSource.bind(pt, this._errorHandler)
            },
            _unbindDataSource: function() {
                var n = this.dataSource;
                n && (n.unbind(p, this._refreshHandler), n.unbind(pt, this._errorHandler))
            },
            _dataSource: function(n) {
                function r(n) {
                    for (var t = 0; n.length > t; t++) n[t]._initChildren(),
                    n[t].children.fetch(),
                    r(n[t].children.view())
                }
                var i = this,
                u = i.options,
                t = u.dataSource;
                t = y(t) ? {
                    data: t
                }: t;
                i._unbindDataSource();
                t.fields || (t.fields = [{
                    field: "text"
                },
                {
                    field: "url"
                },
                {
                    field: "spriteCssClass"
                },
                {
                    field: "imageUrl"
                }]);
                i.dataSource = t = vt.create(t);
                n && (t.fetch(), r(t.view()));
                i._bindDataSource()
            },
            events: [wt, bt, kt, dt, gt, "expand", "collapse", ft, p, yt],
            options: {
                name: "TreeView",
                dataSource: {},
                animation: {
                    expand: {
                        effects: "expand:vertical",
                        duration: 200
                    },
                    collapse: {
                        duration: 100
                    }
                },
                messages: {
                    loading: "Loading...",
                    requestFailed: "Request failed.",
                    retry: "Retry"
                },
                dragAndDrop: !1,
                checkboxes: !1,
                autoBind: !0,
                loadOnDemand: !0,
                template: "",
                dataTextField: null
            },
            _accessors: function() {
                var t, n, r, u = this,
                f = u.options,
                e = u.element;
                for (t in k) n = f[k[t]],
                r = e.attr(i.attr(t + "-field")),
                !n && r && (n = r),
                n || (n = t),
                y(n) || (n = [n]),
                f[k[t]] = n
            },
            _fieldAccessor: function(t) {
                var u = this.options[k[t]],
                f = u.length,
                r = "(function(item) {";
                return 0 === f ? r += "return item['" + t + "'];": (r += "var levels = [" + n.map(u,
                function(n) {
                    return "function(d){ return " + i.expr(n) + "}"
                }).join(",") + "];", r += "return levels[Math.min(item.level(), " + f + "-1)](item)"),
                r + "})"
            },
            setOptions: function(n) {
                nt.fn.setOptions.call(this, n);
                this._animation();
                this._dragging();
                this._templates()
            },
            _trigger: function(n, t) {
                return this.trigger(n, {
                    node: t.closest(u)[0]
                })
            },
            _setChecked: function(t, i) {
                if (t && n.isFunction(t.view)) for (var r = 0,
                u = t.view(); u.length > r; r++) u[r][e] = i,
                u[r].children && this._setChecked(u[r].children, i)
            },
            _setIndeterminate: function(n) {
                var t, u, i, f = o(n),
                r = !0;
                if (f.length && (t = rt(f.children()), u = t.length)) {
                    if (u > 1) {
                        for (i = 1; u > i; i++) if (t[i].checked != t[i - 1].checked || t[i].indeterminate || t[i - 1].indeterminate) {
                            r = !1;
                            break
                        }
                    } else r = !t[0].indeterminate;
                    return rt(n).data(h, !r).prop(h, !r).prop(e, r && t[0].checked)
                }
            },
            updateIndeterminate: function(n) {
                var t, i, r;
                if (n = n || this.wrapper, t = o(n).children(), t.length) {
                    for (i = 0; t.length > i; i++) this.updateIndeterminate(t.eq(i));
                    r = this._setIndeterminate(n);
                    r && r.prop(e) && (this.dataItem(n).checked = !0)
                }
            },
            _bubbleIndeterminate: function(n) {
                if (n.length) {
                    var i, t = this.parent(n);
                    t.length && (this._setIndeterminate(t), i = t.children("div").find(".k-checkbox :checkbox"), i.prop(h) === !1 ? this.dataItem(t).set(e, i.prop(e)) : this.dataItem(t).checked = !1, this._bubbleIndeterminate(t))
                }
            },
            _checkboxChange: function(t) {
                var i = n(t.target),
                r = i.prop(e),
                f = i.closest(u);
                this.dataItem(f).set(e, r)
            },
            _toggleButtonClick: function(t) {
                this.toggle(n(t.target).closest(u))
            },
            _mousedown: function(t) {
                var i = n(t.currentTarget).closest(u);
                this._clickTarget = i;
                this.current(i)
            },
            _focusable: function(n) {
                return n && n.length && n.is(":visible") && !n.find(".k-in:first").hasClass("k-state-disabled")
            },
            _focus: function() {
                var t = this.select(),
                r = this._clickTarget;
                i.support.touch || (r && r.length && (t = r), this._focusable(t) || (t = this.current()), this._focusable(t) || (t = this._nextVisible(n())), this.current(t))
            },
            focus: function() {
                var t, r = this.wrapper,
                n = r[0],
                i = [],
                u = [],
                f = document.documentElement;
                do n = n.parentNode,
                n.scrollHeight > n.clientHeight && (i.push(n), u.push(n.scrollTop));
                while (n != f);
                for (r.focus(), t = 0; i.length > t; t++) i[t].scrollTop = u[t]
            },
            _blur: function() {
                this.current().find(".k-in:first").removeClass("k-state-focused")
            },
            _enabled: function(n) {
                return ! n.children("div").children(".k-in").hasClass("k-state-disabled")
            },
            parent: function(t) {
                var i, r, u = /\bk-item\b/;
                typeof t == it && (t = this.element.find(t));
                ii(t) || (t = t[0]);
                r = u.test(t.className);
                do t = t.parentNode,
                u.test(t.className) && (r ? i = t: r = !0);
                while (!/\bk-treeview\b/.test(t.className) && !i);
                return n(i)
            },
            _nextVisible: function(n) {
                function r(n) {
                    for (; n.length && !n.next().length;) n = i.parent(n);
                    return n.next().length ? n.next() : n
                }
                var t, i = this,
                u = i._expanded(n);
                return n.length && n.is(":visible") ? u ? (t = o(n).children().first(), t.length || (t = r(n))) : t = r(n) : t = i.root.children().eq(0),
                i._enabled(t) || (t = i._nextVisible(t)),
                t
            },
            _previousVisible: function(n) {
                var r, t, i = this;
                if (!n.length || n.prev().length) for (t = n.length ? n.prev() : i.root.children().last(); i._expanded(t) && (r = o(t).children().last(), r.length);) t = r;
                else t = i.parent(n) || n;
                return i._enabled(t) || (t = i._previousVisible(t)),
                t
            },
            _keydown: function(r) {
                var f, u = this,
                c = r.keyCode,
                o = u.current(),
                v = u._expanded(o),
                l = o.find(".k-checkbox:first :checkbox"),
                a = i.support.isRtl(u.element);
                r.target == r.currentTarget && (!a && c == s.RIGHT || a && c == s.LEFT ? v ? f = u._nextVisible(o) : u.expand(o) : !a && c == s.LEFT || a && c == s.RIGHT ? v ? u.collapse(o) : (f = u.parent(o), u._enabled(f) || (f = t)) : c == s.DOWN ? f = u._nextVisible(o) : c == s.UP ? f = u._previousVisible(o) : c == s.HOME ? f = u._nextVisible(n()) : c == s.END ? f = u._previousVisible(n()) : c == s.ENTER ? o.find(".k-in:first").hasClass("k-state-selected") || u._trigger(ft, o) || u.select(o) : c == s.SPACEBAR && l.length && (l.prop(e, !l.prop(e)).data(h, !1).prop(h, !1), u._checkboxChange({
                    target: l
                }), f = o), f && (r.preventDefault(), o[0] != f[0] && (u._trigger(yt, f), u.current(f))))
            },
            _click: function(t) {
                var f, e = this,
                i = n(t.currentTarget),
                o = a(i.closest(u)),
                r = i.attr("href");
                f = r ? "#" == r || r.indexOf("#" + this.element.id + "-") >= 0 : o.length && !o.children().length;
                f && t.preventDefault();
                i.hasClass(".k-state-selected") || e._trigger(ft, i) || e.select(i)
            },
            _wrapper: function() {
                var n, i, r = this,
                t = r.element;
                t.is("ul") ? (n = t.wrap("<div />").parent(), i = t) : (n = t, i = n.children("ul").eq(0));
                r.wrapper = n.addClass("k-widget k-treeview");
                r.root = i
            },
            _group: function(n) {
                var t = this,
                r = n.hasClass(b),
                i = {
                    firstLevel: r,
                    expanded: r || t._expanded(n)
                },
                u = n.children("ul");
                u.addClass(t.templates.groupCssClass(i)).css("display", i.expanded ? "": "none");
                t._nodes(u, i)
            },
            _nodes: function(t, i) {
                var u, r = this,
                f = t.children("li");
                i = v({
                    length: f.length
                },
                i);
                f.each(function(t, f) {
                    f = n(f);
                    u = {
                        index: t,
                        expanded: r._expanded(f)
                    };
                    d(f);
                    r._updateNodeClasses(f, i, u);
                    r._group(f)
                })
            },
            _checkboxes: function() {
                var i, t = this.options,
                n = t.checkboxes; (n || t.checkboxTemplate) && (t.checkboxTemplate ? i = t.checkboxTemplate: (i = "<input type='checkbox' #= (item.enabled === false) ? 'disabled' : '' # #= item.checked ? 'checked' : '' #", n.name && (i += " name='" + n.name + "'"), i += " />"), n = v({
                    template: i
                },
                t.checkboxes), typeof n.template == it && (n.template = at(n.template)), t.checkboxes = n)
            },
            _updateNodeClasses: function(n, t, i) {
                var r = n.children("div"),
                f = n.children("ul"),
                u = this.templates;
                n.hasClass("k-treeview") || (i = i || {},
                i.expanded = typeof i.expanded != l ? i.expanded: this._expanded(n), i.index = typeof i.index != l ? i.index: n.index(), i.enabled = typeof i.enabled != l ? i.enabled: !r.children(".k-in").hasClass("k-state-disabled"), t = t || {},
                t.firstLevel = typeof t.firstLevel != l ? t.firstLevel: n.parent().parent().hasClass(b), t.length = typeof t.length != l ? t.length: n.parent().children().length, n.removeClass("k-first k-last").addClass(u.wrapperCssClass(t, i)), r.removeClass("k-top k-mid k-bot").addClass(u.cssClass(t, i)), r.children(".k-in").removeClass("k-in k-state-default k-state-disabled").addClass(u.textClass(i)), (f.length || "true" == n.attr("data-hasChildren")) && (r.children(".k-icon").removeClass("k-plus k-minus k-plus-disabled k-minus-disabled").addClass(u.toggleButtonClass(i)), f.addClass("k-group")))
            },
            _processNodes: function(t, i) {
                var r = this;
                r.element.find(t).each(function(t, f) {
                    i.call(r, t, n(f).closest(u))
                })
            },
            dataItem: function(t) {
                var f = n(t).closest(u).attr(i.attr("uid")),
                r = this.dataSource;
                return r && r.getByUid(f)
            },
            _insertNode: function(t, i, r, u, f) {
                for (var a, s, h, c = this,
                l = o(r), p = l.children().length + 1, v = {
                    firstLevel: r.hasClass(b),
                    expanded: !f,
                    length: p
                },
                y = "", w = function(n, t) {
                    n.appendTo(t)
                },
                e = 0; t.length > e; e++) h = t[e],
                h.index = i + e,
                y += c._renderItem({
                    group: v,
                    item: h
                });
                if (s = n(y), s.length) {
                    for (l.length || (l = n(c._renderGroup({
                        group: v
                    })).appendTo(r)), u(s, l), r.hasClass("k-item") && (d(r), c._updateNodeClasses(r)), c._updateNodeClasses(s.prev().first()), c._updateNodeClasses(s.next().last()), e = 0; t.length > e; e++) h = t[e],
                    h.hasChildren && (a = h.children.data(), a.length && c._insertNode(a, h.index, s.eq(e), w, !c._expanded(s.eq(e))));
                    return s
                }
            },
            _updateNode: function(t, i) {
                function y() {
                    v = !0
                }
                function p(n, t) {
                    n.find(".k-checkbox :checkbox").prop(e, t).data(h, !1).prop(h, !1)
                }
                var s, f, r, c, l, u = this,
                o = {
                    treeview: u.options,
                    item: r
                },
                v = !1;
                if ("selected" == t) r = i[0],
                f = u.findByUid(r.uid).find(".k-in:first").removeClass("k-state-hover").toggleClass("k-state-selected", r[t]).end(),
                r[t] ? (u.current(f), f.attr(et, !0)) : f.attr(et, !1);
                else for (n.inArray(t, u.options.dataTextField) >= 0 ? v = !0 : (o.item = i[0], o.item.bind("get", y), u.templates.itemContent(o), o.item.unbind("set", y)), s = 0; i.length > s; s++) o.item = r = i[s],
                ("spriteCssClass" == t || "imageUrl" == t || v) && u.findByUid(r.uid).find(">div>.k-in").html(u.templates.itemContent(o)),
                t == e ? (f = u.findByUid(r.uid), c = r[t], p(f.children("div"), c), u.options.checkboxes.checkChildren && (p(f.children(".k-group"), c), u._setChecked(r.children, c), u._bubbleIndeterminate(f))) : "expanded" == t ? u._toggle(u.findByUid(r.uid), r, r[t]) : "enabled" == t && (f = u.findByUid(r.uid), f.find(".k-checkbox :checkbox").prop("disabled", !r[t]), l = !a(f).is(fi), f.removeAttr(ti), r[t] || (r.selected && r.set("selected", !1), r.expanded && r.set("expanded", !1), l = !0, f.removeAttr(et).attr(ti, !0)), u._updateNodeClasses(f, {},
                {
                    enabled: r[t],
                    expanded: !l
                }))
            },
            _appendItems: function(n, t, i) {
                var u = o(i),
                r = u.children(),
                f = !this._expanded(i);
                typeof n == l && (n = r.length);
                this._insertNode(t, n, i,
                function(t, i) {
                    n >= r.length ? t.appendTo(i) : t.insertBefore(r.eq(n))
                },
                f);
                this._expanded(i) && (this._updateNodeClasses(i), o(i).css("display", "block"))
            },
            refresh: function(i) {
                var f, c, h, r = this,
                e = r.wrapper,
                s = i.node,
                l = i.action,
                u = i.items,
                a = r.options,
                v = a.loadOnDemand,
                y = a.checkboxes && a.checkboxes.checkChildren;
                if (i.field) return u[0].level ? r._updateNode(i.field, u) : void 0;
                if (s && (e = r.findByUid(s.uid), r._progress(e, !1)), y && "remove" != l && s && s.checked) for (f = 0; u.length > f; f++) u[f].checked = !0;
                for ("add" == l ? this._appendItems(i.index, u, e) : "remove" == l ? r._remove(r.findByUid(u[0].uid), !1) : s ? (o(e).empty(), u.length ? (this._appendItems(i.index, u, e), v && y && this._bubbleIndeterminate(o(e).children().last())) : d(e)) : (c = r._renderGroup({
                    items: u,
                    group: {
                        firstLevel: !0,
                        expanded: !0
                    }
                }), r.root.length ? (h = n(c), r.root.attr("class", h.attr("class")).attr("role", h.attr("role")).html(h.html())) : r.root = r.wrapper.html(c).children("ul")), f = 0; u.length > f; f++)(!v || u[f].expanded) && u[f].load();
                r.trigger(gt, {
                    node: s ? e: t
                })
            },
            _error: function(n) {
                var t = n.node && this.findByUid(n.node.uid),
                i = this.templates.retry({
                    messages: this.options.messages
                });
                t ? (this._progress(t, !1), this._expanded(t, !1), g(t).addClass("k-i-refresh"), n.node.loaded(!1)) : (this._progress(!1), this.element.html(i))
            },
            _retryRequest: function(n) {
                n.preventDefault();
                this.dataSource.fetch()
            },
            expand: function(n) {
                this._processNodes(n,
                function(n, t) {
                    this.toggle(t, !0)
                })
            },
            collapse: function(n) {
                this._processNodes(n,
                function(n, t) {
                    this.toggle(t, !1)
                })
            },
            enable: function(n, t) {
                t = 2 == arguments.length ? !!t: !0;
                this._processNodes(n,
                function(n, i) {
                    this.dataItem(i).set("enabled", t)
                })
            },
            current: function(i) {
                var f = this,
                r = f._current,
                o = f.element,
                e = f._ariaId;
                return arguments.length > 0 && i && i.length ? (r && (r[0].id === e && r.removeAttr("id"), r.find(".k-in:first").removeClass("k-state-focused")), r = f._current = n(i, o).closest(u), r.find(".k-in:first").addClass("k-state-focused"), e = r[0].id || e, e && (f.wrapper.removeAttr("aria-activedescendant"), r.attr("id", e), f.wrapper.attr("aria-activedescendant", e)), t) : (r || (r = f._nextVisible(n())), r)
            },
            select: function(i) {
                var r = this,
                f = r.element;
                return arguments.length ? (i = n(i, f).closest(u), f.find(".k-state-selected").each(function() {
                    var n = r.dataItem(this);
                    n.set("selected", !1);
                    delete n.selected
                }), i.length && r.dataItem(i).set("selected", !0), r.trigger(p), t) : f.find(".k-state-selected").closest(u)
            },
            _toggle: function(n, t, i) {
                var f, u = this,
                e = u.options,
                r = a(n),
                o = i ? "expand": "collapse",
                s = e.animation[o];
                if (!r.data("animating") && !u._trigger(o, n)) if (u._expanded(n, i), f = t && t.loaded(), f && r.children().length > 0) {
                    if (u._updateNodeClasses(n, {},
                    {
                        expanded: i
                    }), r.css("display") == (i ? "block": "none")) return;
                    i || r.css("height", r.height()).css("height");
                    r.kendoStop(!0, !0).kendoAnimate(v({
                        reset: !0
                    },
                    s, {
                        complete: function() {
                            i && r.css("height", "")
                        }
                    }))
                } else i && (e.loadOnDemand && u._progress(n, !0), r.remove(), t.load())
            },
            toggle: function(t, i) {
                t = n(t);
                g(t).is(".k-minus,.k-plus,.k-minus-disabled,.k-plus-disabled") && (1 == arguments.length && (i = !this._expanded(t)), this._expanded(t, i))
            },
            destroy: function() {
                var n = this;
                nt.fn.destroy.call(n);
                n.wrapper.off(f);
                n._unbindDataSource();
                n.dragging && n.dragging.destroy();
                i.destroy(n.element);
                n.root = n.wrapper = n.element = null
            },
            _expanded: function(n, r) {
                var f = i.attr("expanded"),
                u = this.dataItem(n);
                return 1 == arguments.length ? "true" === n.attr(f) || u && u.expanded: (a(n).data("animating") || (u && (u.set("expanded", r), r = u.expanded), r ? (n.attr(f, "true"), n.attr("aria-expanded", "true")) : (n.removeAttr(f), n.attr("aria-expanded", "false"))), t)
            },
            _progress: function(n, t) {
                var i = this.element,
                r = this.templates.loading({
                    messages: this.options.messages
                });
                1 == arguments.length ? (t = n, t ? i.html(r) : i.empty()) : g(n).toggleClass("k-loading", t).removeClass("k-i-refresh")
            },
            text: function(n, i) {
                var r = this.dataItem(n),
                u = this.options[k.text],
                e = r.level(),
                o = u.length,
                f = u[Math.min(e, o - 1)];
                return i ? (r.set(f, i), t) : r[f]
            },
            _objectOrSelf: function(t) {
                return n(t).closest("[data-role=treeview]").data("kendoTreeView") || this
            },
            _dataSourceMove: function(n, t, i, r) {
                var u, e = this._objectOrSelf(i || t),
                f = e.dataSource;
                return i && i[0] != e.element[0] && (u = e.dataItem(i), u.loaded() || (e._progress(i, !0), u.load()), i != this.root && (f = u.children, f && f instanceof vt || (u._initChildren(), u.loaded(!0), f = u.children))),
                n = this._toObservableData(n),
                r.call(this, f, n)
            },
            _toObservableData: function(t) {
                var u, f, r = t;
                return (t instanceof window.jQuery || ii(t)) && (u = this._objectOrSelf(t).dataSource, f = n(t).attr(i.attr("uid")), r = u.getByUid(f), r && (r = u.remove(r))),
                r
            },
            _insert: function(n, t, r) {
                t instanceof i.data.ObservableArray ? t = t.toJSON() : y(t) || (t = [t]);
                var u = n.parent();
                return u && u._initChildren && (u.hasChildren = !0, u._initChildren()),
                n.splice.apply(n, [r, 0].concat(t)),
                this.findByUid(n[r].uid)
            },
            insertAfter: st(1),
            insertBefore: st(0),
            append: function(t, i, r) {
                var u = this,
                f = u.root;
                return r = r || n.noop,
                i && (f = o(i)),
                u._dataSourceMove(t, f, i,
                function(n, t) {
                    function e() {
                        i && u._expanded(i, !0);
                        var r = n.data(),
                        f = Math.max(r.length, 0);
                        return u._insert(r, t, f)
                    }
                    var f;
                    return n.data() ? (f = e(), r(f), f) : (n.one(p,
                    function() {
                        r(e())
                    }), null)
                })
            },
            _remove: function(t, i) {
                var r, f, e, u = this;
                return t = n(t, u.element),
                r = t.parent().parent(),
                f = t.prev(),
                e = t.next(),
                t[i ? "detach": "remove"](),
                r.hasClass("k-item") && (d(r), u._updateNodeClasses(r)),
                u._updateNodeClasses(f),
                u._updateNodeClasses(e),
                t
            },
            remove: function(n) {
                var t = this.dataItem(n);
                t && this.dataSource.remove(t)
            },
            detach: function(n) {
                return this._remove(n, !0)
            },
            findByText: function(t) {
                return n(this.element).find(".k-in").filter(function(i, r) {
                    return n(r).text() == t
                }).closest(u)
            },
            findByUid: function(n) {
                return this.element.find(".k-item[" + i.attr("uid") + "=" + n + "]")
            },
            expandPath: function(i, r) {
                var f = this.dataSource,
                u = f.get(i[0]);
                for (r = r || n.noop; i.length > 0 && (u.expanded || u.loaded());) u.set("expanded", !0),
                i.shift(),
                u = f.get(i[0]);
                return i.length ? (f.bind("change",
                function(n) {
                    var t = n.node && n.node.id;
                    t && t === i[0] && (i.shift(), i.length ? f.get(i[0]).set("expanded", !0) : r())
                }), u.set("expanded", !0), t) : r()
            },
            _renderItem: function(n) {
                return n.group || (n.group = {}),
                n.treeview = this.options,
                n.r = this.templates,
                this.templates.item(n)
            },
            _renderGroup: function(n) {
                var t = this;
                return n.renderItems = function(n) {
                    var u = "",
                    i = 0,
                    r = n.items,
                    f = r ? r.length: 0,
                    e = n.group;
                    for (e.length = f; f > i; i++) n.group = e,
                    n.item = r[i],
                    n.item.index = i,
                    u += t._renderItem(n);
                    return u
                },
                n.r = t.templates,
                t.templates.group(n)
            }
        });
        ht.prototype = {
            _removeTouchHover: function() {
                var n = this;
                i.support.touch && n.hovered && (n.hovered.find("." + w).removeClass(w), n.hovered = !1)
            },
            _hintStatus: function(i) {
                var r = this._draggable.hint.find(".k-drag-status")[0];
                return i ? (r.className = "k-icon k-drag-status " + i, t) : n.trim(r.className.replace(/k-(icon|drag-status)/g, ""))
            },
            dragstart: function(t) {
                var i = this,
                r = i.treeview,
                f = i.sourceNode = t.currentTarget.closest(u);
                r.trigger(wt, {
                    sourceNode: f[0]
                }) && t.preventDefault();
                i.dropHint = n("<div class='k-drop-hint' />").css(tt, "hidden").appendTo(r.element)
            },
            drag: function(t) {
                var r, e, a, c, v, l, y, s, p, h, f = this,
                k = f.treeview,
                d = f.sourceNode,
                o = f.dropTarget = n(i.eventTarget(t)),
                b = o.closest(".k-treeview");
                b.length ? n.contains(d[0], o[0]) ? r = "k-denied": (r = "k-insert-middle", e = o.closest(".k-top,.k-mid,.k-bot"), e.length ? (c = e.outerHeight(), v = i.getOffset(e).top, l = o.closest(".k-in"), y = c / (l.length > 0 ? 4 : 2), s = v + y > t.y.location, p = t.y.location > v + c - y, f._removeTouchHover(), h = l.length && !s && !p, f.hovered = h ? b: !1, f.dropHint.css(tt, h ? "hidden": "visible"), l.toggleClass(w, h), h ? r = "k-add": (a = e.position(), a.top += s ? 0 : c, f.dropHint.css(a)[s ? "prependTo": "appendTo"](o.closest(u).children("div:first")), s && e.hasClass("k-top") && (r = "k-insert-top"), p && e.hasClass("k-bot") && (r = "k-insert-bottom"))) : o[0] != f.dropHint[0] && (r = b[0] != k.element[0] ? "k-add": "k-denied")) : (r = "k-denied", f._removeTouchHover());
                k.trigger(bt, {
                    sourceNode: d[0],
                    dropTarget: o[0],
                    pageY: t.y.location,
                    pageX: t.x.location,
                    statusClass: r.substring(2),
                    setStatusClass: function(n) {
                        r = n
                    }
                });
                0 !== r.indexOf("k-insert") && f.dropHint.css(tt, "hidden");
                f._hintStatus(r)
            },
            dragcancel: function() {
                this.dropHint.remove()
            },
            dragend: function() {
                function c(t) {
                    e.trigger(dt, {
                        sourceNode: t && t[0],
                        destinationNode: n[0],
                        dropPosition: f
                    })
                }
                var n, o, l, i = this,
                e = i.treeview,
                f = "over",
                r = i.sourceNode,
                s = i.dropHint,
                h = i.dropTarget;
                return "visible" == s.css(tt) ? (f = s.prevAll(".k-in").length > 0 ? "after": "before", n = s.closest(u)) : h && (n = h.closest(u), n.length || (n = h.closest(".k-treeview"))),
                o = {
                    sourceNode: r[0],
                    destinationNode: n[0],
                    valid: "k-denied" != i._hintStatus(),
                    setValid: function(n) {
                        this.valid = n
                    },
                    dropTarget: h[0],
                    dropPosition: f
                },
                l = e.trigger(kt, o),
                s.remove(),
                i._removeTouchHover(),
                !o.valid || l ? (i._draggable.dropped = o.valid, t) : (i._draggable.dropped = !0, "over" == f ? e.append(r, n, c) : ("before" == f ? r = e.insertBefore(r, n) : "after" == f && (r = e.insertAfter(r, n)), c(r)), t)
            },
            destroy: function() {
                this._draggable.destroy()
            }
        };
        ut.plugin(ct)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min"], n)
} (function() {
    return function(n) {
        function s(t, i) {
            return t === i || n.contains(t, i)
        }
        var t = window.kendo,
        rt = t.ui,
        p = rt.Widget,
        f = t.support,
        r = t.getOffset,
        at = t._activeElement,
        w = "open",
        b = "close",
        ut = "deactivate",
        ft = "activate",
        u = "center",
        et = "left",
        h = "right",
        k = "top",
        c = "bottom",
        d = "absolute",
        ot = "hidden",
        l = "body",
        g = "location",
        e = "position",
        st = "visible",
        ht = "effects",
        ct = "k-state-active",
        a = "k-state-border",
        vt = /k-state-border-(\w+)/,
        lt = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
        v = "down",
        nt = n(window),
        tt = n(document.documentElement),
        y = "resize scroll",
        yt = f.transitions.css,
        pt = yt + "transform",
        i = n.extend,
        o = ".kendoPopup",
        it = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
        wt = p.extend({
            init: function(r, u) {
                var e, f = this;
                u = u || {};
                u.isRtl && (u.origin = u.origin || c + " " + h, u.position = u.position || k + " " + h);
                p.fn.init.call(f, r, u);
                r = f.element;
                u = f.options;
                f.collisions = u.collision ? u.collision.split(" ") : [];
                1 === f.collisions.length && f.collisions.push(f.collisions[0]);
                e = n(f.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])");
                u.appendTo = n(n(u.appendTo)[0] || e[0] || l);
                f.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!u.isRtl).css({
                    position: d
                }).appendTo(u.appendTo).on("mouseenter" + o,
                function() {
                    f._hovered = !0
                }).on("mouseleave" + o,
                function() {
                    f._hovered = !1
                });
                f.wrapper = n();
                u.animation === !1 && (u.animation = {
                    open: {
                        effects: {}
                    },
                    close: {
                        hide: !0,
                        effects: {}
                    }
                });
                i(u.animation.open, {
                    complete: function() {
                        f.wrapper.css({
                            overflow: st
                        });
                        f.trigger(ft)
                    }
                });
                i(u.animation.close, {
                    complete: function() {
                        f.wrapper.hide();
                        var i, e, o = f.wrapper.data(g),
                        s = n(u.anchor);
                        o && f.wrapper.css(o);
                        u.anchor != l && (i = (s[0].className.match(vt) || ["", "down"])[1], e = a + "-" + i, s.removeClass(e).children(lt).removeClass(ct).removeClass(e), r.removeClass(a + "-" + t.directions[i].reverse));
                        f._closing = !1;
                        f.trigger(ut)
                    }
                });
                f._mousedownProxy = function(n) {
                    f._mousedown(n)
                };
                f._resizeProxy = function(n) {
                    f._resize(n)
                };
                u.toggleTarget && n(u.toggleTarget).on(u.toggleEvent + o, n.proxy(f.toggle, f))
            },
            events: [w, ft, b, ut],
            options: {
                name: "Popup",
                toggleEvent: "click",
                origin: c + " " + et,
                position: k + " " + et,
                anchor: l,
                collision: "flip fit",
                viewport: window,
                copyAnchorStyles: !0,
                autosize: !1,
                modal: !1,
                animation: {
                    open: {
                        effects: "slideIn:down",
                        transition: !0,
                        duration: 200
                    },
                    close: {
                        duration: 100,
                        hide: !0
                    }
                }
            },
            destroy: function() {
                var u, i = this,
                r = i.options,
                f = i.element.off(o);
                p.fn.destroy.call(i);
                r.toggleTarget && n(r.toggleTarget).off(o);
                r.modal || (tt.unbind(v, i._mousedownProxy), nt.unbind(y, i._resizeProxy));
                t.destroy(i.element.children());
                f.removeData();
                r.appendTo[0] === document.body && (u = f.parent(".k-animation-container"), u[0] ? u.remove() : f.remove())
            },
            open: function(r, u) {
                var s, p, g, o = this,
                ut = {
                    isFixed: !isNaN(parseInt(u, 10)),
                    x: r,
                    y: u
                },
                h = o.element,
                c = o.options,
                b = "down",
                rt = n(c.anchor),
                ft = h[0] && h.hasClass("km-widget");
                if (!o.visible()) {
                    if (c.copyAnchorStyles && (ft && "font-size" == it[0] && it.shift(), h.css(t.getComputedStyles(rt[0], it))), h.data("animating") || o.trigger(w)) return;
                    c.modal || (tt.unbind(v, o._mousedownProxy).bind(v, o._mousedownProxy), f.mobileOS.ios || f.mobileOS.android || nt.unbind(y, o._resizeProxy).bind(y, o._resizeProxy));
                    o.wrapper = p = t.wrap(h, c.autosize).css({
                        overflow: ot,
                        display: "block",
                        position: d
                    });
                    f.mobileOS.android && p.add(rt).css(pt, "translatez(0)");
                    p.css(e);
                    n(c.appendTo)[0] == document.body && p.css(k, "-10000px");
                    s = i(!0, {},
                    c.animation.open);
                    o.flipped = o._position(ut);
                    s.effects = t.parseEffects(s.effects, o.flipped);
                    b = s.effects.slideIn ? s.effects.slideIn.direction: b;
                    c.anchor != l && (g = a + "-" + b, h.addClass(a + "-" + t.directions[b].reverse), rt.addClass(g).children(lt).addClass(ct).addClass(g));
                    h.data(ht, s.effects).kendoStop(!0).kendoAnimate(s)
                }
            },
            toggle: function() {
                var n = this;
                n[n.visible() ? b: w]()
            },
            visible: function() {
                return this.element.is(":" + st)
            },
            close: function() {
                var o, u, f, e, r = this,
                s = r.options;
                if (r.visible()) {
                    if (o = r.wrapper[0] ? r.wrapper: t.wrap(r.element).hide(), r._closing || r.trigger(b)) return;
                    r.element.find(".k-popup").each(function() {
                        var i = n(this),
                        t = i.data("kendoPopup");
                        t && t.close()
                    });
                    tt.unbind(v, r._mousedownProxy);
                    nt.unbind(y, r._resizeProxy);
                    u = i(!0, {},
                    s.animation.close);
                    f = r.element.data(ht);
                    e = u.effects; ! e && !t.size(e) && f && t.size(f) && (u.effects = f, u.reverse = !0);
                    r._closing = !0;
                    r.element.kendoStop(!0);
                    o.css({
                        overflow: ot
                    });
                    r.element.kendoAnimate(u)
                }
            },
            _resize: function(n) {
                var t = this;
                "resize" === n.type ? (clearTimeout(t._resizeTimeout), t._resizeTimeout = setTimeout(function() {
                    t._position();
                    t._resizeTimeout = null
                },
                50)) : t._hovered || s(t.element[0], at()) || t.close()
            },
            _mousedown: function(i) {
                var u = this,
                h = u.element[0],
                e = u.options,
                c = n(e.anchor)[0],
                o = e.toggleTarget,
                f = t.eventTarget(i),
                r = n(f).closest(".k-popup"),
                l = r.parent().parent(".km-shim").length;
                r = r[0]; (l || !r || r === u.element[0]) && "popover" !== n(i.target).closest("a").data("rel") && (s(h, f) || s(c, f) || o && s(n(o)[0], f) || u.close())
            },
            _fit: function(n, t, i) {
                var r = 0;
                return n + t > i && (r = i - (n + t)),
                0 > n && (r = -n),
                r
            },
            _flip: function(n, t, i, r, f, e, o) {
                var s = 0;
                return o = o || t,
                e !== f && e !== u && f !== u && (n + o > r && (s += -(i + t)), 0 > n + s && (s += i + t)),
                s
            },
            _position: function(t) {
                var nt, c, ot, p, h, st, a, s, tt, o = this,
                it = o.element.css(e, ""),
                u = o.wrapper,
                w = o.options,
                v = n(w.viewport),
                ht = v.offset(),
                l = n(w.anchor),
                rt = w.origin.toLowerCase().split(" "),
                ut = w.position.toLowerCase().split(" "),
                b = o.collisions,
                y = f.zoomLevel(),
                k = 10002,
                ct = !!(v[0] == window && window.innerWidth && 1.02 >= y),
                ft = 0,
                lt = ct ? window.innerWidth: v.width(),
                at = ct ? window.innerHeight: v.height(),
                et = l.parents().filter(u.siblings());
                if (et[0]) if (c = +n(et).css("zIndex")) k = c + 1;
                else for (nt = l.parentsUntil(et), ot = nt.length; ot > ft; ft++) c = +n(nt[ft]).css("zIndex"),
                c && c > k && (k = c + 1);
                return u.css("zIndex", k),
                t && t.isFixed ? u.css({
                    left: t.x,
                    top: t.y
                }) : u.css(o._align(rt, ut)),
                p = r(u, e, l[0] === u.offsetParent()[0]),
                h = r(u),
                st = l.offsetParent().parent(".k-animation-container,.k-popup,.k-group"),
                st.length && (p = r(u, e, !0), h = r(u)),
                v[0] === window ? (h.top -= window.pageYOffset || document.documentElement.scrollTop || 0, h.left -= window.pageXOffset || document.documentElement.scrollLeft || 0) : (h.top -= ht.top, h.left -= ht.left),
                o.wrapper.data(g) || u.data(g, i({},
                p)),
                a = i({},
                h),
                s = i({},
                p),
                "fit" === b[0] && (s.top += o._fit(a.top, u.outerHeight(), at / y)),
                "fit" === b[1] && (s.left += o._fit(a.left, u.outerWidth(), lt / y)),
                tt = i({},
                s),
                "flip" === b[0] && (s.top += o._flip(a.top, it.outerHeight(), l.outerHeight(), at / y, rt[0], ut[0], u.outerHeight())),
                "flip" === b[1] && (s.left += o._flip(a.left, it.outerWidth(), l.outerWidth(), lt / y, rt[1], ut[1], u.outerWidth())),
                it.css(e, d),
                u.css(s),
                s.left != tt.left || s.top != tt.top
            },
            _align: function(t, i) {
                var s, l = this,
                v = l.wrapper,
                a = n(l.options.anchor),
                y = t[0],
                p = t[1],
                w = i[0],
                b = i[1],
                k = r(a),
                d = n(l.options.appendTo),
                g = v.outerWidth(),
                nt = v.outerHeight(),
                tt = a.outerWidth(),
                it = a.outerHeight(),
                f = k.top,
                e = k.left,
                o = Math.round;
                return d[0] != document.body && (s = r(d), f -= s.top, e -= s.left),
                y === c && (f += it),
                y === u && (f += o(it / 2)),
                w === c && (f -= nt),
                w === u && (f -= o(nt / 2)),
                p === h && (e += tt),
                p === u && (e += o(tt / 2)),
                b === h && (e -= g),
                b === u && (e -= o(g / 2)),
                {
                    top: f,
                    left: e
                }
            }
        });
        rt.plugin(wt)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.data.min", "./kendo.popup.min"], n)
} (function() {
    return function(n, t) {
        function l(t, i) {
            t.filters && (t.filters = n.grep(t.filters,
            function(n) {
                return l(n, i),
                n.filters ? n.filters.length: n.field != i
            }))
        }
        var i = window.kendo,
        a = i.ui,
        o = a.Widget,
        f = i.keys,
        u = i.support,
        ut = i.htmlEncode,
        ft = i._activeElement,
        s = "id",
        v = "li",
        r = "change",
        b = "k-state-focused",
        y = "k-state-hover",
        k = "k-loading",
        p = "open",
        d = "close",
        g = "select",
        w = "selected",
        nt = "progress",
        tt = "requestEnd",
        it = "width",
        rt = n.extend,
        e = n.proxy,
        h = u.browser,
        et = h.msie && 9 > h.version,
        ot = /"/g,
        st = {
            ComboBox: "DropDownList",
            DropDownList: "ComboBox"
        },
        c = o.extend({
            init: function(t, i) {
                var f, r = this,
                h = r.ns;
                o.fn.init.call(r, t, i);
                t = r.element;
                r._isSelect = t.is(g);
                r._template();
                r.ul = n('<ul unselectable="on" class="k-list k-reset"/>').css({
                    overflow: u.kineticScrollNeeded ? "": "auto"
                }).on("mouseenter" + h, v,
                function() {
                    n(this).addClass(y)
                }).on("mouseleave" + h, v,
                function() {
                    n(this).removeClass(y)
                }).on("click" + h, v, e(r._click, r)).attr({
                    tabIndex: -1,
                    role: "listbox",
                    "aria-hidden": !0
                });
                r.list = n("<div class='k-list-container'/>").append(r.ul).on("mousedown" + h,
                function(n) {
                    n.preventDefault()
                });
                f = t.attr(s);
                f && (r.list.attr(s, f + "-list"), r.ul.attr(s, f + "_listbox"), r._optionID = f + "_option_selected");
                r._header();
                r._accessors();
                r._initValue()
            },
            options: {
                valuePrimitive: !1,
                headerTemplate: ""
            },
            setOptions: function(n) {
                o.fn.setOptions.call(this, n);
                n && n.enable !== t && (n.enabled = n.enable)
            },
            focus: function() {
                this._focused.focus()
            },
            readonly: function(n) {
                this._editable({
                    readonly: n === t ? !0 : n,
                    disable: !1
                })
            },
            enable: function(n) {
                this._editable({
                    readonly: !1,
                    disable: !(n = n === t ? !0 : n)
                })
            },
            _filterSource: function(n) {
                var i = this,
                u = i.options,
                r = i.dataSource,
                t = r.filter() || {};
                l(t, u.dataTextField);
                n && (t = t.filters || [], t.push(n));
                r.filter(t)
            },
            _header: function() {
                var i, t = this.options.headerTemplate;
                n.isFunction(t) && (t = t({}));
                t && (this.list.prepend(t), i = this.ul.prev(), this.header = i[0] ? i: null)
            },
            _initValue: function() {
                var n = this,
                t = n.options.value;
                null !== t ? n.element.val(t) : (t = n._accessor(), n.options.value = t);
                n._old = t
            },
            _ignoreCase: function() {
                var n, t = this,
                i = t.dataSource.reader.model;
                i && i.fields && (n = i.fields[t.options.dataTextField], n && n.type && "string" !== n.type && (t.options.ignoreCase = !1))
            },
            items: function() {
                return this.ul[0].children
            },
            current: function(n) {
                var i = this,
                r = i._optionID;
                return n === t ? i._current: (i._current && (i._current.removeClass(b).removeAttr("aria-selected").removeAttr(s), i._focused.removeAttr("aria-activedescendant")), n && (n.addClass(b), i._scroll(n), r && (n.attr("id", r), i._focused.attr("aria-activedescendant", r))), i._current = n, t)
            },
            destroy: function() {
                var n = this,
                t = n.ns;
                o.fn.destroy.call(n);
                n._unbindDataSource();
                n.ul.off(t);
                n.list.off(t);
                n._touchScroller && n._touchScroller.destroy();
                n.popup.destroy();
                n._form && n._form.off("reset", n._resetHandler)
            },
            dataItem: function(n) {
                var i = this;
                return n === t && (n = i.selectedIndex),
                i._data()[n]
            },
            _accessors: function() {
                var n = this,
                r = n.element,
                t = n.options,
                u = i.getter,
                f = r.attr(i.attr("text-field")),
                e = r.attr(i.attr("value-field"));
                f && (t.dataTextField = f);
                e && (t.dataValueField = e);
                n._text = u(t.dataTextField);
                n._value = u(t.dataValueField)
            },
            _aria: function(n) {
                var i = this,
                r = i.options,
                u = i._focused;
                r.suggest !== t && u.attr("aria-autocomplete", r.suggest ? "both": "list");
                n = n ? n + " " + i.ul[0].id: i.ul[0].id;
                u.attr("aria-owns", n);
                i.ul.attr("aria-live", r.filter && "none" !== r.filter ? "polite": "off")
            },
            _blur: function() {
                var n = this;
                n._change();
                n.close()
            },
            _change: function() {
                var i, n = this,
                u = n.selectedIndex,
                e = n.options.value,
                f = n.value();
                n._isSelect && !n._bound && e && (f = e);
                f !== n._old ? i = !0 : u !== t && u !== n._oldIndex && (i = !0);
                i && (n._old = f, n._oldIndex = u, n.trigger(r), n.element.trigger(r))
            },
            _click: function(t) {
                t.isDefaultPrevented() || this._accept(n(t.currentTarget))
            },
            _data: function() {
                return this.dataSource.view()
            },
            _enable: function() {
                var n = this,
                i = n.options,
                r = n.element.is("[disabled]");
                i.enable !== t && (i.enabled = i.enable); ! i.enabled || r ? n.enable(!1) : n.readonly(n.element.is("[readonly]"))
            },
            _focus: function(n) {
                var i = this;
                return i.popup.visible() && n && i.trigger(g, {
                    item: n
                }) ? (i.close(), t) : (i._select(n), i._triggerCascade(!0), i._blur(), t)
            },
            _index: function(n) {
                for (var r = this,
                u = r._data(), t = 0, i = u.length; i > t; t++) if (r._dataValue(u[t]) == n) return t;
                return - 1
            },
            _dataValue: function(n) {
                var i = this._value(n);
                return i === t && (i = this._text(n)),
                i
            },
            _height: function(n) {
                if (n) {
                    var r, t = this,
                    u = t.list,
                    e = t.popup.visible(),
                    i = t.options.height,
                    f = t.header;
                    r = u.add(u.parent(".k-animation-container")).show();
                    i = t.ul[0].scrollHeight > i ? i: "auto";
                    r.height(i);
                    f && t.ul.height("auto" == i ? i: u.height() - f.height());
                    e || r.hide()
                }
            },
            _adjustListWidth: function() {
                var n, i, t = this.list,
                r = t[0].style.width,
                u = this.wrapper;
                if (t.data(it) || !r) return n = window.getComputedStyle ? window.getComputedStyle(u[0], null) : 0,
                i = n ? parseFloat(n.width) : u.outerWidth(),
                n && (h.mozilla || h.msie) && (i += parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth)),
                r = "border-box" !== t.css("box-sizing") ? i - (t.outerWidth() - t.width()) : i,
                t.css({
                    fontFamily: u.css("font-family"),
                    width: r
                }).data(it, r),
                !0
            },
            _popup: function() {
                var n = this,
                e = n.list,
                t = n._focused,
                r = n.options,
                f = n.wrapper;
                n.popup = new a.Popup(e, rt({},
                r.popup, {
                    anchor: f,
                    open: function(i) {
                        n._adjustListWidth();
                        n.trigger(p) ? i.preventDefault() : (t.attr("aria-expanded", !0), n.ul.attr("aria-hidden", !1))
                    },
                    close: function(i) {
                        n.trigger(d) ? i.preventDefault() : (t.attr("aria-expanded", !1), n.ul.attr("aria-hidden", !0))
                    },
                    animation: r.animation,
                    isRtl: u.isRtl(f)
                }));
                n.popup.one(p,
                function() {
                    n._height(n._data().length)
                });
                n._touchScroller = i.touchScroller(n.popup.element)
            },
            _makeUnselectable: function() {
                et && this.list.find("*").attr("unselectable", "on")
            },
            _toggleHover: function(t) {
                n(t.currentTarget).toggleClass(y, "mouseenter" === t.type)
            },
            _toggle: function(n) {
                var i = this,
                r = u.touch && u.MSPointers && u.pointers;
                n = n !== t ? n: !i.popup.visible();
                r || i._focused[0] === ft() || i._focused.focus();
                i[n ? p: d]()
            },
            _scroll: function(n) {
                if (n) {
                    n[0] && (n = n[0]);
                    var i, r, u = this.ul[0],
                    t = n.offsetTop,
                    o = n.offsetHeight,
                    f = u.scrollTop,
                    s = u.clientHeight,
                    h = t + o,
                    e = this._touchScroller;
                    e ? (i = e.dimensions.y, i.enabled && t > i.size && (t = t - i.size + o + 4, e.scrollTo(0, -t))) : (r = this.header ? this.header.outerHeight() : 0, u.scrollTop = f > t ? t - r: h > f + s ? h - s - r: f)
                }
            },
            _template: function() {
                var t = this,
                n = t.options,
                r = n.template,
                u = n.dataSource;
                t._isSelect && t.element[0].length && (u || (n.dataTextField = n.dataTextField || "text", n.dataValueField = n.dataValueField || "value"));
                r ? (r = i.template(r), t.template = function(n) {
                    return '<li tabindex="-1" role="option" unselectable="on" class="k-item">' + r(n) + "<\/li>"
                }) : t.template = i.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${' + i.expr(n.dataTextField, "data") + "}<\/li>", {
                    useWithBlock: !1
                })
            },
            _triggerCascade: function(n) {
                var t = this,
                i = t.value(); (!t._bound && i || t._old !== i) && t.trigger("cascade", {
                    userTriggered: n
                })
            },
            _unbindDataSource: function() {
                var n = this;
                n.dataSource.unbind(r, n._refreshHandler).unbind(nt, n._progressHandler).unbind(tt, n._requestEndHandler).unbind("error", n._errorHandler)
            }
        });
        rt(c, {
            inArray: function(n, t) {
                var i, r, u = t.children;
                if (!n || n.parentNode !== t) return - 1;
                for (i = 0, r = u.length; r > i; i++) if (n === u[i]) return i;
                return - 1
            }
        });
        i.ui.List = c;
        a.Select = c.extend({
            init: function(n, t) {
                c.fn.init.call(this, n, t);
                this._initial = this.element.val()
            },
            setDataSource: function(n) {
                this.options.dataSource = n;
                this._dataSource();
                this._bound = !1;
                this.options.autoBind && this.dataSource.fetch()
            },
            close: function() {
                this.popup.close()
            },
            select: function(n) {
                var i = this;
                return n === t ? i.selectedIndex: (i._select(n), i._triggerCascade(), i._old = i._accessor(), i._oldIndex = i.selectedIndex, t)
            },
            _accessor: function(n, i) {
                var u, r = this.element[0],
                e = this._isSelect,
                f = r.selectedIndex;
                return n === t ? (e ? f > -1 && (u = r.options[f], u && (n = u.value)) : n = r.value, n) : (e ? (f > -1 && r.options[f].removeAttribute(w), r.selectedIndex = i, u = r.options[i], u && u.setAttribute(w, w)) : r.value = n, t)
            },
            _hideBusy: function() {
                var n = this;
                clearTimeout(n._busy);
                n._arrow.removeClass(k);
                n._focused.attr("aria-busy", !1);
                n._busy = null
            },
            _showBusy: function() {
                var n = this;
                n._request = !0;
                n._busy || (n._busy = setTimeout(function() {
                    n._focused.attr("aria-busy", !0);
                    n._arrow.addClass(k)
                },
                100))
            },
            _requestEnd: function() {
                this._request = !1
            },
            _dataSource: function() {
                var o, t = this,
                s = t.element,
                f = t.options,
                u = f.dataSource || {};
                u = n.isArray(u) ? {
                    data: u
                }: u;
                t._isSelect && (o = s[0].selectedIndex, o > -1 && (f.index = o), u.select = s, u.fields = [{
                    field: f.dataTextField
                },
                {
                    field: f.dataValueField
                }]);
                t.dataSource && t._refreshHandler ? t._unbindDataSource() : (t._refreshHandler = e(t.refresh, t), t._progressHandler = e(t._showBusy, t), t._requestEndHandler = e(t._requestEnd, t), t._errorHandler = e(t._hideBusy, t));
                t.dataSource = i.data.DataSource.create(u).bind(r, t._refreshHandler).bind(nt, t._progressHandler).bind(tt, t._requestEndHandler).bind("error", t._errorHandler)
            },
            _get: function(t) {
                var i, r, u = this,
                f = u._data();
                if ("function" == typeof t) for (i = 0, r = f.length; r > i; i++) if (t(f[i])) {
                    t = i;
                    break
                }
                if ("number" == typeof t) {
                    if (0 > t) return n();
                    t = n(u.ul[0].children[t])
                }
                return t && t.nodeType && (t = n(t)),
                t
            },
            _move: function(n) {
                var u, o, t = this,
                e = n.keyCode,
                s = t.ul[0],
                c = t.popup.visible() ? "_select": "_accept",
                i = t._current,
                h = e === f.DOWN;
                if (e === f.UP || h) {
                    if (n.altKey) t.toggle(h);
                    else {
                        if (u = s.firstChild, !u && !t._accessor() && "filter" !== t._state) return t._fetch || (t.dataSource.one(r,
                        function() {
                            t._move(n);
                            t._fetch = !1
                        }), t._fetch = !0, t._filterSource()),
                        n.preventDefault(),
                        !0;
                        h ? (!i || -1 === t.selectedIndex && !t.value() && i[0] === u ? i = u: (i = i[0].nextSibling, i || u !== s.lastChild || (i = u)), t[c](i)) : (i = i ? i[0].previousSibling: s.lastChild, i || u !== s.lastChild || (i = u), t[c](i))
                    }
                    n.preventDefault();
                    o = !0
                } else e === f.ENTER || e === f.TAB ? (t.popup.visible() && n.preventDefault(), !t._typing && (t.popup.visible() || i && i.hasClass("k-state-selected")) || (i = null), t._accept(i), o = !0) : e === f.ESC && (t.popup.visible() && n.preventDefault(), t.close(), o = !0);
                return o
            },
            _selectItem: function() {
                var u, r, n = this,
                f = n._bound === t,
                i = n.options;
                u = n._isSelect && !n._initial && !i.value && i.index && !n._bound;
                u || (r = n._selectedValue || f && i.value || n._accessor());
                r ? n.value(r) : f && n.select(i.index)
            },
            _fetchItems: function(n) {
                var i = this,
                u = i.ul[0].firstChild;
                return i._request ? !0 : i._fetch || u ? t: i.options.cascadeFrom ? !u: (i.dataSource.one(r,
                function() {
                    i._old = t;
                    i.value(n);
                    i._fetch = !1
                }), i._fetch = !0, i.dataSource.fetch(), !0)
            },
            _options: function(n, i) {
                var u, e, o, r, s = this,
                c = s.element,
                l = n.length,
                h = "",
                f = 0;
                for (i && (f = 1, h = i); l > f; f++) u = "<option",
                e = n[f],
                o = s._text(e),
                r = s._value(e),
                r !== t && (r += "", -1 !== r.indexOf('"') && (r = r.replace(ot, "&quot;")), u += ' value="' + r + '"'),
                u += ">",
                o !== t && (u += ut(o)),
                u += "<\/option>",
                h += u;
                c.html(h)
            },
            _reset: function() {
                var t = this,
                i = t.element,
                r = i.attr("form"),
                u = r ? n("#" + r) : i.closest("form");
                u[0] && (t._resetHandler = function() {
                    setTimeout(function() {
                        t.value(t._initial)
                    })
                },
                t._form = u.on("reset", t._resetHandler))
            },
            _cascade: function() {
                var i, f, e, o, s, t = this,
                u = t.options,
                h = u.cascadeFrom;
                if (h) {
                    if (t._selectedValue = u.value || t._accessor(), f = n("#" + h), i = f.data("kendo" + u.name), i || (i = f.data("kendo" + st[u.name])), !i) return;
                    u.autoBind = !1;
                    o = u.cascadeFromField || i.options.dataValueField;
                    s = function() {
                        t.dataSource.unbind(r, s);
                        var n = t._selectedValue || t.value();
                        t._userTriggered ? t._clearSelection(i, !0) : n ? (t.value(n), t.dataSource.view()[0] && -1 !== t.selectedIndex || t._clearSelection(i, !0)) : t.select(u.index);
                        t.enable();
                        t._triggerCascade(t._userTriggered);
                        t._userTriggered = !1
                    };
                    e = function() {
                        var n, r, u, e = i.dataItem(),
                        f = e ? i._value(e) : null;
                        f || 0 === f ? (n = t.dataSource.filter() || {},
                        l(n, o), r = n.filters || [], r.push({
                            field: o,
                            operator: "eq",
                            value: f
                        }), u = function() {
                            t.unbind("dataBound", u);
                            s.apply(t, arguments)
                        },
                        t.first("dataBound", u), t.dataSource.filter(r)) : (t.enable(!1), t._clearSelection(i), t._triggerCascade(t._userTriggered), t._userTriggered = !1)
                    };
                    i.first("cascade",
                    function(n) {
                        t._userTriggered = n.userTriggered;
                        e()
                    });
                    i._bound ? e() : i.value() || t.enable(!1)
                }
            }
        })
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.list.min", "./kendo.mobile.scroller.min"], n)
} (function() {
    return function(n, t) {
        function at(n, t) {
            var i;
            if (null === n && null !== t || null !== n && null === t || (i = n.length, i !== t.length)) return ! 1;
            for (; i--;) if (n[i] !== t[i]) return ! 1;
            return ! 0
        }
        function f(t) {
            var i = t.firstChild;
            return i && "none" === i.style.display && (i = e(i, rt)),
            i ? n(i) : i
        }
        function d(t) {
            var i = t.lastChild;
            return i && "none" === i.style.display && (i = e(i, ut)),
            i ? n(i) : i
        }
        function e(n, t) {
            return n = n[t],
            n && "none" === n.style.display && (n = e(n, t)),
            n
        }
        var i = window.kendo,
        g = i.ui,
        o = g.List,
        r = i.keys,
        nt = i._activeElement,
        vt = i.data.ObservableArray,
        c = n.proxy,
        s = "id",
        v = "li",
        y = "accept",
        p = "filter",
        tt = "open",
        it = "close",
        h = "change",
        yt = "progress",
        w = "select",
        rt = "nextSibling",
        ut = "previousSibling",
        pt = ' style="display:none"',
        ft = "aria-disabled",
        et = "aria-readonly",
        l = "k-state-focused",
        b = "k-loading-hidden",
        ot = "k-state-hover",
        k = "k-state-disabled",
        st = "disabled",
        ht = "readonly",
        u = ".kendoMultiSelect",
        wt = "click" + u,
        bt = "keydown" + u,
        ct = "mouseenter" + u,
        lt = "mouseleave" + u,
        kt = ct + " " + lt,
        dt = /"/g,
        a = n.isArray,
        gt = ["font-family", "font-size", "font-stretch", "font-style", "font-weight", "letter-spacing", "text-transform", "line-height"],
        ni = o.extend({
            init: function(t, r) {
                var h, e, f = this;
                f.ns = u;
                o.fn.init.call(f, t, r);
                f._wrapper();
                f._tagList();
                f._input();
                f._textContainer();
                f._loader();
                f._tabindex(f.input);
                t = f.element.attr("multiple", "multiple").hide();
                r = f.options;
                e = r.value;
                r.placeholder || (r.placeholder = t.data("placeholder"));
                h = t.attr(s);
                h && (f._tagID = h + "_tag_active", h += "_taglist", f.tagList.attr(s, h));
                f._aria(h);
                f._dataSource();
                f._ignoreCase();
                f._popup();
                f._values = [];
                f._dataItems = [];
                f._reset();
                f._enable();
                f._placeholder();
                r.autoBind ? f.dataSource.fetch() : e && (a(e) || (e = [e]), (n.isPlainObject(e[0]) || !r.dataValueField) && (f._retrieveData = !0, f.dataSource.data(e), f.value(f._initialValues)));
                i.notify(f)
            },
            options: {
                name: "MultiSelect",
                enabled: !0,
                autoBind: !0,
                autoClose: !0,
                highlightFirst: !0,
                dataTextField: "",
                dataValueField: "",
                filter: "startswith",
                ignoreCase: !0,
                minLength: 0,
                delay: 100,
                value: null,
                maxSelectedItems: null,
                itemTemplate: "",
                tagTemplate: "",
                placeholder: "",
                height: 200,
                animation: {}
            },
            events: [tt, it, h, w, "dataBinding", "dataBound"],
            setDataSource: function(n) {
                this.options.dataSource = n;
                this._dataSource();
                this.options.autoBind && this.dataSource.fetch()
            },
            setOptions: function(n) {
                o.fn.setOptions.call(this, n);
                this._template();
                this._accessors();
                this._aria(this.tagList.attr(s))
            },
            current: function(n) {
                return this.currentTag(null),
                o.fn.current.call(this, n)
            },
            currentTag: function(n) {
                var i = this;
                return n === t ? i._currentTag: (i._currentTag && (i._currentTag.removeClass(l).removeAttr(s), i.input.removeAttr("aria-activedescendant")), n && (n.addClass(l).attr(s, i._tagID), i.input.attr("aria-activedescendant", i._tagID)), i._currentTag = n, t)
            },
            dataItems: function() {
                return this._dataItems
            },
            destroy: function() {
                var n = this,
                t = n.ns;
                n.wrapper.off(t);
                n.tagList.off(t);
                n.input.off(t);
                o.fn.destroy.call(n)
            },
            _editable: function(t) {
                var i = this,
                r = t.disable,
                f = t.readonly,
                e = i.wrapper.off(u),
                s = i.tagList.off(u),
                o = i.element.add(i.input.off(u));
                f || r ? (r ? e.addClass(k) : e.removeClass(k), o.attr(st, r).attr(ht, f).attr(ft, r).attr(et, f)) : (e.removeClass(k).on(kt, i._toggleHover).on("mousedown" + u,
                function(n) {
                    var t = "input" !== n.target.nodeName.toLowerCase();
                    t && n.preventDefault(); - 1 === n.target.className.indexOf("k-delete") && (i.input[0] !== nt() && t && i.input.focus(), 0 === i.options.minLength && i.open())
                }), i.input.on(bt, c(i._keydown, i)).on("paste" + u, c(i._search, i)).on("focus" + u,
                function() {
                    i._placeholder(!1)
                }).on("blur" + u,
                function() {
                    clearTimeout(i._typing);
                    i._placeholder(!i._dataItems[0], !0);
                    i.close();
                    i._state === p && (i._state = y);
                    i.element.blur()
                }), o.removeAttr(st).removeAttr(ht).attr(ft, !1).attr(et, !1), s.on(ct, v,
                function() {
                    n(this).addClass(ot)
                }).on(lt, v,
                function() {
                    n(this).removeClass(ot)
                }).on(wt, ".k-delete",
                function(t) {
                    i._unselect(n(t.target).closest(v));
                    i._change();
                    i.close()
                }))
            },
            _close: function() {
                var n = this;
                n.options.autoClose || !n._visibleItems ? n.close() : (n.current(n.options.highlightFirst ? f(n.ul[0]) : null), n.popup._position())
            },
            close: function() {
                this.popup.close();
                this.current(null)
            },
            open: function() {
                var n = this;
                n._request && (n._retrieveData = !1); ! n.ul[0].firstChild || n._state === y || n._retrieveData ? (n._state = "", n._open = !0, n._retrieveData = !1, n._filterSource()) : n._visibleItems && n._allowSelection() && (n.popup.open(), n.current(n.options.highlightFirst ? f(n.ul[0]) : null))
            },
            toggle: function(n) {
                n = n !== t ? n: !this.popup.visible();
                this[n ? tt: it]()
            },
            refresh: function() {
                var t, n = this,
                i = null;
                n.trigger("dataBinding");
                t = n._render(n.dataSource.view());
                n._height(t);
                n._setInitialValues && (n._setInitialValues = !1, n.value(n._initialValues));
                n._open && (n._open = !1, n.toggle(t));
                n.popup.visible() && (n.popup._position(), n.options.highlightFirst && (i = f(n.ul[0])));
                n.current(i);
                n._touchScroller && n._touchScroller.reset();
                n._makeUnselectable();
                n._hideBusy();
                n.trigger("dataBound")
            },
            search: function(n) {
                var t = this,
                i = t.options,
                u = i.ignoreCase,
                f = i.filter,
                e = i.dataTextField,
                r = t.input.val();
                i.placeholder === r && (r = "");
                clearTimeout(t._typing);
                n = "string" == typeof n ? n: r;
                n.length >= i.minLength && (t._state = p, t._open = !0, t._filterSource({
                    value: u ? n.toLowerCase() : n,
                    field: e,
                    operator: f,
                    ignoreCase: u
                }))
            },
            value: function(i) {
                var f, r = this,
                o = n(r.tagList[0].children),
                e = o.length,
                u = 0;
                if (i === t) return r._values;
                if (!r._fetchItems(i)) {
                    for (; e > u; u++) r._unselect(o.eq(u));
                    if (null !== i) {
                        for (i = a(i) || i instanceof vt ? i: [i], u = 0, e = i.length; e > u; u++) f = r._index(i[u]),
                        f > -1 && r._select(f);
                        r._old = r._values.slice()
                    }
                }
            },
            _dataSource: function() {
                var n = this,
                u = n.element,
                r = n.options,
                t = r.dataSource || {};
                t = a(t) ? {
                    data: t
                }: t;
                t.select = u;
                t.fields = [{
                    field: r.dataTextField
                },
                {
                    field: r.dataValueField
                }];
                n.dataSource && n._refreshHandler ? n._unbindDataSource() : (n._refreshHandler = c(n.refresh, n), n._progressHandler = c(n._showBusy, n));
                n.dataSource = i.data.DataSource.create(t).bind(h, n._refreshHandler).bind(yt, n._progressHandler)
            },
            _fetchItems: function(i) {
                var r = this,
                u = n.isArray(i) && 0 === i.length;
                if (!u && i) return r._fetch || r.ul[0].firstChild ? t: (r.dataSource.one(h,
                function() {
                    r.value(i);
                    r._fetch = !1
                }), r._fetch = !0, r.dataSource.fetch(), !0)
            },
            _reset: function() {
                var t = this,
                i = t.element,
                r = i.attr("form"),
                u = r ? n("#" + r) : i.closest("form");
                u[0] && (t._resetHandler = function() {
                    setTimeout(function() {
                        t.value(t._initialValues)
                    })
                },
                t._form = u.on("reset", t._resetHandler))
            },
            _initValue: function() {
                var i = this,
                n = i.options.value || i.element.val();
                null === n ? n = [] : (a(n) || (n = [n]), n = i._mapValues(n));
                i._old = i._initialValues = n;
                i._setInitialValues = n[0] !== t
            },
            _mapValues: function(t) {
                var i = this;
                return t && n.isPlainObject(t[0]) && (t = n.map(t,
                function(n) {
                    return i._value(n)
                })),
                t
            },
            _change: function() {
                var n = this,
                t = n.value();
                at(t, n._old) || (n._old = t.slice(), n.trigger(h), n.element.trigger(h))
            },
            _click: function(i) {
                var r = this,
                u = n(i.currentTarget);
                if (!i.isDefaultPrevented()) {
                    if (r.trigger(w, {
                        item: u
                    })) return r._close(),
                    t;
                    r._select(u);
                    r._change();
                    r._close()
                }
            },
            _item: function(n, t) {
                return n = n[t](),
                n[0] && !n.is(":visible") && (n = this._item(n, t)),
                n
            },
            _keydown: function(u) {
                var o = this,
                h = u.keyCode,
                s = o._currentTag,
                c = o._current,
                a = o.input.val(),
                v = i.support.isRtl(o.wrapper),
                l = o.popup.visible();
                if (h === r.DOWN) {
                    if (u.preventDefault(), !l) return o.open(),
                    t;
                    c = c ? e(c[0], rt) : f(o.ul[0]);
                    c && o.current(n(c))
                } else if (h === r.UP) l && (c = c ? e(c[0], ut) : d(o.ul[0]), o.current(n(c)), o._current[0] || o.close()),
                u.preventDefault();
                else if (h === r.LEFT && !v || h === r.RIGHT && v) a || (s = s ? s.prev() : n(o.tagList[0].lastChild), s[0] && o.currentTag(s));
                else if (h === r.RIGHT && !v || h === r.LEFT && v) ! a && s && (s = s.next(), o.currentTag(s[0] ? s: null));
                else if (h === r.ENTER && l) {
                    if (c) {
                        if (o.trigger(w, {
                            item: c
                        })) return o._close(),
                        t;
                        o._select(c)
                    }
                    o._change();
                    o._close();
                    u.preventDefault()
                } else h === r.ESC ? (l ? u.preventDefault() : o.currentTag(null), o.close()) : h === r.HOME ? l ? o.current(f(o.ul[0])) : a || (s = o.tagList[0].firstChild, s && o.currentTag(n(s))) : h === r.END ? l ? o.current(d(o.ul[0])) : a || (s = o.tagList[0].lastChild, s && o.currentTag(n(s))) : h !== r.DELETE && h !== r.BACKSPACE || a ? (clearTimeout(o._typing), setTimeout(function() {
                    o._scale()
                }), o._search()) : (h !== r.BACKSPACE || s || (s = n(o.tagList[0].lastChild)), s && s[0] && (o._unselect(s), o._change(), o._close()))
            },
            _hideBusy: function() {
                var n = this;
                clearTimeout(n._busy);
                n.input.attr("aria-busy", !1);
                n._loading.addClass(b);
                n._request = !1;
                n._busy = null
            },
            _showBusy: function() {
                var n = this;
                n._request = !0;
                n._busy || (n._busy = setTimeout(function() {
                    n.input.attr("aria-busy", !0);
                    n._loading.removeClass(b)
                },
                100))
            },
            _placeholder: function(n, r) {
                var u = this,
                f = u.input,
                e = nt();
                n === t ? (n = !1, f[0] !== e && (n = !u._dataItems[0]), u.wrapper.removeClass(l)) : u.wrapper.addClass(l);
                u._prev = "";
                f.toggleClass("k-readonly", n).val(n ? u.options.placeholder: "");
                f[0] !== e || r || i.caret(f[0], 0, 0);
                u._scale()
            },
            _scale: function() {
                var n, t = this,
                r = t.wrapper,
                u = r.width(),
                i = t._span.text(t.input.val());
                r.is(":visible") ? n = i.width() + 25 : (i.appendTo(document.documentElement), u = n = i.width() + 25, i.appendTo(r));
                t.input.width(n > u ? u: n)
            },
            _option: function(n, r) {
                var f = "<option",
                e = this._text(n),
                u = this._value(n);
                return u !== t && (u += "", -1 !== u.indexOf('"') && (u = u.replace(dt, "&quot;")), f += ' value="' + u + '"'),
                r && (f += ' selected="selected"'),
                f += ">",
                e !== t && (f += i.htmlEncode(e)),
                f + "<\/option>"
            },
            _render: function(n) {
                for (var r, u, t = this,
                f = n.length,
                c = t.itemTemplate,
                e = t._dataItems.slice(0), o = 0, i = 0, s = "", h = ""; f > i; i++) r = n[i],
                u = t._selected(e, r),
                h += c(r, i, u),
                s += t._option(r, u),
                u || (o += 1);
                if (f = e.length) for (i = 0; f > i; i++) s += t._option(e[i], !0);
                return t.ul[0].innerHTML = h,
                t.element.html(s),
                t._visibleItems = o,
                o
            },
            _selected: function(n, i) {
                var r, o = this,
                s = o._text,
                h = o._value,
                f = h(i),
                c = n.length,
                e = !1,
                u = 0;
                for (f === t && (f = s(i)); c > u; u++) if (i = n[u], r = h(i), r === t && (r = s(i)), r !== t && r === f) {
                    e = !0;
                    break
                }
                return e && n.splice(u, 1),
                e
            },
            _search: function() {
                var n = this;
                n._typing = setTimeout(function() {
                    var t = n.input.val();
                    n._prev !== t && (n._prev = t, n.search(t))
                },
                n.options.delay)
            },
            _allowSelection: function() {
                var n = this.options.maxSelectedItems;
                return null === n || n > this._values.length
            },
            _select: function(n) {
                var r, i, t = this,
                u = t._values;
                t._allowSelection() && (isNaN(n) ? i = n.hide().data("idx") : (i = n, t.ul[0].children[i].style.display = "none"), t.element[0].children[i].selected = !0, r = t.dataSource.view()[i], t.tagList.append(t.tagTemplate(r)), t._dataItems.push(r), u.push(t._dataValue(r)), t._visibleItems -= 1, t.currentTag(null), t._placeholder(), t._height(t._visibleItems), t._state === p && (t._state = y))
            },
            _unselect: function(t) {
                var o, u, f, e, s, i = this,
                r = t.index();
                if (t.remove(), i.currentTag(null), i._values.splice(r, 1), o = i._dataItems.splice(r, 1)[0], u = i._dataValue(o), r = i._index(u), -1 !== r) n(i.ul[0].children[r]).show(),
                i.element[0].children[r].selected = !1,
                i._visibleItems += 1,
                i._height(i._visibleItems);
                else for (r = i.dataSource.view().length, f = i.element[0].children, s = f.length; s > r; r++) if (e = f[r], e.value == u) {
                    e.selected = !1;
                    break
                }
                i._placeholder()
            },
            _template: function() {
                var f, t = this,
                n = t.options,
                r = n.itemTemplate,
                u = n.tagTemplate,
                e = n.dataSource;
                t.element[0].length && !e && (n.dataTextField = n.dataTextField || "text", n.dataValueField = n.dataValueField || "value");
                f = i.template("#:" + i.expr(n.dataTextField, "data") + "#", {
                    useWithBlock: !1
                });
                r = r ? i.template(r) : f;
                u = u ? i.template(u) : f;
                t.itemTemplate = function(n, t, i) {
                    return '<li tabindex="-1" role="option" data-idx="' + t + '" unselectable="on" class="k-item"' + (i ? pt: "") + ">" + r(n) + "<\/li>"
                };
                t.tagTemplate = function(n) {
                    return '<li class="k-button" unselectable="on"><span unselectable="on">' + u(n) + '<\/span><span unselectable="on" class="k-icon k-delete">delete<\/span><\/li>'
                }
            },
            _input: function() {
                var t = this,
                r = t.element[0].accessKey,
                i = t._innerWrapper.children("input.k-input");
                i[0] || (i = n('<input class="k-input" style="width: 25px" />').appendTo(t._innerWrapper));
                t.element.removeAttr("accesskey");
                t._focused = t.input = i.attr({
                    accesskey: r,
                    role: "listbox",
                    "aria-expanded": !1
                })
            },
            _tagList: function() {
                var t = this,
                i = t._innerWrapper.children("ul");
                i[0] || (i = n('<ul role="listbox" unselectable="on" class="k-reset"/>').appendTo(t._innerWrapper));
                t.tagList = i
            },
            _loader: function() {
                this._loading = n('<span class="k-icon k-loading ' + b + '"><\/span>').insertAfter(this.input)
            },
            _textContainer: function() {
                var t = i.getComputedStyles(this.input[0], gt);
                t.position = "absolute";
                t.visibility = "hidden";
                t.top = -3333;
                t.left = -3333;
                this._span = n("<span/>").css(t).appendTo(this.wrapper)
            },
            _wrapper: function() {
                var r = this,
                t = r.element,
                i = t.parent("span.k-multiselect");
                i[0] || (i = t.wrap('<div class="k-widget k-multiselect k-header" unselectable="on" />').parent(), i[0].style.cssText = t[0].style.cssText, n('<div class="k-multiselect-wrap k-floatwrap" unselectable="on" />').insertBefore(t));
                r.wrapper = i.addClass(t[0].className).css("display", "");
                r._innerWrapper = n(i[0].firstChild)
            }
        });
        g.plugin(ni)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min", "./kendo.userevents.min"], n)
} (function() {
    return function(n, t) {
        function p(n, t) {
            return '<span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-' + n + '" title="' + t + '">' + t + "<\/span><\/span>"
        }
        var r = window.kendo,
        s = r.caret,
        e = r.keys,
        w = r.ui,
        h = w.Widget,
        ft = r._activeElement,
        et = r._extractFormat,
        ot = r.parseFloat,
        st = r.support.placeholder,
        ht = r.getCulture,
        b = r._round,
        c = "change",
        k = "disabled",
        d = "readonly",
        ct = "k-input",
        g = "spin",
        u = ".kendoNumericTextBox",
        lt = "touchend",
        at = "mouseleave" + u,
        nt = "mouseenter" + u + " " + at,
        l = "k-state-default",
        tt = "k-state-focused",
        it = "k-state-hover",
        a = "focus",
        f = ".",
        v = "k-state-selected",
        y = "k-state-disabled",
        rt = "aria-disabled",
        ut = "aria-readonly",
        vt = /^(-)?(\d*)$/,
        i = null,
        o = n.proxy,
        yt = h.extend({
            init: function(n, f) {
                var s, c, l, v, y, e = this,
                p = f && f.step !== t;
                h.fn.init.call(e, n, f);
                f = e.options;
                n = e.element.on("blur" + u, o(e._focusout, e)).attr("role", "spinbutton");
                f.placeholder = f.placeholder || n.attr("placeholder");
                e._reset();
                e._wrapper();
                e._arrows();
                e._input();
                r.support.mobileOS ? e._text.on(lt + u + " " + a + u,
                function(t) {
                    e._toggleText(!1);
                    t.type === a && n.focus()
                }) : e._text.on(a + u, o(e._click, e));
                s = e.min(n.attr("min"));
                c = e.max(n.attr("max"));
                l = e._parse(n.attr("step"));
                f.min === i && s !== i && (f.min = s);
                f.max === i && c !== i && (f.max = c);
                p || l === i || (f.step = l);
                n.attr("aria-valuemin", f.min).attr("aria-valuemax", f.max);
                f.format = et(f.format);
                v = f.value;
                e.value(v !== i ? v: n.val());
                y = n.is("[disabled]");
                y ? e.enable(!1) : e.readonly(n.is("[readonly]"));
                r.notify(e)
            },
            options: {
                name: "NumericTextBox",
                decimals: i,
                min: i,
                max: i,
                value: i,
                step: 1,
                culture: "",
                format: "n",
                spinners: !0,
                placeholder: "",
                upArrowText: "Increase value",
                downArrowText: "Decrease value"
            },
            events: [c, g],
            _editable: function(n) {
                var t = this,
                f = t.element,
                i = n.disable,
                r = n.readonly,
                e = t._text.add(f),
                s = t._inputWrapper.off(nt);
                t._toggleText(!0);
                t._upArrowEventHandler.unbind("press");
                t._downArrowEventHandler.unbind("press");
                f.off("keydown" + u).off("keypress" + u).off("paste" + u);
                r || i ? (s.addClass(i ? y: l).removeClass(i ? l: y), e.attr(k, i).attr(d, r).attr(rt, i).attr(ut, r)) : (s.addClass(l).removeClass(y).on(nt, t._toggleHover), e.removeAttr(k).removeAttr(d).attr(rt, !1).attr(ut, !1), t._upArrowEventHandler.bind("press",
                function(n) {
                    n.preventDefault();
                    t._spin(1);
                    t._upArrow.addClass(v)
                }), t._downArrowEventHandler.bind("press",
                function(n) {
                    n.preventDefault();
                    t._spin( - 1);
                    t._downArrow.addClass(v)
                }), t.element.on("keydown" + u, o(t._keydown, t)).on("keypress" + u, o(t._keypress, t)).on("paste" + u, o(t._paste, t)))
            },
            readonly: function(n) {
                this._editable({
                    readonly: n === t ? !0 : n,
                    disable: !1
                })
            },
            enable: function(n) {
                this._editable({
                    readonly: !1,
                    disable: !(n = n === t ? !0 : n)
                })
            },
            destroy: function() {
                var n = this;
                n.element.add(n._text).add(n._upArrow).add(n._downArrow).add(n._inputWrapper).off(u);
                n._upArrowEventHandler.destroy();
                n._downArrowEventHandler.destroy();
                n._form && n._form.off("reset", n._resetHandler);
                h.fn.destroy.call(n)
            },
            min: function(n) {
                return this._option("min", n)
            },
            max: function(n) {
                return this._option("max", n)
            },
            step: function(n) {
                return this._option("step", n)
            },
            value: function(n) {
                var r, i = this;
                return n === t ? i._value: (n = i._parse(n), r = i._adjust(n), n === r && (i._update(n), i._old = i._value), t)
            },
            focus: function() {
                this._focusin()
            },
            _adjust: function(n) {
                var f = this,
                u = f.options,
                t = u.min,
                r = u.max;
                return n === i ? n: (t !== i && t > n ? n = t: r !== i && n > r && (n = r), n)
            },
            _arrows: function() {
                var i, t = this,
                f = function() {
                    clearTimeout(t._spinning);
                    i.removeClass(v)
                },
                u = t.options,
                e = u.spinners,
                o = t.element;
                i = o.siblings(".k-icon");
                i[0] || (i = n(p("n", u.upArrowText) + p("s", u.downArrowText)).insertAfter(o), i.wrapAll('<span class="k-select"/>'));
                e || (i.parent().toggle(e), t._inputWrapper.addClass("k-expand-padding"));
                t._upArrow = i.eq(0);
                t._upArrowEventHandler = new r.UserEvents(t._upArrow, {
                    release: f
                });
                t._downArrow = i.eq(1);
                t._downArrowEventHandler = new r.UserEvents(t._downArrow, {
                    release: f
                })
            },
            _blur: function() {
                var n = this;
                n._toggleText(!0);
                n._change(n.element.val())
            },
            _click: function(n) {
                var t = this;
                clearTimeout(t._focusing);
                t._focusing = setTimeout(function() {
                    var i, o, r, h = n.target,
                    a = s(h)[0],
                    c = h.value.substring(0, a),
                    l = t._format(t.options.format),
                    u = l[","],
                    e = 0;
                    u && (o = RegExp("\\" + u, "g"), r = RegExp("([\\d\\" + u + "]+)(\\" + l[f] + ")?(\\d+)?"));
                    r && (i = r.exec(c));
                    i && (e = i[0].replace(o, "").length, -1 != c.indexOf("(") && 0 > t._value && e++);
                    t._focusin();
                    s(t.element[0], e)
                })
            },
            _change: function(n) {
                var t = this;
                t._update(n);
                n = t._value;
                t._old != n && (t._old = n, t.trigger(c), t.element.trigger(c))
            },
            _culture: function(n) {
                return n || ht(this.options.culture)
            },
            _focusin: function() {
                var n = this;
                n._inputWrapper.addClass(tt);
                n._toggleText(!1);
                n.element[0].focus()
            },
            _focusout: function() {
                var n = this;
                clearTimeout(n._focusing);
                n._inputWrapper.removeClass(tt).removeClass(it);
                n._blur()
            },
            _format: function(n, t) {
                var i = this._culture(t).numberFormat;
                return n = n.toLowerCase(),
                n.indexOf("c") > -1 ? i = i.currency: n.indexOf("p") > -1 && (i = i.percent),
                i
            },
            _input: function() {
                var t, r = this,
                u = "k-formatted-value",
                i = r.element.addClass(ct).show()[0],
                e = i.accessKey,
                o = r.wrapper;
                t = o.find(f + u);
                t[0] || (t = n('<input type="text"/>').insertBefore(i).addClass(u));
                try {
                    i.setAttribute("type", "text")
                } catch(s) {
                    i.type = "text"
                }
                t[0].tabIndex = i.tabIndex;
                t[0].style.cssText = i.style.cssText;
                t.prop("placeholder", r.options.placeholder);
                e && (t.attr("accesskey", e), i.accessKey = "");
                r._text = t.addClass(i.className)
            },
            _keydown: function(n) {
                var t = this,
                i = n.keyCode;
                t._key = i;
                i == e.DOWN ? t._step( - 1) : i == e.UP ? t._step(1) : i == e.ENTER && t._change(t.element.val())
            },
            _keypress: function(n) {
                var t, o, r, h, c, y, u, l, a, i, v;
                0 !== n.which && n.keyCode !== e.BACKSPACE && n.keyCode !== e.ENTER && (t = this, o = t.options.min, r = t.element, h = s(r), c = h[0], y = h[1], u = String.fromCharCode(n.which), l = t._format(t.options.format), a = t._key === e.NUMPAD_DOT, i = r.val(), a && (u = l[f]), i = i.substring(0, c) + u + i.substring(y), v = t._numericRegex(l).test(i), v && a ? (r.val(i), s(r, c + u.length), n.preventDefault()) : (null !== o && o >= 0 && "-" === i.charAt(0) || !v) && n.preventDefault(), t._key = 0)
            },
            _numericRegex: function(n) {
                var r = this,
                t = n[f],
                u = r.options.decimals;
                return t === f && (t = "\\" + t),
                u === i && (u = n.decimals),
                0 === u ? vt: (r._separator !== t && (r._separator = t, r._floatRegExp = RegExp("^(-)?(((\\d+(" + t + "\\d*)?)|(" + t + "\\d*)))?$")), r._floatRegExp)
            },
            _paste: function(n) {
                var t = this,
                r = n.target,
                u = r.value;
                setTimeout(function() {
                    t._parse(r.value) === i && t._update(u)
                })
            },
            _option: function(n, i) {
                var r = this,
                u = r.options;
                return i === t ? u[n] : (i = r._parse(i), (i || "step" !== n) && (u[n] = i, r.element.attr("aria-value" + n, i).attr(n, i)), t)
            },
            _spin: function(n, t) {
                var i = this;
                t = t || 500;
                clearTimeout(i._spinning);
                i._spinning = setTimeout(function() {
                    i._spin(n, 50)
                },
                t);
                i._step(n)
            },
            _step: function(n) {
                var t = this,
                i = t.element,
                r = t._parse(i.val()) || 0;
                ft() != i[0] && t._focusin();
                r += t.options.step * n;
                t._update(t._adjust(r));
                t.trigger(g)
            },
            _toggleHover: function(t) {
                n(t.currentTarget).toggleClass(it, "mouseenter" === t.type)
            },
            _toggleText: function(n) {
                var t = this;
                t._text.toggle(n);
                t.element.toggle(!n)
            },
            _parse: function(n, t) {
                return ot(n, this._culture(t), this.options.format)
            },
            _update: function(n) {
                var e, t = this,
                s = t.options,
                h = s.format,
                u = s.decimals,
                o = t._culture(),
                c = t._format(h, o);
                u === i && (u = c.decimals);
                n = t._parse(n, o);
                e = n !== i;
                e && (n = parseFloat(b(n, u)));
                t._value = n = t._adjust(n);
                t._placeholder(r.toString(n, h, o));
                e ? (n = "" + n, -1 !== n.indexOf("e") && (n = b( + n, u)), n = n.replace(f, c[f])) : n = "";
                t.element.val(n).attr("aria-valuenow", n)
            },
            _placeholder: function(n) {
                this._text.val(n);
                st || n || this._text.val(this.options.placeholder)
            },
            _wrapper: function() {
                var t, i = this,
                r = i.element,
                u = r[0];
                t = r.parents(".k-numerictextbox");
                t.is("span.k-numerictextbox") || (t = r.hide().wrap('<span class="k-numeric-wrap k-state-default" />').parent(), t = t.wrap("<span/>").parent());
                t[0].style.cssText = u.style.cssText;
                u.style.width = "";
                i.wrapper = t.addClass("k-widget k-numerictextbox").addClass(u.className).css("display", "");
                i._inputWrapper = n(t[0].firstChild)
            },
            _reset: function() {
                var t = this,
                i = t.element,
                r = i.attr("form"),
                u = r ? n("#" + r) : i.closest("form");
                u[0] && (t._resetHandler = function() {
                    setTimeout(function() {
                        t.value(i[0].value)
                    })
                },
                t._form = u.on("reset", t._resetHandler))
            }
        });
        w.plugin(yt)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.calendar.min", "./kendo.popup.min"], n)
} (function() {
    return function(n, t) {
        function l(t) {
            var i = t.parseFormats,
            r = t.format;
            s.normalize(t);
            i = n.isArray(i) ? i: [i]; - 1 === n.inArray(r, i) && i.splice(0, 0, t.format);
            t.parseFormats = i
        }
        function g(n) {
            n.preventDefault()
        }
        var nt, i = window.kendo,
        e = i.ui,
        o = e.Widget,
        u = i.parseDate,
        f = i.keys,
        bt = i.template,
        kt = i._activeElement,
        tt = "<div />",
        it = "<span />",
        r = ".kendoDatePicker",
        rt = "click" + r,
        a = "open",
        v = "close",
        y = "change",
        ut = "disabled",
        ft = "readonly",
        p = "k-state-default",
        et = "k-state-focused",
        ot = "k-state-selected",
        w = "k-state-disabled",
        dt = "k-state-hover",
        gt = "mouseenter" + r + " mouseleave" + r,
        st = "mousedown" + r,
        b = "id",
        ht = "min",
        ct = "max",
        lt = "month",
        at = "aria-disabled",
        vt = "aria-expanded",
        k = "aria-hidden",
        yt = "aria-readonly",
        s = i.calendar,
        ni = s.isInRange,
        pt = s.restrictValue,
        ti = s.isEqualDatePart,
        d = n.extend,
        h = n.proxy,
        wt = Date,
        c = function(t) {
            var r, u = this,
            o = document.body,
            f = n(tt).attr(k, "true").addClass("k-calendar-container").appendTo(o);
            u.options = t = t || {};
            r = t.id;
            r && (r += "_dateview", f.attr(b, r), u._dateViewID = r);
            u.popup = new e.Popup(f, d(t.popup, t, {
                name: "Popup",
                isRtl: i.support.isRtl(t.anchor)
            }));
            u.div = f;
            u.value(t.value)
        };
        c.prototype = {
            _calendar: function() {
                var u, t = this,
                r = t.calendar,
                f = t.options;
                r || (u = n(tt).attr(b, i.guid()).appendTo(t.popup.element).on(st, g).on(rt, "td:has(.k-link)", h(t._click, t)), t.calendar = r = new e.Calendar(u), t._setOptions(f), i.calendar.makeUnselectable(r.element), r.navigate(t._value || t._current, f.start), t.value(t._value))
            },
            _setOptions: function(n) {
                this.calendar.setOptions({
                    focusOnNav: !1,
                    change: n.change,
                    culture: n.culture,
                    dates: n.dates,
                    depth: n.depth,
                    footer: n.footer,
                    format: n.format,
                    max: n.max,
                    min: n.min,
                    month: n.month,
                    start: n.start
                })
            },
            setOptions: function(n) {
                var t = this.options;
                this.options = d(t, n, {
                    change: t.change,
                    close: t.close,
                    open: t.open
                });
                this.calendar && this._setOptions(this.options)
            },
            destroy: function() {
                this.popup.destroy()
            },
            open: function() {
                var n = this;
                n._calendar();
                n.popup.open()
            },
            close: function() {
                this.popup.close()
            },
            min: function(n) {
                this._option(ht, n)
            },
            max: function(n) {
                this._option(ct, n)
            },
            toggle: function() {
                var n = this;
                n[n.popup.visible() ? v: a]()
            },
            move: function(n) {
                var i = this,
                r = n.keyCode,
                u = i.calendar,
                e = n.ctrlKey && r == f.DOWN || r == f.ENTER;
                return r == f.ESC ? (i.close(), t) : n.altKey ? (r == f.DOWN ? (i.open(), n.preventDefault()) : r == f.UP && (i.close(), n.preventDefault()), t) : i.popup.visible() ? e && u._cell.hasClass(ot) ? (i.close(), n.preventDefault(), t) : (i._current = u._move(n), t) : void 0
            },
            current: function(n) {
                this._current = n;
                this.calendar._focus(n)
            },
            value: function(n) {
                var t = this,
                i = t.calendar,
                r = t.options;
                t._value = n;
                t._current = new wt( + pt(n, r.min, r.max));
                i && i.value(n)
            },
            _click: function(n) { - 1 !== n.currentTarget.className.indexOf(ot) && this.close()
            },
            _option: function(n, t) {
                var i = this,
                r = i.calendar;
                i.options[n] = t;
                r && r[n](t)
            }
        };
        c.normalize = l;
        i.DateView = c;
        nt = o.extend({
            init: function(n, t) {
                var e, f, r = this;
                o.fn.init.call(r, n, t);
                n = r.element;
                t = r.options;
                t.min = u(n.attr("min")) || u(t.min);
                t.max = u(n.attr("max")) || u(t.max);
                l(t);
                r._wrapper();
                r.dateView = new c(d({},
                t, {
                    id: n.attr(b),
                    anchor: r.wrapper,
                    change: function() {
                        r._change(this.value());
                        r.close()
                    },
                    close: function(t) {
                        r.trigger(v) ? t.preventDefault() : (n.attr(vt, !1), f.attr(k, !0))
                    },
                    open: function(t) {
                        var i, e = r.options;
                        r.trigger(a) ? t.preventDefault() : (r.element.val() !== r._oldText && (i = u(n.val(), e.parseFormats, e.culture), r.dateView[i ? "current": "value"](i)), n.attr(vt, !0), f.attr(k, !1), r._updateARIA(i))
                    }
                }));
                f = r.dateView.div;
                r._icon();
                try {
                    n[0].setAttribute("type", "text")
                } catch(s) {
                    n[0].type = "text"
                }
                n.addClass("k-input").attr({
                    role: "combobox",
                    "aria-expanded": !1,
                    "aria-owns": r.dateView._dateViewID
                });
                r._reset();
                r._template();
                e = n.is("[disabled]");
                e ? r.enable(!1) : r.readonly(n.is("[readonly]"));
                r._old = r._update(t.value || r.element.val());
                r._oldText = n.val();
                i.notify(r)
            },
            events: [a, v, y],
            options: {
                name: "DatePicker",
                value: null,
                footer: "",
                format: "",
                culture: "",
                parseFormats: [],
                min: new Date(1900, 0, 1),
                max: new Date(2099, 11, 31),
                start: lt,
                depth: lt,
                animation: {},
                month: {},
                dates: [],
                ARIATemplate: 'Current focused date is #=kendo.toString(data.current, "D")#'
            },
            setOptions: function(n) {
                var t = this,
                r = t._value;
                o.fn.setOptions.call(t, n);
                n = t.options;
                n.min = u(n.min);
                n.max = u(n.max);
                l(n);
                t.dateView.setOptions(n);
                r && (t.element.val(i.toString(r, n.format, n.culture)), t._updateARIA(r))
            },
            _editable: function(n) {
                var t = this,
                o = t._dateIcon.off(r),
                f = t.element.off(r),
                e = t._inputWrapper.off(r),
                u = n.readonly,
                i = n.disable;
                u || i ? (e.addClass(i ? w: p).removeClass(i ? p: w), f.attr(ut, i).attr(ft, u).attr(at, i).attr(yt, u)) : (e.addClass(p).removeClass(w).on(gt, t._toggleHover), f.removeAttr(ut).removeAttr(ft).attr(at, !1).attr(yt, !1).on("keydown" + r, h(t._keydown, t)).on("blur" + r, h(t._blur, t)).on("focus" + r,
                function() {
                    t._inputWrapper.addClass(et)
                }), o.on(rt, h(t._click, t)).on(st, g))
            },
            readonly: function(n) {
                this._editable({
                    readonly: n === t ? !0 : n,
                    disable: !1
                })
            },
            enable: function(n) {
                this._editable({
                    readonly: !1,
                    disable: !(n = n === t ? !0 : n)
                })
            },
            destroy: function() {
                var n = this;
                o.fn.destroy.call(n);
                n.dateView.destroy();
                n.element.off(r);
                n._dateIcon.off(r);
                n._inputWrapper.off(r);
                n._form && n._form.off("reset", n._resetHandler)
            },
            open: function() {
                this.dateView.open()
            },
            close: function() {
                this.dateView.close()
            },
            min: function(n) {
                return this._option(ht, n)
            },
            max: function(n) {
                return this._option(ct, n)
            },
            value: function(n) {
                var i = this;
                return n === t ? i._value: (i._old = i._update(n), null === i._old && i.element.val(""), i._oldText = i.element.val(), t)
            },
            _toggleHover: function(t) {
                n(t.currentTarget).toggleClass(dt, "mouseenter" === t.type)
            },
            _blur: function() {
                var n = this,
                t = n.element.val();
                n.close();
                t !== n._oldText && n._change(t);
                n._inputWrapper.removeClass(et)
            },
            _click: function() {
                var n = this,
                t = n.element;
                n.dateView.toggle();
                i.support.touch || t[0] === kt() || t.focus()
            },
            _change: function(n) {
                var t = this;
                n = t._update(n); + t._old != +n && (t._old = n, t._oldText = t.element.val(), t.trigger(y), t.element.trigger(y))
            },
            _keydown: function(n) {
                var t = this,
                i = t.dateView,
                r = t.element.val();
                i.popup.visible() || n.keyCode != f.ENTER || r === t._oldText ? (i.move(n), t._updateARIA(i._current)) : t._change(r)
            },
            _icon: function() {
                var t, i = this,
                r = i.element;
                t = r.next("span.k-select");
                t[0] || (t = n('<span unselectable="on" class="k-select"><span unselectable="on" class="k-icon k-i-calendar">select<\/span><\/span>').insertAfter(r));
                i._dateIcon = t.attr({
                    role: "button",
                    "aria-controls": i.dateView._dateViewID
                })
            },
            _option: function(n, i) {
                var f = this,
                r = f.options;
                return i === t ? r[n] : (i = u(i, r.parseFormats, r.culture), i && (r[n] = new wt( + i), f.dateView[n](i)), t)
            },
            _update: function(n) {
                var e, f = this,
                r = f.options,
                o = r.min,
                h = r.max,
                s = f._value,
                t = u(n, r.parseFormats, r.culture),
                c = null === t && null === s || t instanceof Date && s instanceof Date;
                return + t == +s && c ? (e = i.toString(t, r.format, r.culture), e !== n && f.element.val(null === t ? n: e), t) : (null !== t && ti(t, o) ? t = pt(t, o, h) : ni(t, o, h) || (t = null), f._value = t, f.dateView.value(t), f.element.val(t ? i.toString(t, r.format, r.culture) : n), f._updateARIA(t), t)
            },
            _wrapper: function() {
                var t, r = this,
                i = r.element;
                t = i.parents(".k-datepicker");
                t[0] || (t = i.wrap(it).parent().addClass("k-picker-wrap k-state-default"), t = t.wrap(it).parent());
                t[0].style.cssText = i[0].style.cssText;
                i.css({
                    width: "100%",
                    height: i[0].style.height
                });
                r.wrapper = t.addClass("k-widget k-datepicker k-header").addClass(i[0].className);
                r._inputWrapper = n(t[0].firstChild)
            },
            _reset: function() {
                var t = this,
                i = t.element,
                r = i.attr("form"),
                u = r ? n("#" + r) : i.closest("form");
                u[0] && (t._resetHandler = function() {
                    t.value(i[0].defaultValue)
                },
                t._form = u.on("reset", t._resetHandler))
            },
            _template: function() {
                this._ariaTemplate = bt(this.options.ARIATemplate)
            },
            _updateARIA: function(n) {
                var i, t = this,
                r = t.dateView.calendar;
                t.element.removeAttr("aria-activedescendant");
                r && (i = r._cell, i.attr("aria-label", t._ariaTemplate({
                    current: n || r.current()
                })), t.element.attr("aria-activedescendant", i.attr("id")))
            }
        });
        e.plugin(nt)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.data.min", "./kendo.combobox.min", "./kendo.multiselect.min", "./kendo.validator.min"], n)
} (function() {
    return function(n, t) {
        function u(t, i, r, u) {
            var f = {};
            return t.sort ? (f[this.options.prefix + "sort"] = n.map(t.sort,
            function(n) {
                return n.field + "-" + n.dir
            }).join("~"), delete t.sort) : f[this.options.prefix + "sort"] = "",
            t.page && (f[this.options.prefix + "page"] = t.page, delete t.page),
            t.pageSize && (f[this.options.prefix + "pageSize"] = t.pageSize, delete t.pageSize),
            t.group ? (f[this.options.prefix + "group"] = n.map(t.group,
            function(n) {
                return n.field + "-" + n.dir
            }).join("~"), delete t.group) : f[this.options.prefix + "group"] = "",
            t.aggregate && (f[this.options.prefix + "aggregate"] = n.map(t.aggregate,
            function(n) {
                return n.field + "-" + n.aggregate
            }).join("~"), delete t.aggregate),
            t.filter ? (f[this.options.prefix + "filter"] = o(t.filter, r), delete t.filter) : (f[this.options.prefix + "filter"] = "", delete t.filter),
            delete t.take,
            delete t.skip,
            e(f, t, "", u),
            f
        }
        function c(n) {
            var t = i.culture().numberFormat[h];
            return ("" + n).replace(h, t)
        }
        function l(n, t) {
            return n instanceof Date ? n = t ? i.stringify(n).replace(/"/g, "") : i.format("{0:G}", n) : "number" == typeof n && (n = c(n)),
            n
        }
        function f(n, i, r, u, f, o) {
            b(i) ? a(n, i, f, o) : k(i) ? e(n, i, f, o) : n[f] === t && (n[f] = r[u] = l(i, o))
        }
        function e(n, t, i, r) {
            var u, e, o;
            for (u in t) e = i ? i + "." + u: u,
            o = t[u],
            f(n, o, t, u, e, r)
        }
        function a(n, t, i, r) {
            for (var s, o, h, u = 0,
            e = 0; t.length > u; u++) s = t[u],
            o = "[" + e + "]",
            h = i + o,
            f(n, s, t, o, h, r),
            e++
        }
        function o(i, r) {
            return i.filters ? n.map(i.filters,
            function(n) {
                var i = n.filters && n.filters.length > 1,
                t = o(n, r);
                return t && i && (t = "(" + t + ")"),
                t
            }).join("~" + i.logic + "~") : i.field ? i.field + "~" + i.operator + "~" + v(i.value, r) : t
        }
        function v(n, t) {
            if ("string" == typeof n) {
                if (! (n.indexOf("Date(") > -1)) return n = n.replace(w, "''"),
                t && (n = encodeURIComponent(n)),
                "'" + n + "'";
                n = new Date(parseInt(n.replace(/^\/Date\((.*?)\)\/$/, "$1"), 10))
            }
            return n && n.getTime ? "datetime'" + i.format("{0:yyyy-MM-ddTHH-mm-ss}", n) + "'": n
        }
        function s(i) {
            return {
                value: t !== i.Key ? i.Key: i.value,
                field: i.Member || i.field,
                hasSubgroups: i.HasSubgroups || i.hasSubgroups || !1,
                aggregates: p(i.Aggregates || i.aggregates),
                items: i.HasSubgroups ? n.map(i.Items || i.items, s) : i.Items || i.items
            }
        }
        function y(n) {
            var t = {};
            return t[n.AggregateMethodName.toLowerCase()] = n.Value,
            t
        }
        function p(n) {
            var t, i, r, u = {};
            for (t in n) {
                u = {};
                r = n[t];
                for (i in r) u[i.toLowerCase()] = r[i];
                n[t] = u
            }
            return n
        }
        var i = window.kendo,
        w = /'/gi,
        r = n.extend,
        b = n.isArray,
        k = n.isPlainObject,
        h = ".";
        r(!0, i.data, {
            schemas: {
                "aspnetmvc-ajax": {
                    groups: function(t) {
                        return n.map(this._dataAccessFunction(t), s)
                    },
                    aggregates: function(n) {
                        n = n.d || n;
                        for (var t, u = {},
                        e = n.AggregateResults || [], i = 0, f = e.length; f > i; i++) t = e[i],
                        u[t.Member] = r(!0, u[t.Member], y(t));
                        return u
                    }
                }
            }
        });
        r(!0, i.data, {
            transports: {
                "aspnetmvc-ajax": i.data.RemoteTransport.extend({
                    init: function(n) {
                        var t = this,
                        f = (n || {}).stringifyDates;
                        i.data.RemoteTransport.fn.init.call(this, r(!0, {},
                        this.options, n, {
                            parameterMap: function(n, i) {
                                return u.call(t, n, i, !1, f)
                            }
                        }))
                    },
                    read: function(n) {
                        var t = this.options.data,
                        r = this.options.read.url;
                        t ? (r && (this.options.data = null), !t.Data.length && r ? i.data.RemoteTransport.fn.read.call(this, n) : n.success(t)) : i.data.RemoteTransport.fn.read.call(this, n)
                    },
                    options: {
                        read: {
                            type: "POST"
                        },
                        update: {
                            type: "POST"
                        },
                        create: {
                            type: "POST"
                        },
                        destroy: {
                            type: "POST"
                        },
                        parameterMap: u,
                        prefix: ""
                    }
                })
            }
        });
        r(!0, i.data, {
            schemas: {
                webapi: i.data.schemas["aspnetmvc-ajax"]
            }
        });
        r(!0, i.data, {
            transports: {
                webapi: i.data.RemoteTransport.extend({
                    init: function(n) {
                        var t, f, e = this,
                        o = (n || {}).stringifyDates;
                        n.update && (t = "string" == typeof n.update ? n.update: n.update.url, n.update = r(n.update, {
                            url: function(r) {
                                return i.format(t, r[n.idField])
                            }
                        }));
                        n.destroy && (f = "string" == typeof n.destroy ? n.destroy: n.destroy.url, n.destroy = r(n.destroy, {
                            url: function(t) {
                                return i.format(f, t[n.idField])
                            }
                        }));
                        n.create && "string" == typeof n.create && (n.create = {
                            url: n.create
                        });
                        i.data.RemoteTransport.fn.init.call(this, r(!0, {},
                        this.options, n, {
                            parameterMap: function(n, t) {
                                return u.call(e, n, t, !1, o)
                            }
                        }))
                    },
                    read: function(n) {
                        var t = this.options.data,
                        r = this.options.read.url;
                        t ? (r && (this.options.data = null), !t.Data.length && r ? i.data.RemoteTransport.fn.read.call(this, n) : n.success(t)) : i.data.RemoteTransport.fn.read.call(this, n)
                    },
                    options: {
                        read: {
                            type: "GET"
                        },
                        update: {
                            type: "PUT"
                        },
                        create: {
                            type: "POST"
                        },
                        destroy: {
                            type: "DELETE"
                        },
                        parameterMap: u,
                        prefix: ""
                    }
                })
            }
        });
        r(!0, i.data, {
            transports: {
                "aspnetmvc-server": i.data.RemoteTransport.extend({
                    init: function(n) {
                        var t = this;
                        i.data.RemoteTransport.fn.init.call(this, r(n, {
                            parameterMap: function(n, i) {
                                return u.call(t, n, i, !0)
                            }
                        }))
                    },
                    read: function(t) {
                        var r, i, u = this.options.prefix,
                        f = [u + "sort", u + "page", u + "pageSize", u + "group", u + "aggregate", u + "filter"],
                        e = RegExp("(" + f.join("|") + ")=[^&]*&?", "g");
                        i = location.search.replace(e, "").replace("?", "");
                        i.length && !/&$/.test(i) && (i += "&");
                        t = this.setup(t, "read");
                        r = t.url;
                        r.indexOf("?") >= 0 ? (i = i.replace(/(.*?=.*?)&/g,
                        function(n) {
                            return r.indexOf(n.substr(0, n.indexOf("="))) >= 0 ? "": n
                        }), r += "&" + i) : r += "?" + i;
                        r += n.map(t.data,
                        function(n, t) {
                            return t + "=" + n
                        }).join("&");
                        location.href = r
                    }
                })
            }
        })
    } (window.kendo.jQuery),
    function(n) {
        var i = window.kendo,
        t = i.ui;
        t && t.ComboBox && (t.ComboBox.requestData = function(t) {
            var i = n(t).data("kendoComboBox"),
            u = i.dataSource.filter(),
            r = i.input.val();
            return u || (r = ""),
            {
                text: r
            }
        })
    } (window.kendo.jQuery),
    function(n) {
        var i = window.kendo,
        t = i.ui;
        t && t.MultiSelect && (t.MultiSelect.requestData = function(t) {
            var i = n(t).data("kendoMultiSelect"),
            r = i.input.val();
            return {
                text: r !== i.options.placeholder ? r: ""
            }
        })
    } (window.kendo.jQuery),
    function(n) {
        var t = window.kendo,
        i = n.extend,
        r = n.isFunction;
        i(!0, t.data, {
            schemas: {
                "imagebrowser-aspnetmvc": {
                    data: function(n) {
                        return n || []
                    },
                    model: {
                        id: "name",
                        fields: {
                            name: {
                                field: "Name"
                            },
                            size: {
                                field: "Size"
                            },
                            type: {
                                field: "EntryType",
                                parse: function(n) {
                                    return 0 == n ? "f": "d"
                                }
                            }
                        }
                    }
                }
            }
        });
        i(!0, t.data, {
            transports: {
                "imagebrowser-aspnetmvc": t.data.RemoteTransport.extend({
                    init: function(i) {
                        t.data.RemoteTransport.fn.init.call(this, n.extend(!0, {},
                        this.options, i))
                    },
                    _call: function(i, u) {
                        u.data = n.extend({},
                        u.data, {
                            path: this.options.path()
                        });
                        r(this.options[i]) ? this.options[i].call(this, u) : t.data.RemoteTransport.fn[i].call(this, u)
                    },
                    read: function(n) {
                        this._call("read", n)
                    },
                    create: function(n) {
                        this._call("create", n)
                    },
                    destroy: function(n) {
                        this._call("destroy", n)
                    },
                    update: function() {},
                    options: {
                        read: {
                            type: "POST"
                        },
                        update: {
                            type: "POST"
                        },
                        create: {
                            type: "POST"
                        },
                        destroy: {
                            type: "POST"
                        },
                        parameterMap: function(n, t) {
                            return "read" != t && (n.EntryType = "f" === n.EntryType ? 0 : 1),
                            n
                        }
                    }
                })
            }
        })
    } (window.kendo.jQuery),
    function(n) {
        function r() {
            var n, i = {};
            for (n in t) i["mvc" + n] = s(n);
            return i
        }
        function u() {
            var n, i = {};
            for (n in t) i["mvc" + n] = h(n);
            return i
        }
        function f(n, t) {
            var u, i, r, f = {},
            e = n.data(),
            o = t.length;
            for (r in e) i = r.toLowerCase(),
            u = i.indexOf(t),
            u > -1 && (i = i.substring(u + o, r.length), i && (f[i] = e[r]));
            return f
        }
        function e(t) {
            for (var u = t.Fields || [], f = {},
            i = 0, r = u.length; r > i; i++) n.extend(!0, f, o(u[i]));
            return f
        }
        function o(n) {
            for (var i, f, o = {},
            s = {},
            u = n.FieldName,
            r = n.ValidationRules,
            t = 0,
            e = r.length; e > t; t++) i = r[t].ValidationType,
            f = r[t].ValidationParameters,
            o[u + i] = l(u, i, f),
            s[u + i] = c(r[t].ErrorMessage);
            return {
                rules: o,
                messages: s
            }
        }
        function s(n) {
            return function(t) {
                return t.attr("data-val-" + n)
            }
        }
        function h(n) {
            return function(i) {
                return i.filter("[data-val-" + n + "]").length ? t[n](i, f(i, n)) : !0
            }
        }
        function c(n) {
            return function() {
                return n
            }
        }
        function l(n, i, r) {
            return function(u) {
                return u.filter("[name=" + n + "]").length ? t[i](u, r) : !0
            }
        }
        function a(n, t) {
            return "string" == typeof t && (t = RegExp("^(?:" + t + ")$")),
            t.test(n)
        }
        var i = /("|\%|'|\[|\]|\$|\.|\,|\:|\;|\+|\*|\&|\!|\#|\(|\)|<|>|\=|\?|\@|\^|\{|\}|\~|\/|\||`)/g,
        t = {
            required: function(n) {
                var f, t, r = n.val(),
                u = n.filter("[type=checkbox]");
                return u.length && (f = u[0].name.replace(i, "\\$1"), t = u.next("input:hidden[name='" + f + "']"), r = t.length ? t.val() : "checked" === n.attr("checked")),
                !("" === r || !r)
            },
            number: function(n) {
                return "" === n.val() || null == n.val() || null !== kendo.parseFloat(n.val())
            },
            regex: function(n, t) {
                return "" !== n.val() ? a(n.val(), t.pattern) : !0
            },
            range: function(n, t) {
                return "" !== n.val() ? this.min(n, t) && this.max(n, t) : !0
            },
            min: function(n, t) {
                var i = parseFloat(t.min) || 0,
                r = kendo.parseFloat(n.val());
                return r >= i
            },
            max: function(n, t) {
                var i = parseFloat(t.max) || 0,
                r = kendo.parseFloat(n.val());
                return i >= r
            },
            date: function(n) {
                return "" === n.val() || null !== kendo.parseDate(n.val())
            },
            length: function(t, i) {
                if ("" !== t.val()) {
                    var r = n.trim(t.val()).length;
                    return (!i.min || r >= (i.min || 0)) && (!i.max || (i.max || 0) >= r)
                }
                return ! 0
            }
        };
        n.extend(!0, kendo.ui.validator, {
            rules: u(),
            messages: r(),
            messageLocators: {
                mvcLocator: {
                    locate: function(n, t) {
                        return t = t.replace(i, "\\$1"),
                        n.find(".field-validation-valid[data-valmsg-for='" + t + "'], .field-validation-error[data-valmsg-for='" + t + "']")
                    },
                    decorate: function(n, t) {
                        n.addClass("field-validation-error").attr("data-valmsg-for", t || "")
                    }
                },
                mvcMetadataLocator: {
                    locate: function(n, t) {
                        return t = t.replace(i, "\\$1"),
                        n.find("#" + t + "_validationMessage.field-validation-valid")
                    },
                    decorate: function(n, t) {
                        n.addClass("field-validation-error").attr("id", t + "_validationMessage")
                    }
                }
            },
            ruleResolvers: {
                mvcMetaDataResolver: {
                    resolve: function(t) {
                        var i, r = window.mvcClientValidationMetadata || [];
                        if (r.length) for (t = n(t), i = 0; r.length > i; i++) if (r[i].FormId == t.attr("id")) return e(r[i]);
                        return {}
                    }
                }
            }
        })
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min"], n)
} (function() {
    return function(n, t) {
        function yt(n) {
            return parseInt(n, 10)
        }
        function l(n, t) {
            return yt(n.css(t))
        }
        function ci(n) {
            var t, i = [];
            for (t in n) i.push(t);
            return i
        }
        function rt(n) {
            for (var t in n) - 1 != ht.indexOf(t) && -1 == d.indexOf(t) && delete n[t];
            return n
        }
        function ut(n, t) {
            var r, i, u, e, s = [],
            h = {};
            for (i in t) r = i.toLowerCase(),
            e = f && -1 != ht.indexOf(r),
            !w.hasHW3D && e && -1 == d.indexOf(r) ? delete t[i] : (u = t[i], e ? s.push(i + "(" + u + ")") : h[i] = u);
            return s.length && (h[o] = s.join(" ")),
            h
        }
        function pt(n, t) {
            var u, i, r;
            return f ? (u = n.css(o), u == tr ? "scale" == t ? 1 : 0 : (i = u.match(RegExp(t + "\\s*\\(([\\d\\w\\.]+)")), r = 0, i ? r = yt(i[1]) : (i = u.match(pi) || [0, 0, 0, 0, 0], t = t.toLowerCase(), wi.test(t) ? r = parseFloat(i[3] / i[2]) : "translatey" == t ? r = parseFloat(i[4] / i[2]) : "scale" == t ? r = parseFloat(i[2]) : "rotate" == t && (r = parseFloat(Math.atan2(i[2], i[1])))), r)) : parseFloat(n.css(t))
        }
        function ft(n) {
            return n.charAt(0).toUpperCase() + n.substring(1)
        }
        function e(n, t) {
            var i = h.extend(t),
            r = i.prototype.directions;
            u[ft(n)] = i;
            u.Element.prototype[n] = function(n, t, r, u) {
                return new i(this.element, n, t, r, u)
            };
            a(r,
            function(t, r) {
                u.Element.prototype[n + ft(r)] = function(n, t, u) {
                    return new i(this.element, r, n, t, u)
                }
            })
        }
        function wt(n, i, r, u) {
            e(n, {
                directions: dt,
                startValue: function(n) {
                    return this._startValue = n,
                    this
                },
                endValue: function(n) {
                    return this._endValue = n,
                    this
                },
                shouldHide: function() {
                    return this._shouldHide
                },
                prepare: function(n, f) {
                    var e, o, h = this,
                    c = "out" === this._direction,
                    s = h.element.data(i),
                    l = !(isNaN(s) || s == r);
                    e = l ? s: t !== this._startValue ? this._startValue: c ? r: u;
                    o = t !== this._endValue ? this._endValue: c ? u: r;
                    this._reverse ? (n[i] = o, f[i] = e) : (n[i] = e, f[i] = o);
                    h._shouldHide = f[i] === u
                }
            })
        }
        function bt(n, t) {
            var r = i.directions[t].vertical,
            u = n[r ? nt: lt]() / 2 + "px";
            return ni[t].replace("$size", u)
        }
        var kt, et, h, p, dt, gt, ni, ti, ot, k, st, i = window.kendo,
        u = i.effects,
        a = n.each,
        r = n.extend,
        li = n.proxy,
        w = i.support,
        ai = w.browser,
        f = w.transforms,
        s = w.transitions,
        vi = {
            scale: 0,
            scalex: 0,
            scaley: 0,
            scale3d: 0
        },
        yi = {
            translate: 0,
            translatex: 0,
            translatey: 0,
            translate3d: 0
        },
        ii = t !== document.documentElement.style.zoom && !f,
        pi = /matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i,
        ri = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i,
        wi = /translatex?$/i,
        bi = /(zoom|fade|expand)(\w+)/,
        ui = /(zoom|fade|expand)/,
        ki = /[xy]$/i,
        ht = ["perspective", "rotate", "rotatex", "rotatey", "rotatez", "rotate3d", "scale", "scalex", "scaley", "scalez", "scale3d", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "translatez", "translate3d", "matrix", "matrix3d"],
        d = ["rotate", "scale", "scalex", "scaley", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "matrix"],
        di = {
            rotate: "deg",
            scale: "",
            skew: "px",
            translate: "px"
        },
        g = f.css,
        gi = Math.round,
        nr = "",
        b = "px",
        tr = "none",
        ct = "auto",
        lt = "width",
        nt = "height",
        fi = "hidden",
        at = "origin",
        ei = "abortId",
        tt = "overflow",
        v = "translate",
        it = "position",
        oi = "completeCallback",
        y = g + "transition",
        o = g + "transform",
        ir = g + "backface-visibility",
        si = g + "perspective",
        vt = "1500px",
        hi = "perspective(" + vt + ")",
        c = {
            left: {
                reverse: "right",
                property: "left",
                transition: "translatex",
                vertical: !1,
                modifier: -1
            },
            right: {
                reverse: "left",
                property: "left",
                transition: "translatex",
                vertical: !1,
                modifier: 1
            },
            down: {
                reverse: "up",
                property: "top",
                transition: "translatey",
                vertical: !0,
                modifier: 1
            },
            up: {
                reverse: "down",
                property: "top",
                transition: "translatey",
                vertical: !0,
                modifier: -1
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out",
                modifier: -1
            },
            out: {
                reverse: "in",
                modifier: 1
            },
            vertical: {
                reverse: "vertical"
            },
            horizontal: {
                reverse: "horizontal"
            }
        };
        i.directions = c;
        r(n.fn, {
            kendoStop: function(n, t) {
                return s ? u.stopQueue(this, n || !1, t || !1) : this.stop(n, t)
            }
        });
        f && !s && (a(d,
        function(i, r) {
            n.fn[r] = function(i) {
                if (t === i) return pt(this, r);
                var u = n(this)[0],
                f = r + "(" + i + di[r.replace(ki, "")] + ")";
                return - 1 == u.style.cssText.indexOf(o) ? n(this).css(o, f) : u.style.cssText = u.style.cssText.replace(RegExp(r + "\\(.*?\\)", "i"), f),
                this
            };
            n.fx.step[r] = function(t) {
                n(t.elem)[r](t.now)
            }
        }), kt = n.fx.prototype.cur, n.fx.prototype.cur = function() {
            return - 1 != d.indexOf(this.prop) ? parseFloat(n(this.elem)[this.prop]()) : kt.apply(this, arguments)
        });
        i.toggleClass = function(n, t, i, u) {
            return t && (t = t.split(" "), s && (i = r({
                exclusive: "all",
                duration: 400,
                ease: "ease-out"
            },
            i), n.css(y, i.exclusive + " " + i.duration + "ms " + i.ease), setTimeout(function() {
                n.css(y, "").css(nt)
            },
            i.duration)), a(t,
            function(t, i) {
                n.toggleClass(i, u)
            })),
            n
        };
        i.parseEffects = function(n, t) {
            var i = {};
            return "string" == typeof n ? a(n.split(" "),
            function(n, r) {
                var o = !ui.test(r),
                s = r.replace(bi,
                function(n, t, i) {
                    return t + ":" + i.toLowerCase()
                }),
                u = s.split(":"),
                f = u[1],
                e = {};
                u.length > 1 && (e.direction = t && o ? c[f].reverse: f);
                i[u[0]] = e
            }) : a(n,
            function(n) {
                var r = this.direction;
                r && t && !ui.test(n) && (this.direction = c[r].reverse);
                i[n] = this
            }),
            i
        };
        s && r(u, {
            transition: function(t, i, u) {
                var h, f, c, e, l = 0,
                a = t.data("keys") || [];
                u = r({
                    duration: 200,
                    ease: "ease-out",
                    complete: null,
                    exclusive: "all"
                },
                u);
                c = !1;
                e = function() {
                    c || (c = !0, f && (clearTimeout(f), f = null), t.removeData(ei).dequeue().css(y, "").css(y), u.complete.call(t))
                };
                u.duration = n.fx ? n.fx.speeds[u.duration] || u.duration: u.duration;
                h = ut(t, i);
                n.merge(a, ci(h));
                t.data("keys", n.unique(a)).height();
                t.css(y, u.exclusive + " " + u.duration + "ms " + u.ease).css(y);
                t.css(h).css(o);
                s.event && (t.one(s.event, e), 0 !== u.duration && (l = 500));
                f = setTimeout(e, u.duration + l);
                t.data(ei, f);
                t.data(oi, e)
            },
            stopQueue: function(n, t, r) {
                var u, f = n.data("keys"),
                e = !r && f,
                o = n.data(oi);
                return e && (u = i.getComputedStyles(n[0], f)),
                o && o(),
                e && n.css(u),
                n.removeData("keys").stop(t)
            }
        });
        et = i.Class.extend({
            init: function(n, t) {
                var i = this;
                i.element = n;
                i.effects = [];
                i.options = t;
                i.restore = []
            },
            run: function(t) {
                var l, h, v, p, w, k, d, a = this,
                g = t.length,
                c = a.element,
                i = a.options,
                b = n.Deferred(),
                e = {},
                y = {};
                for (a.effects = t, b.then(n.proxy(a, "complete")), c.data("animating", !0), h = 0; g > h; h++) for (l = t[h], l.setReverse(i.reverse), l.setOptions(i), a.addRestoreProperties(l.restore), l.prepare(e, y), w = l.children(), v = 0, k = w.length; k > v; v++) w[v].duration(i.duration).run();
                for (d in i.effects) r(y, i.effects[d].properties);
                for (c.is(":visible") || r(e, {
                    display: c.data("olddisplay") || "block"
                }), f && !i.reset && (p = c.data("targetTransform"), p && (e = r(p, e))), e = ut(c, e), f && !s && (e = rt(e)), c.css(e).css(o), h = 0; g > h; h++) t[h].setup();
                return i.init && i.init(),
                c.data("targetTransform", y),
                u.animate(c, y, r({},
                i, {
                    complete: b.resolve
                })),
                b.promise()
            },
            stop: function() {
                n(this.element).kendoStop(!0, !0)
            },
            addRestoreProperties: function(n) {
                for (var t, i = this.element,
                r = 0,
                u = n.length; u > r; r++) t = n[r],
                this.restore.push(t),
                i.data(t) || i.data(t, i.css(t))
            },
            restoreCallback: function() {
                for (var t, r = this.element,
                n = 0,
                i = this.restore.length; i > n; n++) t = this.restore[n],
                r.css(t, r.data(t))
            },
            complete: function() {
                var i = this,
                r = 0,
                t = i.element,
                u = i.options,
                e = i.effects,
                o = e.length;
                for (t.removeData("animating").dequeue(), u.hide && t.data("olddisplay", t.css("display")).hide(), this.restoreCallback(), ii && !f && setTimeout(n.proxy(this, "restoreCallback"), 0); o > r; r++) e[r].teardown();
                u.completeCallback && u.completeCallback(t)
            }
        });
        u.promise = function(n, t) {
            var r, s, f, e = [],
            h = new et(n, t),
            o = i.parseEffects(t.effects);
            t.effects = o;
            for (f in o) r = u[ft(f)],
            r && (s = new r(n, o[f].direction), e.push(s));
            e[0] ? h.run(e) : (n.is(":visible") || n.css({
                display: n.data("olddisplay") || "block"
            }).css("display"), t.init && t.init(), n.dequeue(), h.complete())
        };
        r(u, {
            animate: function(i, e, o) {
                var h = o.transition !== !1;
                delete o.transition;
                s && "transition" in u && h ? u.transition(i, e, o) : f ? i.animate(rt(e), {
                    queue: !1,
                    show: !1,
                    hide: !1,
                    duration: o.duration,
                    complete: o.complete
                }) : i.each(function() {
                    var i = n(this),
                    u = {};
                    a(ht,
                    function(n, o) {
                        var c, s, p, w, h, a, y, b = e ? e[o] + " ": null;
                        b && (s = e, o in vi && e[o] !== t ? (c = b.match(ri), f && r(s, {
                            scale: +c[0]
                        })) : o in yi && e[o] !== t && (p = i.css(it), w = "absolute" == p || "fixed" == p, i.data(v) || (w ? i.data(v, {
                            top: l(i, "top") || 0,
                            left: l(i, "left") || 0,
                            bottom: l(i, "bottom"),
                            right: l(i, "right")
                        }) : i.data(v, {
                            top: l(i, "marginTop") || 0,
                            left: l(i, "marginLeft") || 0
                        })), h = i.data(v), c = b.match(ri), c && (a = o == v + "y" ? 0 : +c[1], y = o == v + "y" ? +c[1] : +c[2], w ? (isNaN(h.right) ? isNaN(a) || r(s, {
                            left: h.left + a
                        }) : isNaN(a) || r(s, {
                            right: h.right - a
                        }), isNaN(h.bottom) ? isNaN(y) || r(s, {
                            top: h.top + y
                        }) : isNaN(y) || r(s, {
                            bottom: h.bottom - y
                        })) : (isNaN(a) || r(s, {
                            marginLeft: h.left + a
                        }), isNaN(y) || r(s, {
                            marginTop: h.top + y
                        })))), !f && "scale" != o && o in s && delete s[o], s && r(u, s))
                    });
                    ai.msie && delete u.scale;
                    i.animate(u, {
                        queue: !1,
                        show: !1,
                        hide: !1,
                        duration: o.duration,
                        complete: o.complete
                    })
                })
            }
        });
        u.animatedPromise = u.promise;
        h = i.Class.extend({
            init: function(n, t) {
                var i = this;
                i.element = n;
                i._direction = t;
                i.options = {};
                i._additionalEffects = [];
                i.restore || (i.restore = [])
            },
            reverse: function() {
                return this._reverse = !0,
                this.run()
            },
            play: function() {
                return this._reverse = !1,
                this.run()
            },
            add: function(n) {
                return this._additionalEffects.push(n),
                this
            },
            direction: function(n) {
                return this._direction = n,
                this
            },
            duration: function(n) {
                return this._duration = n,
                this
            },
            compositeRun: function() {
                var n = this,
                t = new et(n.element, {
                    reverse: n._reverse,
                    duration: n._duration
                }),
                i = n._additionalEffects.concat([n]);
                return t.run(i)
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0]) return this.compositeRun();
                var c, l, e = this,
                t = e.element,
                h = 0,
                y = e.restore,
                w = y.length,
                a = n.Deferred(),
                i = {},
                v = {},
                p = e.children(),
                b = p.length;
                for (a.then(n.proxy(e, "_complete")), t.data("animating", !0), h = 0; w > h; h++) c = y[h],
                t.data(c) || t.data(c, t.css(c));
                for (h = 0; b > h; h++) p[h].duration(e._duration).run();
                return e.prepare(i, v),
                t.is(":visible") || r(i, {
                    display: t.data("olddisplay") || "block"
                }),
                f && (l = t.data("targetTransform"), l && (i = r(l, i))),
                i = ut(t, i),
                f && !s && (i = rt(i)),
                t.css(i).css(o),
                e.setup(),
                t.data("targetTransform", v),
                u.animate(t, v, {
                    duration: e._duration,
                    complete: a.resolve
                }),
                a.promise()
            },
            stop: function() {
                for (var t = 0,
                i = this.children(), r = i.length, t = 0; r > t; t++) i[t].stop();
                return n(this.element).kendoStop(!0, !0),
                this
            },
            restoreCallback: function() {
                for (var t, r = this.element,
                n = 0,
                i = this.restore.length; i > n; n++) t = this.restore[n],
                r.css(t, r.data(t))
            },
            _complete: function() {
                var t = this,
                i = t.element;
                i.removeData("animating").dequeue();
                t.restoreCallback();
                t.shouldHide() && i.data("olddisplay", i.css("display")).hide();
                ii && !f && setTimeout(n.proxy(t, "restoreCallback"), 0);
                t.teardown()
            },
            setOptions: function(n) {
                r(!0, this.options, n)
            },
            children: function() {
                return []
            },
            shouldHide: n.noop,
            setup: n.noop,
            prepare: n.noop,
            teardown: n.noop,
            directions: [],
            setReverse: function(n) {
                return this._reverse = n,
                this
            }
        });
        p = ["left", "right", "up", "down"];
        dt = ["in", "out"];
        e("slideIn", {
            directions: p,
            divisor: function(n) {
                return this.options.divisor = n,
                this
            },
            prepare: function(n, t) {
                var u, r = this,
                e = r.element,
                i = c[r._direction],
                h = -i.modifier * (i.vertical ? e.outerHeight() : e.outerWidth()),
                o = h / (r.options && r.options.divisor || 1) + b,
                s = "0px";
                r._reverse && (u = n, n = t, t = u);
                f ? (n[i.transition] = o, t[i.transition] = s) : (n[i.property] = o, t[i.property] = s)
            }
        });
        e("tile", {
            directions: p,
            init: function(n, t, i) {
                h.prototype.init.call(this, n, t);
                this.options = {
                    previous: i
                }
            },
            previousDivisor: function(n) {
                return this.options.previousDivisor = n,
                this
            },
            children: function() {
                var n = this,
                t = n._reverse,
                r = n.options.previous,
                e = n.options.previousDivisor || 1,
                u = n._direction,
                f = [i.fx(n.element).slideIn(u).setReverse(t)];
                return r && f.push(i.fx(r).slideIn(c[u].reverse).divisor(e).setReverse(!t)),
                f
            }
        });
        wt("fade", "opacity", 1, 0);
        wt("zoom", "scale", 1, .01);
        e("slideMargin", {
            prepare: function(n, t) {
                var r, u = this,
                i = u.element,
                f = u.options,
                o = i.data(at),
                s = f.offset,
                e = u._reverse;
                e || null !== o || i.data(at, parseFloat(i.css("margin-" + f.axis)));
                r = i.data(at) || 0;
                t["margin-" + f.axis] = e ? r: r + s
            }
        });
        e("slideTo", {
            prepare: function(n, t) {
                var u = this,
                e = u.element,
                o = u.options,
                i = o.offset.split(","),
                r = u._reverse;
                f ? (t.translatex = r ? 0 : i[0], t.translatey = r ? 0 : i[1]) : (t.left = r ? 0 : i[0], t.top = r ? 0 : i[1]);
                e.css("left")
            }
        });
        e("expand", {
            directions: ["horizontal", "vertical"],
            restore: [tt],
            prepare: function(n, i) {
                var f = this,
                e = f.element,
                o = f.options,
                s = f._reverse,
                r = "vertical" === f._direction ? nt: lt,
                h = e[0].style[r],
                c = e.data(r),
                u = parseFloat(c || h),
                l = gi(e.css(r, ct)[r]());
                n.overflow = fi;
                u = o && o.reset ? l || u: u || l;
                i[r] = (s ? 0 : u) + b;
                n[r] = (s ? u: 0) + b;
                c === t && e.data(r, h)
            },
            shouldHide: function() {
                return this._reverse
            },
            teardown: function() {
                var t = this,
                i = t.element,
                n = "vertical" === t._direction ? nt: lt,
                r = i.data(n); (r == ct || r === nr) && setTimeout(function() {
                    i.css(n, ct).css(n)
                },
                0)
            }
        });
        gt = {
            position: "absolute",
            marginLeft: 0,
            marginTop: 0,
            scale: 1
        };
        e("transfer", {
            init: function(n, t) {
                this.element = n;
                this.options = {
                    target: t
                };
                this.restore = []
            },
            setup: function() {
                this.element.appendTo(document.body)
            },
            prepare: function(n, t) {
                var u, f, e, h, c, l, a, k, d, s, v, y, g, p = this,
                i = p.element,
                it = p.options,
                rt = p._reverse,
                w = it.target,
                ut = pt(i, "scale"),
                nt = w.offset(),
                tt = w.outerHeight() / i.outerHeight();
                r(n, gt);
                t.scale = 1;
                i.css(o, "scale(1)").css(o);
                u = i.offset();
                i.css(o, "scale(" + ut + ")");
                f = 0;
                e = 0;
                h = nt.left - u.left;
                c = nt.top - u.top;
                l = f + i.outerWidth();
                a = e;
                k = h + w.outerWidth();
                d = c;
                s = (c - e) / (h - f);
                v = (d - a) / (k - l);
                y = (e - a - s * f + v * l) / (v - s);
                g = e + s * (y - f);
                n.top = u.top;
                n.left = u.left;
                n.transformOrigin = y + b + " " + g + b;
                rt ? n.scale = tt: t.scale = tt
            }
        });
        ni = {
            top: "rect(auto auto $size auto)",
            bottom: "rect($size auto auto auto)",
            left: "rect(auto $size auto auto)",
            right: "rect(auto auto auto $size)"
        };
        ti = {
            top: {
                start: "rotatex(0deg)",
                end: "rotatex(180deg)"
            },
            bottom: {
                start: "rotatex(-180deg)",
                end: "rotatex(0deg)"
            },
            left: {
                start: "rotatey(0deg)",
                end: "rotatey(-180deg)"
            },
            right: {
                start: "rotatey(180deg)",
                end: "rotatey(0deg)"
            }
        };
        e("turningPage", {
            directions: p,
            init: function(n, t, i) {
                h.prototype.init.call(this, n, t);
                this._container = i
            },
            prepare: function(n, t) {
                var r = this,
                f = r._reverse,
                e = f ? c[r._direction].reverse: r._direction,
                u = ti[e];
                n.zIndex = 1;
                r._clipInHalf && (n.clip = bt(r._container, i.directions[e].reverse));
                n[ir] = fi;
                t[o] = hi + (f ? u.start: u.end);
                n[o] = hi + (f ? u.end: u.start)
            },
            setup: function() {
                this._container.append(this.element)
            },
            face: function(n) {
                return this._face = n,
                this
            },
            shouldHide: function() {
                var n = this,
                t = n._reverse,
                i = n._face;
                return t && !i || !t && i
            },
            clipInHalf: function(n) {
                return this._clipInHalf = n,
                this
            },
            temporary: function() {
                return this.element.addClass("temp-page"),
                this
            }
        });
        e("staticPage", {
            directions: p,
            init: function(n, t, i) {
                h.prototype.init.call(this, n, t);
                this._container = i
            },
            restore: ["clip"],
            prepare: function(n, t) {
                var i = this,
                r = i._reverse ? c[i._direction].reverse: i._direction;
                n.clip = bt(i._container, r);
                n.opacity = .999;
                t.opacity = 1
            },
            shouldHide: function() {
                var n = this,
                t = n._reverse,
                i = n._face;
                return t && !i || !t && i
            },
            face: function(n) {
                return this._face = n,
                this
            }
        });
        e("pageturn", {
            directions: ["horizontal", "vertical"],
            init: function(n, t, i, r) {
                h.prototype.init.call(this, n, t);
                this.options = {};
                this.options.face = i;
                this.options.back = r
            },
            children: function() {
                var o, r = this,
                u = r.options,
                n = "horizontal" === r._direction ? "left": "top",
                f = i.directions[n].reverse,
                t = r._reverse,
                s = u.face.clone(!0).removeAttr("id"),
                h = u.back.clone(!0).removeAttr("id"),
                e = r.element;
                return t && (o = n, n = f, f = o),
                [i.fx(u.face).staticPage(n, e).face(!0).setReverse(t), i.fx(u.back).staticPage(f, e).setReverse(t), i.fx(s).turningPage(n, e).face(!0).clipInHalf(!0).temporary().setReverse(t), i.fx(h).turningPage(f, e).clipInHalf(!0).temporary().setReverse(t)]
            },
            prepare: function(n, t) {
                n[si] = vt;
                n.transformStyle = "preserve-3d";
                n.opacity = .999;
                t.opacity = 1
            },
            teardown: function() {
                this.element.find(".temp-page").remove()
            }
        });
        e("flip", {
            directions: ["horizontal", "vertical"],
            init: function(n, t, i, r) {
                h.prototype.init.call(this, n, t);
                this.options = {};
                this.options.face = i;
                this.options.back = r
            },
            children: function() {
                var f, n = this,
                e = n.options,
                t = "horizontal" === n._direction ? "left": "top",
                r = i.directions[t].reverse,
                u = n._reverse,
                o = n.element;
                return u && (f = t, t = r, r = f),
                [i.fx(e.face).turningPage(t, o).face(!0).setReverse(u), i.fx(e.back).turningPage(r, o).setReverse(u)]
            },
            prepare: function(n) {
                n[si] = vt;
                n.transformStyle = "preserve-3d"
            }
        });
        ot = !w.mobileOS.android;
        e("replace", {
            init: function(t, i, r) {
                h.prototype.init.call(this, t);
                this._previous = n(i);
                this._transitionClass = r
            },
            duration: function() {
                throw Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule");
            },
            _both: function() {
                return n().add(this._element).add(this._previous)
            },
            _containerClass: function() {
                var t = this._direction,
                n = "k-fx k-fx-start k-fx-" + this._transitionClass;
                return t && (n += " k-fx-" + t),
                this._reverse && (n += " k-fx-reverse"),
                n
            },
            complete: function() {
                if (this.deferred) {
                    var n = this.container;
                    n.removeClass("k-fx-end").removeClass(this._containerClass());
                    this._previous.hide().removeClass("k-fx-current");
                    this.element.removeClass("k-fx-next");
                    ot && n.css(tt, "");
                    this.isAbsolute || this._both().css(it, "");
                    this.deferred.resolve();
                    delete this.deferred
                }
            },
            run: function() {
                if (this._additionalEffects && this._additionalEffects[0]) return this.compositeRun();
                var o, u = this,
                r = u.element,
                f = u._previous,
                t = r.parents().filter(f.parents()).first(),
                h = u._both(),
                e = n.Deferred(),
                c = r.css(it);
                return t.length || (t = r.parent()),
                this.container = t,
                this.deferred = e,
                this.isAbsolute = "absolute" == c,
                this.isAbsolute || h.css(it, "absolute"),
                ot && (o = t.css(tt), t.css(tt, "hidden")),
                s ? (r.addClass("k-fx-hidden"), t.addClass(this._containerClass()), t.one(s.event, n.proxy(this, "complete")), i.animationFrame(function() {
                    r.removeClass("k-fx-hidden").addClass("k-fx-next");
                    f.css("display", "").addClass("k-fx-current");
                    i.animationFrame(function() {
                        t.removeClass("k-fx-start").addClass("k-fx-end")
                    })
                })) : this.complete(),
                e.promise()
            },
            stop: function() {
                this.complete()
            }
        });
        k = i.Class.extend({
            init: function() {
                var n = this;
                n._tickProxy = li(n._tick, n);
                n._started = !1
            },
            tick: n.noop,
            done: n.noop,
            onEnd: n.noop,
            onCancel: n.noop,
            start: function() {
                this.enabled() && (this.done() ? this.onEnd() : (this._started = !0, i.animationFrame(this._tickProxy)))
            },
            enabled: function() {
                return ! 0
            },
            cancel: function() {
                this._started = !1;
                this.onCancel()
            },
            _tick: function() {
                var n = this;
                n._started && (n.tick(), n.done() ? (n._started = !1, n.onEnd()) : i.animationFrame(n._tickProxy))
            }
        });
        st = k.extend({
            init: function(n) {
                var t = this;
                r(t, n);
                k.fn.init.call(t)
            },
            done: function() {
                return this.timePassed() >= this.duration
            },
            timePassed: function() {
                return Math.min(this.duration, new Date - this.startDate)
            },
            moveTo: function(n) {
                var t = this,
                i = t.movable;
                t.initial = i[t.axis];
                t.delta = n.location - t.initial;
                t.duration = "number" == typeof n.duration ? n.duration: 300;
                t.tick = t._easeProxy(n.ease);
                t.startDate = new Date;
                t.start()
            },
            _easeProxy: function(n) {
                var t = this;
                return function() {
                    t.movable.moveAxis(t.axis, n(t.timePassed(), t.initial, t.delta, t.duration))
                }
            }
        });
        r(st, {
            easeOutExpo: function(n, t, i, r) {
                return n == r ? t + i: i * ( - Math.pow(2, -10 * n / r) + 1) + t
            },
            easeOutBack: function(n, t, i, r, u) {
                return u = 1.70158,
                i * ((n = n / r - 1) * n * ((u + 1) * n + u) + 1) + t
            }
        });
        u.Animation = k;
        u.Transition = st;
        u.createEffect = e
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.core.min", "./kendo.userevents.min"], n)
} (function() {
    return function(n, t) {
        function yt(t, i) {
            try {
                return n.contains(t, i) || t == i
            } catch(r) {
                return ! 1
            }
        }
        function a(n, t) {
            return parseInt(n.css(t), 10) || 0
        }
        function nt(n, t) {
            return Math.min(Math.max(n, t.min), t.max)
        }
        function tt(n, t) {
            var i = k(n),
            r = i.left + a(n, "borderLeftWidth") + a(n, "paddingLeft"),
            u = i.top + a(n, "borderTopWidth") + a(n, "paddingTop"),
            f = r + n.width() - t.outerWidth(!0),
            e = u + n.height() - t.outerHeight(!0);
            return {
                x: {
                    min: r,
                    max: f
                },
                y: {
                    min: u,
                    max: e
                }
            }
        }
        function pt(n, i, r) {
            for (var f, e, u = 0,
            o = i && i.length,
            s = r && r.length; n && n.parentNode;) {
                for (u = 0; o > u; u++) if (f = i[u], f.element[0] === n) return {
                    target: f,
                    targetElement: n
                };
                for (u = 0; s > u; u++) if (e = r[u], w.matchesSelector.call(n, e.options.filter)) return {
                    target: e,
                    targetElement: n
                };
                n = n.parentNode
            }
            return t
        }
        var f, p, it, c, rt, ut, i = window.kendo,
        w = i.support,
        b = window.document,
        wt = i.Class,
        o = i.ui.Widget,
        e = i.Observable,
        bt = i.UserEvents,
        u = n.proxy,
        r = n.extend,
        k = i.getOffset,
        v = {},
        s = {},
        h = {},
        d = i.elementUnderCursor,
        ft = "keyup",
        l = "change",
        et = "dragstart",
        ot = "hold",
        st = "drag",
        ht = "dragend",
        ct = "dragcancel",
        g = "dragenter",
        y = "dragleave",
        lt = "drop",
        kt = e.extend({
            init: function(t, r) {
                var f = this,
                o = t[0];
                f.capture = !1;
                o.addEventListener ? (n.each(i.eventMap.down.split(" "),
                function() {
                    o.addEventListener(this, u(f._press, f), !0)
                }), n.each(i.eventMap.up.split(" "),
                function() {
                    o.addEventListener(this, u(f._release, f), !0)
                })) : (n.each(i.eventMap.down.split(" "),
                function() {
                    o.attachEvent(this, u(f._press, f))
                }), n.each(i.eventMap.up.split(" "),
                function() {
                    o.attachEvent(this, u(f._release, f))
                }));
                e.fn.init.call(f);
                f.bind(["press", "release"], r || {})
            },
            captureNext: function() {
                this.capture = !0
            },
            cancelCapture: function() {
                this.capture = !1
            },
            _press: function(n) {
                var t = this;
                t.trigger("press");
                t.capture && n.preventDefault()
            },
            _release: function(n) {
                var t = this;
                t.trigger("release");
                t.capture && (n.preventDefault(), t.cancelCapture())
            }
        }),
        at = e.extend({
            init: function(t) {
                var i = this;
                e.fn.init.call(i);
                i.forcedEnabled = !1;
                n.extend(i, t);
                i.scale = 1;
                i.horizontal ? (i.measure = "offsetWidth", i.scrollSize = "scrollWidth", i.axis = "x") : (i.measure = "offsetHeight", i.scrollSize = "scrollHeight", i.axis = "y")
            },
            makeVirtual: function() {
                n.extend(this, {
                    virtual: !0,
                    forcedEnabled: !0,
                    _virtualMin: 0,
                    _virtualMax: 0
                })
            },
            virtualSize: function(n, t) { (this._virtualMin !== n || this._virtualMax !== t) && (this._virtualMin = n, this._virtualMax = t, this.update())
            },
            outOfBounds: function(n) {
                return n > this.max || this.min > n
            },
            forceEnabled: function() {
                this.forcedEnabled = !0
            },
            getSize: function() {
                return this.container[0][this.measure]
            },
            getTotal: function() {
                return this.element[0][this.scrollSize]
            },
            rescale: function(n) {
                this.scale = n
            },
            update: function(n) {
                var t = this,
                u = t.virtual ? t._virtualMax: t.getTotal(),
                r = u * t.scale,
                i = t.getSize();
                t.max = t.virtual ? -t._virtualMin: 0;
                t.size = i;
                t.total = r;
                t.min = Math.min(t.max, i - r);
                t.minScale = i / u;
                t.centerOffset = (r - i) / 2;
                t.enabled = t.forcedEnabled || r > i;
                n || t.trigger(l, t)
            }
        }),
        dt = e.extend({
            init: function(n) {
                var t = this;
                e.fn.init.call(t);
                t.x = new at(r({
                    horizontal: !0
                },
                n));
                t.y = new at(r({
                    horizontal: !1
                },
                n));
                t.container = n.container;
                t.forcedMinScale = n.minScale;
                t.maxScale = n.maxScale || 100;
                t.bind(l, n)
            },
            rescale: function(n) {
                this.x.rescale(n);
                this.y.rescale(n);
                this.refresh()
            },
            centerCoordinates: function() {
                return {
                    x: Math.min(0, -this.x.centerOffset),
                    y: Math.min(0, -this.y.centerOffset)
                }
            },
            refresh: function() {
                var n = this;
                n.x.update();
                n.y.update();
                n.enabled = n.x.enabled || n.y.enabled;
                n.minScale = n.forcedMinScale || Math.min(n.x.minScale, n.y.minScale);
                n.fitScale = Math.max(n.x.minScale, n.y.minScale);
                n.trigger(l)
            }
        }),
        vt = e.extend({
            init: function(n) {
                var t = this;
                r(t, n);
                e.fn.init.call(t)
            },
            outOfBounds: function() {
                return this.dimension.outOfBounds(this.movable[this.axis])
            },
            dragMove: function(n) {
                var t = this,
                i = t.dimension,
                r = t.axis,
                u = t.movable,
                f = u[r] + n;
                i.enabled && ((i.min > f && 0 > n || f > i.max && n > 0) && (n *= t.resistance), u.translateAxis(r, n), t.trigger(l, t))
            }
        }),
        gt = wt.extend({
            init: function(n) {
                var u, f, e, i, t = this;
                r(t, {
                    elastic: !0
                },
                n);
                e = t.elastic ? .5 : 0;
                i = t.movable;
                t.x = u = new vt({
                    axis: "x",
                    dimension: t.dimensions.x,
                    resistance: e,
                    movable: i
                });
                t.y = f = new vt({
                    axis: "y",
                    dimension: t.dimensions.y,
                    resistance: e,
                    movable: i
                });
                t.userEvents.bind(["move", "end", "gesturestart", "gesturechange"], {
                    gesturestart: function(n) {
                        t.gesture = n;
                        t.offset = t.dimensions.container.offset()
                    },
                    gesturechange: function(n) {
                        var e, o, s, h = t.gesture,
                        c = h.center,
                        l = n.center,
                        r = n.distance / h.distance,
                        v = t.dimensions.minScale,
                        a = t.dimensions.maxScale;
                        v >= i.scale && 1 > r && (r += .8 * (1 - r));
                        i.scale * r >= a && (r = a / i.scale);
                        o = i.x + t.offset.left;
                        s = i.y + t.offset.top;
                        e = {
                            x: (o - c.x) * r + l.x - o,
                            y: (s - c.y) * r + l.y - s
                        };
                        i.scaleWith(r);
                        u.dragMove(e.x);
                        f.dragMove(e.y);
                        t.dimensions.rescale(i.scale);
                        t.gesture = n;
                        n.preventDefault()
                    },
                    move: function(n) {
                        n.event.target.tagName.match(/textarea|input/i) || (u.dimension.enabled || f.dimension.enabled ? (u.dragMove(n.x.delta), f.dragMove(n.y.delta), n.preventDefault()) : n.touch.skip())
                    },
                    end: function(n) {
                        n.preventDefault()
                    }
                })
            }
        }),
        ni = w.transitions.prefix + "Transform";
        p = w.hasHW3D ?
        function(n, t, i) {
            return "translate3d(" + n + "px," + t + "px,0) scale(" + i + ")"
        }: function(n, t, i) {
            return "translate(" + n + "px," + t + "px) scale(" + i + ")"
        };
        it = e.extend({
            init: function(t) {
                var i = this;
                e.fn.init.call(i);
                i.element = n(t);
                i.element[0].style.webkitTransformOrigin = "left top";
                i.x = 0;
                i.y = 0;
                i.scale = 1;
                i._saveCoordinates(p(i.x, i.y, i.scale))
            },
            translateAxis: function(n, t) {
                this[n] += t;
                this.refresh()
            },
            scaleTo: function(n) {
                this.scale = n;
                this.refresh()
            },
            scaleWith: function(n) {
                this.scale *= n;
                this.refresh()
            },
            translate: function(n) {
                this.x += n.x;
                this.y += n.y;
                this.refresh()
            },
            moveAxis: function(n, t) {
                this[n] = t;
                this.refresh()
            },
            moveTo: function(n) {
                r(this, n);
                this.refresh()
            },
            refresh: function() {
                var t, n = this,
                r = n.x,
                u = n.y;
                n.round && (r = Math.round(r), u = Math.round(u));
                t = p(r, u, n.scale);
                t != n.coordinates && (i.support.browser.msie && 10 > i.support.browser.version ? (n.element[0].style.position = "absolute", n.element[0].style.left = n.x + "px", n.element[0].style.top = n.y + "px") : n.element[0].style[ni] = t, n._saveCoordinates(t), n.trigger(l))
            },
            _saveCoordinates: function(n) {
                this.coordinates = n
            }
        });
        c = o.extend({
            init: function(n, t) {
                var i, r = this;
                o.fn.init.call(r, n, t);
                i = r.options.group;
                i in s ? s[i].push(r) : s[i] = [r]
            },
            events: [g, y, lt],
            options: {
                name: "DropTarget",
                group: "default"
            },
            destroy: function() {
                var n, i = this.options.group,
                t = s[i] || h[i];
                if (t.length > 1) {
                    for (o.fn.destroy.call(this), n = 0; t.length > n; n++) if (t[n] == this) {
                        t.splice(n, 1);
                        break
                    }
                } else c.destroyGroup(i)
            },
            _trigger: function(n, i) {
                var u = this,
                f = v[u.options.group];
                return f ? u.trigger(n, r({},
                i.event, {
                    draggable: f,
                    dropTarget: i.dropTarget
                })) : t
            },
            _over: function(n) {
                this._trigger(g, n)
            },
            _out: function(n) {
                this._trigger(y, n)
            },
            _drop: function(n) {
                var t = this,
                i = v[t.options.group];
                i && (i.dropped = !t._trigger(lt, n))
            }
        });
        c.destroyGroup = function(n) {
            var t, i = s[n] || h[n];
            if (i) {
                for (t = 0; i.length > t; t++) o.fn.destroy.call(i[t]);
                i.length = 0;
                delete s[n];
                delete h[n]
            }
        };
        c._cache = s;
        rt = c.extend({
            init: function(n, t) {
                var i, r = this;
                o.fn.init.call(r, n, t);
                i = r.options.group;
                i in h ? h[i].push(r) : h[i] = [r]
            },
            options: {
                name: "DropTargetArea",
                group: "default",
                filter: null
            }
        });
        ut = o.extend({
            init: function(n, t) {
                var r = this;
                o.fn.init.call(r, n, t);
                r._activated = !1;
                r.userEvents = new bt(r.element, {
                    global: !0,
                    allowSelection: !0,
                    stopPropagation: !0,
                    filter: r.options.filter,
                    threshold: r.options.distance,
                    start: u(r._start, r),
                    hold: u(r._hold, r),
                    move: u(r._drag, r),
                    end: u(r._end, r),
                    cancel: u(r._cancel, r),
                    select: u(r._select, r)
                });
                r._afterEndHandler = u(r._afterEnd, r);
                r.captureEscape = function(n) {
                    n.keyCode === i.keys.ESC && (r._trigger(ct, {
                        event: n
                    }), r.userEvents.cancel())
                }
            },
            events: [ot, et, st, ht, ct],
            options: {
                name: "Draggable",
                distance: 5,
                group: "default",
                cursorOffset: null,
                axis: null,
                container: null,
                filter: null,
                ignore: null,
                holdToDrag: !1,
                dropped: !1
            },
            cancelHold: function() {
                this._activated = !1
            },
            _updateHint: function(t) {
                var i, r = this,
                o = r.options,
                u = r.boundaries,
                e = o.axis,
                f = r.options.cursorOffset;
                f ? i = {
                    left: t.x.location + f.left,
                    top: t.y.location + f.top
                }: (r.hintOffset.left += t.x.delta, r.hintOffset.top += t.y.delta, i = n.extend({},
                r.hintOffset));
                u && (i.top = nt(i.top, u.y), i.left = nt(i.left, u.x));
                "x" === e ? delete i.top: "y" === e && delete i.left;
                r.hint.css(i)
            },
            _shouldIgnoreTarget: function(t) {
                var i = this.options.ignore;
                return i && n(t).is(i)
            },
            _select: function(n) {
                this._shouldIgnoreTarget(n.event.target) || n.preventDefault()
            },
            _start: function(r) {
                var f, u = this,
                e = u.options,
                s = e.container,
                o = e.hint;
                return this._shouldIgnoreTarget(r.touch.initialTouch) || e.holdToDrag && !u._activated ? (u.userEvents.cancel(), t) : (u.currentTarget = r.target, u.currentTargetOffset = k(u.currentTarget), o && (u.hint && u.hint.stop(!0, !0).remove(), u.hint = i.isFunction(o) ? n(o.call(u, u.currentTarget)) : o, f = k(u.currentTarget), u.hintOffset = f, u.hint.css({
                    position: "absolute",
                    zIndex: 2e4,
                    left: f.left,
                    top: f.top
                }).appendTo(b.body)), v[e.group] = u, u.dropped = !1, s && (u.boundaries = tt(s, u.hint)), u._trigger(et, r) && (u.userEvents.cancel(), u._afterEnd()), n(b).on(ft, u.captureEscape), t)
            },
            _hold: function(n) {
                this.currentTarget = n.target;
                this._trigger(ot, n) ? this.userEvents.cancel() : this._activated = !0
            },
            _drag: function(i) {
                var u = this;
                i.preventDefault();
                u._withDropTarget(i,
                function(u, e) {
                    if (!u) return f && (f._trigger(y, r(i, {
                        dropTarget: n(f.targetElement)
                    })), f = null),
                    t;
                    if (f) {
                        if (e === f.targetElement) return;
                        f._trigger(y, r(i, {
                            dropTarget: n(f.targetElement)
                        }))
                    }
                    u._trigger(g, r(i, {
                        dropTarget: n(e)
                    }));
                    f = r(u, {
                        targetElement: e
                    })
                });
                u._trigger(st, i);
                u.hint && u._updateHint(i)
            },
            _end: function(t) {
                var i = this;
                i._withDropTarget(t,
                function(i, u) {
                    i && (i._drop(r({},
                    t, {
                        dropTarget: n(u)
                    })), f = null)
                });
                i._trigger(ht, t);
                i._cancel(t.event)
            },
            _cancel: function() {
                var n = this;
                n._activated = !1;
                n.hint && !n.dropped ? setTimeout(function() {
                    n.hint.stop(!0, !0).animate(n.currentTargetOffset, "fast", n._afterEndHandler)
                },
                0) : n._afterEnd()
            },
            _trigger: function(n, t) {
                var i = this;
                return i.trigger(n, r({},
                t.event, {
                    x: t.x,
                    y: t.y,
                    currentTarget: i.currentTarget,
                    dropTarget: t.dropTarget
                }))
            },
            _withDropTarget: function(n, t) {
                var i, u, r = this,
                o = r.options,
                f = s[o.group],
                e = h[o.group]; (f && f.length || e && e.length) && (i = d(n), r.hint && yt(r.hint[0], i) && (r.hint.hide(), i = d(n), i || (i = d(n)), r.hint.show()), u = pt(i, f, e), u ? t(u.target, u.targetElement) : t())
            },
            destroy: function() {
                var n = this;
                o.fn.destroy.call(n);
                n._afterEnd();
                n.userEvents.destroy();
                n.currentTarget = null
            },
            _afterEnd: function() {
                var t = this;
                t.hint && t.hint.remove();
                delete v[t.options.group];
                t.trigger("destroy");
                n(b).off(ft, t.captureEscape)
            }
        });
        i.ui.plugin(c);
        i.ui.plugin(rt);
        i.ui.plugin(ut);
        i.TapCapture = kt;
        i.containerBoundaries = tt;
        r(i.ui, {
            Pane: gt,
            PaneDimensions: dt,
            Movable: it
        })
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.fx.min", "./kendo.draganddrop.min"], n)
} (function() {
    return function(n, t) {
        var i = window.kendo,
        d = i.mobile,
        l = i.effects,
        a = d.ui,
        r = n.proxy,
        f = n.extend,
        o = a.Widget,
        g = i.Class,
        v = i.ui.Movable,
        nt = i.ui.Pane,
        tt = i.ui.PaneDimensions,
        y = l.Transition,
        e = l.Animation,
        u = Math.abs,
        it = 500,
        rt = .7,
        ut = .96,
        ft = 10,
        p = 55,
        w = .5,
        b = 5,
        s = "km-scroller-release",
        h = "km-scroller-refresh",
        c = "change",
        k = "scroll",
        et = 2,
        ot = e.extend({
            init: function(n) {
                var t = this;
                e.fn.init.call(t);
                f(t, n);
                t.userEvents.bind("gestureend", r(t.start, t));
                t.tapCapture.bind("press", r(t.cancel, t))
            },
            enabled: function() {
                return this.dimensions.minScale > this.movable.scale
            },
            done: function() {
                return.01 > this.dimensions.minScale - this.movable.scale
            },
            tick: function() {
                var n = this.movable;
                n.scaleWith(1.1);
                this.dimensions.rescale(n.scale)
            },
            onEnd: function() {
                var n = this.movable;
                n.scaleTo(this.dimensions.minScale);
                this.dimensions.rescale(n.scale)
            }
        }),
        st = e.extend({
            init: function(n) {
                var t = this;
                e.fn.init.call(t);
                f(t, n, {
                    transition: new y({
                        axis: n.axis,
                        movable: n.movable,
                        onEnd: function() {
                            t._end()
                        }
                    })
                });
                t.tapCapture.bind("press",
                function() {
                    t.cancel()
                });
                t.userEvents.bind("end", r(t.start, t));
                t.userEvents.bind("gestureend", r(t.start, t));
                t.userEvents.bind("tap", r(t.onEnd, t))
            },
            onCancel: function() {
                this.transition.cancel()
            },
            freeze: function(n) {
                var t = this;
                t.cancel();
                t._moveTo(n)
            },
            onEnd: function() {
                var n = this;
                n.paneAxis.outOfBounds() ? n._snapBack() : n._end()
            },
            done: function() {
                return u(this.velocity) < 1
            },
            start: function(n) {
                var i, t = this;
                t.dimension.enabled && (t.paneAxis.outOfBounds() ? t._snapBack() : (i = n.touch.id === et ? 0 : n.touch[t.axis].velocity, t.velocity = Math.max(Math.min(i * t.velocityMultiplier, p), -p), t.tapCapture.captureNext(), e.fn.start.call(t)))
            },
            tick: function() {
                var n = this,
                i = n.dimension,
                r = n.paneAxis.outOfBounds() ? w: n.friction,
                u = n.velocity *= r,
                t = n.movable[n.axis] + u; ! n.elastic && i.outOfBounds(t) && (t = Math.max(Math.min(t, i.max), i.min), n.velocity = 0);
                n.movable.moveAxis(n.axis, t)
            },
            _end: function() {
                this.tapCapture.cancelCapture();
                this.end()
            },
            _snapBack: function() {
                var n = this,
                t = n.dimension,
                i = n.movable[n.axis] > t.max ? t.max: t.min;
                n._moveTo(i)
            },
            _moveTo: function(n) {
                this.transition.moveTo({
                    location: n,
                    duration: it,
                    ease: y.easeOutExpo
                })
            }
        }),
        ht = e.extend({
            init: function(n) {
                var t = this;
                i.effects.Animation.fn.init.call(this);
                f(t, n, {
                    origin: {},
                    destination: {},
                    offset: {}
                })
            },
            tick: function() {
                this._updateCoordinates();
                this.moveTo(this.origin)
            },
            done: function() {
                return u(this.offset.y) < b && u(this.offset.x) < b
            },
            onEnd: function() {
                this.moveTo(this.destination)
            },
            setCoordinates: function(n, t) {
                this.offset = {};
                this.origin = n;
                this.destination = t
            },
            _updateCoordinates: function() {
                this.offset = {
                    x: (this.destination.x - this.origin.x) / 4,
                    y: (this.destination.y - this.origin.y) / 4
                };
                this.origin = {
                    y: this.origin.y + this.offset.y,
                    x: this.origin.x + this.offset.x
                }
            }
        }),
        ct = g.extend({
            init: function(t) {
                var i = this,
                e = "x" === t.axis,
                u = n('<div class="km-touch-scrollbar km-' + (e ? "horizontal": "vertical") + '-scrollbar" />');
                f(i, t, {
                    element: u,
                    elementSize: 0,
                    movable: new v(u),
                    scrollMovable: t.movable,
                    size: e ? "width": "height"
                });
                i.scrollMovable.bind(c, r(i._move, i));
                i.container.append(u)
            },
            _move: function() {
                var n = this,
                u = n.axis,
                f = n.dimension,
                r = f.size,
                o = n.scrollMovable,
                e = r / f.total,
                t = Math.round( - o[u] * e),
                i = Math.round(r * e);
                t + i > r ? i = r - t: 0 > t && (i += t, t = 0);
                n.elementSize != i && (n.element.css(n.size, i + "px"), n.elementSize = i);
                n.movable.moveAxis(u, t)
            },
            show: function() {
                this.element.css({
                    opacity: rt,
                    visibility: "visible"
                })
            },
            hide: function() {
                this.element.css({
                    opacity: 0
                })
            }
        }),
        lt = o.extend({
            init: function(e, s) {
                var p, w, a, l, b, y, d, g, it, h = this;
                return o.fn.init.call(h, e, s),
                e = h.element,
                (h._native = h.options.useNative && i.support.hasNativeScrolling) ? (e.addClass("km-native-scroller").prepend('<div class="km-scroll-header"/>'), f(h, {
                    scrollElement: e,
                    fixedContainer: e.children().first()
                }), t) : (e.css("overflow", "hidden").addClass("km-scroll-wrapper").wrapInner('<div class="km-scroll-container"/>').prepend('<div class="km-scroll-header"/>'), p = e.children().eq(1), w = new i.TapCapture(e), a = new v(p), l = new tt({
                    element: p,
                    container: e,
                    forcedEnabled: h.options.zoom
                }), b = this.options.avoidScrolling, y = new i.UserEvents(e, {
                    allowSelection: !0,
                    preventDragEvent: !0,
                    captureUpIfMoved: !0,
                    multiTouch: h.options.zoom,
                    start: function(t) {
                        l.refresh();
                        var i = u(t.x.velocity),
                        r = u(t.y.velocity),
                        f = 2 * i >= r,
                        e = n.contains(h.fixedContainer[0], t.event.target),
                        o = 2 * r >= i; ! e && !b(t) && h.enabled && (l.x.enabled && f || l.y.enabled && o) ? y.capture() : y.cancel()
                    }
                }), d = new nt({
                    movable: a,
                    dimensions: l,
                    userEvents: y,
                    elastic: h.options.elastic
                }), g = new ot({
                    movable: a,
                    dimensions: l,
                    userEvents: y,
                    tapCapture: w
                }), it = new ht({
                    moveTo: function(n) {
                        h.scrollTo(n.x, n.y)
                    }
                }), a.bind(c,
                function() {
                    h.scrollTop = -a.y;
                    h.scrollLeft = -a.x;
                    h.trigger(k, {
                        scrollTop: h.scrollTop,
                        scrollLeft: h.scrollLeft
                    })
                }), h.options.mousewheelScrolling && e.on("DOMMouseScroll mousewheel", r(this, "_wheelScroll")), f(h, {
                    movable: a,
                    dimensions: l,
                    zoomSnapBack: g,
                    animatedScroller: it,
                    userEvents: y,
                    pane: d,
                    tapCapture: w,
                    pulled: !1,
                    enabled: !0,
                    scrollElement: p,
                    scrollTop: 0,
                    scrollLeft: 0,
                    fixedContainer: e.children().first()
                }), h._initAxis("x"), h._initAxis("y"), h._wheelEnd = function() {
                    h._wheel = !1;
                    h.userEvents.end(0, h._wheelY)
                },
                l.refresh(), h.options.pullToRefresh && h._initPullToRefresh(), t)
            },
            _wheelScroll: function(n) {
                this._wheel || (this._wheel = !0, this._wheelY = 0, this.userEvents.press(0, this._wheelY));
                clearTimeout(this._wheelTimeout);
                this._wheelTimeout = setTimeout(this._wheelEnd, 50);
                var t = i.wheelDeltaY(n);
                t && (this._wheelY += t, this.userEvents.move(0, this._wheelY));
                n.preventDefault()
            },
            makeVirtual: function() {
                this.dimensions.y.makeVirtual()
            },
            virtualSize: function(n, t) {
                this.dimensions.y.virtualSize(n, t)
            },
            height: function() {
                return this.dimensions.y.size
            },
            scrollHeight: function() {
                return this.scrollElement[0].scrollHeight
            },
            scrollWidth: function() {
                return this.scrollElement[0].scrollWidth
            },
            options: {
                name: "Scroller",
                zoom: !1,
                pullOffset: 140,
                elastic: !0,
                useNative: !1,
                mousewheelScrolling: !0,
                avoidScrolling: function() {
                    return ! 1
                },
                pullToRefresh: !1,
                pullTemplate: "Pull to refresh",
                releaseTemplate: "Release to refresh",
                refreshTemplate: "Refreshing"
            },
            events: ["pull", k, "resize"],
            _resize: function() {
                this._native || this.contentResized()
            },
            setOptions: function(n) {
                var t = this;
                o.fn.setOptions.call(t, n);
                n.pullToRefresh && t._initPullToRefresh()
            },
            reset: function() {
                this._native ? this.scrollElement.scrollTop(0) : (this.movable.moveTo({
                    x: 0,
                    y: 0
                }), this._scale(1))
            },
            contentResized: function() {
                this.dimensions.refresh();
                this.pane.x.outOfBounds() && this.movable.moveAxis("x", this.dimensions.x.min);
                this.pane.y.outOfBounds() && this.movable.moveAxis("y", this.dimensions.y.min)
            },
            zoomOut: function() {
                var n = this.dimensions;
                n.refresh();
                this._scale(n.fitScale);
                this.movable.moveTo(n.centerCoordinates())
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            scrollTo: function(n, t) {
                this._native ? (this.scrollElement.scrollLeft(u(n)), this.scrollElement.scrollTop(u(t))) : (this.dimensions.refresh(), this.movable.moveTo({
                    x: n,
                    y: t
                }))
            },
            animatedScrollTo: function(n, t) {
                var i, r;
                this._native ? this.scrollTo(n, t) : (i = {
                    x: this.movable.x,
                    y: this.movable.y
                },
                r = {
                    x: n,
                    y: t
                },
                this.animatedScroller.setCoordinates(i, r), this.animatedScroller.start())
            },
            pullHandled: function() {
                var n = this;
                n.refreshHint.removeClass(h);
                n.hintContainer.html(n.pullTemplate({}));
                n.yinertia.onEnd();
                n.xinertia.onEnd();
                n.userEvents.cancel()
            },
            destroy: function() {
                o.fn.destroy.call(this);
                this.userEvents && this.userEvents.destroy()
            },
            _scale: function(n) {
                this.dimensions.rescale(n);
                this.movable.scaleTo(n)
            },
            _initPullToRefresh: function() {
                var n = this;
                n.dimensions.y.forceEnabled();
                n.pullTemplate = i.template(n.options.pullTemplate);
                n.releaseTemplate = i.template(n.options.releaseTemplate);
                n.refreshTemplate = i.template(n.options.refreshTemplate);
                n.scrollElement.prepend('<span class="km-scroller-pull"><span class="km-icon"><\/span><span class="km-loading-left"><\/span><span class="km-loading-right"><\/span><span class="km-template">' + n.pullTemplate({}) + "<\/span><\/span>");
                n.refreshHint = n.scrollElement.children().first();
                n.hintContainer = n.refreshHint.children(".km-template");
                n.pane.y.bind("change", r(n._paneChange, n));
                n.userEvents.bind("end", r(n._dragEnd, n))
            },
            _dragEnd: function() {
                var n = this;
                n.pulled && (n.pulled = !1, n.refreshHint.removeClass(s).addClass(h), n.hintContainer.html(n.refreshTemplate({})), n.yinertia.freeze(n.options.pullOffset / 2), n.trigger("pull"))
            },
            _paneChange: function() {
                var n = this;
                n.movable.y / w > n.options.pullOffset ? n.pulled || (n.pulled = !0, n.refreshHint.removeClass(h).addClass(s), n.hintContainer.html(n.releaseTemplate({}))) : n.pulled && (n.pulled = !1, n.refreshHint.removeClass(s), n.hintContainer.html(n.pullTemplate({})))
            },
            _initAxis: function(n) {
                var t = this,
                i = t.movable,
                r = t.dimensions[n],
                e = t.tapCapture,
                u = t.pane[n],
                f = new ct({
                    axis: n,
                    movable: i,
                    dimension: r,
                    container: t.element
                });
                u.bind(c,
                function() {
                    f.show()
                });
                t[n + "inertia"] = new st({
                    axis: n,
                    paneAxis: u,
                    movable: i,
                    tapCapture: e,
                    userEvents: t.userEvents,
                    dimension: r,
                    elastic: t.options.elastic,
                    friction: t.options.friction || ut,
                    velocityMultiplier: t.options.velocityMultiplier || ft,
                    end: function() {
                        f.hide();
                        t.trigger("scrollEnd", {
                            axis: n,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        })
                    }
                })
            }
        });
        a.plugin(lt)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.list.min", "./kendo.mobile.scroller.min"], n)
} (function() {
    return function(n, t) {
        function s(n, t, i) {
            return i ? t.substring(0, n).split(i).length - 1 : 0
        }
        function g(n, t, i) {
            return t.split(i)[s(n, t, i)]
        }
        function nt(n, t, i, r) {
            var u = t.split(r);
            return u.splice(s(n, t, r), 1, i),
            r && "" !== u[u.length - 1] && u.push(""),
            u.join(r)
        }
        var r = window.kendo,
        tt = r.support,
        f = r.caret,
        a = r._activeElement,
        v = tt.placeholder,
        y = r.ui,
        e = y.List,
        u = r.keys,
        it = r.data.DataSource,
        p = "aria-disabled",
        w = "aria-readonly",
        h = "k-state-default",
        b = "disabled",
        k = "readonly",
        d = "k-state-focused",
        c = "k-state-selected",
        l = "k-state-disabled",
        rt = "k-state-hover",
        i = ".kendoAutoComplete",
        ut = "mouseenter" + i + " mouseleave" + i,
        o = n.proxy,
        ft = e.extend({
            init: function(t, u) {
                var s, f = this;
                f.ns = i;
                u = n.isArray(u) ? {
                    dataSource: u
                }: u;
                e.fn.init.call(f, t, u);
                t = f.element;
                u = f.options;
                u.placeholder = u.placeholder || t.attr("placeholder");
                v && t.attr("placeholder", u.placeholder);
                f._wrapper();
                f._loader();
                f._dataSource();
                f._ignoreCase();
                t[0].type = "text";
                s = f.wrapper;
                f._popup();
                t.addClass("k-input").on("keydown" + i, o(f._keydown, f)).on("paste" + i, o(f._search, f)).on("focus" + i,
                function() {
                    f._prev = f._accessor();
                    f._placeholder(!1);
                    s.addClass(d)
                }).on("blur" + i,
                function() {
                    f._change();
                    f._placeholder();
                    s.removeClass(d)
                }).attr({
                    autocomplete: "off",
                    role: "textbox",
                    "aria-haspopup": !0
                });
                f._enable();
                f._old = f._accessor();
                t[0].id && t.attr("aria-owns", f.ul[0].id);
                f._aria();
                f._placeholder();
                r.notify(f)
            },
            options: {
                name: "AutoComplete",
                enabled: !0,
                suggest: !1,
                template: "",
                dataTextField: "",
                minLength: 1,
                delay: 200,
                height: 200,
                filter: "startswith",
                ignoreCase: !0,
                highlightFirst: !1,
                separator: null,
                placeholder: "",
                animation: {},
                value: null
            },
            _dataSource: function() {
                var n = this;
                n.dataSource && n._refreshHandler ? n._unbindDataSource() : (n._refreshHandler = o(n.refresh, n), n._progressHandler = o(n._showBusy, n));
                n.dataSource = it.create(n.options.dataSource).bind("change", n._refreshHandler).bind("progress", n._progressHandler)
            },
            setDataSource: function(n) {
                this.options.dataSource = n;
                this._dataSource()
            },
            events: ["open", "close", "change", "select", "dataBinding", "dataBound"],
            setOptions: function(n) {
                e.fn.setOptions.call(this, n);
                this._template();
                this._accessors();
                this._aria()
            },
            _editable: function(n) {
                var r = this,
                f = r.element,
                e = r.wrapper.off(i),
                u = n.readonly,
                t = n.disable;
                u || t ? (e.addClass(t ? l: h).removeClass(t ? h: l), f.attr(b, t).attr(k, u).attr(p, t).attr(w, u)) : (e.addClass(h).removeClass(l).on(ut, r._toggleHover), f.removeAttr(b).removeAttr(k).attr(p, !1).attr(w, !1))
            },
            close: function() {
                var n = this,
                t = n._current;
                t && t.removeClass(c);
                n.current(null);
                n.popup.close()
            },
            destroy: function() {
                var n = this;
                n.element.off(i);
                n.wrapper.off(i);
                e.fn.destroy.call(n)
            },
            refresh: function() {
                var u, i = this,
                f = i.ul[0],
                e = i.popup,
                s = i.options,
                h = i._data(),
                o = h.length;
                i.trigger("dataBinding");
                f.innerHTML = r.render(i.template, h);
                i._height(o);
                e.visible() && e._position();
                o && (s.highlightFirst && i.current(n(f.firstChild)), s.suggest && i.suggest(n(f.firstChild)));
                i._open && (i._open = !1, u = o ? "open": "close", i._typing && i.element[0] !== a() && (u = "close"), e[u](), i._typing = t);
                i._touchScroller && i._touchScroller.reset();
                i._makeUnselectable();
                i._hideBusy();
                i.trigger("dataBound")
            },
            select: function(n) {
                this._select(n)
            },
            search: function(n) {
                var r, t = this,
                i = t.options,
                u = i.ignoreCase,
                e = i.separator;
                n = n || t._accessor();
                t._current = null;
                clearTimeout(t._typing);
                e && (n = g(f(t.element)[0], n, e));
                r = n.length;
                r ? r >= t.options.minLength && (t._open = !0, t._filterSource({
                    value: u ? n.toLowerCase() : n,
                    operator: i.filter,
                    field: i.dataTextField,
                    ignoreCase: u
                })) : t.popup.close()
            },
            suggest: function(n) {
                var i, r = this,
                y = r._last,
                o = r._accessor(),
                v = r.element[0],
                h = f(v)[0],
                c = r.options.separator,
                l = o.split(c),
                p = s(h, o, c),
                w = h;
                return y == u.BACKSPACE || y == u.DELETE ? (r._last = t, t) : (n = n || "", "string" != typeof n && (i = e.inArray(n[0], r.ul[0]), n = i > -1 ? r._text(r._data()[i]) : ""), 0 >= h && (h = o.toLowerCase().indexOf(n.toLowerCase()) + 1), i = o.substring(0, h).lastIndexOf(c), i = i > -1 ? h - (i + c.length) : h, o = l[p].substring(0, i), n && (i = n.toLowerCase().indexOf(o.toLowerCase()), i > -1 && (n = n.substring(i + o.length), w = h + n.length, o += n), c && "" !== l[l.length - 1] && l.push("")), l[p] = o, r._accessor(l.join(c || "")), v === a() && f(v, h, w), t)
            },
            value: function(n) {
                return n === t ? this._accessor() : (this._accessor(n), this._old = n, t)
            },
            _accessor: function(n) {
                var i = this,
                r = i.element[0];
                return n === t ? (n = r.value, r.className.indexOf("k-readonly") > -1 ? n === i.options.placeholder ? "": n: n) : (r.value = null === n ? "": n, i._placeholder(), t)
            },
            _accept: function(n) {
                var t = this.element;
                this._focus(n);
                f(t, t.val().length)
            },
            _keydown: function(t) {
                var i = this,
                e = i.ul[0],
                r = t.keyCode,
                f = i._current,
                o = i.popup.visible();
                i._last = r;
                r === u.DOWN ? (o && i._move(f ? f.next() : n(e.firstChild)), t.preventDefault()) : r === u.UP ? (o && i._move(f ? f.prev() : n(e.lastChild)), t.preventDefault()) : r === u.ENTER || r === u.TAB ? (r === u.ENTER && i.popup.visible() && t.preventDefault(), i._accept(f)) : r === u.ESC ? (i.popup.visible() && t.preventDefault(), i.close()) : i._search()
            },
            _move: function(n) {
                var t = this;
                n = n[0] ? n: null;
                t.current(n);
                t.options.suggest && t.suggest(n)
            },
            _hideBusy: function() {
                var n = this;
                clearTimeout(n._busy);
                n._loading.hide();
                n.element.attr("aria-busy", !1);
                n._busy = null
            },
            _showBusy: function() {
                var n = this;
                n._busy || (n._busy = setTimeout(function() {
                    n.element.attr("aria-busy", !0);
                    n._loading.show()
                },
                100))
            },
            _placeholder: function(n) {
                if (!v) {
                    var i, e = this,
                    u = e.element,
                    r = e.options.placeholder;
                    if (r) {
                        if (i = u.val(), n === t && (n = !i), n || (r = i !== r ? i: ""), i === e._old && !n) return;
                        u.toggleClass("k-readonly", n).val(r);
                        r || u[0] !== document.activeElement || f(u[0], 0, 0)
                    }
                }
            },
            _search: function() {
                var n = this;
                clearTimeout(n._typing);
                n._typing = setTimeout(function() {
                    n._prev !== n._accessor() && (n._prev = n._accessor(), n.search())
                },
                n.options.delay)
            },
            _select: function(t) {
                var r, u, i = this,
                s = i.options.separator,
                o = i._data();
                t = n(t);
                t[0] && !t.hasClass(c) && (u = e.inArray(t[0], i.ul[0]), u > -1 && (o = o[u], r = i._text(o), s && (r = nt(f(i.element)[0], i._accessor(), r, s)), i._accessor(r), i._prev = i._accessor(), i.current(t.addClass(c))))
            },
            _loader: function() {
                this._loading = n('<span class="k-icon k-loading" style="display:none"><\/span>').insertAfter(this.element)
            },
            _toggleHover: function(t) {
                n(t.currentTarget).toggleClass(rt, "mouseenter" === t.type)
            },
            _wrapper: function() {
                var n, t = this,
                i = t.element,
                r = i[0];
                n = i.parent();
                n.is("span.k-widget") || (n = i.wrap("<span />").parent());
                n.attr("tabindex", -1);
                n.attr("role", "presentation");
                n[0].style.cssText = r.style.cssText;
                i.css({
                    width: "100%",
                    height: r.style.height
                });
                t._focused = t.element;
                t.wrapper = n.addClass("k-widget k-autocomplete k-header").addClass(r.className)
            }
        });
        y.plugin(ft)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
}); !
function(n, t) {
    t(["./kendo.list.min", "./kendo.mobile.scroller.min"], n)
} (function() {
    return function(n, t) {
        var r = window.kendo,
        e = r.ui,
        v = e.List,
        u = e.Select,
        o = r.caret,
        ft = r.support,
        y = ft.placeholder,
        s = r._activeElement,
        h = r.keys,
        i = ".kendoComboBox",
        p = "click" + i,
        w = "mousedown" + i,
        b = "disabled",
        k = "readonly",
        d = "change",
        c = "k-state-default",
        g = "k-state-focused",
        l = "k-state-disabled",
        nt = "aria-disabled",
        tt = "aria-readonly",
        it = "k-state-selected",
        f = "filter",
        a = "accept",
        rt = "rebind",
        et = "mouseenter" + i + " mouseleave" + i,
        ut = null,
        ot = n.proxy,
        st = u.extend({
            init: function(t, f) {
                var o, e = this;
                e.ns = i;
                f = n.isArray(f) ? {
                    dataSource: f
                }: f;
                u.fn.init.call(e, t, f);
                e._focusHandler = function() {
                    e.input.focus()
                };
                f = e.options;
                t = e.element.on("focus" + i, e._focusHandler);
                f.placeholder = f.placeholder || t.attr("placeholder");
                e._reset();
                e._wrapper();
                e._input();
                e._tabindex(e.input);
                e._popup();
                e._dataSource();
                e._ignoreCase();
                e._enable();
                e._cascade();
                e._aria();
                e._oldIndex = e.selectedIndex = -1;
                f.autoBind ? e._filterSource() : (o = f.text, !o && e._isSelect && (o = t.children(":selected").text()), o && (e.input.val(o), e._prev = o));
                o || e._placeholder();
                r.notify(e)
            },
            options: {
                name: "ComboBox",
                enabled: !0,
                index: -1,
                text: null,
                value: null,
                autoBind: !0,
                delay: 200,
                dataTextField: "",
                dataValueField: "",
                minLength: 0,
                height: 200,
                highlightFirst: !0,
                template: "",
                filter: "none",
                placeholder: "",
                suggest: !1,
                cascadeFrom: "",
                cascadeFromField: "",
                ignoreCase: !0,
                animation: {}
            },
            events: ["open", "close", d, "select", "dataBinding", "dataBound", "cascade"],
            setOptions: function(n) {
                u.fn.setOptions.call(this, n);
                this._template();
                this._accessors();
                this._aria()
            },
            current: function(n) {
                var r = this,
                i = r._current;
                return n === t ? i: (i && i.removeClass(it), u.fn.current.call(r, n), t)
            },
            destroy: function() {
                var n = this;
                n.input.off(i);
                n.element.off(i);
                n._inputWrapper.off(i);
                u.fn.destroy.call(n)
            },
            _editable: function(n) {
                var t = this,
                r = n.disable,
                f = n.readonly,
                u = t._inputWrapper.off(i),
                e = t.element.add(t.input.off(i)),
                o = t._arrow.parent().off(p + " " + w);
                f || r ? (u.addClass(r ? l: c).removeClass(r ? c: l), e.attr(b, r).attr(k, f).attr(nt, r).attr(tt, f)) : (u.addClass(c).removeClass(l).on(et, t._toggleHover), e.removeAttr(b).removeAttr(k).attr(nt, !1).attr(tt, !1), o.on(p,
                function() {
                    t.toggle()
                }).on(w,
                function(n) {
                    n.preventDefault()
                }), t.input.on("keydown" + i, ot(t._keydown, t)).on("focus" + i,
                function() {
                    u.addClass(g);
                    t._placeholder(!1)
                }).on("blur" + i,
                function() {
                    u.removeClass(g);
                    clearTimeout(t._typing);
                    t.options.text !== t.input.val() && t.text(t.text());
                    t._placeholder();
                    t._blur();
                    t.element.blur()
                }))
            },
            open: function() {
                var n = this,
                t = n.dataSource.options.serverFiltering;
                n.popup.visible() || (!n.ul[0].firstChild || n._state === a && !t ? (n._open = !0, n._state = rt, n._filterSource()) : (n.popup.open(), n._scroll(n._current)))
            },
            refresh: function() {
                var l, e, u, i = this,
                o = i.ul[0],
                a = i.options,
                v = i._state,
                h = i._data(),
                c = h.length,
                y = !0;
                i.trigger("dataBinding");
                o.innerHTML = r.render(i.template, h);
                i._height(c);
                i.popup.visible() && i.popup._position();
                i._isSelect && (l = i.element[0].children[0], v === rt && (i._state = ""), u = i._option, i._option = t, i._options(h), u && u[0].selected ? i._custom(u.val(), y) : i._bound || l || i._custom("", y));
                c && (a.highlightFirst && i.current(n(o.firstChild)), a.suggest && i.input.val() && i._request !== t && i.suggest(n(o.firstChild)));
                v === f || i._fetch || i._selectItem();
                i._open && (i._open = !1, e = !!c, i._typing && i.input[0] !== s() && (e = !1), i.toggle(e), i._typing = t);
                i._touchScroller && i._touchScroller.reset();
                i._makeUnselectable();
                i._hideBusy();
                i._bound = !0;
                i.trigger("dataBound")
            },
            search: function(n) {
                n = "string" == typeof n ? n: this.text();
                var t = this,
                e = n.length,
                i = t.options,
                r = i.ignoreCase,
                u = i.filter,
                o = i.dataTextField;
                clearTimeout(t._typing);
                e >= i.minLength && (t._state = f, "none" === u ? t._filter(n) : (t._open = !0, t._filterSource({
                    value: r ? n.toLowerCase() : n,
                    field: o,
                    operator: u,
                    ignoreCase: r
                })))
            },
            suggest: function(n) {
                var u, r = this,
                e = r.input[0],
                i = r.text(),
                f = o(e)[0],
                c = r._last;
                return c == h.BACKSPACE || c == h.DELETE ? (r._last = t, t) : (n = n || "", "string" != typeof n && (u = v.inArray(n[0], r.ul[0]), n = u > -1 ? r._text(r.dataSource.view()[u]) : ""), 0 >= f && (f = i.toLowerCase().indexOf(n.toLowerCase()) + 1), n ? (u = n.toLowerCase().indexOf(i.toLowerCase()), u > -1 && (i += n.substring(u + i.length))) : i = i.substring(0, f), i.length === f && n || (e.value = i, e === s() && o(e, f, i.length)), t)
            },
            text: function(n) {
                var i, u, o, f, e, r;
                return n = null === n ? "": n,
                i = this,
                u = i.input[0],
                o = i.options.ignoreCase,
                f = n,
                n === t ? u.value: (e = i.dataItem(), e && i._text(e) === n && (r = i._value(e), null === r ? r = "": r += "", r === i._old) ? (i._triggerCascade(), t) : (o && (f = f.toLowerCase()), i._select(function(n) {
                    return n = i._text(n),
                    o && (n = (n + "").toLowerCase()),
                    n === f
                }), 0 > i.selectedIndex && (i._custom(n), u.value = n), i._prev = u.value, i._triggerCascade(), t))
            },
            toggle: function(n) {
                var t = this;
                t._toggle(n)
            },
            value: function(n) {
                var r, i = this,
                u = i.options;
                return n === t ? i._accessor() : (null !== n && (n = "" + n), i._selectedValue = n, !i._open && n && i._fetchItems(n) || (r = i._index(n), r > -1 ? i.select(r) : (i.current(ut), i._custom(n), (u.value !== n || u.text !== i.input.val()) && (i.text(n), i._placeholder())), i._old = i._accessor(), i._oldIndex = i.selectedIndex), t)
            },
            _accept: function(n) {
                var t = this;
                n ? t._focus(n) : (t.text(t.text()), t._change())
            },
            _custom: function(t, i) {
                var r = this,
                e = r.element,
                u = r._option;
                r._state !== f || i || (r._state = a);
                r._isSelect ? (u || (u = r._option = n("<option/>"), e.append(u)), u.text(t), u[0].selected = !0) : e.val(t);
                r._selectedValue = t
            },
            _filter: function(n) {
                var i = this,
                r = i.options,
                u = i.dataSource,
                f = r.ignoreCase,
                e = function(r) {
                    var u = i._text(r);
                    return u !== t ? (u += "", "" !== u && "" === n ? !1 : (f && (u = u.toLowerCase()), 0 === u.indexOf(n))) : t
                };
                return f && (n = n.toLowerCase()),
                i.ul[0].firstChild ? ( - 1 !== i._highlight(e) && (r.suggest && i._current && i.suggest(i._current), i.open()), i._hideBusy(), t) : (u.one(d,
                function() {
                    u.data()[0] && i.search(n)
                }).fetch(), t)
            },
            _highlight: function(i) {
                var u, r = this;
                return i === t || null === i ? -1 : (i = r._get(i), u = v.inArray(i[0], r.ul[0]), -1 == u && (r.options.highlightFirst && !r.text() ? (i = r.ul[0].firstChild, i && (i = n(i))) : i = ut), r.current(i), u)
            },
            _input: function() {
                var r, t = this,
                i = t.element.removeClass("k-input")[0],
                e = i.accessKey,
                u = t.wrapper,
                o = "input.k-input",
                f = i.name || "";
                f && (f = 'name="' + f + '_input" ');
                r = u.find(o);
                r[0] || (u.append('<span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default"><input ' + f + 'class="k-input" type="text" autocomplete="off"/><span tabindex="-1" unselectable="on" class="k-select"><span unselectable="on" class="k-icon k-i-arrow-s">select<\/span><\/span><\/span>').append(t.element), r = u.find(o));
                r[0].style.cssText = i.style.cssText;
                i.maxLength > -1 && (r[0].maxLength = i.maxLength);
                r.addClass(i.className).val(this.options.text || i.value).css({
                    width: "100%",
                    height: i.style.height
                }).attr({
                    role: "combobox",
                    "aria-expanded": !1
                }).show();
                y && r.attr("placeholder", t.options.placeholder);
                e && (i.accessKey = "", r[0].accessKey = e);
                t._focused = t.input = r;
                t._inputWrapper = n(u[0].firstChild);
                t._arrow = u.find(".k-icon").attr({
                    role: "button",
                    tabIndex: -1
                });
                i.id && t._arrow.attr("aria-controls", t.ul[0].id)
            },
            _keydown: function(n) {
                var t = this,
                i = n.keyCode;
                t._last = i;
                clearTimeout(t._typing);
                i == h.TAB || t._move(n) || t._search()
            },
            _placeholder: function(n) {
                if (!y) {
                    var u, f = this,
                    i = f.input,
                    r = f.options.placeholder;
                    if (r) {
                        if (u = f.value(), n === t && (n = !u), i.toggleClass("k-readonly", n), !n) {
                            if (u) return;
                            r = ""
                        }
                        i.val(r);
                        r || i[0] !== s() || o(i[0], 0, 0)
                    }
                }
            },
            _search: function() {
                var n = this;
                n._typing = setTimeout(function() {
                    var t = n.text();
                    n._prev !== t && (n._prev = t, n.search(t));
                    n._typing = null
                },
                n.options.delay)
            },
            _select: function(n) {
                var e, o, i = this,
                r = i._data(),
                u = i._highlight(n);
                i.selectedIndex = u; - 1 !== u && (i._state === f && (i._state = a), i._current.addClass(it), r = r[u], e = i._text(r), o = i._value(r), i._prev = i.input[0].value = e, i._accessor(o !== t ? o: e, u), i._selectedValue = i._accessor(), i._placeholder(), i._optionID && i._current.attr("aria-selected", !0))
            },
            _wrapper: function() {
                var i = this,
                n = i.element,
                t = n.parent();
                t.is("span.k-widget") || (t = n.hide().wrap("<span />").parent(), t[0].style.cssText = n[0].style.cssText);
                i.wrapper = t.addClass("k-widget k-combobox k-header").addClass(n[0].className).css("display", "")
            },
            _clearSelection: function(n, t) {
                var i = this,
                r = n._selectedValue || n.value(),
                u = r && -1 === n.selectedIndex; (t || !r || u) && (i.value(""), i.options.value = "")
            }
        });
        e.plugin(st)
    } (window.kendo.jQuery),
    window.kendo
},
"function" == typeof define && define.amd ? define: function(n, t) {
    t()
})