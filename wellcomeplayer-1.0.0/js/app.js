
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) { return new x.fn.init(e, t, r) }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) { return t.toUpperCase() }, q = function (e) { (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready()) }, _ = function () { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) }; x.fn = x.prototype = { jquery: f, constructor: x, init: function (e, n, r) { var i, o; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (o = a.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return r.find(e); this.length = 1, this[0] = o } return this.context = a, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this)) }, selector: "", length: 0, toArray: function () { return g.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return x.each(this, e, t) }, ready: function (e) { return x.ready.promise().done(e), this }, slice: function () { return this.pushStack(g.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(x.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l) ; u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? x.readyWait++ : x.ready(!0) }, ready: function (e) { if (e === !0 ? !--x.readyWait : !x.isReady) { if (!a.body) return setTimeout(x.ready); x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === x.type(e) }, isArray: Array.isArray || function (e) { return "array" === x.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e }, isPlainObject: function (e) { var n; if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1; try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 } if (x.support.ownLast) for (n in e) return v.call(e, n); for (n in e); return n === t || v.call(e, n) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || a; var r = k.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && x.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(D, "ms-").replace(L, H) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: b && !b.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : b.call(e) } : function (e) { return null == e ? "" : (e + "").replace(C, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (m) return m.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return d.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var l = 0, u = e.length, c = null == r; if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(x(e), n) })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r))); return o ? e : c ? n.call(e) : u ? n(e[0], r) : a }, now: function () { return (new Date).getTime() }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), x.ready.promise = function (t) { if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else { a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q); var r = !1; try { r = null == e.frameElement && a.documentElement } catch (i) { } r && r.doScroll && function o() { if (!x.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) } _(), x.ready() } }() } return n.promise(t) }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { c["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = x.type(e); return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = x(a), function (e, t) { var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) { return e === t ? (S = !0, 0) : 0 }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) { M = { apply: H.length ? function (e, t) { _.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function at(e, t, n, i) { var o, a, s, l, u, c, d, m, y, x; if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n; if (1 !== (l = t.nodeType) && 9 !== l) return []; if (h && !i) { if (o = Z.exec(e)) if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n } if (r.qsa && (!g || !g.test(e))) { if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) { c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length; while (u--) c[u] = m + yt(c[u]); y = V.test(e) && t.parentNode || t, x = c.join(",") } if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) { } finally { d || t.removeAttribute("id") } } } return kt(e.replace(z, "$1"), t, n, i) } function st() { var e = []; function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r } return t } function lt(e) { return e[b] = !0, e } function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function ct(e, t) { var n = e.split("|"), r = e.length; while (r--) o.attrHandle[n[r]] = t } function pt(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function ft(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function dt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function ht(e) { return lt(function (t) { return t = +t, lt(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } s = at.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function (e) { var n = e ? e.ownerDocument || e : w, i = n.defaultView; return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () { p() }), r.attributes = ut(function (e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function (e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function (e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function (e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function (e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, o.find.CLASS = r.getElementsByClassName && function (e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function (e) { var t = n.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:") })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, A = d.compareDocumentPosition ? function (e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return S = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0; if (o === a) return pt(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, n) : f }, at.matches = function (e, t) { return at(e, null, null, t) }, at.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) { } return at(t, f, null, [e]).length > 0 }, at.contains = function (e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function (e, n) { (e.ownerDocument || e) !== f && p(e); var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t; return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a }, at.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function (e) { var t, n = [], i = 0, o = 0; if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) } return e }, a = at.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += a(t); return n }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function (e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, l) { var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break } } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e); return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: lt(function (e) { var t = [], n = [], r = l(e.replace(z, "$1")); return r[b] ? lt(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: lt(function (e) { return function (t) { return at(e, t).length > 0 } }), contains: lt(function (e) { return function (t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }), lang: lt(function (e) { return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) { var n; do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === d }, focus: function (e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !o.pseudos.empty(e) }, header: function (e) { return tt.test(e.nodeName) }, input: function (e) { return et.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: ht(function () { return [0] }), last: ht(function (e, t) { return [t - 1] }), eq: ht(function (e, t, n) { return [0 > n ? n + t : n] }), even: ht(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: ht(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) e.push(r); return e }), gt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) e.push(r); return e }) } }, o.pseudos.nth = o.pseudos.eq; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = ft(n); for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n); function gt() { } gt.prototype = o.filters = o.pseudos, o.setFilters = new gt; function mt(e, t) { var n, r, i, a, s, l, u, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, l = [], u = o.preFilter; while (s) { (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length)); for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? at.error(e) : k(e, l).slice(0) } function yt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function vt(e, t, n) { var r = t.dir, o = n && "parentNode" === r, a = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i) } : function (t, n, s) { var l, u, c, p = T + " " + a; if (s) { while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0 } } function bt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function xt(e, t, n, r, i) { var o, a = [], s = 0, l = e.length, u = null != t; for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s)); return a } function wt(e, t, n, r, i, o) { return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) { var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, l), r) { u = xt(y, d), r(u, [], s, l), c = u.length; while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { u = [], c = y.length; while (c--) (p = y[c]) && u.push(m[c] = p); i(null, y = [], u, l) } c = y.length; while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p)) } } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y) }) } function Tt(e) { var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) { return e === t }, s, !0), p = vt(function (e) { return F.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }]; for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)]; else { if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) { for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break; return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e)) } f.push(n) } return bt(f) } function Ct(e, t) { var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1; for (w && (u = l !== f && l, i = n) ; null != (h = N[b]) ; b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, l, c)) { p.push(h); break } w && (T = k, i = ++n) } r && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, r && b !== v) { g = 0; while (m = t[g++]) m(x, y, l, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p)); y = xt(y) } M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p) } return w && (T = k, u = C), x }; return r ? lt(s) : s } l = at.compile = function (e, t) { var n, r = [], i = [], o = E[e + " "]; if (!o) { t || (t = mt(e)), n = t.length; while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o); o = E(e, Ct(i, r)) } return o }; function Nt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) at(e, t[r], n); return n } function kt(e, t, n, i) { var a, s, u, c, p, f = mt(e); if (!i && 1 === f.length) { if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) { if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n; e = e.slice(s.shift().value.length) } a = Q.needsContext.test(e) ? 0 : s.length; while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n; break } } } return l(e, f)(i, t, !h, n, V.test(e)), n } r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function (e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function (e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function (e) { return null == e.getAttribute("disabled") }) || ct(B, function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains }(e); var O = {}; function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function (e, n) { t[n] = !0 }), t } x.Callbacks = function (e) { e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e); var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable()) }, p = { add: function () { if (l) { var t = l.length; (function i(t) { x.each(t, function (t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r)) } return this }, remove: function () { return l && x.each(arguments, function (e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) }, empty: function () { return l = [], o = 0, this }, disable: function () { return l = u = r = t, this }, disabled: function () { return !l }, lock: function () { return u = t, r || p.disable(), this }, locked: function () { return !u }, fireWith: function (e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, x.extend({ Deferred: function (e) { var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return x.Deferred(function (n) { x.each(t, function (t, o) { var a = o[0], s = x.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? x.extend(e, r) : r } }, i = {}; return r.pipe = r.then, x.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, l, u; if (r > 1) for (s = Array(r), l = Array(r), u = Array(r) ; r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i; return i || o.resolveWith(u, n), o.promise() } }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t; s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip; for (f in x(t)) break; return t.ownLast = "0" !== f, x(function () { var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0]; l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null) }), n = s = l = u = r = o = null, t
    }({}); var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g; function R(e, n, r, i) { if (x.acceptData(e)) { var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s; if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o } } function W(e, t, n) { if (x.acceptData(e)) { var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando; if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return } (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } } x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function (e, t, n) { return R(e, t, n) }, removeData: function (e, t) { return W(e, t) }, _data: function (e, t, n) { return R(e, t, n, !0) }, _removeData: function (e, t) { return W(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({ data: function (e, n) { var r, i, o = null, a = 0, s = this[0]; if (e === t) { if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) { for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i])); x._data(s, "parsedAttrs", !0) } return o } return "object" == typeof e ? this.each(function () { x.data(this, e) }) : arguments.length > 1 ? this.each(function () { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null }, removeData: function (e) { return this.each(function () { x.removeData(this, e) }) } }); function $(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(P, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) { } x.data(e, n, r) } else r = t } return r } function I(e) { var t; for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } x.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () { x.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) } }), x.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () { var t = x.queue(this, e, n); x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { x.dequeue(this, e) }) }, delay: function (e, t) { return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)); return l(), o.promise(n) } }); var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input; x.fn.extend({ attr: function (e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { x.removeAttr(this, e) }) }, prop: function (e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = x.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).addClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = x.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).removeClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? x.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var t, r = 0, o = x(this), a = e.match(T) || []; while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = x.isFunction(e), this.each(function (n) { var o; 1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n) } } }), x.extend({ valHooks: { option: { get: function (e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) { if (t = x(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n, r, i = e.options, o = x.makeArray(t), a = i.length; while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0); return n || (e.selectedIndex = -1), o } } }, attr: function (e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(T); if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } } } }), X = { set: function (e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) { var r = x.expr.attrHandle[n] || x.find.attr; x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) { var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null; return x.expr.attrHandle[n] = o, a } : function (e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null } }), K && Q || (x.attrHooks.value = { set: function (e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function (e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function (e, n) { x.attrHooks[n] = { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) { x.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () { x.valHooks[this] = { set: function (e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } function at() { try { return a.activeElement } catch (e) { } } x.event = { global: {}, add: function (e, n, r, o, a) { var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length; while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e); if (m && (c = m.events)) { t = (t || "").match(T) || [""], u = t.length; while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) x.event.remove(e, d + t[u], n, r, !0); x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events")) } }, trigger: function (n, r, i, o) { var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : []; if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!o && !p.noBubble && !x.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode) ; u; u = u.parentNode) h.push(u), f = u; f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault(); if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) { f = i[l], f && (i[l] = null), x.event.triggered = g; try { i[g]() } catch (y) { } x.event.triggered = t, f && (i[l] = f) } return n.result } }, dispatch: function (e) { e = x.event.fix(e); var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {}; if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], l = n.delegateCount, u = e.target; if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i); o.length && s.push({ elem: u, handlers: o }) } return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s }, fix: function (e) { if (e[x.expando]) return e; var t, n, r, i = e.type, o = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; while (t--) n = r[t], e[n] = o[n]; return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, o, s = n.button, l = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function () { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function (e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, x.removeEvent = a.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, x.Event = function (e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { x.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.support.submitBubbles || (x.event.special.submit = { setup: function () { return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t; r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) } }), x.support.changeBubbles || (x.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return x.event.remove(this, "._change"), !Z.test(this.nodeName) } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { x.event.simulate(t, e.target, x.event.fix(e), !0) }; x.event.special[t] = { setup: function () { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && a.removeEventListener(e, r, !0) } } }), x.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () { x.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { x.event.remove(this, e, r, n) }) }, trigger: function (e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t } }); var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; x.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(x(e).filter(function () { for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0 })); for (t = 0; i > t; t++) x.find(e, r[t], n); return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, has: function (e) { var t, n = x(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e || [], !0)) }, filter: function (e) { return this.pushStack(ft(this, e || [], !1)) }, is: function (e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } return this.pushStack(o.length > 1 ? x.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n); return this.pushStack(x.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } x.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return x.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return x.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return x.dir(e, "nextSibling") }, prevAll: function (e) { return x.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function (e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return x.sibling(e.firstChild) }, contents: function (e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function (e, t) { x.fn[e] = function (n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({ filter: function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) { return 1 === e.nodeType })) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (x.isFunction(t)) return x.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }); if (t.nodeType) return x.grep(e, function (e) { return e === t !== n }); if ("string" == typeof t) { if (st.test(t)) return x.filter(t, e, n); t = x.filter(t, e) } return x.grep(e, function (e) { return x.inArray(e, t) >= 0 !== n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(a), Dt = jt.appendChild(a.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function (e) { return x.access(this, function (e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) }, append: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.appendChild(e) } }) }, prepend: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = e ? x.filter(e, this) : this, i = 0; for (; null != (n = r[i]) ; i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]) ; t++) { 1 === e.nodeType && x.cleanData(Ft(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && x.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html: function (e) { return x.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = x.map(this, function (e) { return [e.nextSibling, e.parentNode] }), t = 0; return this.domManip(arguments, function (n) { var r = e[t++], i = e[t++]; i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r)) }, !0), t ? this : this.remove() }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, t, n) { e = d.apply([], e); var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h); if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) { var i = p.eq(r); g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n) }); if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) { for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u); if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, ""))); l = r = null } return this } }); function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function _t(e, t) { var n, r = 0; for (; null != (n = e[r]) ; r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) } function Mt(e, t) { if (1 === t.nodeType && x.hasData(e)) { var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]) } a.data && (a.data = x.extend({}, a.data)) } } function Ot(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) { i = x._data(t); for (r in i.events) x.removeEvent(t, r, i.handle); t.removeAttribute(x.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { x.fn[e] = function (e) { var n, r = 0, i = [], o = x(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get()); return this.pushStack(i) } }); function Ft(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]) ; a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n)); return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s } function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) } x.extend({
        clone: function (e, t, n) { var r, i, o, a, s, l = x.contains(e.ownerDocument, e); if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]) ; ++a) r[a] && Ot(i, r[a]); if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]) ; a++) Mt(i, r[a]); else Mt(e, o); return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) { var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) { s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) } x.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild } else d.push(t.createTextNode(o)); s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; for (; null != (n = e[s]) ; s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({ wrapAll: function (e) { if (x.isFunction(e)) return this.each(function (t) { x(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = x(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return x.isFunction(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = x(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = x.isFunction(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() } }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } x.fn.extend({ css: function (e, n) { return x.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a } return r !== t ? x.style(e, n, r) : x.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { nn(this) ? x(this).show() : x(this).hide() }) } }), x.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, l = x.camelCase(n), u = e.style; if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style; return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l }) : a.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style; return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function ln(e) { var t = a, n = Gt[e]; return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n } function un(e, t) { var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display"); return n.remove(), r } x.each(["height", "width"], function (e, n) { x.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), x(function () { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function (e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) { x.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function (e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) { x.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (x.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; x.fn.extend({ serialize: function () { return x.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function (e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), x.param = function (e, n) { var r, i = [], o = function (e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (x.isArray(t)) x.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(T) || []; if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function (e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u } return s(n.dataTypes[0]) || !o["*"] && s("*") } function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e } x.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, l = e.indexOf(" "); return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { x.fn[t] = function (e) { return this.on(t, e) } }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === b) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === b ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return b || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else C.always(e[C.status]); return this }, abort: function (e) { var t = e || w; return u && u.abort(t), k(0, t), this } }; if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C; l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) C.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort(); w = "abort"; for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]); if (u = qn(jn, p, n, C)) { C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { C.abort("timeout") }, p.timeout)); try { b = 1, u.send(y, k) } catch (N) { if (!(2 > b)) throw N; k(-1, N) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, N = n; 2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop"))) } return C }, getJSON: function (e, t, n) { return x.get(e, t, n, "json") }, getScript: function (e, n) { return x.get(e, t, n, "script") } }), x.each(["get", "post"], function (e, n) { x[n] = function (e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }); function Mn(e, n, r) { var i, o, a, s, l = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in l) if (l[s] && l[s].test(o)) { u.unshift(s); break } if (u[0] in r) a = u[0]; else { for (s in r) { if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== u[0] && u.unshift(a), r[a]) : t } function On(e, t, n, r) { var i, o, a, s, l, u = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) { if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break } if (a !== !0) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o } } } return { state: "success", data: t } } x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = a.head || x("head")[0] || a.documentElement; return { send: function (t, i) { n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } x.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) { if (!n.crossDomain || x.support.cors) { var r; return { send: function (i, o) { var a, s, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s]; n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) { } l.send(n.hasContent && n.data || null), r = function (e, i) { var s, u, c, p; try { if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else { p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText); try { c = l.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, u) }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20; if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1; do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l) } return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n }] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = x.now() } function Zn(e, t, n) { var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; for (; a > o; o++) if (r = i[o].call(n, t, e)) return r } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () { delete l.elem }), l = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; for (; l > a; a++) u.tweens[a].run(o); return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1) }, u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? u.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) u.tweens[n].run(1); return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }), c = u.props; for (tr(c, u.opts.specialEasing) ; a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r; return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) } function tr(e, t) { var n, r, i, o, a; for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } x.Animation = x.extend(er, { tweener: function (e, t) { x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow"); n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () { s.unqueued || l() }), s.unqueued++, u.always(function () { u.always(function () { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (r in t) if (i = t[r], Vn.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue; c[r] = d && d[r] || x.style(e, r) } if (!x.isEmptyObject(c)) { d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () { x(e).hide() }), u.done(function () { var t; x._removeData(e, "fxshow"); for (t in c) x.style(e, t, c[t]) }); for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } x.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function (e, t) { var n = x.fn[t]; x.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), x.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () { var t = er(this, x.extend({}, e), o); (i || x._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && x.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0; for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { x.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function (e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () { var e, n = x.timers, r = 0; for (Xn = x.now() ; n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || x.fx.stop(), Xn = t }, x.fx.timer = function (e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function () { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) { return x.grep(x.timers, function (t) { return e === t.elem }).length }), x.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, x.offset = { setOffset: function (e, t, n) { var r = x.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f; l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u) } }, x.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); x.fn[e] = function (i) { return x.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } x.each({ Height: "height", Width: "width" }, function (e, n) { x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { x.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return x.access(this, function (n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), x.fn.size = function () { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () { return x }))
})(window);

(function ($) {

    $.fn.swapClass = function (removeClass, addClass) {
        return this.each(function () {
            $(this).removeClass(removeClass).addClass(addClass);
        });
    };

    $.fn.ellipsisFill = function (text) {

        return this.each(function () {

            var $self = $(this);

            $self.empty();

            $self.spanElem = $('<span title="' + text + '"></span>');
            $self.append($self.spanElem);

            $self.css('overflow', 'hidden');
            $self.spanElem.css('white-space', 'nowrap');

            $self.spanElem.html(text);

            // get the width of the span.
            // if it's wider than the container, remove a word until it's not.
            if ($self.spanElem.width() > $self.width()) {
                var lastText;

                while ($self.spanElem.width() > $self.width()) {
                    var t = $self.spanElem.html();

                    t = t.substring(0, t.lastIndexOf(' ')) + '&hellip;';

                    if (t == lastText) break;

                    $self.spanElem.html(t);

                    lastText = t;
                }
            }
        });
    };

    $.fn.ellipsisFixed = function (chars, buttonText) {

        return this.each(function () {

            var $self = $(this);

            var text = $self.text();

            $self.empty();

            var $span = $('<span></span>');

            var $ellipsis = $('<a href="#" title="more" class="ellipsis"></a>');

            if (buttonText) {
                $ellipsis.html(buttonText);
            } else {
                $ellipsis.html('&hellip;');
            }

            $ellipsis.click(function (e) {
                e.preventDefault();

                var $this = $(this);

                $span.html(text);

                $this.remove();
            });

            if (text.length > chars) {
                var trimmedText = text.substr(0, chars);
                trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")));

                $span.html(trimmedText + "&nbsp;");

                $span.append($ellipsis);
            } else {
                $span.html(text);
            }

            $self.append($span);
        });

    };

    $.fn.toggleExpandText = function (chars) {

        return this.each(function () {

            var $self = $(this);

            var expandedText = $self.text();

            if (chars > expandedText.length) return;

            var expanded = false;

            var collapsedText = expandedText.substr(0, chars);
            collapsedText = collapsedText.substr(0, Math.min(collapsedText.length, collapsedText.lastIndexOf(" ")));

            $self.toggle = function() {
                $self.empty();

                var $toggleButton = $('<a href="#" class="toggle"></a>');

                if (expanded) {
                    $self.html(expandedText + "&nbsp;");
                    $toggleButton.text("less");
                } else {
                    $self.html(collapsedText + "&nbsp;");
                    $toggleButton.text("more");
                }

                $toggleButton.one('click', function(e) {
                    e.preventDefault();

                    $self.toggle();
                });

                expanded = !expanded;

                $self.append($toggleButton);
            };

            $self.toggle();
        });

    };

    $.fn.ellipsis = function (chars) {

        return this.each(function () {

            var $self = $(this);

            var text = $self.text();

            if (text.length > chars) {
                var trimmedText = text.substr(0, chars);
                trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")))

                $self.empty().html(trimmedText + "&hellip;");
            }
        });

    };
    
    // useful if stretching to fit a parent element's inner height.
    // borders/margins/padding are included in final height, so no overspill.
    $.fn.actualHeight = function (height) {

        return this.each(function () {

            var $self = $(this);

            $self.height(height);

            height -= $self.outerHeight(true) - $self.height();

            $self.height(height);
        });
    };

    $.fn.actualWidth = function (width) {

        return this.each(function () {

            var $self = $(this);

            $self.width(width);

            width -= $self.outerWidth(true) - $self.width();

            $self.width(width);
        });
    };

})(jQuery);

(function ($) {
    var on = $.fn.on, timer;
    $.fn.on = function () {
        var args = Array.apply(null, arguments);
        var last = args[args.length - 1];

        if (isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);

        var delay = args.pop();
        var fn = args.pop();

        args.push(function () {
            var self = this, params = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(self, params);
            }, delay);
        });

        return on.apply(this, args);
    };
})(jQuery);
define("plugins", ["jquery"], function(){});

/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function (n) { var u = n({}); n.subscribe = function () { u.on.apply(u, arguments) }, n.unsubscribe = function () { u.off.apply(u, arguments) }, n.publish = function () { u.trigger.apply(u, arguments) } })(jQuery);
define("pubsub", ["jquery"], function(){});

(function (n, t, i) {  function it(n, t) { t && t.onError && t.onError(n) === !1 || (this.name = "JsRender Error", this.message = n || "JsRender error") } function o(n, t) { var i; n = n || {}; for (i in t) n[i] = t[i]; return n } function ct(n, t, i) { return (!k.rTag || arguments.length) && (a = n ? n.charAt(0) : a, v = n ? n.charAt(1) : v, f = t ? t.charAt(0) : f, h = t ? t.charAt(1) : h, w = i || w, n = "\\" + a + "(\\" + w + ")?\\" + v, t = "\\" + f + "\\" + h, l = "(?:(?:(\\w+(?=[\\/\\s\\" + f + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + f + "]|\\" + f + "(?!\\" + h + "))*?)", k.rTag = l + ")", l = new RegExp(n + l + "(\\/)?|(?:\\/(\\w+)))" + t, "g"), et = new RegExp("<.*>|([^\\\\]|^)[{}]|" + n + ".*" + t)), [a, v, f, h, w] } function ei(n, t) { t || (t = n, n = i); var e, f, o, u, r = this, s = !t || t === "root"; if (n) { if (u = r.type === t ? r : i, !u) if (e = r.views, r._.useKey) { for (f in e) if (u = e[f].get(n, t)) break } else for (f = 0, o = e.length; !u && f < o; f++) u = e[f].get(n, t) } else if (s) while (r.parent.parent) u = r = r.parent; else while (r && !u) u = r.type === t ? r : i, r = r.parent; return u } function lt() { var n = this.get("item"); return n ? n.index : i } function oi(n, t) { var u, f = this, r = t && t[n] || (f.ctx || {})[n]; return r = r === i ? f.getRsc("helpers", n) : r, r && typeof r == "function" && (u = function () { return r.apply(f, arguments) }, o(u, r)), u || r } function si(n, t, u) { var h, f, o, e = +u === u && u, s = t.linkCtx; return e && (u = (e = t.tmpl.bnds[e - 1])(t.data, t, r)), o = u.args[0], (n || e) && (f = s && s.tag || { _: { inline: !s }, tagName: n + ":", flow: !0, _is: "tag" }, f._.bnd = e, s && (s.tag = f, u.ctx = c(u.ctx, s.view.ctx)), f.tagCtx = u, u.view = t, f.ctx = u.ctx || {}, delete u.ctx, t._.tag = f, n = n !== "true" && n, n && ((h = t.getRsc("converters", n)) || p("Unknown converter: {{" + n + ":")) && (f.depends = h.depends, o = h.apply(f, u.args)), o = e && t._.onRender ? t._.onRender(o, t, e) : o, t._.tag = i), o } function hi(n, t) { for (var e = this, u = r[n], f = u && u[t]; f === i && e;) u = e.tmpl[n], f = u && u[t], e = e.parent; return f } function ci(n, t, u, f) { var ft, s, et, nt, k, l, tt, it, h, d, y, ot, v, ut, w = "", g = +f === f && f, a = t.linkCtx || 0, b = t.ctx, st = u || t.tmpl, ht = t._; for (n._is === "tag" && (s = n, n = s.tagName), g && (f = (ot = st.bnds[g - 1])(t.data, t, r)), tt = f.length, s = s || a.tag, l = 0; l < tt; l++) h = f[l], y = h.tmpl, y = h.content = y && st.tmpls[y - 1], u = h.props.tmpl, l || u && s || (v = t.getRsc("tags", n) || p("Unknown tag: {{" + n + "}}")), u = u || (s ? s : v).template || y, u = "" + u === u ? t.getRsc("templates", u) || e(u) : u, o(h, { tmpl: u, render: rt, index: l, view: t, ctx: c(h.ctx, b) }), s || (v._ctr ? (s = new v._ctr, ut = !!s.init, s.attr = s.attr || v.attr || i) : s = { render: v.render }, s._ = { inline: !a }, a && (a.attr = s.attr = a.attr || s.attr, a.tag = s, s.linkCtx = a), (s._.bnd = ot || a) && (s._.arrVws = {}), s.tagName = n, s.parent = k = b && b.tag, s._is = "tag", s._def = v), ht.tag = s, h.tag = s, s.tagCtxs = f, s.flow || (d = h.ctx = h.ctx || {}, et = s.parents = d.parentTags = b && c(d.parentTags, b.parentTags) || {}, k && (et[k.tagName] = k), d.tag = s); for (s.rendering = {}, l = 0; l < tt; l++) h = s.tagCtx = f[l], s.ctx = h.ctx, !l && ut && (s.init(h, a, s.ctx), ut = i), (ft = s.render) && (it = ft.apply(s, h.args)), w += it !== i ? it : h.tmpl ? h.render() : ""; return delete s.rendering, s.tagCtx = s.tagCtxs[0], s.ctx = s.tagCtx.ctx, s._.inline && (nt = s.attr) && nt !== "html" && (w = nt === "text" ? wt.html(w) : ""), g && t._.onRender ? t._.onRender(w, t, g) : w } function b(n, t, r, u, f, e, o, s) { var c, l, a, y = t === "array", v = { key: 0, useKey: y ? 0 : 1, id: "" + fi++, onRender: s, bnds: {} }, h = { data: u, tmpl: f, content: o, views: y ? [] : {}, parent: r, ctx: n, type: t, get: ei, getIndex: lt, getRsc: hi, hlp: oi, _: v, _is: "view" }; return r && (c = r.views, l = r._, l.useKey ? (c[v.key = "_" + l.useKey++] = h, a = l.tag, v.bnd = y && (!a || !!a._.bnd && a)) : c.splice(v.key = h.index = e !== i ? e : c.length, 0, h), h.ctx = n || r.ctx), h } function li(n) { var t, i, r, u, f; for (t in y) if (u = y[t], (f = u.compile) && (i = n[t + "s"])) for (r in i) i[r] = f(r, i[r], n, t, u) } function ai(n, t, i) { var u, r; return typeof t == "function" ? t = { depends: t.depends, render: t } : ((r = t.template) && (t.template = "" + r === r ? e[r] || e(r) : r), t.init !== !1 && (u = t._ctr = function () { }, (u.prototype = t).constructor = u)), i && (t._parentTmpl = i), t } function at(r, u, f, o, s, h) { function v(i) { if ("" + i === i || i.nodeType > 0) { try { a = i.nodeType > 0 ? i : !et.test(i) && t && t(n.document).find(i)[0] } catch (u) { } return a && (i = a.getAttribute(ht), r = r || i, i = e[i], i || (r = r || "_" + ui++, a.setAttribute(ht, r), i = e[r] = at(r, a.innerHTML, f, o, s, h))), i } } var l, a; return u = u || "", l = v(u), h = h || (u.markup ? u : {}), h.tmplName = r, f && (h._parentTmpl = f), !l && u.markup && (l = v(u.markup)) && l.fn && (l.debug !== u.debug || l.allowCode !== u.allowCode) && (l = l.markup), l !== i ? (r && !f && (tt[r] = function () { return u.render.apply(u, arguments) }), l.fn || u.fn ? l.fn && (u = r && r !== l.tmplName ? c(h, l) : l) : (u = vt(l, h), ut(l, u)), li(h), u) : void 0 } function vt(n, t) { var i, f = d.wrapMap || {}, r = o({ markup: n, tmpls: [], links: {}, tags: {}, bnds: [], _is: "template", render: rt }, t); return t.htmlTag || (i = ii.exec(n), r.htmlTag = i ? i[1].toLowerCase() : ""), i = f[r.htmlTag], i && i !== f.div && (r.markup = u.trim(r.markup), r._elCnt = !0), r } function vi(n, t) { function u(e, o, s) { var l, h, a, c; if (e && "" + e !== e && !e.nodeType && !e.markup) { for (a in e) u(a, e[a], o); return r } return o === i && (o = e, e = i), e && "" + e !== e && (s = o, o = e, e = i), c = s ? s[f] = s[f] || {} : u, h = t.compile, (l = k.onBeforeStoreItem) && (h = l(c, e, o, h) || h), e ? o === null ? delete c[e] : c[e] = h ? o = h(e, o, s, n, t) : o : o = h(i, o), h && o && (o._is = n), (l = k.onStoreItem) && l(c, e, o, h), o } var f = n + "s"; r[f] = u, y[n] = t } function rt(n, t, f, o, s, h) { var w, ut, nt, v, tt, it, rt, k, y, ft, d, et, a, l = this, ot = !l.attr || l.attr === "html", g = ""; if (o === !0 && (rt = !0, o = 0), l.tag ? (k = l, l = l.tag, ft = l._, et = l.tagName, a = k.tmpl, t = c(t, l.ctx), y = k.content, k.props.link === !1 && (t = t || {}, t.link = !1), f = f || k.view, n = n === i ? f : n) : a = l.jquery && (l[0] || p('Unknown template: "' + l.selector + '"')) || l, a && (!f && n && n._is === "view" && (f = n), f && (y = y || f.content, h = h || f._.onRender, n === f && (n = f.data, s = !0), t = c(t, f.ctx)), f && f.data !== i || ((t = t || {}).root = n), a.fn || (a = e[a] || e(a)), a)) { if (h = (t && t.link) !== !1 && ot && h, d = h, h === !0 && (d = i, h = f._.onRender), u.isArray(n) && !s) for (v = rt ? f : o !== i && f || b(t, "array", f, n, a, o, y, h), w = 0, ut = n.length; w < ut; w++) nt = n[w], tt = b(t, "item", v, nt, a, (o || 0) + w, y, h), it = a.fn(nt, tt, r), g += v._.onRender ? v._.onRender(it, tt) : it; else v = rt ? f : b(t, et || "data", f, n, a, o, y, h), ft && !l.flow && (v.tag = l), g += a.fn(n, v, r); return d ? d(g, v) : g } return "" } function p(n) { throw new r.sub.Error(n); } function s(n) { p("Syntax error\n" + n) } function ut(n, t, i, r) { function v(t) { t -= f, t && h.push(n.substr(f, t).replace(nt, "\\n")) } function c(t) { t && s('Unmatched or missing tag: "{{/' + t + '}}" in template:\n' + n) } function y(e, l, y, w, b, k, d, g, tt, it, rt, ut) { k && (b = ":", w = "html"), it = it || i; var at, st, ht = l && [], ot = "", et = "", ct = "", lt = !it && !b && !d; y = y || b, v(ut), f = ut + e.length, g ? p && h.push(["*", "\n" + tt.replace(dt, "$1") + "\n"]) : y ? (y === "else" && (ti.test(tt) && s('for "{{else if expr}}" use "{{else expr}}"'), ht = u[6], u[7] = n.substring(u[7], ut), u = o.pop(), h = u[3], lt = !0), tt && (tt = tt.replace(nt, " "), ot = ft(tt, ht, t).replace(ni, function (n, t, i) { return t ? ct += i + "," : et += i + ",", "" })), et = et.slice(0, -1), ot = ot.slice(0, -1), at = et && et.indexOf("noerror:true") + 1 && et || "", a = [y, w || !!r || "", ot, lt && [], 'params:"' + tt + '",props:{' + et + "}" + (ct ? ",ctx:{" + ct.slice(0, -1) + "}" : ""), at, ht || 0], h.push(a), lt && (o.push(u), u = a, u[7] = f)) : rt && (st = u[0], c(rt !== st && st !== "else" && rt), u[7] = n.substring(u[7], ut), u = o.pop()), c(!u && rt), h = u[3] } var a, p = t && t.allowCode, e = [], f = 0, o = [], h = e, u = [, , , e]; return n = n.replace(gt, "\\$&"), c(o[0] && o[0][3].pop()[0]), n.replace(l, y), v(n.length), (f = e[e.length - 1]) && c("" + f !== f && +f[7] === f[7] && f[0]), yt(e, i ? n : t, i) } function yt(n, i, r) { var c, f, e, l, a, y, st, ht, ct, lt, ft, p, o, et, v, tt, w, it, at, b, pt, wt, ot, rt, k, h = 0, u = "", g = "", ut = {}, bt = n.length; for ("" + i === i ? (v = r ? 'data-link="' + i.replace(nt, " ").slice(1, -1) + '"' : i, i = 0) : (v = i.tmplName || "unnamed", i.allowCode && (ut.allowCode = !0), i.debug && (ut.debug = !0), p = i.bnds, et = i.tmpls), c = 0; c < bt; c++) if (f = n[c], "" + f === f) u += '\nret+="' + f + '";'; else if (e = f[0], e === "*") u += "" + f[1]; else { if (l = f[1], a = f[2], it = f[3], y = f[4], g = f[5], at = f[7], (wt = e === "else") || (h = 0, p && (o = f[6]) && (h = p.push(o))), (ot = e === ":") ? (l && (e = l === "html" ? ">" : l + e), g && (rt = "prm" + c, g = "try{var " + rt + "=[" + a + "][0];}catch(e){" + rt + '="";}\n', a = rt)) : (it && (tt = vt(at, ut), tt.tmplName = v + "/" + e, yt(it, tt), et.push(tt)), wt || (w = e, pt = u, u = ""), b = n[c + 1], b = b && b[0] === "else"), y += ",args:[" + a + "]}", ot && o || l && e !== ">") { if (k = new Function("data,view,j,u", " // " + v + " " + h + " " + e + "\n" + g + "return {" + y + ";"), k.paths = o, k._ctxs = e, r) return k; ft = 1 } if (u += ot ? "\n" + (o ? "" : g) + (r ? "return " : "ret+=") + (ft ? (ft = 0, lt = !0, 'c("' + l + '",view,' + (o ? (p[h - 1] = k, h) : "{" + y) + ");") : e === ">" ? (ht = !0, "h(" + a + ");") : (ct = !0, "(v=" + a + ")!=" + (r ? "=" : "") + 'u?v:"";')) : (st = !0, "{tmpl:" + (it ? et.length : "0") + "," + y + ","), w && !b) { if (u = "[" + u.slice(0, -1) + "]", (r || o) && (u = new Function("data,view,j,u", " // " + v + " " + h + " " + w + "\nreturn " + u + ";"), o && ((p[h - 1] = u).paths = o), u._ctxs = e, r)) return u; u = pt + '\nret+=t("' + w + '",view,this,' + (h || u) + ");", o = 0, w = 0 } } u = "// " + v + "\nvar j=j||" + (t ? "jQuery." : "js") + "views" + (ct ? ",v" : "") + (st ? ",t=j._tag" : "") + (lt ? ",c=j._cnvt" : "") + (ht ? ",h=j.converters.html" : "") + (r ? ";\n" : ',ret="";\n') + (d.tryCatch ? "try{\n" : "") + (ut.debug ? "debugger;" : "") + u + (r ? "\n" : "\nreturn ret;\n") + (d.tryCatch ? "\n}catch(e){return j._err(e);}" : ""); try { u = new Function("data,view,j,u", u) } catch (kt) { s("Compiled template code:\n\n" + u, kt) } return i && (i.fn = u), u } function ft(n, t, i) { function b(b, k, d, g, nt, tt, it, rt, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, kt) { function gt(n, i, r, f, o, s, h) { if (i && (t && (u === "linkTo" && (e = t.to = t.to || [], e.push(nt)), (!u || l) && t.push(nt)), i !== ".")) { var c = (r ? 'view.hlp("' + r + '")' : f ? "view" : "data") + (h ? (o ? "." + o : r ? "" : f ? "" : "." + i) + (s || "") : (h = r ? "" : f ? o || "" : i, "")); return c = c + (h ? "." + h : ""), c.slice(0, 9) === "view.data" ? c.slice(5) : c } return n } var dt; if (tt = tt || "", d = d || k || ht, nt = nt || et, ot = ot || yt || "", it) s(n); else return t && vt && !c && !o && (!u || l || e) && (dt = p[r], kt.length - 2 > wt - dt && (dt = kt.slice(dt, wt + 1), vt = v + ":" + dt + f, vt = w[vt] = w[vt] || ut(a + vt + h, i, !0), vt.paths || ft(dt, vt.paths = [], i), (e || t).push({ _jsvOb: vt }))), c ? (c = !ct, c ? b : '"') : o ? (o = !lt, o ? b : '"') : (d ? (r++, p[r] = wt++, d) : "") + (pt ? r ? "" : u ? (u = l = e = !1, "\b") : "," : rt ? (r && s(n), u = nt, l = g, "\b" + nt + ":") : nt ? nt.split("^").join(".").replace(bt, gt) + (ot ? (y[++r] = !0, nt.charAt(0) !== "." && (p[r] = wt), ot) : tt) : tt ? tt : at ? (y[r--] = !1, at) + (ot ? (y[++r] = !0, ot) : "") : st ? (y[r] || s(n), ",") : k ? "" : (c = ct, o = lt, '"')) } var u, e, l, w = i.links, y = {}, p = { 0: -1 }, r = 0, o = !1, c = !1; return (n + " ").replace(kt, b) } function c(n, t) { return n && n !== t ? t ? o(o({}, t), n) : n : t && o({}, t) } function pt(n) { return st[n] || (st[n] = "&#" + n.charCodeAt(0) + ";") } if ((!t || !t.views) && !n.jsviews) { var u, g, l, et, a = "{", v = "{", f = "}", h = "}", w = "^", bt = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g, kt = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^)|[)\]])([([]?))|(\s+)/g, nt = /[ \t]*(\r\n|\n|\r)/g, dt = /\\(['"])/g, gt = /['"\\]/g, ni = /\x08(~)?([^\x08]+)\x08/g, ti = /^if\s/, ii = /<(\w+)[>\s]/, ot = /[\x00`><"'&]/g, ri = ot, ui = 0, fi = 0, st = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\x00": "&#0;", "'": "&#39;", '"': "&#34;", "`": "&#96;" }, ht = "data-jsv-tmpl", tt = {}, y = { template: { compile: at }, tag: { compile: ai }, helper: {}, converter: {} }, r = { jsviews: "v1.0.0-beta", render: tt, settings: { delimiters: ct, debugMode: !0, tryCatch: !0 }, sub: { View: b, Error: it, tmplFn: ut, parse: ft, extend: o, error: p, syntaxError: s }, _cnvt: si, _tag: ci, _err: function (n) { return d.debugMode ? "Error: " + (n.message || n) + ". " : "" } }; (it.prototype = new Error).constructor = it, lt.depends = function () { return [this.get("item"), "index"] }; for (g in y) vi(g, y[g]); var e = r.templates, wt = r.converters, pi = r.helpers, yi = r.tags, k = r.sub, d = r.settings; t ? (u = t, u.fn.render = rt) : (u = n.jsviews = {}, u.isArray = Array && Array.isArray || function (n) { return Object.prototype.toString.call(n) === "[object Array]" }), u.render = tt, u.views = r, u.templates = e = r.templates, yi({ "else": function () { }, "if": { render: function (n) { var t = this; return t.rendering.done || !n && (arguments.length || !t.tagCtx.index) ? "" : (t.rendering.done = !0, t.selected = t.tagCtx.index, t.tagCtx.render()) }, onUpdate: function (n, t, i) { for (var r, f, u = 0; (r = this.tagCtxs[u]) && r.args.length; u++) if (r = r.args[0], f = !r != !i[u].args[0], !!r || f) return f; return !1 }, flow: !0 }, "for": { render: function (n) { var t = this, f = t.tagCtx, e = !arguments.length, r = "", o = e || 0; return t.rendering.done || (e ? r = i : n !== i && (r += f.render(n), o += u.isArray(n) ? n.length : 1), (t.rendering.done = o) && (t.selected = f.index)), r }, onArrayChange: function (n, t) { var i, u = this, r = t.change; if (this.tagCtxs[1] && (r === "insert" && n.target.length === t.items.length || r === "remove" && !n.target.length || r === "refresh" && !t.oldItems.length != !n.target.length)) this.refresh(); else for (i in u._.arrVws) i = u._.arrVws[i], i.data === n.target && i._.onArrayChange.apply(i, arguments); n.done = !0 }, flow: !0 }, include: { flow: !0 }, "*": { render: function (n) { return n }, flow: !0 } }), wt({ html: function (n) { return n != i ? String(n).replace(ri, pt) : "" }, attr: function (n) { return n != i ? String(n).replace(ot, pt) : n === null ? null : "" }, url: function (n) { return n != i ? encodeURI(String(n)) : n === null ? null : "" } }), ct() } })(this, this.jQuery), function (n, t, i) {  function v(n) { return h(n) ? new nt(n) : new g(n) } function g(n) { return this._data = n, this } function nt(n) { return this._data = n, this } function c(n) { return h(n) ? [n] : n } function b(n) { if (typeof n != "number") throw "Invalid index."; } function ft(n, t) { n = h(n) ? n : [n]; for (var i, u = t, e = u, s = n.length, r = [], o = 0; o < s; o++) { if (i = n[o], f(i)) { y.apply(r, [r.length, 1].concat(ft(i.call(t, t), t))); continue } else if ("" + i !== i) { t = e = i, e !== u && r.push(u = e); continue } e !== u && r.push(u = e), r.push(i) } return r } function et(n, t) { var r, i; for (r in n) { i = !0; break } i || delete w[t] } function k(n, t) { if (!(n.data && n.data.off)) { var r = t.oldValue, i = n.data; n.type === a ? i.cb.array(n, t) : (i.prop === "*" || i.prop === t.path) && (typeof r === p && d(c(r), i.path, i.cb), typeof (r = t.value) === p && e(c(r), i.path, i.cb), i.cb(n, t)) } } function e() { function ni(i, f, e, o) { var h = ut(n), y = c(n); if (u = 0, b || o) h && (t(y).off(i, k), u && delete u[t.data(n, "obId")]); else { if (s = h && t._data(n)) for (s = s && s.events, s = s && s[e ? a : l], yt = s && s.length; yt--;) if ((tt = s[yt].data) && tt.cb === r) { if (e) return; f === "*" && tt.prop !== f && (t(n).off(i + "." + tt.prop, k), u && delete u[t.data(n, "obId")]) } t(y).on(i, null, e ? { cb: r } : { path: f, prop: v, cb: r }, k); kt && (kt[t.data(n, "obId") || t.data(n, "obId", ht++)] = n) } } function fi(n, t) { n._ob = it(n, lt); var i = lt; return function () { var u = n._ob, f = t.length; typeof u === p && (gt(u, !0), f && d(c(u), t, r, it)), u = n._ob = it(n, i), typeof u === p && (gt(u), f && e(c(u), t, r, it, i)) } } function gt(t, u) { if (r && r.array && h(t)) { var f = n; n = t, ni(a + ".observe.obs" + r._bnd, i, !0, u), n = f } } var vt, nt, v, o, wt, n, b, r, bt, yt, tt, s, it, ti, kt, dt, ri, ui = 1, ii = rt, g = ot.apply([], arguments), st = g.pop(), lt = g[0], pt = "" + lt !== lt ? g.shift() : i, at = g.length; for (lt = pt, f(st) ? r = st : (st === !0 ? b = st : st && (lt = st, ui = 0), st = g[at - 1], (at && st === i || f(st)) && (r = g.pop(), at--)), f(g[at - 1]) && (it = r, r = g.pop(), at--), ii += b ? r ? ".obs" + r._bnd : "" : ".obs" + (bt = r._bnd = r._bnd || ct++), b && at === 0 && pt && t(pt).off(rt, k), b || (kt = w[bt] = w[bt] || {}), dt = 0, vt = 0; vt < at; vt++) { if (o = g[vt], gt(n, b), n = pt, "" + o === o) { if (nt = o.split("^"), nt[1] && (dt = nt[0].split(".").length, o = nt.join("."), dt = o.split(".").length - dt), it && (ti = it(o, pt))) { at += ti.length - 1, y.apply(g, [vt--, 1].concat(ti)); continue } nt = o.split(".") } else ui && !f(o) && (o._jsvOb && (b || (o._cb = ri = fi(o, g.slice(vt + 1)), o._rt = lt, ri._bnd = r._bnd), e(o._rt, g.slice(0, vt), o._cb, it, b), o = o._ob), n = o), pt = o, nt = [pt]; while (n && typeof n == "object" && (v = nt.shift()) !== i) { if ("" + v === v) { if (v === "") continue; if (nt.length < dt + 1 && !n.nodeType) { if (!b && (s = ut(n) && t._data(n))) { for (s = s.events, s = s && s.propertyChange, yt = s && s.length; yt--;) if (tt = s[yt].data, tt && tt.cb === r && (tt.prop === v && tt.path === nt.join(".") || tt.prop === "*")) break; if (yt > -1) { n = n[v]; continue } } if (v === "*") { f(n) ? (wt = n.depends) && e(wt, r, b || lt) : ni(ii, v); break } else !v || f(wt = n[v]) && wt.depends || ni(ii + "." + v, nt.join(".")) } v = v ? n[v] : n } if (f(v)) { (wt = v.depends) && e(n, ft(wt, n), r, it, b || c(lt)); break } n = v } } return gt(n, b), bt && et(kt, bt), { cbId: bt, bnd: kt, leaf: n } } function d() { return [].push.call(arguments, !0), e.apply(this, arguments) } if (!t) throw "requires jQuery or JsRender"; if (!t.observable) { var u, tt, o, r, it = t.event.special, s = t.views ? t.views.sub : {}, y = [].splice, ot = [].concat, h = t.isArray, st = t.expando, p = "object", l = s.propChng = s.propChng || "propertyChange", a = s.arrChng = s.arrChng || "arrayChange", w = s._cbBnds = s._cbBnds || {}, rt = l + ".observe", f = t.isFunction, ht = 1, ct = 1, ut = t.hasData; t.observable = v, v.Object = g, v.Array = nt, v.observe = e, v.unobserve = d, g.prototype = { _data: null, data: function () { return this._data }, observe: function (n, t) { return e(this._data, n, t) }, unobserve: function (n, t) { return d(this._data, n, t) }, setProperty: function (n, t, r) { var u, s, o, f = this, e = f._data; if (n = n || "", e) if (h(n)) for (u = n.length; u--;) s = n[u], f.setProperty(s.name, s.value, r === i || r); else if ("" + n !== n) for (u in n) f.setProperty(u, n[u], t); else if (n.indexOf(st) < 0) { for (o = n.split(".") ; e && o.length > 1;) e = e[o.shift()]; f._setProperty(e, o.join("."), t, r) } return f }, _setProperty: function (n, t, i, r) { var e, o, u = t ? n[t] : n; f(u) && u.set && (o = u, e = u.set === !0 ? u : u.set, u = u.call(n)), (u !== i || r && u != i) && (!(u instanceof Date) || u > i || u < i) && (e ? (e.call(n, i), i = o.call(n)) : n[t] = i, this._trigger(n, { path: t, value: i, oldValue: u })) }, _trigger: function (n, i) { t(n).triggerHandler(l, i) } }, nt.prototype = { _data: null, data: function () { return this._data }, insert: function (n, t) { return b(n), arguments.length > 1 && (t = h(t) ? t : [t], t.length && this._insert(n, t)), this }, _insert: function (n, t) { r = this._data, o = r.length, y.apply(r, [n, 0].concat(t)), this._trigger({ change: "insert", index: n, items: t }) }, remove: function (n, t) { if (b(n), t = t === i || t === null ? 1 : t, t && n > -1) { var r = this._data.slice(n, n + t); t = r.length, t && this._remove(n, t, r) } return this }, _remove: function (n, t, i) { r = this._data, o = r.length, r.splice(n, t), this._trigger({ change: "remove", index: n, items: i }) }, move: function (n, t, r) { if (b(n), b(t), r = r === i || r === null ? 1 : r, r) { var u = this._data.slice(n, n + r); this._move(n, t, r, u) } return this }, _move: function (n, t, i, u) { r = this._data, o = r.length, r.splice(n, i), r.splice.apply(r, [t, 0].concat(u)), this._trigger({ change: "move", oldIndex: n, index: t, items: u }) }, refresh: function (n) { var t = this._data.slice(0); return this._refresh(t, n), this }, _refresh: function (n, t) { r = this._data, o = r.length, y.apply(r, [0, r.length].concat(t)), this._trigger({ change: "refresh", oldItems: n }) }, _trigger: function (n) { var i = r.length, u = t([r]); u.triggerHandler(a, n), i !== o && u.triggerHandler(l, { path: "length", value: i, oldValue: o }) } }, it[l] = it[a] = { remove: function (n) { (n = n.data) && (n.off = 1, n = n.cb) && (u = w[tt = n._bnd]) }, teardown: function () { u && (delete u[t.data(this, "obId")], et(u, tt)) } } } }(this, this.jQuery || this.jsviews), function (n, t, i) {  function bi(n) { var p, w, v, h, f, c, a, l, b, s, k, g, tt, ut, it, rt, u, y = n.target, o = y._jsvBnd; if (o) for (g = o.slice(1).split("&"), tt = g.length; tt--;) (k = e[g[tt]]) && (o = k.to) && (h = k.linkCtx, s = h.view, u = h.tag, b = t(y), it = s.hlp(lt, h.ctx), rt = s.hlp(at, h.ctx), v = bt(y), p = li[v], f = d(v) ? v(y) : p ? b[p]() : b.attr(v), a = o[1], o = o[0], a && (d(a) ? c = a : (c = s.tmpl.converters, c = c && c[a] || r.converters[a])), c && (f = c.call(u, f)), ut = s.linkCtx, s.linkCtx = h, it && (w = it.call(s, n, f) === !1) || u && u.onBeforeChange && (w = u.onBeforeChange(n, f) === !1) || f === i || (u && u.onChange && (f = u.onChange(f)), l = o[0], f !== i && l && (l = l._jsvOb ? l._ob : l, u && (u._.chging = !0), nt(l).setProperty(o[2] || o[1], f), u && delete u._.chging, rt && rt.call(h, n))), s.linkCtx = ut, w && n.stopImmediatePropagation()) } function iu(n, u, f) { var o, w, b, e, tt, s, it, rt, ut, c = this, v = c.data, l = c.elem, a = c.convert, y = "attr", ft = l.parentNode, et = ft, p = t(l), h = c.view, ot = h.ctx, k = h.linkCtx, nt = h.hlp(lt); if (h.linkCtx = c, h.ctx = c.ctx, ft && (!nt || !(u && nt.call(c, n, u) === !1)) && !(u && n.data.prop !== "*" && n.data.prop !== u.path)) { if (u && (c.eventArgs = u), !n || u || c._initVal) { if (delete c._initVal, e = f.call(h.tmpl, v, h, r), o = c.attr || bt(l, !0, a !== i), s = c.tag) { if (s._.chging || u && s.onUpdate && s.onUpdate(n, u, e) === !1 || o === "none") { kt(c, v, l), h.linkCtx = k; return } e = s.tagName.slice(-1) === ":" ? r._cnvt(s.tagName.slice(0, -1), h, e) : r._tag(s, h, h.tmpl, e) } else f._ctxs && (a = a === "" ? "true" : a, e = a ? r._cnvt(a, h, e) : r._tag(f._ctxs, h, h.tmpl, e), s = h._.tag, o = c.attr || o); if (s && (s.parentElem = c.expr || s._elCnt ? l : l.parentNode, it = s._prv, rt = s._nxt, o = s.attr || o, s.refresh = or), d(e) && g(c.expr + ": missing parens"), o === "visible" && (o = "css-display", e = e ? ru(l) : "none"), tt = o.lastIndexOf("css-", 0) === 0 && o.substr(4)) (b = t.style(l, tt) !== e) && t.style(l, tt, e); else if (o !== "link") { if (o === "value") l.type === "checkbox" && (e = e && e !== "false", y = "prop", o = "checked"); else if (o === "radio") if (l.value === "" + e) e = !0, y = "prop", o = "checked"; else { kt(c, v, l), h.linkCtx = k; return } else (o === "selected" || o === "disabled" || o === "multiple" || o === "readlonly") && (e = e && e !== "false" ? o : null); if (w = li[o], w) { if (b = s || p[w]() !== e) if (o === "html") if (s) { if (ut = s._.inline, s.refresh(e), !ut && s._.inline) { h.linkCtx = k; return } } else p.empty(), et = l, h.link(v, et, it, rt, e, s && { tag: s._tgId }); else o !== "text" || l.children[0] ? p[w](e) : l.textContent !== i ? l.textContent = e : l.innerText = e === null ? "" : e } else (b = p[y](o) != e) && p[y](o, e === i && y === "attr" ? null : e) } u && b && (nt = h.hlp(at)) && nt.call(c, n, u) } kt(c, v, l), h.linkCtx = k, h.ctx = ot } } function ki(n, t) { var i = this, r = i.hlp(lt), u = i.hlp(at); if (!r || r.call(n, t) !== !1) { if (t) { var o = t.change, f = t.index, e = t.items; switch (o) { case "insert": i.addViews(f, e); break; case "remove": i.removeViews(f, e.length); break; case "move": i.refresh(); break; case "refresh": i.refresh() } } u && u.call(this, n, t) } } function ru(t) { var i, u, e = n.getComputedStyle, r = (t.currentStyle || e.call(n, t, "")).display; return r !== "none" || (r = yi[u = t.nodeName]) || (i = f.createElement(u), f.body.appendChild(i), r = (e ? e.call(n, i, "") : i.currentStyle).display, yi[u] = r, f.body.removeChild(i)), r } function wt(n) { var f, e, u = n.data, r = n._.bnd; if (!n._.useKey && r) if ((e = n._.bndArr) && (t([e[1]]).off(ct, e[0]), n._.bndArr = i), r !== !!r && r._.inline) u ? r._.arrVws[n._.id] = n : delete r._.arrVws[n._.id]; else if (u) { f = function (t) { t.data && t.data.off || ki.apply(n, arguments) }; t([u]).on(ct, f); n._.bndArr = [f, u] } } function bt(n, t, i) { var u = n.nodeName.toLowerCase(), r = o.merge[u]; return r ? t ? u === "input" && n.type === "radio" ? "radio" : r.to.toAttr : r.from.fromAttr : t ? i ? "text" : "html" : "" } function di(n, r, u, f, e, o, s) { var p, c, v, w, b, l = n.parentElem, h = n._prv, a = n._nxt, y = n._elCnt; if (h && h.parentNode !== l && g("Missing parentNode"), s) { w = n.nodes(), y && h && h !== a && ti(h, a, l, n._.id, "_", !0), n.removeViews(i, i, !0), c = a, y && (h = h ? h.previousSibling : a ? a.previousSibling : l.lastChild), t(w).remove(); for (b in n._.bnds) ot(b) } else { if (r) { if (v = f[r - 1], !v) return !1; h = v._nxt } y ? (c = h, h = c ? c.previousSibling : l.lastChild) : c = h.nextSibling } p = u.render(e, o, n, s || r, n._.useKey && s, !0), n.link(e, l, h, c, p, v) } function it(n, t, r) { var u, f, o; return r ? (o = "^`", f = t._.tag || { _: { inline: !0, bnd: r }, tagCtx: { view: t }, flow: !0 }, u = f._tgId, f.refresh = or, u || (e[u = pi++] = f, f._tgId = "" + u)) : (o = "_`", l[u = t._.id] = t), "#" + u + o + (n === i ? "" : n) + "/" + u + o } function kt(n, r, u) { var o, l, h = n.linkedElem, a = n.convertBack, c = n.tag, f = [], s = n._bndId || "" + pi++, v = n._hdlr; if (delete n._bndId, c && (f = c.depends || f, f = d(f) ? c.depends(c) : f), !n._depends || "" + n._depends != "" + f) { if (n._depends && ei(r, n._depends, v, !0), o = ei(t.isArray(r) ? [r] : r, n.fn.paths || n.fn, f, v, n._ctxCb), o.elem = u, o.linkCtx = n, o._tgId = s, u._jsvBnd = u._jsvBnd || "", u._jsvBnd += "&" + s, h) for (o.to = [[], a], l = h.length; l--;) h[l]._jsvBnd = u._jsvBnd; n._depends = f, n.view._.bnds[s] = s, e[s] = o, (h || a !== i) && er(o, a) } } function gi(n, t, i, r, u, f) { return dt(this, n, t, i, r, u, f) } function dt(n, r, u, e, o, s, c) { if (n && r) { if (r = r.jquery ? r : t(r), !p) { p = f.body; t(p).on(si, bi) } for (var w, g, nt, d, y, b, a, k, tt, ut = it, et = e && e.target === "replace", ft = r.length; ft--;) if (a = r[ft], "" + n === n) y = v(a), k = y.ctx, y.ctx = e, rt(n, a, v(a), u), y.ctx = k; else { if (o = o || v(a), n.markup !== i) o.link === !1 && (e = e || {}, e.link = ut = !1), et && (b = a.parentNode), nt = n.render(u, e, o, i, i, ut), b ? (s = a.previousSibling, c = a.nextSibling, t.cleanData([a], !0), b.removeChild(a), a = b) : (s = c = i, t(a).empty()); else if (n !== !0) break; if (a._dfr && !c) { for (d = h(a._dfr, !0, wi), w = 0, g = d.length; w < g; w++) y = d[w], (y = l[y.id]) && y.data !== i && y.parent.removeViews(y._.key, i, !0); a._dfr = "" } tt = o.data, k = o.ctx, o.data = u, o.ctx = e, o.link(u, a, s, c, nt), o.data = tt, o.ctx = k } } return r } function uu(n, r, u, a, p, w) { function ou(n, t, i, r, u, f, e, o, s, h, l, a) { var v = ""; return b = o || s || "", r = r || i || h || a, r && (fi && (i || a) && !wr[lt] && vr("'<" + lt + "... />' in:\n" + p), bi = ft, lt = dr.shift(), ft = pt[lt], bi && (ct += at, at = "", ft ? ct += "-" : (v = (h || "") + ci + "@" + ct + hi + (l || ""), ct = fu.shift()))), ft ? (f ? at += f : t = h || a || "", b && (t += b, at && (t += " " + c + '="' + at + '"', at = ""))) : t = f ? t + v + u + ci + f + hi + e + b : v || n, b && (dr.unshift(lt), lt = b.slice(1), dr[0] === pr[lt] && g('"' + lt + '" has incorrect parent tag'), (ft = pt[lt]) && !bi && (fu.unshift(ct), ct = ""), bi = ft, ct && ft && (ct += "+")), t } function si(n, t) { var s, a, u, o, f, v, h, c = []; if (n) { for (bt = n.length, n.tokens.charAt(0) === "@" && (t = d.previousSibling, d.parentNode.removeChild(d), d = null), bt = n.length; bt--;) { if (ot = n[bt], u = ot.ch, s = ot.path) for (et = s.length - 1; a = s.charAt(et--) ;) a === "+" ? s.charAt(et) === "-" ? (et--, t = t.previousSibling) : t = t.parentNode : t = t.lastChild; u === "^" ? (b = e[f = ot.id]) && (h = t && (!d || d.parentNode !== t), (!d || h) && (b.parentElem = t), ot.elCnt && (ot.open ? t && (t._dfr = "#" + f + u + (t._dfr || "")) : h && (t._dfr = "/" + f + u + (t._dfr || ""))), c.push([h ? null : d, ot])) : (nt = l[f = ot.id]) && (nt.link || (nt.parentElem = t || d && d.parentNode || r, k(nt, st), nt._.onRender = it, nt._.onArrayChange = ki, wt(nt)), o = nt.parentElem, ot.open ? (nt._elCnt = ot.elCnt, t ? t._dfr = "#" + f + u + (t._dfr || "") : (nt._prv || (o._dfr = ut(o._dfr, "#" + f + u)), nt._prv = d)) : (t && (!d || d.parentNode !== t) ? (t._dfr = "/" + f + u + (t._dfr || ""), nt._nxt = i) : d && (nt._nxt || (o._dfr = ut(o._dfr, "/" + f + u)), nt._nxt = d), ui = nt.linkCtx, (v = cu || nt.ctx && nt.ctx.onAfterCreate) && v.call(ui, nt))) } for (bt = c.length; bt--;) gi.push(c[bt]) } return !n || n.elCnt } function su(n) { var t, i; if (bt = n && n.length) for (et = 0; et < bt; et++) if (ot = n[et], vt.id) vt.id = vt.id !== ot.id && vt.id; else if (i = b = e[ot.id].linkCtx.tag, !b.flow) { if (!sr) { for (t = 1; i = i.parent;) t++; pi = pi || t } (sr || t === pi) && (!hr || b.tagName === hr) && or.push(b) } } function gr() { for (nr = yt ? r.querySelectorAll(tt) : t(tt, r).get(), ti = nr.length, u && (li = yt ? u.querySelectorAll(tt) : t(tt, u).get(), u = li.length ? li[li.length - 1] : u), pi = 0, kt = 0; kt < ti; kt++) if (d = nr[kt], u && !ru) ru = d === u; else if (a && d === a) break; else d.parentNode && eu(h(d, i, or && nu)) && d.getAttribute(y) && gi.push([d]); if (tr(u, ft), tr(a, ft), vt) { dt && dt.resolve(); return } for (ft && ct + at && (d = a, ct && (a ? si(h(ct + "+", !0), a) : si(h(ct, !0), r)), si(h(at, !0), r), a && (ht = a.getAttribute(c), (ti = ht.indexOf(di) + 1) && (ht = ht.slice(ti + di.length - 1)), a.setAttribute(c, at + ht))), ti = gi.length, kt = 0; kt < ti; kt++) d = gi[kt], ni = d[1], d = d[0], ni ? (b = e[ni.id], ui = b.linkCtx, b = ui ? ui.tag : b, ni.open ? (d && (b.parentElem = d.parentNode, b._prv = d), b._elCnt = ni.elCnt, !b || b.onBeforeLink && b.onBeforeLink() === !1 || b._.bound || (b._.bound = !0, nt = b.tagCtx.view, rt(i, b._prv, nt, nt.data || n, ni.id)), b._.linking = !0) : (b._nxt = d, b._.linking && (lr = b.tagCtx, nt = lr.view, b.contents = rr, b.nodes = ur, b.childTags = fr, delete b._.linking, gt(b, lr), b._.bound || (b._.bound = !0, rt(i, b._prv, nt, nt.data || n, ni.id))))) : (nt = v(d), rt(d.getAttribute(y), d, nt, nt.data || n)); dt && dt.resolve() } var ui, b, kt, ti, et, bt, nr, d, nt, ot, ni, li, ai, er, yi, ii, or, sr, hr, lr, pi, vt, tu, ar, iu, ei, lt, oi, wi, ht, ft, bi, ri, at, di, ru, dt, hu = o.noDomLevel0, br = this, uu = br._.id + "_", ct = "", gi = [], dr = [], fu = [], cu = br.hlp(cr), eu = si; if (w && (dt = w.lazyLink && t.Deferred(), w.tmpl ? er = "/" + w._.id + "_" : (vt = w.get, w.tag && (uu = w.tag + "^", w = !0)), w = w === !0), vt && (eu = su, or = vt.tags, sr = vt.deep, hr = vt.name), r = r ? "" + r === r ? t(r)[0] : r.jquery ? r[0] : r : br.parentElem || f.body, lt = r.tagName.toLowerCase(), ft = !!pt[lt], u = u && ir(u, ft), a = a && ir(a, ft) || null, p !== i) { if (wi = f.createElement("div"), oi = wi, di = at = "", ri = r.namespaceURI === "http://www.w3.org/2000/svg" ? "svg" : (ei = yr.exec(p)) && ei[1] || "", hu && ei && ei[2] && g("Unsupported: " + ei[2]), ft) { for (ii = a; ii && !(yi = h(ii)) ;) ii = ii.nextSibling; (ht = yi ? yi.tokens : r._dfr) && (ai = er || "", (w || !er) && (ai += "#" + uu), et = ht.indexOf(ai), et + 1 && (et += ai.length, di = at = ht.slice(0, et), ht = ht.slice(et), yi ? ii.setAttribute(c, ht) : r._dfr = ht)) } for (p = ("" + p).replace(kr, ou), vi.appendChild(wi), ri = s[ri] || s.div, tu = ri[0], oi.innerHTML = ri[1] + p + ri[2]; tu--;) oi = oi.lastChild; for (vi.removeChild(wi), ar = f.createDocumentFragment() ; iu = oi.firstChild;) ar.appendChild(iu); r.insertBefore(ar, a) } return dt ? setTimeout(gr, 0) : gr(), dt && dt.promise() } function rt(n, t, r, f, o) { var y, l, p, h, k, d, a, v, c, s, g; if (o) s = e[o], s = s.linkCtx ? s.linkCtx.tag : s, c = s.linkCtx || { data: f, elem: s._elCnt ? s.parentElem : t, view: r, ctx: r.ctx, attr: "html", fn: s._.bnd, tag: s, _bndId: o }, nr(c, c.fn); else if (n && t) for (y = r.tmpl, n = fu(n, t), w.lastIndex = 0; l = w.exec(n) ;) g = w.lastIndex, p = o ? "html" : l[1], a = l[3], k = l[10], h = i, c = { data: f, elem: s && s._elCnt ? s.parentElem : t, view: r, ctx: r.ctx, attr: p, _initVal: !l[2] }, l[6] && (!p && (h = /:([\w$]*)$/.exec(k)) && (h = h[1], h !== i && (d = -h.length - 1, a = a.slice(0, d - 1) + b, k = k.slice(0, d))), h === null && (h = i), c.convert = l[5] || ""), c.expr = p + a, v = y.links[a], v || (y.links[a] = v = u.tmplFn(ii + a + ri, y, !0, h), u.parse(k, v.paths = [], y)), c.fn = v, p || h === i || (c.convertBack = h), nr(c, v), w.lastIndex = g } function nr(n, t) { function i(i, r) { iu.call(n, i, r, t) } n._ctxCb = eu(n.view), n._hdlr = i, n.tag && n.tag.onArrayChange && (i.array = function (t, i) { n.tag.onArrayChange(t, i) }), i(!0) } function ut(n, t) { var i; return n ? (i = n.indexOf(t), i + 1 ? n.slice(0, i) + n.slice(i + t.length) : n) : "" } function ft(n) { return n && ("" + n === n ? n : n.tagName === "SCRIPT" ? n.type.slice(3) : n.nodeType === 1 && n.getAttribute(c) || "") } function h(n, t, i) { function e(n, t, i, r, e, o) { u.push({ elCnt: f, id: r, ch: e, open: t, close: i, path: o, token: n }) } var f, r, u = []; if (r = t ? n : ft(n)) return u.elCnt = !n.type, f = r.charAt(0) === "@" || !n.type, u.tokens = r, r.replace(i || tu, e), u } function tr(n, t) { n && (n.type === "jsv" ? n.parentNode.removeChild(n) : t && n.getAttribute(y) === "" && n.removeAttribute(y)) } function ir(n, t) { for (var i = n; t && i && i.nodeType !== 1;) i = i.previousSibling; return i && (i.nodeType !== 1 ? (i = f.createElement("SCRIPT"), i.type = "jsv", n.parentNode.insertBefore(i, n)) : ft(i) || i.getAttribute(y) || i.setAttribute(y, "")), i } function fu(n, i) { return n = t.trim(n), n.slice(-1) !== b ? n = ht + ":" + n + (bt(i) ? ":" : "") + b : n } function rr(n, i) { var u, r = t(this.nodes()); return r[0] && (u = n ? r.filter(n) : r, r = i && n ? u.add(r.find(n)) : u), r } function ur(n, t, i) { var r, u = this, f = u._elCnt, o = !t && f, e = []; for (t = t || u._prv, i = i || u._nxt, r = o ? t === u._nxt ? u.parentElem.lastSibling : t : u._.inline === !1 ? t || u.linkCtx.elem.firstChild : t && t.nextSibling; r && (!i || r !== i) ;) (n || f || !ft(r)) && e.push(r), r = r.nextSibling; return e } function fr(n, t) { n !== !!n && (t = n, n = i); var r = this, o = r.link ? r : r.tagCtx.view, u = r._prv, f = r._elCnt, e = []; return u && o.link(i, r.parentElem, f ? u.previousSibling : u, r._nxt, i, { get: { tags: e, deep: n, name: t, id: f && r._tgId } }), e } function gt(n, t) { var f, o, i, h, s, c, l, a, u = n.linkCtx = n.linkCtx || { tag: n, data: t.view.data }; if (n.onAfterLink) n.onAfterLink(t, u); if ((o = u.linkedElem) && (i = o[0])) { if (h = i.type === "radio", f = u.convert, s = f ? d(f) ? f(t.args[0]) : r._cnvt(f, t.view, t) : t.args[0], i !== u.elem) for (a = o.length; a--;) { if (i = o[a], i._jsvLnkdEl = !0, n._.inline) for (i._jsvBnd = u.elem ? u.elem._jsvBnd : n._prv._jsvBnd, c = i._jsvBnd.slice(1).split("&"), l = c.length; l--;) er(e[c[l]], u.convertBack); h && (i.checked = s === i.value) } h || (i.type === "checkbox" ? i.checked = s && s !== "false" : o.val(s)) } } function er(n, t) { var e, u, r, o, f = n.linkCtx, s = f.data, i = f.fn.paths; if (n) { for ((e = i.to) && (i = e), u = i.length; u && "" + (r = i[--u]) !== r;); r ? (r = i[u] = r.split("^").join("."), n.to = r.charAt(0) === "." ? [[o = i[u - 1], r.slice(1)], t] : [f._ctxCb(i[0]) || [s, i[0]], t], e && o && (n.to[0][0] = f._ctxCb(o, s))) : n.to = [[], t] } } function or(n) { var l, a, s, u = this, h = u.parentElem, c = u.tagCtx, f = c.view, e = u._prv, o = u._nxt, p = u._elCnt, v = u._.inline, y = c.props; return u.disposed && g("Removed tag"), n === i && (n = u._.bnd.call(f.tmpl, f.data, f, r), v && (n = r._tag(u, f, f.tmpl, n))), (u.flow || u.render || u.tagCtx.tmpl) && (v ? (a = u.nodes(!0), p && (e && e !== o && ti(e, o, h, u._tgId, "^", !0), e = e ? e.previousSibling : o ? o.previousSibling : h.lastChild), t(a).remove()) : (!u.flow && y.inline && (f._.tag = u, n = it(n, f, !0), f._.tag = i, l = u._.inline = !0), t(h).empty())), !l && u.onBeforeLink && u.onBeforeLink(), s = f.link(f.data, h, e, o, n, u && { tag: u._tgId, lazyLink: y.lazyLink }), !l && (u.onAfterLink || u.onLinkedInit) && (s ? s.then(function () { gt(u, c) }) : gt(u, c)), s || u } function et(n) { for (var e, o, c, r, s, t, u, a = [], v = n.length, f = v; f--;) a.push(n[f]); for (f = v; f--;) if (r = a[f], r.parentNode) { if ((u = r._jsvBnd) && !r._jsvLnkdEl) for (u = u.slice(1).split("&"), r._jsvBnd = "", o = u.length; o--;) ot(u[o]); if (s = h(ft(r) + (r._dfr || ""), !0, dr)) for (e = 0, c = s.length; e < c; e++) t = s[e], t.ch === "_" ? (t = l[t.id]) && t.data !== i && t.parent.removeViews(t._.key, i, !0) : ot(t.id) } } function ot(n) { var s, h, i, f, o, r = e[n]; if (r) { for (s in r.bnd) f = r.bnd[s], o = ".obs" + r.cbId, t.isArray(f) ? t([f]).off(ct + o).off(oi + o) : t(f).off(oi + o), delete r.bnd[s]; h = r.linkCtx, (i = h.tag) && (i.onDispose && i.onDispose(), i._elCnt || (i._prv && i._prv.parentNode.removeChild(i._prv), i._nxt && i._nxt.parentNode.removeChild(i._nxt)), i.disposed = !0), delete h.view._.bnds[n], delete e[n], delete u._cbBnds[r.cbId] } } function ni(n, r) { return arguments.length ? r && (r = r.jquery ? r : t(r), n === !0 ? t.each(r, function () { for (var n; (n = v(this, !0)) && n.parent;) n.parent.removeViews(n._.key, i, !0); et(this.getElementsByTagName("*")) }) : n === i && et(r)) : (p && (t(p).off(si, bi), p = i), n = !0, a.removeViews(), et(f.body.getElementsByTagName("*"))), r } function sr(n, t) { return ni(this, n, t) } function eu(n) { return n = n || t.view(), function (t, i) { var f, u, e = [i]; if (n && t) { if (t._jsvOb) return t._jsvOb.call(n.tmpl, i, n, r); if (t.charAt(0) === "~") return t.slice(0, 4) === "~tag" && (u = n.ctx, t.charAt(4) === "." && (f = t.slice(5).split("."), u = u.tag), f) ? u ? [u, f.join("."), i] : [] : (t = t.slice(1).split("."), (i = n.hlp(t.shift())) && (t.length && e.unshift(t.join(".")), e.unshift(i)), i ? e : []); if (t.charAt(0) === "#") return t === "#data" ? [] : [n, t.replace(br, ""), i] } } } function ou(n) { return n.type === "checkbox" ? n.checked : n.value } function ti(n, t, i, r, u, f) { var y, a, p, s, b, v, o, w = 0, k = n === t; if (n) { for (p = h(n) || [], y = 0, a = p.length; y < a; y++) { if (s = p[y], v = s.id, v === r && s.ch === u) if (f) a = 0; else break; k || (b = s.ch === "_" ? l[v] : e[v].linkCtx.tag, s.open ? b._prv = t : s.close && (b._nxt = t)), w += v.length + 2 } w && n.setAttribute(c, n.getAttribute(c).slice(w)), o = t ? t.getAttribute(c) : i._dfr, (a = o.indexOf("/" + r + u) + 1) && (o = p.tokens.slice(0, w) + o.slice(a + (f ? -1 : r.length + 1))), o && (t ? t.setAttribute(c, o) : i._dfr = o) } else i._dfr = ut(i._dfr, "#" + r + u), f || t || (i._dfr = ut(i._dfr, "/" + r + u)) } if (!t) throw "requires jQuery"; if (!t.views) throw "requires JsRender"; if (!t.observable) throw "requires jquery.observable"; if (!t.link) { var st, p, v, w, ii, ht, b, ri, ui, fi, f = n.document, r = t.views, u = r.sub, o = r.settings, k = u.extend, a = u.View(i, "top"), d = t.isFunction, hr = r.templates, nt = t.observable, ei = nt.observe, c = "data-jsv", y = o.linkAttr || "data-link", oi = o.propChng = o.propChng || "propertyChange", ct = u.arrChng = u.arrChng || "arrayChange", su = u._cbBnds = u._cbBnds || {}, si = "change.jsv", lt = "onBeforeChange", at = "onAfterChange", cr = "onAfterCreate", hi = '"><\/script>', ci = '<script type="jsv', vt = "script,[" + c + "]", tt = vt + ",[" + y + "]", li = { value: "val", input: "val", html: "html", text: "text" }, ai = { from: { fromAttr: "value" }, to: { toAttr: "value" } }, lr = t.cleanData, ar = o.delimiters, g = u.error, vr = u.syntaxError, yr = /<(?!script)(\w+)(?:[^>]*(on\w+)\s*=)?[^>]*>/, vi = f.createDocumentFragment(), yt = f.querySelector, pt = { ol: 1, ul: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, tr: 1, colgroup: 1, dl: 1, select: 1, optgroup: 1 }, pr = { tr: "table" }, s = o.wrapMap = { option: [1, "<select multiple='multiple'>", "<\/select>"], legend: [1, "<fieldset>", "<\/fieldset>"], thead: [1, "<table>", "<\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"], area: [1, "<map>", "<\/map>"], svg: [1, "<svg>", "<\/svg>"], div: [1, "x<div>", "<\/div>"] }, wr = { br: 1, img: 1, input: 1, hr: 1, area: 1, base: 1, col: 1, link: 1, meta: 1, command: 1, embed: 1, keygen: 1, param: 1, source: 1, track: 1, wbr: 1 }, yi = {}, l = { 0: a }, e = {}, pi = 1, br = /^#(view\.?)?/, kr = /(^|(\/>)|(<\/\w+>)|>|)(\s*)([#\/]\d+[_^])`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|(<\/\w+>)(\s*)|(\/>)\s*)/g, wi = /(#)()(\d+)(_)/g, dr = /(#)()(\d+)([_^])/g, gr = /(?:(#)|(\/))(\d+)(_)/g, nu = /(#)()(\d+)(\^)/g, tu = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g; s.optgroup = s.option, s.tbody = s.tfoot = s.colgroup = s.caption = s.thead, s.th = s.td, u.onStoreItem = function (n, i, r) { r && n === hr && (r.link = gi, r.unlink = sr, i && (t.link[i] = function () { return gi.apply(r, arguments) }, t.unlink[i] = function () { return sr.apply(r, arguments) })) }, (o.delimiters = function () { var n = ar.apply(r, arguments); return ii = n[0], ht = n[1], b = n[2], ri = n[3], ui = n[4], w = new RegExp("(?:^|\\s*)([\\w-]*)(\\" + ui + ")?(\\" + ht + u.rTag + "\\" + b + ")", "g"), this })(), u.viewInfos = h, st = { addViews: function (n, t, i) { var u, o, r = this, f = t.length, e = r.views; if (!r._.useKey && f && (i = r.tmpl) && (o = e.length + f, di(r, n, i, e, t, r.ctx) !== !1)) for (u = n + f; u < o; u++) nt(e[u]).setProperty("index", u); return r }, removeViews: function (n, r, u) { function o(n) { var h, c, e, o, s, a, r = f[n]; if (r && r.link) { h = r._.id, u || (a = r.nodes()), r.removeViews(i, i, !0), r.data = i, o = r._prv, s = r._nxt, e = r.parentElem, u || (r._elCnt && ti(o, s, e, h, "_"), t(a).remove()), r._elCnt || (o.parentNode && e.removeChild(o), s.parentNode && e.removeChild(s)), wt(r); for (c in r._.bnds) ot(c); delete l[h] } } var e, a, s, h = this, c = !h._.useKey, f = h.views; if (c && (s = f.length), n === i) if (c) { for (e = s; e--;) o(e); h.views = [] } else { for (a in f) o(a); h.views = {} } else if (r === i && (c ? r = 1 : (o(n), delete f[n])), c && r) { for (e = n + r; e-- > n;) o(e); if (f.splice(n, r), s = f.length) while (n < s) nt(f[n]).setProperty("index", n++) } return this }, refresh: function (n) { var t = this, i = t.parent; return i && (di(t, t.index, t.tmpl, i.views, t.data, n, !0), wt(t)), t }, nodes: ur, contents: rr, childTags: fr, link: uu }, o.merge = { input: { from: { fromAttr: ou }, to: { toAttr: "value" } }, textarea: ai, select: ai, optgroup: { from: { fromAttr: "label" }, to: { toAttr: "label" } } }, o.debugMode && (fi = !o.noValidate, n._jsv = { views: l, bindings: e }), k(t, { view: r.view = v = function (n, r, u) { r !== !!r && (u = r, r = i); var e, o, c, v, w, s, b, y, p = 0, k = f.body; if (n && n !== k && a._.useKey > 1 && (n = "" + n === n ? t(n)[0] : n.jquery ? n[0] : n, n)) if (r) { for (y = yt ? n.querySelectorAll(vt) : t(vt, n).get(), s = y.length, c = 0; c < s; c++) for (b = y[c], o = h(b, i, wi), v = 0, w = o.length; v < w; v++) if (e = o[v], (e = l[e.id]) && (e = e && u ? e.get(!0, u) : e, e)) return e } else while (n) { if (o = h(n, i, gr)) for (s = o.length; s--;) if (e = o[s], e.open) { if (p < 1) return e = l[e.id], e && u ? e.get(u) : e || a; p-- } else p++; n = n.previousSibling || n.parentNode } return r ? i : a }, link: r.link = dt, unlink: r.unlink = ni, cleanData: function (n) { n.length && (et(n), lr.call(t, n)) } }), k(t.fn, { link: function (n, t, i, r, u, f) { return dt(n, this, t, i, r, u, f) }, unlink: function (n) { return ni(n, this) }, view: function (n) { return v(this[0], n) } }), k(a, { tmpl: { links: {}, tags: {} } }), k(a, st), a._.onRender = it } }(this, this.jQuery);
//jsviews.js v1.0.0-alpha: http://jsviews.com;
define("jsviews", ["jquery"], function(){});

/*yepnope1.5.x|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
define("yepnope", function(){});

( function ( window, doc, undef ) {
  // Takes a preloaded css obj (changes in different browsers) and injects it into the head
  yepnope.injectCss = function( href, cb, attrs, timeout, /* Internal use */ err, internal ) {

    // Create stylesheet link
    var link = document.createElement( "link" ),
        onload = function() {
          if ( ! done ) {
            done = 1;
            link.removeAttribute("id");
            setTimeout( cb, 0 );
          }
        },
        id = "yn" + (+new Date()),
        ref, done, i;

    cb = internal ? yepnope.executeStack : ( cb || function(){} );
    timeout = timeout || yepnope.errorTimeout;
    // Add attributes
    link.href = href;
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.id = id;

    // Add our extra attributes to the link element
    for ( i in attrs ) {
      link.setAttribute( i, attrs[ i ] );
    }


    if ( ! err ) {
      ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
      ref.parentNode.insertBefore( link, ref );
      link.onload = onload;

      function poll() {
        try {
            var sheets = document.styleSheets;
            for(var j=0, k=sheets.length; j<k; j++) {
                if(sheets[j].ownerNode.id == id) {
                    // this throws an exception, I believe, if not full loaded (was originally just "sheets[j].cssRules;")
                    if (sheets[j].cssRules.length)
                        return onload();
                }
            }
            // if we get here, its not in document.styleSheets (we never saw the ID)
            throw new Error;
        } catch(e) {
            // Keep polling
            setTimeout(poll, 20);
        }
      }
      poll();
    }
  }
})( this, this.document );
define("yepnopecss", ["yepnope"], function(){});

//! OpenSeadragon 0.9.131
//! Built on 2013-09-23
//! Git commit: v0.9.131-0-g13249cc
//! http://openseadragon.github.io
//! License: http://openseadragon.github.io/license/
window.OpenSeadragon=window.OpenSeadragon||function(a){return new OpenSeadragon.Viewer(a)},function(a){var b={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},c=Object.prototype.toString,d=Object.prototype.hasOwnProperty;a.isFunction=function(b){return"function"===a.type(b)},a.isArray=Array.isArray||function(b){return"array"===a.type(b)},a.isWindow=function(a){return a&&"object"==typeof a&&"setInterval"in a},a.type=function(a){return null===a||void 0===a?String(a):b[c.call(a)]||"object"},a.isPlainObject=function(b){if(!b||"object"!==OpenSeadragon.type(b)||b.nodeType||a.isWindow(b))return!1;if(b.constructor&&!d.call(b,"constructor")&&!d.call(b.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in b);return void 0===c||d.call(b,c)},a.isEmptyObject=function(a){for(var b in a)return!1;return!0}}(OpenSeadragon),function(a){function b(a,b){return b&&a!=document.body?document.body:a.offsetParent}a.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=arguments.length,i=!1,j=1;for("boolean"==typeof g&&(i=g,g=arguments[1]||{},j=2),"object"==typeof g||OpenSeadragon.isFunction(g)||(g={}),h===j&&(g=this,--j);h>j;j++)if(a=arguments[j],null!==a||void 0!==a)for(b in a)c=g[b],d=a[b],g!==d&&(i&&d&&(OpenSeadragon.isPlainObject(d)||(e=OpenSeadragon.isArray(d)))?(e?(e=!1,f=c&&OpenSeadragon.isArray(c)?c:[]):f=c&&OpenSeadragon.isPlainObject(c)?c:{},g[b]=OpenSeadragon.extend(i,f,d)):void 0!==d&&(g[b]=d));return g},a.extend(a,{DEFAULT_SETTINGS:{xmlPath:null,tileSources:null,tileHost:null,panHorizontal:!0,panVertical:!0,constrainDuringPan:!1,wrapHorizontal:!1,wrapVertical:!1,visibilityRatio:.5,minPixelRatio:.5,defaultZoomLevel:0,minZoomLevel:null,maxZoomLevel:null,springStiffness:7,clickTimeThreshold:300,clickDistThreshold:5,zoomPerClick:2,zoomPerScroll:1.2,zoomPerSecond:1,animationTime:1.2,blendTime:0,alwaysBlend:!1,autoHideControls:!0,immediateRender:!1,minZoomImageRatio:.9,maxZoomPixelRatio:1.1,showSequenceControl:!0,preserveViewport:!1,showNavigationControl:!0,controlsFadeDelay:2e3,controlsFadeLength:1500,mouseNavEnabled:!0,showNavigator:!1,navigatorId:null,navigatorHeight:null,navigatorWidth:null,navigatorPosition:null,navigatorSizeRatio:.2,degrees:0,showReferenceStrip:!1,referenceStripScroll:"horizontal",referenceStripElement:null,referenceStripHeight:null,referenceStripWidth:null,referenceStripPosition:"BOTTOM_LEFT",referenceStripSizeRatio:.2,collectionRows:3,collectionLayout:"horizontal",collectionMode:!1,collectionTileSize:800,onPageChange:null,imageLoaderLimit:0,maxImageCacheCount:200,timeout:3e4,prefixUrl:"/images/",navImages:{zoomIn:{REST:"zoomin_rest.png",GROUP:"zoomin_grouphover.png",HOVER:"zoomin_hover.png",DOWN:"zoomin_pressed.png"},zoomOut:{REST:"zoomout_rest.png",GROUP:"zoomout_grouphover.png",HOVER:"zoomout_hover.png",DOWN:"zoomout_pressed.png"},home:{REST:"home_rest.png",GROUP:"home_grouphover.png",HOVER:"home_hover.png",DOWN:"home_pressed.png"},fullpage:{REST:"fullpage_rest.png",GROUP:"fullpage_grouphover.png",HOVER:"fullpage_hover.png",DOWN:"fullpage_pressed.png"},previous:{REST:"previous_rest.png",GROUP:"previous_grouphover.png",HOVER:"previous_hover.png",DOWN:"previous_pressed.png"},next:{REST:"next_rest.png",GROUP:"next_grouphover.png",HOVER:"next_hover.png",DOWN:"next_pressed.png"}},navPrevNextWrap:!1,debugMode:!1,debugGridColor:"#437AB2"},SIGNAL:"----seadragon----",delegate:function(a,b){return function(){var c=arguments;return void 0===c&&(c=[]),b.apply(a,c)}},BROWSERS:{UNKNOWN:0,IE:1,FIREFOX:2,SAFARI:3,CHROME:4,OPERA:5},getElement:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a},getElementPosition:function(c){var d,e,f=new a.Point;for(c=a.getElement(c),d="fixed"==a.getElementStyle(c).position,e=b(c,d);e;)f.x+=c.offsetLeft,f.y+=c.offsetTop,d&&(f=f.plus(a.getPageScroll())),c=e,d="fixed"==a.getElementStyle(c).position,e=b(c,d);return f},getElementSize:function(b){return b=a.getElement(b),new a.Point(b.clientWidth,b.clientHeight)},getElementStyle:document.documentElement.currentStyle?function(b){return b=a.getElement(b),b.currentStyle}:function(b){return b=a.getElement(b),window.getComputedStyle(b,"")},getEvent:function(b){return a.getEvent=b?function(a){return a}:function(){return window.event},a.getEvent(b)},getMousePosition:function(b){if("number"==typeof b.pageX)a.getMousePosition=function(b){var c=new a.Point;return b=a.getEvent(b),c.x=b.pageX,c.y=b.pageY,c};else{if("number"!=typeof b.clientX)throw new Error("Unknown event mouse position, no known technique.");a.getMousePosition=function(b){var c=new a.Point;return b=a.getEvent(b),c.x=b.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c.y=b.clientY+document.body.scrollTop+document.documentElement.scrollTop,c}}return a.getMousePosition(b)},getPageScroll:function(){var b=document.documentElement||{},c=document.body||{};return a.getPageScroll="number"==typeof window.pageXOffset?function(){return new a.Point(window.pageXOffset,window.pageYOffset)}:c.scrollLeft||c.scrollTop?function(){return new a.Point(document.body.scrollLeft,document.body.scrollTop)}:b.scrollLeft||b.scrollTop?function(){return new a.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)}:function(){return new a.Point(0,0)},a.getPageScroll()},getWindowSize:function(){var b=document.documentElement||{},c=document.body||{};if("number"==typeof window.innerWidth)a.getWindowSize=function(){return new a.Point(window.innerWidth,window.innerHeight)};else if(b.clientWidth||b.clientHeight)a.getWindowSize=function(){return new a.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)};else{if(!c.clientWidth&&!c.clientHeight)throw new Error("Unknown window size, no known technique.");a.getWindowSize=function(){return new a.Point(document.body.clientWidth,document.body.clientHeight)}}return a.getWindowSize()},makeCenteredNode:function(b){b=a.getElement(b);var c=[a.makeNeutralElement("div"),a.makeNeutralElement("div"),a.makeNeutralElement("div")];return a.extend(c[0].style,{display:"table",height:"100%",width:"100%"}),a.extend(c[1].style,{display:"table-row"}),a.extend(c[2].style,{display:"table-cell",verticalAlign:"middle",textAlign:"center"}),c[0].appendChild(c[1]),c[1].appendChild(c[2]),c[2].appendChild(b),c[0]},makeNeutralElement:function(a){var b=document.createElement(a),c=b.style;return c.background="transparent none",c.border="none",c.margin="0px",c.padding="0px",c.position="static",b},now:function(){return a.now=Date.now?Date.now:function(){return(new Date).getTime()},a.now()},makeTransparentImage:function(b){return a.makeTransparentImage=function(b){var c=a.makeNeutralElement("img");return c.src=b,c},a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<7&&(a.makeTransparentImage=function(b){var c=a.makeNeutralElement("img"),d=null;return d=a.makeNeutralElement("span"),d.style.display="inline-block",c.onload=function(){d.style.width=d.style.width||c.width+"px",d.style.height=d.style.height||c.height+"px",c.onload=null,c=null},c.src=b,d.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b+"', sizingMethod='scale')",d}),a.makeTransparentImage(b)},setElementOpacity:function(b,c,d){var e,f;b=a.getElement(b),d&&!a.Browser.alpha&&(c=Math.round(c)),a.Browser.opacity?b.style.opacity=1>c?c:"":1>c?(e=Math.round(100*c),f="alpha(opacity="+e+")",b.style.filter=f):b.style.filter=""},addClass:function(b,c){b=a.getElement(b),b.className?-1===(" "+b.className+" ").indexOf(" "+c+" ")&&(b.className+=" "+c):b.className=c},removeClass:function(b,c){var d,e,f=[];for(b=a.getElement(b),d=b.className.split(/\s+/),e=0;e<d.length;e++)d[e]&&d[e]!==c&&f.push(d[e]);b.className=f.join(" ")},addEvent:function(b,c,d,e){if(b=a.getElement(b),b.addEventListener)a.addEvent=function(b,c,d,e){b=a.getElement(b),b.addEventListener(c,d,e)};else{if(!b.attachEvent)throw new Error("Unable to attach event handler, no known technique.");a.addEvent=function(b,c,d,e){b=a.getElement(b),b.attachEvent("on"+c,d),e&&b.setCapture&&b.setCapture()}}return a.addEvent(b,c,d,e)},removeEvent:function(b,c,d,e){if(b=a.getElement(b),b.removeEventListener)a.removeEvent=function(b,c,d,e){b=a.getElement(b),b.removeEventListener(c,d,e)};else{if(!b.detachEvent)throw new Error("Unable to detach event handler, no known technique.");a.removeEvent=function(b,c,d,e){b=a.getElement(b),b.detachEvent("on"+c,d),e&&b.releaseCapture&&b.releaseCapture()}}return a.removeEvent(b,c,d,e)},cancelEvent:function(b){b=a.getEvent(b),a.cancelEvent=b.preventDefault?function(a){a.preventDefault()}:function(b){b=a.getEvent(b),b.cancel=!0,b.returnValue=!1},a.cancelEvent(b)},stopEvent:function(b){b=a.getEvent(b),a.stopEvent=b.stopPropagation?function(a){a.stopPropagation()}:function(b){b=a.getEvent(b),b.cancelBubble=!0},a.stopEvent(b)},createCallback:function(a,b){var c,d=[];for(c=2;c<arguments.length;c++)d.push(arguments[c]);return function(){var c,e=d.concat([]);for(c=0;c<arguments.length;c++)e.push(arguments[c]);return b.apply(a,e)}},getUrlParameter:function(a){var b=e[a];return b?b:null},createAjaxRequest:function(){var b;if(window.XMLHttpRequest)a.createAjaxRequest=function(){return new XMLHttpRequest},b=new XMLHttpRequest;else if(window.ActiveXObject)for(var d=0;d<c.length;d++)try{b=new ActiveXObject(c[d]),a.createAjaxRequest=function(){return new ActiveXObject(c[d])};break}catch(e){continue}if(!b)throw new Error("Browser doesn't support XMLHttpRequest.");return b},makeAjaxRequest:function(b,c,d){var e=a.createAjaxRequest();if(!a.isFunction(c))throw new Error("makeAjaxRequest requires a success callback");e.onreadystatechange=function(){4==e.readyState&&(e.onreadystatechange=function(){},200==e.status?c(e):(a.console.log("AJAX request returned %s: %s",e.status,b),a.isFunction(d)&&d(e)))};try{e.open("GET",b,!0),e.send(null)}catch(f){var g=f.message,h=a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<10;h&&"undefined"!=typeof f.number&&-2147024891==f.number&&(g+="\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"),a.console.log("%s while making AJAX request: %s",f.name,g),e.onreadystatechange=function(){},a.isFunction(d)&&d(e,f)}},jsonp:function(b){var c,d=b.url,e=document.head||document.getElementsByTagName("head")[0]||document.documentElement,f=b.callbackName||"openseadragon"+a.now(),g=window[f],h="$1"+f+"$2",i=b.param||"callback",j=b.callback;d=d.replace(/(\=)\?(&|$)|\?\?/i,h),d+=(/\?/.test(d)?"&":"?")+i+"="+f,window[f]=function(b){if(g)window[f]=g;else try{delete window[f]}catch(c){}j&&a.isFunction(j)&&j(b)},c=document.createElement("script"),(void 0!==b.async||!1!==b.async)&&(c.async="async"),b.scriptCharset&&(c.charset=b.scriptCharset),c.src=d,c.onload=c.onreadystatechange=function(a,b){(b||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,e&&c.parentNode&&e.removeChild(c),c=void 0)},e.insertBefore(c,e.firstChild)},createFromDZI:function(){throw"OpenSeadragon.createFromDZI is deprecated, use Viewer.open."},parseXml:function(b){if(window.ActiveXObject)a.parseXml=function(a){var b=null;return b=new ActiveXObject("Microsoft.XMLDOM"),b.async=!1,b.loadXML(a),b};else{if(!window.DOMParser)throw new Error("Browser doesn't support XML DOM.");a.parseXml=function(a){var b,c=null;return b=new DOMParser,c=b.parseFromString(a,"text/xml")}}return a.parseXml(b)},imageFormatSupported:function(a){return a=a?a:"",!!d[a.toLowerCase()]}}),a.Browser={vendor:a.BROWSERS.UNKNOWN,version:0,alpha:!0};var c=["Msxml2.XMLHTTP","Msxml3.XMLHTTP","Microsoft.XMLHTTP"],d={bmp:!1,jpeg:!0,jpg:!0,png:!0,tif:!1,wdp:!1},e={};!function(){var b=(navigator.appName,navigator.appVersion),c=navigator.userAgent;switch(navigator.appName){case"Microsoft Internet Explorer":window.attachEvent&&window.ActiveXObject&&(a.Browser.vendor=a.BROWSERS.IE,a.Browser.version=parseFloat(c.substring(c.indexOf("MSIE")+5,c.indexOf(";",c.indexOf("MSIE")))));break;case"Netscape":window.addEventListener&&(c.indexOf("Firefox")>=0?(a.Browser.vendor=a.BROWSERS.FIREFOX,a.Browser.version=parseFloat(c.substring(c.indexOf("Firefox")+8))):c.indexOf("Safari")>=0&&(a.Browser.vendor=c.indexOf("Chrome")>=0?a.BROWSERS.CHROME:a.BROWSERS.SAFARI,a.Browser.version=parseFloat(c.substring(c.substring(0,c.indexOf("Safari")).lastIndexOf("/")+1,c.indexOf("Safari")))));break;case"Opera":a.Browser.vendor=a.BROWSERS.OPERA,a.Browser.version=parseFloat(b)}var d,f,g,h=window.location.search.substring(1),i=h.split("&");for(g=0;g<i.length;g++)d=i[g],f=d.indexOf("="),f>0&&(e[d.substring(0,f)]=decodeURIComponent(d.substring(f+1)));a.Browser.alpha=!(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9||a.Browser.vendor==a.BROWSERS.CHROME&&a.Browser.version<2),a.Browser.opacity=!(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9)}();var f=function(){};a.console=window.console||{log:f,debug:f,info:f,warn:f,error:f},function(b){var c=b.requestAnimationFrame||b.mozRequestAnimationFrame||b.webkitRequestAnimationFrame||b.msRequestAnimationFrame,d=b.cancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelAnimationFrame||b.msCancelAnimationFrame;if(c&&d)a.requestAnimationFrame=function(){return c.apply(b,arguments)},a.cancelAnimationFrame=function(){return d.apply(b,arguments)};else{var e,f=[],g=[],h=0;a.requestAnimationFrame=function(b){return f.push([++h,b]),e||(e=setInterval(function(){if(f.length){var b=a.now(),c=g;for(g=f,f=c;g.length;)g.shift()[1](b)}else clearInterval(e),e=void 0},20)),h},a.cancelAnimationFrame=function(a){var b,c;for(b=0,c=f.length;c>b;b+=1)if(f[b][0]===a)return f.splice(b,1),void 0;for(b=0,c=g.length;c>b;b+=1)if(g[b][0]===a)return g.splice(b,1),void 0}}}(window),a._processDZIError=function(a){var b=a.getElementsByTagName("Message")[0],c=b.firstChild.nodeValue;throw new Error(c)}}(OpenSeadragon),function(a){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""},c="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var d=0,e=c.length;e>d;d++)if(b.prefix=c[d],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(b.fullScreenEventName=b.prefix+"fullscreenchange",b.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):"undefined"!=typeof window.ActiveXObject&&(b.requestFullScreen=function(){var a=new ActiveXObject("WScript.Shell");return null!==a&&a.SendKeys("{F11}"),!1},b.cancelFullScreen=b.requestFullScreen),a.extend(a,b)}(OpenSeadragon),function(a){a.EventHandler=function(){this.events={}},a.EventHandler.prototype={addHandler:function(b,c,d){var e=this.events[b];e||(this.events[b]=e=[]),c&&a.isFunction(c)&&(e[e.length]={handler:c,userData:d||null})},removeHandler:function(b,c){var d,e=this.events[b],f=[];if(e&&a.isArray(e)){for(d=0;d<e.length;d++)e[d].handler!==c&&f.push(e[d]);this.events[b]=f}},removeAllHandlers:function(a){if(a)this.events[a]=[];else for(var b in this.events)this.events[b]=[]},getHandler:function(a){var b=this.events[a];return b&&b.length?(b=1===b.length?[b[0]]:Array.apply(null,b),function(a,c){var d,e=b.length;for(d=0;e>d;d++)b[d]&&(c.userData=b[d].userData,b[d].handler(a,c))}):null},raiseEvent:function(a,b){var c=this.getHandler(a);c&&(b||(b={}),c(this,b))}}}(OpenSeadragon),function(a){function b(b){var c,d,e=["mouseover","mouseout","mousedown","mouseup","click","DOMMouseScroll","mousewheel","touchstart","touchmove","touchend","keypress","focus","blur"],f=H[b.hash];if(!f.tracking){for(d=0;d<e.length;d++)c=e[d],a.addEvent(b.element,c,f[c],!1);f.tracking=!0,F[b.hash]=b}}function c(b){var c,d,e=["mouseover","mouseout","mousedown","mouseup","click","DOMMouseScroll","mousewheel","touchstart","touchmove","touchend","keypress","focus","blur"],g=H[b.hash];if(g.tracking){for(d=0;d<e.length;d++)c=e[d],a.removeEvent(b.element,c,g[c],!1);f(b),g.tracking=!1,delete F[b.hash]}}function d(a){return H[a.hash].insideElement}function e(b){var c=H[b.hash];c.capturing||(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.removeEvent(b.element,"mouseup",c.mouseup,!1),a.addEvent(b.element,"mouseup",c.mouseupie,!0),a.addEvent(b.element,"mousemove",c.mousemoveie,!0)):(a.addEvent(window,"mouseup",c.mouseupwindow,!0),a.addEvent(window,"mousemove",c.mousemove,!0)),c.capturing=!0)}function f(b){var c=H[b.hash];c.capturing&&(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.removeEvent(b.element,"mousemove",c.mousemoveie,!0),a.removeEvent(b.element,"mouseup",c.mouseupie,!0),a.addEvent(b.element,"mouseup",c.mouseup,!1)):(a.removeEvent(window,"mousemove",c.mousemove,!0),a.removeEvent(window,"mouseup",c.mouseupwindow,!0)),c.capturing=!1)}function g(a,b,c){var d;for(d in F)F.hasOwnProperty(d)&&a.hash!=d&&b(F[d],c)}function h(b,c){var d;b.focusHandler&&(d=b.focusHandler(b,c),d===!1&&a.cancelEvent(c))}function i(b,c){var d;b.blurHandler&&(d=b.blurHandler(b,c),d===!1&&a.cancelEvent(c))}function j(b,c){var d;b.keyHandler&&(d=b.keyHandler(b,c.keyCode?c.keyCode:c.charCode,c.shiftKey),d||a.cancelEvent(c))}function k(b,c){var d,e=H[b.hash];c=a.getEvent(c),a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&e.capturing&&!A(c.srcElement,b.element)&&g(b,k,c);var f=c.target?c.target:c.srcElement,h=c.relatedTarget?c.relatedTarget:c.fromElement;A(b.element,f)&&!A(b.element,h)&&(e.insideElement=!0,b.enterHandler&&(d=b.enterHandler(b,z(c,b.element),e.buttonDown,D),d===!1&&a.cancelEvent(c)))}function l(b,c){var d,e=H[b.hash];c=a.getEvent(c),a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&e.capturing&&!A(c.srcElement,b.element)&&g(b,l,c);var f=c.target?c.target:c.srcElement,h=c.relatedTarget?c.relatedTarget:c.toElement;A(b.element,f)&&!A(b.element,h)&&(e.insideElement=!1,b.exitHandler&&(d=b.exitHandler(b,z(c,b.element),e.buttonDown,D),d===!1&&a.cancelEvent(c)))}function m(b,c,d){var f,g=H[b.hash];c=a.getEvent(c),2!=c.button&&(g.buttonDown=!0,g.lastPoint=y(c),g.lastMouseDownPoint=g.lastPoint,g.lastMouseDownTime=a.now(),b.pressHandler&&(f=b.pressHandler(b,z(c,b.element)),f===!1&&a.cancelEvent(c)),(b.pressHandler||b.dragHandler)&&a.cancelEvent(c),d||(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&E?a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&G.push(b):(e(b),E=!0,G=[b])))}function n(b,c){var d,e;1==c.touches.length&&1==c.targetTouches.length&&1==c.changedTouches.length&&(H[b.hash].lastTouch=c.touches[0],k(b,c.changedTouches[0]),m(b,c.touches[0],!0)),2==c.touches.length&&(d=y(c.touches[0]),e=y(c.touches[1]),H[b.hash].lastPinchDelta=Math.abs(d.x-e.x)+Math.abs(d.y-e.y),H[b.hash].pinchMidpoint=new a.Point((d.x+e.x)/2,(d.y+e.y)/2)),c.preventDefault()}function o(b,c){var d,e=H[b.hash],f=e.buttonDown,g=e.insideElement;c=a.getEvent(c),2!=c.button&&(e.buttonDown=!1,b.releaseHandler&&(d=b.releaseHandler(b,z(c,b.element),f,g),d===!1&&a.cancelEvent(c)),f&&g&&u(b,c))}function p(a,b){0===b.touches.length&&0===b.targetTouches.length&&1==b.changedTouches.length&&(H[a.hash].lastTouch=null,r(a,b.changedTouches[0],!0),l(a,b.changedTouches[0])),2==b.touches.length+b.changedTouches.length&&(H[a.hash].lastPinchDelta=null,H[a.hash].pinchMidpoint=null),b.preventDefault()}function q(b,c){var e,g;if(c=a.getEvent(c),2!=c.button){for(g=0;g<G.length;g++)e=G[g],d(e)||o(e,c);f(b),E=!1,c.srcElement.fireEvent("on"+c.type,document.createEventObject(c)),a.stopEvent(c)}}function r(a,b,c){H[a.hash].insideElement||o(a,b),c||f(a)}function s(b,c){b.clickHandler&&a.cancelEvent(c)}function t(b,c){var d,e=0;c||(c=window.event),c.wheelDelta?(e=c.wheelDelta,window.opera&&(e=-e)):c.detail&&(e=-c.detail),e=e>0?1:-1,b.scrollHandler&&(d=b.scrollHandler(b,z(c,b.element),e,c.shiftKey),d===!1&&a.cancelEvent(c))}function u(b,c){var d,e=H[b.hash];if(c=a.getEvent(c),2!=c.button){var f=a.now()-e.lastMouseDownTime,g=y(c),h=e.lastMouseDownPoint.distanceTo(g),i=f<=b.clickTimeThreshold&&h<=b.clickDistThreshold;b.clickHandler&&(d=b.clickHandler(b,z(c,b.element),i,c.shiftKey),d===!1&&a.cancelEvent(c))}}function v(b,c){var d,e,f,g=H[b.hash];c=a.getEvent(c),f=y(c),d=f.minus(g.lastPoint),g.lastPoint=f,b.dragHandler&&(e=b.dragHandler(b,z(c,b.element),d,c.shiftKey),e===!1&&a.cancelEvent(c))}function w(a,b){var c,d,e;H[a.hash].lastTouch&&(1===b.touches.length&&1===b.targetTouches.length&&1===b.changedTouches.length&&H[a.hash].lastTouch.identifier===b.touches[0].identifier?v(a,b.touches[0]):2===b.touches.length&&(c=y(b.touches[0]),d=y(b.touches[1]),e=Math.abs(c.x-d.x)+Math.abs(c.y-d.y),Math.abs(H[a.hash].lastPinchDelta-e)>75&&(t(a,{shift:!1,pageX:H[a.hash].pinchMidpoint.x,pageY:H[a.hash].pinchMidpoint.y,detail:H[a.hash].lastPinchDelta>e?1:-1}),H[a.hash].lastPinchDelta=e)),b.preventDefault())}function x(b,c){var d;for(d=0;d<G.length;d++)v(G[d],c);a.stopEvent(c)}function y(b){return a.getMousePosition(b)}function z(b,c){var d=a.getMousePosition(b),e=a.getElementPosition(c);return d.minus(e)}function A(a,b){for(var c=document.body;b&&a!=b&&c!=b;)try{b=b.parentNode}catch(d){return!1}return a==b}function B(){D=!0}function C(){D=!1}var D=!1,E=!1,F={},G=[],H={};a.MouseTracker=function(b){var c=arguments;a.isPlainObject(b)||(b={element:c[0],clickTimeThreshold:c[1],clickDistThreshold:c[2]}),this.hash=Math.random(),this.element=a.getElement(b.element),this.clickTimeThreshold=b.clickTimeThreshold,this.clickDistThreshold=b.clickDistThreshold,this.enterHandler=b.enterHandler||null,this.exitHandler=b.exitHandler||null,this.pressHandler=b.pressHandler||null,this.releaseHandler=b.releaseHandler||null,this.scrollHandler=b.scrollHandler||null,this.clickHandler=b.clickHandler||null,this.dragHandler=b.dragHandler||null,this.keyHandler=b.keyHandler||null,this.focusHandler=b.focusHandler||null,this.blurHandler=b.blurHandler||null;var d=this;H[this.hash]={mouseover:function(a){k(d,a)},mouseout:function(a){l(d,a)},mousedown:function(a){m(d,a)},mouseup:function(a){o(d,a)},click:function(a){s(d,a)},DOMMouseScroll:function(a){t(d,a)},mousewheel:function(a){t(d,a)},mouseupie:function(a){q(d,a)},mousemoveie:function(a){x(d,a)},mouseupwindow:function(a){r(d,a)},mousemove:function(a){v(d,a)},touchstart:function(a){n(d,a)},touchmove:function(a){w(d,a)},touchend:function(a){p(d,a)},keypress:function(a){j(d,a)},focus:function(a){h(d,a)},blur:function(a){i(d,a)},tracking:!1,capturing:!1,buttonDown:!1,insideElement:!1,lastPoint:null,lastMouseDownTime:null,lastMouseDownPoint:null,lastPinchDelta:0}},a.MouseTracker.prototype={destroy:function(){c(this),this.element=null},isTracking:function(){return H[this.hash].tracking},setTracking:function(a){return a?b(this):c(this),this},enterHandler:function(){},exitHandler:function(){},pressHandler:function(){},releaseHandler:function(){},scrollHandler:function(){},clickHandler:function(){},dragHandler:function(){},keyHandler:function(){},focusHandler:function(){},blurHandler:function(){}},function(){a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.addEvent(document,"mousedown",B,!1),a.addEvent(document,"mouseup",C,!1)):(a.addEvent(window,"mousedown",B,!0),a.addEvent(window,"mouseup",C,!0))}()}(OpenSeadragon),function(a){a.ControlAnchor={NONE:0,TOP_LEFT:1,TOP_RIGHT:2,BOTTOM_RIGHT:3,BOTTOM_LEFT:4},a.Control=function(b,c,d){var e=b.parentNode;"number"==typeof c&&(a.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"),c={anchor:c}),c.attachToViewer="undefined"==typeof c.attachToViewer?!0:c.attachToViewer,this.autoFade="undefined"==typeof c.autoFade?!0:c.autoFade,this.element=b,this.anchor=c.anchor,this.container=d,this.wrapper=a.makeNeutralElement("span"),this.wrapper.style.display="inline-block",this.wrapper.appendChild(this.element),this.anchor==a.ControlAnchor.NONE&&(this.wrapper.style.width=this.wrapper.style.height="100%"),c.attachToViewer?this.anchor==a.ControlAnchor.TOP_RIGHT||this.anchor==a.ControlAnchor.BOTTOM_RIGHT?this.container.insertBefore(this.wrapper,this.container.firstChild):this.container.appendChild(this.wrapper):e.appendChild(this.wrapper)},a.Control.prototype={destroy:function(){this.wrapper.removeChild(this.element),this.container.removeChild(this.wrapper)},isVisible:function(){return"none"!=this.wrapper.style.display},setVisible:function(a){this.wrapper.style.display=a?"inline-block":"none"},setOpacity:function(b){this.element[a.SIGNAL]&&a.Browser.vendor==a.BROWSERS.IE?a.setElementOpacity(this.element,b,!0):a.setElementOpacity(this.wrapper,b,!0)}}}(OpenSeadragon),function(a){function b(a,b){var c,d=a.controls;for(c=d.length-1;c>=0;c--)if(d[c].element==b)return c;return-1}a.ControlDock=function(b){var c,d,e=["topleft","topright","bottomright","bottomleft"];for(a.extend(!0,this,{id:"controldock-"+a.now()+"-"+Math.floor(1e6*Math.random()),container:a.makeNeutralElement("form"),controls:[]},b),this.container.onsubmit=function(){return!1},this.element&&(this.element=a.getElement(this.element),this.element.appendChild(this.container),this.element.style.position="relative",this.container.style.width="100%",this.container.style.height="100%"),d=0;d<e.length;d++)c=e[d],this.controls[c]=a.makeNeutralElement("div"),this.controls[c].style.position="absolute",c.match("left")&&(this.controls[c].style.left="0px"),c.match("right")&&(this.controls[c].style.right="0px"),c.match("top")&&(this.controls[c].style.top="0px"),c.match("bottom")&&(this.controls[c].style.bottom="0px");this.container.appendChild(this.controls.topleft),this.container.appendChild(this.controls.topright),this.container.appendChild(this.controls.bottomright),this.container.appendChild(this.controls.bottomleft)},a.ControlDock.prototype={addControl:function(c,d){c=a.getElement(c);var e=null;if(!(b(this,c)>=0)){switch(d.anchor){case a.ControlAnchor.TOP_RIGHT:e=this.controls.topright,c.style.position="relative",c.style.paddingRight="0px",c.style.paddingTop="0px";break;case a.ControlAnchor.BOTTOM_RIGHT:e=this.controls.bottomright,c.style.position="relative",c.style.paddingRight="0px",c.style.paddingBottom="0px";break;case a.ControlAnchor.BOTTOM_LEFT:e=this.controls.bottomleft,c.style.position="relative",c.style.paddingLeft="0px",c.style.paddingBottom="0px";break;case a.ControlAnchor.TOP_LEFT:e=this.controls.topleft,c.style.position="relative",c.style.paddingLeft="0px",c.style.paddingTop="0px";break;default:case a.ControlAnchor.NONE:e=this.container,c.style.margin="0px",c.style.padding="0px"}this.controls.push(new a.Control(c,d,e)),c.style.display="inline-block"}},removeControl:function(c){c=a.getElement(c);var d=b(this,c);return d>=0&&(this.controls[d].destroy(),this.controls.splice(d,1)),this},clearControls:function(){for(;this.controls.length>0;)this.controls.pop().destroy();return this},areControlsEnabled:function(){var a;for(a=this.controls.length-1;a>=0;a--)if(this.controls[a].isVisible())return!0;return!1},setControlsEnabled:function(a){var b;for(b=this.controls.length-1;b>=0;b--)this.controls[b].setVisible(a);return this}}}(OpenSeadragon),function($){function _getSafeElemSize(a){return a=$.getElement(a),new $.Point(0===a.clientWidth?1:a.clientWidth,0===a.clientHeight?1:a.clientHeight)}function openTileSource(a,b){var c,d,e=a;for(e.source&&e.close(),e.canvas.innerHTML="",THIS[e.hash].prevContainerSize=_getSafeElemSize(e.container),e.collectionMode?(e.source=new $.TileSourceCollection({rows:e.collectionRows,layout:e.collectionLayout,tileSize:e.collectionTileSize,tileSources:e.tileSources,tileMargin:e.collectionTileMargin}),e.viewport=e.viewport?e.viewport:new $.Viewport({collectionMode:!0,collectionTileSource:e.source,containerSize:THIS[e.hash].prevContainerSize,contentSize:e.source.dimensions,springStiffness:e.springStiffness,animationTime:e.animationTime,showNavigator:!1,minZoomImageRatio:1,maxZoomPixelRatio:1,viewer:e})):(b&&(e.source=b),e.viewport=e.viewport?e.viewport:new $.Viewport({containerSize:THIS[e.hash].prevContainerSize,contentSize:e.source.dimensions,springStiffness:e.springStiffness,animationTime:e.animationTime,minZoomImageRatio:e.minZoomImageRatio,maxZoomPixelRatio:e.maxZoomPixelRatio,visibilityRatio:e.visibilityRatio,wrapHorizontal:e.wrapHorizontal,wrapVertical:e.wrapVertical,defaultZoomLevel:e.defaultZoomLevel,minZoomLevel:e.minZoomLevel,maxZoomLevel:e.maxZoomLevel,viewer:e})),e.preserveViewport&&e.viewport.resetContentSize(e.source.dimensions),e.source.overlays=e.source.overlays||[],e.drawer=new $.Drawer({viewer:e,source:e.source,viewport:e.viewport,element:e.canvas,overlays:[].concat(e.overlays).concat(e.source.overlays),maxImageCacheCount:e.maxImageCacheCount,imageLoaderLimit:e.imageLoaderLimit,minZoomImageRatio:e.minZoomImageRatio,wrapHorizontal:e.wrapHorizontal,wrapVertical:e.wrapVertical,immediateRender:e.immediateRender,blendTime:e.blendTime,alwaysBlend:e.alwaysBlend,minPixelRatio:e.collectionMode?0:e.minPixelRatio,timeout:e.timeout,debugMode:e.debugMode,debugGridColor:e.debugGridColor}),e.showNavigator&&!e.collectionMode&&(e.navigator?e.navigator.open(b):e.navigator=new $.Navigator({id:e.navigatorId,position:e.navigatorPosition,sizeRatio:e.navigatorSizeRatio,height:e.navigatorHeight,width:e.navigatorWidth,tileSources:b,tileHost:e.tileHost,prefixUrl:e.prefixUrl,overlays:e.overlays,viewer:e})),e.showReferenceStrip&&!e.referenceStrip&&(e.referenceStrip=new $.ReferenceStrip({id:e.referenceStripElement,position:e.referenceStripPosition,sizeRatio:e.referenceStripSizeRatio,scroll:e.referenceStripScroll,height:e.referenceStripHeight,width:e.referenceStripWidth,tileSources:e.tileSources,tileHost:e.tileHost,prefixUrl:e.prefixUrl,overlays:e.overlays,viewer:e})),THIS[e.hash].animating=!1,THIS[e.hash].forceRedraw=!0,e._updateRequestId=scheduleUpdate(e,updateMulti),d=0;d<e.overlayControls.length;d++)c=e.overlayControls[d],c.point?e.drawer.addOverlay(c.id,new $.Point(c.point.X,c.point.Y),$.OverlayPlacement.TOP_LEFT):e.drawer.addOverlay(c.id,new $.Rect(c.rect.Point.X,c.rect.Point.Y,c.rect.Width,c.rect.Height),c.placement);return VIEWERS[e.hash]=e,e.raiseEvent("open",{source:b,viewer:e}),e}function scheduleUpdate(a,b){return $.requestAnimationFrame(function(){b(a)})}function scheduleControlsFade(a){$.requestAnimationFrame(function(){updateControlsFade(a)})}function beginControlsAutoHide(a){a.autoHideControls&&(a.controlsShouldFade=!0,a.controlsFadeBeginTime=$.now()+a.controlsFadeDelay,window.setTimeout(function(){scheduleControlsFade(a)},a.controlsFadeDelay))}function updateControlsFade(a){var b,c,d,e;if(a.controlsShouldFade){for(b=$.now(),c=b-a.controlsFadeBeginTime,d=1-c/a.controlsFadeLength,d=Math.min(1,d),d=Math.max(0,d),e=a.controls.length-1;e>=0;e--)a.controls[e].autoFade&&a.controls[e].setOpacity(d);d>0&&scheduleControlsFade(a)}}function abortControlsAutoHide(a){var b;for(a.controlsShouldFade=!1,b=a.controls.length-1;b>=0;b--)a.controls[b].setOpacity(1)}function onFocus(){abortControlsAutoHide(this)}function onBlur(){beginControlsAutoHide(this)}function onCanvasClick(a,b,c,d){var e,f;this.viewport&&c&&(e=this.zoomPerClick,f=d?1/e:e,this.viewport.zoomBy(f,this.viewport.pointFromPixel(b,!0)),this.viewport.applyConstraints()),this.raiseEvent("canvas-click",{tracker:a,position:b,quick:c,shift:d})}function onCanvasDrag(a,b,c,d){this.viewport&&(this.panHorizontal||(c.x=0),this.panVertical||(c.y=0),this.viewport.panBy(this.viewport.deltaPointsFromPixels(c.negate())),this.constrainDuringPan&&this.viewport.applyConstraints()),this.raiseEvent("canvas-drag",{tracker:a,position:b,delta:c,shift:d})}function onCanvasRelease(a,b,c,d){c&&this.viewport&&this.viewport.applyConstraints(),this.raiseEvent("canvas-release",{tracker:a,position:b,insideElementPress:c,insideElementRelease:d})
}function onCanvasScroll(a,b,c,d){var e;return this.viewport&&(e=Math.pow(this.zoomPerScroll,c),this.viewport.zoomBy(e,this.viewport.pointFromPixel(b,!0)),this.viewport.applyConstraints()),this.raiseEvent("canvas-scroll",{tracker:a,position:b,scroll:c,shift:d}),!1}function onContainerExit(a,b,c,d){c||(THIS[this.hash].mouseInside=!1,THIS[this.hash].animating||beginControlsAutoHide(this)),this.raiseEvent("container-exit",{tracker:a,position:b,buttonDownElement:c,buttonDownAny:d})}function onContainerRelease(a,b,c,d){d||(THIS[this.hash].mouseInside=!1,THIS[this.hash].animating||beginControlsAutoHide(this)),this.raiseEvent("container-release",{tracker:a,position:b,insideElementPress:c,insideElementRelease:d})}function onContainerEnter(a,b,c,d){THIS[this.hash].mouseInside=!0,abortControlsAutoHide(this),this.raiseEvent("container-enter",{tracker:a,position:b,buttonDownElement:c,buttonDownAny:d})}function updateMulti(a){return a.source?(updateOnce(a),a.source&&(a._updateRequestId=scheduleUpdate(a,updateMulti)),void 0):(a._updateRequestId=null,void 0)}function updateOnce(a){var b,c;a.source&&(b=_getSafeElemSize(a.container),b.equals(THIS[a.hash].prevContainerSize)||(a.viewport.resize(b,!0),THIS[a.hash].prevContainerSize=b),c=a.viewport.update(),a.referenceStrip&&(c=a.referenceStrip.update(a.viewport)||c),!THIS[a.hash].animating&&c&&(a.raiseEvent("animationstart"),abortControlsAutoHide(a)),c?(a.drawer.update(),a.navigator&&a.navigator.update(a.viewport),a.raiseEvent("animation")):(THIS[a.hash].forceRedraw||a.drawer.needsUpdate())&&(a.drawer.update(),a.navigator&&a.navigator.update(a.viewport),THIS[a.hash].forceRedraw=!1),THIS[a.hash].animating&&!c&&(a.raiseEvent("animationfinish"),THIS[a.hash].mouseInside||beginControlsAutoHide(a)),THIS[a.hash].animating=c)}function resolveUrl(a,b){return a?a+b:b}function beginZoomingIn(){THIS[this.hash].lastZoomTime=$.now(),THIS[this.hash].zoomFactor=this.zoomPerSecond,THIS[this.hash].zooming=!0,scheduleZoom(this)}function beginZoomingOut(){THIS[this.hash].lastZoomTime=$.now(),THIS[this.hash].zoomFactor=1/this.zoomPerSecond,THIS[this.hash].zooming=!0,scheduleZoom(this)}function endZooming(){THIS[this.hash].zooming=!1}function scheduleZoom(a){$.requestAnimationFrame($.delegate(a,doZoom))}function doZoom(){var a,b,c;THIS[this.hash].zooming&&this.viewport&&(a=$.now(),b=a-THIS[this.hash].lastZoomTime,c=Math.pow(THIS[this.hash].zoomFactor,b/1e3),this.viewport.zoomBy(c),this.viewport.applyConstraints(),THIS[this.hash].lastZoomTime=a,scheduleZoom(this))}function doSingleZoomIn(){this.viewport&&(THIS[this.hash].zooming=!1,this.viewport.zoomBy(this.zoomPerClick/1),this.viewport.applyConstraints())}function doSingleZoomOut(){this.viewport&&(THIS[this.hash].zooming=!1,this.viewport.zoomBy(1/this.zoomPerClick),this.viewport.applyConstraints())}function lightUp(){this.buttons.emulateEnter(),this.buttons.emulateExit()}function onHome(){this.viewport&&this.viewport.goHome()}function onFullPage(){this.setFullPage(!this.isFullPage()),this.buttons&&this.buttons.emulateExit(),this.fullPageButton.element.focus(),this.viewport&&this.viewport.applyConstraints()}function onPrevious(){var a=THIS[this.hash].sequence-1;this.navPrevNextWrap&&0>a&&(a+=this.tileSources.length),this.goToPage(a)}function onNext(){var a=THIS[this.hash].sequence+1;this.navPrevNextWrap&&a>=this.tileSources.length&&(a=0),this.goToPage(a)}var THIS={},VIEWERS={};$.Viewer=function(a){var b,c=arguments,d=this;$.isPlainObject(a)||(a={id:c[0],xmlPath:c.length>1?c[1]:void 0,prefixUrl:c.length>2?c[2]:void 0,controls:c.length>3?c[3]:void 0,overlays:c.length>4?c[4]:void 0,overlayControls:c.length>5?c[5]:void 0}),a.config&&($.extend(!0,a,a.config),delete a.config),$.extend(!0,this,{id:a.id,hash:a.id,element:null,canvas:null,container:null,overlays:[],overlayControls:[],previousBody:[],customControls:[],source:null,drawer:null,drawers:[],viewport:null,navigator:null,collectionViewport:null,collectionDrawer:null,navImages:null,buttons:null,profiler:null},$.DEFAULT_SETTINGS,a),THIS[this.hash]={fsBoundsDelta:new $.Point(1,1),prevContainerSize:null,animating:!1,forceRedraw:!1,mouseInside:!1,group:null,zooming:!1,zoomFactor:null,lastZoomTime:null,sequenced:!1,sequence:0,fullPage:!1,onfullscreenchange:null},this._updateRequestId=null,$.EventHandler.call(this),this.addHandler("open-failed",function(a,b){var c=$.getString("Errors.Open-Failed",b.source,b.message);d._showMessage(c)}),$.ControlDock.call(this,a);var e;for(this.xmlPath&&(this.tileSources=[this.xmlPath]),this.tileSources&&($.isArray(this.tileSources)?(this.tileSources.length>1&&(THIS[this.hash].sequenced=!0),e=this.tileSources[0]):e=this.tileSources,this.open(e)),this.element=this.element||document.getElementById(this.id),this.canvas=$.makeNeutralElement("div"),this.keyboardCommandArea=$.makeNeutralElement("textarea"),this.canvas.className="openseadragon-canvas",function(a){a.width="100%",a.height="100%",a.overflow="hidden",a.position="absolute",a.top="0px",a.left="0px"}(this.canvas.style),this.container.className="openseadragon-container",function(a){a.width="100%",a.height="100%",a.position="relative",a.overflow="hidden",a.left="0px",a.top="0px",a.textAlign="left"}(this.container.style),this.keyboardCommandArea.className="keyboard-command-area",function(a){a.width="100%",a.height="100%",a.overflow="hidden",a.position="absolute",a.top="0px",a.left="0px",a.resize="none"}(this.keyboardCommandArea.style),this.container.insertBefore(this.canvas,this.container.firstChild),this.container.insertBefore(this.keyboardCommandArea,this.container.firstChild),this.element.appendChild(this.container),this.bodyWidth=document.body.style.width,this.bodyHeight=document.body.style.height,this.bodyOverflow=document.body.style.overflow,this.docOverflow=document.documentElement.style.overflow,this.keyboardCommandArea.innerTracker=new $.MouseTracker({_this:this,element:this.keyboardCommandArea,focusHandler:function(){var a=$.getElementPosition(this.element);window.scrollTo(0,a.y)},keyHandler:function(a,b,c){switch(b){case 61:return d.viewport.zoomBy(1.1),d.viewport.applyConstraints(),!1;case 45:return d.viewport.zoomBy(.9),d.viewport.applyConstraints(),!1;case 48:return d.viewport.goHome(),d.viewport.applyConstraints(),!1;case 119:case 87:case 38:return c?d.viewport.zoomBy(1.1):d.viewport.panBy(new $.Point(0,-.05)),d.viewport.applyConstraints(),!1;case 115:case 83:case 40:return c?d.viewport.zoomBy(.9):d.viewport.panBy(new $.Point(0,.05)),d.viewport.applyConstraints(),!1;case 97:case 37:return d.viewport.panBy(new $.Point(-.05,0)),d.viewport.applyConstraints(),!1;case 100:case 39:return d.viewport.panBy(new $.Point(.05,0)),d.viewport.applyConstraints(),!1;default:return!0}}}).setTracking(!0),this.innerTracker=new $.MouseTracker({element:this.canvas,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,clickHandler:$.delegate(this,onCanvasClick),dragHandler:$.delegate(this,onCanvasDrag),releaseHandler:$.delegate(this,onCanvasRelease),scrollHandler:$.delegate(this,onCanvasScroll)}).setTracking(this.mouseNavEnabled?!0:!1),this.outerTracker=new $.MouseTracker({element:this.container,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:$.delegate(this,onContainerEnter),exitHandler:$.delegate(this,onContainerExit),releaseHandler:$.delegate(this,onContainerRelease)}).setTracking(this.mouseNavEnabled?!0:!1),this.toolbar&&(this.toolbar=new $.ControlDock({element:this.toolbar})),this.bindStandardControls(),this.bindSequenceControls(),b=0;b<this.customControls.length;b++)this.addControl(this.customControls[b].id,{anchor:this.customControls[b].anchor});$.requestAnimationFrame(function(){beginControlsAutoHide(d)})},$.extend($.Viewer.prototype,$.EventHandler.prototype,$.ControlDock.prototype,{isOpen:function(){return!!this.source},openDzi:function(a){return this.open(a)},openTileSource:function(a){return this.open(a)},open:function(tileSource){var _this=this,customTileSource,readySource,$TileSource,options;return _this._hideMessage(),"string"==$.type(tileSource)&&(tileSource.match(/\s*<.*/)?tileSource=$.parseXml(tileSource):tileSource.match(/\s*[\{\[].*/)&&(tileSource=eval("("+tileSource+")"))),setTimeout(function(){if("string"==$.type(tileSource))tileSource=new $.TileSource(tileSource,function(a){openTileSource(_this,a)}),tileSource.addHandler("open-failed",function(a,b){_this.raiseEvent("open-failed",b)});else if($.isPlainObject(tileSource)||tileSource.nodeType)if($.isFunction(tileSource.getTileUrl))customTileSource=new $.TileSource(tileSource),customTileSource.getTileUrl=tileSource.getTileUrl,openTileSource(_this,customTileSource);else{if($TileSource=$.TileSource.determineType(_this,tileSource),!$TileSource)return _this.raiseEvent("open-failed",{message:"Unable to load TileSource",source:tileSource}),void 0;options=$TileSource.prototype.configure.apply(_this,[tileSource]),readySource=new $TileSource(options),openTileSource(_this,readySource)}else openTileSource(_this,tileSource)},1),this},close:function(){return null!==this._updateRequestId&&($.cancelAnimationFrame(this._updateRequestId),this._updateRequestId=null),this.navigator&&this.navigator.close(),this.drawer&&this.drawer.clearOverlays(),this.source=null,this.drawer=null,this.viewport=this.preserveViewport?this.viewport:null,this.canvas&&(this.canvas.innerHTML=""),VIEWERS[this.hash]=null,delete VIEWERS[this.hash],this.raiseEvent("close",{viewer:this}),this},destroy:function(){if(this.close(),this.removeAllHandlers(),this.element)for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.keyboardCommandArea&&this.keyboardCommandArea.innerTracker.destroy(),this.innerTracker&&this.innerTracker.destroy(),this.outerTracker&&this.outerTracker.destroy(),this.canvas=null,this.keyboardCommandArea=null,this.container=null,this.element=null},isMouseNavEnabled:function(){return this.innerTracker.isTracking()},setMouseNavEnabled:function(a){return this.innerTracker.setTracking(a),this.raiseEvent("mouse-enabled",{enabled:a,viewer:this}),this},areControlsEnabled:function(){var a,b=this.controls.length;for(a=0;a<this.controls.length;a++)b=b&&this.controls[a].isVisibile();return b},setControlsEnabled:function(a){return a?abortControlsAutoHide(this):beginControlsAutoHide(this),this.raiseEvent("controls-enabled",{enabled:a,viewer:this}),this},isFullPage:function(){return THIS[this.hash].fullPage},setFullPage:function(a){var b,c,d,e,f,g,h=document.body,i=h.style,j=document.documentElement.style,k=this.canvas.style,l=this;if(a!=this.isFullPage()){if(a){for(this.bodyOverflow=i.overflow,this.docOverflow=j.overflow,i.overflow="hidden",j.overflow="hidden",this.bodyWidth=i.width,this.bodyHeight=i.height,i.width="100%",i.height="100%",this.previousBody=[],THIS[this.hash].prevElementParent=this.element.parentNode,THIS[this.hash].prevNextSibling=this.element.nextSibling,THIS[this.hash].prevElementWidth=this.element.style.width,THIS[this.hash].prevElementHeight=this.element.style.height,f=h.childNodes.length,g=0;f>g;g++)this.previousBody.push(h.childNodes[0]),h.removeChild(h.childNodes[0]);this.toolbar&&this.toolbar.element&&(this.toolbar.parentNode=this.toolbar.element.parentNode,this.toolbar.nextSibling=this.toolbar.element.nextSibling,h.appendChild(this.toolbar.element),$.addClass(this.toolbar.element,"fullpage")),$.addClass(this.element,"fullpage"),h.appendChild(this.element),$.supportsFullScreen?(THIS[this.hash].onfullscreenchange=function(){$.isFullScreen()?l.setFullPage(!0):l.setFullPage(!1)},$.requestFullScreen(document.body),document.addEventListener($.fullScreenEventName,THIS[this.hash].onfullscreenchange),this.element.style.height="100%",this.element.style.width="100%"):(this.element.style.height=$.getWindowSize().y+"px",this.element.style.width=$.getWindowSize().x+"px"),this.toolbar&&this.toolbar.element&&(this.element.style.height=$.getElementSize(this.element).y-$.getElementSize(this.toolbar.element).y+"px"),THIS[this.hash].fullPage=!0,$.delegate(this,onContainerEnter)()}else{for($.supportsFullScreen&&(document.removeEventListener($.fullScreenEventName,THIS[this.hash].onfullscreenchange),$.cancelFullScreen(document)),i.overflow=this.bodyOverflow,j.overflow=this.docOverflow,i.width=this.bodyWidth,i.height=this.bodyHeight,k.backgroundColor="",k.color="",h.removeChild(this.element),f=this.previousBody.length,g=0;f>g;g++)h.appendChild(this.previousBody.shift());$.removeClass(this.element,"fullpage"),THIS[this.hash].prevElementParent.insertBefore(this.element,THIS[this.hash].prevNextSibling),this.toolbar&&this.toolbar.element&&(h.removeChild(this.toolbar.element),$.removeClass(this.toolbar.element,"fullpage"),this.toolbar.parentNode.insertBefore(this.toolbar.element,this.toolbar.nextSibling),delete this.toolbar.parentNode,delete this.toolbar.nextSibling),this.element.style.width=THIS[this.hash].prevElementWidth,this.element.style.height=THIS[this.hash].prevElementHeight,THIS[this.hash].fullPage=!1,$.delegate(this,onContainerExit)()}if(this.raiseEvent("fullpage",{fullpage:a,viewer:this}),this.viewport){if(b=this.viewport.getBounds(),this.viewport.resize(THIS[this.hash].prevContainerSize),c=this.viewport.getBounds(),a)THIS[this.hash].fsBoundsDelta=new $.Point(c.width/b.width,c.height/b.height);else{this.viewport.update(),this.viewport.zoomBy(Math.max(THIS[this.hash].fsBoundsDelta.x,THIS[this.hash].fsBoundsDelta.y),null,!0);for(e in VIEWERS)d=VIEWERS[e],d!==this&&d!=this.navigator&&(d.open(d.source),d.navigator&&d.navigator.open(d.source))}THIS[this.hash].forceRedraw=!0,updateOnce(this)}return this}},isVisible:function(){return"hidden"!=this.container.style.visibility},setVisible:function(a){return this.container.style.visibility=a?"":"hidden",this.raiseEvent("visible",{visible:a,viewer:this}),this},bindSequenceControls:function(){var a=$.delegate(this,onFocus),b=$.delegate(this,onBlur),c=$.delegate(this,onNext),d=$.delegate(this,onPrevious),e=this.navImages,f=!0;return this.showSequenceControl&&THIS[this.hash].sequenced&&((this.previousButton||this.nextButton)&&(f=!1),this.previousButton=new $.Button({element:this.previousButton?$.getElement(this.previousButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.PreviousPage"),srcRest:resolveUrl(this.prefixUrl,e.previous.REST),srcGroup:resolveUrl(this.prefixUrl,e.previous.GROUP),srcHover:resolveUrl(this.prefixUrl,e.previous.HOVER),srcDown:resolveUrl(this.prefixUrl,e.previous.DOWN),onRelease:d,onFocus:a,onBlur:b}),this.nextButton=new $.Button({element:this.nextButton?$.getElement(this.nextButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.NextPage"),srcRest:resolveUrl(this.prefixUrl,e.next.REST),srcGroup:resolveUrl(this.prefixUrl,e.next.GROUP),srcHover:resolveUrl(this.prefixUrl,e.next.HOVER),srcDown:resolveUrl(this.prefixUrl,e.next.DOWN),onRelease:c,onFocus:a,onBlur:b}),this.navPrevNextWrap||this.previousButton.disable(),f&&(this.paging=new $.ButtonGroup({buttons:[this.previousButton,this.nextButton],clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.pagingControl=this.paging.element,this.toolbar?this.toolbar.addControl(this.pagingControl,{anchor:$.ControlAnchor.BOTTOM_RIGHT}):this.addControl(this.pagingControl,{anchor:$.ControlAnchor.TOP_LEFT}))),this},bindStandardControls:function(){var a=$.delegate(this,beginZoomingIn),b=$.delegate(this,endZooming),c=$.delegate(this,doSingleZoomIn),d=$.delegate(this,beginZoomingOut),e=$.delegate(this,doSingleZoomOut),f=$.delegate(this,onHome),g=$.delegate(this,onFullPage),h=$.delegate(this,onFocus),i=$.delegate(this,onBlur),j=this.navImages,k=[],l=!0;return this.showNavigationControl&&((this.zoomInButton||this.zoomOutButton||this.homeButton||this.fullPageButton)&&(l=!1),k.push(this.zoomInButton=new $.Button({element:this.zoomInButton?$.getElement(this.zoomInButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.ZoomIn"),srcRest:resolveUrl(this.prefixUrl,j.zoomIn.REST),srcGroup:resolveUrl(this.prefixUrl,j.zoomIn.GROUP),srcHover:resolveUrl(this.prefixUrl,j.zoomIn.HOVER),srcDown:resolveUrl(this.prefixUrl,j.zoomIn.DOWN),onPress:a,onRelease:b,onClick:c,onEnter:a,onExit:b,onFocus:h,onBlur:i})),k.push(this.zoomOutButton=new $.Button({element:this.zoomOutButton?$.getElement(this.zoomOutButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.ZoomOut"),srcRest:resolveUrl(this.prefixUrl,j.zoomOut.REST),srcGroup:resolveUrl(this.prefixUrl,j.zoomOut.GROUP),srcHover:resolveUrl(this.prefixUrl,j.zoomOut.HOVER),srcDown:resolveUrl(this.prefixUrl,j.zoomOut.DOWN),onPress:d,onRelease:b,onClick:e,onEnter:d,onExit:b,onFocus:h,onBlur:i})),k.push(this.homeButton=new $.Button({element:this.homeButton?$.getElement(this.homeButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.Home"),srcRest:resolveUrl(this.prefixUrl,j.home.REST),srcGroup:resolveUrl(this.prefixUrl,j.home.GROUP),srcHover:resolveUrl(this.prefixUrl,j.home.HOVER),srcDown:resolveUrl(this.prefixUrl,j.home.DOWN),onRelease:f,onFocus:h,onBlur:i})),k.push(this.fullPageButton=new $.Button({element:this.fullPageButton?$.getElement(this.fullPageButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.FullPage"),srcRest:resolveUrl(this.prefixUrl,j.fullpage.REST),srcGroup:resolveUrl(this.prefixUrl,j.fullpage.GROUP),srcHover:resolveUrl(this.prefixUrl,j.fullpage.HOVER),srcDown:resolveUrl(this.prefixUrl,j.fullpage.DOWN),onRelease:g,onFocus:h,onBlur:i})),l&&(this.buttons=new $.ButtonGroup({buttons:k,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.navControl=this.buttons.element,this.addHandler("open",$.delegate(this,lightUp)),this.toolbar?this.toolbar.addControl(this.navControl,{anchor:$.ControlAnchor.TOP_LEFT}):this.addControl(this.navControl,{anchor:$.ControlAnchor.TOP_LEFT}))),this},goToPage:function(a){return this.raiseEvent("page",{page:a,viewer:this}),this.tileSources.length>a&&(THIS[this.hash].sequence=a,this.nextButton&&(this.tileSources.length-1===a?this.navPrevNextWrap||this.nextButton.disable():this.nextButton.enable()),this.previousButton&&(a>0?this.previousButton.enable():this.navPrevNextWrap||this.previousButton.disable()),this.open(this.tileSources[a])),$.isFunction(this.onPageChange)&&this.onPageChange({page:a,viewer:this}),this.referenceStrip&&this.referenceStrip.setFocus(a),this},_showMessage:function(a){this._hideMessage();var b=$.makeNeutralElement("div");b.appendChild(document.createTextNode(a)),this.messageDiv=$.makeCenteredNode(b),$.addClass(this.messageDiv,"openseadragon-message"),this.container.appendChild(this.messageDiv)},_hideMessage:function(){var a=this.messageDiv;a&&(a.parentNode.removeChild(a),delete this.messageDiv)}})}(OpenSeadragon),function(a){function b(b,c){var d,e,f;this.drag?this.drag=!1:this.viewer.viewport&&(e=this.viewport.deltaPointsFromPixels(c),f=this.viewer.viewport.getBounds().getSize(),d=new a.Rect(e.x-f.x/2,e.y-f.y/2,f.x,f.y),this.viewer.source.aspectRatio>this.viewer.viewport.getAspectRatio()?d.y=d.y-(this.viewerSizeInPoints.y-1/this.viewer.source.aspectRatio)/2:d.x=d.x-(this.viewerSizeInPoints.x-1)/2,this.viewer.viewport.fitBounds(d),this.viewer.viewport.applyConstraints())}function c(a,b,c){this.viewer.viewport&&(this.drag=!0,this.panHorizontal||(c.x=0),this.panVertical||(c.y=0),this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(c)))}function d(a,b,c){c&&this.viewer.viewport&&this.viewer.viewport.applyConstraints()}a.Navigator=function(e){var f,g=e.viewer,h=a.getElementSize(g.element);e.id?(this.element=document.getElementById(e.id),e.controlOptions={anchor:a.ControlAnchor.NONE,attachToViewer:!1,autoFade:!1}):(e.id="navigator-"+a.now(),this.element=a.makeNeutralElement("div"),e.controlOptions={anchor:a.ControlAnchor.TOP_RIGHT,attachToViewer:!0,autoFade:!0},e.position&&("BOTTOM_RIGHT"==e.position?e.controlOptions.anchor=a.ControlAnchor.BOTTOM_RIGHT:"BOTTOM_LEFT"==e.position?e.controlOptions.anchor=a.ControlAnchor.BOTTOM_LEFT:"TOP_RIGHT"==e.position?e.controlOptions.anchor=a.ControlAnchor.TOP_RIGHT:"TOP_LEFT"==e.position&&(e.controlOptions.anchor=a.ControlAnchor.TOP_LEFT))),this.element.id=e.id,this.element.className+=" navigator",e=a.extend(!0,{sizeRatio:a.DEFAULT_SETTINGS.navigatorSizeRatio},e,{element:this.element,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0}),e.minPixelRatio=this.minPixelRatio=g.minPixelRatio,this.viewerSizeInPoints=g.viewport.deltaPointsFromPixels(h),this.borderWidth=2,this.fudge=new a.Point(1,1),this.totalBorderWidths=new a.Point(2*this.borderWidth,2*this.borderWidth).minus(this.fudge),function(a,b){a.margin="0px",a.border=b+"px solid #555",a.padding="0px",a.background="#000",a.opacity=.8,a.overflow="hidden"}(this.element.style,this.borderWidth),this.displayRegion=a.makeNeutralElement("div"),this.displayRegion.id=this.element.id+"-displayregion",this.displayRegion.className="displayregion",function(a,b){a.position="relative",a.top="0px",a.left="0px",a.fontSize="0px",a.overflow="hidden",a.border=b+"px solid #900",a.margin="0px",a.padding="0px",a.background="transparent",a["float"]="left",a.cssFloat="left",a.styleFloat="left",a.zIndex=999999999,a.cursor="default"}(this.displayRegion.style,this.borderWidth),this.element.innerTracker=new a.MouseTracker({element:this.element,dragHandler:a.delegate(this,c),clickHandler:a.delegate(this,b),releaseHandler:a.delegate(this,d),scrollHandler:function(){return!1}}).setTracking(!0),g.addControl(this.element,e.controlOptions),e.width&&e.height?(this.element.style.width=e.width+"px",this.element.style.height=e.height+"px"):(this.element.style.width=h.x*e.sizeRatio+"px",this.element.style.height=h.y*e.sizeRatio+"px"),a.Viewer.apply(this,[e]),this.element.getElementsByTagName("form")[0].appendChild(this.displayRegion),f=this.element.getElementsByTagName("textarea")[0],f&&f.parentNode.removeChild(f)},a.extend(a.Navigator.prototype,a.EventHandler.prototype,a.Viewer.prototype,{update:function(a){var b,c,d;a&&this.viewport&&(b=a.getBounds(!0),c=this.viewport.pixelFromPoint(b.getTopLeft()),d=this.viewport.pixelFromPoint(b.getBottomRight()).minus(this.totalBorderWidths),function(a){a.top=c.y+"px",a.left=c.x+"px";var b=Math.abs(c.x-d.x),e=Math.abs(c.y-d.y);a.width=Math.max(b,0)+"px",a.height=Math.max(e,0)+"px"}(this.displayRegion.style))},open:function(b){var c=this.viewer.viewport.containerSize.times(this.sizeRatio);return this.minPixelRatio=b.tileSize>c.x||b.tileSize>c.y?Math.min(c.x,c.y)/b.tileSize:this.viewer.minPixelRatio,a.Viewer.prototype.open.apply(this,[b])}})}(OpenSeadragon),function(a){var b={Errors:{Dzc:"Sorry, we don't support Deep Zoom Collections!",Dzi:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",Xml:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",ImageFormat:"Sorry, we don't support {0}-based Deep Zoom Images.",Security:"It looks like a security restriction stopped us from loading this Deep Zoom Image.",Status:"This space unintentionally left blank ({0} {1}).","Open-Failed":"Unable to open {0}: {1}"},Tooltips:{FullPage:"Toggle full page",Home:"Go home",ZoomIn:"Zoom in",ZoomOut:"Zoom out",NextPage:"Next page",PreviousPage:"Previous page"}};a.extend(a,{getString:function(c){var d,e=c.split("."),f=null,g=arguments,h=b;for(d=0;d<e.length-1;d++)h=h[e[d]]||{};return f=h[e[d]],"string"!=typeof f&&(a.console.debug("Untranslated source string:",c),f=""),f.replace(/\{\d+\}/g,function(a){var b=parseInt(a.match(/\d+/),10)+1;return b<g.length?g[b]:""})},setString:function(a,c){var d,e=a.split("."),f=b;for(d=0;d<e.length-1;d++)f[e[d]]||(f[e[d]]={}),f=f[e[d]];f[e[d]]=c}})}(OpenSeadragon),function(a){a.Point=function(a,b){this.x="number"==typeof a?a:0,this.y="number"==typeof b?b:0},a.Point.prototype={plus:function(b){return new a.Point(this.x+b.x,this.y+b.y)},minus:function(b){return new a.Point(this.x-b.x,this.y-b.y)},times:function(b){return new a.Point(this.x*b,this.y*b)},divide:function(b){return new a.Point(this.x/b,this.y/b)},negate:function(){return new a.Point(-this.x,-this.y)},distanceTo:function(a){return Math.sqrt(Math.pow(this.x-a.x,2)+Math.pow(this.y-a.y,2))},apply:function(b){return new a.Point(b(this.x),b(this.y))},equals:function(b){return b instanceof a.Point&&this.x===b.x&&this.y===b.y},rotate:function(b,c){var d=b*Math.PI/180,e=Math.cos(d)*(this.x-c.x)-Math.sin(d)*(this.y-c.y)+c.x,f=Math.sin(d)*(this.x-c.x)+Math.cos(d)*(this.y-c.y)+c.y;return new a.Point(e,f)},toString:function(){return"("+Math.round(this.x)+","+Math.round(this.y)+")"}}}(OpenSeadragon),function($){function processResponse(xhr){var responseText=xhr.responseText,status=xhr.status,statusText,data;if(!xhr)throw new Error($.getString("Errors.Security"));if(200!==xhr.status&&0!==xhr.status)throw status=xhr.status,statusText=404==status?"Not Found":xhr.statusText,new Error($.getString("Errors.Status",status,statusText));if(responseText.match(/\s*<.*/))try{data=xhr.responseXML&&xhr.responseXML.documentElement?xhr.responseXML:$.parseXml(responseText)}catch(e){data=xhr.responseText}else data=responseText.match(/\s*[\{\[].*/)?eval("("+responseText+")"):responseText;return data}$.TileSource=function(a){var b,c,d=null,e=arguments;for(b=$.isPlainObject(a)?a:{width:e[0],height:e[1],tileSize:e[2],tileOverlap:e[3],minLevel:e[4],maxLevel:e[5]},$.EventHandler.call(this),$.extend(!0,this,b),c=0;c<arguments.length;c++)if($.isFunction(arguments[c])){d=arguments[c],this.addHandler("ready",function(a,b){d(b)});break}"string"==$.type(arguments[0])?(this.aspectRatio=1,this.dimensions=new $.Point(10,10),this.tileSize=0,this.tileOverlap=0,this.minLevel=0,this.maxLevel=0,this.ready=!1,this.getImageInfo(arguments[0])):(this.ready=!0,this.aspectRatio=b.width&&b.height?b.width/b.height:1,this.dimensions=new $.Point(b.width,b.height),this.tileSize=b.tileSize?b.tileSize:0,this.tileOverlap=b.tileOverlap?b.tileOverlap:0,this.minLevel=b.minLevel?b.minLevel:0,this.maxLevel=void 0!==b.maxLevel&&null!==b.maxLevel?b.maxLevel:b.width&&b.height?Math.ceil(Math.log(Math.max(b.width,b.height))/Math.log(2)):0,d&&$.isFunction(d)&&d(this))},$.TileSource.prototype={getLevelScale:function(a){var b,c={};for(b=0;b<=this.maxLevel;b++)c[b]=1/Math.pow(2,this.maxLevel-b);return this.getLevelScale=function(a){return c[a]},this.getLevelScale(a)},getNumTiles:function(a){var b=this.getLevelScale(a),c=Math.ceil(b*this.dimensions.x/this.tileSize),d=Math.ceil(b*this.dimensions.y/this.tileSize);return new $.Point(c,d)},getPixelRatio:function(a){var b=this.dimensions.times(this.getLevelScale(a)),c=1/b.x,d=1/b.y;return new $.Point(c,d)},getClosestLevel:function(a){var b,c,d=Math.floor(Math.max(a.x,a.y)/this.tileSize);for(b=this.minLevel;b<this.maxLevel&&(c=this.getNumTiles(b),!(Math.max(c.x,c.y)+1>=d));b++);return Math.max(0,b-1)},getTileAtPoint:function(a,b){var c=b.times(this.dimensions.x).times(this.getLevelScale(a)),d=Math.floor(c.x/this.tileSize),e=Math.floor(c.y/this.tileSize);return new $.Point(d,e)},getTileBounds:function(a,b,c){var d=this.dimensions.times(this.getLevelScale(a)),e=0===b?0:this.tileSize*b-this.tileOverlap,f=0===c?0:this.tileSize*c-this.tileOverlap,g=this.tileSize+(0===b?1:2)*this.tileOverlap,h=this.tileSize+(0===c?1:2)*this.tileOverlap,i=1/d.x;return g=Math.min(g,d.x-e),h=Math.min(h,d.y-f),new $.Rect(e*i,f*i,g*i,h*i)},getImageInfo:function(a){var b,c,d,e,f,g,h,i=this;a&&(f=a.split("/"),g=f[f.length-1],h=g.lastIndexOf("."),h>-1&&(f[f.length-1]=g.slice(0,h))),c=function(b){var c=$.TileSource.determineType(i,b,a);return c?(e=c.prototype.configure.apply(i,[b,a]),d=new c(e),i.ready=!0,i.raiseEvent("ready",d),void 0):(i.raiseEvent("open-failed",{message:"Unable to load TileSource",source:a}),void 0)},a.match(/\.js$/)?(b=a.split("/").pop().replace(".js",""),$.jsonp({url:a,async:!1,callbackName:b,callback:c})):$.makeAjaxRequest(a,function(a){var b=processResponse(a);c(b)},function(b,c){var d;try{d="HTTP "+b.status+" attempting to load TileSource"}catch(e){var f;f="undefined"!=typeof c&&c.toString?c.toString():"Unknown error",d=f+" attempting to load TileSource"}i.raiseEvent("open-failed",{message:d,source:a})})},supports:function(){return!1},configure:function(){throw new Error("Method not implemented.")},getTileUrl:function(){throw new Error("Method not implemented.")},tileExists:function(a,b,c){var d=this.getNumTiles(a);return a>=this.minLevel&&a<=this.maxLevel&&b>=0&&c>=0&&b<d.x&&c<d.y}},$.extend(!0,$.TileSource.prototype,$.EventHandler.prototype),$.TileSource.determineType=function(a,b,c){var d;for(d in OpenSeadragon)if(d.match(/.+TileSource$/)&&$.isFunction(OpenSeadragon[d])&&$.isFunction(OpenSeadragon[d].prototype.supports)&&OpenSeadragon[d].prototype.supports.call(a,b,c))return OpenSeadragon[d];$.console.error("No TileSource was able to open %s %s",c,b)}}(OpenSeadragon),function(a){function b(b,d){if(!d||!d.documentElement)throw new Error(a.getString("Errors.Xml"));var e,f,g,h,i,j=d.documentElement,k=j.tagName,l=null,m=[];if("Image"==k)try{if(h=j.getElementsByTagName("Size")[0],l={Image:{xmlns:"http://schemas.microsoft.com/deepzoom/2008",Url:j.getAttribute("Url"),Format:j.getAttribute("Format"),DisplayRect:null,Overlap:parseInt(j.getAttribute("Overlap"),10),TileSize:parseInt(j.getAttribute("TileSize"),10),Size:{Height:parseInt(h.getAttribute("Height"),10),Width:parseInt(h.getAttribute("Width"),10)}}},!a.imageFormatSupported(l.Image.Format))throw new Error(a.getString("Errors.ImageFormat",l.Image.Format.toUpperCase()));for(e=j.getElementsByTagName("DisplayRect"),i=0;i<e.length;i++)f=e[i],g=f.getElementsByTagName("Rect")[0],m.push({Rect:{X:parseInt(g.getAttribute("X"),10),Y:parseInt(g.getAttribute("Y"),10),Width:parseInt(g.getAttribute("Width"),10),Height:parseInt(g.getAttribute("Height"),10),MinLevel:parseInt(f.getAttribute("MinLevel"),10),MaxLevel:parseInt(f.getAttribute("MaxLevel"),10)}});return m.length&&(l.Image.DisplayRect=m),c(b,l)}catch(n){throw n instanceof Error?n:new Error(a.getString("Errors.Dzi"))}else{if("Collection"==k)throw new Error(a.getString("Errors.Dzc"));if("Error"==k)return a._processDZIError(j)}throw new Error(a.getString("Errors.Dzi"))}function c(b,c){var d,e,f=c.Image,g=f.Url,h=f.Format,i=f.Size,j=f.DisplayRect||[],k=parseInt(i.Width,10),l=parseInt(i.Height,10),m=parseInt(f.TileSize,10),n=parseInt(f.Overlap,10),o=[];for(e=0;e<j.length;e++)d=j[e].Rect,o.push(new a.DisplayRect(parseInt(d.X,10),parseInt(d.Y,10),parseInt(d.Width,10),parseInt(d.Height,10),parseInt(d.MinLevel,10),parseInt(d.MaxLevel,10)));return a.extend(!0,{width:k,height:l,tileSize:m,tileOverlap:n,minLevel:null,maxLevel:null,tilesUrl:g,fileFormat:h,displayRects:o},c)}a.DziTileSource=function(b){var c,d,e,f;if(f=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4],fileFormat:arguments[5],displayRects:arguments[6],minLevel:arguments[7],maxLevel:arguments[8]},this._levelRects={},this.tilesUrl=f.tilesUrl,this.fileFormat=f.fileFormat,this.displayRects=f.displayRects,this.displayRects)for(c=this.displayRects.length-1;c>=0;c--)for(d=this.displayRects[c],e=d.minLevel;e<=d.maxLevel;e++)this._levelRects[e]||(this._levelRects[e]=[]),this._levelRects[e].push(d);a.TileSource.apply(this,[f])},a.extend(a.DziTileSource.prototype,a.TileSource.prototype,{supports:function(a){var b;return a.Image?b=a.Image.xmlns:a.documentElement&&"Image"==a.documentElement.tagName&&(b=a.documentElement.namespaceURI),"http://schemas.microsoft.com/deepzoom/2008"==b||"http://schemas.microsoft.com/deepzoom/2009"==b},configure:function(d,e){var f;return f=a.isPlainObject(d)?c(this,d):b(this,d),e&&!f.tilesUrl&&(f.tilesUrl=e.replace(/([^\/]+)\.(dzi|xml|js)$/,"$1_files/")),f
},getTileUrl:function(a,b,c){return[this.tilesUrl,a,"/",b,"_",c,".",this.fileFormat].join("")},tileExists:function(a,b,c){var d,e,f,g,h,i,j,k=this._levelRects[a];if(!k||!k.length)return!0;for(j=k.length-1;j>=0;j--)if(d=k[j],!(a<d.minLevel||a>d.maxLevel)&&(e=this.getLevelScale(a),f=d.x*e,g=d.y*e,h=f+d.width*e,i=g+d.height*e,f=Math.floor(f/this.tileSize),g=Math.floor(g/this.tileSize),h=Math.ceil(h/this.tileSize),i=Math.ceil(i/this.tileSize),b>=f&&h>b&&c>=g&&i>c))return!0;return!1}})}(OpenSeadragon),function(a){function b(b,e){if(!e||!e.documentElement)throw new Error(a.getString("Errors.Xml"));var f=e.documentElement,g=f.tagName,h=null;if("info"==g)try{return h={ns:f.namespaceURI},c(f,h),d(b,h)}catch(i){throw i instanceof Error?i:new Error(a.getString("Errors.IIIF"))}throw new Error(a.getString("Errors.IIIF"))}function c(b,d,e){var f,g;if(3==b.nodeType&&e)g=b.nodeValue.trim(),g.match(/^\d*$/)&&(g=Number(g)),d[e]?(a.isArray(d[e])||(d[e]=[d[e]]),d[e].push(g)):d[e]=g;else if(1==b.nodeType)for(f=0;f<b.childNodes.length;f++)c(b.childNodes[f],d,b.nodeName)}function d(a,b){return b.image_host&&(b.tilesUrl=b.image_host),b}a.IIIFTileSource=function(b){if(a.extend(!0,this,b),!(this.height&&this.width&&this.identifier&&this.tilesUrl))throw new Error("IIIF required parameters not provided.");if(b.tileSize=this.tile_width,!b.maxLevel){var c=-1,d=this.scale_factors||this.scale_factor;if(d instanceof Array)for(var e=0;e<d.length;e++){var f=Number(d[e]);!isNaN(f)&&f>c&&(c=f)}b.maxLevel=0>c?Number(Math.ceil(Math.log(Math.max(this.width,this.height),2))):c}a.TileSource.apply(this,[b])},a.extend(a.IIIFTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.ns&&"http://library.stanford.edu/iiif/image-api/ns/"==a.ns||a.profile&&("http://library.stanford.edu/iiif/image-api/compliance.html#level1"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html#level2"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html#level3"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html"==a.profile)||a.documentElement&&"info"==a.documentElement.tagName&&"http://library.stanford.edu/iiif/image-api/ns/"==a.documentElement.namespaceURI},configure:function(c,e){var f,g,h;return g=a.isPlainObject(c)?d(this,c):b(this,c),e&&!g.tilesUrl&&(f=e.split("/"),f.pop(),f=f.join("/"),"http"!==e.substring(0,4)&&(h=location.protocol+"//"+location.host,f=h+f),g.tilesUrl=f.replace(c.identifier,"")),g},getTileUrl:function(a,b,c){var d,e,f,g,h,i="0",j="native.jpg",k=Math.pow(.5,this.maxLevel-a),l="pct:"+100*k,m=Math.ceil(this.width*k),n=Math.ceil(this.height*k),o=Math.ceil(this.tileSize/k),p=Math.ceil(this.tileSize/k);return m<this.tile_width&&n<this.tile_height?d="full":(e=b*o,f=c*p,g=Math.min(o,this.width-e),h=Math.min(p,this.height-f),d=[e,f,g,h].join(",")),[this.tilesUrl,this.identifier,d,l,i,j].join("/")}})}(OpenSeadragon),function(a){a.OsmTileSource=function(b){var c;c=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]},c.width&&c.height||(c.width=65572864,c.height=65572864),c.tileSize||(c.tileSize=256,c.tileOverlap=0),c.tilesUrl||(c.tilesUrl="http://tile.openstreetmap.org/"),c.minLevel=8,a.TileSource.apply(this,[c])},a.extend(a.OsmTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"openstreetmaps"==a.type},configure:function(a){return a},getTileUrl:function(a,b,c){return this.tilesUrl+(a-8)+"/"+b+"/"+c+".png"}})}(OpenSeadragon),function(a){a.TmsTileSource=function(b){var c;c=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]};var d,e=256*Math.ceil(c.width/256),f=256*Math.ceil(c.height/256);d=e>f?e/256:f/256,c.maxLevel=Math.ceil(Math.log(d)/Math.log(2))-1,c.tileSize=256,c.width=e,c.height=f,a.TileSource.apply(this,[c])},a.extend(a.TmsTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"tiledmapservice"==a.type},configure:function(a){return a},getTileUrl:function(a,b,c){var d=this.getNumTiles(a).y-1;return this.tilesUrl+a+"/"+b+"/"+(d-c)+".png"}})}(OpenSeadragon),function(a){function b(b){var c,d,e=[];for(d=0;d<b.length;d++)c=b[d],c.height&&c.width&&c.url&&(c.url.toLowerCase().match(/^.*\.(png|jpg|jpeg|gif)$/)||c.mimetype&&c.mimetype.toLowerCase().match(/^.*\/(png|jpg|jpeg|gif)$/))?e.push({url:c.url,width:Number(c.width),height:Number(c.height)}):a.console.error("Unsupported image format: %s",c.url?c.url:"<no URL>");return e.sort(function(a,b){return a.height-b.height})}function c(b,c){if(!c||!c.documentElement)throw new Error(a.getString("Errors.Xml"));var e,f,g=c.documentElement,h=g.tagName,i=null,j=[];if("image"==h)try{for(i={type:g.getAttribute("type"),levels:[]},j=g.getElementsByTagName("level"),f=0;f<j.length;f++)e=j[f],i.levels.push({url:e.getAttribute("url"),width:parseInt(e.getAttribute("width"),10),height:parseInt(e.getAttribute("height"),10)});return d(b,i)}catch(k){throw k instanceof Error?k:new Error("Unknown error parsing Legacy Image Pyramid XML.")}else{if("collection"==h)throw new Error("Legacy Image Pyramid Collections not yet supported.");if("error"==h)throw new Error("Error: "+c)}throw new Error("Unknown element "+h)}function d(a,b){return b.levels}a.LegacyTileSource=function(c){var d,e,f;a.isArray(c)&&(d={type:"legacy-image-pyramid",levels:c}),d.levels=b(d.levels),d.levels.length>0?(e=d.levels[d.levels.length-1].width,f=d.levels[d.levels.length-1].height):(e=0,f=0,a.console.error("No supported image formats found")),a.extend(!0,d,{width:e,height:f,tileSize:Math.max(f,e),tileOverlap:0,minLevel:0,maxLevel:d.levels.length>0?d.levels.length-1:0}),a.TileSource.apply(this,[d]),this.levels=d.levels},a.extend(a.LegacyTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"legacy-image-pyramid"==a.type||a.documentElement&&"legacy-image-pyramid"==a.documentElement.getAttribute("type")},configure:function(b){var e;return e=a.isPlainObject(b)?d(this,b):c(this,b)},getLevelScale:function(a){var b=0/0;return this.levels.length>0&&a>=this.minLevel&&a<=this.maxLevel&&(b=this.levels[a].width/this.levels[this.maxLevel].width),b},getNumTiles:function(b){var c=this.getLevelScale(b);return c?new a.Point(1,1):new a.Point(0,0)},getTileAtPoint:function(){return new a.Point(0,0)},getTileUrl:function(a){var b=null;return this.levels.length>0&&a>=this.minLevel&&a<=this.maxLevel&&(b=this.levels[a].url),b}})}(OpenSeadragon),function(a){a.TileSourceCollection=function(b){var c;c=a.isPlainObject(b)?b:{tileSize:arguments[0],tileSources:arguments[1],rows:arguments[2],layout:arguments[3]},c.layout||(c.layout="horizontal");var d=0,e=1,f=Math.ceil(c.tileSources.length/c.rows),g=f>=c.rows?f:c.rows;for("horizontal"==c.layout?(c.width=c.tileSize*f,c.height=c.tileSize*c.rows):(c.height=c.tileSize*f,c.width=c.tileSize*c.rows),c.tileOverlap=-c.tileMargin,c.tilesPerRow=f;e<c.tileSize*g;)e=2*e,d++;c.minLevel=d,a.TileSource.apply(this,[c])},a.extend(a.TileSourceCollection.prototype,a.TileSource.prototype,{getTileBounds:function(b,c,d){var e=this.dimensions.times(this.getLevelScale(b)),f=this.tileSize*c-this.tileOverlap,g=this.tileSize*d-this.tileOverlap,h=this.tileSize+1*this.tileOverlap,i=this.tileSize+1*this.tileOverlap,j=1/e.x;return h=Math.min(h,e.x-f),i=Math.min(i,e.y-g),new a.Rect(f*j,g*j,h*j,i*j)},configure:function(){},getTileUrl:function(){return null}})}(OpenSeadragon),function(a){function b(b){a.requestAnimationFrame(function(){c(b)})}function c(c){var d,e,f;c.shouldFade&&(d=a.now(),e=d-c.fadeBeginTime,f=1-e/c.fadeLength,f=Math.min(1,f),f=Math.max(0,f),c.imgGroup&&a.setElementOpacity(c.imgGroup,f,!0),f>0&&b(c))}function d(c){c.shouldFade=!0,c.fadeBeginTime=a.now()+c.fadeDelay,window.setTimeout(function(){b(c)},c.fadeDelay)}function e(b){b.shouldFade=!1,b.imgGroup&&a.setElementOpacity(b.imgGroup,1,!0)}function f(b,c){b.element.disabled||(c>=a.ButtonState.GROUP&&b.currentState==a.ButtonState.REST&&(e(b),b.currentState=a.ButtonState.GROUP),c>=a.ButtonState.HOVER&&b.currentState==a.ButtonState.GROUP&&(b.imgHover&&(b.imgHover.style.visibility=""),b.currentState=a.ButtonState.HOVER),c>=a.ButtonState.DOWN&&b.currentState==a.ButtonState.HOVER&&(b.imgDown&&(b.imgDown.style.visibility=""),b.currentState=a.ButtonState.DOWN))}function g(b,c){b.element.disabled||(c<=a.ButtonState.HOVER&&b.currentState==a.ButtonState.DOWN&&(b.imgDown&&(b.imgDown.style.visibility="hidden"),b.currentState=a.ButtonState.HOVER),c<=a.ButtonState.GROUP&&b.currentState==a.ButtonState.HOVER&&(b.imgHover&&(b.imgHover.style.visibility="hidden"),b.currentState=a.ButtonState.GROUP),c<=a.ButtonState.REST&&b.currentState==a.ButtonState.GROUP&&(d(b),b.currentState=a.ButtonState.REST))}a.ButtonState={REST:0,GROUP:1,HOVER:2,DOWN:3},a.Button=function(b){var c=this;a.EventHandler.call(this),a.extend(!0,this,{tooltip:null,srcRest:null,srcGroup:null,srcHover:null,srcDown:null,clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:a.DEFAULT_SETTINGS.clickDistThreshold,fadeDelay:0,fadeLength:2e3,onPress:null,onRelease:null,onClick:null,onEnter:null,onExit:null,onFocus:null,onBlur:null},b),this.element=b.element||a.makeNeutralElement("button"),this.element.href=this.element.href||"#",b.element||(this.imgRest=a.makeTransparentImage(this.srcRest),this.imgGroup=a.makeTransparentImage(this.srcGroup),this.imgHover=a.makeTransparentImage(this.srcHover),this.imgDown=a.makeTransparentImage(this.srcDown),this.element.appendChild(this.imgRest),this.element.appendChild(this.imgGroup),this.element.appendChild(this.imgHover),this.element.appendChild(this.imgDown),this.imgGroup.style.position=this.imgHover.style.position=this.imgDown.style.position="absolute",this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="0px",this.imgGroup.style.left=this.imgHover.style.left=this.imgDown.style.left="0px",this.imgHover.style.visibility=this.imgDown.style.visibility="hidden",a.Browser.vendor==a.BROWSERS.FIREFOX&&a.Browser.version<3&&(this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="")),this.addHandler("onPress",this.onPress),this.addHandler("onRelease",this.onRelease),this.addHandler("onClick",this.onClick),this.addHandler("onEnter",this.onEnter),this.addHandler("onExit",this.onExit),this.addHandler("onFocus",this.onFocus),this.addHandler("onBlur",this.onBlur),this.currentState=a.ButtonState.GROUP,this.fadeBeginTime=null,this.shouldFade=!1,this.element.style.display="inline-block",this.element.style.position="relative",this.element.title=this.tooltip,this.tracker=new a.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(b,d,e,g){e?(f(c,a.ButtonState.DOWN),c.raiseEvent("onEnter",c)):g||f(c,a.ButtonState.HOVER)},focusHandler:function(a,b,d,e){this.enterHandler(a,b,d,e),c.raiseEvent("onFocus",c)},exitHandler:function(b,d,e){g(c,a.ButtonState.GROUP),e&&c.raiseEvent("onExit",c)},blurHandler:function(a,b,d,e){this.exitHandler(a,b,d,e),c.raiseEvent("onBlur",c)},pressHandler:function(){f(c,a.ButtonState.DOWN),c.raiseEvent("onPress",c)},releaseHandler:function(b,d,e,h){e&&h?(g(c,a.ButtonState.HOVER),c.raiseEvent("onRelease",c)):e?g(c,a.ButtonState.GROUP):f(c,a.ButtonState.HOVER)},clickHandler:function(a,b,d){d&&c.raiseEvent("onClick",c)},keyHandler:function(a,b){return 13===b?(c.raiseEvent("onClick",c),c.raiseEvent("onRelease",c),!1):!0}}).setTracking(!0),g(this,a.ButtonState.REST)},a.extend(a.Button.prototype,a.EventHandler.prototype,{notifyGroupEnter:function(){f(this,a.ButtonState.GROUP)},notifyGroupExit:function(){g(this,a.ButtonState.REST)},disable:function(){this.notifyGroupExit(),this.element.disabled=!0,a.setElementOpacity(this.element,.2,!0)},enable:function(){this.element.disabled=!1,a.setElementOpacity(this.element,1,!0),this.notifyGroupEnter()}})}(OpenSeadragon),function(a){a.ButtonGroup=function(b){a.extend(!0,this,{buttons:[],clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:a.DEFAULT_SETTINGS.clickDistThreshold,labelText:""},b);var c,d=this.buttons.concat([]),e=this;if(this.element=b.element||a.makeNeutralElement("fieldgroup"),!b.group)for(this.label=a.makeNeutralElement("label"),this.element.style.display="inline-block",this.element.appendChild(this.label),c=0;c<d.length;c++)this.element.appendChild(d[c].element);this.tracker=new a.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(){var a;for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupEnter()},exitHandler:function(){var a,b=arguments.length>2?arguments[2]:null;if(!b)for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupExit()},releaseHandler:function(){var a,b=arguments.length>3?arguments[3]:null;if(!b)for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupExit()}}).setTracking(!0)},a.ButtonGroup.prototype={emulateEnter:function(){this.tracker.enterHandler()},emulateExit:function(){this.tracker.exitHandler()}}}(OpenSeadragon),function(a){a.Rect=function(a,b,c,d){this.x="number"==typeof a?a:0,this.y="number"==typeof b?b:0,this.width="number"==typeof c?c:0,this.height="number"==typeof d?d:0},a.Rect.prototype={getAspectRatio:function(){return this.width/this.height},getTopLeft:function(){return new a.Point(this.x,this.y)},getBottomRight:function(){return new a.Point(this.x+this.width,this.y+this.height)},getTopRight:function(){return new a.Point(this.x+this.width,this.y)},getBottomLeft:function(){return new a.Point(this.x,this.y+this.height)},getCenter:function(){return new a.Point(this.x+this.width/2,this.y+this.height/2)},getSize:function(){return new a.Point(this.width,this.height)},equals:function(b){return b instanceof a.Rect&&this.x===b.x&&this.y===b.y&&this.width===b.width&&this.height===b.height},rotate:function(b,c){var d,e=this.width,f=this.height;if(b=(b+360)%360,0!==b%90)throw new Error("Currently only 0, 90, 180, and 270 degrees are supported.");if(0===b)return new a.Rect(this.x,this.y,this.width,this.height);switch(c=c||this.getCenter(),b){case 90:d=this.getBottomLeft(),e=this.height,f=this.width;break;case 180:d=this.getBottomRight();break;case 270:d=this.getTopRight(),e=this.height,f=this.width;break;default:d=this.getTopLeft()}return d=d.rotate(b,c),new a.Rect(d.x,d.y,e,f)},toString:function(){return"["+Math.round(100*this.x)+","+Math.round(100*this.y)+","+Math.round(100*this.width)+"x"+Math.round(100*this.height)+"]"}}}(OpenSeadragon),function(a){function b(b,c,e){var f=Number(this.element.style.marginLeft.replace("px","")),g=Number(this.element.style.marginTop.replace("px","")),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=a.getElementSize(this.viewer.canvas);return this.dragging=!0,this.element&&("horizontal"==this.scroll?-e.x>0?f>-(h-j.x)&&(this.element.style.marginLeft=f+2*e.x+"px",d(this,j.x,f+2*e.x)):-e.x<0&&0>f&&(this.element.style.marginLeft=f+2*e.x+"px",d(this,j.x,f+2*e.x)):-e.y>0?g>-(i-j.y)&&(this.element.style.marginTop=g+2*e.y+"px",d(this,j.y,g+2*e.y)):-e.y<0&&0>g&&(this.element.style.marginTop=g+2*e.y+"px",d(this,j.y,g+2*e.y))),!1}function c(b,c,e){var f=Number(this.element.style.marginLeft.replace("px","")),g=Number(this.element.style.marginTop.replace("px","")),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=a.getElementSize(this.viewer.canvas);return this.element&&("horizontal"==this.scroll?e>0?f>-(h-j.x)&&(this.element.style.marginLeft=f-60*e+"px",d(this,j.x,f-60*e)):0>e&&0>f&&(this.element.style.marginLeft=f-60*e+"px",d(this,j.x,f-60*e)):0>e?g>j.y-i&&(this.element.style.marginTop=g+60*e+"px",d(this,j.y,g+60*e)):e>0&&0>g&&(this.element.style.marginTop=g+60*e+"px",d(this,j.y,g+60*e))),!1}function d(b,c,d){var e,f,g,h,i,j,k;for(e="horizontal"==b.scroll?b.panelWidth:b.panelHeight,f=Math.ceil(c/e)+5,g=Math.ceil((Math.abs(d)+c)/e)+1,f=g-f,f=0>f?0:f,j=f;g>j&&j<b.panels.length;j++)k=b.panels[j],k.activePanel||(h=new a.Viewer({id:k.id,tileSources:[b.viewer.tileSources[j]],element:k,navigatorSizeRatio:b.sizeRatio,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0}),h.displayRegion=a.makeNeutralElement("textarea"),h.displayRegion.id=k.id+"-displayregion",h.displayRegion.className="displayregion",i=h.displayRegion.style,i.position="relative",i.top="0px",i.left="0px",i.fontSize="0px",i.overflow="hidden",i.float="left",i.cssFloat="left",i.styleFloat="left",i.zIndex=999999999,i.cursor="default",i.width=b.panelWidth-4+"px",i.height=b.panelHeight-4+"px",h.displayRegion.innerTracker=new a.MouseTracker({element:h.displayRegion}),k.getElementsByTagName("form")[0].appendChild(h.displayRegion),k.activePanel=!0)}function e(a){return"horizontal"==this.scroll?a.element.style.marginBottom="0px":a.element.style.marginLeft="0px",!1}function f(b){return"horizontal"==this.scroll?b.element.style.marginBottom="-"+a.getElementSize(b.element).y/2+"px":b.element.style.marginLeft="-"+a.getElementSize(b.element).x/2+"px",!1}function g(a,b){switch(b){case 61:return c.call(this,this.tracker,null,1,null),!1;case 45:return c.call(this,this.tracker,null,-1,null),!1;case 48:case 119:case 87:case 38:return c.call(this,this.tracker,null,1,null),!1;case 115:case 83:case 40:return c.call(this,this.tracker,null,-1,null),!1;case 97:case 37:return c.call(this,this.tracker,null,-1,null),!1;case 100:case 39:return c.call(this,this.tracker,null,1,null),!1;default:return!0}}var h={};a.ReferenceStrip=function(i){var j,k,l,m=this,n=i.viewer,o=a.getElementSize(n.element);for(i.id||(i.id="referencestrip-"+a.now(),this.element=a.makeNeutralElement("div"),this.element.id=i.id,this.element.className="referencestrip"),i=a.extend(!0,{sizeRatio:a.DEFAULT_SETTINGS.referenceStripSizeRatio,position:a.DEFAULT_SETTINGS.referenceStripPosition,scroll:a.DEFAULT_SETTINGS.referenceStripScroll,clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold},i,{element:this.element,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1}),a.extend(this,i),h[this.id]={animating:!1},this.minPixelRatio=this.viewer.minPixelRatio,k=this.element.style,k.marginTop="0px",k.marginRight="0px",k.marginBottom="0px",k.marginLeft="0px",k.left="0px",k.bottom="0px",k.border="0px",k.background="#000",k.position="relative",a.setElementOpacity(this.element,.8),this.viewer=n,this.innerTracker=new a.MouseTracker({element:this.element,dragHandler:a.delegate(this,b),scrollHandler:a.delegate(this,c),enterHandler:a.delegate(this,e),exitHandler:a.delegate(this,f),keyHandler:a.delegate(this,g)}).setTracking(!0),i.width&&i.height?(this.element.style.width=i.width+"px",this.element.style.height=i.height+"px",n.addControl(this.element,{anchor:a.ControlAnchor.BOTTOM_LEFT})):"horizontal"==i.scroll?(this.element.style.width=o.x*i.sizeRatio*n.tileSources.length+12*n.tileSources.length+"px",this.element.style.height=o.y*i.sizeRatio+"px",n.addControl(this.element,{anchor:a.ControlAnchor.BOTTOM_LEFT})):(this.element.style.height=o.y*i.sizeRatio*n.tileSources.length+12*n.tileSources.length+"px",this.element.style.width=o.x*i.sizeRatio+"px",n.addControl(this.element,{anchor:a.ControlAnchor.TOP_LEFT})),this.panelWidth=o.x*this.sizeRatio+8,this.panelHeight=o.y*this.sizeRatio+8,this.panels=[],l=0;l<n.tileSources.length;l++)j=a.makeNeutralElement("div"),j.id=this.element.id+"-"+l,j.style.width=m.panelWidth+"px",j.style.height=m.panelHeight+"px",j.style.display="inline",j.style.float="left",j.style.cssFloat="left",j.style.styleFloat="left",j.style.padding="2px",j.innerTracker=new a.MouseTracker({element:j,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,pressHandler:function(b){b.dragging=a.now()},releaseHandler:function(b,c,d,e){var f=b.element.id,g=Number(f.split("-")[2]),h=a.now();d&&e&&b.dragging&&h-b.dragging<b.clickTimeThreshold&&(b.dragging=null,n.goToPage(g))}}).setTracking(!0),this.element.appendChild(j),j.activePanel=!1,this.panels.push(j);d(this,"vertical"==this.scroll?o.y:o.y,0),this.setFocus(0)},a.extend(a.ReferenceStrip.prototype,a.EventHandler.prototype,a.Viewer.prototype,{setFocus:function(b){var c,f=a.getElement(this.element.id+"-"+b),g=a.getElementSize(this.viewer.canvas),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=-Number(this.element.style.marginLeft.replace("px","")),k=-Number(this.element.style.marginTop.replace("px",""));this.currentSelected!==f&&(this.currentSelected&&(this.currentSelected.style.background="#000"),this.currentSelected=f,this.currentSelected.style.background="#999","horizontal"==this.scroll?(c=Number(b)*(this.panelWidth+3),c>j+g.x-this.panelWidth?(c=Math.min(c,h-g.x),this.element.style.marginLeft=-c+"px",d(this,g.x,-c)):j>c&&(c=Math.max(0,c-g.x/2),this.element.style.marginLeft=-c+"px",d(this,g.x,-c))):(c=Number(b)*(this.panelHeight+3),c>k+g.y-this.panelHeight?(c=Math.min(c,i-g.y),this.element.style.marginTop=-c+"px",d(this,g.y,-c)):k>c&&(c=Math.max(0,c-g.y/2),this.element.style.marginTop=-c+"px",d(this,g.y,-c))),this.currentPage=b,a.getElement(f.id+"-displayregion").focus(),e.call(this,this.innerTracker))},update:function(){return h[this.id].animating?(a.console.log("image reference strip update"),!0):!1}})}(OpenSeadragon),function(a){a.DisplayRect=function(b,c,d,e,f,g){a.Rect.apply(this,[b,c,d,e]),this.minLevel=f,this.maxLevel=g},a.extend(a.DisplayRect.prototype,a.Rect.prototype)}(OpenSeadragon),function(a){function b(a,b){return(1-Math.exp(a*-b))/(1-Math.exp(-a))}a.Spring=function(b){var c=arguments;"object"!=typeof b&&(b={initial:c.length&&"number"==typeof c[0]?c[0]:0,springStiffness:c.length>1?c[1].springStiffness:5,animationTime:c.length>1?c[1].animationTime:1.5}),a.extend(!0,this,b),this.current={value:"number"==typeof this.initial?this.initial:0,time:a.now()},this.start={value:this.current.value,time:this.current.time},this.target={value:this.current.value,time:this.current.time}},a.Spring.prototype={resetTo:function(a){this.target.value=a,this.target.time=this.current.time,this.start.value=this.target.value,this.start.time=this.target.time},springTo:function(a){this.start.value=this.current.value,this.start.time=this.current.time,this.target.value=a,this.target.time=this.start.time+1e3*this.animationTime},shiftBy:function(a){this.start.value+=a,this.target.value+=a},update:function(){this.current.time=a.now(),this.current.value=this.current.time>=this.target.time?this.target.value:this.start.value+(this.target.value-this.start.value)*b(this.springStiffness,(this.current.time-this.start.time)/(this.target.time-this.start.time))}}}(OpenSeadragon),function(a){var b={};a.Tile=function(a,b,c,d,e,f){this.level=a,this.x=b,this.y=c,this.bounds=d,this.exists=e,this.url=f,this.loaded=!1,this.loading=!1,this.element=null,this.image=null,this.style=null,this.position=null,this.size=null,this.blendStart=null,this.opacity=null,this.distance=null,this.visibility=null,this.beingDrawn=!1,this.lastTouchTime=0},a.Tile.prototype={toString:function(){return this.level+"/"+this.x+"_"+this.y},drawHTML:function(b){return this.loaded&&this.image?(this.element||(this.element=a.makeNeutralElement("img"),this.element.src=this.url,this.element.style.msInterpolationMode="nearest-neighbor",this.style=this.element.style,this.style.position="absolute"),this.element.parentNode!=b&&b.appendChild(this.element),this.style.top=this.position.y+"px",this.style.left=this.position.x+"px",this.style.height=this.size.y+"px",this.style.width=this.size.x+"px",a.setElementOpacity(this.element,this.opacity),void 0):(a.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString()),void 0)},drawCanvas:function(c){var d,e,f=this.position,g=this.size;return this.loaded&&(this.image||b[this.url])?(c.globalAlpha=this.opacity,1==c.globalAlpha&&this.url.match(".png")&&c.clearRect(f.x+1,f.y+1,g.x-2,g.y-2),b[this.url]||(e=document.createElement("canvas"),e.width=this.image.width,e.height=this.image.height,d=e.getContext("2d"),d.drawImage(this.image,0,0),b[this.url]=d,this.image=null),d=b[this.url],c.drawImage(d.canvas,0,0,d.canvas.width,d.canvas.height,f.x,f.y,g.x,g.y),void 0):(a.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString()),void 0)},unload:function(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),b[this.url]&&delete b[this.url],this.element=null,this.image=null,this.loaded=!1,this.loading=!1}}}(OpenSeadragon),function(a){a.OverlayPlacement={CENTER:0,TOP_LEFT:1,TOP:2,TOP_RIGHT:3,RIGHT:4,BOTTOM_RIGHT:5,BOTTOM:6,BOTTOM_LEFT:7,LEFT:8},a.Overlay=function(b,c,d){var e;e=a.isPlainObject(b)?b:{element:b,location:c,placement:d},this.element=e.element,this.scales=e.location instanceof a.Rect,this.bounds=new a.Rect(e.location.x,e.location.y,e.location.width,e.location.height),this.position=new a.Point(e.location.x,e.location.y),this.size=new a.Point(e.location.width,e.location.height),this.style=e.element.style,this.placement=e.location instanceof a.Point?e.placement:a.OverlayPlacement.TOP_LEFT,this.onDraw=e.onDraw},a.Overlay.prototype={adjust:function(b,c){switch(this.placement){case a.OverlayPlacement.TOP_LEFT:break;case a.OverlayPlacement.TOP:b.x-=c.x/2;break;case a.OverlayPlacement.TOP_RIGHT:b.x-=c.x;break;case a.OverlayPlacement.RIGHT:b.x-=c.x,b.y-=c.y/2;break;case a.OverlayPlacement.BOTTOM_RIGHT:b.x-=c.x,b.y-=c.y;break;case a.OverlayPlacement.BOTTOM:b.x-=c.x/2,b.y-=c.y;break;case a.OverlayPlacement.BOTTOM_LEFT:b.y-=c.y;break;case a.OverlayPlacement.LEFT:b.y-=c.y/2;break;default:case a.OverlayPlacement.CENTER:b.x-=c.x/2,b.y-=c.y/2}},destroy:function(){var a=this.element,b=this.style;a.parentNode&&(a.parentNode.removeChild(a),a.prevElementParent&&(b.display="none",document.body.appendChild(a))),this.onDraw=null,b.top="",b.left="",b.position="",this.scales&&(b.width="",b.height="")},drawHTML:function(b,c){var d,e,f,g=this.element,h=this.style,i=this.scales,j=new a.Point(c.viewer.drawer.canvas.width/2,c.viewer.drawer.canvas.height/2),k=c.degrees;g.parentNode!=b&&(g.prevElementParent=g.parentNode,g.prevNextSibling=g.nextSibling,b.appendChild(g)),i||(this.size=a.getElementSize(g)),d=this.position,e=this.size,this.adjust(d,e),d=d.apply(Math.floor),e=e.apply(Math.ceil),0!==k&&this.scales&&(f=new a.Point(e.x/2,e.y/2),d=d.plus(f).rotate(k,j).minus(f),e=e.rotate(k,new a.Point(0,0)),e=new a.Point(Math.abs(e.x),Math.abs(e.y))),this.onDraw?this.onDraw(d,e,g):(h.left=d.x+"px",h.top=d.y+"px",h.position="absolute",h.display="block",i&&(h.width=e.x+"px",h.height=e.y+"px"))},update:function(b,c){this.scales=b instanceof a.Rect,this.bounds=new a.Rect(b.x,b.y,b.width,b.height),this.placement=b instanceof a.Point?c:a.OverlayPlacement.TOP_LEFT}}}(OpenSeadragon),function(a){function b(b,c){var d=null,e=c.height&&c.width?new a.Rect(c.x||c.px,c.y||c.py,c.width,c.height):new a.Point(c.x||c.px,c.y||c.py),f=c.id?c.id:"openseadragon-overlay-"+Math.floor(1e7*Math.random());return d=a.getElement(c.id),d||(d=document.createElement("a"),d.href="#/overlay/"+f),d.id=f,a.addClass(d,c.className?c.className:"openseadragon-overlay"),void 0!==c.px&&(e=b.viewport.imageToViewportRectangle(e)),c.placement?new a.Overlay({element:d,location:b.viewport.pointFromPixel(e),placement:a.OverlayPlacement[c.placement.toUpperCase()],onDraw:c.onDraw}):new a.Overlay({element:d,location:e,onDraw:c.onDraw})}function c(b){b.updateAgain=!1,b.viewer&&b.viewer.raiseEvent("update-viewport",{viewer:b.viewer});for(var c,e,f,h,i,j,k,m,n=null,o=!1,p=a.now(),q=b.viewport.getContainerSize(),r=b.viewport.getBounds(!0),t=r.getTopLeft(),v=r.getBottomRight(),w=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(0),!0).x,x=Math.max(b.source.minLevel,Math.floor(Math.log(b.minZoomImageRatio)/Math.log(2))),y=Math.min(Math.abs(b.source.maxLevel),Math.abs(Math.floor(Math.log(w/b.minPixelRatio)/Math.log(2)))),z=b.viewport.degrees;b.lastDrawn.length>0;)c=b.lastDrawn.pop(),c.beingDrawn=!1;if(b.canvas.innerHTML="",C&&((b.canvas.width!=q.x||b.canvas.height!=q.y)&&(b.canvas.width=q.x,b.canvas.height=q.y),b.context.clearRect(0,0,q.x,q.y)),90===z||270===z){var A=r.rotate(z);t=A.getTopLeft(),v=A.getBottomRight()}if(!(!b.wrapHorizontal&&(v.x<0||t.x>1)||!b.wrapVertical&&(v.y<0||t.y>b.normHeight))){b.wrapHorizontal||(t.x=Math.max(t.x,0),v.x=Math.min(v.x,1)),b.wrapVertical||(t.y=Math.max(t.y,0),v.y=Math.min(v.y,b.normHeight)),x=Math.min(x,y);var B;for(e=y;e>=x;e--){if(B=!1,f=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e),!0).x,!o&&f>=b.minPixelRatio||e==x)B=!0,o=!0;else if(!o)continue;if(h=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e),!1).x,i=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(Math.max(b.source.getClosestLevel(b.viewport.containerSize)-1,0)),!1).x,j=b.immediateRender?1:i,k=Math.min(1,(f-.5)/.5),m=j/Math.abs(j-h),n=d(b,o,B,e,k,m,t,v,p,n),l(b.coverage,e))break}u(b,b.lastDrawn),s(b.viewport,b.overlays,b.container),n&&(g(b,n,p),b.updateAgain=!0)}}function d(a,b,c,d,f,g,h,i,j,k){var l,m,n,p,q,r=a.viewport.pixelFromPoint(a.viewport.getCenter());for(a.viewer&&a.viewer.raiseEvent("update-level",{viewer:a.viewer,havedrawn:b,level:d,opacity:f,visibility:g,topleft:h,bottomright:i,currenttime:j,best:k}),n=a.source.getTileAtPoint(d,h),p=a.source.getTileAtPoint(d,i),q=a.source.getNumTiles(d),o(a.coverage,d),a.wrapHorizontal||(p.x=Math.min(p.x,q.x-1)),a.wrapVertical||(p.y=Math.min(p.y,q.y-1)),l=n.x;l<=p.x;l++)for(m=n.y;m<=p.y;m++)k=e(a,c,b,l,m,d,f,g,r,q,j,k);return k}function e(a,b,c,d,e,g,h,k,l,o,p,r){var s=f(d,e,g,a.source,a.tilesMatrix,p,o,a.normHeight),t=b;if(a.viewer&&a.viewer.raiseEvent("update-tile",{viewer:a.viewer,tile:s}),n(a.coverage,g,d,e,!1),!s.exists)return r;if(c&&!t&&(m(a.coverage,g,d,e)?n(a.coverage,g,d,e,!0):t=!0),!t)return r;if(i(s,a.source.tileOverlap,a.viewport,l,k),s.loaded){var u=j(a,s,d,e,g,h,p);u&&(a.updateAgain=!0)}else s.loading||(r=q(r,s));return r}function f(b,c,d,e,f,g,h,i){var j,k,l,m,n,o;return f[d]||(f[d]={}),f[d][b]||(f[d][b]={}),f[d][b][c]||(j=(h.x+b%h.x)%h.x,k=(h.y+c%h.y)%h.y,l=e.getTileBounds(d,j,k),m=e.tileExists(d,j,k),n=e.getTileUrl(d,j,k),l.x+=1*(b-j)/h.x,l.y+=i*(c-k)/h.y,f[d][b][c]=new a.Tile(d,b,c,l,m,n)),o=f[d][b][c],o.lastTouchTime=g,o}function g(a,b,c){a.viewport.collectionMode?(a.midUpdate=!1,h(a,b,c)):b.loading=a.loadImage(b.url,function(d){h(a,b,c,d)})}function h(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;if(c.loading=!1,b.midUpdate)return a.console.warn("Tile load callback in middle of drawing routine."),void 0;if(e||b.viewport.collectionMode){if(d<b.lastResetTime)return a.console.log("Ignoring tile %s loaded before reset: %s",c,c.url),void 0}else if(a.console.log("Tile %s failed to load: %s",c,c.url),!b.debugMode)return c.exists=!1,void 0;if(c.loaded=!0,c.image=e,f=b.tilesLoaded.length,b.tilesLoaded.length>=b.maxImageCacheCount){for(g=Math.ceil(Math.log(b.source.tileSize)/Math.log(2)),h=null,k=-1,o=b.tilesLoaded.length-1;o>=0;o--)l=b.tilesLoaded[o],l.level<=b.cutoff||l.beingDrawn||(h?(m=l.lastTouchTime,i=h.lastTouchTime,n=l.level,j=h.level,(i>m||m==i&&n>j)&&(h=l,k=o)):(h=l,k=o));h&&k>=0&&(h.unload(),f=k)}b.tilesLoaded[f]=c,b.updateAgain=!0}function i(b,c,d,e,f){var g=b.bounds.getTopLeft(),h=b.bounds.getSize(),i=d.pixelFromPoint(g,!0),j=d.pixelFromPoint(g,!1),k=d.deltaPixelsFromPoints(h,!0),l=d.deltaPixelsFromPoints(h,!1),m=j.plus(l.divide(2)),n=e.distanceTo(m);c||(k=k.plus(new a.Point(1,1))),b.position=i,b.size=k,b.distance=n,b.visibility=f}function j(a,b,c,d,e,f,g){var h,i,j=1e3*a.blendTime;if(b.blendStart||(b.blendStart=g),h=g-b.blendStart,i=j?Math.min(1,h/j):1,a.alwaysBlend&&(i*=f),b.opacity=i,a.lastDrawn.push(b),1==i)n(a.coverage,e,c,d,!0);else if(j>h)return!0;return!1}function k(a){a.tilesMatrix={},a.tilesLoaded=[]}function l(a,b,c,d){var e,f,g,h;if(!a[b])return!1;if(void 0===c||void 0===d){e=a[b];for(g in e)if(e.hasOwnProperty(g)){f=e[g];for(h in f)if(f.hasOwnProperty(h)&&!f[h])return!1
}return!0}return void 0===a[b][c]||void 0===a[b][c][d]||a[b][c][d]===!0}function m(a,b,c,d){return void 0===c||void 0===d?l(a,b+1):l(a,b+1,2*c,2*d)&&l(a,b+1,2*c,2*d+1)&&l(a,b+1,2*c+1,2*d)&&l(a,b+1,2*c+1,2*d+1)}function n(b,c,d,e,f){return b[c]?(b[c][d]||(b[c][d]={}),b[c][d][e]=f,void 0):(a.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s",c),void 0)}function o(a,b){a[b]={}}function p(a,b){var c;for(c=a.length-1;c>=0;c--)if(a[c].element==b)return c;return-1}function q(a,b){return a?b.visibility>a.visibility?b:b.visibility==a.visibility&&b.distance<a.distance?b:a:b}function r(b,c,d,e){b.onload=null,b.onabort=null,b.onerror=null,e&&window.clearTimeout(e),a.requestAnimationFrame(function(){c(b.src,d?b:null)})}function s(a,b,c){var d,e=b.length;for(d=0;e>d;d++)t(a,b[d],c)}function t(a,b,c){b.position=a.pixelFromPoint(b.bounds.getTopLeft(),!0),b.size=a.deltaPixelsFromPoints(b.bounds.getSize(),!0),b.drawHTML(c,a)}function u(b,c){var d,e,f,g,h,i,j,k;for(d=c.length-1;d>=0;d--){if(e=c[d],b.viewport.collectionMode?(f=e.x+"/"+e.y,h=b.viewport,k=h.collectionTileSource,b.collectionOverlays[f]?(g=b.collectionOverlays[f],g.viewport&&(g.viewport.resize(e.size,!0),g.viewport.goHome(!0))):(i="horizontal"==k.layout?e.y+e.x*k.rows:e.x+e.y*k.rows,j=i<k.tileSources.length?k.tileSources[i]:null,j&&(b.collectionOverlays[f]=g=new a.Viewer({element:a.makeNeutralElement("div"),mouseNavEnabled:!1,showNavigator:!1,showSequenceControl:!1,showNavigationControl:!1,tileSources:[j]}),B&&(g.element.style.border="1px solid rgba(255,255,255,0.38)",g.element.style["-webkit-box-reflect"]="below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(62%,transparent),to(rgba(255,255,255,0.62)))"),b.addOverlay(g.element,e.bounds)))):(C?0!==b.viewport.degrees?(v(e,b.canvas,b.context,b.viewport.degrees),e.drawCanvas(b.context),w(e,b.canvas,b.context)):e.drawCanvas(b.context):e.drawHTML(b.canvas),e.beingDrawn=!0),b.debugMode)try{x(b,e,c.length,d)}catch(l){a.console.error(l)}b.viewer&&b.viewer.raiseEvent("tile-drawn",{viewer:b.viewer,tile:e})}}function v(a,b,c,d){var e=b.width/2,f=b.height/2,g=a.position.x-e,h=a.position.y-f;c.save(),c.translate(e,f),c.rotate(Math.PI/180*d),a.position.x=g,a.position.y=h}function w(a,b,c){var d=b.width/2,e=b.height/2,f=a.position.x+d,g=a.position.y+e;a.position.x=f,a.position.y=g,c.restore()}function x(a,b,c,d){C&&(a.context.save(),a.context.lineWidth=2,a.context.font="small-caps bold 13px ariel",a.context.strokeStyle=a.debugGridColor,a.context.fillStyle=a.debugGridColor,a.context.strokeRect(b.position.x,b.position.y,b.size.x,b.size.y),0===b.x&&0===b.y&&(a.context.fillText("Zoom: "+a.viewport.getZoom(),b.position.x,b.position.y-30),a.context.fillText("Pan: "+a.viewport.getBounds().toString(),b.position.x,b.position.y-20)),a.context.fillText("Level: "+b.level,b.position.x+10,b.position.y+20),a.context.fillText("Column: "+b.x,b.position.x+10,b.position.y+30),a.context.fillText("Row: "+b.y,b.position.x+10,b.position.y+40),a.context.fillText("Order: "+d+" of "+c,b.position.x+10,b.position.y+50),a.context.fillText("Size: "+b.size.toString(),b.position.x+10,b.position.y+60),a.context.fillText("Position: "+b.position.toString(),b.position.x+10,b.position.y+70),a.context.restore())}var y=a.getWindowSize(),z=a.Browser.vendor,A=a.Browser.version,B=z==a.BROWSERS.FIREFOX||z==a.BROWSERS.OPERA||z==a.BROWSERS.SAFARI&&A>=4||z==a.BROWSERS.CHROME&&A>=2||z==a.BROWSERS.IE&&A>=9,C=B&&!(y.x<=400||y.y<=400)&&!navigator.appVersion.match("Mobile")&&a.isFunction(document.createElement("canvas").getContext);a.Drawer=function(c){var d,e=arguments;for(a.isPlainObject(c)||(c={source:e[0],viewport:e[1],element:e[2]}),a.extend(!0,this,{viewer:null,downloading:0,tilesMatrix:{},tilesLoaded:[],coverage:{},lastDrawn:[],lastResetTime:0,midUpdate:!1,updateAgain:!0,overlays:[],collectionOverlays:{},maxImageCacheCount:a.DEFAULT_SETTINGS.maxImageCacheCount,imageLoaderLimit:a.DEFAULT_SETTINGS.imageLoaderLimit,minZoomImageRatio:a.DEFAULT_SETTINGS.minZoomImageRatio,wrapHorizontal:a.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:a.DEFAULT_SETTINGS.wrapVertical,immediateRender:a.DEFAULT_SETTINGS.immediateRender,blendTime:a.DEFAULT_SETTINGS.blendTime,alwaysBlend:a.DEFAULT_SETTINGS.alwaysBlend,minPixelRatio:a.DEFAULT_SETTINGS.minPixelRatio,debugMode:a.DEFAULT_SETTINGS.debugMode,timeout:a.DEFAULT_SETTINGS.timeout},c),this.container=a.getElement(this.element),this.canvas=a.makeNeutralElement(C?"canvas":"div"),this.context=C?this.canvas.getContext("2d"):null,this.normHeight=this.source.dimensions.y/this.source.dimensions.x,this.element=this.container,this.container.dir="ltr",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.position="absolute",this.container.style.textAlign="left",this.container.appendChild(this.canvas),d=0;d<this.overlays.length;d++)a.isPlainObject(this.overlays[d])?this.overlays[d]=b(this,this.overlays[d]):a.isFunction(this.overlays[d])},a.Drawer.prototype={addOverlay:function(b,c,d,e){var f;return f=a.isPlainObject(b)?b:{element:b,location:c,placement:d,onDraw:e},b=a.getElement(f.element),p(this.overlays,b)>=0?void 0:(this.overlays.push(new a.Overlay({element:b,location:f.location,placement:f.placement,onDraw:f.onDraw})),this.updateAgain=!0,this.viewer&&this.viewer.raiseEvent("add-overlay",{viewer:this.viewer,element:b,location:f.location,placement:f.placement}),this)},updateOverlay:function(b,c,d){var e;return b=a.getElement(b),e=p(this.overlays,b),e>=0&&(this.overlays[e].update(c,d),this.updateAgain=!0),this.viewer&&this.viewer.raiseEvent("update-overlay",{viewer:this.viewer,element:b,location:c,placement:d}),this},removeOverlay:function(b){var c;return b=a.getElement(b),c=p(this.overlays,b),c>=0&&(this.overlays[c].destroy(),this.overlays.splice(c,1),this.updateAgain=!0),this.viewer&&this.viewer.raiseEvent("remove-overlay",{viewer:this.viewer,element:b}),this},clearOverlays:function(){for(;this.overlays.length>0;)this.overlays.pop().destroy(),this.updateAgain=!0;return this.viewer&&this.viewer.raiseEvent("clear-overlay",{viewer:this.viewer}),this},needsUpdate:function(){return this.updateAgain},numTilesLoaded:function(){return this.tilesLoaded.length},reset:function(){return k(this),this.lastResetTime=a.now(),this.updateAgain=!0,this},update:function(){return this.midUpdate=!0,c(this),this.midUpdate=!1,this},loadImage:function(b,c){var d,e,f,g=this,h=!1;return(!this.imageLoaderLimit||this.downloading<this.imageLoaderLimit)&&(this.downloading++,d=new Image,f=function(d,e){if(g.downloading--,"function"==typeof c)try{c(e)}catch(f){a.console.error("%s while executing %s callback: %s",f.name,b,f.message,f)}},d.onload=function(){r(d,f,!0,e)},d.onabort=d.onerror=function(){r(d,f,!1,e)},e=window.setTimeout(function(){r(d,f,!1,e)},this.timeout),h=!0,d.src=b),h},canRotate:function(){return C}}}(OpenSeadragon),function(a){a.Viewport=function(b){var c=arguments;c.length&&c[0]instanceof a.Point&&(b={containerSize:c[0],contentSize:c[1],config:c[2]}),b.config&&(a.extend(!0,b,b.config),delete b.config),a.extend(!0,this,{containerSize:null,contentSize:null,zoomPoint:null,viewer:null,springStiffness:a.DEFAULT_SETTINGS.springStiffness,animationTime:a.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:a.DEFAULT_SETTINGS.minZoomImageRatio,maxZoomPixelRatio:a.DEFAULT_SETTINGS.maxZoomPixelRatio,visibilityRatio:a.DEFAULT_SETTINGS.visibilityRatio,wrapHorizontal:a.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:a.DEFAULT_SETTINGS.wrapVertical,defaultZoomLevel:a.DEFAULT_SETTINGS.defaultZoomLevel,minZoomLevel:a.DEFAULT_SETTINGS.minZoomLevel,maxZoomLevel:a.DEFAULT_SETTINGS.maxZoomLevel,degrees:a.DEFAULT_SETTINGS.degrees},b),this.centerSpringX=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.centerSpringY=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.zoomSpring=new a.Spring({initial:1,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.resetContentSize(this.contentSize),this.goHome(!0),this.update()},a.Viewport.prototype={resetContentSize:function(b){return this.contentSize=b,this.contentAspectX=this.contentSize.x/this.contentSize.y,this.contentAspectY=this.contentSize.y/this.contentSize.x,this.fitWidthBounds=new a.Rect(0,0,1,this.contentAspectY),this.fitHeightBounds=new a.Rect(0,0,this.contentAspectY,this.contentAspectY),this.homeBounds=new a.Rect(0,0,1,this.contentAspectY),this.viewer&&this.viewer.raiseEvent("reset-size",{contentSize:b,viewer:this.viewer}),this},getHomeZoom:function(){var a=this.contentAspectX/this.getAspectRatio();return this.defaultZoomLevel?this.defaultZoomLevel:a>=1?1:a},getHomeBounds:function(){var b=this.homeBounds.getCenter(),c=1/this.getHomeZoom(),d=c/this.getAspectRatio();return new a.Rect(b.x-c/2,b.y-d/2,c,d)},goHome:function(a){return this.viewer&&this.viewer.raiseEvent("home",{immediately:a,viewer:this.viewer}),this.fitBounds(this.getHomeBounds(),a)},getMinZoom:function(){var a=this.getHomeZoom(),b=this.minZoomLevel?this.minZoomLevel:this.minZoomImageRatio*a;return Math.min(b,a)},getMaxZoom:function(){var a=this.maxZoomLevel?this.maxZoomLevel:this.contentSize.x*this.maxZoomPixelRatio/this.containerSize.x;return Math.max(a,this.getHomeZoom())},getAspectRatio:function(){return this.containerSize.x/this.containerSize.y},getContainerSize:function(){return new a.Point(this.containerSize.x,this.containerSize.y)},getBounds:function(b){var c=this.getCenter(b),d=1/this.getZoom(b),e=d/this.getAspectRatio();return new a.Rect(c.x-d/2,c.y-e/2,d,e)},getCenter:function(b){var c,d,e,f,g,h,i,j,k=new a.Point(this.centerSpringX.current.value,this.centerSpringY.current.value),l=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return b?k:this.zoomPoint?(c=this.pixelFromPoint(this.zoomPoint,!0),d=this.getZoom(),e=1/d,f=e/this.getAspectRatio(),g=new a.Rect(k.x-e/2,k.y-f/2,e,f),h=this.zoomPoint.minus(g.getTopLeft()).times(this.containerSize.x/g.width),i=h.minus(c),j=i.divide(this.containerSize.x*d),l.plus(j)):l},getZoom:function(a){return a?this.zoomSpring.current.value:this.zoomSpring.target.value},applyConstraints:function(a){var b,c,d,e,f,g,h,i=this.getZoom(),j=Math.max(Math.min(i,this.getMaxZoom()),this.getMinZoom()),k=0,l=0;return i!=j&&this.zoomTo(j,this.zoomPoint,a),b=this.getBounds(),c=this.visibilityRatio*b.width,d=this.visibilityRatio*b.height,e=b.x+b.width,f=1-b.x,g=b.y+b.height,h=this.contentAspectY-b.y,this.wrapHorizontal||(c>e&&(k=c-e),c>f&&(k=k?(k+f-c)/2:f-c)),this.wrapVertical||(d>g&&(l=d-g),d>h&&(l=l?(l+h-d)/2:h-d)),(k||l||a)&&(b.x+=k,b.y+=l,b.width>1&&(b.x=.5-b.width/2),b.height>this.contentAspectY&&(b.y=this.contentAspectY/2-b.height/2),this.fitBounds(b,a)),this.viewer&&this.viewer.raiseEvent("constrain",{immediately:a,viewer:this.viewer}),this},ensureVisible:function(a){return this.applyConstraints(a)},fitBounds:function(b,c){var d,e,f,g,h=this.getAspectRatio(),i=b.getCenter(),j=new a.Rect(b.x,b.y,b.width,b.height);return j.getAspectRatio()>=h?(j.height=b.width/h,j.y=i.y-j.height/2):(j.width=b.height*h,j.x=i.x-j.width/2),this.panTo(this.getCenter(!0),!0),this.zoomTo(this.getZoom(!0),null,!0),d=this.getBounds(),e=this.getZoom(),f=1/j.width,f==e||j.width==d.width?this.panTo(i,c):(g=d.getTopLeft().times(this.containerSize.x/d.width).minus(j.getTopLeft().times(this.containerSize.x/j.width)).divide(this.containerSize.x/d.width-this.containerSize.x/j.width),this.zoomTo(f,g,c))},fitVertically:function(a){var b=this.getCenter();return this.wrapHorizontal&&(b.x=(1+b.x%1)%1,this.centerSpringX.resetTo(b.x),this.centerSpringX.update()),this.wrapVertical&&(b.y=(this.contentAspectY+b.y%this.contentAspectY)%this.contentAspectY,this.centerSpringY.resetTo(b.y),this.centerSpringY.update()),this.fitBounds(this.fitHeightBounds,a)},fitHorizontally:function(a){var b=this.getCenter();return this.wrapHorizontal&&(b.x=(this.contentAspectX+b.x%this.contentAspectX)%this.contentAspectX,this.centerSpringX.resetTo(b.x),this.centerSpringX.update()),this.wrapVertical&&(b.y=(1+b.y%1)%1,this.centerSpringY.resetTo(b.y),this.centerSpringY.update()),this.fitBounds(this.fitWidthBounds,a)},panBy:function(b,c){var d=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return b=b.rotate(-this.degrees,new a.Point(0,0)),this.panTo(d.plus(b),c)},panTo:function(a,b){return b?(this.centerSpringX.resetTo(a.x),this.centerSpringY.resetTo(a.y)):(this.centerSpringX.springTo(a.x),this.centerSpringY.springTo(a.y)),this.viewer&&this.viewer.raiseEvent("pan",{center:a,immediately:b,viewer:this.viewer}),this},zoomBy:function(b,c,d){return c&&(c=c.rotate(-this.degrees,new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value))),this.zoomTo(this.zoomSpring.target.value*b,c,d)},zoomTo:function(b,c,d){return this.zoomPoint=c instanceof a.Point?c:null,d?this.zoomSpring.resetTo(b):this.zoomSpring.springTo(b),this.viewer&&this.viewer.raiseEvent("zoom",{zoom:b,refPoint:c,immediately:d,viewer:this.viewer}),this},setRotation:function(a){if(!this.viewer||!this.viewer.drawer.canRotate())return this;if(a=(a+360)%360,0!==a%90)throw new Error("Currently only 0, 90, 180, and 270 degrees are supported.");return this.degrees=a,this.viewer.drawer.update(),this},getRotation:function(){return this.degrees},resize:function(b,c){var d=this.getBounds(),e=d,f=b.x/this.containerSize.x;return this.containerSize=new a.Point(b.x,b.y),c&&(e.width=d.width*f,e.height=e.width/this.getAspectRatio()),this.viewer&&this.viewer.raiseEvent("resize",{newContainerSize:b,maintain:c,viewer:this.viewer}),this.fitBounds(e,!0)},update:function(){var a,b,c,d,e=this.centerSpringX.current.value,f=this.centerSpringY.current.value,g=this.zoomSpring.current.value;return this.zoomPoint&&(a=this.pixelFromPoint(this.zoomPoint,!0)),this.zoomSpring.update(),this.zoomPoint&&this.zoomSpring.current.value!=g?(b=this.pixelFromPoint(this.zoomPoint,!0),c=b.minus(a),d=this.deltaPointsFromPixels(c,!0),this.centerSpringX.shiftBy(d.x),this.centerSpringY.shiftBy(d.y)):this.zoomPoint=null,this.centerSpringX.update(),this.centerSpringY.update(),this.centerSpringX.current.value!=e||this.centerSpringY.current.value!=f||this.zoomSpring.current.value!=g},deltaPixelsFromPoints:function(a,b){return a.times(this.containerSize.x*this.getZoom(b))},deltaPointsFromPixels:function(a,b){return a.divide(this.containerSize.x*this.getZoom(b))},pixelFromPoint:function(a,b){var c=this.getBounds(b);return a.minus(c.getTopLeft()).times(this.containerSize.x/c.width)},pointFromPixel:function(a,b){var c=this.getBounds(b);return a.divide(this.containerSize.x/c.width).plus(c.getTopLeft())},viewportToImageCoordinates:function(b,c){return 1==arguments.length?this.viewportToImageCoordinates(b.x,b.y):new a.Point(b*this.contentSize.x,c*this.contentSize.y*this.contentAspectX)},imageToViewportCoordinates:function(b,c){return 1==arguments.length?this.imageToViewportCoordinates(b.x,b.y):new a.Point(b/this.contentSize.x,c/this.contentSize.y/this.contentAspectX)},imageToViewportRectangle:function(b,c,d,e){var f,g,h;return 1==arguments.length?(h=b,this.imageToViewportRectangle(h.x,h.y,h.width,h.height)):(f=this.imageToViewportCoordinates(b,c),g=this.imageToViewportCoordinates(d,e),new a.Rect(f.x,f.y,g.x,g.y))},viewportToImageRectangle:function(b,c,d,e){var f,g,h;return 1==arguments.length?(h=b,this.viewportToImageRectangle(h.x,h.y,h.width,h.height)):(f=this.viewportToImageCoordinates(b,c),g=this.viewportToImageCoordinates(d,e),new a.Rect(f.x,f.y,g.x,g.y))}}}(OpenSeadragon);

define("openseadragon", function(){});

/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2012, John Dyer (http://j.hn)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.8.2';

// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
	silverlight: [
		{version: [3,0], types: ['video/mp4','video/m4v','video/mov','video/wmv','audio/wma','audio/m4a','audio/mp3','audio/wav','audio/mpeg']}
	],
	flash: [
		{version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a','audio/mpeg', 'video/youtube', 'video/x-youtube']}
		//,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
	],
	youtube: [
		{version: null, types: ['video/youtube', 'video/x-youtube']}
	],
	vimeo: [
		{version: null, types: ['video/vimeo']}
	]
};

/*
Utility methods
*/
mejs.Utility = {
	encodeUrl: function(url) {
		return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
	},
	escapeHTML: function(s) {
		return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
	},
	absolutizeUrl: function(url) {
		var el = document.createElement('div');
		el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
		return el.firstChild.href;
	},
	getScriptPath: function(scriptNames) {
		var
			i = 0,
			j,
			path = '',
			name = '',
			script,
			scripts = document.getElementsByTagName('script'),
			il = scripts.length,
			jl = scriptNames.length;

		for (; i < il; i++) {
			script = scripts[i].src;
			for (j = 0; j < jl; j++) {
				name = scriptNames[j];
				if (script.indexOf(name) > -1) {
					path = script.substring(0, script.indexOf(name));
					break;
				}
			}
			if (path !== '') {
				break;
			}
		}
		return path;
	},
	secondsToTimeCode: function(time, forceHours, showFrameCount, fps) {
		//add framecount
		if (typeof showFrameCount == 'undefined') {
		    showFrameCount=false;
		} else if(typeof fps == 'undefined') {
		    fps = 25;
		}
	
		var hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1)*fps).toFixed(3)),
			result = 
					( (forceHours || hours > 0) ? (hours < 10 ? '0' + hours : hours) + ':' : '')
						+ (minutes < 10 ? '0' + minutes : minutes) + ':'
						+ (seconds < 10 ? '0' + seconds : seconds)
						+ ((showFrameCount) ? ':' + (frames < 10 ? '0' + frames : frames) : '');
	
		return result;
	},
	
	timeCodeToSeconds: function(hh_mm_ss_ff, forceHours, showFrameCount, fps){
		if (typeof showFrameCount == 'undefined') {
		    showFrameCount=false;
		} else if(typeof fps == 'undefined') {
		    fps = 25;
		}
	
		var tc_array = hh_mm_ss_ff.split(":"),
			tc_hh = parseInt(tc_array[0], 10),
			tc_mm = parseInt(tc_array[1], 10),
			tc_ss = parseInt(tc_array[2], 10),
			tc_ff = 0,
			tc_in_seconds = 0;
		
		if (showFrameCount) {
		    tc_ff = parseInt(tc_array[3])/fps;
		}
		
		tc_in_seconds = ( tc_hh * 3600 ) + ( tc_mm * 60 ) + tc_ss + tc_ff;
		
		return tc_in_seconds;
	},
	
	/* borrowed from SWFObject: http://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
	removeSwf: function(id) {
		var obj = document.getElementById(id);
		if (obj && obj.nodeName == "OBJECT") {
			if (mejs.MediaFeatures.isIE) {
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						mejs.Utility.removeObjectInIE(id);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				obj.parentNode.removeChild(obj);
			}
		}
	},
	removeObjectInIE: function(id) {
		var obj = document.getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}		
	}
};


// Core detector, plugins are added below
mejs.PluginDetector = {

	// main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
	hasPluginVersion: function(plugin, v) {
		var pv = this.plugins[plugin];
		v[1] = v[1] || 0;
		v[2] = v[2] || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	},

	// cached values
	nav: window.navigator,
	ua: window.navigator.userAgent.toLowerCase(),

	// stored version numbers
	plugins: [],

	// runs detectPlugin() and stores the version number
	addPlugin: function(p, pluginName, mimeType, activeX, axDetect) {
		this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
	},

	// get the version number from the mimetype (all but IE) or ActiveX (IE)
	detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

		var version = [0,0,0],
			description,
			i,
			ax;

		// Firefox, Webkit, Opera
		if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
			description = this.nav.plugins[pluginName].description;
			if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
				version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
				for (i=0; i<version.length; i++) {
					version[i] = parseInt(version[i].match(/\d+/), 10);
				}
			}
		// Internet Explorer / ActiveX
		} else if (typeof(window.ActiveXObject) != 'undefined') {
			try {
				ax = new ActiveXObject(activeX);
				if (ax) {
					version = axDetect(ax);
				}
			}
			catch (e) { }
		}
		return version;
	}
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash','Shockwave Flash','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash', function(ax) {
	// adapted from SWFObject
	var version = [],
		d = ax.GetVariable("$version");
	if (d) {
		d = d.split(" ")[1].split(",");
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight','Silverlight Plug-In','application/x-silverlight-2','AgControl.AgControl', function (ax) {
	// Silverlight cannot report its version number to IE
	// but it does have a isVersionSupported function, so we have to loop through it to get a version number.
	// adapted from http://www.silverlightversion.com/
	var v = [0,0,0,0],
		loopMatch = function(ax, v, i, n) {
			while(ax.isVersionSupported(v[0]+ "."+ v[1] + "." + v[2] + "." + v[3])){
				v[i]+=n;
			}
			v[i] -= n;
		};
	loopMatch(ax, v, 0, 1);
	loopMatch(ax, v, 1, 1);
	loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
	loopMatch(ax, v, 2, 1000);
	loopMatch(ax, v, 2, 100);
	loopMatch(ax, v, 2, 10);
	loopMatch(ax, v, 2, 1);
	loopMatch(ax, v, 3, 1);

	return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
	var version = [],
		d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

	if (d) {
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
	init: function() {
		var
			t = this,
			d = document,
			nav = mejs.PluginDetector.nav,
			ua = mejs.PluginDetector.ua.toLowerCase(),
			i,
			v,
			html5Elements = ['source','track','audio','video'];

		// detect browsers (only the ones that have some kind of quirk we need to work around)
		t.isiPad = (ua.match(/ipad/i) !== null);
		t.isiPhone = (ua.match(/iphone/i) !== null);
		t.isiOS = t.isiPhone || t.isiPad;
		t.isAndroid = (ua.match(/android/i) !== null);
		t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
		t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1);
		t.isChrome = (ua.match(/chrome/gi) !== null);
		t.isFirefox = (ua.match(/firefox/gi) !== null);
		t.isWebkit = (ua.match(/webkit/gi) !== null);
		t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit;
		t.isOpera = (ua.match(/opera/gi) !== null);
		t.hasTouch = ('ontouchstart' in window);

		// create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
		for (i=0; i<html5Elements.length; i++) {
			v = document.createElement(html5Elements[i]);
		}
		
		t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

		// detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)
		
		// iOS
		t.hasSemiNativeFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');
		
		// Webkit/firefox
		t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
		t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');
		
		t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen);
		t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;
		if (t.hasMozNativeFullScreen) {
			t.nativeFullScreenEnabled = v.mozFullScreenEnabled;
		}
		
		
		if (this.isChrome) {
			t.hasSemiNativeFullScreen = false;
		}
		
		if (t.hasTrueNativeFullScreen) {
			t.fullScreenEventName = (t.hasWebkitNativeFullScreen) ? 'webkitfullscreenchange' : 'mozfullscreenchange';
			
			
			t.isFullScreen = function() {
				if (v.mozRequestFullScreen) {
					return d.mozFullScreen;
				} else if (v.webkitRequestFullScreen) {
					return d.webkitIsFullScreen;
				}
			}
					
			t.requestFullScreen = function(el) {
		
				if (t.hasWebkitNativeFullScreen) {
					el.webkitRequestFullScreen();
				} else if (t.hasMozNativeFullScreen) {
					el.mozRequestFullScreen();
				}
			}
			
			t.cancelFullScreen = function() {				
				if (t.hasWebkitNativeFullScreen) {
					document.webkitCancelFullScreen();
				} else if (t.hasMozNativeFullScreen) {
					document.mozCancelFullScreen();
				}
			}	
			
		}
		
		
		// OS X 10.5 can't do this even if it says it can :(
		if (t.hasSemiNativeFullScreen && ua.match(/mac os x 10_5/i)) {
			t.hasNativeFullScreen = false;
			t.hasSemiNativeFullScreen = false;
		}
		
	}
};
mejs.MediaFeatures.init();


/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
	pluginType: 'native',
	isFullScreen: false,

	setCurrentTime: function (time) {
		this.currentTime = time;
	},

	setMuted: function (muted) {
		this.muted = muted;
	},

	setVolume: function (volume) {
		this.volume = volume;
	},

	// for parity with the plugin versions
	stop: function () {
		this.pause();
	},

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		
		// Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
		var 
			existingSources = this.getElementsByTagName('source');
		while (existingSources.length > 0){
			this.removeChild(existingSources[0]);
		}
	
		if (typeof url == 'string') {
			this.src = url;
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.src = media.src;
				}
			}
		}
	},

	setVideoSize: function (width, height) {
		this.width = width;
		this.height = height;
	}
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
	this.id = pluginid;
	this.pluginType = pluginType;
	this.src = mediaUrl;
	this.events = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

	// special
	pluginElement: null,
	pluginType: '',
	isFullScreen: false,

	// not implemented :(
	playbackRate: -1,
	defaultPlaybackRate: -1,
	seekable: [],
	played: [],

	// HTML5 read-only properties
	paused: true,
	ended: false,
	seeking: false,
	duration: 0,
	error: null,
	tagName: '',

	// HTML5 get/set properties, but only set (updated by event handlers)
	muted: false,
	volume: 1,
	currentTime: 0,

	// HTML5 methods
	play: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				this.pluginApi.playVideo();
			} else {
				this.pluginApi.playMedia();
			}
			this.paused = false;
		}
	},
	load: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
			} else {
				this.pluginApi.loadMedia();
			}
			
			this.paused = false;
		}
	},
	pause: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				this.pluginApi.pauseVideo();
			} else {
				this.pluginApi.pauseMedia();
			}			
			
			
			this.paused = true;
		}
	},
	stop: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				this.pluginApi.stopVideo();
			} else {
				this.pluginApi.stopMedia();
			}	
			this.paused = true;
		}
	},
	canPlayType: function(type) {
		var i,
			j,
			pluginInfo,
			pluginVersions = mejs.plugins[this.pluginType];

		for (i=0; i<pluginVersions.length; i++) {
			pluginInfo = pluginVersions[i];

			// test if user has the correct plugin version
			if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

				// test for plugin playback types
				for (j=0; j<pluginInfo.types.length; j++) {
					// find plugin that can play the type
					if (type == pluginInfo.types[j]) {
						return true;
					}
				}
			}
		}

		return false;
	},
	
	positionFullscreenButton: function(x,y,visibleAndAbove) {
		if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
			this.pluginApi.positionFullscreenButton(x,y,visibleAndAbove);
		}
	},
	
	hideFullscreenButton: function() {
		if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
			this.pluginApi.hideFullscreenButton();
		}		
	},	
	

	// custom methods since not all JavaScript implementations support get/set

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		if (typeof url == 'string') {
			this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
			this.src = mejs.Utility.absolutizeUrl(url);
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
					this.src = mejs.Utility.absolutizeUrl(url);
				}
			}
		}

	},
	setCurrentTime: function (time) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				this.pluginApi.seekTo(time);
			} else {
				this.pluginApi.setCurrentTime(time);
			}				
			
			
			
			this.currentTime = time;
		}
	},
	setVolume: function (volume) {
		if (this.pluginApi != null) {
			// same on YouTube and MEjs
			if (this.pluginType == 'youtube') {
				this.pluginApi.setVolume(volume * 100);
			} else {
				this.pluginApi.setVolume(volume);
			}
			this.volume = volume;
		}
	},
	setMuted: function (muted) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				if (muted) {
					this.pluginApi.mute();
				} else {
					this.pluginApi.unMute();
				}
				this.muted = muted;
				this.dispatchEvent('volumechange');
			} else {
				this.pluginApi.setMuted(muted);
			}
			this.muted = muted;
		}
	},

	// additional non-HTML5 methods
	setVideoSize: function (width, height) {
		
		//if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
			if ( this.pluginElement.style) {
				this.pluginElement.style.width = width + 'px';
				this.pluginElement.style.height = height + 'px';
			}
	        // altered by @edsilv
			//if (this.pluginApi != null && this.pluginApi.setVideoSize) {
	        if (this.pluginApi != null) {
				this.pluginApi.setVideoSize(width, height);
			}
		//}
	},

	setFullscreen: function (fullscreen) {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.pluginApi.setFullscreen(fullscreen);
		}
	},
	
	enterFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(true);
		}
	},
	
	exitFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(false);
		}
	},	

	// start: fake events
	addEventListener: function (eventName, callback, bubble) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(callback);
	},
	removeEventListener: function (eventName, callback) {
		if (!eventName) { this.events = {}; return true; }
		var callbacks = this.events[eventName];
		if (!callbacks) return true;
		if (!callback) { this.events[eventName] = []; return true; }
		for (i = 0; i < callbacks.length; i++) {
			if (callbacks[i] === callback) {
				this.events[eventName].splice(i, 1);
				return true;
			}
		}
		return false;
	},	
	dispatchEvent: function (eventName) {
        var i,
			args,
			callbacks = this.events[eventName];

		if (callbacks) {
			args = Array.prototype.slice.call(arguments, 1);
			for (i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(null, args);
			}
		}
	},
	// end: fake events
	
	// fake DOM attribute methods
	attributes: {},
	hasAttribute: function(name){
		return (name in this.attributes);  
	},
	removeAttribute: function(name){
		delete this.attributes[name];
	},
	getAttribute: function(name){
		if (this.hasAttribute(name)) {
			return this.attributes[name];
		}
		return '';
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},

	remove: function() {
		mejs.Utility.removeSwf(this.pluginElement.id);
	}
};

// Handles calls from Flash/Silverlight and reports them as native <video/audio> events and properties
mejs.MediaPluginBridge = {

	pluginMediaElements:{},
	htmlMediaElements:{},

	registerPluginElement: function (id, pluginMediaElement, htmlMediaElement) {
		this.pluginMediaElements[id] = pluginMediaElement;
		this.htmlMediaElements[id] = htmlMediaElement;
	},

	// when Flash/Silverlight is ready, it calls out to this method
	initPlugin: function (id) {

		var pluginMediaElement = this.pluginMediaElements[id],
			htmlMediaElement = this.htmlMediaElements[id];

		if (pluginMediaElement) {
			// find the javascript bridge
			switch (pluginMediaElement.pluginType) {
				case "flash":
					pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(id);
					break;
				case "silverlight":
					pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
					pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
					break;
			}
	
			if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
				pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
			}
		}
	},

	// receives events from Flash/Silverlight and sends them out as HTML5 media events
	// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
	fireEvent: function (id, eventName, values) {
		var
			e,
			i,
			bufferedTime,
			pluginMediaElement = this.pluginMediaElements[id];

		pluginMediaElement.ended = false;
		pluginMediaElement.paused = true;

		// fake event object to mimic real HTML media event.
		e = {
			type: eventName,
			target: pluginMediaElement
		};

		// attach all values to element and event object
		for (i in values) {
			pluginMediaElement[i] = values[i];
			e[i] = values[i];
		}

		// fake the newer W3C buffered TimeRange (loaded and total have been removed)
		bufferedTime = values.bufferedTime || 0;

		e.target.buffered = e.buffered = {
			start: function(index) {
				return 0;
			},
			end: function (index) {
				return bufferedTime;
			},
			length: 1
		};

		pluginMediaElement.dispatchEvent(e.type, e);
	}
};

/*
Default options
*/
mejs.MediaElementDefaults = {
	// allows testing on HTML5, flash, silverlight
	// auto: attempts to detect what the browser can do
	// native: forces HTML5 playback
	// shim: disallows HTML5, will attempt either Flash or Silverlight
	// none: forces fallback view
	mode: 'auto',
	// remove or reorder to change plugin priority and availability
	plugins: ['flash','silverlight','youtube','vimeo'],
	// shows debug errors on screen
	enablePluginDebug: false,
	// overrides the type specified, useful for dynamic instantiation
	type: '',
	// path to Flash and Silverlight plugins
	// altered by @edsilv - include app.js
	pluginPath: mejs.Utility.getScriptPath(['mediaelement.js','mediaelement.min.js','mediaelement-and-player.js','mediaelement-and-player.min.js', 'app.js']),
	// name of flash file
	flashName: 'flashmediaelement.swf',
	// turns on the smoothing filter in Flash
	enablePluginSmoothing: false,
	// name of silverlight file
	silverlightName: 'silverlightmediaelement.xap',
	// default if the <video width> is not specified
	defaultVideoWidth: 480,
	// default if the <video height> is not specified
	defaultVideoHeight: 270,
	// overrides <video width>
	pluginWidth: -1,
	// overrides <video height>
	pluginHeight: -1,
	// additional plugin variables in 'key=value' form
	pluginVars: [],	
	// rate in milliseconds for Flash and Silverlight to fire the timeupdate event
	// larger number is less accurate, but less strain on plugin->JavaScript bridge
	timerRate: 250,
	// initial volume for player
	startVolume: 0.8,
	success: function () { },
	error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
	return mejs.HtmlMediaElementShim.create(el,o);
};

mejs.HtmlMediaElementShim = {

	create: function(el, o) {
		var
			options = mejs.MediaElementDefaults,
			htmlMediaElement = (typeof(el) == 'string') ? document.getElementById(el) : el,
			tagName = htmlMediaElement.tagName.toLowerCase(),
			isMediaTag = (tagName === 'audio' || tagName === 'video'),
			src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
			poster = htmlMediaElement.getAttribute('poster'),
			autoplay =  htmlMediaElement.getAttribute('autoplay'),
			preload =  htmlMediaElement.getAttribute('preload'),
			controls =  htmlMediaElement.getAttribute('controls'),
			playback,
			prop;

		// extend options
		for (prop in o) {
			options[prop] = o[prop];
		}

		// clean up attributes
		src = 		(typeof src == 'undefined' 	|| src === null || src == '') ? null : src;		
		poster =	(typeof poster == 'undefined' 	|| poster === null) ? '' : poster;
		preload = 	(typeof preload == 'undefined' 	|| preload === null || preload === 'false') ? 'none' : preload;
		autoplay = 	!(typeof autoplay == 'undefined' || autoplay === null || autoplay === 'false');
		controls = 	!(typeof controls == 'undefined' || controls === null || controls === 'false');

		// test for HTML5 and plugin capabilities
		playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
		playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';

		if (playback.method == 'native') {
			// second fix for android
			if (mejs.MediaFeatures.isBustedAndroid) {
				htmlMediaElement.src = playback.url;
				htmlMediaElement.addEventListener('click', function() {
					htmlMediaElement.play();
				}, false);
			}
		
			// add methods to native HTMLMediaElement
			return this.updateNative(playback, options, autoplay, preload);
		} else if (playback.method !== '') {
			// create plugin to mimic HTMLMediaElement
			
			return this.createPlugin( playback,  options, poster, autoplay, preload, controls);
		} else {
			// boo, no HTML5, no Flash, no Silverlight.
			this.createErrorMessage( playback, options, poster );
			
			return this;
		}
	},
	
	determinePlayback: function(htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
		var
			mediaFiles = [],
			i,
			j,
			k,
			l,
			n,
			type,
			result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() != 'audio')},
			pluginName,
			pluginVersions,
			pluginInfo,
			dummy;
			
		// STEP 1: Get URL and type from <video src> or <source src>

		// supplied type overrides <video type> and <source type>
		if (typeof options.type != 'undefined' && options.type !== '') {
			
			// accept either string or array of types
			if (typeof options.type == 'string') {
				mediaFiles.push({type:options.type, url:src});
			} else {
				
				for (i=0; i<options.type.length; i++) {
					mediaFiles.push({type:options.type[i], url:src});
				}
			}

		// test for src attribute first
		} else if (src !== null) {
			type = this.formatType(src, htmlMediaElement.getAttribute('type'));
			mediaFiles.push({type:type, url:src});

		// then test for <source> elements
		} else {
			// test <source> types to see if they are usable
			for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
				n = htmlMediaElement.childNodes[i];
				if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
					src = n.getAttribute('src');
					type = this.formatType(src, n.getAttribute('type'));
					mediaFiles.push({type:type, url:src});
				}
			}
		}
		
		// in the case of dynamicly created players
		// check for audio types
		if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
			result.isVideo = false;
		}
		

		// STEP 2: Test for playback method
		
		// special case for Android which sadly doesn't implement the canPlayType function (always returns '')
		if (mejs.MediaFeatures.isBustedAndroid) {
			htmlMediaElement.canPlayType = function(type) {
				return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
			};
		}		
		

		// test for native playback first
		if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'native')) {
						
			if (!isMediaTag) {

				// create a real HTML5 Media Element 
				dummy = document.createElement( result.isVideo ? 'video' : 'audio');			
				htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
				htmlMediaElement.style.display = 'none';
				
				// use this one from now on
				result.htmlMediaElement = htmlMediaElement = dummy;
			}
				
			for (i=0; i<mediaFiles.length; i++) {
				// normal check
				if (htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== '' 
					// special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/,'mpeg')).replace(/no/, '') !== '') {
					result.method = 'native';
					result.url = mediaFiles[i].url;
					break;
				}
			}			
			
			if (result.method === 'native') {
				if (result.url !== null) {
					htmlMediaElement.src = result.url;
				}
			
				return result;
			}
		}

		// if native playback didn't work, then test plugins
		if (options.mode === 'auto' || options.mode === 'shim') {
			for (i=0; i<mediaFiles.length; i++) {
				type = mediaFiles[i].type;

				// test all plugins in order of preference [silverlight, flash]
				for (j=0; j<options.plugins.length; j++) {

					pluginName = options.plugins[j];
			
					// test version of plugin (for future features)
					pluginVersions = mejs.plugins[pluginName];				
					
					for (k=0; k<pluginVersions.length; k++) {
						pluginInfo = pluginVersions[k];
					
						// test if user has the correct plugin version
						
						// for youtube/vimeo
						if (pluginInfo.version == null || 
							
							mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

							// test for plugin playback types
							for (l=0; l<pluginInfo.types.length; l++) {
								// find plugin that can play the type
								if (type == pluginInfo.types[l]) {
									result.method = pluginName;
									result.url = mediaFiles[i].url;
									return result;
								}
							}
						}
					}
				}
			}
		}
		
		// what if there's nothing to play? just grab the first available
		if (result.method === '' && mediaFiles.length > 0) {
			result.url = mediaFiles[0].url;
		}

		return result;
	},

	formatType: function(url, type) {
		var ext;

		// if no type is supplied, fake it with the extension
		if (url && !type) {		
			return this.getTypeFromFile(url);
		} else {
			// only return the mime part of the type in case the attribute contains the codec
			// see http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
			// `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`
			
			if (type && ~type.indexOf(';')) {
				return type.substr(0, type.indexOf(';')); 
			} else {
				return type;
			}
		}
	},
	
	getTypeFromFile: function(url) {
		var ext = url.substring(url.lastIndexOf('.') + 1);
		return (/(mp4|m4v|ogg|ogv|webm|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video' : 'audio') + '/' + ext;
	},

	createErrorMessage: function(playback, options, poster) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			errorContainer = document.createElement('div');
			
		errorContainer.className = 'me-cannotplay';

        // changed by @edsilv
		//try {
		//	errorContainer.style.width = htmlMediaElement.width + 'px';
		//	errorContainer.style.height = htmlMediaElement.height + 'px';
		//} catch (e) {}

	    $(errorContainer).height($('.mejs-mediaelement').height());

        // changed by @edsilv
		//errorContainer.innerHTML = (poster !== '') ?
		//	'<a href="' + playback.url + '"><img src="' + poster + '" width="100%" height="100%" /></a>' :
		//	'<a href="' + playback.url + '"><span>Download File</span></a>';

	    errorContainer.innerHTML = '<p>Please install the <a target="_blank" href="http://get.adobe.com/flashplayer/">Adobe Flash</a> plugin to view this content.</p>';

		htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
		htmlMediaElement.style.display = 'none';

		options.error(htmlMediaElement);
	},

	createPlugin:function(playback, options, poster, autoplay, preload, controls) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			width = 1,
			height = 1,
			pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
			pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
			container = document.createElement('div'),
			specialIEContainer,
			node,
			initVars;

		// copy tagName from html media element
		pluginMediaElement.tagName = htmlMediaElement.tagName

		// copy attributes from html media element to plugin media element
		for (var i = 0; i < htmlMediaElement.attributes.length; i++) {
			var attribute = htmlMediaElement.attributes[i];
			if (attribute.specified == true) {
				pluginMediaElement.setAttribute(attribute.name, attribute.value);
			}
		}

		// check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
		node = htmlMediaElement.parentNode;
		while (node !== null && node.tagName.toLowerCase() != 'body') {
			if (node.parentNode.tagName.toLowerCase() == 'p') {
				node.parentNode.parentNode.insertBefore(node, node.parentNode);
				break;
			}
			node = node.parentNode;
		}

		if (playback.isVideo) {
			width = (options.videoWidth > 0) ? options.videoWidth : (htmlMediaElement.getAttribute('width') !== null) ? htmlMediaElement.getAttribute('width') : options.defaultVideoWidth;
			height = (options.videoHeight > 0) ? options.videoHeight : (htmlMediaElement.getAttribute('height') !== null) ? htmlMediaElement.getAttribute('height') : options.defaultVideoHeight;
		
			// in case of '%' make sure it's encoded
			width = mejs.Utility.encodeUrl(width);
			height = mejs.Utility.encodeUrl(height);
		
		} else {
			if (options.enablePluginDebug) {
				width = 320;
				height = 240;
			}
		}

		// register plugin
		pluginMediaElement.success = options.success;
		mejs.MediaPluginBridge.registerPluginElement(pluginid, pluginMediaElement, htmlMediaElement);

		// add container (must be added to DOM before inserting HTML for IE)
		container.className = 'me-plugin';
		container.id = pluginid + '_container';
		
		if (playback.isVideo) {
				htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
		} else {
				document.body.insertBefore(container, document.body.childNodes[0]);
		}

		// flash/silverlight vars
		initVars = [
			'id=' + pluginid,
			'isvideo=' + ((playback.isVideo) ? "true" : "false"),
			'autoplay=' + ((autoplay) ? "true" : "false"),
			'preload=' + preload,
			'width=' + width,
			'startvolume=' + options.startVolume,
			'timerrate=' + options.timerRate,
			'height=' + height];

		if (playback.url !== null) {
			if (playback.method == 'flash') {
				initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
			} else {
				initVars.push('file=' + playback.url);
			}
		}
		if (options.enablePluginDebug) {
			initVars.push('debug=true');
		}
		if (options.enablePluginSmoothing) {
			initVars.push('smoothing=true');
		}
		if (controls) {
			initVars.push('controls=true'); // shows controls in the plugin if desired
		}
		if (options.pluginVars) {
			initVars = initVars.concat(options.pluginVars);
		}		

		switch (playback.method) {
			case 'silverlight':
				container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
					break;

			case 'flash':

				if (mejs.MediaFeatures.isIE) {
					specialIEContainer = document.createElement('div');
					container.appendChild(specialIEContainer);
					specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?x=' + (new Date()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="always" />' +
'<param name="allowFullScreen" value="true" />' +
'</object>';

				} else {

					container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="always" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '"></embed>';
				}
				break;
			
			case 'youtube':
			
				
				var
					videoId = playback.url.substr(playback.url.lastIndexOf('=')+1);
					youtubeSettings = {
						container: container,
						containerId: container.id,
						pluginMediaElement: pluginMediaElement,
						pluginId: pluginid,
						videoId: videoId,
						height: height,
						width: width	
					};				
				
				if (mejs.PluginDetector.hasPluginVersion('flash', [10,0,0]) ) {
					mejs.YouTubeApi.createFlash(youtubeSettings);
				} else {
					mejs.YouTubeApi.enqueueIframe(youtubeSettings);		
				}
				
				break;
			
			// DEMO Code. Does NOT work.
			case 'vimeo':
				console.log('vimeoid');
				
				pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/')+1);
				
				container.innerHTML =
					'<object width="' + width + '" height="' + height + '">' +
						'<param name="allowfullscreen" value="true" />' +
						'<param name="allowscriptaccess" value="always" />' +
						'<param name="flashvars" value="api=1" />' + 
						'<param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + pluginMediaElement.vimeoid  + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" />' +
						'<embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + pluginMediaElement.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + width + '" height="' + height + '"></embed>' +
					'</object>';
					
				break;			
		}
		// hide original element
		htmlMediaElement.style.display = 'none';

		// FYI: options.success will be fired by the MediaPluginBridge
		
		return pluginMediaElement;
	},

	updateNative: function(playback, options, autoplay, preload) {
		
		var htmlMediaElement = playback.htmlMediaElement,
			m;
		
		
		// add methods to video object to bring it into parity with Flash Object
		for (m in mejs.HtmlMediaElement) {
			htmlMediaElement[m] = mejs.HtmlMediaElement[m];
		}

		/*
		Chrome now supports preload="none"
		if (mejs.MediaFeatures.isChrome) {
		
			// special case to enforce preload attribute (Chrome doesn't respect this)
			if (preload === 'none' && !autoplay) {
			
				// forces the browser to stop loading (note: fails in IE9)
				htmlMediaElement.src = '';
				htmlMediaElement.load();
				htmlMediaElement.canceledPreload = true;

				htmlMediaElement.addEventListener('play',function() {
					if (htmlMediaElement.canceledPreload) {
						htmlMediaElement.src = playback.url;
						htmlMediaElement.load();
						htmlMediaElement.play();
						htmlMediaElement.canceledPreload = false;
					}
				}, false);
			// for some reason Chrome forgets how to autoplay sometimes.
			} else if (autoplay) {
				htmlMediaElement.load();
				htmlMediaElement.play();
			}
		}
		*/

		// fire success code
		options.success(htmlMediaElement, htmlMediaElement);
		
		return htmlMediaElement;
	}
};

/*
 - test on IE (object vs. embed)
 - determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
 - fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
	isIframeStarted: false,
	isIframeLoaded: false,
	loadIframeApi: function() {
		if (!this.isIframeStarted) {
			var tag = document.createElement('script');
			tag.src = "http://www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			this.isIframeStarted = true;
		}
	},
	iframeQueue: [],
	enqueueIframe: function(yt) {
		
		if (this.isLoaded) {
			this.createIframe(yt);
		} else {
			this.loadIframeApi();
			this.iframeQueue.push(yt);
		}
	},
	createIframe: function(settings) {
		
		var
		pluginMediaElement = settings.pluginMediaElement,	
		player = new YT.Player(settings.containerId, {
			height: settings.height,
			width: settings.width,
			videoId: settings.videoId,
			playerVars: {controls:0},
			events: {
				'onReady': function() {
					
					// hook up iframe object to MEjs
					settings.pluginMediaElement.pluginApi = player;
					
					// init mejs
					mejs.MediaPluginBridge.initPlugin(settings.pluginId);
					
					// create timer
					setInterval(function() {
						mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
					}, 250);					
				},
				'onStateChange': function(e) {
					
					mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);
					
				}
			}
		});
	},
	
	createEvent: function (player, pluginMediaElement, eventName) {
        var obj = {
			type: eventName,
			target: pluginMediaElement
		};

		if (player && player.getDuration) {
			
			// time 
			pluginMediaElement.currentTime = obj.currentTime = player.getCurrentTime();
			pluginMediaElement.duration = obj.duration = player.getDuration();
			
			// state
			obj.paused = pluginMediaElement.paused;
			obj.ended = pluginMediaElement.ended;			
			
			// sound
			obj.muted = player.isMuted();
			obj.volume = player.getVolume() / 100;
			
			// progress
			obj.bytesTotal = player.getVideoBytesTotal();
			obj.bufferedBytes = player.getVideoBytesLoaded();
			
			// fake the W3C buffered TimeRange
			var bufferedTime = obj.bufferedBytes / obj.bytesTotal * obj.duration;
			
			obj.target.buffered = obj.buffered = {
				start: function(index) {
					return 0;
				},
				end: function (index) {
					return bufferedTime;
				},
				length: 1
			};
			
		}
		
		// send event up the chain
		pluginMediaElement.dispatchEvent(obj.type, obj);
	},	
	
	iFrameReady: function() {
		
		this.isLoaded = true;
		this.isIframeLoaded = true;
		
		while (this.iframeQueue.length > 0) {
			var settings = this.iframeQueue.pop();
			this.createIframe(settings);
		}	
	},
	
	// FLASH!
	flashPlayers: {},
	createFlash: function(settings) {
		
		this.flashPlayers[settings.pluginId] = settings;
		
		/*
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
				'<param name="allowScriptAccess" value="always">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		*/

		var specialIEContainer,
			youtubeUrl = 'http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';
			
		if (mejs.MediaFeatures.isIE) {
			
			specialIEContainer = document.createElement('div');
			settings.container.appendChild(specialIEContainer);
			specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '">' +
	'<param name="movie" value="' + youtubeUrl + '" />' +
	'<param name="wmode" value="transparent" />' +
	'<param name="allowScriptAccess" value="always" />' +
	'<param name="allowFullScreen" value="true" />' +
'</object>';
		} else {
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
				'<param name="allowScriptAccess" value="always">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		}		
		
	},
	
	flashReady: function(id) {
		var
			settings = this.flashPlayers[id],
			player = document.getElementById(id),
			pluginMediaElement = settings.pluginMediaElement;
		
		// hook up and return to MediaELementPlayer.success	
		pluginMediaElement.pluginApi = 
		pluginMediaElement.pluginElement = player;
		mejs.MediaPluginBridge.initPlugin(id);
		
		// load the youtube video
		player.cueVideoById(settings.videoId);
		
		var callbackName = settings.containerId + '_callback'
		
		window[callbackName] = function(e) {
			mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
		}
		
		player.addEventListener('onStateChange', callbackName);
		
		setInterval(function() {
			mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
		}, 250);
	},
	
	handleStateChange: function(youTubeState, player, pluginMediaElement) {
		switch (youTubeState) {
			case -1: // not started
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
				//createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
				break;
			case 0:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
				break;
			case 1:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
				break;
			case 2:
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
				break;
			case 3: // buffering
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
				break;
			case 5:
				// cued?
				break;						
			
		}			
		
	}
}
// IFRAME
function onYouTubePlayerAPIReady() {
	mejs.YouTubeApi.iFrameReady();
}
// FLASH
function onYouTubePlayerReady(id) {
	mejs.YouTubeApi.flashReady(id);
}

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != 'undefined') {
	mejs.$ = jQuery;
} else if (typeof ender != 'undefined') {
	mejs.$ = ender;
}
(function ($) {

	// default player values
	mejs.MepDefaults = {
		// url to poster (to fix iOS 3.x)
		poster: '',
		// default if the <video width> is not specified
		defaultVideoWidth: 480,
		// default if the <video height> is not specified
		defaultVideoHeight: 270,
		// if set, overrides <video width>
		videoWidth: -1,
		// if set, overrides <video height>
		videoHeight: -1,
		// default if the user doesn't specify
		defaultAudioWidth: 400,
		// default if the user doesn't specify
		defaultAudioHeight: 30,
		// width of audio player
		audioWidth: -1,
		// height of audio player
		audioHeight: -1,		
		// initial volume when the player starts (overrided by user cookie)
		startVolume: 0.8,
		// useful for <audio> player loops
		loop: false,
		// resize to media dimensions
		enableAutosize: true,
		// forces the hour marker (##:00:00)
		alwaysShowHours: false,

		// show framecount in timecode (##:00:00:00)
		showTimecodeFrameCount: false,
		// used when showTimecodeFrameCount is set to true
		framesPerSecond: 25,
		
		// automatically calculate the width of the progress bar based on the sizes of other elements
		autosizeProgress : true,
		// Hide controls when playing and mouse is not over the video
		alwaysShowControls: false,
		// force iPad's native controls
		iPadUseNativeControls: false,
		// force iPhone's native controls
		iPhoneUseNativeControls: false,	
		// force Android's native controls
		AndroidUseNativeControls: false,			
		// features to show
		features: ['playpause','current','progress','duration','tracks','volume','fullscreen'],
		// only for dynamic
		isVideo: true,
		
		// turns keyboard support on and off for this instance
		enableKeyboard: true,
		
		// whenthis player starts, it will pause other players
		pauseOtherPlayers: true,
		
		// array of keyboard actions such as play pause
		keyActions: [
				{
						keys: [
								32, // SPACE
								179 // GOOGLE play/pause button
							  ],
						action: function(player, media) {
								if (media.paused || media.ended) {
										media.play();	
								} else {
										media.pause();
								}										
						}
				},
				{
						keys: [38], // UP
						action: function(player, media) {
								var newVolume = Math.min(media.volume + 0.1, 1);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [40], // DOWN
						action: function(player, media) {
								var newVolume = Math.max(media.volume - 0.1, 0);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [
								37, // LEFT
								227 // Google TV rewind
						],
						action: function(player, media) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}
										
										// 5%
										var newTime = Math.max(media.currentTime - (media.duration * 0.05), 0);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [
								39, // RIGHT
								228 // Google TV forward
						], 
						action: function(player, media) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}
										
										// 5%
										var newTime = Math.min(media.currentTime + (media.duration * 0.05), media.duration);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [70], // f
						action: function(player, media) {
								if (typeof player.enterFullScreen != 'undefined') {
										if (player.isFullScreen) {
												player.exitFullScreen();
										} else {
												player.enterFullScreen();
										}
								}
						}
				}					
		]		
	};

	mejs.mepIndex = 0;
	
	mejs.players = [];

	// wraps a MediaElement object in player controls
	mejs.MediaElementPlayer = function(node, o) {
		// enforce object, even without "new" (via John Resig)
		if ( !(this instanceof mejs.MediaElementPlayer) ) {
			return new mejs.MediaElementPlayer(node, o);
		} 

		var t = this;
		
		// these will be reset after the MediaElement.success fires
		t.$media = t.$node = $(node);
		t.node = t.media = t.$media[0];		
		
		// check for existing player
		if (typeof t.node.player != 'undefined') {
			return t.node.player;
		} else {
			// attach player to DOM node for reference
			t.node.player = t;
		}
				
				
		// try to get options from data-mejsoptions
		if (typeof o == 'undefined') {
			o = t.$node.data('mejsoptions');	
		}
			
		// extend default options
		t.options = $.extend({},mejs.MepDefaults,o);
		
		// add to player array (for focus events)
		mejs.players.push(t);
		
		// start up
		t.init();

		return t;
	};

	// actual player
	mejs.MediaElementPlayer.prototype = {
		
		hasFocus: false,
		
		controlsAreVisible: true,
		
		init: function() {

			var
				t = this,
				mf = mejs.MediaFeatures,
				// options for MediaElement (shim)
				meOptions = $.extend(true, {}, t.options, {
					success: function(media, domNode) { t.meReady(media, domNode); },
					error: function(e) { t.handleError(e);}
				}),
				tagName = t.media.tagName.toLowerCase();
		
			t.isDynamic = (tagName !== 'audio' && tagName !== 'video');
			
			if (t.isDynamic) {	
				// get video from src or href?				
				t.isVideo = t.options.isVideo;						
			} else {
				t.isVideo = (tagName !== 'audio' && t.options.isVideo);
			}
		
			// use native controls in iPad, iPhone, and Android	
			if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {
				
				// add controls and stop
				t.$media.attr('controls', 'controls');

				// attempt to fix iOS 3 bug
				//t.$media.removeAttr('poster');
                                // no Issue found on iOS3 -ttroxell

				// override Apple's autoplay override for iPads
				if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
					t.media.load();
					t.media.play();
				}
					
			} else if (mf.isAndroid && t.AndroidUseNativeControls) {
				
				// leave default player

			} else {

				// DESKTOP: use MediaElementPlayer controls
				
				// remove native controls 			
				t.$media.removeAttr('controls');					
				
				// unique ID
				t.id = 'mep_' + mejs.mepIndex++;

				// build container
				t.container =
					$('<div id="' + t.id + '" class="mejs-container">'+
						'<div class="mejs-inner">'+
							'<div class="mejs-mediaelement"></div>'+
							'<div class="mejs-layers"></div>'+
							'<div class="mejs-controls"></div>'+
							'<div class="mejs-clear"></div>'+
						'</div>' +
					'</div>')
					.addClass(t.$media[0].className)
					.insertBefore(t.$media);	
					
				// add classes for user and content
				t.container.addClass(
					(mf.isAndroid ? 'mejs-android ' : '') +
					(mf.isiOS ? 'mejs-ios ' : '') +
					(mf.isiPad ? 'mejs-ipad ' : '') +
					(mf.isiPhone ? 'mejs-iphone ' : '') +
					(t.isVideo ? 'mejs-video ' : 'mejs-audio ')
				);	
					

				// move the <video/video> tag into the right spot
				if (mf.isiOS) {
				
					// sadly, you can't move nodes in iOS, so we have to destroy and recreate it!
					var $newMedia = t.$media.clone();
					
					t.container.find('.mejs-mediaelement').append($newMedia);
					
					t.$media.remove();
					t.$node = t.$media = $newMedia;
					t.node = t.media = $newMedia[0]
					
				} else {
					
					// normal way of moving it into place (doesn't work on iOS)
					t.container.find('.mejs-mediaelement').append(t.$media);
				}
				
				// find parts
				t.controls = t.container.find('.mejs-controls');
				t.layers = t.container.find('.mejs-layers');

				// determine the size
				
				/* size priority:
					(1) videoWidth (forced), 
					(2) style="width;height;"
					(3) width attribute,
					(4) defaultVideoWidth (for unspecified cases)
				*/
				
				var capsTagName = tagName.substring(0,1).toUpperCase() + tagName.substring(1);
				
				if (t.options[tagName + 'Width'] > 0 || t.options[tagName + 'Width'].toString().indexOf('%') > -1) {
					t.width = t.options[tagName + 'Width'];
				} else if (t.media.style.width !== '' && t.media.style.width !== null) {
					t.width = t.media.style.width;						
				} else if (t.media.getAttribute('width') !== null) {
					t.width = t.$media.attr('width');
				} else {
					t.width = t.options['default' + capsTagName + 'Width'];
				}
				
				if (t.options[tagName + 'Height'] > 0 || t.options[tagName + 'Height'].toString().indexOf('%') > -1) {
					t.height = t.options[tagName + 'Height'];
				} else if (t.media.style.height !== '' && t.media.style.height !== null) {
					t.height = t.media.style.height;
				} else if (t.$media[0].getAttribute('height') !== null) {
					t.height = t.$media.attr('height');	
				} else {
					t.height = t.options['default' + capsTagName + 'Height'];
				}

				// set the size, while we wait for the plugins to load below
				t.setPlayerSize(t.width, t.height);
				
				// create MediaElementShim
				meOptions.pluginWidth = t.height;
				meOptions.pluginHeight = t.width;				
			}
			
			

			// create MediaElement shim
			mejs.MediaElement(t.$media[0], meOptions);
		},
		
		showControls: function(doAnimation) {
			var t = this;
			
			doAnimation = typeof doAnimation == 'undefined' || doAnimation;
			
			if (t.controlsAreVisible)
				return;
			
			if (doAnimation) {
				t.controls
					.css('visibility','visible')
					.stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});	
	
				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.css('visibility','visible')
					.stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});	
					
			} else {
				t.controls
					.css('visibility','visible')
					.css('display','block');
	
				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.css('visibility','visible')
					.css('display','block');
					
				t.controlsAreVisible = true;
			}
			
			t.setControlsSize();
			
		},

		hideControls: function(doAnimation) {
			var t = this;
			
			doAnimation = typeof doAnimation == 'undefined' || doAnimation;
			
			if (!t.controlsAreVisible)
				return;
			
			if (doAnimation) {
				// fade out main controls
				t.controls.stop(true, true).fadeOut(200, function() {
					$(this)
						.css('visibility','hidden')
						.css('display','block');
						
					t.controlsAreVisible = false;
				});	
	
				// any additional controls people might add and want to hide
				t.container.find('.mejs-control').stop(true, true).fadeOut(200, function() {
					$(this)
						.css('visibility','hidden')
						.css('display','block');
				});	
			} else {
				
				// hide main controls
				t.controls
					.css('visibility','hidden')
					.css('display','block');		
				
				// hide others
				t.container.find('.mejs-control')
					.css('visibility','hidden')
					.css('display','block');
					
				t.controlsAreVisible = false;
			}
		},		

		controlsTimer: null,

		startControlsTimer: function(timeout) {

			var t = this;
			
			timeout = typeof timeout != 'undefined' ? timeout : 1500;

			t.killControlsTimer('start');

			t.controlsTimer = setTimeout(function() {
				//console.log('timer fired');
				t.hideControls();
				t.killControlsTimer('hide');
			}, timeout);
		},

		killControlsTimer: function(src) {

			var t = this;

			if (t.controlsTimer !== null) {
				clearTimeout(t.controlsTimer);
				delete t.controlsTimer;
				t.controlsTimer = null;
			}
		},		
		
		controlsEnabled: true,
		
		disableControls: function() {
			var t= this;
			
			t.killControlsTimer();
			t.hideControls(false);
			this.controlsEnabled = false;
		},
		
		enableControls: function() {
			var t= this;
			
			t.showControls(false);
			
			t.controlsEnabled = true;
		},		
		

		// Sets up all controls and events
		meReady: function(media, domNode) {			
		
		
			var t = this,
				mf = mejs.MediaFeatures,
				autoplayAttr = domNode.getAttribute('autoplay'),
				autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
				featureIndex,
				feature;

			// make sure it can't create itself again if a plugin reloads
			if (t.created)
				return;
			else
				t.created = true;			

			t.media = media;
			t.domNode = domNode;
			
			if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {				
				
				// two built in features
				t.buildposter(t, t.controls, t.layers, t.media);
				t.buildkeyboard(t, t.controls, t.layers, t.media);
				t.buildoverlays(t, t.controls, t.layers, t.media);

				// grab for use by features
				t.findTracks();

				// add user-defined features/controls
				for (featureIndex in t.options.features) {
					feature = t.options.features[featureIndex];
					if (t['build' + feature]) {
						try {
							t['build' + feature](t, t.controls, t.layers, t.media);
						} catch (e) {
							// TODO: report control error
							//throw e;
							//console.log('error building ' + feature);
							//console.log(e);
						}
					}
				}

				t.container.trigger('controlsready');
				
				// reset all layers and controls
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();
				

				// controls fade
				if (t.isVideo) {
				
					if (mejs.MediaFeatures.hasTouch) {
						
						// for touch devices (iOS, Android)
						// show/hide without animation on touch
						
						t.$media.bind('touchstart', function() {
							
							
							// toggle controls
							if (t.controlsAreVisible) {
								t.hideControls(false);
							} else {
								if (t.controlsEnabled) {
									t.showControls(false);
								}
							}
						});					
					
					} else {
						// click controls
						var clickElement = (t.media.pluginType == 'native') ? t.$media : $(t.media.pluginElement);
						
						// click to play/pause
						clickElement.click(function() {
							if (media.paused) {
								media.play();
							} else {
								media.pause();
							}
						});
						
					
						// show/hide controls
						t.container
							.bind('mouseenter mouseover', function () {
								if (t.controlsEnabled) {
									if (!t.options.alwaysShowControls) {								
										t.killControlsTimer('enter');
										t.showControls();
										t.startControlsTimer(2500);		
									}
								}
							})
							.bind('mousemove', function() {
								if (t.controlsEnabled) {
									if (!t.controlsAreVisible) {
										t.showControls();
									}
									//t.killControlsTimer('move');
									if (!t.options.alwaysShowControls) {
										t.startControlsTimer(2500);
									}
								}
							})
							.bind('mouseleave', function () {
								if (t.controlsEnabled) {
									if (!t.media.paused && !t.options.alwaysShowControls) {
										t.startControlsTimer(1000);								
									}
								}
							});
					}
					
					// check for autoplay
					if (autoplay && !t.options.alwaysShowControls) {
						t.hideControls();
					}

					// resizer
					if (t.options.enableAutosize) {
						t.media.addEventListener('loadedmetadata', function(e) {
							// if the <video height> was not set and the options.videoHeight was not set
							// then resize to the real dimensions
							if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
								t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
								t.setControlsSize();
								t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
							}
						}, false);
					}
				}
				
				// EVENTS

				// FOCUS: when a video starts playing, it takes focus from other players (possibily pausing them)
				media.addEventListener('play', function() {
						
						// go through all other players
						for (var i=0, il=mejs.players.length; i<il; i++) {
							var p = mejs.players[i];
							if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
								p.pause();
							}
							p.hasFocus = false;
						}
						
						t.hasFocus = true;
				},false);
								

				// ended for all
				t.media.addEventListener('ended', function (e) {
					try{
						t.media.setCurrentTime(0);
					} catch (exp) {
						
					}
					t.media.pause();
					
					if (t.setProgressRail)
						t.setProgressRail();
					if (t.setCurrentRail)
						t.setCurrentRail();						

					if (t.options.loop) {
						t.media.play();
					} else if (!t.options.alwaysShowControls && t.controlsEnabled) {
						t.showControls();
					}
				}, false);
				
				// resize on the first play
				t.media.addEventListener('loadedmetadata', function(e) {
					if (t.updateDuration) {
						t.updateDuration();
					}
					if (t.updateCurrent) {
						t.updateCurrent();
					}
					
					if (!t.isFullScreen) {
						t.setPlayerSize(t.width, t.height);
						t.setControlsSize();
					}
				}, false);


				// webkit has trouble doing this without a delay
				setTimeout(function () {
					t.setPlayerSize(t.width, t.height);
					t.setControlsSize();
				}, 50);
				
				// adjust controls whenever window sizes (used to be in fullscreen only)
				$(window).resize(function() {
					
					// don't resize for fullscreen mode				
					if ( !(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) ) {
						t.setPlayerSize(t.width, t.height);
					}
					
					// always adjust controls
					t.setControlsSize();
				});				

				// TEMP: needs to be moved somewhere else
				if (t.media.pluginType == 'youtube') {
					t.container.find('.mejs-overlay-play').hide();	
				}
			}
			
			// force autoplay for HTML5
			if (autoplay && media.pluginType == 'native') {
				media.load();
				media.play();
			}


			if (t.options.success) {
				
				if (typeof t.options.success == 'string') {
						window[t.options.success](t.media, t.domNode, t);
				} else {
						t.options.success(t.media, t.domNode, t);
				}
			}
		},

		handleError: function(e) {
			var t = this;
			
			t.controls.hide();
		
			// Tell user that the file cannot be played
			if (t.options.error) {
				t.options.error(e);
			}
		},

        // altered by @edsilv
		setPlayerSize: function() {
            var t = this;

			if (typeof width != 'undefined')
				t.width = width;
				
			if (typeof height != 'undefined')
				t.height = height;

			// do we have the native dimensions yet?
			var nativeWidth = (t.media.videoWidth && t.media.videoWidth > 0) ? t.media.videoWidth : t.options.defaultVideoWidth;
            var nativeHeight = (t.media.videoHeight && t.media.videoHeight > 0) ? t.media.videoHeight : t.options.defaultVideoHeight;
			var ratio = nativeHeight/nativeWidth;
            var parentWidth = t.container.parent().width();
            var parentHeight = t.container.parent().height();
			var newHeight = parseInt(parentWidth * ratio, 10);
            var newWidth = parentWidth;

            if (newHeight > parentHeight){
                newHeight = parentHeight;
                newWidth = parseInt(parentHeight / ratio, 10);
            }

			// set outer container size
			t.container
				.width(newWidth)
				.height(newHeight);
					
			// set native <video>
			t.$media
				.width('100%')
				.height('100%');
					
			// set shims
			t.container.find('object, embed, iframe')
				.width('100%')
				.height('100%');
					
			// if shim is ready, send the size to the embeded plugin	
			if (t.media.setVideoSize)
				t.media.setVideoSize(parentWidth, newHeight);
					
			// set the layers
			t.layers.children('.mejs-layer')
				.width('100%')
				.height('100%');
		},

		setControlsSize: function() {

            var t = this,
				usedWidth = 0,
				railWidth = 0,
                play = t.controls.find('.mejs-playpause-button'),
				rail = t.controls.find('.mejs-time-rail'),
				total = t.controls.find('.mejs-time-total'),
				currentTime = t.controls.find('.mejs-currenttime-container'),
                duration = t.controls.find('.mejs-duration-container'),
				loaded = t.controls.find('.mejs-time-loaded'),
                volume = t.controls.find('.mejs-volume-button'),
                fullscreen = t.controls.find('.mejs-fullscreen-button'),
                volumeSlider = t.controls.find('.mejs-horizontal-volume-slider');
			

			// allow the size to come from custom CSS
			if (t.options && !t.options.autosizeProgress) {
				// Also, frontends devs can be more flexible 
				// due the opportunity of absolute positioning.
				railWidth = parseInt(rail.css('width'));
			}
			
            // altered by @edsilv
            t.controls.width(t.controls.parent().width() - 18);

            railWidth = t.controls.width() - play.outerWidth(true) - currentTime.outerWidth(true) - duration.outerWidth(true) - volume.outerWidth(true) - volumeSlider.outerWidth(true) - fullscreen.outerWidth(true);

            var railLeft = rail.position().left;

            rail.css({
                'left': play.outerWidth(true)
            });

            currentTime.css({
                'left': railLeft + railWidth
            });

            var durationLeft = railLeft + railWidth + currentTime.outerWidth(true);

            duration.css({
                'left': durationLeft
            });

            var volumeLeft = railLeft + railWidth + currentTime.outerWidth(true) + duration.outerWidth(true);

            volume.css({
                'left': volumeLeft
            });

            var volumeSliderLeft = railLeft + railWidth + currentTime.outerWidth(true) + duration.outerWidth(true) + volume.outerWidth(true);

            volumeSlider.css({
                'left': volumeSliderLeft
            });

            var fullscreenLeft = railLeft + railWidth + currentTime.outerWidth(true) + duration.outerWidth(true) + volume.outerWidth(true) + volumeSlider.outerWidth(true);

            fullscreen.css({
                'left': fullscreenLeft
            });

			// outer area
			rail.width(railWidth);
			// dark space
			total.width(railWidth - (total.outerWidth(true) - total.width()));
			
			if (t.setProgressRail)
				t.setProgressRail();
			if (t.setCurrentRail)
				t.setCurrentRail();				
		},


		buildposter: function(player, controls, layers, media) {
			var t = this,
				poster = 
				$('<div class="mejs-poster mejs-layer">' +
				'</div>')
					.appendTo(layers),
				posterUrl = player.$media.attr('poster');

			// prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
			if (player.options.poster !== '') {
				posterUrl = player.options.poster;
			}	
				
			// second, try the real poster
			if (posterUrl !== '' && posterUrl != null) {
				t.setPoster(posterUrl);
			} else {
				poster.hide();
			}

			media.addEventListener('play',function() {
				poster.hide();
			}, false);
		},
		
		setPoster: function(url) {
			var t = this,
				posterDiv = t.container.find('.mejs-poster'),
				posterImg = posterDiv.find('img');
				
			if (posterImg.length == 0) {
				posterImg = $('<img width="100%" height="100%" />').appendTo(posterDiv);
			}	
			
			posterImg.attr('src', url);
		},

		buildoverlays: function(player, controls, layers, media) {
			if (!player.isVideo)
				return;

			var 
			loading = 
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-loading"><span></span></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			error = 
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-error"></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),				
				
			// this needs to come last so it's on top
			bigPlay = 
				$('<div class="mejs-overlay mejs-layer mejs-overlay-play">'+
					'<div class="mejs-overlay-button"></div>'+
				'</div>')
				.appendTo(layers)
				.click(function() {
					if (media.paused) {
						media.play();
					} else {
						media.pause();
					}
				});
			
			/*
			if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
				bigPlay.remove();
				loading.remove();
			}
			*/
	

			// show/hide big play button
			media.addEventListener('play',function() {
				bigPlay.hide();
				loading.hide();
				error.hide();
			}, false);	
			
			media.addEventListener('playing', function() {
				bigPlay.hide();
				loading.hide();
				error.hide();			
			}, false);
	
			media.addEventListener('pause',function() {
				if (!mejs.MediaFeatures.isiPhone) {
					bigPlay.show();
				}
			}, false);
			
			media.addEventListener('waiting', function() {
				loading.show();	
			}, false);			
			
			
			// show/hide loading			
			media.addEventListener('loadeddata',function() {
				// for some reason Chrome is firing this event
				//if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
				//	return;
					
				loading.show();
			}, false);	
			media.addEventListener('canplay',function() {
				loading.hide();
			}, false);	

			// error handling
			media.addEventListener('error',function() {
				loading.hide();
				error.show();
				error.find('mejs-overlay-error').html("Error loading this resource");
			}, false);				
		},
		
		buildkeyboard: function(player, controls, layers, media) {

				var t = this;
				
				// listen for key presses
				$(document).keydown(function(e) {
						
						if (player.hasFocus && player.options.enableKeyboard) {
										
								// find a matching key
								for (var i=0, il=player.options.keyActions.length; i<il; i++) {
										var keyAction = player.options.keyActions[i];
										
										for (var j=0, jl=keyAction.keys.length; j<jl; j++) {
												if (e.keyCode == keyAction.keys[j]) {
														e.preventDefault();
														keyAction.action(player, media);
														return false;
												}												
										}
								}
						}
						
						return true;
				});
				
				// check if someone clicked outside a player region, then kill its focus
				$(document).click(function(event) {
						if ($(event.target).closest('.mejs-container').length == 0) {
								player.hasFocus = false;
						}
				});
			
		},

		findTracks: function() {
			var t = this,
				tracktags = t.$media.find('track');

			// store for use by plugins
			t.tracks = [];
			tracktags.each(function(index, track) {
				
				track = $(track);
				
				t.tracks.push({
					srclang: track.attr('srclang').toLowerCase(),
					src: track.attr('src'),
					kind: track.attr('kind'),
					label: track.attr('label') || '',
					entries: [],
					isLoaded: false
				});
			});
		},
		changeSkin: function(className) {
			this.container[0].className = 'mejs-container ' + className;
			this.setPlayerSize(this.width, this.height);
			this.setControlsSize();
		},
		play: function() {
			this.media.play();
		},
		pause: function() {
			this.media.pause();
		},
		load: function() {
			this.media.load();
		},
		setMuted: function(muted) {
			this.media.setMuted(muted);
		},
		setCurrentTime: function(time) {
			this.media.setCurrentTime(time);
		},
		getCurrentTime: function() {
			return this.media.currentTime;
		},
		setVolume: function(volume) {
			this.media.setVolume(volume);
		},
		getVolume: function() {
			return this.media.volume;
		},
		setSrc: function(src) {
			this.media.setSrc(src);
		},
		remove: function() {
			var t = this;
			
			if (t.media.pluginType == 'flash') {
				t.media.remove();
			} else if (t.media.pluginType == 'native') {
				t.media.prop('controls', true);
			}
			
			// grab video and put it back in place
			if (!t.isDynamic) {
				t.$node.insertBefore(t.container)
			}
			
			t.container.remove();
		}
	};

	// turn into jQuery plugin
	if (typeof jQuery != 'undefined') {
		jQuery.fn.mediaelementplayer = function (options) {
			return this.each(function () {
				new mejs.MediaElementPlayer(this, options);
			});
		};
	}
	
	$(document).ready(function() {
		// auto enable using JSON attribute
		$('.mejs-player').mediaelementplayer();
	});
	
	// push out to window
	window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		playpauseText: 'Play/Pause'
	});

	// PLAY/pause BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildplaypause: function(player, controls, layers, media) {
			var 
				t = this,
				play = 
				$('<div class="mejs-button mejs-playpause-button mejs-play" >' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.playpauseText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function(e) {
					e.preventDefault();
				
					if (media.paused) {
						media.play();
					} else {
						media.pause();
					}
					
					return false;
				});

			media.addEventListener('play',function() {
				play.removeClass('mejs-play').addClass('mejs-pause');
			}, false);
			media.addEventListener('playing',function() {
				play.removeClass('mejs-play').addClass('mejs-pause');
			}, false);


			media.addEventListener('pause',function() {
				play.removeClass('mejs-pause').addClass('mejs-play');
			}, false);
			media.addEventListener('paused',function() {
				play.removeClass('mejs-pause').addClass('mejs-play');
			}, false);
		}
	});
	
})(mejs.$);
(function($) {

	$.extend(mejs.MepDefaults, {
		stopText: 'Stop'
	});

	// STOP BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildstop: function(player, controls, layers, media) {
			var t = this,
				stop = 
				$('<div class="mejs-button mejs-stop-button mejs-stop">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function() {
					if (!media.paused) {
						media.pause();
					}
					if (media.currentTime > 0) {
						media.setCurrentTime(0);	
						controls.find('.mejs-time-current').width('0px');
						controls.find('.mejs-time-handle').css('left', '0px');
						controls.find('.mejs-time-float-current').html( mejs.Utility.secondsToTimeCode(0) );
						controls.find('.mejs-currenttime').html( mejs.Utility.secondsToTimeCode(0) );					
						layers.find('.mejs-poster').show();
					}
				});
		}
	});
	
})(mejs.$);
(function($) {
	// progress/loaded bar
	$.extend(MediaElementPlayer.prototype, {
		buildprogress: function(player, controls, layers, media) {

			$('<div class="mejs-time-rail">'+
				'<span class="mejs-time-total">'+
					'<span class="mejs-time-loaded"></span>'+
					'<span class="mejs-time-current"></span>'+
					'<span class="mejs-time-handle"></span>'+
					'<div class="mejs-time-float">' + 
						'<div class="mejs-time-float-current">00:00</div>' + 
						'<div class="mejs-time-float-corner"></div>' + 
					'</div>'+
				'</span>'+
			'</div>')
				.appendTo(controls);

			var 
				t = this,
				total = controls.find('.mejs-time-total'),
				loaded  = controls.find('.mejs-time-loaded'),
				current  = controls.find('.mejs-time-current'),
				handle  = controls.find('.mejs-time-handle'),
				timefloat  = controls.find('.mejs-time-float'),
                timefloatcurrent  = controls.find('.mejs-time-float-current'),
				handleMouseMove = function (e) {
					// mouse position relative to the object
					var x = e.pageX,
						offset = total.offset(),
						width = total.outerWidth(),
						percentage = 0,
						newTime = 0,
						pos = x - offset.left;


					if (x > offset.left && x <= width + offset.left && media.duration) {
						percentage = ((x - offset.left) / width);
						newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

						// seek to where the mouse is
						if (mouseIsDown) {
							media.setCurrentTime(newTime);
						}

						// position floating time box
						if (!mejs.MediaFeatures.hasTouch) {
                            timefloat.css('left', pos);
							timefloatcurrent.html( mejs.Utility.secondsToTimeCode(newTime) );
							timefloat.show();
						}
					}
				},
				mouseIsDown = false,
				mouseIsOver = false;

			// handle clicks
			//controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
			total
				.bind('mousedown', function (e) {
					// only handle left clicks
					if (e.which === 1) {
						mouseIsDown = true;
						handleMouseMove(e);
						return false;
					}					
				});

			controls.find('.mejs-time-total')
				.bind('mouseenter', function(e) {
					mouseIsOver = true;
					if (!mejs.MediaFeatures.hasTouch) {
						timefloat.show();
					}
				})
				.bind('mouseleave',function(e) {
					mouseIsOver = false;
					timefloat.hide();
				});

			$(document)
				.bind('mouseup', function (e) {
					mouseIsDown = false;
					timefloat.hide();
					//handleMouseMove(e);
				})
				.bind('mousemove', function (e) {
					if (mouseIsDown || mouseIsOver) {
						handleMouseMove(e);
					}
				});

			// loading
			media.addEventListener('progress', function (e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
			}, false);

			// current time
			media.addEventListener('timeupdate', function(e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
			}, false);
			
			
			// store for later use
			t.loaded = loaded;
			t.total = total;
			t.current = current;
			t.handle = handle;
		},
		setProgressRail: function(e) {

			var
				t = this,
				target = (e != undefined) ? e.target : t.media,
				percent = null;			

			// newest HTML5 spec has buffered array (FF4, Webkit)
			if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
				// TODO: account for a real array with multiple values (only Firefox 4 has this so far) 
				percent = target.buffered.end(0) / target.duration;
			} 
			// Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
			// to be anything other than 0. If the byte count is available we use this instead.
			// Browsers that support the else if do not seem to have the bufferedBytes value and
			// should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
			else if (target && target.bytesTotal != undefined && target.bytesTotal > 0 && target.bufferedBytes != undefined) {
				percent = target.bufferedBytes / target.bytesTotal;
			}
			// Firefox 3 with an Ogg file seems to go this way
			else if (e && e.lengthComputable && e.total != 0) {
				percent = e.loaded/e.total;
			}

			// finally update the progress bar
			if (percent !== null) {
				percent = Math.min(1, Math.max(0, percent));
				// update loaded bar
				if (t.loaded && t.total) {
					t.loaded.width(t.total.width() * percent);
				}
			}
		},
		setCurrentRail: function() {

			var t = this;
		
			if (t.media.currentTime != undefined && t.media.duration) {

				// update bar and handle
				if (t.total && t.handle) {
					var 
						newWidth = t.total.width() * t.media.currentTime / t.media.duration,
						handlePos = newWidth - (t.handle.outerWidth(true) / 2);

					t.current.width(newWidth);
					t.handle.css('left', handlePos);
				}
			}

		}	
	});
})(mejs.$);
(function($) {
	
	// options
	$.extend(mejs.MepDefaults, {
		duration: -1,
		timeAndDurationSeparator: ' <span> | </span> '
	});


	// current and duration 00:00 / 00:00
	$.extend(MediaElementPlayer.prototype, {
		buildcurrent: function(player, controls, layers, media) {
			var t = this;
			
			$('<div class="mejs-time">'+
					'<span class="mejs-currenttime">' + (player.options.alwaysShowHours ? '00:' : '')
					+ (player.options.showTimecodeFrameCount? '00:00:00':'00:00')+ '</span><span class="slash">/</span>'+
					'</div>')
					.appendTo(controls);
			
			t.currenttime = t.controls.find('.mejs-currenttime');

			media.addEventListener('timeupdate',function() {
				player.updateCurrent();
			}, false);
		},


		buildduration: function(player, controls, layers, media) {
			var t = this;
			
			if (controls.children().last().find('.mejs-currenttime').length > 0) {
				$(t.options.timeAndDurationSeparator +
					'<span class="mejs-duration">' + 
						(t.options.duration > 0 ? 
							mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
				   			((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')) 
				   		) + 
					'</span>')
					.appendTo(controls.find('.mejs-time'));
			} else {

				// add class to current time
				controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');
				
				$('<div class="mejs-time mejs-duration-container">'+
					'<span class="mejs-duration">' + 
						(t.options.duration > 0 ? 
							mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
				   			((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')) 
				   		) + 
					'</span>' +
				'</div>')
				.appendTo(controls);
			}
			
			t.durationD = t.controls.find('.mejs-duration');

			media.addEventListener('timeupdate',function() {
				player.updateDuration();
			}, false);
		},
		
		updateCurrent:  function() {
			var t = this;

			if (t.currenttime) {
				t.currenttime.html(mejs.Utility.secondsToTimeCode(t.media.currentTime, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25));
			}
		},
		
		updateDuration: function() {	
			var t = this;
			
			if (t.media.duration && t.durationD) {
				t.durationD.html(mejs.Utility.secondsToTimeCode(t.media.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25));
			}		
		}
	});

})(mejs.$);
(function($) {

	$.extend(mejs.MepDefaults, {
		muteText: 'Volume/mute toggle',
		hideVolumeOnTouchDevices: true,
		
		audioVolume: 'horizontal',
		videoVolume: 'vertical'
	});

	$.extend(MediaElementPlayer.prototype, {
		buildvolume: function(player, controls, layers, media) {
				
			// Android and iOS don't support volume controls
			if (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)
				return;
			
			var t = this,
				mode = (t.isVideo) ? t.options.videoVolume : t.options.audioVolume,
				mute = (mode == 'horizontal') ?
				
				// horizontal version
				$('<div class="mejs-button mejs-volume-button mejs-mute">'+
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.muteText + '"></button>'+
				'</div>' +
				'<div class="mejs-horizontal-volume-slider">'+ // outer background
					'<div class="mejs-horizontal-volume-total"></div>'+ // line background
					'<div class="mejs-horizontal-volume-current"></div>'+ // current volume
					'<div class="mejs-horizontal-volume-handle"></div>'+ // handle
				'</div>'
				)
					.appendTo(controls) :
				
				// vertical version
				$('<div class="mejs-button mejs-volume-button mejs-mute">'+
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.muteText + '"></button>'+
					'<div class="mejs-volume-slider">'+ // outer background
						'<div class="mejs-volume-total"></div>'+ // line background
						'<div class="mejs-volume-current"></div>'+ // current volume
						'<div class="mejs-volume-handle"></div>'+ // handle
					'</div>'+
				'</div>')
					.appendTo(controls),
			volumeSlider = t.container.find('.mejs-volume-slider, .mejs-horizontal-volume-slider'),
			volumeTotal = t.container.find('.mejs-volume-total, .mejs-horizontal-volume-total'),
			volumeCurrent = t.container.find('.mejs-volume-current, .mejs-horizontal-volume-current'),
			volumeHandle = t.container.find('.mejs-volume-handle, .mejs-horizontal-volume-handle'),

			positionVolumeHandle = function(volume, secondTry) {

				if (!volumeSlider.is(':visible') && typeof secondTry != 'undefined') {
					volumeSlider.show();
					positionVolumeHandle(volume, true);
					volumeSlider.hide()
					return;
				}
			
				// correct to 0-1
				volume = Math.max(0,volume);
				volume = Math.min(volume,1);					
				
				// ajust mute button style
				if (volume == 0) {
					mute.removeClass('mejs-mute').addClass('mejs-unmute');
				} else {
					mute.removeClass('mejs-unmute').addClass('mejs-mute');
				}				

				// position slider 
				if (mode == 'vertical') {
					var 
					
						// height of the full size volume slider background
						totalHeight = volumeTotal.height(),
						
						// top/left of full size volume slider background
						totalPosition = volumeTotal.position(),
						
						// the new top position based on the current volume
						// 70% volume on 100px height == top:30px
						newTop = totalHeight - (totalHeight * volume);
	
					// handle
					volumeHandle.css('top', totalPosition.top + newTop - (volumeHandle.height() / 2));
	
					// show the current visibility
					volumeCurrent.height(totalHeight - newTop );
                    //volumeCurrent.height(totalHeight);
                    //console.log(totalPosition.top);
					volumeCurrent.css('top', totalPosition.top + newTop);
                    //volumeCurrent.css('top', totalPosition.top);
				} else {
					var 
					
						// height of the full size volume slider background
						totalWidth = volumeTotal.width(),
						
						// top/left of full size volume slider background
						totalPosition = volumeTotal.position(),
						
						// the new left position based on the current volume
						newLeft = totalWidth * volume;
	
					// handle
					volumeHandle.css('left', totalPosition.left + newLeft - (volumeHandle.width() / 2));
	
					// rezize the current part of the volume bar
					volumeCurrent.width( newLeft );
				}
			},
			handleVolumeMove = function(e) {
				
				var volume = null,
					totalOffset = volumeTotal.offset();
				
				// calculate the new volume based on the moust position
				if (mode == 'vertical') {
				
					var
						railHeight = volumeTotal.height(),
						totalTop = parseInt(volumeTotal.css('top').replace(/px/,''),10),
						newY = e.pageY - totalOffset.top;
						
					volume = (railHeight - newY) / railHeight;
						
					// the controls just hide themselves (usually when mouse moves too far up)
					if (totalOffset.top == 0 || totalOffset.left == 0)
						return;
					
				} else {
					var
						railWidth = volumeTotal.width(),
						newX = e.pageX - totalOffset.left;
						
					volume = newX / railWidth;
				}
				
				// ensure the volume isn't outside 0-1
				volume = Math.max(0,volume);
				volume = Math.min(volume,1);
				
				// position the slider and handle			
				positionVolumeHandle(volume);
				
				// set the media object (this will trigger the volumechanged event)
				if (volume == 0) {
					media.setMuted(true);
				} else {
					media.setMuted(false);
				}
				media.setVolume(volume);			
			},
			mouseIsDown = false,
			mouseIsOver = false;

			// SLIDER
			
			mute
				.hover(function() {
					volumeSlider.show();
					mouseIsOver = true;
				}, function() {
					mouseIsOver = false;	
						
					if (!mouseIsDown && mode == 'vertical')	{
						volumeSlider.hide();
					}
				});
			
			volumeSlider
				.bind('mouseover', function() {
					mouseIsOver = true;	
				})
				.bind('mousedown', function (e) {
					handleVolumeMove(e);
					mouseIsDown = true;
						
					return false;
				});
				
			$(document)
				.bind('mouseup', function (e) {
					mouseIsDown = false;
					
					if (!mouseIsOver && mode == 'vertical') {
						volumeSlider.hide();
					}
				})
				.bind('mousemove', function (e) {
					if (mouseIsDown) {
						handleVolumeMove(e);
					}
				});


			// MUTE button
			mute.find('button').click(function() {
				media.setMuted( !media.muted );
			});

			// listen for volume change events from other sources
			media.addEventListener('volumechange', function(e) {
				if (!mouseIsDown) {
					if (media.muted) {
						positionVolumeHandle(0);
						mute.removeClass('mejs-mute').addClass('mejs-unmute');
					} else {
						positionVolumeHandle(media.volume);
						mute.removeClass('mejs-unmute').addClass('mejs-mute');
					}
				}
			}, false);

			if (t.container.is(':visible')) {
				// set initial volume
				positionVolumeHandle(player.options.startVolume);
				
				// shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
				if (media.pluginType === 'native') {
					media.setVolume(player.options.startVolume);
				}
			}
		}
	});
	
})(mejs.$);

(function($) {
	
	$.extend(mejs.MepDefaults, {
		usePluginFullScreen: true,
		newWindowCallback: function() { return '';},
		fullscreenText: 'Fullscreen'
	});
	
	$.extend(MediaElementPlayer.prototype, {
		
		isFullScreen: false,
		
		isNativeFullScreen: false,
		
		docStyleOverflow: null,
		
		isInIframe: false,
		
		buildfullscreen: function(player, controls, layers, media) {

			if (!player.isVideo)
				return;
				
			player.isInIframe = (window.location != window.parent.location);
				
			// native events
			if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
				
				// chrome doesn't alays fire this in an iframe
				player.container.bind(mejs.MediaFeatures.fullScreenEventName, function(e) {
				//player.container.bind('webkitfullscreenchange', function(e) {
				
					
					if (mejs.MediaFeatures.isFullScreen()) {
						player.isNativeFullScreen = true;
						// reset the controls once we are fully in full screen
						player.setControlsSize();
					} else {
						player.isNativeFullScreen = false;
						// when a user presses ESC
						// make sure to put the player back into place								
						player.exitFullScreen();				
					}
				});
			}

			var t = this,		
				normalHeight = 0,
				normalWidth = 0,
				container = player.container,						
				fullscreenBtn = 
					$('<div class="mejs-button mejs-fullscreen-button">' + 
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.fullscreenText + '"></button>' + 
					'</div>')
					.appendTo(controls);
				
				if (t.media.pluginType === 'native' || (!t.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {
					
					fullscreenBtn.click(function() {
						var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;													
						
						if (isFullScreen) {
							player.exitFullScreen();
						} else {						
							player.enterFullScreen();
						}
					});
					
				} else {
                    
                    // @edsilv: remove play overlay for flash version as it obscures full screen button.
                    if (mejs.MediaFeatures.isFirefox){
                        t.container.find('.mejs-overlay-play').remove();
                    }

					var hideTimeout = null,
						supportsPointerEvents = (document.documentElement.style.pointerEvents === '');
					
                    // @edsilv: IE7 and 8 don't support clicking through the fullscreen buttons
                    // down to Flash.
					if (supportsPointerEvents && !mejs.MediaFeatures.isOpera) { // opera doesn't allow this :(
						
						// allows clicking through the fullscreen button and controls down directly to Flash
						
						/*
						 When a user puts his mouse over the fullscreen button, the controls are disabled
						 So we put a div over the video and another one on iether side of the fullscreen button
						 that caputre mouse movement
						 and restore the controls once the mouse moves outside of the fullscreen button
						*/
						
						var fullscreenIsDisabled = false,
							restoreControls = function() {
								if (fullscreenIsDisabled) {
									// hide the hovers
									videoHoverDiv.hide();
									controlsLeftHoverDiv.hide();
									controlsRightHoverDiv.hide();
									
									// restore the control bar
									fullscreenBtn.css('pointer-events', '');
									t.controls.css('pointer-events', '');
									
									// store for later
									fullscreenIsDisabled = false;
								}
							},
							videoHoverDiv = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls),
							controlsLeftHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
							controlsRightHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
							positionHoverDivs = function() {
								var style = {position: 'absolute', top: 0, left: 0}; //, backgroundColor: '#f00'};
								videoHoverDiv.css(style);
								controlsLeftHoverDiv.css(style);
								controlsRightHoverDiv.css(style);
								
								// over video, but not controls
								videoHoverDiv
									.width( t.container.width() )
									.height( t.container.height() - t.controls.height() );
								
								// over controls, but not the fullscreen button
								var fullScreenBtnOffset = fullscreenBtn.offset().left - t.container.offset().left;
									fullScreenBtnWidth = fullscreenBtn.outerWidth(true);
									
								controlsLeftHoverDiv
									.width( fullScreenBtnOffset )
									.height( t.controls.height() )
									.css({top: t.container.height() - t.controls.height()});
									
								// after the fullscreen button
								controlsRightHoverDiv
									.width( t.container.width() - fullScreenBtnOffset - fullScreenBtnWidth )
									.height( t.controls.height() )
									.css({top: t.container.height() - t.controls.height(),
										 left: fullScreenBtnOffset + fullScreenBtnWidth});								
							};
						
						$(document).resize(function() {
							positionHoverDivs();
						});
												
						// on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
						fullscreenBtn
							.mouseover(function() {
								
								if (!t.isFullScreen) {
									
									var buttonPos = fullscreenBtn.offset(),
										containerPos = player.container.offset();
									
									// move the button in Flash into place
									media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);									
									
									// allows click through
									fullscreenBtn.css('pointer-events', 'none');
									t.controls.css('pointer-events', 'none');
									
									// show the divs that will restore things
									videoHoverDiv.show();
									controlsRightHoverDiv.show();
									controlsLeftHoverDiv.show();
									positionHoverDivs();
									
									fullscreenIsDisabled = true;
								}
							
							});
						
						// restore controls anytime the user enters or leaves fullscreen	
						media.addEventListener('fullscreenchange', function(e) {
							restoreControls();
						});
						
						
						// the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
						// so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button 
						/*
						$(document).mousemove(function(e) {
							
							// if the mouse is anywhere but the fullsceen button, then restore it all
							if (fullscreenIsDisabled) {
								
								var fullscreenBtnPos = fullscreenBtn.offset();
								

								if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
									e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
									) {
								
									fullscreenBtn.css('pointer-events', '');
									t.controls.css('pointer-events', '');
									
									fullscreenIsDisabled = false;
								}
							}
						});
						*/
						
						
					} else {
						
						// the hover state will show the fullscreen button in Flash to hover up and click
						
						fullscreenBtn
							.mouseover(function() {
								
								if (hideTimeout !== null) {
									clearTimeout(hideTimeout);
									delete hideTimeout;
								}
								
								var buttonPos = fullscreenBtn.offset(),
									containerPos = player.container.offset();
									
								media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);
							
							})
							.mouseout(function() {
							
								if (hideTimeout !== null) {
									clearTimeout(hideTimeout);
									delete hideTimeout;
								}
								
								hideTimeout = setTimeout(function() {	
									media.hideFullscreenButton();
								}, 1500);
								
								
							});						
					}
				}
			
			player.fullscreenBtn = fullscreenBtn;	

			$(document).bind('keydown',function (e) {
				if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen) && e.keyCode == 27) {
					player.exitFullScreen();
				}
			});
				
		},
		enterFullScreen: function(dispatchEvent) {
			
			var t = this;
			
			// firefox+flash can't adjust plugin sizes without resetting :(
			if (t.media.pluginType !== 'native' && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) {
				//t.media.setFullscreen(true);
				//player.isFullScreen = true;
				return;
			}			
						
			// store overflow 
			docStyleOverflow = document.documentElement.style.overflow;
			// set it to not show scroll bars so 100% will work
			document.documentElement.style.overflow = 'hidden';			
		
			// store sizing
			normalHeight = t.container.height();
			normalWidth = t.container.width();
			
			// attempt to do true fullscreen (Safari 5.1 and Firefox Nightly only for now)
			if (t.media.pluginType === 'native') {
				if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
							
					mejs.MediaFeatures.requestFullScreen(t.container[0]);
					//return;
					
					if (t.isInIframe) {
						// sometimes exiting from fullscreen doesn't work
						// notably in Chrome <iframe>. Fixed in version 17
						setTimeout(function checkFullscreen() {
								
							if (t.isNativeFullScreen) {
								
								// check if the video is suddenly not really fullscreen
								if ($(window).width() !== screen.width) {
									// manually exit
									t.exitFullScreen();
								} else {
									// test again
									setTimeout(checkFullscreen, 500);														
								}
							}
							
							
						}, 500);
					}
					
				} else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
					t.media.webkitEnterFullscreen();
					return;
				}
			}
			
			// check for iframe launch
			if (t.isInIframe) {
				var url = t.options.newWindowCallback(this);
				
				
				if (url !== '') {
					
					// launch immediately
					if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
						t.pause();
						window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
						return;
					} else {
						setTimeout(function() {
							if (!t.isNativeFullScreen) {
								t.pause();
								window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');								
							}
						}, 250);
					}
				}	
				
			}
			
			// full window code

			

			// make full size
			t.container
				.addClass('mejs-container-fullscreen')
				.width('100%')
				.height('100%');
				//.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});				

			// Only needed for safari 5.1 native full screen, can cause display issues elsewhere
			// Actually, it seems to be needed for IE8, too
			//if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
				setTimeout(function() {
					t.container.css({width: '100%', height: '100%'});
					t.setControlsSize();
				}, 500);
			//}
				
			if (t.pluginType === 'native') {
				t.$media
					.width('100%')
					.height('100%');
			} else {
				t.container.find('object, embed, iframe')
					.width('100%')
					.height('100%');
					
				//if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
					t.media.setVideoSize($(window).width(),$(window).height());
				//}
			}
			
			t.layers.children('div')
				.width('100%')
				.height('100%');

			if (t.fullscreenBtn) {
				t.fullscreenBtn
					.removeClass('mejs-fullscreen')
					.addClass('mejs-unfullscreen');
			}

			t.setControlsSize();
			t.isFullScreen = true;

            // added by @edsilv
            if (dispatchEvent == false){
                return;
            }else{
                $(window).trigger('enterfullscreen');
            }
		},
		
        // altered by @edsilv
		exitFullScreen: function(dispatchEvent) {
			
			var t = this;		
		
			// firefox can't adjust plugins
			if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {				
				t.media.setFullscreen(false);
				//player.isFullScreen = false;
				return;
			}		
		
			// come outo of native fullscreen
			if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
				mejs.MediaFeatures.cancelFullScreen();
			}	

			// restore scroll bars to document
            if (typeof(docStyleOverflow) !== 'undefined') document.documentElement.style.overflow = docStyleOverflow;					
			
            if (typeof(normalWidth) !== 'undefined' &&
                typeof(normalHeight) !== 'undefined'){
			    t.container
				    .removeClass('mejs-container-fullscreen')
				    .width(normalWidth)
				    .height(normalHeight);
				    //.css({position: '', left: '', top: '', right: '', bottom: '', overflow: 'inherit', width: normalWidth + 'px', height: normalHeight + 'px', 'z-index': 1});
			
			    if (t.pluginType === 'native') {
				    t.$media
					    .width(normalWidth)
					    .height(normalHeight);
			    } else {
				    t.container.find('object embed')
					    .width(normalWidth)
					    .height(normalHeight);
					
				    t.media.setVideoSize(normalWidth, normalHeight);
			    }				

			    t.layers.children('div')
				    .width(normalWidth)
				    .height(normalHeight);
            }

			t.fullscreenBtn
				.removeClass('mejs-unfullscreen')
				.addClass('mejs-fullscreen');

			t.setControlsSize();
			t.isFullScreen = false;

            // added by @edsilv
            if (dispatchEvent == false){
                return;
            }else{
                $(window).trigger('enterfullscreen');
            }
		}	
	});

})(mejs.$);

(function($) {

	// add extra default options 
	$.extend(mejs.MepDefaults, {
		// this will automatically turn on a <track>
		startLanguage: '',
		
		tracksText: 'Captions/Subtitles'
	});

	$.extend(MediaElementPlayer.prototype, {
	
		hasChapters: false,

		buildtracks: function(player, controls, layers, media) {
			if (!player.isVideo)
				return;

			if (player.tracks.length == 0)
				return;

			var t= this, i, options = '';

			player.chapters = 
					$('<div class="mejs-chapters mejs-layer"></div>')
						.prependTo(layers).hide();
			player.captions = 
					$('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>')
						.prependTo(layers).hide();
			player.captionsText = player.captions.find('.mejs-captions-text');
			player.captionsButton = 
					$('<div class="mejs-button mejs-captions-button">'+
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.tracksText + '"></button>'+
						'<div class="mejs-captions-selector">'+
							'<ul>'+
								'<li>'+
									'<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
									'<label for="' + player.id + '_captions_none">None</label>'+
								'</li>'	+
							'</ul>'+
						'</div>'+
					'</div>')
						.appendTo(controls)
						
						// hover
						.hover(function() {
							$(this).find('.mejs-captions-selector').css('visibility','visible');
						}, function() {
							$(this).find('.mejs-captions-selector').css('visibility','hidden');
						})					
						
						// handle clicks to the language radio buttons
						.delegate('input[type=radio]','click',function() {
							lang = this.value;

							if (lang == 'none') {
								player.selectedTrack = null;
							} else {
								for (i=0; i<player.tracks.length; i++) {
									if (player.tracks[i].srclang == lang) {
										player.selectedTrack = player.tracks[i];
										player.captions.attr('lang', player.selectedTrack.srclang);
										player.displayCaptions();
										break;
									}
								}
							}
						});
						//.bind('mouseenter', function() {
						//	player.captionsButton.find('.mejs-captions-selector').css('visibility','visible')
						//});

			if (!player.options.alwaysShowControls) {
				// move with controls
				player.container
					.bind('mouseenter', function () {
						// push captions above controls
						player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

					})
					.bind('mouseleave', function () {
						if (!media.paused) {
							// move back to normal place
							player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
						}
					});
			} else {
				player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
			}

			player.trackToLoad = -1;
			player.selectedTrack = null;
			player.isLoadingTrack = false;

			

			// add to list
			for (i=0; i<player.tracks.length; i++) {
				if (player.tracks[i].kind == 'subtitles') {
					player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
				}
			}

			player.loadNextTrack();


			media.addEventListener('timeupdate',function(e) {
				player.displayCaptions();
			}, false);

			media.addEventListener('loadedmetadata', function(e) {
				player.displayChapters();
			}, false);

			player.container.hover(
				function () {
					// chapters
					if (player.hasChapters) {
						player.chapters.css('visibility','visible');
						player.chapters.fadeIn(200);
					}
				},
				function () {
					if (player.hasChapters && !media.paused) {
						player.chapters.fadeOut(200, function() {
							$(this).css('visibility','hidden');
							$(this).css('display','block');
						});
					}
				});
				
			// check for autoplay
			if (player.node.getAttribute('autoplay') !== null) {
				player.chapters.css('visibility','hidden');
			}
		},

		loadNextTrack: function() {
			var t = this;

			t.trackToLoad++;
			if (t.trackToLoad < t.tracks.length) {
				t.isLoadingTrack = true;
				t.loadTrack(t.trackToLoad);
			} else {
				// add done?
				t.isLoadingTrack = false;
			}
		},

		loadTrack: function(index){
			var
				t = this,
				track = t.tracks[index],
				after = function() {

					track.isLoaded = true;

					// create button
					//t.addTrackButton(track.srclang);
					t.enableTrackButton(track.srclang, track.label);

					t.loadNextTrack();

				};

			if (track.isTranslation) {

				// translate the first track
				mejs.TrackFormatParser.translateTrackText(t.tracks[0].entries, t.tracks[0].srclang, track.srclang, t.options.googleApiKey, function(newOne) {

					// store the new translation
					track.entries = newOne;

					after();
				});

			} else {
				$.ajax({
					url: track.src,
					success: function(d) {

						// parse the loaded file
						track.entries = mejs.TrackFormatParser.parse(d);
						after();

						if (track.kind == 'chapters' && t.media.duration > 0) {
							t.drawChapters(track);
						}
					},
					error: function() {
						t.loadNextTrack();
					}
				});
			}
		},

		enableTrackButton: function(lang, label) {
			var t = this;
			
			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}			

			t.captionsButton
				.find('input[value=' + lang + ']')
					.prop('disabled',false)
				.siblings('label')
					.html( label );

			// auto select
			if (t.options.startLanguage == lang) {
				$('#' + t.id + '_captions_' + lang).click();
			}

			t.adjustLanguageBox();
		},

		addTrackButton: function(lang, label) {
			var t = this;
			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}

			t.captionsButton.find('ul').append(
				$('<li>'+
					'<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
					'<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>'+
				'</li>')
			);

			t.adjustLanguageBox();

			// remove this from the dropdownlist (if it exists)
			t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
		},

		adjustLanguageBox:function() {
			var t = this;
			// adjust the size of the outer box
			t.captionsButton.find('.mejs-captions-selector').height(
				t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
				t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
			);
		},

		displayCaptions: function() {

			if (typeof this.tracks == 'undefined')
				return;

			var
				t = this,
				i,
				track = t.selectedTrack;

			if (track != null && track.isLoaded) {
				for (i=0; i<track.entries.times.length; i++) {
					if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop){
						t.captionsText.html(track.entries.text[i]);
						t.captions.show();
						return; // exit out if one is visible;
					}
				}
				t.captions.hide();
			} else {
				t.captions.hide();
			}
		},

		displayChapters: function() {
			var 
				t = this,
				i;

			for (i=0; i<t.tracks.length; i++) {
				if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
					t.drawChapters(t.tracks[i]);
					t.hasChapters = true;
					break;
				}
			}
		},

		drawChapters: function(chapters) {
			var 
				t = this,
				i,
				dur,
				//width,
				//left,
				percent = 0,
				usedPercent = 0;

			t.chapters.empty();

			for (i=0; i<chapters.entries.times.length; i++) {
				dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
				percent = Math.floor(dur / t.media.duration * 100);
				if (percent + usedPercent > 100 || // too large
					i == chapters.entries.times.length-1 && percent + usedPercent < 100) // not going to fill it in
					{
					percent = 100 - usedPercent;
				}
				//width = Math.floor(t.width * dur / t.media.duration);
				//left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
				//if (left + width > t.width) {
				//	width = t.width - left;
				//}

				t.chapters.append( $(
					'<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' + 
						'<div class="mejs-chapter-block' + ((i==chapters.entries.times.length-1) ? ' mejs-chapter-block-last' : '') + '">' + 
							'<span class="ch-title">' + chapters.entries.text[i] + '</span>' + 
							'<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop) + '</span>' + 
						'</div>' +
					'</div>'));
				usedPercent += percent;
			}

			t.chapters.find('div.mejs-chapter').click(function() {
				t.media.setCurrentTime( parseFloat( $(this).attr('rel') ) );
				if (t.media.paused) {
					t.media.play(); 
				}
			});

			t.chapters.show();
		}
	});



	mejs.language = {
		codes:  {
			af:'Afrikaans',
			sq:'Albanian',
			ar:'Arabic',
			be:'Belarusian',
			bg:'Bulgarian',
			ca:'Catalan',
			zh:'Chinese',
			'zh-cn':'Chinese Simplified',
			'zh-tw':'Chinese Traditional',
			hr:'Croatian',
			cs:'Czech',
			da:'Danish',
			nl:'Dutch',
			en:'English',
			et:'Estonian',
			tl:'Filipino',
			fi:'Finnish',
			fr:'French',
			gl:'Galician',
			de:'German',
			el:'Greek',
			ht:'Haitian Creole',
			iw:'Hebrew',
			hi:'Hindi',
			hu:'Hungarian',
			is:'Icelandic',
			id:'Indonesian',
			ga:'Irish',
			it:'Italian',
			ja:'Japanese',
			ko:'Korean',
			lv:'Latvian',
			lt:'Lithuanian',
			mk:'Macedonian',
			ms:'Malay',
			mt:'Maltese',
			no:'Norwegian',
			fa:'Persian',
			pl:'Polish',
			pt:'Portuguese',
			//'pt-pt':'Portuguese (Portugal)',
			ro:'Romanian',
			ru:'Russian',
			sr:'Serbian',
			sk:'Slovak',
			sl:'Slovenian',
			es:'Spanish',
			sw:'Swahili',
			sv:'Swedish',
			tl:'Tagalog',
			th:'Thai',
			tr:'Turkish',
			uk:'Ukrainian',
			vi:'Vietnamese',
			cy:'Welsh',
			yi:'Yiddish'
		}
	};

	/*
	Parses WebVVT format which should be formatted as
	================================
	WEBVTT
	
	1
	00:00:01,1 --> 00:00:05,000
	A line of text

	2
	00:01:15,1 --> 00:02:05,000
	A second line of text
	
	===============================

	Adapted from: http://www.delphiki.com/html5/playr
	*/
	mejs.TrackFormatParser = {
		// match start "chapter-" (or anythingelse)
		pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
		pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

		split2: function (text, regex) {
			// normal version for compliant browsers
			// see below for IE fix
			return text.split(regex);
		},
		parse: function(trackText) {
			var 
				i = 0,
				lines = this.split2(trackText, /\r?\n/),
				entries = {text:[], times:[]},
				timecode,
				text;

			for(; i<lines.length; i++) {
				// check for the line number
				if (this.pattern_identifier.exec(lines[i])){
					// skip to the next line where the start --> end time code should be
					i++;
					timecode = this.pattern_timecode.exec(lines[i]);				
					
					if (timecode && i<lines.length){
						i++;
						// grab all the (possibly multi-line) text that follows
						text = lines[i];
						i++;
						while(lines[i] !== '' && i<lines.length){
							text = text + '\n' + lines[i];
							i++;
						}

						// Text is in a different array so I can use .join
						entries.text.push(text);
						entries.times.push(
						{
							start: mejs.Utility.timeCodeToSeconds(timecode[1]),
							stop: mejs.Utility.timeCodeToSeconds(timecode[3]),
							settings: timecode[5]
						});
					}
				}
			}

			return entries;
		}
	};
	
	// test for browsers with bad String.split method.
	if ('x\n\ny'.split(/\n/gi).length != 3) {
		// add super slow IE8 and below version
		mejs.TrackFormatParser.split2 = function(text, regex) {
			var 
				parts = [], 
				chunk = '',
				i;

			for (i=0; i<text.length; i++) {
				chunk += text.substring(i,i+1);
				if (regex.test(chunk)) {
					parts.push(chunk.replace(regex, ''));
					chunk = '';
				}
			}
			parts.push(chunk);
			return parts;
		}
	}	

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function($) {

$.extend(mejs.MepDefaults,
	{ 'contextMenuItems': [
		// demo of a fullscreen option
		{ 
			render: function(player) {
				
				// check for fullscreen plugin
				if (typeof player.enterFullScreen == 'undefined')
					return null;
			
				if (player.isFullScreen) {
					return "Turn off Fullscreen";
				} else {
					return "Go Fullscreen";
				}
			},
			click: function(player) {
				if (player.isFullScreen) {
					player.exitFullScreen();
				} else {
					player.enterFullScreen();
				}
			}
		}
		,
		// demo of a mute/unmute button
		{ 
			render: function(player) {
				if (player.media.muted) {
					return "Unmute";
				} else {
					return "Mute";
				}
			},
			click: function(player) {
				if (player.media.muted) {
					player.setMuted(false);
				} else {
					player.setMuted(true);
				}
			}
		},
		// separator
		{
			isSeparator: true
		}
		,
		// demo of simple download video
		{ 
			render: function(player) {
				return "Download Video";
			},
			click: function(player) {
				window.location.href = player.media.currentSrc;
			}
		}	
	]}
);


	$.extend(MediaElementPlayer.prototype, {
		buildcontextmenu: function(player, controls, layers, media) {
			
			// create context menu
			player.contextMenu = $('<div class="mejs-contextmenu"></div>')
								.appendTo($('body'))
								.hide();
			
			// create events for showing context menu
			player.container.bind('contextmenu', function(e) {
				if (player.isContextMenuEnabled) {
					e.preventDefault();
					player.renderContextMenu(e.clientX-1, e.clientY-1);
					return false;
				}
			});
			player.container.bind('click', function() {
				player.contextMenu.hide();
			});	
			player.contextMenu.bind('mouseleave', function() {

				//console.log('context hover out');
				player.startContextMenuTimer();
				
			});		
		},
		
		isContextMenuEnabled: true,
		enableContextMenu: function() {
			this.isContextMenuEnabled = true;
		},
		disableContextMenu: function() {
			this.isContextMenuEnabled = false;
		},
		
		contextMenuTimeout: null,
		startContextMenuTimer: function() {
			//console.log('startContextMenuTimer');
			
			var t = this;
			
			t.killContextMenuTimer();
			
			t.contextMenuTimer = setTimeout(function() {
				t.hideContextMenu();
				t.killContextMenuTimer();
			}, 750);
		},
		killContextMenuTimer: function() {
			var timer = this.contextMenuTimer;
			
			//console.log('killContextMenuTimer', timer);
			
			if (timer != null) {				
				clearTimeout(timer);
				delete timer;
				timer = null;
			}
		},		
		
		hideContextMenu: function() {
			this.contextMenu.hide();
		},
		
		renderContextMenu: function(x,y) {
			
			// alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
			var t = this,
				html = '',
				items = t.options.contextMenuItems;
			
			for (var i=0, il=items.length; i<il; i++) {
				
				if (items[i].isSeparator) {
					html += '<div class="mejs-contextmenu-separator"></div>';
				} else {
				
					var rendered = items[i].render(t);
				
					// render can return null if the item doesn't need to be used at the moment
					if (rendered != null) {
						html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random()*1000000) + '">' + rendered + '</div>';
					}
				}
			}
			
			// position and show the context menu
			t.contextMenu
				.empty()
				.append($(html))
				.css({top:y, left:x})
				.show();
				
			// bind events
			t.contextMenu.find('.mejs-contextmenu-item').each(function() {
							
				// which one is this?
				var $dom = $(this),
					itemIndex = parseInt( $dom.data('itemindex'), 10 ),
					item = t.options.contextMenuItems[itemIndex];
				
				// bind extra functionality?
				if (typeof item.show != 'undefined')
					item.show( $dom , t);
				
				// bind click action
				$dom.click(function() {			
					// perform click action
					if (typeof item.click != 'undefined')
						item.click(t);
					
					// close
					t.contextMenu.hide();				
				});				
			});	
			
			// stop the controls from hiding
			setTimeout(function() {
				t.killControlsTimer('rev3');	
			}, 100);
						
		}
	});
	
})(mejs.$);


define("mediaelement", ["jquery"], function(){});

define('utils',["require", "exports"], function(require, exports) {
    String.prototype.format = function () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }

        return s;
    };

    String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
    };
    String.prototype.trim = function () {
        return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
    String.prototype.ltrim = function () {
        return this.replace(/^\s+/, '');
    };
    String.prototype.rtrim = function () {
        return this.replace(/\s+$/, '');
    };
    String.prototype.fulltrim = function () {
        return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
    };
    String.prototype.toFileName = function () {
        return this.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    };
    String.prototype.contains = function (str) {
        return this.indexOf(str) !== -1;
    };

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            var i = (fromIndex || 0);
            var j = this.length;

            for (i; i < j; i++) {
                if (this[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        };
    }

    if (!Array.prototype.clone) {
        Array.prototype.clone = function () {
            return this.slice(0);
        };
    }

    if (!Array.prototype.last) {
        Array.prototype.last = function () {
            return this[this.length - 1];
        };
    }
    ;

    if (!Array.prototype.contains) {
        Array.prototype.contains = function (val) {
            return this.indexOf(val) !== -1;
        };
    }

    window.BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) != -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1)
                return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
            { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
            { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
            { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
            { string: navigator.userAgent, subString: "Safari", identity: "Safari" },
            { string: navigator.userAgent, subString: "Opera", identity: "Opera" }
        ]
    };

    window.BrowserDetect.init();

    var Size = (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    })();
    exports.Size = Size;

    var Utils = (function () {
        function Utils() {
        }
        Utils.ellipsis = function (text, chars) {
            if (text.length <= chars)
                return text;
            var trimmedText = text.substr(0, chars);
            trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")));
            return trimmedText + "&hellip;";
        };

        Utils.numericalInput = function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
                return true;
            } else {
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                    return false;
                }
                return true;
            }
        };

        Utils.getTimeStamp = function () {
            return new Date().getTime();
        };

        Utils.getHashParameter = function (key, doc) {
            if (!doc)
                doc = window.document;
            var regex = new RegExp("#.*[?&]" + key + "=([^&]+)(&|$)");
            var match = regex.exec(doc.location.hash);
            return (match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null);
        };

        Utils.setHashParameter = function (key, value, doc) {
            if (!doc)
                doc = window.document;

            var kvp = this.updateURIKeyValuePair(doc.location.hash.replace('#?', ''), key, value);

            var newHash = "#?" + kvp;

            var url = doc.URL;

            var index = url.indexOf('#');

            if (index != -1) {
                url = url.substr(0, url.indexOf('#'));
            }

            doc.location.replace(url + newHash);
        };

        Utils.getQuerystringParameter = function (key, doc) {
            if (!doc)
                doc = window.document;
            key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
            var match = regex.exec(window.location.search);
            return (match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null);
        };

        Utils.setQuerystringParameter = function (key, value, doc) {
            if (!doc)
                doc = window.document;

            var kvp = this.updateURIKeyValuePair(doc.location.hash.replace('#?', ''), key, value);

            window.location.search = kvp;
        };

        Utils.updateURIKeyValuePair = function (uriSegment, key, value) {
            key = encodeURIComponent(key);
            value = encodeURIComponent(value);

            var kvp = uriSegment.split('&');

            if (kvp[0] == "")
                kvp.shift();

            var i = kvp.length;
            var x;

            while (i--) {
                x = kvp[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join('=');
                    break;
                }
            }

            if (i < 0) {
                kvp[kvp.length] = [key, value].join('=');
            }

            return kvp.join('&');
        };

        Utils.getScaleFraction = function (minSize, currentSize, scaleFactor, maxScale) {
            var maxSize = minSize * Math.pow(scaleFactor, maxScale);

            var n = currentSize / maxSize;

            var l = (Math.log(n) / Math.log(scaleFactor));

            var f = (maxScale - Math.abs(l)) / maxScale;

            return f;
        };

        Utils.getScaleFromFraction = function (fraction, minSize, scaleFactor, maxScale) {
            var p = maxScale * fraction;
            return minSize * Math.pow(scaleFactor, p);
        };

        Utils.clamp = function (value, min, max) {
            return Math.min(Math.max(value, min), max);
        };

        Utils.roundNumber = function (num, dec) {
            return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
        };

        Utils.normalise = function (num, min, max) {
            return (num - min) / (max - min);
        };

        Utils.fitRect = function (width1, height1, width2, height2) {
            var ratio1 = height1 / width1;
            var ratio2 = height2 / width2;

            var width, height, scale;

            if (ratio1 < ratio2) {
                scale = width2 / width1;
                width = width1 * scale;
                height = height1 * scale;
            }
            if (ratio2 < ratio1) {
                scale = height2 / height1;
                width = width1 * scale;
                height = height1 * scale;
            }

            return new Size(Math.floor(width), Math.floor(height));
        };

        Utils.getBool = function (val, defaultVal) {
            if (typeof (val) === 'undefined') {
                return defaultVal;
            }

            return val;
        };

        Utils.getUrlParts = function (url) {
            var a = document.createElement('a');
            a.href = url;
            return a;
        };

        Utils.convertToRelativeUrl = function (url) {
            var parts = this.getUrlParts(url);
            var relUri = parts.pathname + parts.search;

            if (!relUri.startsWith("/")) {
                relUri = "/" + relUri;
            }

            return relUri;
        };

        Utils.debounce = function (fn, debounceDuration) {
            debounceDuration = debounceDuration || 100;

            return function () {
                if (!fn.debouncing) {
                    var args = Array.prototype.slice.apply(arguments);
                    fn.lastReturnVal = fn.apply(window, args);
                    fn.debouncing = true;
                }
                clearTimeout(fn.debounceTimeout);
                fn.debounceTimeout = setTimeout(function () {
                    fn.debouncing = false;
                }, debounceDuration);

                return fn.lastReturnVal;
            };
        };

        Utils.createElement = function (tagName, id, className) {
            var $elem = $(document.createElement(tagName));

            if (id)
                $elem.attr('id', id);
            if (className)
                $elem.attr('class', className);

            return $elem;
        };

        Utils.createDiv = function (className) {
            return Utils.createElement('div', null, className);
        };

        Utils.loadCss = function (uri) {
            $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', uri));
        };
        return Utils;
    })();
    exports.Utils = Utils;
});

define('bootstrapper',["require", "exports", "utils"], function(require, exports, __utils__) {
    var utils = __utils__;

    var BootStrapper = (function () {
        function BootStrapper(extensions) {
            this.extensions = extensions;

            var that = this;

            that.dataBaseUri = utils.Utils.getQuerystringParameter('dbu');
            that.packageUri = utils.Utils.getQuerystringParameter('du');

            if (that.dataBaseUri) {
                that.packageUri = that.dataBaseUri + that.packageUri;
            }

            jQuery.support.cors = true;

            $.getJSON(that.packageUri, function (pkg) {
                that.pkg = pkg;

                var isHomeDomain = utils.Utils.getQuerystringParameter('hd') == "true";
                var isReload = utils.Utils.getQuerystringParameter('rl') == "true";

                if (isHomeDomain && !isReload) {
                    that.assetSequenceIndex = parseInt(utils.Utils.getHashParameter('asi', parent.document));
                }

                if (!that.assetSequenceIndex) {
                    that.assetSequenceIndex = parseInt(utils.Utils.getQuerystringParameter('asi')) || 0;
                }

                if (!that.pkg.assetSequences[that.assetSequenceIndex].$ref) {
                    that.assetSequence = that.pkg.assetSequences[that.assetSequenceIndex];
                    that.loadDependencies();
                } else {
                    var basePackageUri = that.packageUri.substr(0, that.packageUri.lastIndexOf('/') + 1);
                    var assetSequenceUri = basePackageUri + pkg.assetSequences[that.assetSequenceIndex].$ref;

                    $.getJSON(assetSequenceUri, function (assetSequenceData) {
                        that.assetSequence = that.pkg.assetSequences[that.assetSequenceIndex] = assetSequenceData;
                        that.loadDependencies();
                    });
                }
            });
        }
        BootStrapper.prototype.loadDependencies = function () {
            var that = this;

            var extension = that.extensions[that.assetSequence.assetType];

            yepnope.injectCss(extension.css, function () {
                $.getJSON(extension.config, function (config) {
                    var configExtension = utils.Utils.getQuerystringParameter('c');

                    if (configExtension) {
                        $.getJSON(configExtension, function (ext) {
                            $.extend(true, config, ext);

                            that.createExtension(extension, config);
                        });
                    } else {
                        that.createExtension(extension, config);
                    }
                });
            });
        };

        BootStrapper.prototype.createExtension = function (extension, config) {
            var provider = new extension.provider(config, this.pkg);

            new extension.type(provider);
        };
        return BootStrapper;
    })();

    
    return BootStrapper;
});

define('modules/coreplayer-shared-module/baseProvider',["require", "exports", "../../utils"], function(require, exports, __utils__) {
    var utils = __utils__;
    

    (function (params) {
        params[params["assetSequenceIndex"] = 0] = "assetSequenceIndex";
        params[params["assetIndex"] = 1] = "assetIndex";
        params[params["zoom"] = 2] = "zoom";
    })(exports.params || (exports.params = {}));
    var params = exports.params;

    var BaseProvider = (function () {
        function BaseProvider(config, pkg) {
            this.options = {};
            this.config = config;
            this.pkg = pkg;

            this.options.dataBaseUri = utils.Utils.getQuerystringParameter('dbu');

            this.dataUri = utils.Utils.getQuerystringParameter('du');
            this.isHomeDomain = utils.Utils.getQuerystringParameter('hd') === "true";
            this.isOnlyInstance = utils.Utils.getQuerystringParameter('oi') === "true";
            this.embedScriptUri = utils.Utils.getQuerystringParameter('esu');
            this.isReload = utils.Utils.getQuerystringParameter('rl') === "true";
            this.domain = utils.Utils.getQuerystringParameter('d');

            if (this.isHomeDomain && !this.isReload) {
                this.assetSequenceIndex = parseInt(utils.Utils.getHashParameter(BaseProvider.paramMap[params.assetSequenceIndex], parent.document));
            }

            if (!this.assetSequenceIndex) {
                this.assetSequenceIndex = parseInt(utils.Utils.getQuerystringParameter(BaseProvider.paramMap[params.assetSequenceIndex])) || 0;
            }

            this.load();
        }
        BaseProvider.prototype.load = function () {
            this.assetSequence = this.pkg.assetSequences[this.assetSequenceIndex];

            for (var i = 0; i < this.pkg.assetSequences.length; i++) {
                if (this.pkg.assetSequences[i].$ref) {
                    this.pkg.assetSequences[i] = {};
                }
            }

            this.type = this.getRootSection().sectionType.toLowerCase();

            if (this.pkg.rootStructure) {
                this.parseStructures(this.pkg.rootStructure, this.pkg.assetSequences, '');
            }

            this.parseSections(this.getRootSection(), this.assetSequence.assets, '');
        };

        BaseProvider.prototype.reload = function (callback) {
            var _this = this;
            var packageUri = this.dataUri;

            if (this.options.dataBaseUri) {
                packageUri = this.options.dataBaseUri + this.dataUri;
            }

            packageUri += "?t=" + utils.Utils.getTimeStamp();

            window.pkgCallback = function (data) {
                _this.pkg = data;

                _this.load();

                callback();
            };

            $.ajax({
                url: packageUri,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'pkgCallback'
            });
        };

        BaseProvider.prototype.parseSections = function (section, assets, path) {
            section.path = path;

            section.sectionType = this.replaceSectionType(section.sectionType);

            for (var i = 0; i < section.assets.length; i++) {
                var index = section.assets[i];

                var asset = assets[index];

                if (!asset.sections)
                    asset.sections = [];

                asset.sections.push(section);
            }

            if (section.sections) {
                for (var j = 0; j < section.sections.length; j++) {
                    this.parseSections(section.sections[j], assets, path + '/' + j);
                }
            }
        };

        BaseProvider.prototype.parseStructures = function (structure, assetSequences, path) {
            structure.path = path;

            if (typeof (structure.assetSequence) != 'undefined') {
                var assetSequence = assetSequences[structure.assetSequence];

                assetSequence.index = structure.assetSequence;
                assetSequence.structure = structure;

                structure.assetSequence = assetSequence;
            }

            if (structure.structures) {
                for (var j = 0; j < structure.structures.length; j++) {
                    this.parseStructures(structure.structures[j], assetSequences, path + '/' + j);
                }
            }
        };

        BaseProvider.prototype.replaceSectionType = function (sectionType) {
            if (this.config.options.sectionMappings && this.config.options.sectionMappings[sectionType]) {
                return this.config.options.sectionMappings[sectionType];
            }

            return sectionType;
        };

        BaseProvider.prototype.getRootSection = function () {
            return this.assetSequence.rootSection;
        };

        BaseProvider.prototype.getTitle = function () {
            return this.getRootSection().title;
        };
        BaseProvider.paramMap = ['asi', 'ai', 'z'];
        return BaseProvider;
    })();
    exports.BaseProvider = BaseProvider;
});

define('modules/coreplayer-shared-module/panel',["require", "exports"], function(require, exports) {
    var Panel = (function () {
        function Panel($element, fitToParentWidth, fitToParentHeight) {
            this.$element = $element;
            this.fitToParentWidth = fitToParentWidth || false;
            this.fitToParentHeight = fitToParentHeight || false;

            this.create();
        }
        Panel.prototype.create = function () {
            var _this = this;
            $.subscribe('onResize', function () {
                _this.resize();
            });
        };

        Panel.prototype.resize = function () {
            var $parent = this.$element.parent();

            if (this.fitToParentWidth) {
                this.$element.actualWidth($parent.width());
            }

            if (this.fitToParentHeight) {
                this.$element.actualHeight($parent.height());
            }
        };
        return Panel;
    })();
    exports.Panel = Panel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/baseView',["require", "exports", "./panel"], function(require, exports, __panel__) {
    var panel = __panel__;
    
    

    var BaseView = (function (_super) {
        __extends(BaseView, _super);
        function BaseView($element, fitToParentWidth, fitToParentHeight) {
            _super.call(this, $element, fitToParentWidth, fitToParentHeight);
        }
        BaseView.prototype.create = function () {
            _super.prototype.create.call(this);

            this.extension = window.extension;
            this.provider = this.extension.provider;

            if (this.moduleName) {
                this.config = this.provider.config.modules[this.moduleName];
                this.content = this.config.content || {};
                this.options = this.config.options || {};
            }
        };

        BaseView.prototype.init = function () {
        };

        BaseView.prototype.setConfig = function (moduleName) {
            if (!this.moduleName) {
                this.moduleName = moduleName;
            }
        };

        BaseView.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        return BaseView;
    })(panel.Panel);
    exports.BaseView = BaseView;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/dialogue',["require", "exports", "./baseExtension", "./shell", "../../utils", "./baseView"], function(require, exports, __baseExtension__, __shell__, __utils__, __baseView__) {
    var baseExtension = __baseExtension__;
    var shell = __shell__;
    var utils = __utils__;
    var baseView = __baseView__;

    var Dialogue = (function (_super) {
        __extends(Dialogue, _super);
        function Dialogue($element) {
            _super.call(this, $element, false, false);
            this.isActive = false;
            this.allowClose = true;
        }
        Dialogue.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);

            $.subscribe(baseExtension.BaseExtension.CLOSE_ACTIVE_DIALOGUE, function () {
                if (_this.isActive) {
                    if (_this.allowClose) {
                        _this.close();
                    }
                }
            });

            $.subscribe(baseExtension.BaseExtension.ESCAPE, function () {
                if (_this.isActive) {
                    if (_this.allowClose) {
                        _this.close();
                    }
                }
            });

            $.subscribe(baseExtension.BaseExtension.RETURN, function (e) {
                _this.returnFunc();
            });

            this.$top = utils.Utils.createDiv('top');
            this.$element.append(this.$top);

            this.$closeButton = utils.Utils.createDiv('close');
            this.$top.append(this.$closeButton);

            this.$middle = utils.Utils.createDiv('middle');
            this.$element.append(this.$middle);

            this.$content = utils.Utils.createDiv('content');
            this.$middle.append(this.$content);

            this.$bottom = utils.Utils.createDiv('bottom');
            this.$element.append(this.$bottom);

            this.$closeButton.on('click', function (e) {
                e.preventDefault();

                _this.close();
            });

            this.returnFunc = this.close;
        };

        Dialogue.prototype.enableClose = function () {
            this.allowClose = true;
            this.$closeButton.show();
        };

        Dialogue.prototype.disableClose = function () {
            this.allowClose = false;
            this.$closeButton.hide();
        };

        Dialogue.prototype.setArrowPosition = function () {
            var paddingLeft = parseInt(this.$element.css("padding-left"));
            var pos = this.extension.mouseX - paddingLeft - 10;
            if (pos < 0)
                pos = 0;
            this.$bottom.css('backgroundPosition', pos + 'px 0px');
        };

        Dialogue.prototype.open = function () {
            this.$element.show();
            this.setArrowPosition();
            this.isActive = true;

            $.publish(shell.Shell.SHOW_OVERLAY);

            this.resize();
        };

        Dialogue.prototype.close = function () {
            if (this.isActive) {
                this.$element.hide();
                this.isActive = false;

                $.publish(shell.Shell.HIDE_OVERLAY);
            }
        };

        Dialogue.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$element.css({
                'top': (this.extension.height() / 2) - (this.$element.height() / 2),
                'left': (this.extension.width() / 2) - (this.$element.width() / 2)
            });
        };
        return Dialogue;
    })(baseView.BaseView);
    exports.Dialogue = Dialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/genericDialogue',["require", "exports", "./baseExtension", "./dialogue"], function(require, exports, __baseExtension__, __dialogue__) {
    var baseExtension = __baseExtension__;
    
    
    var dialogue = __dialogue__;

    var GenericDialogue = (function (_super) {
        __extends(GenericDialogue, _super);
        function GenericDialogue($element) {
            _super.call(this, $element);
        }
        GenericDialogue.prototype.create = function () {
            var _this = this;
            this.setConfig('genericDialogue');

            _super.prototype.create.call(this);

            $.subscribe(GenericDialogue.SHOW_GENERIC_DIALOGUE, function (e, params) {
                _this.showMessage(params);
            });

            $.subscribe(GenericDialogue.HIDE_GENERIC_DIALOGUE, function (e) {
                _this.close();
            });

            this.$message = $('<p></p>');
            this.$content.append(this.$message);

            this.$acceptButton = $('<a href="#" class="button accept"></a>');
            this.$content.append(this.$acceptButton);
            this.$acceptButton.text(this.content.ok);

            this.$acceptButton.on('click', function (e) {
                e.preventDefault();

                _this.accept();
            });

            this.returnFunc = function () {
                if (_this.isActive) {
                    _this.accept();
                }
            };

            this.$element.hide();
        };

        GenericDialogue.prototype.accept = function () {
            $.publish(baseExtension.BaseExtension.CLOSE_ACTIVE_DIALOGUE);

            if (this.acceptCallback)
                this.acceptCallback();
        };

        GenericDialogue.prototype.showMessage = function (params) {
            this.$message.html(params.message);

            if (params.buttonText) {
                this.$acceptButton.text(params.buttonText);
            } else {
                this.$acceptButton.text(this.content.ok);
            }

            this.acceptCallback = params.acceptCallback;

            if (params.allowClose === false) {
                this.disableClose();
            }

            this.open();
        };

        GenericDialogue.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        GenericDialogue.SHOW_GENERIC_DIALOGUE = 'onShowGenericDialogue';
        GenericDialogue.HIDE_GENERIC_DIALOGUE = 'onHideGenericDialogue';
        return GenericDialogue;
    })(dialogue.Dialogue);
    exports.GenericDialogue = GenericDialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/shell',["require", "exports", "./baseExtension", "../../utils", "./baseView", "./genericDialogue"], function(require, exports, __baseExtension__, __utils__, __baseView__, __genericDialogue__) {
    var baseExtension = __baseExtension__;
    var utils = __utils__;
    var baseView = __baseView__;
    var genericDialogue = __genericDialogue__;

    var Shell = (function (_super) {
        __extends(Shell, _super);
        function Shell($element) {
            Shell.$element = $element;
            _super.call(this, Shell.$element, true, true);
        }
        Shell.prototype.create = function () {
            _super.prototype.create.call(this);

            $.subscribe(Shell.SHOW_OVERLAY, function () {
                Shell.$overlays.show();
            });

            $.subscribe(Shell.HIDE_OVERLAY, function () {
                Shell.$overlays.hide();
            });

            Shell.$headerPanel = utils.Utils.createDiv('headerPanel');
            this.$element.append(Shell.$headerPanel);

            Shell.$mainPanel = utils.Utils.createDiv('mainPanel');
            this.$element.append(Shell.$mainPanel);

            Shell.$centerPanel = utils.Utils.createDiv('centerPanel');
            Shell.$mainPanel.append(Shell.$centerPanel);

            Shell.$leftPanel = utils.Utils.createDiv('leftPanel');
            Shell.$mainPanel.append(Shell.$leftPanel);

            Shell.$rightPanel = utils.Utils.createDiv('rightPanel');
            Shell.$mainPanel.append(Shell.$rightPanel);

            Shell.$footerPanel = utils.Utils.createDiv('footerPanel');
            Shell.$element.append(Shell.$footerPanel);

            Shell.$overlays = utils.Utils.createDiv('overlays');
            this.$element.append(Shell.$overlays);

            Shell.$genericDialogue = utils.Utils.createDiv('overlay genericDialogue');
            Shell.$overlays.append(Shell.$genericDialogue);

            Shell.$overlays.on('click', function (e) {
                if ($(e.target).hasClass('overlays')) {
                    e.preventDefault();
                    $.publish(baseExtension.BaseExtension.CLOSE_ACTIVE_DIALOGUE);
                }
            });

            new genericDialogue.GenericDialogue(Shell.$genericDialogue);
        };

        Shell.prototype.resize = function () {
            _super.prototype.resize.call(this);

            Shell.$overlays.width(this.extension.width());
            Shell.$overlays.height(this.extension.height());

            var mainHeight = this.$element.height() - Shell.$headerPanel.height() - Shell.$footerPanel.height();
            Shell.$mainPanel.actualHeight(mainHeight);
        };
        Shell.SHOW_OVERLAY = 'onShowOverlay';
        Shell.HIDE_OVERLAY = 'onHideOverlay';
        return Shell;
    })(baseView.BaseView);
    exports.Shell = Shell;
});

define('modules/coreplayer-shared-module/baseExtension',["require", "exports", "../../utils", "./baseProvider", "./shell", "./genericDialogue"], function(require, exports, __utils__, __baseProvider__, __shell__, __genericDialogue__) {
    var utils = __utils__;
    var baseProvider = __baseProvider__;
    var shell = __shell__;
    var genericDialogue = __genericDialogue__;
    
    

    var BaseExtension = (function () {
        function BaseExtension(provider) {
            this.isFullScreen = false;
            window.extension = this;

            this.provider = provider;

            this.create();
        }
        BaseExtension.prototype.create = function () {
            var _this = this;
            this.$element = $('#app');

            var $win = $(window);
            this.$element.width($win.width());
            this.$element.height($win.height());

            this.socket = new easyXDM.Socket({
                onMessage: function (message, origin) {
                    message = $.parseJSON(message);
                    _this.handleParentFrameEvent(message);
                }
            });

            this.$element.removeClass();
            if (!this.provider.isHomeDomain)
                this.$element.addClass('embedded');

            window.onresize = function () {
                var $win = $(window);
                $('body').height($win.height());

                $.publish(BaseExtension.RESIZE);
            };

            $(document).on('mousemove', function (e) {
                _this.mouseX = e.pageX;
                _this.mouseY = e.pageY;
            });

            $.subscribe(BaseExtension.TOGGLE_FULLSCREEN, function () {
                if (!_this.isOverlayActive()) {
                    _this.isFullScreen = !_this.isFullScreen;
                    _this.triggerSocket(BaseExtension.TOGGLE_FULLSCREEN, _this.isFullScreen);
                }
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27)
                    $.publish(BaseExtension.ESCAPE);
                if (e.keyCode === 13)
                    $.publish(BaseExtension.RETURN);
            });

            $.subscribe(BaseExtension.ESCAPE, function () {
                if (_this.isFullScreen) {
                    $.publish(BaseExtension.TOGGLE_FULLSCREEN);
                }
            });

            this.shell = new shell.Shell(this.$element);

            this.currentAssetIndex = -1;
        };

        BaseExtension.prototype.width = function () {
            return $(window).width();
        };

        BaseExtension.prototype.height = function () {
            return $(window).height();
        };

        BaseExtension.prototype.triggerSocket = function (eventName, eventObject) {
            if (this.socket) {
                this.socket.postMessage(JSON.stringify({ eventName: eventName, eventObject: eventObject }));
            }
        };

        BaseExtension.prototype.redirect = function (uri) {
            this.triggerSocket(BaseExtension.REDIRECT, uri);
        };

        BaseExtension.prototype.refresh = function () {
            this.triggerSocket(BaseExtension.REFRESH, null);
        };

        BaseExtension.prototype.handleParentFrameEvent = function (message) {
            switch (message.eventName) {
                case BaseExtension.TOGGLE_FULLSCREEN:
                    $.publish(BaseExtension.TOGGLE_FULLSCREEN, message.eventObject);
                    break;
            }
        };

        BaseExtension.prototype.getParam = function (key) {
            var value;

            if (this.isDeepLinkingEnabled()) {
                value = utils.Utils.getHashParameter(baseProvider.BaseProvider.paramMap[key], parent.document);
            }

            if (!value) {
                value = utils.Utils.getQuerystringParameter(baseProvider.BaseProvider.paramMap[key]);
            }

            return value;
        };

        BaseExtension.prototype.setParam = function (key, value) {
            if (this.isDeepLinkingEnabled()) {
                utils.Utils.setHashParameter(baseProvider.BaseProvider.paramMap[key], value, parent.document);
            }
        };

        BaseExtension.prototype.viewAsset = function (assetIndex, callback) {
            this.currentAssetIndex = assetIndex;

            $.publish(BaseExtension.ASSET_INDEX_CHANGED, [assetIndex]);

            if (callback)
                callback(assetIndex);
        };

        BaseExtension.prototype.viewAssetSequence = function (index) {
            if (this.isFullScreen) {
                $.publish(BaseExtension.TOGGLE_FULLSCREEN);
            }

            this.triggerSocket(BaseExtension.ASSETSEQUENCE_INDEX_CHANGED, index);
        };

        BaseExtension.prototype.isDeepLinkingEnabled = function () {
            return (this.provider.isHomeDomain && this.provider.isOnlyInstance);
        };

        BaseExtension.prototype.getSectionByAssetIndex = function (index) {
            var asset = this.getAssetByIndex(index);

            return this.getAssetSection(asset);
        };

        BaseExtension.prototype.getSectionIndex = function (path) {
            for (var i = 0; i < this.provider.assetSequence.assets.length; i++) {
                var asset = this.provider.assetSequence.assets[i];
                for (var j = 0; j < asset.sections.length; j++) {
                    var section = asset.sections[j];

                    if (section.path == path) {
                        return i;
                    }
                }
            }

            return null;
        };

        BaseExtension.prototype.getAssetSection = function (asset) {
            return asset.sections.last();
        };

        BaseExtension.prototype.getAssetByIndex = function (index) {
            return this.provider.assetSequence.assets[index];
        };

        BaseExtension.prototype.getLastAssetOrderLabel = function () {
            for (var i = this.provider.assetSequence.assets.length - 1; i >= 0; i--) {
                var asset = this.provider.assetSequence.assets[i];

                var regExp = /\d/;

                if (regExp.test(asset.orderLabel)) {
                    return asset.orderLabel;
                }
            }

            return '-';
        };

        BaseExtension.prototype.getAssetIndexByOrderLabel = function (label) {
            var regExp = /(\d*)\D*(\d*)|(\d*)/;
            var match = regExp.exec(label);

            var labelPart1 = match[1];
            var labelPart2 = match[2];

            if (!labelPart1)
                return -1;

            var searchRegExp;

            if (labelPart2) {
                searchRegExp = new RegExp(labelPart1 + '\\D*' + labelPart2);
            } else {
                searchRegExp = new RegExp('^' + labelPart1 + '$');
            }

            for (var i = 0; i < this.provider.assetSequence.assets.length; i++) {
                var asset = this.provider.assetSequence.assets[i];

                if (searchRegExp.test(asset.orderLabel)) {
                    return i;
                }
            }

            return -1;
        };

        BaseExtension.prototype.getCurrentAsset = function () {
            return this.provider.assetSequence.assets[this.currentAssetIndex];
        };

        BaseExtension.prototype.showDialogue = function (message, acceptCallback, buttonText, allowClose) {
            $.publish(genericDialogue.GenericDialogue.SHOW_GENERIC_DIALOGUE, [
                {
                    message: message,
                    acceptCallback: acceptCallback,
                    buttonText: buttonText,
                    allowClose: allowClose
                }
            ]);
        };

        BaseExtension.prototype.closeActiveDialogue = function () {
            $.publish(BaseExtension.CLOSE_ACTIVE_DIALOGUE);
        };

        BaseExtension.prototype.isMultiAsset = function () {
            return this.provider.assetSequence.assets.length > 1;
        };

        BaseExtension.prototype.isOverlayActive = function () {
            return shell.Shell.$overlays.is(':visible');
        };
        BaseExtension.RESIZE = 'onResize';
        BaseExtension.TOGGLE_FULLSCREEN = 'onToggleFullScreen';
        BaseExtension.ASSET_INDEX_CHANGED = 'onAssetIndexChanged';
        BaseExtension.CLOSE_ACTIVE_DIALOGUE = 'onCloseActiveDialogue';
        BaseExtension.ASSETSEQUENCE_INDEX_CHANGED = 'onAssetSequenceIndexChanged';
        BaseExtension.REDIRECT = 'onRedirect';
        BaseExtension.REFRESH = 'onRefresh';
        BaseExtension.RELOAD = 'onReload';
        BaseExtension.ESCAPE = 'onEscape';
        BaseExtension.RETURN = 'onReturn';
        BaseExtension.WINDOW_UNLOAD = 'onWindowUnload';
        BaseExtension.CREATED = 'onCreated';
        return BaseExtension;
    })();
    exports.BaseExtension = BaseExtension;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-dialogues-module/helpDialogue',["require", "exports", "../coreplayer-shared-module/dialogue"], function(require, exports, __dialogue__) {
    
    
    
    
    var dialogue = __dialogue__;

    var HelpDialogue = (function (_super) {
        __extends(HelpDialogue, _super);
        function HelpDialogue($element) {
            _super.call(this, $element);
        }
        HelpDialogue.prototype.create = function () {
            var _this = this;
            this.setConfig('helpDialogue');

            _super.prototype.create.call(this);

            $.subscribe(HelpDialogue.SHOW_HELP_DIALOGUE, function (e, params) {
                _this.open();
            });

            $.subscribe(HelpDialogue.HIDE_HELP_DIALOGUE, function (e) {
                _this.close();
            });

            this.$title = $('<h1></h1>');
            this.$content.append(this.$title);

            this.$scroll = $('<div class="scroll"></div>');
            this.$content.append(this.$scroll);

            this.$message = $('<p></p>');
            this.$scroll.append(this.$message);

            this.$title.text(this.content.title);
            this.$message.html(this.content.text);

            this.$message.find('a').prop('target', '_blank');

            this.$element.hide();
        };

        HelpDialogue.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        HelpDialogue.SHOW_HELP_DIALOGUE = 'onShowHelpDialogue';
        HelpDialogue.HIDE_HELP_DIALOGUE = 'onHideHelpDialogue';
        return HelpDialogue;
    })(dialogue.Dialogue);
    exports.HelpDialogue = HelpDialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/headerPanel',["require", "exports", "./baseView", "../../utils", "../coreplayer-dialogues-module/helpDialogue"], function(require, exports, __baseView__, __utils__, __help__) {
    
    var baseView = __baseView__;
    var utils = __utils__;
    var help = __help__;

    var HeaderPanel = (function (_super) {
        __extends(HeaderPanel, _super);
        function HeaderPanel($element) {
            _super.call(this, $element, false, false);
        }
        HeaderPanel.prototype.create = function () {
            this.setConfig('headerPanel');

            _super.prototype.create.call(this);

            this.$centerOptions = utils.Utils.createDiv('centerOptions');
            this.$element.append(this.$centerOptions);

            this.$rightOptions = utils.Utils.createDiv('rightOptions');
            this.$element.append(this.$rightOptions);

            this.$helpButton = $('<a href="#" class="action help">' + this.content.help + '</a>');
            this.$rightOptions.append(this.$helpButton);

            this.$helpButton.click(function (e) {
                e.preventDefault();

                $.publish(help.HelpDialogue.SHOW_HELP_DIALOGUE);
            });
        };

        HeaderPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            var headerWidth = this.$element.width();
            var center = headerWidth / 2;
            var containerWidth = this.$centerOptions.outerWidth();
            var pos = center - (containerWidth / 2);

            this.$centerOptions.css({
                left: pos
            });
        };
        return HeaderPanel;
    })(baseView.BaseView);
    exports.HeaderPanel = HeaderPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-pagingheaderpanel-module/pagingHeaderPanel',["require", "exports", "../coreplayer-shared-module/baseExtension", "../../extensions/coreplayer-seadragon-extension/extension", "../coreplayer-shared-module/headerPanel"], function(require, exports, __baseExtension__, __extension__, __baseHeader__) {
    var baseExtension = __baseExtension__;
    var extension = __extension__;
    var baseHeader = __baseHeader__;
    
    
    

    var PagingHeaderPanel = (function (_super) {
        __extends(PagingHeaderPanel, _super);
        function PagingHeaderPanel($element) {
            _super.call(this, $element);
        }
        PagingHeaderPanel.prototype.create = function () {
            var _this = this;
            this.setConfig('pagingHeaderPanel');

            _super.prototype.create.call(this);

            $.subscribe(baseExtension.BaseExtension.ASSET_INDEX_CHANGED, function (e, assetIndex) {
                _this.assetIndexChanged(assetIndex);
            });

            $.subscribe(extension.Extension.MODE_CHANGED, function (e, mode) {
                _this.modeChanged(mode);
            });

            this.$prevOptions = $('<div class="prevOptions"></div>');
            this.$centerOptions.append(this.$prevOptions);

            this.$firstButton = $('<a class="imageButton first"></a>');
            this.$prevOptions.append(this.$firstButton);

            this.$prevButton = $('<a class="imageButton prev"></a>');
            this.$prevOptions.append(this.$prevButton);

            this.$modeOptions = $('<div class="mode"></div>');
            this.$centerOptions.append(this.$modeOptions);

            this.$modeOptions.append('<label for="image">' + this.content.image + '</label>');
            this.$imageModeOption = $('<input type="radio" id="image" name="mode"></input>');
            this.$modeOptions.append(this.$imageModeOption);

            this.$modeOptions.append('<label for="page">' + this.content.page + '</label>');
            this.$pageModeOption = $('<input type="radio" id="page" name="mode"></input>');
            this.$modeOptions.append(this.$pageModeOption);

            this.$search = $('<div class="search"></div>');
            this.$centerOptions.append(this.$search);

            this.$searchText = $('<input class="searchText" maxlength="5" type="text"></input>');
            this.$search.append(this.$searchText);

            this.$total = $('<span class="total"></span>');
            this.$search.append(this.$total);

            this.$searchButton = $('<a class="imageButton go"></a>');
            this.$search.append(this.$searchButton);

            this.$nextOptions = $('<div class="nextOptions"></div>');
            this.$centerOptions.append(this.$nextOptions);

            this.$nextButton = $('<a class="imageButton next"></a>');
            this.$nextOptions.append(this.$nextButton);

            this.$lastButton = $('<a class="imageButton last"></a>');
            this.$nextOptions.append(this.$lastButton);

            if ((this.extension).getMode() == extension.Extension.PAGE_MODE) {
                this.$pageModeOption.attr('checked', 'checked');
                this.$pageModeOption.removeAttr('disabled');
            } else {
                this.$imageModeOption.attr('checked', 'checked');

                this.$pageModeOption.attr('disabled', 'disabled');
            }

            this.setTitles();

            this.setTotal();

            if (this.provider.assetSequence.assets.length == 1) {
                this.$centerOptions.hide();
            }

            this.$firstButton.on('click', function (e) {
                e.preventDefault();

                $.publish(PagingHeaderPanel.FIRST);
            });

            this.$prevButton.on('click', function (e) {
                e.preventDefault();

                $.publish(PagingHeaderPanel.PREV);
            });

            this.$nextButton.on('click', function (e) {
                e.preventDefault();

                $.publish(PagingHeaderPanel.NEXT);
            });

            this.$imageModeOption.on('click', function (e) {
                $.publish(PagingHeaderPanel.MODE_CHANGED, [extension.Extension.IMAGE_MODE]);
            });

            this.$pageModeOption.on('click', function (e) {
                $.publish(PagingHeaderPanel.MODE_CHANGED, [extension.Extension.PAGE_MODE]);
            });

            this.$searchText.on('keyup', function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    _this.$searchText.blur();

                    setTimeout(function () {
                        _this.search();
                    }, 1);
                }
            });

            this.$searchButton.on('click', function (e) {
                e.preventDefault();

                _this.search();
            });

            this.$lastButton.on('click', function (e) {
                e.preventDefault();

                $.publish(PagingHeaderPanel.LAST);
            });

            if (this.options.modeOptionsEnabled === false) {
                this.$modeOptions.hide();
                this.$centerOptions.addClass('modeOptionsDisabled');
            }

            if (this.options.helpEnabled === false) {
                this.$helpButton.hide();
            }
        };

        PagingHeaderPanel.prototype.setTitles = function () {
            var mode;

            if ((this.extension).getMode() === extension.Extension.PAGE_MODE) {
                mode = "page";
            } else {
                mode = "image";
            }

            this.$firstButton.prop('title', this.content.first + " " + mode);
            this.$prevButton.prop('title', this.content.previous + " " + mode);
            this.$nextButton.prop('title', this.content.next + " " + mode);
            this.$lastButton.prop('title', this.content.last + " " + mode);
            this.$searchButton.prop('title', this.content.go);
        };

        PagingHeaderPanel.prototype.setTotal = function () {
            var of = this.content.of;

            if ((this.extension).getMode() === extension.Extension.PAGE_MODE) {
                this.$total.html(String.prototype.format(of, this.extension.getLastAssetOrderLabel()));
            } else {
                this.$total.html(String.prototype.format(of, this.provider.assetSequence.assets.length));
            }
        };

        PagingHeaderPanel.prototype.setSearchPlaceholder = function (index) {
            var asset = this.extension.getAssetByIndex(index);

            if ((this.extension).getMode() === extension.Extension.PAGE_MODE) {
                if (asset.orderLabel.trim() === "-") {
                    this.$searchText.val("");
                } else {
                    this.$searchText.val(asset.orderLabel);
                }
            } else {
                index++;
                this.$searchText.val(index);
            }
        };

        PagingHeaderPanel.prototype.search = function () {
            var value = this.$searchText.val();

            if (!value) {
                this.extension.showDialogue(this.content.emptyValue);

                return;
            }

            if ((this.extension).getMode() === extension.Extension.PAGE_MODE) {
                $.publish(PagingHeaderPanel.PAGE_SEARCH, [value]);
            } else {
                var index = parseInt(this.$searchText.val());

                if (isNaN(index)) {
                    this.extension.showDialogue(this.provider.config.modules.genericDialogue.content.invalidNumber);
                    return;
                }

                var asset = this.extension.getAssetByIndex(index);

                if (!asset) {
                    this.extension.showDialogue(this.provider.config.modules.genericDialogue.content.pageNotFound);
                    return;
                }

                index--;
                $.publish(PagingHeaderPanel.IMAGE_SEARCH, [index.toString()]);
            }
        };

        PagingHeaderPanel.prototype.assetIndexChanged = function (index) {
            this.setSearchPlaceholder(index);
        };

        PagingHeaderPanel.prototype.modeChanged = function (mode) {
            this.setSearchPlaceholder(this.extension.currentAssetIndex);
            this.setTitles();
            this.setTotal();
        };

        PagingHeaderPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        PagingHeaderPanel.FIRST = 'header.onFirst';
        PagingHeaderPanel.LAST = 'header.onLast';
        PagingHeaderPanel.PREV = 'header.onPrev';
        PagingHeaderPanel.NEXT = 'header.onNext';
        PagingHeaderPanel.PAGE_SEARCH = 'header.onPageSearch';
        PagingHeaderPanel.IMAGE_SEARCH = 'header.onImageSearch';
        PagingHeaderPanel.MODE_CHANGED = 'header.onModeChanged';
        return PagingHeaderPanel;
    })(baseHeader.HeaderPanel);
    exports.PagingHeaderPanel = PagingHeaderPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/baseExpandPanel',["require", "exports", "./baseExtension", "../../utils", "./baseView"], function(require, exports, __baseExtension__, __utils__, __baseView__) {
    var baseExtension = __baseExtension__;
    
    var utils = __utils__;
    var baseView = __baseView__;

    var BaseExpandPanel = (function (_super) {
        __extends(BaseExpandPanel, _super);
        function BaseExpandPanel($element) {
            _super.call(this, $element, false, true);
            this.isExpanded = false;
            this.isUnopened = true;
        }
        BaseExpandPanel.prototype.create = function () {
            var _this = this;
            this.setConfig('shared');

            _super.prototype.create.call(this);

            this.$top = utils.Utils.createDiv('top');
            this.$element.append(this.$top);

            this.$title = utils.Utils.createDiv('title');
            this.$top.append(this.$title);

            this.$collapseButton = utils.Utils.createDiv('collapseButton');
            this.$top.append(this.$collapseButton);

            this.$closed = utils.Utils.createDiv('closed');
            this.$element.append(this.$closed);

            this.$expandButton = $('<a class="expandButton"></a>');
            this.$closed.append(this.$expandButton);

            this.$closedTitle = $('<a class="title"></a>');
            this.$closed.append(this.$closedTitle);

            this.$main = utils.Utils.createDiv('main');
            this.$element.append(this.$main);

            this.$expandButton.on('click', function (e) {
                e.preventDefault();

                _this.toggle();
            });

            this.$closedTitle.on('click', function (e) {
                e.preventDefault();

                _this.toggle();
            });

            this.$title.on('click', function (e) {
                e.preventDefault();

                _this.toggle();
            });

            this.$collapseButton.on('click', function (e) {
                e.preventDefault();

                _this.toggle();
            });

            this.$top.hide();
            this.$main.hide();
        };

        BaseExpandPanel.prototype.init = function () {
            _super.prototype.init.call(this);
        };

        BaseExpandPanel.prototype.toggle = function () {
            var _this = this;
            if (this.isExpanded) {
                this.$top.hide();
                this.$main.hide();
                this.$closed.show();
            }

            var targetWidth = this.getTargetWidth();
            var targetLeft = this.getTargetLeft();

            this.$element.stop().animate({
                width: targetWidth,
                left: targetLeft
            }, this.options.panelAnimationDuration, function () {
                _this.toggled();
            });
        };

        BaseExpandPanel.prototype.toggled = function () {
            this.isExpanded = !this.isExpanded;

            if (this.isExpanded) {
                this.$closed.hide();
                this.$top.show();
                this.$main.show();
            }

            this.toggleComplete();

            this.isUnopened = false;
        };

        BaseExpandPanel.prototype.getTargetWidth = function () {
            return 0;
        };

        BaseExpandPanel.prototype.getTargetLeft = function () {
            return 0;
        };

        BaseExpandPanel.prototype.toggleComplete = function () {
            $.publish(baseExtension.BaseExtension.RESIZE);
        };

        BaseExpandPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$main.actualHeight(this.$element.parent().height() - this.$top.outerHeight(true));
        };
        return BaseExpandPanel;
    })(baseView.BaseView);
    exports.BaseExpandPanel = BaseExpandPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/leftPanel',["require", "exports", "./baseExpandPanel"], function(require, exports, __baseExpandPanel__) {
    
    
    
    var baseExpandPanel = __baseExpandPanel__;

    var LeftPanel = (function (_super) {
        __extends(LeftPanel, _super);
        function LeftPanel($element) {
            _super.call(this, $element);
        }
        LeftPanel.prototype.create = function () {
            _super.prototype.create.call(this);

            this.$element.width(this.options.panelCollapsedWidth);
        };

        LeftPanel.prototype.init = function () {
            _super.prototype.init.call(this);

            if (this.options.panelOpen) {
                this.toggle();
            }
        };

        LeftPanel.prototype.getTargetWidth = function () {
            return this.isExpanded ? this.options.panelCollapsedWidth : this.options.panelExpandedWidth;
        };

        LeftPanel.prototype.toggleComplete = function () {
            _super.prototype.toggleComplete.call(this);
        };

        LeftPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        return LeftPanel;
    })(baseExpandPanel.BaseExpandPanel);
    exports.LeftPanel = LeftPanel;
});

define('modules/coreplayer-treeviewleftpanel-module/treeNode',["require", "exports"], function(require, exports) {
    var TreeNode = (function () {
        function TreeNode(label, type, ref, path) {
            this.label = label;
            this.type = type;
            this.ref = ref;
            this.path = path;
            this.nodes = [];
        }
        return TreeNode;
    })();

    
    return TreeNode;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-treeviewleftpanel-module/treeView',["require", "exports", "../coreplayer-shared-module/baseExtension", "../coreplayer-shared-module/baseView", "../coreplayer-treeviewleftpanel-module/treeNode"], function(require, exports, __baseExtension__, __baseView__, __TreeNode__) {
    
    var baseExtension = __baseExtension__;
    
    var baseView = __baseView__;
    
    var TreeNode = __TreeNode__;

    var TreeView = (function (_super) {
        __extends(TreeView, _super);
        function TreeView($element) {
            _super.call(this, $element, true, false);
        }
        TreeView.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);

            $.subscribe(baseExtension.BaseExtension.ASSET_INDEX_CHANGED, function (e, assetIndex) {
                _this.selectIndex(assetIndex);
            });

            this.createTreeNodes();

            this.$tree = $('<ul class="tree"></ul>');
            this.$element.append(this.$tree);

            $.templates({
                pageTemplate: '{^{for nodes}}\
                               {^{tree/}}\
                           {{/for}}',
                treeTemplate: '<li>\
                               {^{if nodes && nodes.length}}\
                                   {^{if expanded}}\
                                       <div class="toggle expanded"></div>\
                                   {{else}}\
                                       <div class="toggle"></div>\
                                   {{/if}}\
                               {{else}}\
                                   <div class="spacer"></div>\
                               {{/if}}\
                               {^{if selected}}\
                                   <a href="#" class="selected">{{>label}}</a>\
                               {{else}}\
                                   <a href="#">{{>label}}</a>\
                               {{/if}}\
                           </li>\
                           {^{if expanded}}\
                               <li>\
                                   <ul>\
                                       {^{for nodes}}\
                                           {^{tree/}}\
                                       {{/for}}\
                                   </ul>\
                               </li>\
                           {{/if}}'
            });

            $.views.tags({
                tree: {
                    toggle: function () {
                        $.observable(this.data).setProperty("expanded", !this.data.expanded);
                    },
                    init: function (tagCtx, linkCtx, ctx) {
                        this.data = tagCtx.view.data;
                    },
                    onAfterLink: function () {
                        var self = this;

                        self.contents("li").first().on("click", ".toggle", function () {
                            self.toggle();
                        }).on("click", "a", function (e) {
                            e.preventDefault();

                            if (self.data.type == 'structure') {
                                $.publish(TreeView.VIEW_STRUCTURE, [self.data.ref]);
                            } else {
                                $.publish(TreeView.VIEW_SECTION, [self.data.ref]);
                            }
                        });
                    },
                    template: $.templates.treeTemplate
                }
            });

            this.$tree.link($.templates.pageTemplate, this.structuresRootNode);

            this.resize();
        };

        TreeView.prototype.parseStructure = function (node, structure) {
            node.label = structure.name || "root";
            node.type = "structure";
            node.ref = structure;
            structure.treeNode = node;
            node.path = node.ref.path;

            if (this.provider.assetSequence.structure == structure) {
                this.sectionsRootNode = node;
                this.sectionsRootNode.selected = true;
                this.sectionsRootNode.expanded = true;
            }

            if (structure.structures) {
                for (var i = 0; i < structure.structures.length; i++) {
                    var childStructure = structure.structures[i];

                    var childNode = new TreeNode();
                    node.nodes.push(childNode);

                    this.parseStructure(childNode, childStructure);
                }
            }
        };

        TreeView.prototype.parseSection = function (node, section) {
            node.label = section.sectionType;
            node.type = "section";
            node.ref = section;
            section.treeNode = node;
            node.path = node.ref.path;

            if (section.sections) {
                for (var i = 0; i < section.sections.length; i++) {
                    var childSection = section.sections[i];

                    var childNode = new TreeNode();
                    node.nodes.push(childNode);

                    this.parseSection(childNode, childSection);
                }
            }
        };

        TreeView.prototype.createTreeNodes = function () {
            this.structuresRootNode = new TreeNode('root');

            if (this.provider.pkg.rootStructure) {
                this.parseStructure(this.structuresRootNode, this.provider.pkg.rootStructure);
            }

            if (!this.sectionsRootNode)
                this.sectionsRootNode = this.structuresRootNode;

            if (this.provider.assetSequence.rootSection.sections) {
                for (var i = 0; i < this.provider.assetSequence.rootSection.sections.length; i++) {
                    var section = this.provider.assetSequence.rootSection.sections[i];

                    var childNode = new TreeNode();
                    this.sectionsRootNode.nodes.push(childNode);

                    this.parseSection(childNode, section);
                }
            }
        };

        TreeView.prototype.selectIndex = function (index) {
            if (index == -1)
                return;

            var section = this.extension.getSectionByAssetIndex(index);
            this.selectPath(section.path);
        };

        TreeView.prototype.selectPath = function (path) {
            var pathArr = path.split("/");

            if (pathArr.length >= 1)
                pathArr.shift();

            if (this.selectedSection)
                $.observable(this.selectedSection.treeNode).setProperty("selected", false);

            this.selectedSection = this.getSection(this.provider.assetSequence.rootSection, pathArr);

            $.observable(this.selectedSection.treeNode).setProperty("selected", true);
        };

        TreeView.prototype.show = function () {
            var _this = this;
            this.$element.show();

            setTimeout(function () {
                _this.selectIndex(_this.extension.currentAssetIndex);
            }, 1);
        };

        TreeView.prototype.hide = function () {
            this.$element.hide();
        };

        TreeView.prototype.getSection = function (parentSection, path) {
            if (path.length == 0)
                return parentSection;

            parentSection.expanded = true;

            var index = path.shift();

            var section = parentSection.sections[index];

            return this.getSection(section, path);
        };

        TreeView.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        TreeView.VIEW_SECTION = 'treeView.onViewSection';
        TreeView.VIEW_STRUCTURE = 'treeView.onViewStructure';
        return TreeView;
    })(baseView.BaseView);
    exports.TreeView = TreeView;
});

define('modules/coreplayer-treeviewleftpanel-module/thumb',["require", "exports"], function(require, exports) {
    var Thumb = (function () {
        function Thumb(index, url, label, height, visible) {
            this.index = index;
            this.url = url;
            this.label = label;
            this.height = height;
            this.visible = visible;
        }
        return Thumb;
    })();
    
    return Thumb;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-treeviewleftpanel-module/thumbsView',["require", "exports", "../../utils", "../coreplayer-shared-module/baseExtension", "../../extensions/coreplayer-seadragon-extension/extension", "../coreplayer-shared-module/baseView", "../coreplayer-treeviewleftpanel-module/thumb"], function(require, exports, __utils__, __baseExtension__, __extension__, __baseView__, __Thumb__) {
    var utils = __utils__;
    var baseExtension = __baseExtension__;
    var extension = __extension__;
    
    var baseView = __baseView__;
    var Thumb = __Thumb__;
    

    var ThumbsView = (function (_super) {
        __extends(ThumbsView, _super);
        function ThumbsView($element) {
            _super.call(this, $element, true, true);
        }
        ThumbsView.prototype.create = function () {
            var _this = this;
            this.setConfig('treeViewLeftPanel');

            _super.prototype.create.call(this);

            $.subscribe(baseExtension.BaseExtension.ASSET_INDEX_CHANGED, function (e, index) {
                _this.selectIndex(parseInt(index));
            });

            $.subscribe(extension.Extension.MODE_CHANGED, function (e, mode) {
                _this.setLabel();
            });

            $.subscribe(extension.Extension.RELOAD, function () {
                _this.createThumbs();
            });

            this.$thumbs = utils.Utils.createDiv('thumbs');
            this.$element.append(this.$thumbs);

            $.templates({
                thumbsTemplate: '<div class="thumb" data-src="{{>url}}" data-visible="{{>visible}}">\
                                <div class="wrap" style="height:{{>height}}px"></div>\
                                <span class="index">{{:#index + 1}}</span>\
                                <span class="label">{{>label}}&nbsp;</span>\
                            </div>\
                            {{if ~isEven(#index + 1)}} \
                                <div class="separator"></div> \
                            {{/if}}'
            });

            $.views.helpers({
                isEven: function (num) {
                    return (num % 2 == 0) ? true : false;
                }
            });

            this.$element.on('scroll', function () {
                _this.scrollStop();
            }, 1000);

            this.resize();

            this.createThumbs();
        };

        ThumbsView.prototype.scrollStop = function () {
            var scrollPos = 1 / ((this.$thumbs.height() - this.$element.height()) / this.$element.scrollTop());

            if (scrollPos > 1)
                scrollPos = 1;

            var thumbRangeMid = Math.floor((this.thumbs.length - 1) * scrollPos);

            this.loadThumbs(thumbRangeMid);
        };

        ThumbsView.prototype.createThumbs = function () {
            var that = this;
            this.thumbs = [];

            for (var i = 0; i < this.provider.assetSequence.assets.length; i++) {
                var asset = this.provider.assetSequence.assets[i];

                var uri = (this.provider).getThumbUri(asset);
                var section = this.extension.getAssetSection(asset);

                var heightRatio = asset.height / asset.width;
                var height = 90 * heightRatio;

                var visible = section.extensions.authStatus.toLowerCase() === "allowed";

                if (asset.orderLabel.trim() === "-") {
                    asset.orderLabel = "";
                }

                this.thumbs.push(new Thumb(i, uri, asset.orderLabel, height, visible));
            }

            this.$thumbs.link($.templates.thumbsTemplate, this.thumbs);

            this.$thumbs.delegate(".thumb", "click", function (e) {
                e.preventDefault();

                var data = $.view(this).data;

                that.lastThumbClickedIndex = data.index;

                $.publish(ThumbsView.THUMB_SELECTED, [data.index]);
            });

            this.selectIndex(this.extension.currentAssetIndex);

            this.setLabel();

            this.loadThumbs(0);
        };

        ThumbsView.prototype.loadThumbs = function (index) {
            index = parseInt(index);

            var thumbRangeMid = index;
            var thumbLoadRange = this.options.thumbsLoadRange;

            var thumbRange = {
                start: (thumbRangeMid > thumbLoadRange) ? thumbRangeMid - thumbLoadRange : 0,
                end: (thumbRangeMid < (this.thumbs.length - 1) - thumbLoadRange) ? thumbRangeMid + thumbLoadRange : this.thumbs.length - 1
            };

            var fadeDuration = this.options.thumbsImageFadeInDuration;

            for (var i = thumbRange.start; i <= thumbRange.end; i++) {
                var thumbElem = $(this.$thumbs.find('.thumb')[i]);
                var imgCont = thumbElem.find('.wrap');

                if (!imgCont.hasClass('loading') && !imgCont.hasClass('loaded')) {
                    var visible = thumbElem.attr('data-visible');

                    if (visible !== "false") {
                        imgCont.addClass('loading');
                        var src = thumbElem.attr('data-src');

                        var img = $('<img src="' + src + '" />');

                        $(img).hide().load(function () {
                            $(this).fadeIn(fadeDuration, function () {
                                $(this).parent().swapClass('loading', 'loaded');
                            });
                        });
                        imgCont.append(img);
                    } else {
                        imgCont.addClass('hidden');
                    }
                }
            }
        };

        ThumbsView.prototype.show = function () {
            var _this = this;
            this.$element.show();

            setTimeout(function () {
                _this.selectIndex(_this.extension.currentAssetIndex);
            }, 1);
        };

        ThumbsView.prototype.hide = function () {
            this.$element.hide();
        };

        ThumbsView.prototype.setLabel = function () {
            if ((this.extension).getMode() == extension.Extension.PAGE_MODE) {
                $(this.$thumbs).find('span.index').hide();
                $(this.$thumbs).find('span.label').show();
            } else {
                $(this.$thumbs).find('span.index').show();
                $(this.$thumbs).find('span.label').hide();
            }
        };

        ThumbsView.prototype.selectIndex = function (index) {
            if (index == -1)
                return;

            index = parseInt(index);

            if (this.$selectedThumb) {
                this.$selectedThumb.removeClass('selected');
            }

            this.$selectedThumb = $(this.$thumbs.find('.thumb')[index]);
            this.$selectedThumb.addClass('selected');

            if (this.lastThumbClickedIndex != index) {
                var scrollTop = this.$element.scrollTop() + this.$selectedThumb.position().top;
                this.$element.scrollTop(scrollTop);
            }

            this.loadThumbs(index);
        };

        ThumbsView.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        ThumbsView.THUMB_SELECTED = 'thumbsView.onThumbSelected';
        return ThumbsView;
    })(baseView.BaseView);
    exports.ThumbsView = ThumbsView;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-treeviewleftpanel-module/treeViewLeftPanel',["require", "exports", "../coreplayer-shared-module/leftPanel", "../../utils", "../coreplayer-treeviewleftpanel-module/treeView", "../coreplayer-treeviewleftpanel-module/thumbsView"], function(require, exports, __baseLeft__, __utils__, __tree__, __thumbs__) {
    var baseLeft = __baseLeft__;
    var utils = __utils__;
    var tree = __tree__;
    var thumbs = __thumbs__;

    var TreeViewLeftPanel = (function (_super) {
        __extends(TreeViewLeftPanel, _super);
        function TreeViewLeftPanel($element) {
            _super.call(this, $element);
        }
        TreeViewLeftPanel.prototype.create = function () {
            var _this = this;
            this.setConfig('treeViewLeftPanel');

            _super.prototype.create.call(this);

            this.$tabs = utils.Utils.createDiv('tabs');
            this.$main.append(this.$tabs);

            this.$treeButton = $('<a class="tab first">' + this.content.index + '</a>');
            this.$tabs.append(this.$treeButton);

            this.$thumbsButton = $('<a class="tab">' + this.content.thumbnails + '</a>');
            this.$tabs.append(this.$thumbsButton);

            this.$tabsContent = utils.Utils.createDiv('tabsContent');
            this.$main.append(this.$tabsContent);

            this.$treeView = utils.Utils.createDiv('treeView');
            this.$tabsContent.append(this.$treeView);

            this.$thumbsView = utils.Utils.createDiv('thumbsView');
            this.$tabsContent.append(this.$thumbsView);

            this.$treeButton.on('click', function (e) {
                e.preventDefault();

                _this.openTreeView();
            });

            this.$thumbsButton.on('click', function (e) {
                e.preventDefault();

                _this.openThumbsView();
            });
        };

        TreeViewLeftPanel.prototype.createTreeView = function () {
            this.treeView = new tree.TreeView(this.$treeView);
        };

        TreeViewLeftPanel.prototype.createThumbsView = function () {
            this.thumbsView = new thumbs.ThumbsView(this.$thumbsView);
        };

        TreeViewLeftPanel.prototype.toggleComplete = function () {
            _super.prototype.toggleComplete.call(this);

            if (this.isUnopened) {
                this.openTreeView();
            }
        };

        TreeViewLeftPanel.prototype.openTreeView = function () {
            if (!this.treeView) {
                this.createTreeView();
            }

            this.$treeButton.addClass('on');
            this.$thumbsButton.removeClass('on');

            this.treeView.show();
            if (this.thumbsView)
                this.thumbsView.hide();
        };

        TreeViewLeftPanel.prototype.openThumbsView = function () {
            if (!this.thumbsView) {
                this.createThumbsView();
            }

            this.$treeButton.removeClass('on');
            this.$thumbsButton.addClass('on');

            if (this.treeView)
                this.treeView.hide();
            this.thumbsView.show();
        };

        TreeViewLeftPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$tabsContent.actualHeight(this.$main.height() - this.$tabs.outerHeight());
        };
        return TreeViewLeftPanel;
    })(baseLeft.LeftPanel);
    exports.TreeViewLeftPanel = TreeViewLeftPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/centerPanel',["require", "exports", "./shell", "./baseView", "../../utils"], function(require, exports, __shell__, __baseView__, __utils__) {
    var shell = __shell__;
    var baseView = __baseView__;
    var utils = __utils__;

    var CenterPanel = (function (_super) {
        __extends(CenterPanel, _super);
        function CenterPanel($element) {
            _super.call(this, $element, false, true);
        }
        CenterPanel.prototype.create = function () {
            _super.prototype.create.call(this);

            this.$title = utils.Utils.createDiv('title');
            this.$element.append(this.$title);

            this.$content = utils.Utils.createDiv('content');
            this.$element.append(this.$content);

            if (this.options.titleEnabled === false) {
                this.$title.hide();
            }
        };

        CenterPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$element.css({
                'left': shell.Shell.$leftPanel.width(),
                'width': this.$element.parent().width() - shell.Shell.$leftPanel.width() - shell.Shell.$rightPanel.width()
            });

            var titleHeight;

            if (this.options.titleEnabled === false) {
                titleHeight = 0;
            } else {
                titleHeight = this.$title.height();
            }

            this.$content.height(this.$element.height() - titleHeight);
        };
        return CenterPanel;
    })(baseView.BaseView);
    exports.CenterPanel = CenterPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-seadragoncenterpanel-module/seadragonCenterPanel',["require", "exports", "../coreplayer-shared-module/baseProvider", "../../extensions/coreplayer-seadragon-extension/extension", "../coreplayer-shared-module/centerPanel", "../../utils"], function(require, exports, __baseProvider__, __extension__, __baseCenter__, __utils__) {
    
    var baseProvider = __baseProvider__;
    var extension = __extension__;
    var baseCenter = __baseCenter__;
    var utils = __utils__;

    var SeadragonCenterPanel = (function (_super) {
        __extends(SeadragonCenterPanel, _super);
        function SeadragonCenterPanel($element) {
            _super.call(this, $element);
            this.prevButtonEnabled = false;
            this.nextButtonEnabled = false;
        }
        SeadragonCenterPanel.prototype.create = function () {
            var _this = this;
            this.setConfig('seadragonCenterPanel');

            _super.prototype.create.call(this);

            $.subscribe(extension.Extension.OPEN_DZI, function (e, uri) {
                _this.viewer.openDzi(uri);
            });

            this.$viewer = $('<div id="viewer"></div>');
            this.$content.append(this.$viewer);

            OpenSeadragon.DEFAULT_SETTINGS.autoHideControls = true;

            this.viewer = OpenSeadragon({
                id: "viewer",
                showNavigationControl: false,
                showNavigator: true,
                defaultZoomLevel: this.options.defaultZoomLevel || 0,
                navigatorPosition: 'BOTTOM_RIGHT'
            });

            this.viewer.clearControls();

            this.viewer.setControlsEnabled(false);

            if (this.extension.isMultiAsset()) {
                this.$prevButton = $('<div class="paging btn prev"></div>');
                this.$prevButton.prop('title', this.content.previous);
                this.viewer.addControl(this.$prevButton[0], { anchor: OpenSeadragon.ControlAnchor.TOP_LEFT });

                this.$nextButton = $('<div class="paging btn next"></div>');
                this.$nextButton.prop('title', this.content.next);
                this.viewer.addControl(this.$nextButton[0], { anchor: OpenSeadragon.ControlAnchor.TOP_RIGHT });

                var that = this;

                this.$prevButton.click(function (e) {
                    e.preventDefault();
                    OpenSeadragon.cancelEvent(e);

                    if (!that.prevButtonEnabled)
                        return;

                    $.publish(SeadragonCenterPanel.PREV);
                });

                this.$nextButton.click(function (e) {
                    e.preventDefault();
                    OpenSeadragon.cancelEvent(e);

                    if (!that.nextButtonEnabled)
                        return;

                    $.publish(SeadragonCenterPanel.NEXT);
                });
            }
            ;

            this.viewer.addHandler('open', function (viewer) {
                _this.viewerOpen();
                $.publish(SeadragonCenterPanel.SEADRAGON_OPEN, [viewer]);
            });

            this.viewer.addHandler('resize', function (viewer) {
                $.publish(SeadragonCenterPanel.SEADRAGON_RESIZE, [viewer]);
                _this.viewerResize(viewer);
            });

            this.viewer.addHandler('animationstart', function (viewer) {
                $.publish(SeadragonCenterPanel.SEADRAGON_ANIMATION_START, [viewer]);
            });

            this.viewer.addHandler('animation', function (viewer) {
                $.publish(SeadragonCenterPanel.SEADRAGON_ANIMATION, [viewer]);
            });

            this.viewer.addHandler('animationfinish', function (viewer) {
                _this.currentBounds = _this.getBounds();

                $.publish(SeadragonCenterPanel.SEADRAGON_ANIMATION_FINISH, [viewer]);
            });

            this.title = this.extension.provider.getTitle();
        };

        SeadragonCenterPanel.prototype.viewerOpen = function () {
            if (this.extension.isMultiAsset()) {
                $('.navigator').addClass('extraMargin');

                if (this.extension.currentAssetIndex != 0) {
                    this.enablePrevButton();
                } else {
                    this.disablePrevButton();
                }

                if (this.extension.currentAssetIndex != this.provider.assetSequence.assets.length - 1) {
                    this.enableNextButton();
                } else {
                    this.disableNextButton();
                }
            }

            if (!this.currentBounds) {
                var initialBounds = this.extension.getParam(baseProvider.params.zoom);

                if (initialBounds) {
                    initialBounds = this.deserialiseBounds(initialBounds);
                    this.currentBounds = initialBounds;
                }
            }

            if (this.currentBounds) {
                this.fitToBounds(this.currentBounds);
            }
        };

        SeadragonCenterPanel.prototype.disablePrevButton = function () {
            this.prevButtonEnabled = false;
            this.$prevButton.addClass('disabled');
        };

        SeadragonCenterPanel.prototype.enablePrevButton = function () {
            this.prevButtonEnabled = true;
            this.$prevButton.removeClass('disabled');
        };

        SeadragonCenterPanel.prototype.disableNextButton = function () {
            this.nextButtonEnabled = false;
            this.$nextButton.addClass('disabled');
        };

        SeadragonCenterPanel.prototype.enableNextButton = function () {
            this.nextButtonEnabled = true;
            this.$nextButton.removeClass('disabled');
        };

        SeadragonCenterPanel.prototype.serialiseBounds = function (bounds) {
            return bounds.x + ',' + bounds.y + ',' + bounds.width + ',' + bounds.height;
        };

        SeadragonCenterPanel.prototype.deserialiseBounds = function (bounds) {
            var boundsArr = bounds.split(',');

            return {
                x: Number(boundsArr[0]),
                y: Number(boundsArr[1]),
                width: Number(boundsArr[2]),
                height: Number(boundsArr[3])
            };
        };

        SeadragonCenterPanel.prototype.fitToBounds = function (bounds) {
            var rect = new OpenSeadragon.Rect();
            rect.x = bounds.x;
            rect.y = bounds.y;
            rect.width = bounds.width;
            rect.height = bounds.height;

            this.viewer.viewport.fitBounds(rect, true);
        };

        SeadragonCenterPanel.prototype.getBounds = function () {
            if (!this.viewer.viewport)
                return null;

            var bounds = this.viewer.viewport.getBounds(true);

            return {
                x: utils.Utils.roundNumber(bounds.x, 4),
                y: utils.Utils.roundNumber(bounds.y, 4),
                width: utils.Utils.roundNumber(bounds.width, 4),
                height: utils.Utils.roundNumber(bounds.height, 4)
            };
        };

        SeadragonCenterPanel.prototype.viewerResize = function (viewer) {
            if (!viewer.viewport)
                return;

            var center = viewer.viewport.getCenter(true);
            if (!center)
                return;

            setTimeout(function () {
                viewer.viewport.panTo(center, true);
            }, 1);
        };

        SeadragonCenterPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$title.ellipsisFill(this.title);

            this.$viewer.height(this.$content.height());

            if (this.extension.isMultiAsset()) {
                this.$prevButton.css('top', (this.$content.height() - this.$prevButton.height()) / 2);
                this.$nextButton.css('top', (this.$content.height() - this.$nextButton.height()) / 2);
            }
        };
        SeadragonCenterPanel.SEADRAGON_OPEN = 'center.open';
        SeadragonCenterPanel.SEADRAGON_RESIZE = 'center.resize';
        SeadragonCenterPanel.SEADRAGON_ANIMATION_START = 'center.animationstart';
        SeadragonCenterPanel.SEADRAGON_ANIMATION = 'center.animation';
        SeadragonCenterPanel.SEADRAGON_ANIMATION_FINISH = 'center.animationfinish';
        SeadragonCenterPanel.PREV = 'center.onPrev';
        SeadragonCenterPanel.NEXT = 'center.onNext';
        return SeadragonCenterPanel;
    })(baseCenter.CenterPanel);
    exports.SeadragonCenterPanel = SeadragonCenterPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/rightPanel',["require", "exports", "./baseExpandPanel"], function(require, exports, __baseExpandPanel__) {
    
    
    
    var baseExpandPanel = __baseExpandPanel__;

    var RightPanel = (function (_super) {
        __extends(RightPanel, _super);
        function RightPanel($element) {
            _super.call(this, $element);
        }
        RightPanel.prototype.create = function () {
            _super.prototype.create.call(this);

            this.$element.width(this.options.panelCollapsedWidth);
        };

        RightPanel.prototype.getTargetWidth = function () {
            return this.isExpanded ? this.options.panelCollapsedWidth : this.options.panelExpandedWidth;
        };

        RightPanel.prototype.getTargetLeft = function () {
            return this.isExpanded ? this.$element.parent().width() - this.options.panelCollapsedWidth : this.$element.parent().width() - this.options.panelExpandedWidth;
        };

        RightPanel.prototype.toggleComplete = function () {
            _super.prototype.toggleComplete.call(this);
        };

        RightPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$element.css({
                'left': this.$element.parent().width() - this.$element.outerWidth()
            });
        };
        return RightPanel;
    })(baseExpandPanel.BaseExpandPanel);
    exports.RightPanel = RightPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-moreinforightpanel-module/moreInfoRightPanel',["require", "exports", "../coreplayer-shared-module/rightPanel"], function(require, exports, __baseRight__) {
    var baseRight = __baseRight__;

    var MoreInfoRightPanel = (function (_super) {
        __extends(MoreInfoRightPanel, _super);
        function MoreInfoRightPanel($element) {
            _super.call(this, $element);
        }
        MoreInfoRightPanel.prototype.create = function () {
            this.setConfig('moreInfoRightPanel');

            _super.prototype.create.call(this);
        };

        MoreInfoRightPanel.prototype.toggleComplete = function () {
            _super.prototype.toggleComplete.call(this);

            if (this.isUnopened) {
                this.getInfo();
            }
        };

        MoreInfoRightPanel.prototype.getInfo = function () {
            this.$main.addClass('loading');

            this.displayInfo();
        };

        MoreInfoRightPanel.prototype.displayInfo = function () {
            this.$main.append(this.content.holdingText);
        };

        MoreInfoRightPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        return MoreInfoRightPanel;
    })(baseRight.RightPanel);
    exports.MoreInfoRightPanel = MoreInfoRightPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-shared-module/footerPanel',["require", "exports", "../../utils", "./baseExtension", "./baseView"], function(require, exports, __utils__, __baseExtension__, __baseView__) {
    var utils = __utils__;
    var baseExtension = __baseExtension__;
    
    var baseView = __baseView__;

    var FooterPanel = (function (_super) {
        __extends(FooterPanel, _super);
        function FooterPanel($element) {
            _super.call(this, $element, true, false);
        }
        FooterPanel.prototype.create = function () {
            var _this = this;
            this.setConfig('footerPanel');

            _super.prototype.create.call(this);

            $.subscribe(baseExtension.BaseExtension.TOGGLE_FULLSCREEN, function () {
                _this.toggleFullScreen();
            });

            this.$options = utils.Utils.createDiv('options');
            this.$element.append(this.$options);

            this.$embedButton = $('<a href="#" class="imageButton embed" title="' + this.content.embed + '"></a>');
            this.$options.append(this.$embedButton);

            this.$fullScreenBtn = $('<a href="#" class="imageButton fullScreen" title="' + this.content.fullScreen + '"></a>');
            this.$options.append(this.$fullScreenBtn);

            this.$embedButton.on('click', function (e) {
                e.preventDefault();

                $.publish(FooterPanel.EMBED);
            });

            this.$fullScreenBtn.on('click', function (e) {
                e.preventDefault();
                $.publish(baseExtension.BaseExtension.TOGGLE_FULLSCREEN);
            });

            if (this.options.minimiseButtons === true) {
                this.$options.addClass('minimiseButtons');
            }
        };

        FooterPanel.prototype.toggleFullScreen = function () {
            if (this.extension.isFullScreen) {
                this.$fullScreenBtn.swapClass('fullScreen', 'normal');
                this.$fullScreenBtn.attr('title', this.content.exitFullScreen);
            } else {
                this.$fullScreenBtn.swapClass('normal', 'fullScreen');
                this.$fullScreenBtn.attr('title', this.content.fullScreen);
            }
        };

        FooterPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            this.$element.css({
                'top': this.extension.height() - this.$element.height()
            });
        };
        FooterPanel.EMBED = 'footer.onEmbed';
        return FooterPanel;
    })(baseView.BaseView);
    exports.FooterPanel = FooterPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-dialogues-module/embedDialogue',["require", "exports", "../../utils", "../coreplayer-shared-module/dialogue"], function(require, exports, __utils__, __dialogue__) {
    
    
    var utils = __utils__;
    var dialogue = __dialogue__;

    var EmbedDialogue = (function (_super) {
        __extends(EmbedDialogue, _super);
        function EmbedDialogue($element) {
            _super.call(this, $element);
        }
        EmbedDialogue.prototype.create = function () {
            var _this = this;
            this.setConfig('embedDialogue');

            _super.prototype.create.call(this);

            var that = this;

            $.subscribe(EmbedDialogue.SHOW_EMBED_DIALOGUE, function (e, params) {
                _this.open();
                _this.formatCode();
            });

            $.subscribe(EmbedDialogue.HIDE_EMBED_DIALOGUE, function (e) {
                _this.close();
            });

            this.smallWidth = 560;
            this.smallHeight = 420;

            this.mediumWidth = 640;
            this.mediumHeight = 480;

            this.largeWidth = 800;
            this.largeHeight = 600;

            this.currentWidth = this.smallWidth;
            this.currentHeight = this.smallHeight;

            this.$title = $('<h1>' + this.content.title + '</h1>');
            this.$content.append(this.$title);

            this.$intro = $('<p>' + this.content.instructions + '</p>');
            this.$content.append(this.$intro);

            this.$code = $('<textarea class="code"></textarea>');
            this.$content.append(this.$code);

            this.$sizes = $('<div class="sizes"></div>');
            this.$content.append(this.$sizes);

            this.$smallSize = $('<div class="size small"></div>');
            this.$sizes.append(this.$smallSize);
            this.$smallSize.append('<p>' + this.smallWidth + ' x ' + this.smallHeight + '</p>');
            this.$smallSize.append('<div class="box"></div>');

            this.$mediumSize = $('<div class="size medium"></div>');
            this.$sizes.append(this.$mediumSize);
            this.$mediumSize.append('<p>' + this.mediumWidth + ' x ' + this.mediumHeight + '</p>');
            this.$mediumSize.append('<div class="box"></div>');

            this.$largeSize = $('<div class="size large"></div>');
            this.$sizes.append(this.$largeSize);
            this.$largeSize.append('<p>' + this.largeWidth + ' x ' + this.largeHeight + '</p>');
            this.$largeSize.append('<div class="box"></div>');

            this.$customSize = $('<div class="size custom"></div>');
            this.$sizes.append(this.$customSize);
            this.$customSize.append('<p>Custom size</p>');
            this.$customSizeWrap = $('<div class="wrap"></div>');
            this.$customSize.append(this.$customSizeWrap);
            this.$customSizeWidthWrap = $('<div class="width"></div>');
            this.$customSizeWrap.append(this.$customSizeWidthWrap);
            this.$customSizeWidthWrap.append('<label for="width">Width</label>');
            this.$customWidth = $('<input id="width" type="text" maxlength="5"></input>');
            this.$customSizeWidthWrap.append(this.$customWidth);
            this.$customSizeWidthWrap.append('<span>px</span>');
            this.$customSizeHeightWrap = $('<div class="height"></div>');
            this.$customSizeWrap.append(this.$customSizeHeightWrap);
            this.$customSizeHeightWrap.append('<label for="height">Height</label>');
            this.$customHeight = $('<input id="height" type="text" maxlength="5"></input>');
            this.$customSizeHeightWrap.append(this.$customHeight);
            this.$customSizeHeightWrap.append('<span>px</span>');

            this.$code.focus(function () {
                $(this).select();
            });

            this.$code.mouseup(function (e) {
                e.preventDefault();
            });

            this.$smallSize.click(function (e) {
                e.preventDefault();

                _this.currentWidth = _this.smallWidth;
                _this.currentHeight = _this.smallHeight;

                _this.formatCode();
            });

            this.$mediumSize.click(function (e) {
                e.preventDefault();

                _this.currentWidth = _this.mediumWidth;
                _this.currentHeight = _this.mediumHeight;

                _this.formatCode();
            });

            this.$largeSize.click(function (e) {
                e.preventDefault();

                _this.currentWidth = _this.largeWidth;
                _this.currentHeight = _this.largeHeight;

                _this.formatCode();
            });

            this.$smallSize.addClass('selected');

            this.$sizes.find('.size').click(function (e) {
                e.preventDefault();

                that.$sizes.find('.size').removeClass('selected');
                $(this).addClass('selected');
            });

            this.$customWidth.keydown(function (event) {
                utils.Utils.numericalInput(event);
            });

            this.$customWidth.keyup(function (event) {
                _this.getCustomSize();
            });

            this.$customHeight.keydown(function (event) {
                utils.Utils.numericalInput(event);
            });

            this.$customHeight.keyup(function (event) {
                _this.getCustomSize();
            });

            this.formatCode();

            this.$element.hide();
        };

        EmbedDialogue.prototype.getCustomSize = function () {
            this.currentWidth = this.$customWidth.val();
            this.currentHeight = this.$customHeight.val();

            this.formatCode();
        };

        EmbedDialogue.prototype.formatCode = function () {
        };

        EmbedDialogue.prototype.resize = function () {
            this.$element.css({
                'top': this.extension.height() - this.$element.outerHeight(true)
            });
        };
        EmbedDialogue.SHOW_EMBED_DIALOGUE = 'onShowEmbedDialogue';
        EmbedDialogue.HIDE_EMBED_DIALOGUE = 'onHideEmbedDialogue';
        return EmbedDialogue;
    })(dialogue.Dialogue);
    exports.EmbedDialogue = EmbedDialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-seadragon-extension/embedDialogue',["require", "exports", "../../modules/coreplayer-dialogues-module/embedDialogue", "../../modules/coreplayer-seadragoncenterpanel-module/seadragonCenterPanel"], function(require, exports, __embed__, __center__) {
    
    
    
    var embed = __embed__;
    var center = __center__;
    

    var EmbedDialogue = (function (_super) {
        __extends(EmbedDialogue, _super);
        function EmbedDialogue($element) {
            var _this = this;
            _super.call(this, $element);

            $.subscribe(center.SeadragonCenterPanel.SEADRAGON_OPEN, function (viewer) {
                _this.formatCode();
            });

            $.subscribe(center.SeadragonCenterPanel.SEADRAGON_ANIMATION_FINISH, function (viewer) {
                _this.formatCode();
            });
        }
        EmbedDialogue.prototype.create = function () {
            this.setConfig('embedDialogue');

            _super.prototype.create.call(this);
        };

        EmbedDialogue.prototype.formatCode = function () {
            var assetSequenceIndex = this.extension.currentAssetIndex;
            var zoom = (this.extension).getViewerBounds();

            this.code = (this.provider).getEmbedScript(this.extension.currentAssetIndex, zoom, this.currentWidth, this.currentHeight, null, this.options.embedTemplate);

            this.$code.val(this.code);
        };

        EmbedDialogue.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        return EmbedDialogue;
    })(embed.EmbedDialogue);
    exports.EmbedDialogue = EmbedDialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-seadragon-extension/extension',["require", "exports", "../../modules/coreplayer-shared-module/baseExtension", "../../utils", "../../modules/coreplayer-shared-module/baseProvider", "../../modules/coreplayer-shared-module/shell", "../../modules/coreplayer-pagingheaderpanel-module/pagingHeaderPanel", "../../modules/coreplayer-treeviewleftpanel-module/treeViewLeftPanel", "../../modules/coreplayer-treeviewleftpanel-module/thumbsView", "../../modules/coreplayer-treeviewleftpanel-module/treeView", "../../modules/coreplayer-seadragoncenterpanel-module/seadragonCenterPanel", "../../modules/coreplayer-moreinforightpanel-module/moreInfoRightPanel", "../../modules/coreplayer-shared-module/footerPanel", "../../modules/coreplayer-dialogues-module/helpDialogue", "../../extensions/coreplayer-seadragon-extension/embedDialogue"], function(require, exports, __baseExtension__, __utils__, __baseProvider__, __shell__, __header__, __left__, __thumbsView__, __treeView__, __center__, __right__, __footer__, __help__, __embed__) {
    var baseExtension = __baseExtension__;
    var utils = __utils__;
    var baseProvider = __baseProvider__;
    
    var shell = __shell__;
    var header = __header__;
    var left = __left__;
    var thumbsView = __thumbsView__;
    var treeView = __treeView__;
    var center = __center__;
    var right = __right__;
    var footer = __footer__;
    var help = __help__;
    var embed = __embed__;
    

    var Extension = (function (_super) {
        __extends(Extension, _super);
        function Extension(provider) {
            _super.call(this, provider);
        }
        Extension.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);

            $.subscribe(header.PagingHeaderPanel.FIRST, function (e) {
                _this.viewPage(0);
            });

            $.subscribe(header.PagingHeaderPanel.LAST, function (e) {
                _this.viewPage(_this.provider.assetSequence.assets.length - 1);
            });

            $.subscribe(header.PagingHeaderPanel.PREV, function (e) {
                if (_this.currentAssetIndex != 0) {
                    _this.viewPage(Number(_this.currentAssetIndex) - 1);
                }
            });

            $.subscribe(header.PagingHeaderPanel.NEXT, function (e) {
                if (_this.currentAssetIndex != _this.provider.assetSequence.assets.length - 1) {
                    _this.viewPage(Number(_this.currentAssetIndex) + 1);
                }
            });

            $.subscribe(header.PagingHeaderPanel.MODE_CHANGED, function (e, mode) {
                Extension.mode = mode;

                $.publish(Extension.MODE_CHANGED, [mode]);
            });

            $.subscribe(header.PagingHeaderPanel.PAGE_SEARCH, function (e, value) {
                _this.viewLabel(value);
            });

            $.subscribe(header.PagingHeaderPanel.IMAGE_SEARCH, function (e, index) {
                _this.viewPage(index);
            });

            $.subscribe(treeView.TreeView.VIEW_STRUCTURE, function (e, structure) {
                _this.viewAssetSequence(structure.assetSequence.index);
            });

            $.subscribe(treeView.TreeView.VIEW_SECTION, function (e, section) {
                _this.viewSection(section.path);
            });

            $.subscribe(thumbsView.ThumbsView.THUMB_SELECTED, function (e, index) {
                _this.viewPage(index);
            });

            $.subscribe(center.SeadragonCenterPanel.SEADRAGON_ANIMATION_FINISH, function (e, viewer) {
                _this.setParam(baseProvider.params.zoom, _this.centerPanel.serialiseBounds(_this.centerPanel.currentBounds));
            });

            $.subscribe(center.SeadragonCenterPanel.PREV, function (e) {
                if (_this.currentAssetIndex != 0) {
                    _this.viewPage(Number(_this.currentAssetIndex) - 1);
                }
            });

            $.subscribe(center.SeadragonCenterPanel.NEXT, function (e) {
                if (_this.currentAssetIndex != _this.provider.assetSequence.assets.length - 1) {
                    _this.viewPage(Number(_this.currentAssetIndex) + 1);
                }
            });

            $.subscribe(footer.FooterPanel.EMBED, function (e) {
                $.publish(embed.EmbedDialogue.SHOW_EMBED_DIALOGUE);
            });

            this.createModules();

            this.setParams();

            var assetIndex;

            if (!this.provider.isReload) {
                assetIndex = parseInt(this.getParam(baseProvider.params.assetIndex)) || 0;
            }

            this.viewPage(assetIndex || 0);

            $.publish(baseExtension.BaseExtension.RESIZE);
        };

        Extension.prototype.createModules = function () {
            this.headerPanel = new header.PagingHeaderPanel(shell.Shell.$headerPanel);

            if (this.isLeftPanelEnabled()) {
                this.leftPanel = new left.TreeViewLeftPanel(shell.Shell.$leftPanel);
            }

            this.centerPanel = new center.SeadragonCenterPanel(shell.Shell.$centerPanel);
            this.rightPanel = new right.MoreInfoRightPanel(shell.Shell.$rightPanel);
            this.footerPanel = new footer.FooterPanel(shell.Shell.$footerPanel);

            this.$helpDialogue = utils.Utils.createDiv('overlay help');
            shell.Shell.$overlays.append(this.$helpDialogue);
            this.helpDialogue = new help.HelpDialogue(this.$helpDialogue);

            this.$embedDialogue = utils.Utils.createDiv('overlay embed');
            shell.Shell.$overlays.append(this.$embedDialogue);
            this.embedDialogue = new embed.EmbedDialogue(this.$embedDialogue);

            if (this.isLeftPanelEnabled()) {
                this.leftPanel.init();
            }
        };

        Extension.prototype.setParams = function () {
            this.setParam(baseProvider.params.assetSequenceIndex, this.provider.assetSequenceIndex);
        };

        Extension.prototype.isLeftPanelEnabled = function () {
            return utils.Utils.getBool(this.provider.config.options.leftPanelEnabled, true) && this.provider.assetSequence.assets.length > 1;
        };

        Extension.prototype.viewPage = function (assetIndex) {
            var _this = this;
            this.viewAsset(assetIndex, function () {
                var asset = _this.provider.assetSequence.assets[assetIndex];

                var dziUri = (_this.provider).getDziUri(asset);

                $.publish(Extension.OPEN_DZI, [dziUri]);

                _this.setParam(baseProvider.params.assetIndex, assetIndex);
            });
        };

        Extension.prototype.viewSection = function (path) {
            var index = this.getSectionIndex(path);

            this.viewPage(index);
        };

        Extension.prototype.viewLabel = function (label) {
            if (!label) {
                this.showDialogue(this.provider.config.modules.genericDialogue.content.emptyValue);
                return;
            }

            var index = this.getAssetIndexByOrderLabel(label);

            if (index != -1) {
                this.viewPage(index);
            } else {
                this.showDialogue(this.provider.config.modules.genericDialogue.content.pageNotFound);
            }
        };

        Extension.prototype.getMode = function () {
            if (Extension.mode)
                return Extension.mode;

            switch (this.provider.type) {
                case 'monograph':
                    return Extension.PAGE_MODE;
                    break;
                case 'archive':
                case 'boundmanuscript':
                    return Extension.IMAGE_MODE;
                    break;
                default:
                    return Extension.IMAGE_MODE;
            }
        };

        Extension.prototype.getViewerBounds = function () {
            if (!this.centerPanel)
                return;

            var bounds = this.centerPanel.getBounds();

            if (bounds)
                return this.centerPanel.serialiseBounds(bounds);

            return "";
        };
        Extension.MODE_CHANGED = 'onModeChanged';
        Extension.OPEN_DZI = 'openDzi';

        Extension.PAGE_MODE = "pageMode";
        Extension.IMAGE_MODE = "imageMode";
        return Extension;
    })(baseExtension.BaseExtension);
    exports.Extension = Extension;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-seadragon-extension/provider',["require", "exports", "../../modules/coreplayer-shared-module/baseProvider", "../../utils"], function(require, exports, __baseProvider__, __utils__) {
    var baseProvider = __baseProvider__;
    var utils = __utils__;
    

    var Provider = (function (_super) {
        __extends(Provider, _super);
        function Provider(config, pkg) {
            _super.call(this, config, pkg);

            this.config.options = $.extend(true, this.options, {
                dziUriTemplate: "{0}{1}",
                thumbsUriTemplate: "{0}{1}",
                timestampUris: true
            }, config.options);
        }
        Provider.prototype.getDziUri = function (asset, dziBaseUri, dziUriTemplate) {
            var baseUri = dziBaseUri ? dziBaseUri : this.options.dziBaseUri || this.options.dataBaseUri || "";
            var template = dziUriTemplate ? dziUriTemplate : this.options.dziUriTemplate;
            var uri = String.prototype.format(template, baseUri, asset.dziUri);

            return uri;
        };

        Provider.prototype.getThumbUri = function (asset, thumbsBaseUri, thumbsUriTemplate) {
            var baseUri = thumbsBaseUri ? thumbsBaseUri : this.options.thumbsBaseUri || this.options.dataBaseUri || "";
            var template = thumbsUriTemplate ? thumbsUriTemplate : this.options.thumbsUriTemplate;
            var uri = String.prototype.format(template, baseUri, asset.thumbnailPath);

            if (this.options.timestampUris)
                uri = this.addTimestamp(uri);

            return uri;
        };

        Provider.prototype.getEmbedScript = function (assetIndex, zoom, width, height, embedUri, embedTemplate) {
            var baseUri = embedUri ? embedUri : this.options.embedUri || this.options.dataBaseUri || "";
            var template = embedTemplate ? embedTemplate : this.options.embedTemplate;
            var script = String.prototype.format(template, baseUri, this.dataUri, this.assetSequenceIndex, assetIndex, zoom, width, height, this.embedScriptUri);

            return script;
        };

        Provider.prototype.addTimestamp = function (uri) {
            return uri + "?t=" + utils.Utils.getTimeStamp();
        };
        return Provider;
    })(baseProvider.BaseProvider);
    exports.Provider = Provider;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('modules/coreplayer-mediaelementcenterpanel-module/mediaelementCenterPanel',["require", "exports", "../coreplayer-shared-module/baseExtension", "../../extensions/coreplayer-mediaelement-extension/extension", "../coreplayer-shared-module/centerPanel", "../../utils"], function(require, exports, __baseExtension__, __extension__, __baseCenter__, __utils__) {
    var baseExtension = __baseExtension__;
    
    var extension = __extension__;
    var baseCenter = __baseCenter__;
    var utils = __utils__;

    var MediaElementCenterPanel = (function (_super) {
        __extends(MediaElementCenterPanel, _super);
        function MediaElementCenterPanel($element) {
            _super.call(this, $element);
        }
        MediaElementCenterPanel.prototype.create = function () {
            this.setConfig('mediaelementCenterPanel');

            _super.prototype.create.call(this);

            var that = this;

            if (this.provider.type == 'video') {
                $.subscribe(baseExtension.BaseExtension.TOGGLE_FULLSCREEN, function (e) {
                    if (that.extension.isFullScreen) {
                        that.$container.css('backgroundColor', '#000');
                        that.player.enterFullScreen(false);
                    } else {
                        that.$container.css('backgroundColor', 'transparent');
                        that.player.exitFullScreen(false);
                    }
                });
            }

            $.subscribe(extension.Extension.OPEN_MEDIA, function (e, uri) {
                that.viewMedia(uri);
            });

            this.$container = $('<div class="container"></div>');
            this.$content.append(this.$container);

            this.title = this.extension.provider.getTitle();
        };

        MediaElementCenterPanel.prototype.viewMedia = function (uri) {
            var that = this;

            this.$container.empty();

            this.mediaHeight = 576;
            this.mediaWidth = 720;

            this.$container.height(this.mediaHeight);
            this.$container.width(this.mediaWidth);

            var id = utils.Utils.getTimeStamp();

            var poster = this.provider.assetSequence.extensions.posterImage;

            switch (this.provider.type) {
                case 'video':
                    this.media = this.$container.append('<video id="' + id + '" type="video/mp4" class="mejs-wellcome" src="' + uri + '" controls="controls" preload="none" poster="' + poster + '"></video>');

                    this.player = new MediaElementPlayer("#" + id, {
                        plugins: ['flash'],
                        alwaysShowControls: false,
                        autosizeProgress: false,
                        success: function (media) {
                            media.addEventListener('canplay', function (e) {
                                that.resize();
                            });

                            media.addEventListener('play', function (e) {
                            });

                            media.addEventListener('pause', function (e) {
                                if (Math.floor(that.player.media.currentTime) != Math.floor(that.player.media.duration)) {
                                }
                            });

                            media.addEventListener('ended', function (e) {
                            });

                            try  {
                                that.player.load();
                            } catch (e) {
                            }
                        }
                    });
                    break;
                case 'audio':
                    this.media = this.$container.append('<audio id="' + id + '" type="audio/mp3" class="mejs-wellcome" src="' + uri + '" controls="controls" preload="none" poster="' + poster + '"></audio>');

                    this.player = new MediaElementPlayer("#" + id, {
                        plugins: ['flash'],
                        alwaysShowControls: false,
                        autosizeProgress: false,
                        defaultVideoWidth: that.mediaWidth,
                        defaultVideoHeight: that.mediaHeight,
                        success: function (media) {
                            media.addEventListener('canplay', function (e) {
                                that.resize();
                            });

                            media.addEventListener('play', function (e) {
                            });

                            media.addEventListener('pause', function (e) {
                                if (Math.floor(that.player.media.currentTime) != Math.floor(that.player.media.duration)) {
                                }
                            });

                            media.addEventListener('ended', function (e) {
                            });

                            try  {
                                that.player.load();
                            } catch (e) {
                            }
                        }
                    });
                    break;
            }

            try  {
                this.player.load();
            } catch (e) {
            }

            this.resize();
        };

        MediaElementCenterPanel.prototype.getPlayer = function () {
            return this.player;
        };

        MediaElementCenterPanel.prototype.resize = function () {
            _super.prototype.resize.call(this);

            if (window.BrowserDetect.browser == 'Firefox' && window.BrowserDetect.version < 13) {
                this.$container.width(this.mediaWidth);
                this.$container.height(this.mediaHeight);
            } else {
                var size = utils.Utils.fitRect(this.mediaWidth, this.mediaHeight, this.$content.width(), this.$content.height());

                this.$container.height(size.height);
                this.$container.width(size.width);
            }

            var left = Math.floor((this.$content.width() - this.$container.width()) / 2);
            var top = Math.floor((this.$content.height() - this.$container.height()) / 2);

            this.$container.css({
                'left': left,
                'top': top
            });

            this.$title.ellipsisFill(this.title);
        };
        return MediaElementCenterPanel;
    })(baseCenter.CenterPanel);
    exports.MediaElementCenterPanel = MediaElementCenterPanel;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-mediaelement-extension/embedDialogue',["require", "exports", "../../modules/coreplayer-dialogues-module/embedDialogue"], function(require, exports, __embed__) {
    
    
    
    var embed = __embed__;
    

    var EmbedDialogue = (function (_super) {
        __extends(EmbedDialogue, _super);
        function EmbedDialogue() {
            _super.apply(this, arguments);
        }
        EmbedDialogue.prototype.create = function () {
            this.setConfig('embedDialogue');

            _super.prototype.create.call(this);
        };

        EmbedDialogue.prototype.formatCode = function () {
            this.code = (this.provider).getEmbedScript(this.currentWidth, this.currentHeight, null, this.options.embedTemplate);

            this.$code.val(this.code);
        };

        EmbedDialogue.prototype.resize = function () {
            _super.prototype.resize.call(this);
        };
        return EmbedDialogue;
    })(embed.EmbedDialogue);
    exports.EmbedDialogue = EmbedDialogue;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-mediaelement-extension/extension',["require", "exports", "../../modules/coreplayer-shared-module/baseExtension", "../../utils", "../../modules/coreplayer-shared-module/baseProvider", "../../modules/coreplayer-shared-module/shell", "../../modules/coreplayer-shared-module/headerPanel", "../../modules/coreplayer-mediaelementcenterpanel-module/mediaelementCenterPanel", "../../modules/coreplayer-moreinforightpanel-module/moreInfoRightPanel", "../../modules/coreplayer-shared-module/footerPanel", "../../modules/coreplayer-dialogues-module/helpDialogue", "./embedDialogue"], function(require, exports, __baseExtension__, __utils__, __baseProvider__, __shell__, __header__, __center__, __right__, __footer__, __help__, __embed__) {
    var baseExtension = __baseExtension__;
    var utils = __utils__;
    var baseProvider = __baseProvider__;
    
    var shell = __shell__;
    var header = __header__;
    var center = __center__;
    var right = __right__;
    var footer = __footer__;
    var help = __help__;
    var embed = __embed__;
    

    var Extension = (function (_super) {
        __extends(Extension, _super);
        function Extension(provider) {
            _super.call(this, provider);
        }
        Extension.prototype.create = function () {
            _super.prototype.create.call(this);

            $(window).bind('enterfullscreen', function () {
                $.publish(baseExtension.BaseExtension.TOGGLE_FULLSCREEN);
            });

            $(window).bind('exitfullscreen', function () {
                $.publish(baseExtension.BaseExtension.TOGGLE_FULLSCREEN);
            });

            $.subscribe(footer.FooterPanel.EMBED, function (e) {
                $.publish(embed.EmbedDialogue.SHOW_EMBED_DIALOGUE);
            });

            this.createModules();

            this.setParams();

            $.publish(baseExtension.BaseExtension.RESIZE);

            this.viewMedia();
        };

        Extension.prototype.createModules = function () {
            this.headerPanel = new header.HeaderPanel(shell.Shell.$headerPanel);

            this.centerPanel = new center.MediaElementCenterPanel(shell.Shell.$centerPanel);
            this.rightPanel = new right.MoreInfoRightPanel(shell.Shell.$rightPanel);
            this.footerPanel = new footer.FooterPanel(shell.Shell.$footerPanel);

            this.$helpDialogue = utils.Utils.createDiv('overlay help');
            shell.Shell.$overlays.append(this.$helpDialogue);
            this.helpDialogue = new help.HelpDialogue(this.$helpDialogue);

            this.$embedDialogue = utils.Utils.createDiv('overlay embed');
            shell.Shell.$overlays.append(this.$embedDialogue);
            this.embedDialogue = new embed.EmbedDialogue(this.$embedDialogue);
        };

        Extension.prototype.setParams = function () {
            this.setParam(baseProvider.params.assetSequenceIndex, this.provider.assetSequenceIndex);
        };

        Extension.prototype.viewMedia = function () {
            var _this = this;
            var asset = this.getAssetByIndex(0);

            this.viewAsset(0, function () {
                $.publish(Extension.OPEN_MEDIA, [asset.fileUri]);

                _this.setParam(baseProvider.params.assetIndex, 0);
            });
        };
        Extension.OPEN_MEDIA = 'onOpenMedia';
        return Extension;
    })(baseExtension.BaseExtension);
    exports.Extension = Extension;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('extensions/coreplayer-mediaelement-extension/provider',["require", "exports", "../../modules/coreplayer-shared-module/baseProvider", "../../utils"], function(require, exports, __baseProvider__, __utils__) {
    var baseProvider = __baseProvider__;
    var utils = __utils__;
    

    var Provider = (function (_super) {
        __extends(Provider, _super);
        function Provider(config, pkg) {
            _super.call(this, config, pkg);

            this.config.options = $.extend(true, this.options, {
                timestampUris: true
            }, config.options);
        }
        Provider.prototype.getEmbedScript = function (width, height, embedUri, embedTemplate) {
            var baseUri = embedUri ? embedUri : this.options.embedUri || this.options.dataBaseUri || "";
            var template = embedTemplate ? embedTemplate : this.options.embedTemplate;
            var script = String.prototype.format(template, baseUri, this.dataUri, this.assetSequenceIndex, width, height, this.embedScriptUri);

            return script;
        };

        Provider.prototype.addTimestamp = function (uri) {
            return uri + "?t=" + utils.Utils.getTimeStamp();
        };
        return Provider;
    })(baseProvider.BaseProvider);
    exports.Provider = Provider;
});

require.config({
    paths: {
        'jquery': 'js/jquery-1.10.2.min',
        'plugins': 'js/jquery.plugins',
        'pubsub': 'js/pubsub',
        'jsviews': 'js/jsviews.min',
        'yepnope': 'js/yepnope.1.5.4-min',
        'yepnopecss': 'js/yepnope.css',
        'openseadragon': 'modules/coreplayer-seadragoncenterpanel-module/js/openseadragon.min',
        'mediaelement': 'modules/coreplayer-mediaelementcenterpanel-module/js/mediaelement-and-player'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        plugins: {
            deps: ['jquery']
        },
        pubsub: {
            deps: ['jquery']
        },
        jsviews: {
            deps: ['jquery']
        },
        yepnopecss: {
            deps: ['yepnope']
        },
        mediaelement: {
            deps: ['jquery']
        }
    }
});

require([
    'jquery',
    'plugins',
    'pubsub',
    'jsviews',
    'yepnope',
    'yepnopecss',
    'openseadragon',
    'mediaelement',
    'bootstrapper',
    'extensions/coreplayer-seadragon-extension/extension',
    'extensions/coreplayer-seadragon-extension/provider',
    'extensions/coreplayer-mediaelement-extension/extension',
    'extensions/coreplayer-mediaelement-extension/provider'
], function ($, plugins, pubsub, jsviews, yepnope, yepnopecss, openseadragon, mediaelement, bootstrapper, seadragonExtension, seadragonProvider, mediaelementExtension, mediaelementProvider) {
    var extensions = {};

    extensions['seadragon/dzi'] = {
        type: seadragonExtension.Extension,
        provider: seadragonProvider.Provider,
        config:"js/coreplayer-seadragon-extension-config.js",
        css:"css/coreplayer-seadragon-extension.css"
    };

    extensions['video/mp4'] = {
        type: mediaelementExtension.Extension,
        provider: mediaelementProvider.Provider,
        config:"js/coreplayer-mediaelement-extension-config.js",
        css:"css/coreplayer-mediaelement-extension.css"
    };

    extensions['audio/mp3'] = {
        type: mediaelementExtension.Extension,
        provider: mediaelementProvider.Provider,
        config:"js/coreplayer-mediaelement-extension-config.js",
        css:"css/coreplayer-mediaelement-extension.css"
    };

    new bootstrapper(extensions);
});

define("app", function(){});
