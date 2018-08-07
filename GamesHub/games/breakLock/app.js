! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 9)
}([function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        create: function(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (e = -1 === i.SVG_ELEMENTS.indexOf(t) ? document.createElement(t) : document.createElementNS(i.SVG_NAMESPACE, t), n.constructor === String) e.setAttribute("class", n);
            else
                for (var r in n) e.setAttribute(r, n[r]);
            if (a instanceof Array)
                for (var o = 0; o < a.length; o++) e.appendChild(a[o]);
            else e.textContent = a;
            return e
        },
        icon: function(t) {
            var e = i.create("use");
            return e.setAttributeNS(i.XLINK_NAMESPACE, "href", "#icon-" + t), i.create("svg", {
                class: "icon"
            }, [e])
        },
        clear: function(t) {
            for (var e = t.childNodes.length - 1; e >= 0; e--) t.childNodes[e].remove()
        },
        SVG_NAMESPACE: "http://www.w3.org/2000/svg",
        XLINK_NAMESPACE: "http://www.w3.org/1999/xlink",
        SVG_ELEMENTS: ["svg", "g", "circle", "line", "path", "use", "rect"]
    };
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        GAME: {
            DIFFICULTY: {
                EASY: 4,
                MEDIUM: 5,
                HARD: 6
            },
            TYPE: {
                PRACTICE: 1,
                CHALLENGE: 2,
                COUNTDOWN: 3
            },
            ACTIONS: {
                CONTINUE: 1,
                NEW_GAME: 2,
                BACK_HOME: 3
            }
        },
        SOCIAL: {
            PLATFORMS: {
                FB: {
                    NAME: "Facebook",
                    ICON: "facebook",
                    URL: function(t) {
                        return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(t)
                    }
                },
                TWITTER: {
                    NAME: "Twitter",
                    ICON: "twitter",
                    URL: function(t, e, n) {
                        return "http://twitter.com/" + (t ? "share?" : "intent/tweet?") + (e ? "text=" + encodeURI(e) + "&" : "") + (t ? "url=" + encodeURI(t) + "&" : "") + (n ? "hashtags=" + encodeURI(n.join(",")) : "")
                    }
                }
            },
            MESSAGE: "I wasted my time on BreakLock, it's pointless, don't try it.",
            TAGS: ["breaklock"]
        },
        URL: "https://maxwellito.github.io/breaklock/",
        COLORS: {
            BRIGHT: "#ffffff",
            DARK: "#14171b",
            SUCCESS: "#116699",
            ERROR: "#ff0000"
        },
        PATTERN: {
            HEX_COLOR_START: "66",
            HEX_COLOR_END: "FF"
        }
    };
    e.default = i
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = function() {
            function t(e) {
                i(this, t), this.dotLength = e, this.suite = []
            }
            return a(t, [{
                key: "fillRandomly",
                value: function() {
                    for (; !this.isComplete();) this.addDot(Math.floor(9 * Math.random()))
                }
            }, {
                key: "addDot",
                value: function(t) {
                    if (this.isComplete() || ~this.suite.indexOf(t)) return [];
                    var e = this.suite[this.suite.length - 1],
                        n = (e + t) / 2;
                    if (void 0 != e && n >> 0 === n && e % 3 - n % 3 == n % 3 - t % 3 && Math.floor(e / 3) - Math.floor(n / 3) == Math.floor(n / 3) - Math.floor(t / 3)) {
                        var i = this.addDot(n);
                        return this.isComplete() || (this.suite.push(t), i.push(t)), i
                    }
                    return this.suite.push(t), [t]
                }
            }, {
                key: "isComplete",
                value: function() {
                    return this.suite.length >= this.dotLength
                }
            }, {
                key: "gotDot",
                value: function(t) {
                    return ~this.suite.indexOf(t)
                }
            }, {
                key: "compare",
                value: function(t) {
                    for (var e = 0, n = 0, i = 0; i < this.dotLength; i++) {
                        this.suite[i] === t.suite[i] && e++;
                        for (var a = 0; a < this.dotLength; a++) this.suite[a] === t.suite[i] && n++
                    }
                    return [e, n - e, this.dotLength - n]
                }
            }, {
                key: "reset",
                value: function() {
                    this.suite = []
                }
            }]), t
        }();
    e.default = r
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        s = function() {
            function t() {
                i(this, t), this.el = o.default.create("svg", {
                    viewBox: "0 0 " + this.SVG_WIDTH + " " + this.SVG_WIDTH
                })
            }
            return a(t, [{
                key: "addBackgroundLayer",
                value: function() {
                    var t = o.default.create("rect", {
                        fill: "#fff",
                        "fill-opacity": "0",
                        width: this.SVG_WIDTH,
                        height: this.SVG_WIDTH
                    });
                    return this.el.appendChild(t), t
                }
            }, {
                key: "addPattern",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#fff",
                        i = [];
                    n = n instanceof Array ? n : [n];
                    for (var a = 1; a < t.suite.length; a++) i.push(o.default.create("line", {
                        x1: t.suite[a - 1] % 3 * this.GRID_GUTTER + this.SVG_MARGIN,
                        y1: Math.floor(t.suite[a - 1] / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
                        x2: t.suite[a] % 3 * this.GRID_GUTTER + this.SVG_MARGIN,
                        y2: Math.floor(t.suite[a] / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
                        stroke: n[Math.min(n.length, a) - 1]
                    }));
                    var r = t.suite[t.suite.length - 1];
                    return i.push(o.default.create("circle", {
                        cx: r % 3 * this.GRID_GUTTER + this.SVG_MARGIN,
                        cy: Math.floor(r / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
                        fill: n[0],
                        r: e / 4
                    })), this.addGroup({
                        "stroke-width": e,
                        "stroke-linecap": "round"
                    }, i)
                }
            }, {
                key: "addDots",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = [];
                    e.fill = e.fill || "#fff";
                    for (var i = 0; i < 9; i++) n.push(o.default.create("circle", {
                        cx: i % 3 * this.GRID_GUTTER + this.SVG_MARGIN,
                        cy: Math.floor(i / 3) * this.GRID_GUTTER + this.SVG_MARGIN,
                        rel: i,
                        r: t
                    }));
                    return this.addGroup(e, n)
                }
            }, {
                key: "addGroup",
                value: function(t, e) {
                    var n = o.default.create("g", t, e);
                    return this.el.appendChild(n), n
                }
            }, {
                key: "addCombinaison",
                value: function(t, e, n) {
                    var i = t + e + n,
                        a = Math.min(Math.floor(this.SVG_WIDTH / i), this.SVG_COMB_EXP),
                        r = Math.floor(.75 * a),
                        s = Math.floor(.25 * a),
                        u = r + s,
                        l = Math.floor((this.SVG_WIDTH - (i - 1) * u) / 2),
                        c = this.SVG_WIDTH + Math.floor(this.SVG_COMB_EXP / 2);
                    this.el.setAttribute("viewBox", "0 0 " + this.SVG_WIDTH + " " + (this.SVG_WIDTH + this.SVG_COMB_EXP));
                    for (var h = [], d = 0; d < i; d++) h.push(o.default.create("circle", {
                        cx: l + d * u,
                        cy: c,
                        r: (r - this.DOT_BORDER) / 2,
                        "stroke-width": this.DOT_BORDER,
                        fill: d < t ? "#fff" : "#000",
                        stroke: d < t + e ? "#fff" : "#000",
                        "fill-opacity": d < t ? "1" : ".25",
                        "stroke-opacity": d < t + e ? "1" : ".25"
                    }));
                    return this.addGroup({}, h)
                }
            }, {
                key: "getSVG",
                value: function() {
                    return this.el
                }
            }]), t
        }();
    s.prototype.SVG_NAMESPACE = "http://www.w3.org/2000/svg", s.prototype.SVG_WIDTH = 100, s.prototype.SVG_COMB_EXP = 20, s.prototype.SVG_MARGIN = 15, s.prototype.GRID_GUTTER = 35, s.prototype.DOT_BORDER = 2, s.prototype.DOT_MAGNET = 6, e.default = s
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = a(t);
        n && l(n.nextFrame);
        var i = {
            el: t,
            counter: e.length * h,
            originalLength: e.length,
            originalText: e,
            nextFrame: null
        };
        o(i), c.push(i)
    }

    function a(t) {
        for (var e = c.length - 1; e >= 0; e--)
            if (c[e].el === t) return c.splice(e, 1)[0]
    }

    function r(t) {
        t.nextFrame = u(function() {
            o(t)
        })
    }

    function o(t) {
        if (t.counter -= 1, t.counter <= 0) return t.el.textContent = t.originalText, void a(t.el);
        var e = Math.floor(t.originalLength - t.counter / h);
        t.el.textContent = t.originalText.substr(0, e) + s(Math.min(t.originalLength - e, 3)), r(t)
    }

    function s(t) {
        var e = "",
            n = "abcdefghijklmnopqrstuvwxyz0123456789 _*%!?/\\|#@";
        if (t <= 0) return e;
        for (var i = 0; i < t; i++) e += n.charAt(Math.floor(Math.random() * n.length));
        return e
    }

    function u(t) {
        return window.setTimeout(t, 60)
    }

    function l(t) {
        return window.clearTimeout(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = [],
        h = 3;
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(t, e) {
        for (var n = Math.abs(t) + "", i = t < 0, a = e - n.length; a > 0; a--) n = "0" + n;
        return (i ? "-" : "") + n
    };
    e.default = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(16),
        s = i(o),
        u = n(12),
        l = i(u),
        c = n(13),
        h = i(c),
        d = n(17),
        f = i(d),
        p = n(2),
        v = i(p),
        y = n(3),
        m = i(y),
        E = n(1),
        b = i(E),
        g = n(0),
        T = i(g),
        k = n(19),
        w = i(k);
    n(22);
    var C = function() {
        function t(e) {
            a(this, t), this.statusBar = new s.default(this.abort.bind(this)), this.history = new l.default, this.lock = new h.default(this.newAttempt.bind(this)), this.summary = new f.default(this.action.bind(this)), this.pattern = null, this.type = null, this.isEnded = !1, this.onEnd = e, this.statusBar.init(), this.lock.init(), this.setupTemplate()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                return this.el = T.default.create("div", "game-layout view", [T.default.create("div", "view-bloc game-layout-dashboard", [this.statusBar.el, T.default.create("div", "history-wrap", [this.history.el])]), T.default.create("div", "view-bloc game-layout-lock", [this.lock.el]), this.summary.el]), this.el
            }
        }, {
            key: "start",
            value: function(t, e) {
                switch (this.type = t, this.difficulty = e, this.lock.setDotLength(e), this.pattern = new v.default(e), this.pattern.fillRandomly(), this.history.clear("Poveži " + e + " tačke"), this.count = 0, this.isEnded = !1, t) {
                    case b.default.GAME.TYPE.PRACTICE:
                        return this.statusBar.setCounter(0);
                    case b.default.GAME.TYPE.CHALLENGE:
                        return this.statusBar.setCounter(10);
                    case b.default.GAME.TYPE.COUNTDOWN:
                        return this.statusBar.setCountdown(60)
                }
            }
        }, {
            key: "newAttempt",
            value: function(t) {
                var e = this.pattern.compare(t),
                    n = this.buildPatternSVG(t, e),
                    i = e[0] === this.pattern.dotLength;
                if (this.count++, this.isEnded) this.statusBar.incrementCounter();
                else if (i) this.type === b.default.GAME.TYPE.COUNTDOWN && this.statusBar.stopCountdown(), this.isEnded = n, this.summary.setContent(!0, this.count);
                else switch (this.type) {
                    case b.default.GAME.TYPE.PRACTICE:
                        this.statusBar.incrementCounter();
                        break;
                    case b.default.GAME.TYPE.CHALLENGE:
                        0 === this.statusBar.decrementCounter() && (this.isEnded = !0, this.summary.setContent(!1, this.count))
                }
                return this.history.stackPattern(n), i
            }
        }, {
            key: "abort",
            value: function(t) {
                t ? (this.isEnded = !0, this.statusBar.stopCountdown(), this.summary.setContent(!1, this.count)) : this.onEnd()
            }
        }, {
            key: "action",
            value: function(t) {
                switch (t) {
                    case b.default.GAME.ACTIONS.NEW_GAME:
                        this.start(this.type, this.difficulty);
                        break;
                    case b.default.GAME.ACTIONS.BACK_HOME:
                        this.abort();
                        break;
                    case b.default.GAME.ACTIONS.CONTINUE:
                        if (!0 === this.isEnded) {
                            var e = this.pattern.compare(this.pattern),
                                n = this.buildPatternSVG(this.pattern, e);
                            this.history.stackPattern(n)
                        }
                        this.statusBar.setCounter(this.count)
                }
                this.summary.toggle()
            }
        }, {
            key: "buildPatternSVG",
            value: function(t, e) {
                var n = new m.default;
                n.addDots(1), n.addPattern(t, 14, w.default.greydient(b.default.PATTERN.HEX_COLOR_START, b.default.PATTERN.HEX_COLOR_END, t.dotLength - 3)), e && m.default.prototype.addCombinaison.apply(n, e);
                var i = n.getSVG();
                return e[0] === t.dotLength && i.classList.add("success"), i
            }
        }]), t
    }();
    e.default = C
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(11),
        s = i(o),
        u = n(14),
        l = i(u),
        c = n(15),
        h = i(c),
        d = n(1),
        f = i(d),
        p = n(0),
        v = i(p),
        y = n(4),
        m = i(y);
    n(25);
    var E = function() {
        function t(e) {
            a(this, t), this.onStart = e, this.setupTemplate()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                var t = v.default.create("h1", "menu-title highlight", "BreakLock"),
                    e = v.default.create("p", "menu-intro", "Voliš da se igraš sa šablonima na Android telefonu. Ovo je Igra koju ćeš voleti da mrziš.");
                this.typeHelpEl = v.default.create("p", {}, "Buduće informacije o izazovu"), this.btnStarlEl = v.default.create("button", "action-btn", "START_"), (0, m.default)(t, "BreakLock");
                var n = new s.default("INSTRUCTIONS", document.getElementById("instructions-template"));
                return n.init(), this.difficultyOption = new l.default([{
                    value: f.default.GAME.DIFFICULTY.EASY,
                    label: "Lako",
                    default: !0
                }, {
                    value: f.default.GAME.DIFFICULTY.MEDIUM,
                    label: "Srednje"
                }, {
                    value: f.default.GAME.DIFFICULTY.HARD,
                    label: "Teško"
                }]), this.typeSelector = new h.default([{
                    value: f.default.GAME.TYPE.PRACTICE,
                    label: "Vežbanje",
                    description: "Nema pritiska, samo otkrijte i primenite svoju igru",
                    default: !0
                }, {
                    value: f.default.GAME.TYPE.CHALLENGE,
                    label: "Challenge",
                    description: "Challenge mod ti daje 10 pokušaja da pobediš"
                }, {
                    value: f.default.GAME.TYPE.COUNTDOWN,
                    label: "Countdown",
                    description: "Reši igru za minut, bez ograničenja pokušaja"
                }]), this.el = v.default.create("div", "menu-layout view", [v.default.create("div", "view-bloc menu-layout-instructions", [t, e, n.el]), v.default.create("div", "view-bloc menu-layout-form", [this.difficultyOption.el, this.typeSelector.el, this.typeHelpEl, this.btnStarlEl])]), this.el
            }
        }, {
            key: "init",
            value: function() {
                this.typeSelector.init(), this.typeSelector.onSelect(this.typeChange.bind(this)), this.btnStarlEl.addEventListener("click", this.start.bind(this))
            }
        }, {
            key: "start",
            value: function() {
                this.onStart(this.typeSelector.getValue(), this.difficultyOption.getValue())
            }
        }, {
            key: "typeChange",
            value: function(t) {
                this.typeHelpEl.textContent = t.description
            }
        }]), t
    }();
    e.default = E
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = n(6),
        r = i(a),
        o = n(7),
        s = i(o);
    n(8);
    var u = document.getElementById("app-intro");
    u && u.remove();
    var l = document.body,
        c = new r.default(function() {
            h.el.style.display = "", c.el.style.display = "none"
        });
    l.appendChild(c.el);
    var h = new s.default(function(t, e) {
        c.start(t, e), h.el.style.display = "none", c.el.style.display = ""
    });
    h.init(), l.appendChild(h.el), c.el.style.display = "none", window.scrollTo(0, 0)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(5),
        s = i(o),
        u = n(0),
        l = i(u);
    n(20);
    var c = function() {
        function t() {
            a(this, t), this.setupTemplate()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                this.counterEl = l.default.create("span", "countdown-counter"), this.barEl = l.default.create("span", "countdown-content");
                var t = l.default.create("span", "countdown-container", [this.barEl]);
                return this.el = l.default.create("div", "countdown", [this.counterEl, t]), this.el
            }
        }, {
            key: "setTimer",
            value: function(t, e) {
                this.duration = t, this.remaining = t, this.endCallback = e, this.render()
            }
        }, {
            key: "start",
            value: function() {
                this.interval || (this.interval = window.setInterval(this.decrement.bind(this), 1e3))
            }
        }, {
            key: "stop",
            value: function() {
                window.clearInterval(this.interval), this.interval = null
            }
        }, {
            key: "decrement",
            value: function() {
                this.remaining--, this.render()
            }
        }, {
            key: "render",
            value: function() {
                this.remaining = this.remaining > 0 ? this.remaining : 0, this.el.classList[this.remaining > 10 ? "remove" : "add"]("alert"), this.counterEl.textContent = (0, s.default)(this.remaining, 3), this.barEl.style.width = this.remaining / this.duration * 100 + "%", 0 == this.remaining && (this.stop(), this.endCallback && this.endCallback())
            }
        }]), t
    }();
    e.default = c
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(21);
    var s = function() {
        function t(e, n, a) {
            i(this, t), this.title = e, this.content = n, this.isExpanded = a, this.setupTemplate()
        }
        return a(t, [{
            key: "setupTemplate",
            value: function() {
                var t = this.content instanceof String ? this.content : [this.content];
                return this.buttonEl = o.default.create("button", "extender-button", this.title), this.contentEl = o.default.create("div", "extender-content", t), this.el = o.default.create("div", "extender small-only", [this.buttonEl, this.contentEl]), this.render(), this.el
            }
        }, {
            key: "init",
            value: function() {
                this.buttonEl.addEventListener("click", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function(t) {
                this.isExpanded = t instanceof Boolean ? t : !this.isExpanded, this.render()
            }
        }, {
            key: "render",
            value: function() {
                this.el.classList[this.isExpanded ? "add" : "remove"]("active")
            }
        }]), t
    }();
    e.default = s
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(23);
    var s = function() {
        function t() {
            i(this, t), this.lastPattern = null, this.setupTemplate()
        }
        return a(t, [{
            key: "setupTemplate",
            value: function() {
                return this.containerEl = o.default.create("div", "history-container", ""), this.el = o.default.create("div", "history", [this.containerEl]), this.el
            }
        }, {
            key: "stackPattern",
            value: function(t) {
                this.lastPattern ? this.containerEl.insertBefore(t, this.lastPattern) : this.containerEl.appendChild(t), this.lastPattern = t, this.scrollToStart()
            }
        }, {
            key: "scrollToStart",
            value: function() {
                var t = this.el.scrollLeft;
                this.el.scrollLeft = (Math.max(t / 4, 4), 0), this.el.scrollLeft > 0 && window.requestAnimationFrame(this.scrollToStart.bind(this))
            }
        }, {
            key: "clear",
            value: function(t) {
                this.lastPattern = null, this.containerEl.remove(), this.containerEl = o.default.create("div", {
                    class: "history-container",
                    "data-helper": t
                }), this.el.appendChild(this.containerEl)
            }
        }]), t
    }();
    e.default = s
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(2),
        s = i(o),
        u = n(3),
        l = i(u),
        c = n(0),
        h = i(c),
        d = n(1),
        f = i(d);
    n(24);
    var p = function() {
        function t(e) {
            a(this, t), this.currentLine = null, this.onNewPattern = e, this.setupTemplate()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                var t = new l.default;
                return t.addBackgroundLayer(), this.el = t.getSVG(), this.el.setAttribute("class", "lock"), this.patternEl = t.addGroup({
                    "stroke-width": "2",
                    stroke: f.default.COLORS.BRIGHT,
                    "stroke-linecap": "round"
                }), this.bigDotsEl = t.addDots(9, {
                    class: "lock-flashdots"
                }), t.addDots(2), this.el
            }
        }, {
            key: "init",
            value: function() {
                this.el.addEventListener("touchstart", this.touchStart.bind(this)), this.el.addEventListener("touchmove", this.touchUpdate.bind(this)), this.el.addEventListener("touchend", this.touchEnd.bind(this)), this.el.addEventListener("mousedown", this.mouseStart.bind(this))
            }
        }, {
            key: "setDotLength",
            value: function(t) {
                this.dotLength = t, this.pattern = new s.default(this.dotLength)
            }
        }, {
            key: "mouseStart",
            value: function(t) {
                this.reset(), this.mouseUpdateBind = this.mouseUpdate.bind(this), this.mouseEndBind = this.mouseEnd.bind(this), this.el.addEventListener("mousemove", this.mouseUpdateBind), window.addEventListener("mouseleave", this.mouseEndBind), window.addEventListener("mouseup", this.mouseEndBind), this.mouseUpdate(t)
            }
        }, {
            key: "mouseUpdate",
            value: function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = t.currentTarget.getBoundingClientRect(),
                    n = Math.max(0, Math.min(l.default.prototype.SVG_WIDTH, Math.round(l.default.prototype.SVG_WIDTH / e.width * (t.pageX - e.left)))),
                    i = Math.max(0, Math.min(l.default.prototype.SVG_WIDTH, Math.round(l.default.prototype.SVG_WIDTH / e.height * (t.pageY - e.top))));
                this.updatePoint(n, i)
            }
        }, {
            key: "mouseEnd",
            value: function(t) {
                this.isPendingReset || this.reset(), this.el.removeEventListener("mousemove", this.mouseUpdateBind), window.removeEventListener("mouseout", this.mouseEndBind), window.removeEventListener("mouseup", this.mouseEndBind)
            }
        }, {
            key: "touchStart",
            value: function(t) {
                this.reset(), this.touchUpdate(t)
            }
        }, {
            key: "touchUpdate",
            value: function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = t.currentTarget.getBoundingClientRect(),
                    n = Math.max(0, Math.min(l.default.prototype.SVG_WIDTH, Math.round(l.default.prototype.SVG_WIDTH / e.width * (t.targetTouches[0].pageX - e.left)))),
                    i = Math.max(0, Math.min(l.default.prototype.SVG_WIDTH, Math.round(l.default.prototype.SVG_WIDTH / e.height * (t.targetTouches[0].pageY - e.top))));
                this.updatePoint(n, i)
            }
        }, {
            key: "touchEnd",
            value: function() {
                this.isPendingReset || this.reset()
            }
        }, {
            key: "updatePoint",
            value: function(t, e) {
                if (!this.isPendingReset) {
                    for (var n = void 0, i = void 0, a = 0; a < 3; a++) {
                        var r = l.default.prototype.GRID_GUTTER * a + l.default.prototype.SVG_MARGIN - l.default.prototype.DOT_MAGNET,
                            o = l.default.prototype.GRID_GUTTER * a + l.default.prototype.SVG_MARGIN + l.default.prototype.DOT_MAGNET;
                        n = r <= t && o >= t ? a : n, i = r <= e && o >= e ? a : i
                    }
                    var s = void 0;
                    if (void 0 !== n && void 0 != i) {
                        var u = 3 * i + n;
                        s = this.triggerDot(u)
                    }
                    return s || this.updateLine(t, e), !0
                }
            }
        }, {
            key: "triggerDot",
            value: function(t) {
                var e = this;
                if (!this.pattern.gotDot(t)) {
                    var n = this.pattern.addDot(t);
                    navigator.vibrate && navigator.vibrate(20), n.forEach(function(t, i) {
                        var a = l.default.prototype.GRID_GUTTER * (t % 3) + l.default.prototype.SVG_MARGIN,
                            r = l.default.prototype.GRID_GUTTER * Math.floor(t / 3) + l.default.prototype.SVG_MARGIN;
                        if (e.closeLine(a, r), e.bigDotsEl.childNodes[t].classList.add("active"), i + 1 === n.length && e.pattern.isComplete()) return e.checkPattern();
                        e.startLine(a, r)
                    })
                }
            }
        }, {
            key: "reset",
            value: function() {
                clearTimeout(this.isPendingReset), this.isPendingReset = null, this.pattern.reset(), this.currentLine = null;
                for (var t = 0; t < 9; t++) this.bigDotsEl.childNodes[t].classList.remove("active");
                for (var e = this.patternEl.childNodes.length - 1; e >= 0; e--) this.patternEl.childNodes[e].remove();
                this.patternEl.setAttribute("stroke", f.default.COLORS.BRIGHT)
            }
        }, {
            key: "checkPattern",
            value: function() {
                var t = this.onNewPattern(this.pattern);
                return this.isPendingReset = setTimeout(this.reset.bind(this), 1e3), this.patternEl.setAttribute("stroke", t ? f.default.COLORS.SUCCESS : f.default.COLORS.ERROR), t
            }
        }, {
            key: "startLine",
            value: function(t, e) {
                this.currentLine = h.default.create("line", {
                    x1: t,
                    y1: e
                }), this.patternEl.appendChild(this.currentLine)
            }
        }, {
            key: "updateLine",
            value: function(t, e) {
                this.currentLine && (this.currentLine.setAttribute("x2", t), this.currentLine.setAttribute("y2", e))
            }
        }, {
            key: "closeLine",
            value: function(t, e) {
                this.updateLine(t, e), this.currentLine = null
            }
        }]), t
    }();
    e.default = p
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(26);
    var s = function() {
        function t(e, n) {
            i(this, t), this.setupTemplate(), this.setChoices(e)
        }
        return a(t, [{
            key: "setupTemplate",
            value: function() {
                return this.el = o.default.create("div", "selectbox"), this.el
            }
        }, {
            key: "setChoices",
            value: function(t) {
                var e = this,
                    n = this.selectListener.bind(this);
                t.forEach(function(t, i) {
                    var a = o.default.create("span", {
                        class: "selectbox-item",
                        rel: t.value
                    }, t.label);
                    return a.addEventListener("click", n), a.addEventListener("touchstart", n), e.el.appendChild(a), t.default && e.selectFromTag(a), a
                }), this.el.classList.add("selectbox-" + t.length)
            }
        }, {
            key: "selectListener",
            value: function(t) {
                t.preventDefault(), t.stopPropagation(), this.selectFromTag(t.currentTarget)
            }
        }, {
            key: "selectFromTag",
            value: function(t) {
                this.selectedTag && this.selectedTag.classList.remove("active"), this.selectedTag = t, this.selectedTag.classList.add("active"), this.selectedValue = window.parseInt(t.getAttribute("rel"), 10)
            }
        }, {
            key: "getValue",
            value: function() {
                return this.selectedValue
            }
        }]), t
    }();
    e.default = s
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(27);
    var s = function() {
        function t(e, n) {
            i(this, t), this.selectionIndex = 0, this.setupTemplate(), this.setChoices(e)
        }
        return a(t, [{
            key: "setupTemplate",
            value: function() {
                return this.btnLeft = o.default.create("span", "selectbox-item active selector-left", "<"), this.btnRight = o.default.create("span", "selectbox-item active selector-right", ">"), this.labelEl = o.default.create("span", "selectbox-item selector-label"), this.el = o.default.create("div", "selector selectbox", [this.btnLeft, this.btnRight, this.labelEl]), this.el
            }
        }, {
            key: "init",
            value: function() {
                this.btnLeft.addEventListener("click", this.previous.bind(this)), this.btnLeft.addEventListener("touchstart", this.previous.bind(this)), this.btnRight.addEventListener("click", this.next.bind(this)), this.btnRight.addEventListener("touchstart", this.next.bind(this))
            }
        }, {
            key: "setChoices",
            value: function(t) {
                this.choices = t;
                for (var e = this.choices.length - 1; e >= 0; e--) this.selectionIndex = this.choices[e].default ? e : this.selectionIndex;
                this.selectionIndex = this.selectionIndex || 0, this.updateLabel()
            }
        }, {
            key: "updateLabel",
            value: function() {
                this.selectionIndex = (this.selectionIndex + this.choices.length) % this.choices.length;
                var t = this.choices[this.selectionIndex];
                return this.labelEl.textContent = t.label, this.selectCallback && this.selectCallback(this.choices[this.selectionIndex]), this.selectionIndex
            }
        }, {
            key: "next",
            value: function(t) {
                return t.preventDefault(), t.stopPropagation(), this.selectionIndex++, this.updateLabel()
            }
        }, {
            key: "previous",
            value: function(t) {
                return t.preventDefault(), t.stopPropagation(), this.selectionIndex--, this.updateLabel()
            }
        }, {
            key: "onSelect",
            value: function(t) {
                this.selectCallback = t, this.updateLabel()
            }
        }, {
            key: "getValue",
            value: function() {
                var t = this.choices[this.selectionIndex];
                return t && t.value
            }
        }]), t
    }();
    e.default = s
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(10),
        s = i(o),
        u = n(5),
        l = i(u),
        c = n(0),
        h = i(c);
    n(28);
    var d = function() {
        function t(e) {
            a(this, t), this.cancelCallback = e, this.counterVal = null, this.setupTemplate()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                return this.cancelBtnEl = h.default.create("button", "status-bar-cancel", "Odustani"), this.counterEl = h.default.create("span", "status-bar-info"), this.countdown = new s.default, this.countdownEl = this.countdown.el, this.countdownEl.setAttribute("class", "status-bar-info"), this.el = h.default.create("div", "status-bar", [this.cancelBtnEl, this.counterEl, this.countdownEl]), this.el
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                this.cancelBtnEl.addEventListener("click", function() {
                    t.cancelCallback(0)
                })
            }
        }, {
            key: "setCounter",
            value: function(t) {
                this.counterEl.style.display = "inherit", this.countdownEl.style.display = "none", this.counterVal = t, this.updateCounter()
            }
        }, {
            key: "updateCounter",
            value: function() {
                return this.counterEl.textContent = (0, l.default)(this.counterVal, 3), this.counterVal
            }
        }, {
            key: "decrementCounter",
            value: function() {
                return this.counterVal--, this.updateCounter()
            }
        }, {
            key: "incrementCounter",
            value: function() {
                return this.counterVal++, this.updateCounter()
            }
        }, {
            key: "setCountdown",
            value: function(t) {
                var e = this;
                this.counterEl.style.display = "none", this.countdownEl.style.display = "inherit", this.countdown.setTimer(t, function() {
                    e.cancelCallback(1)
                }), this.countdown.start()
            }
        }, {
            key: "stopCountdown",
            value: function() {
                this.countdown.stop()
            }
        }]), t
    }();
    e.default = d
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        o = n(18),
        s = i(o),
        u = n(1),
        l = i(u),
        c = n(2),
        h = (i(c), n(3)),
        d = (i(h), n(0)),
        f = i(d),
        p = n(4),
        v = i(p);
    n(29);
    var y = function() {
        function t(e) {
            a(this, t), this.onAction = e, this.setupTemplate(), this.init()
        }
        return r(t, [{
            key: "setupTemplate",
            value: function() {
                this.actionButtons = [];
                for (var t in l.default.GAME.ACTIONS) {
                    var e = f.default.create("button", {
                        class: "summary-action-button",
                        rel: l.default.GAME.ACTIONS[t]
                    }, [f.default.icon(t.toLowerCase()), f.default.create("span", {}, t)]);
                    this.actionButtons.push(e)
                }
                this.socialButtons = [];
                for (var n in l.default.SOCIAL.PLATFORMS) {
                    var i = f.default.create("a", {
                        class: "summary-share-link",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        platform: n
                    }, [f.default.icon(l.default.SOCIAL.PLATFORMS[n].ICON)]);
                    this.socialButtons.push(i)
                }
                var a = f.default.create("div", "summary-feedback bloc", [f.default.create("p", {}, [f.default.create("span", {}, ""), f.default.create("a", {
                    href: l.default.SOCIAL.PLATFORMS.TWITTER.URL("", "", [""])
                }, "")])]);
                return this.titleEl = f.default.create("h1", "summary-title highlight"), this.detailsEl = f.default.create("p", "summary-details"), this.revealEl = f.default.create("p", "summary-reveal", "Pritisni Nastavi da bi video rešenje."), this.actionsEl = f.default.create("div", "summary-actions bloc", this.actionButtons), this.socialEl = f.default.create("div", "summary-share bloc", this.socialButtons), this.el = f.default.create("div", "summary view", [f.default.create("div", "view-bloc", [this.titleEl, this.detailsEl, this.revealEl]), f.default.create("div", "view-bloc", [this.actionsEl, this.socialEl, a])]), this.el
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                this.actionButtons.forEach(function(e) {
                    return e.addEventListener("click", t.triggerAction.bind(t))
                })
            }
        }, {
            key: "setContent",
            value: function(t, e) {
                this.titleEl.classList.remove("neuspeh"), this.titleEl.classList.remove("Uspeh"), this.titleEl.classList.add(t ? "Uspeh" : "Neuspeh"), (0, v.default)(this.titleEl, t ? "Uspeo si!" : "Neuspeh!"), this.detailsEl.textContent = (0, s.default)(t, e), this.revealEl.classList[t ? "add" : "remove"]("hide"), this.updateSocialLinks(), this.toggle(!0)
            }
        }, {
            key: "toggle",
            value: function(t) {
                t = void 0 != t ? t : !this.el.classList.contains("active"), this.el.classList[t ? "add" : "remove"]("active")
            }
        }, {
            key: "triggerAction",
            value: function(t) {
                var e = parseInt(t.currentTarget.getAttribute("rel") || 0, 10);
                this.onAction(e)
            }
        }, {
            key: "updateSocialLinks",
            value: function() {
                this.socialButtons.forEach(function(t) {
                    var e = t.getAttribute("platform"),
                        n = l.default.SOCIAL.PLATFORMS[e];
                    t.setAttribute("href", n.URL(l.default.URL, l.default.SOCIAL.MESSAGE, l.default.SOCIAL.TAGS))
                })
            }
        }]), t
    }();
    e.default = y
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = void 0,
            i = void 0;
        return t ? (n = "Šablon pronađen u " + e + " pokušaja. ", i = a.filter(function(t) {
            return t.min <= e && t.max >= e
        }).map(function(t) {
            return t.text
        })) : (n = "Izvini, nisi uspeo ovog puta. ", i = r), n + i[Math.floor(i.length * Math.random())]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = [{
            min: 1,
            max: 3,
            text: "To je bila čista sreća, ništa drugo. Prestani da sanjariš!."
        }, {
            min: 2,
            max: 4,
            text: "Imaš sreće, a da nisi ostao budan celu noć."
        }, {
            min: 1,
            max: 2,
            text: "Bez zasluga. Apsolutno nema šanse."
        }, {
            min: 2,
            max: 5,
            text: "To je zapisano na zlatnoj ploči."
        }, {
            min: 1,
            max: 4,
            text: "Apsolutno nije bilo upotrebe mozga tokom ove igre."
        }, {
            min: 2,
            max: 5,
            text: "Don't even dare to tweet your score."
        }, {
            min: 8,
            max: 10,
            text: "Preblizuuuuu!! To je bilo stvarno blizu."
        }, {
            min: 4,
            max: 8,
            text: "Izgleda okej, sa malo sreće."
        }, {
            min: 7,
            max: 10,
            text: "Vrlo dobro!"
        }, {
            min: 9,
            max: 10,
            text: "Ali uspeo si!"
        }, {
            min: 11,
            max: 50,
            text: "Pokušaj nasumičnih šablona nije strategija..."
        }, {
            min: 11,
            max: 50,
            text: "To je bilo preduuuuuuuuuugačko."
        }, {
            min: 11,
            max: 50,
            text: "Bar si uspeo."
        }, {
            min: 11,
            max: 50,
            text: "Verovatno si već zamrzao ovu igru."
        }, {
            min: 11,
            max: 50,
            text: "Nadam se da nisi varao."
        }, {
            min: 41,
            max: 403,
            text: "Vaša posvećenost je impresivna."
        }, {
            min: 404,
            max: 404,
            text: "Logika nije pronađena..."
        }, {
            min: 405,
            max: 999,
            text: "Nemam komentar."
        }],
        r = ["Verujem da ima posla.", "Da li razumeš igru? Ne uzimaj je lično, ja se trduim da ti objasnim.", "Uspećeš jednog dana...", "Možda je tebi dosadno ali meni je zabavno ;)", "Ne potresaj se, uspećeš.","Ako želiš izbeći bitke, izađite iz skrovišta!", "Čak i ako izgubiš u borbi, ako prevazilaziš ono što si ranije radio, pobedio si.", "TILT! Ubaci novčić i pokušaj ponovo!"];
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        greydient: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            t = "string" == typeof t ? parseInt(t, 16) : t, e = "string" == typeof e ? parseInt(e, 16) : e, t = Math.min(255, Math.max(0, t)), e = Math.min(255, Math.max(0, e)), n++;
            for (var i = [], a = (e - t) / n, r = 0; r <= n; r++) {
                var o = Math.round(t + r * a),
                    s = o.toString(16);
                i.push("#" + s + s + s)
            }
            return i
        }
    };
    e.default = i
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}]);