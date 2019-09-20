'use strict';
var h, aa = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}, ba = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
}, ca = function(a) {
    for (var b, c = []; !(b = a.next()).done; )
        c.push(b.value);
    return c
}, da = "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
}
    , ea;
if ("function" == typeof Object.setPrototypeOf)
    ea = Object.setPrototypeOf;
else {
    var fa;
    a: {
        var ha = {
            ck: !0
        }
            , ia = {};
        try {
            ia.__proto__ = ha;
            fa = ia.ck;
            break a
        } catch (a) {}
        fa = !1
    }
    ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
}
var ja = ea
    , ka = function(a, b) {
    a.prototype = da(b.prototype);
    a.prototype.constructor = a;
    if (ja)
        ja(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else
                    a[c] = b[c];
    a.D = b.prototype
}
    , la = function(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
            return {
                Pi: e,
                Lj: f
            }
    }
    return {
        Pi: -1,
        Lj: void 0
    }
}
    , ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
}
    , na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this
    , oa = function(a, b) {
    if (b) {
        var c = na;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ma(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
};
oa("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).Pi
    }
});
var pa = function(a, b, c) {
    if (null == a)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
};
oa("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "endsWith");
        b += "";
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e])
                return !1;
        return 0 >= e
    }
});
oa("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).Lj
    }
});
oa("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "startsWith");
        b += "";
        var e = d.length
            , f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; )
            if (d[c++] != b[g++])
                return !1;
        return g >= f
    }
});
oa("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
        var c = pa(this, null, "repeat");
        if (0 > b || 1342177279 < b)
            throw new RangeError("Invalid count value");
        b |= 0;
        for (var d = ""; b; )
            if (b & 1 && (d += c),
                b >>>= 1)
                c += c;
        return d
    }
});
var qa = function() {
    qa = function() {}
    ;
    na.Symbol || (na.Symbol = ra)
}
    , sa = function(a, b) {
    this.a = a;
    ma(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
    })
};
sa.prototype.toString = function() {
    return this.a
}
;
var ra = function() {
    function a(c) {
        if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
        return new sa("jscomp_symbol_" + (c || "") + "_" + b++,c)
    }
    var b = 0;
    return a
}()
    , ua = function() {
    qa();
    var a = na.Symbol.iterator;
    a || (a = na.Symbol.iterator = na.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && ma(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return ta(aa(this))
        }
    });
    ua = function() {}
}
    , ta = function(a) {
    ua();
    a = {
        next: a
    };
    a[na.Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
    , va = function(a, b) {
    ua();
    a instanceof String && (a += "");
    var c = 0
        , d = {
        next: function() {
            if (c < a.length) {
                var e = c++;
                return {
                    value: b(e, a[e]),
                    done: !1
                }
            }
            d.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return d.next()
        }
    };
    d[Symbol.iterator] = function() {
        return d
    }
    ;
    return d
};
oa("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return va(this, function(b) {
            return b
        })
    }
});
oa("Array.prototype.values", function(a) {
    return a ? a : function() {
        return va(this, function(b, c) {
            return c
        })
    }
});
oa("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(k) {
            return k
        }
        ;
        var e = []
            , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length,
                     g = 0; g < f; g++)
                e.push(c.call(d, b[g], g));
        return e
    }
});
oa("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
oa("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
oa("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
    }
});
var wa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
oa("WeakMap", function(a) {
    function b() {}
    function c(l) {
        var m = typeof l;
        return "object" === m && null !== l || "function" === m
    }
    function d(l) {
        if (!wa(l, f)) {
            var m = new b;
            ma(l, f, {
                value: m
            })
        }
    }
    function e(l) {
        var m = Object[l];
        m && (Object[l] = function(q) {
                if (q instanceof b)
                    return q;
                d(q);
                return m(q)
            }
        )
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var l = Object.seal({})
                , m = Object.seal({})
                , q = new a([[l, 2], [m, 3]]);
            if (2 != q.get(l) || 3 != q.get(m))
                return !1;
            q.delete(l);
            q.set(m, 4);
            return !q.has(l) && 4 == q.get(m)
        } catch (r) {
            return !1
        }
    }())
        return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0
        , k = function(l) {
        this.qa = (g += Math.random() + 1).toString();
        if (l) {
            l = ba(l);
            for (var m; !(m = l.next()).done; )
                m = m.value,
                    this.set(m[0], m[1])
        }
    };
    k.prototype.set = function(l, m) {
        if (!c(l))
            throw Error("Invalid WeakMap key");
        d(l);
        if (!wa(l, f))
            throw Error("WeakMap key fail: " + l);
        l[f][this.qa] = m;
        return this
    }
    ;
    k.prototype.get = function(l) {
        return c(l) && wa(l, f) ? l[f][this.qa] : void 0
    }
    ;
    k.prototype.has = function(l) {
        return c(l) && wa(l, f) && wa(l[f], this.qa)
    }
    ;
    k.prototype.delete = function(l) {
        return c(l) && wa(l, f) && wa(l[f], this.qa) ? delete l[f][this.qa] : !1
    }
    ;
    return k
});
oa("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            wa(b, d) && c.push(b[d]);
        return c
    }
});
oa("Map", function(a) {
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
            return !1;
        try {
            var k = Object.seal({
                x: 4
            })
                , l = new a(ba([[k, "s"]]));
            if ("s" != l.get(k) || 1 != l.size || l.get({
                x: 4
            }) || l.set({
                x: 4
            }, "t") != l || 2 != l.size)
                return !1;
            var m = l.entries()
                , q = m.next();
            if (q.done || q.value[0] != k || "s" != q.value[1])
                return !1;
            q = m.next();
            return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
        } catch (r) {
            return !1
        }
    }())
        return a;
    ua();
    var b = new WeakMap
        , c = function(k) {
        this.b = {};
        this.a = f();
        this.size = 0;
        if (k) {
            k = ba(k);
            for (var l; !(l = k.next()).done; )
                l = l.value,
                    this.set(l[0], l[1])
        }
    };
    c.prototype.set = function(k, l) {
        k = 0 === k ? 0 : k;
        var m = d(this, k);
        m.list || (m.list = this.b[m.id] = []);
        m.sb ? m.sb.value = l : (m.sb = {
            next: this.a,
            Lc: this.a.Lc,
            head: this.a,
            key: k,
            value: l
        },
            m.list.push(m.sb),
            this.a.Lc.next = m.sb,
            this.a.Lc = m.sb,
            this.size++);
        return this
    }
    ;
    c.prototype.delete = function(k) {
        k = d(this, k);
        return k.sb && k.list ? (k.list.splice(k.index, 1),
        k.list.length || delete this.b[k.id],
            k.sb.Lc.next = k.sb.next,
            k.sb.next.Lc = k.sb.Lc,
            k.sb.head = null,
            this.size--,
            !0) : !1
    }
    ;
    c.prototype.clear = function() {
        this.b = {};
        this.a = this.a.Lc = f();
        this.size = 0
    }
    ;
    c.prototype.has = function(k) {
        return !!d(this, k).sb
    }
    ;
    c.prototype.get = function(k) {
        return (k = d(this, k).sb) && k.value
    }
    ;
    c.prototype.entries = function() {
        return e(this, function(k) {
            return [k.key, k.value]
        })
    }
    ;
    c.prototype.keys = function() {
        return e(this, function(k) {
            return k.key
        })
    }
    ;
    c.prototype.values = function() {
        return e(this, function(k) {
            return k.value
        })
    }
    ;
    c.prototype.forEach = function(k, l) {
        for (var m = this.entries(), q; !(q = m.next()).done; )
            q = q.value,
                k.call(l, q[1], q[0], this)
    }
    ;
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(k, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g,
            b.set(l, m)) : m = "p_" + l;
        var q = k.b[m];
        if (q && wa(k.b, m))
            for (k = 0; k < q.length; k++) {
                var r = q[k];
                if (l !== l && r.key !== r.key || l === r.key)
                    return {
                        id: m,
                        list: q,
                        index: k,
                        sb: r
                    }
            }
        return {
            id: m,
            list: q,
            index: -1,
            sb: void 0
        }
    }
        , e = function(k, l) {
        var m = k.a;
        return ta(function() {
            if (m) {
                for (; m.head != k.a; )
                    m = m.Lc;
                for (; m.next != m.head; )
                    return m = m.next,
                        {
                            done: !1,
                            value: l(m)
                        };
                m = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }
        , f = function() {
        var k = {};
        return k.Lc = k.next = k.head = k
    }
        , g = 0;
    return c
});
var xa = xa || {}
    , n = this || self
    , p = function(a) {
    return void 0 !== a
}
    , t = function(a) {
    return "string" == typeof a
}
    , ya = function(a) {
    return "number" == typeof a
}
    , za = function(a, b) {
    a = a.split(".");
    var c = n;
    a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
        !a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
}
    , Ca = function(a) {
    if (a && a != n)
        return Aa(a.document);
    null === Ba && (Ba = Aa(n.document));
    return Ba
}
    , Da = /^[\w+/_-]+[=]{0,2}$/
    , Ba = null
    , Aa = function(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Da.test(a) ? a : ""
}
    , Ea = function(a, b) {
    a = a.split(".");
    b = b || n;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]],
        null == b)
            return null;
    return b
}
    , Fa = function() {}
    , Ga = function(a) {
    a.gh = void 0;
    a.M = function() {
        return a.gh ? a.gh : a.gh = new a
    }
}
    , Ha = function(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function"
        } else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b
}
    , Ia = function(a) {
    return "array" == Ha(a)
}
    , Ka = function(a) {
    var b = Ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
    , La = function(a) {
    return "function" == Ha(a)
}
    , Ma = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
    , Pa = function(a) {
    return a[Na] || (a[Na] = ++Oa)
}
    , Na = "closure_uid_" + (1E9 * Math.random() >>> 0)
    , Oa = 0
    , Ra = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
    , Sa = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
    , v = function(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ra : v = Sa;
    return v.apply(null, arguments)
}
    , Ta = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}
    , Ua = Date.now || function() {
    return +new Date
}
    , w = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
var Va = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, Va);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
w(Va, Error);
Va.prototype.name = "CustomError";
var Wa;
var Xa = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
    Va.call(this, c + a[d])
};
w(Xa, Va);
Xa.prototype.name = "AssertionError";
var Ya = function(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
        e += ": " + c;
        var f = d
    } else
        a && (e += ": " + a,
            f = b);
    throw new Xa("" + e,f || []);
}
    , x = function(a, b, c) {
    a || Ya("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , Za = function(a, b) {
    throw new Xa("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
}
    , $a = function(a, b, c) {
    ya(a) || Ya("Expected number but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , ab = function(a, b, c) {
    t(a) || Ya("Expected string but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , bb = function(a, b, c) {
    La(a) || Ya("Expected function but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , cb = function(a, b, c) {
    Ma(a) || Ya("Expected object but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , db = function(a, b, c) {
    Ia(a) || Ya("Expected array but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , eb = function(a, b, c) {
    "boolean" == typeof a || Ya("Expected boolean but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , fb = function(a, b, c) {
    Ma(a) && 1 == a.nodeType || Ya("Expected Element but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
    , hb = function(a, b, c, d) {
    a instanceof b || Ya("Expected instanceof %s but got %s.", [gb(b), gb(a)], c, Array.prototype.slice.call(arguments, 3));
    return a
}
    , gb = function(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
};
var ib = function(a) {
    return a[a.length - 1]
}
    , jb = Array.prototype.indexOf ? function(a, b) {
        x(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (t(a))
            return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    , y = Array.prototype.forEach ? function(a, b, c) {
        x(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    , kb = Array.prototype.filter ? function(a, b) {
        x(null != a.length);
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    }
    , lb = Array.prototype.map ? function(a, b, c) {
        x(null != a.length);
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }
    , mb = Array.prototype.reduce ? function(a, b, c) {
        x(null != a.length);
        return Array.prototype.reduce.call(a, b, c)
    }
    : function(a, b, c) {
        var d = c;
        y(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    , nb = Array.prototype.some ? function(a, b) {
        x(null != a.length);
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    , ob = Array.prototype.every ? function(a, b) {
        x(null != a.length);
        return Array.prototype.every.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a))
                return !1;
        return !0
    }
    , pb = function(a, b) {
    var c = 0;
    y(a, function(d, e, f) {
        b.call(void 0, d, e, f) && ++c
    }, void 0);
    return c
}
    , qb = function(a, b) {
    a: {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
}
    , rb = function(a, b) {
    a: {
        for (var c = t(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) {
                b = d;
                break a
            }
        b = -1
    }
    return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
}
    , sb = function(a, b) {
    return 0 <= jb(a, b)
}
    , tb = function(a, b) {
    sb(a, b) || a.push(b)
}
    , vb = function(a, b) {
    b = jb(a, b);
    var c;
    (c = 0 <= b) && ub(a, b);
    return c
}
    , ub = function(a, b) {
    x(null != a.length);
    Array.prototype.splice.call(a, b, 1)
}
    , wb = function(a) {
    return Array.prototype.concat.apply([], arguments)
}
    , xb = function(a) {
    return Array.prototype.concat.apply([], arguments)
}
    , yb = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
    , zb = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Ka(d)) {
            var e = a.length || 0
                , f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++)
                a[e + g] = d[g]
        } else
            a.push(d)
    }
}
    , Bb = function(a, b, c, d) {
    x(null != a.length);
    Array.prototype.splice.apply(a, Ab(arguments, 1))
}
    , Ab = function(a, b, c) {
    x(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
}
    , Cb = function(a, b) {
    return wb.apply([], lb(a, b, void 0))
};
var Fb = function(a) {
    var b = Db(a);
    b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && Za("Argument is not a Location (or a non-Element mock); got: %s", Eb(a))
}
    , Gb = function(a, b) {
    var c = Db(a);
    c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || Za("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Eb(a)))
}
    , Eb = function(a) {
    if (Ma(a))
        try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        }
    else
        return void 0 === a ? "undefined" : null === a ? "null" : typeof a
}
    , Db = function(a) {
    try {
        var b = a && a.ownerDocument
            , c = b && (b.defaultView || b.parentWindow);
        c = c || n;
        if (c.Element && c.Location)
            return c
    } catch (d) {}
    return null
};
var Hb = function() {
    return null
}
    , Ib = function(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
}
    , Jb = function(a) {
    var b = !1, c;
    return function() {
        b || (c = a(),
            b = !0);
        return c
    }
};
var Kb = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}
    , Lb = function(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a))
            return !0;
    return !1
}
    , Ob = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}
    , Pb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}
    , Qb = function(a, b) {
    return null !== a && b in a
}
    , Rb = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
}
    , Tb = function() {
    var a = Sb, b;
    for (b in a)
        return !1;
    return !0
}
    , Ub = function(a, b, c) {
    if (null !== a && b in a)
        throw Error('The object already contains the key "' + b + '"');
    a[b] = c
}
    , Vb = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
    , Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , Xb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Wb.length; f++)
            c = Wb[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
    , Yb = function(a) {
    var b = arguments.length;
    if (1 == b && Ia(arguments[0]))
        return Yb.apply(null, arguments[0]);
    if (b % 2)
        throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)
        c[arguments[d]] = arguments[d + 1];
    return c
}
    , Zb = function(a) {
    var b = arguments.length;
    if (1 == b && Ia(arguments[0]))
        return Zb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]] = !0;
    return c
};
var $b = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var cc = function(a, b) {
    this.a = a === ac && b || "";
    this.b = bc
};
cc.prototype.vc = !0;
cc.prototype.vb = function() {
    return this.a
}
;
cc.prototype.toString = function() {
    return "Const{" + this.a + "}"
}
;
var dc = function(a) {
    if (a instanceof cc && a.constructor === cc && a.b === bc)
        return a.a;
    Za("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}
    , ec = function(a) {
    return new cc(ac,a)
}
    , bc = {}
    , ac = {}
    , fc = ec("");
var gc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/
    , hc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/
    , ic = /^http:\/\/.*/
    , jc = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i
    , kc = function(a) {
    return jc.test(a)
}
    , lc = /\s+/
    , mc = /[\d\u06f0-\u06f9]/
    , nc = function(a) {
    var b = 0
        , c = 0
        , d = !1;
    a = a.split(lc);
    for (var e = 0; e < a.length; e++) {
        var f = a[e];
        hc.test(f) ? (b++,
            c++) : ic.test(f) ? d = !0 : gc.test(f) ? c++ : mc.test(f) && (d = !0)
    }
    return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
};
var pc = function() {
    this.a = "";
    this.b = oc
};
h = pc.prototype;
h.vc = !0;
h.vb = function() {
    return this.a.toString()
}
;
h.eh = !0;
h.Vc = function() {
    return 1
}
;
h.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}"
}
;
var rc = function(a) {
    return qc(a).toString()
}
    , qc = function(a) {
    if (a instanceof pc && a.constructor === pc && a.b === oc)
        return a.a;
    Za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ha(a));
    return "type_error:TrustedResourceUrl"
}
    , sc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
    , oc = {}
    , tc = function(a) {
    var b = new pc;
    b.a = a;
    return b
}
    , uc = function(a, b, c) {
    if (null == c)
        return b;
    if (t(c))
        return c ? a + encodeURIComponent(c) : "";
    for (var d in c) {
        var e = c[d];
        e = Ia(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g && (b || (b = a),
                b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
        }
    }
    return b
};
var vc = function(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}
    , wc = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
}
    , xc = function(a) {
    return /^[\s\xa0]*$/.test(a)
}
    , yc = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    , zc = function(a, b) {
    a = String(a).toLowerCase();
    b = String(b).toLowerCase();
    return a < b ? -1 : a == b ? 0 : 1
}
    , Ac = function(a) {
    return a.replace(/(\r\n|\r|\n)/g, "<br>")
}
    , Ic = function(a, b) {
    if (b)
        a = a.replace(Bc, "&amp;").replace(Cc, "&lt;").replace(Dc, "&gt;").replace(Ec, "&quot;").replace(Fc, "&#39;").replace(Gc, "&#0;");
    else {
        if (!Hc.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Bc, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Cc, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Dc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Ec, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Fc, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Gc, "&#0;"))
    }
    return a
}
    , Bc = /&/g
    , Cc = /</g
    , Dc = />/g
    , Ec = /"/g
    , Fc = /'/g
    , Gc = /\x00/g
    , Hc = /[\x00&<>"']/
    , Jc = function(a, b) {
    return -1 != a.indexOf(b)
}
    , Lc = function(a, b) {
    var c = 0;
    a = yc(String(a)).split(".");
    b = yc(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || ""
            , g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length)
                break;
            c = Kc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Kc(0 == f[2].length, 0 == g[2].length) || Kc(f[2], g[2]);
            f = f[3];
            g = g[3]
        } while (0 == c)
    }
    return c
}
    , Kc = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
var Nc = function() {
    this.a = "";
    this.b = Mc
};
h = Nc.prototype;
h.vc = !0;
h.vb = function() {
    return this.a.toString()
}
;
h.eh = !0;
h.Vc = function() {
    return 1
}
;
h.toString = function() {
    return "SafeUrl{" + this.a + "}"
}
;
var Pc = function(a) {
    return Oc(a).toString()
}
    , Oc = function(a) {
    if (a instanceof Nc && a.constructor === Nc && a.b === Mc)
        return a.a;
    Za("expected object of type SafeUrl, got '" + a + "' of type " + Ha(a));
    return "type_error:SafeUrl"
}
    , Qc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i
    , Rc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i
    , Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
    , Uc = function(a) {
    if (a instanceof Nc)
        return a;
    a = "object" == typeof a && a.vc ? a.vb() : String(a);
    Sc.test(a) || (a = "about:invalid#zClosurez");
    return Tc(a)
}
    , Vc = function(a, b) {
    if (a instanceof Nc)
        return a;
    a = "object" == typeof a && a.vc ? a.vb() : String(a);
    if (b && /^data:/i.test(a)) {
        b = a.replace(/(%0A|%0D)/g, "");
        var c = b.match(Rc);
        c = c && Qc.test(c[1]);
        b = Tc(c ? b : "about:invalid#zClosurez");
        if (b.vb() == a)
            return b
    }
    x(Sc.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
    return Tc(a)
}
    , Mc = {}
    , Tc = function(a) {
    var b = new Nc;
    b.a = a;
    return b
};
Tc("about:blank");
var Xc = function() {
    this.a = "";
    this.b = Wc
};
Xc.prototype.vc = !0;
var Wc = {};
Xc.prototype.vb = function() {
    return this.a
}
;
Xc.prototype.toString = function() {
    return "SafeStyle{" + this.a + "}"
}
;
var Yc = function(a) {
    if (a instanceof Xc && a.constructor === Xc && a.b === Wc)
        return a.a;
    Za("expected object of type SafeStyle, got '" + a + "' of type " + Ha(a));
    return "type_error:SafeStyle"
}
    , Zc = function(a) {
    var b = new Xc;
    b.a = a;
    return b
}
    , $c = Zc("")
    , bd = function(a) {
    var b = "", c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        null != d && (d = Ia(d) ? lb(d, ad).join(" ") : ad(d),
            b += c + ":" + d + ";")
    }
    return b ? Zc(b) : $c
}
    , ad = function(a) {
    if (a instanceof Nc)
        return 'url("' + Pc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof cc ? dc(a) : cd(String(a));
    if (/[{;}]/.test(a))
        throw new Xa("Value does not allow [{;}], got: %s.",[a]);
    return a
}
    , cd = function(a) {
    var b = a.replace(dd, "$1").replace(dd, "$1").replace(ed, "url");
    if (fd.test(b)) {
        if (gd.test(a))
            return Za("String value disallows comments, got: " + a),
                "zClosurez";
        for (var c = b = !0, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
        }
        if (!b || !c)
            return Za("String value requires balanced quotes, got: " + a),
                "zClosurez";
        if (!hd(a))
            return Za("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a),
                "zClosurez"
    } else
        return Za("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a),
            "zClosurez";
    return id(a)
}
    , hd = function(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
            if (b)
                return !1;
            b = !0
        } else if ("[" == e) {
            if (!b)
                return !1;
            b = !1
        } else if (!b && !c.test(e))
            return !1
    }
    return b
}
    , fd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
    , ed = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
    , dd = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
    , gd = /\/\*/
    , id = function(a) {
    return a.replace(ed, function(b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
            f = k;
            return l
        });
        b = Uc(d).vb();
        return c + f + b + f + e
    })
};
var kd = function() {
    this.a = "";
    this.b = jd
};
kd.prototype.vc = !0;
var jd = {}
    , md = function(a, b) {
    if (Jc(a, "<"))
        throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
    a: {
        for (var d = {
            "(": ")",
            "[": "]"
        }, e = [], f = 0; f < c.length; f++) {
            var g = c[f];
            if (d[g])
                e.push(d[g]);
            else if (Rb(d, g) && e.pop() != g) {
                c = !1;
                break a
            }
        }
        c = 0 == e.length
    }
    if (!c)
        throw Error("() and [] in selector must be balanced, got: " + a);
    b instanceof Xc || (b = bd(b));
    a = a + "{" + Yc(b).replace(/</g, "\\3C ") + "}";
    return ld(a)
}
    , od = function(a) {
    var b = ""
        , c = function(d) {
        Ia(d) ? y(d, c) : b += nd(d)
    };
    y(arguments, c);
    return ld(b)
};
kd.prototype.vb = function() {
    return this.a
}
;
kd.prototype.toString = function() {
    return "SafeStyleSheet{" + this.a + "}"
}
;
var nd = function(a) {
    if (a instanceof kd && a.constructor === kd && a.b === jd)
        return a.a;
    Za("expected object of type SafeStyleSheet, got '" + a + "' of type " + Ha(a));
    return "type_error:SafeStyleSheet"
}
    , ld = function(a) {
    var b = new kd;
    b.a = a;
    return b
}
    , pd = ld("");
var qd;
a: {
    var rd = n.navigator;
    if (rd) {
        var sd = rd.userAgent;
        if (sd) {
            qd = sd;
            break a
        }
    }
    qd = ""
}
var z = function(a) {
    return Jc(qd, a)
}
    , td = function(a) {
    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
        c.push([d[1], d[2], d[3] || void 0]);
    return c
};
var ud = function() {
    return z("Trident") || z("MSIE")
}
    , vd = function() {
    return z("Firefox") || z("FxiOS")
}
    , xd = function() {
    return z("Safari") && !(wd() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || vd() || z("Silk") || z("Android"))
}
    , wd = function() {
    return (z("Chrome") || z("CriOS")) && !z("Edge")
}
    , yd = function() {
    function a(e) {
        e = qb(e, d);
        return c[e] || ""
    }
    var b = qd;
    if (!ud()) {
        b = td(b);
        var c = {};
        y(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ta(Qb, c);
        z("Opera") ? a(["Version", "Opera"]) : z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : wd() && a(["Chrome", "CriOS"])
    }
};
var Ad = function() {
    this.a = "";
    this.c = zd;
    this.b = null
};
h = Ad.prototype;
h.eh = !0;
h.Vc = function() {
    return this.b
}
;
h.vc = !0;
h.vb = function() {
    return this.a.toString()
}
;
h.toString = function() {
    return "SafeHtml{" + this.a + "}"
}
;
var Bd = function(a) {
    if (a instanceof Ad && a.constructor === Ad && a.c === zd)
        return a.a;
    Za("expected object of type SafeHtml, got '" + a + "' of type " + Ha(a));
    return "type_error:SafeHtml"
}
    , Dd = function(a) {
    if (a instanceof Ad)
        return a;
    var b = "object" == typeof a
        , c = null;
    b && a.eh && (c = a.Vc());
    return Cd(Ic(b && a.vc ? a.vb() : String(a)), c)
}
    , Ed = function(a) {
    if (a instanceof Ad)
        return a;
    a = Dd(a);
    return Cd(Ac(Bd(a).toString()), a.Vc())
}
    , Fd = /^[a-zA-Z0-9-]+$/
    , Gd = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
}
    , Hd = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
}
    , Jd = function(a, b, c) {
    var d = String(a);
    if (!Fd.test(d))
        throw Error("Invalid tag name <" + d + ">.");
    if (d.toUpperCase()in Hd)
        throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
    return Id(String(a), b, c)
}
    , Ld = function(a) {
    var b = Dd(Kd)
        , c = b.Vc()
        , d = []
        , e = function(f) {
        Ia(f) ? y(f, e) : (f = Dd(f),
            d.push(Bd(f).toString()),
            f = f.Vc(),
            0 == c ? c = f : 0 != f && c != f && (c = null))
    };
    y(a, e);
    return Cd(d.join(Bd(b).toString()), c)
}
    , Md = function(a) {
    return Ld(Array.prototype.slice.call(arguments))
}
    , zd = {}
    , Cd = function(a, b) {
    return Nd(a, b)
}
    , Nd = function(a, b) {
    var c = new Ad;
    c.a = a;
    c.b = b;
    return c
}
    , Id = function(a, b, c) {
    var d = null
        , e = "";
    if (b)
        for (l in b) {
            if (!Fd.test(l))
                throw Error('Invalid attribute name "' + l + '".');
            var f = b[l];
            if (null != f) {
                var g = a;
                var k = l;
                if (f instanceof cc)
                    f = dc(f);
                else if ("style" == k.toLowerCase()) {
                    if (!Ma(f))
                        throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                    f instanceof Xc || (f = bd(f));
                    f = Yc(f)
                } else {
                    if (/^on/i.test(k))
                        throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + f + '" given.');
                    if (k.toLowerCase()in Gd)
                        if (f instanceof pc)
                            f = rc(f);
                        else if (f instanceof Nc)
                            f = Pc(f);
                        else if (t(f))
                            f = Uc(f).vb();
                        else
                            throw Error('Attribute "' + k + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                }
                f.vc && (f = f.vb());
                x(t(f) || ya(f), "String or number value expected, got " + typeof f + " with value: " + f);
                k = k + '="' + Ic(String(f)) + '"';
                e += " " + k
            }
        }
    var l = "<" + a + e;
    null != c ? Ia(c) || (c = [c]) : c = [];
    !0 === $b[a.toLowerCase()] ? (x(!c.length, "Void tag <" + a + "> does not allow content."),
        l += ">") : (d = Md(c),
        l += ">" + Bd(d).toString() + "</" + a + ">",
        d = d.Vc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return Nd(l, d)
};
Nd("<!DOCTYPE html>", 0);
var Kd = Nd("", 0)
    , Od = Nd("<br>", 0);
var Pd = function(a, b, c) {
    ab(dc(a), "must provide justification");
    x(!xc(dc(a)), "must provide non-empty justification");
    return Nd(b, c || null)
}
    , Qd = function(a) {
    var b = ec("Output of CSS sanitizer");
    ab(dc(b), "must provide justification");
    x(!xc(dc(b)), "must provide non-empty justification");
    return Zc(a)
};
var Rd = {
    MATH: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
}
    , Sd = Jb(function() {
    if ("undefined" === typeof document)
        return !1;
    var a = document.createElement("div")
        , b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild)
        return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = Bd(Kd);
    return !b.parentElement
})
    , Td = function(a, b) {
    if (Sd())
        for (; a.lastChild; )
            a.removeChild(a.lastChild);
    a.innerHTML = Bd(b)
}
    , Ud = function(a, b) {
    if (Rd[a.tagName.toUpperCase()])
        throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    Td(a, b)
}
    , Vd = function(a, b) {
    Gb(a, "HTMLAnchorElement");
    b = b instanceof Nc ? b : Vc(b);
    a.href = Oc(b)
}
    , Wd = function(a, b) {
    Gb(a, "HTMLIFrameElement");
    a.src = rc(b)
}
    , Xd = function(a, b) {
    Gb(a, "HTMLScriptElement");
    a.src = qc(b);
    (b = Ca()) && a.setAttribute("nonce", b)
}
    , Yd = function(a, b) {
    Fb(a);
    b = b instanceof Nc ? b : Vc(b);
    a.href = Oc(b)
}
    , Zd = function(a, b) {
    Fb(a);
    b = b instanceof Nc ? b : Vc(b);
    a.replace(Oc(b))
}
    , $d = function(a, b, c) {
    a = a instanceof Nc ? a : Vc(a);
    (b || n).open(Oc(a), c ? dc(c) : "", void 0, void 0)
};
var ae = function(a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n")
}
    , be = function(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
    , ce = function(a) {
    return encodeURIComponent(String(a))
}
    , de = function(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}
    , ee = function(a) {
    return a = Ic(a, void 0)
}
    , he = function(a) {
    return Jc(a, "&") ? "document"in n ? fe(a) : ge(a) : a
}
    , fe = function(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = n.document.createElement("div");
    return a.replace(ie, function(d, e) {
        var f = b[d];
        if (f)
            return f;
        "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
        isNaN(e) || (f = String.fromCharCode(e)));
        f || (Ud(c, Pd(ec("Single HTML entity."), d + " ")),
            f = c.firstChild.nodeValue.slice(0, -1));
        return b[d] = f
    })
}
    , ge = function(a) {
    return a.replace(/&([^;]+);/g, function(b, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                    isNaN(c)) ? b : String.fromCharCode(c)
        }
    })
}
    , ie = /&([^;\s<&]+);?/g
    , je = function(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
    , ke = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    , le = function(a) {
    return null == a ? "" : String(a)
}
    , me = function(a) {
    return Array.prototype.join.call(arguments, "")
}
    , ne = function(a) {
    var b = Number(a);
    return 0 == b && xc(a) ? NaN : b
}
    , oe = function(a) {
    return String(a).replace(/\-([a-z])/g, function(b, c) {
        return c.toUpperCase()
    })
}
    , pe = function(a) {
    var b = t(void 0) ? je(void 0) : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(c, d, e) {
        return d + e.toUpperCase()
    })
};
var qe = function() {
    return z("iPhone") && !z("iPod") && !z("iPad")
}
    , re = function() {
    return qe() || z("iPad") || z("iPod")
}
    , se = function(a) {
    var b = qd
        , c = "";
    z("Windows") ? (c = /Windows (?:NT|Phone) ([0-9.]+)/,
        c = (b = c.exec(b)) ? b[1] : "0.0") : re() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
        c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : z("Macintosh") ? (c = /Mac OS X ([0-9_.]+)/,
        c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : Jc(qd.toLowerCase(), "kaios") ? (c = /(?:KaiOS)\/(\S+)/i,
        c = (b = c.exec(b)) && b[1]) : z("Android") ? (c = /Android\s+([^\);]+)(\)|;)/,
        c = (b = c.exec(b)) && b[1]) : z("CrOS") && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
        c = (b = c.exec(b)) && b[1]);
    return 0 <= Lc(c || "", a)
};
var te = function(a) {
    te[" "](a);
    return a
};
te[" "] = Fa;
var ue = function(a, b) {
    try {
        return te(a[b]),
            !0
    } catch (c) {}
    return !1
}
    , ve = function(a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
};
var we = z("Opera"), A = ud(), xe = z("Edge"), ye = xe || A, ze = z("Gecko") && !(Jc(qd.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"), Ae = Jc(qd.toLowerCase(), "webkit") && !z("Edge"), Ce = Ae && z("Mobile"), De = z("Macintosh"), Ee = z("Windows"), Fe = z("Android"), Ge = qe(), He = z("iPad"), Ie = z("iPod"), Je = re(), Ke = function() {
    var a = n.document;
    return a ? a.documentMode : void 0
}, Le;
a: {
    var Me = ""
        , Ne = function() {
        var a = qd;
        if (ze)
            return /rv:([^\);]+)(\)|;)/.exec(a);
        if (xe)
            return /Edge\/([\d\.]+)/.exec(a);
        if (A)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ae)
            return /WebKit\/(\S+)/.exec(a);
        if (we)
            return /(?:Version)[ \/]?(\S+)/.exec(a)
    }();
    Ne && (Me = Ne ? Ne[1] : "");
    if (A) {
        var Oe = Ke();
        if (null != Oe && Oe > parseFloat(Me)) {
            Le = String(Oe);
            break a
        }
    }
    Le = Me
}
var Pe = Le, Qe = {}, Re = function(a) {
    return ve(Qe, a, function() {
        return 0 <= Lc(Pe, a)
    })
}, Te = function(a) {
    return Number(Se) >= a
}, Ue;
Ue = n.document && A ? Ke() : void 0;
var Se = Ue;
var Ve = vd()
    , We = qe() || z("iPod")
    , Xe = z("iPad")
    , Ye = z("Android") && !(wd() || vd() || z("Opera") || z("Silk"))
    , Ze = wd()
    , $e = xd() && !re();
var af = {}
    , bf = null
    , cf = function(a, b) {
    x(Ka(a), "encodeByteArray takes an array as a parameter");
    void 0 === b && (b = 0);
    if (!bf) {
        bf = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
            var f = c.concat(d[e].split(""));
            af[e] = f;
            for (var g = 0; g < f.length; g++) {
                var k = f[g]
                    , l = bf[k];
                void 0 === l ? bf[k] = g : x(l === g)
            }
        }
    }
    b = af[b];
    c = [];
    for (d = 0; d < a.length; d += 3) {
        l = a[d];
        var m = (e = d + 1 < a.length) ? a[d + 1] : 0;
        k = (f = d + 2 < a.length) ? a[d + 2] : 0;
        g = l >> 2;
        l = (l & 3) << 4 | m >> 4;
        m = (m & 15) << 2 | k >> 6;
        k &= 63;
        f || (k = 64,
        e || (m = 64));
        c.push(b[g], b[l], b[m] || "", b[k] || "")
    }
    return c.join("")
};
var df = function() {}
    , ef = "function" == typeof Uint8Array
    , hf = function(a, b, c, d) {
    a.a = null;
    b || (b = []);
    a.w = void 0;
    a.g = -1;
    a.b = b;
    a: {
        var e = a.b.length;
        b = -1;
        if (e && (b = e - 1,
            e = a.b[b],
            !(null === e || "object" != typeof e || Ia(e) || ef && e instanceof Uint8Array))) {
            a.h = b - a.g;
            a.c = e;
            break a
        }
        -1 < c ? (a.h = Math.max(c, b + 1 - a.g),
            a.c = null) : a.h = Number.MAX_VALUE
    }
    a.m = {};
    if (d)
        for (c = 0; c < d.length; c++)
            b = d[c],
                b < a.h ? (b += a.g,
                    a.b[b] = a.b[b] || ff) : (gf(a),
                    a.c[b] = a.c[b] || ff)
}
    , ff = Object.freeze ? Object.freeze([]) : []
    , gf = function(a) {
    var b = a.h + a.g;
    a.b[b] || (a.c = a.b[b] = {})
}
    , jf = function(a, b) {
    if (b < a.h) {
        b += a.g;
        var c = a.b[b];
        return c === ff ? a.b[b] = [] : c
    }
    if (a.c)
        return c = a.c[b],
            c === ff ? a.c[b] = [] : c
}
    , kf = function(a, b) {
    a = jf(a, 1);
    return null == a ? b : a
}
    , B = function(a, b, c) {
    hb(a, df);
    b < a.h ? a.b[b + a.g] = c : (gf(a),
        a.c[b] = c);
    return a
}
    , lf = function(a, b, c) {
    a.a || (a.a = {});
    if (!a.a[c]) {
        for (var d = jf(a, c), e = [], f = 0; f < d.length; f++)
            e[f] = new b(d[f]);
        a.a[c] = e
    }
}
    , mf = function(a, b, c) {
    hb(a, df);
    a.a || (a.a = {});
    var d = c ? c.Ab() : c;
    a.a[b] = c;
    return B(a, b, d)
}
    , nf = function(a, b, c) {
    hb(a, df);
    a.a || (a.a = {});
    c = c || [];
    for (var d = [], e = 0; e < c.length; e++)
        d[e] = c[e].Ab();
    a.a[b] = c;
    return B(a, b, d)
}
    , of = function(a, b, c) {
    lf(a, c, b);
    var d = a.a[b];
    d || (d = a.a[b] = []);
    c = new c;
    a = jf(a, b);
    d.push(c);
    a.push(c.Ab());
    return c
}
    , pf = function(a) {
    if (a.a)
        for (var b in a.a) {
            var c = a.a[b];
            if (Ia(c))
                for (var d = 0; d < c.length; d++)
                    c[d] && c[d].Ab();
            else
                c && c.Ab()
        }
};
df.prototype.Ab = function() {
    pf(this);
    return this.b
}
;
df.prototype.v = ef ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return cf(this)
        }
        ;
        try {
            return JSON.stringify(this.b && this.Ab(), qf)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    }
    : function() {
        return JSON.stringify(this.b && this.Ab(), qf)
    }
;
var qf = function(a, b) {
    return ya(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
};
df.prototype.toString = function() {
    pf(this);
    return this.b.toString()
}
;
var sf = function(a) {
    return new a.constructor(rf(a.Ab()))
}
    , rf = function(a) {
    if (Ia(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d)
        }
        return b
    }
    if (ef && a instanceof Uint8Array)
        return new Uint8Array(a);
    b = {};
    for (c in a)
        d = a[c],
        null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d);
    return b
};
var uf = function(a) {
    hf(this, a, -1, tf)
};
w(uf, df);
var tf = [2];
var wf = function(a) {
    hf(this, a, -1, vf)
};
w(wf, df);
var vf = [1, 2, 3, 4];
var xf = function(a) {
    if (!a)
        return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3)
        , c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a)
        throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e)
            c = ":" + e
    }
    return a + "://" + b + c
};
var yf = {
    ascii_tlds: "aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnl bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars cartier casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome chrysler church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dodge dog doha domains dot download drive dtv dubai duck dunlop duns dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events everbank exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda honeywell horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is iselect ismaili ist istanbul it itau itv iveco jaguar java jcb jcp je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa ladbrokes lamborghini lamer lancaster lancia lancome land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li liaison lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile mobily moda moe moi mom monash money monster mopar mormon mortgage moscow moto motorcycles mov movie movistar mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio piaget pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space sport spot spreadbetting sr srl srt ss st stada staples star starhub statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel telefonica temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs uconnect ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou warman watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbah1a3hjkrd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbb9fbpob xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--otu796d xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q9jyb4c xn--qcka1pmc xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw".split(" "),
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0645\u0648\u0628\u0627\u064a\u0644\u064a \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u62db\u8058 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
try {
    (new self.OffscreenCanvas(0,0)).getContext("2d")
} catch (a) {}
var zf = !A || Te(9)
    , Af = !ze && !A || A && Te(9) || ze && Re("1.9.1")
    , Bf = A && !Re("9")
    , Cf = A || we || Ae
    , Df = A && !Te(9);
var Ef = function(a, b) {
    return a + Math.random() * (b - a)
};
var Ff = function(a, b) {
    this.x = p(a) ? a : 0;
    this.a = p(b) ? b : 0
};
Ff.prototype.toString = function() {
    return "(" + this.x + ", " + this.a + ")"
}
;
var Gf = function(a, b) {
    return new Ff(a.x - b.x,a.a - b.a)
};
Ff.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.a = Math.ceil(this.a);
    return this
}
;
Ff.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.a = Math.floor(this.a);
    return this
}
;
Ff.prototype.round = function() {
    this.x = Math.round(this.x);
    this.a = Math.round(this.a);
    return this
}
;
var Hf = function(a, b) {
    this.width = a;
    this.height = b
};
h = Hf.prototype;
h.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
}
;
h.aspectRatio = function() {
    return this.width / this.height
}
;
h.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
}
;
h.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
}
;
h.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
}
;
var Kf = function(a) {
    return a ? new If(Jf(a)) : Wa || (Wa = new If)
}
    , Lf = function(a) {
    return t(a) ? document.getElementById(a) : a
}
    , Mf = function(a, b) {
    return (b || document).getElementsByTagName(String(a))
}
    , Of = function(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Nf(document, "*", a, b)
}
    , D = function(a, b) {
    var c = b || document
        , d = null;
    c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = Pf("*", a, b);
    return d || null
}
    , E = function(a, b) {
    b = D(a, b);
    return x(b, "No element found with className: " + a)
}
    , Nf = function(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            d = {};
            for (var e = 0, f = 0, g; g = a[f]; f++)
                b == g.nodeName && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
        d = {};
        for (f = e = 0; g = a[f]; f++)
            b = g.className,
            "function" == typeof b.split && sb(b.split(/\s+/), c) && (d[e++] = g);
        d.length = e;
        return d
    }
    return a
}
    , Pf = function(a, b, c) {
    var d = document
        , e = c || d
        , f = a && "*" != a ? String(a).toUpperCase() : "";
    return e.querySelectorAll && e.querySelector && (f || b) ? e.querySelector(f + (b ? "." + b : "")) : Nf(d, a, b, c)[0] || null
}
    , Rf = function(a, b) {
    Kb(b, function(c, d) {
        c && "object" == typeof c && c.vc && (c = c.vb());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Qf.hasOwnProperty(d) ? a.setAttribute(Qf[d], c) : vc(d, "aria-") || vc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
}
    , Qf = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}
    , Tf = function(a) {
    a = a.document;
    a = Sf(a) ? a.documentElement : a.body;
    return new Hf(a.clientWidth,a.clientHeight)
}
    , Vf = function(a) {
    var b = Uf(a);
    a = a.parentWindow || a.defaultView;
    return A && Re("10") && a.pageYOffset != b.scrollTop ? new Ff(b.scrollLeft,b.scrollTop) : new Ff(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
}
    , Uf = function(a) {
    return a.scrollingElement ? a.scrollingElement : !Ae && Sf(a) ? a.documentElement : a.body || a.documentElement
}
    , Wf = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}
    , F = function(a, b, c) {
    return Xf(document, arguments)
}
    , Xf = function(a, b) {
    var c = String(b[0])
        , d = b[1];
    if (!zf && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ee(d.name), '"');
        if (d.type) {
            c.push(' type="', ee(d.type), '"');
            var e = {};
            Xb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (t(d) ? c.className = d : Ia(d) ? c.className = d.join(" ") : Rf(c, d));
    2 < b.length && Yf(a, c, b, 2);
    return c
}
    , Yf = function(a, b, c, d) {
    function e(g) {
        g && b.appendChild(t(g) ? a.createTextNode(g) : g)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !Ka(f) || Ma(f) && 0 < f.nodeType ? e(f) : y(Zf(f) ? yb(f) : f, e)
    }
}
    , $f = function(a) {
    return document.createElement(String(a))
}
    , ag = function(a) {
    return document.createTextNode(String(a))
}
    , bg = function(a, b) {
    var c = a.createElement("DIV");
    A ? (Ud(c, Md(Od, b)),
        c.removeChild(x(c.firstChild))) : Ud(c, b);
    if (1 == c.childNodes.length)
        c = c.removeChild(x(c.firstChild));
    else {
        for (a = a.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);
        c = a
    }
    return c
}
    , Sf = function(a) {
    return "CSS1Compat" == a.compatMode
}
    , cg = function(a) {
    if (1 != a.nodeType)
        return !1;
    switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
    }
    return !0
}
    , dg = function(a, b) {
    x(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(b)
}
    , eg = function(a, b) {
    Yf(Jf(a), a, arguments, 1)
}
    , fg = function(a) {
    for (var b; b = a.firstChild; )
        a.removeChild(b)
}
    , gg = function(a, b) {
    x(null != a && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
    b.parentNode && b.parentNode.insertBefore(a, b)
}
    , hg = function(a, b) {
    x(null != a && null != b, "goog.dom.insertSiblingAfter expects non-null arguments");
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
    , ig = function(a, b, c) {
    x(null != a, "goog.dom.insertChildAt expects a non-null parent");
    a.insertBefore(b, a.childNodes[c] || null)
}
    , jg = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
    , kg = function(a) {
    return Af && void 0 != a.children ? a.children : kb(a.childNodes, function(b) {
        return 1 == b.nodeType
    })
}
    , mg = function(a) {
    return p(a.firstElementChild) ? a.firstElementChild : lg(a.firstChild, !0)
}
    , lg = function(a, b) {
    for (; a && 1 != a.nodeType; )
        a = b ? a.nextSibling : a.previousSibling;
    return a
}
    , ng = function(a) {
    return Ma(a) && 1 == a.nodeType
}
    , og = function(a) {
    var b;
    if (Cf && !(A && Re("9") && !Re("10") && n.SVGElement && a instanceof n.SVGElement) && (b = a.parentElement))
        return b;
    b = a.parentNode;
    return ng(b) ? b : null
}
    , pg = function(a, b) {
    if (!a || !b)
        return !1;
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; )
        b = b.parentNode;
    return b == a
}
    , sg = function(a, b) {
    if (a == b)
        return 0;
    if (a.compareDocumentPosition)
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (A && !Te(9)) {
        if (9 == a.nodeType)
            return -1;
        if (9 == b.nodeType)
            return 1
    }
    if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
        var c = 1 == a.nodeType
            , d = 1 == b.nodeType;
        if (c && d)
            return a.sourceIndex - b.sourceIndex;
        var e = a.parentNode
            , f = b.parentNode;
        return e == f ? qg(a, b) : !c && pg(e, b) ? -1 * rg(a, b) : !d && pg(f, a) ? rg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
    }
    d = Jf(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(!0);
    a = d.createRange();
    a.selectNode(b);
    a.collapse(!0);
    return c.compareBoundaryPoints(n.Range.START_TO_END, a)
}
    , rg = function(a, b) {
    var c = a.parentNode;
    if (c == b)
        return -1;
    for (; b.parentNode != c; )
        b = b.parentNode;
    return qg(b, a)
}
    , qg = function(a, b) {
    for (; b = b.previousSibling; )
        if (b == a)
            return -1;
    return 1
}
    , tg = function(a) {
    var b, c = arguments.length;
    if (!c)
        return null;
    if (1 == c)
        return arguments[0];
    var d = []
        , e = Infinity;
    for (b = 0; b < c; b++) {
        for (var f = [], g = arguments[b]; g; )
            f.unshift(g),
                g = g.parentNode;
        d.push(f);
        e = Math.min(e, f.length)
    }
    f = null;
    for (b = 0; b < e; b++) {
        g = d[0][b];
        for (var k = 1; k < c; k++)
            if (g != d[k][b])
                return f;
        f = g
    }
    return f
}
    , Jf = function(a) {
    x(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
    , ug = function(a) {
    return a.contentDocument || a.contentWindow.document
}
    , G = function(a, b) {
    x(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent"in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; )
            a.removeChild(x(a.lastChild));
        a.firstChild.data = String(b)
    } else {
        fg(a);
        var c = Jf(a);
        a.appendChild(c.createTextNode(String(b)))
    }
}
    , vg = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}
    , wg = {
    IMG: " ",
    BR: "\n"
}
    , xg = function(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
}
    , yg = function(a) {
    return A && !Re("9") ? (a = a.getAttributeNode("tabindex"),
    null != a && a.specified) : a.hasAttribute("tabindex")
}
    , zg = function(a) {
    a = a.tabIndex;
    return ya(a) && 0 <= a && 32768 > a
}
    , Cg = function(a) {
    if (Bf && null !== a && "innerText"in a)
        a = ae(a.innerText);
    else {
        var b = [];
        Bg(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Bf || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}
    , Dg = function(a) {
    var b = [];
    Bg(a, b, !1);
    return b.join("")
}
    , Bg = function(a, b, c) {
    if (!(a.nodeName in vg))
        if (3 == a.nodeType)
            c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in wg)
            b.push(wg[a.nodeName]);
        else
            for (a = a.firstChild; a; )
                Bg(a, b, c),
                    a = a.nextSibling
}
    , Zf = function(a) {
    if (a && "number" == typeof a.length) {
        if (Ma(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (La(a))
            return "function" == typeof a.item
    }
    return !1
}
    , Fg = function(a) {
    return Eg(a, function(b) {
        return t(b.className) && sb(b.className.split(/\s+/), "gt-baf-entry-clickable")
    }, void 0)
}
    , Eg = function(a, b, c) {
    for (var d = 0; a && (null == c || d <= c); ) {
        x("parentNode" != a.name);
        if (b(a))
            return a;
        a = a.parentNode;
        d++
    }
    return null
}
    , Gg = function(a) {
    try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null
    } catch (c) {
        return null
    }
}
    , If = function(a) {
    this.a = a || n.document || document
};
If.prototype.j = function(a) {
    return t(a) ? this.a.getElementById(a) : a
}
;
If.prototype.c = If.prototype.j;
If.prototype.vd = function(a, b) {
    return D(a, b || this.a)
}
;
If.prototype.b = function(a, b, c) {
    return Xf(this.a, arguments)
}
;
var Hg = function(a, b) {
    return a.a.createElement(String(b))
}
    , Ig = function(a) {
    a = a.a;
    return a.parentWindow || a.defaultView
};
h = If.prototype;
h.appendChild = dg;
h.ti = eg;
h.zf = fg;
h.zi = jg;
h.wi = kg;
h.ri = mg;
h.lm = ng;
h.contains = pg;
h.Af = G;
h.xi = Cg;
var Jg = function() {
    this.Pa = this.Pa;
    this.Fa = this.Fa
};
Jg.prototype.Pa = !1;
Jg.prototype.isDisposed = function() {
    return this.Pa
}
;
Jg.prototype.Ka = function() {
    this.Pa || (this.Pa = !0,
        this.T())
}
;
var Lg = function(a, b) {
    b = Ta(Kg, b);
    a.Pa ? p(void 0) ? b.call(void 0) : b() : (a.Fa || (a.Fa = []),
        a.Fa.push(p(void 0) ? v(b, void 0) : b))
};
Jg.prototype.T = function() {
    if (this.Fa)
        for (; this.Fa.length; )
            this.Fa.shift()()
}
;
var Kg = function(a) {
    a && "function" == typeof a.Ka && a.Ka()
};
var Mg = function(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.c = !1;
    this.ij = !0
};
Mg.prototype.stopPropagation = function() {
    this.c = !0
}
;
Mg.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.ij = !1
}
;
var Ng = Object.freeze || function(a) {
        return a
    }
;
var Og = !A || Te(9)
    , Pg = !A || Te(9)
    , Qg = A && !Re("9")
    , Rg = function() {
    if (!n.addEventListener || !Object.defineProperty)
        return !1;
    var a = !1
        , b = Object.defineProperty({}, "passive", {
        get: function() {
            a = !0
        }
    });
    try {
        n.addEventListener("test", Fa, b),
            n.removeEventListener("test", Fa, b)
    } catch (c) {}
    return a
}();
var Sg;
Sg = Ae ? "webkitTransitionEnd" : we ? "otransitionend" : "transitionend";
var Tg = {
    Kd: "mousedown",
    Ld: "mouseup",
    me: "mousecancel",
    Vp: "mousemove",
    Xp: "mouseover",
    Wp: "mouseout",
    Sp: "mouseenter",
    Tp: "mouseleave"
};
var Ug = function(a, b) {
    Mg.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.g = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.b = null;
    a && this.init(a, b)
};
w(Ug, Mg);
var Vg = Ng([1, 4, 2])
    , Wg = Ng({
    2: "touch",
    3: "pen",
    4: "mouse"
});
Ug.prototype.init = function(a, b) {
    var c = this.type = a.type
        , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    (b = a.relatedTarget) ? ze && (ue(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.g = De ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = t(a.pointerType) ? a.pointerType : Wg[a.pointerType] || "";
    this.state = a.state;
    this.b = a;
    a.defaultPrevented && this.preventDefault()
}
;
var Xg = function(a) {
    return (Og ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Vg[0])) && !(Ae && De && a.ctrlKey)
};
Ug.prototype.stopPropagation = function() {
    Ug.D.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
}
;
Ug.prototype.preventDefault = function() {
    Ug.D.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = !1,
        Qg)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode = -1
        } catch (b) {}
}
;
var Yg = "closure_listenable_" + (1E6 * Math.random() | 0)
    , Zg = function(a) {
    return !(!a || !a[Yg])
}
    , $g = 0;
var ah = function(a, b, c, d, e) {
    this.listener = a;
    this.a = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Qf = e;
    this.key = ++$g;
    this.ce = this.jf = !1
}
    , bh = function(a) {
    a.ce = !0;
    a.listener = null;
    a.a = null;
    a.src = null;
    a.Qf = null
};
var ch = function(a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
ch.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [],
        this.b++);
    var g = dh(a, b, d, e);
    -1 < g ? (b = a[g],
    c || (b.jf = !1)) : (b = new ah(b,this.src,f,!!d,e),
        b.jf = c,
        a.push(b));
    return b
}
;
var eh = function(a, b) {
    var c = b.type;
    if (!(c in a.a))
        return !1;
    var d = vb(a.a[c], b);
    d && (bh(b),
    0 == a.a[c].length && (delete a.a[c],
        a.b--));
    return d
};
ch.prototype.uf = function(a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
}
;
ch.prototype.Ae = function(a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = dh(a, b, c, d));
    return -1 < e ? a[e] : null
}
;
ch.prototype.hasListener = function(a, b) {
    var c = p(a)
        , d = c ? a.toString() : ""
        , e = p(b);
    return Lb(this.a, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b))
                return !0;
        return !1
    })
}
;
var dh = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.ce && f.listener == b && f.capture == !!c && f.Qf == d)
            return e
    }
    return -1
};
var fh = "closure_lm_" + (1E6 * Math.random() | 0)
    , gh = {}
    , hh = 0
    , H = function(a, b, c, d, e) {
    if (d && d.once)
        return ih(a, b, c, d, e);
    if (Ia(b)) {
        for (var f = 0; f < b.length; f++)
            H(a, b[f], c, d, e);
        return null
    }
    c = jh(c);
    return Zg(a) ? a.listen(b, c, Ma(d) ? !!d.capture : !!d, e) : kh(a, b, c, !1, d, e)
}
    , kh = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = Ma(e) ? !!e.capture : !!e
        , k = lh(a);
    k || (a[fh] = k = new ch(a));
    c = k.add(b, c, d, g, f);
    if (c.a)
        return c;
    d = mh();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Rg || (e = g),
        void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(nh(b.toString()), d);
    else if (a.addListener && a.removeListener)
        x("change" === b, "MediaQueryList only has a change event"),
            a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    hh++;
    return c
}
    , mh = function() {
    var a = oh
        , b = Pg ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
    ;
    return b
}
    , ih = function(a, b, c, d, e) {
    if (Ia(b)) {
        for (var f = 0; f < b.length; f++)
            ih(a, b[f], c, d, e);
        return null
    }
    c = jh(c);
    return Zg(a) ? a.mh(b, c, Ma(d) ? !!d.capture : !!d, e) : kh(a, b, c, !0, d, e)
}
    , ph = function(a, b, c, d, e) {
    if (Ia(b))
        for (var f = 0; f < b.length; f++)
            ph(a, b[f], c, d, e);
    else
        d = Ma(d) ? !!d.capture : !!d,
            c = jh(c),
            Zg(a) ? a.Ga(b, c, d, e) : a && (a = lh(a)) && (b = a.Ae(b, c, d, e)) && qh(b)
}
    , qh = function(a) {
    if (ya(a) || !a || a.ce)
        return !1;
    var b = a.src;
    if (Zg(b))
        return eh(b.Ub, a);
    var c = a.type
        , d = a.a;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
    hh--;
    (c = lh(b)) ? (eh(c, a),
    0 == c.b && (c.src = null,
        b[fh] = null)) : bh(a);
    return !0
}
    , rh = function(a, b) {
    if (!a)
        return 0;
    if (Zg(a))
        return a.vh(b);
    a = lh(a);
    if (!a)
        return 0;
    var c = 0;
    b = b && b.toString();
    for (var d in a.a)
        if (!b || d == b)
            for (var e = a.a[d].concat(), f = 0; f < e.length; ++f)
                qh(e[f]) && ++c;
    return c
}
    , nh = function(a) {
    return a in gh ? gh[a] : gh[a] = "on" + a
}
    , th = function(a, b, c, d) {
    var e = !0;
    if (a = lh(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(),
                     a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c && !f.ce && (f = sh(f, d),
                    e = e && !1 !== f)
            }
    return e
}
    , sh = function(a, b) {
    var c = a.listener
        , d = a.Qf || a.src;
    a.jf && qh(a);
    return c.call(d, b)
}
    , uh = function(a, b) {
    x(Zg(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
    a.dispatchEvent(b)
}
    , oh = function(a, b) {
    if (a.ce)
        return !0;
    if (!Pg) {
        var c = b || Ea("window.event");
        b = new Ug(c,this);
        var d = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var e = !1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                if (e || void 0 == c.returnValue)
                    c.returnValue = !0
            }
            c = [];
            for (e = b.a; e; e = e.parentNode)
                c.push(e);
            a = a.type;
            for (e = c.length - 1; !b.c && 0 <= e; e--) {
                b.a = c[e];
                var f = th(c[e], a, !0, b);
                d = d && f
            }
            for (e = 0; !b.c && e < c.length; e++)
                b.a = c[e],
                    f = th(c[e], a, !1, b),
                    d = d && f
        }
        return d
    }
    return sh(a, new Ug(b,this))
}
    , lh = function(a) {
    a = a[fh];
    return a instanceof ch ? a : null
}
    , vh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
    , jh = function(a) {
    x(a, "Listener can not be null.");
    if (La(a))
        return a;
    x(a.handleEvent, "An object listener must have handleEvent method.");
    a[vh] || (a[vh] = function(b) {
            return a.handleEvent(b)
        }
    );
    return a[vh]
};
var xh = function(a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
        return !1;
    if (wh(a.keyCode))
        return !0;
    switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !ze;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
    }
}
    , zh = function(a, b, c, d, e, f) {
    if (Ae && !Re("525"))
        return !0;
    if (De && e)
        return wh(a);
    if (e && !d)
        return !1;
    if (!ze) {
        ya(b) && (b = yh(b));
        var g = 17 == b || 18 == b || De && 91 == b;
        if ((!c || De) && g || De && 16 == b && (d || f))
            return !1
    }
    if ((Ae || xe) && d && c)
        switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
    if (A && d && b == a)
        return !1;
    switch (a) {
        case 13:
            return ze ? f || e ? !1 : !(c && d) : !0;
        case 27:
            return !(Ae || xe || ze)
    }
    return ze && (d || e || f) ? !1 : wh(a)
}
    , wh = function(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Ae || xe) && 0 == a)
        return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
            return !0;
        case 173:
            return ze;
        default:
            return !1
    }
}
    , yh = function(a) {
    if (ze)
        a = Ah(a);
    else if (De && Ae)
        switch (a) {
            case 93:
                a = 91
        }
    return a
}
    , Ah = function(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};
var Bh = function(a, b) {
    b = yb(b);
    var c = Gg(document);
    if (c) {
        var d = b.indexOf(c);
        c = d + 1 === b.length ? 0 : d + 1;
        d = 0 > d - 1 ? b.length - 1 : d - 1;
        switch (a.keyCode) {
            case 39:
                b[c].focus();
                break;
            case 37:
                b[d].focus()
        }
    }
}
    , Ch = function(a, b) {
    H(a, "click", b, !1);
    H(a, "keypress", function(c) {
        13 === c.keyCode && b(c)
    }, !1)
};
var Dh = function(a, b, c, d) {
    window.__gaTracker && __gaTracker("send", "event", a, b, c, d)
};
var Lh = function(a) {
    this.b = !1;
    this.a = [];
    this.c = {};
    for (var b = 0; b < I(a, 1); b++) {
        var c = Eh(a, b)
            , d = J(c, 0)
            , e = "";
        Fh(c, 3) && (e = J(c, 3));
        d in this.c ? d = this.c[d] : (c = new Gh(d,e),
            this.c[d] = c,
            this.a.push(c),
            d = c);
        for (c = 0; c < Eh(a, b).a(); c++) {
            var f = Eh(a, b).b(c);
            e = f;
            e = 0 == I(e, 2) ? -Pa(e) : Hh(e, 2, 0);
            var g = d;
            if (e in g.b)
                e = g.b[e];
            else {
                var k = new Ih;
                g.b[e] = k;
                g.a.push(k);
                e = k
            }
            g = J(f, 0);
            k = J(f, 4);
            var l = Fh(f, 3) ? Jh(f, 3) : -1;
            var m = [];
            for (var q = 0; q < I(f, 1); q++)
                m.push(Hh(f, 1, q));
            f = e;
            g in f.b || (k = new Kh(g,k,l,m),
                f.b[g] = k,
                f.a.push(k));
            this.b |= 1 < e.a.length
        }
    }
}
    , Mh = function(a) {
    for (var b = 0, c = 0; c < a.a.length; c++) {
        for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++)
            e += d.a[f].a.length;
        b += e
    }
    for (d = c = 0; d < a.a.length; d++) {
        e = a.a[d];
        for (var g = f = 0; g < e.a.length; g++) {
            for (var k = e.a[g], l = 0, m = 0; m < k.a.length; m++)
                l += k.a[m].a ? 1 : 0;
            f += l
        }
        c += f
    }
    return b - c
}
    , Nh = function(a) {
    for (var b = [], c = 0; c < a.a.length; c++)
        for (var d = 0; d < a.a[c].a.length; d++)
            Array.prototype.push.apply(b, a.a[c].a[d].a);
    return b
}
    , Oh = function(a) {
    for (var b = 0; b < a.a.length; b++)
        for (var c = 0; c < a.a[b].a.length; c++)
            a.a[b].a[c].a.sort(function(d, e) {
                return e.Pb - d.Pb
            })
}
    , Gh = function(a, b) {
    this.g = a;
    this.c = b;
    this.a = [];
    this.b = {}
};
Gh.prototype.Pb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++)
        a = Math.max(a, this.a[b].Pb());
    return a
}
;
var Qh = function(a) {
    for (var b = 0; b < a.a.length; b++)
        if (Ph(a.a[b]))
            return !0;
    return !1
}
    , Ih = function() {
    this.a = [];
    this.b = {}
};
Ih.prototype.Pb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++)
        a = Math.max(a, this.a[b].Pb);
    return a
}
;
var Ph = function(a) {
    for (var b = 0; b < a.a.length; b++)
        if (a.a[b].a)
            return !0;
    return !1
}
    , Kh = function(a, b, c, d) {
    this.text = a;
    this.Qe = b;
    this.Pb = c;
    this.fg = d;
    this.a = !1;
    this.b = 0
};
var K = function() {
    Jg.call(this);
    this.Ub = new ch(this);
    this.ek = this;
    this.uh = null
};
w(K, Jg);
K.prototype[Yg] = !0;
h = K.prototype;
h.Pd = function() {
    return this.uh
}
;
h.Ed = function(a) {
    this.uh = a
}
;
h.addEventListener = function(a, b, c, d) {
    H(this, a, b, c, d)
}
;
h.removeEventListener = function(a, b, c, d) {
    ph(this, a, b, c, d)
}
;
h.dispatchEvent = function(a) {
    Rh(this);
    var b = this.Pd();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.Pd())
            c.push(b),
                x(1E3 > ++d, "infinite loop")
    }
    b = this.ek;
    d = a.type || a;
    if (t(a))
        a = new Mg(a,b);
    else if (a instanceof Mg)
        a.target = a.target || b;
    else {
        var e = a;
        a = new Mg(d,b);
        Xb(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.c && 0 <= f; f--) {
            var g = a.a = c[f];
            e = Sh(g, d, !0, a) && e
        }
    a.c || (g = a.a = b,
        e = Sh(g, d, !0, a) && e,
    a.c || (e = Sh(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.c && f < c.length; f++)
            g = a.a = c[f],
                e = Sh(g, d, !1, a) && e;
    return e
}
;
h.T = function() {
    K.D.T.call(this);
    this.vh();
    this.uh = null
}
;
h.listen = function(a, b, c, d) {
    Rh(this);
    return this.Ub.add(String(a), b, !1, c, d)
}
;
h.mh = function(a, b, c, d) {
    return this.Ub.add(String(a), b, !0, c, d)
}
;
h.Ga = function(a, b, c, d) {
    var e = this.Ub;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = dh(f, b, c, d);
        -1 < b ? (bh(f[b]),
            ub(f, b),
        0 == f.length && (delete e.a[a],
            e.b--),
            e = !0) : e = !1
    } else
        e = !1;
    return e
}
;
h.vh = function(a) {
    if (this.Ub) {
        var b = this.Ub;
        a = a && a.toString();
        var c = 0, d;
        for (d in b.a)
            if (!a || d == a) {
                for (var e = b.a[d], f = 0; f < e.length; f++)
                    ++c,
                        bh(e[f]);
                delete b.a[d];
                b.b--
            }
        b = c
    } else
        b = 0;
    return b
}
;
var Sh = function(a, b, c, d) {
    b = a.Ub.a[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.ce && g.capture == c) {
            var k = g.listener
                , l = g.Qf || g.src;
            g.jf && eh(a.Ub, g);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && 0 != d.ij
};
K.prototype.uf = function(a, b) {
    return this.Ub.uf(String(a), b)
}
;
K.prototype.Ae = function(a, b, c, d) {
    return this.Ub.Ae(String(a), b, c, d)
}
;
K.prototype.hasListener = function(a, b) {
    return this.Ub.hasListener(p(a) ? String(a) : void 0, b)
}
;
var Rh = function(a) {
    x(a.Ub, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Th = function(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
Th.prototype.get = function() {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else
        a = this.c();
    return a
}
;
var Uh = function(a, b) {
    a.g(b);
    100 > a.b && (a.b++,
        b.next = a.a,
        a.a = b)
};
var Vh = function(a) {
    n.setTimeout(function() {
        throw a;
    }, 0)
}, Wh, Xh = function() {
    var a = n.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = document.createElement("IFRAME");
            e.style.display = "none";
            Wd(e, tc(dc(fc)));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Bd(Kd));
            e.close();
            var g = "callImmediate" + Math.random()
                , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = v(function(l) {
                if (("*" == k || l.origin == k) && l.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        }
    );
    if ("undefined" !== typeof a && !ud()) {
        var b = new a
            , c = {}
            , d = c;
        b.port1.onmessage = function() {
            if (p(c.next)) {
                c = c.next;
                var e = c.gi;
                c.gi = null;
                e()
            }
        }
        ;
        return function(e) {
            d.next = {
                gi: e
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(e) {
            var f = document.createElement("SCRIPT");
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            }
            ;
            document.documentElement.appendChild(f)
        }
        : function(e) {
            n.setTimeout(e, 0)
        }
};
var Yh = function() {
    this.b = this.a = null
}
    , $h = new Th(function() {
        return new Zh
    }
    ,function(a) {
        a.reset()
    }
);
Yh.prototype.add = function(a, b) {
    var c = $h.get();
    c.set(a, b);
    this.b ? this.b.next = c : (x(!this.a),
        this.a = c);
    this.b = c
}
;
var bi = function() {
    var a = ai
        , b = null;
    a.a && (b = a.a,
        a.a = a.a.next,
    a.a || (a.b = null),
        b.next = null);
    return b
}
    , Zh = function() {
    this.next = this.a = this.Dc = null
};
Zh.prototype.set = function(a, b) {
    this.Dc = a;
    this.a = b;
    this.next = null
}
;
Zh.prototype.reset = function() {
    this.next = this.a = this.Dc = null
}
;
var fi = function(a, b) {
    ci || di();
    ei || (ci(),
        ei = !0);
    ai.add(a, b)
}, ci, di = function() {
    if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        ci = function() {
            a.then(gi)
        }
    } else
        ci = function() {
            var b = gi;
            !La(n.setImmediate) || n.Window && n.Window.prototype && !z("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Wh || (Wh = Xh()),
                Wh(b)) : n.setImmediate(b)
        }
}, ei = !1, ai = new Yh, gi = function() {
    for (var a; a = bi(); ) {
        try {
            a.Dc.call(a.a)
        } catch (b) {
            Vh(b)
        }
        Uh($h, a)
    }
    ei = !1
};
var hi = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var ki = function(a) {
    this.a = 0;
    this.m = void 0;
    this.g = this.b = this.c = null;
    this.h = this.v = !1;
    if (a != Fa)
        try {
            var b = this;
            a.call(void 0, function(c) {
                ii(b, 2, c)
            }, function(c) {
                if (!(c instanceof ji))
                    try {
                        if (c instanceof Error)
                            throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                ii(b, 3, c)
            })
        } catch (c) {
            ii(this, 3, c)
        }
}
    , li = function() {
    this.next = this.context = this.c = this.b = this.a = null;
    this.g = !1
};
li.prototype.reset = function() {
    this.context = this.c = this.b = this.a = null;
    this.g = !1
}
;
var mi = new Th(function() {
        return new li
    }
    ,function(a) {
        a.reset()
    }
)
    , ni = function(a, b, c) {
    var d = mi.get();
    d.b = a;
    d.c = b;
    d.context = c;
    return d
}
    , pi = function(a, b, c) {
    oi(a, b, c, null) || fi(Ta(b, a))
}
    , qi = function(a) {
    new ki(function(b, c) {
            var d = a.length
                , e = [];
            if (d)
                for (var f = function(m, q) {
                    d--;
                    e[m] = q;
                    0 == d && b(e)
                }, g = function(m) {
                    c(m)
                }, k = 0, l; k < a.length; k++)
                    l = a[k],
                        pi(l, Ta(f, k), g);
            else
                b(e)
        }
    )
};
ki.prototype.then = function(a, b, c) {
    null != a && bb(a, "opt_onFulfilled should be a function.");
    null != b && bb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return ri(this, La(a) ? a : null, La(b) ? b : null, c)
}
;
ki.prototype.$goog_Thenable = !0;
ki.prototype.cancel = function(a) {
    0 == this.a && fi(function() {
        var b = new ji(a);
        si(this, b)
    }, this)
}
;
var si = function(a, b) {
    if (0 == a.a)
        if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++,
                g.a == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                    e || (f = g);
                e && (0 == c.a && 1 == d ? si(c, b) : (f ? (d = f,
                    x(c.b),
                    x(null != d),
                d.next == c.g && (c.g = d),
                    d.next = d.next.next) : ti(c),
                    ui(c, e, 3, b)))
            }
            a.c = null
        } else
            ii(a, 3, b)
}
    , wi = function(a, b) {
    a.b || 2 != a.a && 3 != a.a || vi(a);
    x(null != b.b);
    a.g ? a.g.next = b : a.b = b;
    a.g = b
}
    , ri = function(a, b, c, d) {
    var e = ni(null, null, null);
    e.a = new ki(function(f, g) {
            e.b = b ? function(k) {
                    try {
                        var l = b.call(d, k);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                }
                : f;
            e.c = c ? function(k) {
                    try {
                        var l = c.call(d, k);
                        !p(l) && k instanceof ji ? g(k) : f(l)
                    } catch (m) {
                        g(m)
                    }
                }
                : g
        }
    );
    e.a.c = a;
    wi(a, e);
    return e.a
};
ki.prototype.G = function(a) {
    x(1 == this.a);
    this.a = 0;
    ii(this, 2, a)
}
;
ki.prototype.C = function(a) {
    x(1 == this.a);
    this.a = 0;
    ii(this, 3, a)
}
;
var ii = function(a, b, c) {
    0 == a.a && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.a = 1,
    oi(c, a.G, a.C, a) || (a.m = c,
        a.a = b,
        a.c = null,
        vi(a),
    3 != b || c instanceof ji || xi(a, c)))
}
    , oi = function(a, b, c, d) {
    if (a instanceof ki)
        return null != b && bb(b, "opt_onFulfilled should be a function."),
        null != c && bb(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
            wi(a, ni(b || Fa, c || null, d)),
            !0;
    if (hi(a))
        return a.then(b, c, d),
            !0;
    if (Ma(a))
        try {
            var e = a.then;
            if (La(e))
                return yi(a, e, b, c, d),
                    !0
        } catch (f) {
            return c.call(d, f),
                !0
        }
    return !1
}
    , yi = function(a, b, c, d, e) {
    var f = !1
        , g = function(l) {
        f || (f = !0,
            c.call(e, l))
    }
        , k = function(l) {
        f || (f = !0,
            d.call(e, l))
    };
    try {
        b.call(a, g, k)
    } catch (l) {
        k(l)
    }
}
    , vi = function(a) {
    a.v || (a.v = !0,
        fi(a.w, a))
}
    , ti = function(a) {
    var b = null;
    a.b && (b = a.b,
        a.b = b.next,
        b.next = null);
    a.b || (a.g = null);
    null != b && x(null != b.b);
    return b
};
ki.prototype.w = function() {
    for (var a; a = ti(this); )
        ui(this, a, this.a, this.m);
    this.v = !1
}
;
var ui = function(a, b, c, d) {
    if (3 == c && b.c && !b.g)
        for (; a && a.h; a = a.c)
            a.h = !1;
    if (b.a)
        b.a.c = null,
            zi(b, c, d);
    else
        try {
            b.g ? b.b.call(b.context) : zi(b, c, d)
        } catch (e) {
            Ai.call(null, e)
        }
    Uh(mi, b)
}
    , zi = function(a, b, c) {
    2 == b ? a.b.call(a.context, c) : a.c && a.c.call(a.context, c)
}
    , xi = function(a, b) {
    a.h = !0;
    fi(function() {
        a.h && Ai.call(null, b)
    })
}
    , Ai = Vh
    , ji = function(a) {
    Va.call(this, a)
};
w(ji, Va);
ji.prototype.name = "cancel";
var Bi = function(a, b) {
    K.call(this);
    this.c = a || 1;
    this.b = b || n;
    this.g = v(this.v, this);
    this.h = Ua()
};
w(Bi, K);
Bi.prototype.enabled = !1;
Bi.prototype.a = null;
var Ci = function(a, b) {
    a.c = b;
    a.a && a.enabled ? (a.stop(),
        a.start()) : a.a && a.stop()
};
Bi.prototype.v = function() {
    if (this.enabled) {
        var a = Ua() - this.h;
        0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a),
            this.a = null),
            this.dispatchEvent("tick"),
        this.enabled && (this.stop(),
            this.start()))
    }
}
;
Bi.prototype.start = function() {
    this.enabled = !0;
    this.a || (this.a = this.b.setTimeout(this.g, this.c),
        this.h = Ua())
}
;
Bi.prototype.stop = function() {
    this.enabled = !1;
    this.a && (this.b.clearTimeout(this.a),
        this.a = null)
}
;
Bi.prototype.T = function() {
    Bi.D.T.call(this);
    this.stop();
    delete this.b
}
;
var Di = function(a, b, c) {
    if (La(a))
        c && (a = v(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = v(a.handleEvent, a);
    else
        throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
}
    , Ei = function(a) {
    n.clearTimeout(a)
};
var Fi = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = m = 0
    }
    function b(r) {
        for (var u = g, C = 0; 64 > C; C += 4)
            u[C / 4] = r[C] << 24 | r[C + 1] << 16 | r[C + 2] << 8 | r[C + 3];
        for (C = 16; 80 > C; C++)
            r = u[C - 3] ^ u[C - 8] ^ u[C - 14] ^ u[C - 16],
                u[C] = (r << 1 | r >>> 31) & 4294967295;
        r = e[0];
        var Q = e[1]
            , M = e[2]
            , Qa = e[3]
            , Mb = e[4];
        for (C = 0; 80 > C; C++) {
            if (40 > C)
                if (20 > C) {
                    var Ja = Qa ^ Q & (M ^ Qa);
                    var Nb = 1518500249
                } else
                    Ja = Q ^ M ^ Qa,
                        Nb = 1859775393;
            else
                60 > C ? (Ja = Q & M | Qa & (Q | M),
                    Nb = 2400959708) : (Ja = Q ^ M ^ Qa,
                    Nb = 3395469782);
            Ja = ((r << 5 | r >>> 27) & 4294967295) + Ja + Mb + Nb + u[C] & 4294967295;
            Mb = Qa;
            Qa = M;
            M = (Q << 30 | Q >>> 2) & 4294967295;
            Q = r;
            r = Ja
        }
        e[0] = e[0] + r & 4294967295;
        e[1] = e[1] + Q & 4294967295;
        e[2] = e[2] + M & 4294967295;
        e[3] = e[3] + Qa & 4294967295;
        e[4] = e[4] + Mb & 4294967295
    }
    function c(r, u) {
        if ("string" === typeof r) {
            r = unescape(encodeURIComponent(r));
            for (var C = [], Q = 0, M = r.length; Q < M; ++Q)
                C.push(r.charCodeAt(Q));
            r = C
        }
        u || (u = r.length);
        C = 0;
        if (0 == m)
            for (; C + 64 < u; )
                b(r.slice(C, C + 64)),
                    C += 64,
                    q += 64;
        for (; C < u; )
            if (f[m++] = r[C++],
                q++,
            64 == m)
                for (m = 0,
                         b(f); C + 64 < u; )
                    b(r.slice(C, C + 64)),
                        C += 64,
                        q += 64
    }
    function d() {
        var r = []
            , u = 8 * q;
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var C = 63; 56 <= C; C--)
            f[C] = u & 255,
                u >>>= 8;
        b(f);
        for (C = u = 0; 5 > C; C++)
            for (var Q = 24; 0 <= Q; Q -= 8)
                r[u++] = e[C] >> Q & 255;
        return r
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l)
        k[l] = 0;
    var m, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        digestString: function() {
            for (var r = d(), u = "", C = 0; C < r.length; C++)
                u += "0123456789ABCDEF".charAt(Math.floor(r[C] / 16)) + "0123456789ABCDEF".charAt(r[C] % 16);
            return u
        }
    }
};
var Hi = function(a, b, c) {
    var d = []
        , e = [];
    if (1 == (Ia(c) ? 2 : 1))
        return e = [b, a],
            y(d, function(k) {
                e.push(k)
            }),
            Gi(e.join(" "));
    var f = []
        , g = [];
    y(c, function(k) {
        g.push(k.key);
        f.push(k.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    y(d, function(k) {
        e.push(k)
    });
    a = Gi(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}
    , Gi = function(a) {
    var b = Fi();
    b.update(a);
    return b.digestString().toLowerCase()
};
var Ii = function() {
    this.a = document || {
        cookie: ""
    }
};
h = Ii.prototype;
h.isEnabled = function() {
    return navigator.cookieEnabled
}
;
h.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    p(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Ua() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f
}
;
h.get = function(a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = yc(d[e]);
        if (0 == f.lastIndexOf(c, 0))
            return f.substr(c.length);
        if (f == a)
            return ""
    }
    return b
}
;
h.Db = function() {
    return Ji(this).keys
}
;
h.Wb = function() {
    return Ji(this).values
}
;
h.Ng = function() {
    return this.a.cookie ? (this.a.cookie || "").split(";").length : 0
}
;
var Ji = function(a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        e = yc(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
                c.push(e)) : (b.push(e.substring(0, d)),
                c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var Ki = function(a) {
    var b = xf(String(n.location.href))
        , c = n.__OVERRIDE_SID;
    null == c && (c = (new Ii).get("SID"));
    if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? n.__SAPISID : n.__APISID,
    null == b && (b = (new Ii).get(c ? "SAPISID" : "APISID")),
        b)) {
        c = c ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(n.location.href);
        return d && b && c ? [c, Hi(xf(d), b, a || null)].join(" ") : null
    }
    return null
};
var Li = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
};
Li.prototype.a = null;
var Mi = 0;
Li.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Mi++;
    d || Ua();
    delete this.a
}
;
var Ni = function(a) {
    this.g = a;
    this.b = this.c = this.a = null
}
    , Oi = function(a, b) {
    this.name = a;
    this.value = b
};
Oi.prototype.toString = function() {
    return this.name
}
;
var Pi = new Oi("SEVERE",1E3)
    , Qi = new Oi("WARNING",900)
    , Ri = new Oi("INFO",800)
    , Si = new Oi("CONFIG",700)
    , Ti = new Oi("FINE",500);
Ni.prototype.getParent = function() {
    return this.a
}
;
var Ui = function(a) {
    if (a.c)
        return a.c;
    if (a.a)
        return Ui(a.a);
    Za("Root logger has no level set.");
    return null
};
Ni.prototype.log = function(a, b, c) {
    if (a.value >= Ui(this).value)
        for (La(b) && (b = b()),
                 a = new Li(a,String(b),this.g),
             c && (a.a = c),
                 c = this; c; )
            c = c.getParent()
}
;
Ni.prototype.config = function(a, b) {
    this.log(Si, a, b)
}
;
var Vi = {}
    , Wi = null
    , Xi = function(a) {
    Wi || (Wi = new Ni(""),
        Vi[""] = Wi,
        Wi.c = Si);
    var b;
    if (!(b = Vi[a])) {
        b = new Ni(a);
        var c = a.lastIndexOf(".")
            , d = a.substr(c + 1);
        c = Xi(a.substr(0, c));
        c.b || (c.b = {});
        c.b[d] = b;
        b.a = c;
        Vi[a] = b
    }
    return b
};
var Yi = function(a, b) {
    a && a.log(Pi, b, void 0)
}
    , Zi = function(a, b) {
    a && a.log(Qi, b, void 0)
}
    , $i = function(a, b) {
    a && a.log(Ri, b, void 0)
}
    , aj = function(a, b) {
    a && a.log(Ti, b, void 0)
};
var bj = function(a) {
    x(0 < a, "Initial value must be greater than zero.");
    x(3E5 >= a, "Max value should be at least as large as initial value.");
    p(.1) && x(!0, "Randomness factor should be between 0 and 1.");
    p(void 0) && x(!1, "Backoff factor should be greater than 1");
    p(void 0) && x(!1, "Decay factor should be greater than 1");
    this.a = this.b = this.c = a
};
bj.prototype.reset = function() {
    this.a = this.b = this.c
}
;
bj.prototype.Y = function() {
    return this.b
}
;
var cj = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
        } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}
    , fj = function(a) {
    var b = [];
    dj(new ej, a, b);
    return b.join("")
}
    , ej = function() {}
    , dj = function(a, b, c) {
    if (null == b)
        c.push("null");
    else {
        if ("object" == typeof b) {
            if (Ia(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", f = 0; f < b; f++)
                    c.push(e),
                        dj(a, d[f], c),
                        e = ",";
                c.push("]");
                return
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                b = b.valueOf();
            else {
                c.push("{");
                e = "";
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                    "function" != typeof f && (c.push(e),
                        gj(d, c),
                        c.push(":"),
                        dj(a, f, c),
                        e = ","));
                c.push("}");
                return
            }
        }
        switch (typeof b) {
            case "string":
                gj(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
}
    , hj = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}
    , ij = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
    , gj = function(a, b) {
    b.push('"', a.replace(ij, function(c) {
        var d = hj[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            hj[c] = d);
        return d
    }), '"')
};
var jj = function() {};
jj.prototype.a = null;
var lj = function(a) {
    var b;
    (b = a.a) || (b = {},
    kj(a) && (b[0] = !0,
        b[1] = !0),
        b = a.a = b);
    return b
};
var mj, nj = function() {};
w(nj, jj);
var oj = function(a) {
    return (a = kj(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
    , kj = function(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d),
                    a.b = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
};
mj = new nj;
var pj = "StopIteration"in n ? n.StopIteration : {
    message: "StopIteration",
    stack: ""
}
    , qj = function() {};
qj.prototype.next = function() {
    throw pj;
}
;
qj.prototype.lc = function() {
    return this
}
;
var rj = function(a) {
    if (a instanceof qj)
        return a;
    if ("function" == typeof a.lc)
        return a.lc(!1);
    if (Ka(a)) {
        var b = 0
            , c = new qj;
        c.next = function() {
            for (; ; ) {
                if (b >= a.length)
                    throw pj;
                if (b in a)
                    return a[b++];
                b++
            }
        }
        ;
        return c
    }
    throw Error("Not implemented");
}
    , sj = function(a, b, c) {
    if (Ka(a))
        try {
            y(a, b, c)
        } catch (d) {
            if (d !== pj)
                throw d;
        }
    else {
        a = rj(a);
        try {
            for (; ; )
                b.call(c, a.next(), void 0, a)
        } catch (d) {
            if (d !== pj)
                throw d;
        }
    }
}
    , tj = function(a, b, c) {
    a = rj(a);
    try {
        for (; b.call(c, a.next(), void 0, a); )
            ;
    } catch (d) {
        if (d !== pj)
            throw d;
    }
};
var uj = function(a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof uj)
            for (c = a.Db(),
                     d = 0; d < c.length; d++)
                this.set(c[d], a.get(c[d]));
        else
            for (d in a)
                this.set(d, a[d])
};
uj.prototype.Ng = function() {
    return this.c
}
;
uj.prototype.Wb = function() {
    vj(this);
    for (var a = [], b = 0; b < this.a.length; b++)
        a.push(this.b[this.a[b]]);
    return a
}
;
uj.prototype.Db = function() {
    vj(this);
    return this.a.concat()
}
;
var xj = function(a, b) {
    return wj(a.b, b)
};
uj.prototype.Wc = function() {
    this.b = {};
    this.g = this.c = this.a.length = 0
}
;
var vj = function(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length; ) {
            var d = a.a[b];
            wj(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        var e = {};
        for (c = b = 0; b < a.a.length; )
            d = a.a[b],
            wj(e, d) || (a.a[c++] = d,
                e[d] = 1),
                b++;
        a.a.length = c
    }
};
uj.prototype.get = function(a, b) {
    return wj(this.b, a) ? this.b[a] : b
}
;
uj.prototype.set = function(a, b) {
    wj(this.b, a) || (this.c++,
        this.a.push(a),
        this.g++);
    this.b[a] = b
}
;
uj.prototype.forEach = function(a, b) {
    for (var c = this.Db(), d = 0; d < c.length; d++) {
        var e = c[d]
            , f = this.get(e);
        a.call(b, f, e, this)
    }
}
;
uj.prototype.lc = function(a) {
    vj(this);
    var b = 0
        , c = this.g
        , d = this
        , e = new qj;
    e.next = function() {
        if (c != d.g)
            throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length)
            throw pj;
        var f = d.a[b++];
        return a ? f : d.b[f]
    }
    ;
    return e
}
;
var wj = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var yj = function(a) {
    if (a.Wb && "function" == typeof a.Wb)
        return a.Wb();
    if (t(a))
        return a.split("");
    if (Ka(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Ob(a)
}
    , zj = function(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach)
        a.forEach(b, c);
    else if (Ka(a) || t(a))
        y(a, b, c);
    else {
        if (a.Db && "function" == typeof a.Db)
            var d = a.Db();
        else if (a.Wb && "function" == typeof a.Wb)
            d = void 0;
        else if (Ka(a) || t(a)) {
            d = [];
            for (var e = a.length, f = 0; f < e; f++)
                d.push(f)
        } else
            d = Pb(a);
        e = yj(a);
        f = e.length;
        for (var g = 0; g < f; g++)
            b.call(c, e[g], d && d[g], a)
    }
};
var Aj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
    , Bj = function(a, b) {
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("=")
                , e = null;
            if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1)
            } else
                f = a[c];
            b(f, e ? de(e) : "")
        }
    }
}
    , Cj = function(a, b) {
    if (!b)
        return a;
    var c = a.indexOf("#");
    0 > c && (c = a.length);
    var d = a.indexOf("?");
    if (0 > d || d > c) {
        d = c;
        var e = ""
    } else
        e = a.substring(d + 1, c);
    a = [a.substr(0, d), e, a.substr(c)];
    c = a[1];
    a[1] = b ? c ? c + "&" + b : b : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
}
    , Dj = function(a, b, c) {
    ab(a);
    if (Ia(b)) {
        db(b);
        for (var d = 0; d < b.length; d++)
            Dj(a, String(b[d]), c)
    } else
        null != b && c.push(a + ("" === b ? "" : "=" + ce(b)))
}
    , Ej = function(a, b) {
    x(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
    var c = [];
    for (b = b || 0; b < a.length; b += 2)
        Dj(a[b], a[b + 1], c);
    return c.join("&")
}
    , Fj = function(a) {
    var b = [], c;
    for (c in a)
        Dj(c, a[c], b);
    return b.join("&")
}
    , Gj = function(a, b) {
    var c = 2 == arguments.length ? Ej(arguments[1], 0) : Ej(arguments, 1);
    return Cj(a, c)
}
    , Hj = function(a, b, c) {
    c = null != c ? "=" + ce(c) : "";
    return Cj(a, b + c)
}
    , Ij = function(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f)
            if (f = a.charCodeAt(b + e),
            !f || 61 == f || 38 == f || 35 == f)
                return b;
        b += e + 1
    }
    return -1
}
    , Jj = /#|$/
    , Kj = function() {
    var a = n.location.href
        , b = a.search(Jj)
        , c = Ij(a, 0, "authuser", b);
    if (0 > c)
        return null;
    var d = a.indexOf("&", c);
    if (0 > d || d > b)
        d = b;
    c += 9;
    return de(a.substr(c, d - c))
}
    , Lj = /[?&]($|#)/
    , Mj = function(a, b) {
    x(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
    wc(a, "/") && (a = a.substr(0, a.length - 1));
    vc(b, "/") && (b = b.substr(1));
    return me(a, "/", b)
};
var Nj = function(a) {
    K.call(this);
    this.headers = new uj;
    this.jg = a || null;
    this.Jb = !1;
    this.hg = this.Ba = null;
    this.Vi = this.Zd = "";
    this.Ad = 0;
    this.Pe = "";
    this.zd = this.fh = this.Tf = this.Ig = !1;
    this.fe = 0;
    this.dg = null;
    this.hj = "";
    this.gg = this.Ue = !1
};
w(Nj, K);
Nj.prototype.F = Xi("goog.net.XhrIo");
var Oj = /^https?$/i
    , Pj = ["POST", "PUT"]
    , Qj = []
    , Rj = function(a, b, c, d, e, f, g) {
    var k = new Nj;
    Qj.push(k);
    b && k.listen("complete", b);
    k.mh("ready", k.ik);
    f && (k.fe = Math.max(0, f));
    g && (k.Ue = g);
    k.send(a, c, d, e);
    return k
};
Nj.prototype.ik = function() {
    this.Ka();
    vb(Qj, this)
}
;
Nj.prototype.send = function(a, b, c, d) {
    if (this.Ba)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Zd + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Zd = a;
    this.Pe = "";
    this.Ad = 0;
    this.Vi = b;
    this.Ig = !1;
    this.Jb = !0;
    this.Ba = this.jg ? oj(this.jg) : oj(mj);
    this.hg = this.jg ? lj(this.jg) : lj(mj);
    this.Ba.onreadystatechange = v(this.dj, this);
    try {
        aj(this.F, Sj(this, "Opening Xhr")),
            this.fh = !0,
            this.Ba.open(b, String(a), !0),
            this.fh = !1
    } catch (f) {
        aj(this.F, Sj(this, "Error opening Xhr: " + f.message));
        this.qf(5, f);
        return
    }
    a = c || "";
    var e = new uj(this.headers);
    d && zj(d, function(f, g) {
        e.set(g, f)
    });
    d = qb(e.Db(), Tj);
    c = n.FormData && a instanceof n.FormData;
    !sb(Pj, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.Ba.setRequestHeader(g, f)
    }, this);
    this.hj && (this.Ba.responseType = this.hj);
    "withCredentials"in this.Ba && this.Ba.withCredentials !== this.Ue && (this.Ba.withCredentials = this.Ue);
    try {
        Uj(this),
        0 < this.fe && (this.gg = Vj(this.Ba),
            aj(this.F, Sj(this, "Will abort after " + this.fe + "ms if incomplete, xhr2 " + this.gg)),
            this.gg ? (this.Ba.timeout = this.fe,
                this.Ba.ontimeout = v(this.ed, this)) : this.dg = Di(this.ed, this.fe, this)),
            aj(this.F, Sj(this, "Sending request")),
            this.Tf = !0,
            this.Ba.send(a),
            this.Tf = !1
    } catch (f) {
        aj(this.F, Sj(this, "Send error: " + f.message)),
            this.qf(5, f)
    }
}
;
var Vj = function(a) {
    return A && Re(9) && ya(a.timeout) && p(a.ontimeout)
}
    , Tj = function(a) {
    return "content-type" == a.toLowerCase()
};
Nj.prototype.ed = function() {
    "undefined" != typeof xa && this.Ba && (this.Pe = "Timed out after " + this.fe + "ms, aborting",
        this.Ad = 8,
        aj(this.F, Sj(this, this.Pe)),
        this.dispatchEvent("timeout"),
        this.abort(8))
}
;
Nj.prototype.qf = function(a, b) {
    this.Jb = !1;
    this.Ba && (this.zd = !0,
        this.Ba.abort(),
        this.zd = !1);
    this.Pe = b;
    this.Ad = a;
    Wj(this);
    Xj(this)
}
;
var Wj = function(a) {
    a.Ig || (a.Ig = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
};
Nj.prototype.abort = function(a) {
    this.Ba && this.Jb && (aj(this.F, Sj(this, "Aborting")),
        this.Jb = !1,
        this.zd = !0,
        this.Ba.abort(),
        this.zd = !1,
        this.Ad = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Xj(this))
}
;
Nj.prototype.T = function() {
    this.Ba && (this.Jb && (this.Jb = !1,
        this.zd = !0,
        this.Ba.abort(),
        this.zd = !1),
        Xj(this, !0));
    Nj.D.T.call(this)
}
;
Nj.prototype.dj = function() {
    this.isDisposed() || (this.fh || this.Tf || this.zd ? Yj(this) : this.Ym())
}
;
Nj.prototype.Ym = function() {
    Yj(this)
}
;
var Yj = function(a) {
    if (a.Jb && "undefined" != typeof xa)
        if (a.hg[1] && 4 == Zj(a) && 2 == a.Sc())
            aj(a.F, Sj(a, "Local request error detected and ignored"));
        else if (a.Tf && 4 == Zj(a))
            Di(a.dj, 0, a);
        else if (a.dispatchEvent("readystatechange"),
        4 == Zj(a)) {
            aj(a.F, Sj(a, "Request complete"));
            a.Jb = !1;
            try {
                if (bk(a))
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.Ad = 6;
                    try {
                        var b = 2 < Zj(a) ? a.Ba.statusText : ""
                    } catch (c) {
                        aj(a.F, "Can not get status: " + c.message),
                            b = ""
                    }
                    a.Pe = b + " [" + a.Sc() + "]";
                    Wj(a)
                }
            } finally {
                Xj(a)
            }
        }
}
    , Xj = function(a, b) {
    if (a.Ba) {
        Uj(a);
        var c = a.Ba
            , d = a.hg[0] ? Fa : null;
        a.Ba = null;
        a.hg = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            Yi(a.F, "Problem encountered resetting onreadystatechange: " + e.message)
        }
    }
}
    , Uj = function(a) {
    a.Ba && a.gg && (a.Ba.ontimeout = null);
    a.dg && (Ei(a.dg),
        a.dg = null)
};
Nj.prototype.ob = function() {
    return !!this.Ba
}
;
var bk = function(a) {
    var b = a.Sc();
    a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var c = !0;
            break a;
        default:
            c = !1
    }
    if (!c) {
        if (b = 0 === b)
            a = String(a.Zd).match(Aj)[1] || null,
            !a && n.self && n.self.location && (a = n.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                b = !Oj.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
    , Zj = function(a) {
    return a.Ba ? a.Ba.readyState : 0
};
Nj.prototype.Sc = function() {
    try {
        return 2 < Zj(this) ? this.Ba.status : -1
    } catch (a) {
        return -1
    }
}
;
var ck = function(a) {
    try {
        return a.Ba ? a.Ba.responseText : ""
    } catch (b) {
        return aj(a.F, "Can not get responseText: " + b.message),
            ""
    }
}
    , dk = function(a) {
    if (a.Ba) {
        a: {
            a = a.Ba.responseText;
            if (n.JSON)
                try {
                    var b = n.JSON.parse(a);
                    x("object" == typeof b);
                    var c = b;
                    break a
                } catch (d) {}
            c = cj(a)
        }
        return c
    }
};
Nj.prototype.getResponseHeader = function(a) {
    if (this.Ba && 4 == Zj(this))
        return a = this.Ba.getResponseHeader(a),
            null === a ? void 0 : a
}
;
Nj.prototype.getAllResponseHeaders = function() {
    return this.Ba && 4 == Zj(this) ? this.Ba.getAllResponseHeaders() || "" : ""
}
;
var Sj = function(a, b) {
    return b + " [" + a.Vi + " " + a.Zd + " " + a.Sc() + "]"
};
var ek = function(a, b, c) {
    Rj(a.url, function(d) {
        d = d.target;
        bk(d) ? b(ck(d)) : c(d.Sc())
    }, a.wn, a.body, a.vn, a.Zn, a.withCredentials)
};
var fk = function(a) {
    hf(this, a, -1, null)
};
w(fk, df);
var gk = function(a) {
    hf(this, a, -1, null)
};
w(gk, df);
var ik = function(a) {
    hf(this, a, 29, hk)
};
w(ik, df);
var hk = [3, 20, 27];
var kk = function(a) {
    hf(this, a, 17, jk)
};
w(kk, df);
var jk = [3, 5]
    , lk = function(a) {
    var b = Ua().toString();
    return B(a, 4, b)
}
    , mk = function(a, b) {
    return nf(a, 3, b)
}
    , nk = function(a, b) {
    return B(a, 14, b)
};
var pk = function(a) {
    hf(this, a, 6, ok)
};
w(pk, df);
var ok = [5];
var qk = function(a) {
    hf(this, a, -1, null)
};
w(qk, df);
var rk = new function() {
        this.a = qk
    }
;
var tk = function(a, b, c, d, e, f, g, k, l, m, q) {
    K.call(this);
    this.ba = a;
    this.N = b || Fa;
    this.h = new kk;
    this.Na = d;
    this.V = q;
    this.a = [];
    this.R = "";
    this.xa = Ta(Ef, 0, 1);
    this.G = e || null;
    this.m = c || null;
    this.C = g || !1;
    this.K = l || null;
    this.na = this.X = !1;
    this.W = this.O = -1;
    this.c = null;
    this.F = Xi("playlog.clearcut.ClearcutBase");
    this.Ue = !k;
    this.L = 0;
    this.ra = 1;
    this.aa = f || !1;
    a = new gk;
    a = B(a, 1, 1);
    f || (f = new fk,
        b = document.documentElement.getAttribute("lang"),
        f = B(f, 5, b),
        mf(a, 11, f));
    mf(this.h, 1, a);
    B(this.h, 2, this.ba);
    this.g = new bj(1E4);
    this.b = new Bi(this.g.Y());
    Lg(this, this.b);
    H(this.b, "tick", Ib(sk(this, m)), !1, this);
    this.w = new Bi(6E5);
    Lg(this, this.w);
    H(this.w, "tick", Ib(sk(this, m)), !1, this);
    this.C || this.w.start();
    this.aa || (H(Wf(), "beforeunload", this.v, !1, this),
        H(Wf(), "unload", this.v, !1, this),
        H(document, "pagehide", this.v, !1, this))
};
w(tk, K);
var sk = function(a, b) {
    return b ? function() {
            b().then(a.flush.bind(a))
        }
        : a.flush
};
tk.prototype.T = function() {
    this.v();
    tk.D.T.call(this)
}
;
var uk = function(a) {
    a.G || (a.G = .01 > a.xa() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.G
};
tk.prototype.log = function(a) {
    a = sf(a);
    var b = this.ra++;
    B(a, 21, b);
    if (!jf(a, 1)) {
        b = a;
        var c = Ua().toString();
        B(b, 1, c)
    }
    this.c && (b = sf(this.c),
        mf(a, 16, b));
    for (; 1E3 <= this.a.length; )
        this.a.shift(),
            ++this.L;
    this.a.push(a);
    this.dispatchEvent(new vk(a));
    this.C || this.b.enabled || this.b.start()
}
;
tk.prototype.flush = function(a, b) {
    if (0 == this.a.length)
        a && a();
    else {
        var c = Ua();
        if (this.W > c && this.O < c)
            $i(this.F, "Not flushing because server requested delay."),
            b && b("throttled");
        else {
            var d = nk(mk(lk(sf(this.h)), this.a), this.L);
            c = {};
            var e = this.N();
            e && (c.Authorization = e);
            var f = uk(this);
            this.m && (c["X-Goog-AuthUser"] = this.m,
                f = Hj(f, "authuser", this.m));
            this.K && (c["X-Goog-PageId"] = this.K,
                f = Hj(f, "pageId", this.K));
            if (e && this.R == e)
                $i(this.F, "XHR with unauthorized request not retried"),
                b && b("stale-auth-token");
            else {
                $i(this.F, "Flushing log to clearcut.");
                this.a = [];
                this.b.enabled && this.b.stop();
                this.L = 0;
                var g = d.v();
                c = {
                    url: f,
                    body: g,
                    Tq: 1,
                    vn: c,
                    wn: "POST",
                    withCredentials: this.Ue,
                    Zn: 0
                };
                f = v(function(k) {
                    this.g.reset();
                    Ci(this.b, this.g.Y());
                    if (k) {
                        try {
                            var l = JSON.parse(k.replace(")]}'\n", ""));
                            var m = new pk(l)
                        } catch (q) {
                            Zi(this.F, "Response parse failed: " + q)
                        }
                        m && (k = kf(m, "-1"),
                            k = Number(k),
                        0 < k && (this.O = Ua(),
                            this.W = this.O + k),
                            m.c ? (m.a || (m.a = {}),
                                rk.a ? (!m.a[175237375] && m.c[175237375] && (m.a[175237375] = new rk.a(m.c[175237375])),
                                    m = m.a[175237375]) : m = m.c[175237375]) : m = void 0,
                        m && (m = kf(m, -1),
                        -1 != m && (this.g = new bj(1 > m ? 1 : m),
                            Ci(this.b, this.g.Y()))))
                    }
                    a && a()
                }, this);
                g = v(function(k) {
                    lf(d, ik, 3);
                    var l = d.a[3];
                    l == ff && (l = d.a[3] = []);
                    var m = this.g;
                    m.a = Math.min(3E5, 2 * m.a);
                    m.b = Math.min(3E5, m.a + Math.round(.2 * (Math.random() - .5) * m.a));
                    Ci(this.b, this.g.Y());
                    401 == k && e && (this.R = e);
                    if (500 <= k && 600 > k || 401 == k || 0 == k)
                        this.a = l.concat(this.a),
                        this.C || this.b.enabled || this.b.start();
                    Zi(this.F, "Flush failed. Status code: " + k);
                    b && b("net-send-failed", k)
                }, this);
                this.V ? this.V.send(c, f, g) : this.Na(c, f, g)
            }
        }
    }
}
;
tk.prototype.v = function() {
    this.X && wk(this);
    this.na && xk(this);
    this.flush()
}
;
var wk = function(a) {
    $i(a.F, "Flushing log using sendBeacon.");
    yk(a, 32, 10, function(b, c) {
        b = Hj(b, "format", "json");
        return Wf().navigator.sendBeacon(b, c.v())
    })
}
    , xk = function(a) {
    $i(a.F, "Flushing log using Image GET.");
    yk(a, 6, 5, function(b, c) {
        c = c.v();
        for (var d = [], e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255,
                g >>= 8);
            d[e++] = g
        }
        c = cf(d, 3);
        c = Gj(b, "format", "base64json", "p", c);
        b = new Image;
        Gb(b, "HTMLImageElement");
        c = c instanceof Nc ? c : Vc(c, /^data:image\//i.test(c));
        b.src = Oc(c);
        return !0
    })
}
    , yk = function(a, b, c, d) {
    if (0 != a.a.length) {
        var e = uk(a);
        for (var f = e.search(Jj), g = 0, k, l = []; 0 <= (k = Ij(e, g, "format", f)); )
            l.push(e.substring(g, k)),
                g = Math.min(e.indexOf("&", k) + 1 || f, f);
        l.push(e.substr(g));
        e = l.join("").replace(Lj, "$1");
        e = Gj(e, "auth", a.N(), "authuser", a.m || "0");
        for (f = 0; f < c && a.a.length; ++f) {
            g = a.a.slice(0, b);
            k = mk(lk(sf(a.h)), g);
            if (!d(e, k))
                break;
            a.a = a.a.slice(g.length)
        }
    }
}
    , vk = function() {
    this.type = "event-logged"
};
w(vk, Mg);
var zk = function(a, b, c, d, e, f, g) {
    tk.call(this, a, Ki, b, ek, c, d, e, void 0, f, g)
};
w(zk, tk);
var Ak = function(a, b) {
    this.a = new zk(375,a,void 0,!1,!0);
    Lg(this, this.a);
    this.a.X = !!Wf().navigator.sendBeacon && (Ze || Ve && Re(45));
    this.a.na = !0;
    b && 0 < b.length && (a = new wf,
        a = B(a, 3, b || []),
        b = this.a,
        a ? (b.c || (b.c = new uf),
            a = a.v(),
            B(b.c, 4, a)) : b.c && B(b.c, 4, void 0));
    this.g = 0;
    this.b = new Bi(1E3);
    Lg(this, this.b);
    H(this.b, "tick", this.c, !1, this);
    this.b.start()
};
w(Ak, K);
Ak.prototype.T = function() {
    this.b.stop();
    ph(this.b, "tick", this.c, !1, this);
    this.c();
    Ak.D.T.call(this)
}
;
Ak.prototype.c = function() {
    0 < this.g && this.a.flush(v(this.h, this))
}
;
Ak.prototype.h = function() {
    this.g = 0
}
;
Ak.prototype.log = function(a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
}
;
var Bk = function(a) {
    return (a = a.exec(qd)) ? a[1] : ""
}
    , Ck = function() {
    if (Ve)
        return Bk(/Firefox\/([0-9.]+)/);
    if (A || xe || we)
        return Pe;
    if (Ze)
        return re() ? Bk(/CriOS\/([0-9.]+)/) : Bk(/Chrome\/([0-9.]+)/);
    if ($e && !re())
        return Bk(/Version\/([0-9.]+)/);
    if (We || Xe) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(qd);
        if (a)
            return a[1] + "." + a[2]
    } else if (Ye)
        return (a = Bk(/Android\s+([0-9.]+)/)) ? a : Bk(/Version\/([0-9.]+)/);
    return ""
}()
    , Dk = function(a) {
    return 0 <= Lc(Ck, a)
};
var Ek = function() {
    this.a = A ? Dk(9) : Ze && Dk(25) || A && Dk(8) || xe || Ve && Dk(19) || we && Dk(12.1) || $e && Dk(5.1) || Xe && Dk(3.2) || Ye && Dk(2.1)
};
Ga(Ek);
var Hk = function(a, b) {
    var c = Fk[b];
    b = Gk[b];
    c = null != c ? yb(c) : [];
    if (a.a && null != b)
        for (a = 0; a < b.length; a++)
            c.push(b[a]);
    return c
}
    , Jk = function(a) {
    return 0 <= a.indexOf("-i0-") && !Ik(a)
}
    , Ik = function(a) {
    return 0 <= a.indexOf("-i0-handwrit")
}
    , Fk = {
    af: ["latn-002-t-k0-und"],
    am: ["am-t-i0-und", "und-ethi-t-k0-und"],
    ar: ["ar-t-i0-und", "ar-t-k0-und"],
    be: ["be-t-i0-und", "be-t-k0-und"],
    bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
    bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
    bs: ["bs-t-k0-und"],
    ca: ["ca-t-k0-und"],
    chr: ["chr-t-k0-und", "chr-t-und-latn-k0-und"],
    cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
    cy: ["latn-002-t-k0-und"],
    da: ["da-t-k0-und"],
    de: ["de-t-k0-und", "de-ch-t-k0-und", "en-us-t-k0-intl"],
    el: ["el-t-i0-und", "el-t-k0-und"],
    en: ["en-t-k0-und", "en-t-k0-dvorak"],
    es: ["es-t-k0-und", "en-us-t-k0-intl"],
    et: ["et-t-k0-und"],
    eu: ["eu-t-k0-und"],
    fa: ["fa-t-i0-und", "fa-t-k0-und"],
    fi: ["fi-t-k0-und"],
    fr: ["fr-t-k0-und", "en-us-t-k0-intl"],
    ga: ["latn-002-t-k0-und"],
    gl: ["gl-t-k0-und"],
    gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
    ha: ["latn-002-t-k0-und"],
    hi: ["hi-t-i0-und", "hi-t-k0-und", "hi-t-k0-qwerty"],
    hr: ["hr-t-k0-und"],
    ht: ["fr-t-k0-und"],
    hu: ["hu-t-k0-101key"],
    hy: ["hy-hyr-t-k0-und", "hy-hyt-t-k0-und"],
    id: ["latn-002-t-k0-und"],
    ig: ["latn-002-t-k0-und"],
    is: ["is-t-k0-und"],
    it: ["it-t-k0-und", "en-us-t-k0-intl"],
    iw: ["he-t-i0-und", "he-t-k0-und"],
    jw: ["latn-002-t-k0-und"],
    ja: ["ja-t-ja-hira-i0-und"],
    ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
    kk: ["kk-t-k0-und"],
    km: ["km-t-k0-und"],
    kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
    ko: ["ko-t-k0-und"],
    ku: ["ku-t-k0-und"],
    ky: ["ky-cyrl-t-k0-und"],
    lb: ["fr-t-k0-und", "en-us-t-k0-intl"],
    lo: ["lo-t-k0-und"],
    lt: ["lt-t-k0-und"],
    lv: ["lv-t-k0-und"],
    mg: ["latn-002-t-k0-und"],
    mi: ["mi-t-k0-und"],
    mk: ["mk-t-k0-und"],
    ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
    mn: ["mn-cyrl-t-k0-und"],
    mr: ["mr-t-i0-und", "hi-t-k0-qwerty"],
    ms: ["latn-002-t-k0-und"],
    mt: ["mt-t-k0-und"],
    my: ["my-t-k0-und", "my-t-k0-myansan"],
    ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
    nl: ["nl-t-k0-und", "en-us-t-k0-intl"],
    no: ["no-t-k0-und"],
    ny: ["latn-002-t-k0-und"],
    pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
    pl: ["pl-t-k0-und"],
    ps: ["ps-t-k0-und"],
    pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", "en-us-t-k0-intl"],
    ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
    ru: ["ru-t-i0-und", "ru-t-k0-und"],
    rw: ["latn-002-t-k0-und"],
    sd: ["sd-t-k0-und"],
    si: ["si-t-i0-und", "si-t-k0-und"],
    sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
    sl: ["sl-t-k0-und"],
    sn: ["latn-002-t-k0-und"],
    so: ["latn-002-t-k0-und"],
    sq: ["sq-t-k0-und"],
    sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und", "sr-latn-t-k0-und"],
    st: ["latn-002-t-k0-und"],
    su: ["latn-002-t-k0-und"],
    sv: ["sv-t-k0-und"],
    sw: ["latn-002-t-k0-und"],
    ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
    te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
    tg: ["tg-t-k0-und"],
    th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
    tk: ["latn-002-t-k0-und"],
    tl: ["latn-002-t-k0-und"],
    tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
    tt: ["tt-t-k0-und"],
    ug: ["ug-t-k0-und"],
    uk: ["uk-t-i0-und", "uk-t-k0-101key"],
    ur: ["ur-t-i0-und", "ur-t-k0-und"],
    uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
    vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
    wo: ["latn-002-t-k0-und"],
    xh: ["latn-002-t-k0-und"],
    yi: ["yi-t-k0-und"],
    yo: ["latn-002-t-k0-und"],
    yue: ["yue-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982"],
    zu: ["latn-002-t-k0-und"],
    "zh-CN": "zh-t-i0-pinyin zh-t-i0-wubi-1986 zh-hant-t-i0-und zh-hant-t-i0-cangjie-1982 zh-hant-t-i0-pinyin yue-hant-t-i0-und".split(" "),
    "zh-TW": ["zh-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982", "zh-hant-t-i0-pinyin", "yue-hant-t-i0-und"]
}
    , Gk = {
    af: ["af-t-i0-handwrit"],
    am: ["am-t-i0-handwrit"],
    ar: ["ar-t-i0-handwrit"],
    auto: ["mul-t-i0-handwrit"],
    az: ["az-t-i0-handwrit"],
    be: ["be-t-i0-handwrit"],
    bg: ["bg-t-i0-handwrit"],
    bn: ["bn-t-i0-handwrit"],
    bs: ["bs-t-i0-handwrit"],
    ca: ["ca-t-i0-handwrit"],
    ceb: ["ceb-t-i0-handwrit"],
    co: ["co-t-i0-handwrit"],
    cs: ["cs-t-i0-handwrit"],
    cy: ["cy-t-i0-handwrit"],
    da: ["da-t-i0-handwrit"],
    de: ["de-t-i0-handwrit"],
    el: ["el-t-i0-handwrit"],
    en: ["en-t-i0-handwrit"],
    eo: ["eo-t-i0-handwrit"],
    es: ["es-t-i0-handwrit"],
    et: ["et-t-i0-handwrit"],
    eu: ["eu-t-i0-handwrit"],
    fa: ["fa-t-i0-handwrit"],
    fi: ["fi-t-i0-handwrit"],
    fr: ["fr-t-i0-handwrit"],
    fy: ["fy-t-i0-handwrit"],
    ga: ["ga-t-i0-handwrit"],
    gd: ["gd-t-i0-handwrit"],
    gl: ["gl-t-i0-handwrit"],
    gu: ["gu-t-i0-handwrit"],
    haw: ["haw-t-i0-handwrit"],
    hi: ["hi-t-i0-handwrit"],
    hmn: ["hmn-t-i0-handwrit"],
    hr: ["hr-t-i0-handwrit"],
    ht: ["ht-t-i0-handwrit"],
    hu: ["hu-t-i0-handwrit"],
    hy: ["hy-t-i0-handwrit"],
    id: ["id-t-i0-handwrit"],
    is: ["is-t-i0-handwrit"],
    it: ["it-t-i0-handwrit"],
    iw: ["he-t-i0-handwrit"],
    ja: ["ja-t-i0-handwrit"],
    jv: ["jv-t-i0-handwrit"],
    ka: ["ka-t-i0-handwrit"],
    kk: ["kk-t-i0-handwrit"],
    km: ["km-t-i0-handwrit"],
    kn: ["kn-t-i0-handwrit"],
    ko: ["ko-t-i0-handwrit"],
    ku: ["ku-t-i0-handwrit"],
    ky: ["ky-t-i0-handwrit"],
    la: ["la-t-i0-handwrit"],
    lb: ["lb-t-i0-handwrit"],
    lo: ["lo-t-i0-handwrit"],
    lt: ["lt-t-i0-handwrit"],
    lv: ["lv-t-i0-handwrit"],
    mg: ["mg-t-i0-handwrit"],
    mi: ["mi-t-i0-handwrit"],
    mk: ["mk-t-i0-handwrit"],
    ml: ["ml-t-i0-handwrit"],
    mn: ["mn-t-i0-handwrit"],
    mr: ["mr-t-i0-handwrit"],
    ms: ["ms-t-i0-handwrit"],
    mt: ["mt-t-i0-handwrit"],
    my: ["my-t-i0-handwrit"],
    ne: ["ne-t-i0-handwrit"],
    nl: ["nl-t-i0-handwrit"],
    no: ["no-t-i0-handwrit"],
    ny: ["ny-t-i0-handwrit"],
    pa: ["pa-t-i0-handwrit"],
    pl: ["pl-t-i0-handwrit"],
    pt: ["pt-t-i0-handwrit"],
    ro: ["ro-t-i0-handwrit"],
    ru: ["ru-t-i0-handwrit"],
    si: ["si-t-i0-handwrit"],
    sk: ["sk-t-i0-handwrit"],
    sl: ["sl-t-i0-handwrit"],
    sm: ["sm-t-i0-handwrit"],
    sn: ["sn-t-i0-handwrit"],
    so: ["so-t-i0-handwrit"],
    sq: ["sq-t-i0-handwrit"],
    sr: ["sr-t-i0-handwrit"],
    su: ["su-t-i0-handwrit"],
    sv: ["sv-t-i0-handwrit"],
    sw: ["sw-t-i0-handwrit"],
    ta: ["ta-t-i0-handwrit"],
    te: ["te-t-i0-handwrit"],
    tg: ["tg-t-i0-handwrit"],
    th: ["th-t-i0-handwrit"],
    tl: ["fil-t-i0-handwrit"],
    tr: ["tr-t-i0-handwrit"],
    uk: ["uk-t-i0-handwrit"],
    ur: ["ur-t-i0-handwrit"],
    uz: ["uz-t-i0-handwrit"],
    vi: ["vi-t-i0-handwrit"],
    xh: ["xh-t-i0-handwrit"],
    "zh-CN": ["zh-t-i0-handwrit"],
    zu: ["zu-t-i0-handwrit"]
};
var Kk = function(a) {
    hf(this, a, -1, null)
};
w(Kk, df);
Kk.prototype.Od = function() {
    return jf(this, 1)
}
;
Kk.prototype.gb = function() {
    return jf(this, 4)
}
;
var Lk = function(a) {
    hf(this, a, -1, null)
};
w(Lk, df);
var Mk = function(a) {
    hf(this, a, -1, null)
};
w(Mk, df);
var Nk = function(a) {
    hf(this, a, -1, null)
};
w(Nk, df);
var Pk = function(a) {
    hf(this, a, -1, Ok)
};
w(Pk, df);
var Ok = [1];
var Qk = function(a) {
    hf(this, a, -1, null)
};
w(Qk, df);
var Sk = function(a) {
    hf(this, a, -1, null)
};
w(Sk, df);
var Tk = function(a) {
    hf(this, a, -1, null)
};
w(Tk, df);
var Uk = function(a) {
    hf(this, a, -1, null)
};
w(Uk, df);
var Vk = function(a) {
    hf(this, a, -1, null)
};
w(Vk, df);
Vk.prototype.Ta = function() {
    return jf(this, 1)
}
;
var Wk = function(a) {
    hf(this, a, -1, null)
};
w(Wk, df);
var Yk = function(a) {
    hf(this, a, -1, Xk)
};
w(Yk, df);
var Xk = [1, 3, 4];
var Zk = function(a) {
    hf(this, a, -1, null)
};
w(Zk, df);
var $k = function() {
    var a = new Zk;
    return B(a, 1, 1)
};
var al = function(a) {
    hf(this, a, -1, null)
};
w(al, df);
al.prototype.Lb = function() {
    return jf(this, 1)
}
;
var bl = function(a) {
    hf(this, a, -1, null)
};
w(bl, df);
var dl = function(a) {
    hf(this, a, -1, cl)
};
w(dl, df);
var cl = [1];
dl.prototype.gb = function() {
    return jf(this, 5)
}
;
var el = function(a) {
    hf(this, a, -1, null)
};
w(el, df);
var gl = function(a) {
    hf(this, a, -1, fl)
};
w(gl, df);
var fl = [2];
var hl = function(a) {
    hf(this, a, -1, null)
};
w(hl, df);
var il = function() {
    var a = new hl;
    return B(a, 1, 3)
};
var jl = function(a) {
    hf(this, a, -1, null)
};
w(jl, df);
var kl = function(a) {
    hf(this, a, -1, null)
};
w(kl, df);
kl.prototype.sf = function() {
    return jf(this, 4)
}
;
kl.prototype.Li = function() {
    return null != jf(this, 4)
}
;
var ll = function(a) {
    hf(this, a, -1, null)
};
w(ll, df);
var nl = function(a) {
    hf(this, a, -1, ml)
};
w(nl, df);
var ml = [3, 4];
var pl = function(a) {
    hf(this, a, -1, ol)
};
w(pl, df);
var ol = [3];
pl.prototype.Be = function() {
    return jf(this, 1)
}
;
var rl = function(a) {
    hf(this, a, -1, ql)
};
w(rl, df);
var ql = [2];
var tl = function(a) {
    hf(this, a, -1, sl)
};
w(tl, df);
var sl = [26, 80];
tl.prototype.Ce = function() {
    return jf(this, 1)
}
;
tl.prototype.Be = function() {
    return jf(this, 53)
}
;
var ul = function() {
    this.h = 0;
    this.G = this.v = this.g = this.c = this.w = "";
    this.m = this.b = this.C = 0;
    Ek.M();
    this.a = null
}
    , vl = {
    bh: 27,
    btn: 1,
    clks: 2,
    clkt: 3,
    pb: 4,
    sel: 5,
    selalt: 6,
    tws_confirm: 7,
    tws_lsugg: 8,
    tws_revert: 9,
    tws_spell: 10,
    is: 11
};
Ga(ul);
var wl = function() {
    var a = DATA.DisplayLanguage
        , b = ul.M();
    b.h = 2;
    b.w = a;
    return b
}
    , xl = function(a) {
    var b = 0;
    0 <= a.indexOf("-k0-") ? b = 2 : Jk(a) ? b = 1 : Ik(a) && (b = 5);
    return b
}
    , yl = function(a, b) {
    t(b) && (b = vl[b],
        b = null != b ? b : 0);
    a.C = b
};
ul.prototype.store = function(a) {
    B(a, 65, this.h);
    B(a, 16, this.c);
    B(a, 14, this.v);
    B(a, 1, this.g);
    B(a, 50, this.w);
    B(a, 52, this.G);
    B(a, 32, this.b)
}
;
new ArrayBuffer(0);
var Al = function(a, b) {
    var c = a[b - 1];
    if (null == c || zl(c))
        a = a[a.length - 1],
        zl(a) && (c = a[b]);
    return c
}
    , zl = function(a) {
    return Ma(a) && !Ka(a)
};
var Cl = function(a, b) {
    return a === b ? !0 : ob(a, function(c, d) {
        if (zl(c)) {
            d = cb(c);
            for (var e in d) {
                c = d[e];
                var f = Al(b, +e);
                if (!Bl(c, f))
                    return !1
            }
            return !0
        }
        e = Al(b, d + 1);
        return Bl(c, e)
    }) && ob(b, function(c, d) {
        if (zl(c)) {
            c = cb(c);
            for (var e in c)
                if (null == Al(a, +e))
                    return !1;
            return !0
        }
        return null == c == (null == Al(a, d + 1))
    })
}
    , Bl = function(a, b) {
    return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Ia(a) && Ia(b) ? Cl(db(a), db(b)) : !1
};
var Dl = function() {}
    , El = function(a, b, c) {
    a = a.Va = b = b || [];
    if (a.length) {
        var d = a.length - 1;
        b = a[d];
        if (zl(b) && (delete a[d],
        d < c)) {
            d = 0;
            for (var e in b) {
                var f = +e;
                f <= c ? (a[f - 1] = b[e],
                    delete b[e]) : d++
            }
            d && (a[c] = b)
        }
    }
}
    , Fh = function(a, b) {
    return null != a.Va[b]
}
    , Fl = function(a, b, c) {
    a = a.Va[b];
    return null != a ? a : c
}
    , Gl = function(a, b) {
    return !!Fl(a, b, void 0)
}
    , Jh = function(a, b) {
    return Fl(a, b, 0)
}
    , J = function(a, b, c) {
    return Fl(a, b, c || "")
}
    , Hl = function(a, b) {
    a = a.Va;
    a[b] || (a[b] = []);
    return a[b]
}
    , Hh = function(a, b, c) {
    return Hl(a, b)[c]
}
    , Il = function(a, b, c) {
    return Hl(a, b)[c]
}
    , Jl = function(a, b, c) {
    for (var d = [], e = 0; e < I(a, b); e++)
        d.push(new c(Il(a, b, e)));
    return d.slice().values()
}
    , I = function(a, b) {
    return a.Va[b] ? a.Va[b].length : 0
};
Dl.prototype.Ab = function() {
    return this.Va
}
;
var Kl = function(a) {
    var b = a.za();
    a = a.Va;
    for (var c = {}, d = 0; d < a.length; d++)
        if (void 0 !== a[d] && null !== a[d]) {
            var e = !1, f = void 0, g = void 0, k;
            for (k in b)
                if (g = b[k],
                    f = k,
                g.H == d) {
                    e = !0;
                    break
                }
            if (e)
                if (g = x(g),
                    g.sa)
                    if (g.J)
                        for (c[f] = [],
                                 e = 0; e < a[d].length; e++)
                            c[f].push(g.sa(a[d][e]));
                    else
                        c[f] = g.sa(a[d]);
                else
                    c[f] = a[d]
        }
    return c
};
Dl.prototype.toString = function() {
    return JSON.stringify(Kl(this))
}
;
var Ll = function(a, b) {
    var c = [];
    a = new a(c);
    var d = hb(a, Dl).za(), e;
    for (e in b) {
        var f = x(d[e])
            , g = b[e];
        if (f.va)
            if (g instanceof Array) {
                var k = [];
                for (var l = 0; l < g.length; l++)
                    k.push(f.va(g[l]).Ab())
            } else
                k = f.va(g).Ab();
        else
            k = g;
        c[f.H] = k
    }
    return a
};
var Ml = function(a) {
    El(this, a, 1)
};
w(Ml, Dl);
var Nl = {
    romanization: {
        H: 0,
        J: !1
    }
};
Ml.prototype.za = function() {
    return Nl
}
;
var Ol = function(a) {
    El(this, a, 3)
};
w(Ol, Dl);
var Pl = {
    source_span_index: {
        H: 0,
        J: !1
    },
    target_span_index: {
        H: 1,
        J: !1
    },
    direction: {
        H: 2,
        J: !1
    }
};
Ol.prototype.za = function() {
    return Pl
}
;
var Ql = function(a) {
    El(this, a, 2)
};
w(Ql, Dl);
var Rl = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Ql.prototype.za = function() {
    return Rl
}
;
var Sl = function(a) {
    El(this, a, 3)
};
w(Sl, Dl);
var Tl = {
    source_span: {
        H: 0,
        va: function(a) {
            return Ll(Ql, a)
        },
        sa: function(a) {
            return Kl(new Ql(a))
        },
        J: !0
    },
    target_span: {
        H: 1,
        va: function(a) {
            return Ll(Ql, a)
        },
        sa: function(a) {
            return Kl(new Ql(a))
        },
        J: !0
    },
    link: {
        H: 2,
        va: function(a) {
            return Ll(Ol, a)
        },
        sa: function(a) {
            return Kl(new Ol(a))
        },
        J: !0
    }
};
Sl.prototype.za = function() {
    return Tl
}
;
var Ul = function(a) {
    El(this, a, 2)
};
w(Ul, Dl);
var Vl = {
    model_path: {
        H: 0,
        J: !1
    },
    label: {
        H: 1,
        J: !1
    }
};
Ul.prototype.za = function() {
    return Vl
}
;
var Wl = function(a) {
    El(this, a, 2)
};
w(Wl, Dl);
var Xl = {
    checkpoint_md5: {
        H: 0,
        J: !1
    },
    launch_doc: {
        H: 1,
        J: !1
    }
};
Wl.prototype.za = function() {
    return Xl
}
;
var Yl = function(a) {
    El(this, a, 1)
};
w(Yl, Dl);
var Zl = {
    model_tracking: {
        H: 0,
        va: function(a) {
            return Ll(Wl, a)
        },
        sa: function(a) {
            return Kl(new Wl(a))
        },
        J: !1
    }
};
Yl.prototype.za = function() {
    return Zl
}
;
var $l = function(a) {
    El(this, a, 9)
};
w($l, Dl);
var am = {
    trans: {
        H: 0,
        J: !1
    },
    orig: {
        H: 1,
        J: !1
    },
    translit: {
        H: 2,
        J: !1
    },
    src_translit: {
        H: 3,
        J: !1
    },
    backend: {
        H: 4,
        J: !1
    },
    model: {
        H: 5,
        J: !0
    },
    word_alignment: {
        H: 6,
        va: function(a) {
            return Ll(Sl, a)
        },
        sa: function(a) {
            return Kl(new Sl(a))
        },
        J: !1
    },
    model_specification: {
        H: 7,
        va: function(a) {
            return Ll(Ul, a)
        },
        sa: function(a) {
            return Kl(new Ul(a))
        },
        J: !0
    },
    translation_engine_debug_info: {
        H: 8,
        va: function(a) {
            return Ll(Yl, a)
        },
        sa: function(a) {
            return Kl(new Yl(a))
        },
        J: !0
    }
};
$l.prototype.za = function() {
    return am
}
;
$l.prototype.Tc = function() {
    return J(this, 0)
}
;
$l.prototype.Li = function() {
    return Fh(this, 4)
}
;
$l.prototype.sf = function() {
    return Fl(this, 4, 0)
}
;
var bm = function(a) {
    El(this, a, 4)
};
w(bm, Dl);
var cm = {
    gender: {
        H: 0,
        J: !1
    },
    translation: {
        H: 1,
        J: !1
    },
    sentences: {
        H: 2,
        va: function(a) {
            return Ll($l, a)
        },
        sa: function(a) {
            return Kl(new $l(a))
        },
        J: !0
    },
    romanization: {
        H: 3,
        va: function(a) {
            return Ll(Ml, a)
        },
        sa: function(a) {
            return Kl(new Ml(a))
        },
        J: !1
    }
};
h = bm.prototype;
h.za = function() {
    return cm
}
;
h.Rc = function() {
    return Fl(this, 0, 0)
}
;
h.ub = function() {
    return J(this, 1)
}
;
h.ic = function() {
    return I(this, 2)
}
;
h.cb = function(a) {
    return new $l(Il(this, 2, a))
}
;
var dm = function(a) {
    El(this, a, 2)
};
w(dm, Dl);
var em = {
    gendered_translations: {
        H: 0,
        va: function(a) {
            return Ll(bm, a)
        },
        sa: function(a) {
            return Kl(new bm(a))
        },
        J: !0
    },
    status: {
        H: 1,
        J: !1
    }
};
dm.prototype.za = function() {
    return em
}
;
dm.prototype.Sc = function() {
    return Fl(this, 1, 0)
}
;
var L = function() {
    this.b = null;
    this.a = ul.M()
};
w(L, Jg);
Ga(L);
L.prototype.config = function(a, b) {
    this.b = new Ak(a,b);
    Lg(this, this.b)
}
;
var hm = function(a, b, c, d, e) {
    b = fm(a, 237, b, void 0, void 0, void 0, e);
    if (null != c) {
        e = new Pk;
        var f = a.a.a;
        null != f && B(e, 1, f || []);
        B(e, 2, gm(c));
        mf(b, 83, e)
    }
    p(d) && 0 != d && B(b, 74, d);
    N(a, b)
}
    , im = function(a, b, c) {
    N(a, fm(a, 190, b, c, !0, 0))
}
    , jm = function(a, b, c, d) {
    N(a, fm(a, 78, b, c, d, 0))
}
    , km = function(a, b) {
    var c = O(a, 21)
        , d = il();
    mf(c, 56, d);
    if (null != b) {
        d = new Pk;
        var e = a.a.a;
        null != e && B(d, 1, e || []);
        B(d, 2, gm(b));
        mf(c, 83, d)
    }
    N(a, c)
}
    , lm = {}
    , mm = (lm.st = 231,
    lm.unst = 232,
    lm.sw = 229,
    lm.lnk = 230,
    lm)
    , nm = function(a, b, c) {
    var d = O(a, 148)
        , e = new Mk;
    b = B(e, 1, b);
    c && B(b, 5, c);
    mf(d, 63, b);
    N(a, d)
}
    , om = function(a, b) {
    b = O(a, b);
    var c = $k();
    mf(b, 46, c);
    N(a, b)
}
    , pm = function(a, b, c, d, e, f) {
    b = O(a, b ? 84 : 85);
    var g = $k();
    c = B(g, 2, c);
    d = B(c, 3, d);
    e = B(d, 4, e + 1);
    0 < f.length && B(e, 5, f);
    mf(b, 46, e);
    N(a, b)
}
    , rm = function(a, b, c) {
    N(a, qm(a, 251, b, c))
}
    , tm = function(a, b) {
    N(a, sm(a, 71, b))
}
    , um = function(a, b) {
    N(a, sm(a, 72, b))
}
    , vm = function(a, b) {
    var c = O(a, 244);
    b = B(c, 74, b);
    N(a, b)
}
    , xm = function(a, b) {
    N(a, wm(a, 245, b))
}
    , ym = function(a) {
    N(a, O(a, 223))
}
    , zm = function(a) {
    var b = L.M()
        , c = O(b, 22)
        , d = il();
    a = B(d, 2, a);
    mf(c, 56, a);
    N(b, c)
};
L.prototype.c = function() {
    N(this, O(this, 145))
}
;
var Am = function(a, b, c, d, e, f, g, k) {
    b = O(a, b);
    var l = new kl;
    c = B(l, 1, c);
    c = B(c, 4, 1);
    d = B(c, 7, d);
    e = B(d, 5, e);
    f && B(e, 8, f);
    p(g) && B(e, 6, g + 1);
    mf(b, 43, e);
    null != k && (f = new Pk,
        k = B(f, 2, gm(k)),
        f = a.a.a,
    null != f && B(k, 1, f || []),
        mf(b, 83, k));
    N(a, b)
}
    , Bm = function(a) {
    var b = O(a, 1);
    B(b, 53, a.a.C);
    N(a, b);
    yl(a.a, 0)
}
    , Cm = function(a, b, c, d) {
    b = O(a, b);
    var e = new ll;
    c = B(e, 1, c);
    d = B(c, 2, d);
    mf(b, 75, d);
    N(a, b)
};
L.prototype.g = function() {
    N(this, O(this, 25))
}
;
var Dm = function(a, b) {
    for (var c = O(a, 339), d = new Pk, e = 0; e < b.length; e++) {
        var f = gm(b[e].Rc());
        hb(d, df);
        jf(d, 1).push(f)
    }
    b = jf(d, 1);
    a.a.a = b;
    mf(c, 83, d);
    N(a, c)
}
    , O = function(a, b) {
    var c = new tl;
    a.a.store(c);
    B(c, 31, b);
    return c
}
    , fm = function(a, b, c, d, e, f, g) {
    var k = new Kk;
    c = B(k, 1, c);
    p(d) && B(c, 4, d);
    p(e) && B(c, 2, e);
    p(f) && 0 != f && B(c, 3, f);
    p(g) && 0 != g && B(c, 5, g);
    a = O(a, b);
    return mf(a, 61, c)
}
    , Em = function(a, b, c, d) {
    var e = new Qk;
    c = B(e, 1, c + 1);
    d = B(c, 2, d);
    a = O(a, b);
    return mf(a, 60, d)
}
    , Fm = function(a, b, c, d, e, f, g, k) {
    for (var l = new Yk, m = [], q = 0; q < c.length; q++) {
        var r = c[q];
        var u = new Sk;
        u = B(u, 1, r[0]);
        r = B(u, 2, !!r[1]);
        m.push(r)
    }
    nf(l, 1, m);
    c = new Wk;
    d = B(c, 1, !!d);
    mf(l, 2, d);
    d = [];
    for (c = 0; c < e.length; c++)
        m = new Vk,
            m = B(m, 1, e[c]),
            d.push(m);
    nf(l, 3, d);
    e = [];
    for (d = 0; d < f.length; d++)
        c = f[d],
            m = new Tk,
            m = B(m, 1, !!c[0]),
            c = B(m, 2, !!c[1]),
            e.push(c);
    nf(l, 4, e);
    g && (f = new Uk,
        f = B(f, 1, !0),
        mf(l, 5, f));
    0 != k && B(l, 6, k);
    a = O(a, b);
    return mf(a, 66, l)
}
    , Gm = function(a, b) {
    a = O(a, b);
    b = new dl;
    b = B(b, 1, []);
    B(b, 4, 1);
    mf(a, 59, b);
    return a
}
    , qm = function(a, b, c, d) {
    var e = new bl;
    d = B(e, 1, d);
    a = O(a, b);
    c = B(a, 74, c);
    return mf(c, 71, d)
}
    , sm = function(a, b, c) {
    var d = new el;
    c = B(d, 1, c);
    a = O(a, b);
    return mf(a, 44, c)
}
    , wm = function(a, b, c) {
    a = O(a, b);
    b = new dl;
    c = B(b, 5, c);
    p(void 0) && B(c, 6, void 0);
    mf(a, 59, c);
    return a
}
    , N = function(a, b) {
    if (a.b) {
        var c = new ik;
        b = b.v();
        c = B(c, 8, b);
        a.b.log(c)
    }
}
    , gm = function(a) {
    switch (a) {
        case 2:
            return 1;
        case 1:
            return 2;
        default:
            return 0
    }
};
var Hm = function() {
    this.g = [];
    this.b = {};
    this.a = {};
    this.h = !1;
    this.wh = 1;
    this.pe = {};
    this.c = null;
    this.v = "";
    H(window, "beforeunload", this.G, !1, this)
};
Ga(Hm);
var Im = function(a, b, c) {
    if (null == b)
        return "1";
    switch (Ha(b)) {
        case "string":
            return a = b,
            !(64 < a.length) || null != c && c || (a = a.substr(0, 64)),
                ce(a);
        case "number":
            return "" + b;
        case "boolean":
            return b ? "1" : "0";
        case "array":
            var d = [], e;
            for (e in b)
                d.push(Im(a, b[e], c));
            return d.join(",");
        case "object":
            d = [];
            for (e in b)
                d.push(Jm(a, e, b[e], c));
            return d.join(",");
        default:
            return ""
    }
}
    , Jm = function(a, b, c, d) {
    return [ce(b), Im(a, c, d || "smtalt" == b)].join("=")
};
Hm.prototype.log = function(a, b) {
    this.g.push([a, b]);
    this.h || (this.h = !0,
        Di(this.m, 0, this))
}
;
var Mm = function(a, b, c, d, e) {
    b = a.v + "/gen204?" + Jm(a, c, d) + "&" + Jm(a, "client", b, !0);
    e && (b += Km(a, e));
    Lm(a, b)
}
    , Km = function(a, b) {
    var c = "";
    p(b) && Kb(b, function(d, e) {
        if (d instanceof Array)
            for (var f = 0; f < d.length; f++)
                c += "&" + Jm(this, e, d[f]);
        else
            c += "&" + Jm(this, e, d)
    }, a);
    return c
};
Hm.prototype.m = function() {
    for (var a = 0; a < this.g.length; a++) {
        var b = this.g[a];
        Nm(this, b[0], b[1])
    }
    this.g = [];
    this.h = !1
}
;
var Nm = function(a, b, c) {
    Lm(a, a.v + "/gen204?" + (a.c ? ["client=", a.c, "&"].join("") : "") + Jm(a, b, c))
}
    , Lm = function(a, b) {
    var c = new Image
        , d = a.wh++;
    a.pe[d] = c;
    c.onload = c.onerror = function() {
        delete Hm.M().pe[d]
    }
    ;
    c.src = b;
    c = null
}
    , Pm = function(a, b, c, d) {
    var e = null;
    b in a.b && (e = a.b[b]);
    a.b[b] = Om(e, c, d)
}
    , Qm = function(a, b) {
    var c = 0
        , d = null;
    b in a.a && (d = a.a[b],
        c = d[0],
        d = d[1]);
    d = Om(d, 1, "accumulate");
    a.a[b] = [c, d];
    Ei(a.a[b][0]);
    c = Di(v(a.w, a, b), 2E3);
    a.a[b][0] = c
};
Hm.prototype.w = function(a) {
    Nm(this, a, this.a[a][1]);
    a in this.a && (Ei(this.a[a][0]),
        delete this.a[a])
}
;
var Rm = function(a, b, c) {
    null != b || (b = 1);
    "accumulate" == c ? (isNaN(a) && (a = parseInt(a, 10)),
    isNaN(b) && (b = parseInt(b, 10)),
        a += b) : a = b;
    return a
}
    , Om = function(a, b, c) {
    if ("object" == Ha(b)) {
        "object" != Ha(a) && (a = {});
        for (var d in b)
            a[d] = Rm(d in a ? a[d] : null, b[d], c)
    } else
        a = Rm(a, b, c);
    return a
}
    , Sm = function(a) {
    var b = [], c;
    for (c in a.b)
        b.push(Jm(a, c, a.b[c]));
    a.b = {};
    return b.join("&")
};
Hm.prototype.G = function() {
    this.m();
    for (var a in this.a)
        0 != this.a[a] && this.w(a)
}
;
var Tm = function(a, b) {
    this.b = this.m = this.c = "";
    this.v = null;
    this.h = this.w = "";
    this.g = !1;
    var c;
    a instanceof Tm ? (this.g = p(b) ? b : a.g,
        Um(this, a.c),
        this.m = a.m,
        this.b = a.b,
        Vm(this, a.v),
        Wm(this, a.w),
        Xm(this, Ym(a.a)),
        this.h = a.h) : a && (c = String(a).match(Aj)) ? (this.g = !!b,
        Um(this, c[1] || "", !0),
        this.m = Zm(c[2] || ""),
        this.b = Zm(c[3] || "", !0),
        Vm(this, c[4]),
        Wm(this, c[5] || "", !0),
        Xm(this, c[6] || "", !0),
        this.h = Zm(c[7] || "")) : (this.g = !!b,
        this.a = new an(null,this.g))
};
Tm.prototype.toString = function() {
    var a = []
        , b = this.c;
    b && a.push(bn(b, cn, !0), ":");
    var c = this.b;
    if (c || "file" == b)
        a.push("//"),
        (b = this.m) && a.push(bn(b, cn, !0), "@"),
            a.push(ce(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.v,
        null != c && a.push(":", String(c));
    if (c = this.w)
        this.b && "/" != c.charAt(0) && a.push("/"),
            a.push(bn(c, "/" == c.charAt(0) ? dn : en, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.h) && a.push("#", bn(c, fn));
    return a.join("")
}
;
var Um = function(a, b, c) {
    a.c = c ? Zm(b, !0) : b;
    a.c && (a.c = a.c.replace(/:$/, ""))
}
    , Vm = function(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.v = b
    } else
        a.v = null
}
    , Wm = function(a, b, c) {
    a.w = c ? Zm(b, !0) : b
}
    , Xm = function(a, b, c) {
    b instanceof an ? (a.a = b,
        gn(a.a, a.g)) : (c || (b = bn(b, hn)),
        a.a = new an(b,a.g))
}
    , kn = function(a, b, c) {
    Ia(c) || (c = [String(c)]);
    jn(a.a, b, c)
}
    , ln = function(a) {
    return a instanceof Tm ? new Tm(a) : new Tm(a,void 0)
}
    , Zm = function(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}
    , bn = function(a, b, c) {
    return t(a) ? (a = encodeURI(a).replace(b, mn),
    c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
}
    , mn = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
    , cn = /[#\/\?@]/g
    , en = /[#\?:]/g
    , dn = /[#\?]/g
    , hn = /[#\?@]/g
    , fn = /#/g
    , an = function(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.h = !!b
}
    , nn = function(a) {
    a.a || (a.a = new uj,
        a.b = 0,
    a.c && Bj(a.c, function(b, c) {
        a.add(de(b), c)
    }))
};
an.prototype.Ng = function() {
    nn(this);
    return this.b
}
;
an.prototype.add = function(a, b) {
    nn(this);
    this.c = null;
    a = on(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = $a(this.b) + 1;
    return this
}
;
var pn = function(a, b) {
    nn(a);
    b = on(a, b);
    xj(a.a, b) && (a.c = null,
        a.b = $a(a.b) - a.a.get(b).length,
        a = a.a,
    wj(a.b, b) && (delete a.b[b],
        a.c--,
        a.g++,
    a.a.length > 2 * a.c && vj(a)))
}
    , qn = function(a, b) {
    nn(a);
    b = on(a, b);
    return xj(a.a, b)
};
h = an.prototype;
h.forEach = function(a, b) {
    nn(this);
    this.a.forEach(function(c, d) {
        y(c, function(e) {
            a.call(b, e, d, this)
        }, this)
    }, this)
}
;
h.Db = function() {
    nn(this);
    for (var a = this.a.Wb(), b = this.a.Db(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
}
;
h.Wb = function(a) {
    nn(this);
    var b = [];
    if (t(a))
        qn(this, a) && (b = wb(b, this.a.get(on(this, a))));
    else {
        a = this.a.Wb();
        for (var c = 0; c < a.length; c++)
            b = wb(b, a[c])
    }
    return b
}
;
h.set = function(a, b) {
    nn(this);
    this.c = null;
    a = on(this, a);
    qn(this, a) && (this.b = $a(this.b) - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = $a(this.b) + 1;
    return this
}
;
h.get = function(a, b) {
    if (!a)
        return b;
    a = this.Wb(a);
    return 0 < a.length ? String(a[0]) : b
}
;
var jn = function(a, b, c) {
    pn(a, b);
    0 < c.length && (a.c = null,
        a.a.set(on(a, b), yb(c)),
        a.b = $a(a.b) + c.length)
};
an.prototype.toString = function() {
    if (this.c)
        return this.c;
    if (!this.a)
        return "";
    for (var a = [], b = this.a.Db(), c = 0; c < b.length; c++) {
        var d = b[c]
            , e = ce(d);
        d = this.Wb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + ce(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
}
;
var Ym = function(a) {
    var b = new an;
    b.c = a.c;
    a.a && (b.a = new uj(a.a),
        b.b = a.b);
    return b
}
    , on = function(a, b) {
    b = String(b);
    a.h && (b = b.toLowerCase());
    return b
}
    , gn = function(a, b) {
    b && !a.h && (nn(a),
        a.c = null,
        a.a.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (pn(this, d),
                jn(this, e, c))
        }, a));
    a.h = b
};
an.prototype.g = function(a) {
    for (var b = 0; b < arguments.length; b++)
        zj(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
}
;
var rn = {
    $q: !0
}
    , sn = {
    dr: !0
}
    , tn = {
    cr: !0
}
    , un = {
    Zq: !0
}
    , vn = {
    Yq: !0
}
    , wn = function() {
    throw Error("Do not instantiate directly");
};
wn.prototype.qd = null;
wn.prototype.Sa = function() {
    return this.content
}
;
wn.prototype.toString = function() {
    return this.content
}
;
var xn = function(a) {
    if (a.oc !== rn)
        throw Error("Sanitized content was not of kind HTML.");
    return Pd(ec("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.qd)
}
    , yn = function() {
    wn.call(this)
};
w(yn, wn);
yn.prototype.oc = rn;
var zn = function() {
    wn.call(this)
};
w(zn, wn);
zn.prototype.oc = sn;
zn.prototype.qd = 1;
var An = function() {
    wn.call(this)
};
w(An, wn);
An.prototype.oc = tn;
An.prototype.qd = 1;
var Bn = function() {
    wn.call(this)
};
w(Bn, wn);
Bn.prototype.oc = un;
Bn.prototype.qd = 1;
var Cn = function() {
    wn.call(this)
};
w(Cn, wn);
Cn.prototype.oc = vn;
Cn.prototype.qd = 1;
var Dn = function(a, b, c) {
    (b = null != a && a.oc === b) && x(a.constructor === c);
    return b
};
var En = function(a) {
    if (null != a)
        switch (a.qd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
    return null
}
    , R = function(a) {
    return Dn(a, rn, yn) ? a : a instanceof Ad ? P(Bd(a).toString(), a.Vc()) : P(ee(String(String(a))), En(a))
}
    , P = function(a) {
    function b(c) {
        this.content = c
    }
    b.prototype = a.prototype;
    return function(c, d) {
        c = new b(String(c));
        void 0 !== d && (c.qd = d);
        return c
    }
}(yn)
    , Fn = function(a, b) {
    return La(a) && La(b) ? a.oc !== b.oc ? !1 : a.toString() === b.toString() : a instanceof wn && b instanceof wn ? a.oc != b.oc ? !1 : a.toString() == b.toString() : a == b
}
    , Gn = function(a) {
    return a instanceof wn ? !!a.Sa() : !!a
}
    , Hn = function(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
}
    , S = function(a) {
    Dn(a, rn, yn) ? (a = a.Sa(),
        a = String(a).replace(In, "").replace(Jn, "&lt;"),
        a = String(a).replace(Kn, Ln)) : a = ee(String(a));
    return a
}
    , Mn = /['()]/g
    , Nn = function(a) {
    return "%" + a.charCodeAt(0).toString(16)
}
    , On = function(a) {
    a = ce(String(a));
    Mn.lastIndex = 0;
    return Mn.test(a) ? a.replace(Mn, Nn) : a
}
    , Sn = function(a) {
    Dn(a, sn, zn) || Dn(a, tn, An) ? a = String(a).replace(Pn, Qn) : a instanceof Nc ? a = String(Pc(a)).replace(Pn, Qn) : a instanceof pc ? a = String(rc(a)).replace(Pn, Qn) : (a = String(a),
        Rn.test(a) ? a = a.replace(Pn, Qn) : (Za("Bad value `%s` for |filterNormalizeUri", [a]),
            a = "about:invalid#zSoyz"));
    return a
}
    , Un = function(a) {
    Dn(a, vn, Cn) ? a = Hn(a.Sa()) : null == a ? a = "" : a instanceof Xc ? a = Hn(Yc(a)) : a instanceof kd ? a = Hn(nd(a)) : (a = String(a),
    Tn.test(a) || (Za("Bad value `%s` for |filterCssValue", [a]),
        a = "zSoyz"));
    return a
}
    , Vn = function(a, b, c, d) {
    a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c,
        Za("expected param " + b + " of type " + d + (", but got " + a) + "."));
    return c
}
    , Wn = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
}
    , Ln = function(a) {
    return Wn[a]
}
    , Xn = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
    , Yn = function(a) {
    return Xn[a]
}
    , Zn = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
}
    , Qn = function(a) {
    return Zn[a]
}
    , Kn = /[\x00\x22\x27\x3c\x3e]/g
    , $n = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g
    , Pn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
    , Tn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i
    , Rn = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
    , ao = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
    , bo = function(a) {
    return String(a).replace($n, Yn)
}
    , In = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
    , Jn = /</g;
var co = function(a) {
    var b = a.um
        , c = a.tm
        , d = a.$n
        , e = a.Pn
        , f = a.url;
    return P('<div id="' + S(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + S(Sn(f)) + '" target="_blank" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + R(d) + '</div><div class="cp-promo-subtext">' + R(e) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' + R(b) + '</div><div class="cp-promo-link-subtext">' + R(c) + "</div></div></div></a></div></div>")
};
co.a = "trans.common.templates.communityPromotion";
var eo = function(a) {
    return P('<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + R(a.label) + "</div></div>")
};
eo.a = "trans.common.templates.speechInput";
var fo = function(a) {
    var b = a.Fd
        , c = a.qm
        , d = a.rm
        , e = a.Jh
        , f = a.Do;
    return P('<div class="gt-ex-info">' + (a.Jn ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + S(a.Mn) + '">' + R(b) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' + S(e) + '"></span><br><span class="gt-cd-mt-label">' + R(f) + '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + S(Sn(c)) + '">' + R(d) + "</a></span></div></div>")
};
fo.a = "trans.common.templates.exampleSentence";
var go = function(a) {
    var b = a.Om;
    a = a.Pm;
    return P('<div class="st-stp1">' + (b ? "" : '<div class="st-stp1-text"><div>' + R(a) + "</div></div>") + '<div id="st-buttons"></div>' + (b ? '<div class="st-stp1-epu-text">' + R(a) + "</div>" : "") + "</div>")
};
go.a = "trans.common.templates.submitTranslation";
var ho = function() {
    return P('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
};
ho.a = "trans.common.templates.cardContainer";
var io = function() {
    return P('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button" role="button" tabindex="0"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
};
io.a = "trans.common.templates.card";
var jo = function() {
    return P('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
};
jo.a = "trans.common.templates.lexiconTitle";
var ko = function(a) {
    var b = a.yk
        , c = a.Sj
        , d = a.zk
        , e = a.Pk
        , f = a.Sn
        , g = a.Rn
        , k = a.Jh
        , l = a.lk;
    a = '<div class="gt-def-info" lang="' + S(a.Aa) + '">' + (c ? '<span class="gt-def-num">' + R(b) + "</span>" : "") + '<div class="gt-def-row">' + R(d) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (e ? '<div class="gt-def-example"><q>' + R(e) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + S(k) + '"></q></div></div>' : "");
    if (0 < g.length) {
        a += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' + R(f) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
        f = g.length;
        for (b = 0; b < f; b++)
            for (d = g[b],
                     e = d.length,
                     k = 0; k < e; k++) {
                var m = d[k];
                var q = c ? "" : k != e - 1 ? ", " : b != f - 1 ? "; " : "";
                a += (l ? c ? '<span class="gt-cd-cl"> ' + R(m) + " </span>" : '<span class="gt-cd-cl">' + R(m) + "</span>" : '<span class="gt-cd-ncl">' + R(m) + "</span>") + q
            }
        a += "</div>"
    }
    return P(a + "</div>")
};
ko.a = "trans.common.templates.definitionRow";
var lo = function(a) {
    var b = a.Dk
        , c = a.Vk
        , d = a.Wk
        , e = a.dn;
    a = a.Hd;
    return P((a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-pos-head">' + (e ? '<span class="gt-cd-pos">' + R(e) + "</span>" : "") + (b ? '<div class="gt-cd-pos-pop">' + R(c) + '<div class="help-icon-container tlid-frequency-help-icon-container"><div class="help-icon tlid-frequency-help-icon"></div><div class="help-tooltip tlid-frequency-help-tooltip"><p>' + R(d) + "</p></div></div></div>" : "") + "</div>" + (a ? "" : "</div>"))
};
lo.a = "trans.common.templates.partOfSpeechEntryHeading";
var mo = function(a) {
    var b = a.ih
        , c = a.Qe
        , d = a.Wn
        , e = a.Hd
        , f = a.Ko;
    a = a.Lo;
    return P((e ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-term-text-parent"' + (d ? ' style="direction: ' + S(Un(d)) + ';"' : "") + '><span class="gt-baf-term-text' + (b ? " gt-baf-word-selected" : "") + '">' + (c ? '<span class="gt-baf-cell gt-baf-previous-word gt-baf-previous-word-mobile">' + R(c) + "</span>" : "") + '<span class="' + S(a) + '">' + R(f) + "</span></span></div>" + (e ? "" : "</div>"))
};
mo.a = "trans.common.templates.termText";
var no = function(a) {
    var b = a.kf
        , c = a.Ak
        , d = a.fg;
    a = a.Hd;
    c = (a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-translations gt-baf-translations-mobile"' + (c ? ' style="direction: ' + S(Un(c)) + ';"' : "") + ">";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += "<span" + (b ? ' class="' + S(b) + '"' : "") + ">" + R(g) + "</span>" + (f != e - 1 ? ", " : "")
    }
    return P(c + ("</div>" + (a ? "" : "</div>")))
};
no.a = "trans.common.templates.translationsCell";
var po = function(a) {
    var b = a.Pb
        , c = a.Hd;
    a = (c ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-entry-score" title="' + S(a.zc) + '">';
    for (var d = Math.max(0, Math.ceil(b + 1 - 1)), e = 0; e < d; e++) {
        var f = P(oo({
            className: "filled"
        }));
        a += f
    }
    if (3 > b)
        for (b = Math.max(0, Math.ceil(4 - (b + 1))),
                 d = 0; d < b; d++)
            e = P(oo({
                className: "empty"
            })),
                a += e;
    return P(a + ("</div>" + (c ? "" : "</div>")))
};
po.a = "trans.common.templates.backAndForthViewEntryScore";
var oo = function(a) {
    return P('<div class="' + S(a.className) + ' gt-score-dot"></div>')
};
var qo = null != window.KNOWLEDGE_PANEL
    , ro = null != window.MSG_SPEECH_INPUT_TURN_ON
    , so = null != window.ADD_INFLECTION;
var to = {
    es: {
        en: !0
    },
    fr: {
        en: !0
    },
    it: {
        en: !0
    },
    nl: {
        en: !0
    },
    pt: {
        en: !0
    },
    en: {
        tr: !0
    }
};
function uo(a, b) {
    if ("auto" === a)
        throw Error('detectedSourceLanguage should not be "auto". Did you mean shouldRequestGenderedTranslations()?');
    return !!to[b] && !!to[b][a]
}
;var vo = function(a, b) {
    try {
        return JSON.parse(a)
    } catch (d) {
        var c = Hm.M();
        b.js = a;
        b.error = d.message;
        c.log("jsonParseErr", b);
        throw d;
    }
};
var wo = function(a) {
    return function() {
        return a
    }
}
    , xo = function(a, b) {
    for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
    }
    return a
}
    , yo = null
    , zo = function(a) {
    if (null !== yo)
        var b = yo;
    else {
        b = wo(String.fromCharCode(84));
        var c = wo(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (yo = window[b.join(c())] || "") || ""
    }
    var d = wo(String.fromCharCode(116));
    c = wo(String.fromCharCode(107));
    d = [d(), d()];
    d[1] = c();
    c = "&" + d.join("") + "=";
    d = b.split(".");
    b = Number(d[0]) || 0;
    for (var e = [], f = 0, g = 0; g < a.length; g++) {
        var k = a.charCodeAt(g);
        128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023),
            e[f++] = k >> 18 | 240,
            e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224,
            e[f++] = k >> 6 & 63 | 128),
            e[f++] = k & 63 | 128)
    }
    a = b;
    for (f = 0; f < e.length; f++)
        a += e[f],
            a = xo(a, "+-a^+6");
    a = xo(a, "+-3^+b+-f");
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1E6;
    return c + (a.toString() + "." + (a ^ b))
};
var Ao = function(a) {
    El(this, a, 4)
};
w(Ao, Dl);
var Bo = {
    word_postproc: {
        H: 0,
        J: !1
    },
    score: {
        H: 1,
        J: !1
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    }
};
Ao.prototype.za = function() {
    return Bo
}
;
var Co = function(a) {
    El(this, a, 2)
};
w(Co, Dl);
var Do = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Co.prototype.za = function() {
    return Do
}
;
var Eo = function(a) {
    El(this, a, 7)
};
w(Eo, Dl);
var Fo = {
    src_phrase: {
        H: 0,
        J: !1
    },
    alternative: {
        H: 2,
        va: function(a) {
            return Ll(Ao, a)
        },
        sa: function(a) {
            return Kl(new Ao(a))
        },
        J: !0
    },
    srcunicodeoffsets: {
        H: 3,
        va: function(a) {
            return Ll(Co, a)
        },
        sa: function(a) {
            return Kl(new Co(a))
        },
        J: !0
    },
    raw_src_segment: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    }
};
Eo.prototype.za = function() {
    return Fo
}
;
var Go = function(a, b) {
    return new Ao(Il(a, 2, b))
}
    , Ho = function(a, b) {
    return new Co(Il(a, 3, b))
};
var Io = function(a) {
    El(this, a, 8)
};
w(Io, Dl);
var Jo = {
    word: {
        H: 0,
        J: !1
    },
    styles: {
        H: 1,
        J: !0
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    },
    confidence: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    },
    not_from_first_segment: {
        H: 7,
        J: !1
    }
};
Io.prototype.za = function() {
    return Jo
}
;
var Ko = function(a) {
    El(this, a, 3)
};
w(Ko, Dl);
var Lo = {
    gloss: {
        H: 0,
        J: !1
    },
    definition_id: {
        H: 1,
        J: !1
    },
    example: {
        H: 2,
        J: !1
    }
};
Ko.prototype.za = function() {
    return Lo
}
;
var Mo = function(a) {
    El(this, a, 3)
};
w(Mo, Dl);
var No = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        va: function(a) {
            return Ll(Ko, a)
        },
        sa: function(a) {
            return Kl(new Ko(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
Mo.prototype.za = function() {
    return No
}
;
Mo.prototype.a = function() {
    return I(this, 1)
}
;
Mo.prototype.b = function(a) {
    return new Ko(Il(this, 1, a))
}
;
var Oo = function(a) {
    El(this, a, 6)
};
w(Oo, Dl);
var Po = {
    word: {
        H: 0,
        J: !1
    },
    reverse_translation: {
        H: 1,
        J: !0
    },
    synset_id: {
        H: 2,
        J: !0
    },
    score: {
        H: 3,
        J: !1
    },
    previous_word: {
        H: 4,
        J: !1
    },
    gender: {
        H: 5,
        J: !1
    }
};
Oo.prototype.za = function() {
    return Po
}
;
Oo.prototype.Rc = function() {
    return Fl(this, 5, 0)
}
;
var Qo = function(a) {
    El(this, a, 5)
};
w(Qo, Dl);
var Ro = {
    pos: {
        H: 0,
        J: !1
    },
    terms: {
        H: 1,
        J: !0
    },
    entry: {
        H: 2,
        va: function(a) {
            return Ll(Oo, a)
        },
        sa: function(a) {
            return Kl(new Oo(a))
        },
        J: !0
    },
    base_form: {
        H: 3,
        J: !1
    },
    pos_enum: {
        H: 4,
        J: !1
    }
};
Qo.prototype.za = function() {
    return Ro
}
;
var So = function(a, b) {
    return Hh(a, 1, b)
};
Qo.prototype.a = function() {
    return I(this, 2)
}
;
Qo.prototype.b = function(a) {
    return new Oo(Il(this, 2, a))
}
;
var To = function(a) {
    El(this, a, 17)
};
w(To, Dl);
var Uo = {
    animacy: {
        H: 0,
        J: !1
    },
    inflection_aspect: {
        H: 1,
        J: !1
    },
    grammatical_case: {
        H: 2,
        J: !1
    },
    degree: {
        H: 3,
        J: !1
    },
    gender: {
        H: 4,
        J: !1
    },
    mood: {
        H: 5,
        J: !1
    },
    nonfinite_form: {
        H: 6,
        J: !1
    },
    number: {
        H: 7,
        J: !1
    },
    person: {
        H: 8,
        J: !1
    },
    polarity: {
        H: 9,
        J: !1
    },
    referent: {
        H: 10,
        J: !1
    },
    strength: {
        H: 11,
        J: !1
    },
    tense: {
        H: 12,
        J: !1
    },
    imperfect_suffix: {
        H: 13,
        J: !1
    },
    voice: {
        H: 14,
        J: !1
    },
    infinitive_number: {
        H: 15,
        J: !1
    },
    precedes: {
        H: 16,
        J: !1
    }
};
To.prototype.za = function() {
    return Uo
}
;
To.prototype.Rc = function() {
    return Fl(this, 4, 0)
}
;
var Vo = function(a) {
    El(this, a, 2)
};
w(Vo, Dl);
var Wo = {
    written_form: {
        H: 0,
        J: !1
    },
    features: {
        H: 1,
        va: function(a) {
            return Ll(To, a)
        },
        sa: function(a) {
            return Kl(new To(a))
        },
        J: !1
    }
};
Vo.prototype.za = function() {
    return Wo
}
;
var Xo = function(a) {
    El(this, a, 4)
};
w(Xo, Dl);
var Yo = {
    title: {
        H: 0,
        J: !1
    },
    description: {
        H: 1,
        J: !1
    },
    image_url: {
        H: 2,
        J: !1
    },
    image_ref_url: {
        H: 3,
        J: !1
    }
};
Xo.prototype.za = function() {
    return Yo
}
;
var Zo = function(a) {
    El(this, a, 4)
};
w(Zo, Dl);
var $o = {
    srclangs: {
        H: 0,
        J: !0
    },
    extended_srclangs: {
        H: 3,
        J: !0
    },
    detected_target: {
        H: 1,
        J: !1
    },
    srclangs_confidences: {
        H: 2,
        J: !0
    }
};
Zo.prototype.za = function() {
    return $o
}
;
var ap = function(a) {
    El(this, a, 1)
};
w(ap, Dl);
var bp = {
    word: {
        H: 0,
        J: !0
    }
};
ap.prototype.za = function() {
    return bp
}
;
var cp = function(a) {
    El(this, a, 6)
};
w(cp, Dl);
var dp = {
    spell_html_res: {
        H: 0,
        J: !1
    },
    spell_res: {
        H: 1,
        J: !1
    },
    correction_type: {
        H: 2,
        J: !0
    },
    correction_translation: {
        H: 3,
        J: !1
    },
    related: {
        H: 4,
        J: !1
    },
    confident: {
        H: 5,
        J: !1
    }
};
cp.prototype.za = function() {
    return dp
}
;
var ep = function(a) {
    El(this, a, 2)
};
w(ep, Dl);
var fp = {
    synonym: {
        H: 0,
        J: !0
    },
    definition_id: {
        H: 1,
        J: !1
    }
};
ep.prototype.za = function() {
    return fp
}
;
var gp = function(a) {
    El(this, a, 3)
};
w(gp, Dl);
var hp = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        va: function(a) {
            return Ll(ep, a)
        },
        sa: function(a) {
            return Kl(new ep(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
gp.prototype.za = function() {
    return hp
}
;
gp.prototype.a = function() {
    return I(this, 1)
}
;
gp.prototype.b = function(a) {
    return new ep(Il(this, 1, a))
}
;
var ip = function(a) {
    El(this, a, 6)
};
w(ip, Dl);
var jp = {
    text: {
        H: 0,
        J: !1
    },
    source: {
        H: 1,
        J: !1
    },
    link: {
        H: 2,
        J: !1
    },
    translation: {
        H: 3,
        J: !1
    },
    source_type: {
        H: 4,
        J: !1
    },
    definition_id: {
        H: 5,
        J: !1
    }
};
ip.prototype.za = function() {
    return jp
}
;
ip.prototype.Be = function() {
    return J(this, 1)
}
;
ip.prototype.ub = function() {
    return J(this, 3)
}
;
var kp = function(a) {
    El(this, a, 1)
};
w(kp, Dl);
var lp = {
    example: {
        H: 0,
        va: function(a) {
            return Ll(ip, a)
        },
        sa: function(a) {
            return Kl(new ip(a))
        },
        J: !0
    }
};
kp.prototype.za = function() {
    return lp
}
;
var mp = function(a) {
    El(this, a, 19)
};
w(mp, Dl);
var np = {
    sentences: {
        H: 0,
        va: function(a) {
            return Ll($l, a)
        },
        sa: function(a) {
            return Kl(new $l(a))
        },
        J: !0
    },
    dict: {
        H: 1,
        va: function(a) {
            return Ll(Qo, a)
        },
        sa: function(a) {
            return Kl(new Qo(a))
        },
        J: !0
    },
    src: {
        H: 2,
        J: !1
    },
    err: {
        H: 3,
        J: !1
    },
    styled_words: {
        H: 4,
        va: function(a) {
            return Ll(Io, a)
        },
        sa: function(a) {
            return Kl(new Io(a))
        },
        J: !0
    },
    alternative_translations: {
        H: 5,
        va: function(a) {
            return Ll(Eo, a)
        },
        sa: function(a) {
            return Kl(new Eo(a))
        },
        J: !0
    },
    confidence: {
        H: 6,
        J: !1
    },
    spell: {
        H: 7,
        va: function(a) {
            return Ll(cp, a)
        },
        sa: function(a) {
            return Kl(new cp(a))
        },
        J: !1
    },
    autocorrection: {
        H: 10,
        J: !1
    },
    ld_result: {
        H: 8,
        va: function(a) {
            return Ll(Zo, a)
        },
        sa: function(a) {
            return Kl(new Zo(a))
        },
        J: !1
    },
    server_time: {
        H: 9,
        J: !1
    },
    synsets: {
        H: 11,
        va: function(a) {
            return Ll(gp, a)
        },
        sa: function(a) {
            return Kl(new gp(a))
        },
        J: !0
    },
    definitions: {
        H: 12,
        va: function(a) {
            return Ll(Mo, a)
        },
        sa: function(a) {
            return Kl(new Mo(a))
        },
        J: !0
    },
    examples: {
        H: 13,
        va: function(a) {
            return Ll(kp, a)
        },
        sa: function(a) {
            return Kl(new kp(a))
        },
        J: !1
    },
    related_words: {
        H: 14,
        va: function(a) {
            return Ll(ap, a)
        },
        sa: function(a) {
            return Kl(new ap(a))
        },
        J: !1
    },
    knowledge_results: {
        H: 15,
        va: function(a) {
            return Ll(Xo, a)
        },
        sa: function(a) {
            return Kl(new Xo(a))
        },
        J: !0
    },
    query_inflections: {
        H: 16,
        va: function(a) {
            return Ll(Vo, a)
        },
        sa: function(a) {
            return Kl(new Vo(a))
        },
        J: !0
    },
    target_inflections: {
        H: 17,
        va: function(a) {
            return Ll(Vo, a)
        },
        sa: function(a) {
            return Kl(new Vo(a))
        },
        J: !0
    },
    gendered_translation_result: {
        H: 18,
        va: function(a) {
            return Ll(dm, a)
        },
        sa: function(a) {
            return Kl(new dm(a))
        },
        J: !1
    }
};
mp.prototype.za = function() {
    return np
}
;
var op = function(a) {
    return new cp(a.Va[7])
}
    , pp = function(a) {
    return new ap(a.Va[14])
};
mp.prototype.ic = function() {
    return I(this, 0)
}
;
mp.prototype.cb = function(a) {
    return new $l(Il(this, 0, a))
}
;
var Eh = function(a, b) {
    return new Qo(Il(a, 1, b))
}
    , qp = function(a, b) {
    return new Eo(Il(a, 5, b))
};
var rp = function(a, b) {
    this.b = a;
    this.a = "";
    b && (this.a = b);
    this.c = 0;
    this.F = L.M()
}
    , sp = function(a) {
    a = a.Wb("q").join("");
    return zo(a)
}
    , tp = function(a, b, c, d, e, f) {
    c = c.toString();
    c += sp(d);
    d = d.toString();
    var g = "POST";
    b += "?" + c;
    2E3 > b.length + d.length && (g = "GET",
        b += "&" + d,
        d = "");
    ++a.c;
    return Rj(b, function(k) {
        --a.c;
        e(k)
    }, g, d, void 0, f)
}
    , up = function(a, b, c, d, e, f, g, k, l) {
    var m = a.a + "/translate_a/t"
        , q = new an
        , r = new an;
    q.set("client", a.b);
    q.set("sl", b);
    q.set("tl", c);
    q.set("hl", d);
    q.set("v", "1.0");
    null != g && q.set("source", g);
    k && q.g(k);
    (b = !Ia(e) || Ia(e) && 1 == e.length) ? r.set("q", e) : jn(r, "q", e);
    e = v(a.h, a, b, f);
    return tp(a, m, q, r, e, l)
}
    , vp = function(a, b, c, d) {
    var e = new an
        , f = new an;
    e.set("client", a.b);
    e.set("sl", c);
    c = a.a + "/translate_a/single";
    e.set("dt", "rm");
    f.set("q", b);
    tp(a, c, e, f, v(a.v, a, d), void 0)
}
    , wp = function(a, b, c, d, e, f, g, k, l, m, q) {
    var r = a.a + "/translate_a/single"
        , u = new an
        , C = new an;
    u.set("client", a.b);
    u.set("sl", b);
    u.set("tl", c);
    u.set("hl", d);
    jn(u, "dt", f);
    null != k && (u.set("ie", k),
        u.set("oe", k));
    m && u.set("dj", "1");
    l && u.g(l);
    C.set("q", e);
    tp(a, r, u, C, v(a.g, a, g, q), void 0)
}
    , xp = function(a, b, c, d, e, f, g, k, l, m) {
    var q = "at bd ex ld md qc rw rm ss t".split(" ");
    g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
    qo && q.push("kr");
    so && to[c] && (to[c][b] || "auto" === b) && q.push("gt");
    wp(a, b, c, d, e, q, f, k, l, void 0, m)
};
rp.prototype.v = function(a, b) {
    b = b.target;
    yp(b) && (b = zp(b, "handleTransliterationResult_"),
        b = new mp(b),
    0 < b.ic() && a(J(b.cb(0), 3)))
}
;
rp.prototype.g = function(a, b, c) {
    c = c.target;
    yp(c) ? (b = zp(c, "handleSingleResult_"),
    Ia(b) && (b = new mp(b)),
        a(b)) : (Ap(this, c),
    b && b(c.Sc()))
}
;
rp.prototype.h = function(a, b, c) {
    c = c.target;
    if (bk(c)) {
        c = zp(c, "handleTextResult_");
        var d = [];
        if (a)
            d.push(Ia(c) ? c[0] : c);
        else if (Ia(c))
            for (a = 0; a < c.length; ++a)
                d.push(Ia(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else
        Ap(this, c),
            b(null, c.Ad)
}
;
var zp = function(a, b) {
    return vo(ck(a), {
        "class": "trans.common.TranslationAPI",
        func: b,
        url: String(a.Zd)
    })
}
    , yp = function(a) {
    return bk(a) && ("[" == ck(a)[0] || "{" == ck(a)[0])
}
    , Bp = {}
    , Cp = (Bp[1] = 15,
    Bp[2] = 16,
    Bp[3] = 17,
    Bp[4] = 18,
    Bp[5] = 19,
    Bp[6] = 20,
    Bp[7] = 21,
    Bp[8] = 22,
    Bp[9] = 23,
    Bp)
    , Ap = function(a, b) {
    var c = b.Ad;
    nm(a.F, 156, c in Cp ? Cp[c] : 0);
    a = Hm.M();
    c = String(b.Zd);
    b = ck(b);
    a.log("invalidResponse", {
        q: c.substring(0, 500),
        ql: c.length,
        r: b.substring(0, 500),
        rl: b.length
    })
};
rp.prototype.m = function() {
    return this.c
}
;
var Dp, Ep = {
    Po: "activedescendant",
    Uo: "atomic",
    Vo: "autocomplete",
    Xo: "busy",
    $o: "checked",
    ap: "colindex",
    gp: "controls",
    ip: "describedby",
    lp: "disabled",
    np: "dropeffect",
    pp: "expanded",
    qp: "flowto",
    sp: "grabbed",
    wp: "haspopup",
    yp: "hidden",
    Ap: "invalid",
    Bp: "label",
    Cp: "labelledby",
    Dp: "level",
    Ip: "live",
    Yp: "multiline",
    Zp: "multiselectable",
    cq: "orientation",
    eq: "owns",
    fq: "posinset",
    hq: "pressed",
    lq: "readonly",
    nq: "relevant",
    oq: "required",
    tq: "rowindex",
    wq: "selected",
    yq: "setsize",
    SORT: "sort",
    Nq: "valuemax",
    Oq: "valuemin",
    Pq: "valuenow",
    Qq: "valuetext"
};
var Fp = {
    Qo: "alert",
    Ro: "alertdialog",
    So: "application",
    To: "article",
    Wo: "banner",
    Yo: "button",
    Zo: "checkbox",
    bp: "columnheader",
    cp: "combobox",
    ep: "complementary",
    fp: "contentinfo",
    hp: "definition",
    jp: "dialog",
    kp: "directory",
    mp: "document",
    rp: "form",
    tp: "grid",
    up: "gridcell",
    vp: "group",
    xp: "heading",
    zp: "img",
    Ep: "link",
    Fp: "list",
    Gp: "listbox",
    Hp: "listitem",
    Jp: "log",
    Kp: "main",
    Lp: "marquee",
    Mp: "math",
    Np: "menu",
    Op: "menubar",
    Pp: "menuitem",
    Qp: "menuitemcheckbox",
    Rp: "menuitemradio",
    $p: "navigation",
    aq: "note",
    bq: "option",
    gq: "presentation",
    iq: "progressbar",
    jq: "radio",
    kq: "radiogroup",
    mq: "region",
    pq: "row",
    qq: "rowgroup",
    rq: "rowheader",
    uq: "scrollbar",
    vq: "search",
    xq: "separator",
    zq: "slider",
    Aq: "spinbutton",
    Bq: "status",
    Cq: "tab",
    Dq: "tablist",
    Eq: "tabpanel",
    Fq: "textbox",
    Gq: "textinfo",
    Hq: "timer",
    Iq: "toolbar",
    Jq: "tooltip",
    Kq: "tree",
    Lq: "treegrid",
    Mq: "treeitem"
};
Zb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var Gp = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" ")
    , Hp = function(a, b) {
    b ? (x(Rb(Fp, b), "No such ARIA role " + b),
        a.setAttribute("role", b)) : a.removeAttribute("role")
}
    , Jp = function(a, b, c) {
    Ia(c) && (c = c.join(" "));
    var d = Ip(b);
    "" === c || void 0 == c ? (Dp || (Dp = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }),
        c = Dp,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
    , Kp = function(a, b) {
    a = a.getAttribute(Ip(b));
    return null == a || void 0 == a ? "" : String(a)
}
    , Lp = function(a) {
    var b = Kp(a, "activedescendant");
    return Jf(a).getElementById(b)
}
    , Mp = function(a, b) {
    var c = "";
    b && (c = b.id,
        x(c, "The active element should have an id."));
    Jp(a, "activedescendant", c)
}
    , Np = function(a, b) {
    Jp(a, "label", b)
}
    , Ip = function(a) {
    x(a, "ARIA attribute cannot be empty.");
    x(Rb(Ep, a), "No such ARIA attribute " + a);
    return "aria-" + a
};
var Op = function(a) {
    if (a.classList)
        return a.classList;
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
}
    , Pp = function(a, b) {
    return a.classList ? a.classList.contains(b) : sb(Op(a), b)
}
    , T = function(a, b) {
    a.classList ? a.classList.add(b) : Pp(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}
    , Qp = function(a, b) {
    if (a.classList)
        y(b, function(e) {
            T(a, e)
        });
    else {
        var c = {};
        y(Op(a), function(e) {
            c[e] = !0
        });
        y(b, function(e) {
            c[e] = !0
        });
        a.className = "";
        for (var d in c)
            a.className += 0 < a.className.length ? " " + d : d
    }
}
    , U = function(a, b) {
    a.classList ? a.classList.remove(b) : Pp(a, b) && (a.className = kb(Op(a), function(c) {
        return c != b
    }).join(" "))
}
    , Rp = function(a, b) {
    a.classList ? y(b, function(c) {
        U(a, c)
    }) : a.className = kb(Op(a), function(c) {
        return !sb(b, c)
    }).join(" ")
}
    , V = function(a, b, c) {
    c ? T(a, b) : U(a, b)
};
var Vp = function(a, b) {
    x(a, "Soy template may not be null.");
    var c = Kf();
    a = a(b || Sp, void 0, void 0);
    a = Tp(a);
    Up(a.vb());
    return bg(c.a, a)
}
    , Wp = function(a, b, c, d) {
    x(a, "Soy template may not be null.");
    a = a(b || Sp, void 0, c);
    d = Hg(d || Kf(), "DIV");
    a = Tp(a);
    Up(a.vb());
    Td(d, a);
    1 == d.childNodes.length && (a = d.firstChild,
    1 == a.nodeType && (d = a));
    return d
}
    , Tp = function(a) {
    if (!Ma(a))
        return Dd(String(a));
    if (a instanceof wn)
        return xn(a);
    Za("Soy template output is unsafe for use as HTML: " + a);
    return Dd("zSoyz")
}
    , Up = function(a) {
    var b = a.match(Xp);
    x(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
}
    , Xp = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
    , Sp = {};
var Yp = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
h = Yp.prototype;
h.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
}
;
h.contains = function(a) {
    return this && a ? a instanceof Yp ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.a >= this.top && a.a <= this.bottom : !1
}
;
h.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
}
;
h.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
}
;
h.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
}
;
var Zp = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
    , $p = function(a) {
    return new Yp(a.top,a.left + a.width,a.top + a.height,a.left)
};
h = Zp.prototype;
h.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
}
;
h.contains = function(a) {
    return a instanceof Ff ? a.x >= this.left && a.x <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
}
;
h.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
}
;
h.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
}
;
h.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
}
;
var bq = function(a, b, c) {
    if (t(b))
        (b = aq(a, b)) && (a.style[b] = c);
    else
        for (var d in b) {
            c = a;
            var e = b[d]
                , f = aq(c, d);
            f && (c.style[f] = e)
        }
}
    , cq = {}
    , aq = function(a, b) {
    var c = cq[b];
    if (!c) {
        var d = oe(b);
        c = d;
        void 0 === a.style[d] && (d = (Ae ? "Webkit" : ze ? "Moz" : A ? "ms" : we ? "O" : null) + pe(d),
        void 0 !== a.style[d] && (c = d));
        cq[b] = c
    }
    return c
}
    , dq = function(a, b) {
    var c = Jf(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
}
    , eq = function(a, b) {
    return dq(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
    , gq = function(a, b, c) {
    if (b instanceof Ff) {
        var d = b.x;
        b = b.a
    } else
        d = b,
            b = c;
    a.style.left = fq(d, !1);
    a.style.top = fq(b, !1)
}
    , hq = function(a) {
    a = a ? Jf(a) : document;
    return !A || Te(9) || Sf(Kf(a).a) ? a.documentElement : a.body
}
    , iq = function(a) {
    var b = a.body;
    a = a.documentElement;
    return new Ff(b.scrollLeft || a.scrollLeft,b.scrollTop || a.scrollTop)
}
    , jq = function(a) {
    try {
        var b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    A && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
    , kq = function(a) {
    if (A && !Te(8))
        return x(a && "offsetParent"in a),
            a.offsetParent;
    var b = Jf(a)
        , c = eq(a, "position")
        , d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host),
            c = eq(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
        !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}
    , mq = function(a) {
    for (var b = new Yp(0,Infinity,Infinity,0), c = Kf(a), d = c.a.body, e = c.a.documentElement, f = Uf(c.a); a = kq(a); )
        if (!(A && 0 == a.clientWidth || Ae && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != eq(a, "overflow")) {
            var g = lq(a)
                , k = new Ff(a.clientLeft,a.clientTop);
            g.x += k.x;
            g.a += k.a;
            b.top = Math.max(b.top, g.a);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = Tf(Ig(c) || window);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}
    , pq = function(a, b) {
    b = b || Uf(document);
    var c = b || Uf(document);
    var d = lq(a)
        , e = lq(c)
        , f = nq(c);
    if (c == Uf(document)) {
        var g = d.x - c.scrollLeft;
        d = d.a - c.scrollTop;
        A && !Te(10) && (g += f.left,
            d += f.top)
    } else
        g = d.x - e.x - f.left,
            d = d.a - e.a - f.top;
    a = oq(a);
    f = c.clientHeight - a.height;
    e = c.scrollLeft;
    var k = c.scrollTop;
    e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - f, 0));
    c = new Ff(e,k);
    b.scrollLeft = c.x;
    b.scrollTop = c.a
}
    , lq = function(a) {
    var b = Jf(a);
    cb(a, "Parameter is required");
    var c = new Ff(0,0)
        , d = hq(b);
    if (a == d)
        return c;
    a = jq(a);
    b = Vf(Kf(b).a);
    c.x = a.left + b.x;
    c.a = a.top + b.a;
    return c
}
    , rq = function(a, b) {
    a = qq(a);
    b = qq(b);
    return new Ff(a.x - b.x,a.a - b.a)
}
    , sq = function(a) {
    a = jq(a);
    return new Ff(a.left,a.top)
}
    , qq = function(a) {
    x(a);
    if (1 == a.nodeType)
        return sq(a);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new Ff(a.clientX,a.clientY)
}
    , tq = function(a, b, c) {
    if (b instanceof Hf)
        c = b.height,
            b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    a.style.width = fq(b, !0);
    a.style.height = fq(c, !0)
}
    , fq = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
    , uq = function(a) {
    var b = oq;
    if ("none" != eq(a, "display"))
        return b(a);
    var c = a.style
        , d = c.display
        , e = c.visibility
        , f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}
    , oq = function(a) {
    var b = a.offsetWidth
        , c = a.offsetHeight
        , d = Ae && !b && !c;
    return p(b) && !d || !a.getBoundingClientRect ? new Hf(b,c) : (a = jq(a),
        new Hf(a.right - a.left,a.bottom - a.top))
}
    , vq = function(a) {
    var b = lq(a);
    a = uq(a);
    return new Zp(b.x,b.a,a.width,a.height)
}
    , wq = function(a, b) {
    x(a);
    a = a.style;
    "opacity"in a ? a.opacity = b : "MozOpacity"in a ? a.MozOpacity = b : "filter"in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
}
    , W = function(a, b) {
    a.style.display = b ? "" : "none"
}
    , xq = function(a) {
    return "none" != a.style.display
}
    , zq = function(a) {
    var b = Kf(void 0)
        , c = b.a;
    if (A && c.createStyleSheet)
        return b = c.createStyleSheet(),
            yq(b, a),
            b;
    c = Nf(b.a, "HEAD", void 0, void 0)[0];
    if (!c) {
        var d = Nf(b.a, "BODY", void 0, void 0)[0];
        c = b.b("HEAD");
        d.parentNode.insertBefore(c, d)
    }
    d = b.b("STYLE");
    yq(d, a);
    b.appendChild(c, d);
    return d
}
    , yq = function(a, b) {
    b = nd(b);
    A && p(a.cssText) ? a.cssText = b : a.innerHTML = b
}
    , Aq = function(a) {
    return "rtl" == eq(a, "direction")
}
    , Bq = ze ? "MozUserSelect" : Ae || xe ? "WebkitUserSelect" : null
    , Cq = function(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (Bq) {
        if (b = b ? "none" : "",
        a.style && (a.style[Bq] = b),
            c) {
            a = 0;
            for (var d; d = c[a]; a++)
                d.style && (d.style[Bq] = b)
        }
    } else if (A || we)
        if (b = b ? "on" : "",
            a.setAttribute("unselectable", b),
            c)
            for (a = 0; d = c[a]; a++)
                d.setAttribute("unselectable", b)
}
    , Dq = function(a, b, c) {
    a = a.style;
    ze ? a.MozBoxSizing = c : Ae ? a.WebkitBoxSizing = c : a.boxSizing = c;
    a.width = Math.max(b.width, 0) + "px";
    a.height = Math.max(b.height, 0) + "px"
}
    , Eq = function(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c]
        , f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return +b
}
    , Fq = function(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? Eq(a, b, "left", "pixelLeft") : 0
}
    , Gq = function(a, b) {
    if (A) {
        var c = Fq(a, b + "Left")
            , d = Fq(a, b + "Right")
            , e = Fq(a, b + "Top");
        a = Fq(a, b + "Bottom");
        return new Yp(e,d,a,c)
    }
    c = dq(a, b + "Left");
    d = dq(a, b + "Right");
    e = dq(a, b + "Top");
    a = dq(a, b + "Bottom");
    return new Yp(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
}
    , Hq = function(a) {
    return Gq(a, "padding")
}
    , Iq = {
    thin: 2,
    medium: 4,
    thick: 6
}
    , Jq = function(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in Iq ? Iq[b] : Eq(a, b, "left", "pixelLeft")
}
    , nq = function(a) {
    if (A && !Te(9)) {
        var b = Jq(a, "borderLeft")
            , c = Jq(a, "borderRight")
            , d = Jq(a, "borderTop");
        a = Jq(a, "borderBottom");
        return new Yp(d,c,a,b)
    }
    b = dq(a, "borderLeftWidth");
    c = dq(a, "borderRightWidth");
    d = dq(a, "borderTopWidth");
    a = dq(a, "borderBottomWidth");
    return new Yp(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
};
var Kq = function(a) {
    Jg.call(this);
    this.m = a;
    this.c = {}
};
w(Kq, Jg);
var Lq = [];
Kq.prototype.listen = function(a, b, c, d) {
    return Mq(this, a, b, c, d)
}
;
var Nq = function(a, b, c, d) {
    Mq(a, b, "click", c, !1, d)
}
    , Mq = function(a, b, c, d, e, f) {
    Ia(c) || (c && (Lq[0] = c.toString()),
        c = Lq);
    for (var g = 0; g < c.length; g++) {
        var k = H(b, c[g], d || a.handleEvent, e || !1, f || a.m || a);
        if (!k)
            break;
        a.c[k.key] = k
    }
    return a
};
Kq.prototype.mh = function(a, b, c, d) {
    return Oq(this, a, b, c, d)
}
;
var Oq = function(a, b, c, d, e, f) {
    if (Ia(c))
        for (var g = 0; g < c.length; g++)
            Oq(a, b, c[g], d, e, f);
    else {
        b = ih(b, c, d || a.handleEvent, e, f || a.m || a);
        if (!b)
            return a;
        a.c[b.key] = b
    }
    return a
};
Kq.prototype.Ga = function(a, b, c, d, e) {
    if (Ia(b))
        for (var f = 0; f < b.length; f++)
            this.Ga(a, b[f], c, d, e);
    else
        c = c || this.handleEvent,
            d = Ma(d) ? !!d.capture : !!d,
            e = e || this.m || this,
            c = jh(c),
            d = !!d,
            b = Zg(a) ? a.Ae(b, c, d, e) : a ? (a = lh(a)) ? a.Ae(b, c, d, e) : null : null,
        b && (qh(b),
            delete this.c[b.key]);
    return this
}
;
var Pq = function(a) {
    Kb(a.c, function(b, c) {
        this.c.hasOwnProperty(c) && qh(b)
    }, a);
    a.c = {}
};
Kq.prototype.T = function() {
    Kq.D.T.call(this);
    Pq(this)
}
;
Kq.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
}
;
var Qq = function() {};
Ga(Qq);
Qq.prototype.a = 0;
var X = function(a) {
    K.call(this);
    this.a = a || Kf();
    this.Na = Rq;
    this.qa = null;
    this.ya = !1;
    this.o = null;
    this.O = void 0;
    this.L = this.v = this.G = this.na = null;
    this.rb = !1
};
w(X, K);
X.prototype.Jd = Qq.M();
var Rq = null
    , Sq = function(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}
    , Tq = function(a) {
    return a.qa || (a.qa = ":" + (a.Jd.a++).toString(36))
}
    , Uq = function(a, b) {
    if (a.G && a.G.L) {
        var c = a.G.L
            , d = a.qa;
        d in c && delete c[d];
        Ub(a.G.L, b, a)
    }
    a.qa = b
};
X.prototype.j = function() {
    return this.o
}
;
var Vq = function(a) {
    a = a.o;
    x(a, "Can not call getElementStrict before rendering/decorating.");
    return a
};
X.prototype.vd = function(a) {
    return this.o ? this.a.vd(a, this.o) : null
}
;
var Y = function(a) {
    a.O || (a.O = new Kq(a));
    return x(a.O)
}
    , Xq = function(a, b) {
    if (a == b)
        throw Error("Unable to set parent component");
    if (b && a.G && a.qa && Wq(a.G, a.qa) && a.G != b)
        throw Error("Unable to set parent component");
    a.G = b;
    X.D.Ed.call(a, b)
};
X.prototype.getParent = function() {
    return this.G
}
;
X.prototype.Ed = function(a) {
    if (this.G && this.G != a)
        throw Error("Method not supported");
    X.D.Ed.call(this, a)
}
;
X.prototype.La = function() {
    this.o = Hg(this.a, "DIV")
}
;
X.prototype.render = function(a) {
    Yq(this, a)
}
;
var Yq = function(a, b, c) {
    if (a.ya)
        throw Error("Component already rendered");
    a.o || a.La();
    b ? b.insertBefore(a.o, c || null) : a.a.a.body.appendChild(a.o);
    a.G && !a.G.ya || a.Z()
};
h = X.prototype;
h.ea = function(a) {
    if (this.ya)
        throw Error("Component already rendered");
    if (a && this.Xc(a)) {
        this.rb = !0;
        var b = Jf(a);
        this.a && this.a.a == b || (this.a = Kf(a));
        this.Da(a);
        this.Z()
    } else
        throw Error("Invalid element to decorate");
}
;
h.Xc = function() {
    return !0
}
;
h.Da = function(a) {
    this.o = a
}
;
h.Z = function() {
    this.ya = !0;
    Zq(this, function(a) {
        !a.ya && a.j() && a.Z()
    })
}
;
h.bb = function() {
    Zq(this, function(a) {
        a.ya && a.bb()
    });
    this.O && Pq(this.O);
    this.ya = !1
}
;
h.T = function() {
    this.ya && this.bb();
    this.O && (this.O.Ka(),
        delete this.O);
    Zq(this, function(a) {
        a.Ka()
    });
    !this.rb && this.o && jg(this.o);
    this.G = this.na = this.o = this.L = this.v = null;
    X.D.T.call(this)
}
;
h.kb = function(a, b) {
    this.pd(a, $q(this), b)
}
;
h.pd = function(a, b, c) {
    x(!!a, "Provided element must not be null.");
    if (a.ya && (c || !this.ya))
        throw Error("Component already rendered");
    if (0 > b || b > $q(this))
        throw Error("Child component index out of bounds");
    this.L && this.v || (this.L = {},
        this.v = []);
    if (a.getParent() == this) {
        var d = Tq(a);
        this.L[d] = a;
        vb(this.v, a)
    } else
        Ub(this.L, Tq(a), a);
    Xq(a, this);
    Bb(this.v, b, 0, a);
    a.ya && this.ya && a.getParent() == this ? (c = this.Zb(),
        b = c.childNodes[b] || null,
    b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.o || this.La(),
        b = ar(this, b + 1),
        Yq(a, this.Zb(), b ? b.o : null)) : this.ya && !a.ya && a.o && a.o.parentNode && 1 == a.o.parentNode.nodeType && a.Z()
}
;
h.Zb = function() {
    return this.o
}
;
var br = function(a) {
    null == a.Na && (a.Na = Aq(a.ya ? a.o : a.a.a.body));
    return a.Na
}
    , $q = function(a) {
    return a.v ? a.v.length : 0
}
    , Wq = function(a, b) {
    a.L && b ? (a = a.L,
        b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
    return b
}
    , ar = function(a, b) {
    return a.v ? a.v[b] || null : null
}
    , Zq = function(a, b, c) {
    a.v && y(a.v, b, c)
}
    , cr = function(a, b) {
    return a.v && b ? jb(a.v, b) : -1
};
X.prototype.removeChild = function(a, b) {
    if (a) {
        var c = t(a) ? a : Tq(a);
        a = Wq(this, c);
        if (c && a) {
            var d = this.L;
            c in d && delete d[c];
            vb(this.v, a);
            b && (a.bb(),
            a.o && jg(a.o));
            Xq(a, null)
        }
    }
    if (!a)
        throw Error("Child is not in parent component");
    return a
}
;
var er = function(a, b) {
    K.call(this);
    a && dr(this, a, b)
};
w(er, K);
h = er.prototype;
h.o = null;
h.Xf = null;
h.jh = null;
h.Yf = null;
h.Gb = -1;
h.uc = -1;
h.Rg = !1;
var fr = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}
    , gr = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}
    , hr = !Ae || Re("525")
    , ir = De && ze;
er.prototype.a = function(a) {
    if (Ae || xe)
        if (17 == this.Gb && !a.ctrlKey || 18 == this.Gb && !a.altKey || De && 91 == this.Gb && !a.metaKey)
            this.uc = this.Gb = -1;
    -1 == this.Gb && (a.ctrlKey && 17 != a.keyCode ? this.Gb = 17 : a.altKey && 18 != a.keyCode ? this.Gb = 18 : a.metaKey && 91 != a.keyCode && (this.Gb = 91));
    hr && !zh(a.keyCode, this.Gb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.uc = yh(a.keyCode),
    ir && (this.Rg = a.altKey))
}
;
er.prototype.b = function(a) {
    this.uc = this.Gb = -1;
    this.Rg = a.altKey
}
;
er.prototype.handleEvent = function(a) {
    var b = a.b
        , c = b.altKey;
    if (A && "keypress" == a.type) {
        var d = this.uc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else
        (Ae || xe) && "keypress" == a.type ? (d = this.uc,
            e = 0 <= b.charCode && 63232 > b.charCode && wh(d) ? b.charCode : 0) : we && !Ae ? (d = this.uc,
            e = wh(d) ? b.keyCode : 0) : ("keypress" == a.type ? (ir && (c = this.Rg),
            b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
                e = 0) : (d = this.uc,
                e = b.charCode) : (d = b.keyCode || this.uc,
                e = b.charCode || 0)) : (d = b.keyCode || this.uc,
            e = b.charCode || 0),
        De && 63 == e && 224 == d && (d = 191));
    var f = d = yh(d);
    d ? 63232 <= d && d in fr ? f = fr[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in gr && (f = gr[b.keyIdentifier]);
    ze && hr && "keypress" == a.type && !zh(f, this.Gb, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Gb,
        this.Gb = f,
        b = new jr(f,e,a,b),
        b.altKey = c,
        this.dispatchEvent(b))
}
;
er.prototype.j = function() {
    return this.o
}
;
var dr = function(a, b, c) {
    a.Yf && kr(a);
    a.o = b;
    a.Xf = H(a.o, "keypress", a, c);
    a.jh = H(a.o, "keydown", a.a, c, a);
    a.Yf = H(a.o, "keyup", a.b, c, a)
}
    , kr = function(a) {
    a.Xf && (qh(a.Xf),
        qh(a.jh),
        qh(a.Yf),
        a.Xf = null,
        a.jh = null,
        a.Yf = null);
    a.o = null;
    a.Gb = -1;
    a.uc = -1
};
er.prototype.T = function() {
    er.D.T.call(this);
    kr(this)
}
;
var jr = function(a, b, c, d) {
    Ug.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
};
w(jr, Ug);
var lr = function() {}, mr;
Ga(lr);
var nr = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
lr.prototype.$c = function() {}
;
lr.prototype.nb = function(a) {
    return a.a.b("DIV", or(this, a).join(" "), a.Sa())
}
;
lr.prototype.Eb = function(a) {
    return a
}
;
var qr = function(a, b, c) {
    if (a = a.j ? a.j() : a) {
        var d = [b];
        A && !Re("7") && (d = pr(Op(a), b),
            d.push(b));
        (c ? Qp : Rp)(a, d)
    }
};
lr.prototype.Zc = function() {
    return !0
}
;
lr.prototype.Ua = function(a, b) {
    b.id && Uq(a, b.id);
    var c = this.Eb(b);
    c && c.firstChild ? rr(a, c.firstChild.nextSibling ? yb(c.childNodes) : c.firstChild) : a.ad = null;
    var d = 0
        , e = this.wa()
        , f = this.wa()
        , g = !1
        , k = !1
        , l = !1
        , m = yb(Op(b));
    y(m, function(r) {
        g || r != e ? k || r != f ? d |= this.g(r) : k = !0 : (g = !0,
        f == e && (k = !0));
        1 == this.g(r) && (fb(c),
        yg(c) && zg(c) && xg(c, !1))
    }, this);
    a.bd = d;
    g || (m.push(e),
    f == e && (k = !0));
    k || m.push(f);
    (a = a.bc) && m.push.apply(m, a);
    if (A && !Re("7")) {
        var q = pr(m);
        0 < q.length && (m.push.apply(m, q),
            l = !0)
    }
    if (!g || !k || a || l)
        b.className = m.join(" ");
    return b
}
;
lr.prototype.Ff = function(a) {
    br(a) && this.Wg(a.j(), !0);
    a.isEnabled() && this.Sd(a, a.isVisible())
}
;
var sr = function(a, b, c) {
    if (a = c || a.$c())
        x(b, "The element passed as a first parameter cannot be null."),
            c = b.getAttribute("role") || null,
        a != c && Hp(b, a)
}
    , ur = function(a, b, c) {
    x(b);
    x(c);
    var d = b.hb;
    null != d && Np(c, d);
    b.isVisible() || Jp(c, "hidden", !b.isVisible());
    b.isEnabled() || a.kc(c, 1, !b.isEnabled());
    tr(b, 8) && a.kc(c, 8, b.ih());
    tr(b, 16) && a.kc(c, 16, b.Ea(16));
    tr(b, 64) && a.kc(c, 64, b.Ea(64))
};
h = lr.prototype;
h.Gf = function(a, b) {
    Cq(a, !b, !A && !we)
}
;
h.Wg = function(a, b) {
    qr(a, this.wa() + "-rtl", b)
}
;
h.Vg = function(a) {
    var b;
    return tr(a, 32) && (b = a.j()) ? yg(b) && zg(b) : !1
}
;
h.Sd = function(a, b) {
    var c;
    if (tr(a, 32) && (c = a.j())) {
        if (!b && a.Ea(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Ea(32) && a.Hf(null)
        }
        (yg(c) && zg(c)) != b && xg(c, b)
    }
}
;
h.setVisible = function(a, b) {
    W(a, b);
    a && Jp(a, "hidden", !b)
}
;
h.xd = function(a, b, c) {
    var d = a.j();
    if (d) {
        var e = this.a(b);
        e && qr(a, e, c);
        this.kc(d, b, c)
    }
}
;
h.kc = function(a, b, c) {
    mr || (mr = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    x(a, "The element passed as a first parameter cannot be null.");
    b = mr[b];
    var d = a.getAttribute("role") || null;
    d && (d = nr[d] || b,
        b = "checked" == b || "selected" == b ? d : b);
    b && Jp(a, b, c)
}
;
h.Mb = function(a, b) {
    var c = this.Eb(a);
    c && (fg(c),
    b && (t(b) ? G(c, b) : (a = function(d) {
        if (d) {
            var e = Jf(c);
            c.appendChild(t(d) ? e.createTextNode(d) : d)
        }
    }
        ,
        Ia(b) ? y(b, a) : !Ka(b) || "nodeType"in b ? a(b) : y(yb(b), a))))
}
;
h.wa = function() {
    return "goog-control"
}
;
var or = function(a, b) {
    var c = a.wa()
        , d = [c]
        , e = a.wa();
    e != c && d.push(e);
    c = b.getState();
    for (e = []; c; ) {
        var f = c & -c;
        e.push(a.a(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (a = b.bc) && d.push.apply(d, a);
    A && !Re("7") && d.push.apply(d, pr(d));
    return d
}
    , pr = function(a, b) {
    var c = [];
    b && (a = wb(a, [b]));
    y([], function(d) {
        !ob(d, Ta(sb, a)) || b && !sb(d, b) || c.push(d.join("_"))
    });
    return c
};
lr.prototype.a = function(a) {
    this.b || vr(this);
    return this.b[a]
}
;
lr.prototype.g = function(a) {
    if (!this.O) {
        this.b || vr(this);
        var b = this.b, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        this.O = c
    }
    a = parseInt(this.O[a], 10);
    return isNaN(a) ? 0 : a
}
;
var vr = function(a) {
    var b = a.wa()
        , c = !Jc(b.replace(/\xa0|\s/g, " "), " ");
    x(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.b = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var wr = function() {};
w(wr, lr);
Ga(wr);
h = wr.prototype;
h.$c = function() {
    return "button"
}
;
h.kc = function(a, b, c) {
    switch (b) {
        case 8:
        case 16:
            x(a, "The button DOM element cannot be null.");
            Jp(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            wr.D.kc.call(this, a, b, c)
    }
}
;
h.nb = function(a) {
    var b = wr.D.nb.call(this, a);
    xr(b, a.h);
    var c = a.Y();
    c && this.Bf(b, c);
    tr(a, 16) && this.kc(b, 16, a.Ea(16));
    return b
}
;
h.Ua = function(a, b) {
    b = wr.D.Ua.call(this, a, b);
    var c = this.Y(b);
    a.aa = c;
    a.h = b.title;
    tr(a, 16) && this.kc(b, 16, a.Ea(16));
    return b
}
;
h.Y = Fa;
h.Bf = Fa;
var xr = function(a, b) {
    a && (b ? a.title = b : a.removeAttribute("title"))
}
    , zr = function(a, b, c) {
    var d = br(b)
        , e = a.wa() + "-collapse-left";
    a = a.wa() + "-collapse-right";
    yr(b, d ? a : e, !!(c & 1));
    yr(b, d ? e : a, !!(c & 2))
};
wr.prototype.wa = function() {
    return "goog-button"
}
;
var Br = function(a, b) {
    if (!a)
        throw Error("Invalid class name " + a);
    if (!La(b))
        throw Error("Invalid decorator function " + b);
    Ar[a] = b
}
    , Cr = {}
    , Ar = {};
var Z = function(a, b, c) {
    X.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b; ) {
            d = Pa(b);
            if (d = Cr[d])
                break;
            b = b.D ? b.D.constructor : null
        }
        b = d ? La(d.M) ? d.M() : new d : null
    }
    this.c = b;
    this.ad = p(a) ? a : null;
    this.hb = null
};
w(Z, X);
h = Z.prototype;
h.ad = null;
h.bd = 0;
h.Te = 39;
h.Ac = 255;
h.Se = 0;
h.If = !0;
h.bc = null;
h.$g = !0;
h.df = !1;
h.Xg = null;
var Er = function(a, b) {
    a.ya && b != a.$g && Dr(a, b);
    a.$g = b
}
    , Fr = function(a, b) {
    b && (a.bc ? sb(a.bc, b) || a.bc.push(b) : a.bc = [b],
        qr(a, b, !0))
}
    , Gr = function(a, b) {
    b && a.bc && vb(a.bc, b) && (0 == a.bc.length && (a.bc = null),
        qr(a, b, !1))
}
    , yr = function(a, b, c) {
    c ? Fr(a, b) : Gr(a, b)
};
Z.prototype.La = function() {
    var a = this.c.nb(this);
    this.o = a;
    sr(this.c, a, this.C());
    this.df || this.c.Gf(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
}
;
Z.prototype.C = function() {
    return this.Xg
}
;
var Hr = function(a, b) {
    a.hb = b;
    (a = a.j()) && Np(a, b)
};
Z.prototype.Zb = function() {
    return this.c.Eb(this.j())
}
;
Z.prototype.Xc = function(a) {
    return this.c.Zc(a)
}
;
Z.prototype.Da = function(a) {
    this.o = a = this.c.Ua(this, a);
    sr(this.c, a, this.C());
    this.df || this.c.Gf(a, !1);
    this.If = "none" != a.style.display
}
;
Z.prototype.Z = function() {
    Z.D.Z.call(this);
    ur(this.c, this, Vq(this));
    this.c.Ff(this);
    if (this.Te & -2 && (this.$g && Dr(this, !0),
        tr(this, 32))) {
        var a = this.j();
        if (a) {
            var b = this.w || (this.w = new er);
            dr(b, a);
            Y(this).listen(b, "key", this.Ya).listen(a, "focus", this.al).listen(a, "blur", this.Hf)
        }
    }
}
;
var Dr = function(a, b) {
    var c = Y(a)
        , d = a.j();
    b ? (c.listen(d, Tg.Kd, a.wb).listen(d, [Tg.Ld, Tg.me], a.Fb).listen(d, "mouseover", a.Ie).listen(d, "mouseout", a.ah),
    a.Me != Fa && c.listen(d, "contextmenu", a.Me),
    A && (Re(9) || c.listen(d, "dblclick", a.Fi),
    a.K || (a.K = new Ir(a),
        Lg(a, a.K)))) : (c.Ga(d, Tg.Kd, a.wb).Ga(d, [Tg.Ld, Tg.me], a.Fb).Ga(d, "mouseover", a.Ie).Ga(d, "mouseout", a.ah),
    a.Me != Fa && c.Ga(d, "contextmenu", a.Me),
    A && (Re(9) || c.Ga(d, "dblclick", a.Fi),
        Kg(a.K),
        a.K = null))
};
Z.prototype.bb = function() {
    Z.D.bb.call(this);
    this.w && kr(this.w);
    this.isVisible() && this.isEnabled() && this.c.Sd(this, !1)
}
;
Z.prototype.T = function() {
    Z.D.T.call(this);
    this.w && (this.w.Ka(),
        delete this.w);
    delete this.c;
    this.K = this.bc = this.ad = null
}
;
Z.prototype.Sa = function() {
    return this.ad
}
;
Z.prototype.g = function(a) {
    this.c.Mb(this.j(), a);
    this.ad = a
}
;
var rr = function(a, b) {
    a.ad = b
};
h = Z.prototype;
h.tb = function() {
    var a = this.Sa();
    if (!a)
        return "";
    a = t(a) ? a : Ia(a) ? lb(a, Dg).join("") : Cg(a);
    return be(a)
}
;
h.isVisible = function() {
    return this.If
}
;
h.setVisible = function(a, b) {
    return b || this.If != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.j()) && this.c.setVisible(b, a),
    this.isEnabled() && this.c.Sd(this, a),
        this.If = a,
        !0) : !1
}
;
h.isEnabled = function() {
    return !this.Ea(1)
}
;
h.oa = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Jr(this, 1, !a) || (a || (Kr(this, !1),
        this.Nb(!1)),
    this.isVisible() && this.c.Sd(this, a),
        Lr(this, 1, !a, !0))
}
;
h.Nb = function(a) {
    Jr(this, 2, a) && Lr(this, 2, a)
}
;
h.ob = function() {
    return this.Ea(4)
}
;
var Kr = function(a, b) {
    Jr(a, 4, b) && Lr(a, 4, b)
};
h = Z.prototype;
h.ih = function() {
    return this.Ea(8)
}
;
h.dd = function(a) {
    Jr(this, 8, a) && Lr(this, 8, a)
}
;
h.cd = function(a) {
    Jr(this, 16, a) && Lr(this, 16, a)
}
;
h.ee = function(a) {
    Jr(this, 32, a) && Lr(this, 32, a)
}
;
h.Wa = function(a) {
    Jr(this, 64, a) && Lr(this, 64, a)
}
;
h.getState = function() {
    return this.bd
}
;
h.Ea = function(a) {
    return !!(this.bd & a)
}
;
var Lr = function(a, b, c, d) {
    d || 1 != b ? tr(a, b) && c != a.Ea(b) && (a.c.xd(a, b, c),
        a.bd = c ? a.bd | b : a.bd & ~b) : a.oa(!c)
}
    , tr = function(a, b) {
    return !!(a.Te & b)
};
Z.prototype.Oa = function(a, b) {
    if (this.ya && this.Ea(a) && !b)
        throw Error("Component already rendered");
    !b && this.Ea(a) && Lr(this, a, !1);
    this.Te = b ? this.Te | a : this.Te & ~a
}
;
var Mr = function(a, b) {
    return !!(a.Ac & b) && tr(a, b)
}
    , Jr = function(a, b, c) {
    return tr(a, b) && a.Ea(b) != c && (!(a.Se & b) || a.dispatchEvent(Sq(b, c))) && !a.isDisposed()
};
h = Z.prototype;
h.Ie = function(a) {
    (!a.relatedTarget || !pg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Mr(this, 2) && this.Nb(!0)
}
;
h.ah = function(a) {
    a.relatedTarget && pg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (Mr(this, 4) && Kr(this, !1),
    Mr(this, 2) && this.Nb(!1))
}
;
h.Me = Fa;
h.wb = function(a) {
    this.isEnabled() && (Mr(this, 2) && this.Nb(!0),
    Xg(a) && (Mr(this, 4) && Kr(this, !0),
    this.c && this.c.Vg(this) && this.j().focus()));
    !this.df && Xg(a) && a.preventDefault()
}
;
h.Fb = function(a) {
    this.isEnabled() && (Mr(this, 2) && this.Nb(!0),
    this.ob() && this.yc(a) && Mr(this, 4) && Kr(this, !1))
}
;
h.Fi = function(a) {
    this.isEnabled() && this.yc(a)
}
;
h.yc = function(a) {
    Mr(this, 16) && this.cd(!this.Ea(16));
    Mr(this, 8) && this.dd(!0);
    Mr(this, 64) && this.Wa(!this.Ea(64));
    var b = new Mg("action",this);
    a && (b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.g = a.g);
    return this.dispatchEvent(b)
}
;
h.al = function() {
    Mr(this, 32) && this.ee(!0)
}
;
h.Hf = function() {
    Mr(this, 4) && Kr(this, !1);
    Mr(this, 32) && this.ee(!1)
}
;
h.Ya = function(a) {
    return this.isVisible() && this.isEnabled() && this.Td(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
}
;
h.Td = function(a) {
    return 13 == a.keyCode && this.yc(a)
}
;
if (!La(Z))
    throw Error("Invalid component class " + Z);
if (!La(lr))
    throw Error("Invalid renderer class " + lr);
var Nr = Pa(Z);
Cr[Nr] = lr;
Br("goog-control", function() {
    return new Z(null)
});
var Ir = function(a) {
    Jg.call(this);
    this.b = a;
    this.a = !1;
    this.c = new Kq(this);
    Lg(this, this.c);
    a = Vq(this.b);
    this.c.listen(a, Tg.Kd, this.h).listen(a, Tg.Ld, this.v).listen(a, "click", this.g)
};
w(Ir, Jg);
var Or = !A || Te(9);
Ir.prototype.h = function() {
    this.a = !1
}
;
Ir.prototype.v = function() {
    this.a = !0
}
;
var Pr = function(a, b) {
    if (!Or)
        return a.button = 0,
            a.type = b,
            a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
Ir.prototype.g = function(a) {
    if (this.a)
        this.a = !1;
    else {
        var b = a.b
            , c = b.button
            , d = b.type
            , e = Pr(b, "mousedown");
        this.b.wb(new Ug(e,a.a));
        e = Pr(b, "mouseup");
        this.b.Fb(new Ug(e,a.a));
        Or || (b.button = c,
            b.type = d)
    }
}
;
Ir.prototype.T = function() {
    this.b = null;
    Ir.D.T.call(this)
}
;
var Qr = function() {};
w(Qr, wr);
Ga(Qr);
h = Qr.prototype;
h.$c = function() {}
;
h.nb = function(a) {
    Er(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    return a.a.b("BUTTON", {
        "class": or(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.h || "",
        value: a.Y() || ""
    }, a.tb() || "")
}
;
h.Zc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
}
;
h.Ua = function(a, b) {
    Er(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    if (b.disabled) {
        var c = ab(this.a(1));
        T(b, c)
    }
    return Qr.D.Ua.call(this, a, b)
}
;
h.Ff = function(a) {
    Y(a).listen(a.j(), "click", a.yc)
}
;
h.Gf = Fa;
h.Wg = Fa;
h.Vg = function(a) {
    return a.isEnabled()
}
;
h.Sd = Fa;
h.xd = function(a, b, c) {
    Qr.D.xd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
}
;
h.Y = function(a) {
    return a.value
}
;
h.Bf = function(a, b) {
    a && (a.value = b)
}
;
h.kc = Fa;
var Rr = function(a, b, c) {
    Z.call(this, a, b || Qr.M(), c)
};
w(Rr, Z);
h = Rr.prototype;
h.Y = function() {
    return this.aa
}
;
h.Cf = function(a) {
    this.aa = a;
    this.c.Bf(this.j(), a)
}
;
h.wd = function(a) {
    this.h = a;
    xr(this.j(), a)
}
;
h.T = function() {
    Rr.D.T.call(this);
    delete this.aa;
    delete this.h
}
;
h.Z = function() {
    Rr.D.Z.call(this);
    if (tr(this, 32)) {
        var a = this.j();
        a && Y(this).listen(a, "keyup", this.Td)
    }
}
;
h.Td = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.yc(a) : 32 == a.keyCode
}
;
Br("goog-button", function() {
    return new Rr(null)
});
var Sr = function(a) {
    a = a || {};
    var b = a.attributes
        , c = a.content
        , d = a.disabled
        , e = a.id
        , f = a.jr
        , g = a.title
        , k = a.Fo
        , l = a.value
        , m = P;
    e = '<div role="button"' + (e ? ' id="' + S(e) + '"' : "") + ' class="';
    var q = a || {};
    a = q.Uq;
    var r = q.disabled
        , u = q.checked
        , C = q.width
        , Q = "goog-inline-block jfk-button ";
    q = q.style;
    switch (Ma(q) ? q.toString() : q) {
        case 0:
            Q += "jfk-button-standard";
            break;
        case 2:
            Q += "jfk-button-action";
            break;
        case 3:
            Q += "jfk-button-primary";
            break;
        case 1:
            Q += "jfk-button-default";
            break;
        case 4:
            Q += "jfk-button-flat";
            break;
        case 5:
            Q += "jfk-button-mini";
            break;
        case 6:
            Q += "jfk-button-contrast";
            break;
        default:
            Q += "jfk-button-standard"
    }
    Q += (Fn(C, 1) ? " jfk-button-narrow" : "") + (u ? " jfk-button-checked" : "") + (a ? " " + a : "") + (r ? " jfk-button-disabled" : "");
    d = e + S(Q) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? S(f) : "0") + '"') + (g ? k ? ' data-tooltip="' + S(g) + '"' : ' title="' + S(g) + '"' : "") + (l ? ' value="' + S(l) + '"' : "");
    b ? (Dn(b, un, Bn) ? b = b.Sa().replace(/([^"'\s])$/, "$1 ") : (b = String(b),
    ao.test(b) || (Za("Bad value `%s` for |filterHtmlAttributes", [b]),
        b = "zSoyz")),
        b = " " + b) : b = "";
    return m(d + b + ">" + R(null != c ? c : "") + "</div>")
};
Sr.a = "jfk.templates.button.strict";
var Tr = function(a, b, c) {
    Jg.call(this);
    this.xc = a;
    this.c = b || 0;
    this.a = c;
    this.b = v(this.Pg, this)
};
w(Tr, Jg);
h = Tr.prototype;
h.qa = 0;
h.T = function() {
    Tr.D.T.call(this);
    this.stop();
    delete this.xc;
    delete this.a
}
;
h.start = function(a) {
    this.stop();
    this.qa = Di(this.b, p(a) ? a : this.c)
}
;
h.stop = function() {
    this.ob() && Ei(this.qa);
    this.qa = 0
}
;
h.ob = function() {
    return 0 != this.qa
}
;
h.Pg = function() {
    this.qa = 0;
    this.xc && this.xc.call(this.a)
}
;
var Wr = function(a) {
    return he(yc(a.replace(Ur, function(b, c) {
        return Vr.test(c) ? "" : " "
    }).replace(/[\t\n ]+/g, " ")))
}
    , Vr = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i
    , Ur = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Xr = function() {
    if (Ee) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(qd)) ? a[1] : "0"
    }
    return De ? (a = /10[_.][0-9_.]+/,
        (a = a.exec(qd)) ? a[0].replace(/_/g, ".") : "10") : Fe ? (a = /Android\s+([^\);]+)(\)|;)/,
        (a = a.exec(qd)) ? a[1] : "") : Ge || He || Ie ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
        (a = a.exec(qd)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var as = function(a, b, c, d, e, f, g, k, l) {
    x(c);
    var m = Yr(c)
        , q = vq(a)
        , r = mq(a);
    if (r) {
        var u = new Zp(r.left,r.top,r.right - r.left,r.bottom - r.top);
        r = Math.max(q.left, u.left);
        var C = Math.min(q.left + q.width, u.left + u.width);
        if (r <= C) {
            var Q = Math.max(q.top, u.top);
            u = Math.min(q.top + q.height, u.top + u.height);
            Q <= u && (q.left = r,
                q.top = Q,
                q.width = C - r,
                q.height = u - Q)
        }
    }
    r = Kf(a);
    Q = Kf(c);
    if (r.a != Q.a) {
        C = r.a.body;
        Q = Ig(Q);
        u = new Ff(0,0);
        var M = Wf(Jf(C));
        if (ue(M, "parent")) {
            var Qa = C;
            do {
                var Mb = M == Q ? lq(Qa) : sq(x(Qa));
                u.x += Mb.x;
                u.a += Mb.a
            } while (M && M != Q && M != M.parent && (Qa = M.frameElement) && (M = M.parent))
        }
        C = Gf(u, lq(C));
        !A || Te(9) || Sf(r.a) || (C = Gf(C, Vf(r.a)));
        q.left += C.x;
        q.top += C.a
    }
    a = Zr(a, b);
    b = q.left;
    a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
    q = new Ff(b,q.top + (a & 1 ? q.height : 0));
    q = Gf(q, m);
    e && (q.x += (a & 4 ? -1 : 1) * e.x,
        q.a += (a & 1 ? -1 : 1) * e.a);
    if (g)
        if (l)
            var Ja = l;
        else if (Ja = mq(c))
            Ja.top -= m.a,
                Ja.right -= m.x,
                Ja.bottom -= m.a,
                Ja.left -= m.x;
    return $r(q, c, d, f, Ja, g, k)
}
    , Yr = function(a) {
    if (a = a.offsetParent) {
        var b = "HTML" == a.tagName || "BODY" == a.tagName;
        if (!b || "static" != eq(a, "position")) {
            var c = lq(a);
            if (!b) {
                b = Aq(a);
                var d;
                if (d = b) {
                    d = $e && Dk(10);
                    var e = Je && 0 <= Lc(Xr, 10);
                    d = ze || d || e
                }
                b = d ? -a.scrollLeft : !b || ye && Re("8") || "visible" == eq(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                c = Gf(c, new Ff(b,a.scrollTop))
            }
        }
    }
    return c || new Ff
}
    , $r = function(a, b, c, d, e, f, g) {
    a = new Ff(a.x,a.a);
    var k = Zr(b, c);
    c = uq(b);
    g = g ? new Hf(g.width,g.height) : new Hf(c.width,c.height);
    a = new Ff(a.x,a.a);
    g = new Hf(g.width,g.height);
    var l = 0;
    if (d || 0 != k)
        k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
            k & 1 ? a.a -= g.height + (d ? d.bottom : 0) : d && (a.a += d.top);
    if (f) {
        if (e) {
            d = a;
            k = g;
            l = 0;
            65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
            132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
            d.x < e.left && f & 1 && (d.x = e.left,
                l |= 1);
            if (f & 16) {
                var m = d.x;
                d.x < e.left && (d.x = e.left,
                    l |= 4);
                d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                    k.width = Math.max(k.width, 0),
                    l |= 4)
            }
            d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left),
                l |= 1);
            f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
            d.a < e.top && f & 4 && (d.a = e.top,
                l |= 2);
            f & 32 && (m = d.a,
            d.a < e.top && (d.a = e.top,
                l |= 8),
            d.a + k.height > e.bottom && (k.height = Math.min(e.bottom - d.a, m + k.height - e.top),
                k.height = Math.max(k.height, 0),
                l |= 8));
            d.a + k.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - k.height, e.top),
                l |= 2);
            f & 8 && (l |= (d.a < e.top ? 64 : 0) | (d.a + k.height > e.bottom ? 128 : 0));
            e = l
        } else
            e = 256;
        l = e
    }
    f = new Zp(0,0,0,0);
    f.left = a.x;
    f.top = a.a;
    f.width = g.width;
    f.height = g.height;
    e = l;
    if (e & 496)
        return e;
    gq(b, new Ff(f.left,f.top));
    g = new Hf(f.width,f.height);
    c == g || c && g && c.width == g.width && c.height == g.height || (c = g,
        a = Jf(b),
        g = Sf(Kf(a).a),
        !A || Re("10") || g && Re("8") ? Dq(b, c, "border-box") : (a = b.style,
            g ? (g = Hq(b),
                b = nq(b),
                a.pixelWidth = c.width - b.left - g.left - g.right - b.right,
                a.pixelHeight = c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width,
                a.pixelHeight = c.height)));
    return e
}
    , Zr = function(a, b) {
    return (b & 8 && Aq(a) ? b ^ 4 : b) & -9
};
var bs = function() {};
bs.prototype.b = function() {}
;
var cs = function(a, b) {
    this.g = a;
    this.m = !!b;
    this.v = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
w(cs, bs);
h = cs.prototype;
h.Uf = !1;
h.vg = 2;
h.ai = 20;
h.xg = 3;
h.rh = -5;
h.cf = !1;
var ds = function(a, b, c, d, e) {
    null != b && (a.xg = b);
    null != c && (a.vg = c);
    ya(d) && (a.ai = Math.max(d, 15));
    ya(e) && (a.rh = e)
};
cs.prototype.b = function(a, b, c) {
    x(this.h, "Must call setElements first.");
    a = this.vg;
    2 == a && (a = 0);
    es(this, this.xg, a, 2 == this.vg ? fs(this.xg) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.ai, 0, c)
}
;
var es = function(a, b, c, d, e, f) {
    if (a.c) {
        var g = gs(b, c);
        var k = a.c;
        var l = uq(k);
        l = (fs(b) ? l.height / 2 : l.width / 2) - d;
        var m = Zr(k, g), q;
        if (q = mq(k))
            k = $p(vq(k)),
                fs(b) ? k.top < q.top && !(m & 1) ? l -= q.top - k.top : k.bottom > q.bottom && m & 1 && (l -= k.bottom - q.bottom) : k.left < q.left && !(m & 4) ? l -= q.left - k.left : k.right > q.right && m & 4 && (l -= k.right - q.right);
        k = l;
        k = fs(b) ? new Ff(a.rh,k) : new Ff(k,a.rh);
        l = fs(b) ? 6 : 9;
        a.cf && 2 == e && (l = fs(b) ? 4 : 1);
        m = b ^ 3;
        fs(b) && "rtl" == a.c.dir && (m = b);
        g = as(a.c, gs(m, c), a.a, g, k, f, a.Uf ? l : 0, void 0, null);
        if (2 != e && g & 496) {
            es(a, b ^ 3, c, d, a.cf && 0 == e ? 1 : 2, f);
            return
        }
        !a.m || g & 496 || (e = parseFloat(a.a.style.left),
            f = parseFloat(a.a.style.top),
            x(!isNaN(e) && !isNaN(f), "Could not parse position."),
        isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || gq(a.a, Math.round(e), Math.round(f)))
    }
    hs(a, b, c, d)
}
    , hs = function(a, b, c, d) {
    var e = a.h;
    Kb(a.v, function(f) {
        V(e, f, !1)
    }, a);
    T(e, a.v[b]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    a.c ? (c = rq(a.c, a.a),
        d = is(a.c, b),
        fs(b) ? e.style.top = js(c.a + d.a, a.a.offsetHeight - 15) + "px" : e.style.left = js(c.x + d.x, a.a.offsetWidth - 15) + "px") : e.style[0 == c ? fs(b) ? "top" : "left" : fs(b) ? "bottom" : "right"] = d + "px"
}
    , js = function(a, b) {
    return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
}
    , gs = function(a, b) {
    switch (a) {
        case 2:
            return 0 == b ? 1 : 5;
        case 1:
            return 0 == b ? 0 : 4;
        case 0:
            return 0 == b ? 12 : 13;
        default:
            return 0 == b ? 8 : 9
    }
}
    , is = function(a, b) {
    var c = 0
        , d = 0;
    a = uq(a);
    switch (b) {
        case 2:
            c = a.width / 2;
            break;
        case 1:
            c = a.width / 2;
            d = a.height;
            break;
        case 0:
            d = a.height / 2;
            break;
        case 3:
            c = a.width,
                d = a.height / 2
    }
    return new Ff(c,d)
}
    , fs = function(a) {
    return 0 == a || 3 == a
};
var ks = function(a) {
    Jg.call(this);
    this.b = a || Kf()
};
w(ks, Jg);
ks.prototype.h = function() {
    Hp(this.j(), "tooltip");
    Jp(this.j(), "live", "polite")
}
;
var ls = function(a) {
    ks.call(this, a);
    this.a = this.b.b("DIV", "jfk-tooltip-contentId");
    this.g = this.b.b("DIV", "jfk-tooltip-arrow", this.b.b("DIV", "jfk-tooltip-arrowimplbefore"), this.b.b("DIV", "jfk-tooltip-arrowimplafter"));
    this.c = this.b.b("DIV", {
        "class": "jfk-tooltip",
        role: "tooltip"
    }, this.a, this.g);
    this.h()
};
w(ls, ks);
ls.prototype.j = function() {
    return this.c
}
;
ls.prototype.T = function() {
    ls.D.T.call(this);
    this.c && jg(this.c)
}
;
var ms = function(a) {
    ls.call(this, a)
};
w(ms, ls);
ms.prototype.h = function() {
    Hp(this.j(), "tooltip")
}
;
var os = function(a) {
    var b = a.getAttribute("title");
    b && ns(a, b)
}
    , ns = function(a, b, c) {
    c || (c = b instanceof Ad ? Wr(Bd(b).toString()) : b);
    a.removeAttribute("title");
    a.removeAttribute("data-tooltip-contained");
    a.removeAttribute("data-tooltip");
    b ? (b instanceof Ad ? a.a = b : (a.setAttribute("data-tooltip", b),
        a.a = null),
        a.setAttribute("aria-label", c)) : (a.a = null,
        a.removeAttribute("aria-label"));
    a = Kf(a) || Kf();
    b = Pa(a.a);
    ps[b] || (ps[b] = new qs(a))
}
    , rs = function(a, b) {
    var c = "";
    switch (b) {
        case 0:
            c += "l";
            break;
        case 2:
            c += "t";
            break;
        case 3:
            c += "r";
            break;
        default:
            c += "b"
    }
    a.setAttribute("data-tooltip-align", c + ",c")
}
    , ps = {}
    , qs = function(a) {
    Kq.call(this);
    this.K = a;
    this.L = new Tr(this.X,0,this);
    Lg(this, this.L);
    var b = Wf();
    this.w = La(b.MutationObserver) ? new b.MutationObserver(v(this.V, this)) : null;
    a = a.a;
    this.listen(a, "mouseout mousedown click blur focusout keydown".split(" "), this.R, !0);
    this.listen(a, ["mouseover", "focus", "focusin"], this.na, !0)
};
w(qs, Kq);
qs.prototype.T = function() {
    ss(this);
    qs.D.T.call(this)
}
;
var ts = function(a, b) {
    switch (b.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            a.O = !1;
            break;
        case "keydown":
            a.O = !0
    }
};
qs.prototype.na = function(a) {
    this.w && this.w.disconnect();
    ts(this, a);
    var b = a.target;
    a = "focus" == a.type || "focusin" == a.type;
    var c = this.a && pg(this.a.a, b);
    if (this.O || !a || c) {
        this.W = a;
        if (a = b && b.getAttribute && this.w)
            a = b.getAttribute("role") || null,
                a = sb(Gp, a);
        a && (this.w.observe(b, {
            attributes: !0
        }),
        (a = Lp(b)) && (b = a));
        this.g = b
    } else
        this.g = null;
    us(this)
}
;
qs.prototype.R = function(a) {
    ts(this, a);
    var b = a.target;
    a = "mousedown" == a.type || "click" == a.type;
    b = this.a && pg(this.a.a, b);
    a && b || (this.g = null,
        us(this))
}
;
qs.prototype.V = function(a) {
    y(a, v(function(b) {
        var c = Lp(b.target);
        c && "aria-activedescendant" == b.attributeName && (this.g = c,
            us(this))
    }, this))
}
;
var us = function(a) {
    if (!(a.L.ob() && a.b && a.v)) {
        ss(a);
        var b = null != a.v ? a.v : 50;
        a.L.start(a.b ? b : 300)
    }
}
    , ss = function(a) {
    a.G && (Ei(a.G),
        a.G = 0,
        a.b = null)
};
qs.prototype.X = function() {
    if (!this.g)
        vs(this),
            this.v = this.b = null;
    else if (!(this.b && this.a && pg(this.a.j(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = Eg(this.g, function(k) {
            return k.getAttribute && (k.getAttribute("data-tooltip-contained") || k.getAttribute("data-tooltip") || k.a) && !k.getAttribute("data-tooltip-suspended")
        })
            , b = !1;
        this.b && this.b != a && (vs(this),
            this.v = this.b = null,
            b = !0);
        if (!this.b && a && (this.b = a,
            ws(this, a))) {
            var c = Kd;
            if (a.getAttribute("data-tooltip-contained"))
                for (var d = Of("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                }
            else
                c = a.a ? a.a : Ed(a.getAttribute("data-tooltip"));
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = xc(le(f)) ? -1 : Number(f);
            var g = a.getAttribute("data-tooltip-hide-delay");
            g = xc(le(g)) ? null : Number(g);
            if (!b && (a = a.getAttribute("data-tooltip-delay"),
                a = Math.max(0, a - 300))) {
                this.G = Di(Ta(this.N, this.b, c, d, f, e, g), a, this);
                return
            }
            this.N(this.b, c, d, f, e, g)
        }
    }
}
;
var ws = function(a, b) {
    return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.W && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
}
    , xs = function(a) {
    if (a)
        switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
    return 1
};
qs.prototype.N = function(a, b, c, d, e, f) {
    this.G = 0;
    this.v = f;
    if (!this.a) {
        this.a = new ms(this.K);
        vs(this);
        dg(this.K.a.body, this.a.j());
        Lg(this, this.a);
        this.h = new cs("jfk-tooltip",!0);
        this.h.Uf = !0;
        this.h.cf = !0;
        f = this.h;
        var g = this.a.g;
        f.a = this.a.j();
        f.h = g
    }
    a: {
        if (c)
            switch (c.toLowerCase().split(",")[1]) {
                case "l":
                    f = 0;
                    break a;
                case "r":
                    f = 1;
                    break a
            }
        f = 2
    }
    ds(this.h, xs(c), f, void 0, d);
    U(this.a.j(), "jfk-tooltip-hide");
    this.C != e && (this.C && !xc(le(this.C)) && U(this.a.j(), this.C),
    xc(le(e)) || T(this.a.j(), e),
        this.C = e);
    gq(this.a.j(), 0, 0);
    if (b instanceof Ad)
        Ud(this.a.a, b);
    else
        for (fg(this.a.a); c = b.firstChild; )
            this.a.a.appendChild(c);
    this.h.c = a;
    this.h.b(null, 0)
}
;
var vs = function(a) {
    a.a && T(a.a.j(), "jfk-tooltip-hide")
};
var zs = function(a, b, c, d) {
    Rr.call(this, a, ys.M(), b);
    this.N = c || 0;
    this.m = d || 0;
    this.Xa = !1
};
w(zs, Rr);
zs.prototype.getStyle = function() {
    return this.N
}
;
var Bs = function(a, b) {
    a.N != b && (a.N = b,
        As(a))
};
h = zs.prototype;
h.wd = function(a) {
    this.h = a;
    var b = this.j();
    b && (this.Xa ? ns(b, a, void 0) : a ? b.title = a : b.removeAttribute("title"))
}
;
h.oa = function(a) {
    this.isEnabled() != a && (zs.D.oa.call(this, a),
        As(this))
}
;
h.ee = function(a) {
    zs.D.ee.call(this, a);
    Cs(this, !1)
}
;
h.wb = function(a) {
    zs.D.wb.call(this, a);
    this.isEnabled() && Cs(this, !0)
}
;
h.Fb = function(a) {
    zs.D.Fb.call(this, a);
    this.isEnabled() && Cs(this, !0)
}
;
var Cs = function(a, b) {
    a.j() && V(a.j(), "jfk-button-clear-outline", b)
}
    , As = function(a) {
    a.j() && Ds(a.c, a)
}
    , ys = function() {
    this.K = this.wa() + "-standard";
    this.c = this.wa() + "-action";
    this.L = this.wa() + "-primary";
    this.m = this.wa() + "-default";
    this.w = this.wa() + "-flat";
    this.C = this.wa() + "-narrow";
    this.G = this.wa() + "-mini";
    this.v = this.wa() + "-contrast"
};
w(ys, wr);
Ga(ys);
h = ys.prototype;
h.fd = function(a, b, c) {
    a && Bs(c, a);
    b && c.m != b && (c.m = b,
        As(c))
}
;
h.wa = function() {
    return "jfk-button"
}
;
h.nb = function(a) {
    hb(a, zs, "Button is expected to be instance of jfk.Button");
    var b = a.a
        , c = Wp(Sr, {
        disabled: !a.isEnabled(),
        checked: a.Ea(16),
        style: a.getStyle(),
        title: a.h,
        Fo: a.Xa,
        value: a.Y(),
        width: a.m
    }, void 0, b);
    b.ti(c, a.Sa());
    this.Ua(a, c);
    return c
}
;
h.Ua = function(a, b) {
    ys.D.Ua.call(this, a, b);
    this.h || (this.h = Yb(this.K, Ta(this.fd, 0, null), this.c, Ta(this.fd, 2, null), this.L, Ta(this.fd, 3, null), this.m, Ta(this.fd, 1, null), this.w, Ta(this.fd, 4, null), this.G, Ta(this.fd, 5, null), this.v, Ta(this.fd, 6, null), this.C, Ta(this.fd, null, 1)));
    for (var c = Op(b), d = 0; d < c.length; ++d) {
        var e = this.h[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip"))
        a.h = c,
            a.Xa = !0;
    return b
}
;
h.Y = function(a) {
    return a.getAttribute("value") || ""
}
;
h.Bf = function(a, b) {
    a && a.setAttribute("value", b)
}
;
var Ds = function(a, b) {
    function c(g, k) {
        (g ? d : e).push(k)
    }
    x(b.j(), "Button element must already exist when updating style.");
    var d = []
        , e = []
        , f = b.getStyle();
    c(0 == f, a.K);
    c(2 == f, a.c);
    c(3 == f, a.L);
    c(4 == f, a.w);
    c(5 == f, a.G);
    c(1 == f, a.m);
    c(6 == f, a.v);
    c(1 == b.m, a.C);
    c(!b.isEnabled(), a.wa() + "-disabled");
    Rp(b.j(), e);
    Qp(b.j(), d)
};
var Es = function(a, b) {
    X.call(this);
    this.W = b;
    this.Ra = a;
    this.hf = this.text = this.Ja = this.Aa = "";
    this.data = null;
    this.xb = Hm.M()
};
w(Es, X);
h = Es.prototype;
h.update = function(a, b, c, d) {
    this.text = a;
    this.Aa = b;
    this.Ja = c;
    this.data = d;
    this.setVisible(!1);
    return !1
}
;
h.setVisible = function(a) {
    var b = this.j();
    b && W(b, a)
}
;
h.isVisible = function() {
    var a = this.j();
    return a ? xq(a) : !1
}
;
h.Ej = function() {
    return {}
}
;
h.Lb = function() {
    return this.W
}
;
h.log = function(a, b) {
    var c = {};
    c.dt = this.W;
    c.sl = this.Aa;
    c.tl = this.Ja;
    c.hl = this.Ra;
    c.q = this.text;
    c.e = a;
    null != b && Xb(c, b);
    Xb(c, this.Ej());
    this.xb.log("lexicon", c);
    b = this.Aa;
    c = this.Ja;
    window.__gaTracker && (__gaTracker("set", "dimension1", this.Ra),
        __gaTracker("set", "dimension2", b + "|" + c),
        __gaTracker("set", "dimension3", b),
        __gaTracker("set", "dimension4", c));
    Dh("lexicon", this.W + ":" + a, "", 1)
}
;
var Fs = function(a, b, c, d, e) {
    Es.call(this, a, b);
    this.Oc = this.b = null;
    this.V = c;
    this.Cj = d;
    this.X = e;
    this.N = this.h = null;
    this.m = !1;
    this.ba = "More";
    this.rc = !1;
    this.Ca = "Less";
    this.Ob = [];
    new rp("mt");
    this.Zh = !1;
    this.F = L.M();
    this.c = []
};
w(Fs, Es);
h = Fs.prototype;
h.La = function() {
    Fs.D.La.call(this);
    this.Da($f("DIV"))
}
;
h.Da = function(a) {
    Fs.D.Da.call(this, a);
    T(this.j(), "gt-cd");
    T(this.j(), "gt-cd-" + this.W);
    xg(this.j(), !0);
    this.j().appendChild(Vp(io));
    this.Oc = D("gt-cd-tl", this.j());
    this.b = D("gt-cd-c", this.j());
    this.h = D("cd-expand-button", this.j());
    this.N = D("cd-expand-label", this.j());
    W(this.h, !1)
}
;
h.T = function() {
    this.Dd();
    Fs.D.T.call(this)
}
;
h.Od = function() {
    return this.X
}
;
h.ze = function() {
    return this.c.length
}
;
h.Mg = function(a) {
    return this.c.indexOf(a)
}
;
h.Dd = function() {
    this.c = []
}
;
h.gb = function() {
    return this.ze()
}
;
h.update = function(a, b, c, d) {
    Fs.D.update.call(this, a, b, c, d);
    this.m = this.rc = !1;
    jg(null);
    W(this.h, !1);
    U(this.h, "collapse");
    Gs(this, a);
    return !1
}
;
h.Z = function() {
    var a = this;
    Fs.D.Z.call(this);
    this.h && Ch(this.h, this.bo.bind(this));
    Y(this).listen(this, "a", v(this.Xi, this, "clks"), !1);
    Y(this).listen(this, "b", v(this.Xi, this, "clkt"), !1);
    this.j() && (Y(this).listen(this.j(), "focusout", function(b) {
        pg(a.j(), b.relatedTarget) || U(a.j(), "clear-outline")
    }),
        Y(this).listen(this.j(), "mousedown", function() {
            T(a.j(), "clear-outline")
        }),
        Y(this).listen(this.j(), "mouseup", function() {
            T(a.j(), "clear-outline")
        }))
}
;
h.bo = function() {
    this.m = !this.m;
    this.ge(this.m);
    if (this.m)
        T(this.h, "collapse"),
            G(this.N, this.Ca),
            this.log("expand"),
            im(this.F, this.X, this.gb());
    else {
        U(this.h, "collapse");
        G(this.N, this.ba);
        this.log("collapse");
        var a = this.F
            , b = this.gb();
        N(a, fm(a, 189, this.X, b, !0, 0))
    }
}
;
h.Xi = function(a, b) {
    b = b.target;
    var c = this.F;
    N(c, fm(c, 79, this.X, this.ze(), this.rc, this.Mg(b) + 1));
    b = Cg(b);
    this.log(a, {
        clk: b
    })
}
;
var Gs = function(a, b) {
    var c = F("DIV")
        , d = a.V.indexOf("%1$s");
    if (-1 != d) {
        var e = a.V.slice(0, d);
        d = a.V.slice(d + 4, a.V.length);
        e && eg(c, e);
        e = F("SPAN", {
            "class": "gt-card-ttl-txt"
        });
        bq(e, "direction", kc(a.Aa) ? "rtl" : "ltr");
        G(e, b);
        c.appendChild(e);
        d && eg(c, d);
        a.Oc && (fg(a.Oc),
            a.Oc.appendChild(c))
    } else
        a.Oc && G(a.Oc, a.Cj)
}
    , Hs = function(a, b, c) {
    a.rc = !0;
    W(a.h, !0);
    null != b && (a.ba = b);
    null != c && (a.Ca = c);
    G(a.N, a.ba)
};
Fs.prototype.ge = function(a) {
    for (var b, c, d = Of("gt-card-expand-wrapper", this.j()), e = 0; e < d.length; e++) {
        b = d[e];
        bq(b, "max-height", dq(b, "height"));
        c = b.firstChild;
        var f = Gq(c, "margin");
        c = uq(c).height + f.top + f.bottom;
        bq(b, "max-height", a ? c + "px" : 0);
        a ? (U(b, "gt-card-collapsed"),
            T(b, "gt-card-expanded"),
            Jp(b, "hidden", !1),
            ih(b, Sg, function(g) {
                bq(g.target, "max-height", "unset")
            }, !1)) : (U(b, "gt-card-expanded"),
            T(b, "gt-card-collapsed"),
            Jp(b, "hidden", !0))
    }
}
;
var Is = function(a, b) {
    if (b)
        return a;
    a = F("DIV", {
        "class": "gt-card-expand-wrapper gt-card-collapsed"
    }, a);
    Jp(a, "hidden", !0);
    return a
}
    , Js = function(a, b, c) {
    a.Ob.push([b, c])
};
var Ls = function(a, b) {
    var c = Array.prototype.slice.call(arguments)
        , d = c.shift();
    if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, k, l, m, q, r) {
        if ("%" == m)
            return "%";
        var u = c.shift();
        if ("undefined" == typeof u)
            throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = u;
        return Ks[m].apply(null, arguments)
    })
}
    , Ks = {
    s: function(a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + ke(" ", Number(c) - a.length) : ke(" ", Number(c) - a.length) + a
    },
    f: function(a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c))
            return d;
        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return d = 0 <= b.indexOf("-", 0) ? f + d + ke(" ", a) : f + ke(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    },
    d: function(a, b, c, d, e, f, g, k) {
        return Ks.f(parseInt(a, 10), b, c, d, 0, f, g, k)
    }
};
Ks.i = Ks.d;
Ks.u = Ks.d;
var Ms = function(a, b, c, d, e, f, g) {
    Fs.call(this, a, null != c && c ? "mbd" : "bd", MSG_TRANSLATIONS_OF, "", 11);
    this.g = c;
    this.R = null != d ? d : !1;
    this.xa = "";
    this.xa = this.g && this.R ? "gt-baf-cell gt-baf-word" : this.g ? "gt-baf-cell gt-baf-word-clickable" : "gt-baf-word-clickable";
    this.C = this.R ? null : "gt-baf-back";
    this.$b = f || "";
    this.ac = g || "";
    this.w = null;
    this.ra = !1;
    this.aa = null != e ? e : !0;
    this.K = {};
    this.K[1] = b[2];
    this.K[2] = b[1];
    this.K[3] = b[0];
    this.Xa = b[3]
};
w(Ms, Fs);
Ms.prototype.update = function(a, b, c, d) {
    Ms.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 1))
        return !1;
    fg(this.b);
    this.Dd();
    this.w = new Lh(d);
    Ns(this, this.w);
    a = F("TBODY");
    b = F("TABLE", {
        "class": "gt-baf-table"
    }, a);
    c = this.w.a;
    for (var e = 0; e < c.length; e++) {
        var f = c[e]
            , g = Os(this, f, this.g && this.aa && 0 === e);
        dg(a, g);
        f = f.a;
        for (var k = g = 0; k < f.length; k++) {
            var l = f[k];
            if (!this.g && this.w.b && 0 < k) {
                var m = Ph(l);
                var q = F("DIV", {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                m = Is(q, m);
                this.g || (m = F("TD", {
                    colspan: 4
                }, m),
                    m = F("TR", null, m));
                dg(a, m)
            }
            l = l.a;
            for (m = 0; m < l.length; m++) {
                q = l[m];
                var r = d.cb(0).Tc();
                q = Ps(this, q, r, g);
                a.appendChild(q);
                g++
            }
        }
        this.b.appendChild(b);
        0 < Mh(this.w) && (f = this.Xa.replace("%1$s", Mh(this.w).toLocaleString(this.Ra)),
            Hs(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
}
;
Ms.prototype.Z = function() {
    Ms.D.Z.call(this);
    T(this.j(), "gt-cd-baf");
    Y(this).listen(this.j(), "click", this.yb);
    Y(this).listen(this.j(), "mouseover", this.eb);
    Y(this).listen(this.j(), "mouseout", this.hb)
}
;
var Ns = function(a, b) {
    var c = Nh(b);
    c = c.sort(function(g, k) {
        return k.Pb - g.Pb
    });
    var d = 0;
    a.ra = !1;
    for (var e = 0; e < c.length; e++) {
        var f = c[e];
        -1 < f.Pb && (a.ra = !0);
        f.b = .05 <= f.Pb ? 3 : .0025 <= f.Pb ? 2 : 1;
        f.a = 12 > e || 3 == f.b;
        d += f.a ? 0 : 1
    }
    if (4 >= d)
        for (e = 0; e < c.length; e++)
            c[e].a = !0;
    b.b && Oh(b)
}
    , Qs = function(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var e = F("SPAN", null, b[d]);
        null != a.C && (T(e, a.C),
            a.c.push(e));
        c.push(e);
        d < b.length - 1 && c.push(ag(", "))
    }
    return c
}
    , Os = function(a, b, c) {
    var d = b.c;
    d && (a.hf = d,
        Gs(a, d));
    b = Wp(lo, {
        Dk: c,
        Vk: a.$b,
        Wk: a.ac,
        dn: b.g,
        Hd: Qh(b)
    });
    if (c) {
        c = E("tlid-frequency-help-icon", b);
        var e = E("tlid-frequency-help-icon-container", b)
            , f = E("tlid-frequency-help-tooltip", b);
        Y(a).listen(c, "click", function() {
            V(e, "show-tooltip", !Pp(e, "show-tooltip"))
        });
        Y(a).listen(document, "click", function(g) {
            var k = fb(g.target);
            Pp(e, "show-tooltip") && (g = k.classList.contains("tlid-frequency-help-icon"),
                k = pg(f, k),
            g || k || U(e, "show-tooltip"))
        })
    }
    a = F("TD", {
        colspan: 4
    }, b);
    return F("TR", null, a)
}
    , Rs = function(a, b) {
    return kc(b) !== kc(a.Ra) ? kc(b) ? "rtl" : "ltr" : ""
}
    , Ps = function(a, b, c, d) {
    if (a.g) {
        var e = b.text
            , f = null != b.Qe ? b.Qe : ""
            , g = e === c;
        c = b.a;
        d = a.R ? "gt-baf-entry-clickable" : "gt-baf-entry";
        g && (d += " gt-baf-entry-selected");
        d = F("TR", {
            "class": d
        });
        var k = F("TD");
        e = Wp(mo, {
            ih: g,
            Qe: f,
            Wn: Rs(a, a.Ja),
            Hd: c,
            Ko: e,
            Lo: a.xa
        });
        dg(k, e);
        e = F("TD");
        f = Wp(no, {
            kf: null != a.C ? a.C : "",
            Ak: Rs(a, a.Aa),
            fg: b.fg,
            Hd: c
        });
        dg(e, f);
        dg(d, k);
        dg(d, e);
        k = b.b;
        b = a.K[b.b];
        a.g && a.aa && k && b && (b = Wp(po, {
            Pb: k,
            zc: b,
            Hd: c
        }),
            c = F("TD"),
            dg(c, b),
            dg(d, c));
        a.C && (b = Of(a.C, d),
            y(b, function(l) {
                this.c.push(l)
            }, a));
        b = a.R ? E("gt-baf-word", d) : E("gt-baf-word-clickable", d);
        a.c.push(b);
        return d
    }
    f = b.text;
    g = b.Qe;
    e = b.a;
    c = Ss(a, b.b, e);
    k = null;
    g && (k = Ts(g, e));
    f = Us(a, f, g, e);
    b = Qs(a, b.fg);
    b = Vs(a, b, e);
    b = F("TR", null, c, k, f, b);
    kc(a.Aa) != kc(a.Ra) && 1 == d % 2 && T(b, "gt-baf-translations-alt");
    return b
}
    , Ss = function(a, b, c) {
    if (!a.ra || !a.aa)
        return a = F("DIV", {
            "class": "gt-baf-cell"
        }),
            c = Is(a, c),
            F("TD", null, c);
    a = F("DIV", {
        "class": "gt-baf-cell gt-baf-marker-container",
        title: a.K[b]
    });
    b = Ls("width: %dpx", 8 * b);
    b = F("DIV", {
        "class": "gt-baf-cts",
        style: b
    });
    dg(a, b);
    c = Is(a, c);
    return F("TD", null, c)
}
    , Ts = function(a, b) {
    var c = F("DIV", {
        "class": "gt-baf-cell gt-baf-previous-word"
    });
    G(c, a);
    a = Is(c, b);
    return F("TD", null, a)
}
    , Us = function(a, b, c, d) {
    var e = "";
    kc(a.Ja) !== kc(a.Ra) && (e = Ls("direction: %s", kc(a.Ja) ? "rtl" : "ltr"));
    b = F("SPAN", a.xa, b);
    a.c.push(b);
    a = F("DIV", "gt-baf-cell", b);
    a = Is(a, d);
    d || T(a, "gt-card-widen-wrapper");
    return F("TD", c ? null : {
        colspan: 2,
        style: e
    }, a)
}
    , Vs = function(a, b, c) {
    a = kc(a.Aa) !== kc(a.Ra) ? Ls("direction: %s", kc(a.Aa) ? "rtl" : "ltr") : "";
    b = F("DIV", {
        "class": "gt-baf-cell gt-baf-translations",
        style: a
    }, b);
    c = Is(b, c);
    return F("TD", {
        style: "width: 100%"
    }, c)
};
Ms.prototype.ge = function(a) {
    Ms.D.ge.call(this, a);
    for (var b = Of("gt-card-widen-wrapper", this.j()), c = 0; c < b.length; c++) {
        var d = b[c]
            , e = D("gt-baf-cell", d)
            , f = Gq(e, "margin");
        e = e.scrollWidth + f.left + f.right + 1;
        bq(d, "max-width", a ? e + "px" : 0)
    }
}
;
Ms.prototype.yb = function(a) {
    var b = Fg(a.target);
    null != b ? (a = D("gt-baf-word", b),
    null != a && this.dispatchEvent(new Mg("b",a))) : Pp(a.target, "gt-baf-word-clickable") ? this.dispatchEvent(new Mg("b",a.target)) : Pp(a.target, "gt-baf-back") && this.dispatchEvent(new Mg("a",a.target))
}
;
Ms.prototype.eb = function(a) {
    if (Pp(a.target, "gt-baf-back")) {
        var b = Nf(document, null, "gt-baf-back", this.j());
        a = Cg(a.target);
        for (var c = 0; c < b.length; c++)
            Cg(b[c]) == a && T(b[c], "gt-baf-hl")
    }
}
;
Ms.prototype.hb = function() {
    for (var a = Nf(document, null, "gt-baf-hl", this.j()), b = 0; b < a.length; b++)
        U(a[b], "gt-baf-hl")
}
;
var Xs = function(a) {
    this.a = null != a ? new an(Ws(a)) : new an;
    this.b = "home";
    qn(this.a, "view") && (this.b = this.a.get("view"),
        pn(this.a, "view"))
}
    , Ys = function(a, b) {
    a.b = b;
    return a
}
    , ct = function(a, b, c, d) {
    bt(a);
    a.a.set("op", "translate").set("sl", b).set("tl", c);
    null != d && !xc(d) && a.a.set("text", d)
}
    , dt = function(a, b, c, d) {
    bt(a);
    a.a.set("op", "star").set("sl", b).set("tl", c).set("text", d)
}
    , bt = function(a) {
    pn(a.a, "op");
    pn(a.a, "sl");
    pn(a.a, "tl");
    pn(a.a, "text")
};
Xs.prototype.Qa = function() {
    return et(this, "sl")
}
;
Xs.prototype.ma = function() {
    return et(this, "tl")
}
;
var et = function(a, b) {
    var c = "";
    qn(a.a, b) && (c = a.a.get(b),
        c = de(c));
    return c
}
    , ft = function(a, b) {
    return qn(a.a, "op") && a.a.get("op") === b
};
Xs.prototype.toString = function() {
    var a = "view=" + this.b
        , b = this.a;
    nn(b);
    0 == b.b || (a += "&" + this.a.toString());
    return a
}
;
function Ws(a) {
    if (a.startsWith("view="))
        return a;
    var b = new Xs;
    if (a.startsWith("op="))
        switch (a = new an(a),
            a.get("op")) {
            case "showhistory":
                return Ys(b, "history").toString();
            case "showsaved":
                return Ys(b, "saved").toString();
            case "star":
                if (qn(a, "sl") && qn(a, "tl") && qn(a, "text") && qn(a, "page")) {
                    switch (a.get("page")) {
                        case "history":
                            Ys(b, "history");
                            break;
                        default:
                            Ys(b, "home")
                    }
                    dt(b, a.get("sl"), a.get("tl"), a.get("text"))
                }
                return b.toString();
            default:
                return Ys(b, "home").toString()
        }
    else {
        a = a.split(/[|\/]/);
        Ys(b, "home");
        var c = ""
            , d = ""
            , e = "";
        0 < a.length && 0 < a[0].length && (c = a[0]);
        1 < a.length && 0 < a[1].length && (d = a[1]);
        2 < a.length && 0 < a[2].length && (e = a[2]);
        0 < c.length && 0 < d.length && (0 < e.length ? ct(b, c, d, e) : ct(b, c, d),
        3 < a.length && "share" === a[3] && b.a.set("op", "share"));
        return b.toString()
    }
}
;var gt = function(a, b) {
    Mg.call(this, "navigate");
    this.Hh = a;
    this.nm = b
};
w(gt, Mg);
var it = function() {
    return !ht() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
}
    , ht = function() {
    return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
}
    , jt = function() {
    return !it() && !ht()
};
var kt = function(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c)
        a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var pt = function(a, b, c, d) {
    K.call(this);
    if (a && !b)
        throw Error("Can't use invisible history without providing a blank page.");
    if (c)
        var e = c;
    else {
        e = "history_state" + lt;
        var f = Jd("input", {
            type: "text",
            name: e,
            id: e,
            style: ec("display:none")
        });
        document.write(Bd(f));
        e = Lf(e)
    }
    this.w = e;
    this.a = c ? Wf(Jf(c)) : window;
    this.G = b;
    A && !b && (this.G = "https" == window.location.protocol ? tc(dc(ec("https:///"))) : tc(dc(ec('javascript:""'))));
    this.b = new Bi(150);
    Lg(this, this.b);
    this.g = !a;
    this.c = new Kq(this);
    if (a || mt) {
        if (d)
            var g = d;
        else {
            a = "history_iframe" + lt;
            d = this.G;
            b = {
                id: a,
                style: ec("display:none"),
                sandbox: void 0
            };
            d && rc(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c)
                x(g.toLowerCase() == g, "Must be lower case"),
                    e[g] = c[g];
            for (g in d)
                x(g.toLowerCase() == g, "Must be lower case"),
                    e[g] = d[g];
            for (g in b) {
                f = g.toLowerCase();
                if (f in c)
                    throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                f in d && delete e[f];
                e[g] = b[g]
            }
            g = Id("iframe", e, void 0);
            document.write(Bd(g));
            g = Lf(a)
        }
        this.C = g;
        this.N = !0
    }
    mt && (this.c.listen(this.a, "load", this.Um),
        this.O = this.L = !1);
    this.g ? nt(this, this.getToken(), !0) : ot(this, this.w.value);
    lt++
};
w(pt, K);
pt.prototype.m = !1;
pt.prototype.v = !1;
pt.prototype.h = null;
var qt = function(a, b) {
    var c = b || kt;
    return function() {
        var d = this || n;
        d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
        var e = c(Pa(a), arguments);
        return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
    }
}(function() {
    return A ? Te(8) : "onhashchange"in n
})
    , mt = A && !Te(8);
h = pt.prototype;
h.$d = null;
h.T = function() {
    pt.D.T.call(this);
    this.c.Ka();
    this.oa(!1)
}
;
h.oa = function(a) {
    if (a != this.m)
        if (mt && !this.L)
            this.O = a;
        else if (a)
            if (we ? this.c.listen(this.a.document, rt, this.R) : ze && this.c.listen(this.a, "pageshow", this.Zm),
            qt() && this.g)
                this.c.listen(this.a, "hashchange", this.Wm),
                    this.m = !0,
                    this.dispatchEvent(new gt(this.getToken(),!1));
            else {
                if (!A || it() || this.L)
                    this.c.listen(this.b, "tick", v(this.K, this, !0)),
                        this.m = !0,
                    mt || (this.h = this.getToken(),
                        this.dispatchEvent(new gt(this.getToken(),!1))),
                        this.b.start()
            }
        else
            this.m = !1,
                Pq(this.c),
                this.b.stop()
}
;
h.Um = function() {
    this.L = !0;
    this.w.value && ot(this, this.w.value, !0);
    this.oa(this.O)
}
;
h.Zm = function(a) {
    a.b.persisted && (this.oa(!1),
        this.oa(!0))
}
;
h.Wm = function() {
    var a = st(this.a);
    a != this.h && tt(this, a, !0)
}
;
h.getToken = function() {
    return null != this.$d ? this.$d : this.g ? st(this.a) : ut(this) || ""
}
;
var st = function(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
}
    , vt = function(a, b, c) {
    a.getToken() != b && (a.g ? (nt(a, b, c),
    qt() || A && !it() && ot(a, b, c, void 0),
    a.m && a.K(!1)) : (ot(a, b, c),
        a.$d = a.h = a.w.value = b,
        a.dispatchEvent(new gt(b,!1))))
}
    , nt = function(a, b, c) {
    a = a.a.location;
    var d = a.href.split("#")[0]
        , e = Jc(a.href, "#");
    if (mt || e || b)
        d += "#" + b;
    d != a.href && (b = d,
        d = ec("URL taken from location.href."),
        ab(dc(d), "must provide justification"),
        x(!xc(dc(d)), "must provide non-empty justification"),
        b = Tc(b),
        c ? Zd(a, b) : Yd(a, b))
}
    , ot = function(a, b, c, d) {
    if (a.N || b != ut(a))
        if (a.N = !1,
            b = ce(b),
            A) {
            var e = ug(a.C);
            e.open("text/html", c ? "replace" : void 0);
            c = Md(Jd("title", {}, d || a.a.document.title), Jd("body", {}, b));
            e.write(Bd(c));
            e.close()
        } else
            hb(a.G, pc, "this.iframeSrc_ must be set on calls to setIframeToken_"),
                e = rc(a.G) + "#" + b,
            (a = a.C.contentWindow) && (c ? Zd(a.location, e) : Yd(a.location, e))
}
    , ut = function(a) {
    if (A)
        return a = ug(a.C),
            a.body ? de(a.body.innerHTML) : null;
    var b = a.C.contentWindow;
    if (b) {
        try {
            var c = de(st(b))
        } catch (d) {
            return a.v || (1 != a.v && Ci(a.b, 1E4),
                a.v = !0),
                null
        }
        a.v && (0 != a.v && Ci(a.b, 150),
            a.v = !1);
        return c || null
    }
    return null
};
pt.prototype.K = function(a) {
    if (this.g) {
        var b = st(this.a);
        b != this.h && tt(this, b, a)
    }
    if (!this.g || mt)
        if (b = ut(this) || "",
        null == this.$d || b == this.$d)
            this.$d = null,
            b != this.h && tt(this, b, a)
}
;
var tt = function(a, b, c) {
    a.h = a.w.value = b;
    a.g ? (mt && ot(a, b),
        nt(a, b)) : ot(a, b);
    a.dispatchEvent(new gt(a.getToken(),c))
};
pt.prototype.R = function() {
    this.b.stop();
    this.b.start()
}
;
var rt = ["mousedown", "keydown", "mousemove"]
    , lt = 0;
var wt = function(a, b, c) {
    var d = this;
    K.call(this);
    this.b = new pt(!1,void 0,b,c);
    this.c = null;
    this.h = 0;
    this.g = a || !1;
    H(this.b, "navigate", function(e) {
        e.nm && d.dispatchEvent({
            type: "c",
            Hh: e.Hh
        })
    }, !1)
};
w(wt, K);
var yt = function(a, b, c, d) {
    var e = ""
        , f = ""
        , g = "";
    if (a.g)
        b = new Xs(b),
            e = b.Qa(),
            f = b.ma(),
            g = et(b, "text");
    else {
        var k = [];
        y(b.split(/[|\/]/), function(l) {
            k.push(de(l))
        });
        e = le(k[0]);
        f = le(k[1]);
        2 < k.length && (g = k[2])
    }
    !xc(e) && !xc(f) && 0 <= c.indexOf(e) && ("auto" === f || 0 <= d.indexOf(f)) ? xt(a.c, e, f, g, "bh") : xt(a.c, "", "", "", "bh")
}
    , zt = function(a, b, c, d) {
    var e = new Xs(b);
    b = e.Qa();
    e = e.ma();
    !xc(b) && !xc(e) && 0 <= c.indexOf(b) && ("auto" === e || 0 <= d.indexOf(e)) ? xt(a.c, b, e, "", "bh") : xt(a.c, "", "", "", "bh")
}
    , Bt = function(a, b, c, d, e) {
    b = null != b ? b : "auto";
    c = null != c ? c : "en";
    a.g ? (a = At(a),
        ct(a, b, c, d),
    null != e && "share" === e && a.a.set("op", "share"),
        b = a.toString()) : (b = b + "/" + c + "/" + ce(d),
    e && (b += "/" + e));
    return b
}
    , At = function(a) {
    if (!a.g)
        throw Error("Should never be invoked without new URL fragment schema");
    return new Xs(a.b.getToken())
}
    , Ct = function(a, b, c, d, e, f) {
    a.a(Bt(a, b, c, d, f), !e || null != f)
};
wt.prototype.a = function(a, b) {
    var c = (new Date).getTime();
    2E3 < c - this.h ? vt(this.b, a, !1) : vt(this.b, a, !0);
    this.h = b ? 0 : c
}
;
var Dt = function() {};
w(Dt, wr);
Ga(Dt);
h = Dt.prototype;
h.nb = function(a) {
    var b = or(this, a);
    b = a.a.b("DIV", "goog-inline-block " + b.join(" "), this.lf(a.Sa(), a.a));
    xr(b, a.h);
    return b
}
;
h.$c = function() {
    return "button"
}
;
h.Eb = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
}
;
h.lf = function(a, b) {
    return b.b("DIV", "goog-inline-block " + (this.wa() + "-outer-box"), b.b("DIV", "goog-inline-block " + (this.wa() + "-inner-box"), a))
}
;
h.Zc = function(a) {
    return "DIV" == a.tagName
}
;
h.Ua = function(a, b) {
    x(b);
    Et(b, !0);
    Et(b, !1);
    a: {
        var c = a.a.ri(b);
        var d = this.wa() + "-outer-box";
        if (c && Pp(c, d) && (c = a.a.ri(c),
            d = this.wa() + "-inner-box",
        c && Pp(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.lf(b.childNodes, a.a));
    Qp(b, ["goog-inline-block", this.wa()]);
    return Dt.D.Ua.call(this, a, b)
}
;
h.wa = function() {
    return "goog-custom-button"
}
;
var Et = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == yc(e))
                    a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else
                break;
            c = d
        }
};
var Ft = function(a, b, c) {
    Rr.call(this, a, b || Dt.M(), c);
    this.Oa(16, !0)
};
w(Ft, Rr);
Br("goog-toggle-button", function() {
    return new Ft(null)
});
var Gt = function(a, b, c, d) {
    Ft.call(this, a, c || wr.M(), d);
    this.N = a;
    this.m = b || null;
    this.b = null
};
w(Gt, Ft);
Gt.prototype.cd = function(a) {
    Gt.D.cd.call(this, a);
    Ht(this)
}
;
Gt.prototype.oa = function(a) {
    Gt.D.oa.call(this, a);
    Ht(this)
}
;
var Ht = function(a) {
    a.isEnabled() ? null != a.m && a.g(a.Ea(16) ? a.m : a.N) : a.b ? (a.g(a.b),
        a.b = null) : a.g("")
}
    , Jt = function() {
    zs.call(this);
    this.b = !1;
    It(this)
};
w(Jt, zs);
var It = function(a) {
    a.b ? (Gr(a, "unstarred"),
        Fr(a, "starred")) : (Gr(a, "starred"),
        Fr(a, "unstarred"))
}
    , Kt = function() {};
w(Kt, wr);
Ga(Kt);
Kt.prototype.nb = function(a) {
    var b = a.a.b("DIV", or(this, a).join(" "))
        , c = a.a.b("SPAN")
        , d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    b.appendChild(c);
    a.Sa() && (b.appendChild(d),
        this.Mb(b, a.Sa()));
    return b
}
;
Kt.prototype.Mb = function(a, b) {
    a && (a = p(a.lastElementChild) ? a.lastElementChild : lg(a.lastChild, !1)) && G(a, b)
}
;
Kt.prototype.wa = function() {
    return "trans-tool-button"
}
;
Kt.prototype.Ua = function(a, b) {
    var c = a.Sa();
    b = Kt.D.Ua.call(this, a, b);
    a.ad = c;
    c = a.a.b("SPAN");
    var d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    fg(b);
    b.appendChild(c);
    a.Sa() && (b.appendChild(d),
        this.Mb(b, a.Sa()));
    return b
}
;
var Lt = function(a, b) {
    this.c = a;
    this.h = b || !1
};
w(Lt, wr);
Lt.prototype.nb = function(a) {
    var b = a.a.b("DIV", or(this, a).join(" ") + " goog-inline-block")
        , c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    b.appendChild(c);
    a.Sa() && this.Mb(b, a.Sa());
    return b
}
;
Lt.prototype.Mb = function(a, b) {
    a && !this.h && (ns(a, b, void 0),
        rs(a, 2))
}
;
Lt.prototype.wa = function() {
    return "goog-toolbar-button"
}
;
Lt.prototype.Ua = function(a, b) {
    var c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    fg(b);
    b.appendChild(c);
    a.Sa() && this.Mb(b, a.Sa());
    return b = Lt.D.Ua.call(this, a, b)
}
;
var Mt = function(a, b, c, d) {
    this.text = a;
    this.Aa = b;
    this.Ja = c;
    this.data = d
}
    , Nt = function(a, b, c, d) {
    this.g = a;
    this.c = b;
    this.h = c;
    this.v = d;
    this.a = [];
    this.b = -1;
    H(this.g, "action", this.gn, !1, this);
    H(this.c, "action", this.Nm, !1, this);
    H(this.h, "action", this.io, !1, this)
};
h = Nt.prototype;
h.push = function(a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new Mt(a,b,c,d));
    Ot(this)
}
;
h.reset = function() {
    this.a = [];
    this.b = -1
}
;
h.gn = function() {
    0 < this.b && (--this.b,
        Ot(this));
    Hm.M().log("lxprev")
}
;
h.Nm = function() {
    this.b < this.a.length - 1 && (++this.b,
        Ot(this));
    Hm.M().log("lxnext")
}
;
h.io = function() {
    1 < this.a.length && (this.a.splice(1),
        this.b = 0,
        Ot(this));
    Hm.M().log("lxclear")
}
;
var Ot = function(a) {
    var b = a.a[a.b];
    a.v.update(b.text, b.Aa, b.Ja, b.data);
    a.g.oa(1 < a.b);
    a.c.oa(a.b < a.a.length - 1)
};
var Pt = function() {
    this.b = 0;
    this.a = []
};
Ga(Pt);
Pt.prototype.c = function(a) {
    var b = new Image
        , c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function() {
        delete Pt.M().a[c]
    }
    ;
    b.src = a;
    b = null
}
;
var Qt = !1
    , Rt = function(a) {
    if (a = a.match(/[\d]+/g))
        a.length = 3
};
(function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Qt = !0,
                a.description)) {
                Rt(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Qt = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"],
            Qt = !(!a || !a.enabledPlugin))) {
            Rt(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Qt = !0;
                Rt(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Qt = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    Qt = !0,
                    Rt(b.GetVariable("$version"))
            } catch (c) {}
        }
    }
)();
var St = Qt;
var Tt = function() {
    K.call(this);
    this.url = ""
};
w(Tt, K);
Tt.prototype.he = function() {
    this.dispatchEvent(new Ut(this.url))
}
;
Tt.prototype.play = function(a) {
    this.url = a
}
;
Tt.prototype.c = function() {
    this.dispatchEvent(new Vt(this.url))
}
;
var Wt = function(a) {
    Mg.call(this, "sound_play_start");
    this.url = a
};
w(Wt, Mg);
var Xt = function(a) {
    Mg.call(this, "sound_finished");
    this.url = a
};
w(Xt, Mg);
var Ut = function(a) {
    Mg.call(this, "sound_interrupted");
    this.url = a
};
w(Ut, Mg);
var Vt = function(a) {
    Mg.call(this, "sound_error");
    this.url = a
};
w(Vt, Mg);
var Yt = function() {
    Tt.call(this);
    this.v = Audio;
    this.a = new this.v;
    this.b = {}
};
w(Yt, Tt);
Yt.prototype.Ih = function() {
    return !this.a.paused
}
;
Yt.prototype.he = function() {
    Yt.D.he.call(this);
    this.a.pause()
}
;
Yt.prototype.play = function(a) {
    Yt.D.play.call(this, a);
    Zt(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a],
        this.b[a] = null,
        this.a.play()) : (this.a = $t(this, a),
        this.a.autoplay = !0)
}
;
Yt.prototype.Kj = function(a) {
    n.setTimeout(v(this.m, this, a), 1E3)
}
;
var $t = function(a, b) {
    var c = new a.v;
    c.setAttribute("src", b);
    H(c, "play", a.h, !1, a);
    H(c, "ended", a.g, !1, a);
    H(c, "error", a.c, !1, a);
    c.load();
    return c
}
    , Zt = function(a, b) {
    ph(b, "play", a.h);
    ph(b, "ended", a.g)
};
Yt.prototype.m = function(a) {
    null != this.b[a] && (Zt(this, this.b[a]),
        this.b[a] = null);
    this.b[a] = $t(this, a)
}
;
Yt.prototype.h = function() {
    ph(this.a, "play", this.h);
    this.dispatchEvent(new Wt(this.url))
}
;
Yt.prototype.g = function() {
    ph(this.a, "ended", this.g);
    this.dispatchEvent(new Xt(this.url))
}
;
var au = function(a) {
    Tt.call(this);
    this.a = a;
    this.b = !1
};
w(au, Tt);
h = au.prototype;
h.Ih = function() {
    return this.b
}
;
h.he = function() {
    this.b = !1;
    null != this.a.v && this.a.v();
    bu();
    au.D.he.call(this)
}
;
h.play = function(a) {
    au.D.play.call(this, a);
    n.setTimeout(v(this.nn, this), 0)
}
;
h.nn = function() {
    this.b = !0;
    var a = v(this.jo, this);
    n.SoundStopCB_ = a;
    null != this.a.g && this.a.g("SoundStopCB_");
    try {
        if (null != this.a.c)
            this.a.c(this.Fj());
        else {
            this.b = !1;
            bu();
            this.c();
            return
        }
        var b = v(this.Fj, this);
        n._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        bu();
        this.c();
        return
    }
    null != this.a.h ? this.a.h() : (this.b = !1,
        bu(),
        this.c())
}
;
h.Kj = function(a) {
    var b = Pt.M();
    n.setTimeout(v(b.c, b, a), 1E3)
}
;
h.Fj = function() {
    return this.url.substring(1)
}
;
h.jo = function() {
    this.b = !1;
    bu();
    this.dispatchEvent(new Xt(this.url))
}
;
var bu = function() {
    n.SoundStopCB_ = null
}
    , cu = function() {
    this.a = "";
    this.b = null;
    this.c = !1;
    this.F = null
};
Ga(cu);
cu.prototype.get = function() {
    if (null != this.a && 0 != this.a.length) {
        var a = Lf(this.a);
        if (!this.c && (du("audio/mpeg") ? (this.b = new Yt,
            a = "html5") : null != a && "OBJECT" == a.tagName && St ? (this.b = new au(a),
            a = "flash") : (this.b = null,
            a = "none"),
            this.c = !0,
        !this.g && this.F)) {
            this.g = !0;
            var b = du("audio/mpeg") ? 1 : 0
                , c = du("audio/ogg") ? 1 : 0
                , d = du("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = F("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.F.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
}
;
var du = function(a) {
    try {
        var b = F("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var eu = function(a, b, c) {
    K.call(this);
    this.K = b;
    this.m = c ? c : 0;
    this.F = L.M();
    this.C = cu.M();
    this.C.a = a;
    this.C.F = b;
    this.b = this.C.get();
    this.G = this.c = null;
    this.a = this.v = 0;
    this.g = {};
    this.h = 0;
    this.w = !1;
    this.O = null
};
w(eu, K);
eu.prototype.set = function(a, b, c, d, e) {
    this.c = a;
    this.v = b;
    this.G = c;
    null != d && (this.O = d);
    null != e && (this.g = Vb(e));
    this.g.total = a.length;
    this.g.ttslocation = this.m;
    fu(this)
}
;
eu.prototype.start = function() {
    this.b.Ih() && this.b.he();
    H(this.b, "sound_play_start", this.V, !1, this);
    H(this.b, "sound_finished", this.R, !1, this);
    H(this.b, "sound_interrupted", this.L, !1, this);
    H(this.b, "sound_error", this.N, !1, this);
    this.h = (new Date).getTime();
    gu(this, "ttsstart", this.g);
    var a = this.F
        , b = this.m
        , c = this.v
        , d = this.c.length
        , e = this.O;
    null != e ? Am(a, 31, b, c, d, void 0, void 0, e) : Am(a, 31, b, c, d);
    this.b.play(this.c[this.a]);
    hu(this)
}
;
eu.prototype.stop = function() {
    if (this.c && this.b.Ih()) {
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        gu(this, "ttsstop", a);
        Am(this.F, 32, this.m, this.v, this.c.length, this.G[this.a], this.a);
        fu(this);
        this.b.he();
        iu(this)
    }
}
;
var fu = function(a) {
    a.a = 0;
    a.w = !1;
    ph(a.b, "sound_play_start", a.V, !1, a);
    ph(a.b, "sound_finished", a.R, !1, a);
    ph(a.b, "sound_interrupted", a.L, !1, a);
    ph(a.b, "sound_error", a.N, !1, a)
}
    , gu = function(a, b, c) {
    a.K && a.K.log(b, c)
};
eu.prototype.V = function() {
    if (!this.w) {
        this.dispatchEvent(new ju(this.c));
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        gu(this, "ttsplaystart", a);
        Am(this.F, 33, this.m, this.v, this.c.length, this.G[this.a], this.a);
        this.w = !0
    }
}
;
eu.prototype.R = function() {
    this.a += 1;
    if (this.a < this.c.length)
        this.b.play(this.c[this.a]),
            hu(this);
    else {
        iu(this);
        fu(this);
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        gu(this, "ttsfinish", a);
        Am(this.F, 34, this.m, this.v, this.c.length)
    }
}
;
eu.prototype.L = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    gu(this, "ttsinterrupted", a);
    iu(this);
    fu(this)
}
;
eu.prototype.N = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    gu(this, "ttserror", a);
    nm(this.F, 155);
    iu(this);
    fu(this)
}
;
var iu = function(a) {
    a.dispatchEvent(new ku(a.c))
}
    , hu = function(a) {
    var b = a.c[a.a + 1];
    null != b && a.b.Kj(b)
}
    , ju = function() {
    Mg.call(this, "play_start_playlist")
};
w(ju, Mg);
var ku = function() {
    Mg.call(this, "stop_playlist")
};
w(ku, Mg);
var lu = function(a) {
    this.F = a
};
lu.prototype.g = function(a, b, c) {
    mu(a, b, c, v(this.b, this), v(this.c, this))
}
;
var mu = function(a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = yc(b + f[d]);
        g.length <= c ? b += f[d] : (xc(b) || (a.push(yc(b)),
            b = ""),
            g = yc(f[d]),
            g.length <= c ? b = f[d] : e(a, g, c))
    }
    xc(b) || a.push(yc(b))
};
lu.prototype.c = function(a, b, c) {
    for (var d = 0; d < b.length; d += c)
        a.push(b.substr(d, c))
}
;
var nu = / /g
    , ou = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
lu.prototype.b = function(a, b) {
    pu(a, b, nu)
}
;
lu.prototype.a = function(a, b) {
    pu(a, b, ou);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.F && this.F.log("tbphrase", c)
    }
}
;
var pu = function(a, b, c) {
    for (var d = 0; c.test(b); ) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var qu = [0, 200]
    , ru = {
    af: 1,
    ar: 1,
    bn: 1,
    bs: 1,
    ca: 1,
    cs: 1,
    cy: 1,
    da: 1,
    de: 1,
    el: 1,
    en: 1,
    eo: 1,
    es: 1,
    et: 1,
    fi: 1,
    fr: 1,
    hi: 1,
    hr: 1,
    hu: 1,
    hy: 1,
    id: 1,
    is: 1,
    it: 1,
    ja: 1,
    jw: 1,
    km: 1,
    ko: 1,
    la: 1,
    lv: 1,
    mk: 1,
    ml: 1,
    mr: 1,
    my: 1,
    ne: 1,
    nl: 1,
    no: 1,
    pl: 1,
    pt: 1,
    ro: 1,
    ru: 1,
    si: 1,
    sk: 1,
    sq: 1,
    sr: 1,
    su: 1,
    sv: 1,
    sw: 1,
    ta: 1,
    te: 1,
    th: 1,
    tl: 1,
    tr: 1,
    vi: 1,
    uk: 1,
    zh: 1,
    "zh-cn": 1,
    "zh-tw": 1
};
var su = function(a, b) {
    this.a = b;
    for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
        var f = a[e] | 0;
        d && f == b || (c[e] = f,
            d = !1)
    }
    this.b = c
}
    , tu = {}
    , uu = function(a) {
    return -128 <= a && 128 > a ? ve(tu, a, function(b) {
        return new su([b | 0],0 > b ? -1 : 0)
    }) : new su([a | 0],0 > a ? -1 : 0)
}
    , xu = function(a) {
    if (isNaN(a) || !isFinite(a))
        return vu;
    if (0 > a)
        return wu(xu(-a));
    for (var b = [], c = 1, d = 0; a >= c; d++)
        b[d] = a / c | 0,
            c *= 4294967296;
    return new su(b,0)
}
    , yu = function(a, b) {
    if (0 == a.length)
        throw Error("number format error: empty string");
    b = b || 10;
    if (2 > b || 36 < b)
        throw Error("radix out of range: " + b);
    if ("-" == a.charAt(0))
        return wu(yu(a.substring(1), b));
    if (0 <= a.indexOf("-"))
        throw Error('number format error: interior "-" character');
    for (var c = xu(Math.pow(b, 8)), d = vu, e = 0; e < a.length; e += 8) {
        var f = Math.min(8, a.length - e)
            , g = parseInt(a.substring(e, e + f), b);
        8 > f ? (f = xu(Math.pow(b, f)),
            d = zu(d, f).add(xu(g))) : (d = zu(d, c),
            d = d.add(xu(g)))
    }
    return d
}
    , vu = uu(0)
    , Au = uu(1)
    , Bu = uu(16777216)
    , Cu = function(a) {
    if (-1 == a.a)
        return -Cu(wu(a));
    for (var b = 0, c = 1, d = 0; d < a.b.length; d++)
        b += Du(a, d) * c,
            c *= 4294967296;
    return b
};
su.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a)
        throw Error("radix out of range: " + a);
    if (Eu(this))
        return "0";
    if (-1 == this.a)
        return "-" + wu(this).toString(a);
    for (var b = xu(Math.pow(a, 6)), c = this, d = ""; ; ) {
        var e = Fu(c, b).a;
        c = Gu(c, zu(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (Eu(c))
            return f + d;
        for (; 6 > f.length; )
            f = "0" + f;
        d = "" + f + d
    }
}
;
var Hu = function(a, b) {
    return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
}
    , Du = function(a, b) {
    a = Hu(a, b);
    return 0 <= a ? a : 4294967296 + a
}
    , Eu = function(a) {
    if (0 != a.a)
        return !1;
    for (var b = 0; b < a.b.length; b++)
        if (0 != a.b[b])
            return !1;
    return !0
}
    , Iu = function(a, b) {
    a = Gu(a, b);
    return -1 == a.a ? -1 : Eu(a) ? 0 : 1
}
    , wu = function(a) {
    for (var b = a.b.length, c = [], d = 0; d < b; d++)
        c[d] = ~a.b[d];
    return (new su(c,~a.a)).add(Au)
};
su.prototype.abs = function() {
    return -1 == this.a ? wu(this) : this
}
;
su.prototype.add = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (Hu(this, e) & 65535) + (Hu(a, e) & 65535)
            , g = (f >>> 16) + (Hu(this, e) >>> 16) + (Hu(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new su(c,c[c.length - 1] & -2147483648 ? -1 : 0)
}
;
var Gu = function(a, b) {
    return a.add(wu(b))
}
    , zu = function(a, b) {
    if (Eu(a) || Eu(b))
        return vu;
    if (-1 == a.a)
        return -1 == b.a ? zu(wu(a), wu(b)) : wu(zu(wu(a), b));
    if (-1 == b.a)
        return wu(zu(a, wu(b)));
    if (0 > Iu(a, Bu) && 0 > Iu(b, Bu))
        return xu(Cu(a) * Cu(b));
    for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++)
        d[e] = 0;
    for (e = 0; e < a.b.length; e++)
        for (var f = 0; f < b.b.length; f++) {
            var g = Hu(a, e) >>> 16
                , k = Hu(a, e) & 65535
                , l = Hu(b, f) >>> 16
                , m = Hu(b, f) & 65535;
            d[2 * e + 2 * f] += k * m;
            Ju(d, 2 * e + 2 * f);
            d[2 * e + 2 * f + 1] += g * m;
            Ju(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 1] += k * l;
            Ju(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 2] += g * l;
            Ju(d, 2 * e + 2 * f + 2)
        }
    for (e = 0; e < c; e++)
        d[e] = d[2 * e + 1] << 16 | d[2 * e];
    for (e = c; e < 2 * c; e++)
        d[e] = 0;
    return new su(d,0)
}
    , Ju = function(a, b) {
    for (; (a[b] & 65535) != a[b]; )
        a[b + 1] += a[b] >>> 16,
            a[b] &= 65535,
            b++
}
    , Ku = function(a, b) {
    this.a = a;
    this.b = b
}
    , Fu = function(a, b) {
    if (Eu(b))
        throw Error("division by zero");
    if (Eu(a))
        return new Ku(vu,vu);
    if (-1 == a.a)
        return b = Fu(wu(a), b),
            new Ku(wu(b.a),wu(b.b));
    if (-1 == b.a)
        return b = Fu(a, wu(b)),
            new Ku(wu(b.a),b.b);
    if (30 < a.b.length) {
        if (-1 == a.a || -1 == b.a)
            throw Error("slowDivide_ only works with positive integers.");
        for (var c = Au, d = b; 0 >= Iu(d, a); )
            c = Lu(c, 1),
                d = Lu(d, 1);
        var e = Mu(c, 1)
            , f = Mu(d, 1);
        d = Mu(d, 2);
        for (c = Mu(c, 2); !Eu(d); ) {
            var g = f.add(d);
            0 >= Iu(g, a) && (e = e.add(c),
                f = g);
            d = Mu(d, 1);
            c = Mu(c, 1)
        }
        b = Gu(a, zu(e, b));
        return new Ku(e,b)
    }
    for (e = vu; 0 <= Iu(a, b); ) {
        c = Math.max(1, Math.floor(Cu(a) / Cu(b)));
        d = Math.ceil(Math.log(c) / Math.LN2);
        d = 48 >= d ? 1 : Math.pow(2, d - 48);
        f = xu(c);
        for (g = zu(f, b); -1 == g.a || 0 < Iu(g, a); )
            c -= d,
                f = xu(c),
                g = zu(f, b);
        Eu(f) && (f = Au);
        e = e.add(f);
        a = Gu(a, g)
    }
    return new Ku(e,a)
};
su.prototype.and = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Hu(this, d) & Hu(a, d);
    return new su(c,this.a & a.a)
}
;
su.prototype.or = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Hu(this, d) | Hu(a, d);
    return new su(c,this.a | a.a)
}
;
su.prototype.xor = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Hu(this, d) ^ Hu(a, d);
    return new su(c,this.a ^ a.a)
}
;
var Lu = function(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++)
        e[f] = 0 < b ? Hu(a, f - c) << b | Hu(a, f - c - 1) >>> 32 - b : Hu(a, f - c);
    return new su(e,a.a)
}
    , Mu = function(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.b.length - c, e = [], f = 0; f < d; f++)
        e[f] = 0 < b ? Hu(a, f + c) >>> b | Hu(a, f + c + 1) << 32 - b : Hu(a, f + c);
    return new su(e,a.a)
};
var Nu = function(a) {
    this.a = a
}
    , Qu = function(a) {
    this.b = null;
    var b = vu;
    if (a instanceof su) {
        if (0 != a.a || 0 > Iu(a, vu) || 0 < Iu(a, Ou))
            throw Error("The address does not look like an IPv4.");
        b = Vb(a)
    } else {
        if (!Pu.test(a))
            throw Error(a + " does not look like an IPv4 address.");
        var c = a.split(".");
        if (4 != c.length)
            throw Error(a + " does not look like an IPv4 address.");
        for (var d = 0; d < c.length; d++) {
            var e = ne(c[d]);
            if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && vc(c[d], "0"))
                throw Error("In " + a + ", octet " + d + " is not valid");
            e = xu(e);
            b = Lu(b, 8).or(e)
        }
    }
    this.a = b
};
w(Qu, Nu);
var Pu = /^[0-9.]*$/
    , Ou = Gu(Lu(Au, 32), Au);
Qu.prototype.toString = function() {
    if (this.b)
        return this.b;
    for (var a = Du(this.a, 0), b = [], c = 3; 0 <= c; c--)
        b[c] = String(a & 255),
            a >>>= 8;
    return this.b = b.join(".")
}
;
var Uu = function(a) {
    this.b = null;
    var b = vu;
    if (a instanceof su) {
        if (0 != a.a || 0 > Iu(a, vu) || 0 < Iu(a, Ru))
            throw Error("The address does not look like a valid IPv6.");
        b = Vb(a)
    } else {
        if (!Su.test(a))
            throw Error(a + " is not a valid IPv6 address.");
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = Du(Vb((new Qu(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            ub(c, c.length - 1);
            zb(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length)
            throw Error(a + " is not a valid IPv6 address.");
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e)
                c = [];
            else {
                for (var f = [], g = 0; g < e; g++)
                    f[g] = "0";
                c = xb(c, f, d)
            }
        }
        if (8 != c.length)
            throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = yu(c[d], 16);
            if (0 > Iu(e, vu) || 0 < Iu(e, Tu))
                throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = Lu(b, 16).or(e)
        }
    }
    this.a = b
};
w(Uu, Nu);
var Su = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/
    , Tu = uu(65535)
    , Ru = Gu(Lu(Au, 128), Au);
Uu.prototype.toString = function() {
    if (this.b)
        return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = Du(this.a, b)
            , d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++)
        "0" == a[f] ? (e++,
        -1 == c && (c = f),
        e > d && (d = e,
            b = c)) : (c = -1,
            e = 0);
    0 < d && (b + d == a.length && a.push(""),
        a.splice(b, d, ""),
    0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
}
;
var Vu = function() {}, Wu, Xu = {
    http: 1,
    https: 1,
    ftp: 1
}, Yu = function(a, b) {
    try {
        var c = ln(a)
    } catch (l) {
        return !1
    }
    if (!(a = c.c && !Xu[c.c.toLowerCase()] || !c.b)) {
        c = c.b;
        a: {
            a = c.split(".");
            for (var d = 0; d < a.length; d++)
                if (!a[d]) {
                    var e = !1;
                    break a
                }
            if (1 < a.length) {
                b = a[a.length - 1].toLowerCase();
                if (!Wu) {
                    try {
                        e = yf
                    } catch (l) {
                        throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                    }
                    a = {};
                    var f = e.ascii_tlds;
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        a[g.toLowerCase()] = 1
                    }
                    e = e.unicode_tlds;
                    for (d = 0; d < e.length; d++)
                        g = e[d],
                            a[g.toLowerCase()] = 1;
                    Wu = a
                }
                e = !!Wu[b]
            } else
                e = !b
        }
        if (!e) {
            try {
                var k = vc(c, "[") && wc(c, "]") ? new Uu(c.substring(1, c.length - 1)) : new Qu(c)
            } catch (l) {
                k = null
            }
            e = null != k
        }
        a = !e
    }
    return a ? !1 : !0
}, Zu = function(a) {
    a = yc(a);
    if (0 <= a.search(/[\s\xa0@]/))
        return !1;
    if (Yu(a, !1))
        return !0;
    var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function(c, d) {
        return String.fromCharCode(Number("0x" + d))
    });
    return Yu(b, !1) ? !0 : Yu("http://" + a, !0) || Yu("http://" + b, !0)
};
Vu.prototype.a = function(a, b) {
    if ("string" != typeof a)
        throw Error("Pattern is not a string.");
    var c = arguments;
    return a.replace(/%(\d+)\$\w/g, function(d, e) {
        e = parseInt(e, 10);
        return 0 < e && e < c.length ? c[e] : d
    })
}
;
var $u = function() {
    var a = (new Tm(n.location.href)).a
        , b = a.get("e");
    a = a.get("expid");
    var c = "";
    b && (c += "e=" + b);
    "ForceExperiment" == b && a && (c += "&expid=" + a);
    return c
}
    , av = function(a) {
    for (var b = "", c = 0; c < I(a, 5); c++) {
        var d = qp(a, c);
        Fh(d, 4) && 0 < J(d, 4).length ? b = J(d, 4) : (new Eo(d.Ab())).Va[4] = b
    }
}
    , bv = function(a) {
    var b = DATA.DisplayLanguage
        , c = DATA.LoginUrl
        , d = ln(n.location.href)
        , e = d.toString();
    a && (d.h = a,
    2E3 >= ce(d.toString()).length && (e = d.toString()));
    d = c + "/Login?hl=" + b + "&continue=" + ce(e);
    a = {
        target: "_top"
    };
    b = window;
    c = d instanceof Nc ? d : Uc("undefined" != typeof d.href ? d.href : String(d));
    d = a.target || d.target;
    e = [];
    for (var f in a)
        switch (f) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(f + "=" + a[f]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (a[f] ? 1 : 0))
        }
    f = e.join(",");
    re() && b.navigator && b.navigator.standalone && d && "_self" != d ? (f = b.document.createElement("A"),
        Vd(f, c),
        f.setAttribute("target", d),
    a.noreferrer && f.setAttribute("rel", "noreferrer"),
        a = document.createEvent("MouseEvent"),
        a.initMouseEvent("click", !0, !0, b, 1),
        f.dispatchEvent(a)) : a.noreferrer ? (f = b.open("", d, f),
        a = Pc(c),
    f && (ye && Jc(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"),
        f.opener = null,
        a = Pd(ec("b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + ee(a) + '">'),
        f.document.write(Bd(a)),
        f.document.close())) : (f = b.open(Pc(c), d, f)) && a.noopener && (f.opener = null)
}
    , cv = function(a) {
    a = kb(Array.from(Jl(a, 0, $l)), function(b) {
        return b.Li()
    });
    a = lb(a, function(b) {
        return b.sf()
    });
    return mb(a, function(b, c) {
        return b && 1 == c
    }, 0 < a.length)
};
var dv = function(a, b, c, d, e, f, g) {
    K.call(this);
    this.a = a;
    this.aa = Hm.M();
    this.F = L.M();
    this.ba = new lu(this.aa);
    this.Na = b;
    this.N = this.W = this.h = this.c = "";
    this.V = 0;
    this.m = !1;
    this.b = new eu("tts",Hm.M(),c);
    this.X = null != this.b.b && (Fe && Jc(qd, "UCBrowser") ? !1 : !0);
    this.G = Xe || We;
    H(this.b, "stop_playlist", this.O, !1, this);
    H(this.a, "action", this.Jj, !1, this);
    null != this.a.j() && H(this.a.j(), "click", this.vo, !1, this);
    this.R = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.C = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.K = (a = /gl=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.g = 0;
    this.ra = !!d;
    this.xa = !!e;
    this.L = f || null;
    this.na = g || null;
    this.v = "";
    this.Ca = new Vu;
    this.w = null
};
w(dv, K);
dv.prototype.T = function() {
    dv.D.T.call(this);
    ph(this.b, "stop_playlist", this.O, !1, this);
    ph(this.a, "action", this.Jj, !1, this)
}
;
dv.prototype.O = function() {
    this.a.cd(!1)
}
;
var ev = function(a, b, c, d, e, f) {
    b = me("/translate_tts?ie=UTF-8&q=", ce(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, zo(b), a.Na, f);
    a.K && (b += "&" + a.K);
    return b
};
h = dv.prototype;
h.update = function(a, b, c, d, e) {
    var f = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.v = "";
    if (null != c)
        for (var g = 0; g < I(c, 5); g++) {
            var k = qp(c, g)
                , l = Jh(Ho(k, 0), 0)
                , m = Jh(Ho(k, 0), 1);
            l = J(k, 4).substring(l, m);
            k = J(Go(k, 0), 0);
            if (l == k && f.test(l)) {
                this.v = J(c, 2);
                break
            }
        }
    this.g = 0;
    this.X ? xc(a) ? (fv(this, !1),
        this.a.oa(!1)) : (a != this.c || b != this.h || e != this.w ? (this.c = a,
        this.h = b,
        this.w = e || null,
        c = !1) : c = !0,
    c || (this.b.stop(),
        this.m = !this.X || !b || xc(a) || this.G && a.length > qu[ru[b.toLowerCase()]] ? !1 : b.toLowerCase()in ru),
        fv(this, this.xa || this.m),
        this.a.oa(this.m)) : (fv(this, !1),
        this.a.oa(!1));
    null != d && (this.a.isEnabled() && null != this.L ? this.a.j().setAttribute("data-tooltip", this.L) : !this.a.isEnabled() && null != this.na && this.a.j().setAttribute("data-tooltip", this.Ca.a(this.na, d)))
}
;
h.play = function() {
    if (this.c != this.W || this.h != this.N || this.g != this.V) {
        if (this.G)
            var a = [this.c];
        else {
            a = qu[ru[this.h.toLowerCase()]];
            var b = []
                , c = this.ba
                , d = this.c.replace(/[ \u3000\n\r\t\s]+/g, " ");
            mu(b, d, a, v(c.a, c), v(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.R && (d += "&" + this.R);
        null != this.C ? d += "&ttsspeed=" + this.C : 0 != this.g && (d += "&ttsspeed=" + this.g);
        this.v && (d += "&hint=" + this.v);
        for (var e = 0; e < a.length; e++)
            b.push(ev(this, a[e], this.h, a.length, e, d)),
                c.push(a[e].length);
        this.b.set(b, this.c.length, c, this.w, {
            textlen: this.c.length,
            tl: this.h
        });
        this.W = this.c;
        this.N = this.h;
        this.V = this.g
    }
    this.b.start();
    this.ra && (this.g = 0 === this.g ? .24 : 0)
}
;
h.stop = function() {
    this.b.stop()
}
;
h.Jj = function() {
    this.a.Ea(16) ? this.play() : this.stop()
}
;
h.vo = function(a) {
    this.a.isEnabled() || (a.stopPropagation(),
        this.dispatchEvent("userInteractionWhileDisabled"),
        a = this.F,
        N(a, O(a, 306)),
        Mm(this.aa, "webapp", "dia", "click", {
            dias: "vo"
        }))
}
;
var fv = function(a, b) {
    a.a.setVisible(b);
    b || a.b.stop()
};
var gv = function(a) {
    if (0 == a)
        return 0;
    if (1 == a)
        return 1;
    var b = .4 * a
        , c = .4 + -.2 * a;
    b += a * (c - b);
    return b + a * (c + a * (.2 + .8 * a - c) - b)
}
    , hv = function(a) {
    if (0 == a)
        return 0;
    if (1 == a)
        return 1;
    var b = 0 * a
        , c = 1 * a;
    b += a * (c - b);
    return b + a * (c + a * (1 + 0 * a - c) - b)
}
    , iv = function(a) {
    var b = a - 0;
    if (0 >= b)
        return 0;
    if (1 <= b)
        return 1;
    for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
        e = gv(b);
        var g = (gv(b + 1E-6) - e) / 1E-6;
        if (1E-6 > Math.abs(e - a))
            return b;
        if (1E-6 > Math.abs(g))
            break;
        else
            e < a ? c = b : d = b,
                b -= (e - a) / g
    }
    for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++)
        e < a ? (c = b,
            b = (b + d) / 2) : (d = b,
            b = (b + c) / 2),
            e = gv(b);
    return b
};
var jv = function(a) {
    var b = [];
    if (a.sentences)
        for (var c = 0, d; d = a.sentences[c]; c++)
            d.trans && b.push(d.trans);
    return b.join("")
}
    , kv = function() {
    for (var a = Array(51), b = 0; 51 > b; b++)
        a[b] = hv(iv(b / 50));
    return function(c) {
        if (0 >= c)
            return 0;
        if (1 <= c)
            return 1;
        var d = 50 * c;
        c = Math.floor(d);
        d -= c;
        return a[c] * (1 - d) + a[c + 1] * d
    }
};
var lv = function(a, b) {
    Es.call(this, a, "ttl");
    this.b = this.c = null;
    this.g = new Gt(MSG_LISTEN,void 0,new Lt("trans-listen-button"));
    this.h = new dv(this.g,"&client=" + (b ? b : "webapp") + "&prev=lc",7)
};
w(lv, Es);
lv.prototype.La = function() {
    lv.D.La.call(this);
    this.Da($f("DIV"))
}
;
lv.prototype.Da = function(a) {
    lv.D.Da.call(this, a);
    this.j().appendChild(Vp(jo));
    this.c = D("gt-ct-text", this.j());
    a = D("gt-ct-tts", this.j());
    this.b = D("gt-ct-translit", this.j());
    this.g.ea(a)
}
;
lv.prototype.update = function(a, b, c, d) {
    lv.D.update.call(this, a, b, c, d);
    G(this.c, a);
    this.h.update(a, b);
    if (this.data) {
        a = [];
        if (0 < this.data.ic())
            for (b = 0; b < this.data.ic(); b++)
                c = this.data.cb(b),
                Fh(c, 3) && "" != J(c, 3) && a.push(J(c, 3));
        0 < a.length ? (G(this.b, a.join(" ")),
            W(this.b, !0)) : W(this.b, !1)
    }
    this.setVisible(!0);
    return !0
}
;
var mv = function(a, b, c, d, e) {
    Es.call(this, a, "cm");
    this.aa = b;
    this.C = new lv(a,e ? e : "webapp");
    this.w = null;
    this.ra = c;
    this.b = new X;
    this.kb(this.b);
    this.c = new X;
    this.kb(this.c);
    this.g = this.m = this.K = this.N = this.R = null;
    this.h = [];
    this.X = !!d;
    this.ba = ul.M();
    this.F = L.M()
};
w(mv, Es);
h = mv.prototype;
h.La = function() {
    mv.D.La.call(this);
    this.Da($f("DIV"))
}
;
h.Da = function(a) {
    mv.D.Da.call(this, a);
    this.j().appendChild(Vp(ho));
    this.C.ea(D("gt-cc-tc", this.j()));
    this.w = D("gt-cc-t", this.j());
    W(this.w, !1);
    this.b.ea(D("gt-cc-l-i", this.j()));
    this.c.ea(D("gt-cc-r-i", this.j()));
    a = D("gt-cc-bc", this.j());
    this.R = new Rr("",new Lt("prev-button"));
    this.R.render(a);
    this.N = new Rr("",new Lt("next-button"));
    this.N.render(a);
    this.K = new Rr("",new Lt("big-clear-button"));
    this.K.render(a);
    this.m = D("gt-cc-exp", this.j());
    this.g = new Nt(this.R,this.N,this.K,this)
}
;
h.Z = function() {
    mv.D.Z.call(this);
    Y(this).listen(this, "a", this.Kl);
    Y(this).listen(this, "b", this.Tl);
    Y(this).listen(this.m, "click", this.Cl)
}
;
h.Cl = function() {
    W(this.m, !1);
    y(this.h, function(c) {
        c.setVisible(!0)
    });
    var a = {}
        , b = this.F;
    Zq(this.b, function(c) {
        c.isVisible() && (jm(b, c.Od(), c.gb(), c.rc),
            a[c.Lb()] = c.rc ? "e" : "ne")
    });
    im(this.F, 15, $q(this.b));
    this.log("expand", a)
}
;
h.Kl = function(a) {
    a = Cg(a.target);
    nv(this, this.Aa, this.Ja, a, !1, "clks")
}
;
h.Tl = function(a) {
    a = Cg(a.target);
    nv(this, this.Ja, this.Aa, a, !1, "clkt")
}
;
h.Il = function(a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.g.a[0];
        a.v ? nv(this, c.Ja, c.Aa, b, !0, "sel") : nv(this, c.Aa, c.Ja, b, !0, "sel")
    }
}
;
var nv = function(a, b, c, d, e, f) {
    if (d != a.text || b != a.Aa)
        "zh-TW" == b && (b = "zh-CN"),
            yl(a.ba, f),
            e ? (G(a.C.c, "..."),
                xp(a.aa, b, c, a.Ra, d, v(a.V, a, d, b, c), !1, "UTF-8", new an("source=" + f))) : (a.dispatchEvent("translationRefreshed"),
                xt(a.ra, b, c, d, f))
};
mv.prototype.setVisible = function(a) {
    var b = this.j();
    b = !(!b || !D("gender-promo-visible", b));
    mv.D.setVisible.call(this, a || b)
}
;
mv.prototype.update = function(a, b, c, d) {
    mv.D.update.call(this, a, b, c, d);
    var e = 1 != this.g.a.length;
    W(this.w, e);
    V(this.j(), "show-as-one-card", this.X && e);
    var f = 0
        , g = 0
        , k = !0;
    this.h = [];
    Zq(this.b, function(r) {
        var u = r.update(a, b, c, d);
        f |= u;
        u && (k ? k = !1 : r.Zh || (r.setVisible(!1),
            this.h.push(r)))
    }, this);
    ov(this, this.b);
    e = 0 < this.h.length;
    W(this.m, e);
    Zq(this.c, function(r) {
        g |= r.update(a, b, c, d)
    }, this);
    var l = f || g;
    this.setVisible(l);
    this.C.update(a, b, c, d);
    if (l) {
        var m = {}
            , q = this.F;
        Zq(this.b, function(r) {
            r.isVisible() && (jm(q, r.Od(), r.gb(), r.rc),
                m[r.Lb()] = r.rc ? "e" : "ne")
        });
        Zq(this.c, function(r) {
            r.isVisible() && (jm(q, r.Od(), r.gb(), r.rc),
                m[r.Lb()] = r.rc ? "e" : "ne")
        });
        m[this.Lb()] = e ? "e" : "ne";
        this.log("show", m);
        jm(this.F, 15, $q(this.b), !0)
    }
    return l
}
;
mv.prototype.V = function(a, b, c, d) {
    this.g.push(a, b, c, d);
    this.isVisible() || (a = this.g,
    1 < a.a.length && (a.a.splice(a.a.length - 1),
        a.b = a.a.length - 1,
        Ot(a)))
}
;
var ov = function(a, b) {
    var c = [];
    Zq(b, function(d) {
        if (d.isVisible() || sb(this.h, d)) {
            var e = d.hf || d.text;
            sb(c, e) ? d.Oc && G(d.Oc, d.Cj) : c.push(e)
        }
    }, a)
};
var pv = {
    kg: {
        1E3: {
            other: "0K"
        },
        1E4: {
            other: "00K"
        },
        1E5: {
            other: "000K"
        },
        1E6: {
            other: "0M"
        },
        1E7: {
            other: "00M"
        },
        1E8: {
            other: "000M"
        },
        1E9: {
            other: "0B"
        },
        1E10: {
            other: "00B"
        },
        1E11: {
            other: "000B"
        },
        1E12: {
            other: "0T"
        },
        1E13: {
            other: "00T"
        },
        1E14: {
            other: "000T"
        }
    },
    Lh: {
        1E3: {
            other: "0 thousand"
        },
        1E4: {
            other: "00 thousand"
        },
        1E5: {
            other: "000 thousand"
        },
        1E6: {
            other: "0 million"
        },
        1E7: {
            other: "00 million"
        },
        1E8: {
            other: "000 million"
        },
        1E9: {
            other: "0 billion"
        },
        1E10: {
            other: "00 billion"
        },
        1E11: {
            other: "000 billion"
        },
        1E12: {
            other: "0 trillion"
        },
        1E13: {
            other: "00 trillion"
        },
        1E14: {
            other: "000 trillion"
        }
    }
};
pv = {
    kg: {
        1E3: {
            other: "0"
        },
        1E4: {
            other: "0\u4e07"
        },
        1E5: {
            other: "00\u4e07"
        },
        1E6: {
            other: "000\u4e07"
        },
        1E7: {
            other: "0000\u4e07"
        },
        1E8: {
            other: "0\u4ebf"
        },
        1E9: {
            other: "00\u4ebf"
        },
        1E10: {
            other: "000\u4ebf"
        },
        1E11: {
            other: "0000\u4ebf"
        },
        1E12: {
            other: "0\u5146"
        },
        1E13: {
            other: "00\u5146"
        },
        1E14: {
            other: "000\u5146"
        }
    },
    Lh: {
        1E3: {
            other: "0"
        },
        1E4: {
            other: "0\u4e07"
        },
        1E5: {
            other: "00\u4e07"
        },
        1E6: {
            other: "000\u4e07"
        },
        1E7: {
            other: "0000\u4e07"
        },
        1E8: {
            other: "0\u4ebf"
        },
        1E9: {
            other: "00\u4ebf"
        },
        1E10: {
            other: "000\u4ebf"
        },
        1E11: {
            other: "0000\u4ebf"
        },
        1E12: {
            other: "0\u5146"
        },
        1E13: {
            other: "00\u5146"
        },
        1E14: {
            other: "000\u5146"
        }
    }
};
var qv = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34, "Ft", "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd", "RUB"],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var rv = {
    ng: ".",
    We: ",",
    qg: "%",
    bf: "0",
    Uh: "+",
    pg: "-",
    og: "E",
    rg: "\u2030",
    Ye: "\u221e",
    Qh: "NaN",
    lg: "#,##0.###",
    Yh: "#E0",
    Th: "#,##0%",
    Mh: "\u00a4#,##0.00",
    Ve: "USD"
};
rv = {
    ng: ".",
    We: ",",
    qg: "%",
    bf: "0",
    Uh: "+",
    pg: "-",
    og: "E",
    rg: "\u2030",
    Ye: "\u221e",
    Qh: "NaN",
    lg: "#,##0.###",
    Yh: "#E0",
    Th: "#,##0%",
    Mh: "\u00a4#,##0.00",
    Ve: "CNY"
};
var uv = function(a) {
    this.L = 40;
    this.b = 1;
    this.Fa = 0;
    this.c = 3;
    this.O = this.g = 0;
    this.R = !1;
    this.K = this.w = "";
    this.h = rv.pg;
    this.G = "";
    this.a = 1;
    this.m = !1;
    this.v = [];
    this.Pa = this.N = !1;
    this.C = 0;
    if ("number" == typeof a)
        switch (a) {
            case 1:
                sv(this, rv.lg);
                break;
            case 2:
                sv(this, rv.Yh);
                break;
            case 3:
                sv(this, rv.Th);
                break;
            case 4:
                a = rv.Mh;
                var b = ["0"]
                    , c = qv[rv.Ve];
                if (c) {
                    c = c[0] & 7;
                    if (0 < c) {
                        b.push(".");
                        for (var d = 0; d < c; d++)
                            b.push("0")
                    }
                    a = a.replace(/0.00/g, b.join(""))
                }
                sv(this, a);
                break;
            case 5:
                tv(this, 1);
                break;
            case 6:
                tv(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        }
    else
        sv(this, a)
}
    , sv = function(a, b) {
    b.replace(/ /g, "\u00a0");
    var c = [0];
    a.w = vv(a, b, c);
    for (var d = c[0], e = -1, f = 0, g = 0, k = 0, l = -1, m = b.length, q = !0; c[0] < m && q; c[0]++)
        switch (b.charAt(c[0])) {
            case "#":
                0 < g ? k++ : f++;
                0 <= l && 0 > e && l++;
                break;
            case "0":
                if (0 < k)
                    throw Error('Unexpected "0" in pattern "' + b + '"');
                g++;
                0 <= l && 0 > e && l++;
                break;
            case ",":
                0 < l && a.v.push(l);
                l = 0;
                break;
            case ".":
                if (0 <= e)
                    throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + g + k;
                break;
            case "E":
                if (a.Pa)
                    throw Error('Multiple exponential symbols in pattern "' + b + '"');
                a.Pa = !0;
                a.O = 0;
                c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++,
                    a.R = !0);
                for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1); )
                    c[0]++,
                        a.O++;
                if (1 > f + g || 1 > a.O)
                    throw Error('Malformed exponential pattern "' + b + '"');
                q = !1;
                break;
            default:
                c[0]--,
                    q = !1
        }
    0 == g && 0 < f && 0 <= e && (g = e,
    0 == g && g++,
        k = f - g,
        f = g - 1,
        g = 1);
    if (0 > e && 0 < k || 0 <= e && (e < f || e > f + g) || 0 == l)
        throw Error('Malformed pattern "' + b + '"');
    k = f + g + k;
    a.c = 0 <= e ? k - e : 0;
    0 <= e && (a.g = f + g - e,
    0 > a.g && (a.g = 0));
    a.b = (0 <= e ? e : k) - f;
    a.Pa && (a.L = f + a.b,
    0 == a.c && 0 == a.b && (a.b = 1));
    a.v.push(Math.max(0, l));
    a.N = 0 == e || e == k;
    d = c[0] - d;
    a.K = vv(a, b, c);
    c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++,
    1 != a.a && (a.m = !0),
        a.h = vv(a, b, c),
        c[0] += d,
        a.G = vv(a, b, c)) : (a.h += a.w,
        a.G += a.K)
}
    , tv = function(a, b) {
    a.C = b;
    sv(a, rv.lg);
    a.g = 0;
    a.c = 2;
    if (0 < a.g)
        throw Error("Can't combine significant digits and minimum fraction digits");
    a.Fa = 2
};
uv.prototype.parse = function(a, b) {
    b = b || [0];
    if (0 != this.C)
        throw Error("Parsing of compact numbers is unimplemented");
    a = a.replace(/ |\u202f/g, "\u00a0");
    var c = a.indexOf(this.w, b[0]) == b[0]
        , d = a.indexOf(this.h, b[0]) == b[0];
    c && d && (this.w.length > this.h.length ? d = !1 : this.w.length < this.h.length && (c = !1));
    c ? b[0] += this.w.length : d && (b[0] += this.h.length);
    if (a.indexOf(rv.Ye, b[0]) == b[0]) {
        b[0] += rv.Ye.length;
        var e = Infinity
    } else {
        e = a;
        var f = !1
            , g = !1
            , k = !1
            , l = -1
            , m = 1
            , q = rv.ng
            , r = rv.We
            , u = rv.og;
        if (0 != this.C)
            throw Error("Parsing of compact style numbers is not implemented");
        r = r.replace(/\u202f/g, "\u00a0");
        for (var C = ""; b[0] < e.length; b[0]++) {
            var Q = e.charAt(b[0])
                , M = wv(Q);
            if (0 <= M && 9 >= M)
                C += M,
                    k = !0;
            else if (Q == q.charAt(0)) {
                if (f || g)
                    break;
                C += ".";
                f = !0
            } else if (Q == r.charAt(0) && ("\u00a0" != r.charAt(0) || b[0] + 1 < e.length && 0 <= wv(e.charAt(b[0] + 1)))) {
                if (f || g)
                    break
            } else if (Q == u.charAt(0)) {
                if (g)
                    break;
                C += "E";
                g = !0;
                l = b[0]
            } else if ("+" == Q || "-" == Q) {
                if (k && l != b[0] - 1)
                    break;
                C += Q
            } else if (1 == this.a && Q == rv.qg.charAt(0)) {
                if (1 != m)
                    break;
                m = 100;
                if (k) {
                    b[0]++;
                    break
                }
            } else if (1 == this.a && Q == rv.rg.charAt(0)) {
                if (1 != m)
                    break;
                m = 1E3;
                if (k) {
                    b[0]++;
                    break
                }
            } else
                break
        }
        1 != this.a && (m = this.a);
        e = parseFloat(C) / m
    }
    if (c) {
        if (a.indexOf(this.K, b[0]) != b[0])
            return NaN;
        b[0] += this.K.length
    } else if (d) {
        if (a.indexOf(this.G, b[0]) != b[0])
            return NaN;
        b[0] += this.G.length
    }
    return d ? -e : e
}
;
var Ev = function(a, b) {
    if (isNaN(b))
        return rv.Qh;
    var c = [];
    var d = b
        , e = b;
    if (0 == a.C)
        var f = xv;
    else
        d = Math.abs(d),
            e = Math.abs(e),
            f = yv(a, 1 >= d ? 0 : zv(d)).Eg,
            e = Av(e, -f),
            Bv(a, e),
            d = Av(d, -f),
            d = Bv(a, d),
            f = yv(a, f + zv(d.Ri));
    b = Av(b, -f.Eg);
    c.push(f.prefix);
    d = 0 > b || 0 == b && 0 > 1 / b;
    c.push(d ? a.h : a.w);
    if (isFinite(b))
        if (b = b * (d ? -1 : 1) * a.a,
            a.Pa)
            if (0 == b)
                Cv(a, b, a.b, c),
                    Dv(a, 0, c);
            else {
                e = Math.log(b) / Math.log(10);
                x(!p(void 0) || !1);
                e = Math.floor(e + 2E-15);
                b = Av(b, -e);
                var g = a.b;
                1 < a.L && a.L > a.b ? (g = e % a.L,
                0 > g && (g = a.L + g),
                    b = Av(b, g),
                    e -= g,
                    g = 1) : 1 > a.b ? (e++,
                    b = Av(b, -1)) : (e -= a.b - 1,
                    b = Av(b, a.b - 1));
                Cv(a, b, g, c);
                Dv(a, e, c)
            }
        else
            Cv(a, b, a.b, c);
    else
        c.push(rv.Ye);
    c.push(d ? a.G : a.K);
    c.push(f.uj);
    return c.join("")
}
    , Bv = function(a, b) {
    var c = Av(b, a.c);
    0 < a.Fa && (c = Fv(c, a.Fa, a.c));
    c = Math.round(c);
    isFinite(c) ? (b = Math.floor(Av(c, -a.c)),
        a = Math.floor(c - Av(b, a.c))) : a = 0;
    return {
        Ri: b,
        Uk: a
    }
}
    , Cv = function(a, b, c, d) {
    if (a.g > a.c)
        throw Error("Min value must be less than max value");
    d || (d = []);
    b = Bv(a, b);
    var e = b.Ri
        , f = b.Uk
        , g = 0 < a.g || 0 < f || !1;
    b = a.g;
    g && (b = a.g);
    for (var k = "", l = e; 1E20 < l; )
        k = "0" + k,
            l = Math.round(Av(l, -1));
    k = l + k;
    var m = rv.ng;
    l = rv.bf.charCodeAt(0);
    var q = k.length
        , r = 0;
    if (0 < e || 0 < c) {
        for (e = q; e < c; e++)
            d.push(String.fromCharCode(l));
        if (2 <= a.v.length)
            for (c = 1; c < a.v.length; c++)
                r += a.v[c];
        c = q - r;
        if (0 < c) {
            e = a.v;
            r = q = 0;
            for (var u, C = rv.We, Q = k.length, M = 0; M < Q; M++)
                if (d.push(String.fromCharCode(l + 1 * Number(k.charAt(M)))),
                1 < Q - M)
                    if (u = e[r],
                    M < c) {
                        var Qa = c - M;
                        (1 === u || 0 < u && 1 === Qa % u) && d.push(C)
                    } else
                        r < e.length && (M === c ? r += 1 : u === M - c - q + 1 && (d.push(C),
                            q += u,
                            r += 1))
        } else {
            c = k;
            k = a.v;
            e = rv.We;
            u = c.length;
            C = [];
            for (q = k.length - 1; 0 <= q && 0 < u; q--) {
                r = k[q];
                for (Q = 0; Q < r && 0 <= u - Q - 1; Q++)
                    C.push(String.fromCharCode(l + 1 * Number(c.charAt(u - Q - 1))));
                u -= r;
                0 < u && C.push(e)
            }
            d.push.apply(d, C.reverse())
        }
    } else
        g || d.push(String.fromCharCode(l));
    (a.N || g) && d.push(m);
    f = String(f);
    g = f.split("e+");
    2 == g.length && (f = String(Fv(parseFloat(g[0]), a.Fa, 1)),
        f = f.replace(".", ""),
        f += ke("0", parseInt(g[1], 10) - f.length + 1));
    a.c + 1 > f.length && (f = "1" + ke("0", a.c - f.length) + f);
    for (a = f.length; "0" == f.charAt(a - 1) && a > b + 1; )
        a--;
    for (e = 1; e < a; e++)
        d.push(String.fromCharCode(l + 1 * Number(f.charAt(e))))
}
    , Dv = function(a, b, c) {
    c.push(rv.og);
    0 > b ? (b = -b,
        c.push(rv.pg)) : a.R && c.push(rv.Uh);
    b = "" + b;
    for (var d = rv.bf, e = b.length; e < a.O; e++)
        c.push(d);
    c.push(b)
}
    , wv = function(a) {
    a = a.charCodeAt(0);
    if (48 <= a && 58 > a)
        return a - 48;
    var b = rv.bf.charCodeAt(0);
    return b <= a && a < b + 10 ? a - b : -1
}
    , vv = function(a, b, c) {
    for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
        var g = b.charAt(c[0]);
        if ("'" == g)
            c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e = !e;
        else if (e)
            d += g;
        else
            switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++,
                        d += rv.Ve) : (g = rv.Ve,
                        d += g in qv ? qv[g][1] : g);
                    break;
                case "%":
                    if (!a.m && 1 != a.a)
                        throw Error("Too many percent/permill");
                    if (a.m && 100 != a.a)
                        throw Error("Inconsistent use of percent/permill characters");
                    a.a = 100;
                    a.m = !1;
                    d += rv.qg;
                    break;
                case "\u2030":
                    if (!a.m && 1 != a.a)
                        throw Error("Too many percent/permill");
                    if (a.m && 1E3 != a.a)
                        throw Error("Inconsistent use of percent/permill characters");
                    a.a = 1E3;
                    a.m = !1;
                    d += rv.rg;
                    break;
                default:
                    d += g
            }
    }
    return d
}
    , xv = {
    prefix: "",
    uj: "",
    Eg: 0
}
    , yv = function(a, b) {
    a = 1 == a.C ? pv.kg : pv.Lh;
    null == a && (a = pv.kg);
    if (3 > b)
        return xv;
    b = Math.min(14, b);
    var c = a[Av(1, b)];
    for (--b; !c && 3 <= b; )
        c = a[Av(1, b)],
            b--;
    if (!c)
        return xv;
    a = c.other;
    return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
        prefix: a[1],
        uj: a[3],
        Eg: b + 1 - (a[2].length - 1)
    } : xv : xv
}
    , zv = function(a) {
    if (!isFinite(a))
        return 0 < a ? a : 0;
    for (var b = 0; 1 <= (a /= 10); )
        b++;
    return b
}
    , Av = function(a, b) {
    x(0 == b % 1, 'Cannot shift by fractional digits "%s".', b);
    if (!a || !isFinite(a) || 0 == b)
        return a;
    a = String(a).split("e");
    return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
}
    , Gv = function(a, b) {
    x(0 == b % 1, 'Cannot round to fractional digits "%s".', b);
    return a && isFinite(a) ? Av(Math.round(Av(a, b)), -b) : a
}
    , Fv = function(a, b, c) {
    if (!a)
        return a;
    b = b - zv(a) - 1;
    return b < -c ? Gv(a, -c) : Gv(a, b)
};
var Hv = function(a, b, c) {
    X.call(this);
    this.h = a;
    this.b = b;
    this.c = c;
    this.g = new uv("######")
};
w(Hv, X);
Hv.prototype.Xc = function(a) {
    return a && "DIV" == a.tagName && D("cc-ctr", a) && D("cc-msg", a) ? !0 : !1
}
;
Hv.prototype.init = function() {
    Iv(this, !1);
    Jv(this, 0)
}
;
var Jv = function(a, b) {
    b = Ev(a.g, b);
    var c = Ev(a.g, a.h);
    G(D("cc-ctr", a.j()), b + "/" + c)
}
    , Iv = function(a, b) {
    if (b) {
        var c = D("cc-ctr", a.j())
            , d = a.c;
        U(c, a.b);
        T(c, d)
    } else
        c = D("cc-ctr", a.j()),
            d = a.b,
            U(c, a.c),
            T(c, d);
    W(D("cc-msg", a.j()), b)
};
var Kv = function(a, b) {
    Jg.call(this);
    this.c = this.b = 0;
    this.xc = a;
    this.g = b;
    this.a = new Tr(v(this.Zk, this),0,this)
};
w(Kv, Jg);
h = Kv.prototype;
h.T = function() {
    this.a.Ka();
    delete this.xc;
    delete this.g;
    Kv.D.T.call(this)
}
;
h.start = function(a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : Ua() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
}
;
h.stop = function() {
    this.a.stop()
}
;
h.ob = function() {
    return this.a.ob()
}
;
h.Zk = function() {
    if (!this.xc.call(this.g))
        if (0 > this.c)
            this.a.start(this.b);
        else {
            var a = this.c - Ua();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
}
;
var Mv = function(a) {
    K.call(this);
    this.o = a;
    this.a = this.o.value;
    this.b = new Kq(this);
    this.g = Ua();
    Lv ? this.b.listen(a, "paste", this.Md) : this.b.listen(a, ["keydown", "blur", "focus", "mouseover", "input"], this.Bl);
    this.c = new Kv(v(this.ii, this))
};
w(Mv, K);
var Lv = Ae || A || xe || ze && Re("1.9");
h = Mv.prototype;
h.fc = "init";
h.F = Xi("goog.events.PasteHandler");
h.T = function() {
    Mv.D.T.call(this);
    this.b.Ka();
    this.b = null;
    this.c.Ka();
    this.c = null
}
;
h.getState = function() {
    return this.fc
}
;
h.ii = function() {
    if (this.a == this.o.value)
        return !1;
    $i(this.F, "detected textchange after paste");
    this.dispatchEvent("after_paste");
    return !0
}
;
h.Md = function(a) {
    a = new Ug(a.b);
    a.type = "paste";
    this.dispatchEvent(a);
    Di(function() {
        this.ii() || this.c.start(50, 200)
    }, 0, this)
}
;
h.Bl = function(a) {
    switch (this.fc) {
        case "init":
            switch (a.type) {
                case "blur":
                    this.fc = "init";
                    break;
                case "focus":
                    this.fc = "focused";
                    break;
                case "mouseover":
                    this.fc = "init";
                    this.o.value != this.a && ($i(this.F, "paste by dragdrop while on init!"),
                        this.Md(a));
                    break;
                default:
                    Yi(this.F, "unexpected event " + a.type + "during init")
            }
            break;
        case "focused":
            switch (a.type) {
                case "input":
                    var b = this.g + 400;
                    if (Ua() > b || "focus" == this.h)
                        $i(this.F, "paste by textchange while focused!"),
                            this.Md(a);
                    break;
                case "blur":
                    this.fc = "init";
                    break;
                case "keydown":
                    $i(this.F, "key down ... looking for ctrl+v");
                    if (De && we && 0 == a.keyCode || De && we && 17 == a.keyCode)
                        break;
                    this.fc = "typing";
                    break;
                case "mouseover":
                    this.o.value != this.a && ($i(this.F, "paste by dragdrop while focused!"),
                        this.Md(a));
                    break;
                default:
                    Yi(this.F, "unexpected event " + a.type + " during focused")
            }
            break;
        case "typing":
            switch (a.type) {
                case "input":
                    this.fc = "focused";
                    break;
                case "blur":
                    this.fc = "init";
                    break;
                case "keydown":
                    if (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode)
                        $i(this.F, "paste by ctrl+v while keypressed!"),
                            this.Md(a);
                    break;
                case "mouseover":
                    this.o.value != this.a && ($i(this.F, "paste by dragdrop while keypressed!"),
                        this.Md(a));
                    break;
                default:
                    Yi(this.F, "unexpected event " + a.type + " during keypressed")
            }
            break;
        default:
            Yi(this.F, "invalid " + this.fc + " state")
    }
    this.g = Ua();
    this.a = this.o.value;
    $i(this.F, a.type + " -> " + this.fc);
    this.h = a.type
}
;
var Nv = function() {};
w(Nv, lr);
Ga(Nv);
h = Nv.prototype;
h.$c = function() {}
;
h.Ua = function(a, b) {
    Er(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    Nv.D.Ua.call(this, a, b);
    a.g(b.value);
    return b
}
;
h.nb = function(a) {
    Er(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    return a.a.b("TEXTAREA", {
        "class": or(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Sa() || "")
}
;
h.Zc = function(a) {
    return "TEXTAREA" == a.tagName
}
;
h.Wg = Fa;
h.Vg = function(a) {
    return a.isEnabled()
}
;
h.Sd = Fa;
h.xd = function(a, b, c) {
    Nv.D.xd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
}
;
h.kc = Fa;
h.Mb = function(a, b) {
    a && (a.value = b)
}
;
h.wa = function() {
    return "goog-textarea"
}
;
var Ov = function(a, b, c) {
    Z.call(this, a, b || Nv.M(), c);
    Er(this, !1);
    this.df = !0;
    (b = this.j()) && this.c.Gf(b, !0);
    this.Vd = "" != a;
    a || (this.ad = "")
};
w(Ov, Z);
var Pv = !(A && !Te(11));
h = Ov.prototype;
h.Wd = !1;
h.Rf = !1;
h.Vd = !1;
h.Jc = 0;
h.oh = 0;
h.Mi = !1;
h.$f = !1;
h.Ah = !1;
h.yh = !1;
h.Cd = "";
var Qv = function(a) {
    return a.m.top + a.m.bottom + a.W.top + a.W.bottom
}
    , Rv = function(a) {
    var b = a.oh
        , c = a.j();
    b && c && a.$f && (b -= Qv(a));
    return b
};
Ov.prototype.b = function(a) {
    this.g(String(a))
}
;
Ov.prototype.Y = function() {
    return this.j().value != this.Cd || Sv(this) || this.Vd ? this.j().value : ""
}
;
Ov.prototype.g = function(a) {
    Ov.D.g.call(this, a);
    this.Vd = "" != a;
    Tv(this)
}
;
Ov.prototype.oa = function(a) {
    Ov.D.oa.call(this, a);
    this.j().disabled = !a
}
;
var Tv = function(a) {
    a.j() && a.N()
}
    , Sv = function(a) {
    x(a.j());
    return "placeholder"in a.j()
}
    , Uv = function(a) {
    a.Cd && (Sv(a) ? a.j().placeholder = a.Cd : !a.j() || a.Vd || a.Rf || (T(x(a.j()), "textarea-placeholder-input"),
        a.j().value = a.Cd))
};
Ov.prototype.Z = function() {
    Ov.D.Z.call(this);
    var a = this.j();
    bq(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box"
    });
    this.m = Hq(a);
    this.W = nq(a);
    Y(this).listen(a, "scroll", this.N).listen(a, "focus", this.N).listen(a, "keyup", this.N).listen(a, "mouseup", this.$b).listen(a, "blur", this.eb);
    Uv(this);
    Tv(this)
}
;
var Vv = function(a) {
    if (!a.Mi) {
        var b = a.j().cloneNode(!1);
        bq(b, {
            position: "absolute",
            height: "auto",
            top: "-9999px",
            margin: "0",
            padding: "1px",
            border: "1px solid #000",
            overflow: "hidden"
        });
        dg(a.a.a.body, b);
        var c = b.scrollHeight;
        b.style.padding = "10px";
        var d = b.scrollHeight;
        a.Ah = d > c;
        b.style.borderWidth = "10px";
        a.yh = b.scrollHeight > d;
        b.style.height = "100px";
        100 != b.offsetHeight && (a.$f = !0);
        jg(b);
        a.Mi = !0
    }
    b = a.j();
    isNaN(a.m.top) && (a.m = Hq(b),
        a.W = nq(b));
    c = a.j().scrollHeight;
    var e = a.j();
    d = e.offsetHeight - e.clientHeight;
    if (!a.Ah) {
        var f = a.m;
        d -= f.top + f.bottom
    }
    a.yh || (e = nq(e),
        d -= e.top + e.bottom);
    c += 0 < d ? d : 0;
    a.$f ? c -= Qv(a) : (a.Ah || (d = a.m,
        c += d.top + d.bottom),
    a.yh || (a = nq(b),
        c += a.top + a.bottom));
    return c
}
    , Wv = function(a, b) {
    a.Jc != b && (a.Jc = b,
        a.j().style.height = b + "px")
}
    , Xv = function(a) {
    var b = a.j();
    b.style.height = "auto";
    var c = b.value.match(/\n/g) || [];
    b.rows = c.length + 1;
    a.Jc = 0
};
Ov.prototype.eb = function() {
    Sv(this) || (this.Rf = !1,
    "" == this.j().value && (this.Vd = !1,
        Uv(this)))
}
;
Ov.prototype.N = function(a) {
    if (!this.Wd) {
        var b = this.j();
        !Sv(this) && a && "focus" == a.type && (b.value == this.Cd && this.Cd && !this.Rf && (U(b, "textarea-placeholder-input"),
            b.value = ""),
            this.Rf = !0,
            this.Vd = "" != b.value);
        var c = !1;
        this.Wd = !0;
        a = this.Jc;
        if (b.scrollHeight) {
            var d = !1
                , e = !1
                , f = Vv(this)
                , g = b.offsetHeight
                , k = Rv(this);
            var l = 0;
            var m = this.j();
            l && m && this.$f && (l -= Qv(this));
            k && f < k ? (Wv(this, k),
                d = !0) : l && f > l ? (Wv(this, l),
                b.style.overflowY = "",
                e = !0) : g != f ? Wv(this, f) : this.Jc || (this.Jc = f);
            d || e || !Pv || (c = !0)
        } else
            Xv(this);
        this.Wd = !1;
        c && (b = this.j(),
        this.Wd || (this.Wd = !0,
            (e = b.scrollHeight) ? (f = Vv(this),
                c = Rv(this),
            c && f <= c || (d = this.m,
                b.style.paddingBottom = d.bottom + 1 + "px",
            Vv(this) == f && (b.style.paddingBottom = d.bottom + e + "px",
                b.scrollTop = 0,
                e = Vv(this) - e,
                e >= c ? Wv(this, e) : Wv(this, c)),
                b.style.paddingBottom = d.bottom + "px")) : Xv(this),
            this.Wd = !1));
        a != this.Jc && this.dispatchEvent("resize")
    }
}
;
Ov.prototype.$b = function() {
    var a = this.j()
        , b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Jc && (this.Jc = this.oh = b)
}
;
var Yv = function(a, b) {
    Ov.call(this, a);
    this.ac = !!b;
    this.ra = "";
    this.xa = null;
    this.R = 0;
    this.X = this.ba = !1;
    this.Ca = null
};
w(Yv, Ov);
Yv.prototype.b = function(a) {
    Yv.D.b.call(this, a);
    this.V("set")
}
;
Yv.prototype.Z = function() {
    Yv.D.Z.call(this);
    H(this.j(), "compositionstart", v(this.yb, this), !1, this);
    H(this.j(), "compositionend", v(this.xb, this), !1, this);
    this.Ca = new er(this.j());
    H(this.Ca, "key", function(a) {
        Zv(this, "key", {
            keyCode: a.keyCode
        })
    }, !1, this);
    H(this.j(), "input", function() {
        Zv(this, "input")
    }, !1, this);
    H(new Mv(this.j()), "paste", function() {
        this.ba = !0;
        Zv(this, "paste")
    }, !1, this);
    H(this.j(), "drop", function() {
        Zv(this, "drop")
    }, !1, this);
    this.xa = new Bi(1E3);
    H(this.xa, "tick", function() {
        this.V("timer")
    }, !1, this);
    this.xa.start()
}
;
Yv.prototype.yb = function() {
    this.X = !0
}
;
Yv.prototype.xb = function() {
    this.X = !1;
    Zv(this, "input")
}
;
var Zv = function(a, b, c) {
    Di(v(a.V, a, b, c), 0, a)
};
Yv.prototype.V = function(a, b) {
    if (!this.X)
        if (this.ac && "key" == a && b && 13 == b.keyCode)
            this.dispatchEvent("enter");
        else {
            var c = this.Y();
            "" == c.trim() && c != this.ra && this.dispatchEvent("clear");
            c != this.ra && (this.R += 1,
                this.ra = c,
                c = new Mg("change"),
            this.ba && (this.ba = !1,
                a = "paste"),
                c.changeType = a,
            null != b && Xb(c, b),
                this.dispatchEvent(c))
        }
}
;
var $v = function(a) {
    return yc(a.Y())
}
    , aw = function(a) {
    var b = a.R;
    a.R = 0;
    return b
};
var bw = function(a, b) {
    K.call(this);
    this.rd = a;
    this.a = [];
    null != b && this.Ed(b)
};
w(bw, K);
bw.prototype.update = function(a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c)
        this.a.push(a[c]);
    this.dispatchEvent({
        type: this.rd,
        data: this.a,
        selected: null != b ? b : null
    })
}
;
var cw = function(a, b) {
    K.call(this);
    this.R = !!b;
    this.a = "";
    this.V = a;
    this.c = this.b = "";
    this.L = new bw("srcSuggestionUpdated",this);
    this.K = new bw("staticSrcSuggestionUpdated",this);
    this.O = new bw("staticTgtSuggestionUpdated",this);
    this.W = [];
    this.ba = new bw("srcEmphasizeUpdated",this);
    this.X = new bw("tgtEmphasizeUpdated",this);
    this.aa = this.na = 0;
    this.v = [];
    this.m = [];
    this.C = [];
    this.N = [];
    this.G = !1;
    this.w = ""
};
w(cw, K);
var dw = function(a, b) {
    var c = [];
    if (b) {
        for (var d = "auto" == a.a ? a.c : a.a, e = -1, f = 0; f < b.length; ++f)
            b[f] == d ? "auto" != a.a && (e = f) : c.push(b[f]);
        b = -1 != e && 3 > e
    } else
        b = !1;
    b || a.G || a.L.update(c ? c.slice(0, 3) : [])
}
    , fw = function(a) {
    var b = a.K
        , c = a.a;
    a = ew(a.C, a.v);
    b.update(a, c)
}
    , gw = function(a) {
    var b = a.O
        , c = a.b;
    a = ew(a.N, a.m);
    b.update(a, c)
};
cw.prototype.g = function(a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b)
        this.G = !0;
    6 == b && (this.w = a);
    "zh-TW" == a && (a = "zh-CN");
    "auto" != a && hw(this, "");
    if (this.a != a) {
        iw(this, this.K, a, this.v);
        var c = this.a;
        this.a = a;
        this.R && jw(this.a, this.v);
        this.V && c != this.a && this.V(kc(this.a) ? "rtl" : "ltr");
        a = "auto" == c ? void 0 : v(this.h, this, c, 6);
        this.na = b;
        kw(this, this.a, "srcLanguageUpdated", b, a)
    }
}
;
cw.prototype.h = function(a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || "zh-CN" != a || "zh-TW" != this.w || (a = "zh-TW");
    5 == b && (this.w = this.b);
    iw(this, this.O, a, this.m);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.R && jw(this.b, this.m);
        this.aa = b;
        kw(this, this.b, "tgtLanguageUpdated", b, v(this.g, this, c, 6))
    }
}
;
var iw = function(a, b, c, d) {
    for (var e = yb(b.a), f = "auto" != c, g = 0; g < e.length; g++)
        if (c == e[g]) {
            f = !1;
            break
        }
    if (a.R && "auto" != c) {
        g = e.length;
        d = e = [c].concat(d instanceof Array ? d : ca(ba(d)), e instanceof Array ? e : ca(ba(e)));
        a = {};
        for (var k = f = 0; k < d.length; ) {
            var l = d[k++];
            var m = l;
            m = Ma(m) ? "o" + Pa(m) : (typeof m).charAt(0) + m;
            Object.prototype.hasOwnProperty.call(a, m) || (a[m] = !0,
                d[f++] = l)
        }
        d.length = f;
        e.length = g
    } else if (f)
        for (a = {},
             0 < d.length && (a[d[0]] = !0),
             1 < d.length && (a[d[1]] = !0),
                 g = e.length - 1; 0 <= g; g--)
            if (!a[e[g]]) {
                e[g] = c;
                break
            }
    b.update(e, c)
}
    , hw = function(a, b) {
    "auto" == b && (b = "");
    a.c != b && (a.c = b,
        a.dispatchEvent({
            type: "detectSrcUpdated",
            data: a.c
        }))
}
    , lw = function(a) {
    for (var b = DATA.RecentLanguages.recent_sl, c = 0; c < b.length; ++c)
        a.v.push(b[c])
}
    , mw = function(a) {
    for (var b = DATA.RecentLanguages.recent_tl, c = 0; c < b.length; ++c)
        a.m.push(b[c])
}
    , nw = function(a) {
    a.C = [];
    a.N = [];
    for (var b = window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++)
        tb(a.C, b[d]);
    for (b = 0; b < c.length; b++)
        tb(a.N, c[b])
}
    , ow = function(a) {
    if (!a || 0 == a.length)
        return "";
    for (var b = [], c = 0; c < a.length; ++c)
        b.push(a[c]);
    return b.join("|")
}
    , kw = function(a, b, c, d, e) {
    a.dispatchEvent({
        type: c,
        data: b,
        di: 6 == d
    });
    e && (3 == d || 4 == d) && a.a == a.b && "zh-CN" != a.a && e();
    4 != d && 3 != d || a.dispatchEvent("languageSelected")
}
    , pw = function(a, b) {
    for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]),
    3 <= c.length); ++d)
        ;
    return c
}
    , jw = function(a, b) {
    if ("auto" != a) {
        for (var c = 0; c < b.length && b[c] != a; ++c)
            ;
        c == b.length ? (b.unshift(a),
        10 < b.length && b.pop()) : (b.splice(c, 1),
            b.unshift(a))
    }
}
    , ew = function(a, b) {
    for (var c = {}, d = [], e = 0; e < b.length && 3 > d.length; e++)
        d.push(b[e]),
            c[b[e]] = !0;
    for (e = 0; e < a.length && 3 > d.length; e++)
        null == c[a[e]] && (c[a[e]] = !0,
            d.push(a[e]));
    return d
};
var tw = function(a, b) {
    var c = 0
        , d = 0;
    if (qw(a))
        c = a.selectionStart,
            d = b ? -1 : a.selectionEnd;
    else if (rw()) {
        var e = sw(a)
            , f = e[0];
        e = e[1];
        if (f.inRange(e)) {
            f.setEndPoint("EndToStart", e);
            if ("textarea" == a.type) {
                a = e.duplicate();
                var g = f.text;
                c = g;
                e = d = a.text;
                for (var k = !1; !k; )
                    0 == f.compareEndPoints("StartToEnd", f) ? k = !0 : (f.moveEnd("character", -1),
                        f.text == g ? c += "\r\n" : k = !0);
                if (b)
                    b = [c.length, -1];
                else {
                    for (b = !1; !b; )
                        0 == a.compareEndPoints("StartToEnd", a) ? b = !0 : (a.moveEnd("character", -1),
                            a.text == d ? e += "\r\n" : b = !0);
                    b = [c.length, c.length + e.length]
                }
                return b
            }
            c = f.text.length;
            d = b ? -1 : f.text.length + e.text.length
        }
    }
    return [c, d]
}
    , sw = function(a) {
    var b = a.ownerDocument || a.document
        , c = b.selection.createRange();
    "textarea" == a.type ? (b = b.body.createTextRange(),
        b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
}
    , uw = function(a, b) {
    "textarea" == a.type && (b = ae(a.value.substring(0, b)).length);
    return b
}
    , qw = function(a) {
    try {
        return "number" == typeof a.selectionStart
    } catch (b) {
        return !1
    }
}
    , rw = function() {
    return A && !Re("9")
};
var vw = function(a, b, c, d) {
    var e = DATA.DisplayLanguage
        , f = DATA.MaxSingleQueryLength;
    this.b = a;
    this.h = b;
    this.L = e;
    this.g = c;
    this.c = f;
    this.a = d || null;
    this.v = !1;
    this.m = new Hm;
    this.m.c = "webapp";
    this.F = L.M()
};
vw.prototype.init = function() {
    H(this.b, "change", this.w, !1, this);
    H(document, "selectionchange", this.C, !1, this);
    H(new Mv(this.b.j()), "paste", this.G, !1, this)
}
;
vw.prototype.w = function(a) {
    var b = this.b.Y().length;
    this.a && Jv(this.a, b);
    var c = "set" == a.changeType;
    a = "key" == a.changeType;
    if (b > this.c) {
        if (!xq(this.g.j()) && !a || c)
            this.g.setVisible(!0),
                a = this.h.c,
            "" == a && (a = this.h.a),
                c = b - this.c,
                Mm(this.m, "webapp", "ov", "1", {
                    sl: this.h.a,
                    tl: this.h.b,
                    dl: a,
                    hl: this.L,
                    ql: b,
                    ol: c
                }),
                a = this.F,
                N(a, qm(a, 250, b, c)),
            this.a && Iv(this.a, !0),
                b = this.b.Y().substring(this.c),
                this.g.g = b,
                b = this.g,
                c = {
                    maximum_input_count: Ev(b.W, this.c)
                },
                a = ww(b.V, c),
                G(D("snck-msg", b.j()), a),
                c = ww(b.X, c),
                G(D("ovfl-xlt", b.j()), c);
        this.b.g(this.b.Y().substring(0, this.c));
        this.a && Jv(this.a, this.c)
    } else
        b < this.c && this.a && Iv(this.a, !1),
        (c || 0 == b) && xw(this)
}
;
var xw = function(a) {
    a.g.g = "";
    a.g.setVisible(!1);
    a.a && Iv(a.a, !1)
};
vw.prototype.C = function() {
    var a = tw(this.b.j(), !1)
        , b = this.b.Y().length;
    this.v = 0 != b && 0 == a[0] && a[1] == b
}
;
vw.prototype.G = function() {
    this.v && xw(this)
}
;
var yw = function(a, b, c, d, e, f, g, k) {
    X.call(this);
    this.c = Hm.M();
    this.R = a;
    this.N = b;
    this.W = c;
    this.V = d;
    this.X = e;
    this.b = f;
    this.m = g;
    this.h = null != k ? k : null;
    this.F = L.M();
    this.w = !1
};
w(yw, X);
yw.prototype.setVisible = function(a) {
    a && !this.w ? (this.c.log("community-promo", "show-" + this.b),
        tm(this.F, this.m),
        W(this.g, !0)) : W(this.g, !1)
}
;
yw.prototype.Da = function(a) {
    yw.D.Da.call(this, a);
    this.g = Vp(co, {
        um: this.R,
        tm: this.N,
        $n: this.W,
        Pn: this.V,
        url: this.X,
        id: this.b
    });
    a.appendChild(this.g);
    var b = D("cp-dismiss", a);
    Y(this).listen(b, "click", this.C);
    a = D("cp-promo-href", a);
    Y(this).listen(a, "click", this.K)
}
;
yw.prototype.C = function() {
    this.c.log("community-promo", "dismiss-" + this.b);
    Lm(this.c, "/translate/uc?ua=dcp&uav=" + this.b);
    var a = this.F;
    N(a, sm(a, 74, this.m));
    this.setVisible(!1);
    this.w = !0
}
;
yw.prototype.K = function(a) {
    this.c.log("community-promo", "click-" + this.b);
    um(this.F, this.m);
    this.h && this.h.a() && (this.h.reset(),
        a.preventDefault(),
        a.stopPropagation())
}
;
var zw = function(a, b) {
    this.a = a;
    this.b = b || null
};
zw.prototype.Ta = function() {
    return this.a
}
;
zw.prototype.ub = function() {
    return this.b
}
;
var Aw = function() {};
w(Aw, lr);
Ga(Aw);
h = Aw.prototype;
h.$c = function() {
    return "menuitem"
}
;
h.nb = function(a) {
    var b = F("DIV", null, a.Ta());
    T(b, "gt-is-sg");
    var c = F("DIV", null, "");
    T(c, a.oi ? "gt-is-ld-top" : "gt-is-ld");
    c = ["DIV", or(this, a), c];
    var d = F("SPAN");
    if (a.Pc) {
        var e = new Rr(null,new Lt);
        e.render(d);
        T(e.j(), "gt-is-flag");
        ns(e.j(), a.Jg, void 0);
        e.setVisible(!1);
        a.Vb = e;
        d.id = Tq(e)
    }
    e = F("DIV");
    T(e, "gt-is-ca");
    var f = new Rr;
    f.o = e;
    a.qc = f;
    c = c.concat([b, d, e]);
    a.un && (b = F("DIV", null, a.ub()),
        c.push(b),
        T(b, "gt-is-tr"));
    b = F.apply(null, c);
    b.id = Tq(a);
    return a.o = b
}
;
h.Zc = function(a) {
    return "DIV" == a.tagName
}
;
h.wa = function() {
    return "gt-is-itm"
}
;
h.xd = function(a, b, c) {
    Aw.D.xd.call(this, a, b, c);
    2 == b && a.Pc && a.Vb && !a.Nd && a.Vb.setVisible(c)
}
;
var Bw = function(a, b, c, d, e, f, g) {
    Z.call(this, a.Ta(), f || Aw.M(), g);
    this.ae = a;
    this.Pc = b;
    this.Jg = c;
    this.qc = null;
    this.oi = d;
    this.un = e;
    this.Nd = !1;
    this.Oa(1, !1)
};
w(Bw, Z);
Bw.prototype.Ta = function() {
    return this.ae.Ta()
}
;
Bw.prototype.ub = function() {
    return this.ae.ub()
}
;
Bw.prototype.wb = function(a) {
    this.Pc && pg(this.Vb.j(), a.target) ? (this.Nd = !0,
        this.Vb.wb(a)) : this.qc && pg(this.qc.j(), a.target) ? this.qc.wb(a) : Bw.D.wb.call(this, a)
}
;
Bw.prototype.Fb = function(a) {
    if (this.qc && pg(this.qc.j(), a.target))
        this.qc.Fb(a);
    else if (this.Pc && pg(this.Vb.j(), a.target) && this.Nd)
        this.Vb.Fb(a),
            this.Nd = !1,
        this.Ea(2) || this.Vb.setVisible(!1);
    else {
        if (this.Pc) {
            var b = this.getParent();
            y(b.b, function(c) {
                c.Nd && (c.Nd = !1,
                    Kr(c.Vb, !1));
                c != this && c.Vb.setVisible(!1)
            })
        }
        Bw.D.Fb.call(this, a)
    }
}
;
var Cw = function(a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    Fs.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.K = b;
    this.C = null != c ? c : !0
};
w(Cw, Fs);
Cw.prototype.update = function(a, b, c, d) {
    Cw.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 12) && 0 == I(d, 15))
        return !1;
    fg(this.b);
    this.Dd();
    this.g = 0;
    a = I(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < I(d, 12); e++)
        c += (new Mo(Il(d, 12, e))).a();
    c = 5 > c ? c : 3;
    for (e = this.w = 0; e < a; ++e) {
        var f = new Mo(Il(d, 12, e))
            , g = J(new Mo(Il(d, 12, e)), 2)
            , k = F("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(k);
        G(k, J(f, 0));
        k = d;
        var l = b
            , m = c
            , q = Math.ceil(m / a)
            , r = F("DIV", {
            "class": "gt-def-list"
        })
            , u = kc(this.Aa) ? "rtl" : "ltr";
        bq(r, {
            direction: u
        });
        for (u = 0; u < f.a(); ++u) {
            var C = f.b(u)
                , Q = J(C, 0)
                , M = J(C, 2);
            var Qa = k;
            for (var Mb = [], Ja = 0; Ja < I(Qa, 11); ++Ja)
                for (var Nb = new gp(Il(Qa, 11, Ja)), Ag = 0; Ag < Nb.a(); ++Ag) {
                    var Be = Nb.b(Ag);
                    if (J(C, 1) == J(Be, 1)) {
                        for (var $m = [], ak = 0; ak < I(Be, 0); ++ak)
                            tb($m, Hh(Be, 0, ak));
                        tb(Mb, $m)
                    }
                }
            Qa = Mb;
            if (C = 1 > u || l && u < q && this.w < m)
                this.w += 1;
            Q = Dw(this, u + 1, Q, M, Qa, C);
            r.appendChild(Q);
            this.g += 1
        }
        this.b.appendChild(r)
    }
    for (e = 0; e < I(d, 15); e++)
        l = new Xo(Il(d, 15, e)),
            m = J(l, 1),
            k = J(l, 2),
            f = F("DIV", {
                "class": "gt-def-row"
            }),
            m = F("DIV", {
                "class": "gt-kp-desc"
            }, m),
            q = F("A"),
            q.setAttribute("href", J(l, 3)),
            q.setAttribute("target", "_blank"),
            l = F("IMG", {
                "class": "gt-kp-image"
            }),
            l.setAttribute("src", k),
            q.appendChild(l),
            f.appendChild(q),
            f.appendChild(m),
            this.b.appendChild(f);
    g && (this.hf = g,
        Gs(this, g));
    if (!b && this.g > 1 * a || b && this.g > c)
        d = MSG_N_MORE_DEFINITIONS_LABEL.replace("%1$s", (this.g - this.w).toLocaleString(this.Ra)),
            Hs(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = Of("gt-card-expand-wrapper", this.j()),
                 g = 0; g < d.length; g++)
            a = d[g],
            D("gt-def-synonym", a) && U(a, "gt-card-expand-wrapper");
    this.setVisible(!0);
    return !0
}
;
Cw.prototype.Z = function() {
    Cw.D.Z.call(this);
    Y(this).listen(this.j(), "click", this.R)
}
;
Cw.prototype.Da = function(a) {
    Cw.D.Da.call(this, a)
}
;
var Dw = function(a, b, c, d, e, f) {
    var g = kc(a.Ja) ? "rtl" : "ltr";
    b = Wp(ko, {
        yk: b.toLocaleString(a.Ra),
        Sj: a.K,
        zk: c,
        Pk: d,
        Sn: MSG_SYNONYMS_LOWERCASE,
        Rn: e,
        Jh: g,
        lk: a.C,
        Aa: a.Aa
    });
    a.C && y(Of("gt-cd-cl", b), function(k) {
        this.c.push(k)
    }, a);
    Js(a, D("gt-mt-md", b), c);
    (c = D("gt-ex-mt", b)) && Js(a, c, d);
    (d = D("gt-def-synonym-title", b)) && kc(a.Ra) != kc(a.Aa) && (a = kc(a.Ra),
        bq(d, "direction", a ? "rtl" : "ltr"),
        bq(d, "padding-" + (a ? "left" : "right"), "8px"));
    return Is(b, f)
};
Cw.prototype.R = function(a) {
    Pp(a.target, "gt-cd-cl") && this.dispatchEvent(new Mg("a",a.target))
}
;
Cw.prototype.gb = function() {
    return this.C ? this.ze() : this.g
}
;
var Fw = function(a) {
    Ew();
    return ld(a)
}
    , Gw = function(a) {
    Ew();
    return tc(a)
}
    , Ew = Fa;
var Hw = function(a, b, c) {
    var d = "ex";
    null != c && c && (d = "m" + d);
    this.K = b;
    Fs.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.g = new kp;
    this.C = this.w = "ltr"
};
w(Hw, Fs);
Hw.prototype.update = function(a, b, c, d) {
    Hw.D.update.call(this, a, b, c, d);
    fg(this.b);
    this.g = new kp(d.Va[13]);
    if (0 == I(this.g, 0))
        return !1;
    this.setVisible(!0);
    3 <= I(this.g, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace("%1$s", (I(this.g, 0) - 1).toLocaleString(this.Ra)),
        Hs(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.w = kc(this.Aa) ? "rtl" : "ltr";
    this.C = kc(this.Ja) ? "rtl" : "ltr";
    for (a = 0; a < I(this.g, 0); ++a) {
        b = 0 == a || 1 == a && 2 == I(this.g, 0);
        d = new ip(Il(this.g, 0, a));
        var e = J(d, 0);
        c = d.Be();
        d = J(d, 2);
        var f = MSG_MT_FROM_GOOGLE
            , g = this.w;
        Ew();
        e = Nd(e, null);
        c = Wp(fo, {
            Mn: g,
            Fd: e,
            qm: d,
            rm: c,
            Jh: this.C,
            Do: f,
            Jn: this.K
        });
        b = Is(c, b);
        this.b.appendChild(b)
    }
    return !0
}
;
Hw.prototype.Ej = function() {
    var a = {};
    a.total = I(this.g, 0);
    return a
}
;
Hw.prototype.gb = function() {
    return I(this.g, 0)
}
;
var Iw = function() {};
Ga(Iw);
var Jw = function(a) {
    a: {
        var b = a.changedTouches[0];
        switch (a.type) {
            case "touchstart":
                var c = "mousedown";
                break;
            case "touchmove":
                c = "mousemove";
                break;
            case "touchend":
                c = "mouseup";
                break;
            default:
                b = null;
                break a
        }
        var d = document.createEvent("MouseEvent");
        d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
        b = d
    }
    null != b && (a.changedTouches[0].target.dispatchEvent(b),
        a.preventDefault())
}
    , Kw = We || Xe || Ye
    , Lw = function(a, b) {
    Kw && (b.addEventListener("touchstart", Jw, !0),
        b.addEventListener("touchmove", Jw, !0),
        b.addEventListener("touchend", Jw, !0),
        b.addEventListener("touchcancel", Jw, !0))
};
var Mw = function(a) {
    this.a = a
};
Ga(Mw);
var Nw = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
Mw.prototype.c = function(a) {
    return a.a.b("DIV", Ow(this, a).join(" "))
}
;
Mw.prototype.b = function(a) {
    return a
}
;
Mw.prototype.Df = function(a) {
    return "DIV" == a.tagName
}
;
var Rw = function(a, b, c) {
    c.id && Uq(b, c.id);
    var d = a.Ee()
        , e = !1
        , f = Op(c);
    f && y(f, function(g) {
        g == d ? e = !0 : g && (g == d + "-disabled" ? b.oa(!1) : g == d + "-horizontal" ? Pw(b, "horizontal") : g == d + "-vertical" && Pw(b, "vertical"))
    }, a);
    e || T(c, d);
    Qw(a, b, a.b(c));
    return c
}
    , Qw = function(a, b, c) {
    if (c)
        for (var d = c.firstChild, e; d && d.parentNode == c; ) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.Og(d);
                f && (f.o = d,
                b.isEnabled() || f.oa(!1),
                    b.kb(f),
                    f.ea(d))
            } else
                d.nodeValue && "" != yc(d.nodeValue) || c.removeChild(d);
            d = e
        }
};
Mw.prototype.Og = function(a) {
    a: {
        x(a);
        a = Op(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in Ar ? Ar[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
}
;
Mw.prototype.Tg = function(a) {
    a = a.j();
    x(a, "The container DOM element cannot be null.");
    Cq(a, !0, ze);
    A && (a.hideFocus = !0);
    var b = this.a;
    b && Hp(a, b)
}
;
Mw.prototype.Ee = function() {
    return "goog-container"
}
;
var Ow = function(a, b) {
    a = a.Ee();
    var c = [a, "horizontal" == b.Bd ? a + "-horizontal" : a + "-vertical"];
    b.isEnabled() || c.push(a + "-disabled");
    return c
}
    , Sw = function() {
    return "vertical"
};
var Tw = function(a, b, c) {
    X.call(this, c);
    this.Gc = b || Mw.M();
    this.Bd = a || Sw()
};
w(Tw, X);
h = Tw.prototype;
h.Yd = null;
h.He = null;
h.Gc = null;
h.Bd = null;
h.Hc = !0;
h.Yc = !0;
h.ud = !0;
h.Ma = -1;
h.ab = null;
h.Kc = !1;
h.Bc = null;
var Uw = function(a) {
    return a.Yd || a.j()
}
    , Xw = function(a, b) {
    if (a.ud) {
        var c = Uw(a)
            , d = a.ya;
        a.Yd = b;
        var e = Uw(a);
        d && (a.Yd = c,
            Vw(a, !1),
            a.Yd = b,
            dr(Ww(a), e),
            Vw(a, !0))
    } else
        throw Error("Can't set key event target for container that doesn't support keyboard focus!");
}
    , Ww = function(a) {
    return a.He || (a.He = new er(Uw(a)))
};
h = Tw.prototype;
h.La = function() {
    this.o = this.Gc.c(this)
}
;
h.Zb = function() {
    return this.Gc.b(this.j())
}
;
h.Xc = function(a) {
    return this.Gc.Df(a)
}
;
h.Da = function(a) {
    this.o = Rw(this.Gc, this, a);
    "none" == a.style.display && (this.Hc = !1)
}
;
h.Z = function() {
    Tw.D.Z.call(this);
    Zq(this, function(b) {
        b.ya && Yw(this, b)
    }, this);
    var a = this.j();
    this.Gc.Tg(this);
    this.setVisible(this.Hc, !0);
    Y(this).listen(this, "enter", this.Yg).listen(this, "highlight", this.Fe).listen(this, "unhighlight", this.Ug).listen(this, "open", this.Gl).listen(this, "close", this.$k).listen(a, Tg.Kd, this.wb).listen(Jf(a), [Tg.Ld, Tg.me], this.xl).listen(a, [Tg.Kd, Tg.Ld, Tg.me, "mouseover", "mouseout", "contextmenu"], this.il);
    this.ud && Vw(this, !0)
}
;
var Vw = function(a, b) {
    var c = Y(a)
        , d = Uw(a);
    b ? c.listen(d, "focus", a.Bi).listen(d, "blur", a.Ef).listen(Ww(a), "key", a.Ya) : c.Ga(d, "focus", a.Bi).Ga(d, "blur", a.Ef).Ga(Ww(a), "key", a.Ya)
};
h = Tw.prototype;
h.bb = function() {
    this.Qb(-1);
    this.ab && this.ab.Wa(!1);
    this.Kc = !1;
    Tw.D.bb.call(this)
}
;
h.T = function() {
    Tw.D.T.call(this);
    this.He && (this.He.Ka(),
        this.He = null);
    this.Gc = this.ab = this.Bc = this.Yd = null
}
;
h.Yg = function() {
    return !0
}
;
h.Fe = function(a) {
    var b = cr(this, a.target);
    if (-1 < b && b != this.Ma) {
        var c = Zw(this);
        c && c.Nb(!1);
        this.Ma = b;
        c = Zw(this);
        this.Kc && Kr(c, !0);
        this.ab && c != this.ab && (tr(c, 64) ? c.Wa(!0) : this.ab.Wa(!1))
    }
    b = this.j();
    x(b, "The DOM element for the container cannot be null.");
    null != a.target.j() && Jp(b, "activedescendant", a.target.j().id)
}
;
h.Ug = function(a) {
    a.target == Zw(this) && (this.Ma = -1);
    a = this.j();
    x(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(Ip("activedescendant"))
}
;
h.Gl = function(a) {
    (a = a.target) && a != this.ab && a.getParent() == this && (this.ab && this.ab.Wa(!1),
        this.ab = a)
}
;
h.$k = function(a) {
    a.target == this.ab && (this.ab = null);
    var b = this.j()
        , c = a.target.j();
    b && a.target.Ea(2) && c && Mp(b, c)
}
;
h.wb = function(a) {
    this.Yc && (this.Kc = !0);
    var b = Uw(this);
    b && yg(b) && zg(b) ? b.focus() : a.preventDefault()
}
;
h.xl = function() {
    this.Kc = !1
}
;
h.il = function(a) {
    a: {
        var b = a.target;
        if (this.Bc)
            for (var c = this.j(); b && b !== c; ) {
                var d = b.id;
                if (d in this.Bc) {
                    b = this.Bc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b)
        switch (a.type) {
            case Tg.Kd:
                b.wb(a);
                break;
            case Tg.Ld:
            case Tg.me:
                b.Fb(a);
                break;
            case "mouseover":
                b.Ie(a);
                break;
            case "mouseout":
                b.ah(a);
                break;
            case "contextmenu":
                b.Me(a)
        }
}
;
h.Bi = function() {}
;
h.Ef = function() {
    this.Qb(-1);
    this.Kc = !1;
    this.ab && this.ab.Wa(!1)
}
;
h.Ya = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != $q(this) || this.Yd) && this.Ge(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
}
;
h.Ge = function(a) {
    var b = Zw(this);
    if (b && "function" == typeof b.Ya && b.Ya(a) || this.ab && this.ab != b && "function" == typeof this.ab.Ya && this.ab.Ya(a))
        return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
        return !1;
    switch (a.keyCode) {
        case 27:
            if (this.ud)
                Uw(this).blur();
            else
                return !1;
            break;
        case 36:
            $w(this);
            break;
        case 35:
            ax(this);
            break;
        case 38:
            if ("vertical" == this.Bd)
                bx(this);
            else
                return !1;
            break;
        case 37:
            if ("horizontal" == this.Bd)
                br(this) ? cx(this) : bx(this);
            else
                return !1;
            break;
        case 40:
            if ("vertical" == this.Bd)
                cx(this);
            else
                return !1;
            break;
        case 39:
            if ("horizontal" == this.Bd)
                br(this) ? bx(this) : cx(this);
            else
                return !1;
            break;
        default:
            return !1
    }
    return !0
}
;
var Yw = function(a, b) {
    var c = b.j();
    c = c.id || (c.id = Tq(b));
    a.Bc || (a.Bc = {});
    a.Bc[c] = b
};
Tw.prototype.kb = function(a, b) {
    hb(a, Z, "The child of a container must be a control");
    Tw.D.kb.call(this, a, b)
}
;
Tw.prototype.pd = function(a, b, c) {
    hb(a, Z);
    a.Se |= 2;
    a.Se |= 64;
    a.Oa(32, !1);
    Er(a, !1);
    var d = a.getParent() == this ? cr(this, a) : -1;
    Tw.D.pd.call(this, a, b, c);
    a.ya && this.ya && Yw(this, a);
    a = d;
    -1 == a && (a = $q(this));
    a == this.Ma ? this.Ma = Math.min($q(this) - 1, b) : a > this.Ma && b <= this.Ma ? this.Ma++ : a < this.Ma && b > this.Ma && this.Ma--
}
;
Tw.prototype.removeChild = function(a, b) {
    a = t(a) ? Wq(this, a) : a;
    hb(a, Z);
    if (a) {
        var c = cr(this, a);
        -1 != c && (c == this.Ma ? (a.Nb(!1),
            this.Ma = -1) : c < this.Ma && this.Ma--);
        var d = a.j();
        d && d.id && this.Bc && (c = this.Bc,
            d = d.id,
        d in c && delete c[d])
    }
    a = Tw.D.removeChild.call(this, a, b);
    Er(a, !0);
    return a
}
;
var Pw = function(a, b) {
    if (a.j())
        throw Error("Component already rendered");
    a.Bd = b
};
Tw.prototype.isVisible = function() {
    return this.Hc
}
;
Tw.prototype.setVisible = function(a, b) {
    if (b || this.Hc != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Hc = a;
        var c = this.j();
        c && (W(c, a),
        this.ud && Nw(Uw(this), this.Yc && this.Hc),
        b || this.dispatchEvent(this.Hc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
}
;
Tw.prototype.isEnabled = function() {
    return this.Yc
}
;
Tw.prototype.oa = function(a) {
    this.Yc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Yc = !0,
        Zq(this, function(b) {
            b.Mj ? delete b.Mj : b.oa(!0)
        })) : (Zq(this, function(b) {
        b.isEnabled() ? b.oa(!1) : b.Mj = !0
    }),
        this.Kc = this.Yc = !1),
    this.ud && Nw(Uw(this), a && this.Hc))
}
;
var dx = function(a, b) {
    b != a.ud && a.ya && Vw(a, b);
    a.ud = b;
    a.Yc && a.Hc && Nw(Uw(a), b)
};
Tw.prototype.Qb = function(a) {
    (a = ar(this, a)) ? a.Nb(!0) : -1 < this.Ma && Zw(this).Nb(!1)
}
;
var Zw = function(a) {
    return ar(a, a.Ma)
}
    , $w = function(a) {
    ex(a, function(b, c) {
        return (b + 1) % c
    }, $q(a) - 1)
}
    , ax = function(a) {
    ex(a, function(b, c) {
        b--;
        return 0 > b ? c - 1 : b
    }, 0)
}
    , cx = function(a) {
    ex(a, function(b, c) {
        return (b + 1) % c
    }, a.Ma)
}
    , bx = function(a) {
    ex(a, function(b, c) {
        b--;
        return 0 > b ? c - 1 : b
    }, a.Ma)
}
    , ex = function(a, b, c) {
    c = 0 > c ? cr(a, a.ab) : c;
    var d = $q(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d; ) {
        var f = ar(a, c);
        if (f && a.ei(f)) {
            a.Qb(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
};
Tw.prototype.ei = function(a) {
    return a.isVisible() && a.isEnabled() && tr(a, 2)
}
;
var fx = function() {};
w(fx, lr);
Ga(fx);
fx.prototype.wa = function() {
    return "goog-menuheader"
}
;
var gx = function(a, b, c) {
    Z.call(this, a, c || fx.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.bd = 1
};
w(gx, Z);
Br("goog-menuheader", function() {
    return new gx(null)
});
var hx = function() {
    this.c = []
};
w(hx, lr);
Ga(hx);
var ix = function(a, b) {
    var c = a.c[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.wa() + "-highlight";
                break;
            case 1:
                c = a.wa() + "-checkbox";
                break;
            case 2:
                c = a.wa() + "-content"
        }
        a.c[b] = c
    }
    return c
};
h = hx.prototype;
h.$c = function() {
    return "menuitem"
}
;
h.nb = function(a) {
    var b = a.a.b("DIV", or(this, a).join(" "), jx(this, a.Sa(), a.a));
    kx(this, a, b, tr(a, 8) || tr(a, 16));
    return b
}
;
h.Eb = function(a) {
    return a && a.firstChild
}
;
h.Ua = function(a, b) {
    x(b);
    var c = mg(b)
        , d = ix(this, 2);
    c && Pp(c, d) || b.appendChild(jx(this, b.childNodes, a.a));
    Pp(b, "goog-option") && (a.Oa(16, !0),
    a && b && kx(this, a, b, !0));
    return hx.D.Ua.call(this, a, b)
}
;
h.Mb = function(a, b) {
    var c = this.Eb(a)
        , d = lx(this, a) ? c.firstChild : null;
    hx.D.Mb.call(this, a, b);
    d && !lx(this, a) && c.insertBefore(d, c.firstChild || null)
}
;
var jx = function(a, b, c) {
    a = ix(a, 2);
    return c.b("DIV", a, b)
}
    , lx = function(a, b) {
    return (b = a.Eb(b)) ? (b = b.firstChild,
        a = ix(a, 1),
    !!b && ng(b) && Pp(b, a)) : !1
}
    , kx = function(a, b, c, d) {
    sr(a, c, b.C());
    ur(a, b, c);
    d != lx(a, c) && (V(c, "goog-option", d),
        c = a.Eb(c),
        d ? (a = ix(a, 1),
            c.insertBefore(b.a.b("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
};
hx.prototype.a = function(a) {
    switch (a) {
        case 2:
            return ix(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return hx.D.a.call(this, a)
    }
}
;
hx.prototype.g = function(a) {
    var b = ix(this, 0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return hx.D.g.call(this, a)
    }
}
;
hx.prototype.wa = function() {
    return "goog-menuitem"
}
;
var mx = function(a, b, c, d) {
    Z.call(this, a, d || hx.M(), c);
    this.na = b
};
w(mx, Z);
h = mx.prototype;
h.Y = function() {
    var a = this.na;
    return null != a ? a : this.tb()
}
;
h.Oa = function(a, b) {
    mx.D.Oa.call(this, a, b);
    switch (a) {
        case 8:
            this.Ea(16) && !b && this.cd(!1);
            (a = this.j()) && this && a && kx(this.c, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && kx(this.c, this, a, b)
    }
}
;
h.tb = function() {
    var a = this.Sa();
    return Ia(a) ? (a = lb(a, function(b) {
        return ng(b) && (Pp(b, "goog-menuitem-accel") || Pp(b, "goog-menuitem-mnemonic-separator")) ? "" : Dg(b)
    }).join(""),
        be(a)) : mx.D.tb.call(this)
}
;
h.Fb = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.X;
        b.X = null;
        if (b = c && ya(a.clientX))
            b = new Ff(a.clientX,a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.a == b.a : !1;
        if (b)
            return
    }
    mx.D.Fb.call(this, a)
}
;
h.Td = function(a) {
    return a.keyCode == this.ph && this.yc(a) ? !0 : mx.D.Td.call(this, a)
}
;
h.Yk = function() {
    return this.ph
}
;
Br("goog-menuitem", function() {
    return new mx(null)
});
mx.prototype.C = function() {
    return tr(this, 16) ? "menuitemcheckbox" : tr(this, 8) ? "menuitemradio" : mx.D.C.call(this)
}
;
mx.prototype.getParent = function() {
    return Z.prototype.getParent.call(this)
}
;
mx.prototype.Pd = function() {
    return Z.prototype.Pd.call(this)
}
;
var nx = function() {};
w(nx, lr);
Ga(nx);
nx.prototype.nb = function(a) {
    return a.a.b("DIV", this.wa())
}
;
nx.prototype.Ua = function(a, b) {
    b.id && Uq(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.nb(a);
        gg(b, c);
        jg(c)
    } else
        T(b, this.wa());
    return b
}
;
nx.prototype.Mb = function() {}
;
nx.prototype.wa = function() {
    return "goog-menuseparator"
}
;
var ox = function(a, b) {
    Z.call(this, null, a || nx.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.bd = 1
};
w(ox, Z);
ox.prototype.Z = function() {
    ox.D.Z.call(this);
    var a = this.j();
    x(a, "The DOM element for the separator cannot be null.");
    Hp(a, "separator")
}
;
Br("goog-menuseparator", function() {
    return new ox
});
var px = function(a) {
    this.a = a || "menu"
};
w(px, Mw);
Ga(px);
h = px.prototype;
h.Df = function(a) {
    return "UL" == a.tagName || px.D.Df.call(this, a)
}
;
h.Og = function(a) {
    return "HR" == a.tagName ? new ox : px.D.Og.call(this, a)
}
;
h.nc = function(a, b) {
    return pg(a.j(), b)
}
;
h.Ee = function() {
    return "goog-menu"
}
;
h.Tg = function(a) {
    px.D.Tg.call(this, a);
    a = a.j();
    x(a, "The menu DOM element cannot be null.");
    Jp(a, "haspopup", "true")
}
;
var qx = function(a) {
    ox.call(this, nx.M(), a)
};
w(qx, ox);
Br("goog-menuseparator", function() {
    return new ox
});
var rx = function(a, b) {
    Tw.call(this, "vertical", b || px.M(), a);
    dx(this, !1)
};
w(rx, Tw);
h = rx.prototype;
h.oe = !0;
h.nc = function(a) {
    if (this.Gc.nc(this, a))
        return !0;
    for (var b = 0, c = $q(this); b < c; b++) {
        var d = ar(this, b);
        if ("function" == typeof d.nc && d.nc(a))
            return !0
    }
    return !1
}
;
h.gb = function() {
    return $q(this)
}
;
h.setVisible = function(a, b, c) {
    (b = rx.D.setVisible.call(this, a, b)) && a && this.ya && this.oe && Uw(this).focus();
    a && c && ya(c.clientX) ? this.X = new Ff(c.clientX,c.clientY) : this.X = null;
    return b
}
;
h.Yg = function(a) {
    this.oe && Uw(this).focus();
    return rx.D.Yg.call(this, a)
}
;
h.Oi = function(a) {
    var b = new RegExp("^" + je(a),"i");
    ex(this, function(c, d) {
        var e = 0 > c ? 0 : c
            , f = !1;
        do {
            ++c;
            c == d && (c = 0,
                f = !0);
            var g = ar(this, c).tb();
            if (g && g.match(b))
                return c
        } while (!f || c != e);return this.Ma
    }, this.Ma)
}
;
h.ei = function(a) {
    return a.isEnabled() && a.isVisible() && tr(a, 2)
}
;
h.Da = function(a) {
    for (var b = this.Gc, c = Nf(this.a.a, "DIV", b.Ee() + "-content", a), d = c.length, e = 0; e < d; e++)
        Qw(b, this, c[e]);
    rx.D.Da.call(this, a)
}
;
h.Ge = function(a) {
    var b = rx.D.Ge.call(this, a);
    b || Zq(this, function(c) {
        !b && c.Yk && c.ph == a.keyCode && (this.isEnabled() && this.Qb(cr(this, c)),
            b = c.Ya(a))
    }, this);
    return b
}
;
h.Qb = function(a) {
    rx.D.Qb.call(this, a);
    (a = ar(this, a)) && pq(a.j(), this.j())
}
;
var sx = function(a, b, c) {
    mx.call(this, a, b, c);
    this.Oa(8, !0)
};
w(sx, mx);
sx.prototype.yc = function() {
    return this.dispatchEvent("action")
}
;
Br("goog-option", function() {
    return new sx(null)
});
var ux = function(a, b, c) {
    this.a = a;
    this.g = b;
    this.w = c
};
w(ux, bs);
ux.prototype.b = function(a, b, c) {
    as(this.a, this.g, a, b, void 0, c, this.w)
}
;
var vx = function(a, b, c, d) {
    ux.call(this, a, b);
    this.h = c ? 5 : 0;
    this.v = d || void 0
};
w(vx, ux);
vx.prototype.m = function() {
    return this.h
}
;
vx.prototype.c = function(a) {
    this.h = a
}
;
vx.prototype.b = function(a, b, c, d) {
    var e = as(this.a, this.g, a, b, null, c, 10, d, this.v);
    if (e & 496) {
        var f = wx(e, this.g);
        b = wx(e, b);
        e = as(this.a, f, a, b, null, c, 10, d, this.v);
        e & 496 && (f = wx(e, f),
            b = wx(e, b),
            as(this.a, f, a, b, null, c, this.h, d, this.v))
    }
}
;
var wx = function(a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var xx = function(a, b, c, d) {
    vx.call(this, a, b, c || d);
    (c || d) && this.c(65 | (d ? 32 : 132))
};
w(xx, vx);
var yx = function() {};
w(yx, Dt);
Ga(yx);
yx.prototype.Eb = function(a) {
    return yx.D.Eb.call(this, a && a.firstChild)
}
;
yx.prototype.Ua = function(a, b) {
    var c = Nf(document, "*", "goog-menu", b)[0];
    if (c) {
        W(c, !1);
        dg(Jf(c).body, c);
        var d = new rx;
        d.ea(c);
        a.Ke(d)
    }
    return yx.D.Ua.call(this, a, b)
}
;
yx.prototype.lf = function(a, b) {
    return yx.D.lf.call(this, [b.b("DIV", "goog-inline-block " + (this.wa() + "-caption"), a), b.b("DIV", "goog-inline-block " + (this.wa() + "-dropdown"), "\u00a0")], b)
}
;
yx.prototype.wa = function() {
    return "goog-menu-button"
}
;
var zx = function() {
    this.c = []
};
w(zx, hx);
Ga(zx);
zx.prototype.nb = function(a) {
    var b = zx.D.nb.call(this, a);
    x(b);
    T(b, "goog-submenu");
    Ax(this, a, b);
    return b
}
;
zx.prototype.Ua = function(a, b) {
    b = zx.D.Ua.call(this, a, b);
    x(b);
    T(b, "goog-submenu");
    Ax(this, a, b);
    var c = Nf(document, "DIV", "goog-menu", b);
    if (c.length) {
        var d = new rx(a.a);
        c = c[0];
        W(c, !1);
        a.a.a.body.appendChild(c);
        d.ea(c);
        Bx(a, d)
    }
    return b
}
;
zx.prototype.Mb = function(a, b) {
    var c = this.Eb(a)
        , d = c && c.lastChild;
    zx.D.Mb.call(this, a, b);
    d && c.lastChild != d && Pp(d, "goog-submenu-arrow") && c.appendChild(d)
}
;
zx.prototype.Ff = function(a) {
    zx.D.Ff.call(this, a);
    var b = a.Zb()
        , c = Nf(a.a.a, "SPAN", "goog-submenu-arrow", b)[0];
    Cx(a, c);
    c != b.lastChild && b.appendChild(c);
    a = a.j();
    x(a, "The sub menu DOM element cannot be null.");
    Jp(a, "haspopup", "true")
}
;
var Ax = function(a, b, c) {
    var d = b.a.b("SPAN");
    d.className = "goog-submenu-arrow";
    Cx(b, d);
    a.Eb(c).appendChild(d)
}
    , Cx = function(a, b) {
    x(b);
    br(a) ? (T(b, "goog-submenu-arrow-rtl"),
        G(b, "\u25c4")) : (U(b, "goog-submenu-arrow-rtl"),
        G(b, "\u25ba"))
};
var Dx = function(a, b, c, d) {
    mx.call(this, a, b, c, d || zx.M())
};
w(Dx, mx);
h = Dx.prototype;
h.we = null;
h.Dh = null;
h.nh = !1;
h.fb = null;
h.rf = !1;
h.Z = function() {
    Dx.D.Z.call(this);
    Y(this).listen(this.getParent(), "hide", this.cj);
    this.fb && Ex(this, this.fb, !0)
}
;
h.bb = function() {
    Y(this).Ga(this.getParent(), "hide", this.cj);
    this.fb && (Ex(this, this.fb, !1),
    this.rf || (this.fb.bb(),
        jg(this.fb.j())));
    Dx.D.bb.call(this)
}
;
h.T = function() {
    this.fb && !this.rf && this.fb.Ka();
    this.fb = null;
    Dx.D.T.call(this)
}
;
h.Nb = function(a) {
    Dx.D.Nb.call(this, a);
    a || (this.we && Ei(this.we),
        this.we = Di(this.Cc, 218, this))
}
;
h.Ch = function() {
    var a = this.getParent();
    a && Zw(a) == this && (Fx(this, !0),
        Gx(this))
}
;
h.Cc = function() {
    var a = this.fb;
    a && a.getParent() == this && (Fx(this, !1),
        Zq(a, function(b) {
            "function" == typeof b.Cc && b.Cc()
        }))
}
;
var Hx = function(a) {
    a.we && Ei(a.we);
    a.Dh && Ei(a.Dh)
};
Dx.prototype.setVisible = function(a, b) {
    (a = Dx.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Cc();
    return a
}
;
var Gx = function(a) {
    Zq(a.getParent(), function(b) {
        b != this && "function" == typeof b.Cc && (b.Cc(),
            Hx(b))
    }, a)
};
h = Dx.prototype;
h.Ya = function(a) {
    var b = a.keyCode
        , c = br(this) ? 37 : 39
        , d = br(this) ? 39 : 37;
    if (!this.nh) {
        if (!this.isEnabled() || b != c && 13 != b && b != this.ph)
            return !1;
        this.Ch();
        $w(Ix(this));
        Hx(this)
    } else if (!Ix(this).Ya(a))
        if (b == d)
            this.Cc();
        else
            return !1;
    a.preventDefault();
    return !0
}
;
h.Sm = function() {
    if (this.fb.getParent() == this) {
        Hx(this);
        var a = this.Pd();
        a.Qb(cr(a, this));
        Gx(this)
    }
}
;
h.cj = function(a) {
    a.target == this.Pd() && (this.Cc(),
        Hx(this))
}
;
h.Ie = function(a) {
    this.isEnabled() && (Hx(this),
        this.Dh = Di(this.Ch, 218, this));
    Dx.D.Ie.call(this, a)
}
;
h.yc = function(a) {
    Hx(this);
    if (tr(this, 8) || tr(this, 16))
        return Dx.D.yc.call(this, a);
    this.Ch();
    return !0
}
;
var Fx = function(a, b) {
    !b && Ix(a) && Ix(a).Qb(-1);
    a.dispatchEvent(Sq(64, b));
    var c = Ix(a);
    b != a.nh && V(x(a.j()), "goog-submenu-open", b);
    if (b != c.isVisible() && (b && (c.ya || c.render(),
        c.Qb(-1)),
        c.setVisible(b),
        b)) {
        c = new vx(a.j(),12,!1);
        var d = Ix(a)
            , e = d.j();
        d.isVisible() || (e.style.visibility = "hidden",
            W(e, !0));
        c.b(e, 8);
        d.isVisible() || (W(e, !1),
            e.style.visibility = "visible")
    }
    a.nh = b
}
    , Ex = function(a, b, c) {
    var d = Y(a);
    (c ? d.listen : d.Ga).call(d, b, "enter", a.Sm)
};
Dx.prototype.gb = function() {
    return $q(Ix(this))
}
;
var Ix = function(a) {
    a.fb ? a.rf && a.fb.getParent() != a && Xq(a.fb, a) : Bx(a, new rx(a.a));
    a.fb.j() || a.fb.La();
    return a.fb
}
    , Bx = function(a, b) {
    var c = a.fb;
    b != c && (c && (a.Cc(),
    a.ya && Ex(a, c, !1)),
        a.fb = b,
        a.rf = !1,
    b && (Xq(b, a),
        b.setVisible(!1, !0),
        b.oe = !1,
        dx(b, !1),
    a.ya && Ex(a, b, !0)))
};
Dx.prototype.nc = function(a) {
    return Ix(this).nc(a)
}
;
Br("goog-submenu", function() {
    return new Dx(null)
});
var Jx = function(a, b, c, d, e) {
    Rr.call(this, a, c || yx.M(), d);
    this.Oa(64, !0);
    this.m = new xx(null,9);
    b && this.Ke(b);
    this.ba = null;
    this.N = new Bi(500);
    !We && !Xe || Re("533.17.9") || (this.Vf = !0);
    this.md = e || px.M()
};
w(Jx, Rr);
h = Jx.prototype;
h.Vf = !1;
h.Z = function() {
    Jx.D.Z.call(this);
    Kx(this, !0);
    this.b && Lx(this, this.b, !0);
    Jp(Vq(this), "haspopup", !!this.b)
}
;
h.bb = function() {
    Jx.D.bb.call(this);
    Kx(this, !1);
    if (this.b) {
        this.Wa(!1);
        this.b.bb();
        Lx(this, this.b, !1);
        var a = this.b.j();
        a && jg(a)
    }
}
;
h.T = function() {
    Jx.D.T.call(this);
    this.b && (this.b.Ka(),
        delete this.b);
    delete this.xb;
    this.N.Ka()
}
;
h.wb = function(a) {
    Jx.D.wb.call(this, a);
    this.ob() && (this.Wa(!this.Ea(64), a),
    this.b && (this.b.Kc = this.Ea(64)))
}
;
h.Fb = function(a) {
    Jx.D.Fb.call(this, a);
    this.b && !this.ob() && (this.b.Kc = !1)
}
;
h.yc = function() {
    Kr(this, !1);
    return !0
}
;
h.wl = function(a) {
    this.b && this.b.isVisible() && !this.nc(a.target) && this.Wa(!1)
}
;
h.nc = function(a) {
    return a && pg(this.j(), a) || this.b && this.b.nc(a) || !1
}
;
h.Td = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(),
        "keyup" != a.type)
            return !0
    } else if ("key" != a.type)
        return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode
            , c = this.b.Ya(a);
        return c && this.b && this.b.ab instanceof Dx || 27 != a.keyCode && !b ? c : (this.Wa(!1),
            !0)
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Wa(!0, a),
        !0) : !1
}
;
h.Zg = function() {
    this.Wa(!1)
}
;
h.El = function() {
    this.ob() || this.Wa(!1)
}
;
h.Hf = function(a) {
    this.Vf || this.Wa(!1);
    Jx.D.Hf.call(this, a)
}
;
var Mx = function(a) {
    a.b || a.Ke(new rx(a.a,a.md));
    return a.b || null
};
Jx.prototype.Ke = function(a) {
    var b = this.b;
    if (a != b && (b && (this.Wa(!1),
    this.ya && Lx(this, b, !1),
        delete this.b),
    this.ya && Jp(Vq(this), "haspopup", !!a),
        a)) {
        this.b = a;
        Xq(a, this);
        a.setVisible(!1);
        var c = this.Vf;
        (a.oe = c) && dx(a, !0);
        this.ya && Lx(this, a, !0)
    }
    return b
}
;
var Nx = function(a, b) {
    b && (a.m = b,
        a.xb = b.a)
}
    , Ox = function(a, b) {
    a.ba = b
};
h = Jx.prototype;
h.Je = function(a) {
    Mx(this).kb(a, !0)
}
;
h.gb = function() {
    return this.b ? $q(this.b) : 0
}
;
h.setVisible = function(a, b) {
    (a = Jx.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Wa(!1);
    return a
}
;
h.oa = function(a) {
    Jx.D.oa.call(this, a);
    this.isEnabled() || this.Wa(!1)
}
;
h.Wa = function(a, b) {
    Jx.D.Wa.call(this, a);
    if (this.b && this.Ea(64) == a) {
        if (a)
            this.b.ya || this.b.render(),
                this.yb = mq(this.j()),
                this.eb = vq(this.j()),
                Px(this),
                !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.Qb(-1) : $w(this.b);
        else {
            Kr(this, !1);
            this.b.Kc = !1;
            var c = this.j();
            c && (Jp(c, "activedescendant", ""),
                Jp(c, "owns", ""));
            null != this.R && (this.R = void 0,
            (c = this.b.j()) && tq(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.isDisposed() || (b = Y(this),
            c = a ? b.listen : b.Ga,
            c.call(b, this.a.a, "mousedown", this.wl, !0),
        this.Vf && c.call(b, this.b, "blur", this.El),
            c.call(b, this.N, "tick", this.kd),
            a ? this.N.start() : this.N.stop())
    }
    this.b && this.b.j() && Vq(this.b).removeAttribute(Ip("hidden"))
}
;
var Px = function(a) {
    if (a.b.ya) {
        var b = a.m;
        a.m.a = a.xb || a.j();
        var c = a.b.j();
        a.b.isVisible() || (c.style.visibility = "hidden",
            W(c, !0));
        !a.R && a.m.m && a.m.h & 32 && (a.R = uq(c));
        b.b(c, b.g ^ 1, a.ba, a.R);
        a.b.isVisible() || (W(c, !1),
            c.style.visibility = "visible")
    }
};
Jx.prototype.kd = function() {
    var a = vq(this.j())
        , b = mq(this.j());
    var c = this.eb;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.yb,
        c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.eb = a,
        this.yb = b,
        Px(this))
}
;
var Lx = function(a, b, c) {
    var d = Y(a);
    c = c ? d.listen : d.Ga;
    c.call(d, b, "action", a.Zg);
    c.call(d, b, "close", a.ac);
    c.call(d, b, "highlight", a.hd);
    c.call(d, b, "unhighlight", a.jd)
}
    , Kx = function(a, b) {
    var c = Y(a);
    (b ? c.listen : c.Ga).call(c, a.j(), "keydown", a.Id)
};
Jx.prototype.hd = function(a) {
    (a = a.target.j()) && Qx(this, a)
}
;
Jx.prototype.Id = function(a) {
    tr(this, 32) && this.j() && this.b && this.b.isVisible() && a.stopPropagation()
}
;
Jx.prototype.jd = function() {
    if (!Zw(this.b)) {
        var a = this.j();
        x(a, "The menu button DOM element cannot be null.");
        Jp(a, "activedescendant", "");
        Jp(a, "owns", "")
    }
}
;
Jx.prototype.ac = function(a) {
    if (this.Ea(64) && a.target instanceof mx) {
        a = a.target;
        var b = a.j();
        a.isVisible() && a.Ea(2) && null != b && Qx(this, b)
    }
}
;
var Qx = function(a, b) {
    a = a.j();
    x(a, "The menu button DOM element cannot be null.");
    b = Lp(b) || b;
    if (!b.id) {
        var c = Qq.M();
        b.id = ":" + (c.a++).toString(36)
    }
    Mp(a, b);
    Jp(a, "owns", b.id)
};
Br("goog-menu-button", function() {
    return new Jx(null)
});
var Sx = function(a) {
    K.call(this);
    this.a = [];
    Rx(this, a)
};
w(Sx, K);
Sx.prototype.b = null;
Sx.prototype.gb = function() {
    return this.a.length
}
;
var Rx = function(a, b) {
    b && (y(b, function(c) {
        Tx(c, !1)
    }, a),
        zb(a.a, b))
}
    , Ux = function(a, b, c) {
    b && (Tx(b, !1),
        Bb(a.a, c, 0, b))
}
    , Vx = function(a) {
    var b = a.b;
    return b ? jb(a.a, b) : -1
}
    , Wx = function(a) {
    var b = a.a;
    if (!Ia(b))
        for (var c = b.length - 1; 0 <= c; c--)
            delete b[c];
    b.length = 0;
    a.b = null
};
Sx.prototype.T = function() {
    Sx.D.T.call(this);
    delete this.a;
    this.b = null
}
;
var Tx = function(a, b) {
    a && "function" == typeof a.dd && a.dd(b)
};
var Xx = function(a, b, c, d, e) {
    Jx.call(this, a, b, c, d, e || new px("listbox"));
    this.X = this.Sa();
    this.ra = null;
    this.Xg = "listbox"
};
w(Xx, Jx);
h = Xx.prototype;
h.Ha = null;
h.Z = function() {
    Xx.D.Z.call(this);
    Yx(this);
    Zx(this)
}
;
h.Da = function(a) {
    Xx.D.Da.call(this, a);
    (a = this.tb()) ? (this.X = a,
        Yx(this)) : $x(this) || ay(this, 0)
}
;
h.T = function() {
    Xx.D.T.call(this);
    this.Ha && (this.Ha.Ka(),
        this.Ha = null);
    this.X = null
}
;
h.Zg = function(a) {
    by(this, a.target);
    Xx.D.Zg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
}
;
h.Jl = function() {
    var a = $x(this);
    Xx.D.Cf.call(this, a && a.Y());
    Yx(this)
}
;
h.Ke = function(a) {
    var b = Xx.D.Ke.call(this, a);
    a != b && (this.Ha && Wx(this.Ha),
    a && (this.Ha ? Zq(a, function(c) {
        cy(c);
        var d = this.Ha;
        Ux(d, c, d.gb())
    }, this) : dy(this, a)));
    return b
}
;
h.Je = function(a) {
    cy(a);
    Xx.D.Je.call(this, a);
    if (this.Ha) {
        var b = this.Ha;
        Ux(b, a, b.gb())
    } else
        dy(this, Mx(this));
    ey(this)
}
;
var by = function(a, b) {
    if (a.Ha) {
        var c = $x(a)
            , d = a.Ha;
        b != d.b && (Tx(d.b, !1),
            d.b = b,
            Tx(b, !0));
        d.dispatchEvent("select");
        b != c && a.dispatchEvent("change")
    }
}
    , ay = function(a, b) {
    a.Ha && by(a, a.Ha.a[b] || null)
};
Xx.prototype.Cf = function(a) {
    if (null != a && this.Ha)
        for (var b = 0, c; c = this.Ha.a[b] || null; b++)
            if (c && "function" == typeof c.Y && c.Y() == a) {
                by(this, c);
                return
            }
    by(this, null)
}
;
Xx.prototype.Y = function() {
    var a = $x(this);
    return a ? a.Y() : null
}
;
var $x = function(a) {
    return a.Ha ? a.Ha.b : null
}
    , dy = function(a, b) {
    a.Ha = new Sx;
    b && Zq(b, function(c) {
        cy(c);
        var d = this.Ha;
        Ux(d, c, d.gb())
    }, a);
    Zx(a)
}
    , Zx = function(a) {
    a.Ha && Y(a).listen(a.Ha, "select", a.Jl)
}
    , Yx = function(a) {
    var b = $x(a);
    a.g(b ? b.tb() : a.X);
    var c = a.c.Eb(a.j());
    c && a.a.lm(c) && (null == a.ra && (a.ra = Kp(c, "label")),
        b = b ? b.j() : null,
        Np(c, b ? Kp(b, "label") : a.ra),
        ey(a))
}
    , ey = function(a) {
    var b = a.c;
    if (b && (b = b.Eb(a.j()))) {
        var c = Vq(a);
        b.id || (b.id = ":" + (Qq.M().a++).toString(36));
        Hp(b, "option");
        Jp(c, "activedescendant", b.id);
        a.Ha && (c = yb(a.Ha.a),
            Jp(b, "setsize", fy(c)),
            a = Vx(a.Ha),
            Jp(b, "posinset", 0 <= a ? fy(Ab(c, 0, a + 1)) : 0))
    }
}
    , fy = function(a) {
    return pb(a, function(b) {
        return b instanceof mx
    })
}
    , cy = function(a) {
    a.Xg = a instanceof mx ? "option" : "separator"
};
Xx.prototype.Wa = function(a, b) {
    Xx.D.Wa.call(this, a, b);
    this.Ea(64) ? Mx(this).Qb(this.Ha ? Vx(this.Ha) : -1) : ey(this)
}
;
Br("goog-select", function() {
    return new Xx(null)
});
var iy = function(a, b, c, d, e, f, g, k, l) {
    c = new gy(c);
    Xx.call(this, "", c, g, k);
    this.m.c && this.m.c(33);
    this.Ca = a;
    this.$b = a.id;
    Uq(c, this.$b + "-menu");
    this.W = [];
    this.V = null;
    this.xa = null != f ? f : "";
    this.ld = !!l;
    for (a = 0; a < b.length; a++) {
        var m;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        "separator" != f ? m = new sx(b[a],f) : m = new qx;
        this.Je(m)
    }
    this.ea(this.Ca);
    a: {
        b = null != e ? e : hy(this, 0);
        for (e = 0; d = this.b ? ar(this.b, e) : null; e++)
            if (d instanceof mx && d.Y() == b) {
                b = e;
                break a
            }
        b = -1
    }
    0 <= b && ay(this, b)
};
w(iy, Xx);
iy.prototype.g = function(a) {
    this.ld ? a = this.xa : this.xa && (a = this.xa + " " + a);
    iy.D.g.call(this, a)
}
;
var jy = function(a) {
    a.V && (Ei(a.V),
        a.V = null);
    a.V = Di(function() {
        a.W = []
    }, 1E3)
};
iy.prototype.T = function() {
    jg(this.Ca);
    this.Ca = null;
    iy.D.T.call(this)
}
;
iy.prototype.Ya = function(a) {
    if (!this.Ea(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        jy(this);
        this.W.push(String.fromCharCode(a.keyCode));
        a = this.W.join("");
        var b = new RegExp("^" + je(a),"i")
            , c = this.Ha ? Vx(this.Ha) : -1
            , d = c;
        -1 < d && 1 < a.length && d--;
        var e = this.gb()
            , f = 0 > d ? 0 : d
            , g = !1
            , k = !1;
        do {
            ++d;
            d == e && (d = 0,
                g = !0);
            var l = this.b ? ar(this.b, d) : null;
            if (l instanceof mx && (l = l.tb()) && l.match(b)) {
                k = !0;
                break
            }
            g && d == f && 3 == a.length && (l = a.split(""),
            l[1] == l[2] && (b = new RegExp("^" + l[1],"i"),
                this.W = [l[1]],
                g = !1))
        } while (!g || d != f);k && d != c && ay(this, d);
        return !0
    }
    return iy.D.Ya.call(this, a)
}
;
var hy = function(a, b) {
    var c = "";
    a = a.b ? ar(a.b, b) : null;
    a instanceof mx && (c = a.Y());
    return c
};
iy.prototype.Y = function() {
    var a = this.Ha ? Vx(this.Ha) : -1;
    return -1 != a ? hy(this, a) : ""
}
;
var gy = function(a, b, c) {
    this.b = a;
    this.m = [];
    this.K = [];
    rx.call(this, b, c)
};
w(gy, rx);
h = gy.prototype;
h.Di = F("DIV", {
    id: "goog-menuitem-group-",
    "class": "goog-menuitem-group"
});
h.dh = !1;
h.Gd = 0;
h.La = function() {
    gy.D.La.call(this);
    this.j().id = Tq(this)
}
;
h.pd = function(a, b, c) {
    this.dh && (this.c = b == $q(this) ? this.g[b - 1] : this.g[b]);
    gy.D.pd.call(this, a, b, c);
    this.c && (this.c = null,
        ky(this))
}
;
h.removeChild = function(a, b) {
    t(a) && (a = Wq(this, a));
    var c = cr(this, a);
    this.dh && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = gy.D.removeChild.call(this, a, b);
    this.c && (this.c = null,
        ky(this));
    return a
}
;
h.Zb = function() {
    var a;
    this.c ? a = this.c : a = gy.D.Zb.call(this);
    return a
}
;
h.render = function(a) {
    gy.D.render.call(this, a);
    ky(this);
    Lw(Iw.M(), this.j())
}
;
h.ea = function(a) {
    gy.D.ea.call(this, a);
    ky(this);
    Lw(Iw.M(), this.j())
}
;
var ky = function(a) {
    a.dh = !0;
    ly(a);
    var b = a.j();
    b.innerHTML = "";
    var c = []
        , d = 0;
    var e = document.createElement("table");
    var f = e.insertRow(-1);
    for (var g = 0, k; k = a.h[g]; g++) {
        var l = f.insertCell(f.cells.length);
        l.appendChild(k);
        Pp(k, "goog-groupmenu-separator") ? (c.push(l),
            f = e.insertRow(e.rows.length)) : d++
    }
    for (g = 0; l = c[g]; g++)
        l.setAttribute("colspan", d);
    b.appendChild(e)
}
    , my = function(a, b, c) {
    sb(a.h, b.Tb) || a.h.push(b.Tb);
    ar(a, c + 1) && (b.Tb = a.Di.cloneNode(!0),
        b.Tb.id += b.$i,
        b.$i++,
        b.Of = 1);
    return b
}
    , ly = function(a) {
    a.h = [];
    a.g = {};
    var b = a.Di.cloneNode(!0);
    b.id += 1;
    var c = {
        Tb: b,
        $i: 2,
        Of: 1
    };
    Zq(a, function(d, e) {
        c.Tb.appendChild(d.j());
        this.g[e] = c.Tb;
        c.Of == this.b ? c = my(this, c, e) : d instanceof mx && c.Of++;
        sb(this.K, e) && (U(c.Tb, "goog-menuitem-group"),
            T(c.Tb, "goog-groupmenu-separator"),
            this.g[e] = c.Tb,
            c = my(this, c, e))
    }, a);
    1 == c.Of || sb(a.h, c.Tb) || a.h.push(c.Tb)
};
gy.prototype.setVisible = function(a, b, c) {
    (a = gy.D.setVisible.call(this, a, b, c)) && this.Gd && (Ei(this.Gd),
        this.Gd = 0);
    return a
}
;
gy.prototype.Ge = function(a) {
    var b = gy.D.Ge.call(this, a);
    if (b)
        return b;
    switch (a.keyCode) {
        case 37:
            return ex(this, v(this.w, this), this.Ma),
                !0;
        case 39:
            return ex(this, v(this.C, this), this.Ma),
                !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (ny(this),
                this.m.push(String.fromCharCode(a.keyCode)),
                this.Oi(this.m.join("")),
                !0) : !1
    }
}
;
var ny = function(a) {
    a.Gd && (Ei(a.Gd),
        a.Gd = 0);
    a.Gd = Di(function() {
        this.m = []
    }, 1E3, a)
};
gy.prototype.Oi = function(a) {
    var b = new RegExp("^" + je(a),"i")
        , c = this.Ma;
    -1 < c && 1 < a.length && c--;
    ex(this, function(d, e) {
        var f = 0 > d ? 0 : d
            , g = !1;
        do {
            ++d;
            d == e && (d = 0,
                g = !0);
            var k = ar(this, d).tb();
            if (k && k.match(b))
                return d
        } while (!g || d != f);return this.Ma
    }, c)
}
;
gy.prototype.w = function(a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
}
;
gy.prototype.C = function(a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
}
;
var py = function(a, b) {
    this.a = oy;
    this.b = a;
    this.c = Zb(b)
}
    , oy = null
    , ry = function(a, b) {
    var c = ["sl", "tl", "src", "trg", "ts"];
    if (!oy && "openDatabase"in window)
        try {
            oy = window.openDatabase("GoogleTranslateMobileWebApp", "1.0", "Google Translate Mobile Web App", 5E5)
        } catch (e) {}
    if (oy) {
        var d = new py(a,c);
        qy(d, a, c, function(e) {
            b && b(e, d)
        })
    } else
        b && b(!1, null)
}
    , sy = function(a) {
    return function(b) {
        a && a(!1, b.code)
    }
}
    , qy = function(a, b, c, d) {
    var e = [];
    e.push("CREATE TABLE IF NOT EXISTS", b);
    b = [];
    for (var f = 0, g = c.length; f < g; f++)
        b.push(c[f] + " TEXT");
    e.push("(", b.join(","), ")");
    a.a.transaction(function(k) {
        k.executeSql(e.join(" "))
    }, sy(d), d ? Ta(d, !0, null) : Fa)
}
    , ty = function(a, b) {
    for (var c in b)
        if (!Qb(a.c, c))
            return !1;
    return !0
}
    , vy = function(a, b, c, d) {
    var e = [["ts"]];
    if (ty(a, b)) {
        var f = [];
        f.push("SELECT * FROM", a.b);
        var g = []
            , k = [];
        uy(b, g, k);
        g.length && f.push("WHERE", g.join(" AND "));
        if (e && 0 < e.length) {
            b = [];
            for (g = 0; g < e.length; ++g)
                b.push(e[g][0] + " " + (e[g][1] ? "ASC" : "DESC"));
            f.push("ORDER BY", b.join(","))
        }
        c && f.push("LIMIT", c);
        var l = [];
        a.a.transaction(function(m) {
            m.executeSql(f.join(" "), k, function(q, r) {
                q = 0;
                for (var u = r.rows.length; q < u; q++)
                    l.push(r.rows.item(q))
            })
        }, sy(d), d ? Ta(d, !0, l || null) : Fa)
    } else
        d && d(!1, -1)
}
    , xy = function(a, b, c) {
    wy(a, [b], c)
}
    , wy = function(a, b, c) {
    for (var d = 0, e = b.length; d < e; d++)
        if (!ty(a, b[d])) {
            c && c(!1, -1);
            return
        }
    var f = [];
    d = 0;
    for (e = b.length; d < e; d++) {
        var g = b[d], k = [], l = [], m = [], q;
        for (q in g)
            k.push(q),
                l.push(g[q]),
                m.push("?");
        f.push([["INSERT INTO", a.b, "(", k.join(","), ") VALUES (", m.join(","), ")"].join(" "), l])
    }
    a.a.transaction(function(r) {
        for (var u = 0, C = f.length; u < C; u++)
            r.executeSql(f[u][0], f[u][1])
    }, sy(c), c ? Ta(c, !0, null) : Fa)
}
    , yy = function(a, b, c) {
    if (ty(a, b)) {
        var d = [];
        d.push("DELETE FROM", a.b);
        var e = []
            , f = [];
        uy(b, e, f);
        e.length && d.push("WHERE", e.join(" AND "));
        a.a.transaction(function(g) {
            g.executeSql(d.join(" "), f)
        }, sy(c), c ? Ta(c, !0, null) : Fa)
    } else
        c && c(!1, -1)
}
    , uy = function(a, b, c) {
    for (var d in a)
        b.push(d + "=?"),
            c.push(a[d])
};
var zy = function(a) {
    this.a = a
}
    , Ay = function(a, b) {
    ry(a, function(c, d) {
        var e = null;
        c && (e = new zy(d));
        b && b(c, e)
    })
}
    , Dy = function(a, b, c, d) {
    var e = By.a;
    Cy(e, a, b, c, function(f) {
        f && (f = {},
            f.sl = a,
            f.tl = b,
            f.src = c,
            f.trg = fj(d),
            f.ts = (new Date).getTime(),
            xy(e.a, f, function() {}))
    })
}
    , Cy = function(a, b, c, d, e) {
    var f = {};
    b && (f.sl = b);
    c && (f.tl = c);
    d && (f.src = d);
    yy(a.a, f, function(g) {
        e && e(g)
    })
}
    , Ey = function(a, b, c, d, e, f) {
    var g = {};
    b && (g.sl = b);
    c && (g.tl = c);
    d && (g.src = d);
    vy(a.a, g, e, function(k, l) {
        var m = [];
        if (k)
            for (var q = 0, r = l.length; q < r; q++) {
                var u = {}, C;
                for (C in l[q])
                    u[C] = l[q][C];
                var Q = vo(u.trg, {
                    "class": "trans.common.WebSqlTranslations"
                });
                u.trg = Q;
                m.push(u)
            }
        f && f(k, m)
    })
}
    , Fy = function(a, b, c, d, e, f) {
    Ey(a, b, c, d, e, function(g, k) {
        f && f(g, k)
    })
};
var Gy = function(a) {
    this.a = a
}
    , Hy = function(a) {
    Ay("TranslationHistory", function(b, c) {
        c = b ? new Gy(c) : null;
        a && a(b, c)
    })
};
var Iy = ec("//www.gstatic.com/inputtools/js/ita/inputtools_3.js")
    , Jy = ec("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Ly = function(a) {
    var b = Ky;
    this.h = [];
    this.O = b;
    this.K = a || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.G = this.C = this.m = !1;
    this.v = 0;
    this.b = null;
    this.w = 0
};
Ly.prototype.cancel = function(a) {
    if (this.a)
        this.c instanceof Ly && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.w--,
            0 >= b.w && b.cancel())
        }
        this.O ? this.O.call(this.K, this) : this.G = !0;
        this.a || My(this, new Ny(this))
    }
}
;
Ly.prototype.L = function(a, b) {
    this.m = !1;
    Oy(this, a, b)
}
;
var Oy = function(a, b, c) {
    a.a = !0;
    a.c = c;
    a.g = !b;
    Py(a)
}
    , Ry = function(a) {
    if (a.a) {
        if (!a.G)
            throw new Qy(a);
        a.G = !1
    }
};
Ly.prototype.re = function(a) {
    Ry(this);
    Sy(a);
    Oy(this, !0, a)
}
;
var My = function(a, b) {
    Ry(a);
    Sy(b);
    Oy(a, !1, b)
}
    , Sy = function(a) {
    x(!(a instanceof Ly), "An execution sequence may not be initiated with a blocking Deferred.")
}
    , Ty = function(a, b, c, d) {
    x(!a.C, "Blocking Deferreds can not be re-used");
    a.h.push([b, c, d]);
    a.a && Py(a)
};
Ly.prototype.then = function(a, b, c) {
    var d, e, f = new ki(function(g, k) {
            d = g;
            e = k
        }
    );
    Ty(this, d, function(g) {
        g instanceof Ny ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
}
;
Ly.prototype.$goog_Thenable = !0;
var Uy = function(a) {
    return nb(a.h, function(b) {
        return La(b[1])
    })
}
    , Py = function(a) {
    if (a.v && a.a && Uy(a)) {
        var b = a.v
            , c = Vy[b];
        c && (n.clearTimeout(c.qa),
            delete Vy[b]);
        a.v = 0
    }
    a.b && (a.b.w--,
        delete a.b);
    b = a.c;
    for (var d = c = !1; a.h.length && !a.m; ) {
        var e = a.h.shift()
            , f = e[0]
            , g = e[1];
        e = e[2];
        if (f = a.g ? g : f)
            try {
                var k = f.call(e || a.K, b);
                p(k) && (a.g = a.g && (k == b || k instanceof Error),
                    a.c = b = k);
                if (hi(b) || "function" === typeof n.Promise && b instanceof n.Promise)
                    d = !0,
                        a.m = !0
            } catch (l) {
                b = l,
                    a.g = !0,
                Uy(a) || (c = !0)
            }
    }
    a.c = b;
    d && (k = v(a.L, a, !0),
        d = v(a.L, a, !1),
        b instanceof Ly ? (Ty(b, k, d),
            b.C = !0) : b.then(k, d));
    c && (b = new Wy(b),
        Vy[b.qa] = b,
        a.v = b.qa)
}
    , Qy = function() {
    Va.call(this)
};
w(Qy, Va);
Qy.prototype.message = "Deferred has already fired";
Qy.prototype.name = "AlreadyCalledError";
var Ny = function() {
    Va.call(this)
};
w(Ny, Va);
Ny.prototype.message = "Deferred was canceled";
Ny.prototype.name = "CanceledError";
var Wy = function(a) {
    this.qa = n.setTimeout(v(this.a, this), 0);
    this.qf = a
};
Wy.prototype.a = function() {
    x(Vy[this.qa], "Cannot throw an error that is not scheduled.");
    delete Vy[this.qa];
    throw this.qf;
}
;
var Vy = {};
var $y = function(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = rc(a)
        , e = $f("SCRIPT")
        , f = {
        jj: e,
        ed: void 0
    }
        , g = new Ly(f)
        , k = null
        , l = null != c.timeout ? c.timeout : 5E3;
    0 < l && (k = window.setTimeout(function() {
        Xy(e, !0);
        My(g, new Yy(1,"Timeout reached for loading script " + d))
    }, l),
        f.ed = k);
    e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Xy(e, c.jk || !1, k),
            g.re(null))
    }
    ;
    e.onerror = function() {
        Xy(e, !0, k);
        My(g, new Yy(0,"Error while loading script " + d))
    }
    ;
    f = c.attributes || {};
    Xb(f, {
        type: "text/javascript",
        charset: "UTF-8"
    });
    Rf(e, f);
    Xd(e, a);
    Zy(b).appendChild(e);
    return g
}
    , Zy = function(a) {
    var b = Mf("HEAD", a);
    return b && 0 != b.length ? b[0] : a.documentElement
}
    , Ky = function() {
    if (this && this.jj) {
        var a = this.jj;
        a && "SCRIPT" == a.tagName && Xy(a, !0, this.ed)
    }
}
    , Xy = function(a, b, c) {
    null != c && n.clearTimeout(c);
    a.onload = Fa;
    a.onerror = Fa;
    a.onreadystatechange = Fa;
    b && window.setTimeout(function() {
        jg(a)
    }, 0)
}
    , Yy = function(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Va.call(this, c);
    this.code = a
};
w(Yy, Va);
var az = function() {
    this.c = this.b = !1;
    this.a = []
};
Ga(az);
var bz = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js")
    , cz = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
az.prototype.g = function() {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a)
        this.a[a]()
}
;
az.prototype.load = function(a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0,
        this.a.push(a),
        a = 0 <= n.location.href.indexOf("?deb=static") || 0 <= n.location.href.indexOf("&deb=static"),
        $y(tc(dc(b ? a ? cz : bz : a ? Jy : Iy))).then(v(this.g, this)))
}
;
var ez = function() {
    this.g = Ek.M();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a["gt-input-tool"] = new dz
};
Ga(ez);
var gz = function(a, b, c) {
    b = fz(a, b, c);
    if (p(b))
        a = b.Wi;
    else {
        a: {
            a = Hk(a.g, c);
            if (null != a)
                for (c = 0; c < a.length; c++)
                    if (Jk(a[c])) {
                        a = a[c];
                        break a
                    }
            a = ""
        }
        a = a || ""
    }
    return a
}
    , fz = function(a, b, c) {
    if (a = hz(a, b))
        return a.a[c]
}
    , hz = function(a, b, c) {
    var d = a.a[b];
    c && !p(d) && (d = new dz,
        a.a[b] = d);
    return d
}
    , iz = function(a, b, c) {
    var d = {
        ua: "itui"
    };
    d.uav = t(a) ? a : a ? 1 : 0;
    d.sl = b;
    d.tl = "und";
    d.hl = c;
    var e = new Image;
    e.src = "/translate/uc?" + Fj(d);
    e.onload = function() {
        e.onload = null
    }
}
    , dz = function() {
    this.a = {};
    for (var a in jz)
        this.a[a] = new kz(jz[a],"")
}
    , jz = {
    iw: !1,
    ja: !1,
    vi: !1,
    "zh-CN": !1
};
dz.prototype.update = function(a, b, c) {
    var d = this.a[a];
    p(d) ? (d.isEnabled = b,
        d.Wi = c) : this.a[a] = new kz(b,c)
}
;
var kz = function(a, b) {
    this.isEnabled = a;
    this.Wi = b
};
var lz = function(a, b, c, d, e, f) {
    K.call(this);
    this.C = Ek.M();
    this.h = a;
    this.W = c;
    this.aa = b;
    this.g = this.b = null;
    this.v = this.L = "";
    this.G = this.h.id;
    this.a = "";
    this.m = this.c = !1;
    Hm.M();
    this.O = d;
    this.V = e;
    this.X = kc(d) ? [5, 4] : [1, 0];
    this.na = [30, 0, 0, 0];
    this.w = ez.M();
    this.N = ul.M();
    this.F = L.M();
    this.K = !0;
    null != f && f.a(this, "change")
};
w(lz, K);
var oz = function(a, b) {
    if (null == a.b)
        a.v = b,
        (null != Fk[b] || a.C.a && null != Gk[b]) && a.K && (a.K = !1,
            az.M().load(v(a.ba, a), a.V));
    else if (a.L != b)
        if (a.L = b,
        null != Fk[b] || a.C.a && null != Gk[b]) {
            var c = Hk(a.C, b)
                , d = gz(a.w, a.G, b)
                , e = a.w
                , f = a.G
                , g = fz(e, f, b);
            b = p(g) ? g.isEnabled : Jk(gz(e, f, b));
            a.m = !0;
            a.a = sb(c, d) ? d : c[0];
            a.b.disableCurrentInputTool();
            a.c = b;
            a.b.setInputTools(c);
            a.b.activateInputTool(a.a);
            a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
            null == a.g && (a.g = a.b.showControl({
                ui: "kd",
                container: a.h
            }));
            a.b.localize(a.O);
            a.g.show();
            mz(a);
            nz(a);
            a.m = !1;
            c = a.c ? a.a : "";
            a.N.b = t(c) ? xl(c) : c
        } else
            a.b.disableCurrentInputTool(),
            null != a.g && a.g.hide()
}
    , mz = function(a) {
    null != a.b && a.b.repositionKeyboard(a.W, a.X, a.na)
};
lz.prototype.isEnabled = function() {
    return null != this.b && this.c
}
;
var pz = function(a) {
    return a.isEnabled() && Jk(a.a)
};
lz.prototype.R = function(a) {
    mz(this);
    if (!this.m && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        nz(this);
        a = this.c;
        var b = this.L
            , c = this.O
            , d = this.G
            , e = this.a;
        hz(this.w, d, !0).update(b, a, e);
        iz((a ? "1" : "0") + "." + d + "." + e, b, c);
        a = this.c ? this.a : "";
        this.N.b = t(a) ? xl(a) : a;
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.F,
            N(a, O(a, 171))) : Jk(this.a) ? (a = this.F,
            N(a, O(a, 172))) : Ik(this.a) && (a = this.F,
            N(a, O(a, 146))))
    }
    this.dispatchEvent("change")
}
;
lz.prototype.ba = function() {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName("translate");
    a.addPageElements([this.aa]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.R, this);
    this.b = a;
    "" != this.v && (oz(this, this.v),
        this.v = "")
}
;
var nz = function(a) {
    var b = D("ita-kd-inputtool-icon", a.h);
    if (null != b) {
        var c = Jk(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Ik(a.a) ? a.isEnabled() ? window.MSG_HW_OFF || "" : window.MSG_HW_ON || "" : "";
        ns(b, c, void 0);
        rs(b, 2)
    }
    a = D("ita-kd-dropdown", a.h);
    null != a && (ns(a, window.MSG_CHANGE_ITA || "", void 0),
        rs(a, 2))
};
Xi("goog.dom.SavedRange");
var rz = function(a, b, c, d, e) {
    this.c = !!b;
    this.h = null;
    this.g = 0;
    this.L = !1;
    this.K = !c;
    a && qz(this, a, d);
    this.depth = void 0 != e ? e : this.g || 0;
    this.c && (this.depth *= -1)
};
w(rz, qj);
var qz = function(a, b, c, d) {
    if (a.h = b)
        a.g = ya(c) ? c : 1 != a.h.nodeType ? 0 : a.c ? -1 : 1;
    ya(d) && (a.depth = d)
};
rz.prototype.next = function() {
    if (this.L) {
        if (!this.h || this.K && 0 == this.depth)
            throw pj;
        var a = this.h;
        var b = this.c ? -1 : 1;
        if (this.g == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? qz(this, c) : qz(this, a, -1 * b)
        } else
            (c = this.c ? a.previousSibling : a.nextSibling) ? qz(this, c) : qz(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.c ? -1 : 1)
    } else
        this.L = !0;
    a = this.h;
    if (!this.h)
        throw pj;
    return a
}
;
rz.prototype.splice = function(a) {
    var b = this.h
        , c = this.c ? 1 : -1;
    this.g == c && (this.g = -1 * c,
        this.depth += this.g * (this.c ? -1 : 1));
    this.c = !this.c;
    rz.prototype.next.call(this);
    this.c = !this.c;
    c = Ka(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--)
        hg(c[d], b);
    jg(b)
}
;
var sz = function() {}
    , tz = function(a) {
    if (a.getSelection)
        return a.getSelection();
    a = a.document;
    var b = a.selection;
    if (b) {
        try {
            var c = b.createRange();
            if (c.parentElement) {
                if (c.parentElement().document != a)
                    return null
            } else if (!c.length || c.item(0).document != a)
                return null
        } catch (d) {
            return null
        }
        return b
    }
    return null
}
    , uz = function(a) {
    for (var b = [], c = 0, d = a.De(); c < d; c++)
        b.push(a.Qd(c));
    return b
}
    , vz = function(a) {
    return a.hh() ? a.Xb() : a.sc()
};
sz.prototype.hh = function() {
    return !1
}
;
var wz = function(a, b) {
    rz.call(this, a, b, !0)
};
w(wz, rz);
var xz = function(a, b, c, d, e) {
    this.b = this.a = null;
    this.G = this.C = 0;
    this.v = !!e;
    if (a) {
        this.a = a;
        this.C = b;
        this.b = c;
        this.G = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes,
                b = a[b])
                this.a = b,
                    this.C = 0;
            else {
                a.length && (this.a = ib(a));
                var f = !0
            }
        1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
    }
    rz.call(this, this.v ? this.b : this.a, this.v, !0);
    if (f)
        try {
            this.next()
        } catch (g) {
            if (g != pj)
                throw g;
        }
};
w(xz, wz);
xz.prototype.w = function() {
    return this.a
}
;
xz.prototype.m = function() {
    return this.L && (this.h != (this.v ? this.a : this.b) ? !1 : this.v ? this.C ? -1 != this.g : 1 == this.g : !this.G || 1 != this.g)
}
;
xz.prototype.next = function() {
    if (this.m())
        throw pj;
    return xz.D.next.call(this)
}
;
var yz = function() {}
    , zz = function(a, b) {
    b = b.ye();
    try {
        return 0 <= a.mc(b, 0, 0) && 0 >= a.mc(b, 1, 1)
    } catch (c) {
        if (!A)
            throw c;
        return !1
    }
};
yz.prototype.lc = function() {
    return new xz(this.cc(),this.Fc(),this.Ec(),this.Uc())
}
;
var Az = function(a) {
    this.a = a
};
w(Az, yz);
var Cz = function(a) {
    var b = Jf(a).createRange();
    if (3 == a.nodeType)
        b.setStart(a, 0),
            b.setEnd(a, a.length);
    else if (Bz(a)) {
        for (var c, d = a; (c = d.firstChild) && Bz(c); )
            d = c;
        b.setStart(d, 0);
        for (d = a; (c = d.lastChild) && Bz(c); )
            d = c;
        b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    } else
        c = a.parentNode,
            a = jb(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
    return b
}
    , Dz = function(a, b, c, d) {
    var e = Jf(a).createRange();
    e.setStart(a, b);
    e.setEnd(c, d);
    return e
};
h = Az.prototype;
h.ye = function() {
    return this.a
}
;
h.Qg = function() {
    return this.a.commonAncestorContainer
}
;
h.cc = function() {
    return this.a.startContainer
}
;
h.Fc = function() {
    return this.a.startOffset
}
;
h.Ec = function() {
    return this.a.endContainer
}
;
h.Uc = function() {
    return this.a.endOffset
}
;
h.mc = function(a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.START_TO_END : 1 == b ? n.Range.END_TO_START : n.Range.END_TO_END, a)
}
;
h.dc = function() {
    return this.a.collapsed
}
;
h.Ai = function() {
    return this.a.toString()
}
;
h.select = function(a) {
    var b = Wf(Jf(this.cc()));
    this.Re(b.getSelection(), a)
}
;
h.Re = function(a) {
    a.removeAllRanges();
    a.addRange(this.a)
}
;
var Ez = function(a) {
    this.a = a
};
w(Ez, Az);
Ez.prototype.Re = function(a, b) {
    !b || this.dc() ? Ez.D.Re.call(this, a, b) : (a.collapse(this.Ec(), this.Uc()),
        a.extend(this.cc(), this.Fc()))
}
;
var Fz = function(a) {
    this.b = this.a = this.v = null;
    this.h = this.g = -1;
    this.c = a
};
w(Fz, yz);
var Gz = Xi("goog.dom.browserrange.IeRange")
    , Hz = function(a) {
    var b = Jf(a).body.createTextRange();
    if (1 == a.nodeType)
        b.moveToElementText(a),
        Bz(a) && !a.childNodes.length && b.collapse(!1);
    else {
        for (var c = 0, d = a; d = d.previousSibling; ) {
            var e = d.nodeType;
            if (3 == e)
                c += d.length;
            else if (1 == e) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move("character", c);
        b.moveEnd("character", a.length)
    }
    return b
};
Fz.prototype.ye = function() {
    return this.c
}
;
Fz.prototype.Qg = function() {
    if (!this.v) {
        var a = this.c.text
            , b = this.c.duplicate()
            , c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd("character", -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.dc() && 0 < b)
            return this.v = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; )
            c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == Iz(c.firstChild) && Bz(c.firstChild); )
            c = c.firstChild;
        0 == a.length && (c = Jz(this, c));
        this.v = c
    }
    return this.v
}
;
var Jz = function(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (Bz(f)) {
            var g = Hz(f)
                , k = g.htmlText != f.outerHTML;
            if (a.dc() && k ? 0 <= a.mc(g, 1, 1) && 0 >= a.mc(g, 1, 0) : a.c.inRange(g))
                return Jz(a, f)
        }
    }
    return b
};
h = Fz.prototype;
h.cc = function() {
    this.a || (this.a = Kz(this, 1),
    this.dc() && (this.b = this.a));
    return this.a
}
;
h.Fc = function() {
    0 > this.g && (this.g = Lz(this, 1),
    this.dc() && (this.h = this.g));
    return this.g
}
;
h.Ec = function() {
    if (this.dc())
        return this.cc();
    this.b || (this.b = Kz(this, 0));
    return this.b
}
;
h.Uc = function() {
    if (this.dc())
        return this.Fc();
    0 > this.h && (this.h = Lz(this, 0),
    this.dc() && (this.g = this.h));
    return this.h
}
;
h.mc = function(a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
}
;
var Kz = function(a, b, c) {
    c = c || a.Qg();
    if (!c || !c.firstChild)
        return c;
    for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
        var g = d ? e : f - e - 1
            , k = c.childNodes[g];
        try {
            var l = Mz(k)
        } catch (q) {
            continue
        }
        var m = l.ye();
        if (a.dc())
            if (!Bz(k)) {
                if (0 == a.mc(m, 1, 1)) {
                    a.g = a.h = g;
                    break
                }
            } else {
                if (zz(l, a))
                    return Kz(a, b, k)
            }
        else {
            if (zz(a, l)) {
                if (!Bz(k)) {
                    d ? a.g = g : a.h = g + 1;
                    break
                }
                return Kz(a, b, k)
            }
            if (0 > a.mc(m, 1, 0) && 0 < a.mc(m, 0, 1))
                return Kz(a, b, k)
        }
    }
    return c
}
    , Lz = function(a, b) {
    var c = 1 == b
        , d = c ? a.cc() : a.Ec();
    if (1 == d.nodeType) {
        d = d.childNodes;
        for (var e = d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
            var k = d[g];
            if (!Bz(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Mz(k).ye()))
                return c ? g : g + 1
        }
        return -1 == g ? 0 : g
    }
    a = a.c.duplicate();
    b = Hz(d);
    a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
    a = a.text.length;
    return c ? d.length - a : a
}
    , Iz = function(a) {
    return 3 == a.nodeType ? a.nodeValue : a.innerText
};
Fz.prototype.dc = function() {
    return 0 == this.c.compareEndPoints("StartToEnd", this.c)
}
;
Fz.prototype.Ai = function() {
    return this.c.text
}
;
Fz.prototype.select = function() {
    this.c.select()
}
;
var Nz = function(a) {
    this.a = a
};
w(Nz, Az);
Nz.prototype.Re = function(a) {
    a.collapse(this.cc(), this.Fc());
    this.Ec() == this.cc() && this.Uc() == this.Fc() || a.extend(this.Ec(), this.Uc());
    0 == a.rangeCount && a.addRange(this.a)
}
;
var Oz = function(a) {
    this.a = a
};
w(Oz, Az);
Oz.prototype.mc = function(a, b, c) {
    return Re("528") ? Oz.D.mc.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.END_TO_START : 1 == b ? n.Range.START_TO_END : n.Range.END_TO_END, a)
}
;
Oz.prototype.Re = function(a, b) {
    b ? a.setBaseAndExtent(this.Ec(), this.Uc(), this.cc(), this.Fc()) : a.setBaseAndExtent(this.cc(), this.Fc(), this.Ec(), this.Uc())
}
;
var Pz = function(a) {
    return Df ? new Fz(a,Jf(a.parentElement())) : Ae ? new Oz(a) : ze ? new Ez(a) : we ? new Nz(a) : new Az(a)
}
    , Mz = function(a) {
    if (A && !Te(9)) {
        var b = new Fz(Hz(a),Jf(a));
        if (Bz(a)) {
            for (var c, d = a; (c = d.firstChild) && Bz(c); )
                d = c;
            b.a = d;
            b.g = 0;
            for (d = a; (c = d.lastChild) && Bz(c); )
                d = c;
            b.b = d;
            b.h = 1 == d.nodeType ? d.childNodes.length : d.length;
            b.v = a
        } else
            b.a = b.b = b.v = a.parentNode,
                b.g = jb(b.v.childNodes, a),
                b.h = b.g + 1;
        a = b
    } else
        a = Ae ? new Oz(Cz(a)) : ze ? new Ez(Cz(a)) : we ? new Nz(Cz(a)) : new Az(Cz(a));
    return a
}
    , Bz = function(a) {
    return cg(a) || 3 == a.nodeType
};
var Qz = function() {
    this.c = this.b = this.h = this.a = this.v = null;
    this.g = !1
};
w(Qz, sz);
var Rz = function(a, b) {
    var c = new Qz;
    c.v = a;
    c.g = !!b;
    return c
}
    , Sz = function(a, b) {
    return Rz(Mz(a), b)
};
Qz.prototype.Lb = function() {
    return "text"
}
;
Qz.prototype.Lg = function() {
    return Tz(this).ye()
}
;
Qz.prototype.De = function() {
    return 1
}
;
Qz.prototype.Qd = function() {
    return this
}
;
var Tz = function(a) {
    var b;
    if (!(b = a.v)) {
        b = a.Xb();
        var c = a.Yb()
            , d = a.sc()
            , e = a.tc();
        if (A && !Te(9)) {
            var f = b
                , g = c
                , k = d
                , l = e
                , m = !1;
            1 == f.nodeType && (g > f.childNodes.length && Yi(Gz, "Cannot have startOffset > startNode child count"),
                g = f.childNodes[g],
                m = !g,
                f = g || f.lastChild || f,
                g = 0);
            var q = Hz(f);
            g && q.move("character", g);
            f == k && g == l ? q.collapse(!0) : (m && q.collapse(!1),
                m = !1,
            1 == k.nodeType && (l > k.childNodes.length && Yi(Gz, "Cannot have endOffset > endNode child count"),
                k = (g = k.childNodes[l]) || k.lastChild || k,
                l = 0,
                m = !g),
                f = Hz(k),
                f.collapse(!m),
            l && f.moveEnd("character", l),
                q.setEndPoint("EndToEnd", f));
            l = new Fz(q,Jf(b));
            l.a = b;
            l.g = c;
            l.b = d;
            l.h = e;
            b = l
        } else
            b = Ae ? new Oz(Dz(b, c, d, e)) : ze ? new Ez(Dz(b, c, d, e)) : we ? new Nz(Dz(b, c, d, e)) : new Az(Dz(b, c, d, e));
        b = a.v = b
    }
    return b
};
h = Qz.prototype;
h.wf = function() {
    return Tz(this).Qg()
}
;
h.Xb = function() {
    return this.a || (this.a = Tz(this).cc())
}
;
h.Yb = function() {
    return null != this.h ? this.h : this.h = Tz(this).Fc()
}
;
h.sc = function() {
    return this.b || (this.b = Tz(this).Ec())
}
;
h.tc = function() {
    return null != this.c ? this.c : this.c = Tz(this).Uc()
}
;
h.hh = function() {
    return this.g
}
;
h.yf = function() {
    return Tz(this).dc()
}
;
h.xf = function() {
    return Tz(this).Ai()
}
;
h.lc = function() {
    return new xz(this.Xb(),this.Yb(),this.sc(),this.tc())
}
;
h.select = function() {
    Tz(this).select(this.g)
}
;
var Uz = function() {};
w(Uz, sz);
var Vz = function() {
    this.c = this.b = this.a = null
};
w(Vz, Uz);
h = Vz.prototype;
h.Lb = function() {
    return "control"
}
;
h.Lg = function() {
    return this.a || document.body.createControlRange()
}
;
h.De = function() {
    return this.a ? this.a.length : 0
}
;
h.Qd = function(a) {
    return Sz(this.a.item(a))
}
;
h.wf = function() {
    return tg.apply(null, Wz(this))
}
;
h.Xb = function() {
    return Xz(this)[0]
}
;
h.Yb = function() {
    return 0
}
;
h.sc = function() {
    var a = Xz(this)
        , b = ib(a);
    return qb(a, function(c) {
        return pg(c, b)
    })
}
;
h.tc = function() {
    return this.sc().childNodes.length
}
;
var Wz = function(a) {
    if (!a.b && (a.b = [],
        a.a))
        for (var b = 0; b < a.a.length; b++)
            a.b.push(a.a.item(b));
    return a.b
}
    , Xz = function(a) {
    a.c || (a.c = Wz(a).concat(),
        a.c.sort(function(b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
    return a.c
};
Vz.prototype.yf = function() {
    return !this.a || !this.a.length
}
;
Vz.prototype.xf = function() {
    return ""
}
;
Vz.prototype.lc = function() {
    return new Yz(this)
}
;
Vz.prototype.select = function() {
    this.a && this.a.select()
}
;
var Yz = function(a) {
    this.v = this.b = this.a = null;
    a && (this.v = Xz(a),
        this.a = this.v.shift(),
        this.b = ib(this.v) || this.a);
    rz.call(this, this.a, !1, !0)
};
w(Yz, wz);
Yz.prototype.w = function() {
    return this.a
}
;
Yz.prototype.m = function() {
    return !this.depth && !this.v.length
}
;
Yz.prototype.next = function() {
    if (this.m())
        throw pj;
    if (!this.depth) {
        var a = this.v.shift();
        qz(this, a, 1, 1);
        return a
    }
    return Yz.D.next.call(this)
}
;
var Zz = function() {
    this.F = Xi("goog.dom.MultiRange");
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
w(Zz, Uz);
h = Zz.prototype;
h.Lb = function() {
    return "mutli"
}
;
h.Lg = function() {
    1 < this.a.length && Zi(this.F, "getBrowserRangeObject called on MultiRange with more than 1 range");
    return this.a[0]
}
;
h.De = function() {
    return this.a.length
}
;
h.Qd = function(a) {
    this.g[a] || (this.g[a] = Rz(Pz(this.a[a]), void 0));
    return this.g[a]
}
;
h.wf = function() {
    if (!this.c) {
        for (var a = [], b = 0, c = this.De(); b < c; b++)
            a.push(this.Qd(b).wf());
        this.c = tg.apply(null, a)
    }
    return this.c
}
;
var aA = function(a) {
    a.b || (a.b = uz(a),
        a.b.sort(function(b, c) {
            var d = b.Xb();
            b = b.Yb();
            var e = c.Xb();
            c = c.Yb();
            return d == e && b == c ? 0 : $z(d, b, e, c) ? 1 : -1
        }));
    return a.b
};
h = Zz.prototype;
h.Xb = function() {
    return aA(this)[0].Xb()
}
;
h.Yb = function() {
    return aA(this)[0].Yb()
}
;
h.sc = function() {
    return ib(aA(this)).sc()
}
;
h.tc = function() {
    return ib(aA(this)).tc()
}
;
h.yf = function() {
    return 0 == this.a.length || 1 == this.a.length && this.Qd(0).yf()
}
;
h.xf = function() {
    return lb(uz(this), function(a) {
        return a.xf()
    }).join("")
}
;
h.lc = function() {
    return new bA(this)
}
;
h.select = function() {
    var a = tz(Wf(Jf(A ? this.wf() : this.Xb())));
    a.removeAllRanges();
    for (var b = 0, c = this.De(); b < c; b++)
        a.addRange(this.Qd(b).Lg())
}
;
var bA = function(a) {
    this.a = null;
    this.b = 0;
    a && (this.a = lb(aA(a), function(b) {
        return rj(b)
    }));
    rz.call(this, a ? this.w() : null, !1, !0)
};
w(bA, wz);
bA.prototype.w = function() {
    return this.a[0].w()
}
;
bA.prototype.m = function() {
    return this.a[this.b].m()
}
;
bA.prototype.next = function() {
    try {
        var a = this.a[this.b]
            , b = a.next();
        qz(this, a.h, a.g, a.depth);
        return b
    } catch (c) {
        if (c !== pj || this.a.length - 1 == this.b)
            throw c;
        this.b++;
        return this.next()
    }
}
;
var dA = function() {
    var a = tz(window);
    return a && cA(a)
}
    , cA = function(a) {
    var b = !1;
    if (a.createRange)
        try {
            var c = a.createRange()
        } catch (e) {
            return null
        }
    else if (a.rangeCount) {
        if (1 < a.rangeCount) {
            b = new Zz;
            c = 0;
            for (var d = a.rangeCount; c < d; c++)
                b.a.push(a.getRangeAt(c));
            return b
        }
        c = a.getRangeAt(0);
        b = $z(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else
        return null;
    (a = c) && a.addElement ? (b = new Vz,
        b.a = a,
        a = b) : a = Rz(Pz(a), b);
    return a
}
    , $z = function(a, b, c, d) {
    if (a == c)
        return d < b;
    var e;
    if (1 == a.nodeType && b)
        if (e = a.childNodes[b])
            a = e,
                b = 0;
        else if (pg(a, c))
            return !0;
    if (1 == c.nodeType && d)
        if (e = c.childNodes[d])
            c = e,
                d = 0;
        else if (pg(c, a))
            return !1;
    return 0 < (sg(a, c) || b - d)
};
var eA = function() {
    var a = dA();
    return null != a && !a.yf() && 0 < a.xf().length
}
    , fA = function(a) {
    dA();
    Sz(a, void 0).select();
    a.setAttribute("tabIndex", "-1")
}
    , gA = function(a) {
    var b = F("TEXTAREA", {
        id: "hdt"
    });
    bq(b, {
        position: "absolute",
        top: Vf(document).a + "px",
        left: "-1000px"
    });
    dg(document.body, b);
    b.focus();
    G(b, a);
    a = 0;
    if (qw(b))
        b.selectionStart = a;
    else if (rw()) {
        var c = sw(b)
            , d = c[0];
        d.inRange(c[1]) && (a = uw(b, a),
            d.collapse(!0),
            d.move("character", a),
            d.select())
    }
    a = b.value.length;
    qw(b) ? b.selectionEnd = a : rw() && (d = sw(b),
        c = d[1],
    d[0].inRange(c) && (a = uw(b, a),
        d = uw(b, tw(b, !0)[0]),
        c.collapse(!0),
        c.moveEnd("character", a - d),
        c.select()));
    return b
};
var hA = function(a, b, c, d, e, f, g) {
    g = void 0 === g ? function() {}
        : g;
    this.L = Hm.M();
    this.G = b;
    this.g = c;
    this.C = d;
    this.v = e || null;
    this.w = f;
    this.m = g;
    this.b = this.c = this.a = 0;
    this.F = L.M();
    this.delay = new Tr(this.Zf,3E3,this);
    this.h = a;
    H(a, "copy", this.Hj, !1, this);
    H(a, "mouseup", this.Ij, !1, this);
    H(a, "contextmenu", this.Ei, !1, this);
    H(a, "click", this.Gj, !1, this);
    H(n, "blur", this.flush, !1, this);
    H(n, "beforeunload", this.flush, !1, this)
};
w(hA, Jg);
h = hA.prototype;
h.flush = function() {
    this.delay.stop();
    0 < this.a + this.c + this.b && this.Zf()
}
;
h.T = function() {
    this.flush();
    this.delay.Ka();
    ph(this.h, "copy", this.Hj, !1, this);
    ph(this.h, "mouseup", this.Ij, !1, this);
    ph(this.h, "contextmenu", this.Ei, !1, this);
    ph(this.h, "click", this.Gj, !1, this);
    ph(n, "blur", this.flush, !1, this);
    ph(n, "beforeunload", this.flush, !1, this);
    hA.D.T.call(this)
}
;
h.Hj = function() {
    this.delay.stop();
    if (p(this.w)) {
        var a = this.w().length
            , b = null != n.getSelection ? n.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.Zf(1, a, b);
        hm(this.F, this.g, this.m(), a, b)
    } else
        this.Zf(1),
            hm(this.F, this.g, this.m())
}
;
h.Zf = function(a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b,
        a.cpl = c);
    null != this.v && (a.sl = this.v.a(),
        a.tl = this.v.b());
    Mm(this.L, this.C, "ilog", this.G, a);
    this.b = this.c = this.a = 0
}
;
h.Ij = function() {
    if (eA()) {
        this.c++;
        var a = this.F;
        N(a, fm(a, 211, this.g));
        59 <= this.c ? this.flush() : this.delay.start()
    }
}
;
h.Gj = function(a) {
    Xg(a) && (this.a++,
        a = this.F,
        N(a, fm(a, 212, this.g)),
        59 <= this.a ? this.flush() : this.delay.start())
}
;
h.Ei = function() {
    this.b++;
    var a = this.F;
    N(a, fm(a, 210, this.g));
    59 <= this.b ? this.flush() : this.delay.start()
}
;
var iA = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var jA = function(a, b, c, d, e, f, g, k, l) {
    this.a = a;
    this.h = b;
    this.G = c;
    this.c = d;
    this.g = e;
    this.v = f;
    this.m = g;
    this.w = k;
    this.b = l
}
    , pA = function(a) {
    var b = a.b;
    b = (b = b && "composed"in b && b && "composedPath"in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
    return kA(lA(mA(nA((new oA).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
        return a.preventDefault()
    }), function() {
        return a.stopPropagation()
    }))
}
    , oA = function() {
    this.c = null;
    this.g = "";
    this.G = this.v = this.m = this.C = this.h = this.b = this.a = this.w = null
};
h = oA.prototype;
h.keyCode = function(a) {
    this.c = a;
    return this
}
;
h.key = function(a) {
    this.g = a;
    return this
}
;
h.shiftKey = function(a) {
    this.w = a;
    return this
}
;
h.altKey = function(a) {
    this.a = a;
    return this
}
;
h.ctrlKey = function(a) {
    this.b = a;
    return this
}
;
h.metaKey = function(a) {
    this.h = a;
    return this
}
;
h.target = function(a) {
    this.C = a;
    return this
}
;
var nA = function(a, b) {
    a.m = b;
    return a
}
    , mA = function(a, b) {
    a.v = b;
    return a
}
    , lA = function(a, b) {
    a.G = b;
    return a
}
    , kA = function(a) {
    return new jA($a(a.c),a.g,eb(a.w),eb(a.a),eb(a.b),eb(a.h),x(a.C),x(a.m),bb(a.v),bb(a.G))
};
var sA = function(a) {
    K.call(this);
    this.b = this.c = {};
    this.h = 0;
    this.N = Zb(qA);
    this.V = Zb(rA);
    this.m = !0;
    this.v = null;
    this.a = a;
    H(this.a, "keydown", this.w, void 0, this);
    H(this.a, "synthetic-keydown", this.C, void 0, this);
    Ee && (H(this.a, "keypress", this.K, void 0, this),
        H(this.a, "synthetic-keypress", this.O, void 0, this));
    H(this.a, "keyup", this.G, void 0, this);
    H(this.a, "synthetic-keyup", this.L, void 0, this)
}, tA;
w(sA, K);
var uA = function(a) {
    this.a = a || null;
    this.next = a ? null : {}
}
    , qA = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19]
    , rA = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
sA.prototype.R = function(a, b) {
    vA(this.c, wA(arguments), a)
}
;
var wA = function(a) {
    if (t(a[1]))
        a = lb(xA(a[1]), function(d) {
            $a(d.keyCode, "A non-modifier key is needed in each stroke.");
            return yA(d.key || "", d.keyCode, d.Hm)
        });
    else {
        var b = a
            , c = 1;
        Ia(a[1]) && (b = a[1],
            c = 0);
        for (a = []; c < b.length; c += 2)
            a.push(yA("", b[c], b[c + 1]))
    }
    return a
};
sA.prototype.T = function() {
    sA.D.T.call(this);
    this.c = {};
    ph(this.a, "keydown", this.w, !1, this);
    ph(this.a, "synthetic-keydown", this.C, !1, this);
    Ee && (ph(this.a, "keypress", this.K, !1, this),
        ph(this.a, "synthetic-keypress", this.O, !1, this));
    ph(this.a, "keyup", this.G, !1, this);
    ph(this.a, "synthetic-keyup", this.L, !1, this);
    this.a = null
}
;
var xA = function(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+")
            , f = null
            , g = null;
        c = 0;
        for (var k, l = 0; k = e[l]; l++) {
            switch (k) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            null === g || Za("At most one non-modifier key can be in a stroke.");
            e = void 0;
            f = k;
            if (!tA) {
                g = {};
                for (e in iA)
                    g[iA[e]] = yh(parseInt(e, 10));
                tA = g
            }
            g = tA[f];
            $a(g, "Key name not found in goog.events.KeyNames: " + k);
            f = k;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            Hm: c
        })
    }
    return b
};
sA.prototype.G = function(a) {
    a = pA(a);
    ze && zA(this, a);
    Ee && !this.g && AA(a) && BA(this, a, !0)
}
;
sA.prototype.L = function(a) {
    a = a.b();
    ze && zA(this, a);
    Ee && !this.g && AA(a) && BA(this, a, !0)
}
;
var zA = function(a, b) {
    32 == a.v && 32 == b.a && (0,
        b.b)();
    a.v = null
}
    , AA = function(a) {
    return Ee && a.g && a.c
};
sA.prototype.K = function(a) {
    a = pA(a);
    32 < a.a && AA(a) && (this.g = !0)
}
;
sA.prototype.O = function(a) {
    a = a.b();
    32 < a.a && AA(a) && (this.g = !0)
}
;
var vA = function(a, b, c) {
    var d = b.shift();
    y(d, function(e) {
        if ((e = a[e]) && (0 == b.length || e.a))
            throw Error("Keyboard shortcut conflicts with existing shortcut");
    });
    b.length ? y(d, function(e) {
        e = e.toString();
        var f = new uA;
        e = e in a ? a[e] : a[e] = f;
        f = b.slice(0);
        vA(x(e.next, "An internal node must have a next map"), f, c)
    }) : y(d, function(e) {
        a[e] = new uA(c)
    })
}
    , CA = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (d)
            return d
    }
}
    , yA = function(a, b, c) {
    c = c || 0;
    b = ["c_" + b + "_" + c];
    "" != a && b.push("n_" + a + "_" + c);
    return b
};
sA.prototype.w = function(a) {
    BA(this, pA(a))
}
;
sA.prototype.C = function(a) {
    BA(this, a.b())
}
;
var BA = function(a, b, c) {
    a: {
        var d = b.a;
        if ("" != b.h) {
            var e = b.h;
            if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                d = !1;
                break a
            }
        } else if (16 == d || 17 == d || 18 == d) {
            d = !1;
            break a
        }
        e = b.w;
        var f = "TEXTAREA" == e.tagName || "INPUT" == e.tagName || "BUTTON" == e.tagName || "SELECT" == e.tagName
            , g = !f && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);
        d = !f && !g || a.N[d] ? !0 : g ? !1 : b.c || b.g || b.v ? !0 : "INPUT" == e.tagName && a.V[e.type] ? 13 == d : "INPUT" == e.tagName || "BUTTON" == e.tagName ? 32 != d : !1
    }
    d && (!c && AA(b) ? a.g = !1 : (c = yh(b.a),
        d = yA(b.h, c, (b.G ? 1 : 0) | (b.g ? 2 : 0) | (b.c ? 4 : 0) | (b.v ? 8 : 0)),
    (e = CA(a.b, d)) && (e = !(1500 <= Ua() - a.h)),
    e || (a.b = a.c,
        a.h = Ua()),
    (e = CA(a.b, d)) && e.next && (a.b = e.next,
        a.h = Ua()),
    e && (e.next ? (0,
        b.b)() : (a.b = a.c,
        a.h = Ua(),
    a.m && (0,
        b.b)(),
        d = ab(e.a, "A terminal node must have a string shortcut identifier."),
        e = a.dispatchEvent(new DA("shortcut",d,b.m)),
    (e &= a.dispatchEvent(new DA("shortcut_" + d,d,b.m))) || (0,
        b.b)(),
    ze && (a.v = c)))))
}
    , DA = function(a, b, c) {
    Mg.call(this, a, c);
    this.identifier = b
};
w(DA, Mg);
var EA = function(a) {
    this.c = a;
    this.g = Hm.M();
    this.F = L.M();
    this.a = new sA(document);
    this.a.m = !1;
    this.a.R("CTRL_SHIFT_S", 83, (De ? 8 : 2) | 1);
    H(this.a, "shortcut", this.b, !1, this)
};
w(EA, Jg);
EA.prototype.T = function() {
    EA.D.T.call(this);
    ph(this.a, "shortcut", this.b, !1, this)
}
;
EA.prototype.b = function(a) {
    "CTRL_SHIFT_S" == a.identifier && (uh(this.c.b, "action"),
        a = this.F,
        N(a, O(a, 289)),
        this.g.log("swaplang"))
}
;
var GA = function(a, b, c, d, e, f) {
    K.call(this);
    this.o = a;
    this.b = F("DIV", "sl-sugg-button-container");
    this.C = b;
    a = D("sl-sugg-button-container", this.o) ? kg(this.o.firstElementChild) : kg(this.o);
    this.g = c ? c : a.length;
    fg(this.o);
    this.c = !!d;
    this.v = !!e;
    this.a = [];
    c = this.c ? this.g + 1 : this.g;
    for (d = 0; d < c; ++d)
        e = new zs(""),
            e.Oa(16, !0),
            H(e, "action", this.O, !1, this),
            e.render(this.b),
            zr(e.c, e, 0 == d ? 2 : 3),
            this.a.push(e);
    this.o.appendChild(this.b);
    this.h = [];
    this.m = F("DIV", "ls-left-arrow");
    this.w = F("DIV", "ls-right-arrow");
    this.G = 0;
    f && (this.o.insertBefore(this.m, this.o.firstChild),
        this.o.appendChild(this.w),
        H(this.m, "mouseover", function() {
            FA(this, 2)
        }, !1, this),
        H(this.m, "mouseout", function() {
            clearTimeout(this.G)
        }, !1, this),
        H(this.w, "mouseover", function() {
            FA(this, -2)
        }, !1, this),
        H(this.w, "mouseout", function() {
            clearTimeout(this.G)
        }, !1, this));
    this.F = L.M()
};
w(GA, K);
var FA = function(a, b) {
    a.b.scrollLeft -= b;
    a.G = setTimeout(function() {
        FA(a, b)
    }, 10)
};
GA.prototype.L = function(a) {
    this.render(a.data, a.selected)
}
;
GA.prototype.O = function(a) {
    var b = a.a.Y();
    if (a.a.Ea(16)) {
        a: {
            var c = a.a;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        pm(this.F, this.c, 2, b, c, "")
    } else
        a.a.cd(!0);
    pq(a.a.j(), this.o);
    this.dispatchEvent({
        type: "click",
        data: b
    })
}
;
GA.prototype.render = function(a, b) {
    a = a.slice(0, this.g);
    var c = this.h.slice();
    c.length = this.g;
    a: {
        c = yb(c).sort();
        var d = yb(a).sort();
        if (Ka(c) && Ka(d) && c.length == d.length) {
            for (var e = c.length, f = 0; f < e; f++)
                if (c[f] !== d[f]) {
                    c = !1;
                    break a
                }
            c = !0
        } else
            c = !1
    }
    c = !c;
    this.h = a;
    a = 0;
    this.c && this.v && (a = 1);
    for (d = 0; d < this.h.length; d++) {
        e = this.a[a];
        f = this.h[d];
        if (c) {
            e.Cf(f);
            var g = this.C(f);
            e.g(g)
        }
        HA(this, e, e.Y() == b, f);
        a++
    }
    for (; a < this.g; a++)
        this.a[a].setVisible(!1);
    this.c && (a = this.a[this.v ? 0 : this.a.length - 1],
        a.Cf("auto"),
        a.g(detect_language),
        HA(this, a, a.Y() == b));
    W(this.o, !0)
}
;
var HA = function(a, b, c, d) {
    b.setVisible(!0);
    b.cd(c);
    c && pq(b.j(), a.b);
    d && (b.j().id = "sugg-item-" + d)
};
GA.prototype.K = function(a) {
    if (this.c) {
        var b = this.a[this.v ? 0 : this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.C(a.data)),
            b.g(a))
    }
}
;
var IA = function(a) {
    this.a = a;
    this.b = this.m = this.h = this.v = this.g = null;
    this.O = !1;
    this.c = null;
    this.C = function() {
        return ""
    }
    ;
    this.w = Hm.M();
    this.W = ul.M();
    this.F = L.M();
    this.G = null
}
    , LA = function(a, b) {
    b.oj && (a.g = b.oj,
        JA(a.g, a.Pa, a),
        KA(a, a.a, "srcLanguageUpdated", a.Ll),
        KA(a, a.a, "detectSrcUpdated", a.vl));
    b.yj && (a.v = b.yj,
        JA(a.v, a.N, a),
        KA(a, a.a, "tgtLanguageUpdated", a.Ul));
    b.kj && (a.K = b.kj,
        KA(a, a.K, "action", a.Fa));
    b.nj && (a.R = b.nj,
        KA(a, a.R, "action", v(a.L, a, "src", !0)));
    b.xj && (a.V = b.xj,
        KA(a, a.V, "action", v(a.L, a, "tgt", !1)));
    if (b.pj) {
        a.h = b.pj;
        KA(a, a.h, "click", a.Ml);
        var c = a.h;
        H(a.a, "staticSrcSuggestionUpdated", c.L, !1, c);
        c = a.h;
        H(a.a, "detectSrcUpdated", c.K, !1, c)
    }
    b.zj && (a.m = b.zj,
        KA(a, a.m, "click", a.Vl),
        c = a.m,
        H(a.a, "staticTgtSuggestionUpdated", c.L, !1, c));
    b.Nc && (a.b = b.Nc,
        KA(a, a.b, "action", a.Sl));
    b.Bj && (a.c = b.Bj,
        KA(a, new er(a.c.j()), "key", a.Ji),
        KA(a, new Mv(a.c.j()), "paste", a.Ji));
    b.$a && (a.C = b.$a)
}
    , NA = function(a, b) {
    (a.O = b) && a.b ? a.b.oa(!1) : MA(a)
}
    , KA = function(a, b, c, d) {
    b && H(b, c, d, !1, a)
};
IA.prototype.Pa = function() {
    var a = this.g
        , b = this.a.g;
    var c = ow(this.a.W);
    OA(this, a, b, c, "slc")
}
;
IA.prototype.N = function() {
    var a = this.v
        , b = this.a.h;
    var c = ow(this.a.X.a);
    OA(this, a, b, c, "tlc", !0)
}
;
var PA = function(a, b, c) {
    var d = {};
    d.lpk = c;
    a.G = d;
    a.G.lsa = b;
    Mm(a.w, "webapp", "lsa", b, d)
};
IA.prototype.Fa = function() {
    this.g && this.g.isVisible() ? (PA(this, "lso", "src"),
        om(this.F, 217)) : this.v && this.v.isVisible() && (PA(this, "lso", "tgt"),
        om(this.F, 219))
}
;
IA.prototype.L = function(a, b) {
    PA(this, "lsc", a);
    om(this.F, b ? 218 : 220)
}
;
var OA = function(a, b, c, d, e, f) {
    var g = b.Y()
        , k = QA(a)
        , l = RA(a, f);
    c.call(a.a, g, 4);
    null != b.O && Xb(k, b.O);
    "" != d && (k.emphlang = d);
    b = ow(a.a.L.a);
    f || "" == b || (k.bslang = b);
    "" != l && (k.sugglang = l);
    a.G = k;
    a.G[e] = g;
    Mm(a.w, "webapp", e, g, k)
};
h = IA.prototype;
h.Ll = function(a) {
    this.g.Y() != a.data && SA(this.g, a.data);
    MA(this);
    a.di && (TA(this, "slauto", QA(this)),
        om(this.F, 221))
}
;
h.vl = function() {
    MA(this)
}
;
h.Ul = function(a) {
    this.v.Y() != a.data && SA(this.v, a.data);
    MA(this);
    a.di && (TA(this, "tlauto", QA(this)),
        om(this.F, 222))
}
;
h.Ml = function(a) {
    if (a.data == this.a.a)
        a.target.dispatchEvent({
            type: "clickSelected"
        }),
            a.preventDefault();
    else {
        var b = this.a.g
            , c = RA(this)
            , d = QA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        TA(this, "ssuggclick", d)
    }
}
;
h.Vl = function(a) {
    if (a.data == this.a.b)
        a.target.dispatchEvent({
            type: "clickSelected"
        }),
            a.preventDefault();
    else {
        var b = this.a.h
            , c = RA(this, !0)
            , d = QA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        TA(this, "tsuggclick", d)
    }
}
;
h.Sl = function() {
    var a = QA(this)
        , b = this.a.a
        , c = this.a.b
        , d = b;
    if ("auto" == b && (d = this.a.c,
        !d))
        return;
    (b = this.C()) && this.c && (this.c.b(b),
        yl(this.W, 28));
    TA(this, "swapclick", a);
    a = this.a;
    a.g(c, 5);
    a.h(d, 5);
    a.dispatchEvent("languageSelected");
    Pm(this.w, "swap", 1, "accumulate");
    c = this.F;
    d = O(c, 89);
    a = $k();
    mf(d, 46, a);
    N(c, d)
}
;
h.Ji = function(a) {
    if ("paste" == a.type || 2 > yc(this.c.Y()).length)
        this.a.G = !1
}
;
var QA = function(a, b) {
    var c = {};
    c.sl = a.a.a;
    c.tl = a.a.b;
    b && (c.val = b);
    (b = a.a.c) && (c.dsl = b);
    a.c && (c.ql = yc(a.c.Y()).length);
    return c
}
    , UA = function(a) {
    Pm(a.w, "ssel", a.a.na);
    Pm(a.w, "tsel", a.a.aa)
}
    , TA = function(a, b, c) {
    a.G = c;
    a.w.log(b, c)
}
    , RA = function(a, b) {
    return b ? ow(a.a.O.a) : ow(a.a.K.a)
}
    , MA = function(a) {
    if (a.b && !a.O) {
        var b = a.a.a;
        "auto" == b && (b = a.a.c);
        "zh-CN" == b && "zh-TW" == a.a.w && (b = "zh-TW");
        "" == b || b == a.a.b ? a.b.oa(!1) : a.b.oa(!0)
    }
};
var VA = 0
    , WA = /^[a-zA-Z0-9_\-]*$/
    , XA = function(a) {
    x(a.match(WA), "ControlType.create contains invalid characters" + a);
    return a + "+" + VA++
};
var YA = function(a, b) {
    Jg.call(this);
    this.c = null;
    this.g = b;
    this.a = [];
    if (a > this.g)
        throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++)
        this.a.push(this.b())
};
w(YA, Jg);
var ZA = function(a, b) {
    a.c = b
}
    , aB = function(a, b) {
    a.a.length < a.g ? a.a.push(b) : $A(b)
};
YA.prototype.b = function() {
    return this.c ? this.c() : {}
}
;
var $A = function(a) {
    if (Ma(a))
        if (La(a.Ka))
            a.Ka();
        else
            for (var b in a)
                delete a[b]
};
YA.prototype.T = function() {
    YA.D.T.call(this);
    for (var a = this.a; a.length; )
        $A(a.pop());
    delete this.a
}
;
var dB = function() {
    this.a = [];
    this.b = new uj;
    this.L = this.K = this.O = this.m = 0;
    this.c = new uj;
    this.v = this.C = 0;
    this.Fa = 1;
    this.g = new YA(0,4E3);
    this.g.b = function() {
        return new bB
    }
    ;
    this.G = new YA(0,50);
    this.G.b = function() {
        return new cB
    }
    ;
    var a = this;
    this.w = new YA(0,2E3);
    ZA(this.w, function() {
        return a.Fa++
    });
    this.h = {}
};
dB.prototype.F = Xi("goog.debug.Trace");
var cB = function() {
    this.Kh = this.time = this.count = 0
};
cB.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.Kh && a.push(" [VarAlloc = ", this.Kh, "]");
    return a.join("")
}
;
var bB = function() {}
    , gB = function(a, b, c, d) {
    var e = [];
    -1 == c ? e.push("    ") : e.push(eB(a.b - c));
    e.push(" ", fB(a.b - b));
    0 == a.a ? e.push(" Start        ") : 1 == a.a ? (e.push(" Done "),
        e.push(eB(a.h - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.g && e.push("[VarAlloc ", a.g, "] ");
    return e.join("")
};
bB.prototype.toString = function() {
    return null == this.type ? x(this.c) : "[" + this.type + "] " + this.c
}
;
var hB = {
    nr: !0
};
dB.prototype.vh = function() {
    this.h = {}
}
;
var iB = function(a) {
    a.h.stop && sj(a.b, function(b) {
        this.h.stop(b.id, hB)
    }, a);
    a.b.Wc()
};
dB.prototype.reset = function() {
    iB(this);
    for (var a = 0; a < this.a.length; a++) {
        var b = this.a[a];
        b.id ? xj(this.b, b.id) || (aB(this.w, b.id),
            aB(this.g, b)) : aB(this.g, b)
    }
    this.a.length = 0;
    this.m = Ua();
    this.v = this.C = this.L = this.K = this.O = 0;
    a = this.c.Db();
    for (b = 0; b < a.length; b++) {
        var c = this.c.get(a[b]);
        c.count = 0;
        c.time = 0;
        c.Kh = 0;
        aB(this.G, c)
    }
    this.c.Wc()
}
;
dB.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.a.length; d++) {
        var e = this.a[d];
        1 == e.a && c.pop();
        a.push(" ", gB(e, this.m, b, c.join("")));
        b = e.b;
        a.push("\n");
        0 == e.a && c.push("|  ")
    }
    if (0 != this.b.Ng()) {
        var f = Ua();
        a.push(" Unstopped timers:\n");
        sj(this.b, function(g) {
            a.push("  ", g, " (", f - g.startTime, " ms, started at ", fB(g.startTime), ")\n")
        })
    }
    b = this.c.Db();
    for (d = 0; d < b.length; d++)
        c = this.c.get(b[d]),
        1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.C, "\n", "Total comments created ", this.v, "\n", "Overhead start: ", this.O, " ms\n", "Overhead end: ", this.K, " ms\n", "Overhead comment: ", this.L, " ms\n");
    return a.join("")
}
;
var eB = function(a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
}
    , fB = function(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
};
new dB;
var jB = function() {};
jB.prototype.stopPropagation = function() {
    this.g = !0;
    this.h()
}
;
jB.prototype.c = function() {
    return this.g || !1
}
;
var kB = function(a) {
    this.a = [];
    this.name = a
};
kB.prototype.c = Xi("wireless.events.browser.Dispatcher");
kB.prototype.dispatchEvent = function(a, b) {
    var c = "*" == a.a.charAt(0), d;
    this.handleEvent(a, b) && (d = !0);
    for (var e = (b || "") + this.name + "->", f = -1, g; (!d || c) && (g = this.a[++f]); )
        d = g.dispatchEvent(a, e) || d;
    d || b || Zi(this.c, "Event not handled: " + a.a + " type: " + (a ? a.type : "none") + " customArg: " + a.b);
    return d
}
;
var lB = function(a, b) {
    kB.call(this, b);
    this.g = a;
    this.b = [];
    this.C = {}
};
w(lB, kB);
var mB = new lB(void 0,"root");
za("_e", function(a, b, c, d) {
    a = a || {};
    a.a = b;
    a.b = c;
    a.v = d || a.currentTarget || null;
    a.h = a.stopPropagation;
    a.stopPropagation = jB.prototype.stopPropagation;
    a.c = jB.prototype.c;
    return mB.dispatchEvent(a)
});
var nB = function(a, b, c) {
    x(b, a.name + " - registerHandler: Missing controlType.");
    x(c, a.name + " - registerHandler: Missing handlerFunc. controlType: " + b);
    x(!a.C[b], a.name + " - registerHandler: Handler already defined. controlType: " + b);
    c = a.b.push(c, a.g) - 2;
    a.C[b] = c
};
lB.prototype.handleEvent = function(a, b) {
    var c = this.C[a.a];
    if (p(c))
        return oB(this, a, a.a, a.b, b),
            this.b[c].call(this.b[c + 1], a, a.a, a.b),
            !0
}
;
var oB = function(a, b, c, d, e) {
    ")" == c.slice(-1) || $i(a.c, v(function() {
        var f = "";
        b && (f = "BrowserType=" + b.type,
        b.which && (f += " key=" + b.which),
            f = " (" + f + ")");
        var g = "";
        p(d) && (g = " customArg: " + d);
        return (e || "") + this.name + " handling event: " + c + g + f
    }, a))
};
var pB = function(a, b) {
    this.Code = a;
    this.Name = b
}
    , tB = function(a, b, c) {
    this.qa = b.qa + "_" + a.Code;
    "rcnt" == c ? this.qa += "_r" : "srch" == c && (this.qa += "_s");
    qB[this.qa] = this;
    this.b = b;
    this.a = c;
    this.Za = a.Name;
    this.code = a.Code;
    this.o = Wp(rB, {
        id: this.qa,
        name: a.Name,
        code: a.Code,
        re: sB
    })
}
    , uB = {}
    , vB = (uB.rglr = 0,
    uB.rcnt = 2,
    uB.srch = 3,
    uB);
tB.prototype.j = function() {
    return this.o
}
;
tB.prototype.ue = function(a) {
    this.b.ue(this.Za, this.code, this.a, a)
}
;
var qB = {}
    , wB = function(a) {
    if (a && a.parentNode && a.parentNode.children)
        for (var b = 0, c = 0, d = a.parentNode; b < d.children.length; b++) {
            var e = d.children[b];
            if (xq(e) && Pp(e, "language_list_item_wrapper")) {
                if (a == e)
                    return c;
                c++
            }
        }
    return -1
}
    , xB = function(a, b, c) {
    (b = qB[c]) && b.ue(wB(a.currentTarget))
}
    , yB = null
    , sB = XA("changeLanguage")
    , zB = XA("searchEdited")
    , DB = function(a, b) {
    Jg.call(this);
    this.a = [];
    this.c = [];
    this.g = [];
    this.qa = a;
    this.C = null;
    this.L = [];
    this.ra = new K;
    this.o = F("DIV", "language-list");
    this.h = b;
    this.v = Wp(AB, {
        re: zB,
        vm: this.qa,
        wm: this.h.v
    });
    dg(this.o, this.v);
    W(this.v, !1);
    this.G = new zs;
    this.G.ea(D("back-image-black", this.v));
    this.G.wd(this.h.b);
    Hr(this.G, this.h.b);
    H(this.G, "action", this.ba, !1, this);
    if (b = D("clear-image-black", this.v))
        this.N = new zs,
            this.N.ea(b),
            this.N.wd(this.h.a),
            Hr(this.N, this.h.a),
            H(this.N, "action", this.W, !1, this),
            W(b, !1);
    this.m = F("DIV", "language-list-unfiltered-langs-" + this.qa);
    this.aa = F("DIV", "language_list_languages language_list_" + a);
    dg(this.aa, this.m);
    dg(this.o, this.aa);
    this.b = F("DIV", "language_list_languages language_list_" + a);
    dg(this.o, this.b);
    W(this.b, !1);
    this.R = "";
    this.w = BB(this.h.h, this.m);
    W(this.w, !1);
    this.Ca = BB(this.h.c, this.m);
    CB[this.qa] = this;
    this.xa = 0;
    this.F = L.M();
    this.Na = "";
    this.O = {}
};
w(DB, Jg);
var CB = {}
    , JA = function(a, b, c) {
    H(a.ra, "returned", b, !1, c)
}
    , SA = function(a, b) {
    for (var c = 0; c < a.a.length; c++)
        if (a.a[c].code === b) {
            null != a.C && (a.C.setAttribute("aria-label", a.a[c].Za),
                G(a.C, a.a[c].Za));
            a.V(a.a[c].Za, a.a[c].code);
            a.R = b;
            break
        }
};
DB.prototype.Y = function() {
    return this.R
}
;
var FB = function(a, b, c) {
    EB(CB[c], (new Ug(a)).target.value)
}
    , EB = function(a, b) {
    var c = D("clear-image-black", a.v);
    a.Na = b;
    if ("" === b)
        W(a.m.parentElement, !0),
            W(a.b, !1),
        c && W(c, !1);
    else
        for (W(a.m.parentElement, !1),
                 W(a.b, !0),
             c && W(c, !0),
                 a = kg(a.b),
                 c = 0; c < a.length; c++) {
            var d = a[c]
                , e = b
                , f = Cg(d)
                , g = 0 == zc(e, f.substr(0, e.length));
            W(d, g);
            d = D("language_list_item", d);
            d.innerHTML = f;
            g && (e = f.substr(0, e.length),
                f = f.replace(e, "<b>" + e + "</b>"),
                d.innerHTML = f)
        }
};
DB.prototype.ue = function(a, b, c, d) {
    SA(this, b);
    pm(this.F, "sl_list" == this.qa, vB[c], b, d, "srch" == c ? this.Na : "");
    this.O.ct = (Ua() - this.xa).toString();
    this.O.stp = c;
    this.close()
}
;
DB.prototype.V = function(a, b) {
    if ("auto" != b) {
        a = new pB(b,a);
        for (var c = 0; c < this.c.length; c++)
            if (this.c[c].code === b) {
                GB(this, c, 1);
                break
            }
        b = new tB(a,this,"rcnt");
        ig(this.w, b.j(), 1);
        this.c.splice(0, 0, b);
        5 < this.c.length && GB(this, 5, this.c.length - 5);
        W(this.w, !0)
    }
}
;
var IB = function(a) {
    a.xa = Ua();
    a.ba();
    HB(a, a.a);
    HB(a, a.c);
    HB(a, a.g);
    for (var b = 0; b < a.a.length; b++) {
        var c = a.a[b]
            , d = a.L.includes(c.code);
        V(c.j(), "item-emphasized", d)
    }
    om(a.F, "sl_list" === a.qa ? 82 : 83)
};
DB.prototype.close = function() {
    uh(this.ra, "returned")
}
;
var HB = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        V(b[c].j(), "item-selected", b[c].code === a.R);
        var d = D("language_list_item", b[c].j())
            , e = "";
        b[c].code === a.R && (e = a.h.g.replace("%1$s", b[c].Za));
        d.setAttribute("aria-label", e)
    }
}
    , GB = function(a, b, c) {
    for (var d = b; d < b + c; d++)
        jg(a.c[d].j());
    a.c.splice(b, c);
    W(a.w, 0 < a.c.length)
}
    , KB = function(a, b) {
    GB(a, 0, a.c.length);
    W(a.w, 0 < b.length);
    for (var c = 0; c < b.length && 5 > c; c++) {
        for (var d = new pB(b[c],""), e = 0; e < a.a.length; e++)
            a.a[e].code === b[c] && (d.Name = a.a[e].Za);
        d = JB(a, d, a.w, "rcnt");
        a.c.push(d)
    }
    a.L = b
}
    , MB = function(a) {
    W(a.v, !0);
    a.W();
    LB(a).focus()
}
    , NB = function(a) {
    !xq(a.v) && MB(a)
};
DB.prototype.ba = function() {
    this.W();
    W(this.v, !1)
}
;
DB.prototype.setVisible = function(a) {
    W(this.o, a)
}
;
DB.prototype.isVisible = function() {
    return xq(this.o)
}
;
DB.prototype.W = function() {
    LB(this).value = "";
    EB(this, "")
}
;
var LB = function(a) {
    return fb(a.o.querySelector("#" + a.qa + "-search-box"))
}
    , JB = function(a, b, c, d) {
    d = new tB(b,a,d);
    "auto" === b.Code ? ig(a.m, d.j(), 0) : dg(c, d.j());
    return d
}
    , BB = function(a, b) {
    a = Wp(OB, {
        text: a
    });
    dg(b, a);
    return a
};
DB.prototype.K = function(a) {
    for (var b = 0; b < this.a.length; b++)
        jg(this.a[b].j());
    for (b = 0; b < this.g.length; b++)
        jg(this.g[b].j());
    this.a = [];
    this.g = [];
    if (null != a)
        for (b = 0; b < a.length; b++) {
            var c = JB(this, a[b], this.Ca, "rglr");
            this.a.push(c);
            "auto" != a[b].Code && (c = JB(this, a[b], this.b, "srch"),
                this.g.push(c))
        }
}
;
DB.prototype.T = function() {
    DB.D.T.call(this)
}
;
DB.prototype.j = function() {
    return this.o
}
;
var PB = function(a) {
    this.a = a
};
PB.prototype.ub = function() {
    return null
}
;
PB.prototype.Ta = function() {
    return this.a
}
;
var QB = {
    "* ARIA-CHECKED": !0,
    "* ARIA-COLCOUNT": !0,
    "* ARIA-COLINDEX": !0,
    "* ARIA-DESCRIBEDBY": !0,
    "* ARIA-DISABLED": !0,
    "* ARIA-GOOG-EDITABLE": !0,
    "* ARIA-LABEL": !0,
    "* ARIA-LABELLEDBY": !0,
    "* ARIA-MULTILINE": !0,
    "* ARIA-MULTISELECTABLE": !0,
    "* ARIA-ORIENTATION": !0,
    "* ARIA-PLACEHOLDER": !0,
    "* ARIA-READONLY": !0,
    "* ARIA-REQUIRED": !0,
    "* ARIA-ROLEDESCRIPTION": !0,
    "* ARIA-ROWCOUNT": !0,
    "* ARIA-ROWINDEX": !0,
    "* ARIA-SELECTED": !0,
    "* ABBR": !0,
    "* ACCEPT": !0,
    "* ACCESSKEY": !0,
    "* ALIGN": !0,
    "* ALT": !0,
    "* AUTOCOMPLETE": !0,
    "* AXIS": !0,
    "* BGCOLOR": !0,
    "* BORDER": !0,
    "* CELLPADDING": !0,
    "* CELLSPACING": !0,
    "* CHAROFF": !0,
    "* CHAR": !0,
    "* CHECKED": !0,
    "* CLEAR": !0,
    "* COLOR": !0,
    "* COLSPAN": !0,
    "* COLS": !0,
    "* COMPACT": !0,
    "* COORDS": !0,
    "* DATETIME": !0,
    "* DIR": !0,
    "* DISABLED": !0,
    "* ENCTYPE": !0,
    "* FACE": !0,
    "* FRAME": !0,
    "* HEIGHT": !0,
    "* HREFLANG": !0,
    "* HSPACE": !0,
    "* ISMAP": !0,
    "* LABEL": !0,
    "* LANG": !0,
    "* MAX": !0,
    "* MAXLENGTH": !0,
    "* METHOD": !0,
    "* MULTIPLE": !0,
    "* NOHREF": !0,
    "* NOSHADE": !0,
    "* NOWRAP": !0,
    "* OPEN": !0,
    "* READONLY": !0,
    "* REQUIRED": !0,
    "* REL": !0,
    "* REV": !0,
    "* ROLE": !0,
    "* ROWSPAN": !0,
    "* ROWS": !0,
    "* RULES": !0,
    "* SCOPE": !0,
    "* SELECTED": !0,
    "* SHAPE": !0,
    "* SIZE": !0,
    "* SPAN": !0,
    "* START": !0,
    "* SUMMARY": !0,
    "* TABINDEX": !0,
    "* TITLE": !0,
    "* TYPE": !0,
    "* VALIGN": !0,
    "* VALUE": !0,
    "* VSPACE": !0,
    "* WIDTH": !0
}
    , RB = {
    "* USEMAP": !0,
    "* ACTION": !0,
    "* CITE": !0,
    "* HREF": !0,
    "* LONGDESC": !0,
    "* SRC": !0,
    "LINK HREF": !0,
    "* FOR": !0,
    "* HEADERS": !0,
    "* NAME": !0,
    "A TARGET": !0,
    "* CLASS": !0,
    "* ID": !0,
    "* STYLE": !0
};
var SB = {};
function TB(a) {
    if (A && !Re(9))
        return [0, 0, 0, 0];
    var b = SB.hasOwnProperty(a) ? SB[a] : null;
    if (b)
        return b;
    65536 < Object.keys(SB).length && (SB = {});
    var c = [0, 0, 0, 0];
    b = UB(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = UB(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = UB(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = VB(b, c, /(\[[^\]]+\])/g, 2);
    b = VB(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = VB(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = VB(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = VB(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = VB(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    VB(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return SB[a] = b
}
function VB(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}
function UB(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
}
;var WB = {
    rgb: !0,
    rgba: !0,
    alpha: !0,
    rect: !0,
    image: !0,
    "linear-gradient": !0,
    "radial-gradient": !0,
    "repeating-linear-gradient": !0,
    "repeating-radial-gradient": !0,
    "cubic-bezier": !0,
    matrix: !0,
    perspective: !0,
    rotate: !0,
    rotate3d: !0,
    rotatex: !0,
    rotatey: !0,
    steps: !0,
    rotatez: !0,
    scale: !0,
    scale3d: !0,
    scalex: !0,
    scaley: !0,
    scalez: !0,
    skew: !0,
    skewx: !0,
    skewy: !0,
    translate: !0,
    translate3d: !0,
    translatex: !0,
    translatey: !0,
    translatez: !0
}
    , XB = /[\n\f\r"'()*<>]/g
    , YB = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };
function ZB(a) {
    return x(YB[a])
}
var $B = function(a, b, c) {
    b = yc(b);
    if ("" == b)
        return null;
    if (0 == zc("url(", b.substr(0, 4))) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c)
            a = null;
        else {
            a: {
                b = b.substring(4, b.length - 1);
                for (var d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
            }
            a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != Pc(a) ? 'url("' + Pc(a).replace(XB, ZB) + '")' : null : null
        }
        return a
    }
    if (0 < b.indexOf("(")) {
        if (/"|'/.test(b))
            return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b); )
            if (!(c[1]in WB))
                return null
    }
    return b
};
function aC(a, b) {
    a = n[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}
function bC(a, b) {
    return (a = n[a]) && a.prototype && a.prototype[b] || null
}
var cC = aC("Element", "attributes") || aC("Node", "attributes")
    , dC = bC("Element", "hasAttribute")
    , eC = bC("Element", "getAttribute")
    , fC = bC("Element", "setAttribute")
    , gC = bC("Element", "removeAttribute")
    , hC = bC("Element", "getElementsByTagName")
    , iC = bC("Element", "matches") || bC("Element", "msMatchesSelector")
    , jC = aC("Node", "nodeName")
    , kC = aC("Node", "nodeType")
    , lC = aC("Node", "parentNode")
    , mC = aC("HTMLElement", "style") || aC("Element", "style")
    , nC = aC("HTMLStyleElement", "sheet")
    , oC = bC("CSSStyleDeclaration", "getPropertyValue")
    , pC = bC("CSSStyleDeclaration", "setProperty");
function qC(a, b, c, d) {
    if (a)
        return a.apply(b);
    a = b[c];
    if (!d(a))
        throw Error("Clobbering detected");
    return a
}
function rC(a, b, c, d) {
    if (a)
        return a.apply(b, d);
    if (A && 10 > document.documentMode) {
        if (!b[c].call)
            throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c])
        throw Error("Clobbering detected");
    return b[c].apply(b, d)
}
function sC(a) {
    return qC(cC, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}
function tC(a, b, c) {
    try {
        rC(fC, a, "setAttribute", [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred"))
            throw d;
    }
}
function uC(a) {
    vC(a);
    return qC(mC, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}
function vC(a) {
    if (!(a instanceof HTMLElement))
        throw Error("Not an HTMLElement");
}
function wC(a) {
    vC(a);
    return qC(nC, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}
function xC(a) {
    return qC(jC, a, "nodeName", function(b) {
        return "string" == typeof b
    })
}
function yC(a) {
    return qC(kC, a, "nodeType", function(b) {
        return "number" == typeof b
    })
}
function zC(a) {
    return qC(lC, a, "parentNode", function(b) {
        return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
    })
}
function AC(a, b) {
    return rC(oC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}
function BC(a, b, c) {
    rC(pC, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}
;var CC = A && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g
    , DC = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    }
    , GC = function(a, b, c) {
        var d = [];
        a = EC(yb(a.cssRules));
        y(a, function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
                throw Error("Invalid container id");
            if (!(b && A && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(CC, "#" + b + " $1") : e.selectorText;
                d.push(md(f, FC(e.style, c)))
            }
        });
        return od(d)
    }
    , EC = function(a) {
        return kb(a, function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    }
    , IC = function(a, b, c) {
        a = HC("<style>" + a + "</style>");
        return null == a || null == a.sheet ? pd : GC(a.sheet, void 0 != b ? b : null, c)
    }
    , HC = function(a) {
        if (A && !Re(10) || "function" != typeof n.DOMParser)
            return null;
        a = Pd(ec("Never attached to DOM."), "<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(Bd(a), "text/html").body.children[0]
    }
    , FC = function(a, b) {
        if (!a)
            return $c;
        var c = document.createElement("div").style
            , d = JC(a);
        y(d, function(e) {
            var f = Ae && e in DC ? e : e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            vc(f, "--") || vc(f, "var") || (e = AC(a, e),
                e = $B(f, e, b),
            null != e && BC(c, f, e))
        });
        return Qd(c.cssText || "")
    }
    , LC = function(a) {
        var b = Array.from(rC(hC, a, "getElementsByTagName", ["STYLE"]))
            , c = Cb(b, function(e) {
            return yb(wC(e).cssRules)
        });
        c = EC(c);
        c.sort(function(e, f) {
            e = TB(e.selectorText);
            a: {
                f = TB(f.selectorText);
                for (var g = Math.min(e.length, f.length), k = 0; k < g; k++) {
                    var l = e[k];
                    var m = f[k];
                    l = l > m ? 1 : l < m ? -1 : 0;
                    if (0 != l) {
                        e = l;
                        break a
                    }
                }
                e = e.length;
                f = f.length;
                e = e > f ? 1 : e < f ? -1 : 0
            }
            return -e
        });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode(); )
            y(c, function(e) {
                rC(iC, d, d.matches ? "matches" : "msMatchesSelector", [e.selectorText]) && e.style && KC(d, e.style)
            });
        y(b, jg)
    }
    , KC = function(a, b) {
        var c = JC(a.style)
            , d = JC(b);
        y(d, function(e) {
            if (!(0 <= c.indexOf(e))) {
                var f = AC(b, e);
                BC(a.style, e, f)
            }
        })
    }
    , JC = function(a) {
        Ka(a) ? a = yb(a) : (a = Pb(a),
            vb(a, "cssText"));
        return a
    };
var MC = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]")
    , NC = 0
    , OC = function() {
    this.c = [];
    this.b = [];
    this.a = "data-elementweakmap-index-" + NC++
};
OC.prototype.set = function(a, b) {
    if (rC(dC, a, "hasAttribute", [this.a])) {
        var c = parseInt(rC(eC, a, "getAttribute", [this.a]) || null, 10);
        this.b[c] = b
    } else
        c = this.b.push(b) - 1,
            tC(a, this.a, c.toString()),
            this.c.push(a);
    return this
}
;
OC.prototype.get = function(a) {
    if (rC(dC, a, "hasAttribute", [this.a]))
        return a = parseInt(rC(eC, a, "getAttribute", [this.a]) || null, 10),
            this.b[a]
}
;
OC.prototype.clear = function() {
    this.c.forEach(function(a) {
        rC(gC, a, "removeAttribute", [this.a])
    }, this);
    this.c = [];
    this.b = []
}
;
var PC = Xi("goog.html.sanitizer.SafeDomTreeProcessor")
    , QC = !A || Te(10)
    , RC = !A || null == document.documentMode
    , SC = function() {};
var TC = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var UC = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var YC = function(a) {
    a = a || new VC;
    WC(a);
    this.a = Vb(a.a);
    this.g = Vb(a.C);
    this.h = Vb(a.L);
    this.w = a.w;
    y(a.v, function(b) {
        if (!vc(b, "data-"))
            throw new Xa('Only "data-" attributes allowed, got: %s.',[b]);
        if (vc(b, "data-sanitizer-"))
            throw new Xa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-", b]);
        this.a["* " + b.toUpperCase()] = XC
    }, this);
    this.m = a.c;
    this.c = a.G;
    this.b = null;
    this.v = a.m
};
w(YC, SC);
var ZC = function(a) {
    return function(b, c) {
        return (b = a(yc(b), c)) && "about:invalid#zClosurez" != Pc(b) ? Pc(b) : null
    }
}
    , VC = function() {
    this.a = {};
    y([QB, RB], function(a) {
        y(Pb(a), function(b) {
            this.a[b] = XC
        }, this)
    }, this);
    this.b = {};
    this.v = [];
    this.C = Vb(TC);
    this.L = Vb(UC);
    this.w = !1;
    this.Fa = Uc;
    this.O = this.h = this.K = this.c = Hb;
    this.G = null;
    this.g = this.m = !1
}
    , $C = function(a, b) {
    return function(c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f)
    }
}
    , aD = function(a, b, c, d) {
    a[c] && !b[c] && (a[c] = $C(a[c], d))
}
    , WC = function(a) {
    if (a.g)
        throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    aD(a.a, a.b, "* USEMAP", bD);
    var b = ZC(a.Fa);
    y(["* ACTION", "* CITE", "* HREF"], function(d) {
        aD(this.a, this.b, d, b)
    }, a);
    var c = ZC(a.c);
    y(["* LONGDESC", "* SRC", "LINK HREF"], function(d) {
        aD(this.a, this.b, d, c)
    }, a);
    y(["* FOR", "* HEADERS", "* NAME"], function(d) {
        aD(this.a, this.b, d, Ta(cD, this.K))
    }, a);
    aD(a.a, a.b, "A TARGET", Ta(dD, ["_blank", "_self"]));
    aD(a.a, a.b, "* CLASS", Ta(eD, a.h));
    aD(a.a, a.b, "* ID", Ta(fD, a.h));
    aD(a.a, a.b, "* STYLE", Ta(a.O, c));
    a.g = !0
}
    , gD = function(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase()
}
    , XC = function(a) {
    return yc(a)
}
    , dD = function(a, b) {
    b = yc(b);
    return sb(a, b.toLowerCase()) ? b : null
}
    , bD = function(a) {
    return (a = yc(a)) && "#" == a.charAt(0) ? a : null
}
    , cD = function(a, b, c) {
    return a(yc(b), c)
}
    , eD = function(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f)
    }
    return 0 == d.length ? null : d.join(" ")
}
    , fD = function(a, b, c) {
    return a(yc(b), c)
}
    , hD = function(a, b) {
    var c = b.data;
    (b = zC(b)) && "style" == xC(b).toLowerCase() && !("STYLE"in a.g) && "STYLE"in a.h && (c = nd(IC(c, a.b, v(function(d, e) {
        return this.m(d, {
            Vq: e
        })
    }, a))));
    return document.createTextNode(c)
}
    , iD = function(a) {
    var b = new VC;
    b = new YC(b);
    var c = !("STYLE"in b.g) && "STYLE"in b.h;
    c = "*" == b.c && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ua()).toString(36)) : b.c;
    b.b = c;
    if (QC) {
        c = a;
        if (QC) {
            a = $f("SPAN");
            b.b && "*" == b.c && (a.id = b.b);
            b.v && (c = HC("<div>" + c + "</div>"),
                x(c, "Older browsers that don't support inert parsing should not get to this branch"),
                LC(c),
                c = c.innerHTML);
            c = Pd(ec("Never attached to DOM."), c);
            var d = document.createElement("template");
            if (RC && "content"in d)
                Td(d, c),
                    d = d.content;
            else {
                var e = document.implementation.createHTMLDocument("x");
                d = e.body;
                Td(e.body, c)
            }
            c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
            for (d = MC ? new WeakMap : new OC; e = c.nextNode(); ) {
                c: {
                    var f = b;
                    var g = e;
                    var k = yC(g);
                    switch (k) {
                        case 3:
                            g = hD(f, g);
                            break c;
                        case 1:
                            k = g;
                            1 == yC(k) || Za("Expected Node of type Element but got Node of type %s", yC(k));
                            g = f;
                            f = k;
                            if ("TEMPLATE" == xC(f).toUpperCase())
                                g = null;
                            else {
                                k = xC(f).toUpperCase();
                                if (k in g.g)
                                    var l = null;
                                else
                                    g.h[k] ? l = document.createElement(k) : (l = $f("SPAN"),
                                    g.w && tC(l, "data-sanitizer-original-tag", k.toLowerCase()));
                                if (l) {
                                    var m = l
                                        , q = sC(f);
                                    if (null != q)
                                        for (var r = 0; k = q[r]; r++)
                                            if (k.specified) {
                                                var u = g;
                                                var C = f
                                                    , Q = k
                                                    , M = Q.name;
                                                if (vc(M, "data-sanitizer-"))
                                                    u = null;
                                                else {
                                                    var Qa = xC(C);
                                                    Q = Q.value;
                                                    var Mb = {
                                                        tagName: yc(Qa).toLowerCase(),
                                                        attributeName: yc(M).toLowerCase()
                                                    }
                                                        , Ja = {
                                                        vk: void 0
                                                    };
                                                    "style" == Mb.attributeName && (Ja.vk = uC(C));
                                                    C = gD(Qa, M);
                                                    C in u.a ? (u = u.a[C],
                                                        u = u(Q, Mb, Ja)) : (M = gD(null, M),
                                                        M in u.a ? (u = u.a[M],
                                                            u = u(Q, Mb, Ja)) : u = null)
                                                }
                                                null === u || tC(m, k.name, u)
                                            }
                                    g = l
                                } else
                                    g = null
                            }
                            break c;
                        default:
                            Zi(PC, "Dropping unknown node type: " + k),
                                g = null
                    }
                }
                if (g) {
                    if (1 == yC(g) && d.set(e, g),
                        e = zC(e),
                        f = !1,
                        e)
                        k = yC(e),
                            l = xC(e).toLowerCase(),
                            m = zC(e),
                            11 != k || m ? "body" == l && m && (k = zC(m)) && !zC(k) && (f = !0) : f = !0,
                            k = null,
                            f || !e ? k = a : 1 == yC(e) && (k = d.get(e)),
                        k.content && (k = k.content),
                            k.appendChild(g)
                } else
                    fg(e)
            }
            d.clear && d.clear();
            b = a
        } else
            b = $f("SPAN");
        0 < sC(b).length && (a = $f("SPAN"),
            a.appendChild(b),
            b = a);
        b = (new XMLSerializer).serializeToString(b);
        b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"))
    } else
        b = "";
    return Pd(ec("Output of HTML sanitizer"), b)
};
var jD = function() {};
w(jD, lr);
Ga(jD);
jD.prototype.$c = function() {
    return "menuitem"
}
;
jD.prototype.nb = function(a) {
    var b = iD(a.nd);
    b = bg(document, b);
    var c = b.querySelector("div");
    if (!c)
        throw Error("Invalid item label");
    var d = Dd(a.Ta());
    Ud(c, d);
    Qp(c, ["gt-is-sp", "gt-is-cont"]);
    c = ["DIV", or(this, a)];
    d = F("DIV");
    T(d, "gt-is-ld");
    b = F("DIV", null, b);
    T(b, "gt-is-lb");
    c = c.concat([d, b]);
    if (a.Ob) {
        b = F("A", {
            href: "#"
        }, a.Ob);
        T(b, "gt-is-act");
        var e = new Z;
        e.ea(b);
        Xq(e, a);
        b.addEventListener("mouseup", function(f) {
            e.ob() && f.stopPropagation()
        });
        c.push(b)
    }
    b = F.apply(null, c);
    b.id = Tq(a);
    return a.o = b
}
;
jD.prototype.Zc = function(a) {
    return "DIV" == a.tagName
}
;
jD.prototype.wa = function() {
    return "gt-is-itm"
}
;
var kD = function(a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Z.call(this, a.Ta(), c || jD.M(), d);
    this.ae = a;
    this.nd = b;
    this.Ob = e;
    this.Oa(1, !1)
};
w(kD, Z);
kD.prototype.Ta = function() {
    return this.ae.Ta()
}
;
kD.prototype.ub = function() {
    return this.ae.ub()
}
;
var lD = function(a) {
    Mg.call(this, a)
};
w(lD, Mg);
Kf(window.document);
new K;
var mD = function(a) {
    var b = a.getBoundingClientRect();
    if (A) {
        var c = qq(a);
        a = uq(a);
        b.left = c.x;
        b.right = c.x + a.width;
        b.top = c.a;
        b.bottom = c.a + a.height
    }
    return b
}
    , nD = function(a, b) {
    var c = Kf(a)
        , d = 0;
    if (ya(b))
        d = b;
    else if (A && !Re(9)) {
        if (b = c.a.selection.createRange())
            try {
                var e = a.createTextRange()
                    , f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (m) {}
    } else
        d = a.selectionStart;
    e = "_h#" + Pa(a);
    var g = c.j(e);
    g ? c.zf(g) : g = c.b("PRE", {
        id: e
    });
    g.parentNode || c.a.body.appendChild(g);
    var k = [];
    y(a.value, function(m, q, r) {
        k.push(" " == m && q + 1 != r.length && " " == r[q + 1] ? "\u00a0" : m)
    });
    k = k.join("");
    c.appendChild(g, c.a.createTextNode(String(k.substring(0, d))));
    e = Hg(c, "SPAN");
    e.appendChild(c.a.createTextNode("\u200b"));
    c.appendChild(g, e);
    c.appendChild(g, c.a.createTextNode(String(k.substring(d) + " ")));
    c = Op(a);
    y(c, function(m) {
        T(g, m)
    });
    var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
    y("font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" "), function(m) {
        try {
            var q;
            (q = dq(a, m) || (a.currentStyle ? a.currentStyle[m] : null) || a.style[m]) && (l += m + ":" + q + ";")
        } catch (r) {}
    });
    g.style.cssText = l;
    c = eq(a, "overflowX");
    g.style.overflowX = c && "visible" != c ? c : "auto";
    c = eq(a, "overflowY");
    g.style.overflowY = c && "visible" != c ? c : "auto";
    g.scrollTop = a.scrollTop;
    g.scrollLeft = a.scrollLeft;
    gq(g, lq(a));
    c = mD(e);
    return "INPUT" == a.tagName.toUpperCase() ? new Ff(c.left,Math.ceil(qq(a).a + uq(a).height)) : new Ff(c.left,Math.ceil(c.bottom))
};
var oD = function(a, b) {
    X.call(this, b);
    this.c = a
};
w(oD, X);
oD.prototype.b = "info";
oD.prototype.g = !1;
var pD = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
oD.prototype.Lb = function() {
    return this.b
}
;
var qD = function(a, b) {
    a.c = b;
    if (b = a.j()) {
        var c = a.a;
        c.zf(b);
        c.ti(b, a.c)
    }
};
oD.prototype.isVisible = function() {
    var a = this.j();
    return null != a && Pp(a, "jfk-butterBar-shown")
}
;
oD.prototype.setVisible = function(a) {
    x(this.ya, "setVisible must only be called after the butter bar is rendered.");
    V(this.j(), "jfk-butterBar-shown", a)
}
;
oD.prototype.La = function() {
    this.o = this.a.b("DIV", "jfk-butterBar");
    x(this.j(), "The DOM element for the butter bar cannot be null.");
    var a = this.j();
    a && (Jp(a, "live", "assertive"),
        Jp(a, "atomic", "true"));
    qD(this, this.c);
    this.g = this.g;
    (a = this.j()) && V(a, "jfk-butterBar-mini", this.g);
    a = this.b;
    if (this.Zb()) {
        var b = this.j()
            , c = pD[a];
        U(b, pD[this.b]);
        T(b, c)
    }
    this.b = a
}
;
var rD = function(a, b, c) {
    K.call(this);
    this.w = c.client;
    this.g = a;
    this.a = b;
    this.v = c.hm;
    this.W = !1;
    this.C = c.Gn;
    this.O = c.im;
    this.rb = c.qk || null;
    this.N = c.ia;
    this.ke = c.Ra;
    this.xa = c.Qn;
    this.Ze = c.Co;
    this.K = null;
    this.R = c.Ao;
    this.ra = c.zm;
    this.L = 0;
    this.m = {};
    this.Pc = c.hk;
    this.Jg = c.Tk;
    this.ld = c.Kn;
    this.Xa = c.Sq;
    this.kd = c.mm;
    this.md = !!c.er;
    this.X = !!c.jm;
    this.ba = !!c.Rq;
    this.je = c.Nn || "Did you mean: <div>%1$s</div>";
    this.nd = c.gr || "Translating <div>%1$s</div>";
    this.ie = c.ir || "Undo";
    this.$e = c.lr || 500;
    a = new oD("");
    a.render(Lf("gt-bbar"));
    a.setVisible(!1);
    this.V = a;
    this.c = this.b = this.h = "";
    this.G = Hm.M();
    "async_translate_onebox" == this.w && (this.G.v = "/translate");
    this.aa = new Kq(this);
    this.le = new er(this.v.j());
    this.Ca = ul.M();
    this.F = L.M();
    this.na = !0;
    this.ld && this.aa.listen(this.le, "key", this.$b).listen(this.v, "change", this.hd);
    this.aa.listen(this.a, "action", this.hb).listen(this.v.j(), "blur", this.yb).listen(this.v.j(), "focus", this.ac).listen(this.N, "srcLanguageUpdated", this.Na).listen(this.N, "tgtLanguageUpdated", this.Na);
    null != this.O && this.aa.listen(this.O, "change", this.jd)
};
w(rD, K);
rD.prototype.update = function() {
    0 != this.h.length || this.ba ? this.na && (tD(this, this.g.a[0]),
        this.L++,
        this.m[this.L] = {},
        this.m[this.L][0] = Ua(),
        uD(this.xa, this.h, this.b, this.c, v(this.Id, this, this.h, this.b, this.c, this.L))) : sD(this)
}
;
var wD = function(a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    vD(a, !!$q(a.a))
};
rD.prototype.jd = function() {
    pz(this.O) && sD(this)
}
;
rD.prototype.$b = function(a) {
    if (!this.a.isVisible())
        return !1;
    if (27 == a.keyCode) {
        var b = xD(this.g.a);
        Mm(this.G, this.w, "is", "0", {
            q: this.h,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.F;
        var c = yD(this)
            , d = zD(this);
        N(b, Fm(b, 204, c, d, AD(this), [], null != this.a.h, 0));
        sD(this)
    }
    13 == a.keyCode && -1 == this.a.Ma && (b = xD(this.g.a),
        Mm(this.G, this.w, "is", "8", {
            q: this.h,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        }),
        b = this.F,
        c = yD(this),
        d = zD(this),
        N(b, Fm(b, 205, c, d, AD(this), [], null != this.a.h, 0)),
        sD(this));
    if (36 == a.keyCode || 35 == a.keyCode)
        return !1;
    b = this.a.Ya(a);
    38 != a.keyCode && 40 != a.keyCode || -1 == this.a.Ma || (a = Zw(this.a),
    a != this.a.c && this.v.Y() != a.Ta() && (this.W = !0,
        yl(this.Ca, "is"),
        this.v.b(a.Ta()),
        tD(this)));
    return b
}
;
rD.prototype.hd = function(a) {
    this.W ? this.W = !1 : this.O && pz(this.O) ? sD(this) : "set" == a.changeType ? sD(this) : Di(v(this.Xe, this, a), 0)
}
;
rD.prototype.Xe = function() {
    var a = Jc(this.v.Y(), "\n") ? "" : BD(this.v.Y())
        , b = this.N.a
        , c = this.N.b;
    if (a != this.h || b != this.b || c != this.c)
        this.h = a,
            this.b = b,
            this.c = c,
            this.update()
}
;
var BD = function(a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
rD.prototype.hb = function(a) {
    var b = yD(this)
        , c = zD(this)
        , d = AD(this)
        , e = []
        , f = null != this.a.h;
    if (a.target == this.a.h)
        f = this.F,
            N(f, Fm(f, 185, b, c, d, e, !0, 1)),
            CD(this, "it", "translationSelected", "");
    else if (a.target == this.a.g)
        a = this.F,
            N(a, Fm(a, 181, b, c, d, e, f, 1)),
            CD(this, "ss", "spellingSelected", c);
    else if (a.target.getParent && a.target.getParent() === this.a.g)
        CD(this, "ss", "ignoreSpellingSuggestion", "");
    else if (a.target == this.a.c)
        a = this.F,
            N(a, Fm(a, 183, b, c, d, e, f, 1)),
            CD(this, "ls", "languageSelected", d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var k = 0; k < g.length; k++)
                if (g[k] == a) {
                    g = k;
                    break a
                }
            g = -1
        }
        k = this.F;
        N(k, Fm(k, 142, b, c, d, e, f, g + 1));
        DD(this, a.Ta(), "2")
    }
}
;
var CD = function(a, b, c, d) {
    var e = xD(a.g.a);
    Mm(a.G, a.w, "is", "b", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: e.length,
        s: e,
        si: 0,
        sy: b
    });
    sD(a);
    a.dispatchEvent(new lD(c,d))
}
    , DD = function(a, b, c) {
    for (var d = xD(a.g.a), e = 0, f = 0; f < d.length; f++)
        if (d[f] == b) {
            e = f + 1;
            break
        }
    Mm(a.G, a.w, "is", c, {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: d.length,
        s: d,
        si: e
    });
    a.h = BD(b);
    yl(a.Ca, "is");
    a.v.b(b);
    "2" == c ? (sD(a),
        a.v.j().blur(),
        a.dispatchEvent("suggestionSelected")) : (a.update(),
        a.dispatchEvent("suggestionCopied"))
};
rD.prototype.Na = function() {
    sD(this)
}
;
rD.prototype.Id = function(a, b, c, d, e) {
    this.m[d][1] = Ua();
    0 == this.h.length && !this.ba || 0 == e.length && !this.X ? sD(this) : 0 == e.length ? ED(this) : this.b != b || this.c != c ? ED(this) : this.R ? (this.m[d][2] = Ua(),
    this.K && this.K.abort(),
        this.K = up(this.Ze, this.b, this.c, this.ke, e, v(this.Jd, this, a, d, e), "is", void 0, this.$e)) : FD(this, a, lb(e, function(f) {
        return new zw(f)
    }), d)
}
;
rD.prototype.Jd = function(a, b, c, d, e) {
    null == d ? (GD(this, a, c, e),
        nm(this.F, 145)) : (this.m[b][3] = Ua(),
        c.length == d.length ? FD(this, a, lb(c, function(f, g) {
            return new zw(c[g],d[g])
        }), b) : (HD(this),
            nm(this.F, 146),
            FD(this, a, lb(c, function(f) {
                return new zw(f)
            }), b)))
}
;
var ED = function(a) {
    ID(a.a, []);
    a.g.a = [];
    tD(a);
    var b = a.a;
    b.v && 0 != b.v.length || vD(a, !1)
}
    , sD = function(a) {
    JD(a.xa);
    a.K && a.K.abort();
    vD(a, !1);
    for (var b = a.a, c = []; b.v && 0 != b.v.length; )
        c.push(b.removeChild(ar(b, 0), !0));
    b.b = [];
    b.c = null;
    b.g = null;
    b.h = null;
    b = a.g;
    b.a = [];
    b.b = null;
    b.c = null;
    tD(a)
}
    , FD = function(a, b, c, d) {
    var e = a.m[d][1] - a.m[d][0];
    if (a.R)
        var f = a.m[d][3] - a.m[d][2];
    delete a.m[d];
    if (0 != c.length) {
        var g = c;
        c.length > a.ra && (g = Ab(c, 0, a.ra));
        a.g.a = g;
        c = {};
        a.R && (c.td = f);
        if (a.L > d)
            KD(a, !1),
                LD(a, e, b, g, c, !1);
        else {
            var k = [];
            y(g, function(m, q) {
                q = new Bw(m,this.Pc,this.Jg,0 == q && !this.X,this.R,this.rb);
                k.push(q);
                if ((q = this.g.b) && q.Ta() == m.Ta()) {
                    m = "";
                    var r = void 0 === r ? !1 : r;
                    q = xD(this.g.a);
                    sb(q, m) && (m = "");
                    m ? (m = new PB(m),
                        r = new kD(m,r ? this.nd : this.je,void 0,void 0,r ? this.ie : void 0),
                        this.g.b = m,
                        MD(this.a, r),
                        ND(this.a, !0),
                        vD(this, !0)) : (this.g.b = null,
                        MD(this.a, null),
                        vD(this, !!$q(this.a)))
                }
            }, a);
            ID(a.a, k);
            6 < OD(a.g) && wD(a);
            a.X && ND(a.a, !!a.a.h);
            tD(a, g[0]);
            if (!a.kd) {
                d = Vf(Kf(document).a);
                f = nD(a.v.j(), a.v.Y().length);
                var l = lq(og(a.a.j()));
                f.x = 0;
                f.a += d.a;
                f.a -= l.a;
                gq(a.a.j(), f)
            }
            a.Pc && PD(a);
            QD(a);
            vD(a, !0);
            KD(a, !0);
            LD(a, e, b, g, c, !0)
        }
    }
}
    , vD = function(a, b) {
    a.Xa || a.a.setVisible(b)
}
    , yD = function(a) {
    var b = [];
    a = a.a.b;
    for (var c = 0; c < a.length; c++)
        b.push([a[c].Ta(), a[c].ub()]);
    return b
}
    , zD = function(a) {
    return a.a.g ? a.a.g.Ta() : ""
}
    , AD = function(a) {
    a = a.a.c ? a.a.c.ae.a : "";
    return "" != a ? [a] : []
}
    , KD = function(a, b) {
    var c = a.F
        , d = yD(a)
        , e = zD(a);
    N(c, Fm(c, b ? 141 : 203, d, e, AD(a), [], null != a.a.h, 0))
}
    , tD = function(a, b) {
    if (a.C)
        if (b) {
            var c = a.v.Y();
            vc(b.Ta(), c) ? a.C.b(b.Ta()) : a.C.b(c)
        } else
            a.C.b("")
}
    , PD = function(a) {
    y(a.a.b, function(b) {
        b.Vb && H(b.Vb, "action", this.Ob, !1, this)
    }, a)
};
rD.prototype.Ob = function(a) {
    var b = this.a.b;
    y(b, function(c, d) {
        if (c.Vb == a.target) {
            var e = F("SPAN", null, (window.MSG_SUGGESTION_FLAGGED || "").replace("%1$s", c.Ta()))
                , f = F("SPAN", null, " ");
            c = F("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = F("DIV", null, e, f, c);
            qD(this.V, e);
            this.V.setVisible(!0);
            H(c, "click", this.xb, !1, this);
            RD(this, d + 1, b)
        }
    }, this)
}
;
var QD = function(a) {
    y(a.a.b, function(b) {
        b.qc && H(b.qc, "action", this.eb, !1, this)
    }, a)
};
rD.prototype.eb = function(a) {
    y(this.a.b, function(b) {
        b.qc == a.target && DD(this, b.Ta(), "a")
    }, this)
}
;
rD.prototype.xb = function() {
    this.V.setVisible(!1)
}
;
rD.prototype.yb = function() {
    this.a && (this.md ? (ED(this),
        this.na = !1) : vD(this, !1));
    this.C && this.C.b("")
}
;
rD.prototype.ac = function() {
    this.na = !0
}
;
var RD = function(a, b, c) {
    c = lb(c, function(d) {
        return d.Ta()
    });
    Mm(a.G, a.w, "is", "3", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c,
        si: b
    })
}
    , xD = function(a) {
    return a ? lb(a, function(b) {
        return b ? b.Ta() : ""
    }) : []
}
    , SD = function(a) {
    if (!a)
        return [];
    a = lb(a, function(b) {
        return b ? b.ub() : ""
    });
    return kb(a, function(b) {
        return null != b
    })
}
    , LD = function(a, b, c, d, e, f) {
    d = xD(d);
    b = {
        q: c,
        sl: a.b,
        tl: a.c,
        sd: b,
        sn: d.length,
        s: d
    };
    for (var g in e)
        b[g] = e[g];
    Mm(a.G, a.w, "is", f ? "1" : "7", b)
}
    , HD = function(a) {
    var b = a.g.a
        , c = xD(b);
    b = SD(b);
    Mm(a.G, a.w, "is", "6", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c,
        tn: b.length,
        st: b
    })
}
    , GD = function(a, b, c, d) {
    b = {
        q: b,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c
    };
    d && (b.ec = d);
    Mm(a.G, a.w, "is", "9", b)
};
var TD = function(a, b, c, d) {
    var e = jt();
    this.g = a;
    this.C = b;
    this.O = c;
    this.w = d;
    this.G = void 0 === e ? !1 : e;
    this.a = "";
    this.b = new Tr(this.K,300,this);
    this.c = this.h = 0;
    this.m = !1;
    this.v = Hm.M();
    H(this.g, "change", this.L, !1, this);
    this.b.start(void 0)
};
TD.prototype.L = function(a) {
    var b = "";
    a.changeType && (b = a.changeType);
    "paste" == b && (this.h++,
        Pm(this.v, "pc", 1, "accumulate"));
    "set" == b && this.c++;
    this.b.start(void 0)
}
;
TD.prototype.K = function() {
    if (this.C) {
        this.b.stop();
        var a = yc(this.g.Y());
        if (a != this.a)
            if (this.w && this.w())
                this.b.start(300);
            else if (!(2E3 < ce(a).length && 0 == this.h && 0 == this.c) || this.G) {
                this.c = this.h = 0;
                var b = a.substring(0, this.a.length) == this.a;
                (a = this.a.substring(0, a.length) == a) || 0 != this.a.length && b && !this.m ? Pm(this.v, "otf", "2") : Pm(this.v, "otf", "1");
                this.m = a;
                this.O()
            }
    }
}
;
TD.prototype.reset = function(a) {
    this.b.stop();
    this.a = yc(this.g.Y());
    a || (this.m = !1)
}
;
var UD = function() {
    K.call(this);
    this.a = 0;
    this.endTime = this.startTime = null
};
w(UD, K);
UD.prototype.c = function() {
    this.b("begin")
}
;
UD.prototype.g = function() {
    this.b("end")
}
;
UD.prototype.b = function(a) {
    this.dispatchEvent(a)
}
;
var VD = function(a, b) {
    Ia(b) || (b = [b]);
    x(0 < b.length, "At least one Css3Property should be specified.");
    b = lb(b, function(c) {
        if (t(c))
            return c;
        cb(c, "Expected css3 property to be an object.");
        var d = c.fj + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
        x(c.fj && ya(c.duration) && c.timing && ya(c.delay), "Unexpected css3 property value: %s", d);
        return d
    });
    bq(a, "transition", b.join(","))
}
    , WD = Jb(function() {
    if (A)
        return Re("10.0");
    var a = $f("DIV")
        , b = Ae ? "-webkit" : ze ? "-moz" : A ? "-ms" : we ? "-o" : null
        , c = {
        transition: "opacity 1s linear"
    };
    b && (c[b + "-transition"] = "opacity 1s linear");
    Ud(a, Jd("div", {
        style: c
    }));
    a = a.firstChild;
    x(a.nodeType == Node.ELEMENT_NODE);
    b = a.style[oe("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[aq(a, "transition")] || "")
});
var XD = function(a, b, c, d, e) {
    UD.call(this);
    this.o = a;
    this.m = b;
    this.w = c;
    this.h = d;
    this.G = Ia(e) ? e : [e]
};
w(XD, UD);
h = XD.prototype;
h.play = function() {
    if (1 == this.a)
        return !1;
    this.c();
    this.b("play");
    this.startTime = Ua();
    this.a = 1;
    if (WD())
        return bq(this.o, this.w),
            this.v = Di(this.fn, void 0, this),
            !0;
    this.Sg(!1);
    return !1
}
;
h.fn = function() {
    uq(this.o);
    VD(this.o, this.G);
    bq(this.o, this.h);
    this.v = Di(v(this.Sg, this, !1), 1E3 * this.m)
}
;
h.stop = function() {
    1 == this.a && this.Sg(!0)
}
;
h.Sg = function(a) {
    bq(this.o, "transition", "");
    Ei(this.v);
    bq(this.o, this.h);
    this.endTime = Ua();
    this.a = 0;
    a ? this.b("stop") : this.b("finish");
    this.g()
}
;
h.T = function() {
    this.stop();
    XD.D.T.call(this)
}
;
var ZD = function(a, b) {
    K.call(this);
    this.c = new Kq(this);
    a = a || null;
    YD(this);
    this.o = a;
    b && (this.Ud = b)
};
w(ZD, K);
h = ZD.prototype;
h.o = null;
h.ci = !0;
h.bi = null;
h.Xd = !1;
h.lh = -1;
h.Ud = "toggle_display";
h.Lb = function() {
    return this.Ud
}
;
h.j = function() {
    return this.o
}
;
h.setAutoHide = function(a) {
    YD(this);
    this.ci = a
}
;
var YD = function(a) {
    if (a.Xd)
        throw Error("Can not change this state of the popup while showing.");
};
ZD.prototype.isVisible = function() {
    return this.Xd
}
;
ZD.prototype.setVisible = function(a) {
    this.v && this.v.stop();
    this.h && this.h.stop();
    if (a) {
        if (!this.Xd && this.dispatchEvent("beforeshow")) {
            if (!this.o)
                throw Error("Caller must call setElement before trying to show the popup");
            this.m();
            a = Jf(this.o);
            if (this.ci)
                if (this.c.listen(a, "mousedown", this.bj, !0),
                    A) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName; ) {
                        try {
                            var c = ug(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.c.listen(a, "mousedown", this.bj, !0);
                    this.c.listen(a, "deactivate", this.aj)
                } else
                    this.c.listen(a, "blur", this.aj);
            "toggle_display" == this.Ud ? (this.o.style.visibility = "visible",
                W(this.o, !0)) : "move_offscreen" == this.Ud && this.m();
            this.Xd = !0;
            this.lh = Ua();
            this.v ? (ih(this.v, "end", this.Ci, !1, this),
                this.v.play()) : this.Ci()
        }
    } else
        $D(this)
}
;
ZD.prototype.m = Fa;
var $D = function(a, b) {
    a.Xd && a.dispatchEvent({
        type: "beforehide",
        target: b
    }) && (a.c && Pq(a.c),
        a.Xd = !1,
        Ua(),
        a.h ? (ih(a.h, "end", Ta(a.ki, b), !1, a),
            a.h.play()) : a.ki(b))
};
h = ZD.prototype;
h.ki = function(a) {
    "toggle_display" == this.Ud ? this.dm() : "move_offscreen" == this.Ud && (this.o.style.top = "-10000px");
    this.dispatchEvent({
        type: "hide",
        target: a
    })
}
;
h.dm = function() {
    this.o.style.visibility = "hidden";
    W(this.o, !1)
}
;
h.Ci = function() {
    this.dispatchEvent("show")
}
;
h.bj = function(a) {
    a = a.target;
    pg(this.o, a) || aE(this, a) || 150 > Ua() - this.lh || $D(this, a)
}
;
h.aj = function(a) {
    var b = Jf(this.o);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement,
        !a || pg(this.o, a) || "BODY" == a.tagName)
            return
    } else if (a.target != b)
        return;
    150 > Ua() - this.lh || $D(this)
}
;
var aE = function(a, b) {
    return nb(a.bi || [], function(c) {
        return b === c || pg(c, b)
    })
};
ZD.prototype.T = function() {
    ZD.D.T.call(this);
    this.c.Ka();
    Kg(this.v);
    Kg(this.h);
    delete this.o;
    delete this.c;
    delete this.bi
}
;
var bE = function(a, b) {
    this.L = b || void 0;
    ZD.call(this, a)
};
w(bE, ZD);
bE.prototype.m = function() {
    if (this.L) {
        var a = !this.isVisible() && "move_offscreen" != this.Lb()
            , b = this.j();
        a && (b.style.visibility = "hidden",
            W(b, !0));
        this.L.b(b, 8, this.Yi);
        a && W(b, !1)
    }
}
;
var cE = function(a, b) {
    bE.call(this, a);
    this.g = b;
    this.a = 0;
    this.b = null;
    this.w = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    T(this.j(), "round-trip-popup");
    T(this.g, "round-trip-content")
};
w(cE, bE);
cE.prototype.show = function() {
    Ei(this.w);
    0 == this.a ? this.w = Di(v(this.C, this, 1), 300) : this.C(1)
}
;
cE.prototype.K = function() {
    Ei(this.w);
    1 == this.a ? ih(this.b, "finish", v(this.K, this)) : 0 == this.a && (this.w = Di(v(this.C, this, -1), 200))
}
;
cE.prototype.C = function(a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(uq(this.g).width);
        Aq(this.j()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (WD()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt(dq(this.g, "left"), 10);
                this.G();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new XD(this.g,b,{
                left: d + "px"
            },{
                left: c + "px"
            },"left " + b + "s");
            this.b.play();
            ih(this.b, "finish", v(this.G, this));
            -1 == a ? ih(this.b, "finish", v(this.setVisible, this, !1)) : this.setVisible(!0)
        } else
            bq(this.g, "left", c + "px"),
                this.setVisible(1 == a ? !0 : !1)
    }
}
;
cE.prototype.G = function() {
    0 != this.a && (this.b.stop(),
        Di(v(rh, this, this.b)),
        this.a = 0,
        this.b = null)
}
;
var eE = function(a) {
    this.o = a || null;
    this.a = F("DIV", "gt-hl-layer", ag(""));
    this.b = null;
    this.o && (gg(this.a, this.o),
        dE(this))
}
    , gE = function(a, b, c, d, e) {
    var f = d || "gt-hl-text";
    d = a.o && (a.o.value || Cg(a.o));
    dE(a);
    fg(a.a);
    if (b != c || e) {
        if (0 < b) {
            var g = d.substring(0, b);
            fE(a.a, g, 0, e)
        }
        b < c && (g = d.substring(b, c),
            f = F("SPAN", f),
            fE(f, g, b, e),
            dg(a.a, f));
        c < d.length && (g = d.substring(c),
            fE(a.a, g, c, e))
    }
}
    , dE = function(a) {
    var b;
    var c = a.o
        , d = Jf(c);
    (b = A && c.currentStyle) && Sf(Kf(d).a) && "auto" != b.width && "auto" != b.height && !b.boxSizing ? (d = Eq(c, b.width, "width", "pixelWidth"),
        c = Eq(c, b.height, "height", "pixelHeight"),
        b = new Hf(d,c)) : (b = new Hf(c.offsetWidth,c.offsetHeight),
        d = Hq(c),
        c = nq(c),
        b = new Hf(b.width - c.left - d.left - d.right - c.right,b.height - c.top - d.top - d.bottom - c.bottom));
    c = a.a;
    d = Jf(c);
    var e = Sf(Kf(d).a);
    !A || Re("10") || e && Re("8") ? Dq(c, b, "content-box") : (d = c.style,
        e ? (d.pixelWidth = b.width,
            d.pixelHeight = b.height) : (e = Hq(c),
            c = nq(c),
            d.pixelWidth = b.width + c.left + e.left + e.right + c.right,
            d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
    d = lq(a.o);
    c = a.a;
    b = d.x;
    d = d.a;
    e = lq(c);
    b instanceof Ff && (d = b.a,
        b = b.x);
    b = $a(b) - e.x;
    gq(c, c.offsetLeft + b, c.offsetTop + (Number(d) - e.a));
    c = Hq(a.o);
    bq(a.a, "paddingLeft", c.left + "px");
    bq(a.a, "paddingRight", c.right + "px");
    a.a.dir = a.o.dir
}
    , fE = function(a, b, c, d) {
    d = d || [];
    for (var e = 0, f; f = d[e]; e++)
        if (!(0 > f.xe - c)) {
            if (f.xe - c >= b.length)
                break;
            if (0 < f.xe - c) {
                var g = b.substring(0, f.xe - c);
                hE(a, g)
            }
            var k = f.className || "gt-hl-text";
            g = b.substring(f.xe - c, f.Gh - c);
            k = F("SPAN", k);
            hE(k, g);
            dg(a, k);
            b = b.substring(f.Gh - c);
            c = f.Gh
        }
    b && hE(a, b)
}
    , hE = function(a, b) {
    b = ae(b).split("\n");
    for (var c = 0, d = b.length; c < d; c++)
        0 < c && dg(a, F("BR")),
            dg(a, ag(b[c]))
};
var iE = function(a, b) {
    this.a = a instanceof Ff ? a : new Ff(a,b)
};
w(iE, bs);
iE.prototype.b = function(a, b, c, d) {
    x(a);
    var e = iq(Jf(a))
        , f = this.a.x + e.x;
    e = this.a.a + e.a;
    var g = Yr(a);
    f -= g.x;
    e -= g.a;
    $r(new Ff(f,e), a, b, c, null, null, d)
}
;
var jE = function(a, b) {
    iE.call(this, a, b)
};
w(jE, iE);
jE.prototype.g = 0;
jE.prototype.c = function(a) {
    this.g = a
}
;
jE.prototype.b = function(a, b, c, d) {
    var e = hq(a);
    e = mq(e);
    var f = Uf(Kf(a).a);
    f = new Ff(this.a.x + f.scrollLeft,this.a.a + f.scrollTop);
    var g = b
        , k = $r(f, a, g, c, e, 10, d);
    if (0 != (k & 496)) {
        if (k & 16 || k & 32)
            g ^= 4;
        if (k & 64 || k & 128)
            g ^= 1;
        k = $r(f, a, g, c, e, 10, d);
        0 != (k & 496) && $r(f, a, b, c, e, this.g, d)
    }
}
;
var kE = function(a, b) {
    rx.call(this, a, b);
    this.oe = !0;
    dx(this, !0);
    this.setVisible(!1, !0);
    this.b = new uj
};
w(kE, rx);
h = kE.prototype;
h.Dj = !1;
h.Ui = 0;
h.Cb = null;
h.Da = function(a) {
    kE.D.Da.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && lE(this, this.a.j(a), 1)
}
;
h.Z = function() {
    kE.D.Z.call(this);
    this.b.forEach(this.ff, this);
    var a = Y(this);
    a.listen(this, "action", this.sh);
    a.listen(this.a.a, "mousedown", this.Ca, !0)
}
;
var lE = function(a, b, c, d, e, f) {
    b && xj(a.b, Pa(b)) || (c = a.Bg(b, c, d, e, f),
    a.ya && a.ff(c),
        b = Ta(a.Xm, b),
    a.j() && Y(a).listen(a.j(), "keydown", b))
};
h = kE.prototype;
h.Xm = function(a, b) {
    if (27 == b.keyCode)
        a.focus();
    else if (a = ar(this, this.Ma)) {
        a = a.j();
        var c = new Ug(b.b,a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode)
            Zg(a) ? Sh(a, "keydown", !1, c) : th(a, "keydown", !1, c);
        32 == b.keyCode && this.Ic()
    }
}
;
h.Bg = function(a, b, c, d, e) {
    if (!a)
        return null;
    b = {
        o: a,
        vj: b,
        Cm: c,
        rd: d ? "contextmenu" : "mousedown",
        Yi: e
    };
    this.b.set(Pa(a), b);
    return b
}
;
h.ff = function(a) {
    Y(this).listen(a.o, a.rd, this.ag);
    "contextmenu" != a.rd && Y(this).listen(a.o, "keydown", this.$m)
}
;
h.nf = function() {
    if (this.ya)
        for (var a = this.b.Db(), b = 0; b < a.length; b++)
            this.Dg(this.b.get(a[b]));
    this.b.Wc()
}
;
h.Dg = function(a) {
    Y(this).Ga(a.o, a.rd, this.ag)
}
;
h.Nf = function(a, b, c) {
    b = p(a.vj) ? new vx(a.o,a.vj,!0) : new jE(b,c);
    b.c && b.c(5);
    var d = a.Cm;
    c = a.Yi;
    var e = a.o;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > Ua() - this.Ui);
    f && this.Dj ? this.Ic() : (this.Cb = e || null,
    this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
    a || (this.j().style.visibility = "hidden"),
        W(this.j(), !0),
        b.b(this.j(), d, c),
    a || (this.j().style.visibility = "visible"),
        this.Qb(-1),
        this.setVisible(!0)))
}
;
h.Ic = function() {
    this.isVisible() && (this.setVisible(!1),
    this.isVisible() || (this.Ui = Ua(),
        this.Cb = null))
}
;
h.sh = function() {
    this.Ic()
}
;
h.ag = function(a) {
    mE(this, a)
}
;
h.$m = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || mE(this, a);
    40 == a.keyCode && $w(this)
}
;
var mE = function(a, b) {
    for (var c = a.b.Db(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.o == b.a) {
            a.Nf(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
kE.prototype.Ca = function(a) {
    this.isVisible() && !this.nc(a.target) && this.Ic()
}
;
kE.prototype.Ef = function(a) {
    kE.D.Ef.call(this, a);
    this.Ic()
}
;
kE.prototype.T = function() {
    kE.D.T.call(this);
    this.b && (this.b.Wc(),
        delete this.b)
}
;
var nE = function(a, b, c, d) {
    return new XD(a,.218,{
        opacity: c
    },{
        opacity: d
    },{
        fj: "opacity",
        duration: .218,
        timing: b,
        delay: 0
    })
};
var oE = function(a) {
    K.call(this);
    this.o = a;
    a = A ? "focusout" : "blur";
    this.a = H(this.o, A ? "focusin" : "focus", this, !A);
    this.b = H(this.o, a, this, !A)
};
w(oE, K);
oE.prototype.handleEvent = function(a) {
    var b = new Ug(a.b);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
}
;
oE.prototype.T = function() {
    oE.D.T.call(this);
    qh(this.a);
    qh(this.b);
    delete this.o
}
;
var pE = function(a, b, c) {
    kE.call(this, b, c);
    this.w = new uj;
    this.g = a || 5;
    this.C = null;
    this.K = !1;
    this.h = Array(this.g);
    this.V = Array(this.g);
    this.R = Hm.M();
    this.F = L.M();
    this.W = this.m = this.zc = null;
    this.Dj = !0
};
w(pE, kE);
var qE = "";
pE.prototype.La = function() {
    pE.D.La.call(this);
    for (var a = 0; a < this.g; ++a)
        this.kb(new mx(""), !0);
    "" != qE && (this.m = new mx(qE),
        Fr(this.m, "gt-edit-menuitem"),
        this.kb(this.m, !0))
}
;
pE.prototype.render = function(a) {
    pE.D.render.call(this, a);
    T(this.j(), "alt-menu")
}
;
pE.prototype.Bh = function(a) {
    a = this.w.get(Pa(a));
    for (var b = 0; b < I(a, 2) && b < this.g; ++b) {
        var c = ar(this, b);
        c.g(J(Go(a, b), 0));
        c.na = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b)
        ar(this, b).setVisible(!1);
    this.m && this.m.setVisible(!0, !0)
}
;
var rE = function(a, b, c) {
    a.w.set(Pa(b), c);
    lE(a, b, 9, 8, !1, new Yp(-2,1,-2,1))
};
h = pE.prototype;
h.nf = function() {
    pE.D.nf.call(this);
    null != this.zc && this.zc.b();
    this.w.Wc()
}
;
h.setVisible = function(a, b) {
    var c = this.Cb;
    this.W = c;
    if (a && null != c) {
        sE(this, c);
        Qm(this.R, "altshow");
        var d = this.F;
        N(d, O(d, 207))
    } else
        null != this.C && gE(this.C, 0, 0);
    null != c && (a ? this.Cg(c) : this.zg(c));
    b = pE.D.setVisible.call(this, a, b);
    a && null != this.j() && Cq(this.j(), !1);
    return b
}
;
h.tb = function() {
    if (null != this.W) {
        var a = Cg(this.W);
        if (null != a)
            return a
    }
    return ""
}
;
h.Ic = function() {
    pE.D.Ic.call(this);
    if (this.K)
        for (var a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            Ei(b.w);
            b.G();
            b.C(-1);
            b.G();
            b.setVisible(!1)
        }
}
;
h.Cg = function(a) {
    T(a, "trans-target");
    null === this.zc ? a.title = "" : this.zc.b(a)
}
;
h.zg = function(a) {
    U(a, "trans-target");
    null === this.zc ? a.title = "" : this.zc.a(a)
}
;
h.Ya = function(a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
        return !1;
    var b = pE.D.Ya.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = Aq(this.Cb.parentNode.parentNode)
            , d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
            d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
            d = !0;
        if (this.sg(d) && (c = this.Cb,
        (c = d ? p(c.nextElementSibling) ? c.nextElementSibling : lg(c.nextSibling, !0) : p(c.previousElementSibling) ? c.previousElementSibling : lg(c.previousSibling, !1)) && c != this.Cb))
            return this.Ic(),
                this.lj(d),
                this.Nf(c ? this.b.get(Pa(c)) : null, 0, 0),
                tE(this),
                a.preventDefault(),
                a.stopPropagation(),
                !0
    }
    return b
}
;
h.Nf = function(a, b, c) {
    Aq((a.o || this.Cb).parentNode.parentNode) ? bq(this.j(), "direction", "rtl") : bq(this.j(), "direction", "");
    if (this.K)
        for (var d = 0; d < this.h.length; d++)
            uE(this, d),
                G(this.h[d].g, "...");
    this.Bh(a.o);
    pE.D.Nf.call(this, a, b, c)
}
;
var vE = function(a, b, c) {
    !a.K || b >= a.g || "" == c || (G(a.h[b].g, c),
        uE(a, b))
}
    , uE = function(a, b) {
    as(ar(a, b).j(), 12, a.h[b].j(), 8, new Ff(1,0))
};
h = pE.prototype;
h.Fe = function(a) {
    pE.D.Fe.call(this, a);
    var b = this.Cb;
    if (null != b) {
        Qm(this.R, "altmenuhl");
        var c = this.F;
        N(c, O(c, 209));
        sE(this, b);
        a = this.vf(a.target);
        -1 != a && a != this.g && (Ei(this.V[a]),
            this.V[a] = Di(this.xm, 300, this),
        this.K && (b = this.h[a],
            Aq(this.Cb.parentNode.parentNode) ? (T(b.j(), "rtl"),
                bq(b.j(), "direction", "rtl")) : (U(b.j(), "rtl"),
                bq(b.j(), "direction", "")),
            uE(this, a),
            b.show()))
    }
}
;
h.xm = function() {
    Qm(this.R, "altmenuhold");
    var a = this.F;
    N(a, O(a, 208))
}
;
h.Ug = function(a) {
    pE.D.Ug.call(this, a);
    a = this.vf(a.target);
    -1 != a && a != this.g && (Ei(this.V[a]),
    this.K && this.h[a].K())
}
;
h.vf = function(a) {
    return cr(this, a)
}
;
h.sg = function() {
    return !0
}
;
h.lj = function() {}
;
h.Bg = function(a, b, c, d, e) {
    (a = pE.D.Bg.call(this, a, b, c, d, e)) && "mousedown" == a.rd && (a.rd = "click");
    return a
}
;
h.ff = function(a) {
    pE.D.ff.call(this, a);
    Y(this).listen(a.o, "mouseover", this.xa);
    Y(this).listen(a.o, "mouseout", this.N);
    Y(this).listen(a.o, "contextmenu", this.ba);
    Y(this).listen(a.o, "mousemove", this.ra)
}
;
h.Dg = function(a) {
    pE.D.Dg.call(this, a);
    Y(this).Ga(a.o, "mouseover", this.xa);
    Y(this).Ga(a.o, "mouseout", this.N);
    Y(this).Ga(a.o, "contextmenu", this.ba);
    Y(this).Ga(a.o, "mousemove", this.ra)
}
;
var sE = function(a, b) {
    if (null != a.C && (b = a.w.get(Pa(b))) && (a = a.C,
        a.b))
        for (var c = a.o && (a.o.value || Cg(a.o)), d = -1, e = -1, f = !1, g = 0; g < I(a.b, 5); g++) {
            var k = qp(a.b, g);
            if (0 != I(k, 2) && (0 == Jh(k, 5) && (f = c.indexOf(J(k, 4), e + 1),
                0 <= f ? (d = f,
                    e = d + J(k, 4).length,
                    f = !0) : f = !1),
            qp(a.b, g).Ab() == b.Ab())) {
                if (f) {
                    c = [];
                    for (e = 0; e < I(b, 3); ++e)
                        c.push({
                            xe: d + Jh(Ho(b, e), 0),
                            Gh: d + Jh(Ho(b, e), 1)
                        });
                    gE(a, 0, 0, void 0, c)
                } else
                    d = c.indexOf(J(b, 0)),
                    0 <= d && gE(a, d, d + J(b, 0).length);
                break
            }
        }
}
    , wE = function(a, b) {
    b ? tj(a.b.lc(!1), function(c) {
        "" == this.a.xi(c.o) && (T(c.o, "trans-target-empty"),
            this.a.Af(c.o, "_"));
        return !0
    }, a) : tj(a.b.lc(!1), function(c) {
        Pp(c.o, "trans-target-empty") && (U(c.o, "trans-target-empty"),
            this.a.Af(c.o, ""));
        return !0
    }, a)
};
pE.prototype.xa = function(a) {
    !eA() && this.isEnabled() && (T(a.target, "trans-target-highlight"),
        sE(this, a.target),
        wE(this, !0),
        Qm(this.R, "althighlight"),
        a = this.F,
        N(a, O(a, 206)))
}
;
pE.prototype.N = function(a) {
    U(a.target, "trans-target-highlight");
    null == this.C || this.isVisible() || gE(this.C, 0, 0);
    wE(this, !1)
}
;
pE.prototype.ra = function(a) {
    eA() && this.N(a)
}
;
pE.prototype.ba = function(a) {
    eA() || (this.N(a),
        Sz(a.target, void 0).select())
}
;
var tE = function(a) {
    tj(a.b.lc(!1), function(b) {
        U(b.o, "trans-target-highlight");
        return !0
    }, a)
};
pE.prototype.sh = function(a) {
    a && a.a && a.a.Cb && (a.h = a.a.Cb);
    pE.D.sh.call(this, a)
}
;
pE.prototype.ag = function(a) {
    eA() ? tE(this) : this.Yc && pE.D.ag.call(this, a)
}
;
var xE = function(a, b, c) {
    this.aa = this.c = null;
    pE.call(this, a, b, c)
};
w(xE, pE);
h = xE.prototype;
h.lj = function(a) {
    this.c = a
}
;
h.setVisible = function(a, b) {
    b = xE.D.setVisible.call(this, a, b);
    this.c = null;
    a ? this.aa = this.tb() : null != this.aa && this.aa != this.tb() && this.dispatchEvent(new Mg("action",this));
    return b
}
;
h.Cg = function(a) {
    xE.D.Cg.call(this, a);
    T(a, "trans-edit");
    a.contentEditable = !0;
    Xw(this, a);
    Uw(this).focus();
    xg(Uw(this), !0);
    Y(this).listen(a, "keydown", this.Gi);
    Y(this).listen(a, "mouseout", this.Pf);
    Y(this).listen(a, "mouseover", this.Pf);
    if (null != this.c) {
        a = Sz(a, void 0);
        var b = this.c ? a.Yb() : a.tc()
            , c = vz(a);
        a = c;
        var d = b
            , e = new Qz;
        e.g = $z(a, d, c, b);
        if (ng(a) && !cg(a)) {
            var f = a.parentNode;
            d = jb(f.childNodes, a);
            a = f
        }
        ng(c) && !cg(c) && (f = c.parentNode,
            b = jb(f.childNodes, c),
            c = f);
        e.g ? (e.a = c,
            e.h = b,
            e.b = a,
            e.c = d) : (e.a = a,
            e.h = d,
            e.b = c,
            e.c = b);
        e.select()
    }
}
;
h.zg = function(a) {
    xE.D.zg.call(this, a);
    U(a, "trans-edit");
    a.contentEditable = !1;
    Uw(this) && xg(Uw(this), !1);
    Y(this).Ga(a, "keydown", this.Gi);
    Y(this).Ga(a, "mouseout", this.Pf);
    Y(this).Ga(a, "mouseover", this.Pf)
}
;
h.Pf = function() {
    var a = dA();
    null == a || a.Xb() == a.sc() && a.Yb() == a.tc() || this.setVisible(a.Xb() == a.sc())
}
;
h.Gi = function(a) {
    for (var b = 0; b < this.g; ++b)
        ar(this, b).setVisible(!1);
    this.m && this.m.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode)
        return null === Zw(this) ? (this.Ic(),
            a.stopPropagation(),
            a.preventDefault(),
            !0) : !1;
    null === Zw(this) || !xh(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Cb.focus(),
        this.Qb(cr(this, null)));
    return !1
}
;
h.sg = function(a) {
    var b = dA();
    if (b.Xb() == b.sc() && b.Yb() == b.tc()) {
        var c = b.hh() ? b.Yb() : b.tc();
        b = Sz(vz(b), void 0);
        if (!a && c == b.Yb() || a && c == b.tc())
            return !0
    }
    return !1
}
;
var yE = function(a, b, c) {
    pE.call(this, a, b, c);
    this.c = null
};
w(yE, pE);
h = yE.prototype;
h.render = function(a) {
    yE.D.render.call(this, a);
    this.c = new zE("");
    this.kb(this.c, !0)
}
;
h.Bh = function(a) {
    yE.D.Bh.call(this, a);
    this.c.j().firstChild.value = this.a.xi(a)
}
;
h.setVisible = function(a, b) {
    b = yE.D.setVisible.call(this, a, b);
    a && null != this.j() && (Uw(this) == this.c.j().firstChild || Uw(this) == this.c.j().firstChild.nextSibling) && this.c.Nb(!0);
    return b
}
;
h.Fe = function(a) {
    yE.D.Fe.call(this, a);
    a.target == this.c ? Xw(this, this.c.j().firstChild) : Xw(this, this.j());
    Uw(this).focus();
    Uw(this).tabIndex = 0
}
;
h.vf = function(a) {
    return a == this.c ? -1 : yE.D.vf.call(this, a)
}
;
h.Ya = function(a) {
    return 9 == a.keyCode ? (this.c.Ea(2) ? (Uw(this) == this.c.j().firstChild ? Xw(this, this.c.j().firstChild.nextSibling) : Xw(this, this.c.j().firstChild),
        Uw(this).focus(),
        Uw(this).tabIndex = 0) : this.c.Nb(!0),
        a.preventDefault(),
        a.stopPropagation(),
        !0) : yE.D.Ya.call(this, a)
}
;
h.sg = function() {
    return null === Zw(this) || !(Zw(this)instanceof zE)
}
;
var zE = function(a, b, c) {
    Z.call(this, a, c || AE.M(), b);
    this.Oa(4, !1)
};
w(zE, Z);
zE.prototype.wb = function(a) {
    a.target == this.j().firstChild.nextSibling && this.dispatchEvent("action")
}
;
zE.prototype.Z = function() {
    zE.D.Z.call(this);
    Y(this).listen(this.j().firstChild, "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    })
}
;
zE.prototype.tb = function() {
    return this.j().firstChild.value
}
;
var AE = function() {};
w(AE, lr);
Ga(AE);
AE.prototype.nb = function(a) {
    var b = a.a.b("INPUT", {
        value: a.Sa(),
        id: "alt-input-text",
        type: "text"
    })
        , c = a.a.b("INPUT", {
        value: "",
        id: "alt-input-submit",
        "class": "",
        type: "button"
    });
    return a.a.b("DIV", {
        id: "alt-input"
    }, b, c)
}
;
var BE = function(a, b, c, d, e, f) {
    this.a = a;
    this.w = b;
    this.C = c;
    this.G = d;
    H(this.a.j(), "focus", function() {
        T(d, "focus")
    });
    H(this.a.j(), "blur", function() {
        U(d, "focus")
    });
    this.c = f;
    null != this.c && H(this.c, "action", this.K, !1, this);
    this.h = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.v = e;
    this.L = !1;
    this.F = L.M()
};
BE.prototype.K = function() {
    this.b = !1;
    this.a.b("");
    this.a.j().focus();
    var a = this.F;
    N(a, O(a, 27));
    this.c.setVisible(!1)
}
;
var CE = function(a) {
    a.h = !1;
    U(a.G, "full-edit");
    W(a.C, !0);
    W(a.w, !1);
    W(a.v, a.L);
    a.a.setVisible(!1);
    a.a.ee(!1)
};
BE.prototype.O = function(a) {
    this.b = !1;
    "" != this.a.Y() && (this.c.setVisible(!0),
    this.a.Y() != this.m && (this.b = !0));
    a()
}
;
var DE = function(a, b, c, d, e) {
    X.call(this);
    this.b = d;
    Hm.M();
    this.c = new zs(a);
    Bs(this.c, 2);
    this.m = null;
    this.w = new zs(b);
    this.h = null;
    this.N = c;
    this.K = e || !1;
    this.C = this.g = null
};
w(DE, X);
h = DE.prototype;
h.oa = function(a) {
    this.c.oa(a)
}
;
h.La = function() {
    DE.D.La.call(this);
    this.Da($f("DIV"))
}
;
h.Da = function(a) {
    DE.D.Da.call(this, a);
    null != this.b && !this.b.rb && this.b.ea(a);
    T(a, "st-wrap");
    a.appendChild(Vp(go, {
        Om: this.K,
        Pm: this.N
    }));
    this.g = D("st-stp1", a);
    a = Lf("st-buttons");
    this.c.render(a);
    this.c.Ed(this);
    Y(this).listen(this.c, "action", this.ul);
    this.w.render(a);
    this.w.Ed(this);
    Y(this).listen(this.w, "action", this.qo)
}
;
h.ul = function(a) {
    W(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
}
;
h.qo = function(a) {
    W(this.g, !1);
    null != this.h && this.h(a)
}
;
h.reset = function() {
    this.C && Ei(this.C);
    this.C = null;
    Bs(this.c, 2);
    wq(this.j(), 1);
    W(this.j(), !0);
    W(this.g, !0);
    null != this.b && this.b.setVisible(!1)
}
;
var EE = A || Ae || we || xe || !1;
Ze && Dk("4") || $e && Re("533") || ze && Re("2.0") || A && Re("10") || we && yd();
var FE = function(a, b, c, d, e, f, g, k, l) {
    X.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = v(this.yl, this);
        a.g = v(a.O, a, g);
        g = a.a.j();
        var m = new er(g);
        H(m, "key", a.g, !1, a);
        m = new Mv(g);
        H(m, "paste", a.g, !1, a);
        H(g, "keyup", a.g, !1, a)
    }
    this.h = null;
    this.C = "auto";
    this.X = this.m = "";
    this.Ca = new rp("mt");
    this.eb = !!b && EE && !A;
    this.R = null != e ? e : 0;
    this.b = null;
    this.eb ? this.b = new xE : this.b = new yE;
    l && this.b.oa(!1);
    if (0 < this.R)
        for (b = this.b,
                 b.K = !0,
                 e = 0; e < b.g; e++)
            a = F("DIV", "goog-menu", ""),
                l = F("DIV", null, a),
                a = new cE(l,a),
                b.h[e] = a,
                document.body.appendChild(l);
    this.b.render(c);
    this.g = k || null;
    this.ra = null != d ? d : -1;
    this.N = Hm.M();
    this.K = new uj;
    this.xa = "t";
    this.V = this.W = null;
    this.w = f || null;
    this.aa = !1;
    null != this.w && (c = v(this.hb, this),
        this.w.m = c,
        c = v(this.ll, this),
        this.w.h = c);
    this.ba = null;
    this.F = L.M()
};
w(FE, X);
var OE = function(a, b, c, d, e) {
    if (null != a.w) {
        var f = a.w;
        W(f.j(), !1);
        W(f.g, !1);
        null != f.b && f.b.setVisible(!1)
    }
    b && (a.h = new mp(b),
        a.V = null);
    c && (a.C = c);
    d && (a.m = d);
    e && (a.X = e);
    GE(a) && (CE(a.c),
    null != a.g && a.g.a(!1));
    if (a.h) {
        b = 0 != Of("alt-edited").length;
        a.a.zf(a.j());
        a.b.nf();
        a.ba && (a.ba.b = a.h);
        d = "";
        for (c = e = 0; c < I(a.h, 5); c++)
            HE(a.h, c) && (d += " "),
                d += IE(a.h, c),
                e += I(qp(a.h, c), 2);
        if (0 == e)
            return !1;
        d = [];
        e = !1;
        av(a.h);
        for (c = 0; c < I(a.h, 5); c++) {
            f = qp(a.h, c);
            var g = Go(f, 0);
            HE(a.h, c) ? a.a.appendChild(a.j(), a.a.a.createTextNode(" ")) : ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.j(), Ae ? bg(document, Jd("WBR")) : we ? ag("&shy;") : A ? ag("&#8203;") : bg(document, Jd("WBR")));
            Fh(f, 4) && 0 < J(f, 4).length && 0 == Jh(f, 5) && d.push(J(f, 4));
            var k, l = IE(a.h, c);
            xc(l) ? 0 == l.length || (k = JE(l)) : (k = a.a.b("SPAN", null, l),
                g = Jh(g, 1),
                x(0 <= g, "Invalid confidence value: " + g),
                x(1E3 >= g, "Invalid confidence value: " + g),
            0 <= a.ra && g < a.ra && T(k, "alt-low-conf"),
            xj(a.K, a.C + "." + a.m + "." + J(f, 0)) && (g = a.K.get(a.C + "." + a.m + "." + J(f, 0)),
            g != KE(f, 0) && (a.a.Af(k, g),
                T(k, "alt-edited"),
                e = !0,
                LE(a, !0))),
                null != a.b.zc ? a.b.zc.a(k) : k.title = "",
                rE(a.b, k, f));
            k && a.a.appendChild(a.j(), k)
        }
        if (null != a.c) {
            k = a.C + "." + a.m;
            for (c = 0; c < d.length; ++c)
                k += "." + d[c];
            xj(a.K, k) && (ME(a, !1),
                e = !0,
                NE(a, a.K.get(k)),
            null != a.g && a.g.a(!1),
                LE(a, !0))
        }
        e || (LE(a, !1),
            ME(a, !1));
        (e || b) && a.dispatchEvent("action");
        return 0 < I(a.h, 5)
    }
    LE(a, !1);
    ME(a, !1);
    return !1
}
    , JE = function(a) {
    a = Ac(ee(a)).split("<br>");
    var b = document.createDocumentFragment()
        , c = 0;
    y(a, function(d) {
        0 != c && b.appendChild(F("BR"));
        c++;
        "" != d && b.appendChild(ag(he(d)))
    });
    return b
}
    , PE = function(a, b) {
    if (GE(a))
        return a.c.a.Y();
    var c = [];
    if (a.j() && a.j().childNodes)
        for (var d = 0; d < a.j().childNodes.length; ++d) {
            var e = a.j().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : Cg(e)
        }
    return c.join("")
}
    , RE = function(a, b, c, d) {
    for (a = 0; a < I(b, 5); a++) {
        var e = qp(b, a)
            , f = c;
        if ((e = e && hb(e, Dl)) && Cl(f.Va, e.Va)) {
            c = b;
            b = a;
            f = -1;
            a = I(c, 5);
            for (e = b; 0 <= e; e--)
                if (0 == Jh(qp(c, e), 5)) {
                    f = e;
                    break
                }
            for (e = b + 1; e <= I(c, 5); e++)
                if (0 == Jh(qp(c, e), 5)) {
                    a = e;
                    break
                }
            if (null != d && d)
                b = QE(c, f, a);
            else if (d = c,
                c = f,
                d) {
                f = b + 1;
                e = b;
                for (b = IE(d, b).length; 64 > b && (f != a || e != c); )
                    f < a && (b += IE(d, f++).length + 1),
                    64 > b && e > c && (b += IE(d, --e).length + 1);
                b = QE(d, e, f)
            } else
                b = "";
            return b
        }
    }
    return ""
}
    , QE = function(a, b, c) {
    var d = [];
    d.push(IE(a, b));
    for (b += 1; b < c; b++)
        HE(a, b) && d.push(" "),
            d.push(IE(a, b));
    return d.join("")
}
    , HE = function(a, b) {
    if (0 == b)
        return !1;
    var c = qp(a, b)
        , d = qp(a, b - 1);
    return Gl(Go(c, 0), 2) && !Gl(Go(d, 0), 3) && !wc(IE(a, b - 1), "\n")
};
h = FE.prototype;
h.Ce = function() {
    return this.m
}
;
h.La = function() {
    this.Da(Hg(this.a, "span"))
}
;
h.Da = function(a) {
    FE.D.Da.call(this, a);
    OE(this)
}
;
h.Z = function() {
    FE.D.Z.call(this);
    Y(this).listen(this.b, "action", this.Xa);
    null != this.g && null != this.g.b && (Y(this).listen(this.g.b, "click", this.Wl),
        Nq(Y(this), this.g.b, this.F.g, this.F));
    Y(this).listen(this.b, "show", this.Hl);
    this.j() && Y(this).listen(this.j(), "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
}
;
h.T = function() {
    FE.D.T.call(this);
    this.b.Ka()
}
;
h.yl = function() {
    this.w.oa(this.c.b);
    LE(this, this.c.b)
}
;
var SE = function(a) {
    null != a.g && a.g.a(!0);
    var b = a.c
        , c = PE(a);
    T(b.G, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.ee(!0);
    W(b.w, !0);
    W(b.C, !1);
    b.L = xq(b.v);
    W(b.v, !1);
    c = b.a.j();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.h = !0;
    a.aa = xq(a.w.j());
    a.w.reset();
    null != a.g ? a.w.oa(xq(a.g.b)) : a.w.oa(!1);
    LE(a, !1)
};
FE.prototype.Xa = function(a) {
    if ("hide" != a.type || a.target == this.b)
        if (a.target == this.b.m && null != this.c) {
            this.N.log("editpopupclk");
            var b = this.F;
            N(b, O(b, 233));
            SE(this)
        } else {
            var c = a.h;
            null == c && null != a.a && (c = a.a.Cb);
            b = a.target.tb();
            if (null != c && null != a.target) {
                var d = c
                    , e = x(this.b.w.get(Pa(d)));
                this.a.Af(d, b);
                b == KE(e, 0) ? (U(d, "alt-edited"),
                0 == Of("alt-edited").length && (LE(this, !1),
                    ME(this, !1))) : (T(d, "alt-edited"),
                    LE(this, !0),
                    ME(this, !0));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                e = x(this.b.w.get(Pa(c)));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                d = KE(e, 0);
                c = cr(this.b, a.target);
                d = {
                    sl: this.C,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: J(e, 0),
                    osentence: J(e, 4),
                    tsentence: RE(this, this.h, e)
                };
                0 < I(e, 2) && (d.confidence = Jh(Go(e, 0), 1));
                if (a.target instanceof zE || -1 == c)
                    d.manual = 1,
                        c = this.F,
                        N(c, O(c, 240));
                else {
                    a = this.F;
                    e = O(a, 239);
                    var f = new rl
                        , g = of(of(f, 2, pl), 3, nl);
                    B(g, 1, c);
                    mf(e, 27, f);
                    N(a, e)
                }
                for (var k in d)
                    t(d[k]) && 64 < d[k].length && (d.tr = 1,
                        d[k] = d[k].substr(0, 64));
                this.N.log("usealt", d, null);
                k = new Mg("usealt");
                k.text = b;
                this.dispatchEvent(k);
                this.dispatchEvent("action")
            }
        }
}
;
var NE = function(a, b) {
    if (a.j()) {
        null == a.W && (a.V = yb(a.a.wi(a.j())));
        a.W = b;
        var c;
        if (c = a.j().childNodes && 0 < a.j().childNodes.length)
            c = (c = a.j().childNodes[0]) ? xj(a.b.b, Pa(c)) : !1;
        c ? (a.a.zf(a.j()),
            a.b.nf(),
            b = a.a.b("SPAN", "alt-edited", a.W),
            a.a.appendChild(a.j(), b),
            rE(a.b, b, new Eo)) : a.j().innerHTML = Ac(ee(b))
    }
};
h = FE.prototype;
h.Wl = function() {
    if (null != this.c && GE(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.j().focus();
        a.g(null)
    } else
        GE(this) && (null != this.g && this.g.a(!1),
            CE(this.c)),
            this.K.Wc(),
            this.W = null,
            OE(this),
            this.dispatchEvent("action");
    this.N.log("clkundo", void 0, null)
}
;
h.ll = function() {
    GE(this) && (this.c.b && (NE(this, this.c.a.Y()),
        this.aa = !0),
        CE(this.c),
    null != this.g && this.g.a(!1),
    this.c.b && LE(this, !0),
        this.w.oa(!0),
        W(this.w.j(), this.aa),
        this.dispatchEvent("action"));
    var a = this.F;
    N(a, O(a, 215));
    this.N.log("clkcancel", void 0, null)
}
;
h.Hl = function() {
    var a = this.b.w.get(Pa(this.b.Cb));
    if (a) {
        if (0 < this.R) {
            var b = new an("source=baf");
            if (1 == this.R) {
                for (var c = [], d = 0, e = I(a, 2); d < e; d++)
                    c.push(KE(a, d));
                up(this.Ca, this.m, this.C, TE(this), c, v(this.En, this), void 0, b, void 0)
            } else
                for (d = 0,
                         e = I(a, 2); d < e; d++)
                    c = KE(a, d),
                        wp(this.Ca, this.m, this.C, TE(this), c, ["at", "t"], v(this.Fn, this, d), void 0, b)
        }
        b = new Mg("click");
        b.text = this.b.tb();
        b.m = I(this.h, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = Jh(Go(a, 0), 1);
        this.C && this.m && this.X && (b.segments = I(this.h, 5),
            b.sl = this.C,
            b.tl = this.m,
            b.hl = this.X);
        a = this.F;
        N(a, O(a, 238));
        this.N.log("phrsclk", b, null)
    }
}
;
h.Fn = function(a, b) {
    if (1 == this.R || 1 < I(b, 5)) {
        var c = b.cb(0).Tc();
        var d = 1;
        for (var e = b.ic(); d < e; d++)
            c += " " + b.cb(d).Tc();
        d = c
    } else if (1 == I(b, 5)) {
        c = [];
        b = qp(b, 0);
        d = 0;
        for (e = Math.min(this.R, I(b, 2)); d < e; d++)
            c.push(KE(b, d));
        d = c.join(", ")
    } else
        d = "...";
    vE(this.b, a, d)
}
;
h.En = function(a) {
    for (var b = 0; b < a.length; b++)
        vE(this.b, b, a[b])
}
;
var LE = function(a, b) {
    null != a.g && null != a.g.b && W(a.g.b, b)
}
    , ME = function(a, b) {
    null != a.w && (b && a.w.reset(),
        W(a.w.j(), b))
};
FE.prototype.hb = function() {
    var a = [], b;
    null != this.V ? b = this.V : b = kg(this.j());
    for (var c = {
        segment: []
    }, d = null, e = 0, f = 0; f < b.length; f++) {
        var g = qp(this.h, f);
        if (null != g) {
            var k = Cg(b[f]);
            a: {
                var l = k;
                var m = g;
                if (0 == I(m, 2))
                    l = 0;
                else {
                    for (var q = 0; q < I(m, 2); ++q)
                        if (l == KE(m, q)) {
                            l = q;
                            break a
                        }
                    l = -1
                }
            }
            m = yc(J(g, 4));
            q = RE(this, this.h, g, !0);
            if (0 != m.length) {
                if (0 == a.length || m != a[a.length - 1])
                    a.push(m),
                        d = UE(this, a.length - 1),
                        e = 0,
                        d = {
                            source: m,
                            original_target: q,
                            segment_source: d,
                            phrase_correction: []
                        },
                        c.segment.push(d);
                if (0 != l)
                    for (m = KE(g, 0).length,
                             l = {
                                 alternative_index: l,
                                 edited_phrase: k,
                                 source_span: [],
                                 target_span: [{
                                     start: e,
                                     end: e + m
                                 }]
                             },
                             d.phrase_correction.push(l),
                             m = 0; m < I(g, 3); ++m)
                        q = Ho(g, m),
                            l.source_span.push({
                                start: Jh(q, 0),
                                end: Jh(q, 1)
                            });
                e += k.length;
                Gl(Go(g, 0), 2) && e++
            }
        }
    }
    if (GE(this)) {
        this.dispatchEvent("action");
        CE(this.c);
        null != this.g && this.g.a(!1);
        LE(this, !0);
        this.c.a.Y() != PE(this) && NE(this, this.c.a.Y());
        b = this.C + "." + this.m;
        for (f = 0; f < a.length; ++f)
            b += "." + a[f];
        a = this.c.a.Y();
        this.K.set(b, a);
        c.contains_full_edit = !0
    }
    c.edited_target = PE(this, !0);
    a = new an;
    a.set("ue", JSON.stringify(c));
    a.set("sl", this.C);
    a.set("tl", this.m);
    Rj("/translate_suggestion?client=" + this.xa, void 0, "POST", a.toString(), void 0, 1E4)
}
;
var UE = function(a, b) {
    if (b < a.h.ic())
        switch (a.h.cb(b).sf()) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
    return 0
}
    , GE = function(a) {
    return null != a.c && a.c.h
}
    , IE = function(a, b) {
    a = qp(a, b);
    return 0 == I(a, 2) ? J(a, 0) : KE(a, 0)
}
    , KE = function(a, b) {
    return J(Go(a, b), 0)
}
    , TE = function(a) {
    a = a.X;
    0 === a.length && null != Lf("hl") && (a = Lf("hl").value);
    return a
};
var VE = function(a) {
    El(this, a, 7)
};
w(VE, Dl);
var WE = {
    translation_id: {
        H: 0,
        J: !1
    },
    sl: {
        H: 1,
        J: !1
    },
    tl: {
        H: 2,
        J: !1
    },
    source: {
        H: 3,
        J: !1
    },
    trans: {
        H: 4,
        J: !1
    },
    write_timestamp: {
        H: 5,
        J: !1
    },
    label: {
        H: 6,
        J: !0
    }
};
VE.prototype.za = function() {
    return WE
}
;
VE.prototype.Be = function() {
    return J(this, 3)
}
;
VE.prototype.Tc = function() {
    return J(this, 4)
}
;
VE.prototype.Rd = function() {
    return J(this, 5, "")
}
;
var XE = function(a) {
    El(this, a, 7)
};
w(XE, Dl);
var YE = {
    total: {
        H: 0,
        J: !1
    },
    token: {
        H: 1,
        J: !1
    },
    translations: {
        H: 2,
        va: function(a) {
            return Ll(VE, a)
        },
        sa: function(a) {
            return Kl(new VE(a))
        },
        J: !0
    },
    error: {
        H: 3,
        J: !1
    },
    timestamp: {
        H: 4,
        J: !1
    },
    id: {
        H: 5,
        J: !1
    },
    max_translations: {
        H: 6,
        J: !1
    }
};
XE.prototype.za = function() {
    return YE
}
;
XE.prototype.getToken = function() {
    return J(this, 1)
}
;
var ZE = function() {
    var a = DATA.Usage;
    this.g = DATA.DisplayLanguage;
    this.a = "";
    this.c = a;
    this.h = ""
};
ZE.prototype.b = function(a, b) {
    b = b.target;
    if (bk(b) && "" != ck(b) && null != dk(b)) {
        b = dk(b);
        b = new XE(b);
        var c = b.getToken();
        null != c && "" != c && (this.a = c)
    } else
        b = new XE,
            b.Va[3] = this.h;
    a(b)
}
;
var $E = function(a, b, c, d, e) {
    var f = window.location.href;
    b = new Tm(b);
    (f = (new Tm(f,!0)).a.get("authuser")) && b.a.set("authuser", f);
    b = b.toString();
    b += "&hl=" + a.g;
    a.c && (b += "&xt=" + a.c);
    null != e ? Rj(b, v(a.b, a, c), d, e) : Rj(b, v(a.b, a, c), d)
};
ZE.prototype.ub = function(a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && "all" != b && (g.sl = b);
    null != c && "all" != c && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a,
        this.a = "");
    $E(this, "/translate_a/sg?client=webapp&" + Fj(g), a, "GET")
}
;
var aF = function(a, b, c, d, e, f, g) {
    var k = {
        cm: "a"
    };
    k.sl = c;
    k.tl = d;
    k.ql = e.length + "";
    g && (k.edit = "1");
    c = {};
    c.q = e;
    c.utrans = f;
    $E(a, "/translate_a/sg?client=webapp&" + Fj(k), b, "POST", Fj(c))
}
    , bF = function(a, b, c) {
    var d = {
        cm: "d"
    };
    d.count = c.length + "";
    var e = {};
    e.id = c;
    $E(a, "/translate_a/sg?client=webapp&" + Fj(d), b, "POST", Fj(e))
};
var Sb = {}
    , cF = null
    , dF = function(a) {
    a = Pa(a);
    delete Sb[a];
    Tb() && cF && cF.stop()
}
    , fF = function() {
    cF || (cF = new Tr(function() {
            eF()
        }
        ,20));
    var a = cF;
    a.ob() || a.start()
}
    , eF = function() {
    var a = Ua();
    Kb(Sb, function(b) {
        gF(b, a)
    });
    Tb() || fF()
};
var hF = function(a, b, c, d) {
    UD.call(this);
    if (!Ia(a) || !Ia(b))
        throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
        throw Error("Start and end points must be the same length");
    this.v = a;
    this.K = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.progress = 0;
    this.G = null
};
w(hF, UD);
hF.prototype.play = function(a) {
    if (a || 0 == this.a)
        this.progress = 0,
            this.coords = this.v;
    else if (1 == this.a)
        return !1;
    dF(this);
    this.startTime = a = Ua();
    -1 == this.a && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.G = this.startTime;
    this.progress || this.c();
    this.b("play");
    -1 == this.a && this.b("resume");
    this.a = 1;
    var b = Pa(this);
    b in Sb || (Sb[b] = this);
    fF();
    gF(this, a);
    return !0
}
;
hF.prototype.stop = function(a) {
    dF(this);
    this.a = 0;
    a && (this.progress = 1);
    iF(this, this.progress);
    this.b("stop");
    this.g()
}
;
hF.prototype.T = function() {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    hF.D.T.call(this)
}
;
var gF = function(a, b) {
    $a(a.startTime);
    $a(a.endTime);
    $a(a.G);
    b < a.startTime && (a.endTime = b + a.endTime - a.startTime,
        a.startTime = b);
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 < a.progress && (a.progress = 1);
    a.G = b;
    iF(a, a.progress);
    1 == a.progress ? (a.a = 0,
        dF(a),
        a.b("finish"),
        a.g()) : 1 == a.a && a.C()
}
    , iF = function(a, b) {
    La(a.L) && (b = a.L(b));
    a.coords = Array(a.v.length);
    for (var c = 0; c < a.v.length; c++)
        a.coords[c] = (a.K[c] - a.v[c]) * b + a.v[c]
};
hF.prototype.C = function() {
    this.b("animate")
}
;
hF.prototype.b = function(a) {
    this.dispatchEvent(new jF(a,this))
}
;
var jF = function(a, b) {
    Mg.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.a
};
w(jF, Mg);
var kF = function(a, b, c, d, e) {
    hF.call(this, b, c, d, e);
    this.h = a
};
w(kF, hF);
kF.prototype.m = Fa;
kF.prototype.C = function() {
    this.m();
    kF.D.C.call(this)
}
;
kF.prototype.g = function() {
    this.m();
    kF.D.g.call(this)
}
;
kF.prototype.c = function() {
    this.m();
    kF.D.c.call(this)
}
;
var lF = function(a, b, c, d, e) {
    ya(b) && (b = [b]);
    ya(c) && (c = [c]);
    kF.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length)
        throw Error("Start and end points must be 1D");
    this.w = -1
};
w(lF, kF);
var mF = 1 / 1024;
lF.prototype.m = function() {
    var a = this.coords[0];
    Math.abs(a - this.w) >= mF && (wq(this.h, a),
        this.w = a)
}
;
lF.prototype.c = function() {
    this.w = -1;
    lF.D.c.call(this)
}
;
lF.prototype.g = function() {
    this.w = -1;
    lF.D.g.call(this)
}
;
lF.prototype.show = function() {
    this.h.style.display = ""
}
;
var nF = function(a, b, c) {
    lF.call(this, a, 0, 1, b, c)
};
w(nF, lF);
var oF = function(a, b, c) {
    lF.call(this, a, 1, 0, b, c)
};
w(oF, lF);
oF.prototype.c = function() {
    this.show();
    oF.D.c.call(this)
}
;
oF.prototype.g = function() {
    this.h.style.display = "none";
    oF.D.g.call(this)
}
;
var pF = function(a, b, c) {
    lF.call(this, a, 0, 1, b, c)
};
w(pF, lF);
pF.prototype.c = function() {
    this.show();
    pF.D.c.call(this)
}
;
var qF = function(a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.g = b;
    Fs.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.Zh = !0
};
w(qF, Fs);
qF.prototype.update = function(a, b, c, d) {
    qF.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(pp(d), 0))
        return !1;
    (a = this.j()) && Np(a, Cg(this.Oc));
    fg(this.b);
    this.Dd();
    c = a = F("DIV", {
        "class": "gt-rw-div"
    });
    b = 15 < I(pp(d), 0);
    for (var e = 0; e < I(pp(d), 0); ++e) {
        var f = pp(d);
        var g = Hh(f, 0, e);
        f = F("SPAN", {
            "class": "gt-cd-cl"
        });
        G(f, g);
        Hp(f, "option");
        f.tabIndex = -1;
        this.c.push(f);
        if (10 == e && b) {
            var k = F("DIV", {
                "class": "gt-rw-div"
            });
            c = k;
            k = b ? F("SPAN", {
                "class": "gt-card-fadein-wrapper"
            }, k) : k;
            bq(k, {
                display: "none"
            })
        }
        this.g || 0 != e && e != I(pp(d), 0) && c.appendChild(ag(", "));
        c.appendChild(f)
    }
    c = kc(this.Aa) ? "rtl" : "ltr";
    bq(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    k && this.b.appendChild(k);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace("%1$s", (I(pp(d), 0) - 7).toLocaleString(this.Ra)),
        Hs(this, d, MSG_FEWER_RELATED_LABEL));
    rF(this, yb(kg(a)));
    this.setVisible(!0);
    return !0
}
;
qF.prototype.Z = function() {
    qF.D.Z.call(this);
    var a = this.j();
    a && (Hp(a, "listbox"),
        Ch(a, this.w.bind(this)))
}
;
var rF = function(a, b) {
    a.g && (rh(a.j(), "keydown"),
        H(a.j(), "keydown", function(c) {
            Bh(c, b)
        }, !1))
};
qF.prototype.w = function(a) {
    Pp(a.target, "gt-cd-cl") && this.dispatchEvent(new Mg("a",a.target))
}
;
qF.prototype.ge = function(a) {
    var b = []
        , c = Of("gt-card-fadein-wrapper", this.j());
    if (this.g) {
        if (a)
            var d = yb(Of("gt-cd-cl", this.j()));
        else
            d = D("gt-rw-div", this.j()),
                d = yb(kg(d));
        rF(this, d)
    }
    for (var e = 0; e < c.length; e++)
        d = c[e],
            a ? b.push(new pF(d,218)) : b.push(new oF(d,218));
    for (e = 0; e < b.length; e++)
        b[e].play()
}
;
var sF = function() {}
    , tF = function(a) {
    var b = F("SPAN");
    b.style.color = "transparent";
    b.style.background = "transparent";
    b.style.top = "-1000px";
    b.style.left = "-1000px";
    b.style.position = "absolute";
    dg(document.body, b);
    G(b, a);
    a = b.offsetWidth;
    jg(b);
    return a
};
Ga(sF);
var uF = function() {
    sF.M()
};
Ga(uF);
var vF = function(a) {
    var b = tF(a);
    a = tF(a.substr(0, 1));
    return b != a
};
var wF = function() {
    DB.apply(this, arguments)
};
ka(wF, DB);
wF.prototype.K = function(a) {
    DB.prototype.K.call(this, a);
    xF(this.aa);
    xF(this.b);
    this.j().addEventListener("keydown", v(this.Xa, this), !1)
}
;
var xF = function(a) {
    V(a, "tw-ll-top", !0);
    a.addEventListener("scroll", function() {
        V(a, "tw-ll-top", 0 >= a.scrollTop)
    })
}
    , yF = function(a) {
    return Gg(document) === LB(a)
};
wF.prototype.na = function(a) {
    return Gg(document) === a.j()
}
;
var zF = function(a) {
    a = dq(a.m, "columnCount");
    return parseInt(a, 10) || 1
};
wF.prototype.Xa = function(a) {
    if (this.isVisible())
        switch (a.keyCode) {
            case 27:
                this.close();
                break;
            case 13:
                if (yF(this)) {
                    var b = AF(this);
                    xq(this.b) && null != b && (b.ue(wB(b.j())),
                        a.preventDefault())
                } else
                    b = (xq(this.b) ? this.g : this.a).find(this.na) || null,
                    null != b && (b.ue(wB(b.j())),
                        a.preventDefault());
                break;
            case 40:
                yF(this) ? (b = AF(this),
                null != b && (LB(this).blur(),
                    b.j().focus(),
                    a.preventDefault())) : BF(this, a);
                break;
            case 38:
                yF(this) || CF(this, a);
                break;
            case 39:
                if (!yF(this) && (b = zF(this),
                1 < b)) {
                    var c = Math.ceil(this.a.length / b)
                        , d = (xq(this.b) ? this.g : this.a).findIndex(this.na) + c;
                    d >= this.a.length && (d -= b * c);
                    0 > d && (d += c);
                    this.a[d].j().focus();
                    a.preventDefault()
                }
                break;
            case 37:
                yF(this) || (b = zF(this),
                1 < b && (c = Math.ceil(this.a.length / b),
                    d = (xq(this.b) ? this.g : this.a).findIndex(this.na) - c,
                0 > d && (d += b * c),
                d >= this.a.length && (d -= c),
                    this.a[d].j().focus(),
                    a.preventDefault()));
                break;
            default:
                this.X(a)
        }
}
;
var BF = function(a, b) {
    var c = Gg(document);
    if (c)
        for (var d = a.a.find(function(g) {
            return "auto" === g.code
        }), e = a.a.find(function(g) {
            return "auto" !== g.code
        }), f = c; ; ) {
            (f = d && f === d.j() ? e.j() : f.nextElementSibling) || (f = !xq(a.b) && d ? d.j() : c.parentElement.children[0]);
            if (f === c)
                break;
            if (0 <= f.tabIndex && xq(f)) {
                f.focus();
                b.preventDefault();
                break
            }
        }
}
    , CF = function(a, b) {
    var c = Gg(document);
    if (c)
        for (var d = a.a.find(function(g) {
            return "auto" === g.code
        }), e = rb(a.a, function(g) {
            return "auto" !== g.code
        }), f = c; ; ) {
            (f = d && f === d.j() ? e.j() : f.previousElementSibling) || (f = !xq(a.b) && d ? d.j() : ib(c.parentElement.children));
            if (f === c)
                break;
            if (0 <= f.tabIndex && xq(f)) {
                f.focus();
                b.preventDefault();
                break
            }
        }
}
    , AF = function(a) {
    if (xq(a.b))
        return a = a.g.find(function(c) {
            return xq(c.j())
        }),
            null != a ? a : null;
    var b = ib(a.a);
    return "auto" === b.code ? b : a.a[0]
};
wF.prototype.X = function(a) {
    yF(this) || !wh(a.keyCode) || a.altKey || a.ctrlKey || a.metaKey || (NB(this),
        LB(this).focus())
}
;
var DF = function(a, b, c, d) {
    this.Aa = a;
    this.Ja = b;
    this.Fd = c;
    this.c = d;
    this.b = this.a = null
};
var EF = function(a) {
    this.a = a;
    Hm.M()
}
    , FF = function(a) {
    Ay("TranslationStarred", function(b, c) {
        c = b ? new EF(c) : null;
        a && a(b, c)
    })
}
    , GF = function(a, b, c, d, e) {
    Fy(a.a, b, c, d, 0, e)
};
var HF = function(a, b, c, d) {
    this.a = a;
    this.w = b;
    this.v = c;
    this.h = "AUTO" === this.v.toUpperCase() && b.src ? b.src : null;
    this.m = d;
    this.b = this.$a();
    this.g = this.c = null
};
HF.prototype.$a = function() {
    return jv(this.w)
}
;
HF.prototype.Qa = function() {
    return this.v
}
;
var IF = function(a) {
    return "AUTO" === a.v.toUpperCase() && null != a.h ? a.h : a.v
};
HF.prototype.ma = function() {
    return this.m
}
;
HF.prototype.Rd = function() {
    return this.g
}
;
var JF = function(a, b) {
    a.w = b;
    a.b = a.$a()
}
    , KF = function(a, b) {
    xc(a.b) || (a.b = b)
}
    , LF = function(a, b) {
    return a.a === b.a && a.b === b.b && IF(a) === IF(b) && a.ma() === b.ma()
}
    , MF = function(a, b) {
    var c = a.a.toLowerCase();
    a = a.$a().toLowerCase();
    b = b.toLowerCase();
    return c.includes(b) || a.includes(b)
}
    , NF = function(a) {
    return a.$a() !== a.b
}
    , OF = function(a) {
    var b = JSON.parse(JSON.stringify(a.w));
    x(b instanceof Object, "Translation result isn't JSON");
    b = new HF(a.a,b,a.v,a.m);
    null != a.c && (b.c = a.c);
    null != a.g && (b.g = a.g);
    null != a.h && (b.h = a.h);
    KF(b, a.b);
    return b
};
var PF = function(a) {
    return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
};
PF = function() {
    return "other"
}
;
var QF = function(a, b) {
    if (void 0 === b) {
        b = a + "";
        var c = b.indexOf(".");
        b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
    }
    return 1 == (a | 0) && 0 == b ? "one" : "other"
};
QF = function() {
    return "other"
}
;
var UF = function(a) {
    this.g = a;
    this.b = this.a = this.h = null;
    a = rv;
    var b = pv;
    if (RF !== a || SF !== b)
        RF = a,
            SF = b,
            TF = new uv(1);
    this.v = TF
}
    , RF = null
    , SF = null
    , TF = null
    , VF = /'([{}#].*?)'/g
    , WF = /''/g
    , XF = function(a, b) {
    return ww(a, b)
}
    , ww = function(a, b) {
    if (a.g) {
        a.h = [];
        var c = YF(a, a.g);
        a.b = ZF(a, c);
        a.g = null
    }
    if (!a.b || 0 == a.b.length)
        return "";
    a.a = yb(a.h);
    c = [];
    $F(a, a.b, b, !1, c);
    b = c.join("");
    for (x(-1 == b.search("#"), "Not all # were replaced."); 0 < a.a.length; )
        b = b.replace(a.c(a.a), a.a.pop());
    return b
}
    , $F = function(a, b, c, d, e) {
    for (var f = 0; f < b.length; f++)
        switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value
                    , k = a
                    , l = e
                    , m = c[g];
                p(m) ? (k.a.push(m),
                    l.push(k.c(k.a))) : l.push("Undefined parameter - " + g);
                break;
            case 2:
                g = b[f].value;
                k = a;
                l = c;
                m = d;
                var q = e
                    , r = g.ef;
                p(l[r]) ? (r = g[l[r]],
                p(r) || (r = g.other,
                    db(r, "Invalid option or missing other option for select block.")),
                    $F(k, r, l, m, q)) : q.push("Undefined parameter - " + r);
                break;
            case 0:
                g = b[f].value;
                aG(a, g, c, QF, d, e);
                break;
            case 1:
                g = b[f].value;
                aG(a, g, c, PF, d, e);
                break;
            default:
                Za("Unrecognized block type: " + b[f].type)
        }
}
    , aG = function(a, b, c, d, e, f) {
    var g = b.ef
        , k = b.$h
        , l = +c[g];
    isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (k = l - k,
        g = b[c[g]],
    p(g) || (x(0 <= k, "Argument index smaller than offset."),
        d = d(k),
        ab(d, "Invalid plural key."),
        g = b[d],
    p(g) || (g = b.other),
        db(g, "Invalid option or missing other option for plural block.")),
        b = [],
        $F(a, g, c, e, b),
        c = b.join(""),
        ab(c, "Empty block in plural."),
        e ? f.push(c) : (a = Ev(a.v, k),
            f.push(c.replace(/#/g, a))))
}
    , YF = function(a, b) {
    var c = a.h
        , d = v(a.c, a);
    b = b.replace(WF, function() {
        c.push("'");
        return d(c)
    });
    return b = b.replace(VF, function(e, f) {
        c.push(f);
        return d(c)
    })
}
    , bG = function(a) {
    var b = 0
        , c = []
        , d = []
        , e = /[{}]/g;
    e.lastIndex = 0;
    for (var f; f = e.exec(a); ) {
        var g = f.index;
        "}" == f[0] ? (f = c.pop(),
            x(p(f) && "{" == f, "No matching { for }."),
        0 == c.length && (f = {
            type: 1
        },
            f.value = a.substring(b, g),
            d.push(f),
            b = g + 1)) : (0 == c.length && (b = a.substring(b, g),
        "" != b && d.push({
            type: 0,
            value: b
        }),
            b = g + 1),
            c.push("{"))
    }
    x(0 == c.length, "There are mismatched { or } in the pattern.");
    b = a.substring(b);
    "" != b && d.push({
        type: 0,
        value: b
    });
    return d
}
    , cG = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/
    , dG = /^\s*(\w+)\s*,\s*selectordinal\s*,/
    , eG = /^\s*(\w+)\s*,\s*select\s*,/
    , ZF = function(a, b) {
    var c = [];
    b = bG(b);
    for (var d = 0; d < b.length; d++) {
        var e = {};
        if (0 == b[d].type)
            e.type = 4,
                e.value = b[d].value;
        else if (1 == b[d].type) {
            var f = b[d].value;
            switch (cG.test(f) ? 0 : dG.test(f) ? 1 : eG.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                case 2:
                    e.type = 2;
                    e.value = fG(a, b[d].value);
                    break;
                case 0:
                    e.type = 0;
                    e.value = gG(a, b[d].value);
                    break;
                case 1:
                    e.type = 1;
                    e.value = hG(a, b[d].value);
                    break;
                case 3:
                    e.type = 3;
                    e.value = b[d].value;
                    break;
                default:
                    Za("Unknown block type for pattern: " + b[d].value)
            }
        } else
            Za("Unknown part of the pattern.");
        c.push(e)
    }
    return c
}
    , fG = function(a, b) {
    var c = "";
    b = b.replace(eG, function(k, l) {
        c = l;
        return ""
    });
    var d = {};
    d.ef = c;
    b = bG(b);
    for (var e = 0; e < b.length; ) {
        var f = b[e].value;
        ab(f, "Missing select key element.");
        e++;
        x(e < b.length, "Missing or invalid select value element.");
        var g;
        1 == b[e].type ? g = ZF(a, b[e].value) : Za("Expected block type.");
        d[f.replace(/\s/g, "")] = g;
        e++
    }
    db(d.other, "Missing other key in select statement.");
    return d
}
    , gG = function(a, b) {
    var c = ""
        , d = 0;
    b = b.replace(cG, function(l, m, q) {
        c = m;
        q && (d = parseInt(q, 10));
        return ""
    });
    var e = {};
    e.ef = c;
    e.$h = d;
    b = bG(b);
    for (var f = 0; f < b.length; ) {
        var g = b[f].value;
        ab(g, "Missing plural key element.");
        f++;
        x(f < b.length, "Missing or invalid plural value element.");
        var k;
        1 == b[f].type ? k = ZF(a, b[f].value) : Za("Expected block type.");
        e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
        f++
    }
    db(e.other, "Missing other key in plural statement.");
    return e
}
    , hG = function(a, b) {
    var c = "";
    b = b.replace(dG, function(k, l) {
        c = l;
        return ""
    });
    var d = {};
    d.ef = c;
    d.$h = 0;
    b = bG(b);
    for (var e = 0; e < b.length; ) {
        var f = b[e].value;
        ab(f, "Missing ordinal key element.");
        e++;
        x(e < b.length, "Missing or invalid ordinal value element.");
        if (1 == b[e].type)
            var g = ZF(a, b[e].value);
        else
            Za("Expected block type.");
        d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
        e++
    }
    db(d.other, "Missing other key in selectordinal statement.");
    return d
};
UF.prototype.c = function(a) {
    x(0 < a.length, "Literal array is empty.");
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
}
;
var kG = function(a, b, c, d) {
    this.N = a;
    this.R = b;
    this.L = c;
    this.b = d;
    this.F = L.M();
    this.G = 1E4;
    this.h = 0;
    this.Fa = new uv("######");
    this.O = new UF(DATA.TooManyPhrases);
    this.v = null;
    this.g = [];
    if ("openDatabase"in window) {
        a = !0;
        try {
            window.openDatabase("", "", "", 0)
        } catch (e) {
            a = !1
        }
    } else
        a = !1;
    this.c = a;
    this.C = !1;
    this.c && iG(this);
    this.w = new ZE;
    this.a = [];
    this.m = !1;
    jG(this)
}
    , iG = function(a) {
    FF(function(b, c) {
        b && c && (a.v = c,
            GF(a.v, null, null, null, function(d, e) {
                d && (a.g = lb(e, function(f) {
                    return new DF(f.sl,f.tl,f.src,f.trg)
                }),
                    a.g.reverse());
                a.C = !0;
                lG(a)
            }))
    })
}
    , mG = function(a, b) {
    Fh(b, 6) && (b = Number(J(b, 6, ""))) && (a.G = b)
}
    , jG = function(a) {
    DATA.SignedIn && a.w.ub(function(b) {
        return nG(a, b)
    }, "", "", "", "", "1")
}
    , lG = function(a) {
    if ((!a.c || a.C) && a.m) {
        var b = a.F;
        N(b, wm(b, 241, a.g.length));
        b = a.F;
        N(b, wm(b, 242, a.a.length));
        b = {};
        Mm(a.b, "webapp", "stld", "b", (b.wc = a.g.length,
            b.gc = a.a.length,
            b));
        b = a.g.concat(a.a);
        a.h = b.length;
        a.N(b)
    }
}
    , oG = function(a, b, c) {
    if (a.c && !a.v)
        return !1;
    var d = IF(b)
        , e = b.ma()
        , f = b.a
        , g = function() {
        var k = 0 === c;
        a.h += k ? 1 : -1;
        a.R(b, k)
    };
    if (0 === c) {
        if (300 < f.length)
            return a.L(DATA.PhraseTooLong),
                d = {},
                Mm(a.b, "webapp", "stlm", "l", (d.sz = f.length,
                    d)),
                vm(a.F, f.length),
                !1;
        if (a.h >= a.G)
            return f = {},
                Mm(a.b, "webapp", "stlm", "n", (f.sz = a.h + 1,
                    f)),
                xm(a.F, a.h + 1),
                a.L(XF(a.O, {
                    saved_phrase_limit: Ev(a.Fa, a.G)
                })),
                !1;
        aF(a.w, v(a.Pa, a, b, g), d, e, f, b.b, NF(b))
    } else if (1 == c)
        null != b.c ? bF(a.w, v(a.K, a, b, g), [b.c]) : a.c && Cy(a.v.a, d, e, f, g);
    else
        throw "Unexpected operation";
    return !0
};
kG.prototype.Pa = function(a, b, c) {
    mG(this, c);
    if (c && !J(c, 3) && J(c, 5)) {
        a.c = J(c, 5);
        a.g = Number(J(c, 4, ""));
        var d = {};
        d.trans = a.b;
        d = {
            sentences: [d]
        };
        a = new DF(IF(a),a.ma(),a.a,d);
        a.a = J(c, 5);
        a.b = ne(J(c, 4, ""));
        this.a.push(a);
        b(!0)
    } else
        Mm(this.b, "webapp", "stfl", "a"),
            nm(this.F, 151)
}
;
kG.prototype.K = function(a, b, c) {
    mG(this, c);
    c && !J(c, 3) ? (Mm(this.b, "webapp", "stsu", "d"),
        c = this.F,
        N(c, O(c, 234)),
        a = pG(this, a),
        -1 === a ? (Mm(this.b, "webapp", "stfl", "u"),
            nm(this.F, 154)) : (Mm(this.b, "webapp", "stsu", "u"),
            c = this.F,
            N(c, O(c, 235)),
            Bb(this.a, a, 1)),
        b(!0)) : (Mm(this.b, "webapp", "stfl", "d"),
        nm(this.F, 152))
}
;
var nG = function(a, b) {
    mG(a, b);
    a.a = Array.from(Jl(b, 2, VE)).map(function(c) {
        var d = {};
        d.trans = c.Tc();
        d = {
            sentences: [d]
        };
        d = new DF(J(c, 1),J(c, 2),c.Be(),d);
        d.a = J(c, 0);
        d.b = Number(c.Rd());
        return d
    });
    a.m = !0;
    lG(a)
}
    , qG = function(a, b, c, d, e) {
    GF(a.v, b, c, d, function(f, g) {
        e(f && 0 < g.length)
    })
}
    , pG = function(a, b) {
    var c = IF(b)
        , d = b.ma()
        , e = b.a
        , f = b.b
        , g = -1;
    a.a.forEach(function(k, l) {
        c === k.Aa && d === k.Ja && e === k.Fd && f === jv(k.c) && (k.a && (b.c = k.a),
        k.b && (b.g = k.b),
            g = l)
    });
    return g
}
    , rG = function(a, b, c) {
    if (!a.c || a.v) {
        var d = IF(b)
            , e = b.ma()
            , f = b.a;
        -1 !== pG(a, b) ? c(!0) : a.c ? qG(a, d, e, f, c) : c(!1)
    }
};
var tG = function(a, b) {
    K.call(this);
    var c = ba(a);
    for (a = c.next(); !a.done; a = c.next())
        sG(a.value, this.a.bind(this));
    b = ba(b);
    for (a = b.next(); !a.done; a = b.next())
        sG(a.value, this.b.bind(this))
};
ka(tG, K);
tG.prototype.a = function(a) {
    a = uG(a.target);
    if ("" != a) {
        var b = new Mg("select");
        b.text = a;
        this.dispatchEvent(b)
    }
}
;
tG.prototype.b = function(a) {
    a = uG(a.target);
    if ("" != a) {
        var b = new Mg("select");
        b.text = a;
        b.v = !0;
        this.dispatchEvent(b)
    }
}
;
var uG = function(a) {
    var b = "";
    try {
        if (qw(a))
            var c = a.value.substring(a.selectionStart, a.selectionEnd);
        else if (rw()) {
            var d = sw(a)
                , e = d[1];
            if (d[0].inRange(e)) {
                if ("textarea" == a.type) {
                    var f = e.duplicate()
                        , g = f.text;
                    a = g;
                    for (d = !1; !d; )
                        0 == f.compareEndPoints("StartToEnd", f) ? d = !0 : (f.moveEnd("character", -1),
                            f.text == g ? a += "\r\n" : d = !0);
                    var k = a
                } else
                    k = e.text;
                var l = k
            } else
                l = "";
            c = l
        } else
            throw Error("Cannot get the selection text");
        b = c.trim();
        if ("" != b)
            return b
    } catch (m) {}
    b = tz(window);
    return b.toString ? b.toString().trim() : ""
};
function sG(a, b) {
    H(a, "mouseup", b);
    H(a, "keyup", function(c) {
        16 == c.keyCode && b(c)
    })
}
;var vG = function() {}
    , wG = new vG
    , xG = ["click", "keydown", "keyup"];
vG.prototype.listen = function(a, b, c, d, e) {
    var f = function(g) {
        var k = jh(b)
            , l = ng(g.target) ? g.target.getAttribute("role") || null : null;
        "click" == g.type && Xg(g) ? k.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (k.call(d, g),
            g.preventDefault()) : (g.type = "keypress",
            k.call(d, g))
    };
    f.xc = b;
    f.Bn = d;
    e ? e.listen(a, xG, f, c) : H(a, xG, f, c)
}
;
vG.prototype.Ga = function(a, b, c, d, e) {
    for (var f, g = 0; f = xG[g]; g++) {
        var k = a;
        var l = f;
        var m = !!c;
        l = Zg(k) ? k.uf(l, m) : k ? (k = lh(k)) ? k.uf(l, m) : [] : [];
        for (k = 0; m = l[k]; k++) {
            var q = m.listener;
            if (q.xc == b && q.Bn == d) {
                e ? e.Ga(a, f, m.listener, c, d) : ph(a, f, m.listener, c, d);
                break
            }
        }
    }
}
;
var yG = function(a) {
    var b = a.Hn;
    a = a.uid;
    a = '<div class="' + S("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + S(a) + '"' : "") + '><div class="' + S("jfk-bubble-content-id") + '"' + (a ? ' id="' + S(a) + '"' : "") + "></div>";
    b && (b = a += '<div class="' + S("jfk-bubble-closebtn-id") + " " + S("jfk-bubble-closebtn") + '" aria-label="',
        a = "\u5173\u95ed".replace(Kn, Ln),
        a = b + a + '" role="button" tabindex=0></div>');
    a += '<div class="' + S("jfk-bubble-arrow-id") + " " + S("jfk-bubble-arrow") + '"><div class="' + S("jfk-bubble-arrowimplbefore") + '"></div><div class="' + S("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return P(a)
};
yG.a = "jfk.templates.bubble.main";
var zG = function(a) {
    X.call(this, a);
    this.c = new cs("jfk-bubble",!0);
    this.b = new bE;
    this.K = []
};
w(zG, X);
zG.prototype.g = !0;
zG.prototype.h = !1;
var AG = function(a, b, c, d) {
    x(!a.ya, "Must call setPosition() before rendering");
    a.c.cf = !1;
    ds(a.c, 1, b, c, d)
}
    , BG = function(a, b) {
    x(!a.ya, "Must call showCloseButton() before rendering");
    a.g = b
}
    , DG = function(a, b) {
    x(t(b) || b.nodeType || b instanceof yn || b instanceof Ad, "Content must be a string or HTML.");
    a.V = b;
    CG(a, b)
}
    , CG = function(a, b) {
    a = a.Zb();
    b && a && (t(b) ? G(a, b) : b instanceof yn ? Ud(a, xn(b)) : b instanceof Ad ? Ud(a, b) : (Ud(a, Kd),
        dg(a, b)))
};
h = zG.prototype;
h.setAutoHide = function(a) {
    this.b.setAutoHide(a)
}
;
h.Zb = function() {
    return this.vd("jfk-bubble-content-id")
}
;
h.La = function() {
    this.o = Wp(yG, {
        Hn: this.g,
        uid: "bubble-" + Pa(this)
    }, void 0, this.a);
    CG(this, this.V);
    W(this.j(), !1);
    var a = this.b
        , b = this.j();
    YD(a);
    a.o = b;
    if (!Ce) {
        a = this.b;
        b = nE(this.j(), "ease-out", 0, 1);
        var c = nE(this.j(), "ease-in", 1, 0);
        a.v = b;
        a.h = c
    }
    Qp(this.j(), this.K)
}
;
h.Z = function() {
    zG.D.Z.call(this);
    Y(this).listen(this.b, ["beforeshow", "show", "beforehide", "hide"], this.R);
    if (this.g) {
        var a = Y(this)
            , b = this.vd("jfk-bubble-closebtn-id");
        wG.listen(b, Ta(this.setVisible, !1), void 0, a.m || a, a)
    }
    a = this.j();
    x(a, "getElement() returns null.");
    b = this.vd("jfk-bubble-arrow-id");
    x(b, "No arrow element is found!");
    var c = this.c;
    c.a = a;
    c.h = b;
    a = this.b;
    a.L = this.c || void 0;
    a.isVisible() && a.m()
}
;
h.setVisible = function(a) {
    this.b.setVisible(a)
}
;
h.isVisible = function() {
    return this.b.isVisible()
}
;
var EG = function(a) {
    a.isVisible() && a.b.m()
};
zG.prototype.T = function() {
    this.b.Ka();
    delete this.b;
    zG.D.T.call(this)
}
;
zG.prototype.m = function() {
    qq(this.j());
    return !1
}
;
zG.prototype.R = function(a) {
    if ("show" == a.type || "hide" == a.type) {
        var b = Y(this)
            , c = this.a;
        c = A ? Ig(c) : c.a;
        "show" == a.type ? b.listen(c, "scroll", this.m) : b.Ga(c, "scroll", this.m)
    }
    b = this.dispatchEvent(a.type);
    this.h && "hide" == a.type && this.Ka();
    return b
}
;
var FG = function(a, b) {
    this.a = a;
    this.b = b
}
    , GG = {
    af: "af-ZA",
    am: "am-ET",
    az: "az-AZ",
    bg: "bg-BG",
    ca: "ca-ES",
    cs: "cs-CZ",
    da: "da-DK",
    de: "de-DE",
    el: "el-GR",
    eu: "eu-ES",
    fa: "fa-IR",
    fi: "fi-FI",
    tl: "fil-PH",
    gl: "gl-ES",
    gu: "gu-IN",
    hi: "hi-IN",
    hr: "hr-HR",
    hu: "hu-HU",
    hy: "hy-AM",
    iw: "he-IL",
    id: "id-ID",
    is: "is-IS",
    it: "it-IT",
    ja: "ja-JP",
    jw: "jv-ID",
    ka: "ka-GE",
    km: "km-KH",
    kn: "kn-IN",
    ko: "ko-KR",
    lo: "lo-LA",
    lt: "lt-LT",
    lv: "lv-LV",
    ml: "ml-IN",
    mr: "mr-IN",
    ms: "ms-MY",
    ne: "ne-NP",
    no: "nb-NO",
    nl: "nl-NL",
    pl: "pl-PL",
    ro: "ro-RO",
    ru: "ru-RU",
    si: "si-LK",
    sk: "sk-SK",
    sl: "sl-SI",
    sr: "sr-RS",
    su: "su-ID",
    sv: "sv-SE",
    te: "te-IN",
    th: "th-TH",
    tr: "tr-TR",
    uk: "uk-UA",
    vi: "vi-VN",
    zu: "zu-ZA",
    "ar::ae": "ar-AE",
    "ar::bh": "ar-BH",
    "ar::dz": "ar-DZ",
    "ar::eg": "ar-EG",
    "ar::il": "ar-IL",
    "ar::jo": "ar-JO",
    "ar::kw": "ar-KW",
    "ar::lb": "ar-LB",
    "ar::ma": "ar-MA",
    "ar::om": "ar-OM",
    "ar::ps": "ar-PS",
    "ar::qa": "ar-QA",
    "ar::sa": "ar-SA",
    "ar::tn": "ar-TN",
    ar: "ar-EG",
    "bn::bd": "bn-BD",
    "bn::in": "bn-IN",
    bn: "bn-BD",
    "en::au": "en-AU",
    "en::ca": "en-CA",
    "en::com": "en-US",
    "en::gh": "en-GH",
    "en::ie": "en-IE",
    "en::in": "en-IN",
    "en::ke": "en-KE",
    "en::ng": "en-NG",
    "en::nz": "en-NZ",
    "en::ph": "en-PH",
    "en::tz": "en-TZ",
    "en::uk": "en-GB",
    "en::za": "en-ZA",
    en: "en-001",
    "es::ar": "es-AR",
    "es::bo": "es-BO",
    "es::cl": "es-CL",
    "es::co": "es-CO",
    "es::cr": "es-CR",
    "es::do": "es-DO",
    "es::ec": "es-EC",
    "es::es": "es-ES",
    "es::gt": "es-GT",
    "es::hn": "es-HN",
    "es::mx": "es-MX",
    "es::ni": "es-NI",
    "es::pa": "es-PA",
    "es::pe": "es-PE",
    "es::pr": "es-PR",
    "es::py": "es-PY",
    "es::sv": "es-SV",
    "es::com": "es-US",
    "es::uy": "es-UY",
    "es::ve": "es-VE",
    es: "es-ES",
    "fr::ca": "fr-CA",
    "fr::fr": "fr-FR",
    fr: "fr-FR",
    "pt::pt": "pt-PT",
    pt: "pt-BR",
    "ta::in": "ta-IN",
    "ta::lk": "ta-LK",
    "ta::sg": "ta-SG",
    "ta::my": "ta-MY",
    ta: "ta-IN",
    "sw::ke": "sw",
    "sw::tz": "sw-TZ",
    sw: "sw",
    "ur::pk": "ur-PK",
    "ur::in": "ur-IN",
    ur: "ur-PK",
    "zh-CN:zh-TW:hk": "yue-Hant-HK",
    "zh-CN:zh-CN:hk": "cmn-Hans-HK",
    "zh-CN:zh-TW": "cmn-Hant-TW",
    "zh-CN": "cmn-Hans-CN"
};
FG.prototype.get = function(a) {
    return GG[a + ":" + this.b + ":" + this.a] || GG[a + "::" + this.a] || GG[a + ":" + this.b] || GG[a] || null
}
;
var HG = function(a, b) {
    zG.call(this, b);
    this.C = 0;
    this.c.Uf = !0;
    this.setAutoHide(!1);
    this.c.c = a;
    EG(this);
    AG(this, 2);
    BG(this, !1);
    DG(this, Wp(eo, {
        label: MSG_SPEAK_NOW
    }))
};
w(HG, zG);
HG.prototype.Z = function() {
    HG.D.Z.call(this);
    this.w = D("gt-speech-l3", this.j())
}
;
var IG = function(a) {
    0 == a.C++ && T(a.w, "trigger");
    Di(a.N, 600, a)
};
HG.prototype.N = function() {
    0 == --this.C && U(this.w, "trigger")
}
;
var JG = function(a, b, c, d, e, f, g, k, l) {
    K.call(this);
    this.X = a;
    this.K = b;
    this.a = null;
    ro && "webkitSpeechRecognition"in window && (a = new webkitSpeechRecognition,
        a.continuous = jt(),
        a.interimResults = !0,
        this.a = a);
    this.V = new FG(c,d);
    this.R = !e;
    this.c = "";
    this.Jb = !1;
    this.b = null;
    this.w = "init";
    this.m = f || null;
    this.C = l || null;
    this.L = g || null;
    this.na = !!k;
    this.aa = new Vu;
    this.v = Hm.M();
    this.W = ul.M();
    this.F = L.M();
    this.h = null;
    this.G = ""
};
w(JG, K);
JG.prototype.init = function(a) {
    if (null != this.a) {
        var b = Lf("gt-src-tools-l");
        a = this.h = a || fb(b);
        this.b = new Gt(MSG_SPEECH_INPUT_TURN_ON,MSG_SPEECH_INPUT_TURN_OFF,new Lt("speech-button",!1));
        this.b.ea(F("DIV", {
            id: "gt-speech",
            tabindex: "0"
        }));
        ig(a, this.b.j(), 1);
        this.g = new HG(this.b.j());
        this.g.render(this.b.j());
        this.a.onresult = v(this.N, this);
        this.a.onstart = v(this.Rl, this);
        this.a.onspeechstart = v(this.po, this);
        this.a.onend = v(this.zl, this);
        this.a.onspeechend = v(this.Pl, this);
        this.a.onerror = v(this.ba, this);
        this.a.onnomatch = v(this.O, this);
        H(this.b, "action", this.mo, !1, this);
        H(this.h, "click", this.oo, !1, this)
    }
}
;
var KG = function(a, b) {
    var c = a.W;
    b ? (c.m = c.b,
        c.b = 3) : c.b = c.m;
    a.g.setVisible(b && a.R)
}
    , LG = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" ")
    , MG = function(a, b) {
    if (!(0 <= LG.indexOf(a.w + ":" + b))) {
        var c = {};
        c.from = a.w;
        c.to = b;
        a.v.log("speech", c)
    }
    a.w = b
};
h = JG.prototype;
h.mo = function() {
    if (this.b.Ea(16)) {
        var a = this.F;
        N(a, O(a, 149));
        Mm(this.v, "webapp", "si", "start", {
            sl: this.G
        });
        NA(this.K, !0);
        this.c = "";
        this.a.start();
        MG(this, "buttonOn")
    } else
        this.a.stop(),
            KG(this, !1),
            MG(this, "buttonOff"),
            NA(this.K, !1)
}
;
h.oo = function() {
    if (!this.b.isEnabled()) {
        this.dispatchEvent("userInteractionWhileDisabled");
        var a = this.F;
        N(a, O(a, 305));
        Mm(this.v, "webapp", "dia", "click", {
            dias: "vi"
        })
    }
}
;
h.Rl = function() {
    this.Jb = !0;
    KG(this, !0);
    MG(this, "start");
    this.dispatchEvent("start")
}
;
h.po = function() {
    IG(this.g);
    MG(this, "speechStart");
    this.dispatchEvent("speechStart")
}
;
h.zl = function() {
    NG(this);
    MG(this, "end");
    this.dispatchEvent("end")
}
;
h.Pl = function() {
    IG(this.g);
    MG(this, "speechEnd")
}
;
var NG = function(a) {
    a.Jb = !1;
    KG(a, !1);
    a.b.cd(!1)
};
JG.prototype.N = function(a) {
    IG(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c)
        this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    Pm(this.v, "inputm", 3);
    this.X.b(a);
    MG(this, "result")
}
;
JG.prototype.ba = function() {
    NG(this);
    MG(this, "error")
}
;
JG.prototype.O = function() {
    NG(this);
    MG(this, "noMatch")
}
;
JG.prototype.ob = function() {
    return this.Jb
}
;
var OG = function(a, b, c, d, e, f) {
    X.call(this);
    this.R = a;
    this.X = b;
    this.ba = c;
    this.aa = d || "";
    this.ra = e || "";
    this.Ca = f || function() {}
    ;
    this.c = this.N = this.g = "";
    this.b = !1;
    this.C = !0;
    this.w = [];
    this.m = "";
    this.V = !1;
    this.K = new Tr(this.ym,1E3,this);
    this.h = Hm.M();
    this.F = L.M()
};
w(OG, X);
h = OG.prototype;
h.setVisible = function(a) {
    a || (this.V = this.b = !1,
        this.K.stop());
    W(this.j(), a)
}
;
h.isVisible = function() {
    return xq(this.j())
}
;
h.show = function(a) {
    if ("" == a.ve)
        this.setVisible(!1);
    else {
        if (a.Eh) {
            if (this.V)
                return
        } else
            this.V = !0;
        this.m = a.Eh || "";
        this.g = a.ej;
        this.N = a.qj;
        this.c = this.m ? this.c : a.ve;
        this.W = a.rk || ee(a.ve);
        this.b = a.ji && this.C;
        var b = a.Eh ? this.X : a.ji && this.C ? this.aa : this.ba;
        if (this.b && sb(a.Ag, 6)) {
            this.setVisible(!1);
            var c = Lf("src-translit");
            c && G(c, this.c);
            if (a.result)
                for (c = 0; c < a.result.ic(); c++)
                    a.result.cb(c).Va[3] = 0 == c ? this.c : ""
        } else
            this.b ? (c = this.j(),
                U(c, "gt-spell-correct-message"),
                T(c, "gt-related-suggest-message")) : (c = this.j(),
                U(c, "gt-related-suggest-message"),
                T(c, "gt-spell-correct-message")),
                this.setVisible(!0);
        G(this.j(), b + " ");
        this.w = a.Ag;
        b = F("a", {
            tabindex: 0,
            href: "javascript:void(0)"
        });
        bq(b, {
            direction: kc(this.N) ? "rtl" : "ltr"
        });
        bq(b, {
            "text-decoration": "none"
        });
        b.innerHTML = this.W;
        H(b, "click", this.Tm, !1, this);
        this.j().appendChild(b);
        b = F("DIV", "gt-spell-icon");
        this.j().appendChild(b);
        this.b && !sb(a.Ag, 6) && (a = F("div"),
            G(a, this.ra + " "),
            b = F("a", {
                tabindex: 1,
                href: "javascript:void(0)"
            }),
            H(b, "click", this.xa, !1, this),
            G(b, this.g),
            a.appendChild(b),
            this.j().appendChild(a),
            T(a, "gt-revert-correct-message"));
        this.K.start()
    }
}
;
h.ym = function() {
    var a = {};
    a.orig = this.g;
    a.sl = this.N;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m,
        this.h.log("langidshow", a),
        jm(this.F, 5, 1, !1)) : (a.corr = this.c,
        a.corrtype = this.w,
        this.h.log("spell", a),
        jm(this.F, 4, 1, !1))
}
;
h.Tm = function() {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        Pm(this.h, "orig", a);
        Pm(this.h, "psl", this.N);
        this.Ca(this.W, this.m);
        xt(this.R, this.m, "", this.g, "tws_lsugg");
        a = this.F;
        N(a, fm(a, 79, 5, 1, !1, 1))
    } else
        a = this.g,
        64 < a.length && (a = a.substr(0, 64)),
            Pm(this.h, "orig", a),
            Pm(this.h, "corrtype", this.w),
            this.b ? xt(this.R, "", "", this.c, "tws_confirm") : xt(this.R, "", "", this.c, "tws_spell"),
            a = this.F,
            N(a, fm(a, 79, 4, 1, !1, 1));
    a = this.K;
    a.ob() && (a.stop(),
        a.Pg());
    this.setVisible(!1)
}
;
var PG = {}
    , QG = (PG[1] = 1,
    PG[2] = 2,
    PG[3] = 3,
    PG[4] = 4,
    PG[5] = 5,
    PG[6] = 6,
    PG[7] = 7,
    PG[8] = 8,
    PG[9] = 9,
    PG[10] = 10,
    PG);
OG.prototype.xa = function() {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    Pm(this.h, "corr", a);
    Pm(this.h, "corrtype", this.w);
    this.C = !1;
    xt(this.R, "", "", this.g, "tws_revert");
    a = this.K;
    a.ob() && (a.stop(),
        a.Pg());
    this.setVisible(!1);
    a = this.F;
    for (var b = this.g, c = [], d = 0; d < this.w.length; d++) {
        var e = QG[this.w[d]];
        c.push(e ? e : 0)
    }
    d = new gl;
    b = B(d, 1, b);
    c = B(b, 2, c || []);
    b = O(a, 139);
    c = mf(b, 55, c);
    N(a, c)
}
;
var RG = function() {
    this.a = Gw(INPUT_SUGGESTION_SERVER_URL);
    this.ed = 5E3
}
    , SG = 0;
RG.prototype.send = function(a, b, c, d) {
    a = a ? Vb(a) : {};
    d = d || "_" + (SG++).toString(36) + Ua().toString(36);
    var e = "_callbacks___" + d;
    b && (n[e] = TG(d, b),
        a.callback = e);
    b = {
        timeout: this.ed,
        jk: !0
    };
    e = rc(this.a);
    e = sc.exec(e);
    var f = e[3] || "";
    e = tc(e[1] + uc("?", e[2] || "", a) + uc("#", f, void 0));
    b = $y(e, b);
    Ty(b, null, UG(d, a, c), void 0);
    return {
        qa: d,
        li: b
    }
}
;
RG.prototype.cancel = function(a) {
    a && (a.li && a.li.cancel(),
    a.qa && VG(a.qa, !1))
}
;
var UG = function(a, b, c) {
    return function() {
        VG(a, !1);
        c && c(b)
    }
}
    , TG = function(a, b) {
    return function(c) {
        VG(a, !0);
        b.apply(void 0, arguments)
    }
}
    , VG = function(a, b) {
    a = "_callbacks___" + a;
    if (n[a])
        if (b)
            try {
                delete n[a]
            } catch (c) {
                n[a] = void 0
            }
        else
            n[a] = Fa
};
var WG = function() {
    var a = INPUT_SUGGESTION_CLIENT_NAME
        , b = INPUT_SUGGESTION_DATASET;
    this.g = new RG;
    this.g.ed = 500;
    this.a = null;
    this.h = 0;
    this.c = !1;
    this.C = Hm.M();
    this.F = L.M();
    this.m = b || "translate";
    this.G = a || "translate_separate_corpus"
}
    , uD = function(a, b, c, d, e) {
    JD(a);
    if (0 == b.length || 64 < b.length || "auto" == c)
        e([]);
    else {
        c = "zh-CN" == c || "zh-TW" == c ? "zh" : c;
        var f = 167 - (Ua() - a.h);
        0 > f && (f = 0);
        a.b = Di(function() {
            if (this.b) {
                this.b = void 0;
                var g = c;
                this.h = Ua();
                var k = {};
                k.q = b;
                k.client = this.G;
                k.ds = this.m;
                k.hl = g;
                k.requiredfields = "tl:" + d;
                this.a = this.g.send(k, v(this.w, this, b, g, d, e), v(this.v, this, "4", b, g, d, 144))
            }
        }, f, a)
    }
}
    , JD = function(a) {
    a.a && (a.c = !0,
        a.g.cancel(a.a),
        a.a = null);
    a.b && (Ei(a.b),
        a.b = void 0)
};
WG.prototype.v = function(a, b, c, d, e, f, g, k) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g)
            try {
                b.se = g.substring(0, 64)
            } catch (l) {
                throw Error(l + " opt_context is " + g);
            }
        k && (b.msg = k.substring(0, 64));
        nm(this.F, e);
        Mm(this.C, "webapp", "is", a, b)
    }
    this.c = !1
}
;
WG.prototype.w = function(a, b, c, d, e) {
    try {
        var f = lb(e[1], function(g) {
            return he(g[0])
        }, this);
        d(f)
    } catch (g) {
        this.v("5", a, b, c, 53, null, fj(e), g.message)
    }
    this.a = null
}
;
var XG = function() {
    this.a = [];
    this.c = this.b = null
}
    , OD = function(a) {
    var b = a.a.length;
    b += a.b ? 1 : 0;
    b += a.c ? 1 : 0;
    return a = b + (a.c ? 1 : 0)
};
var YG = function(a) {
    this.a = a || "menu"
};
w(YG, Mw);
Ga(YG);
YG.prototype.Ee = function() {
    return "gt-is"
}
;
YG.prototype.b = function(a) {
    return mg(a)
}
;
YG.prototype.Df = function(a) {
    return "DIV" == a.tagName && a.firstChild && "DIV" == a.firstChild.tagName ? !0 : !1
}
;
YG.prototype.c = function() {
    var a = F("DIV", "gt-is")
        , b = F("DIV", "gt-is-ctr");
    dg(a, b);
    return a
}
;
var ZG = function(a, b, c) {
    Tw.call(this, a || Sw(YG.M()), b || YG.M(), c);
    this.b = [];
    this.h = this.g = this.c = null;
    dx(this, !1)
};
w(ZG, Tw);
var ID = function(a, b) {
    y(a.b, function(c) {
        this.removeChild(c, !0)
    }, a);
    y(b, function(c, d) {
        this.c ? this.pd(c, cr(this, this.c), !0) : this.kb(c, !0);
        d = "gt-is-si-" + d;
        c.vd("gt-is-sg").id = d
    }, a);
    a.b = b
}
    , MD = function(a, b) {
    a.g && a.removeChild(a.g, !0);
    if (b) {
        var c = cr(a, a.h) + 1;
        a.pd(b, c, !0)
    }
    a.g = b
}
    , ND = function(a, b) {
    (a = a.b[0]) && (a = a.vd(a.oi ? "gt-is-ld-top" : "gt-is-ld")) && W(a, b)
};
ZG.prototype.Ya = function(a) {
    return 27 == a.keyCode ? (this.setVisible(!1),
        a.stopPropagation(),
        a.preventDefault(),
        !0) : ZG.D.Ya.call(this, a)
}
;
var $G = function(a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.w = b;
    Fs.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.g = []
};
w($G, Fs);
h = $G.prototype;
h.update = function(a, b, c, d) {
    $G.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 11))
        return !1;
    fg(this.b);
    this.Dd();
    var e = c = 0;
    for (a = 0; a < I(d, 11); ++a) {
        var f = new gp(Il(d, 11, a))
            , g = J(f, 2);
        c += f.a();
        for (b = 0; b < f.a(); ++b)
            e += I(f.b(b), 0)
    }
    if (b = 2 < c / I(d, 11) && 1 < e - c)
        a = MSG_N_MORE_SYNONYMS_LABEL.replace("%1$s", (e - c).toLocaleString(this.Ra)),
            Hs(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / I(d, 11);
    g && (this.hf = g,
        Gs(this, g));
    for (a = 0; a < I(d, 11); ++a) {
        f = new gp(Il(d, 11, a));
        g = F("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(g);
        G(g, J(f, 0));
        g = f;
        f = c;
        e = b;
        var k = F("UL", {
            "class": "gt-syn-list"
        });
        var l = kc(this.Aa) ? "rtl" : "ltr";
        bq(k, {
            direction: l
        });
        if (e) {
            l = F("SPAN", {
                "class": "gt-syn-span"
            });
            for (var m = F("DIV", {
                "class": "gt-syn-row"
            }, l), q = [], r = 0; r < g.a(); ++r) {
                var u = g.b(r);
                u = Hh(u, 0, 0);
                if (!sb(q, u)) {
                    q.push(u);
                    this.w || 0 < r && l.appendChild(ag(", "));
                    var C = F("SPAN", {
                        "class": "gt-cd-cl"
                    });
                    l.appendChild(C);
                    this.w ? G(C, " " + u + " ") : G(C, u);
                    this.g.push(C)
                }
            }
            l = F("DIV", {
                "class": "gt-syn-summary-row"
            }, m);
            k.appendChild(l)
        }
        for (l = 0; l < g.a(); ++l) {
            m = g.b(l);
            r = e;
            u = f ? "DIV" : "LI";
            q = F("SPAN", {
                "class": "gt-syn-span"
            });
            u = F(u, {
                "class": "gt-syn-row"
            }, q);
            r = Is(u, !r);
            for (u = 0; u < I(m, 0); ++u)
                C = F("SPAN", {
                    "class": "gt-cd-cl"
                }),
                    q.appendChild(C),
                    this.w ? G(C, " " + Hh(m, 0, u) + " ") : G(C, Hh(m, 0, u)),
                    this.c.push(C),
                this.w || u < I(m, 0) - 1 && q.appendChild(ag(", "));
            k.appendChild(r)
        }
        this.b.appendChild(k)
    }
    this.setVisible(!0);
    return !0
}
;
h.Z = function() {
    $G.D.Z.call(this);
    Y(this).listen(this.j(), "click", this.uo)
}
;
h.uo = function(a) {
    Pp(a.target, "gt-cd-cl") && this.dispatchEvent(new Mg("a",a.target))
}
;
h.ge = function(a) {
    $G.D.ge.call(this, a);
    for (var b = Of("gt-syn-summary-row", this.j()), c = 0; c < b.length; c++) {
        var d = b[c]
            , e = D("gt-syn-row", d)
            , f = Gq(e, "margin");
        e = uq(e).height + f.top + f.bottom;
        bq(d, "max-height", a ? 0 : e + "px")
    }
}
;
h.ze = function() {
    return this.m ? $G.D.ze.call(this) : this.g.length
}
;
h.Mg = function(a) {
    return this.m ? $G.D.Mg.call(this, a) : this.g.indexOf(a)
}
;
h.Dd = function() {
    $G.D.Dd.call(this);
    this.g = []
}
;
var aH = function(a, b) {
    this.C = Hm.M();
    this.F = L.M();
    this.g = a;
    A || xe || ze || H(a, "copy", this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++)
        H(b[a], "mousedown", this.w, !1, this);
    this.c = this.b = null;
    this.v = this.h = !1
};
w(aH, Jg);
aH.prototype.T = function() {
    aH.D.T.call(this);
    ph(this.g, "copy", this.m, !1, this);
    this.g = null;
    for (var a = 0; a < this.a.length; a++)
        ph(this.a[a], "mousedown", this.w, !1, this);
    this.a = null
}
;
aH.prototype.m = function() {
    var a = dA();
    a && this.g && (this.c = a,
        Di(this.G, 0, this),
    Lf("gt-res-edit") && (this.h = xq(Lf("gt-res-edit")),
        this.v = xq(Lf("gt-res-undo")),
        W(Lf("gt-res-edit"), !1),
        W(Lf("gt-res-undo"), !1)),
        a = tz(window).toString(),
        this.b = gA(a))
}
;
aH.prototype.w = function(a) {
    var b = a.b.detail;
    1 < b && Xg(a) && sb(this.a, a.target) && (a.preventDefault(),
        fA(this.g),
        a = {},
        a.clickCount = b,
        this.C.log("dblClickSelectall", a),
        b = this.F,
        N(b, O(b, 236)))
}
;
aH.prototype.G = function() {
    this.c && (this.c.select(),
        this.c = null);
    this.b && (jg(this.b),
        this.b = null);
    this.h && W(Lf("gt-res-edit"), !0);
    this.v && W(Lf("gt-res-undo"), !0)
}
;
var bH = function(a) {
    this.a = zq(Fw(""));
    this.b = (Ia(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
bH.prototype.set = function(a) {
    yq(this.a, Fw("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
}
;
var cH = function() {
    uF.M();
    var a = tF("\u1288") == tF("\u1290")
        , b = vF("\u09a5\u09cd")
        , c = vF("\u1780\u17d1")
        , d = vF("\u0e81\u0ec8")
        , e = vF("\u0d15\u0d4d")
        , f = vF("\u1001\u1039\u1010")
        , g = vF("\u0da5\u0dca");
    var k = vF("\u0ba4\u0bcd") || tF("\u0bb1\u0bc6\u0bbe") + tF("\u0bb1") != tF("\u0bb1\u0bc6") + tF("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: k
    }
};
Ga(cH);
var dH = {
    "Noto Sans Ethiopic": "notosansethiopic",
    "Noto Naskh Arabic": "notonaskharabic",
    "Noto Sans Malayalam": "notosansmalayalam",
    "Noto Sans Myanmar": "notosansmyanmar",
    "Noto Sans Sinhala": "notosanssinhala"
}
    , eH = {
    Dhyana: $e || we || Ye || Xe || We
}
    , fH = {
    lo: Ee && 0 <= Lc(Xr, "6.0")
}
    , gH = {
    am: "Noto Sans Ethiopic",
    bn: "Lohit Bengali",
    lo: "Dhyana",
    km: "Nokora",
    ml: "Noto Sans Malayalam",
    my: "Noto Sans Myanmar",
    ps: "Noto Naskh Arabic",
    sd: "Noto Naskh Arabic",
    si: "Noto Sans Sinhala",
    ta: "Lohit Tamil"
}
    , hH = function() {
    this.a = {};
    cH.M()
};
Ga(hH);
var lH = function() {
    this.h = cH.M();
    this.g = hH.M();
    this.c = new bH(iH);
    this.a = new bH(jH);
    this.b = new bH(kH)
}
    , iH = ["body", "#gb"]
    , jH = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" ")
    , kH = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" ")
    , mH = function(a, b, c) {
    a: {
        var d = fH[c]
            , e = a.h.a[c];
        if ((null == d || !d) && null != e && e && (c = gH[c],
        null != c && (d = eH[c],
        null == d || !d)))
            break a;
        c = ""
    }
    a = a.g;
    "" != c && null == a.a[c] && (a = a.a,
        d = c,
        e = new Tm,
        null != dH[d] ? Wm(e, "/earlyaccess/" + dH[d] + ".css") : (Wm(e, "/css"),
            e.a.set("family", d)),
        a[c] = zq(Fw("@import url(//fonts.googleapis.com" + e.toString() + ");")));
    b.set(c)
};
var nH = function(a) {
    K.call(this);
    this.o = a;
    this.b = E("tlid-app-download-button", this.o);
    this.F = L.M();
    this.a = Hm.M();
    Ch(this.b, this.c.bind(this))
};
ka(nH, K);
nH.prototype.c = function() {
    if (Pp(this.o, "popup-open"))
        oH(this, !1);
    else {
        if (Pp(this.o, "tlid-android-download")) {
            var a = this.F;
            N(a, O(a, 333));
            this.a.log("cad=and", {})
        } else
            Pp(this.o, "tlid-ios-download") && (a = this.F,
                N(a, O(a, 334)),
                this.a.log("cad=ios", {}));
        oH(this, !0)
    }
}
;
var oH = function(a, b) {
    V(a.o, "popup-open", b);
    b && a.dispatchEvent("popup_opened")
};
var qH = function(a) {
    this.o = a;
    a = Of("tlid-app-download-button-container", this.o);
    for (var b = [], c = 0; c < a.length; c++)
        b.push(new nH(a[c]));
    this.a = b;
    pH(this)
}
    , pH = function(a) {
    a.a.forEach(function(b) {
        H(b, "popup_opened", v(a.b, a, b), !1, a)
    });
    H(a.o, "keydown", function(b) {
        Bh(b, Of("tlid-app-download-button", a.o))
    }, !1)
};
qH.prototype.b = function(a) {
    this.a.forEach(function(b) {
        b != a && oH(b, !1)
    })
}
;
var rH = function(a) {
    this.a = a;
    this.b = E("tlid-brain-logo", this.a);
    this.c = E("tlid-no-brain-logo", this.a)
}
    , uH = function(a, b, c) {
    b = sH(b, c) && !tH(b, c) ? !0 : "en" !== b && "en" !== c ? sH(b, "en") && sH("en", c) && !tH(b, c) : !1;
    V(a.b, "hidden", !b);
    V(a.c, "hidden", b)
}
    , sH = function(a, b) {
    var c = !1;
    y(DATA.NeuralEnabledPairs, function(d) {
        d.Source === a && d.Target === b && (c = !0)
    });
    return c
}
    , tH = function(a, b) {
    var c = !1;
    y(DATA.ExcludedPairs, function(d) {
        d.Source === a && d.Target === b && (c = !0)
    });
    return c
};
var vH = function(a) {
    rs(a, 2)
};
var xH = function(a, b, c) {
    K.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Zp(NaN,NaN,NaN,NaN);
    this.c = Jf(a);
    this.a = new Kq(this);
    Lg(this, this.a);
    this.deltaY = this.deltaX = this.C = this.G = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.v = !0;
    this.b = !1;
    H(this.m, ["touchstart", "mousedown"], this.sj, !1, this);
    this.h = wH
};
w(xH, K);
var wH = n.document && n.document.documentElement && !!n.document.documentElement.setCapture && !!n.document.releaseCapture;
h = xH.prototype;
h.oa = function(a) {
    this.v = a
}
;
h.T = function() {
    xH.D.T.call(this);
    ph(this.m, ["touchstart", "mousedown"], this.sj, !1, this);
    Pq(this.a);
    this.h && this.c.releaseCapture();
    this.m = this.target = null
}
;
h.sj = function(a) {
    var b = "mousedown" == a.type;
    if (!this.v || this.b || b && !Xg(a))
        this.dispatchEvent("earlycancel");
    else if (this.dispatchEvent(new yH("start",this,a.clientX,a.clientY,a))) {
        this.b = !0;
        b && a.preventDefault();
        b = this.c;
        var c = b.documentElement
            , d = !this.h;
        this.a.listen(b, ["touchmove", "mousemove"], this.Fl, {
            capture: d,
            passive: !1
        });
        this.a.listen(b, ["touchend", "mouseup"], this.pf, d);
        this.h ? (c.setCapture(!1),
            this.a.listen(c, "losecapture", this.pf)) : this.a.listen(Wf(b), "blur", this.pf);
        this.K && this.a.listen(this.K, "scroll", this.L, d);
        this.clientX = this.G = a.clientX;
        this.clientY = this.C = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.w = Vf(Kf(this.c).a)
    }
}
;
h.pf = function(a, b) {
    Pq(this.a);
    this.h && this.c.releaseCapture();
    this.b ? (this.b = !1,
        this.dispatchEvent(new yH("end",this,a.clientX,a.clientY,a,zH(this, this.deltaX),AH(this, this.deltaY),b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
}
;
h.Fl = function(a) {
    if (this.v) {
        var b = a.clientX - this.clientX
            , c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.G - this.clientX
                , e = this.C - this.clientY;
            if (0 < d * d + e * e)
                if (this.dispatchEvent(new yH("start",this,a.clientX,a.clientY,a)))
                    this.b = !0;
                else {
                    this.isDisposed() || this.pf(a);
                    return
                }
        }
        c = BH(this, b, c);
        b = c.x;
        c = c.a;
        this.b && this.dispatchEvent(new yH("beforedrag",this,a.clientX,a.clientY,a,b,c)) && (CH(this, a, b, c),
            a.preventDefault())
    }
}
;
var BH = function(a, b, c) {
    var d = Vf(Kf(a.c).a);
    b += d.x - a.w.x;
    c += d.a - a.w.a;
    a.w = d;
    a.deltaX += b;
    a.deltaY += c;
    return new Ff(zH(a, a.deltaX),AH(a, a.deltaY))
};
xH.prototype.L = function(a) {
    var b = BH(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    CH(this, a, b.x, b.a)
}
;
var CH = function(a, b, c, d) {
    a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    a.dispatchEvent(new yH("drag",a,b.clientX,b.clientY,b,c,d))
}
    , zH = function(a, b) {
    var c = a.g;
    a = isNaN(c.left) ? null : c.left;
    c = isNaN(c.width) ? 0 : c.width;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
}
    , AH = function(a, b) {
    var c = a.g;
    a = isNaN(c.top) ? null : c.top;
    c = isNaN(c.height) ? 0 : c.height;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
}
    , yH = function(a, b, c, d, e, f, g) {
    Mg.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.left = p(f) ? f : b.deltaX;
    this.top = p(g) ? g : b.deltaY
};
w(yH, Mg);
(function() {
        for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !n.requestAnimationFrame; ++c)
            n.requestAnimationFrame = n[b + "RequestAnimationFrame"],
                n.cancelAnimationFrame = n[b + "CancelAnimationFrame"] || n[b + "CancelRequestAnimationFrame"];
        if (!n.requestAnimationFrame) {
            var d = 0;
            n.requestAnimationFrame = function(e) {
                var f = (new Date).getTime()
                    , g = Math.max(0, 16 - (f - d));
                d = f + g;
                return n.setTimeout(function() {
                    e(f + g)
                }, g)
            }
            ;
            n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                }
            )
        }
    }
)();
var DH = [[], []]
    , EH = 0
    , FH = !1
    , GH = 0
    , IH = function(a, b) {
    var c = GH++
        , d = {
        Bm: {
            id: c,
            Dc: a.measure,
            context: b
        },
        Lm: {
            id: c,
            Dc: a.Km,
            context: b
        },
        state: {},
        Kb: void 0,
        Wf: !1
    };
    return function() {
        0 < arguments.length ? (d.Kb || (d.Kb = []),
            d.Kb.length = 0,
            d.Kb.push.apply(d.Kb, arguments),
            d.Kb.push(d.state)) : d.Kb && 0 != d.Kb.length ? (d.Kb[0] = d.state,
            d.Kb.length = 1) : d.Kb = [d.state];
        d.Wf || (d.Wf = !0,
            DH[EH].push(d));
        FH || (FH = !0,
            window.requestAnimationFrame(HH))
    }
}
    , HH = function() {
    FH = !1;
    var a = DH[EH]
        , b = a.length;
    EH = (EH + 1) % 2;
    for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.Bm;
        c.Wf = !1;
        e.Dc && e.Dc.apply(e.context, c.Kb)
    }
    for (d = 0; d < b; ++d)
        c = a[d],
            e = c.Lm,
            c.Wf = !1,
        e.Dc && e.Dc.apply(e.context, c.Kb),
            c.state = {};
    a.length = 0
};
var JH = A ? tc(dc(ec('javascript:""'))) : tc(dc(ec("about:blank")));
rc(JH);
var KH = A ? tc(dc(ec('javascript:""'))) : tc(dc(ec("javascript:undefined")));
rc(KH);
var LH = function(a, b) {
    this.o = a;
    this.b = b
};
var MH = function(a, b) {
    X.call(this, b);
    this.W = !!a;
    this.g = null;
    this.R = IH({
        Km: this.cg
    }, this)
};
w(MH, X);
h = MH.prototype;
h.Kg = null;
h.Mf = !1;
h.Bb = null;
h.qb = null;
h.jc = null;
h.wg = !1;
h.Le = function() {
    return "goog-modalpopup"
}
;
h.tf = function() {
    return this.Bb
}
;
h.La = function() {
    MH.D.La.call(this);
    var a = this.j();
    x(a);
    Qp(a, yc(this.Le()).split(" "));
    xg(a, !0);
    W(a, !1);
    NH(this);
    OH(this)
}
;
var NH = function(a) {
    if (a.W && !a.qb) {
        var b = a.a.b("IFRAME", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;"
        });
        Wd(b, JH);
        a.qb = b;
        a.qb.className = a.Le() + "-bg";
        W(a.qb, !1);
        wq(a.qb, 0)
    }
    a.Bb || (a.Bb = a.a.b("DIV", a.Le() + "-bg"),
        W(a.Bb, !1))
}
    , OH = function(a) {
    a.jc || (a.jc = Hg(a.a, "SPAN"),
        W(a.jc, !1),
        xg(a.jc, !0),
        a.jc.style.position = "absolute")
};
h = MH.prototype;
h.gj = function() {
    this.wg = !1
}
;
h.Xc = function(a) {
    return !!a && "DIV" == a.tagName
}
;
h.Da = function(a) {
    MH.D.Da.call(this, a);
    a = yc(this.Le()).split(" ");
    Qp(x(this.j()), a);
    NH(this);
    OH(this);
    xg(this.j(), !0);
    W(this.j(), !1)
}
;
h.Z = function() {
    x(!!this.Bb, "Background element must not be null.");
    this.qb && gg(this.qb, this.j());
    gg(this.Bb, this.j());
    MH.D.Z.call(this);
    hg(this.jc, this.j());
    this.Kg = new oE(this.a.a);
    Y(this).listen(this.Kg, "focusin", this.Vm);
    PH(this, !1)
}
;
h.bb = function() {
    this.isVisible() && this.setVisible(!1);
    Kg(this.Kg);
    MH.D.bb.call(this);
    jg(this.qb);
    jg(this.Bb);
    jg(this.jc)
}
;
h.setVisible = function(a) {
    x(this.ya, "ModalPopup must be rendered first.");
    if (a != this.Mf)
        if (this.m && this.m.stop(),
        this.C && this.C.stop(),
        this.h && this.h.stop(),
        this.w && this.w.stop(),
        this.ya && PH(this, a),
            a) {
            if (this.dispatchEvent("beforeshow")) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.cg();
                var b = Wf(this.a.a) || window;
                if ("fixed" == eq(this.j(), "position"))
                    var c = a = 0;
                else
                    c = Vf(this.a.a),
                        a = c.x,
                        c = c.a;
                var d = uq(this.j());
                b = Tf(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height / 2, 0);
                gq(this.j(), a, c);
                gq(this.jc, a, c);
                Y(this).listen(Ig(this.a), "resize", this.cg).listen(Ig(this.a), "orientationchange", this.R);
                QH(this, !0);
                this.pi();
                this.Mf = !0;
                this.m && this.C ? (ih(this.m, "end", this.Lf, !1, this),
                    this.C.play(),
                    this.m.play()) : this.Lf()
            }
        } else if (this.dispatchEvent("beforehide")) {
            Y(this).Ga(Ig(this.a), "resize", this.cg).Ga(Ig(this.a), "orientationchange", this.R);
            this.Mf = !1;
            this.h && this.w ? (ih(this.h, "end", this.Kf, !1, this),
                this.w.play(),
                this.h.play()) : this.Kf();
            a: {
                try {
                    c = this.a;
                    d = c.a.body;
                    b = c.a.activeElement || d;
                    if (!this.g || this.g == d) {
                        this.g = null;
                        break a
                    }
                    (b == d || c.contains(this.j(), b)) && this.g.focus()
                } catch (e) {}
                this.g = null
            }
        }
}
;
var PH = function(a, b) {
    a.K || (a.K = new LH(Vq(a),a.a));
    a = a.K;
    if (b) {
        a.a || (a.a = []);
        b = a.b.wi(a.b.a.body);
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d == a.o || Kp(d, "hidden") || (Jp(d, "hidden", !0),
                a.a.push(d))
        }
    } else if (a.a) {
        for (c = 0; c < a.a.length; c++)
            a.a[c].removeAttribute(Ip("hidden"));
        a.a = null
    }
}
    , QH = function(a, b) {
    a.qb && W(a.qb, b);
    a.Bb && W(a.Bb, b);
    W(a.j(), b);
    W(a.jc, b)
};
h = MH.prototype;
h.Lf = function() {
    this.dispatchEvent("show")
}
;
h.Kf = function() {
    QH(this, !1);
    this.dispatchEvent("hide")
}
;
h.isVisible = function() {
    return this.Mf
}
;
h.cg = function() {
    this.qb && W(this.qb, !1);
    this.Bb && W(this.Bb, !1);
    var a = this.a.a
        , b = Tf(Wf(a) || window || window)
        , c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.qb && (W(this.qb, !0),
        tq(this.qb, c, a));
    this.Bb && (W(this.Bb, !0),
        tq(this.Bb, c, a))
}
;
h.Vm = function(a) {
    this.wg ? this.gj() : a.target == this.jc && Di(this.pi, 0, this)
}
;
h.pi = function() {
    try {
        A && this.a.a.body.focus(),
            this.j().focus()
    } catch (a) {}
}
;
h.T = function() {
    Kg(this.m);
    this.m = null;
    Kg(this.h);
    this.h = null;
    Kg(this.C);
    this.C = null;
    Kg(this.w);
    this.w = null;
    MH.D.T.call(this)
}
;
var VH = function(a, b, c) {
    MH.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = RH(RH(new SH, TH, !0), UH, !1, !0)
};
w(VH, MH);
h = VH.prototype;
h.ni = !0;
h.Zi = !0;
h.Fg = !0;
h.gf = .5;
h.Fh = "";
h.yd = null;
h.Qc = null;
h.Ib = null;
h.zb = null;
h.eg = null;
h.Hb = null;
h.hc = null;
h.mb = null;
h.Le = function() {
    return this.c
}
;
var WH = function(a, b) {
    a.Fh = b;
    a.zb && G(a.zb, b)
}
    , XH = function(a, b) {
    a.yd = b;
    a.hc && Ud(a.hc, b)
};
VH.prototype.Sa = function() {
    return null != this.yd ? Bd(this.yd).toString() : ""
}
;
VH.prototype.Zb = function() {
    this.j() || this.render();
    return this.hc
}
;
VH.prototype.tf = function() {
    this.j() || this.render();
    return VH.D.tf.call(this)
}
;
var YH = function(a, b) {
    a.gf = b;
    a.j() && (b = a.tf()) && wq(b, a.gf)
}
    , ZH = function(a, b) {
    var c = yc(a.c + "-title-draggable").split(" ");
    a.j() && (b ? Qp(x(a.Ib), c) : Rp(x(a.Ib), c));
    b && !a.Qc ? (a.Qc = new xH(a.j(),a.Ib),
        Qp(x(a.Ib), c),
        H(a.Qc, "start", a.Dn, !1, a)) : !b && a.Qc && (a.Qc.Ka(),
        a.Qc = null)
};
h = VH.prototype;
h.La = function() {
    VH.D.La.call(this);
    var a = this.j();
    x(a, "getElement() returns null");
    var b = this.a;
    this.Ib = b.b("DIV", this.c + "-title", this.zb = b.b("SPAN", {
        className: this.c + "-title-text",
        id: Tq(this)
    }, this.Fh), this.Hb = b.b("SPAN", this.c + "-title-close"));
    eg(a, this.Ib, this.hc = b.b("DIV", this.c + "-content"), this.mb = b.b("DIV", this.c + "-buttons"));
    Hp(this.zb, "heading");
    Hp(this.Hb, "button");
    xg(this.Hb, !0);
    Np(this.Hb, "\u5173\u95ed");
    this.eg = this.zb.id;
    Hp(a, "dialog");
    Jp(a, "labelledby", this.eg || "");
    this.yd && Ud(this.hc, this.yd);
    W(this.Hb, !0);
    this.b && (a = this.b,
        a.o = this.mb,
        a.render());
    W(this.mb, !!this.b);
    YH(this, this.gf)
}
;
h.Da = function(a) {
    VH.D.Da.call(this, a);
    a = this.j();
    x(a, "The DOM element for dialog cannot be null.");
    var b = this.c + "-content";
    this.hc = Nf(document, null, b, a)[0];
    this.hc || (this.hc = this.a.b("DIV", b),
    this.yd && Ud(this.hc, this.yd),
        a.appendChild(this.hc));
    b = this.c + "-title";
    var c = this.c + "-title-text"
        , d = this.c + "-title-close";
    (this.Ib = Nf(document, null, b, a)[0]) ? (this.zb = Nf(document, null, c, this.Ib)[0],
        this.Hb = Nf(document, null, d, this.Ib)[0]) : (this.Ib = this.a.b("DIV", b),
        a.insertBefore(this.Ib, this.hc));
    this.zb ? (this.Fh = Cg(this.zb),
    this.zb.id || (this.zb.id = Tq(this))) : (this.zb = F("SPAN", {
        className: c,
        id: Tq(this)
    }),
        this.Ib.appendChild(this.zb));
    this.eg = this.zb.id;
    Jp(a, "labelledby", this.eg || "");
    this.Hb || (this.Hb = this.a.b("SPAN", d),
        this.Ib.appendChild(this.Hb));
    W(this.Hb, !0);
    b = this.c + "-buttons";
    if (this.mb = Nf(document, null, b, a)[0]) {
        if (a = this.b = new SH(this.a),
        (b = this.mb) && 1 == b.nodeType) {
            a.o = b;
            b = Mf("BUTTON", a.o);
            c = 0;
            for (var e, f; d = b[c]; c++)
                if (e = d.name || d.id,
                    f = Cg(d) || d.value,
                    e) {
                    var g = 0 == c;
                    a.set(e, f, g, "cancel" == d.name);
                    g && T(d, "goog-buttonset-default")
                }
        }
    } else
        this.mb = this.a.b("DIV", b),
            a.appendChild(this.mb),
        this.b && (a = this.b,
            a.o = this.mb,
            a.render()),
            W(this.mb, !!this.b);
    YH(this, this.gf)
}
;
h.Z = function() {
    VH.D.Z.call(this);
    Y(this).listen(this.j(), "keydown", this.N).listen(this.j(), "keypress", this.N);
    Y(this).listen(this.mb, "click", this.V);
    ZH(this, this.Fg);
    Y(this).listen(this.Hb, "click", this.an);
    var a = this.j();
    x(a, "The DOM element for dialog cannot be null");
    Hp(a, "dialog");
    "" !== this.zb.id && Jp(a, "labelledby", this.zb.id);
    if (!this.Zi) {
        this.Zi = !1;
        if (this.ya) {
            a = this.a;
            var b = this.tf();
            a.zi(this.qb);
            a.zi(b)
        }
        this.isVisible() && PH(this, !1)
    }
}
;
h.bb = function() {
    this.isVisible() && this.setVisible(!1);
    ZH(this, !1);
    VH.D.bb.call(this)
}
;
h.setVisible = function(a) {
    a != this.isVisible() && (this.ya || this.render(),
        VH.D.setVisible.call(this, a))
}
;
h.Lf = function() {
    VH.D.Lf.call(this);
    this.dispatchEvent("aftershow")
}
;
h.Kf = function() {
    VH.D.Kf.call(this);
    this.dispatchEvent("afterhide")
}
;
h.Dn = function() {
    var a = this.a.a
        , b = Tf(Wf(a) || window || window)
        , c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = uq(this.j());
    "fixed" == eq(this.j(), "position") ? this.Qc.g = new Zp(0,0,Math.max(0, b.width - d.width),Math.max(0, b.height - d.height)) : this.Qc.g = new Zp(0,0,c - d.width,a - d.height)
}
;
h.an = function() {
    $H(this)
}
;
var $H = function(a) {
    var b = a.b
        , c = b && b.Jf;
    c ? (b = b.get(c),
    a.dispatchEvent(new aI(c,b)) && a.setVisible(!1)) : a.setVisible(!1)
};
VH.prototype.T = function() {
    this.mb = this.Hb = null;
    VH.D.T.call(this)
}
;
var bI = function(a, b) {
    a.b = b;
    a.mb && (a.b ? (b = a.b,
        b.o = a.mb,
        b.render()) : Ud(a.mb, Kd),
        W(a.mb, !!a.b))
};
VH.prototype.V = function(a) {
    a: {
        for (a = a.target; null != a && a != this.mb; ) {
            if ("BUTTON" == a.tagName)
                break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new aI(a,b)) && this.setVisible(!1)
    }
}
;
VH.prototype.N = function(a) {
    var b = !1
        , c = !1
        , d = this.b
        , e = a.target;
    if ("keydown" == a.type)
        if (this.ni && 27 == a.keyCode) {
            var f = d && d.Jf;
            e = "SELECT" == e.tagName && !e.disabled;
            f && !e ? (c = !0,
                b = d.get(f),
                b = this.dispatchEvent(new aI(f,b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.j()) {
                this.wg = !0;
                try {
                    this.jc.focus()
                } catch (q) {}
                Di(this.gj, 0, this)
            }
        }
    else if (13 == a.keyCode) {
        if ("BUTTON" == e.tagName && !e.disabled)
            f = e.name;
        else if (e == this.Hb)
            $H(this);
        else if (d) {
            var g = d.mf, k;
            if (k = g)
                a: {
                    k = Mf("BUTTON", x(d.o));
                    for (var l = 0, m; m = k[l]; l++)
                        if (m.name == g || m.id == g) {
                            k = m;
                            break a
                        }
                    k = null
                }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !k || k.disabled || e || (f = g)
        }
        f && d && (c = !0,
            b = this.dispatchEvent(new aI(f,String(d.get(f)))))
    } else
        e != this.Hb || 32 != a.keyCode && " " != a.key || $H(this);
    if (b || c)
        a.stopPropagation(),
            a.preventDefault();
    b && this.setVisible(!1)
}
;
var aI = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
w(aI, Mg);
var SH = function(a) {
    a || Kf();
    uj.call(this)
};
w(SH, uj);
h = SH.prototype;
h.mf = null;
h.o = null;
h.Jf = null;
h.Wc = function() {
    uj.prototype.Wc.call(this);
    this.mf = this.Jf = null
}
;
h.set = function(a, b, c, d) {
    uj.prototype.set.call(this, a, b);
    c && (this.mf = a);
    d && (this.Jf = a);
    return this
}
;
var RH = function(a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
};
SH.prototype.render = function() {
    if (this.o) {
        Ud(this.o, Kd);
        var a = Kf(this.o);
        this.forEach(function(b, c) {
            b = a.b("BUTTON", {
                name: c
            }, b);
            c == this.mf && (b.className = "goog-buttonset-default");
            this.o.appendChild(b)
        }, this)
    }
}
;
SH.prototype.j = function() {
    return this.o
}
;
var TH = {
    key: "ok",
    caption: "\u786e\u5b9a"
}
    , UH = {
    key: "cancel",
    caption: "\u53d6\u6d88"
}
    , cI = {
    key: "yes",
    caption: "\u662f"
}
    , dI = {
    key: "no",
    caption: "\u5426"
}
    , eI = {
    key: "save",
    caption: "\u4fdd\u5b58"
}
    , fI = {
    key: "continue",
    caption: "\u7ee7\u7eed"
};
"undefined" != typeof document && (RH(new SH, TH, !0, !0),
    RH(RH(new SH, TH, !0), UH, !1, !0),
    RH(RH(new SH, cI, !0), dI, !1, !0),
    RH(RH(RH(new SH, cI), dI, !0), UH, !1, !0),
    RH(RH(RH(new SH, fI), eI), UH, !0, !0));
var gI = Hm.M()
    , hI = null
    , iI = function(a, b, c, d, e) {
    var f = {};
    f.id = b;
    f.sl = c;
    f.tl = d;
    f.query = e.substring(0, 64);
    f.len = e.length;
    f.client = "webapp";
    gI.log(a, f)
}
    , jI = function(a, b) {
    var c = "";
    switch (DATA.CampaignTrackerId) {
        case "0":
            c = "https://goo.gl/ELUFVd";
            break;
        case "1a":
            c = "https://goo.gl/cHnrfS";
            break;
        case "1b":
            c = "https://goo.gl/7apRL6";
            break;
        case "1c":
            c = "https://goo.gl/ozXBPg";
            break;
        case "1f":
            c = "https://goo.gl/R0JqsC";
            break;
        case "1g":
            switch (b) {
                case 0:
                    c = "http://goo.gl/iosgoogleapp/translate2a";
                    break;
                case 1:
                    c = "http://goo.gl/iosgoogleapp/translate2b";
                    break;
                case 2:
                    c = "http://goo.gl/iosgoogleapp/translate2c"
            }
            break;
        case "1h":
            switch (b) {
                case 0:
                    c = "http://goo.gl/iosgoogleapp/translate2d";
                    break;
                case 1:
                    c = "http://goo.gl/iosgoogleapp/translate2e";
                    break;
                case 2:
                    c = "http://goo.gl/iosgoogleapp/translate2f";
                    break;
                case 3:
                    c = "http://goo.gl/iosgoogleapp/translate2g"
            }
            break;
        default:
            c = "https://goo.gl/F17Wul"
    }
    a ? Yd(window.location, c + "?url=google-deeplink://search%3Fq%3D" + ce(ce(a)) + "&waypoint_id=gt-" + DATA.CampaignTrackerId) : Yd(window.location, c + "?url=google-deeplink://open-url?url=http://www.google.com&waypoint_id=gt-" + DATA.CampaignTrackerId);
    Mm(gI, "webapp", "gsa", "open", {
        id: DATA.CampaignTrackerId
    });
    Dh("gsa", "gsa:open", "", 1)
}
    , kI = function(a) {
    a = "https://www.google.com/search?q=" + ce(a) + "&source=gt-" + DATA.CampaignTrackerId;
    Yd(Wf().location, a)
}
    , mI = function(a) {
    var b = $f("DIV");
    b.id = "bg-msk";
    document.body.appendChild(b);
    Di(function() {
        b.style.opacity = 1
    }, 0);
    hI = H(document.body, "touchmove", function(c) {
        c.preventDefault()
    });
    H(b, "click", function() {
        lI();
        a()
    })
}
    , lI = function() {
    var a = Lf("bg-msk");
    a && (jg(a),
    null != hI && (qh(hI),
        hI = null))
}
    , oI = function(a, b, c, d, e) {
    if (DATA.SignedIn)
        c();
    else {
        c = new VH("gt-md",!0);
        WH(c, DATA.Messages.SAVED_INTERSTITIAL_TITLE);
        XH(c, Ed(DATA.Messages.SAVED_INTERSTITIAL_CONTENT));
        c.Fg = !1;
        ZH(c, !1);
        var f = new SH;
        f.set("not_now", DATA.Messages.NOT_NOW);
        f.set("sign_in", DATA.Messages.SIGN_IN);
        bI(c, f);
        YH(c, .7);
        c.setVisible(!0);
        c.listen("dialogselect", v(nI, null, a, b, d, e));
        T(Mf("BODY")[0], "gt-md-on")
    }
}
    , nI = function(a, b, c, d, e) {
    "sign_in" == e.key ? bv(d) : (b.log("nosi", a),
        b = L.M(),
        N(b, O(b, mm[a])),
        c(),
        U(Mf("BODY")[0], "gt-md-on"))
}
    , qI = function(a) {
    return pI(a, DATA.SourceLanguageCodeNameList)
}
    , rI = function(a) {
    return pI(a, DATA.TargetLanguageCodeNameList)
}
    , pI = function(a, b) {
    return (b = Object.values(b).find(function(c) {
        return c.Code === a
    })) ? b.Name : ""
}
    , sI = function(a) {
    return !!a && Fh(a, 18) && 1 === (new dm(a.Va[18])).Sc() && 0 < I(new dm(a.Va[18]), 0)
}
    , uI = function(a) {
    if (!sI(a))
        return [];
    a = Array.from(Jl(new dm(a.Va[18]), 0, bm));
    a.sort(function(b, c) {
        b = tI(b.Rc());
        c = tI(c.Rc());
        return b.localeCompare(c, DATA.DisplayLanguage)
    });
    return a
}
    , tI = function(a) {
    switch (a) {
        case 2:
            return DATA.Messages.GRAMMATICAL_GENDER_FEMININE_WITH_PARENTHESES;
        case 1:
            return DATA.Messages.GRAMMATICAL_GENDER_MASCULINE_WITH_PARENTHESES;
        default:
            throw Error("Unsupported gender " + a);
    }
};
var vI = function(a) {
    var b = Vn(t(a.qe), "buttonText", a.qe, "string")
        , c = Vn(t(a.yg), "classname", a.yg, "string");
    a = Vn(t(a.identifier), "identifier", a.identifier, "string");
    return P("<div class='tlid-app-download-button-container " + S(a) + " app-download-button-container " + S(c) + "'><div class='tlid-app-download-button app-download-button header-button' role='button' tabindex='-1'><div class='text'>" + R(b) + "</div></div><div class='app-download-popup'><div class='popup-triangle'></div><div class='popup-container'><div class='text'>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d</div><div class='download-image'></div></div></div></div>")
};
var xI = function(a) {
    var b = Vn(t(a.Aa), "sourceLanguage", a.Aa, "string")
        , c = Vn(t(a.Rb), "sourcePhrase", a.Rb, "string")
        , d = Vn(t(a.Ja), "targetLanguage", a.Ja, "string")
        , e = Vn(t(a.Sb), "targetPhrase", a.Sb, "string")
        , f = Vn("boolean" == typeof a.Mc || 1 === a.Mc || 0 === a.Mc, "showStar", a.Mc, "boolean");
    a = Vn(t(a.rj), "starLabel", a.rj, "string");
    return P("<div class='tlid-history-entry history-entry' role=\"option\"><div class='language-pair' role=\"button\" tabindex=\"0\"><div class='language-pair-languages'>" + R(b) + " <span class='language-pair-arrow'></span> " + R(d) + "</div></div>" + (f ? "<button class='tlid-star-history-entry star-button button-icon' aria-label='" + S(a) + "' data-tooltip='" + S(a) + "'></button>" : "") + "<div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='starbutton-placeholder'></div>" + wI({
        Rb: c,
        Sb: e
    }) + "</div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='star-placeholder'></div>" + wI({
        Rb: c,
        Sb: e
    }) + "</div></div>")
};
xI.a = "trans.mobile.components.history.entry.template.main";
var wI = function(a) {
    var b = Vn(t(a.Rb), "sourcePhrase", a.Rb, "string");
    a = Vn(t(a.Sb), "targetPhrase", a.Sb, "string");
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi></div><div class='tl-output'><bdi>" + R(a) + "</bdi></div></div>")
};
var yI = function(a, b) {
    K.call(this);
    this.a = a;
    this.o = b;
    this.b = D("tlid-star-history-entry", this.o);
    this.c = E("tlid-browse-entry", this.o);
    this.g = E("tlid-select-entry", this.o);
    this.b && H(this.b, "click", this.Ql, !1, this);
    Ch(this.c, this.Im.bind(this));
    Ch(this.g, this.Jm.bind(this))
};
ka(yI, K);
h = yI.prototype;
h.Ql = function() {
    this.dispatchEvent("f")
}
;
h.Im = function() {
    this.dispatchEvent("d")
}
;
h.Jm = function() {
    this.dispatchEvent("e")
}
;
h.j = function() {
    return this.o
}
;
h.qh = function(a) {
    V(this.o, "starred", a)
}
;
var AI = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.g = Hm.M();
    this.o = a;
    this.a = [];
    this.v = b;
    this.c = null;
    this.C = zI(this, E("tlid-history-delete-all-button", this.o), this.L, !1);
    this.C.g("\u6e05\u9664\u5386\u53f2\u8bb0\u5f55");
    zI(this, E("tlid-history-close-button", this.o), this.G);
    this.m = E("tlid-history-entry-list", this.o);
    this.w = !1;
    this.h = [];
    this.b = null;
    this.O = new UF(DATA.Messages.NUM_TRANSLATIONS);
    this.K = E("tlid-history-num-entries", this.o)
};
ka(AI, K);
var zI = function(a, b, c, d) {
    d = void 0 === d ? !0 : d;
    var e = new Rr(null,new Kt);
    e.ea(b);
    d && (os(b),
        vH(b));
    c && H(e, "action", c, !1, a);
    return e
}
    , DI = function(a, b) {
    for (var c = 0; c < b.length; c++)
        BI(a, b[c]);
    0 < b.length && V(a.o, "empty", !1);
    U(a.o, "loading");
    CI(a, a.a.length)
}
    , BI = function(a, b) {
    b = OF(b);
    for (var c = a.a.length - 1; 0 <= c; c--) {
        var d = a.a[c];
        LF(d.a, b) && (a.a.splice(c, 1),
            jg(d.j()),
            rh(d))
    }
    c = Wp(xI, {
        Aa: qI(IF(b)),
        Rb: b.a,
        Ja: rI(b.ma()),
        Sb: b.$a(),
        Mc: !DATA.InChina,
        rj: "\u6536\u85cf\u8bd1\u6587"
    });
    ig(a.m, c, 0);
    b = new yI(b,c);
    a.a.unshift(b);
    EI(a, b);
    a.w ? FI(a, b) : a.h.push(b)
}
    , EI = function(a, b) {
    H(b, "d", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "history_entry_selected",
            text: c.a,
            ib: c.Qa(),
            jb: c.ma()
        });
        a.c && V(a.c.o, "browsed", !1);
        V(b.o, "browsed", !0);
        a.c = b;
        GI(a, b)
    }, !1);
    H(b, "e", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "history_entry_selected",
            text: c.a,
            ib: c.Qa(),
            jb: c.ma()
        });
        a.G();
        GI(a, b)
    }, !1);
    H(b, "f", function() {
        var c = b.a;
        if (DATA.SignedIn) {
            var d = !Pp(b.o, "starred");
            oG(a.v, c, d ? 0 : 1) && (b.qh(d),
                c = a.F,
                N(c, Em(c, 64, a.a.indexOf(b), d)),
                a.g.log("th=sc", {}))
        } else {
            d = Pp(b.o, "starred") ? "unst" : "st";
            var e = new Xs;
            Ys(e, "history");
            dt(e, IF(c), c.ma(), c.a);
            oI(d, a.g, Fa, Fa, e.toString())
        }
    }, !1)
}
    , HI = function(a) {
    a.c && (V(a.c.o, "browsed", !1),
        a.c = null)
};
AI.prototype.G = function() {
    this.dispatchEvent("close_requested");
    HI(this)
}
;
AI.prototype.L = function() {
    if (0 !== this.a.length) {
        fg(this.m);
        for (var a = 0; a < this.a.length; a++)
            rh(this.a[a]);
        this.a = [];
        this.dispatchEvent("clear_history_clicked");
        V(this.o, "empty", !0);
        CI(this, this.a.length);
        a = this.F;
        N(a, O(a, 63));
        this.g.log("th=ch", {})
    }
}
;
var II = function(a, b, c, d) {
    a.b = new HF(d,{},b,c)
}
    , JI = function(a) {
    a.w = !0;
    for (var b = 0; b < a.h.length; b++)
        FI(a, a.h[b])
}
    , FI = function(a, b) {
    a.b && IF(a.b) === IF(b.a) && a.b.ma() === b.a.ma() && a.b.a === b.a.a ? (a.b = null,
        oG(a.v, b.a, 0)) : rG(a.v, b.a, b.qh.bind(b))
}
    , CI = function(a, b) {
    b = XF(a.O, {
        NUM_TRANSLATIONS: b
    });
    G(a.K, b)
}
    , GI = function(a, b) {
    var c = a.F
        , d = Pp(b.o, "starred");
    N(c, Em(c, 61, a.a.indexOf(b), d));
    a.g.log("th=es", {})
};
var KI = function(a) {
    a = a.Ia;
    return P("<div class='tlid-history-container history-container loading empty'><div class='history-top-header'><div class='history-top-bar'><div class='tlid-history-close-button close-button button-icon' aria-label=\"" + (a.CLOSE_HISTORY ? S(a.CLOSE_HISTORY) : S(a.CLOSE)) + "\"></div><div class='title'>" + R(a.HISTORY_SECTION_TITLE) + "</div><div class='history-features'><div class='tlid-history-delete-all-button delete-all-button'></div></div></div><div class='tlid-history-info-bar info-bar'><div class='tlid-history-num-entries num-entries'></div></div></div><div class='history-body'><div class='tlid-history-entry-list entry-list' role=\"listbox\" tabindex=\"0\"></div></div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + R(a.HISTORY_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.HISTORY_INFO_TEXT) + "</div></div></div><div class='history-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
KI.a = "trans.mobile.components.history.template.main";
var LI = function(a) {
    var b = a.isSignedIn
        , c = a.Ia;
    a = P;
    var d = "<div class='tlid-community-instant-container instant-container taskactive'><div class='instant-top-header'><div class='instant-top-bar'><div class='tlid-instant-close-button close-button button-icon' aria-label=\"" + S(c.CLOSE) + '" data-tooltip="' + S(c.CLOSE) + "\"></div><div class='tlid-instant-help-open-button help-open-button button-icon' aria-label=\"" + S(c.COMMUNITY_INSTANT_HELP_OPEN) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_HELP_OPEN) + "\"></div><div class='title'>" + R(c.COMMUNITY_INSTANT_TITLE) + "</div>" + (b ? '<div class="header-help">' + R(c.COMMUNITY_INSTANT_FLOW_HEADER) + "</div>" : "") + "</div></div><div class='instant-body'>";
    if (b) {
        b = P;
        var e = "<div class='tlid-instant-flow'><div class=\"instant-flow-tasks\">" + P("<div class='tlid-instant-flow-task-active instant-taskactive-container'></div>");
        var f = P('<div class=\'tlid-instant-task-done instant-taskdone-container\'><div class="instant-taskdone-image"></div><div class="instant-taskdone-header">' + R(c.COMMUNITY_INSTANT_TASK_DONE_HEADER) + '</div><div class="tlid-instant-taskdone-done-button instant-taskdone-done-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '</div><div class="tlid-instant-taskdone-more-button instant-taskdone-more-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) + "</div></div>");
        e += f;
        f = P('<div class=\'tlid-instant-task-none instant-tasknone-container\'><div class="instant-tasknone-image"></div><div class="instant-tasknone-header">' + R(c.COMMUNITY_INSTANT_TASK_NONE_HEADER) + '</div><div class="instant-tasknone-body">' + R(c.COMMUNITY_INSTANT_TASK_NONE_BODY) + '</div><div class="tlid-instant-tasknone-language-container instant-tasknone-language-container"><div class="instant-tasknone-language-selected-container language-selected-container"><div class="tlid-instant-tasknone-language-selected">\x3c!-- Dynamically constructed .languageDropDownEntry --\x3e</div><div class="tlid-instant-tasknone-language-button language-selected-button"></div></div><div class="tlid-instant-tasknone-language-dropdown instant-tasknone-language-dropdown"><div class="tlid-instant-tasknone-language-dropdown-container language-dropdown-container">\x3c!-- Per user language pair options --\x3e</div></div></div><div class="tlid-instant-task-start-button instant-task-start-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_START) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_START) + '">' + R(c.COMMUNITY_INSTANT_START) + "</div></div>");
        b = b(e + f + '</div><div class="instant-flow-footer"><div class="instant-footer-container"><a href="/community" target="_blank"><div class="instant-flow-footer-icon"></div><div class="instant-flow-footer-text">' + R(c.COMMUNITY_INSTANT_FLOW_FOOTER) + '</div><div class="instant-flow-footer-button"></div></a></div></div></div>')
    } else
        b = P('<div class=\'tlid-instant-signed-out instant-signedout-container\'><div class="instant-signedout-image"></div><div class="instant-signedout-header">' + R(c.COMMUNITY_INSTANT_SIGNED_OUT_HEADER) + '</div><div class="instant-signedout-body">' + R(c.COMMUNITY_INSTANT_SIGNED_OUT_BODY) + '</div><div class="tlid-instant-signedout-button instant-signedout-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + "</div></div>");
    d = d + b + "</div>\x3c!-- The Help panel is available for signed in and signed out users. --\x3e<div class='instant-help'>";
    c = P('<div class=\'tlid-instant-help instant-help-container\'><div class="instant-help-image"></div><div class="instant-help-header">' + R(c.COMMUNITY_INSTANT_HELP_HEADER) + '</div><div class="instant-help-body">' + R(c.COMMUNITY_INSTANT_HELP_BODY) + '</div><div class="tlid-instant-help-button instant-help-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_OK_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_OK_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_OK_BUTTON) + "</div></div>");
    return a(d + c + "</div></div>")
};
LI.a = "trans.mobile.components.instant.template.main";
var MI = function(a) {
    var b = a.wj;
    return P('<div class="instant-lang-pair"><div class="instant-lang-dropdown-source">' + R(a.mj) + '</div><div class="instant-lang-dropdown-connector">-</div><div class="instant-lang-dropdown-target">' + R(b) + "</div></div>")
};
MI.a = "trans.mobile.components.instant.template.languageDropDownEntry";
var NI = function(a) {
    K.call(this);
    this.o = a;
    a = E("tlid-instant-task-skip", this.o);
    H(a, "click", this.c, !1, this);
    a = E("tlid-instant-task-incorrect", this.o);
    H(a, "click", this.b, !1, this);
    a = E("tlid-instant-task-correct", this.o);
    H(a, "click", this.a, !1, this)
};
ka(NI, K);
NI.prototype.c = function() {
    this.dispatchEvent("skip_requested")
}
;
NI.prototype.b = function() {
    this.dispatchEvent("incorrect_requested")
}
;
NI.prototype.a = function() {
    this.dispatchEvent("correct_requested")
}
;
var OI = function(a) {
    var b = a.Tn
        , c = a.Un;
    a = a.Ia;
    return P('<div>\x3c!-- Includes language pair information and task progress --\x3e<div class="instant-task-metadata"><div class="instant-task-lang-pair"><div class="instant-task-lang-source">' + R(b.Aa) + '</div><div class="instant-task-lang-connector">-</div><div class="instant-task-lang-target">' + R(b.Ja) + '</div></div><div class="instant-task-progress"><div class="instant-task-current">' + R(c.Si) + '</div><div class="instant-task-progress-connector">/</div><div class="instant-task-total">' + R(b.fo) + '</div></div></div>\x3c!-- Includes the prompt and task content --\x3e<div class="instant-task-item"><div class="instant-task-prompt">' + R(a.COMMUNITY_INSTANT_TASK_PROMPT_VALIDATION) + '</div><div class="instant-task-text-source">' + R(c.Fd) + '</div><div class="instant-task-text-target">' + R(c.Aj) + '</div></div>\x3c!-- Includes the actions available --\x3e<div class="instant-task-options"><div class="tlid-instant-task-skip instant-task-skip-button"><div class="instant-task-skip-button-image"></div><div class="instant-task-skip-button-text">' + R(a.COMMUNITY_INSTANT_TASK_ACTION_SKIP) + '</div></div><div class="tlid-instant-task-incorrect instant-task-incorrect-button"><div class="instant-task-incorrect-button-image"></div><div class="instant-task-incorrect-button-text">' + R(a.COMMUNITY_INSTANT_TASK_ACTION_INCORRECT) + '</div></div><div class="tlid-instant-task-correct instant-task-correct-button"><div class="instant-task-correct-button-image"></div><div class="instant-task-correct-button-text">' + R(a.COMMUNITY_INSTANT_TASK_ACTION_CORRECT) + "</div></div></div></div>")
};
OI.a = "trans.mobile.components.instant.task.template.main";
var QI = function(a) {
    K.call(this);
    this.o = a;
    PI(this, E("tlid-instant-close-button", this.o), this.w);
    PI(this, E("tlid-instant-help-open-button", this.o), this.g);
    a = E("tlid-instant-help-button", this.o);
    H(a, "click", this.g, !1, this);
    this.O = DATA.SignedIn ? null : E("tlid-instant-signedout-button", this.o);
    DATA.SignedIn || PI(this, this.O, this.L);
    DATA.SignedIn && (a = E("tlid-instant-taskdone-more-button", this.o),
        H(a, "click", this.C, !1, this),
        a = E("tlid-instant-taskdone-done-button", this.o),
        H(a, "click", this.w, !1, this));
    this.h = DATA.CommunityInstantHostname;
    this.G = void 0;
    this.b = [];
    this.a = 0;
    this.m = this.v = "und";
    this.c = [{
        source: {
            kh: "en",
            Za: "English"
        },
        target: {
            kh: "es",
            Za: "Spanish"
        }
    }, {
        source: {
            kh: "es",
            Za: "Spanish"
        },
        target: {
            kh: "en",
            Za: "English"
        }
    }]
};
ka(QI, K);
var PI = function(a, b, c) {
    var d = void 0 === d ? !0 : d;
    var e = new Rr(null,new Kt);
    e.ea(b);
    d && (os(b),
        vH(b));
    c && H(e, "action", c, !1, a)
}
    , TI = function(a, b, c) {
    a.v = b;
    a.m = c;
    null != window.gapi && null != window.gapi.client ? window.gapi.client.request({
        root: a.h,
        path: "/v1/getinstanttask",
        method: "GET",
        body: {
            client: "translate_web",
            force_triggering: "true",
            language_pair: {
                source_language_code_value: b,
                target_language_code_value: c
            }
        },
        params: {
            $trace: "true"
        }
    }).then(function() {
        this.a = 0;
        this.G = {
            Aa: "English",
            Ja: "Spanish",
            fo: "2"
        };
        this.b = [{
            Fd: "He heard the footsteps",
            Aj: "Esucho los pasos",
            Si: "1",
            jn: 1234
        }, {
            Fd: "What did the fox say?",
            Aj: "Qu\u00e9 dijo el zorro?",
            Si: "2",
            jn: 4321
        }];
        RI(this);
        U(this.o, "tasknone");
        U(this.o, "taskdone");
        T(this.o, "taskactive")
    }
        .bind(a), function() {
        SI(this)
    }
        .bind(a)) : SI(a)
}
    , RI = function(a) {
    var b = D("tlid-instant-flow-task-active", a.o)
        , c = Wp(OI, {
        Tn: a.G,
        Un: a.b[a.a],
        Ia: DATA.Messages
    })
        , d = new NI(c);
    H(d, "skip_requested", function() {
        UI(a, "skip_requested")
    }, !1);
    H(d, "incorrect_requested", function() {
        UI(a, "incorrect_requested")
    }, !1);
    H(d, "correct_requested", function() {
        UI(a, "correct_requested")
    }, !1);
    fg(b);
    dg(b, c)
}
    , UI = function(a, b) {
    null != window.gapi && null != window.gapi.client ? window.gapi.client.request(VI(a, a.b[a.a], b)).then(function() {
        WI(this)
    }
        .bind(a), function() {
        WI(this)
    }
        .bind(a)) : WI(a)
}
    , WI = function(a) {
    a.a++;
    a.a >= a.b.length ? (U(a.o, "taskactive"),
        U(a.o, "tasknone"),
        T(a.o, "taskdone")) : RI(a)
};
QI.prototype.C = function() {
    TI(this, this.v, this.m)
}
;
QI.prototype.w = function() {
    this.dispatchEvent("close_requested")
}
;
QI.prototype.g = function() {
    var a = this.o
        , b = !Pp(a, "help");
    V(a, "help", b)
}
;
QI.prototype.L = function() {
    this.dispatchEvent("sign_in_requested")
}
;
var VI = function(a, b, c) {
    switch (c) {
        case "skip_requested":
            c = 1;
            break;
        case "correct_requested":
            c = 2;
            break;
        case "incorrect_requested":
            c = 3;
            break;
        default:
            c = 0
    }
    return {
        root: a.h,
        path: "/v1/setanswers",
        method: "POST",
        body: {
            task: [{
                question_id: b.questionId,
                annotation: c
            }]
        },
        params: {
            $trace: "true"
        }
    }
}
    , SI = function(a) {
    var b = E("tlid-instant-tasknone-language-selected", a.o)
        , c = a.c[0];
    c = Wp(MI, {
        mj: c.source.Za,
        wj: c.target.Za
    });
    H(c, "click", a.K, !1, a);
    fg(b);
    dg(b, c);
    U(a.o, "taskactive");
    U(a.o, "taskdone");
    T(a.o, "tasknone")
};
QI.prototype.K = function() {
    var a = E("tlid-instant-tasknone-language-dropdown-container", this.o);
    fg(a);
    for (var b = 0; b < this.c.length; ++b) {
        var c = this.c[b];
        c = Wp(MI, {
            mj: c.source.Za,
            wj: c.target.Za
        });
        dg(a, c)
    }
    a = E("tlid-instant-tasknone-language-container", this.o);
    T(a, "dropdown")
}
;
var XI = function(a) {
    var b = Vn(t(a.Aa), "sourceLanguage", a.Aa, "string");
    a = Vn(t(a.Ja), "targetLanguage", a.Ja, "string");
    return P("<div class='tlid-phrasebook-language-chip language-chip' role=\"button\" tabindex=\"0\"><div class='language-chip-languages'>" + R(b) + " <span class='language-chip-arrow'></span> " + R(a) + "</div><button class='tlid-phrasebook-language-chip-clear-button clear-button button-icon'></button></div>")
};
XI.a = "trans.mobile.components.phrasebook.languagechip.template.main";
var ZI = function(a, b, c) {
    b = c || b;
    c = Vn(t(a.Aa), "sourceLanguage", a.Aa, "string");
    var d = Vn(t(a.Rb), "sourcePhrase", a.Rb, "string")
        , e = Vn(t(a.Ja), "targetLanguage", a.Ja, "string")
        , f = Vn(t(a.Sb), "targetPhrase", a.Sb, "string");
    a = a.Ia;
    return P("<div class='tlid-phrasebook-entry phrasebook-entry' role=\"option\">" + R(XI({
        Aa: c,
        Ja: e
    }, b)) + "<button class='tlid-delete-phrasebook-entry trashcan-button button-icon' aria-label='" + S(a.DELETE_THIS_PHRASE) + "'></button><div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div><div class='phrase'>" + YI({
        Rb: d,
        Sb: f,
        Oe: !0,
        Ia: a
    }) + "</div></div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div>" + YI({
        Rb: d,
        Sb: f
    }) + "</div></div>")
};
ZI.a = "trans.mobile.components.phrasebook.entry.template.main";
var YI = function(a) {
    var b = Vn(t(a.Rb), "sourcePhrase", a.Rb, "string")
        , c = Vn(t(a.Sb), "targetPhrase", a.Sb, "string")
        , d = Vn(null == a.Oe || "boolean" == typeof a.Oe || 1 === a.Oe || 0 === a.Oe, "includeTts", a.Oe, "boolean|null|undefined");
    a = a.Ia;
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi>" + (d && Gn(a) ? "<button class='tlid-phrasebook-entry-source-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div><div class='tl-output'><bdi>" + R(c) + "</bdi>" + (d && Gn(a) ? "<button class='tlid-phrasebook-entry-target-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div></div>")
};
var aJ = function(a, b, c) {
    K.call(this);
    var d = this;
    this.o = a;
    kc(DATA.DisplayLanguage) && T(this.o, "rtl-display-language");
    this.a = b;
    this.b = c;
    this.c = E("tlid-phrasebook-language-chip-clear-button", this.o);
    H(this.c, "click", this.jl, !1, this);
    H(this.o, "click", function() {
        return $I(d)
    }, !1);
    H(this.o, "keypress", this.g, !1, this)
};
ka(aJ, K);
h = aJ.prototype;
h.j = function() {
    return this.o
}
;
h.Qa = function() {
    return this.a
}
;
h.ma = function() {
    return this.b
}
;
h.dd = function(a) {
    V(this.o, "selected", a)
}
;
h.jl = function(a) {
    a.stopPropagation();
    this.dispatchEvent("language_pair_deselected")
}
;
var $I = function(a) {
    a.dispatchEvent("language_pair_selected")
};
aJ.prototype.g = function(a) {
    switch (a.keyCode) {
        case 13:
        case 32:
            $I(this)
    }
}
;
var dJ = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.c = Hm.M();
    this.a = a;
    this.o = b;
    this.g = E("tlid-delete-phrasebook-entry", this.o);
    this.O = new aJ(E("tlid-phrasebook-language-chip", this.o),IF(this.a),this.a.ma());
    this.b = E("tlid-browse-entry", this.o);
    this.v = E("tlid-select-entry", this.o);
    this.G = E("tlid-phrasebook-entry-source-tts", this.o);
    this.L = E("tlid-phrasebook-entry-target-tts", this.o);
    this.C = bJ(this, this.G, "&client=webapp&prev=pbsrc", 5);
    this.C.update(this.a.a, IF(this.a), void 0, qI(IF(this.a)));
    this.K = bJ(this, this.L, "&client=webapp&prev=pbtgt", 6);
    this.K.update(this.a.b, this.a.ma(), void 0, rI(this.a.ma()));
    cJ(this)
};
ka(dJ, K);
var cJ = function(a) {
    H(a.o, "focusin", function() {
        T(a.o, "focus-within")
    }, !1);
    H(a.o, "focusout", function(b) {
        pg(a.o, b.relatedTarget) || U(a.o, "focus-within")
    }, !1);
    H(a.g, "click", a.h, !1, a);
    H(a.O, "language_pair_selected", function() {
        a.dispatchEvent("language_pair_selected")
    }, !1);
    H(a.b, "click", a.m, !1, a);
    H(a.b, "keypress", function(b) {
        13 != b.keyCode && 32 != b.keyCode || a.m.bind(a)(b)
    }, !1);
    H(a.v, "click", a.w, !1, a);
    H(a.v, "keypress", function(b) {
        13 != b.keyCode && 32 != b.keyCode || a.w.bind(a)(b)
    }, !1);
    H(a.C, "userInteractionWhileDisabled", function() {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Za: qI(IF(a.a))
        })
    }, !1);
    H(a.K, "userInteractionWhileDisabled", function() {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Za: rI(a.a.ma())
        })
    }, !1)
}
    , bJ = function(a, b, c, d) {
    var e = new Gt(DATA.Messages.LISTEN);
    e.ea(b);
    c = new dv(e,c,d,!1,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    vH(b);
    Lg(a, c);
    return c
};
dJ.prototype.h = function() {
    var a = this.F;
    N(a, O(a, 316));
    this.c.log("api=ed", {});
    this.dispatchEvent("delete_button_clicked");
    ph(this.g, "click", this.h, !1, this)
}
;
dJ.prototype.m = function(a) {
    a.target != this.G && a.target != this.L && (this.c.log("api=es", {}),
        a = this.F,
        N(a, O(a, 315)),
        this.dispatchEvent("entry_browsed"))
}
;
dJ.prototype.w = function() {
    this.c.log("api=es", {});
    var a = this.F;
    N(a, O(a, 315));
    this.dispatchEvent("entry_selected")
}
;
dJ.prototype.j = function() {
    return this.o
}
;
var eJ = function(a, b) {
    K.call(this);
    this.o = a;
    this.na = b;
    this.a = [];
    this.h = [];
    this.O = {};
    this.N = "0";
    this.m = new Map;
    this.b = null;
    this.w = this.G = this.L = this.X = !1;
    this.C = "";
    this.g = this.c = null;
    this.V = this.R = this.W = this.v = -1;
    this.K = null
};
ka(eJ, K);
var iJ = function(a, b) {
    y(b, function(c) {
        var d = new HF(c.Fd,c.c,c.Aa,c.Ja);
        null != c.a && (d.c = c.a);
        null != c.b && (d.g = c.b);
        a.a.unshift(d);
        fJ(a, IF(d), d.ma())
    }, a);
    gJ(a, 0);
    0 === a.a.length ? a.dispatchEvent("list_empty") : a.dispatchEvent("list_no_longer_empty");
    a.X = !0;
    null != a.K && (hJ(a, a.K),
        a.K = null)
}
    , jJ = function(a, b) {
    switch (b) {
        case "0":
            a.a.sort(function(c, d) {
                return d.Rd() - c.Rd()
            });
            a.h.sort(function(c, d) {
                return d.Rd() - c.Rd()
            });
            break;
        case "2":
            a.a.sort(function(c, d) {
                return c.a.localeCompare(d.a)
            });
            a.h.sort(function(c, d) {
                return c.a.localeCompare(d.a)
            });
            break;
        default:
            return
    }
    a.N = b;
    gJ(a, 0)
}
    , kJ = function(a, b) {
    a.G = !0;
    a.C = b;
    a.h = [];
    for (var c = ba(a.a), d = c.next(); !d.done; d = c.next())
        d = d.value,
        MF(d, b) && a.h.push(d);
    gJ(a, 0)
}
    , lJ = function(a, b, c) {
    a.w = !0;
    a.c = b;
    a.g = c;
    a.h = [];
    for (var d = ba(a.a), e = d.next(); !e.done; e = d.next())
        e = e.value,
        b === IF(e) && c === e.m && a.h.push(e);
    gJ(a, 0)
}
    , mJ = function(a) {
    a.G = !1;
    a.C = "";
    gJ(a, 0)
}
    , nJ = function(a) {
    return a.w || a.G ? a.h : a.a
}
    , gJ = function(a, b) {
    if (!(0 > b || b > oJ(a))) {
        var c = 0 === nJ(a).length ? 0 : 10 * b
            , d = pJ(a, b)
            , e = nJ(a).length;
        var f = nJ(a)
            , g = 0 === nJ(a).length ? 0 : 10 * b
            , k = pJ(a, b);
        if (0 !== f.length && g > f.length - 1)
            b = !1;
        else {
            for (fg(a.o); g < k; g++) {
                var l = qJ(a, f[g]);
                a.o.appendChild(l.j())
            }
            a.v = b;
            b = !0
        }
        b && (a.W === c && a.R === d && a.V === e || 0 !== e && c > e - 1 || (a.W = c,
            a.R = d,
            a.V = e,
            a.dispatchEvent({
                type: "num_entries_and_indices_updated",
                On: c + 1,
                Ok: d,
                Qm: e
            })),
            b = d = !1,
        0 !== c && (d = !0),
        e > c + 10 && (b = !0),
            a.dispatchEvent({
                type: "page_update",
                Zl: b,
                $l: d
            }))
    }
}
    , oJ = function(a) {
    var b = 0;
    for (a = nJ(a).length; 0 < a; )
        b++,
            a -= 10;
    return b
}
    , pJ = function(a, b) {
    a = nJ(a).length;
    if (0 === a)
        return 0;
    b = 10 * (b + 1);
    b > a && (b = a);
    return b
}
    , qJ = function(a, b) {
    var c = rJ(b)
        , d = a.O[c];
    if (null != d)
        return d;
    d = Wp(ZI, {
        Aa: qI(IF(b)),
        Rb: b.a,
        Ja: rI(b.ma()),
        Sb: b.b,
        Ia: DATA.Messages
    });
    b = new dJ(b,d);
    sJ(a, b);
    d = b;
    return a.O[c] = d
}
    , tJ = function(a, b) {
    var c = !0;
    a.G && !MF(b, a.C) && (c = !1);
    a.w && a.c && a.g && (a.c !== IF(b) || a.g !== b.m) && (c = !1);
    return c
}
    , sJ = function(a, b) {
    H(b, "entry_browsed", function() {
        if (a.b !== b) {
            var c = b.a;
            a.dispatchEvent({
                type: "entry_browsed",
                text: c.a,
                ib: c.Qa(),
                jb: c.ma()
            });
            uJ(a);
            V(b.o, "browsed", !0);
            a.b = b
        }
    }, !1);
    H(b, "delete_button_clicked", function() {
        oG(a.na, b.a, 1);
        a.dispatchEvent("delete_entry_requested")
    }, !1);
    H(b, "entry_selected", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "entry_selected",
            text: c.a,
            ib: c.Qa(),
            jb: c.ma()
        })
    }, !1);
    H(b, "language_pair_selected", function() {
        a.dispatchEvent({
            type: "language_pair_selected",
            ib: IF(b.a),
            jb: b.a.ma()
        })
    }, !1);
    H(b, "interaction_with_disabled_voice_output", function(c) {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Za: c.Za
        })
    }, !1)
}
    , uJ = function(a) {
    a.b && (V(a.b.o, "browsed", !1),
        a.b = null)
}
    , hJ = function(a, b) {
    if (!a.X)
        a.K = b;
    else if (null == a.b || !LF(a.b.a, b))
        for (var c = a.b, d = a.a, e = 0; e < d.length; e++) {
            var f = d[e];
            if (LF(f, b)) {
                b = qJ(a, f);
                uJ(a);
                V(b.o, "browsed", !0);
                a.b = b;
                null != c && Gg(document) === c.b && b.b.focus();
                break
            }
        }
}
    , vJ = function(a) {
    a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
    return a
}
    , fJ = function(a, b, c) {
    var d = b + "|" + c;
    a.m.has(d) ? (b = a.m.get(d),
        a.m.set(d, b + 1)) : (a.m.set(d, 1),
        a.dispatchEvent({
            type: "language_pair_added",
            ib: b,
            jb: c
        }))
};
function rJ(a) {
    return IF(a) + "|" + a.ma() + "|" + a.a + "|" + a.b
}
;var wJ = function(a) {
    X.call(this, a)
};
w(wJ, X);
wJ.prototype.La = function() {
    this.o = this.a.b("FORM", {
        method: "POST",
        style: "display:none"
    })
}
;
var xJ = function(a, b, c) {
    var d, e = [];
    for (d in c) {
        var f = c[d];
        Ka(f) ? y(f, v(function(g) {
            e.push(Jd("input", {
                type: "hidden",
                name: d,
                value: String(g)
            }))
        }, a)) : e.push(Jd("input", {
            type: "hidden",
            name: d,
            value: String(f)
        }))
    }
    Ud(b, Md(e))
};
var yJ = function(a, b, c) {
    Jg.call(this);
    this.xc = null != c ? v(a, c) : a;
    this.h = b;
    this.g = v(this.m, this);
    this.b = this.a = null;
    this.c = []
};
w(yJ, Jg);
yJ.prototype.v = function(a) {
    this.c = arguments;
    this.a ? this.b = Ua() + this.h : this.a = Di(this.g, this.h)
}
;
yJ.prototype.stop = function() {
    this.a && (Ei(this.a),
        this.a = null);
    this.b = null;
    this.c = []
}
;
yJ.prototype.T = function() {
    this.stop();
    yJ.D.T.call(this)
}
;
yJ.prototype.m = function() {
    this.b ? (this.a = Di(this.g, this.b - Ua()),
        this.b = null) : (this.a = null,
        this.xc.apply(null, this.c))
}
;
var zJ = function(a, b) {
    X.call(this, b);
    this.b = a || ""
}, AJ;
w(zJ, X);
zJ.prototype.g = null;
var BJ = function() {
    null != AJ || (AJ = "placeholder"in $f("INPUT"));
    return AJ
};
h = zJ.prototype;
h.Ne = !1;
h.La = function() {
    this.o = this.a.b("INPUT", {
        type: "text"
    })
}
;
h.Da = function(a) {
    zJ.D.Da.call(this, a);
    this.b || (this.b = a.getAttribute("label") || "");
    Gg(Jf(a)) == a && (this.Ne = !0,
        a = this.j(),
        x(a),
        U(a, "label-input-label"));
    BJ() && (this.j().placeholder = this.b);
    a = this.j();
    x(a, "The label input element cannot be null.");
    Jp(a, "label", this.b)
}
;
h.Z = function() {
    zJ.D.Z.call(this);
    var a = new Kq(this);
    a.listen(this.j(), "focus", this.Hi);
    a.listen(this.j(), "blur", this.fl);
    if (BJ())
        this.c = a;
    else {
        ze && a.listen(this.j(), ["keypress", "keydown", "keyup"], this.Al);
        var b = Jf(this.j());
        a.listen(Wf(b), "load", this.Yl);
        this.c = a;
        CJ(this)
    }
    DJ(this);
    this.j().b = this
}
;
h.bb = function() {
    zJ.D.bb.call(this);
    this.c && (this.c.Ka(),
        this.c = null);
    this.j().b = null
}
;
var CJ = function(a) {
    !a.m && a.c && a.j().form && (a.c.listen(a.j().form, "submit", a.Dl),
        a.m = !0)
};
h = zJ.prototype;
h.T = function() {
    zJ.D.T.call(this);
    this.c && (this.c.Ka(),
        this.c = null)
}
;
h.Hi = function() {
    this.Ne = !0;
    var a = this.j();
    x(a);
    U(a, "label-input-label");
    if (!BJ() && !EJ(this) && !this.w) {
        var b = this;
        a = function() {
            b.j() && (b.j().value = "")
        }
        ;
        A ? Di(a, 10) : a()
    }
}
;
h.fl = function() {
    BJ() || (this.c.Ga(this.j(), "click", this.Hi),
        this.g = null);
    this.Ne = !1;
    DJ(this)
}
;
h.Al = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.g = this.j().value : "keypress" == a.type ? this.j().value = this.g : "keyup" == a.type && (this.g = null),
        a.preventDefault())
}
;
h.Dl = function() {
    EJ(this) || (this.j().value = "",
        Di(this.bl, 10, this))
}
;
h.bl = function() {
    EJ(this) || (this.j().value = this.b)
}
;
h.Yl = function() {
    DJ(this)
}
;
var EJ = function(a) {
    return !!a.j() && "" != a.j().value && a.j().value != a.b
}
    , FJ = function(a) {
    a.j().value = "";
    null != a.g && (a.g = "")
};
zJ.prototype.reset = function() {
    EJ(this) && (FJ(this),
        DJ(this))
}
;
zJ.prototype.Y = function() {
    return null != this.g ? this.g : EJ(this) ? this.j().value : ""
}
;
var DJ = function(a) {
    var b = a.j();
    x(b, "The label input element cannot be null.");
    BJ() ? a.j().placeholder != a.b && (a.j().placeholder = a.b) : CJ(a);
    Jp(b, "label", a.b);
    EJ(a) ? (b = a.j(),
        x(b),
        U(b, "label-input-label")) : (a.w || a.Ne || (b = a.j(),
        x(b),
        T(b, "label-input-label")),
    BJ() || Di(a.h, 10, a))
};
zJ.prototype.oa = function(a) {
    this.j().disabled = !a;
    var b = this.j();
    x(b);
    V(b, "label-input-label-disabled", !a)
}
;
zJ.prototype.isEnabled = function() {
    return !this.j().disabled
}
;
zJ.prototype.h = function() {
    !this.j() || EJ(this) || this.Ne || (this.j().value = this.b)
}
;
var GJ = function() {};
w(GJ, yx);
Ga(GJ);
GJ.prototype.wa = function() {
    return "goog-toolbar-menu-button"
}
;
var QJ = function(a, b) {
    K.call(this);
    var c = this;
    this.F = L.M();
    this.h = Hm.M();
    this.o = a;
    V(this.o, "mobile", it());
    this.a = new eJ(E("tlid-phrasebook-entry-list", this.o),b);
    HJ(this);
    this.xa = E("tlid-phrasebook-header-num-phrases", this.o);
    this.ra = E("tlid-phrasebook-body-num-phrases", this.o);
    this.Ca = new UF(DATA.Messages.NUM_PHRASES_PAGINATED);
    this.L = IJ(this);
    H(this.L, "change", this.N, !1, this);
    JJ(this, E("tlid-phrasebook-export-to-sheets", this.o), this.v);
    this.ba = KJ(this);
    this.R = LJ(this);
    this.K = JJ(this, E("tlid-phrasebook-search-button", this.o), this.na);
    MJ(this, !1);
    this.C = new yJ(this.X,500,this);
    this.b = new zJ(DATA.Messages.SEARCH_PHRASES);
    this.b.ea(E("tlid-phrasebook-search-box", this.o));
    H(this.b.j(), "keydown", function(d) {
        switch (d.keyCode) {
            case 27:
                c.C.stop();
                FJ(c.b);
                NJ(c);
                mJ(c.a);
                break;
            case 9:
                break;
            default:
                c.C.v()
        }
    }, !1, this);
    JJ(this, E("tlid-phrasebook-search-clear-button", this.o), this.V);
    JJ(this, E("tlid-phrasebook-close-button", this.o), this.Na);
    this.w = D("tlid-phrasebook-header-next-page", this.o) || null;
    null != this.w && H(this.w, "click", function() {
        var d = c.F;
        N(d, O(d, 336));
        OJ(c, "np");
        d = c.a;
        var e = d.v + 1;
        e > oJ(d) || gJ(d, e)
    }, !1);
    this.G = D("tlid-phrasebook-header-prev-page", this.o) || null;
    null != this.G && H(this.G, "click", function() {
        var d = c.F;
        N(d, O(d, 337));
        OJ(c, "pp");
        d = c.a;
        var e = d.v - 1;
        0 > e || gJ(d, e)
    }, !1);
    this.aa = E("tlid-phrasebook-header-language-pair-container", this.o);
    this.g = [];
    this.O = E("tlid-phrasebook-body-language-pair-container", this.o);
    this.c = [];
    this.m = !1;
    a = b.c && !b.C || !b.m ? null : b.g.concat(b.a);
    null !== a && PJ(this, a)
};
ka(QJ, K);
var IJ = function(a) {
    var b = E("tlid-phrasebook-sort", a.o)
        , c = [DATA.Messages.SORT_BY_DATE, DATA.Messages.SORT_ALPHABETICALLY];
    os(b);
    vH(b);
    xc(le("sort-button-tooltip")) || b.setAttribute("data-tooltip-class", "sort-button-tooltip");
    b = new iy(b,c,10,["0", "2"],void 0,DATA.Messages.SORT,GJ.M(),void 0,!0);
    Nx(b, new ux(b.Zb(),13));
    Ox(b, new Yp(-16,-24,0,0));
    c = Mx(b);
    c.render(E("tlid-phrasebook-sort-menu", a.o));
    H(c, "show", function() {
        var d = a.F;
        N(d, O(d, 319));
        OJ(a, "so")
    }, !1);
    return b
}
    , JJ = function(a, b, c) {
    var d = void 0 === d ? !0 : d;
    var e = new Rr(null,new Kt);
    e.ea(b);
    d && (os(b),
        vH(b));
    c && H(e, "action", c, !1, a);
    return e
}
    , KJ = function(a) {
    var b = E("tlid-phrasebook-more-button", a.o)
        , c = new Jx;
    c.ea(b);
    os(b);
    vH(b);
    c.Je(RJ(a, DATA.Messages.DELETE_ALL, a.W, "delete-all-menuitem"));
    c.Je(RJ(a, DATA.Messages.EXPORT_TO_SHEETS, a.v, "export-menuitem"));
    Nx(c, new ux(b,13));
    c.ba = new Yp(-20,0,0,0);
    Mx(c).render(E("tlid-phrasebook-more-menu", a.o));
    return c
}
    , RJ = function(a, b, c, d) {
    b = new mx(b);
    Fr(b, d);
    H(b, "action", c, !1, a);
    return b
}
    , LJ = function(a) {
    var b = new VH("phrasebook-delete-all-dialog",!0);
    WH(b, DATA.Messages.DELETE_ALL_DIALOG_TITLE);
    XH(b, Ed(DATA.Messages.DELETE_ALL_DIALOG_CONTENT));
    b.Fg = !1;
    ZH(b, !1);
    b.ni = !0;
    var c = new SH;
    c.set("cancel", DATA.Messages.CANCEL, !1, !0);
    c.set("delete", DATA.Messages.DELETE);
    bI(b, c);
    H(b, "dialogselect", function(d) {
        if ("delete" !== d.key)
            d = a.F,
                N(d, O(d, 326)),
                OJ(a, "dn");
        else {
            d = a.a;
            if (0 === d.a.length)
                d = !1;
            else {
                d.L = !0;
                for (var e = 0; e < d.a.length; e++)
                    oG(d.na, d.a[e], 1);
                d = !0
            }
            d && T(a.o, "loading");
            d = a.F;
            N(d, O(d, 325));
            OJ(a, "dy")
        }
    }, !1);
    return b
}
    , HJ = function(a) {
    H(a.a, "delete_all_complete", function() {
        U(a.o, "loading")
    }, !1);
    H(a.a, "entry_browsed", function(b) {
        a.dispatchEvent({
            type: "phrasebook_entry_selected",
            text: b.text,
            ib: b.ib,
            jb: b.jb
        })
    }, !1);
    H(a.a, "delete_entry_requested", function() {
        a.dispatchEvent("delete_entry_requested")
    }, !1);
    H(a.a, "entry_selected", function(b) {
        a.dispatchEvent({
            type: "phrasebook_entry_selected",
            text: b.text,
            ib: b.ib,
            jb: b.jb
        });
        a.dispatchEvent("close_requested")
    }, !1);
    H(a.a, "page_update", function(b) {
        var c = b.$l;
        V(a.o, "has-next-page", b.Zl);
        V(a.o, "has-prev-page", c)
    }, !1);
    H(a.a, "language_pair_added", function(b) {
        if (null != b) {
            var c = b.ib;
            b = b.jb;
            SJ(a, c, b, a.aa, a.g);
            SJ(a, c, b, a.O, a.c)
        } else
            a.h.log("jse=lpa", {})
    }, !1);
    H(a.a, "language_pair_removed", function(b) {
        if (null != b) {
            var c = b.ib;
            b = b.jb;
            TJ(c, b, a.g);
            TJ(c, b, a.c)
        } else
            a.h.log("jse=lpr", {})
    }, !1);
    H(a.a, "language_pair_selected", function(b) {
        null != b ? (UJ(a, b.ib, b.jb),
            b = a.F,
            N(b, O(b, 322)),
            OJ(a, "fs")) : a.h.log("jse=lps", {})
    }, !1);
    H(a.a, "list_empty", function() {
        V(a.o, "empty", !0)
    }, !1);
    H(a.a, "list_no_longer_empty", function() {
        V(a.o, "empty", !1)
    }, !1);
    H(a.a, "num_entries_and_indices_updated", function(b) {
        var c = DATA.DisplayLanguage;
        b = XF(a.Ca, {
            NUM_PHRASES: b.Qm,
            START_NUM: b.On.toLocaleString(c),
            END_NUM: b.Ok.toLocaleString(c)
        });
        G(a.xa, b);
        G(a.ra, b)
    }, !1);
    H(a.a, "last_displayed_entry_deleted", function() {
        VJ(a)
    }, !1);
    H(a.a, "interaction_with_disabled_voice_output", function(b) {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Za: b.Za
        })
    }, !1)
}
    , PJ = function(a, b) {
    a.m || (iJ(a.a, b),
        a.m = !0,
        U(a.o, "loading"))
}
    , VJ = function(a) {
    WJ(a);
    FJ(a.b);
    NJ(a);
    mJ(a.a)
};
QJ.prototype.N = function() {
    var a = this.L.Y();
    switch (a) {
        case "0":
            var b = this.F;
            N(b, O(b, 320));
            OJ(this, "s1");
            break;
        case "2":
            b = this.F;
            N(b, O(b, 321));
            OJ(this, "s2");
            break;
        default:
            return
    }
    jJ(this.a, a)
}
;
var MJ = function(a, b) {
    V(a.o, "search-open", b)
};
QJ.prototype.na = function() {
    var a = this.F;
    N(a, O(a, 318));
    OJ(this, "os");
    XJ(this)
}
;
var XJ = function(a) {
    MJ(a, !0);
    FJ(a.b);
    a.b.j().focus();
    WJ(a);
    mJ(a.a);
    T(a.o, "empty-search-query")
}
    , NJ = function(a) {
    MJ(a, !1);
    U(a.o, "empty-search-query")
};
QJ.prototype.X = function() {
    this.b.Y() ? (U(this.o, "empty-search-query"),
        kJ(this.a, this.b.Y())) : XJ(this)
}
;
QJ.prototype.V = function() {
    this.b.Y() ? XJ(this) : (NJ(this),
        mJ(this.a))
}
;
QJ.prototype.Na = function() {
    var a = this.F;
    N(a, O(a, 317));
    OJ(this, "cb");
    this.dispatchEvent("close_requested");
    VJ(this)
}
;
QJ.prototype.v = function() {
    var a = {
        authuser: Kj() || "0",
        target: "_blank"
    }
        , b = this.a;
    var c = [];
    for (var d = b.a, e = d.length - 1; 0 <= e; --e) {
        var f = []
            , g = d[e];
        tJ(b, g) && (f.push(qI(IF(g))),
            f.push(rI(g.ma())),
            f.push(vJ(g.a)),
            f.push(vJ(g.b)),
            c.push(f.join(",")))
    }
    c = c.join("\n");
    b = this.a;
    d = DATA.Messages.SAVED_TRANSLATIONS_SPREADSHEET_TITLE;
    b.w && null != b.c && null != b.g && (d = d + " - " + qI(b.c) + " - " + rI(b.g));
    a = a || {};
    b = a.target;
    e = a.trixPath || (a.useCorp ? "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete a.target;
    delete a.useCorp;
    delete a.trixPath;
    Xb(a, {
        content: c,
        title: d
    });
    c = a.authuser;
    d = Mj(e || "https://docs.google.com/spreadsheets/", "import");
    d = Mj(d, "inline");
    c && (d = Hj(d, "authuser", c));
    c = d;
    d = new wJ;
    e = d.j();
    e || (d.render(),
        e = d.j());
    e.action = c || "";
    e.target = b || "";
    xJ(d, e, a);
    e.submit()
}
;
var SJ = function(a, b, c, d, e) {
    var f = YJ(b, c);
    b = new aJ(f,b,c);
    dg(d, f);
    e.push(b);
    H(b, "language_pair_selected", function(g) {
        g = g.target;
        UJ(a, g.Qa(), g.ma());
        g = a.F;
        N(g, O(g, 322));
        OJ(a, "fs")
    }, !1);
    H(b, "language_pair_deselected", function() {
        WJ(a);
        var g = a.F;
        N(g, O(g, 323));
        OJ(a, "fr")
    }, !1)
}
    , TJ = function(a, b, c) {
    for (var d = c.length - 1; 0 <= d; d--) {
        var e = c[d];
        a === e.a && b === e.b && (jg(e.j()),
            c.splice(d, 1),
            rh(e))
    }
}
    , UJ = function(a, b, c) {
    T(a.o, "language-pair-selected");
    for (var d = 0; d < a.g.length; d++) {
        var e = a.g[d];
        e.dd(b === e.a && c === e.b)
    }
    for (d = 0; d < a.c.length; d++)
        e = a.c[d],
            e.dd(b === e.a && c === e.b);
    lJ(a.a, b, c);
    NJ(a)
}
    , WJ = function(a) {
    U(a.o, "language-pair-selected");
    for (var b = 0; b < a.g.length; b++)
        a.g[b].dd(!1);
    for (b = 0; b < a.c.length; b++)
        a.c[b].dd(!1);
    a = a.a;
    a.w = !1;
    a.c = null;
    a.g = null;
    gJ(a, 0)
};
QJ.prototype.W = function() {
    this.R.setVisible(!0);
    this.ba.Wa(!1);
    var a = this.F;
    N(a, O(a, 324));
    OJ(this, "da")
}
;
var OJ = function(a, b) {
    a.h.log("api=" + b, {})
};
function YJ(a, b) {
    return Wp(XI, {
        Aa: qI(a),
        Ja: rI(b)
    })
}
;var ZJ = function(a) {
    var b = Vn(t(a.Ra), "displayLanguage", a.Ra, "string");
    a = a.Ia;
    var c = P
        , d = "<div class='tlid-phrasebook-container phrasebook-container loading'><div class='phrasebook-top-header'><div class='phrasebook-top-bar'><div class='tlid-phrasebook-close-button close-button button-icon' aria-label=\"" + S(a.CLOSE_SAVED_TRANSLATIONS) + "\"></div><div class='title'>" + R(a.SAVED_SECTION_TITLE) + "</div><div class='tlid-phrasebook-search-button search-button search-image-black button-icon' title=\"" + S(a.SEARCH_PHRASES) + "\"></div><div class='tlid-phrasebook-search-bar search-bar'><div class='search-image-black button-icon'></div><input class='tlid-phrasebook-search-box search-box'><div class='tlid-phrasebook-search-clear-button clear-button clear-image-black button-icon' title=\"" + S(a.CLEAR_TEXT) + "\"></div></div><div class='phrasebook-features'><div class='tlid-phrasebook-sort-menu sort-menu'></div><div class='tlid-phrasebook-more-menu more-menu'></div><div class='tlid-phrasebook-sort sort-button button-icon' aria-label='" + S(a.SORT) + "' title='" + S(a.SORT) + "'></div><div class='export-button-container'><div class='tlid-phrasebook-export-to-sheets export-button button-icon' title='" + S(a.EXPORT_TO_SHEETS) + "'></div></div><div class='tlid-phrasebook-more-button more-button button-icon' aria-label='" + S(a.MORE) + "' title='" + S(a.MORE) + "'></div></div></div><div class='nav-bar'><div class='tlid-phrasebook-header-num-phrases num-phrases'></div><div class='nav-button-container'><button class='tlid-phrasebook-header-prev-page prev-button page-nav-button'></button><button class='tlid-phrasebook-header-next-page next-button page-nav-button'></button></div></div><div class='selected-chip-bar'><div class='tlid-phrasebook-header-language-pair-container language-pair-container'></div></div></div><div class='phrasebook-body'><div class='tlid-phrasebook-body-language-pair-container language-pair-container'><div class='title'>" + R(a.LANGUAGE_PAIRS) + "</div></div><div class='tlid-phrasebook-body-num-phrases num-phrases'></div>";
    var e = P('<div class=\'tlid-phrasebook-entry-list entry-list\' role="listbox" tabindex="0"></div>');
    return c(d + R(e) + "</div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + R(a.PHRASEBOOK_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.PHRASEBOOK_INFO_TEXT) + "</div></div><div class='placeholder-link'><a target='_blank' href='https://support.google.com/translate?p=phrasebook_web_help&hl=" + On(b) + "'>" + R(a.LEARN_MORE) + "</a></div></div><div class='phrasebook-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
ZJ.a = "trans.mobile.components.phrasebook.template.main";
var $J = function() {
    var a = Lf("backend-stats-decoder");
    this.b = null != a ? a : null;
    a = Lf("backend-stats-decoder1");
    this.v = null != a ? a : null;
    a = Lf("backend-stats-decoder2");
    this.g = null != a ? a : null;
    a = Lf("backend-stats-rapid-response");
    this.m = null != a ? a : null;
    a = Lf("backend-stats-stt-total");
    this.w = null != a ? a : null;
    a = Lf("backend-stats-community");
    this.a = null != a ? a : null;
    a = Lf("backend-stats-dictionary");
    this.c = null != a ? a : null;
    a = Lf("backend-stats-other");
    this.h = null != a ? a : null;
    a = Lf("backend-models-used");
    this.L = null != a ? a : null;
    a = Lf("backend-models-checksum");
    this.G = null != a ? a : null;
    a = Lf("backend-models-launch-doc");
    this.C = null != a ? a : null
}
    , aK = function(a) {
    a.w && a.a && a.c && a.b && a.v && a.g && a.m && a.h && a.L && a.G && a.C && (G(a.b, "0"),
        G(a.v, "0"),
        G(a.g, "0"),
        G(a.m, "0"),
        G(a.w, "0"),
        G(a.a, "0"),
        G(a.c, "0"),
        G(a.h, "0"),
        G(a.L, ""),
        G(a.G, ""),
        G(a.C, ""))
}
    , bK = function(a, b, c) {
    var d = $f("A")
        , e = ag(" ");
    d.appendChild(ag(c));
    Vd(d, b);
    a.appendChild(d);
    a.appendChild(e)
};
var cK = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.a = a;
    this.g = b;
    this.b = E("tlid-file-input", this.a);
    this.v = E("tlid-select-file-button", this.a);
    this.R = E("tlid-sl-input", this.a);
    this.V = E("tlid-tl-input", this.a);
    this.m = E("tlid-selected-file-label", this.a);
    this.w = E("tlid-selected-file-size", this.a);
    this.L = E("tlid-cancel-selected-file-button", this.a);
    this.h = E("tlid-translate-doc-button", this.a);
    this.c = this.h.form;
    this.K = new Vu;
    H(this.v, "click", this.G, !1, this);
    H(this.h, "click", this.N, !1, this);
    H(this.b, "change", this.C, !1, this);
    H(this.L, "click", this.O, !1, this);
    U(this.a, "loading")
};
ka(cK, K);
cK.prototype.N = function() {
    U(this.a, "has-file");
    T(this.a, "translating-file");
    var a = dK(this)
        , b = eK(this.b.value)
        , c = this.F
        , d = fK(b)
        , e = O(c, 301)
        , f = new Lk;
    d = B(f, 1, d);
    d = B(d, 2, a);
    mf(e, 76, d);
    N(c, e);
    gK("success", a, b);
    this.c.enctype = this.c.encoding = "multipart/form-data";
    this.R.value = this.g.a;
    this.V.value = this.g.b;
    this.c.submit()
}
;
cK.prototype.G = function() {
    var a = this.F;
    N(a, O(a, 297));
    hK("bc")
}
;
cK.prototype.C = function() {
    var a = this.b.value;
    if ("" !== a) {
        var b = a.replace("C:\\fakepath\\", "");
        a = eK(b);
        if (0 === a.length)
            var c = !1;
        else
            switch (a.toLowerCase()) {
                case "doc":
                case "docx":
                case "odf":
                case "pdf":
                case "ppt":
                case "pptx":
                case "ps":
                case "rtf":
                case "txt":
                case "xls":
                case "xlsx":
                    c = !0;
                    break;
                default:
                    c = !1
            }
        if (c) {
            if (p(window.FileReader)) {
                c = dK(this);
                if (c > DATA.FileSizeLimit) {
                    this.dispatchEvent({
                        type: "file_too_big",
                        Rk: DATA.FileSizeLimit
                    });
                    this.b.value = "";
                    b = this.F;
                    var d = fK(a)
                        , e = O(b, 148);
                    var f = new Mk;
                    f = B(f, 1, 161);
                    mf(e, 63, f);
                    f = new Lk;
                    d = B(f, 1, d);
                    d = B(d, 2, c);
                    mf(e, 76, d);
                    N(b, e);
                    gK("ftbe", c, a);
                    return
                }
                a = this.w;
                c = dK(this);
                e = DATA.Messages.FILE_SIZE_BYTES;
                1 <= c / 1024 && (c /= 1024,
                    e = DATA.Messages.FILE_SIZE_KILOBYTES);
                1 <= c / 1024 && (c /= 1024,
                    e = DATA.Messages.FILE_SIZE_MEGABYTES);
                c = this.K.a(e, c.toFixed(0));
                G(a, c)
            }
            G(this.m, b);
            T(this.a, "has-file");
            U(this.a, "translating-file");
            a = this.F;
            N(a, O(a, 308));
            hK("fs")
        } else
            this.dispatchEvent("unsupported_filetype"),
                this.b.value = "",
                nm(this.F, 160),
                gK("ufte", 0, a)
    }
}
;
cK.prototype.O = function() {
    var a = this.F;
    N(a, O(a, 298));
    hK("c");
    this.b.value = "";
    U(this.a, "has-file");
    U(this.a, "translating-file")
}
;
var eK = function(a) {
    a = a.split(".");
    return 1 === a.length ? "" : a[a.length - 1].toLowerCase()
}
    , fK = function(a) {
    switch (a.toLowerCase()) {
        case "doc":
            return 1;
        case "docx":
            return 2;
        case "odf":
            return 3;
        case "pdf":
            return 4;
        case "ppt":
            return 5;
        case "pptx":
            return 6;
        case "ps":
            return 7;
        case "rtf":
            return 8;
        case "txt":
            return 9;
        case "xls":
            return 10;
        case "xlsx":
            return 11;
        default:
            return 0
    }
}
    , dK = function(a) {
    return 0 === a.b.files.length ? 0 : a.b.files[0].size
}
    , gK = function(a, b, c) {
    Mm(gI, "webapp", "dt", a, {
        dtfs: b,
        dtft: c
    })
}
    , hK = function(a) {
    Mm(gI, "webapp", "dti", a, {})
};
var iK = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.o = a;
    this.v = b;
    this.a = null;
    this.g = !1;
    this.b = null;
    this.c = []
};
ka(iK, K);
var jK = function(a, b, c, d) {
    a.a ? II(a.a, b, c, d) : a.b = new HF(d,{},b,c)
};
iK.prototype.m = function() {
    this.dispatchEvent("close_requested")
}
;
iK.prototype.h = function() {
    this.dispatchEvent("history_cleared")
}
;
var kK = function(a) {
    if (null == a.a) {
        var b = Wp(KI, {
            Ia: DATA.Messages
        });
        E("tlid-translation-history-container", a.o).appendChild(b);
        a.a = new AI(b,a.v);
        H(a.a, "close_requested", a.m, !1, a);
        H(a.a, "clear_history_clicked", a.h, !1, a);
        H(a.a, "history_entry_selected", function(c) {
            a.dispatchEvent({
                type: "history_entry_selected",
                ib: c.ib,
                jb: c.jb,
                text: c.text
            })
        }, !1);
        DI(a.a, a.c);
        a.c = [];
        null != a.b && II(a.a, a.b.Qa(), a.b.ma(), a.b.a);
        a.g && JI(a.a)
    }
};
var mK = function(a, b) {
    this.F = L.M();
    this.c = a;
    this.a = E("tlid-transliteration-content", this.c);
    this.h = E("tlid-show-more-link", this.c);
    this.g = E("tlid-show-less-link", this.c);
    this.b = b;
    this.v = !1;
    lK(this)
}
    , oK = function(a, b) {
    if (p(b)) {
        var c = [];
        if (b.sentences)
            for (var d = 0, e; e = b.sentences[d]; d++)
                1 === a.b ? e["src-translit"] && c.push(e["src-translit"]) : 2 === a.b && e.translit && c.push(e.translit);
        b = c.join("")
    } else
        b = "";
    nK(a, b)
}
    , nK = function(a, b) {
    pK(a);
    G(a.a, b);
    V(a.c, "rtl", nc(b));
    Di(function() {
        return qK(a)
    }, 0)
}
    , qK = function(a) {
    pK(a);
    var b = a.a.offsetHeight
        , c = parseInt(dq(a.a, "lineHeight"), 10);
    3 < Math.ceil(b / c) ? a.v ? rK(a) : sK(a) : (V(a.a, "full", !0),
        V(a.a, "truncated", !1),
        W(a.h, !1),
        W(a.g, !1));
    V(a.a, "intermediate", !1)
}
    , rK = function(a) {
    V(a.a, "full", !0);
    V(a.a, "truncated", !1);
    W(a.h, !1);
    W(a.g, !0)
}
    , sK = function(a) {
    V(a.a, "full", !1);
    V(a.a, "truncated", !0);
    W(a.h, !0);
    W(a.g, !1)
}
    , pK = function(a) {
    Rp(a.a, ["truncated", "full"]);
    T(a.a, "intermediate")
};
mK.prototype.m = function() {
    var a = this;
    Di(function() {
        return qK(a)
    }, 0)
}
;
var lK = function(a) {
    var b = 0
        , c = "";
    1 === a.b ? (b = 1,
        c = "src") : 2 === a.b && (b = 2,
        c = "tgt");
    H(a.h, "click", function() {
        this.v = !0;
        rK(this);
        Cm(this.F, 290, b, this.a.textContent.length);
        Mm(gI, "webapp", "showmore", "click", {
            l: c
        })
    }, !1, a);
    H(a.g, "click", function() {
        this.v = !1;
        sK(this);
        Cm(this.F, 291, b, this.a.textContent.length);
        Mm(gI, "webapp", "showless", "click", {
            l: c
        })
    }, !1, a);
    H(window, "resize", a.m, !1, a)
};
var tK = function(a) {
    X.call(this);
    this.m = a;
    this.b = new zJ;
    this.g = new zs("");
    this.c = new zs("");
    this.h = null
};
w(tK, X);
tK.prototype.init = function() {
    this.c.ea(D("clear", this.j()));
    this.c.wd(DATA.Messages.CLEAR_TEXT);
    this.c.setVisible(!1);
    this.g.ea(D("url-go-button", this.j()));
    this.g.wd(DATA.Messages.TRANSLATE);
    this.g.oa(!1);
    this.b.ea(D("url-orig", this.j()));
    var a = this.b
        , b = DATA.Messages.URL_INPUT_PLACEHOLDER
        , c = a.j();
    BJ() ? (c && (c.placeholder = b),
        a.b = b) : EJ(a) || (c && (c.value = ""),
        a.b = b,
        a.h());
    c && Jp(c, "label", a.b);
    this.h = D("url-err-msg", this.j());
    G(this.h, DATA.Messages.ENTER_VALID_URL);
    W(this.h, !1);
    H(this.b.j(), "input", this.w, !1, this);
    H(this.c, "action", this.C, !1, this);
    H(this.g, "action", this.K, !1, this)
}
;
tK.prototype.C = function() {
    FJ(this.b);
    this.b.j().focus();
    this.g.oa(!1);
    this.c.setVisible(!1);
    W(this.h, !1)
}
;
tK.prototype.w = function() {
    var a = yc(this.b.Y());
    this.g.oa(!!a);
    this.c.setVisible(!!this.b.Y());
    a = a && !Zu(a);
    W(this.h, a)
}
;
tK.prototype.K = function() {
    var a = yc(this.b.Y());
    if (Zu(a)) {
        var b = this.m.a
            , c = this.m.b;
        var d = n.location.href;
        var e = d.indexOf("#");
        d = 0 > e ? d : d.substr(0, e);
        d = d.replace("/m/translate", "/translate");
        d = Gj(d, "sl", b ? b : "auto", "tl", c, "u", escape(a));
        $d(d, n, ec("webtrans"))
    }
}
;
var zK = function(a) {
    var b = a.fk, c = a.pk, d = a.wk, e = a.xk, f = a.Bk, g = a.Ck, k = a.Fk, l = a.Ra, m = a.Gk, q = a.Ik, r = a.Jk, u = a.Lk, C = a.Mk, Q = a.em, M = a.Ia, Qa = a.Em, Mb = a.Gm, Ja = a.on, Nb = a.pn, Ag = a.qn, Be = a.rn, $m = a.zn, ak = a.Ln, nM = a.ao, oM = a.Jo, pM = P, Rk;
    a.Ek ? Rk = P("<div class='tlid-survey survey-container hidden'><div class='tlid-before-survey'><div class='tlid-dismiss-survey dismiss-button'></div><div class='title'>" + R(M.HAPPINESS_SURVEY_TITLE) + "</div><div class='tlid-survey-contents survey-contents'></div><div class='goog-logo-container'><div class='goog-logo'></div></div></div><div class='tlid-after-survey' style='display: none'><div class='title'>" + R(M.HAPPINESS_SURVEY_THANKS) + "</div><div class='after-message'><div>" + R(M.HAPPINESS_SURVEY_AFTER) + "</div><div class='more-feedback-link'><a href='javascript:void(0);' class='tlid-more-feedback'>" + R(M.HAPPINESS_SURVEY_MORE_FEEDBACK) + "</a></div></div></div></div>") : Rk = "";
    a = Rk + "<div class='frame'>";
    Rk = P;
    var qM = "<div class='page tlid-homepage homepage translate-text'>" + P("<div class='input-button-container'><div class='tlid-input-button-container focus-wrapper' role='tablist' tabindex='0'>" + uK({
        identifier: "tlid-input-button-text",
        Qi: "text-icon",
        label: M.INPUT_METHOD_TEXT
    }) + uK({
        identifier: "tlid-input-button-docs",
        Qi: "documents-icon",
        label: M.INPUT_METHOD_DOCUMENTS
    }) + "</div></div>") + (r ? P("<span class='tlid-brain-logos-container'><span class='tlid-no-brain-logo no-brain-logo brain-container'></span><span class='tlid-brain-logo brain-logo brain-container'></span></span>") : ""), Zs;
    k ? Zs = P('<div class="promo-notification-wrapper"><div class=\'' + S("tlid-magnet-promo") + " promo-notification'>" + R("Google Translate is hiring!") + " <span class='tlid-promo-notification-link'><a href='" + S(Sn("http://go/joinTranslate")) + "' target='_blank'>" + R("go/joinTranslate") + "</a></span></div></div>") : Zs = "";
    f = qM + Zs + (f ? P("<div class='app-download-bar'><div class='tlid-app-download-bar focus-wrapper' tabindex=\"0\"><div class=\"prompt-text\">\u70b9\u51fb\u56fe\u6807\u4e0b\u8f7d App</div>" + R(vI({
        qe: "Android",
        yg: "android",
        identifier: "tlid-android-download"
    })) + R(vI({
        qe: "iOS",
        yg: "ios",
        identifier: "tlid-ios-download"
    })) + "</div></div>") : "") + "<div class='homepage-content-wrap'><div class='tlid-source-target main-header'><div class='source-target-row'>";
    k = P;
    d = '<div class="tlid-input input"><div class="tlid-language-bar ls-wrap"><div class="sl-wrap"><div class="sl-sugg"></div><div class="sugg-fade"></div><div class="sl-more tlid-open-source-language-list" aria-label="' + S(M.MORE) + '" role="button" tabindex="0"></div></div>' + vK({
        className: "sl",
        identifier: "source",
        Ti: ak,
        selected: d
    }) + '<div class="swap-wrap"><div class="swap jfk-button-narrow jfk-button-standard" aria-label="' + S(M.TOOLTIP_SWAP_LANGUAGES) + '" data-tooltip="' + S(M.TOOLTIP_SWAP_LANGUAGES) + '"><div class="jfk-button-img"></div></div></div><div class="tl-wrap"><div class="tl-sugg"></div><div class="sugg-fade"></div><div class="tl-more tlid-open-target-language-list" aria-label="' + S(M.MORE) + '" role="button" tabindex="0"></div></div>' + vK({
        className: "tl",
        identifier: "target",
        Ti: nM,
        selected: e
    }) + '</div><div class="source-wrap">';
    Nb = P('<div class="input-full-height-wrapper tlid-input-full-height-wrapper"><div class="source-input"><div id="input-wrap" class="tlid-input-area input-area' + (Nb ? "" : " less-padding") + '"><textarea id="source" class="orig tlid-source-text-input" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea><div class="text-dummy"></div><div id=gt-src-is style="display:none" class="gt-is-mobile gt-is"><div id=gt-src-is-list class=gt-is-ctr></div></div></div><div class="source-header"><div class="clear-wrap"><div class="clear jfk-button-flat tlid-clear-source-text" aria-label="' + S(M.CLEAR_TEXT) + '" data-tooltip="' + S(M.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div>' + (Nb ? '<div class="go-wrap"><div class="go-button" aria-label="' + S(M.TRANSLATE) + '" data-tooltip="' + S(M.TRANSLATE) + '"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div>' : "") + "</div>" + wK({
        containerId: "tlid-source-transliteration-container",
        Ia: M,
        tj: "source-transliteration-container"
    }) + '<div id="spelling-correction" class="tlid-spelling-correction spelling-correction"></div><div class="source-footer-wrap source-or-target-footer"><div class="source-input-tools" id="gt-input-tool"></div><div class="character-count tlid-character-count"><div class="cc-ctr"></div><div class="cc-msg"></div></div><div class="source-footer"><div class="speech-wrap source-or-target-footer-button left-positioned"><span class="speech-border"></span></div>' + xK({
        kf: ["src-tts", "left-positioned"],
        Ia: M
    }) + "</div></div></div></div>");
    Nb = k(d + Nb + "</div>" + (C ? P('<div class="url-input-wrap" style="display:none"><input id="url-input" class="url-orig" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"><div class="url-clear-wrap"><div class="clear jfk-button-flat"><div class="jfk-button-img"></div></div></div><div class="url-go-wrap"><div class="url-go-button"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div><div class="url-err-msg"></div></div>') : "") + P('<div id="gt-ovfl" style="display: none;" class="snck ovfl"><div id="gt-ovfl-ctr" class="ovfl-ctr"><span id="gt-ovfl-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-ovfl-xlt" class="ovfl-xlt" role="button">' + R(M.TRANSLATE_MORE) + "</span></div></div>") + P('<div id="gt-ntfcn" style="display: none;" class="snck ntfcn"><div id="gt-ntfcn-ctr" class="ntfcn-ctr"><span id="gt-ntfcn-msg" class="snck-msg" role="alert" aria-live="alert"></span></div></div>') + P('<div id="gt-cmty" style="display: none;" class="snck cmty"><div id="gt-cmty-ctr" class="cmty-ctr"><span id="gt-cmty-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-cmty-btn" class="cmty-btn" role="button"></span></div></div>') + "</div>");
    Nb = f + Nb;
    l = P('<div class="tlid-results-container results-container">' + (r ? '<div class="tlid-prod-translation prod-translation translation"></div>' : "") + (u ? '<div class="error-placeholder placeholder"><span class="tlid-result-error"></span><span class="tlid-result-container-error-button translation-error-button">' + R(M.TRY_AGAIN) + "</span></div>" : '<span class="tlid-result-error error-placeholder placeholder"></span>') + '<span class="empty-placeholder placeholder">' + R(M.TRANSLATION) + '</span><span class="translating-placeholder placeholder">' + R(M.TRANS_IN_PROGRESS) + '</span><div class="gendered-translations-header">' + R(M.GENDER_SPECIFIC_TRANSLATIONS_LABEL) + ' <a class="gendered-translations-learn-more" href="https://support.google.com/translate?p=gendered_translations&hl=' + On(l) + '" target="_blank">' + R(M.LEARN_MORE) + "</a></div></div>");
    l = Nb + l + "</div><div class='tlid-select-file-page-container'></div></div>";
    u = P("<div class='tlid-result-view cllist'>" + (u ? "<div class='tlid-translation-error translation-error-box' style='display: none'><span class=\"tlid-translation-error-message translation-error\"></span><span class=\"tlid-result-view-error-button translation-error-button\">" + R(M.TRY_AGAIN) + "</span></div>" : "<div class='tlid-translation-error tlid-translation-error-message translation-error' style='display: none'></div>") + "<div class='cp-promo-wrapper'></div><div class='gt-lc gt-lc-mobile' style='display: none'></div></div>");
    u = l + u + "<div class='feedback-link'><a href='javascript:void(0);' class='tlid-send-feedback-link'>" + R(M.SEND_FEEDBACK) + "</a></div></div>";
    l = P;
    c = '<div class="gp-footer">' + P('<div class="ft-icon-row"><div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(bo(Q)) + "')\">" + yK({
        Sf: "ft-icon-img-hst",
        caption: M.HISTORY_SECTION_TITLE
    }) + "</a></div>" + (m ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(bo($m)) + "')\">" + yK({
        Sf: "ft-icon-img-svd",
        caption: M.SAVED_SECTION_TITLE
    }) + "</a></div>" : "") + (g ? '<div class="ft-icon-ctr">' + (q ? '<a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(bo(c)) + "')\">" : '<a class="ft-link" href="/community?source=mfooter">') + yK({
        Sf: "ft-icon-img-cmn",
        caption: M.FOOTER_COMMUNITY
    }) + "</a></div>" : "") + (C ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(bo(oM)) + "')\">" + yK({
        Sf: "ft-icon-img-web",
        caption: M.FOOTER_WEBSITES
    }) + "</a></div>" : "") + "</div>");
    var $s;
    Ag ? $s = P('<div class="ad-panel gsa-promo"><div><span class="gsa-icon-animated"></span></div><div class="ad-panel-title">' + R(M.SEARCH_HANDS_FREE) + '</div><div class="ad-panel-subtitle">' + R(M.GSA_PURE_AD_TEXT) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + R(Qa) + '</span><span class="tlid-accept-promo accept-promo">' + R(Mb) + "</span></div></div>") : $s = "";
    Ag = c + $s;
    var at;
    Ja ? at = P('<div class="ad-panel at-promo"><div><span class="translate-icon"></span></div><div class="ad-panel-title">' + R(b) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + R(Qa) + '</span><span class="tlid-accept-promo accept-promo">' + R(Mb) + "</span></div></div>") : at = "";
    b = l(Ag + at + "</div>");
    b = Rk(u + b + "</div>");
    b = a + b + P("<div class='page tlid-history-page history-page' tabindex='0' aria-label='" + S(M.HISTORY_SECTION_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-translation-history-container\"></div></div></div>");
    q = P(q ? "<div class='page tlid-instant-page instant-page' tabindex='0' aria-label='" + S(M.COMMUNITY_INSTANT_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-community-instant-container\"></div></div></div>" : "");
    Be = b + q + (Be ? "<div class='page tlid-phrasebook-page phrasebook-page' tabindex='0' aria-label='" + S(M.SAVED_SECTION_TITLE) + "'><div class='tlid-phrasebook-outer-wrap outer-wrap'></div></div>" : "");
    M = P("<div class='page tlid-language-picker-page language-picker-page'><div class='language-picker-wrapper'>" + P('<div class="tlid-language-list-toolbar language-list-toolbar"><div class="tlid-language-list-back-button language-list-back-button" aria-label="' + S(M.CLOSE) + '"><div class="backbutton-image language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div></div><div class="tlid-language-list-search-button language-list-search-button"><div class="tlid-language-list-label language-list-label"></div><div class="searchbutton-image language-picker-toolbar-image"></div></div></div>') + "<div class='outer-wrap'></div></div></div>");
    M = Be + M;
    Be = P("<div class='toast-container'><div class='toast " + S({
        identifier: "tlid-toast"
    }.identifier) + "' style='display: none'><div class='tlid-toast-message message'></div><div class='tlid-toast-action toast-action'><a target='_blank' class='tlid-toast-action-link action-link'><span class='tlid-toast-action-text'></span></a></div></div></div>");
    return pM(M + Be + "</div>")
};
zK.a = "trans.mobile.widget.main";
var uK = function(a) {
    var b = a.Qi
        , c = a.label;
    return P("<div class='tlid-input-button input-button header-button " + S(a.identifier) + " " + S(b) + "' role='tab' tabindex=\"-1\"><div class='text'>" + R(c) + "</div></div>")
}
    , AK = function(a) {
    var b = a.Ra
        , c = a.Ia;
    return P("<div class='select-file-page tlid-file-selector loading'><form method='post' action='" + S(Sn(a.Sk)) + "'><input type='hidden' name='hl' value='" + S(b) + "' class='tlid-hl-input'><input type='hidden' name='ie' value='UTF-8' class='tlid-ie-input'><input type='hidden' name='js' value='y' class='tlid-js-input'><input type='hidden' name='prev' value='_t' class='tlid-prev-input'><input type='hidden' name='sl' class='tlid-sl-input'><input type='hidden' name='tl' class='tlid-tl-input'><div class='tlid-select-file-section select-file-section'><div class='choose-document-prompt'>" + R(c.CHOOSE_A_DOCUMENT) + "</div><div class='upload-filetypes-prompt'>" + R(c.UPLOAD_FILETYPES) + "</div><input type='file' name='file' id='tlid-file-input' class='file-input tlid-file-input'><label for='tlid-file-input' class='tlid-select-file-button button'>" + R(c.BROWSE_YOUR_COMPUTER) + "</label></div><div class='tlid-file-selected-section file-selected-section'><div class='file-holder'><div class='file-holder-icon'></div><div class='file-info'><div class='tlid-selected-file-label file-label'></div><div class='tlid-selected-file-size file-size'>&nbsp;</div></div><div class='selected-and-cancel'><div class='tlid-cancel-selected-file-button cancel-file'></div></div></div><div class='button-container'><input type='submit' class='tlid-translate-doc-button button' value='" + S(c.TRANSLATE) + "'></div></div><div class='loading-or-translating-file-section'><div class='mspin-googblue-medium'><div><div></div></div></div><div class='translating-file-caption'>" + R(c.TRANS_IN_PROGRESS) + "</div></div></form></div>")
};
AK.a = "trans.mobile.widget.selectFilePage";
var yK = function(a) {
    var b = a.Sf;
    a = a.caption;
    return P('<div class="footer-icon-container ' + S(b) + '"><div class="ft-icon-img-ctr"><div class="ft-icon-oval" id="' + S(b) + '"></div></div><div class="ft-icon-txt">' + R(a) + "</div></div>")
}
    , wK = function(a) {
    var b = a.Ia
        , c = a.tj;
    return P("<div class='" + S(a.containerId) + " " + S(c) + " transliteration-container'><div class='tlid-transliteration-content transliteration-content'></div><div class='tlid-show-more-link truncate-link' style='display:none'>" + R(b.SHOW_MORE) + "</div><div class='tlid-show-less-link truncate-link' style='display:none'>" + R(b.SHOW_LESS) + "</div></div>")
}
    , xK = function(a) {
    var b = a.Ia
        , c = "<div class='";
    a = a.kf;
    for (var d = a.length, e = 0; e < d; e++)
        c += S(a[e]) + " ";
    c += "ttsbutton jfk-button-flat source-or-target-footer-button' aria-label='" + S(b.LISTEN) + "' data-tooltip='" + S(b.LISTEN) + "'><div class='jfk-button-img'></div></div>";
    return P(c)
}
    , vK = function(a) {
    var b = a.className
        , c = a.identifier
        , d = a.Ti;
    a = a.selected;
    b = '<div class="' + S(b) + '-selector lang_list"><div class="lang-btn"><a class="ls-select new-ls-select ' + S(b) + "-button tlid-open-small-" + S(c) + '-language-list"';
    c = "";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += Fn(g.Code, a) ? "" + g.Name : ""
    }
    b += ' aria-label="' + S(c) + '" tabindex="0">' + R(c) + "</a></div></div>";
    return P(b)
}
    , BK = function(a) {
    var b = a.Ia;
    a = a.In;
    return P('<div class="tlid-gender-promo gender-promo"><div class="gender-promo-graphic"></div><div class="gender-promo-content"><div class="gender-promo-pre-title">' + R(b.NEW_FEATURE) + '</div><div class="gender-promo-title">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TITLE) + '</div><span class="gender-promo-message gender-promo-message-short-phrase">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT) + '</span><span class="gender-promo-message gender-promo-message-single-word">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT_SINGLE_WORD) + "</span>" + (a ? '<a class="gender-promo-learn-more" target="_blank" href="https://www.blog.google/products/translate/reducing-gender-bias-google-translate/">' + R(b.LEARN_MORE) + "</a>" : "") + "</div><div class='tlid-gender-promo-dismiss-button gender-promo-dismiss-button'></div></div>")
};
BK.a = "trans.mobile.widget.genderPromo";
var CK = function(a) {
    var b = a.Hg, c = a.Gg, d = a.Dm, e = a.Fm, f = a.Ia, g = P, k;
    a.Mc ? k = P('<div class="starbutton jfk-button-flat" aria-label="' + S(e) + '" data-tooltip="' + S(e) + '"><div class="jfk-button-img"></div></div>') : k = "";
    return g('<div class=\'tlid-result result-dict-wrapper\'><div class="result tlid-copy-target"><div class="result-header">' + k + '</div><div class="text-wrap tlid-copy-target"><div class="result-shield-container tlid-copy-target" tabindex="0"><span class="tlid-translation translation"></span><span class="tlid-translation-gender-indicator translation-gender-indicator"></span><span class="tlid-trans-verified-button trans-verified-button" style="display:none" role="button"></span></div></div>' + wK({
        containerId: "tlid-result-transliteration-container",
        Ia: f,
        tj: "result-transliteration-container"
    }) + '<div class="result-footer source-or-target-footer tlid-copy-target"><div class="tlid-share-translation-button share-translation-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(f.SHARE_TRANSLATION) + "' data-tooltip=\"" + S(f.SHARE_TRANSLATION) + '"><div class="jfk-button-img"></div></div><div class="tlid-suggest-edit-button suggest-edit-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(f.SUGGEST_AN_EDIT) + "' data-tooltip=\"" + S(f.SUGGEST_AN_EDIT) + '"><div class="jfk-button-img"></div></div><div class="more-wrapper"><div class="morebutton jfk-button-flat source-or-target-footer-button tlid-result-footer-more-button right-positioned" data-tooltip="' + S(f.MORE) + '"><div class="jfk-button-img"></div></div><div class="moremenu"></div></div>' + (c ? '<div class="tlid-copy-translation-button copybutton jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(d) + "' data-tooltip=\"" + S(d) + '"><div class="jfk-button-img"></div></div>' : "") + xK({
        kf: ["res-tts", "ttsbutton-res", "left-positioned"],
        Ia: f
    }) + (b ? '<div class="result-search"><div class="result-search-icon"></div></div>' : "") + '</div></div><div class="gt-edit" style="display:none"><div class="gt-clear" tabindex="0"><div class="jfk-button-img"></div></div><textarea class="contribute-target"></textarea></div></div>')
};
CK.a = "trans.mobile.widget.result";
var DK = function(a) {
    var b = a.yn;
    return P("<span class='tlid-translation-page-link translation-page-link'><a href='" + S(Sn(a.xn)) + "' target='_blank'>" + R(b) + "<span class='open-translated-page-icon'></span></a></span>")
};
DK.a = "trans.mobile.widget.resultHyperlink";
var AB = function(a) {
    var b = a.re
        , c = a.vm;
    a = a.wm;
    return P('<div class="language-list-search-box"><div class="back-image-black language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div><div class="language_list_search_box_container"><input id="' + S(c) + '-search-box" type="text" oninput="_e(event, \'' + S(bo(b)) + "', '" + S(bo(c)) + '\')" placeholder="' + S(a) + '"></div></div>')
};
AB.a = "trans.mobile.widget.languageListSearchBox";
var rB = function(a) {
    var b = a.id
        , c = a.re
        , d = a.name;
    a = a.code;
    b = '<div class="language_list_item_wrapper language_list_item_wrapper-' + S(a) + " " + (Fn(a, "auto") ? " detect_language " : "") + '" onclick="_e(event, \'' + S(bo(c)) + "', '" + S(bo(b)) + '\')" role="button" tabindex="0"><div class="language_list_item_icon ' + S(b) + '_checkmark"></div>';
    c = Fn(a, "auto") ? "language_list_item" : "language_list_item language_list_item_language_name";
    b += "<div class='" + S(c) + "'>" + R(d) + "</div>" + (Fn(a, "auto") ? '<div class="detect_language_row_icon"></div>' : "") + "</div>";
    return P(b)
};
rB.a = "trans.mobile.widget.languageListItem";
var OB = function(a) {
    return P('<div class="language_list_section"><div class="language_list_section_header">' + R(a.text) + "</div></div>")
};
OB.a = "trans.mobile.widget.languageListSection";
var EK = function(a) {
    var b = a.Bo
        , c = a.Ia
        , d = a.Kk
        , e = a.Nk
        , f = a.Ho;
    a = a.fm;
    return P('<div class="share-module"><div class="tlid-share-panel share-panel" aria-hidden="true" tabindex="0"><div class="share-panel-wrap"><h3>' + R(c.SHARE_MODULE_TITLE) + "</h3>" + (Gn(e) && Gn(f) ? '<div id="not_installed"><span class="warning-icon"></span><span class="warning-msg">' + R(f) + "</span></div>" : "") + "<ul>" + (d ? '<li><a href="sms:' + (a ? "&body=" + S(b) : "?body=" + On(b)) + '" class="sms"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_SMS) + " </span></a></li>" : "") + '<li><a href="mailto:?body=' + On(b) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_EMAIL) + " </span></a></li>" + (Gn(e) && Gn(f) ? '<li><a href="whatsapp://send?text=' + On(b) + '" class="whatsapp"><span class="share-link-icon"></span><span> WhatsApp </span></a></li>' : "") + '<li><a href="https://twitter.com/intent/tweet?text=' + On(b) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li></ul></div></div></div>')
};
EK.a = "trans.mobile.widget.shareModule";
var FK = function(a) {
    var b = a.Xn
        , c = a.ho
        , d = a.Yn
        , e = a.qe
        , f = a.Cn;
    return P('<div class="gsa-interstitial"><div class="clear-wrap"><div class="clear jfk-button-flat" aria-label="' + S(a.Ia.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div><div><span class="gsa-icon"></span></div><div class="gsa-int-text">' + R(b) + (c ? "<b>" + R(c) + "</b>" : "") + R(d) + '</div><div class="gsa-int-button">' + R(e) + '</div><div class="gsa-int-second-choice">' + R(f) + "</div></div>")
};
FK.a = "trans.mobile.widget.iGSAInterstitial";
var GK = function(a) {
    var b = a.message;
    return P("<span class='survey-option survey-option-" + S(a.cn) + "'><span class='survey-option-text'>" + R(b) + "</span></span>")
};
GK.a = "trans.mobile.widget.surveyOption";
var HK = function(a) {
    return P("<span class='ink-container " + S(a.nk) + "'></span>")
};
HK.a = "trans.mobile.widget.inkContainer";
var IK = function() {
    var a = DATA.Messages.CLOSE_SEARCH
        , b = DATA.Messages.CLEAR_TEXT
        , c = DATA.Messages.RECENT_LANGUAGES
        , d = DATA.Messages.ALL_LANGUAGES
        , e = DATA.Messages.CHECKED_LANGUAGE;
    this.v = DATA.Messages.SEARCH_LANGUAGES;
    this.b = a;
    this.a = b;
    this.h = c;
    this.c = d;
    this.g = e
};
var PK = function(a, b, c, d, e, f) {
    var g = this;
    K.call(this);
    this.c = e;
    this.V = f;
    this.o = a;
    this.eb = b;
    this.R = E("tlid-open-small-source-language-list", this.o);
    this.hb = E("tlid-open-small-target-language-list", this.o);
    a = new IK;
    this.b = new wF("sl_list",a);
    this.g = new wF("tl_list",a);
    this.b.C = this.R;
    this.b.K(Ob(DATA.SourceLanguageCodeNameList));
    this.g.C = this.hb;
    this.g.K(Ob(DATA.TargetLanguageCodeNameList));
    this.a = new Yv("",!0);
    this.a.ea(D("orig", this.o));
    yr(this.a, "orig-ios", Je);
    jt() || (this.a.j().placeholder = DATA.Messages.ENTER_TEXT);
    this.Nc = new zs("");
    a = E("swap", this.o);
    this.Nc.ea(a);
    jt() && this.Nc.wd(De ? DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_MAC : DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_NOTMAC);
    LA(this.V, {
        Nc: this.Nc
    });
    rs(a, 1);
    JK(this);
    this.Ca = fb(D("source-header", this.o));
    KK(this, c);
    this.C = null;
    c = D("go-button", this.o);
    null != c && (this.C = new zs(""),
        this.C.ea(c),
        vH(c),
        H(this.C.j(), "mousedown", function() {
            g.dispatchEvent("translateButtonClicked")
        }, !1));
    this.K = new zs("");
    c = E("clear", this.o);
    this.K.ea(c);
    this.K.setVisible(!1);
    vH(c);
    this.L = new zs("",void 0,4);
    this.L.Oa(16, !0);
    this.L.Oa(1, !0);
    c = E("src-tts", this.o);
    this.L.ea(c);
    vH(c);
    this.v = new dv(this.L,"&client=webapp&prev=input",1,!0,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    this.F = L.M();
    this.Ob = new XG;
    this.W = new ZG;
    this.W.ea(D("gt-is-mobile", this.o));
    this.W.setVisible(!1);
    this.G = null;
    jt() && (this.G = new lz(D("source-input-tools", this.o),D("orig", this.o),D("source-input-tools", this.o),DATA.DisplayLanguage,DATA.InChina),
        H(this.G, "change", function() {
            LK(g)
        }, !1));
    this.O = new rD(this.Ob,this.W,{
        hm: this.a,
        Gn: null,
        im: this.G,
        ia: this.c,
        Qn: new WG,
        Co: new rp("webapp"),
        client: "webapp",
        Ra: DATA.DisplayLanguage,
        Kn: !DATA.DisableOtf,
        zm: 4,
        Ao: !0,
        hk: !1,
        Tk: "",
        mm: !1,
        jm: !1,
        kr: DATA.Messages.QUICK_TRANSLATION,
        Nn: DATA.Messages.DID_YOU_MEAN,
        Xq: DATA.Messages.LANGUAGE_CORRECTION,
        qk: new Aw
    });
    this.na = new mK(fb(D("tlid-source-transliteration-container", this.o)),1);
    this.xb = Hm.M();
    this.w = !1;
    this.aa = "";
    this.h = new JG(this.a,this.V,DATA.TopLevelDomain.substr(DATA.TopLevelDomain.lastIndexOf(".") + 1),DATA.DisplayLanguage,!0,DATA.Messages.VOICE_INPUT_UNAVAILABLE,DATA.Messages.VOICE_INPUT_UNAVAILABLE_GENERIC,!0,DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
    this.m = fb(D("speech-wrap", this.o));
    MK(this);
    DATA.UrlTranslation && (this.X = new tK(this.c),
        c = D("url-input-wrap", this.o),
        this.X.ea(c),
        this.X.init());
    NK(this);
    OK(this)
};
w(PK, K);
var JK = function(a) {
    var b = new GA(fb(D("sl-sugg", a.o)),v(qI, a),3,!0,!0,!0)
        , c = new GA(fb(D("tl-sugg", a.o)),v(rI, a),3,!1,!1,!0);
    LA(a.V, {
        pj: b,
        zj: c
    });
    nw(a.c);
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && lw(a.c);
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_tl) && mw(a.c);
    fw(a.c);
    gw(a.c);
    a = b.a;
    c = c.a;
    for (b = 0; b < a.length; b++)
        H(a[b].j(), "click", function(d) {
            QK(d)
        }, !1);
    for (a = 0; a < c.length; a++)
        H(c[a].j(), "click", function(d) {
            QK(d)
        }, !1)
}
    , QK = function(a) {
    var b = a.target;
    b.blur();
    var c = D("ink-container", b);
    c || (c = Wp(HK, {
        nk: "language-selector-ripple"
    }),
        b.insertBefore(c, b.firstChild));
    U(c, "ink-ripple-animation");
    if (!c.offsetHeight && !c.offsetWidth) {
        var d = Math.max(b.offsetHeight, b.offsetWidth);
        c.style.height = d + "px";
        c.style.width = d + "px"
    }
    b = b.getBoundingClientRect();
    d = a.clientX - (b.left + document.body.scrollLeft) - c.offsetWidth / 2;
    c.style.top = a.clientY - (b.top + document.body.scrollTop) - c.offsetHeight / 2 + "px";
    c.style.left = d + "px";
    T(c, "ink-ripple-animation")
}
    , MK = function(a) {
    if (ro && "webkitSpeechRecognition"in window) {
        a.h.init(a.m);
        var b = F("span", ["speech-border", "speech-background"]);
        ig(a.m, b, 1);
        RK(a)
    } else
        W(a.m, !1)
}
    , NK = function(a) {
    H(a.a, "change", function(b) {
        OK(a, b.changeType)
    }, !1, a);
    H(a.a.j(), "focus", a.N, !1, a);
    H(a.a.j(), "blur", a.N, !1, a);
    H(a.a.j(), "focus", v(a.Na, a, !1), !1, a);
    H(a.a.j(), "blur", v(a.Na, a, !0), !1, a);
    H(a.a.j(), "focus", a.F.c, !1, a.F);
    H(window, "resize", a.ba, !1, a);
    H(a.c, "srcEmphasizeUpdated", a.xa, !1, a);
    H(a.c, "tgtEmphasizeUpdated", a.rb, !1, a);
    H(a.c, "srcLanguageUpdated", a.Xa, !1, a);
    H(a.c, "detectSrcUpdated", a.ra, !1, a);
    H(a.K, "action", a.yb, !1, a);
    a.h && (H(a.h, "start", a.Ol, !1, a),
        H(a.h, "speechStart", a.xo, !1, a),
        H(a.h, "end", a.Nl, !1, a),
        H(a.h, "userInteractionWhileDisabled", a.Xl, !1, a),
        H(a.v, "userInteractionWhileDisabled", a.zo, !1, a));
    H(E("tlid-input-full-height-wrapper", a.o), "click", function(b) {
        var c = a.na;
        [c.c, c.a, c.h, c.g].includes(b.target) || Gg(document) === a.a.j() || LK(a)
    }, !1)
}
    , SK = {
    "small-font": 2
};
PK.prototype.j = function() {
    return this.o
}
;
var TK = function(a) {
    var b = a.c.a;
    a.v.update(a.a.Y(), b, void 0, qI(b))
};
PK.prototype.N = function(a) {
    a = a ? "focus" == a.type : Gg(document) === this.a.j();
    var b = !!this.a.Y();
    this.K.setVisible(a || b);
    null != this.C && this.C.setVisible(a)
}
;
var LK = function(a) {
    a.a.j().focus()
}
    , UK = function(a) {
    var b = lq(a.Ca).a
        , c = $p(vq(a.a.j())).bottom
        , d = iq(document).a;
    d > b - 10 && c > d || Di(v(window.scrollTo, window, 0, b - 8), 100, a)
}
    , RK = function(a) {
    if (a.h) {
        var b = a.c.a;
        a = a.h;
        var c = qI(b);
        if (null != a.a) {
            a.Jb && a.a.stop();
            var d = a.V.get(b);
            a.a.lang = null != d ? d : "";
            null != d ? (a.G = d,
                a.b.oa(!0),
                W(a.h, !0)) : (x(null != a.m || null != a.L, "Cannot disable button without providing a tooltip explanation"),
                "auto" === b && null != a.C ? (b = a.b,
                    b.b = a.C,
                    b.oa(!1)) : null != a.m ? (b = a.b,
                    c = a.aa.a(a.m, c),
                    b.b = c,
                    b.oa(!1)) : (b = a.b,
                    b.b = a.L,
                    b.oa(!1)),
            a.na || W(a.h, !1))
        }
    }
};
h = PK.prototype;
h.Ol = function() {
    this.w = !0;
    VK(this)
}
;
h.xo = function() {
    T(this.m, "speech-data")
}
;
h.Nl = function() {
    this.w = !1;
    U(this.m, "speech-data");
    VK(this);
    OK(this)
}
;
h.Xl = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceInput")
}
;
h.zo = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
}
;
var VK = function(a) {
    var b = "";
    a.w ? a.aa = $v(a.a) : b = $v(a.a) || a.aa;
    a.a.b(b);
    a.a.j().disabled = a.w;
    b = a.a;
    b.Cd = a.w ? MSG_SPEAK_NOW : DATA.Messages.ENTER_TEXT;
    b.j() && Uv(b);
    a.a.j().blur()
};
PK.prototype.Na = function(a) {
    for (var b = Of("show-panel"), c = 0; c < b.length; c++)
        Di(Ta(W, b[c], a), 100, this)
}
;
PK.prototype.yb = function() {
    var a = this.F;
    N(a, O(a, 23));
    "" === this.a.Y() ? this.a.j().blur() : (this.a.b(""),
        LK(this));
    this.h && (this.h.c = "");
    this.v && this.v.stop();
    Pm(this.xb, "clearbtn", 1, "accumulate");
    this.dispatchEvent("inputCleared")
}
;
var OK = function(a, b) {
    a.ba();
    a.N();
    TK(a);
    "paste" === b && a.dispatchEvent("inputPasted")
}
    , WK = function(a) {
    var b = a.c.a;
    "auto" == b && (b = a.c.c);
    b && (b = kc(b) ? "rtl" : "ltr",
        bq(a.a.j(), "direction", b),
        a = D("gt-hl-layer", a.o),
    null != a && bq(a, "direction", b))
};
PK.prototype.Xa = function() {
    var a = this.c.a;
    "auto" != a && KK(this, a);
    WK(this);
    RK(this);
    this.v.update(this.a.Y(), a, void 0, qI(a));
    null != this.G && oz(this.G, a)
}
;
PK.prototype.xa = function(a) {
    this.b.L = a.data
}
;
PK.prototype.rb = function(a) {
    this.g.L = a.data
}
;
PK.prototype.ra = function() {
    WK(this)
}
;
var KK = function(a, b) {
    var c = qI(b);
    a.b.V(c, b)
};
PK.prototype.update = function(a, b, c) {
    var d = this.na;
    if (p(b)) {
        var e = [];
        if (b.cb(0))
            for (var f = 0; f < b.ic(); f++) {
                var g = b.cb(f);
                1 === d.b ? J(g, 3) && e.push(J(g, 3)) : 2 === d.b && J(g, 2) && e.push(J(g, 2))
            }
        e = e.join("")
    } else
        e = "";
    nK(d, e);
    V(this.o, "has-transliteration", 0 !== this.na.a.textContent.length);
    d = J(op(b), 1);
    e = J(b, 2);
    this.v.update(c ? d : a, e, void 0, qI(e));
    "auto" == this.c.a && ((a = J(b, 2)) && "auto" != a ? (a = qI(a),
        a = source_language_detected.replace(/%\d\$s/g, a),
        G(this.R, a)) : G(this.R, qI("auto")))
}
;
PK.prototype.ba = function() {
    var a = this.a;
    a.oh = 0;
    Tv(a);
    a = D("text-dummy", this.o);
    var b = D("text-dummy", this.o);
    this.a.Y().endsWith("\n") ? G(b, this.a.Y() + "\n") : G(b, this.a.Y());
    Dg(a) ? (b = Hq(a),
        a = (a.scrollHeight - b.top - b.bottom) / 32) : a = 1;
    V(this.eb, "small-font", a > SK["small-font"]);
    Tv(this.a)
}
;
var XK = function(a) {
    K.call(this);
    this.o = a;
    this.g = this.a = null;
    this.c = this.b = ""
};
ka(XK, K);
XK.prototype.h = function() {
    this.dispatchEvent("close_requested")
}
;
XK.prototype.m = function() {
    this.dispatchEvent("sign_in_requested")
}
;
XK.prototype.v = function() {
    return !0
}
;
var YK = function(a, b, c, d, e, f) {
    var g = kv();
    kF.call(this, a, c, d, e, g);
    this.O = f;
    this.w = b
};
ka(YK, kF);
YK.prototype.m = function() {
    this.h.style.left = Math.round(this.coords[0]) + "px";
    this.h.style.bottom = Math.round(this.coords[1]) + "px"
}
;
YK.prototype.g = function() {
    (new nF(this.w,this.O)).play()
}
;
var ZK = function() {
    X.call(this);
    this.h = null
};
ka(ZK, X);
ZK.prototype.b = function() {
    return ""
}
;
ZK.prototype.setVisible = function(a, b) {
    var c = this
        , d = this.j();
    if (xq(d) != a) {
        var e = D(this.b(), this.j());
        a ? (bq(d, {
            opacity: 1
        }),
            bq(e, {
                opacity: 0
            }),
            W(d, !0),
            (new YK(d,e,$K,aL,225,100)).play(),
        b && (this.h = window.setTimeout(function() {
            return c.setVisible(!1)
        }, b))) : ((new oF(d,195)).play(),
        this.h && (window.clearTimeout(this.h),
            this.h = null))
    }
}
;
var $K = [0, -48]
    , aL = [0, 0];
var bL = function() {
    ZK.call(this)
};
ka(bL, ZK);
bL.prototype.b = function() {
    return "ntfcn-ctr"
}
;
bL.prototype.Xc = function(a) {
    if (!a || "DIV" != a.tagName)
        return !1;
    a = D("ntfcn-ctr", a);
    return a && "DIV" == a.tagName ? (a = D("snck-msg", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
}
;
bL.prototype.Z = function() {}
;
var cL = function() {};
ka(cL, wr);
cL.prototype.Zc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
}
;
var dL = function(a, b, c, d) {
    ZK.call(this);
    this.m = a;
    this.c = b;
    this.R = c;
    this.N = d;
    this.W = new uv("######");
    this.V = new UF(DATA.Messages.CHARACTER_LIMIT);
    this.X = new UF(DATA.Messages.TRANSLATE_NEXT);
    this.g = "";
    this.w = null;
    this.C = new Hm;
    this.C.c = "webapp";
    this.F = L.M()
};
ka(dL, ZK);
dL.prototype.b = function() {
    return "ovfl-ctr"
}
;
dL.prototype.Xc = function(a) {
    return a && "DIV" == a.tagName ? (a = D(this.b(), a)) && D("snck-msg", a) && D("ovfl-xlt", a) ? !0 : !1 : !1
}
;
dL.prototype.Z = function() {
    var a = D("ovfl-xlt", this.j());
    this.w = new Rr(null,new cL);
    this.w.ea(a);
    H(this.w, "action", this.K, !1, this)
}
;
dL.prototype.K = function() {
    var a = this.c.c;
    "" == a && (a = this.c.a);
    var b = this.g.length
        , c = Math.max(b - this.N, 0);
    rm(this.F, b, c);
    Mm(this.C, "webapp", "xm", "1", {
        sl: this.c.a,
        tl: this.c.b,
        dl: a,
        hl: this.R,
        ql: b,
        ol: c
    });
    this.m.a.b(this.g);
    UK(this.m);
    var d = this.m.a
        , e = d.j();
    Di(function() {
        e.focus();
        var f = d.Y().length;
        if (qw(e))
            e.selectionStart = f,
                e.selectionEnd = f;
        else if (rw()) {
            f = uw(e, f);
            var g = e.createTextRange();
            g.collapse(!0);
            g.move("character", f);
            g.select()
        }
    }, 0)
}
;
var hL = function(a) {
    var b = DATA.DisplayLanguage;
    this.g = Hm.M();
    this.F = L.M();
    this.b = a;
    this.h = eL[1];
    this.a = fL[1];
    this.v = E("tlid-promo-notification-link", this.b);
    this.c = b;
    gL(this)
}
    , iL = function(a, b) {
    b ? (tm(a.F, a.a),
        a.g.log("bbarshow", {
            hl: a.c,
            type: a.h
        })) : V(a.b, "hidden", !0)
}
    , gL = function(a) {
    H(a.v, "click", function() {
        iL(this, !1);
        um(this.F, this.a);
        this.g.log("bbarlm", {
            hl: this.c,
            type: this.h
        })
    }, !1, a)
}
    , fL = {
    1: 20
}
    , eL = {
    1: "hiring"
};
var jL = function(a, b) {
    this.a = a;
    this.F = b;
    a: {
        b = DATA.Messages.LEARN_MORE_ABOUT_THIS;
        var c = ""
            , d = "";
        28 > a.length && (c = DATA.Messages.LEARN_MORE_ABOUT.indexOf("%1$s"),
        -1 != c && (b = DATA.Messages.LEARN_MORE_ABOUT.slice(0, c),
            d = DATA.Messages.LEARN_MORE_ABOUT.slice(c + 4, DATA.Messages.LEARN_MORE_ABOUT.length)),
            c = a);
        a = Wp(FK, {
            Xn: b,
            ho: c,
            Yn: d,
            qe: DATA.Messages.TRY_IT.toUpperCase(),
            Cn: DATA.Messages.SEARCH_IN_BROWSER,
            Ia: DATA.Messages
        });
        break a;
        throw Error("Missing render function for GSA interstitial type gsaIntGsaWeb");
    }
    this.o = a;
    a: {
        break a;
        throw Error("Missing Promotion for GSA interstitial type gsaIntGsaWeb");
    }
};
jL.prototype.show = function() {
    document.body.appendChild(this.o);
    kL("show");
    tm(this.F, 21);
    mI(v(this.h, this));
    var a = this.g;
    var b = this.c;
    H(D("gsa-int-button", this.o), "click", a, !1, this);
    H(D("gsa-int-second-choice", this.o), "click", b, !1, this);
    H(D("clear", this.o), "click", this.b, !1, this)
}
;
var lL = function(a, b) {
    jg(a.o);
    a.o = null;
    kL(b)
};
jL.prototype.h = function() {
    lL(this, "dismissbg")
}
;
jL.prototype.g = function() {
    um(this.F, 21);
    lI();
    lL(this, "accept");
    Lm(gI, "/translate/uc?ua=dismiss&uav=searchgsa");
    jI(this.a, 2)
}
;
jL.prototype.c = function() {
    um(this.F, 22);
    lI();
    lL(this, "webapp");
    Lm(gI, "/translate/uc?ua=dismiss&uav=gsaint");
    kI(this.a)
}
;
jL.prototype.b = function() {
    var a = this.F;
    N(a, sm(a, 74, 21));
    lI();
    lL(this, "dismiss")
}
;
var kL = function(a) {
    Mm(gI, "webapp", "gsaIntGsaWeb", a, void 0);
    Dh("gsa", "gsaIntGsaWeb:" + a, "", 1)
};
var nL = function(a) {
    this.a = a;
    this.b = (new Date).getTime();
    mL(this, 1)
}
    , mL = function(a, b) {
    Di(function() {
        (new Date).getTime() - this.b > 500 * b + 200 ? this.a(!0) : 8 > b ? mL(this, b + 1) : this.a(!1)
    }, 500, a)
};
var oL = function(a, b, c, d, e, f, g, k, l) {
    K.call(this);
    this.qa = a;
    this.o = b;
    this.v = c;
    this.a = new HF(d,e,f,g);
    this.rb = k;
    this.b = null;
    a = D("starbutton", this.j());
    null != a && (this.b = new Jt,
        this.b.ea(a),
        vH(a),
        H(this.b, "action", this.ba, !1, this),
        a = this.b,
        a.b = l || !1,
        It(a));
    this.c = L.M()
};
ka(oL, K);
oL.prototype.j = function() {
    return this.o
}
;
oL.prototype.Ce = function() {
    return this.a.ma()
}
;
var pL = function(a) {
    if (a.o.parentElement && a.o.parentElement.childNodes)
        for (var b = a.o.parentElement.childNodes, c = 0; c < b.length; c++)
            if (b[c] == a.o)
                return c;
    return -1
};
oL.prototype.$a = function() {
    return this.a.$a()
}
;
oL.prototype.ba = function() {
    if (!DATA.InChina) {
        var a = null != this.b && this.b.b ? "unst" : "st"
            , b = new an
            , c = {};
        b.g((c.op = "star",
            c.sl = this.a.Qa(),
            c.tl = this.Ce(),
            c.text = this.a.a,
            c.page = this.v,
            c));
        oI(a, gI, this.hb.bind(this), Fa, b.toString())
    }
}
;
oL.prototype.hb = function() {
    if (null != this.b) {
        var a = !(null != this.b && this.b.b);
        if (oG(this.rb, this.a, a ? 0 : 1)) {
            var b = this.b;
            b.b = a;
            It(b);
            iI(a ? "star" : "unstar", this.qa, IF(this.a), this.a.ma(), this.a.a);
            if ("home" == this.v) {
                b = this.c;
                a = O(b, a ? 67 : 180);
                var c = b.a.a;
                if (null != c) {
                    var d = new Pk;
                    c = B(d, 1, c || []);
                    mf(a, 83, c)
                }
                N(b, a)
            } else
                "history" == this.v ? (b = this.c,
                    N(b, Em(b, 64, pL(this), a))) : "saved" == this.v && (gI.log("sli=us", {}),
                    b = this.c,
                    N(b, Gm(b, 46)))
        }
    }
}
;
var uL = function(a, b, c, d, e, f) {
    oL.call(this, "main", qL(f), "home", "", {}, "", "", b);
    var g = this;
    a.appendChild(this.j());
    this.V = rL();
    this.L = new zs("",void 0,4);
    this.L.Oa(16, !0);
    a = E("res-tts", this.j());
    this.L.ea(a);
    vH(a);
    this.K = new dv(this.L,"&client=webapp",2,!0,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    H(this.K, "userInteractionWhileDisabled", this.Xa, !1, this);
    this.na = c;
    this.ra = d;
    this.O = null;
    DATA.InChina || (this.O = E("tlid-trans-verified-button", this.j()),
        Ch(this.O, function() {
            g.dispatchEvent("verifiedTranslationButtonClicked")
        }));
    this.G = this.w = null;
    sL(this);
    this.xa = e;
    this.N = new mK(fb(D("tlid-result-transliteration-container", this.j())),2);
    this.C = new Ov("");
    this.C.ea(D("contribute-target", this.j()));
    this.h = null;
    this.Na = new rp("webapp");
    this.g = this.m = null;
    this.R = this.X = !1;
    this.eb = E("tlid-translation-gender-indicator", this.j());
    this.aa = new hA(tL(this),"trans",14,"webapp",void 0,void 0,this.W.bind(this));
    new aH(tL(this),Array.from(Of("tlid-copy-target", this.j())))
};
ka(uL, oL);
uL.prototype.T = function() {
    this.aa.Ka();
    jg(this.j());
    oL.prototype.T.call(this)
}
;
uL.prototype.Ca = function() {
    var a = this.a.Qa()
        , b = this.a.ma()
        , c = this.a.a.length
        , d = DATA.DisplayLanguage
        , e = tL(this);
    fA(e);
    e = tz(window).toString();
    e = gA(e);
    var f = "";
    try {
        document.execCommand("copy") ? (f = "success",
            so && this.g ? km(L.M(), this.g.Rc()) : km(L.M()),
            this.dispatchEvent("translationCopied")) : (f = "failure",
            nm(L.M(), 157))
    } catch (g) {
        f = "error",
            nm(L.M(), 158)
    } finally {
        jg(e),
            Mm(gI, "webapp", "copy", f, {
                sl: a,
                tl: b,
                hl: d,
                ql: c
            })
    }
}
;
uL.prototype.Xa = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
}
;
var vL = function(a, b, c) {
    Mm(gI, "webapp", a, b, c);
    Dh("gsa", a + ":" + b, "", 1)
}
    , sL = function(a) {
    wL(a);
    xL(a, "copybutton", a.Ca);
    xL(a, "tlid-share-translation-button", a.Ii);
    xL(a, "tlid-suggest-edit-button", a.Ki);
    if (a.V) {
        var b = D("result-search", a.j());
        H(b, "click", function() {
            var c = a.c;
            var d = O(c, 224);
            d = B(d, 52, "");
            N(c, d);
            vL("search" + DATA.CampaignTrackerId, "click", {
                sl: a.a.Qa(),
                tl: a.a.ma(),
                hl: DATA.DisplayLanguage,
                ql: a.a.a.length
            });
            c = a.$a();
            switch (DATA.ActionAfterSearch) {
                case 0:
                    (new jL(c,a.c)).show();
                    break;
                case 2:
                    kI(c);
                    break;
                case 3:
                    jI(c, 3);
                    break;
                default:
                    throw Error("Invalid value for DATA.ActionAfterSearch");
            }
        }, !1, a)
    }
}
    , wL = function(a) {
    var b = E("moremenu", a.j());
    a.G = new rx;
    a.G.ea(b);
    b = E("morebutton", a.j());
    a.w = new Jx(null,a.G);
    a.w.ea(b);
    Hr(a.w, DATA.Messages.MORE);
    Ox(a.w, new Yp(-8,8,0,8));
    H(b, "click", function() {
        var c = this.c;
        N(c, O(c, 265));
        vL("more", "click");
        this.w.Wa(!0)
    }, !1, a);
    vH(b);
    b = new mx(DATA.Messages.SUGGEST_AN_EDIT);
    b.La();
    H(b, "action", a.Ki, !1, a);
    T(b.j(), "tlid-suggest-edit-menu-item");
    a.G.kb(b, !0);
    b = new mx(DATA.Messages.SHARE_TRANSLATION);
    b.La();
    H(b, "action", a.Ii, !1, a);
    T(b.j(), "tlid-share-translation-menu-item");
    a.G.kb(b, !0)
}
    , xL = function(a, b, c) {
    b = D(b, a.j());
    if (b) {
        var d = new zs("");
        d.ea(b);
        H(d, "action", c, !1, a);
        vH(b)
    }
}
    , yL = function(a) {
    var b = new Rr("Clear text",new Lt("clear-button"));
    b.ea(D("gt-clear", a.j()));
    b.setVisible(!1);
    var c = $f("DIV");
    W(c, !1);
    hg(c, a.C.j());
    var d = new DE(DATA.Messages.SUBMIT_TRANSLATION_SUGGESTION,DATA.Messages.CANCEL_EDITS,DATA.Messages.EDIT_TRANSLATION_DISCLAIMER,a.ra,!0);
    d.ea(c);
    c = tL(a);
    b = new BE(a.C,D("gt-edit", a.j()),D("result", a.j()),a.j(),a.N.a,b);
    var e = void 0
        , f = void 0
        , g = !1
        , k = !0;
    jt() && (e = DATA.LowConfidenceThreshold,
        f = DATA.MaxRoundTripResults,
        g = !0,
        k = !1,
        qE = DATA.Messages.IMPROVE_TRANSLATION);
    a.h = new FE(void 0,g,void 0,e,f,d,b,void 0,k);
    a.h.ea(c);
    d = a.h;
    d.N.c = "webapp";
    d.xa = "webapp";
    DATA.EnablePhraseHighlighting && (d = a.h,
        c = a.xa,
        d.ba = c,
        d.b.C = c);
    H(a.h, "action", a.cl, !1, a)
}
    , zL = function(a) {
    var b = a.m ? a.m.Ab() : void 0;
    OE(a.h, b, a.a.Qa(), a.a.ma(), DATA.DisplayLanguage) || (b = Ed(a.$a()),
        Ud(tL(a), b))
};
uL.prototype.update = function(a, b, c, d, e, f) {
    var g = this;
    this.a.a = a;
    JF(this.a, b);
    this.a.v = c;
    "auto" === c.toLowerCase() && (this.a.h = b.src);
    this.a.m = d;
    this.m = e || null;
    this.g = so && f ? f : null;
    AL(this, d, this.m);
    f = D("result-shield-container", this.j());
    var k = kc(d);
    V(f, "result-rtl", k);
    tL(this).lang = d;
    this.C && bq(this.C.j(), "direction", k ? "rtl" : "ltr");
    this.h || yL(this);
    Zu(a) ? (f = new Tm(n.location.href.split("#")[0]),
        Wm(f, "translate"),
        kn(f, "sl", [c ? c : "auto"]),
        kn(f, "tl", [d]),
        kn(f, "u", [a]),
        tL(this).appendChild(Vp(DK, {
            xn: f,
            yn: a
        }))) : so && this.g ? (BL(this, tI(this.g.Rc())),
        G(tL(this), this.$a())) : (G(tL(this), this.$a()),
    this.m && this.h && zL(this));
    oK(this.N, b);
    (a = D("copybutton", this.j())) && W(a, !0);
    (a = D("starbutton", this.j())) && W(a, !0);
    (a = D("result-search", this.j())) && W(a, !0);
    this.V && (ym(this.c),
        vL("search" + DATA.CampaignTrackerId, "show"),
    this.X && !this.R && Di(function() {
        return CL(g)
    }, 0));
    this.O && null != e && (W(this.O, cv(e)),
    cv(e) && gI.log("community-promo", "show-webapp-served-community"))
}
;
var CL = function(a) {
    a.R = !0;
    Lm(Hm.M(), "/translate/uc?ua=dismiss&uav=stooltip");
    var b = F("DIV");
    G(b, DATA.Messages.SEARCH_THIS_TRANSLATION);
    bq(b, "white-space", "nowrap");
    var c = D("result-search-icon", a.j())
        , d = new zG;
    d.c.c = c;
    EG(d);
    DG(d, b);
    AG(d, 0, 0, -20);
    d.c.Uf = !0;
    BG(d, !0);
    d.h = !0;
    d.render();
    T(d.j(), "trans-bubble");
    d.setVisible(!0);
    Mm(gI, "webapp", "searchtooltip", "show");
    Dh("gsa", "searchtooltip:show", "", 1);
    H(D("jfk-bubble-closebtn", d.j()), "click", function() {
        Mm(gI, "webapp", "searchtooltip", "dismiss");
        Dh("gsa", "searchtooltip:dismiss", "", 1)
    }, !1, a);
    window.onresize = function() {
        d.isDisposed() || EG(d)
    }
};
uL.prototype.$a = function() {
    return so && this.g ? this.g.ub() : oL.prototype.$a.call(this)
}
;
var tL = function(a) {
    return E("tlid-translation", a.j())
};
uL.prototype.W = function() {
    return this.g ? this.g.Rc() : void 0
}
;
var BL = function(a, b) {
    G(a.eb, b)
}
    , DL = function(a, b, c) {
    if (!(xd() && re() && se(9)))
        var d = setTimeout(function() {
            c(!0);
            new nL(function(f) {
                    f && c(!1)
                }
            )
        }, 200)
            , e = H(document, b, function() {
            clearTimeout(d);
            qh(e)
        }, !1, a)
};
h = uL.prototype;
h.Ii = function() {
    var a = this;
    D("share-module", this.j()) && jg(D("share-module", this.j()));
    var b = Ce && (!Ge || Ge && 0 <= Lc(Xr, 8)), c = EL(), d;
    DATA.Messages.SHARE_MODULE_TITLE && c && (d = DATA.Messages.SHARE_APP_NOT_INSTALLED.replace("%1$s", "WhatsApp"));
    b = Wp(EK, {
        Bo: this.$a(),
        Ia: DATA.Messages,
        Ho: d,
        Kk: b,
        Nk: Ce,
        fm: Ge || He
    });
    ig(D("result-footer", this.j()), b, 0);
    Ct(this.na, this.a.Qa(), this.a.ma(), this.a.a, !1, "share");
    b = D("tlid-share-panel", this.j());
    T(b, "show-share-panel");
    mI(v(this.Ni, this));
    Rf(b, {
        "aria-hidden": !1
    });
    b.focus();
    H(b, "keydown", function(e) {
        27 === e.keyCode && (lI(),
            a.Ni())
    }, !1);
    Mm(gI, "webapp", "share", "share", {
        sl: this.a.Qa(),
        tl: this.a.ma(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    zm("share");
    b = D("share-panel-wrap", this.j());
    b = Nf(document, "a", "", b);
    y(b, function(e) {
        H(e, "click", v(this.kl, this, e), !1, this)
    }, this)
}
;
h.Ni = function() {
    var a = D("tlid-share-panel", this.j());
    U(a, "show-share-panel");
    Rf(a, {
        "aria-hidden": !0
    });
    EL() && (a = Lf("not_installed")) && xq(a) && W(a, !1);
    Ct(this.na, this.a.Qa(), this.a.ma(), this.a.a, !1)
}
;
h.kl = function(a) {
    a = a.className.split(" ")[0];
    Mm(gI, "webapp", "share", a, {
        sl: this.a.Qa(),
        tl: this.a.ma(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    zm(a);
    var b = EL();
    if (b) {
        var c = Lf("not_installed");
        c && xq(c) && "whatsapp" !== a ? W(c, !1) : "whatsapp" === a && DL(this, b, function(d) {
            d ? (d = c.style,
                d.position = "relative",
                A && !Re("8") ? (d.zoom = "1",
                    d.display = "inline") : d.display = "inline-block") : W(c, !1)
        })
    }
}
;
h.Ki = function() {
    Mm(gI, "webapp", "editclk", "1", {
        sl: this.a.Qa(),
        tl: this.a.ma()
    });
    var a = this.c;
    N(a, O(a, 26));
    SE(this.h)
}
;
h.cl = function(a) {
    var b = PE(a.target);
    a = a.target.Ce();
    b != this.$a() && W(D("trans-verified-button", this.j()), !1);
    KF(this.a, b);
    vp(this.Na, b, a, function(c) {
        nK(this.N, c)
    }
        .bind(this));
    this.K.update(b, a);
    this.dispatchEvent("resultTextEdited")
}
;
var EL = function() {
    var a = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    }, b;
    for (b in a)
        if (b in document) {
            var c = a[b];
            break
        }
    return c
}
    , AL = function(a, b, c) {
    a.K.update(a.$a(), b, c, FL(b), a.W())
}
    , FL = function(a) {
    for (var b = "", c = Ob(DATA.TargetLanguageCodeNameList), d = 0; d < c.length; d++)
        c[d].Code === a && (b = c[d].Name);
    return b
};
function rL() {
    var a = re() && se(9);
    return DATA.EnableSearchIcon && a
}
function qL(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.Gg ? jt() || Ze && Dk(43) || re() && se(10) : a.Gg
        , c = void 0 === a.Hg ? rL() : a.Hg;
    return Wp(CK, {
        Ia: DATA.Messages,
        Dm: "\u590d\u5236\u8bd1\u6587",
        Fm: "\u6536\u85cf\u8bd1\u6587",
        Gg: b,
        Hg: c,
        Mc: void 0 === a.Mc ? !DATA.InChina : a.Mc
    })
}
;var GL = function(a) {
    var b = this;
    this.o = a;
    this.a = !1;
    this.b = E("tlid-gender-promo-dismiss-button", this.o);
    H(this.b, "click", function() {
        b.a = !0;
        b.setVisible(!1);
        Lm(Hm.M(), "/translate/uc?ua=dismiss&uav=genderpromo");
        var c = L.M()
            , d = O(c, 341);
        N(c, d)
    })
};
GL.prototype.setVisible = function(a, b) {
    b = void 0 === b ? !1 : b;
    a && !this.a ? (V(this.o, "gender-promo-is-single-word", b),
        V(this.o, "gender-promo-visible", !0),
        a = L.M(),
        b = O(a, 340),
        N(a, b)) : V(this.o, "gender-promo-visible", !1)
}
;
var IL = function(a, b, c, d, e, f) {
    K.call(this);
    this.w = 0;
    this.o = a;
    this.b = b;
    this.N = c;
    this.O = d;
    this.R = e;
    this.K = E("tlid-result-error", this.b);
    this.h = E("tlid-translation-error", this.o);
    this.L = E("tlid-translation-error-message", this.o);
    this.C = D("tlid-result-view-error-button", this.o) || null;
    this.G = D("tlid-result-container-error-button", this.b) || null;
    this.g = E("gt-lc", this.o);
    this.m = new yw(DATA.Messages.COMMUNITY_CARD_LEARN_MORE,"",DATA.Messages.THANKS_FOR_CONTRIBUTING,DATA.Messages.CONTRIBUTION_BENEFIT,DATA.InChina ? "" : "/community?source=webapp-user-edit","webapp-user-edit",15);
    this.m.ea(E("cp-promo-wrapper", this.o));
    this.v = f ? new GL(f) : null;
    this.c = null;
    this.a = [];
    this.F = L.M();
    HL(this)
};
ka(IL, K);
IL.prototype.T = function() {
    JL(this);
    this.o = null;
    K.prototype.T.call(this)
}
;
var HL = function(a) {
    null != a.G && Ch(fb(a.G), function() {
        a.dispatchEvent("g")
    });
    null != a.C && Ch(fb(a.C), function() {
        a.dispatchEvent("g")
    })
}
    , KL = function(a) {
    if (!a.a[0])
        throw Error("getTranslationData called without calling hasTranslationData first");
    return a.a[0].a
};
IL.prototype.j = function() {
    return this.o
}
;
var LL = function(a) {
    return so && sI(a.c) ? uI(a.c).map(function(b) {
        return b.ub()
    }).join("\n") : a.a[0] ? KL(a).$a() : ""
};
IL.prototype.update = function(a, b, c, d, e) {
    var f = this;
    JL(this);
    this.c = e || null;
    lI();
    W(this.h, !1);
    ML(this, 2);
    U(this.b, "result-error");
    so && sI(this.c) && uo(J(this.c, 2), d) ? (NL(this, !0, !("tr" === J(this.c, 2) && "en" === d)),
        e = uI(this.c),
        Dm(this.F, e),
        this.a = e.map(function(g, k) {
            k = OL(f, {
                Mc: 0 === k
            });
            k.update(a, b, c, d, f.c, g);
            return k
        })) : (NL(this, !1),
        e = OL(this),
        e.update(a, b, c, d, this.c),
        this.a = [e]);
    PL(this, !1);
    W(this.g, !0)
}
;
var OL = function(a, b) {
    b = new uL(a.b,a.N,a.O,a.m,a.R,b);
    b.Ed(a);
    return b
}
    , ML = function(a, b) {
    a.w = b;
    switch (b) {
        case 1:
            U(a.b, "result-error");
            T(a.b, "translating");
            a = ba(a.a);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                b.L.oa(!1);
                var c = Dg(tL(b));
                0 != c.length && G(tL(b), c + "...")
            }
            break;
        case 2:
            U(a.b, "translating")
    }
};
IL.prototype.getState = function() {
    return this.w
}
;
var JL = function(a) {
    for (var b = ba(a.a), c = b.next(); !c.done; c = b.next())
        c = c.value,
            c.K.stop(),
            c.Ka();
    a.a = [];
    a.c = null
}
    , QL = function(a, b, c) {
    if (a.a[0] && LF(KL(a), b)) {
        for (var d = ba(a.a), e = d.next(); !e.done; e = d.next())
            e = e.value,
            null != e.b && (e = e.b,
                e.b = c,
                It(e));
        b = b.c;
        null != b && (KL(a).c = b)
    }
}
    , RL = function(a) {
    a = ba(a.a);
    for (var b = a.next(); !b.done; b = a.next())
        b.value.X = !0
}
    , PL = function(a, b) {
    V(a.b, "empty", b);
    V(a.o, "empty", b)
}
    , NL = function(a, b, c) {
    V(a.b, "gendered-translations", b);
    a.v && a.v.setVisible(b, c)
};
var TL = function(a, b, c) {
    var d = DATA.DisplayLanguage
        , e = DATA.Messages
        , f = this;
    this.a = a;
    this.C = E("tlid-survey-contents", this.a);
    this.L = E("tlid-dismiss-survey", this.a);
    this.v = E("tlid-before-survey", this.a);
    this.h = E("tlid-after-survey", this.a);
    this.m = E("tlid-more-feedback", this.a);
    this.O = SL(this, e);
    y(this.O, function(g) {
        return f.C.appendChild(g)
    });
    this.K = d;
    this.c = c;
    this.Fa = b;
    this.F = L.M();
    this.g = Hm.M();
    H(this.L, "click", v(this.b, this, 0), !1, this);
    H(this.m, "click", this.w, !1, this)
}
    , SL = function(a, b) {
    b = [[b.HAPPINESS_SURVEY_OPTION1, 0], [b.HAPPINESS_SURVEY_OPTION2, 1], [b.HAPPINESS_SURVEY_OPTION3, 2], [b.HAPPINESS_SURVEY_OPTION4, 3], [b.HAPPINESS_SURVEY_OPTION5, 4]];
    for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d]
            , f = e[1];
        e = Wp(GK, {
            message: e[0],
            cn: f
        });
        c.push(e);
        H(e, "click", v(a.G, a, f), !1, a)
    }
    return c
};
TL.prototype.G = function(a) {
    var b = this.F
        , c = O(b, 262);
    var d = new jl;
    d = B(d, 1, a + 1);
    mf(c, 72, d);
    N(b, c);
    UL(this, "select" + a);
    W(this.v, !1);
    W(this.h, !0);
    this.b(1E4)
}
;
TL.prototype.w = function() {
    this.b(0);
    this.Fa.call()
}
;
var UL = function(a, b) {
    var c = {}
        , d = a.c.a
        , e = a.c.c;
    "auto" === d && "" !== e && (d = e);
    c.sl = d;
    c.tl = a.c.b;
    c.hl = a.K;
    c.e = b;
    a.g.log("survey", c)
};
TL.prototype.show = function() {
    U(this.a, "hidden");
    var a = this.F;
    N(a, O(a, 261));
    UL(this, "show")
}
;
TL.prototype.b = function(a) {
    var b = this;
    Lm(this.g, "/translate/uc?ua=dismiss&uav=survey");
    Di(function() {
        (new oF(b.a,300)).play()
    }, null != a ? a : 0, this)
}
;
var WL = function(a) {
    K.call(this);
    this.F = L.M();
    this.o = a;
    this.h = E("tlid-toast-message", this.o);
    this.c = E("tlid-toast-action", this.o);
    a = Pf("A", "tlid-toast-action-link", this.c);
    this.b = fb(a);
    this.v = E("tlid-toast-action-text", this.c);
    this.g = new Tr(this.m,5E3,this);
    this.a = null;
    VL(this)
};
ka(WL, K);
var YL = function(a, b) {
    T(a.o, "with-message");
    U(a.o, "with-action");
    G(a.h, b);
    XL(a)
}
    , XL = function(a) {
    a.g.ob() || ((new pF(a.o,218)).play(),
        a = a.g,
    a.ob() || a.start(void 0))
};
WL.prototype.m = function() {
    (new oF(this.o,218)).play()
}
;
var VL = function(a) {
    H(a.b, "click", v(function() {
        null != a.a && a.dispatchEvent(a.a)
    }, a), !1, a)
};
var ZL = function() {};
ka(ZL, wr);
ZL.prototype.Zc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
}
;
var $L = function(a) {
    ZK.call(this);
    this.g = a;
    this.m = new Hm;
    this.m.c = "webapp";
    this.c = null
};
ka($L, ZK);
$L.prototype.b = function() {
    return "cmty-ctr"
}
;
$L.prototype.Xc = function(a) {
    if (!a || "DIV" != a.tagName)
        return !1;
    a = D("cmty-ctr", a);
    if (!a || "DIV" != a.tagName)
        return !1;
    var b = D("snck-msg", a);
    return b && "SPAN" == b.tagName ? (a = D("cmty-btn", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
}
;
$L.prototype.Z = function() {
    D("snck-msg", this.j()).textContent = MSG_VERIFIED_BY_COMMUNITY;
    var a = D("cmty-btn", this.j());
    a.textContent = MSG_JOIN;
    this.c = new Rr(null,new ZL);
    this.c.ea(a);
    H(this.c, "action", this.w, !1, this)
}
;
$L.prototype.w = function() {
    this.m.log("community-promo", "click-" + this.g);
    this.setVisible(!1);
    $d("/community?source=" + this.g)
}
;
Xi("wireless.events.ListenerCoalescer");
var aM = function(a) {
    El(this, a, 2)
};
w(aM, Dl);
var bM = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    }
};
aM.prototype.za = function() {
    return bM
}
;
aM.prototype.Ea = function() {
    return Fh(this, 1)
}
;
aM.prototype.getState = function() {
    return Gl(this, 1)
}
;
var cM = function(a) {
    El(this, a, 4)
};
w(cM, Dl);
var dM = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    },
    tool_id: {
        H: 2,
        J: !1
    },
    element_id: {
        H: 3,
        J: !1
    }
};
cM.prototype.za = function() {
    return dM
}
;
cM.prototype.Ea = function() {
    return Fh(this, 1)
}
;
cM.prototype.getState = function() {
    return Gl(this, 1)
}
;
var eM = function(a) {
    El(this, a, 19)
};
w(eM, Dl);
var fM = {
    vkeyboard: {
        H: 0,
        va: function(a) {
            return Ll(aM, a)
        },
        sa: function(a) {
            return Kl(new aM(a))
        },
        J: !0
    },
    source_romanization: {
        H: 1,
        va: function(a) {
            return Ll(aM, a)
        },
        sa: function(a) {
            return Kl(new aM(a))
        },
        J: !0
    },
    result_romanization: {
        H: 2,
        va: function(a) {
            return Ll(aM, a)
        },
        sa: function(a) {
            return Kl(new aM(a))
        },
        J: !0
    },
    input_t13n: {
        H: 3,
        va: function(a) {
            return Ll(aM, a)
        },
        sa: function(a) {
            return Kl(new aM(a))
        },
        J: !0
    },
    default_source_romanization: {
        H: 4,
        J: !1
    },
    default_result_romanization: {
        H: 5,
        J: !1
    },
    dismiss_chrome_promotion: {
        H: 6,
        J: !1
    },
    source_example: {
        H: 7,
        J: !1
    },
    result_example: {
        H: 8,
        J: !1
    },
    input_tool: {
        H: 9,
        va: function(a) {
            return Ll(cM, a)
        },
        sa: function(a) {
            return Kl(new cM(a))
        },
        J: !0
    },
    dismiss_phrasebook_promo: {
        H: 10,
        J: !1
    },
    dismiss_survey: {
        H: 11,
        J: !1
    },
    dismiss_gsa_pure_ad: {
        H: 12,
        J: !1
    },
    dismiss_search_tooltip: {
        H: 13,
        J: !1
    },
    dismiss_gsa_interstitial: {
        H: 14,
        J: !1
    },
    dismiss_gsa_prompt: {
        H: 15,
        J: !1
    },
    search_direct_gsa: {
        H: 16,
        J: !1
    },
    dismiss_android_translate: {
        H: 17,
        J: !1
    },
    dismiss_android_translate5: {
        H: 18,
        J: !1
    }
};
eM.prototype.za = function() {
    return fM
}
;
var gM = function(a) {
    El(this, a, 2)
};
w(gM, Dl);
var hM = {
    source_language: {
        H: 0,
        J: !1
    },
    target_language: {
        H: 1,
        J: !1
    }
};
gM.prototype.za = function() {
    return hM
}
;
gM.prototype.Ce = function() {
    return J(this, 1)
}
;
var iM = function(a) {
    El(this, a, 6)
};
w(iM, Dl);
var jM = {
    recent_sl: {
        H: 0,
        J: !0
    },
    recent_tl: {
        H: 1,
        J: !0
    },
    recent_lp: {
        H: 2,
        va: function(a) {
            return Ll(gM, a)
        },
        sa: function(a) {
            return Kl(new gM(a))
        },
        J: !0
    },
    sel_auto: {
        H: 3,
        J: !1
    },
    default_sl: {
        H: 4,
        J: !1
    },
    default_tl: {
        H: 5,
        J: !1
    }
};
iM.prototype.za = function() {
    return jM
}
;
var kM = function(a) {
    El(this, a, 3)
};
w(kM, Dl);
var lM = {
    recent_lang: {
        H: 0,
        va: function(a) {
            return Ll(iM, a)
        },
        sa: function(a) {
            return Kl(new iM(a))
        },
        J: !1
    },
    eotf: {
        H: 1,
        J: !1
    },
    stickiness_data: {
        H: 2,
        va: function(a) {
            return Ll(eM, a)
        },
        sa: function(a) {
            return Kl(new eM(a))
        },
        J: !1
    }
};
kM.prototype.za = function() {
    return lM
}
;
var mM = function(a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    var d = c || n
        , e = d.document
        , f = Ca(d);
    f && (a.nonce = f);
    if ("help" == a.flow) {
        var g = Ea("document.location.href", d);
        !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
        g = !0;
        if (b && JSON && JSON.stringify) {
            var k = JSON.stringify(b);
            (g = 1200 >= k.length) && (a.psdJson = k)
        }
        g || (b = {
            invalidPsd: !0
        })
    }
    b = [a, b, c];
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
    c = a.serverUri || "//www.google.com/tools/feedback";
    if (g = d.GOOGLE_FEEDBACK_START)
        g.apply(d, b);
    else {
        d = c + "/load.js?";
        for (var l in a)
            b = a[l],
            null != b && !Ma(b) && (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
        a = Hg(Kf(e), "SCRIPT");
        f && a.setAttribute("nonce", f);
        Xd(a, Gw(d));
        e.body.appendChild(a)
    }
};
za("userfeedback.api.startFeedback", mM);
var rM = XA("showhistory")
    , sM = XA("showinstant")
    , tM = XA("showsaved")
    , uM = XA("showfeedback")
    , vM = XA("showlanguagepicker")
    , wM = XA("urltranslation")
    , KM = function(a, b) {
    var c = xM
        , d = yM
        , e = zM
        , f = AM
        , g = this;
    this.K = wl();
    this.F = L.M();
    this.F.config(Kj() || "0", EXPERIMENT_IDS);
    this.K.c = c;
    this.K.g = d;
    this.w = Hm.M();
    this.Xa = new kG(this.Nj.bind(this),this.Qj.bind(this),this.Eo.bind(this),this.w);
    this.hb = a;
    this.b = b;
    this.b.c = this;
    this.Vj = e;
    this.Xj = f;
    this.hd = new rp("webapp");
    this.rb = new Vu;
    this.ia = new cw(v(this.Mo, this),!0);
    this.L = new IA(this.ia);
    a = BM() ? "\u5373\u523b\u4e0b\u8f7dGoogle\u7ffb\u8bd1 app\uff01" : .5 > Math.random() ? DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK : DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ;
    this.No = ez.M();
    CM(this);
    this.o = Wp(zK, {
        fk: a,
        pk: sM,
        wk: c,
        xk: d,
        Bk: DATA.InChina && "zh-CN" === DATA.DisplayLanguage,
        Ck: !DATA.InChina,
        Ek: DATA.DisplayHappinessSurvey,
        Fk: DATA.EnableHiringPromo,
        Ra: DATA.DisplayLanguage,
        Gk: !DATA.InChina,
        Ik: DATA.EnableCommunityInstant && DATA.SignedIn,
        Jk: DATA.CompareProdTrans,
        Lk: jt(),
        Mk: DATA.UrlTranslation,
        em: rM,
        Wq: DATA.InChina,
        Ia: DATA.Messages,
        Em: DATA.Messages.NO_THANKS.toUpperCase(),
        Gm: DATA.Messages.TRY_THE_APP.toUpperCase(),
        on: BM() || DM(),
        pn: !jt(),
        qn: EM(),
        rn: DATA.SignedIn,
        zn: tM,
        Ln: Ob(DATA.SourceLanguageCodeNameList),
        ao: Ob(DATA.TargetLanguageCodeNameList),
        Jo: wM
    });
    a = kc(DATA.DisplayLanguage);
    V(document.body, "rtl-display-lang", a);
    this.g = E("tlid-homepage", this.o);
    T(document.body, "displaying-homepage");
    this.O = new iK(E("tlid-history-page", this.o),this.Xa);
    this.N = DATA.EnableCommunityInstant && DATA.SignedIn ? new XK(E("tlid-instant-page", this.o)) : null;
    this.$b = this.c = null;
    this.nd = E("tlid-language-picker-page", this.o);
    this.ke = E("tlid-source-target", this.o);
    this.a = new PK(E("tlid-input", this.g),this.ke,c,d,this.ia,this.L);
    this.Oj = new eE(this.a.a.j());
    this.Rh = new bL;
    this.Rh.ea(D("ntfcn", this.a.j()));
    this.kd = new $L("webapp-served-community");
    this.kd.ea(D("cmty", this.a.j()));
    a = this.xb = null;
    DATA.EnableGenderedTranslationsPromo && (a = Wp(BK, {
        In: "en" === DATA.DisplayLanguage,
        Ia: DATA.Messages
    }));
    this.h = new IL(E("tlid-result-view", this.o),E("tlid-results-container", this.ke),this.Xa,this.b,this.Oj,a);
    this.eb = this.ac = null;
    if (this.Na = D("tlid-input-button-container", this.g))
        this.ac = E("tlid-input-button-text", this.Na),
            this.eb = E("tlid-input-button-docs", this.Na);
    (b = D("tlid-app-download-bar", this.g)) && new qH(b);
    this.ie = null;
    DATA.CompareProdTrans && (this.ie = E("tlid-prod-translation", this.g));
    this.X = null;
    DATA.CompareProdTrans && (this.X = new rH(E("tlid-brain-logos-container", this.g)));
    this.W = null;
    this.G = new mv(DATA.DisplayLanguage,this.hd,this,!0);
    this.Jd = new Ms(DATA.DisplayLanguage,[DATA.Messages.COMMON_TRANSLATION, DATA.Messages.UNCOMMON_TRANSLATION, DATA.Messages.RARE_TRANSLATION, MSG_N_MORE_TRANSLATIONS_LABEL],!0,!1,!0,DATA.Messages.TRANSLATION_FREQUENCY,DATA.Messages.TRANSLATION_FREQUENCY_HELP_TEXT);
    this.Id = new Cw(DATA.DisplayLanguage,!0,!0,!0);
    this.ld = new Hw(DATA.DisplayLanguage,!0,!0);
    this.ln = new qF(DATA.DisplayLanguage,!0,!0);
    this.Oo = new $G(DATA.DisplayLanguage,!0,!0);
    this.Ob = [];
    b = {
        Nc: this.a.Nc,
        Bj: this.a.a,
        $a: function() {
            return LL(g.h)
        }
    };
    e = D("outer-wrap", this.nd);
    e.appendChild(this.a.b.j());
    e.appendChild(this.a.g.j());
    this.yb = D("tlid-language-list-toolbar", this.nd);
    this.Am = D("tlid-language-list-back-button", this.yb);
    this.Oh = new zs;
    this.Oh.ea(this.Am);
    this.Ph = D("tlid-language-list-label", this.yb);
    this.ra = new zs;
    this.ra.ea(D("tlid-language-list-search-button", this.yb));
    this.ra.wd(DATA.Messages.SEARCH_LANGUAGES);
    JA(this.a.b, function() {
        g.R({})
    }, this);
    JA(this.a.g, function() {
        g.R({})
    }, this);
    e = this.a.b;
    f = this.a.g;
    Xb(b, {
        oj: e,
        yj: f,
        kj: this.ra,
        nj: e.G,
        xj: f.G
    });
    LA(this.L, b);
    this.ia.g(c);
    this.ia.h(d);
    c = D("ovfl", this.a.j());
    this.Xh = new dL(this.a,this.ia,DATA.DisplayLanguage,DATA.MaxSingleQueryLength);
    this.Xh.ea(c);
    this.Ca = null;
    if (c = D("tlid-character-count", this.g))
        this.Ca = new Hv(DATA.MaxSingleQueryLength,"normal","overflow"),
            this.Ca.ea(c),
            this.Ca.init();
    this.Wj = new vw(this.a.a,this.ia,this.Xh,null != this.Ca ? this.Ca : void 0);
    this.Wj.init();
    c = D("tlid-spelling-correction", this.a.j());
    this.V = new OG(this,DATA.Messages.LANGUAGE_CORRECTION,DATA.Messages.DID_YOU_MEAN,DATA.Messages.SPELLING_AUTO_CORRECTION,DATA.Messages.SPELLING_REVERT_CORRECTION,v(this.a.b.V, this.a.b));
    this.V.ea(c);
    this.G.ea(D("gt-lc", this.h.j()));
    a && this.G.b.j().appendChild(a);
    this.G.b.kb(this.Jd, !0);
    this.G.c.kb(this.Id, !0);
    this.G.c.kb(this.ld, !0);
    this.G.c.kb(this.Oo, !0);
    this.G.c.kb(this.ln, !0);
    this.hn = new TD(this.a.a,!DATA.DisableOtf,v(this.na, this, !0),v(this.hd.m, this.hd));
    this.An = new Kq(this);
    this.An.listen(Kf().a, "scroll", this.Pj);
    this.Xe = Vf(document).a;
    this.je = {};
    this.C || (this.C = new lB(this,"Controller"),
        nB(this.C, rM, this.gk),
        nB(this.C, tM, this.Qk),
        nB(this.C, sM, this.Hk),
        nB(this.C, uM, this.xa),
        nB(this.C, vM, this.R),
        nB(this.C, wM, this.Io),
        mB.a.push(this.C));
    this.pm = re() && se(9);
    BM() ? FM(this, "http://www.gstatic.cn/translate/dl/android.html", 11) : DATA.InChina || (EM() ? GM(this, "gsa-promo", "gsaAd", "gsaad", 12, Ta(Dh, "gsa", "gsaAd:show", "", 1), Ta(Dh, "gsa", "gsaAd:dismiss", "", 1), v(this.$j, this)) : DM() ? FM(this, "https://play.google.com/store/apps/details?id=com.google.android.apps.translate&referrer=utm_source%3DMobileWebBanner%26utm_content%3DPureAd%26utm_campaign%3DTranslateAndroid&pcampaignid=Translate_022016", 9) : DATA.EnableHiringPromo && iL(new hL(E("tlid-magnet-promo", this.o)), !0));
    c = D("tlid-survey", this.o);
    this.Wh = null;
    c && (this.Wh = new TL(c,v(this.xa, this),this.ia),
        Di(function() {
            this.Wh.show()
        }, 6E4, this));
    this.m = null;
    c = E("tlid-send-feedback-link", this.o);
    H(c, "click", this.xa, !1, this);
    this.jd = this.le = 0;
    this.md = this.Ze = this.v = "";
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && (KB(this.a.b, DATA.RecentLanguages.recent_sl),
        KB(this.a.g, DATA.RecentLanguages.recent_tl));
    this.ba = "";
    this.Pa = new WL(E("tlid-toast", this.o));
    HM(this);
    IM(this);
    JM(this)
}
    , IM = function(a) {
    a.ac && Ch(a.ac, function() {
        var c = At(a.b);
        ct(c, a.ia.a, a.ia.b);
        a.b.a(c.toString(), !0);
        LM(a)
    });
    a.eb && Ch(a.eb, function() {
        var c = At(a.b)
            , d = a.ia.a
            , e = a.ia.b;
        bt(c);
        c.a.set("op", "docs");
        null != d && c.a.set("sl", d);
        null != e && c.a.set("tl", e);
        a.b.a(c.toString(), !0);
        MM(a)
    });
    a.Na && H(a.Na, "keydown", function(c) {
        Bh(c, [a.ac, a.eb])
    }, !1);
    H(a.yb, "touchmove", NM);
    H(a.Oh, "action", function() {
        a.R({})
    }, !1, a);
    H(a.ra, "action", a.Mm, !1, a);
    H(a.ra.j(), "keydown", a.dk, !1, a);
    H(a.a, "translateButtonClicked", a.Tj, !1, a);
    H(a.O, "history_entry_selected", function(c) {
        xt(a, c.ib, c.jb, c.text)
    }, !1);
    H(a.O, "close_requested", a.Fa, !1, a);
    H(a.O, "history_cleared", a.Xj, !1, a);
    a.N && (H(a.N, "close_requested", a.Fa, !1, a),
        H(a.N, "sign_in_requested", a.Uj, !1, a));
    H(a.a.a, "clear", a.Sh, !1, a);
    H(document, "click", a.bk, !0, a);
    var b = Lf("trans-onebar-feedback");
    b && (H(b, "click", a.xa, !1, a),
        H(b, "keypress", function(c) {
            13 == c.keyCode && this.xa()
        }, !1, a));
    H(a.ia, "srcSuggestionUpdated", a.Vn, !1, a);
    H(a.ia, "languageSelected", a.ak, !1, a);
    H(a.ia, "tgtLanguageUpdated", a.bm, !1, a);
    H(a.b, "c", function(c) {
        OM(a, c.Hh)
    }, !1);
    a.L.h && (H(a.L.h, "clickSelected", a.Xk, !1, a),
        H(a.L.h, "click", a.aa, !1, a));
    a.L.m && (H(a.L.m, "clickSelected", a.gm, !1, a),
        H(a.L.m, "click", a.aa, !1, a),
        H(a.a.Nc, "action", a.aa, !1, a));
    Ch(E("tlid-open-source-language-list", a.g), a.$e.bind(a));
    Ch(E("tlid-open-target-language-list", a.g), a.Nh.bind(a));
    Ch(E("tlid-open-small-source-language-list", a.g), a.$e.bind(a));
    Ch(E("tlid-open-small-target-language-list", a.g), a.Nh.bind(a));
    DATA.CompareProdTrans && H(a.a, "inputCleared", function() {
        G(this.ie, "")
    }, !1, a);
    H(a.h, "verifiedTranslationButtonClicked", function() {
        a.kd.setVisible(!0, 8E3);
        a.w.log("community-promo", "open-webapp-served-community")
    });
    H(a.h, "g", function() {
        a.na(!1)
    }, !1);
    H(a.h, "resultTextEdited", function() {
        PM(a)
    }, !1);
    H(a.h, "translationCopied", function() {
        YL(this.Pa, "\u5df2\u590d\u5236\u7ffb\u8bd1")
    }, !1, a);
    H(a.a, "userInteractionWithDisabledVoiceInput", function() {
        if ("auto" === this.ia.a)
            YL(this.Pa, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
        else {
            var c = qI(this.ia.a);
            YL(this.Pa, this.rb.a(DATA.Messages.VOICE_INPUT_UNAVAILABLE, c))
        }
    }, !1, a);
    H(a.a, "userInteractionWithDisabledVoiceOutput", function() {
        var c = qI(this.ia.a);
        YL(this.Pa, this.rb.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
    }, !1, a);
    H(a.h, "userInteractionWithDisabledVoiceOutput", function() {
        var c = rI(this.ia.b);
        YL(this.Pa, this.rb.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
    }, !1, a);
    H(a.Pa, "unsupported_filetype_learn_more_clicked", function() {
        var c = a.F
            , d = O(c, 309);
        var e = new al;
        e = B(e, 1, 1);
        mf(d, 79, e);
        N(c, d);
        Mm(a.w, "webapp", "lm", "dtft", {});
        $d("https://support.google.com/translate/answer/2534559?hl=" + DATA.DisplayLanguage)
    }, !1);
    b = new tG([a.a.a.j()],[E("tlid-results-container", a.ke)]);
    H(b, "select", a.G.Il, !1, a.G);
    H(window, "beforeunload", function(c) {
        QM(a, c.type);
        a.m && RM(a, a.m.a, a.m.w, a.m.Qa(), a.m.ma())
    }, !1);
    H(a.a, "inputPasted", function() {
        SM(a, $v(a.a.a)) ? a.le++ : a.jd++
    }, !1);
    H(a.G, "translationRefreshed", function() {
        window.scrollTo(0, 0)
    }, !1, a);
    new EA(a.L)
}
    , LM = function(a) {
    var b = a.F;
    N(b, O(b, 295));
    Mm(a.w, "webapp", "ib", "t", {});
    T(a.g, "translate-text");
    U(a.g, "translate-docs")
}
    , MM = function(a) {
    var b = a.F;
    N(b, O(b, 296));
    Mm(a.w, "webapp", "ib", "d", {});
    null != a.xb || TM(a);
    U(a.g, "translate-text");
    T(a.g, "translate-docs")
};
KM.prototype.dk = function(a) {
    var b = this.a.b.isVisible() ? this.a.b : this.a.g.isVisible() ? this.a.g : void 0;
    if (b)
        switch (a.keyCode) {
            case 27:
                b.close();
                a.preventDefault();
                break;
            case 40:
                b.a[0].j().focus();
                a.preventDefault();
                break;
            default:
                b.X && b.X(a)
        }
}
;
KM.prototype.bk = function(a) {
    var b = fb(a.target);
    b.classList.contains("tlid-trans-verified-button") || pg(this.kd.j(), b) || this.kd.setVisible(!1);
    pg(this.nd, b) || pg(E("tlid-language-bar"), b) || this.aa(a)
}
;
var OM = function(a, b) {
    var c = new Xs(b);
    "history" === c.b ? UM() || VM(a) : "instant" === c.b ? WM() || XM(a) : "saved" === c.b ? YM() || ZM(a) : (x("home" === c.b, "Invalid view token in the URL fragment"),
    Pp(document.body, "displaying-homepage") || a.Fa());
    if (ft(c, "star"))
        "history" === c.b ? (a.ba = "",
            jK(a.O, c.Qa(), c.ma(), et(c, "text"))) : (x("home" === c.b, "Invalid view token in the URL fragment for STAR operation"),
            a.ia.g(c.Qa()),
            a.ia.h(c.ma()),
            a.a.a.g(et(c, "text")),
            a.na(!1),
            sD(a.a.O),
            a.Vh = !0);
    else if (ft(c, "docs")) {
        Pp(a.g, "translate-docs") || MM(a);
        c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
            return e.Code
        });
        var d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
            return e.Code
        });
        zt(a.b, b, c, d)
    } else
        ft(c, "translate") && (Pp(a.g, "translate-text") || LM(a),
            c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
                return e.Code
            }),
            d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
                return e.Code
            }),
            yt(a.b, b, c, d),
        $v(a.a.a) && TK(a.a))
}
    , BM = function() {
    return Fe && DATA.InChina && "zh-CN" === DATA.DisplayLanguage && DATA.EnableChinaAndroidPromo
};
KM.prototype.$e = function(a) {
    this.R(a, "sl")
}
;
KM.prototype.Nh = function(a) {
    this.R(a, "tl")
}
;
KM.prototype.Xk = function(a) {
    this.R(a, "sl")
}
;
KM.prototype.gm = function(a) {
    this.R(a, "tl")
}
;
var EM = function() {
    return !DATA.InChina && DATA.EnableGSAPureAd && re() && se(9) && xd()
}
    , DM = function() {
    return !DATA.InChina && Fe && "en" == DATA.DisplayLanguage && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ
};
KM.prototype.Mo = function(a) {
    a: {
        var b = this.a.O.a;
        if ("ltr" == a)
            var c = "left";
        else if ("rtl" == a)
            c = "right";
        else
            break a;
        bq(b.j(), "direction", a);
        bq(b.j(), "text-align", c)
    }
}
;
var NM = function(a) {
    a.preventDefault()
};
KM.prototype.ak = function() {
    var a = this.ia.a
        , b = this.ia.b;
    this.K.c = a;
    this.K.g = b;
    var c = this.hb;
    mH(c, c.a, a);
    c = this.hb;
    mH(c, c.b, b);
    this.na(!1, "ls");
    jt() && LK(this.a);
    this.X && uH(this.X, a, b)
}
;
KM.prototype.bm = function() {
    for (var a = this.ia.b, b = ba(this.h.a), c = b.next(); !c.done; c = b.next())
        AL(c.value, a)
}
;
KM.prototype.j = function() {
    return this.o
}
;
var YM = function() {
    return Pp(document.body, "displaying-saved-page")
}
    , WM = function() {
    return Pp(document.body, "displaying-instant-page")
}
    , UM = function() {
    return Pp(document.body, "displaying-history-page")
};
KM.prototype.Fa = function() {
    lI();
    var a = D("tlid-share-panel", this.o);
    a && U(a, "show-share-panel");
    U(document.body, "with-lang-list");
    U(document.body, "with-sl-list");
    U(document.body, "with-tl-list");
    if (!Pp(document.body, "displaying-homepage")) {
        a = YM();
        T(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        U(document.body, "displaying-instant-page");
        var b = At(this.b);
        Ys(b, "home");
        this.b.a(b.toString(), !0);
        b = this.F;
        N(b, O(b, 216));
        iI("show", "homepage", "", "", "");
        a && (a = this.F,
            N(a, O(a, 41)))
    }
}
;
KM.prototype.gk = function() {
    if (UM()) {
        var a = this.O;
        a.a && HI(a.a);
        this.Fa()
    } else
        a = At(this.b),
            this.ba = a.toString(),
            Ys(a, "history"),
            this.b.a(a.toString(), !0),
            VM(this)
}
;
var VM = function(a) {
    U(document.body, "displaying-homepage");
    T(document.body, "displaying-history-page");
    U(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    kK(a.O);
    iI("show", "history", "", "", "");
    a = a.F;
    N(a, O(a, 60))
};
KM.prototype.Hk = function() {
    if (this.N)
        if (WM())
            this.Fa();
        else {
            var a = At(this.b);
            this.ba = a.toString();
            Ys(a, "instant");
            this.b.a(a.toString(), !0);
            XM(this)
        }
}
;
var XM = function(a) {
    if (a.N && null != window.gapi && null != window.gapi.iframes) {
        U(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        T(document.body, "displaying-instant-page");
        var b = a.N
            , c = a.ia.b;
        b.b = a.ia.a;
        b.c = c;
        b = a.N;
        if (DATA.EnableCommunityInstantWithIFrame) {
            if (null != window.gapi && null != window.gapi.iframes && null == b.g && null != b.o && (c = D("tlid-community-instant-container", b.o),
            null != c)) {
                var d = window.gapi.iframes
                    , e = new Tm;
                e.b = DATA.CommunityInstantHostname;
                null != b.b && "auto" != b.b && null != b.c ? Wm(e, "/instant/task") : Wm(e, "/instant/select_pair");
                e.a.set("source", b.b);
                e.a.set("target", b.c);
                e.a.set("hl", DATA.DisplayLanguage);
                e.a.set("origin", window.location.protocol + "//" + window.location.hostname);
                b.g = d.getContext().openChild({
                    url: e.toString(),
                    where: c
                });
                b.g.register("closeInstant", b.h.bind(b), b.v)
            }
        } else
            null == b.a && null != b.o && (c = D("tlid-community-instant-container", b.o),
            null != c && (d = Wp(LI, {
                isSignedIn: DATA.SignedIn,
                Ia: DATA.Messages
            }),
                c.appendChild(d),
                b.a = new QI(d),
                H(b.a, "close_requested", b.h, !1, b),
                H(b.a, "sign_in_requested", b.m, !1, b)));
        b = a.N;
        null != b.a && TI(b.a, b.b, b.c);
        iI("show", "instant", "", "", "");
        a = a.F;
        N(a, O(a, 361))
    }
};
KM.prototype.R = function(a, b) {
    var c = this;
    if (Pp(document.body, "with-lang-list"))
        this.aa(a);
    else {
        if (null == b)
            throw Error("No language picker class to show provided");
        YM() && this.c && (VJ(this.c),
            this.Fa());
        "sl" === b ? (G(this.Ph, DATA.Messages.TRANSLATE_FROM),
            this.a.b.setVisible(!0),
            this.a.g.setVisible(!1),
            IB(this.a.b),
            T(document.body, "with-sl-list")) : "tl" === b && (G(this.Ph, DATA.Messages.TRANSLATE_TO),
            this.a.b.setVisible(!1),
            this.a.g.setVisible(!0),
            IB(this.a.g),
            T(document.body, "with-tl-list"));
        T(document.body, "with-lang-list");
        Di(function() {
            jt() && ("sl" === b ? NB(c.a.b) : "tl" === b && NB(c.a.g))
        }, 0);
        n.scrollTo(0, 0);
        a = D("language-list-unfiltered-langs-" + b + "_list");
        null != a && (a.scrollTop = 0)
    }
}
;
KM.prototype.aa = function(a) {
    "click" == a.type && a.defaultPrevented || !Pp(document.body, "with-lang-list") || (this.a.b.setVisible(!1),
        this.a.g.setVisible(!1),
        this.Fa(),
    jt() && LK(this.a))
}
;
KM.prototype.Mm = function() {
    this.a.b.isVisible() && MB(this.a.b);
    this.a.g.isVisible() && MB(this.a.g)
}
;
KM.prototype.Qk = function() {
    if (YM() && null != this.c)
        VJ(this.c),
            this.Fa();
    else {
        var a = At(this.b);
        this.ba = a.toString();
        Ys(a, "saved");
        this.b.a(a.toString(), !0);
        ZM(this)
    }
}
;
var ZM = function(a) {
    DATA.InChina || oI("lnk", a.w, a.Go.bind(a), a.b.a.bind(a.b, a.ba, !0), At(a.b).toString())
};
KM.prototype.Go = function() {
    iI("show", "starred", "", "", "");
    var a = this.F;
    N(a, O(a, 40));
    U(document.body, "displaying-homepage");
    U(document.body, "displaying-history-page");
    T(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    this.c || $M(this)
}
;
var $M = function(a) {
    var b = E("tlid-phrasebook-outer-wrap", a.o)
        , c = Wp(ZJ, {
        Ra: DATA.DisplayLanguage,
        Ia: DATA.Messages
    });
    b.appendChild(c);
    a.c = new QJ(c,a.Xa);
    H(a.c, "close_requested", function() {
        VJ(a.c);
        a.Fa()
    }, !1);
    H(a.c, "phrasebook_entry_selected", function(d) {
        Pp(a.g, "translate-text") || LM(a);
        xt(a, d.ib, d.jb, d.text)
    }, !1);
    H(a.c, "interaction_with_disabled_voice_output", function(d) {
        YL(a.Pa, a.rb.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, d.Za))
    }, !1, a);
    a.$b && hJ(a.c.a, a.$b)
};
KM.prototype.xa = function() {
    var a = {
        productId: "101820",
        locale: DATA.DisplayLanguage,
        version: DATA.VersionLabel
    }
        , b = {};
    0 < EXPERIMENT_IDS.length && (b.EXP = EXPERIMENT_IDS.join(","));
    b.SOURCE_LANGUAGE = this.ia.a;
    b.TARGET_LANGUAGE = this.ia.b;
    window.JS_ERR_COUNT && (b.JS_ERR_COUNT = window.JS_ERR_COUNT,
        b.JS_ERR_ARR = window.JS_ERR_ARR);
    this.g.scrollIntoView(!0);
    mM(a, b);
    iI("show", "feedback", "", "", "")
}
;
var TM = function(a) {
    var b = Wp(AK, {
        Ra: DATA.DisplayLanguage,
        Sk: DATA.FileTranslationPath,
        Ia: DATA.Messages
    });
    E("tlid-select-file-page-container", a.g).appendChild(b);
    a.xb = new cK(b,a.ia);
    H(a.xb, "file_too_big", function(c) {
        YL(a.Pa, a.rb.a(DATA.Messages.FILE_TOO_BIG_PARAMETERIZED, (c.Rk / 1024 / 1024).toFixed()))
    }, !1);
    H(a.xb, "unsupported_filetype", function() {
        var c = a.Pa
            , d = DATA.Messages.CANT_READ_FILE
            , e = DATA.Messages.LEARN_MORE;
        T(c.o, "with-action");
        U(c.o, "with-message");
        G(c.h, d);
        G(c.v, e);
        c.b.removeAttribute("href");
        c.a = "unsupported_filetype_learn_more_clicked";
        XL(c)
    }, !1)
};
KM.prototype.Io = function() {
    var a = this.a;
    if (DATA.UrlTranslation) {
        var b = D("source-wrap", a.o);
        W(b, !1);
        W(a.X.j(), !0)
    }
}
;
var aN = function(a) {
    var b = [];
    if (so && sI(a))
        b = [{
            trans: uI(a).map(function(g) {
                return g.ub()
            }).join("\n"),
            orig: J(a.cb(0), 1),
            translit: "",
            src_translit: J(a.cb(0), 3)
        }];
    else
        for (var c = 0; c < a.ic(); c++) {
            var d = {
                trans: a.cb(c).Tc(),
                orig: J(a.cb(c), 1),
                translit: J(a.cb(c), 2),
                src_translit: J(a.cb(c), 3)
            };
            b[c] = d
        }
    d = [];
    for (c = 0; c < I(a, 1); c++) {
        for (var e = [], f = 0; f < I(Eh(a, c), 1); f++)
            e[f] = So(Eh(a, c), f);
        e = {
            pos: J(Eh(a, c), 0),
            terms: e
        };
        d[c] = e
    }
    return {
        sentences: b,
        src: J(a, 2),
        dict: d
    }
};
KM.prototype.Rj = function(a, b, c, d, e) {
    this.V.setVisible(!1);
    this.je = {};
    var f = aN(e);
    if (this.m) {
        var g = this.m.w
            , k = this.m.Qa()
            , l = this.m.ma()
            , m = this.m.a;
        k === b && l === c && vc(d, m) || RM(this, m, g, k, l);
        k === b && l === c && vc(m, d) || (this.m = new HF(d,f,b,c))
    } else
        this.m = new HF(d,f,b,c);
    a || (RM(this, d, f, b, c),
        this.m = new HF(d,f,b,c));
    Fh(e, 7) && (a = J(op(e), 1),
        g = Gl(op(e), 5),
        this.V.show({
            rk: J(op(e), 0),
            ve: a,
            ji: g,
            ej: $v(this.a.a),
            Ag: Array.from(Hl(op(e), 2).slice().values()),
            qj: this.ia.a,
            result: e
        }),
        this.V.C = !0);
    "auto" == this.ia.a && hw(this.ia, J(e, 2));
    a = this.ia;
    jw(a.a, a.v);
    jw(a.b, a.m);
    new Zo(e.Va[8]);
    a = [];
    for (g = 0; g < I(new Zo(e.Va[8]), 0); ++g)
        k = new Zo(e.Va[8]),
            k = Hh(k, 0, g),
            a.push(k);
    dw(this.ia, a);
    a = this.ia;
    g = "auto" == a.a ? "" : a.a;
    k = pw(a.v, g);
    k.push(a.a);
    a.W = yb(k);
    k = k.concat(pw(a.L.a, g));
    a.ba.update(k);
    a = this.ia;
    g = pw(a.m, a.b);
    g.push(a.b);
    a.X.update(g);
    T(document.body, "show-result");
    this.a.update(d, e, this.V.b);
    av(e);
    this.h.update(d, f, b, c, e);
    A && LK(this.a);
    b = KL(this.h);
    this.Vh ? (this.Vh = !1,
        oG(this.Xa, b, 0)) : PM(this);
    !this.W && D("tlid-debug-information", document.body) && (this.W = new $J);
    if (this.W && (b = this.W,
        aK(b),
    b.w && b.a && b.c && b.b && b.v && b.g && b.m && b.h && b.L && b.G && b.C)) {
        f = [];
        a = Lf("backend-models-used");
        g = Lf("backend-models-checksum");
        k = Lf("backend-models-launch-doc");
        if (e.cb(0))
            for (l = 0; l < e.ic(); l++) {
                m = e.cb(l);
                Fh(m, 0) && m.Tc() && f.push(m.sf());
                if (0 < I(m, 5)) {
                    for (var q = 0; q < I(m, 5); q++)
                        bK(a, "https://cnsviewer.corp.google.com" + Hh(m, 5, q), Hh(m, 5, q));
                    a.appendChild($f("br"))
                }
                if (0 < I(m, 8)) {
                    for (q = 0; q < I(m, 8); q++) {
                        var r = new Wl((new Yl(Il(m, 8, q))).Va[0]);
                        bK(g, "http://go/bleu-eval-dashboard?fb=Checksum:in:" + J(r, 0), J(r, 0));
                        "" != J(r, 1) && "TODO" != J(r, 1) ? bK(k, "https://g3doc.corp.google.com/nlp/nmt/models/g3doc/" + J(r, 1), J(r, 1)) : bK(k, "http://go/no-launch-doc-doc", "Temp_Doc")
                    }
                    g.appendChild($f("br"));
                    k.appendChild($f("br"))
                }
            }
        for (r = q = m = l = k = g = a = 0; r < f.length; r++)
            0 === f[r] ? a++ : 3 === f[r] ? g++ : 4 === f[r] ? k++ : 1 === f[r] ? l++ : 2 === f[r] ? m++ : 10 === f[r] && q++;
        f = a + g;
        r = l + m;
        G(b.v, a.toString());
        G(b.g, g.toString());
        G(b.m, k.toString());
        G(b.b, f.toString());
        G(b.a, l.toString());
        G(b.c, m.toString());
        G(b.w, r.toString());
        G(b.h, q.toString())
    }
    b = this.G;
    f = J(e, 2);
    b.g.reset();
    b.g.push(d, f, c, e);
    this.Xe = Vf(document).a;
    d = ba(this.Ob);
    for (b = d.next(); !b.done; b = d.next())
        b.value.Ka();
    this.Ob = [];
    this.Ob.push(new hA(this.a.a.j(),"orig",13,"webapp"));
    bN(this, this.Jd);
    bN(this, this.Id);
    bN(this, this.ld);
    (d = D("show-panel", this.o)) && U(d, "show-panel");
    NA(this.L, !1);
    this.X && uH(this.X, J(e, 2), c)
}
;
var PM = function(a) {
    var b = KL(a.h);
    rG(a.Xa, b, function(c) {
        QL(a.h, b, c);
        null != a.c ? c ? hJ(a.c.a, b) : uJ(a.c.a) : c && (a.$b = b)
    })
}
    , RM = function(a, b, c, d, e) {
    var f = a.O;
    if (null == f.a) {
        var g = new HF(b,c,d,e);
        f.c.push(g)
    } else
        f.a && (g = new HF(b,c,d,e),
            f = f.a,
            BI(f, g),
            V(f.o, "empty", !1),
            CI(f, f.a.length));
    a.Vj(b, c, d, e)
};
KM.prototype.om = function(a) {
    var b = this.h;
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    T(b.b, "empty");
    T(b.b, "result-error");
    U(b.b, "translating");
    G(b.K, a);
    G(b.L, a);
    W(b.h, !0);
    W(b.g, !1)
}
;
var xt = function(a, b, c, d, e) {
    null != e && yl(a.K, e);
    a.a.a.b(d);
    if (b) {
        var f = void 0;
        "tws_lsugg" == e && (f = 3);
        a.ia.g(b, f);
        a.K.c = b;
        f = a.hb;
        mH(f, f.a, b)
    }
    c && ("auto" !== c && a.ia.h(c),
        c = a.ia.b,
        a.K.g = c,
        b = a.hb,
        mH(b, b.b, c));
    c = a.a.O;
    b = a.ia.a;
    f = a.ia.b;
    c.h = BD(d);
    c.b = b;
    c.c = f;
    sD(c);
    e && Pm(a.w, "source", e);
    a.na(!1, e)
};
KM.prototype.Nj = function(a) {
    null != this.c && PJ(this.c, a);
    a = this.O;
    null == a.a ? a.g = !0 : a.a && JI(a.a)
}
;
KM.prototype.Qj = function(a, b) {
    QL(this.h, a, b);
    var c = this.O;
    if (null != c.a && c.a) {
        c = c.a;
        for (var d = 0; d < c.a.length; d++) {
            var e = c.a[d];
            LF(e.a, a) && e.qh(b)
        }
    }
    if (null != this.c)
        if (b)
            b = this.c.a,
                c = OF(a),
                b.a.push(c),
            tJ(b, c) && b.h.push(c),
                jJ(b, b.N),
                fJ(b, IF(c), c.ma()),
            1 === b.a.length && b.dispatchEvent("list_no_longer_empty"),
            this.h.a[0] && LF(KL(this.h), a) && hJ(this.c.a, a);
        else {
            b = this.c.a;
            d = !1;
            for (c = b.a.length - 1; 0 <= c; c--)
                if (e = b.a[c],
                    LF(e, a)) {
                    d = rJ(e);
                    e = b.O[d];
                    b.b === e && (b.b = null);
                    rh(e);
                    delete b.O[d];
                    b.a.splice(c, 1);
                    d = !0;
                    e = b;
                    var f = IF(a)
                        , g = a.ma()
                        , k = f + "|" + g
                        , l = e.m.get(k);
                    l && (1 === l ? (e.m.delete(k),
                        e.dispatchEvent({
                            type: "language_pair_removed",
                            ib: f,
                            jb: g
                        })) : e.m.set(k, l - 1))
                }
            d && (b.L || (b.w && null != b.c && null != b.g ? lJ(b, b.c, b.g) : b.G ? kJ(b, b.C) : (a = b.v,
            0 < b.v && b.v + 1 > oJ(b) && (a = b.v - 1),
                gJ(b, a))),
            0 === nJ(b).length && b.dispatchEvent("last_displayed_entry_deleted"),
            0 === b.a.length && (b.dispatchEvent("list_empty"),
            b.L && (b.b = null,
                gJ(b, 0),
                b.dispatchEvent("delete_all_complete"),
                b.L = !1)))
        }
    else
        b && (this.$b = a)
}
;
KM.prototype.Tj = function() {
    var a = this;
    Di(function() {
        return cN(a)
    }, 0)
}
;
var cN = function(a) {
    var b = $v(a.a.a)
        , c = a.ia.a
        , d = a.ia.b;
    if (Zu(b)) {
        var e = new Tm(n.location.href.split("#")[0]);
        Wm(e, "translate");
        kn(e, "sl", [c ? c : "auto"]);
        kn(e, "tl", [d]);
        kn(e, "u", [b]);
        $d(e.toString())
    } else
        Pm(a.w, "source", "btn"),
            yl(a.K, "btn"),
            a.na(!1),
            Di(function() {
                sD(a.a.O)
            }, 0),
            n.scrollTo(0, 0),
        DATA.EnableSearchTooltip && a.pm && RL(a.h)
}
    , JM = function(a) {
    var b = a.ia.a
        , c = a.ia.b;
    U(document.body, "show-result");
    a.V.show({
        ve: ""
    });
    a.G.update("", b, c, new mp);
    dw(a.ia, null);
    a.a.update("", new mp, !1);
    b = a.h;
    NL(b, !1);
    PL(b, !0);
    JL(b);
    a.W && aK(a.W)
};
KM.prototype.Sh = function() {
    null != this.c && uJ(this.c.a);
    JM(this)
}
;
KM.prototype.na = function(a, b) {
    this.hn.reset(a);
    var c = $v(this.a.a)
        , d = xc(le(c));
    this.K.G = c.substring(0, 64);
    this.K.a = null;
    var e = this.ia.a
        , f = this.ia.b;
    !jt() && a || "bh" === b || d && "ls" !== b || Ct(this.b, e, f, c, a);
    if (d)
        this.Sh();
    else if (UA(this.L),
        b = new an(Sm(this.w)),
        b.g(new an($u())),
        b.add("kc", aw(this.a.a)),
        NA(this.L, !0),
        ML(this.h, 1),
        Bm(this.F),
        xp(this.hd, e, f, DATA.DisplayLanguage, c, v(this.Rj, this, a, e, f, c), !0, void 0, b, v(this.om, this)),
        a = !1,
        SM(this, c) ? (QM(this),
            a = !0) : c.length >= this.v.length && (a = !0),
    a && (this.v = c,
        this.Ze = e,
        this.md = f),
        DATA.CompareProdTrans) {
        a = Ym(b);
        a.add("internal", 1);
        a.add("expflags", "NMT__enable_nmt_level:0");
        b = new rp("webapp","https://translate.google.com");
        var g = this.ie;
        xp(b, e, f, DATA.DisplayLanguage, c, function(k) {
            fg(g);
            W(g, !!k);
            if (k) {
                for (var l = [], m = 0; m < k.ic(); m++)
                    l.push(k.cb(m).Tc());
                G(g, l.join(""))
            }
        }, !0, void 0, a)
    }
}
;
KM.prototype.Vn = function(a) {
    if (a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = qI(a);
        if (b) {
            this.K.v = a;
            var c = this.hb;
            mH(c, c.a, a);
            this.V.show({
                ve: b,
                Eh: a,
                ej: $v(this.a.a),
                qj: this.ia.a
            })
        }
    }
}
;
var GM = function(a, b, c, d, e, f, g, k) {
    var l = E(b, a.o);
    b = E("tlid-dismiss-promo", l);
    var m = E("tlid-accept-promo", l);
    d = "/translate/uc?ua=dismiss&uav=" + d;
    n.setTimeout(function() {
        T(l, "show-panel")
    }, 400);
    Mm(gI, "webapp", c, "show");
    tm(a.F, e);
    f();
    H(b, "click", v(a.Zj, a, l, d, c, e, g), !1, a);
    H(m, "click", v(a.Yj, a, l, d, c, e, k), !1, a)
};
KM.prototype.Yj = function(a, b, c, d, e) {
    um(this.F, d);
    U(a, "show-panel");
    Lm(this.w, b);
    Mm(gI, "webapp", c, "accept");
    e()
}
;
KM.prototype.Zj = function(a, b, c, d, e) {
    var f = this.F;
    N(f, sm(f, 74, d));
    U(a, "show-panel");
    Lm(this.w, b);
    Mm(gI, "webapp", c, "dismiss");
    e()
}
;
KM.prototype.Rm = function(a) {
    Yd(n.location, a)
}
;
var FM = function(a, b, c) {
    GM(a, "at-promo", "atPromo", "at", c, Fa, Fa, v(a.Rm, a, b))
};
KM.prototype.$j = function() {
    Dh("gsa", "gsaAd:accept", "", 1);
    jI(void 0, 0)
}
;
KM.prototype.Pj = function() {
    dN(this, this.Jd);
    dN(this, this.Id);
    dN(this, this.ld);
    return !1
}
;
var dN = function(a, b) {
    var c = b.j();
    if (null != c) {
        var d = lq(c).a;
        c = d + uq(c).height;
        c > n.innerHeight + a.Xe && (eN(a, d, !0, b),
            eN(a, c, !1, b))
    }
}
    , eN = function(a, b, c, d) {
    var e = c ? "top" : "bot"
        , f = d.Lb()
        , g = f + "_" + e
        , k = Vf(document).a;
    b > k && b < k + n.innerHeight && !a.je[g] && (a.je[g] = !0,
        a.w.log("card_scroll", {
            card: f,
            position: e
        }),
        a = a.F,
        b = d.Od(),
        e = d.gb(),
        N(a, fm(a, c ? 213 : 214, b, e, d.rc, 0)))
}
    , bN = function(a, b) {
    var c = b.j();
    c && a.Ob.push(new hA(c,b.Lb(),b.Od(),"webapp"))
};
KM.prototype.Eo = function(a) {
    var b = Lf("gt-ntfcn-msg");
    b && (b.textContent = a,
        this.Rh.setVisible(!0, 2E3))
}
;
KM.prototype.Uj = function() {
    bv(At(this.b).toString())
}
;
var HM = function(a) {
    var b = window.gapi;
    b && (b.load("iframes", function() {
        "instant" === At(this.b).b && !WM() && XM(this)
    }
        .bind(a)),
        b.load("client", function() {
            var c = b.client
                , d = b.config;
            d.update("googleapis.config/auth/useFirstPartyAuth", !0);
            d.update("googleapis.config/auth/useFirstPartyAuthV2", !0);
            d.update("client/xd4", !0);
            c.setApiKey("AIzaSyA8PX4bTrtr1-DtDsGJSbTXQkfWbWkCjTM")
        }))
}
    , QM = function(a, b) {
    if ("" !== a.v) {
        var c = a.F
            , d = a.v
            , e = a.md
            , f = a.jd
            , g = O(c, 246);
        e = B(g, 1, e);
        e = B(e, 74, d.length);
        d = B(e, 52, d.substring(0, 64));
        e = new Nk;
        f = B(e, 1, f);
        mf(d, 70, f);
        N(c, d);
        64 < a.v.length && (a.v = a.v.substr(0, 64));
        c = {
            sl: a.Ze,
            tl: a.md,
            ql: a.v.length,
            q: a.v,
            pc: a.jd
        };
        b && (c[b] = 1);
        a.jd = a.le;
        a.le = 0;
        a.w.log("fq", c);
        a.v = ""
    }
}
    , SM = function(a, b) {
    return "" !== a.v && b[0] !== a.v[0] && b[b.length - 1] !== a.v[a.v.length - 1]
}
    , CM = function(a) {
    if (DATA.FeatureStickiness) {
        var b = JSON.parse(DATA.FeatureStickiness);
        null != b || (b = []);
        b = new kM(b);
        if (Fh(b, 2)) {
            a = a.No;
            b = new eM(b.Va[2]);
            a.a = {};
            a.a["gt-input-tool"] = new dz;
            for (var c, d = 0; d < I(b, 3); ++d)
                if (c = new aM(Il(b, 3, d)),
                0 == !!c.getState())
                    for (var e in a.a)
                        a.a[e].update(J(c, 0), !1, "");
            a.c = {};
            for (d = 0; d < I(b, 1); ++d)
                c = new aM(Il(b, 1, d)),
                    a.c[J(c, 0)] = !!c.getState();
            a.b = {};
            for (d = 0; d < I(b, 2); ++d)
                c = new aM(Il(b, 2, d)),
                    a.b[J(c, 0)] = !!c.getState();
            for (d = 0; d < I(b, 9); ++d)
                e = new cM(Il(b, 9, d)),
                    (Fh(e, 3) ? hz(a, J(e, 3), !0) : hz(a, "gt-input-tool", !0)).update(J(e, 0), e.getState(), J(e, 2))
        }
    }
};
var fN = {}
    , gN = null
    , hN = function(a, b, c) {
    if (a = fN[c])
        "history" == a.v ? (b = a.c,
            N(b, Em(b, 61, pL(a), null != a.b && a.b.b))) : "saved" == a.v && (gI.log("sli=sl", {}),
            b = a.c,
            N(b, Gm(b, 48))),
            a.dispatchEvent({
                type: "translate_requested",
                ib: a.a.Qa(),
                jb: a.a.ma(),
                text: a.a.a
            }),
            iI("populate", c, a.a.Qa(), a.a.ma(), a.a.a)
}
    , iN = XA("translate");
var By = null
    , jN = null
    , xM = DATA.MaybeDefaultSourceLanguageCode || "auto"
    , yM = DATA.MaybeDefaultTargetLanguageCode
    , lN = function() {
    var a = new ki(function(c) {
            FF(function() {
                c()
            })
        }
    )
        , b = new ki(function(c) {
            Hy(function(d, e) {
                d ? (By = e,
                    kN(c)) : c()
            })
        }
    );
    qi([b, a])
}
    , kN = function(a) {
    Fy(By.a, null, null, null, 100, function(b, c) {
        if (b) {
            b = [];
            for (var d = c.length - 1; 0 <= d; d--) {
                var e = c[d]
                    , f = e.sl
                    , g = e.tl
                    , k = e.src;
                e = e.trg;
                0 == d && (xM = f,
                    yM = g);
                b.push({
                    sl: f,
                    tl: g,
                    orig: k,
                    result: e
                })
            }
            c = jN.O;
            d = [];
            for (f = 0; f < b.length; f++)
                g = b[f],
                    d.push(new HF(g.orig,g.result,g.sl,g.tl));
            c.a ? DI(c.a, d) : c.c = d
        }
        a()
    })
}
    , zM = function(a, b, c, d) {
    By && Dy(c, d, a, b)
}
    , AM = function() {
    By && Cy(By.a, void 0, void 0, void 0, void 0)
};
za("init", function() {
    var a = new lH;
    mH(a, a.c, DATA.DisplayLanguage);
    mH(a, a.a, xM);
    mH(a, a.b, yM);
    var b = $f("INPUT");
    b.id = "history-input";
    W(b, !1);
    var c = $f("IFRAME");
    c.id = "history-frame";
    c.src = "about:blank";
    W(c, !1);
    document.body.appendChild(b);
    document.body.appendChild(c);
    b = new wt(!0,b,c);
    jN = new KM(a,b);
    document.body.appendChild(jN.j());
    gN || (gN = new lB(null,"TranslationItem"),
        nB(gN, iN, hN),
        mB.a.push(gN));
    yB || (yB = new lB(null,"LanguageListItem"),
        nB(yB, sB, xB),
        nB(yB, zB, FB),
        mB.a.push(yB));
    window.location.hash.substr(1) && OM(jN, window.location.hash.substr(1));
    b.b.oa(!0);
    lN();
    DATA.UserInputQuery && xt(jN, xM, yM, DATA.UserInputQuery)
});
if (window.jstiming) {
    window.jstiming.pe = {};
    window.jstiming.wh = 1;
    var mN = function(a, b, c) {
        var d = a.t[b]
            , e = a.t.start;
        if (d && (e || c))
            return d = a.t[b][0],
                void 0 != c ? e = c : e = e[0],
                Math.round(d - e)
    }
        , nN = function(a, b, c) {
        var d = "";
        window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
            delete window.jstiming.srt);
        window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
            delete window.jstiming.pt);
        try {
            window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (r) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
            e().wasFetchedViaSpdy && (d += "&p=s");
            if (e().wasNpnNegotiated) {
                d += "&npn=1";
                var f = e().npnNegotiatedProtocol;
                f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
            }
            e().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var g = a.t
            , k = g.start;
        e = [];
        f = [];
        for (var l in g)
            if ("start" != l && 0 != l.indexOf("_")) {
                var m = g[l][1];
                m ? g[m] && f.push(l + "." + mN(a, l, g[m][0])) : k && e.push(l + "." + mN(a, l))
            }
        delete g.start;
        if (b)
            for (var q in b)
                d += "&" + q + "=" + b[q];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.jstiming.sn || "translate_mobileweb") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
    }
        , oN = function(a, b, c) {
        a = nN(a, b, c);
        if (!a)
            return "";
        b = new Image;
        var d = window.jstiming.wh++;
        window.jstiming.pe[d] = b;
        b.onload = b.onerror = function() {
            window.jstiming && delete window.jstiming.pe[d]
        }
        ;
        b.src = a;
        b = null;
        return a
    };
    window.jstiming.report = function(a, b, c) {
        var d = document.visibilityState
            , e = "visibilitychange";
        d || (d = document.webkitVisibilityState,
            e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1
                , g = function() {
                if (!f) {
                    b ? b.prerender = "1" : b = {
                        prerender: "1"
                    };
                    if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                        var k = !1;
                    else
                        oN(a, b, c),
                            k = !0;
                    k && (f = !0,
                        document.removeEventListener(e, g, !1))
                }
            };
            document.addEventListener(e, g, !1);
            return ""
        }
        return oN(a, b, c)
    }
}
;