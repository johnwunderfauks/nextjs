! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    e.m = t, e.c = i, e.i = function(t) {
        return t
    }, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/wp-content/themes/nouri/dist/", e(e.s = 86)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = function(t, e) {
                this.debug = !1, this.el = t, this.options = e || {}, 0 !== this.$el.length && this.boot()
            },
            n = {
                $el: {}
            };
        i.prototype.boot = function() {
            throw new Error("Method boot is required")
        }, i.prototype.destroy = function() {
            throw new Error("Method destroy is required")
        }, i.prototype.log = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            this.console("log", t)
        }, i.prototype.console = function(t) {
            for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
            this.debug && "function" == typeof console[t] && console[t](e, this.constructor.name)
        }, n.$el.get = function() {
            return t(this.el)
        }, Object.defineProperties(i.prototype, n), e.a = i
    }).call(e, i(0))
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = function(e) {
                function i(t, i) {
                    void 0 === i && (i = {}), e.call(this, null, i);
                    var n = t;
                    if (!t) {
                        var r = new Date;
                        n = Math.floor(Math.random() * r.getTime() + 1)
                    }
                    this.id = n + "-preloader", this.el = "#" + this.id, this.position = this.options.position || "middle", this.boot()
                }
                e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
                var n = {
                    $template: {},
                    classnames: {}
                };
                return i.prototype.boot = function() {
                    this.name = "Preloader", this.placeholder = this.options.placholder || null, this.$placholder = t(this.placholder), this.innerHTML = this.options.innerHTML || '<div class="preloader"></div>'
                }, i.prototype.destroy = function() {
                    this.isInDOM() && this.remove()
                }, i.prototype.appendTo = function(t) {
                    return this.render("appendTo", t)
                }, i.prototype.prependTo = function(t) {
                    return this.render("prependTo", t)
                }, i.prototype.render = function(t, e) {
                    void 0 === e && (e = null);
                    var i = e || this.$placeholder;
                    if (!i) throw new Error("No element is defined to be used as arg for the method " + t);
                    if (["prependTo", "appendTo"].indexOf(t) < 0) throw new Error(t + " is not acceptable to render. Only prependTo and appendTo");
                    return this.$template[t](i)
                }, i.prototype.fadeIn = function(e, i, n) {
                    void 0 === i && (i = t.noop), void 0 === n && (n = "appendTo");
                    var r = function() {
                        i()
                    };
                    this.render(n, e).css("opacity", 0), TweenMax.to(this.$el, .4, {
                        opacity: 1,
                        onComplete: r
                    })
                }, i.prototype.fadeOut = function(e, i) {
                    var n = this;
                    void 0 === i && (i = t.noop);
                    var r = function() {
                        n.remove(), i()
                    };
                    TweenMax.to(this.$el, .2, {
                        opacity: 0,
                        onComplete: r
                    })
                }, i.prototype.remove = function() {
                    this.$el.remove()
                }, i.prototype.isInView = function() {
                    return this.$el.length > 0
                }, n.$template.get = function() {
                    return t('<div id="' + this.id + '" class="' + this.id + " " + this.classnames + '">' + this.innerHTML + "</div>")
                }, n.classnames.get = function() {
                    var t = [];
                    return "middle" === this.position && t.push("preloader-middle"), t.join(" ")
                }, Object.defineProperties(i.prototype, n), i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(56),
            r = function() {
                this.name = "ScrollbarMeasure", this.scrollbarWidth = 0, this.bodyOverflow = !1, this.originalBodyPadding = 0
            };
        r.prototype.check = function() {
            this.bodyOverflow = document.body.clientWidth <= window.innerWidth, this.scrollbarWidth = this.get()
        }, r.prototype.reset = function() {
            document.body.style.paddingRight = 0, t(document.body).removeClass("scroll-lock")
        }, r.prototype.set = function() {
            var e = parseInt(t(this.fixedContent).css("padding-right") || 0, 10);
            this.originalBodyPadding = document.body.style.paddingRight || "", this.bodyOverflow && (document.body.style.paddingRight = e + this.scrollbarWidth + "px", t(document.body).addClass("scroll-lock"))
        }, r.prototype.get = function() {
            var t = this.scrollbarWidth;
            return t || (t = n.a.get()), t
        }, e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = function(e) {
                function i() {
                    e.call(this, null, null), this.debug = !0, this.store = []
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.cache = function(t, e) {
                    void 0 === e && (e = "id");
                    var i = t.getAttr(e);
                    this.store.filter(function(t) {
                        return "function" == typeof t.getAttr ? t.getAttr(e) === i : t[e] === i
                    }).length || this.store.push(t)
                }, i.prototype.find = function(t, e) {
                    return this.store.find(function(i) {
                        return i.getAttr(t) === e
                    })
                }, i.prototype.filter = function(e) {
                    return t.grep(this.store, e)
                }, i.prototype.filterBy = function(t, e) {
                    return this.filter(function(i) {
                        return i.getAttr(t) === e
                    })
                }, i.prototype.slice = function(t, e) {
                    return this.store.slice(t, e)
                }, i.prototype.pluck = function(t) {
                    var e = [];
                    return this.store.forEach(function(i) {
                        i.hasOwnProperty(t) && e.push(i[t])
                    }), e
                }, i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        e.a = function(e, i) {
            void 0 === i && (i = t.noop);
            var n = t.extend({}, {
                action: "ajax_request",
                dataType: "html",
                type: "GET"
            }, e);
            return t.ajax(n.url, n).done(function(e, r, o) {
                var s, a;
                try {
                    a = "html" === n.dataType ? t("<html>", {
                        html: e
                    }).get(0) : e
                } catch (t) {
                    if (s = t, "undefined" != typeof console && null !== console) return console.error("Malformed response", o), alert(s)
                }
                return a.error ? (t(document).trigger("ajax_request.error", {
                    response: a
                }), a = a.error || s) : t(document).trigger("ajax_request.success", {
                    response: a
                }), i(a, o)
            })
        }
    }).call(e, i(0))
}, function(t, e, i) {
    (function(n) {
        var r, o, s = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (s._gsQueue || (s._gsQueue = [])).push(function() {
                "use strict";
                s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                        var n = function(t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            r = function(t, e, i) {
                                var n, r, o = t.cycle;
                                for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                delete t.cycle
                            },
                            o = function(t, e, n) {
                                i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                            },
                            s = i._internals,
                            a = s.isSelector,
                            l = s.isArray,
                            c = o.prototype = i.to({}, .1, {}),
                            u = [];
                        o.version = "1.19.1", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function() {
                            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                        }, c.updateTo = function(t, e) {
                            var n, r = this.ratio,
                                o = this.vars.immediateRender || t.immediateRender;
                            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (n in t) this.vars[n] = t[n];
                            if (this._initted || o)
                                if (e) this._initted = !1, o && this.render(0, !0, !0);
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var s = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || o)
                                for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                            return this
                        }, c.render = function(t, e, i) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var n, r, o, a, l, c, u, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._time,
                                d = this._totalTime,
                                m = this._cycle,
                                g = this._duration,
                                v = this._rawPrevTime;
                            if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= -1e-7 || 1e-10 === v && "isPause" !== this.data) && v !== t && (i = !0, v > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = h = !e || t || v === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = h = !e || t || v === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = g + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && d <= t && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / g, c = this._easeType, u = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : this._time / g < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = d, this._rawPrevTime = v, this._cycle = m, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== g || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && 1e-10 === this._rawPrevTime && 1e-10 !== h && (this._rawPrevTime = 0)))
                        }, o.to = function(t, e, i) {
                            return new o(t, e, i)
                        }, o.from = function(t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                        }, o.fromTo = function(t, e, i, n) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                        }, o.staggerTo = o.allTo = function(t, e, s, c, h, f, p) {
                            c = c || 0;
                            var d, m, g, v, _ = 0,
                                y = [],
                                b = function() {
                                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), h.apply(p || s.callbackScope || this, f || u)
                                },
                                w = s.cycle,
                                T = s.startAt && s.startAt.cycle;
                            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], c < 0 && (t = n(t), t.reverse(), c *= -1), d = t.length - 1, g = 0; g <= d; g++) {
                                m = {};
                                for (v in s) m[v] = s[v];
                                if (w && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), T) {
                                    T = m.startAt = {};
                                    for (v in s.startAt) T[v] = s.startAt[v];
                                    r(m.startAt, t, g)
                                }
                                m.delay = _ + (m.delay || 0), g === d && h && (m.onComplete = b), y[g] = new o(t[g], e, m), _ += c
                            }
                            return y
                        }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
                        }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
                        }, o.delayedCall = function(t, e, i, n, r) {
                            return new o(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: n,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, o.set = function(t, e) {
                            return new o(t, 0, e)
                        }, o.isTweening = function(t) {
                            return i.getTweensOf(t, !0).length > 0
                        };
                        var h = function(t, e) {
                                for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(h(o, e)), r = n.length), o = o._next;
                                return n
                            },
                            f = o.getAllTweens = function(e) {
                                return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                            };
                        o.killAll = function(t, i, n, r) {
                            null == i && (i = !0), null == n && (n = !0);
                            var o, s, a, l = f(0 != r),
                                c = l.length,
                                u = i && n && r;
                            for (a = 0; a < c; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                        }, o.killChildTweensOf = function(t, e) {
                            if (null != t) {
                                var r, c, u, h, f, p = s.tweenLookup;
                                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                                    for (h = t.length; --h > -1;) o.killChildTweensOf(t[h], e);
                                else {
                                    r = [];
                                    for (u in p)
                                        for (c = p[u].target.parentNode; c;) c === t && (r = r.concat(p[u].tweens)), c = c.parentNode;
                                    for (f = r.length, h = 0; h < f; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                                }
                            }
                        };
                        var p = function(t, i, n, r) {
                            i = !1 !== i, n = !1 !== n, r = !1 !== r;
                            for (var o, s, a = f(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                        };
                        return o.pauseAll = function(t, e, i) {
                            p(!0, t, e, i)
                        }, o.resumeAll = function(t, e, i) {
                            p(!1, t, e, i)
                        }, o.globalTimeScale = function(e) {
                            var n = t._rootTimeline,
                                r = i.ticker.time;
                            return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                        }, c.progress = function(t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, c.totalProgress = function(t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, c.time = function(t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, c.duration = function(e) {
                            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                        }, c.totalDuration = function(t) {
                            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, c.repeat = function(t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, c.repeatDelay = function(t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, c.yoyo = function(t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, o
                    }, !0), s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                        var n = function(t) {
                                e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var i, n, r = this.vars;
                                for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                                l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                            },
                            r = i._internals,
                            o = n._internals = {},
                            a = r.isSelector,
                            l = r.isArray,
                            c = r.lazyTweens,
                            u = r.lazyRender,
                            h = s._gsDefine.globals,
                            f = function(t) {
                                var e, i = {};
                                for (e in t) i[e] = t[e];
                                return i
                            },
                            p = function(t, e, i) {
                                var n, r, o = t.cycle;
                                for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                delete t.cycle
                            },
                            d = o.pauseCallback = function() {},
                            m = function(t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            g = n.prototype = new e;
                        return n.version = "1.19.1", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                            var o = n.repeat && h.TweenMax || i;
                            return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                        }, g.from = function(t, e, n, r) {
                            return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                        }, g.fromTo = function(t, e, n, r, o) {
                            var s = r.repeat && h.TweenMax || i;
                            return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                        }, g.staggerTo = function(t, e, r, o, s, l, c, u) {
                            var h, d, g = new n({
                                    onComplete: l,
                                    onCompleteParams: c,
                                    callbackScope: u,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                v = r.cycle;
                            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && p(h.startAt, t, d)), v && (p(h, t, d), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[d], e, h, d * o);
                            return this.add(g, s)
                        }, g.staggerFrom = function(t, e, i, n, r, o, s, a) {
                            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                        }, g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                        }, g.call = function(t, e, n, r) {
                            return this.add(i.delayedCall(0, t, e, n), r)
                        }, g.set = function(t, e, n) {
                            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                        }, n.exportRoot = function(t, e) {
                            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                            var r, o, s = new n(t),
                                a = s._timeline;
                            for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                            return a.add(s, 0), s
                        }, g.add = function(r, o, s, a) {
                            var c, u, h, f, p, d;
                            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                                if (r instanceof Array || r && r.push && l(r)) {
                                    for (s = s || "normal", a = a || 0, c = o, u = r.length, h = 0; h < u; h++) l(f = r[h]) && (f = new n({
                                        tweens: f
                                    })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += a;
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof r) return this.addLabel(r, o);
                                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                                r = i.delayedCall(0, r)
                            }
                            if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                            return this
                        }, g.remove = function(e) {
                            if (e instanceof t) {
                                this._remove(e, !1);
                                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                            }
                            if (e instanceof Array || e && e.push && l(e)) {
                                for (var n = e.length; --n > -1;) this.remove(e[n]);
                                return this
                            }
                            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                        }, g._remove = function(t, i) {
                            return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, g.append = function(t, e) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                        }, g.insert = g.insertMultiple = function(t, e, i, n) {
                            return this.add(t, e || 0, i, n)
                        }, g.appendMultiple = function(t, e, i, n) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                        }, g.addLabel = function(t, e) {
                            return this._labels[t] = this._parseTimeOrLabel(e), this
                        }, g.addPause = function(t, e, n, r) {
                            var o = i.delayedCall(0, d, n, r || this);
                            return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                        }, g.removeLabel = function(t) {
                            return delete this._labels[t], this
                        }, g.getLabelTime = function(t) {
                            return null != this._labels[t] ? this._labels[t] : -1
                        }, g._parseTimeOrLabel = function(e, i, n, r) {
                            var o;
                            if (r instanceof t && r.timeline === this) this.remove(r);
                            else if (r && (r instanceof Array || r.push && l(r)))
                                for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                            else {
                                if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                            }
                            return Number(e) + i
                        }, g.seek = function(t, e) {
                            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                        }, g.stop = function() {
                            return this.paused(!0)
                        }, g.gotoAndPlay = function(t, e) {
                            return this.play(t, e)
                        }, g.gotoAndStop = function(t, e) {
                            return this.pause(t, e)
                        }, g.render = function(t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, r, o, s, a, l, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._time,
                                d = this._startTime,
                                m = this._timeScale,
                                g = this._paused;
                            if (t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                            else if (t < 1e-7)
                                if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                    t = 0, this._initted || (a = !0)
                                }
                            else {
                                if (this._hasPause && !this._forcingPlayhead && !e) {
                                    if (t >= p)
                                        for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                                    else
                                        for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                                    l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                this._totalTime = this._time = this._rawPrevTime = t
                            }
                            if (this._time !== p && this._first || i || a || l) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (h = this._time) >= p)
                                    for (n = this._first; n && (o = n._next, h === this._time && (!this._paused || g));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                else
                                    for (n = this._last; n && (o = n._prev, h === this._time && (!this._paused || g));) {
                                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                            if (l === n) {
                                                for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                                l = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), s && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                            }
                        }, g._hasPausedChild = function() {
                            for (var t = this._first; t;) {
                                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                                t = t._next
                            }
                            return !1
                        }, g.getChildren = function(t, e, n, r) {
                            r = r || -9999999999;
                            for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                            return o
                        }, g.getTweensOf = function(t, e) {
                            var n, r, o = this._gc,
                                s = [],
                                a = 0;
                            for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                            return o && this._enabled(!1, !0), s
                        }, g.recent = function() {
                            return this._recent
                        }, g._contains = function(t) {
                            for (var e = t.timeline; e;) {
                                if (e === this) return !0;
                                e = e.timeline
                            }
                            return !1
                        }, g.shiftChildren = function(t, e, i) {
                            i = i || 0;
                            for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                            if (e)
                                for (n in o) o[n] >= i && (o[n] += t);
                            return this._uncache(!0)
                        }, g._kill = function(t, e) {
                            if (!t && !e) return this._enabled(!1, !1);
                            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                            return r
                        }, g.clear = function(t) {
                            var e = this.getChildren(!1, !0, !0),
                                i = e.length;
                            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                            return !1 !== t && (this._labels = {}), this._uncache(!0)
                        }, g.invalidate = function() {
                            for (var e = this._first; e;) e.invalidate(), e = e._next;
                            return t.prototype.invalidate.call(this)
                        }, g._enabled = function(t, i) {
                            if (t === this._gc)
                                for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                            return e.prototype._enabled.call(this, t, i)
                        }, g.totalTime = function(e, i, n) {
                            this._forcingPlayhead = !0;
                            var r = t.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, r
                        }, g.duration = function(t) {
                            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, g.totalDuration = function(t) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                    this._duration = this._totalDuration = n, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                        }, g.paused = function(e) {
                            if (!e)
                                for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                            return t.prototype.paused.apply(this, arguments)
                        }, g.usesFrames = function() {
                            for (var e = this._timeline; e._timeline;) e = e._timeline;
                            return e === t._rootFramesTimeline
                        }, g.rawTime = function(t) {
                            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                        }, n
                    }, !0), s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                        var n = function(e) {
                                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                            },
                            r = e._internals,
                            o = r.lazyTweens,
                            a = r.lazyRender,
                            l = s._gsDefine.globals,
                            c = new i(null, null, 1, 0),
                            u = n.prototype = new t;
                        return u.constructor = n, u.kill()._gc = !1, n.version = "1.19.1", u.invalidate = function() {
                            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                        }, u.addCallback = function(t, i, n, r) {
                            return this.add(e.delayedCall(0, t, n, r), i)
                        }, u.removeCallback = function(t, e) {
                            if (t)
                                if (null == e) this._kill(null, t);
                                else
                                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                            return this
                        }, u.removePause = function(e) {
                            return this.removeCallback(t._internals.pauseCallback, e)
                        }, u.tweenTo = function(t, i) {
                            i = i || {};
                            var n, r, o, s = {
                                    ease: c,
                                    useFrames: this.usesFrames(),
                                    immediateRender: !1
                                },
                                a = i.repeat && l.TweenMax || e;
                            for (r in i) s[r] = i[r];
                            return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function() {
                                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                            }, o
                        }, u.tweenFromTo = function(t, e, i) {
                            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [t],
                                callbackScope: this
                            }, i.immediateRender = !1 !== i.immediateRender;
                            var n = this.tweenTo(e, i);
                            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                        }, u.render = function(t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, r, s, l, c, u, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                                d = this._duration,
                                m = this._time,
                                g = this._totalTime,
                                v = this._startTime,
                                _ = this._timeScale,
                                y = this._rawPrevTime,
                                b = this._paused,
                                w = this._cycle;
                            if (t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (c = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                            else if (t < 1e-7)
                                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                    t = 0, this._initted || (c = !0)
                                }
                            else if (0 === d && y < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < d) {
                                if ((t = this._time) >= m || this._repeat && w !== this._cycle)
                                    for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                                h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            if (this._cycle !== w && !this._locked) {
                                var T = this._yoyo && 0 != (1 & w),
                                    x = T === (this._yoyo && 0 != (1 & this._cycle)),
                                    S = this._totalTime,
                                    k = this._cycle,
                                    C = this._rawPrevTime,
                                    P = this._time;
                                if (this._totalTime = w * d, this._cycle < w ? T = !T : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), m !== this._time) return;
                                if (x && (this._cycle = w, this._locked = !0, m = T ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                                this._time = P, this._totalTime = S, this._cycle = k, this._rawPrevTime = C
                            }
                            if (!(this._time !== m && this._first || i || c || h)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= m)
                                for (n = this._first; n && (s = n._next, f === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                            else
                                for (n = this._last; n && (s = n._prev, f === this._time && (!this._paused || b));) {
                                    if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                        if (h === n) {
                                            for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                            h = null, this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = s
                                }
                            this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                        }, u.getActive = function(t, e, i) {
                            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                            var n, r, o = [],
                                s = this.getChildren(t, e, i),
                                a = 0,
                                l = s.length;
                            for (n = 0; n < l; n++) r = s[n], r.isActive() && (o[a++] = r);
                            return o
                        }, u.getLabelAfter = function(t) {
                            t || 0 !== t && (t = this._time);
                            var e, i = this.getLabelsArray(),
                                n = i.length;
                            for (e = 0; e < n; e++)
                                if (i[e].time > t) return i[e].name;
                            return null
                        }, u.getLabelBefore = function(t) {
                            null == t && (t = this._time);
                            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                                if (e[i].time < t) return e[i].name;
                            return null
                        }, u.getLabelsArray = function() {
                            var t, e = [],
                                i = 0;
                            for (t in this._labels) e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                            return e.sort(function(t, e) {
                                return t.time - e.time
                            }), e
                        }, u.invalidate = function() {
                            return this._locked = !1, t.prototype.invalidate.call(this)
                        }, u.progress = function(t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, u.totalProgress = function(t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, u.totalDuration = function(e) {
                            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        }, u.time = function(t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, u.repeat = function(t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, u.repeatDelay = function(t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, u.yoyo = function(t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, u.currentLabel = function(t) {
                            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                        }, n
                    }, !0),
                    function() {
                        var t = 180 / Math.PI,
                            e = [],
                            i = [],
                            n = [],
                            r = {},
                            o = s._gsDefine.globals,
                            a = function(t, e, i, n) {
                                i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                            },
                            l = function(t, e, i, n) {
                                var r = {
                                        a: t
                                    },
                                    o = {},
                                    s = {},
                                    a = {
                                        c: n
                                    },
                                    l = (t + e) / 2,
                                    c = (e + i) / 2,
                                    u = (i + n) / 2,
                                    h = (l + c) / 2,
                                    f = (c + u) / 2,
                                    p = (f - h) / 8;
                                return r.b = l + (t - l) / 4, o.b = h + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - p, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                            },
                            c = function(t, r, o, s, a) {
                                var c, u, h, f, p, d, m, g, v, _, y, b, w, T = t.length - 1,
                                    x = 0,
                                    S = t[0].a;
                                for (c = 0; c < T; c++) p = t[x], u = p.a, h = p.d, f = t[x + 1].d, a ? (y = e[c], b = i[c], w = (b + y) * r * .25 / (s ? .5 : n[c] || .5), d = h - (h - u) * (s ? .5 * r : 0 !== y ? w / y : 0), m = h + (f - h) * (s ? .5 * r : 0 !== b ? w / b : 0), g = h - (d + ((m - d) * (3 * y / (y + b) + .5) / 4 || 0))) : (d = h - (h - u) * r * .5, m = h + (f - h) * r * .5, g = h - (d + m) / 2), d += g, m += g, p.c = v = d, p.b = 0 !== c ? S : S = p.a + .6 * (p.c - p.a), p.da = h - u, p.ca = v - u, p.ba = S - u, o ? (_ = l(u, S, v, h), t.splice(x, 1, _[0], _[1], _[2], _[3]), x += 4) : x++, S = m;
                                p = t[x], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, o && (_ = l(p.a, S, p.c, p.d), t.splice(x, 1, _[0], _[1], _[2], _[3]))
                            },
                            u = function(t, n, r, o) {
                                var s, l, c, u, h, f, p = [];
                                if (o)
                                    for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
                                if ((s = t.length - 2) < 0) return p[0] = new a(t[0][n], 0, 0, t[s < -1 ? 0 : 1][n]), p;
                                for (l = 0; l < s; l++) c = t[l][n], u = t[l + 1][n], p[l] = new a(c, 0, 0, u), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                                return p[l] = new a(t[l][n], 0, 0, t[l + 1][n]), p
                            },
                            h = function(t, o, s, a, l, h) {
                                var f, p, d, m, g, v, _, y, b = {},
                                    w = [],
                                    T = h || t[0];
                                l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1);
                                for (p in t[0]) w.push(p);
                                if (t.length > 1) {
                                    for (y = t[t.length - 1], _ = !0, f = w.length; --f > -1;)
                                        if (p = w[f], Math.abs(T[p] - y[p]) > .05) {
                                            _ = !1;
                                            break
                                        } _ && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
                                }
                                for (e.length = i.length = n.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== l.indexOf("," + p + ","), b[p] = u(t, p, r[p], h);
                                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                                if (!a) {
                                    for (f = w.length; --f > -1;)
                                        if (r[p])
                                            for (d = b[w[f]], v = d.length - 1, m = 0; m < v; m++) g = d[m + 1].da / i[m] + d[m].da / e[m] || 0, n[m] = (n[m] || 0) + g * g;
                                    for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                                }
                                for (f = w.length, m = s ? 4 : 1; --f > -1;) p = w[f], d = b[p], c(d, o, s, a, r[p]), _ && (d.splice(0, m), d.splice(d.length - m, m));
                                return b
                            },
                            f = function(t, e, i) {
                                e = e || "soft";
                                var n, r, o, s, l, c, u, h, f, p, d, m = {},
                                    g = "cubic" === e ? 3 : 2,
                                    v = "soft" === e,
                                    _ = [];
                                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                                for (f in t[0]) _.push(f);
                                for (c = _.length; --c > -1;) {
                                    for (f = _[c], m[f] = l = [], p = 0, h = t.length, u = 0; u < h; u++) n = null == i ? t[u][f] : "string" == typeof(d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && u > 1 && u < h - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                                    for (h = p - g + 1, p = 0, u = 0; u < h; u += g) n = l[u], r = l[u + 1], o = l[u + 2], s = 2 === g ? 0 : l[u + 3], l[p++] = d = 3 === g ? new a(n, r, o, s) : new a(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                                    l.length = p
                                }
                                return m
                            },
                            p = function(t, e, i) {
                                for (var n, r, o, s, a, l, c, u, h, f, p, d = 1 / i, m = t.length; --m > -1;)
                                    for (f = t[m], o = f.a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; u <= i; u++) c = d * u, h = 1 - c, n = r - (r = (c * c * s + 3 * h * (c * a + h * l)) * c), p = m * i + u - 1, e[p] = (e[p] || 0) + n * n
                            },
                            d = function(t, e) {
                                e = e >> 0 || 6;
                                var i, n, r, o, s = [],
                                    a = [],
                                    l = 0,
                                    c = 0,
                                    u = e - 1,
                                    h = [],
                                    f = [];
                                for (i in t) p(t[i], s, e);
                                for (r = s.length, n = 0; n < r; n++) l += Math.sqrt(s[n]), o = n % e, f[o] = l, o === u && (c += l, o = n / e >> 0, h[o] = f, a[o] = c, l = 0, f = []);
                                return {
                                    length: c,
                                    lengths: a,
                                    segments: h
                                }
                            },
                            m = s._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.7",
                                API: 2,
                                global: !0,
                                init: function(t, e, i) {
                                    this._target = t, e instanceof Array && (e = {
                                        values: e
                                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                    var n, r, o, s, a, l = e.values || [],
                                        c = {},
                                        u = l[0],
                                        p = e.autoRotate || i.vars.orientToBezier;
                                    this._autoRotate = p ? p instanceof Array ? p : [
                                        ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                                    ] : null;
                                    for (n in u) this._props.push(n);
                                    for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                        var m = d(this._beziers, this._timeRes);
                                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (p = this._autoRotate)
                                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                                            for (s = 0; s < 3; s++) n = p[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                            n = p[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                        }
                                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function(e) {
                                    var i, n, r, o, s, a, l, c, u, h, f = this._segCount,
                                        p = this._func,
                                        d = this._target,
                                        m = e !== this._startRatio;
                                    if (this._timeRes) {
                                        if (u = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                            for (c = f - 1; r < c && (this._l2 = u[++r]) <= e;);
                                            this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                        } else if (e < this._l1 && r > 0) {
                                            for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                        }
                                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                            for (c = h.length - 1; r < c && (this._s2 = h[++r]) <= e;);
                                            this._s1 = h[r - 1], this._si = r
                                        } else if (e < this._s1 && r > 0) {
                                            for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                        }
                                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                    } else i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                                    for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l;
                                    if (this._autoRotate) {
                                        var g, v, _, y, b, w, T, x = this._autoRotate;
                                        for (r = x.length; --r > -1;) o = x[r][2], w = x[r][3] || 0, T = !0 === x[r][4] ? 1 : t, s = this._beziers[x[r][0]], g = this._beziers[x[r][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, y = s.b + (s.c - s.b) * a, v += (y - v) * a, y += (s.c + (s.d - s.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, _ += (b - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * T + w : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l)
                                    }
                                }
                            }),
                            g = m.prototype;
                        m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                        }, m._cssRegister = function() {
                            var t = o.CSSPlugin;
                            if (t) {
                                var e = t._internals,
                                    i = e._parseToProxy,
                                    n = e._setPluginRatio,
                                    r = e.CSSPropTween;
                                e._registerComplexSpecialProp("bezier", {
                                    parser: function(t, e, o, s, a, l) {
                                        e instanceof Array && (e = {
                                            values: e
                                        }), l = new m;
                                        var c, u, h, f = e.values,
                                            p = f.length - 1,
                                            d = [],
                                            g = {};
                                        if (p < 0) return a;
                                        for (c = 0; c <= p; c++) h = i(t, f[c], s, a, l, p !== c), d[c] = h.end;
                                        for (u in e) g[u] = e[u];
                                        return g.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                            ["left", "top", "rotation", c, !1]
                                        ] : null != h.end.x && [
                                            ["x", "y", "rotation", c, !1]
                                        ]), g.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, s._tween), a
                                    }
                                })
                            }
                        }, g._mod = function(t) {
                            for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                        }, g._kill = function(t) {
                            var e, i, n = this._props;
                            for (e in this._beziers)
                                if (e in t)
                                    for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                            if (n = this._autoRotate)
                                for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                            return this._super._kill.call(this, t)
                        }
                    }(), s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                        var i, n, r, o, a = function() {
                                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                            },
                            l = s._gsDefine.globals,
                            c = {},
                            u = a.prototype = new t("css");
                        u.constructor = a, a.version = "1.19.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, u = "px", a.suffixMap = {
                            top: u,
                            right: u,
                            bottom: u,
                            left: u,
                            width: u,
                            height: u,
                            fontSize: u,
                            padding: u,
                            margin: u,
                            perspective: u,
                            lineHeight: ""
                        };
                        var h, f, p, d, m, g, v, _, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            x = /(?:\d|\-|\+|=|#|\.)*/g,
                            S = /opacity *= *([^)]*)/i,
                            k = /opacity:([^;]*)/i,
                            C = /^(rgb|hsl)/,
                            P = function(t, e) {
                                return e.toUpperCase()
                            },
                            A = /(?:Left|Right|Width)/i,
                            O = /,(?=[^\)]*(?:\(|$))/gi,
                            E = /[\s,\(]/i,
                            $ = Math.PI / 180,
                            D = 180 / Math.PI,
                            R = {},
                            M = {
                                style: {}
                            },
                            j = s.document || {
                                createElement: function() {
                                    return M
                                }
                            },
                            I = function(t, e) {
                                return j.createElementNS ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                            },
                            L = I("div"),
                            F = I("img"),
                            z = a._internals = {
                                _specialProps: c
                            },
                            N = (s.navigator || {}).userAgent || "",
                            B = function() {
                                var t = N.indexOf("Android"),
                                    e = I("a");
                                return p = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === t || parseFloat(N.substr(t + 8, 2)) > 3), m = p && parseFloat(N.substr(N.indexOf("Version/") + 8, 2)) < 6, d = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                            }(),
                            H = function(t) {
                                return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            W = function(t) {
                                s.console && console.log(t)
                            },
                            X = "",
                            U = "",
                            G = function(t, e) {
                                e = e || L;
                                var i, n, r = e.style;
                                if (void 0 !== r[t]) return t;
                                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                                return n >= 0 ? (U = 3 === n ? "ms" : i[n], X = "-" + U.toLowerCase() + "-", U + t) : null
                            },
                            q = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                            Y = a.getStyle = function(t, e, i, n, r) {
                                var o;
                                return B || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || q(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : H(t)
                            },
                            V = z.convertToPixels = function(t, i, n, r, o) {
                                if ("px" === r || !r) return n;
                                if ("auto" === r || !n) return 0;
                                var s, l, c, u = A.test(i),
                                    h = t,
                                    f = L.style,
                                    p = n < 0,
                                    d = 1 === n;
                                if (p && (n = -n), d && (n *= 100), "%" === r && -1 !== i.indexOf("border")) s = n / 100 * (u ? t.clientWidth : t.clientHeight);
                                else {
                                    if (f.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                    else {
                                        if (h = t.parentNode || j.body, l = h._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                        f[u ? "width" : "height"] = n + r
                                    }
                                    h.appendChild(L), s = parseFloat(L[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(L), u && "%" === r && !1 !== a.cacheWidths && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = s / n * 100), 0 !== s || o || (s = V(t, i, n, r, !0))
                                }
                                return d && (s /= 100), p ? -s : s
                            },
                            Q = z.calculateOffset = function(t, e, i) {
                                if ("absolute" !== Y(t, "position", i)) return 0;
                                var n = "left" === e ? "Left" : "Top",
                                    r = Y(t, "margin" + n, i);
                                return t["offset" + n] - (V(t, e, parseFloat(r), r.replace(x, "")) || 0)
                            },
                            K = function(t, e) {
                                var i, n, r, o = {};
                                if (e = e || q(t, null))
                                    if (i = e.length)
                                        for (; --i > -1;) r = e[i], -1 !== r.indexOf("-transform") && St !== r || (o[r.replace(/-([a-z])/gi, P)] = e.getPropertyValue(r));
                                    else
                                        for (i in e) - 1 !== i.indexOf("Transform") && xt !== i || (o[i] = e[i]);
                                else if (e = t.currentStyle || t.style)
                                    for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(/-([a-z])/gi, P)] = e[i]);
                                return B || (o.opacity = H(t)), n = Ft(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Ct && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                            },
                            Z = function(t, e, i, n, r) {
                                var o, s, a, l = {},
                                    c = t.style;
                                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(T, "") ? o : 0 : Q(t, s), void 0 !== c[s] && (a = new pt(c, s, c[s], a))));
                                if (n)
                                    for (s in n) "className" !== s && (l[s] = n[s]);
                                return {
                                    difs: l,
                                    firstMPT: a
                                }
                            },
                            J = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            tt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            et = function(t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || q(t))[e] || 0;
                                if (t.getCTM && jt(t)) return t.getBBox()[e] || 0;
                                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                    r = J[e],
                                    o = r.length;
                                for (i = i || q(t, null); --o > -1;) n -= parseFloat(Y(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[o] + "Width", i, !0)) || 0;
                                return n
                            },
                            it = function(t, e) {
                                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                null != t && "" !== t || (t = "0 0");
                                var i, n = t.split(" "),
                                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                                    o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                                if (n.length > 3 && !e) {
                                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(it(n[i]));
                                    return t.join(",")
                                }
                                return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(T, "")), e.oy = parseFloat(o.replace(T, "")), e.v = t), e || t
                            },
                            nt = function(t, e) {
                                return "function" == typeof t && (t = t(_, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                            },
                            rt = function(t, e) {
                                return "function" == typeof t && (t = t(_, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                            },
                            ot = function(t, e, i, n) {
                                var r, o, s, a, l;
                                return "function" == typeof t && (t = t(_, v)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r) !== s % (r / 2) && (s = s < 0 ? s + r : s - r), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a
                            },
                            st = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            at = function(t, e, i) {
                                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                            },
                            lt = a.parseColor = function(t, e) {
                                var i, n, r, o, s, a, l, c, u, h, f;
                                if (t)
                                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else {
                                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), st[t]) i = st[t];
                                        else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                        else if ("hsl" === t.substr(0, 3))
                                            if (i = f = t.match(y), e) {
                                                if (-1 !== t.indexOf("=")) return t.match(b)
                                            } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = at(s + 1 / 3, n, r), i[1] = at(s, n, r), i[2] = at(s - 1 / 3, n, r);
                                        else i = t.match(y) || st.transparent;
                                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                    }
                                else i = st.black;
                                return e && !f && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), l = (c + u) / 2, c === u ? s = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === n ? (r - o) / h + (r < o ? 6 : 0) : c === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                            },
                            ct = function(t, e) {
                                var i, n, r, o = t.match(ut) || [],
                                    s = 0,
                                    a = o.length ? "" : t;
                                for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = lt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                                return a + t.substr(s)
                            },
                            ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (u in st) ut += "|" + u + "\\b";
                        ut = new RegExp(ut + ")", "gi"), a.colorStringFilter = function(t) {
                            var e, i = t[0] + t[1];
                            ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e)), ut.lastIndex = 0
                        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                        var ht = function(t, e, i, n) {
                                if (null == t) return function(t) {
                                    return t
                                };
                                var r, o = e ? (t.match(ut) || [""])[0] : "",
                                    s = t.split(o).join("").match(w) || [],
                                    a = t.substr(0, t.indexOf(s[0])),
                                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                    c = -1 !== t.indexOf(" ") ? " " : ",",
                                    u = s.length,
                                    h = u > 0 ? s[0].replace(y, "") : "";
                                return u ? r = e ? function(t) {
                                    var e, f, p, d;
                                    if ("number" == typeof t) t += h;
                                    else if (n && O.test(t)) {
                                        for (d = t.replace(O, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                        return d.join(",")
                                    }
                                    if (e = (t.match(ut) || [o])[0], f = t.split(e).join("").match(w) || [], p = f.length, u > p--)
                                        for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : s[p];
                                    return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                                } : function(t) {
                                    var e, o, f;
                                    if ("number" == typeof t) t += h;
                                    else if (n && O.test(t)) {
                                        for (o = t.replace(O, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                                        return o.join(",")
                                    }
                                    if (e = t.match(w) || [], f = e.length, u > f--)
                                        for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : s[f];
                                    return a + e.join(c) + l
                                } : function(t) {
                                    return t
                                }
                            },
                            ft = function(t) {
                                return t = t.split(","),
                                    function(e, i, n, r, o, s, a) {
                                        var l, c = (i + "").split(" ");
                                        for (a = {}, l = 0; l < 4; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                        return r.parse(e, a, o, s)
                                    }
                            },
                            pt = (z._setPluginRatio = function(t) {
                                this.plugin.setRatio(t);
                                for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                    for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                        if (i = l.t, i.type) {
                                            if (1 === i.type) {
                                                for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                                i[o] = r
                                            }
                                        } else i[o] = i.s + i.xs0;
                                        l = l._next
                                    }
                            }, function(t, e, i, n, r) {
                                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                            }),
                            dt = (z._parseToProxy = function(t, e, i, n, r, o) {
                                var s, a, l, c, u, h = n,
                                    f = {},
                                    p = {},
                                    d = i._transform,
                                    m = R;
                                for (i._transform = null, R = e, n = u = i.parse(t, e, n, r), R = m, o && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                                    if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, o || (c = new pt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                        for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], o || (c = new pt(n, l, a, c, n.rxp[l]));
                                    n = n._next
                                }
                                return {
                                    proxy: f,
                                    end: p,
                                    firstMPT: c,
                                    pt: u
                                }
                            }, z.CSSPropTween = function(t, e, n, r, s, a, l, c, u, h, f) {
                                this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof dt || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
                            }),
                            mt = function(t, e, i, n, r, o) {
                                var s = new dt(t, e, i, n - i, r, -1, o);
                                return s.b = i, s.e = s.xs0 = n, s
                            },
                            gt = a.parseComplex = function(t, e, i, n, r, o, s, l, c, u) {
                                i = i || o || "", "function" == typeof n && (n = n(_, v)), s = new dt(t, e, 0, 0, s, u ? 2 : 1, null, !1, l, i, n), n += "", r && ut.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                                var f, p, d, m, g, w, T, x, S, k, C, P, A, E = i.split(", ").join(",").split(" "),
                                    $ = n.split(", ").join(",").split(" "),
                                    D = E.length,
                                    R = !1 !== h;
                                for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (E = E.join(" ").replace(O, ", ").split(" "), $ = $.join(" ").replace(O, ", ").split(" "), D = E.length), D !== $.length && (E = (o || "").split(" "), D = E.length), s.plugin = c, s.setRatio = u, ut.lastIndex = 0, f = 0; f < D; f++)
                                    if (m = E[f], g = $[f], (x = parseFloat(m)) || 0 === x) s.appendXtra("", x, nt(g, x), g.replace(b, ""), R && -1 !== g.indexOf("px"), !0);
                                    else if (r && ut.test(m)) P = g.indexOf(")") + 1, P = ")" + (P ? g.substr(P) : ""), A = -1 !== g.indexOf("hsl") && B, m = lt(m, A), g = lt(g, A), S = m.length + g.length > 6, S && !B && 0 === g[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split($[f]).join("transparent")) : (B || (S = !1), A ? s.appendXtra(S ? "hsla(" : "hsl(", m[0], nt(g[0], m[0]), ",", !1, !0).appendXtra("", m[1], nt(g[1], m[1]), "%,", !1).appendXtra("", m[2], nt(g[2], m[2]), S ? "%," : "%" + P, !1) : s.appendXtra(S ? "rgba(" : "rgb(", m[0], g[0] - m[0], ",", !0, !0).appendXtra("", m[1], g[1] - m[1], ",", !0).appendXtra("", m[2], g[2] - m[2], S ? "," : P, !0), S && (m = m.length < 4 ? 1 : m[3], s.appendXtra("", m, (g.length < 4 ? 1 : g[3]) - m, P, !1))), ut.lastIndex = 0;
                                else if (w = m.match(y)) {
                                    if (!(T = g.match(b)) || T.length !== w.length) return s;
                                    for (d = 0, p = 0; p < w.length; p++) C = w[p], k = m.indexOf(C, d), s.appendXtra(m.substr(d, k - d), Number(C), nt(T[p], C), "", R && "px" === m.substr(k + C.length, 2), 0 === p), d = k + C.length;
                                    s["xs" + s.l] += m.substr(d)
                                } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + g : g;
                                if (-1 !== n.indexOf("=") && s.data) {
                                    for (P = s.xs0 + s.data.s, f = 1; f < s.l; f++) P += s["xs" + f] + s.data["xn" + f];
                                    s.e = P + s["xs" + f]
                                }
                                return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                            },
                            vt = 9;
                        for (u = dt.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, o) {
                            var s = this,
                                a = s.l;
                            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new dt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                                s: e + i
                            }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                        };
                        var _t = function(t, e) {
                                e = e || {}, this.p = e.prefix ? G(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                            },
                            yt = z._registerComplexSpecialProp = function(t, e, i) {
                                "object" != typeof e && (e = {
                                    parser: i
                                });
                                var n, r = t.split(","),
                                    o = e.defaultValue;
                                for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new _t(r[n], e)
                            },
                            bt = z._registerPluginProp = function(t) {
                                if (!c[t]) {
                                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                    yt(t, {
                                        parser: function(t, i, n, r, o, s, a) {
                                            var u = l.com.greensock.plugins[e];
                                            return u ? (u._cssRegister(), c[n].parse(t, i, n, r, o, s, a)) : (W("Error: " + e + " js file not loaded."), o)
                                        }
                                    })
                                }
                            };
                        u = _t.prototype, u.parseComplex = function(t, e, i, n, r, o) {
                            var s, a, l, c, u, h, f = this.keyword;
                            if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : f && (a = [e], l = [i])), l) {
                                for (c = l.length > a.length ? l.length : a.length, s = 0; s < c; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && (u = e.indexOf(f), h = i.indexOf(f), u !== h && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === u && (a[s] += " " + f)));
                                e = a.join(", "), i = l.join(", ")
                            }
                            return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                        }, u.parse = function(t, e, i, n, o, s, a) {
                            return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                        }, a.registerSpecialProp = function(t, e, i) {
                            yt(t, {
                                parser: function(t, n, r, o, s, a, l) {
                                    var c = new dt(t, r, 0, 0, s, 2, r, !1, i);
                                    return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                                },
                                priority: i
                            })
                        }, a.useSVGTransformAttr = !0;
                        var wt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            xt = G("transform"),
                            St = X + "transform",
                            kt = G("transformOrigin"),
                            Ct = null !== G("perspective"),
                            Pt = z.Transform = function() {
                                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Ct) && (a.defaultForce3D || "auto")
                            },
                            At = s.SVGElement,
                            Ot = function(t, e, i) {
                                var n, r = j.createElementNS("http://www.w3.org/2000/svg", t);
                                for (n in i) r.setAttributeNS(null, n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i[n]);
                                return e.appendChild(r), r
                            },
                            Et = j.documentElement || {},
                            $t = function() {
                                var t, e, i, n = g || /Android/i.test(N) && !s.chrome;
                                return j.createElementNS && !n && (t = Ot("svg", Et), e = Ot("rect", t, {
                                    width: 100,
                                    height: 50,
                                    x: 100
                                }), i = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[xt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && Ct), Et.removeChild(t)), n
                            }(),
                            Dt = function(t, e, i, n, r, o) {
                                var s, l, c, u, h, f, p, d, m, g, v, _, y, b, w = t._gsTransform,
                                    T = Lt(t, !0);
                                w && (y = w.xOrigin, b = w.yOrigin), (!n || (s = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0
                                }), e = it(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && T !== It && (f = T[0], p = T[1], d = T[2], m = T[3], g = T[4], v = T[5], (_ = f * m - p * d) && (l = u * (m / _) + h * (-d / _) + (d * v - m * g) / _, c = u * (-p / _) + h * (f / _) - (f * v - p * g) / _, u = i.xOrigin = s[0] = l, h = i.yOrigin = s[1] = c)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = u - y, c = h - b, w.xOffset += l * T[0] + c * T[2] - l, w.yOffset += l * T[1] + c * T[3] - c) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
                            },
                            Rt = function(t) {
                                var e, i = I("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                    n = this.parentNode,
                                    r = this.nextSibling,
                                    o = this.style.cssText;
                                if (Et.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Rt
                                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                return r ? n.insertBefore(this, r) : n.appendChild(this), Et.removeChild(i), this.style.cssText = o, e
                            },
                            Mt = function(t) {
                                try {
                                    return t.getBBox()
                                } catch (e) {
                                    return Rt.call(t, !0)
                                }
                            },
                            jt = function(t) {
                                return !(!(At && t.getCTM && Mt(t)) || t.parentNode && !t.ownerSVGElement)
                            },
                            It = [1, 0, 0, 1, 0, 0],
                            Lt = function(t, e) {
                                var i, n, r, o, s, a, l = t._gsTransform || new Pt,
                                    c = t.style;
                                if (xt ? n = Y(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && xt && ((a = "none" === q(t).display) || !t.parentNode) && (a && (o = c.display, c.display = "block"), t.parentNode || (s = 1, Et.appendChild(t)), n = Y(t, St, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Ht(c, "display"), s && Et.removeChild(t)), (l.svg || t.getCTM && jt(t)) && (i && -1 !== (c[xt] + "").indexOf("matrix") && (n = c[xt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It;
                                for (r = (n || "").match(y) || [], vt = r.length; --vt > -1;) o = Number(r[vt]), r[vt] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                            },
                            Ft = z.getTransform = function(t, i, n, r) {
                                if (t._gsTransform && n && !r) return t._gsTransform;
                                var o, s, l, c, u, h, f = n ? t._gsTransform || new Pt : new Pt,
                                    p = f.scaleX < 0,
                                    d = Ct ? parseFloat(Y(t, kt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                                    m = parseFloat(a.defaultTransformPerspective) || 0;
                                if (f.svg = !(!t.getCTM || !jt(t)), f.svg && (Dt(t, Y(t, kt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), wt = a.useSVGTransformAttr || $t), (o = Lt(t)) !== It) {
                                    if (16 === o.length) {
                                        var g, v, _, y, b, w = o[0],
                                            T = o[1],
                                            x = o[2],
                                            S = o[3],
                                            k = o[4],
                                            C = o[5],
                                            P = o[6],
                                            A = o[7],
                                            O = o[8],
                                            E = o[9],
                                            $ = o[10],
                                            R = o[12],
                                            M = o[13],
                                            j = o[14],
                                            I = o[11],
                                            L = Math.atan2(P, $);
                                        f.zOrigin && (j = -f.zOrigin, R = O * j - o[12], M = E * j - o[13], j = $ * j + f.zOrigin - o[14]), f.rotationX = L * D, L && (y = Math.cos(-L), b = Math.sin(-L), g = k * y + O * b, v = C * y + E * b, _ = P * y + $ * b, O = k * -b + O * y, E = C * -b + E * y, $ = P * -b + $ * y, I = A * -b + I * y, k = g, C = v, P = _), L = Math.atan2(-x, $), f.rotationY = L * D, L && (y = Math.cos(-L), b = Math.sin(-L), g = w * y - O * b, v = T * y - E * b, _ = x * y - $ * b, E = T * b + E * y, $ = x * b + $ * y, I = S * b + I * y, w = g, T = v, x = _), L = Math.atan2(T, w), f.rotation = L * D, L && (y = Math.cos(-L), b = Math.sin(-L), w = w * y + k * b, v = T * y + C * b, C = T * -b + C * y, P = x * -b + P * y, T = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (1e5 * Math.sqrt(w * w + T * T) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(C * C + E * E) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(P * P + $ * $) + .5 | 0) / 1e5, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || C ? Math.atan2(k, C) * D + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = I ? 1 / (I < 0 ? -I : I) : 0, f.x = R, f.y = M, f.z = j, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * C))
                                    } else if (!Ct || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                                        var F = o.length >= 6,
                                            z = F ? o[0] : 1,
                                            N = o[1] || 0,
                                            B = o[2] || 0,
                                            H = F ? o[3] : 1;
                                        f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(z * z + N * N), c = Math.sqrt(H * H + B * B), u = z || N ? Math.atan2(N, z) * D : f.rotation || 0, h = B || H ? Math.atan2(B, H) * D + u : f.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (p ? (l *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (c *= -1, h += h <= 0 ? 180 : -180)), f.scaleX = l, f.scaleY = c, f.rotation = u, f.skewX = h, Ct && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * z + f.yOrigin * B), f.y -= f.yOrigin - (f.xOrigin * N + f.yOrigin * H))
                                    }
                                    f.zOrigin = d;
                                    for (s in f) f[s] < 2e-5 && f[s] > -2e-5 && (f[s] = 0)
                                }
                                return n && (t._gsTransform = f, f.svg && (wt && t.style[xt] ? e.delayedCall(.001, function() {
                                    Ht(t.style, xt)
                                }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                    t.removeAttribute("transform")
                                }))), f
                            },
                            zt = function(t) {
                                var e, i, n = this.data,
                                    r = -n.rotation * $,
                                    o = r + n.skewX * $,
                                    s = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                                    a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                                    l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                                    c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                                    u = this.t.style,
                                    h = this.t.currentStyle;
                                if (h) {
                                    i = a, a = -l, l = -i, e = h.filter, u.filter = "";
                                    var f, p, d = this.t.offsetWidth,
                                        m = this.t.offsetHeight,
                                        v = "absolute" !== h.position,
                                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + l + ", M22=" + c,
                                        y = n.x + d * n.xPercent / 100,
                                        b = n.y + m * n.yPercent / 100;
                                    if (null != n.ox && (f = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, p = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, y += f - (f * s + p * a), b += p - (f * l + p * c)), v ? (f = d / 2, p = m / 2, _ += ", Dx=" + (f - (f * s + p * a) + y) + ", Dy=" + (p - (f * l + p * c) + b) + ")") : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, _) : u.filter = _ + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === l && 1 === c && (v && -1 === _.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                        var w, T, k, C = g < 8 ? 1 : -1;
                                        for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((s < 0 ? -s : s) * d + (a < 0 ? -a : a) * m)) / 2 + y), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (l < 0 ? -l : l) * d)) / 2 + b), vt = 0; vt < 4; vt++) T = tt[vt], w = h[T], i = -1 !== w.indexOf("px") ? parseFloat(w) : V(this.t, T, parseFloat(w), w.replace(x, "")) || 0, k = i !== n[T] ? vt < 2 ? -n.ieOffsetX : -n.ieOffsetY : vt < 2 ? f - n.ieOffsetX : p - n.ieOffsetY, u[T] = (n[T] = Math.round(i - k * (0 === vt || 2 === vt ? 1 : C))) + "px"
                                    }
                                }
                            },
                            Nt = z.set3DTransformRatio = z.setTransformRatio = function(t) {
                                var e, i, n, r, o, s, a, l, c, u, h, f, p, m, g, v, _, y, b, w, T, x, S, k = this.data,
                                    C = this.t.style,
                                    P = k.rotation,
                                    A = k.rotationX,
                                    O = k.rotationY,
                                    E = k.scaleX,
                                    D = k.scaleY,
                                    R = k.scaleZ,
                                    M = k.x,
                                    j = k.y,
                                    I = k.z,
                                    L = k.svg,
                                    F = k.perspective,
                                    z = k.force3D,
                                    N = k.skewY,
                                    B = k.skewX;
                                if (N && (B += N, P += N), ((1 === t || 0 === t) && "auto" === z && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !z) && !I && !F && !O && !A && 1 === R || wt && L || !Ct) return void(P || B || L ? (P *= $, x = B * $, S = 1e5, i = Math.cos(P) * E, o = Math.sin(P) * E, n = Math.sin(P - x) * -D, s = Math.cos(P - x) * D, x && "simple" === k.skewType && (e = Math.tan(x - N * $), e = Math.sqrt(1 + e * e), n *= e, s *= e, N && (e = Math.tan(N * $), e = Math.sqrt(1 + e * e), i *= e, o *= e)), L && (M += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, j += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, wt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), M += .01 * k.xPercent * g.width, j += .01 * k.yPercent * g.height), g = 1e-6, M < g && M > -g && (M = 0), j < g && j > -g && (j = 0)), b = (i * S | 0) / S + "," + (o * S | 0) / S + "," + (n * S | 0) / S + "," + (s * S | 0) / S + "," + M + "," + j + ")", L && wt ? this.t.setAttribute("transform", "matrix(" + b) : C[xt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : C[xt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + D + "," + M + "," + j + ")");
                                if (d && (g = 1e-4, E < g && E > -g && (E = R = 2e-5), D < g && D > -g && (D = R = 2e-5), !F || k.z || k.rotationX || k.rotationY || (F = 0)), P || B) P *= $, v = i = Math.cos(P), _ = o = Math.sin(P), B && (P -= B * $, v = Math.cos(P), _ = Math.sin(P), "simple" === k.skewType && (e = Math.tan((B - N) * $), e = Math.sqrt(1 + e * e), v *= e, _ *= e, k.skewY && (e = Math.tan(N * $), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -_, s = v;
                                else {
                                    if (!(O || A || 1 !== R || F || L)) return void(C[xt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + j + "px," + I + "px)" + (1 !== E || 1 !== D ? " scale(" + E + "," + D + ")" : ""));
                                    i = s = 1, n = o = 0
                                }
                                u = 1, r = a = l = c = h = f = 0, p = F ? -1 / F : 0, m = k.zOrigin, g = 1e-6, w = ",", T = "0", P = O * $, P && (v = Math.cos(P), _ = Math.sin(P), l = -_, h = p * -_, r = i * _, a = o * _, u = v, p *= v, i *= v, o *= v), P = A * $, P && (v = Math.cos(P), _ = Math.sin(P), e = n * v + r * _, y = s * v + a * _, c = u * _, f = p * _, r = n * -_ + r * v, a = s * -_ + a * v, u *= v, p *= v, n = e, s = y), 1 !== R && (r *= R, a *= R, u *= R, p *= R), 1 !== D && (n *= D, s *= D, c *= D, f *= D), 1 !== E && (i *= E, o *= E, l *= E, h *= E), (m || L) && (m && (M += r * -m, j += a * -m, I += u * -m + m), L && (M += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, j += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), M < g && M > -g && (M = T), j < g && j > -g && (j = T), I < g && I > -g && (I = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < g && i > -g ? T : i) + w + (o < g && o > -g ? T : o) + w + (l < g && l > -g ? T : l), b += w + (h < g && h > -g ? T : h) + w + (n < g && n > -g ? T : n) + w + (s < g && s > -g ? T : s), A || O || 1 !== R ? (b += w + (c < g && c > -g ? T : c) + w + (f < g && f > -g ? T : f) + w + (r < g && r > -g ? T : r), b += w + (a < g && a > -g ? T : a) + w + (u < g && u > -g ? T : u) + w + (p < g && p > -g ? T : p) + w) : b += ",0,0,0,0,1,0,", b += M + w + j + w + I + w + (F ? 1 + -I / F : 1) + ")", C[xt] = b
                            };
                        u = Pt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function(t, e, i, n, o, s, l) {
                                if (n._lastParsedTransform === l) return o;
                                n._lastParsedTransform = l;
                                var c, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                "function" == typeof l[i] && (c = l[i], l[i] = e), u && (l.scale = u(_, t));
                                var h, f, p, d, m, g, y, b, w, T = t._gsTransform,
                                    x = t.style,
                                    S = Tt.length,
                                    k = l,
                                    C = {},
                                    P = Ft(t, r, !0, k.parseTransform),
                                    A = k.transform && ("function" == typeof k.transform ? k.transform(_, v) : k.transform);
                                if (n._transform = P, A && "string" == typeof A && xt) f = L.style, f[xt] = A, f.display = "block", f.position = "absolute", j.body.appendChild(L), h = Ft(L, null, !1), P.svg && (g = P.xOrigin, y = P.yOrigin, h.x -= P.xOffset, h.y -= P.yOffset, (k.transformOrigin || k.svgOrigin) && (A = {}, Dt(t, it(k.transformOrigin), A, k.svgOrigin, k.smoothOrigin, !0), g = A.xOrigin, y = A.yOrigin, h.x -= A.xOffset - P.xOffset, h.y -= A.yOffset - P.yOffset), (g || y) && (b = Lt(L, !0), h.x -= g - (g * b[0] + y * b[2]), h.y -= y - (g * b[1] + y * b[3]))), j.body.removeChild(L), h.perspective || (h.perspective = P.perspective), null != k.xPercent && (h.xPercent = rt(k.xPercent, P.xPercent)), null != k.yPercent && (h.yPercent = rt(k.yPercent, P.yPercent));
                                else if ("object" == typeof k) {
                                    if (h = {
                                            scaleX: rt(null != k.scaleX ? k.scaleX : k.scale, P.scaleX),
                                            scaleY: rt(null != k.scaleY ? k.scaleY : k.scale, P.scaleY),
                                            scaleZ: rt(k.scaleZ, P.scaleZ),
                                            x: rt(k.x, P.x),
                                            y: rt(k.y, P.y),
                                            z: rt(k.z, P.z),
                                            xPercent: rt(k.xPercent, P.xPercent),
                                            yPercent: rt(k.yPercent, P.yPercent),
                                            perspective: rt(k.transformPerspective, P.perspective)
                                        }, null != (m = k.directionalRotation))
                                        if ("object" == typeof m)
                                            for (f in m) k[f] = m[f];
                                        else k.rotation = m;
                                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && (h.x = 0, h.xPercent = rt(k.x, P.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (h.y = 0, h.yPercent = rt(k.y, P.yPercent)), h.rotation = ot("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : P.rotation, P.rotation, "rotation", C), Ct && (h.rotationX = ot("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", C), h.rotationY = ot("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", C)), h.skewX = ot(k.skewX, P.skewX), h.skewY = ot(k.skewY, P.skewY)
                                }
                                for (Ct && null != k.force3D && (P.force3D = k.force3D, d = !0), P.skewType = k.skewType || P.skewType || a.defaultSkewType, p = P.force3D || P.z || P.rotationX || P.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == k.scale || (h.scaleZ = 1); --S > -1;) w = Tt[S], ((A = h[w] - P[w]) > 1e-6 || A < -1e-6 || null != k[w] || null != R[w]) && (d = !0, o = new dt(P, w, P[w], A, o), w in C && (o.e = C[w]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
                                return A = k.transformOrigin, P.svg && (A || k.svgOrigin) && (g = P.xOffset, y = P.yOffset, Dt(t, it(A), h, k.svgOrigin, k.smoothOrigin), o = mt(P, "xOrigin", (T ? P : h).xOrigin, h.xOrigin, o, "transformOrigin"), o = mt(P, "yOrigin", (T ? P : h).yOrigin, h.yOrigin, o, "transformOrigin"), g === P.xOffset && y === P.yOffset || (o = mt(P, "xOffset", T ? g : P.xOffset, P.xOffset, o, "transformOrigin"), o = mt(P, "yOffset", T ? y : P.yOffset, P.yOffset, o, "transformOrigin")), A = "0px 0px"), (A || Ct && p && P.zOrigin) && (xt ? (d = !0, w = kt, A = (A || Y(t, w, r, !1, "50% 50%")) + "", o = new dt(x, w, 0, 0, o, -1, "transformOrigin"), o.b = x[w], o.plugin = s, Ct ? (f = P.zOrigin, A = A.split(" "), P.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0, o.xs0 = o.e = A[0] + " " + (A[1] || "50%") + " 0px", o = new dt(P, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = P.zOrigin) : o.xs0 = o.e = A) : it(A + "", P)), d && (n._transformType = P.svg && wt || !p && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), u && (l.scale = u), o
                            },
                            prefix: !0
                        }), yt("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), yt("borderRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, i, o, s, a) {
                                e = this.format(e);
                                var l, c, u, h, f, p, d, m, g, v, _, y, b, w, T, x, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    k = t.style;
                                for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = G(S[c])), f = h = Y(t, S[c], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), p = u = l[c], d = parseFloat(f), y = f.substr((d + "").length), b = "=" === p.charAt(1), b ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), _ = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), _ = p.substr((m + "").length)), "" === _ && (_ = n[i] || y), _ !== y && (w = V(t, "borderLeft", d, y), T = V(t, "borderTop", d, y), "%" === _ ? (f = w / g * 100 + "%", h = T / v * 100 + "%") : "em" === _ ? (x = V(t, "borderLeft", 1, "em"), f = w / x + "em", h = T / x + "em") : (f = w + "px", h = T + "px"), b && (p = parseFloat(f) + m + _, u = parseFloat(h) + m + _)), s = gt(k, S[c], f + " " + h, p + " " + u, !1, "0px", s);
                                return s
                            },
                            prefix: !0,
                            formatter: ht("0px 0px 0px 0px", !1, !0)
                        }), yt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, i, n, o, s) {
                                return gt(t.style, i, this.format(Y(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                            },
                            prefix: !0,
                            formatter: ht("0px 0px", !1, !0)
                        }), yt("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function(t, e, i, n, o, s) {
                                var a, l, c, u, h, f, p = "background-position",
                                    d = r || q(t, null),
                                    m = this.format((d ? g ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                    v = this.format(e);
                                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = Y(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== f) {
                                    for (a = m.split(" "), l = v.split(" "), F.setAttribute("src", f), c = 2; --c > -1;) m = a[c], (u = -1 !== m.indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - F.width : t.offsetHeight - F.height, a[c] = u ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                                    m = a.join(" ")
                                }
                                return this.parseComplex(t.style, m, v, o, s)
                            },
                            formatter: it
                        }), yt("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function(t) {
                                return t += "", it(-1 === t.indexOf(" ") ? t + " " + t : t)
                            }
                        }), yt("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), yt("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), yt("transformStyle", {
                            prefix: !0
                        }), yt("backfaceVisibility", {
                            prefix: !0
                        }), yt("userSelect", {
                            prefix: !0
                        }), yt("margin", {
                            parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                        }), yt("padding", {
                            parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), yt("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function(t, e, i, n, o, s) {
                                var a, l, c;
                                return g < 9 ? (l = t.currentStyle, c = g < 8 ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                            }
                        }), yt("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), yt("autoRound,strictUnits", {
                            parser: function(t, e, i, n, r) {
                                return r
                            }
                        }), yt("border", {
                            defaultValue: "0px solid #000",
                            parser: function(t, e, i, n, o, s) {
                                var a = Y(t, "borderTopWidth", r, !1, "0px"),
                                    l = this.format(e).split(" "),
                                    c = l[0].replace(x, "");
                                return "px" !== c && (a = parseFloat(a) / V(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                            },
                            color: !0,
                            formatter: function(t) {
                                var e = t.split(" ");
                                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                            }
                        }), yt("borderWidth", {
                            parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), yt("float,cssFloat,styleFloat", {
                            parser: function(t, e, i, n, r, o) {
                                var s = t.style,
                                    a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                                return new dt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                            }
                        });
                        var Bt = function(t) {
                            var e, i = this.t,
                                n = i.filter || Y(this.data, "filter") || "",
                                r = this.s + this.c * t | 0;
                            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(S, "opacity=" + r))
                        };
                        yt("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function(t, e, i, n, o, s) {
                                var a = parseFloat(Y(t, "opacity", r, !1, "1")),
                                    l = t.style,
                                    c = "autoAlpha" === i;
                                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === Y(t, "visibility", r) && 0 !== e && (a = 0), B ? o = new dt(l, "opacity", a, e - a, o) : (o = new dt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Bt), c && (o = new dt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                            }
                        });
                        var Ht = function(t, e) {
                                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())) : t.removeAttribute(e))
                            },
                            Wt = function(t) {
                                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                            };
                        yt("className", {
                            parser: function(t, e, n, o, s, a, l) {
                                var c, u, h, f, p, d = t.getAttribute("class") || "",
                                    m = t.style.cssText;
                                if (s = o._classNamePT = new dt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.pr = -11, i = !0, s.b = d, u = K(t, r), h = t._gsClassPT) {
                                    for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                                    h.setRatio(1)
                                }
                                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = Z(t, u, K(t), l, f), t.setAttribute("class", d), s.data = c.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, c.difs, s, a)
                            }
                        });
                        var Xt = function(t) {
                            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var e, i, n, r, o, s = this.t.style,
                                    a = c.transform.parse;
                                if ("all" === this.e) s.cssText = "", r = !0;
                                else
                                    for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], c[i] && (c[i].parse === a ? r = !0 : i = "transformOrigin" === i ? kt : c[i].p), Ht(s, i);
                                r && (Ht(s, xt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (yt("clearProps", {
                                parser: function(t, e, n, r, o) {
                                    return o = new dt(t, n, 0, 0, o, 2), o.setRatio = Xt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                                }
                            }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) bt(u[vt]);
                        u = a.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, s, l) {
                            if (!t.nodeType) return !1;
                            this._target = v = t, this._tween = s, this._vars = e, _ = l, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = q(t, ""), o = this._overwriteProps;
                            var u, d, g, y, b, w, T, x, S, C = t.style;
                            if (f && "" === C.zIndex && ("auto" !== (u = Y(t, "zIndex", r)) && "" !== u || this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (y = C.cssText, u = K(t, r), C.cssText = y + ";" + e, u = Z(t, u, K(t)).difs, !B && k.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, C.cssText = y), e.className ? this._firstPT = d = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                                for (S = 3 === this._transformType, xt ? p && (f = !0, "" === C.zIndex && ("auto" !== (T = Y(t, "zIndex", r)) && "" !== T || this._addLazySet(C, "zIndex", 0)), m && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : C.zoom = 1, g = d; g && g._next;) g = g._next;
                                x = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, g), x.setRatio = xt ? Nt : zt, x.data = this._transform || Ft(t, r, !0), x.tween = s, x.pr = -1, o.pop()
                            }
                            if (i) {
                                for (; d;) {
                                    for (w = d._next, g = y; g && g.pr > d.pr;) g = g._next;
                                    (d._prev = g ? g._prev : b) ? d._prev._next = d: y = d, (d._next = g) ? g._prev = d : b = d, d = w
                                }
                                this._firstPT = y
                            }
                            return !0
                        }, u.parse = function(t, e, i, o) {
                            var s, a, l, u, f, p, d, m, g, y, b = t.style;
                            for (s in e) p = e[s], "function" == typeof p && (p = p(_, v)), a = c[s], a ? i = a.parse(t, p, s, this, i, o, e) : (f = Y(t, s, r) + "", g = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && C.test(p) ? (g || (p = lt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(b, s, f, p, !0, "transparent", i, 0, o)) : g && E.test(p) ? i = gt(b, s, f, p, !0, null, i, 0, o) : (l = parseFloat(f), d = l || 0 === l ? f.substr((l + "").length) : "", "" !== f && "auto" !== f || ("width" === s || "height" === s ? (l = et(t, s, r), d = "px") : "left" === s || "top" === s ? (l = Q(t, s, r), d = "px") : (l = "opacity" !== s ? 0 : 1, d = "")), y = g && "=" === p.charAt(1), y ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(x, "")) : (u = parseFloat(p), m = g ? p.replace(x, "") : ""), "" === m && (m = s in n ? n[s] : d), p = u || 0 === u ? (y ? u + l : u) + m : e[s], d !== m && "" !== m && (u || 0 === u) && l && (l = V(t, s, l, d), "%" === m ? (l /= V(t, s, 100, "%") / 100, !0 !== e.strictUnits && (f = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= V(t, s, 1, m) : "px" !== m && (u = V(t, s, u, m), m = "px"), y && (u || 0 === u) && (p = u + l + m)), y && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== b[s] && (p || p + "" != "NaN" && null != p) ? (i = new dt(b, s, u || l || 0, 0, i, -1, s, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f) : W("invalid " + s + " tween value: " + e[s]) : (i = new dt(b, s, l, u - l, i, 0, s, !1 !== h && ("px" === m || "zIndex" === s), 0, f, p), i.xs0 = m))), o && i && !i.plugin && (i.plugin = o);
                            return i
                        }, u.setRatio = function(t) {
                            var e, i, n, r = this._firstPT;
                            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                    for (; r;) {
                                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                            if (1 === r.type)
                                                if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                        else r.t[r.p] = e + r.xs0;
                                        r = r._next
                                    } else
                                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                                else
                                    for (; r;) {
                                        if (2 !== r.type)
                                            if (r.r && -1 !== r.type)
                                                if (e = Math.round(r.s + r.c), r.type) {
                                                    if (1 === r.type) {
                                                        for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                        r.t[r.p] = i
                                                    }
                                                } else r.t[r.p] = e + r.xs0;
                                        else r.t[r.p] = r.e;
                                        else r.setRatio(t);
                                        r = r._next
                                    }
                        }, u._enableTransforms = function(t) {
                            this._transform = this._transform || Ft(this._target, r, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                        };
                        var Ut = function(t) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        u._addLazySet = function(t, e, i) {
                            var n = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
                            n.e = i, n.setRatio = Ut, n.data = this
                        }, u._linkCSSP = function(t, e, i, n) {
                            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                        }, u._mod = function(t) {
                            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                        }, u._kill = function(e) {
                            var i, n, r, o = e;
                            if (e.autoAlpha || e.alpha) {
                                o = {};
                                for (n in e) o[n] = e[n];
                                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                            }
                            for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                            return t.prototype._kill.call(this, o)
                        };
                        var Gt = function(t, e, i) {
                            var n, r, o, s;
                            if (t.slice)
                                for (r = t.length; --r > -1;) Gt(t[r], e, i);
                            else
                                for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Gt(o, e, i)
                        };
                        return a.cascadeTo = function(t, i, n) {
                            var r, o, s, a, l = e.to(t, i, n),
                                c = [l],
                                u = [],
                                h = [],
                                f = [],
                                p = e._internals.reservedProps;
                            for (t = l._targets || l.target, Gt(t, u, f), l.render(i, !0, !0), Gt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                                if (o = Z(f[r], u[r], h[r]), o.firstMPT) {
                                    o = o.difs;
                                    for (s in n) p[s] && (o[s] = n[s]);
                                    a = {};
                                    for (s in o) a[s] = u[r][s];
                                    c.push(e.fromTo(f[r], i, a, o))
                                } return c
                        }, t.activate([a]), a
                    }, !0),
                    function() {
                        var t = s._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function(t, e, i) {
                                    return this._tween = i, !0
                                }
                            }),
                            e = function(t) {
                                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                            },
                            i = t.prototype;
                        i._onInitAllProps = function() {
                            for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
                            for (s = o.length; --s > -1;)
                                for (t = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                            return !1
                        }, i._add = function(t, e, i, n) {
                            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                        }
                    }(),
                    function() {
                        s._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.6.0",
                            init: function(t, e, i, n) {
                                var r, o;
                                if ("function" != typeof t.setAttribute) return !1;
                                for (r in e) o = e[r], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                                return !0
                            }
                        })
                    }(), s._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.0",
                        API: 2,
                        init: function(t, e, i, n) {
                            "object" != typeof e && (e = {
                                rotation: e
                            }), this.finals = {};
                            var r, o, s, a, l, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                            for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), c = (a + "").split("_"), o = c[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = a - s, c.length && (o = c.join("_"), -1 !== o.indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
                            return !0
                        },
                        set: function(t) {
                            var e;
                            if (1 !== t) this._super.setRatio.call(this, t);
                            else
                                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                        }
                    })._autoCSS = !0, s._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                        var e, i, n, r = s.GreenSockGlobals || s,
                            o = r.com.greensock,
                            a = 2 * Math.PI,
                            l = Math.PI / 2,
                            c = o._class,
                            u = function(e, i) {
                                var n = c("easing." + e, function() {}, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, n
                            },
                            h = t.register || function() {},
                            f = function(t, e, i, n, r) {
                                var o = c("easing." + t, {
                                    easeOut: new e,
                                    easeIn: new i,
                                    easeInOut: new n
                                }, !0);
                                return h(o, t), o
                            },
                            p = function(t, e, i) {
                                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                            },
                            d = function(e, i) {
                                var n = c("easing." + e, function(t) {
                                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, r.config = function(t) {
                                    return new n(t)
                                }, n
                            },
                            m = f("Back", d("BackOut", function(t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                            }), d("BackIn", function(t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                            }), d("BackInOut", function(t) {
                                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                            })),
                            g = c("easing.SlowMo", function(t, e, i) {
                                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                            }, !0),
                            v = g.prototype = new t;
                        return v.constructor = g, v.getRatio = function(t) {
                            var e = t + (.5 - t) * this._p;
                            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                        }, g.ease = new g(.7, .7), v.config = g.config = function(t, e, i) {
                            return new g(t, e, i)
                        }, e = c("easing.SteppedEase", function(t) {
                            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                        }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function(t) {
                            return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                        }, v.config = e.config = function(t) {
                            return new e(t)
                        }, i = c("easing.RoughEase", function(e) {
                            e = e || {};
                            for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, h = 0 | (e.points || 20), f = h, d = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / h * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : i < .5 ? (o = 2 * i, r = o * o * .5 * v) : (o = 2 * (1 - i), r = o * o * .5 * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), c[u++] = {
                                x: i,
                                y: n
                            };
                            for (c.sort(function(t, e) {
                                    return t.x - e.x
                                }), a = new p(1, 1, null), f = h; --f > -1;) s = c[f], a = new p(s.x, s.y, a);
                            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                        }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function(t) {
                            var e = this._prev;
                            if (t > e.t) {
                                for (; e.next && t >= e.t;) e = e.next;
                                e = e.prev
                            } else
                                for (; e.prev && t <= e.t;) e = e.prev;
                            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                        }, v.config = function(t) {
                            return new i(t)
                        }, i.ease = new i, f("Bounce", u("BounceOut", function(t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }), u("BounceIn", function(t) {
                            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                        }), u("BounceInOut", function(t) {
                            var e = t < .5;
                            return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                        })), f("Circ", u("CircOut", function(t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        }), u("CircIn", function(t) {
                            return -(Math.sqrt(1 - t * t) - 1)
                        }), u("CircInOut", function(t) {
                            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        })), n = function(e, i, n) {
                            var r = c("easing." + e, function(t, e) {
                                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                                }, !0),
                                o = r.prototype = new t;
                            return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                                return new r(t, e)
                            }, r
                        }, f("Elastic", n("ElasticOut", function(t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                        }, .3), n("ElasticIn", function(t) {
                            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                        }, .3), n("ElasticInOut", function(t) {
                            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                        }, .45)), f("Expo", u("ExpoOut", function(t) {
                            return 1 - Math.pow(2, -10 * t)
                        }), u("ExpoIn", function(t) {
                            return Math.pow(2, 10 * (t - 1)) - .001
                        }), u("ExpoInOut", function(t) {
                            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                        })), f("Sine", u("SineOut", function(t) {
                            return Math.sin(t * l)
                        }), u("SineIn", function(t) {
                            return 1 - Math.cos(t * l)
                        }), u("SineInOut", function(t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        })), c("easing.EaseLookup", {
                            find: function(e) {
                                return t.map[e]
                            }
                        }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), m
                    }, !0)
            }), s._gsDefine && s._gsQueue.pop()(),
            function(n, s) {
                "use strict";
                var a = {},
                    l = n.document,
                    c = n.GreenSockGlobals = n.GreenSockGlobals || n;
                if (!c.TweenLite) {
                    var u, h, f, p, d, m = function(t) {
                            var e, i = t.split("."),
                                n = c;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        g = m("com.greensock"),
                        v = function(t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        _ = function() {},
                        y = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        b = {},
                        w = function(n, s, l, u) {
                            this.sc = b[n] ? b[n].sc : [], b[n] = this, this.gsClass = null, this.func = l;
                            var h = [];
                            this.check = function(f) {
                                for (var p, d, g, v, _, y = s.length, T = y; --y > -1;)(p = b[s[y]] || new w(s[y], [])).gsClass ? (h[y] = p.gsClass, T--) : f && p.sc.push(this);
                                if (0 === T && l) {
                                    if (d = ("com.greensock." + n).split("."), g = d.pop(), v = m(d.join("."))[g] = this.gsClass = l.apply(l, h), u)
                                        if (c[g] = a[g] = v, !(_ = void 0 !== t && t.exports) && i(27)) r = [], void 0 !== (o = function() {
                                            return v
                                        }.apply(e, r)) && (t.exports = o);
                                        else if (_)
                                        if ("TweenMax" === n) {
                                            t.exports = a.TweenMax = v;
                                            for (y in a) v[y] = a[y]
                                        } else a.TweenMax && (a.TweenMax[g] = v);
                                    for (y = 0; y < this.sc.length; y++) this.sc[y].check()
                                }
                            }, this.check(!0)
                        },
                        T = n._gsDefine = function(t, e, i, n) {
                            return new w(t, e, i, n)
                        },
                        x = g._class = function(t, e, i) {
                            return e = e || function() {}, T(t, [], function() {
                                return e
                            }, i), e
                        };
                    T.globals = c;
                    var S = [0, 0, 1, 1],
                        k = x("easing.Ease", function(t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? S.concat(e) : S
                        }, !0),
                        C = k.map = {},
                        P = k.register = function(t, e, i, n) {
                            for (var r, o, s, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                                for (o = l[c], r = n ? x("easing." + o, null, !0) : g.easing[o] || {}, s = u.length; --s > -1;) a = u[s], C[o + "." + a] = C[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for (f = k.prototype, f._calcEnd = !1, f.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                        }, u = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = u.length; --h > -1;) f = u[h] + ",Power" + h, P(new k(null, null, 1, h), f, "easeOut", !0), P(new k(null, null, 2, h), f, "easeIn" + (0 === h ? ",easeNone" : "")), P(new k(null, null, 3, h), f, "easeInOut");
                    C.linear = g.easing.Linear.easeIn, C.swing = g.easing.Quad.easeInOut;
                    var A = x("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    f = A.prototype, f.addEventListener = function(t, e, i, n, r) {
                        r = r || 0;
                        var o, s, a = this._listeners[t],
                            l = 0;
                        for (this !== p || d || p.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, f.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, f.dispatchEvent = function(t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var O = n.requestAnimationFrame,
                        E = n.cancelAnimationFrame,
                        $ = Date.now || function() {
                            return (new Date).getTime()
                        },
                        D = $();
                    for (u = ["ms", "moz", "webkit", "o"], h = u.length; --h > -1 && !O;) O = n[u[h] + "RequestAnimationFrame"], E = n[u[h] + "CancelAnimationFrame"] || n[u[h] + "CancelRequestAnimationFrame"];
                    x("Ticker", function(t, e) {
                        var i, n, r, o, s, a = this,
                            c = $(),
                            u = !(!1 === e || !O) && "auto",
                            h = 500,
                            f = 33,
                            m = function(t) {
                                var e, l, u = $() - D;
                                u > h && (c += u - f), D += u, a.time = (D - c) / 1e3, e = a.time - s, (!i || e > 0 || !0 === t) && (a.frame++, s += e + (e >= o ? .004 : o - e), l = !0), !0 !== t && (r = n(m)), l && a.dispatchEvent("tick")
                            };
                        A.call(a), a.time = a.frame = 0, a.tick = function() {
                            m(!0)
                        }, a.lagSmoothing = function(t, e) {
                            h = t || 1e10, f = Math.min(e, h, 0)
                        }, a.sleep = function() {
                            null != r && (u && E ? E(r) : clearTimeout(r), n = _, r = null, a === p && (d = !1))
                        }, a.wake = function(t) {
                            null !== r ? a.sleep() : t ? c += -D + (D = $()) : a.frame > 10 && (D = $() - h + 5), n = 0 === i ? _ : u && O ? O : function(t) {
                                return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
                            }, a === p && (d = !0), m(2)
                        }, a.fps = function(t) {
                            if (!arguments.length) return i;
                            i = t, o = 1 / (i || 60), s = this.time + o, a.wake()
                        }, a.useRAF = function(t) {
                            if (!arguments.length) return u;
                            a.sleep(), u = t, a.fps(i)
                        }, a.fps(t), setTimeout(function() {
                            "auto" === u && a.frame < 5 && "hidden" !== l.visibilityState && a.useRAF(!1)
                        }, 1500)
                    }), f = g.Ticker.prototype = new g.events.EventDispatcher, f.constructor = g.Ticker;
                    var R = x("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                            d || p.wake();
                            var i = this.vars.useFrames ? K : Z;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    p = R.ticker = new g.Ticker, f = R.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
                    var M = function() {
                        d && $() - D > 2e3 && p.wake(), setTimeout(M, 2e3)
                    };
                    M(), f.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, f.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, f.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, f.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, f.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, f.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, f.render = function(t, e, i) {}, f.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, f.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
                    }, f._enabled = function(t, e) {
                        return d || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, f._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, f.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, f._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, f._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, f._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (n ? n.length : 0) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, f.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, f.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, f.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, f.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, f.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, f.totalTime = function(t, e, i) {
                        if (d || p.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && tt(), this.render(t, e, !1), z.length && tt())
                        }
                        return this
                    }, f.progress = f.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, f.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, f.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, f.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime,
                                i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t, this._uncache(!1)
                    }, f.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, f.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (d || t || p.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var j = x("core.SimpleTimeline", function(t) {
                        R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    f = j.prototype = new R, f.constructor = j, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, n) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, f._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, f.render = function(t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, f.rawTime = function() {
                        return d || p.wake(), this._totalTime
                    };
                    var I = x("TweenLite", function(t, e, i) {
                            if (R.call(this, e, i), this.render = I.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : I.selector(t) || t;
                            var r, o, s, a = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = s = v(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== n && o[0] && (o[0] === n || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(v(o))) : (this._siblings[r] = et(o, this, !1), 1 === l && this._siblings[r].length > 1 && nt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = s[r--] = I.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        L = function(t) {
                            return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        F = function(t, e) {
                            var i, n = {};
                            for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!G[i] || G[i] && G[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    f = I.prototype = new R, f.constructor = I, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, I.version = "1.19.1", I.defaultEase = f._ease = new k(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = p, I.autoSleep = 120, I.lagSmoothing = function(t, e) {
                        p.lagSmoothing(t, e)
                    }, I.selector = n.$ || n.jQuery || function(t) {
                        var e = n.$ || n.jQuery;
                        return e ? (I.selector = e, e(t)) : void 0 === l ? t : l.querySelectorAll ? l.querySelectorAll(t) : l.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var z = [],
                        N = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        H = function(t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        W = function(t, e, i, n) {
                            var r, o, s, a, l, c, u, h = [],
                                f = 0,
                                p = "",
                                d = 0;
                            for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(B) || [], o = e.match(B) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; a < l; a++) u = o[a], c = e.substr(f, e.indexOf(u, f) - f), p += c || !a ? c : ",", f += c.length, d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), u === r[a] || r.length <= a ? p += u : (p && (h.push(p), p = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                                _next: h._firstPT,
                                t: h,
                                p: h.length - 1,
                                s: s,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                                f: 0,
                                m: d && d < 4 ? Math.round : 0
                            }), f += u.length;
                            return p += e.substr(f), p && h.push(p), h.setRatio = H, h
                        },
                        X = function(t, e, i, n, r, o, s, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var c, u = typeof t[e],
                                h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                f = "get" !== i ? i : h ? s ? t[h](s) : t[h]() : t[e],
                                p = "string" == typeof n && "=" === n.charAt(1),
                                d = {
                                    t: t,
                                    p: e,
                                    s: f,
                                    f: "function" === u,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0
                                };
                            if (("number" != typeof f || "number" != typeof n && !p) && (s || isNaN(f) || !p && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (d.fp = s, c = W(f, p ? d.s + d.c : n, a || I.defaultStringFilter, d), d = {
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (d.s = parseFloat(f), p || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        U = I._internals = {
                            isArray: y,
                            isSelector: L,
                            lazyTweens: z,
                            blobDif: W
                        },
                        G = I._plugins = {},
                        q = U.tweenLookup = {},
                        Y = 0,
                        V = U.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1
                        },
                        Q = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        K = R._rootFramesTimeline = new j,
                        Z = R._rootTimeline = new j,
                        J = 30,
                        tt = U.lazyRender = function() {
                            var t, e = z.length;
                            for (N = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            z.length = 0
                        };
                    Z._startTime = p.time, K._startTime = p.frame, Z._active = K._active = !0, setTimeout(tt, 1), R._updateRoot = I.render = function() {
                        var t, e, i;
                        if (z.length && tt(), Z.render((p.time - Z._startTime) * Z._timeScale, !1, !1), K.render((p.frame - K._startTime) * K._timeScale, !1, !1), z.length && tt(), p.frame >= J) {
                            J = p.frame + (parseInt(I.autoSleep, 10) || 120);
                            for (i in q) {
                                for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete q[i]
                            }
                            if ((!(i = Z._first) || i._paused) && I.autoSleep && !K._first && 1 === p._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || p.sleep()
                            }
                        }
                    }, p.addEventListener("tick", R._updateRoot);
                    var et = function(t, e, i) {
                            var n, r, o = t._gsTweenID;
                            if (q[o || (t._gsTweenID = o = "t" + Y++)] || (q[o] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = q[o].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return q[o].tweens
                        },
                        it = function(t, e, i, n) {
                            var r, o, s = t.vars.onOverwrite;
                            return s && (r = s(t, e, i, n)), s = I.onOverwrite, s && (o = s(t, e, i, n)), !1 !== r && !1 !== o
                        },
                        nt = function(t, e, i, n, r) {
                            var o, s, a, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, o = 0; o < l; o++)
                                    if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                                    else if (5 === n) break;
                                return s
                            }
                            var c, u = e._startTime + 1e-10,
                                h = [],
                                f = 0,
                                p = 0 === e._duration;
                            for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || rt(e, 0, p), 0 === rt(a, c, p) && (h[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (h[f++] = a)));
                            for (o = f; --o > -1;)
                                if (a = h[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !it(a, e)) continue;
                                    a._enabled(!1, !1) && (s = !0)
                                } return s
                        },
                        rt = function(t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                                if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return o /= r, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10
                        };
                    f._init = function() {
                        var t, e, i, n, r, o, s = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            c = !!s.immediateRender,
                            u = s.ease;
                        if (s.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in s.startAt) r[n] = s.startAt[n];
                            if (r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), c)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (s.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (c = !1), i = {};
                                for (n in s) V[n] && "autoCSS" !== n || (i[n] = s[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== s.lazy, i.immediateRender = c, this._startAt = I.to(this.target, 0, i), c) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = u = u ? u instanceof k ? u : "function" == typeof u ? new k(u, s.easeParams) : C[u] || I.defaultEase : I.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = s.onUpdate, this._initted = !0
                    }, f._initProps = function(t, e, i, r, o) {
                        var s, a, l, c, u, h;
                        if (null == t) return !1;
                        N[t._gsTweenID] && tt(), this.vars.css || t.style && t !== n && t.nodeType && G.css && !1 !== this.vars.autoCSS && F(this.vars, t);
                        for (s in this.vars)
                            if (h = this.vars[s], V[s]) h && (h instanceof Array || h.push && y(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                            else if (G[s] && (c = new G[s])._onInitTween(t, this.vars[s], this, o)) {
                            for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: s,
                                    pg: 1,
                                    pr: c._priority,
                                    m: 0
                                }, a = c._overwriteProps.length; --a > -1;) e[c._overwriteProps[a]] = this._firstPT;
                            (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                        } else e[s] = X.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, e, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && nt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[t._gsTweenID] = !0), l)
                    }, f.render = function(t, e, i) {
                        var n, r, o, s, a = this._time,
                            l = this._duration,
                            c = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10)), this._initted || (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var u = t / l,
                                h = this._easeType,
                                f = this._easePower;
                            (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : t / l < .5 ? u / 2 : 1 - u / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, z.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
                        }
                    }, f._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                        var n, r, o, s, a, l, c, u, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((y(e) || L(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in c) a[o] && (h || (h = []), h.push(o));
                                    if ((h || !t) && !it(this, i, e, h)) return !1
                                }
                                for (o in c)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, f.invalidate = function() {
                        return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, f._enabled = function(t, e) {
                        if (d || p.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = et(n[i], this, !0);
                            else this._siblings = et(this.target, this, !0)
                        }
                        return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, I.to = function(t, e, i) {
                        return new I(t, e, i)
                    }, I.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
                    }, I.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
                    }, I.delayedCall = function(t, e, i, n, r) {
                        return new I(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, I.set = function(t, e) {
                        return new I(t, 0, e)
                    }, I.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : I.selector(t) || t;
                        var i, n, r, o;
                        if ((y(t) || L(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                        } else
                            for (n = et(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n
                    }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = I.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var ot = x("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                    }, !0);
                    if (f = ot.prototype, ot.version = "1.19.0", ot.API = 2, f._firstPT = null, f._addTween = X, f.setRatio = H, f._kill = function(t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, f._mod = f._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, I._onPluginEvent = function(t, e) {
                            var i, n, r, o, s, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                    (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                                }
                                a = e._firstPT = r
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, ot.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === ot.API && (G[(new t[e])._propName] = t[e]);
                            return !0
                        }, T.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                s = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    ot.call(this, i, n), this._overwriteProps = r || []
                                }, !0 === t.global),
                                a = s.prototype = new ot(i);
                            a.constructor = s, s.API = t.API;
                            for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                            return s.version = t.version, ot.activate([s]), s
                        }, u = n._gsQueue) {
                        for (h = 0; h < u.length; h++) u[h]();
                        for (f in b) b[f].func || n.console.log("GSAP encountered missing dependency: " + f)
                    }
                    d = !1
                }
            }(void 0 !== t && t.exports && void 0 !== n ? n : this || window)
    }).call(e, i(2))
}, function(t, e, i) {
    var n = i(70);
    t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
}, function(t, e, i) {
    "use strict";
    var n = Function.prototype.toString,
        r = /^\s*class /,
        o = function(t) {
            try {
                var e = n.call(t),
                    i = e.replace(/\/\/.*\n/g, ""),
                    o = i.replace(/\/\*[.\s\S]*\*\//g, ""),
                    s = o.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return r.test(s)
            } catch (t) {
                return !1
            }
        },
        s = function(t) {
            try {
                return !o(t) && (n.call(t), !0)
            } catch (t) {
                return !1
            }
        },
        a = Object.prototype.toString,
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t) return !1;
        if ("function" != typeof t && "object" != typeof t) return !1;
        if (l) return s(t);
        if (o(t)) return !1;
        var e = a.call(t);
        return "[object Function]" === e || "[object GeneratorFunction]" === e
    }
}, function(t, e, i) {
    var n, r;
    /*!
     * ScrollMagic v2.0.5 (2015-04-29)
     * The javascript library for magical scroll interactions.
     * (c) 2015 Jan Paepke (@janpaepke)
     * Project Website: http://scrollmagic.io
     * 
     * @version 2.0.5
     * @license Dual licensed under MIT license and GPL.
     * @author Jan Paepke - e-mail@janpaepke.de
     *
     * @file ScrollMagic main library.
     */
    ! function(o, s) {
        n = s, void 0 !== (r = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = r)
    }(0, function() {
        "use strict";
        var t = function() {
            n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        t.Controller = function(i) {
            var r, o, s = "ScrollMagic.Controller",
                a = e.defaults,
                l = this,
                c = n.extend({}, a, i),
                u = [],
                h = !1,
                f = 0,
                p = "PAUSED",
                d = !0,
                m = 0,
                g = !0,
                v = function() {
                    c.refreshInterval > 0 && (o = window.setTimeout(S, c.refreshInterval))
                },
                _ = function() {
                    return c.vertical ? n.get.scrollTop(c.container) : n.get.scrollLeft(c.container)
                },
                y = function() {
                    return c.vertical ? n.get.height(c.container) : n.get.width(c.container)
                },
                b = this._setScrollPos = function(t) {
                    c.vertical ? d ? window.scrollTo(n.get.scrollLeft(), t) : c.container.scrollTop = t : d ? window.scrollTo(t, n.get.scrollTop()) : c.container.scrollLeft = t
                },
                w = function() {
                    if (g && h) {
                        var t = n.type.Array(h) ? h : u.slice(0);
                        h = !1;
                        var e = f;
                        f = l.scrollPos();
                        var i = f - e;
                        0 !== i && (p = i > 0 ? "FORWARD" : "REVERSE"), "REVERSE" === p && t.reverse(), t.forEach(function(e, i) {
                            k(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + u.length + " total)"), e.update(!0)
                        }), 0 === t.length && c.loglevel >= 3 && k(3, "updating 0 Scenes (nothing added to controller)")
                    }
                },
                T = function() {
                    r = n.rAF(w)
                },
                x = function(t) {
                    k(3, "event fired causing an update:", t.type), "resize" == t.type && (m = y(), p = "PAUSED"), !0 !== h && (h = !0, T())
                },
                S = function() {
                    if (!d && m != y()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        c.container.dispatchEvent(t)
                    }
                    u.forEach(function(t, e) {
                        t.refresh()
                    }), v()
                },
                k = this._log = function(t, e) {
                    c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), n.log.apply(window, arguments))
                };
            this._options = c;
            var C = function(t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function(e) {
                    if (n.type.Array(e)) e.forEach(function(t, e) {
                        l.addScene(t)
                    });
                    else if (e instanceof t.Scene) {
                        if (e.controller() !== l) e.addTo(l);
                        else if (u.indexOf(e) < 0) {
                            u.push(e), u = C(u), e.on("shift.controller_sort", function() {
                                u = C(u)
                            });
                            for (var i in c.globalSceneOptions) e[i] && e[i].call(e, c.globalSceneOptions[i]);
                            k(3, "adding Scene (now " + u.length + " total)")
                        }
                    } else k(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return l
                }, this.removeScene = function(t) {
                    if (n.type.Array(t)) t.forEach(function(t, e) {
                        l.removeScene(t)
                    });
                    else {
                        var e = u.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), u.splice(e, 1), k(3, "removing Scene (now " + u.length + " left)"), t.remove())
                    }
                    return l
                }, this.updateScene = function(e, i) {
                    return n.type.Array(e) ? e.forEach(function(t, e) {
                        l.updateScene(t, i)
                    }) : i ? e.update(!0) : !0 !== h && e instanceof t.Scene && (h = h || [], -1 == h.indexOf(e) && h.push(e), h = C(h), T()), l
                }, this.update = function(t) {
                    return x({
                        type: "resize"
                    }), t && w(), l
                }, this.scrollTo = function(e, i) {
                    if (n.type.Number(e)) b.call(c.container, e, i);
                    else if (e instanceof t.Scene) e.controller() === l ? l.scrollTo(e.scrollOffset(), i) : k(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
                    else if (n.type.Function(e)) b = e;
                    else {
                        var r = n.get.elements(e)[0];
                        if (r) {
                            for (; r.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) r = r.parentNode;
                            var o = c.vertical ? "top" : "left",
                                s = n.get.offset(c.container),
                                a = n.get.offset(r);
                            d || (s[o] -= l.scrollPos()), l.scrollTo(a[o] - s[o], i)
                        } else k(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                    }
                    return l
                }, this.scrollPos = function(t) {
                    return arguments.length ? (n.type.Function(t) ? _ = t : k(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), l) : _.call(l)
                }, this.info = function(t) {
                    var e = {
                        size: m,
                        vertical: c.vertical,
                        scrollPos: f,
                        scrollDirection: p,
                        container: c.container,
                        isDocument: d
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void k(1, 'ERROR: option "' + t + '" is not available') : e
                }, this.loglevel = function(t) {
                    return arguments.length ? (c.loglevel != t && (c.loglevel = t), l) : c.loglevel
                }, this.enabled = function(t) {
                    return arguments.length ? (g != t && (g = !!t, l.updateScene(u, !0)), l) : g
                }, this.destroy = function(t) {
                    window.clearTimeout(o);
                    for (var e = u.length; e--;) u[e].destroy(t);
                    return c.container.removeEventListener("resize", x), c.container.removeEventListener("scroll", x), n.cAF(r), k(3, "destroyed " + s + " (reset: " + (t ? "true" : "false") + ")"), null
                },
                function() {
                    for (var e in c) a.hasOwnProperty(e) || (k(2, 'WARNING: Unknown option "' + e + '"'), delete c[e]);
                    if (c.container = n.get.elements(c.container)[0], !c.container) throw k(1, "ERROR creating object " + s + ": No valid scroll container supplied"), s + " init failed.";
                    d = c.container === window || c.container === document.body || !document.body.contains(c.container), d && (c.container = window), m = y(), c.container.addEventListener("resize", x), c.container.addEventListener("scroll", x), c.refreshInterval = parseInt(c.refreshInterval) || a.refreshInterval, v(), k(3, "added new " + s + " controller (v" + t.version + ")")
                }(), l
        };
        var e = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, i) {
            e.defaults[t] = i
        }, t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
                return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
            }, n.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(e) {
            var r, o, s = "ScrollMagic.Scene",
                a = i.defaults,
                l = this,
                c = n.extend({}, a, e),
                u = "BEFORE",
                h = 0,
                f = {
                    start: 0,
                    end: 0
                },
                p = 0,
                d = !0,
                m = {};
            this.on = function(t, e) {
                return n.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function(t) {
                    var i = t.split("."),
                        n = i[0],
                        r = i[1];
                    "*" != n && (m[n] || (m[n] = []), m[n].push({
                        namespace: r || "",
                        callback: e
                    }))
                })) : g(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), l
            }, this.off = function(t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function(t, i) {
                    var n = t.split("."),
                        r = n[0],
                        o = n[1] || "";
                    ("*" === r ? Object.keys(m) : [r]).forEach(function(t) {
                        for (var i = m[t] || [], n = i.length; n--;) {
                            var r = i[n];
                            !r || o !== r.namespace && "*" !== o || e && e != r.callback || i.splice(n, 1)
                        }
                        i.length || delete m[t]
                    })
                }), l) : (g(1, "ERROR: Invalid event name supplied."), l)
            }, this.trigger = function(e, i) {
                if (e) {
                    var n = e.trim().split("."),
                        r = n[0],
                        o = n[1],
                        s = m[r];
                    g(3, "event fired:", r, i ? "->" : "", i || ""), s && s.forEach(function(e, n) {
                        o && o !== e.namespace || e.callback.call(l, new t.Event(r, e.namespace, l, i))
                    })
                } else g(1, "ERROR: Invalid event name supplied.");
                return l
            }, l.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? y() : "reverse" === t.what && l.update())
            }).on("shift.internal", function(t) {
                v(), l.update()
            });
            var g = this._log = function(t, e) {
                c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), n.log.apply(window, arguments))
            };
            this.addTo = function(e) {
                return e instanceof t.Controller ? o != e && (o && o.removeScene(l), o = e, T(), _(!0), y(!0), v(), o.info("container").addEventListener("resize", b), e.addScene(l), l.trigger("add", {
                    controller: o
                }), g(3, "added " + s + " to controller"), l.update()) : g(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), l
            }, this.enabled = function(t) {
                return arguments.length ? (d != t && (d = !!t, l.update(!0)), l) : d
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", b);
                    var t = o;
                    o = void 0, t.removeScene(l), l.trigger("remove"), g(3, "removed " + s + " from controller")
                }
                return l
            }, this.destroy = function(t) {
                return l.trigger("destroy", {
                    reset: t
                }), l.remove(), l.off("*.*"), g(3, "destroyed " + s + " (reset: " + (t ? "true" : "false") + ")"), null
            }, this.update = function(t) {
                if (o)
                    if (t)
                        if (o.enabled() && d) {
                            var e, i = o.info("scrollPos");
                            e = c.duration > 0 ? (i - f.start) / (f.end - f.start) : i >= f.start ? 1 : 0, l.trigger("update", {
                                startPos: f.start,
                                endPos: f.end,
                                scrollPos: i
                            }), l.progress(e)
                        } else k && "DURING" === u && P(!0);
                else o.updateScene(l, !1);
                return l
            }, this.refresh = function() {
                return _(), y(), l
            }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        i = u,
                        n = o ? o.info("scrollDirection") : "PAUSED",
                        r = c.reverse || t >= h;
                    if (0 === c.duration ? (e = h != t, h = t < 1 && r ? 0 : 1, u = 0 === h ? "BEFORE" : "DURING") : t < 0 && "BEFORE" !== u && r ? (h = 0, u = "BEFORE", e = !0) : t >= 0 && t < 1 && r ? (h = t, u = "DURING", e = !0) : t >= 1 && "AFTER" !== u ? (h = 1, u = "AFTER", e = !0) : "DURING" !== u || r || P(), e) {
                        var s = {
                                progress: h,
                                state: u,
                                scrollDirection: n
                            },
                            a = u != i,
                            f = function(t) {
                                l.trigger(t, s)
                            };
                        a && "DURING" !== i && (f("enter"), f("BEFORE" === i ? "start" : "end")), f("progress"), a && "DURING" !== u && (f("BEFORE" === u ? "start" : "end"), f("leave"))
                    }
                    return l
                }
                return h
            };
            var v = function() {
                    f = {
                        start: p + c.offset
                    }, o && c.triggerElement && (f.start -= o.info("size") * c.triggerHook), f.end = f.start + c.duration
                },
                _ = function(t) {
                    if (r) {
                        x("duration", r.call(l)) && !t && (l.trigger("change", {
                            what: "duration",
                            newval: c.duration
                        }), l.trigger("shift", {
                            reason: "duration"
                        }))
                    }
                },
                y = function(t) {
                    var e = 0,
                        i = c.triggerElement;
                    if (o && i) {
                        for (var r = o.info(), s = n.get.offset(r.container), a = r.vertical ? "top" : "left"; i.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) i = i.parentNode;
                        var u = n.get.offset(i);
                        r.isDocument || (s[a] -= o.scrollPos()), e = u[a] - s[a]
                    }
                    var h = e != p;
                    p = e, h && !t && l.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                b = function(t) {
                    c.triggerHook > 0 && l.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                w = n.extend(i.validate, {
                    duration: function(t) {
                        if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (n.type.Function(t)) {
                            r = t;
                            try {
                                t = parseFloat(r())
                            } catch (e) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !n.type.Number(t) || t < 0) throw r ? (r = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                        return t
                    }
                }),
                T = function(t) {
                    t = arguments.length ? [t] : Object.keys(w), t.forEach(function(t, e) {
                        var i;
                        if (w[t]) try {
                            i = w[t](c[t])
                        } catch (e) {
                            i = a[t];
                            var r = n.type.String(e) ? [e] : e;
                            n.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), g.apply(this, r)) : g(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message)
                        } finally {
                            c[t] = i
                        }
                    })
                },
                x = function(t, e) {
                    var i = !1,
                        n = c[t];
                    return c[t] != e && (c[t] = e, T(t), i = n != c[t]), i
                },
                S = function(t) {
                    l[t] || (l[t] = function(e) {
                        return arguments.length ? ("duration" === t && (r = void 0), x(t, e) && (l.trigger("change", {
                            what: t,
                            newval: c[t]
                        }), i.shifts.indexOf(t) > -1 && l.trigger("shift", {
                            reason: t
                        })), l) : c[t]
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return u
            }, this.scrollOffset = function() {
                return f.start
            }, this.triggerPosition = function() {
                var t = c.offset;
                return o && (c.triggerElement ? t += p : t += o.info("size") * l.triggerHook()), t
            };
            var k, C;
            l.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                ("AFTER" === u && e || "DURING" === u && 0 === c.duration) && P(), e && A()
            }).on("progress.internal", function(t) {
                P()
            }).on("add.internal", function(t) {
                A()
            }).on("destroy.internal", function(t) {
                l.removePin(t.reset)
            });
            var P = function(t) {
                    if (k && o) {
                        var e = o.info(),
                            i = C.spacer.firstChild;
                        if (t || "DURING" !== u) {
                            var r = {
                                    position: C.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                s = n.css(i, "position") != r.position;
                            C.pushFollowers ? c.duration > 0 && ("AFTER" === u && 0 === parseFloat(n.css(C.spacer, "padding-top")) ? s = !0 : "BEFORE" === u && 0 === parseFloat(n.css(C.spacer, "padding-bottom")) && (s = !0)) : r[e.vertical ? "top" : "left"] = c.duration * h, n.css(i, r), s && A()
                        } else {
                            "fixed" != n.css(i, "position") && (n.css(i, {
                                position: "fixed"
                            }), A());
                            var a = n.get.offset(C.spacer, !0),
                                l = c.reverse || 0 === c.duration ? e.scrollPos - f.start : Math.round(h * c.duration * 10) / 10;
                            a[e.vertical ? "top" : "left"] += l, n.css(C.spacer.firstChild, {
                                top: a.top,
                                left: a.left
                            })
                        }
                    }
                },
                A = function() {
                    if (k && o && C.inFlow) {
                        var t = "DURING" === u,
                            e = o.info("vertical"),
                            i = C.spacer.firstChild,
                            r = n.isMarginCollapseType(n.css(C.spacer, "display")),
                            s = {};
                        C.relSize.width || C.relSize.autoFullWidth ? t ? n.css(k, {
                            width: n.get.width(C.spacer)
                        }) : n.css(k, {
                            width: "100%"
                        }) : (s["min-width"] = n.get.width(e ? k : i, !0, !0), s.width = t ? s["min-width"] : "auto"), C.relSize.height ? t ? n.css(k, {
                            height: n.get.height(C.spacer) - (C.pushFollowers ? c.duration : 0)
                        }) : n.css(k, {
                            height: "100%"
                        }) : (s["min-height"] = n.get.height(e ? i : k, !0, !r), s.height = t ? s["min-height"] : "auto"), C.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = c.duration * h, s["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - h)), n.css(C.spacer, s)
                    }
                },
                O = function() {
                    o && k && "DURING" === u && !o.info("isDocument") && P()
                },
                E = function() {
                    o && k && "DURING" === u && ((C.relSize.width || C.relSize.autoFullWidth) && n.get.width(window) != n.get.width(C.spacer.parentNode) || C.relSize.height && n.get.height(window) != n.get.height(C.spacer.parentNode)) && A()
                },
                $ = function(t) {
                    o && k && "DURING" === u && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
            this.setPin = function(t, e) {
                var i = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (e = n.extend({}, i, e), !(t = n.get.elements(t)[0])) return g(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), l;
                if ("fixed" === n.css(t, "position")) return g(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), l;
                if (k) {
                    if (k === t) return l;
                    l.removePin()
                }
                k = t;
                var r = k.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                k.parentNode.style.display = "none";
                var s = "absolute" != n.css(k, "position"),
                    a = n.css(k, o.concat(["display"])),
                    u = n.css(k, ["width", "height"]);
                k.parentNode.style.display = r, !s && e.pushFollowers && (g(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), e.pushFollowers = !1), window.setTimeout(function() {
                    k && 0 === c.duration && e.pushFollowers && g(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var h = k.parentNode.insertBefore(document.createElement("div"), k),
                    f = n.extend(a, {
                        position: s ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (s || n.extend(f, n.css(k, ["width", "height"])), n.css(h, f), h.setAttribute("data-scrollmagic-pin-spacer", ""), n.addClass(h, e.spacerClass), C = {
                        spacer: h,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && s && n.isMarginCollapseType(a.display)
                        },
                        pushFollowers: e.pushFollowers,
                        inFlow: s
                    }, !k.___origStyle) {
                    k.___origStyle = {};
                    var p = k.style;
                    o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) {
                        k.___origStyle[t] = p[t] || ""
                    })
                }
                return C.relSize.width && n.css(h, {
                    width: u.width
                }), C.relSize.height && n.css(h, {
                    height: u.height
                }), h.appendChild(k), n.css(k, {
                    position: s ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (C.relSize.width || C.relSize.autoFullWidth) && n.css(k, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", E), k.addEventListener("mousewheel", $), k.addEventListener("DOMMouseScroll", $), g(3, "added pin"), P(), l
            }, this.removePin = function(t) {
                if (k) {
                    if ("DURING" === u && P(!0), t || !o) {
                        var e = C.spacer.firstChild;
                        if (e.hasAttribute("data-scrollmagic-pin-spacer")) {
                            var i = C.spacer.style,
                                r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, r.forEach(function(t) {
                                margins[t] = i[t] || ""
                            }), n.css(e, margins)
                        }
                        C.spacer.parentNode.insertBefore(e, C.spacer), C.spacer.parentNode.removeChild(C.spacer), k.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (n.css(k, k.___origStyle), delete k.___origStyle)
                    }
                    window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", E), k.removeEventListener("mousewheel", $), k.removeEventListener("DOMMouseScroll", $), k = void 0, g(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                }
                return l
            };
            var D, R = [];
            return l.on("destroy.internal", function(t) {
                    l.removeClassToggle(t.reset)
                }), this.setClassToggle = function(t, e) {
                    var i = n.get.elements(t);
                    return 0 !== i.length && n.type.String(e) ? (R.length > 0 && l.removeClassToggle(), D = e, R = i, l.on("enter.internal_class leave.internal_class", function(t) {
                        var e = "enter" === t.type ? n.addClass : n.removeClass;
                        R.forEach(function(t, i) {
                            e(t, D)
                        })
                    }), l) : (g(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), l)
                }, this.removeClassToggle = function(t) {
                    return t && R.forEach(function(t, e) {
                        n.removeClass(t, D)
                    }), l.off("start.internal_class end.internal_class"), D = void 0, R = [], l
                },
                function() {
                    for (var t in c) a.hasOwnProperty(t) || (g(2, 'WARNING: Unknown option "' + t + '"'), delete c[t]);
                    for (var e in a) S(e);
                    T()
                }(), l
        };
        var i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !n.type.Number(t)) throw ['Invalid value for option "offset":', t];
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = n.get.elements(t)[0];
                        if (!e) throw ['Element defined in option "triggerElement" was not found:', t];
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw ['Invalid value for option "triggerHook": ', t];
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                },
                loglevel: function(t) {
                    if (t = parseInt(t), !n.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t];
                    return t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(e, n, r, o) {
            e in i.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (i.defaults[e] = n, i.validate[e] = r, o && i.shifts.push(e))
        }, t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
                return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
            }, n.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, i, n) {
            n = n || {};
            for (var r in n) this[r] = n[r];
            return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var n = t._util = function(t) {
            var e, i = {},
                n = function(t) {
                    return parseFloat(t) || 0
                },
                r = function(e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                o = function(e, i, o, s) {
                    if ((i = i === document ? t : i) === t) s = !1;
                    else if (!d.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (o && s) {
                        var l = r(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                },
                s = function(t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                };
            i.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function(t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                c = t.requestAnimationFrame,
                u = t.cancelAnimationFrame;
            for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            c || (c = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    r = t.setTimeout(function() {
                        e(i + n)
                    }, n);
                return a = i + n, r
            }), u || (u = function(e) {
                t.clearTimeout(e)
            }), i.rAF = c.bind(t), i.cAF = u.bind(t);
            var h = ["error", "warn", "log"],
                f = t.console || {};
            for (f.log = f.log || function() {}, e = 0; e < h.length; e++) {
                var p = h[e];
                f[p] || (f[p] = f.log)
            }
            i.log = function(t) {
                (t > h.length || t <= 0) && (t = h.length);
                var e = new Date,
                    i = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                    n = h[t - 1],
                    r = Array.prototype.splice.call(arguments, 1),
                    o = Function.prototype.bind.call(f[n], f);
                r.unshift(i), o.apply(f, r)
            };
            var d = i.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            d.String = function(t) {
                return "string" === d(t)
            }, d.Function = function(t) {
                return "function" === d(t)
            }, d.Array = function(t) {
                return Array.isArray(t)
            }, d.Number = function(t) {
                return !d.Array(t) && t - parseFloat(t) + 1 >= 0
            }, d.DomElement = function(t) {
                return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var m = i.get = {};
            return m.elements = function(e) {
                var i = [];
                if (d.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (t) {
                    return i
                }
                if ("nodelist" === d(e) || d.Array(e))
                    for (var n = 0, r = i.length = e.length; n < r; n++) {
                        var o = e[n];
                        i[n] = d.DomElement(o) ? o : m.elements(o)
                    } else(d.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, m.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, m.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, m.width = function(t, e, i) {
                return o("width", t, e, i)
            }, m.height = function(t, e, i) {
                return o("height", t, e, i)
            }, m.offset = function(t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var n = t.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, e || (i.top += m.scrollTop(), i.left += m.scrollLeft())
                }
                return i
            }, i.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, i.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(t, e) {
                if (d.String(e)) return r(t)[s(e)];
                if (d.Array(e)) {
                    var i = {},
                        n = r(t);
                    return e.forEach(function(t, e) {
                        i[t] = n[s(t)]
                    }), i
                }
                for (var o in e) {
                    var a = e[o];
                    a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
                }
            }, i
        }(window || {});
        return t.Scene.prototype.addIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.removeIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.setTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.removeTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.setVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t.Scene.prototype.removeVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t
    })
}, function(t, e, i) {
    "use strict";
    var n = i(20);
    t.exports = function(t) {
        var e = n.ToObject(this),
            i = n.ToInteger(n.ToLength(e.length));
        if (!n.IsCallable(t)) throw new TypeError("Array#find: predicate must be a function");
        if (0 !== i)
            for (var r, o = arguments[1], s = 0; s < i; s++)
                if (r = e[s], n.Call(t, o, [r, s, e])) return r
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function() {
        return Array.prototype.find && 1 !== [, 1].find(function() {
            return !0
        }) ? Array.prototype.find : i(11)
    }
}, function(t, e, i) {
    "use strict";
    e.a = {
        breakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    }
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = i(16),
            o = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
                var n = {
                    activeContainer: {}
                };
                return i.prototype.boot = function() {
                    this.defineProps(), this.events()
                }, i.prototype.defineProps = function() {
                    this.name = "Fader", this.resize = {}, this.container = this.options.container || ".fader-container", this.$container = this.$el.find(this.container), this.nav = this.options.nav || ".fader-nav", this.$nav = this.$el.find(this.nav), this.navLink = this.options.navLink || ".nav-link", this.$navLink = this.$nav.find(this.navLink), this.scrollOffset = 0, this.activeClassname = this.options.activeClassname || "active", this.activeClass = "." + this.activeClassname
                }, i.prototype.destroy = function() {
                    this.$navLink.off("click." + this.name)
                }, i.prototype.events = function() {
                    t(window).on("resize." + this.name, this.onResize.bind(this)).one("load." + this.name, this.onLoad.bind(this)), this.$el.find(this.activeClass).removeClass(this.activeClassname), this.$navLink.on("click." + this.name, this.onNavigate.bind(this))
                }, i.prototype.onLoad = function() {
                    for (var e = this, i = 0; i < this.$navLink.length; i += 1) {
                        var n = e.$navLink.eq(i),
                            r = n.attr("href");
                        TweenMax.set(r, {
                            autoAlpha: 0
                        })
                    }
                    var o = this.$navLink.first(),
                        s = t(o.attr("href"));
                    if (s.length) {
                        var a = s.innerHeight() + "px";
                        o.add(s).addClass(this.activeClassname), TweenMax.set(this.$container, {
                            height: a
                        }), TweenMax.set(s, {
                            autoAlpha: 1
                        })
                    }
                }, i.prototype.onResize = function() {
                    var e = this.activeContainer;
                    if (t(e).length) {
                        var n = t(e).innerHeight() || "",
                            r = t(e).position().top || 0;
                        r -= i.elementOffset(e), this.resize.height !== n && (TweenMax.set(this.$container, {
                            height: n
                        }), this.$container.scrollTop(r)), this.resize.height = n
                    }
                }, i.prototype.onNavigate = function(e) {
                    var i = e.currentTarget,
                        n = t(i).attr("href");
                    t(n).length && (e.preventDefault(), t(i).hasClass(this.activeClassname) || (this.$navLink.removeClass(this.activeClassname), t(i).addClass(this.activeClassname), this.goTo(n)))
                }, i.prototype.goTo = function(e) {
                    var n = this,
                        o = t(e).innerHeight() || "",
                        s = t(e).position().top || 0;
                    !this.scrollOffset && s < 0 && (this.scrollOffset = s), s -= this.scrollOffset, s -= i.elementOffset(e);
                    var a = this.activeContainer;
                    this.debug = !0, i.transiteOut(a, function() {
                        a.removeClass("" + n.activeClassname), t(e).addClass("" + n.activeClassname), i.transiteHeight(n.$container, o), i.transiteScroll(n.$container, s), i.transiteIn(e, function() {
                            return TweenMax.to(window, .125, {
                                scrollTo: n.$container.offset().top || 0
                            }).eventCallback("onComplete", function() {
                                setTimeout(function() {
                                    t(window).trigger("resize"), r.b.update(!0)
                                }, 400)
                            })
                        })
                    })
                }, i.transiteScroll = function(t, e) {
                    return TweenMax.to(t, 0, {
                        scrollTo: e,
                        delay: .125
                    })
                }, i.transiteHeight = function(t, e) {
                    return TweenMax.to(t, .125, {
                        height: e
                    })
                }, i.transiteOut = function(e, i) {
                    void 0 === i && (i = t.noop);
                    var n = [e, .6];
                    return n.push({
                        autoAlpha: 1
                    }), n.push({
                        autoAlpha: 0,
                        onComplete: i
                    }), TweenMax.fromTo.apply(TweenMax, n)
                }, i.transiteIn = function(e, i) {
                    void 0 === i && (i = t.noop);
                    var n = [e, .6];
                    return n.push({
                        autoAlpha: 0
                    }), n.push({
                        autoAlpha: 1,
                        onComplete: i
                    }), TweenMax.fromTo.apply(TweenMax, n)
                }, i.elementOffset = function(e) {
                    return -1 * parseInt(t(e).css("marginTop"))
                }, n.activeContainer.get = function() {
                    return this.$container.find("" + this.activeClass)
                }, Object.defineProperties(i.prototype, n), i
            }(n.a);
        e.a = o
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = function(t) {
                this.debug = !1, this.options = t || {}, this.attrs = {}, this.fill(this.options.attrs || {}), this.name = "ModelView", this.dirty = !1, this.rendered = !1, this.view = this.options.view || "", this.boot()
            },
            n = {
                namespace: {},
                id: {},
                view: {},
                $el: {},
                $view: {}
            },
            r = {
                store: {},
                configs: {}
            };
        i.prototype.render = function() {
            this.renderView(), this.afterRender()
        }, i.prototype.renderView = function() {
            throw new Error("Method renderView is required")
        }, i.prototype.afterRender = function() {
            this.rendered = !0
        }, i.prototype.boot = function() {
            throw new Error("Method boot is required")
        }, i.prototype.destroy = function() {
            throw new Error("Method destroy is required")
        }, i.prototype.log = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            this.debug && console.log(t, this.constructor.name)
        }, i.prototype.fill = function(t) {
            var e = this;
            void 0 === t && (t = {});
            for (var i in t) t.hasOwnProperty(i) && e.setAttr(i, t[i])
        }, i.prototype.getAttr = function(t) {
            return this.attrs[t]
        }, i.prototype.setAttr = function(t, e) {
            this.dirty = !0, this.attrs[t] = e
        }, n.namespace.get = function() {
            var t = /^function\s+([\w\$]+)\s*\(/.exec(this.name);
            return t ? t[1] : ""
        }, i.prototype.toString = function() {
            return this.name
        }, i.createDefer = function(e) {
            void 0 === e && (e = null);
            var i = e;
            return e || (i = t.Deferred()), i
        }, i.config = function(e) {
            t.extend({}, this.configs, e)
        }, r.store.get = function() {
            throw new Error("Return a Store array.")
        }, r.configs.get = function() {
            throw new Error("Return a Configs object.")
        }, n.id.get = function() {
            return this.getAttr("id")
        }, n.id.set = function(t) {
            this.setAttr("id", t)
        }, n.view.get = function() {
            return this.getAttr("view")
        }, n.view.set = function(t) {
            return this.setAttr("view", t)
        }, n.$el.get = function() {
            return t(this.el)
        }, n.$view.get = function() {
            return t(this.view)
        }, Object.defineProperties(i.prototype, n), Object.defineProperties(i, r), e.a = i
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i.d(e, "b", function() {
            return f
        });
        var n = i(10),
            r = i.n(n),
            o = i(13),
            s = i(18),
            a = this,
            l = ["#s-prelude", "#s-about", "#s-restaurant-menu", "#s-stories", "#s-press", "#s-reservations", "#s-contact"],
            c = ["#s-about", "#s-restaurant-menu"],
            u = {},
            h = {
                store: {},
                opacity: function(e, i) {
                    var n = TweenMax.fromTo(i + " .scene-opacity", 1, {
                            autoAlpha: 0,
                            scale: .95
                        }, {
                            autoAlpha: 1,
                            scale: 1
                        }),
                        r = this.scene({
                            triggerElement: i,
                            duration: function() {
                                var t = .25 * window.innerHeight;
                                return t > window.innerHeight ? window.innerHeight : t
                            }
                        }).setTween(n).on("end", function() {
                            t(i).find(".scene-opacity").css({
                                transform: ""
                            })
                        });
                    return e.addScene(r), r
                },
                staticFadeIn: function(e, i) {
                    TweenMax.set(i + " .scene-opacity", {
                        autoAlpha: 0,
                        scale: .95
                    });
                    var n = t(i),
                        r = function() {
                            n.find(".scene-opacity").css({
                                transform: ""
                            })
                        },
                        o = this.scene({
                            triggerElement: i,
                            duration: 0
                        }).setTween(i + " .scene-opacity", .5, {
                            autoAlpha: 1,
                            scale: 1,
                            onComplete: r
                        }).on("end", r);
                    return e.addScene(o), o
                },
                background: function(e, i) {
                    var n = t(i),
                        r = this.scene({
                            triggerElement: i,
                            duration: function() {
                                var t = n.innerHeight();
                                return n.find("[data-pithole]").length && (t = 0), t
                            }
                        }),
                        o = n.find("[data-pin-class]").data("pinClass") || null;
                    return o && r.setClassToggle("#site-wrap", o), e.addScene(r), r
                },
                menuComposerStyle: function(e, i) {
                    var n = t(i),
                        r = this.scene({
                            triggerElement: i,
                            duration: function() {
                                return n.innerHeight()
                            }
                        }),
                        o = n.find("[data-menu-pin-class]").data("menuPinClass") || null;
                    return o && r.setClassToggle("#site-banner", o), e.addScene(r), r
                },
                navPin: function(e, i) {
                    var n = t(i),
                        r = n.find(".nav"),
                        o = n.find(".nav-pin"),
                        s = function() {
                            var t = n.outerHeight(),
                                e = n.height(),
                                i = o.height(),
                                s = r.height() + (t - e),
                                a = e - i - 2 * s;
                            return Math.max(1, a)
                        },
                        a = this.scene({
                            triggerElement: i,
                            triggerHook: 0,
                            duration: s
                        }).setPin(i + " .nav-pin"),
                        l = o.data("pinMinWidth");
                    return l && (void 0 === u[l] && (u[l] = []), u[l].push(a)), e.addScene(a), a
                },
                matchNavPinMedia: function() {
                    var e = this;
                    t.each(u, function(t) {
                        if (o.a.breakpoints[t]) {
                            var i = window.matchMedia("(min-width: " + o.a.breakpoints[t] + "px)");
                            i.breakpoint = t, i.addListener(e.updateNavPins)
                        }
                    })
                },
                updateNavPins: function() {
                    t.each(u, function(e, n) {
                        for (var r = 0; r < n.length; r += 1) {
                            var o = n[r],
                                a = o.triggerElement();
                            i.i(s.a)(e) ? (o.setPin(t(a).find(".nav-pin").get(0)), o.refresh()) : o.removePin(!0)
                        }
                    })
                },
                scene: function(t) {
                    return new r.a.Scene(t)
                }
            },
            f = new r.a.Controller,
            p = function() {
                var t = l;
                a.controller = f, a.registerScenes = function() {
                    for (var e = 0; e < t.length; e += 1) {
                        var i = t[e];
                        h.staticFadeIn(a.controller, i), h.background(a.controller, i), h.menuComposerStyle(a.controller, i)
                    }
                    for (var n = 0; n < c.length; n += 1) {
                        var r = c[n];
                        h.navPin(a.controller, r)
                    }
                    h.matchNavPinMedia(), h.updateNavPins()
                }, a.registerScenes()
            };
        e.a = p
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(5),
            r = i(15),
            o = i(6),
            s = {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: !0,
                speed: 1e3,
                dots: !0,
                arrows: !0
            },
            a = new n.a,
            l = {
                el: ".post-spread-slider"
            },
            c = function(e) {
                function n() {
                    e.apply(this, arguments)
                }
                e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
                var r = {
                        url: {}
                    },
                    c = {
                        store: {},
                        configs: {}
                    };
                return n.prototype.boot = function() {
                    if (this.debug = !0, this.name = "Story", !this.view) throw new Error("No view was defined.");
                    if (!this.id && (this.id = t(this.view).data("postId"), !this.id)) throw new Error("Data attribute data-post-id was not defined.");
                    this.el = this.view, n.store.cache(this)
                }, n.prototype.destroy = function() {
                    var t = this;
                    ! function() {
                        t.rendered && t.$slick.slick("unslick")
                    }()
                }, n.prototype.render = function(e) {
                    void 0 === e && (e = null);
                    var i = t(e);
                    if (!i.length) throw new Error("No placeholder defined");
                    i.replaceWith(this.view), this.$slick = this.$el.find(".slick");
                    var n = this.$el.find(".slideshow-prev-btn"),
                        r = this.$el.find(".slideshow-next-btn"),
                        o = t.extend(s, this.options, {
                            prevArrow: n,
                            nextArrow: r
                        });
                    this.slick = this.$slick.slick(o).slick("getSlick"), this.rendered = !0
                }, n.prototype.getAttr = function(t) {
                    return this.attrs[t]
                }, n.prototype.setAttr = function(t, e) {
                    this.dirty = !0, this.attrs[t] = e
                }, n.load = function(e, r) {
                    void 0 === r && (r = null);
                    var s = this.createDefer(r);
                    i.i(o.a)({
                        url: e
                    }, function(i) {
                        var r = t(i).find(l.el);
                        if (!r.length) throw new Error("No view is found");
                        var o = new n({
                            view: r.get(0),
                            attrs: {
                                id: r.data("postId"),
                                url: e
                            }
                        });
                        s.resolve(o)
                    })
                }, n.config = function(e) {
                    t.extend({}, n.configs, e)
                }, c.store.get = function() {
                    return a
                }, c.configs.get = function() {
                    return l
                }, r.url.get = function() {
                    return this.getAttr("url")
                }, r.url.set = function(t) {
                    return this.setAttr("url", t)
                }, Object.defineProperties(n.prototype, r), Object.defineProperties(n, c), n
            }(r.a);
        e.a = c
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    var n = i(13);
    e.a = function(t) {
        var e = n.a.breakpoints,
            i = void 0 !== e[t] ? e[t] : 0;
        return window.innerWidth > i
    }
}, function(t, e, i) {
    "use strict";
    var n = i(78),
        r = i(68),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol(),
        s = Object.prototype.toString,
        a = function(t) {
            return "function" == typeof t && "[object Function]" === s.call(t)
        },
        l = Object.defineProperty && function() {
            var t = {};
            try {
                Object.defineProperty(t, "x", {
                    enumerable: !1,
                    value: t
                });
                for (var e in t) return !1;
                return t.x === t
            } catch (t) {
                return !1
            }
        }(),
        c = function(t, e, i, n) {
            (!(e in t) || a(n) && n()) && (l ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: i,
                writable: !0
            }) : t[e] = i)
        },
        u = function(t, e) {
            var i = arguments.length > 2 ? arguments[2] : {},
                s = n(e);
            o && (s = s.concat(Object.getOwnPropertySymbols(e))), r(s, function(n) {
                c(t, n, e[n], i[n])
            })
        };
    u.supportsDescriptors = !!l, t.exports = u
}, function(t, e, i) {
    "use strict";
    t.exports = i(60)
}, function(t, e) {
    var i = Number.isNaN || function(t) {
        return t !== t
    };
    t.exports = Number.isFinite || function(t) {
        return "number" == typeof t && !i(t) && t !== 1 / 0 && t !== -1 / 0
    }
}, function(t, e) {
    t.exports = Number.isNaN || function(t) {
        return t !== t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var i = t % e;
        return Math.floor(i >= 0 ? i : i + e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t >= 0 ? 1 : -1
    }
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, i) {
    (function(n) {
        var r, o;
        /*!
         * VERSION: 1.19.1
         * DATE: 2017-01-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        ! function(n, s) {
            "use strict";
            var a = {},
                l = n.document,
                c = n.GreenSockGlobals = n.GreenSockGlobals || n;
            if (!c.TweenLite) {
                var u, h, f, p, d, m = function(t) {
                        var e, i = t.split("."),
                            n = c;
                        for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                        return n
                    },
                    g = m("com.greensock"),
                    v = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    _ = function() {},
                    y = function() {
                        var t = Object.prototype.toString,
                            e = t.call([]);
                        return function(i) {
                            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                        }
                    }(),
                    b = {},
                    w = function(n, s, l, u) {
                        this.sc = b[n] ? b[n].sc : [], b[n] = this, this.gsClass = null, this.func = l;
                        var h = [];
                        this.check = function(f) {
                            for (var p, d, g, v, _, y = s.length, T = y; --y > -1;)(p = b[s[y]] || new w(s[y], [])).gsClass ? (h[y] = p.gsClass, T--) : f && p.sc.push(this);
                            if (0 === T && l) {
                                if (d = ("com.greensock." + n).split("."), g = d.pop(), v = m(d.join("."))[g] = this.gsClass = l.apply(l, h), u)
                                    if (c[g] = a[g] = v, !(_ = void 0 !== t && t.exports) && i(27)) r = [], void 0 !== (o = function() {
                                        return v
                                    }.apply(e, r)) && (t.exports = o);
                                    else if (_)
                                    if ("TweenLite" === n) {
                                        t.exports = a.TweenLite = v;
                                        for (y in a) v[y] = a[y]
                                    } else a.TweenLite && (a.TweenLite[g] = v);
                                for (y = 0; y < this.sc.length; y++) this.sc[y].check()
                            }
                        }, this.check(!0)
                    },
                    T = n._gsDefine = function(t, e, i, n) {
                        return new w(t, e, i, n)
                    },
                    x = g._class = function(t, e, i) {
                        return e = e || function() {}, T(t, [], function() {
                            return e
                        }, i), e
                    };
                T.globals = c;
                var S = [0, 0, 1, 1],
                    k = x("easing.Ease", function(t, e, i, n) {
                        this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? S.concat(e) : S
                    }, !0),
                    C = k.map = {},
                    P = k.register = function(t, e, i, n) {
                        for (var r, o, s, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                            for (o = l[c], r = n ? x("easing." + o, null, !0) : g.easing[o] || {}, s = u.length; --s > -1;) a = u[s], C[o + "." + a] = C[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                    };
                for (f = k.prototype, f._calcEnd = !1, f.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }, u = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = u.length; --h > -1;) f = u[h] + ",Power" + h, P(new k(null, null, 1, h), f, "easeOut", !0), P(new k(null, null, 2, h), f, "easeIn" + (0 === h ? ",easeNone" : "")), P(new k(null, null, 3, h), f, "easeInOut");
                C.linear = g.easing.Linear.easeIn, C.swing = g.easing.Quad.easeInOut;
                var A = x("events.EventDispatcher", function(t) {
                    this._listeners = {}, this._eventTarget = t || this
                });
                f = A.prototype, f.addEventListener = function(t, e, i, n, r) {
                    r = r || 0;
                    var o, s, a = this._listeners[t],
                        l = 0;
                    for (this !== p || d || p.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                    a.splice(l, 0, {
                        c: e,
                        s: i,
                        up: n,
                        pr: r
                    })
                }, f.removeEventListener = function(t, e) {
                    var i, n = this._listeners[t];
                    if (n)
                        for (i = n.length; --i > -1;)
                            if (n[i].c === e) return void n.splice(i, 1)
                }, f.dispatchEvent = function(t) {
                    var e, i, n, r = this._listeners[t];
                    if (r)
                        for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                            type: t,
                            target: i
                        }) : n.c.call(n.s || i))
                };
                var O = n.requestAnimationFrame,
                    E = n.cancelAnimationFrame,
                    $ = Date.now || function() {
                        return (new Date).getTime()
                    },
                    D = $();
                for (u = ["ms", "moz", "webkit", "o"], h = u.length; --h > -1 && !O;) O = n[u[h] + "RequestAnimationFrame"], E = n[u[h] + "CancelAnimationFrame"] || n[u[h] + "CancelRequestAnimationFrame"];
                x("Ticker", function(t, e) {
                    var i, n, r, o, s, a = this,
                        c = $(),
                        u = !(!1 === e || !O) && "auto",
                        h = 500,
                        f = 33,
                        m = function(t) {
                            var e, l, u = $() - D;
                            u > h && (c += u - f), D += u, a.time = (D - c) / 1e3, e = a.time - s, (!i || e > 0 || !0 === t) && (a.frame++, s += e + (e >= o ? .004 : o - e), l = !0), !0 !== t && (r = n(m)), l && a.dispatchEvent("tick")
                        };
                    A.call(a), a.time = a.frame = 0, a.tick = function() {
                        m(!0)
                    }, a.lagSmoothing = function(t, e) {
                        h = t || 1e10, f = Math.min(e, h, 0)
                    }, a.sleep = function() {
                        null != r && (u && E ? E(r) : clearTimeout(r), n = _, r = null, a === p && (d = !1))
                    }, a.wake = function(t) {
                        null !== r ? a.sleep() : t ? c += -D + (D = $()) : a.frame > 10 && (D = $() - h + 5), n = 0 === i ? _ : u && O ? O : function(t) {
                            return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
                        }, a === p && (d = !0), m(2)
                    }, a.fps = function(t) {
                        if (!arguments.length) return i;
                        i = t, o = 1 / (i || 60), s = this.time + o, a.wake()
                    }, a.useRAF = function(t) {
                        if (!arguments.length) return u;
                        a.sleep(), u = t, a.fps(i)
                    }, a.fps(t), setTimeout(function() {
                        "auto" === u && a.frame < 5 && "hidden" !== l.visibilityState && a.useRAF(!1)
                    }, 1500)
                }), f = g.Ticker.prototype = new g.events.EventDispatcher, f.constructor = g.Ticker;
                var R = x("core.Animation", function(t, e) {
                    if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                        d || p.wake();
                        var i = this.vars.useFrames ? K : Z;
                        i.add(this, i._time), this.vars.paused && this.paused(!0)
                    }
                });
                p = R.ticker = new g.Ticker, f = R.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
                var M = function() {
                    d && $() - D > 2e3 && p.wake(), setTimeout(M, 2e3)
                };
                M(), f.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, f.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, f.resume = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!1)
                }, f.seek = function(t, e) {
                    return this.totalTime(Number(t), !1 !== e)
                }, f.restart = function(t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                }, f.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, f.render = function(t, e, i) {}, f.invalidate = function() {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, f.isActive = function() {
                    var t, e = this._timeline,
                        i = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
                }, f._enabled = function(t, e) {
                    return d || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                }, f._kill = function(t, e) {
                    return this._enabled(!1, !1)
                }, f.kill = function(t, e) {
                    return this._kill(t, e), this
                }, f._uncache = function(t) {
                    for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                    return this
                }, f._swapSelfInParams = function(t) {
                    for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                    return i
                }, f._callback = function(t) {
                    var e = this.vars,
                        i = e[t],
                        n = e[t + "Params"],
                        r = e[t + "Scope"] || e.callbackScope || this;
                    switch (n ? n.length : 0) {
                        case 0:
                            i.call(r);
                            break;
                        case 1:
                            i.call(r, n[0]);
                            break;
                        case 2:
                            i.call(r, n[0], n[1]);
                            break;
                        default:
                            i.apply(r, n)
                    }
                }, f.eventCallback = function(t, e, i, n) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }, f.delay = function(t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                }, f.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, f.totalDuration = function(t) {
                    return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                }, f.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }, f.totalTime = function(t, e, i) {
                    if (d || p.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var n = this._totalDuration,
                                r = this._timeline;
                            if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && tt(), this.render(t, e, !1), z.length && tt())
                    }
                    return this
                }, f.progress = f.totalProgress = function(t, e) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                }, f.startTime = function(t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                }, f.endTime = function(t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }, f.timeScale = function(t) {
                    if (!arguments.length) return this._timeScale;
                    if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                        var e = this._pauseTime,
                            i = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = i - (i - this._startTime) * this._timeScale / t
                    }
                    return this._timeScale = t, this._uncache(!1)
                }, f.reversed = function(t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, f.paused = function(t) {
                    if (!arguments.length) return this._paused;
                    var e, i, n = this._timeline;
                    return t != this._paused && n && (d || t || p.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                };
                var j = x("core.SimpleTimeline", function(t) {
                    R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                f = j.prototype = new R, f.constructor = j, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, n) {
                    var r, o;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                        for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                    return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                }, f._remove = function(t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, f.render = function(t, e, i) {
                    var n, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                }, f.rawTime = function() {
                    return d || p.wake(), this._totalTime
                };
                var I = x("TweenLite", function(t, e, i) {
                        if (R.call(this, e, i), this.render = I.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : I.selector(t) || t;
                        var r, o, s, a = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                            l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                            for (this._targets = s = v(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== n && o[0] && (o[0] === n || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(v(o))) : (this._siblings[r] = et(o, this, !1), 1 === l && this._siblings[r].length > 1 && nt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = s[r--] = I.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                        else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    L = function(t) {
                        return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    F = function(t, e) {
                        var i, n = {};
                        for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!G[i] || G[i] && G[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    };
                f = I.prototype = new R, f.constructor = I, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, I.version = "1.19.1", I.defaultEase = f._ease = new k(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = p, I.autoSleep = 120, I.lagSmoothing = function(t, e) {
                    p.lagSmoothing(t, e)
                }, I.selector = n.$ || n.jQuery || function(t) {
                    var e = n.$ || n.jQuery;
                    return e ? (I.selector = e, e(t)) : void 0 === l ? t : l.querySelectorAll ? l.querySelectorAll(t) : l.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                };
                var z = [],
                    N = {},
                    B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    H = function(t) {
                        for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                    },
                    W = function(t, e, i, n) {
                        var r, o, s, a, l, c, u, h = [],
                            f = 0,
                            p = "",
                            d = 0;
                        for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(B) || [], o = e.match(B) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; a < l; a++) u = o[a], c = e.substr(f, e.indexOf(u, f) - f), p += c || !a ? c : ",", f += c.length, d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), u === r[a] || r.length <= a ? p += u : (p && (h.push(p), p = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                            _next: h._firstPT,
                            t: h,
                            p: h.length - 1,
                            s: s,
                            c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                            f: 0,
                            m: d && d < 4 ? Math.round : 0
                        }), f += u.length;
                        return p += e.substr(f), p && h.push(p), h.setRatio = H, h
                    },
                    X = function(t, e, i, n, r, o, s, a, l) {
                        "function" == typeof n && (n = n(l || 0, t));
                        var c, u = typeof t[e],
                            h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                            f = "get" !== i ? i : h ? s ? t[h](s) : t[h]() : t[e],
                            p = "string" == typeof n && "=" === n.charAt(1),
                            d = {
                                t: t,
                                p: e,
                                s: f,
                                f: "function" === u,
                                pg: 0,
                                n: r || e,
                                m: o ? "function" == typeof o ? o : Math.round : 0,
                                pr: 0,
                                c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0
                            };
                        if (("number" != typeof f || "number" != typeof n && !p) && (s || isNaN(f) || !p && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (d.fp = s, c = W(f, p ? d.s + d.c : n, a || I.defaultStringFilter, d), d = {
                                t: c,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: r || e,
                                pr: 0,
                                m: 0
                            }) : (d.s = parseFloat(f), p || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                    },
                    U = I._internals = {
                        isArray: y,
                        isSelector: L,
                        lazyTweens: z,
                        blobDif: W
                    },
                    G = I._plugins = {},
                    q = U.tweenLookup = {},
                    Y = 0,
                    V = U.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    },
                    Q = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    K = R._rootFramesTimeline = new j,
                    Z = R._rootTimeline = new j,
                    J = 30,
                    tt = U.lazyRender = function() {
                        var t, e = z.length;
                        for (N = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        z.length = 0
                    };
                Z._startTime = p.time, K._startTime = p.frame, Z._active = K._active = !0, setTimeout(tt, 1), R._updateRoot = I.render = function() {
                    var t, e, i;
                    if (z.length && tt(), Z.render((p.time - Z._startTime) * Z._timeScale, !1, !1), K.render((p.frame - K._startTime) * K._timeScale, !1, !1), z.length && tt(), p.frame >= J) {
                        J = p.frame + (parseInt(I.autoSleep, 10) || 120);
                        for (i in q) {
                            for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete q[i]
                        }
                        if ((!(i = Z._first) || i._paused) && I.autoSleep && !K._first && 1 === p._listeners.tick.length) {
                            for (; i && i._paused;) i = i._next;
                            i || p.sleep()
                        }
                    }
                }, p.addEventListener("tick", R._updateRoot);
                var et = function(t, e, i) {
                        var n, r, o = t._gsTweenID;
                        if (q[o || (t._gsTweenID = o = "t" + Y++)] || (q[o] = {
                                target: t,
                                tweens: []
                            }), e && (n = q[o].tweens, n[r = n.length] = e, i))
                            for (; --r > -1;) n[r] === e && n.splice(r, 1);
                        return q[o].tweens
                    },
                    it = function(t, e, i, n) {
                        var r, o, s = t.vars.onOverwrite;
                        return s && (r = s(t, e, i, n)), s = I.onOverwrite, s && (o = s(t, e, i, n)), !1 !== r && !1 !== o
                    },
                    nt = function(t, e, i, n, r) {
                        var o, s, a, l;
                        if (1 === n || n >= 4) {
                            for (l = r.length, o = 0; o < l; o++)
                                if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                                else if (5 === n) break;
                            return s
                        }
                        var c, u = e._startTime + 1e-10,
                            h = [],
                            f = 0,
                            p = 0 === e._duration;
                        for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || rt(e, 0, p), 0 === rt(a, c, p) && (h[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (h[f++] = a)));
                        for (o = f; --o > -1;)
                            if (a = h[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                                if (2 !== n && !it(a, e)) continue;
                                a._enabled(!1, !1) && (s = !0)
                            } return s
                    },
                    rt = function(t, e, i) {
                        for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                            if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                            n = n._timeline
                        }
                        return o /= r, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10
                    };
                f._init = function() {
                    var t, e, i, n, r, o, s = this.vars,
                        a = this._overwrittenProps,
                        l = this._duration,
                        c = !!s.immediateRender,
                        u = s.ease;
                    if (s.startAt) {
                        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                        for (n in s.startAt) r[n] = s.startAt[n];
                        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), c)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== l) return
                    } else if (s.runBackwards && 0 !== l)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            0 !== this._time && (c = !1), i = {};
                            for (n in s) V[n] && "autoCSS" !== n || (i[n] = s[n]);
                            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== s.lazy, i.immediateRender = c, this._startAt = I.to(this.target, 0, i), c) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        } if (this._ease = u = u ? u instanceof k ? u : "function" == typeof u ? new k(u, s.easeParams) : C[u] || I.defaultEase : I.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                    if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                        for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                    this._onUpdate = s.onUpdate, this._initted = !0
                }, f._initProps = function(t, e, i, r, o) {
                    var s, a, l, c, u, h;
                    if (null == t) return !1;
                    N[t._gsTweenID] && tt(), this.vars.css || t.style && t !== n && t.nodeType && G.css && !1 !== this.vars.autoCSS && F(this.vars, t);
                    for (s in this.vars)
                        if (h = this.vars[s], V[s]) h && (h instanceof Array || h.push && y(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                        else if (G[s] && (c = new G[s])._onInitTween(t, this.vars[s], this, o)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: c,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: s,
                                pg: 1,
                                pr: c._priority,
                                m: 0
                            }, a = c._overwriteProps.length; --a > -1;) e[c._overwriteProps[a]] = this._firstPT;
                        (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                    } else e[s] = X.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                    return r && this._kill(r, t) ? this._initProps(t, e, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && nt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[t._gsTweenID] = !0), l)
                }, f.render = function(t, e, i) {
                    var n, r, o, s, a = this._time,
                        l = this._duration,
                        c = this._rawPrevTime;
                    if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10);
                    else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10)), this._initted || (i = !0);
                    else if (this._totalTime = this._time = t, this._easeType) {
                        var u = t / l,
                            h = this._easeType,
                            f = this._easePower;
                        (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : t / l < .5 ? u / 2 : 1 - u / 2
                    } else this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== a || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, z.push(this), void(this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
                    }
                }, f._kill = function(t, e, i) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                    var n, r, o, s, a, l, c, u, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                    if ((y(e) || L(e)) && "number" != typeof e[0])
                        for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                    else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1;)
                                if (e === this._targets[n]) {
                                    a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target) return !1;
                            a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (a) {
                            if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                                for (o in c) a[o] && (h || (h = []), h.push(o));
                                if ((h || !t) && !it(this, i, e, h)) return !1
                            }
                            for (o in c)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
                }, f.invalidate = function() {
                    return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                }, f._enabled = function(t, e) {
                    if (d || p.wake(), t && this._gc) {
                        var i, n = this._targets;
                        if (n)
                            for (i = n.length; --i > -1;) this._siblings[i] = et(n[i], this, !0);
                        else this._siblings = et(this.target, this, !0)
                    }
                    return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }, I.to = function(t, e, i) {
                    return new I(t, e, i)
                }, I.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
                }, I.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
                }, I.delayedCall = function(t, e, i, n, r) {
                    return new I(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, I.set = function(t, e) {
                    return new I(t, 0, e)
                }, I.getTweensOf = function(t, e) {
                    if (null == t) return [];
                    t = "string" != typeof t ? t : I.selector(t) || t;
                    var i, n, r, o;
                    if ((y(t) || L(t)) && "number" != typeof t[0]) {
                        for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e));
                        for (i = n.length; --i > -1;)
                            for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                    } else
                        for (n = et(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                    return n
                }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                    "object" == typeof e && (i = e, e = !1);
                    for (var n = I.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                };
                var ot = x("plugins.TweenPlugin", function(t, e) {
                    this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                }, !0);
                if (f = ot.prototype, ot.version = "1.19.0", ot.API = 2, f._firstPT = null, f._addTween = X, f.setRatio = H, f._kill = function(t) {
                        var e, i = this._overwriteProps,
                            n = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                        for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                        return !1
                    }, f._mod = f._roundProps = function(t) {
                        for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                    }, I._onPluginEvent = function(t, e) {
                        var i, n, r, o, s, a = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; a;) {
                                for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                            }
                            a = e._firstPT = r
                        }
                        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                        return i
                    }, ot.activate = function(t) {
                        for (var e = t.length; --e > -1;) t[e].API === ot.API && (G[(new t[e])._propName] = t[e]);
                        return !0
                    }, T.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, i = t.propName,
                            n = t.priority || 0,
                            r = t.overwriteProps,
                            o = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            s = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                ot.call(this, i, n), this._overwriteProps = r || []
                            }, !0 === t.global),
                            a = s.prototype = new ot(i);
                        a.constructor = s, s.API = t.API;
                        for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                        return s.version = t.version, ot.activate([s]), s
                    }, u = n._gsQueue) {
                    for (h = 0; h < u.length; h++) u[h]();
                    for (f in b) b[f].func || n.console.log("GSAP encountered missing dependency: " + f)
                }
                d = !1
            }
        }(void 0 !== t && t.exports && void 0 !== n ? n : this || window)
    }).call(e, i(2))
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {})
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            var e = i(31),
                n = (i.n(e), i(0)),
                r = (i.n(n), i(33)),
                o = (i.n(r), i(7)),
                s = (i.n(o), i(71)),
                a = (i.n(s), i(73)),
                l = (i.n(a), i(85)),
                c = (i.n(l), i(84)),
                u = (i.n(c), i(30)),
                h = (i.n(u), i(53)),
                f = (i.n(h), i(59)),
                p = (i.n(f), i(58)),
                d = i(55),
                m = i(35),
                g = i(34),
                v = i(36);
            i.i(e.shim)(), p.a && document.documentElement.classList.remove("no-webgl");
            var _ = i.i(f.detect)();
            _ && (document.documentElement.className += " " + _.name + " " + _.name + "-" + _.version.split(".")[0]);
            var y = new d.a({
                common: g.a,
                hasSections: m.a,
                singlePost: v.a
            });
            t(document).ready(function() {
                return y.loadEvents()
            })
        }.call(e, i(0))
}, function(t, e) {}, function(t, e, i) {
    var n, r, o; /*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
    ! function(s, a) {
        r = [i(10), i(7), i(72)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = o)
    }(0, function(t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }), t.Scene.extend(function() {
            var t, n = this;
            n.on("progress.plugin_gsap", function() {
                r()
            }), n.on("destroy.plugin_gsap", function(t) {
                n.removeTween(t.reset)
            });
            var r = function() {
                if (t) {
                    var e = n.progress(),
                        i = n.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            n.setTween = function(o, s, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = e.to(o, s, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(o) : o, l.pause()
                } catch (t) {
                    return n
                }
                return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n
            }, n.removeTween = function(e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
            }
        })
    })
}, function(t, e, i) {
    "use strict";
    var n = i(19),
        r = i(20),
        o = i(11),
        s = i(12),
        a = i(32),
        l = Array.prototype.slice,
        c = s(),
        u = function(t, e) {
            r.RequireObjectCoercible(t);
            var i = l.call(arguments, 1);
            return c.apply(t, i)
        };
    n(u, {
        getPolyfill: s,
        implementation: o,
        shim: a
    }), t.exports = u
}, function(t, e, i) {
    "use strict";
    var n = i(19),
        r = i(12);
    t.exports = function() {
        var t = r();
        return n(Array.prototype, {
            find: t
        }, {
            find: function() {
                return Array.prototype.find !== t
            }
        }), t
    }
}, function(t, e, i) {
    (function(t) {
        ! function(t, e, i, n) {
            var r = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 0; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t;
                        e = null
                    }
                    return n
                }(),
                o = e.console || {
                    log: function() {},
                    time: function() {}
                },
                s = "blast",
                a = {
                    latinPunctuation: "â€“â€”â€²â€™'â€œâ€³â€ž\"(Â«.â€¦Â¡Â¿â€²â€™'â€â€³â€œ\")Â».â€¦!?",
                    latinLetters: "\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"
                },
                l = {
                    abbreviations: new RegExp("[^" + a.latinLetters + "](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^" + a.latinLetters + "]", "ig"),
                    innerWordPeriod: new RegExp("[" + a.latinLetters + "].[" + a.latinLetters + "]", "ig"),
                    onlyContainsPunctuation: new RegExp("[^" + a.latinPunctuation + "]"),
                    adjoinedPunctuation: new RegExp("^[" + a.latinPunctuation + "]+|[" + a.latinPunctuation + "]+$", "g"),
                    skippedElements: /(script|style|select|textarea)/i,
                    hasPluginClass: new RegExp("(^| )" + s + "( |$)", "gi")
                };
            t.fn[s] = function(c) {
                function u(t) {
                    return t.replace(l.abbreviations, function(t) {
                        return t.replace(/\./g, "{{46}}")
                    }).replace(l.innerWordPeriod, function(t) {
                        return t.replace(/\./g, "{{46}}")
                    })
                }

                function h(t) {
                    return t.replace(/{{(\d{1,3})}}/g, function(t, e) {
                        return String.fromCharCode(e)
                    })
                }

                function f(t, e) {
                    var n = i.createElement(e.tag);
                    if (n.className = s, e.customClass && (n.className += " " + e.customClass, e.generateIndexID && (n.id = e.customClass + "-" + v.blastedIndex)), "all" === e.delimiter && /\s/.test(t.data) && (n.style.whiteSpace = "pre-line"), !0 === e.generateValueClass && !e.search && ("character" === e.delimiter || "word" === e.delimiter)) {
                        var r, o = t.data;
                        "word" === e.delimiter && l.onlyContainsPunctuation.test(o) && (o = o.replace(l.adjoinedPunctuation, "")), r = s + "-" + e.delimiter.toLowerCase() + "-" + o.toLowerCase(), n.className += " " + r
                    }
                    return e.aria && n.setAttribute("aria-hidden", "true"), n.appendChild(t.cloneNode(!1)), n
                }

                function p(t, e) {
                    var i = -1,
                        n = 0;
                    if (3 === t.nodeType && t.data.length) {
                        if (v.nodeBeginning && (t.data = e.search || "sentence" !== e.delimiter ? h(t.data) : u(t.data), v.nodeBeginning = !1), -1 !== (i = t.data.search(m))) {
                            var r = t.data.match(m),
                                o = r[0],
                                s = r[1] || !1;
                            "" === o ? i++ : s && s !== o && (i += o.indexOf(s), o = s);
                            var a = t.splitText(i);
                            a.splitText(o.length), n = 1, e.search || "sentence" !== e.delimiter || (a.data = h(a.data));
                            var c = f(a, e, v.blastedIndex);
                            a.parentNode.replaceChild(c, a), v.wrappers.push(c), v.blastedIndex++
                        }
                    } else if (1 === t.nodeType && t.hasChildNodes() && !l.skippedElements.test(t.tagName) && !l.hasPluginClass.test(t.className))
                        for (var d = 0; d < t.childNodes.length; d++) v.nodeBeginning = !0, d += p(t.childNodes[d], e);
                    return n
                }

                function d(i, a) {
                    a.debug && o.time("blast reversal");
                    var l = !1;
                    i.removeClass(s + "-root").removeAttr("aria-label").find("." + s).each(function() {
                        if (t(this).closest("." + s + "-root").length) l = !0;
                        else {
                            var e = this.parentNode;
                            r <= 7 && e.firstChild.nodeName, e.replaceChild(this.firstChild, this), e.normalize()
                        }
                    }), e.Zepto ? i.data(s, n) : i.removeData(s), a.debug && (o.log(s + ": Reversed Blast" + (i.attr("id") ? " on #" + i.attr("id") + "." : ".") + (l ? " Skipped reversal on the children of one or more descendant root elements." : "")), o.timeEnd("blast reversal"))
                }
                var m, g = t.extend({}, t.fn[s].defaults, c),
                    v = {};
                if (g.search.length && ("string" == typeof g.search || /^\d/.test(parseFloat(g.search)))) g.delimiter = g.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g, "\\$&"), m = new RegExp("(?:^|[^-" + a.latinLetters + "])(" + g.delimiter + "('s)?)(?![-" + a.latinLetters + "])", "i");
                else switch ("string" == typeof g.delimiter && (g.delimiter = g.delimiter.toLowerCase()), g.delimiter) {
                    case "all":
                        m = /(.)/;
                        break;
                    case "letter":
                    case "char":
                    case "character":
                        m = /(\S)/;
                        break;
                    case "word":
                        m = /\s*(\S+)\s*/;
                        break;
                    case "sentence":
                        m = /(?=\S)(([.]{2,})?[^!?]+?([.â€¦!?]+|(?=\s+$)|$)(\s*[â€²â€™'â€â€³â€œ")Â»]+)*)/;
                        break;
                    case "element":
                        m = /(?=\S)([\S\s]*\S)/;
                        break;
                    default:
                        if (!(g.delimiter instanceof RegExp)) return o.log(s + ": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting."), !0;
                        m = g.delimiter
                }
                if (this.each(function() {
                        var e = t(this),
                            r = e.text();
                        if (!1 !== c) {
                            v = {
                                blastedIndex: 0,
                                nodeBeginning: !1,
                                wrappers: v.wrappers || []
                            }, e.data(s) === n || "search" === e.data(s) && !1 !== g.search || (d(e, g), g.debug && o.log(s + ": Removed element's existing Blast call.")), e.data(s, !1 !== g.search ? "search" : g.delimiter), g.aria && e.attr("aria-label", r), g.stripHTMLTags && e.html(r);
                            try {
                                i.createElement(g.tag)
                            } catch (t) {
                                g.tag = "span", g.debug && o.log(s + ": Invalid tag supplied. Defaulting to span.")
                            }
                            e.addClass(s + "-root"), g.debug && o.time(s), p(this, g), g.debug && o.timeEnd(s)
                        } else !1 === c && e.data(s) !== n && d(e, g);
                        g.debug && t.each(v.wrappers, function(t, e) {
                            o.log(s + " [" + g.delimiter + "] " + this.outerHTML), this.style.backgroundColor = t % 2 ? "#f12185" : "#075d9a"
                        })
                    }), !1 !== c && !0 === g.returnGenerated) {
                    var _ = t().add(v.wrappers);
                    return _.prevObject = this, _.context = this.context, _
                }
                return this
            }, t.fn.blast.defaults = {
                returnGenerated: !0,
                delimiter: "word",
                tag: "span",
                search: !1,
                customClass: "",
                generateIndexID: !1,
                generateValueClass: !1,
                stripHTMLTags: !1,
                aria: !0,
                debug: !1
            }
        }(t || window.Zepto, window, document)
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(42),
            r = i(43),
            o = i(37),
            s = i(17),
            a = i(41),
            l = i(38),
            c = [];
        e.a = {
            destroy: function() {
                for (var t = 0; t < c.length; t++) {
                    var e = c[t];
                    "function" == typeof e.destroy && (e.destroy(), c[t] = null)
                }
            },
            init: function() {
                c.push(new n.a(".footer .nav-link")), c.push(new r.a(".banner .nav-toggler", {
                    item: ".nav-link"
                })), c.push(new r.a('.banner [href="#site-info"]')), c.push(new r.a('.banner [href="#site-accolades"]'));
                var e = new o.a('[href="#post-archives"]');
                c.push(e);
                var i = ".post-spread-slider";
                s.a.config({
                    el: i
                });
                var u = t(i);
                if (u.length) {
                    var h = new s.a({
                        view: u.get(0)
                    });
                    e.currentStory = h, e.showStory(h)
                }
                var f = new a.a("form.ajax-form");
                c.push(f), c.push(new l.a("#banner-effect"))
            },
            finalize: function() {}
        }
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(45),
            r = i(14),
            o = i(39),
            s = i(44),
            a = i(40),
            l = i(46),
            c = i(16),
            u = [];
        e.a = {
            destroy: function() {
                for (var t = 0; t < u.length; t++) {
                    var e = u[t];
                    "function" == typeof e.destroy && (e.destroy(), u[t] = null)
                }
            },
            init: function() {
                u.push(new n.a(".prelude-items")), u.push(new s.a(".on-hover-image", {
                    bgEl: ".on-hover-overlay"
                })), u.push(new r.a("#s-about .fader")), u.push(new o.a("#s-restaurant-menu .fader")), u.push(new a.a(".float-label", {
                    label: ".form-control-label",
                    input: ".form-control"
                }));
                var t = new l.a("#s-press .slideshow", {
                    speed: 1e3,
                    animation: "fade",
                    animateHeight: !0,
                    keys: !0,
                    customMove: function(e, i, n, r, o) {
                        if (1 === e.length && e.hasClass(t.unslider.options.activeClass)) {
                            var s = .5 * n,
                                a = n - s,
                                c = {
                                    x: 100,
                                    autoAlpha: 0,
                                    immediateRender: !0
                                },
                                u = {
                                    x: 0,
                                    autoAlpha: 1,
                                    delay: .001 * s
                                },
                                h = e.find(".press-title, .press-content, .press-personal-name, .press-personal-title");
                            TweenMax.staggerFromTo(h, .001 * a, c, u, .0625)
                        }
                        l.a.tween(e, i, .5 * n, r, o)
                    }
                });
                u.push(t), u.push(new l.a("#s-about .slideshow"))
            },
            finalize: function() {
                t(window).one("load", c.a)
            }
        }
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = !1,
            n = t(window);
        n.on("load", function() {
            i = !0
        }), e.a = {
            init: function() {
                var t = function() {
                    setTimeout(function() {
                        TweenMax.to(window, 1, {
                            scrollTo: {
                                y: "#story-placeholder",
                                autoKill: !1,
                                offsetY: 15
                            }
                        })
                    }, 250)
                };
                i ? t() : n.on("load", function() {
                    return t()
                })
            }
        }
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = i(5),
            o = i(17),
            s = i(3),
            a = i(48),
            l = i(47),
            c = i(4),
            u = i(18),
            h = function(e) {
                function n() {
                    e.apply(this, arguments)
                }
                return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.prototype.boot = function() {
                    this.name = "Archives", this.toggle = new l.a(this.el, this.options), this.target = this.toggle.target, this.bar = new c.a, this.paginator = new a.a(".com-posts-navigation-chunk", {
                        perSet: 9
                    }), this.placeHolder = "#story-placeholder", this.$placeHolder = t(this.placeHolder), this.stories = new r.a, this.itemLink = '[data-archive="post-link"]', this.$itemLink = t(this.itemLink), this.preloader = new s.a("story"), this.isLoadingStory = !1, this.events()
                }, n.prototype.showStory = function(t) {
                    var e = t.view;
                    return this.currentStory ? (e = this.currentStory.view, this.currentStory.destroy()) : this.$placeHolder.prepend(t.view), t.render(e), this.currentStory = t, this
                }, n.prototype.cacheStory = function(t) {
                    return this.stories.cahce(t), this
                }, n.prototype.destroy = function() {
                    t(document.body).off(".archive")
                }, n.prototype.events = function() {
                    t(document.body).on("show.archive", this.onShowArchive.bind(this)).on("hidden.archive", this.onHiddenArchive.bind(this)).on("click." + this.name, this.itemLink, this.onClickItemLink.bind(this))
                }, n.prototype.onClickItemLink = function(e) {
                    e.preventDefault();
                    var i = t(e.target);
                    i.is(this.itemLink) || (i = i.parents(this.itemLink));
                    var n = i.attr("href"),
                        r = i.data("postId");
                    if (this.currentStory.id === r) return void(this.toggle.show && this.toggle.hide());
                    if (!n) throw new Error("Url is not defined");
                    this.loadStory(n, r)
                }, n.prototype.loadStory = function(e, i) {
                    var n = this,
                        r = t.Deferred();
                    this.beforeLoadStory().done(function() {
                        var t = o.a.store.find("id", i);
                        return t ? r.resolve(t) : o.a.load(e, r), r.promise()
                    }), r.done(function(t) {
                        n.isLoadingStory = !1, n.afterLoadStory().done(function() {
                            n.showStory(t)
                        })
                    })
                }, n.prototype.beforeLoadStory = function() {
                    var e = t.Deferred();
                    return this.preloader.appendTo(this.$placeHolder).css("opacity", 0), TweenMax.to(this.preloader.$el, .4, {
                        opacity: 1,
                        onComplete: function() {
                            e.resolve()
                        }
                    }), this.toggle.show && this.toggle.hide(), e.promise()
                }, n.prototype.afterLoadStory = function() {
                    var e = this,
                        i = t.Deferred();
                    return TweenMax.to(this.preloader.$el, .2, {
                        opacity: 0,
                        onComplete: function() {
                            e.preloader.remove(), i.resolve()
                        }
                    }), i.promise()
                }, n.prototype.onShowArchive = function() {
                    i.i(u.a)("md") || (this.bar.check(), this.bar.set())
                }, n.prototype.onHiddenArchive = function() {
                    i.i(u.a)("md") || this.bar.reset()
                }, n
            }(n.a);
        e.a = h
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(83),
            r = i.n(n),
            o = i(1),
            s = i(82),
            a = i.n(s),
            l = i(81),
            c = i.n(l),
            u = 0,
            h = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    this.name = "Effect";
                    var e = document.querySelector(this.el),
                        n = 0,
                        o = 0,
                        s = 0,
                        l = {
                            x: 0,
                            y: 0
                        },
                        u = 0;
                    if (t(document).on("mousemove", function(t) {
                            l = i.getMouseCoord(t), u = i.getToCenter(t)
                        }), !t("html").hasClass("no-webgl")) {
                        var h = r()({
                                canvas: e,
                                onDone: function(t) {
                                    t && alert(t)
                                }
                            }),
                            f = this.$el.data("texture"),
                            p = new Image;
                        p.src = f, p.onload = function() {
                            var t = h({
                                frag: a.a,
                                vert: c.a,
                                attributes: {
                                    position: [-1, 0, 0, -1, 1, 1]
                                },
                                count: 3,
                                uniforms: {
                                    globaltime: h.prop("globaltime"),
                                    resolution: h.prop("resolution"),
                                    aspect: h.prop("aspect"),
                                    scroll: h.prop("scroll"),
                                    velocity: h.prop("velocity"),
                                    texture: h.texture(p),
                                    mouseX: h.prop("mouseX"),
                                    mouseY: h.prop("mouseY"),
                                    fromCenter: h.prop("fromCenter")
                                }
                            });
                            h.frame(function(i) {
                                var r = e.scrollWidth / e.scrollHeight;
                                e.width = 1024 * r, e.height = 1024, n = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), o = .99 * o + (n - s), s = n, h.clear({
                                    color: [0, 0, 0, 0]
                                }), t({
                                    globaltime: i.time,
                                    resolution: [i.viewportWidth, i.viewportHeight],
                                    aspect: r,
                                    scroll: n,
                                    velocity: o,
                                    mouseX: l.x,
                                    mouseY: l.y,
                                    fromCenter: u
                                })
                            })
                        }
                    }
                }, i.getToCenter = function(e) {
                    var n = i.getMousePos(e),
                        r = n.posx,
                        o = n.posy;
                    return u || (u = Math.floor(Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(t(window).scrollTop() + window.innerHeight / 2, 2)))), Math.floor(Math.sqrt(Math.pow(r - window.innerWidth / 2, 2) + Math.pow(o - (t(window).scrollTop() + window.innerHeight / 2), 2))) / u
                }, i.getMouseCoord = function(t) {
                    var e = function(t, e) {
                            return Math.min(2, t / (e / 2)) - 1
                        },
                        n = i.getMousePos(t),
                        r = n.posx,
                        o = n.posy;
                    return r = e(r, window.innerWidth), o = -1 * e(o, window.innerHeight), {
                        x: r,
                        y: o
                    }
                }, i.getMousePos = function(t) {
                    var e = t,
                        i = 0,
                        n = 0;
                    return t || (e = window.event), e.pageX || e.pageY ? (i = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (i = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                        posx: i,
                        posy: n
                    }
                }, i
            }(o.a);
        e.a = h
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(14),
            r = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.defineProps = function() {
                    e.prototype.defineProps.call(this), this.name = "FaderHistory", this.initialState = null
                }, i.prototype.events = function() {
                    var i = this;
                    e.prototype.events.call(this), this.$navLink.each(function(e, n) {
                        var r = t(n).attr("href");
                        t(r).length && t.History.bind("/" + r.substring(1), function(t) {
                            i.initialState = t, i.bindState(t, n, r)
                        })
                    })
                }, i.prototype.bindState = function(e, i, n) {
                    t(i).hasClass(this.activeClassname) || (this.$navLink.removeClass(this.activeClassname), t(i).addClass(this.activeClassname), this.goTo("" + n))
                }, i.prototype.onLoad = function() {
                    for (var i = this, n = 0; n < this.$navLink.length; n += 1) {
                        var r = i.$navLink.eq(n),
                            o = r.attr("href");
                        TweenMax.set(o, {
                            autoAlpha: 0
                        })
                    }
                    if (this.initialState) {
                        var s = "#" + this.initialState.substring(1);
                        return void e.transiteHeight(this.$container, t(s).innerHeight())
                    }
                    var a = this.$navLink.first(),
                        l = t(a.attr("href"));
                    if (l.length) {
                        var c = l.innerHeight() + "px";
                        a.add(l).addClass(this.activeClassname), TweenMax.set(this.$container, {
                            height: c
                        }), TweenMax.set(l, {
                            autoAlpha: 1
                        })
                    }
                }, i.prototype.onNavigate = function(e) {
                    var i = e.currentTarget,
                        n = t(i).attr("href");
                    t(n).length && (e.preventDefault(), t.History.go("/" + n.substring(1)))
                }, i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    this.name = "FloatLabel", this.label = this.options.label || "label:visible", this.label = this.el + " " + this.label, this.input = this.options.input || "::input", this.input = this.el + " " + this.input, this.floatClassname = this.options.floatClassname || "float", this.floatClass = "." + this.floatClassname, this.init(), this.events()
                }, i.prototype.init = function() {
                    var e = this;
                    t(this.input).each(function(t, i) {
                        e.determineToggle(i)
                    })
                }, i.prototype.events = function() {
                    t(document.body).on("blur." + this.name, this.input, this.onBlur.bind(this)).on("focus." + this.name, this.input, this.onFocus.bind(this))
                }, i.prototype.onBlur = function(t) {
                    this.determineToggle(t.currentTarget)
                }, i.prototype.onFocus = function(e) {
                    var i = t(e.currentTarget).parents(this.el);
                    this.toggle(i)
                }, i.prototype.determineToggle = function(e) {
                    var i = t(e).parents(this.el),
                        n = !!t(e).val();
                    this.toggle(i, n)
                }, i.prototype.toggle = function(e, i) {
                    void 0 === i && (i = !0), t(e).toggleClass(this.floatClassname, i)
                }, i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = i(3),
            o = i(6),
            s = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    this.name = "Form", this.alertPlaceholder = this.options.alertPlaceholder || ".form-header", this.$alertPlaceholder = t(this.alertPlaceholder), this.preloader = new r.a("form"), this.fetch = o.a, this.endpoint = this.options.endpoint || this.$el.attr("action") || window.location.href, this.events()
                }, i.prototype.events = function() {
                    this.$el.on("submit." + this.name, this.onSubmit.bind(this))
                }, i.prototype.onSubmit = function(t) {
                    t.preventDefault(), this.isSubmitting || this.submit()
                }, i.prototype.submit = function() {
                    var e = this,
                        i = t.Deferred();
                    this.beforeSubmit().done(function() {
                        var t = {
                            url: e.endpoint,
                            data: e.formData(),
                            dataType: "json",
                            type: e.$el.attr("method")
                        };
                        e.fetch(t, function(t) {
                            var n = t.success || !1;
                            i.resolve(n), e.alert(t.message)
                        })
                    }), i.done(function(t) {
                        e.isSubmitting = !1, e.$el.find(":submit").attr("disabled", t), e.afterSubmit().done(function() {})
                    })
                }, i.prototype.alert = function(t) {
                    this.$alertPlaceholder.find(".alert-error").remove(), this.$alertPlaceholder.append(t)
                }, i.prototype.beforeSubmit = function() {
                    var e = t.Deferred();
                    return this.preloader.fadeIn(this.$el, function() {
                        e.resolve()
                    }, "appendTo"), e.promise()
                }, i.prototype.afterSubmit = function() {
                    var e = t.Deferred();
                    return this.preloader.fadeOut(this.$el, function() {
                        e.resolve()
                    }), e.promise()
                }, i.prototype.makeData = function(t, e, i) {
                    return void 0 === i && (i = []), i.push({
                        name: t,
                        value: e
                    })
                }, i.prototype.formData = function() {
                    return this.$el.serializeArray()
                }, i
            }(n.a);
        e.a = s
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    this.name = "Nav", this.events()
                }, i.prototype.destroy = function() {
                    this.$el.off("." + this.name)
                }, i.prototype.events = function() {
                    this.$el.on("click." + this.name, this.onClick.bind(this))
                }, i.prototype.onClick = function(e) {
                    var i = t(e.currentTarget),
                        n = t(i).attr("href");
                    if (t(n).length && (e.preventDefault(), !this.transiting)) {
                        this.$el.removeClass("active").filter(i).addClass("active");
                        t(document.body).trigger("scroll.nav", [this, i, .25]), setTimeout(function() {
                            TweenMax.to(window, 1, {
                                scrollTo: n
                            })
                        }, 250)
                    }
                }, i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(50),
            r = i(51),
            o = i(1),
            s = i(4),
            a = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    var e = this;
                    this.name = "NavToggler", this.bar = new s.a;
                    var i = this.$el.attr("href");
                    this.$target = t(i), this.item = this.options.item, this.$item = this.$target.find(this.item), this.durations = this.options.durations || {
                        open: 1,
                        close: .5
                    }, this.classnames = this.options.classnames || {
                        open: {
                            start: "open",
                            transiting: "transiting-in",
                            end: "opened"
                        },
                        close: {
                            start: "",
                            transiting: "transiting-out",
                            end: ""
                        }
                    }, this.$icon = this.$el.find(".icon"), this.isOpen = this.$el.hasClass(this.classnames.open.start), t(window).one("load", function() {
                        e.size = {
                            h: e.$icon.innerHeight(),
                            w: e.$icon.innerWidth()
                        }
                    }), this.tweens(), this.events()
                }, i.prototype.tweens = function() {
                    this.tweenStore = {}, this.tweenStore.menu = n.a.timeline(this.el + " .icon")
                }, i.prototype.destroy = function() {
                    t(document).off("open.start.nav close.end.nav").off("." + this.name), this.$el.off("toggler")
                }, i.prototype.events = function() {
                    var e = this;
                    t(document).on("open.start.nav", function() {
                        e.bar.check(), e.bar.set()
                    }).on("close.end.nav", function() {
                        e.bar.reset()
                    }), t(document).on("keydown." + this.name, this.onEscKey.bind(this)), this.$el.on("click.toggler", this.onClick.bind(this)), this.$item.on("click.nav-item", this.onNavigate.bind(this))
                }, i.prototype.onEscKey = function(t) {
                    if (this.$el.hasClass("opened")) {
                        var e = !1,
                            i = t || window.event;
                        e = "key" in i ? "Escape" === i.key || "Esc" === i.key : 27 === i.keyCode, e && this.close(this.$target)
                    }
                }, i.prototype.onNavigate = function(e) {
                    var i = t(e.currentTarget),
                        n = i.attr("href"),
                        r = t(n);
                    r.length && (e.preventDefault(), this.transiting || (this.$item.removeClass("active"), i.addClass("active"), this.close(this.$target), setTimeout(function() {
                        var t = {
                            y: r.offset().top,
                            autoKill: !1
                        };
                        TweenMax.to(window, 1, {
                            scrollTo: t
                        })
                    }, 1e3 * this.tweenStore.container.totalDuration())))
                }, i.prototype.onClick = function(e) {
                    var i = e.currentTarget,
                        n = i.getAttribute("href");
                    if (t(n).length) {
                        e.preventDefault();
                        var r = t(n).hasClass("opened");
                        this.toggle(n, !r)
                    }
                }, i.prototype.close = function(t) {
                    this.toggle(t, !1)
                }, i.prototype.open = function(t) {
                    this.toggle(t, !0)
                }, i.prototype.toggle = function(e, i) {
                    var n = this;
                    if (void 0 === i && (i = !0), !this.transiting) {
                        this.transiting = !0;
                        var o = i ? "open" : "close",
                            s = i ? "close" : "open",
                            a = t(e);
                        this.tweenStore.container || (this.tweenStore.container = r.a.timeline(e)), a.add(this.$el).removeClass(this.classnames[s].start).removeClass(this.classnames[s].end), a.add(this.$el).addClass(this.classnames[o].start).removeClass(this.classnames[s].start), t(document.body).trigger(o + ".start.nav", [a]), a.add(this.$el).addClass(this.classnames[o].transiting);
                        var l = function() {
                            n.transiting = !1, n.isOpen = i, a.add(n.$el).removeClass("" + n.classnames[o].transiting).addClass(n.classnames[o].end), t(document.body).trigger(o + ".end.nav", [a])
                        };
                        this.tweenStore.container.eventCallback("onComplete", l), this.tweenStore.container.eventCallback("onReverseComplete", l);
                        var c = null,
                            u = t.noop;
                        i ? (c = "play", u = r.a.createListShow) : (c = "reverse", u = r.a.createListHide), "function" == typeof this.tweenStore.menu[c] && this.tweenStore.menu[c](), "function" == typeof this.tweenStore.container[c] && this.tweenStore.container[c](), u(this.$item)
                    }
                }, i
            }(o.a);
        e.a = a
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = i(4),
            o = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    var e = this;
                    this.name = "OnHoverImage", this.images = this.options.images || ".on-hover-images", this.$images = t(this.images), this.image = this.options.image || ".on-hover-image-item", this.$image = this.$images.find(this.image), this.bgEl = this.options.bgEl || "body", this.$bgEl = t(this.bgEl), this.$body = t("body"), this.activeBackgroundColor = this.options.activeBackgroundColor || "#1A1A1A", this.activeClassname = this.options.activeClassname || "on-hover-active", this.activeClass = "." + this.activeClassname, this.defaultBGColors = [], this.state = !1, this.$bgEl.each(function(i, n) {
                        var r = t(n).css("background-color");
                        e.defaultBGColors.push({
                            bg: n,
                            color: r
                        })
                    }), this.bar = new r.a, this.events()
                }, i.prototype.destroy = function() {
                    this.$el.off("." + this.name), this.$body.off("." + this.name)
                }, i.prototype.events = function() {
                    this.$el.on("click." + this.name, this.onClick.bind(this)).on("mouseover." + this.name, this.onHover.bind(this)).on("mouseleave." + this.name, this.onLeave.bind(this)), this.$body.on("touchstart." + this.name, this.onDocumentTouch.bind(this))
                }, i.prototype.onClick = function(t) {
                    t.preventDefault()
                }, i.prototype.onHover = function(t) {
                    this.hover(t.currentTarget)
                }, i.prototype.onLeave = function(t) {
                    this.leave(t.currentTarget)
                }, i.prototype.onDocumentTouch = function() {
                    this.state && this.leave(this.$el.filter(".active").get(0))
                }, i.prototype.hover = function(e) {
                    var n = t(i.getTargetFrom(e));
                    if (n.length) {
                        this.$body.addClass(this.activeClassname), n.add(e).addClass("active");
                        var r = e.getBoundingClientRect(),
                            o = r.top + r.height,
                            s = n.innerHeight();
                        o + s > window.innerHeight && (o = r.top - s), this.bar.check(), this.bar.set(), TweenMax.set(n, {
                            top: o
                        }), TweenMax.to(n, .25, {
                            autoAlpha: 1
                        }), TweenMax.to(this.$bgEl, .25, {
                            backgroundColor: this.activeBackgroundColor
                        }), this.state = !0
                    }
                }, i.prototype.leave = function(e) {
                    var n = this,
                        r = t(i.getTargetFrom(e));
                    if (r.length) {
                        this.bar.reset(), TweenMax.to(r, .25, {
                            autoAlpha: 0
                        });
                        for (var o = 0; o < this.defaultBGColors.length; o += 1) ! function(e) {
                            var i = n.defaultBGColors[e];
                            TweenMax.to(i.bg, .25, {
                                backgroundColor: i.color,
                                onComplete: function() {
                                    t(i.bg).removeAttr("style")
                                }
                            })
                        }(o);
                        this.$body.removeClass(this.activeClassname), r.add(e).removeClass("active"), this.state = !1
                    }
                }, i.getTargetFrom = function(e) {
                    return t(e).attr("href")
                }, i
            }(n.a);
        e.a = o
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(52),
            r = i(1),
            o = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    var e = this;
                    this.name = "Prelude", this.cache = [], this.$items = this.$el.find(".prelude-item"), this.$items.each(function(i, n) {
                        t(n).blast({
                            delimeter: "word",
                            customClass: "blast-block"
                        }).css("opacity", 0), e.cache[i] = {
                            el: n
                        }
                    }), this.totalItems = this.cache.length, this.current = 0, this.speed = 500, this.durations = {
                        fadeIn: 2,
                        fadeOut: 1,
                        word: .125,
                        autoplay: 1.5
                    }, this.$el.addClass("prelude-ready"), this.$items.length > 1 ? this.play() : this.playOnce()
                }, i.prototype.playCallback = function() {
                    var t = this;
                    setTimeout(function() {
                        t.next()
                    }, 1e3 * this.durations.autoplay)
                }, i.prototype.play = function(e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = this.playCallback);
                    var r = this.getItem(e),
                        o = r.el,
                        s = t(o).addClass("active").find(".blast");
                    t(o).css("display", "block"), this.current = e;
                    var a = n.a.appear(s, {
                        duration: this.durations.fadeIn
                    });
                    a.eventCallback("onComplete", i.bind(this)), a.play()
                }, i.prototype.playOnce = function(t) {
                    void 0 === t && (t = 0), this.play(t, function() {})
                }, i.prototype.next = function() {
                    var e = this,
                        i = this.getNextIndex(this.current),
                        r = this.getItem(this.current),
                        o = r.el,
                        s = t(o).removeClass("active").find(".blast"),
                        a = function() {
                            e.play(i)
                        },
                        l = n.a.disappear(s, {
                            duration: this.durations.fadeOut
                        });
                    l.eventCallback("onComplete", a), l.play()
                }, i.prototype.getItem = function(t) {
                    if (void 0 === t && (t = 0), void 0 === this.cache[t]) throw new Error("No item is found");
                    return this.cache[t]
                }, i.prototype.getNextIndex = function(t) {
                    void 0 === t && (t = 0);
                    var e = t + 1;
                    return e >= this.cache.length ? 0 : e
                }, i.prototype.getPrevIndex = function(t) {
                    void 0 === t && (t = 0);
                    var e = t - 1;
                    return e < 0 ? this.cache.length - 1 : e
                }, i.prototype.destroy = function() {
                    this.$el.removeClass("prelude-ready")
                }, i
            }(r.a);
        e.a = o
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(7),
            r = i.n(n),
            o = i(1),
            s = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
                var n = {
                    $active: {},
                    current: {}
                };
                return i.prototype.boot = function() {
                    var e = this;
                    if (this.name = "Slideshow", this.slider = this.options.slider || ".slideshow-slider", this.$slider = this.$el.find(this.slider), this.$slider.length) {
                        var n = t.extend({}, this.options, {
                            infinite: !0,
                            nav: !1,
                            selectors: {
                                container: ".slideshow-items",
                                slides: ".slideshow-item"
                            },
                            arrows: !1
                        });
                        this.$slider.unslider(n), this.unslider = this.$slider.data("unslider"), this.unslider._move = i.move, this.arrows = {
                            prev: ".slideshow-controls .slideshow-prev-btn",
                            next: ".slideshow-controls .slideshow-next-btn"
                        }, this.navs = ".slideshow-navs", this.$navs = this.$el.find(this.navs), this.createPagintaion(), this.options.customHeight && this.createCustomHeight(), t(window).one("load", function() {
                            if (e.unslider.options.animateHeight) {
                                var t = e.$active.outerHeight();
                                r.a.set(e.unslider.$context.stop(), {
                                    height: t
                                })
                            }
                        }), this.events()
                    }
                }, i.prototype.createPagintaion = function() {
                    if (this.$navs.length) {
                        this.pagination = this.options.pagination || "slideshow-pagination", this.page = this.options.page || "slideshow-page", this.currentPage = this.options.currentPage || "slideshow-current-page", this.totalPage = this.options.totalPage || "slideshow-total-page";
                        t('<ul class="' + this.pagination + '" />').append('<li class="' + this.page + ' slideshow-current-page">1</li>').append('<li class="' + this.page + ' slideshow-total-pages">' + this.unslider.$slides.not(".unslider-clone").length + "</li>").appendTo(this.$navs), this.$pagination = this.$navs.find("." + this.pagination), this.$currentPage = this.$navs.find("." + this.currentPage), this.$totalPage = this.$navs.find("." + this.totalPage), this.paginationEvents()
                    }
                }, i.prototype.createCustomHeight = function() {
                    var t = this;
                    this.$el.on("unslider.change", function() {
                        var e = t.$active.innerHeight(),
                            i = t.unslider.options.speed / 1e3;
                        r.a.to(t.el, 1, {
                            height: e,
                            delay: i
                        })
                    })
                }, i.prototype.destroy = function() {
                    var e = this;
                    t.each(this.arrows, function(t, i) {
                        var n = e.$el.find(i);
                        n.length || n.off("." + e.name)
                    }), this.$navs.length && this.$pagination.remove()
                }, i.prototype.events = function() {
                    var e = this;
                    t.each(this.arrows, function(i, n) {
                        var r = t(n);
                        r.length && r.on("click." + i + "." + e.name, function(n) {
                            var r = e.unslider[i] || t.noop;
                            n.preventDefault(), r()
                        })
                    }), this.$el.on("unslider.ready", this.onReady.bind(this))
                }, i.prototype.paginationEvents = function() {
                    var t = this;
                    this.$el.on("unslider.change", function() {
                        t.$currentPage.html(t.current)
                    })
                }, i.prototype.onReady = function() {}, i.move = function(t, e, n, r) {
                    var o = this;
                    !1 !== n && (n = function() {
                        o.$context.trigger(o._ + ".moved")
                    });
                    var s = i.tween;
                    return "function" == typeof this.options.customMove && (s = this.options.customMove), s(t, e, r || this.options.speed, this.options.easing, n)
                }, i.tween = function(e, i, n, o, s) {
                    var a = n / 1e3;
                    return i.onComplete = s || t.noop, r.a.to(e, a, i), e
                }, n.$active.get = function() {
                    var t = this.unslider.$slides.filter("." + this.unslider.options.activeClass);
                    return "fade" === this.options.animation ? t : t.next().length ? t.next() : t.prev()
                }, n.current.get = function() {
                    this.total || (this.total = this.unslider.$slides.not(".unslider-clone").length);
                    var t = this.$active;
                    return t.index() > this.total ? 1 : t.index()
                }, Object.defineProperties(i.prototype, n), i
            }(o.a);
        e.a = s
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(1),
            r = function(e) {
                function i() {
                    e.apply(this, arguments)
                }
                return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.boot = function() {
                    if (this.name = "ArchiveToggle", this.target = this.$el.attr("href"), this.$target = t(this.target), !this.$target) throw new Error("No target is found.");
                    this.showClassname = this.options.showClassname || "show", this.showClass = "." + this.showClassname, this.show = !1, this.events()
                }, i.prototype.destroy = function() {
                    this.$el.off("" + this.name)
                }, i.prototype.events = function() {
                    this.$el.on("click." + this.name, this.onToggle.bind(this))
                }, i.prototype.onToggle = function(t) {
                    t.preventDefault(), this.isToggling || (this.isToggling = !0, this.toggle())
                }, i.prototype.show = function() {
                    this.toggle(!0)
                }, i.prototype.hide = function() {
                    this.toggle(!1)
                }, i.prototype.toggle = function(e) {
                    var i = this;
                    void 0 === e && (e = null);
                    var n = e;
                    e || (n = !this.$target.hasClass(this.showClassname)), t(document.body).trigger((n ? "show" : "hide") + ".archive", [this]);
                    var r = n ? 1 : 0;
                    this.show = n, n && this.$target.toggleClass(this.showClassname, n);
                    var o = function() {
                            i.isToggling = !1, t(document.body).trigger((n ? "shown" : "hidden") + ".archive", [i]), n || i.$target.toggleClass(i.showClassname, n)
                        },
                        s = [this.target, .25, {
                            opacity: r,
                            onComplete: o
                        }];
                    TweenMax.to.apply(TweenMax, s)
                }, i
            }(n.a);
        e.a = r
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(77),
            r = i.n(n),
            o = i(1),
            s = i(3),
            a = i(49),
            l = function(e) {
                function i(t, i) {
                    void 0 === t && (t = ".pagination"), void 0 === i && (i = {}), e.call(this, t, i)
                }
                e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
                var n = {
                    count: {},
                    links: {}
                };
                return i.prototype.boot = function() {
                    this.booted = !0, this.name = "Paginator", this.preloader = new s.a("paginator"), this.paginator = this.options.paginator || ".paginator", this.$paginator = t(this.paginator), this.paginatorNumber = this.options.paginatorNumber || ".paginator-number", this.$paginatorNumber = t(this.paginatorNumber), this.item = this.options.item || ".page-item", this.$item = t(this.options.item), this.link = this.options.link || ".page-link", this.$link = t(this.link), a.a.allFromDOM(this.el + " " + this.item), this.currentLink = a.a.store.find("active", !0), this.currentLink && (this.prevHtml = this.options.prevHtml || "Prev", this.$prev = this.options.$prev || t('<a href="#paginator-prev" class="paginator-nav paginator-prev" rel="prev">' + this.prevHtml + "</a>"), this.nextHtml = this.options.nextHtml || "Next", this.$next = this.options.$next || t('<a href="#paginator-next" class="paginator-nav paginator-next" rel="next">' + this.nextHtml + "</a>"), this.$el.prepend(this.$prev).append(this.$next), this.sets = {
                        next: null,
                        prev: null,
                        perSet: this.options.perSet || 3
                    }, this.sets.current = this.determineSet(this.currentLink.page), this.goToSet(this.currentSet(), !1), this.events())
                }, i.prototype.destroy = function() {
                    t(document).off("." + this.name), this.$prev.off("$.{this.name}").remove(), delete this.$prev, this.$next.off("$.{this.name}").remove(), delete this.$next, a.a.store.map(function(t) {
                        t.destroy()
                    }), this.preloader.destroy()
                }, i.prototype.events = function() {
                    t(document).on("click." + this.name, this.link, this.onClickPaginate.bind(this)), this.$prev.add(this.$next).on("click." + this.name, this.onNavigateSet.bind(this))
                }, i.prototype.onNavigateSet = function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget);
                    if (!i.is(".disabled")) {
                        var n = "noAttributeRelFound";
                        switch (i.attr("rel")) {
                            case "next":
                                n = "goToNextSet";
                                break;
                            case "prev":
                                n = "goToPrevSet"
                        }
                        if ("function" != typeof this[n]) throw new Error("Method " + n + " does not exists.");
                        this[n]()
                    }
                }, i.prototype.updateNavigation = function() {
                    this.$prev.toggleClass("disabled", !this.prevSet()), this.$next.toggleClass("disabled", !this.nextSet())
                }, i.prototype.goToSet = function(t) {
                    this.simpleGoToSet(t), this.sets.current = t, this.updateNavigation()
                }, i.prototype.animateGoToSet = function(t) {
                    var e = this,
                        i = this.sliceItemsAt(this.currentSet()),
                        n = this.sliceItemsAt(t);
                    i.map(function(i, r) {
                        if (void 0 !== n[r]) {
                            var o = n[r];
                            a.a.transiteFromTo(i, o, function() {
                                e.simpleGoToSet(t)
                            })
                        }
                    })
                }, i.prototype.simpleGoToSet = function(t) {
                    this.sliceItemsNotFrom(t).map(function(t) {
                        t.shown = !1
                    }), this.sliceItemsAt(t).map(function(t) {
                        t.shown = !0
                    })
                }, i.prototype.goToPrevSet = function() {
                    this.goToSet(this.currentSet() - 1)
                }, i.prototype.goToNextSet = function() {
                    this.goToSet(this.currentSet() + 1)
                }, i.prototype.goToCurrentSet = function() {
                    this.goToSet(this.currentSet())
                }, i.prototype.sliceItemsAt = function(t) {
                    var e = this.firstItem(t),
                        i = this.lastItem(t);
                    return a.a.store.filter(function(t) {
                        return t.page >= e && t.page <= i
                    })
                }, i.prototype.sliceItemsNotFrom = function(t) {
                    var e = this.firstItem(t),
                        i = this.lastItem(t);
                    return a.a.store.filter(function(t) {
                        return t.page < e || t.page > i
                    })
                }, i.prototype.firstItem = function(t) {
                    return this.links.length > 0 ? (t - 1) * this.sets.perSet + 1 : null
                }, i.prototype.lastItem = function(t) {
                    return this.links.length > 0 ? this.firstItem(t) + this.sets.perSet - 1 : null
                }, i.prototype.currentSet = function() {
                    return this.sets.current
                }, i.prototype.determineSet = function(t) {
                    var e = t % this.sets.perSet,
                        i = e > 0 ? 1 : 0;
                    return r()(t / this.sets.perSet) + i
                }, i.prototype.prevSet = function() {
                    var t = this.currentSet();
                    return t > 1 ? t - 1 : null
                }, i.prototype.nextSet = function() {
                    var t = this.currentSet();
                    return t < this.totalSet() ? t + 1 : null
                }, i.prototype.totalSet = function() {
                    return Math.ceil(this.links.length / this.sets.perSet)
                }, i.prototype.onClickPaginate = function(e) {
                    e.preventDefault();
                    var i = t(e.target);
                    i.is(this.link) || (i = i.parents(this.link));
                    var n = i.data("page");
                    if (!n) throw new Error("Page is not defined");
                    if (this.currentLink.page !== n) {
                        var r = a.a.find("page", n);
                        this.loadPaginateLists(r, i)
                    }
                }, i.prototype.loadPaginateLists = function(e, i) {
                    var n = this;
                    if (void 0 === i && (i = null), !this.isLoading) {
                        this.isLoading = !0;
                        var r = t.Deferred();
                        this.beforeLoadPaginateLists(e, i).done(function() {
                            if (!e) throw new Error("Link is not found!");
                            return r = e.listItems(r), r.promise()
                        }), r.done(function(t) {
                            n.isLoading = !1, n.afterLoadPaginateLists(t, i).done(function() {
                                n.$paginatorNumber.html(t.page), n.replaceCurrentLink(t), n.showPaginateLists(t)
                            })
                        })
                    }
                }, i.prototype.beforeLoadPaginateLists = function() {
                    var e = t.Deferred();
                    return this.preloader.appendTo("#story-placeholder").css("opacity", 0), TweenMax.to(this.preloader.$el, .4, {
                        opacity: 1,
                        onComplete: function() {
                            e.resolve()
                        }
                    }), e.promise()
                }, i.prototype.afterLoadPaginateLists = function() {
                    var e = this,
                        i = t.Deferred();
                    return TweenMax.to(this.preloader.$el, .2, {
                        opacity: 0,
                        onComplete: function() {
                            e.preloader.remove(), i.resolve()
                        }
                    }), i.promise()
                }, i.prototype.showPaginateLists = function(t) {
                    t.renderListItems()
                }, i.prototype.replaceCurrentLink = function(t) {
                    this.currentLink.toggleActive(), this.currentLink = t.toggleActive()
                }, n.count.get = function() {
                    return this.items.length
                }, n.links.get = function() {
                    return a.a.store
                }, Object.defineProperties(i.prototype, n), i
            }(o.a);
        e.a = l
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(5),
            r = i(15),
            o = i(6),
            s = i(54),
            a = new n.a,
            l = {
                listsEl: ".card-archive-list"
            },
            c = function(e) {
                function r() {
                    e.apply(this, arguments)
                }
                e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
                var c = {
                        page: {},
                        url: {},
                        lists: {},
                        active: {},
                        shown: {}
                    },
                    u = {
                        store: {},
                        configs: {}
                    };
                return r.prototype.boot = function() {
                    this.name = "PaginatorLink", this.el = this.view, this.$link = t(this.view).find("a"), this.listsLoaded = !1, this.renderingListItems = !1, this.renderedListItems = !0, this.setAttr("url", this.$link.attr("href")), this.setAttr("page", this.$link.data("page")), this.setAttr("shown", this.$el.is(":visible")), this.$link.html('<span class="page-number">' + this.page + "</span>"), r.store.cache(this)
                }, r.prototype.destroy = function() {
                    this.shown = !0, this.attrs = null
                }, r.prototype.renderListItems = function(e) {
                    var i = this;
                    void 0 === e && (e = null);
                    var n = t(e);
                    n.length || (n = t(l.listsEl));
                    var r = this.getAttr("lists"),
                        o = t(r).find(".nav-item"),
                        s = function() {
                            n.replaceWith(r), o.css("opacity", 0), TweenMax.staggerFromTo(o, .4, {
                                opacity: 0,
                                y: "15%"
                            }, {
                                opacity: 1,
                                y: "0%"
                            }, .05), i.renderedListItems = !0
                        };
                    TweenMax.staggerTo(n.find(".nav-item"), .2, {
                        opacity: 0,
                        y: "-15%"
                    }, .05, s)
                }, r.prototype.listItems = function(t) {
                    void 0 === t && (t = null);
                    var e = r.createDefer(t);
                    return this.listsLoaded ? e.resolve(this) : this.fetchLists(e), e
                }, r.prototype.fetchLists = function(e) {
                    var n = this;
                    void 0 === e && (e = null);
                    var s = r.createDefer(e),
                        a = this.url;
                    return i.i(o.a)({
                        url: a
                    }, function(e) {
                        var i = t(e).find(l.listsEl).get(0);
                        n.setAttr("lists", i), n.listsLoaded = !0, s.resolve(n)
                    }), s
                }, r.prototype.toggleActive = function() {
                    return this.active = !this.active, t(this.view).toggleClass("active", this.active), this
                }, r.transiteFromTo = function(e, n, r) {
                    void 0 === r && (r = t.noop);
                    var o = n.$link.find(".page-number").clone();
                    o.appendTo(e.$link), i.i(s.a)(e.$link.find(".page-number")), TweenMax.to(e.$link.find(".page-number"), .4, {
                        y: "-100%",
                        onComplete: function() {
                            r(), o.remove(), e.$link.find(".page-number").removeAttr("style")
                        }
                    })
                }, r.allFromDOM = function(e) {
                    return t(e).each(function(e, i) {
                        var n = t(i),
                            o = i,
                            s = {
                                id: e,
                                active: n.hasClass("active")
                            };
                        r.store.cache(r.create(o, s))
                    }), n.a
                }, r.create = function(t, e) {
                    return new r({
                        view: t,
                        attrs: e
                    })
                }, r.config = function(e) {
                    t.extend({}, r.configs, e)
                }, u.store.get = function() {
                    return a
                }, u.configs.get = function() {
                    return l
                }, c.page.get = function() {
                    return this.$link.data("page")
                }, c.url.get = function() {
                    return this.getAttr("url")
                }, c.url.set = function(t) {
                    this.setAttr("url", t)
                }, c.lists.get = function() {
                    return this.getAttr("lists")
                }, c.lists.set = function(t) {
                    this.setAttr("lists", t)
                }, c.active.get = function() {
                    return this.getAttr("active")
                }, c.active.set = function(t) {
                    return this.setAttr("active")
                }, c.shown.get = function() {
                    return this.getAttr("shown")
                }, c.shown.set = function(t) {
                    this.$el.toggle(t), this.setAttr("shown", t)
                }, Object.defineProperties(r.prototype, c), Object.defineProperties(r, u), r
            }(r.a);
        e.a = c
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = {
            el: ".menu-composer.icon",
            duration: .25,
            createMenuLineTween: function() {
                var t = [];
                return t.push(this.$el.find(".menu-top, .menu-middle, .menu-bottom")), t.push(i.duration), t.push({
                    x: "0%"
                }), t.push({
                    x: "-105%"
                }), t.push(.125), TweenMax.staggerFromTo.apply(TweenMax, t)
            },
            __createAxis: function(t) {
                var e = [];
                return e.push(this.$el.find(t)), e.push(i.duration), e.push({
                    x: 0,
                    y: 0
                }), e
            },
            createLeftAxis: function() {
                var t = i.__createAxis(".menu-left-axis");
                return t.push({
                    x: -16,
                    y: -16,
                    immediateRender: !1
                }), TweenMax.fromTo.apply(TweenMax, t)
            },
            createRightAxis: function() {
                var t = i.__createAxis(".menu-right-axis");
                return t.push({
                    x: -16,
                    y: 16,
                    immediateRender: !1
                }), TweenMax.fromTo.apply(TweenMax, t)
            },
            createMasterTimeline: function() {
                var t = new TimelineLite({
                    paused: !0
                });
                return t.add(i.createMenuLineTween()), t.add([i.createLeftAxis(), i.createRightAxis()]), t
            },
            timeline: function(e, n) {
                return void 0 === n && (n = .25), i.el = e, i.$el = t(e), i.duration = n, i.createMasterTimeline()
            }
        };
        e.a = i
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = {
            el: "",
            duration: 1,
            __createList: function(e) {
                var n = [t(e)];
                return n.push(i.duration), n
            },
            createListShow: function(t) {
                var e = i.__createList(t);
                return e.push({
                    autoAlpha: 0,
                    y: 25,
                    rotationX: 40
                }), e.push({
                    autoAlpha: 1,
                    y: 0,
                    rotationX: 0
                }), e.push(.125), TweenMax.staggerFromTo.apply(TweenMax, e)
            },
            createListHide: function(t) {
                var e = i.__createList(t);
                return e.push({
                    autoAlpha: 1,
                    y: 0,
                    rotationX: 0
                }), e.push({
                    autoAlpha: 0,
                    y: -15,
                    rotationX: 40
                }), e.push(.125), TweenMax.staggerFromTo.apply(TweenMax, e)
            },
            createContainer: function() {
                return TweenMax.to(this.$el, i.duration, {
                    autoAlpha: 1
                })
            },
            createMasterTimeline: function() {
                var t = new TimelineLite({
                    paused: !0
                });
                return t.add(i.createContainer()), t
            },
            timeline: function(e, n) {
                return void 0 === n && (n = 1), i.el = e, i.$el = t(e), i.duration = n, i.createMasterTimeline()
            }
        };
        e.a = i
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var i = {
                duration: 1,
                staggerDuration: .125
            },
            n = {
                el: "",
                duration: 1,
                appear: function(e, n) {
                    void 0 === n && (n = {});
                    var r = t.extend({}, i, n),
                        o = [e];
                    o.push(r.duration), o.push({
                        autoAlpha: 0,
                        y: 25,
                        rotationX: 40
                    }), o.push({
                        autoAlpha: 1,
                        y: 0,
                        rotationX: 0
                    }), o.push(r.staggerDuration);
                    var s = new TimelineLite({
                        paused: !0
                    });
                    return s.add(TweenMax.staggerFromTo.apply(TweenMax, o)), s
                },
                disappear: function(e, n) {
                    void 0 === n && (n = {});
                    var r = t.extend({}, i, n),
                        o = [e];
                    o.push(r.duration), o.push({
                        autoAlpha: 0,
                        y: -25
                    }), o.push(r.staggerDuration);
                    var s = new TimelineLite({
                        paused: !0
                    });
                    return s.add(TweenMax.staggerTo.apply(TweenMax, o)), s
                }
            };
        e.a = n
    }).call(e, i(0))
}, function(t, e, i) {
    (function(t) {
        ! function(t) {
            /**
             * jQuery History
             * @version 1.5.0
             * @date August 31, 2010
             * @since 0.1.0-dev, July 24, 2008
             * @package jquery-history {@link http://balupton.com/projects/jquery-history}
             * @author Benjamin "balupton" Lupton {@link http://balupton.com}
             * @copyright (c) 2008-2010 Benjamin Arthur Lupton {@link http://balupton.com}
             * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
             */
            t.History ? window.console.warn("$.History has already been defined...") : (t.History = {
                options: {
                    debug: !1
                },
                state: "",
                $window: null,
                $iframe: null,
                handlers: {
                    generic: [],
                    specific: {}
                },
                extractHash: function(t) {
                    return t.replace(/^[^#]*#/, "").replace(/^#+|#+$/, "")
                },
                getState: function() {
                    return t.History.state
                },
                setState: function(e) {
                    var i = t.History;
                    return e = i.extractHash(e), i.state = e, i.state
                },
                getHash: function() {
                    return t.History.extractHash(window.location.hash || location.hash)
                },
                setHash: function(e) {
                    return e = t.History.extractHash(e), void 0 !== window.location.hash ? window.location.hash !== e && (window.location.hash = e) : location.hash !== e && (location.hash = e), e
                },
                go: function(e) {
                    var i = t.History;
                    e = i.extractHash(e);
                    var n = i.getHash(),
                        r = i.getState();
                    return e !== n ? i.setHash(e) : (e !== r && i.setState(e), i.trigger()), !0
                },
                hashchange: function() {
                    var e = t.History,
                        i = e.getHash();
                    return e.go(i), !0
                },
                bind: function(e, i) {
                    var n = t.History;
                    return i ? (void 0 === n.handlers.specific[e] && (n.handlers.specific[e] = []), n.handlers.specific[e].push(i)) : (i = e, n.handlers.generic.push(i)), !0
                },
                trigger: function(e) {
                    var i = t.History;
                    void 0 === e && (e = i.getState());
                    var n, r, o;
                    if (void 0 !== i.handlers.specific[e])
                        for (o = i.handlers.specific[e], n = 0, r = o.length; n < r; ++n)(0, o[n])(e);
                    for (o = i.handlers.generic, n = 0, r = o.length; n < r; ++n)(0, o[n])(e);
                    return !0
                },
                construct: function() {
                    var e = t.History;
                    return t(document).ready(function() {
                        e.domReady()
                    }), !0
                },
                configure: function(e) {
                    var i = t.History;
                    return i.options = t.extend(i.options, e), !0
                },
                domReadied: !1,
                domReady: function() {
                    var e = t.History;
                    if (!e.domRedied) return e.domRedied = !0, e.$window = t(window), e.$window.bind("hashchange", this.hashchange), setTimeout(e.hashchangeLoader, 200), !0
                },
                nativeSupport: function(e) {
                    e = e || t.browser;
                    var i = e.version,
                        n = parseInt(i, 10),
                        r = i.split(/[^0-9]/g),
                        o = parseInt(r[0], 10),
                        s = parseInt(r[1], 10),
                        a = parseInt(r[2], 10),
                        l = !1;
                    return e.msie && n >= 8 ? l = !0 : e.webkit && n >= 528 ? l = !0 : e.mozilla ? o > 1 ? l = !0 : 1 === o && (s > 9 ? l = !0 : 9 === s && a >= 2 && (l = !0)) : e.opera && (o > 10 ? l = !0 : 10 === o && s >= 60 && (l = !0)), l
                },
                hashchangeLoader: function() {
                    var e = t.History;
                    if (e.nativeSupport()) e.getHash() && e.$window.trigger("hashchange");
                    else {
                        var i;
                        if (t.browser.msie) {
                            e.$iframe = t('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0], e.$iframe.contentWindow.document.open(), e.$iframe.contentWindow.document.close();
                            var n = !1;
                            i = function() {
                                var t = e.getHash(),
                                    i = e.getState(),
                                    r = e.extractHash(e.$iframe.contentWindow.document.location.hash);
                                i !== t ? (n || (e.$iframe.contentWindow.document.open(), e.$iframe.contentWindow.document.close(), e.$iframe.contentWindow.document.location.hash = t), n = !1, e.$window.trigger("hashchange")) : i !== r && (n = !0, e.setHash(r))
                            }
                        } else i = function() {
                            var t = e.getHash();
                            e.getState() !== t && e.$window.trigger("hashchange")
                        };
                        setInterval(i, 200)
                    }
                    return !0
                }
            }, t.History.construct())
        }(t)
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    e.a = console.log.bind(console)
}, function(t, e, i) {
    "use strict";
    var n = i(57),
        r = function(t) {
            this.routes = t
        };
    r.prototype.fire = function(t, e, i) {
        void 0 === e && (e = "init"), "" !== t && this.routes[t] && "function" == typeof this.routes[t][e] && this.routes[t][e](i)
    }, r.prototype.loadEvents = function() {
        var t = this;
        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(n.a).forEach(function(e) {
            t.fire(e), t.fire(e, "finalize")
        }), this.fire("common", "finalize")
    }, e.a = r
}, function(t, e, i) {
    "use strict";
    e.a = {
        scrollbarWidth: 0,
        get: function() {
            var t = this.scrollbarWidth;
            if (!t) {
                var e = document.createElement("div");
                e.className = "scrollbar-measure", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t
        }
    }
}, function(t, e, i) {
    "use strict";
    e.a = function(t) {
        return "" + t.charAt(0).toLowerCase() + t.replace(/[\W_]/g, "|").split("|").map(function(t) {
            return "" + t.charAt(0).toUpperCase() + t.slice(1)
        }).join("").slice(1)
    }
}, function(t, e, i) {
    "use strict";
    e.a = function() {
        try {
            var t = document.createElement("canvas");
            return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
        } catch (t) {
            return !1
        }
    }()
}, function(t, e, i) {
    (function(e) {
        function i() {
            return "undefined" != typeof navigator ? o(navigator.userAgent) : r()
        }

        function n(t) {
            var e = a(),
                i = e.filter(function(e) {
                    return e.rule && e.rule.test(t)
                })[0];
            return i ? i.name : null
        }

        function r() {
            return void 0 !== e && e.version && {
                name: "node",
                version: e.version.slice(1),
                os: e.platform
            }
        }

        function o(t) {
            var e = s();
            if (!t) return null;
            var i = e.map(function(e) {
                var i = e.rule.exec(t),
                    n = i && i[1].split(/[._]/).slice(0, 3);
                return n && n.length < 3 && (n = n.concat(1 == n.length ? [0, 0] : [0])), i && {
                    name: e.name,
                    version: n.join(".")
                }
            }).filter(Boolean)[0] || null;
            return i && (i.os = n(t)), /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(t) && (i = i || {}, i.bot = !0), i
        }

        function s() {
            return l([
                ["aol", /AOLShield\/([0-9\._]+)/],
                ["edge", /Edge\/([0-9\._]+)/],
                ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                ["vivaldi", /Vivaldi\/([0-9\.]+)/],
                ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                ["fxios", /FxiOS\/([0-9\.]+)/],
                ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
                ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                ["ie", /MSIE\s(7\.0)/],
                ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                ["android", /Android\s([0-9\.]+)/],
                ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                ["safari", /Version\/([0-9\._]+).*Safari/],
                ["facebook", /FBAV\/([0-9\.]+)/],
                ["instagram", /Instagram\s([0-9\.]+)/],
                ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/]
            ])
        }

        function a() {
            return l([
                ["iOS", /iP(hone|od|ad)/],
                ["Android OS", /Android/],
                ["BlackBerry OS", /BlackBerry|BB10/],
                ["Windows Mobile", /IEMobile/],
                ["Amazon OS", /Kindle/],
                ["Windows 3.11", /Win16/],
                ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                ["Windows 98", /(Windows 98)|(Win98)/],
                ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                ["Windows Server 2003", /(Windows NT 5.2)/],
                ["Windows Vista", /(Windows NT 6.0)/],
                ["Windows 7", /(Windows NT 6.1)/],
                ["Windows 8", /(Windows NT 6.2)/],
                ["Windows 8.1", /(Windows NT 6.3)/],
                ["Windows 10", /(Windows NT 10.0)/],
                ["Windows ME", /Windows ME/],
                ["Open BSD", /OpenBSD/],
                ["Sun OS", /SunOS/],
                ["Linux", /(Linux)|(X11)/],
                ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                ["QNX", /QNX/],
                ["BeOS", /BeOS/],
                ["OS/2", /OS\/2/],
                ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
            ])
        }

        function l(t) {
            return t.map(function(t) {
                return {
                    name: t[0],
                    rule: t[1]
                }
            })
        }
        t.exports = {
            detect: i,
            detectOS: n,
            getNodeVersion: r,
            parseUserAgent: o
        }
    }).call(e, i(80))
}, function(t, e, i) {
    "use strict";
    var n = i(8),
        r = i(67),
        o = Object.prototype.toString,
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        a = i(22),
        l = i(21),
        c = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        u = i(62),
        h = i(24),
        f = i(23),
        p = i(63),
        d = parseInt,
        m = i(65),
        g = m.call(Function.call, Array.prototype.slice),
        v = m.call(Function.call, String.prototype.slice),
        _ = m.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i),
        y = m.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i),
        b = m.call(Function.call, RegExp.prototype.exec),
        w = ["Â…", "â€‹", "ï¿¾"].join(""),
        T = new RegExp("[" + w + "]", "g"),
        x = m.call(Function.call, RegExp.prototype.test, T),
        S = m.call(Function.call, RegExp.prototype.test, /^[-+]0x[0-9a-f]+$/i),
        k = ["\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒ", "â€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028", "\u2029\ufeff"].join(""),
        C = new RegExp("(^[" + k + "]+)|([" + k + "]+$)", "g"),
        P = m.call(Function.call, String.prototype.replace),
        A = function(t) {
            return P(t, C, "")
        },
        O = i(61),
        E = i(75),
        $ = u(u({}, O), {
            Call: function(t, e) {
                var i = arguments.length > 2 ? arguments[2] : [];
                if (!this.IsCallable(t)) throw new TypeError(t + " is not a function");
                return t.apply(e, i)
            },
            ToPrimitive: r,
            ToNumber: function(t) {
                var e = p(t) ? t : r(t, Number);
                if ("symbol" == typeof e) throw new TypeError("Cannot convert a Symbol value to a number");
                if ("string" == typeof e) {
                    if (_(e)) return this.ToNumber(d(v(e, 2), 2));
                    if (y(e)) return this.ToNumber(d(v(e, 2), 8));
                    if (x(e) || S(e)) return NaN;
                    var i = A(e);
                    if (i !== e) return this.ToNumber(i)
                }
                return Number(e)
            },
            ToInt16: function(t) {
                var e = this.ToUint16(t);
                return e >= 32768 ? e - 65536 : e
            },
            ToInt8: function(t) {
                var e = this.ToUint8(t);
                return e >= 128 ? e - 256 : e
            },
            ToUint8: function(t) {
                var e = this.ToNumber(t);
                if (a(e) || 0 === e || !l(e)) return 0;
                var i = h(e) * Math.floor(Math.abs(e));
                return f(i, 256)
            },
            ToUint8Clamp: function(t) {
                var e = this.ToNumber(t);
                if (a(e) || e <= 0) return 0;
                if (e >= 255) return 255;
                var i = Math.floor(t);
                return i + .5 < e ? i + 1 : e < i + .5 ? i : i % 2 != 0 ? i + 1 : i
            },
            ToString: function(t) {
                if ("symbol" == typeof t) throw new TypeError("Cannot convert a Symbol value to a string");
                return String(t)
            },
            ToObject: function(t) {
                return this.RequireObjectCoercible(t), Object(t)
            },
            ToPropertyKey: function(t) {
                var e = this.ToPrimitive(t, String);
                return "symbol" == typeof e ? e : this.ToString(e)
            },
            ToLength: function(t) {
                var e = this.ToInteger(t);
                return e <= 0 ? 0 : e > c ? c : e
            },
            CanonicalNumericIndexString: function(t) {
                if ("[object String]" !== o.call(t)) throw new TypeError("must be a string");
                if ("-0" === t) return -0;
                var e = this.ToNumber(t);
                return this.SameValue(this.ToString(e), t) ? e : void 0
            },
            RequireObjectCoercible: O.CheckObjectCoercible,
            IsArray: Array.isArray || function(t) {
                return "[object Array]" === o.call(t)
            },
            IsConstructor: function(t) {
                return "function" == typeof t && !!t.prototype
            },
            IsExtensible: function(t) {
                return !Object.preventExtensions || !p(t) && Object.isExtensible(t)
            },
            IsInteger: function(t) {
                if ("number" != typeof t || a(t) || !l(t)) return !1;
                var e = Math.abs(t);
                return Math.floor(e) === e
            },
            IsPropertyKey: function(t) {
                return "string" == typeof t || "symbol" == typeof t
            },
            IsRegExp: function(t) {
                if (!t || "object" != typeof t) return !1;
                if (s) {
                    var e = t[Symbol.match];
                    if (void 0 !== e) return O.ToBoolean(e)
                }
                return E(t)
            },
            SameValueZero: function(t, e) {
                return t === e || a(t) && a(e)
            },
            GetV: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                return this.ToObject(t)[e]
            },
            GetMethod: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var i = this.GetV(t, e);
                if (null != i) {
                    if (!this.IsCallable(i)) throw new TypeError(e + "is not a function");
                    return i
                }
            },
            Get: function(t, e) {
                if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                return t[e]
            },
            Type: function(t) {
                return "symbol" == typeof t ? "Symbol" : O.Type(t)
            },
            SpeciesConstructor: function(t, e) {
                if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                var i = t.constructor;
                if (void 0 === i) return e;
                if ("Object" !== this.Type(i)) throw new TypeError("O.constructor is not an Object");
                var n = s && Symbol.species ? i[Symbol.species] : void 0;
                if (null == n) return e;
                if (this.IsConstructor(n)) return n;
                throw new TypeError("no constructor found")
            },
            CompletePropertyDescriptor: function(t) {
                if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                return this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (n(t, "[[Value]]") || (t["[[Value]]"] = void 0), n(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (n(t, "[[Get]]") || (t["[[Get]]"] = void 0), n(t, "[[Set]]") || (t["[[Set]]"] = void 0)), n(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), n(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
            },
            Set: function(t, e, i, n) {
                if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                if ("Boolean" !== this.Type(n)) throw new TypeError("Throw must be a Boolean");
                if (n) return t[e] = i, !0;
                try {
                    t[e] = i
                } catch (t) {
                    return !1
                }
            },
            HasOwnProperty: function(t, e) {
                if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                return n(t, e)
            },
            HasProperty: function(t, e) {
                if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                return e in t
            },
            IsConcatSpreadable: function(t) {
                if ("Object" !== this.Type(t)) return !1;
                if (s && "symbol" == typeof Symbol.isConcatSpreadable) {
                    var e = this.Get(t, Symbol.isConcatSpreadable);
                    if (void 0 !== e) return this.ToBoolean(e)
                }
                return this.IsArray(t)
            },
            Invoke: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                var i = g(arguments, 2),
                    n = this.GetV(t, e);
                return this.Call(n, t, i)
            },
            CreateIterResultObject: function(t, e) {
                if ("Boolean" !== this.Type(e)) throw new TypeError("Assertion failed: Type(done) is not Boolean");
                return {
                    value: t,
                    done: e
                }
            },
            RegExpExec: function(t, e) {
                if ("Object" !== this.Type(t)) throw new TypeError("R must be an Object");
                if ("String" !== this.Type(e)) throw new TypeError("S must be a String");
                var i = this.Get(t, "exec");
                if (this.IsCallable(i)) {
                    var n = this.Call(i, t, [e]);
                    if (null === n || "Object" === this.Type(n)) return n;
                    throw new TypeError('"exec" method must return `null` or an Object')
                }
                return b(t, e)
            },
            ArraySpeciesCreate: function(t, e) {
                if (!this.IsInteger(e) || e < 0) throw new TypeError("Assertion failed: length must be an integer >= 0");
                var i, n = 0 === e ? 0 : e;
                if (this.IsArray(t) && (i = this.Get(t, "constructor"), "Object" === this.Type(i) && s && Symbol.species && null === (i = this.Get(i, Symbol.species)) && (i = void 0)), void 0 === i) return Array(n);
                if (!this.IsConstructor(i)) throw new TypeError("C must be a constructor");
                return new i(n)
            },
            CreateDataProperty: function(t, e, i) {
                if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var n = Object.getOwnPropertyDescriptor(t, e),
                    r = n || "function" != typeof Object.isExtensible || Object.isExtensible(t);
                if (n && (!n.writable || !n.configurable) || !r) return !1;
                var o = {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                };
                return Object.defineProperty(t, e, o), !0
            },
            CreateDataPropertyOrThrow: function(t, e, i) {
                if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var n = this.CreateDataProperty(t, e, i);
                if (!n) throw new TypeError("unable to create data property");
                return n
            },
            AdvanceStringIndex: function(t, e, i) {
                if ("String" !== this.Type(t)) throw new TypeError("Assertion failed: Type(S) is not String");
                if (!this.IsInteger(e)) throw new TypeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");
                if (e < 0 || e > c) throw new RangeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");
                if ("Boolean" !== this.Type(i)) throw new TypeError("Assertion failed: Type(unicode) is not Boolean");
                if (!i) return e + 1;
                if (e + 1 >= t.length) return e + 1;
                var n = t.charCodeAt(e);
                if (n < 55296 || n > 56319) return e + 1;
                var r = t.charCodeAt(e + 1);
                return r < 56320 || r > 57343 ? e + 1 : e + 2
            }
        });
    delete $.CheckObjectCoercible, t.exports = $
}, function(t, e, i) {
    "use strict";
    var n = i(22),
        r = i(21),
        o = i(24),
        s = i(23),
        a = i(9),
        l = i(66),
        c = i(8),
        u = {
            ToPrimitive: l,
            ToBoolean: function(t) {
                return !!t
            },
            ToNumber: function(t) {
                return Number(t)
            },
            ToInteger: function(t) {
                var e = this.ToNumber(t);
                return n(e) ? 0 : 0 !== e && r(e) ? o(e) * Math.floor(Math.abs(e)) : e
            },
            ToInt32: function(t) {
                return this.ToNumber(t) >> 0
            },
            ToUint32: function(t) {
                return this.ToNumber(t) >>> 0
            },
            ToUint16: function(t) {
                var e = this.ToNumber(t);
                if (n(e) || 0 === e || !r(e)) return 0;
                var i = o(e) * Math.floor(Math.abs(e));
                return s(i, 65536)
            },
            ToString: function(t) {
                return String(t)
            },
            ToObject: function(t) {
                return this.CheckObjectCoercible(t), Object(t)
            },
            CheckObjectCoercible: function(t, e) {
                if (null == t) throw new TypeError(e || "Cannot call method on " + t);
                return t
            },
            IsCallable: a,
            SameValue: function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : n(t) && n(e)
            },
            Type: function(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
            },
            IsPropertyDescriptor: function(t) {
                if ("Object" !== this.Type(t)) return !1;
                var e = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var i in t)
                    if (c(t, i) && !e[i]) return !1;
                var n = c(t, "[[Value]]"),
                    r = c(t, "[[Get]]") || c(t, "[[Set]]");
                if (n && r) throw new TypeError("Property Descriptors may not be both accessor and data descriptors");
                return !0
            },
            IsAccessorDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                return !(!c(t, "[[Get]]") && !c(t, "[[Set]]"))
            },
            IsDataDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                return !(!c(t, "[[Value]]") && !c(t, "[[Writable]]"))
            },
            IsGenericDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                return !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t)
            },
            FromPropertyDescriptor: function(t) {
                if (void 0 === t) return t;
                if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                if (this.IsDataDescriptor(t)) return {
                    value: t["[[Value]]"],
                    writable: !!t["[[Writable]]"],
                    enumerable: !!t["[[Enumerable]]"],
                    configurable: !!t["[[Configurable]]"]
                };
                if (this.IsAccessorDescriptor(t)) return {
                    get: t["[[Get]]"],
                    set: t["[[Set]]"],
                    enumerable: !!t["[[Enumerable]]"],
                    configurable: !!t["[[Configurable]]"]
                };
                throw new TypeError("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
            },
            ToPropertyDescriptor: function(t) {
                if ("Object" !== this.Type(t)) throw new TypeError("ToPropertyDescriptor requires an object");
                var e = {};
                if (c(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), c(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), c(t, "value") && (e["[[Value]]"] = t.value), c(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), c(t, "get")) {
                    var i = t.get;
                    if (void 0 !== i && !this.IsCallable(i)) throw new TypeError("getter must be a function");
                    e["[[Get]]"] = i
                }
                if (c(t, "set")) {
                    var n = t.set;
                    if (void 0 !== n && !this.IsCallable(n)) throw new TypeError("setter must be a function");
                    e["[[Set]]"] = n
                }
                if ((c(e, "[[Get]]") || c(e, "[[Set]]")) && (c(e, "[[Value]]") || c(e, "[[Writable]]"))) throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return e
            }
        };
    t.exports = u
}, function(t, e) {
    var i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        if (Object.assign) return Object.assign(t, e);
        for (var n in e) i.call(e, n) && (t[n] = e[n]);
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, i) {
    "use strict";
    var n = Array.prototype.slice,
        r = Object.prototype.toString;
    t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== r.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
        for (var i, o = n.call(arguments, 1), s = function() {
                if (this instanceof i) {
                    var r = e.apply(this, o.concat(n.call(arguments)));
                    return Object(r) === r ? r : this
                }
                return e.apply(t, o.concat(n.call(arguments)))
            }, a = Math.max(0, e.length - o.length), l = [], c = 0; c < a; c++) l.push("$" + c);
        if (i = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(s), e.prototype) {
            var u = function() {};
            u.prototype = e.prototype, i.prototype = new u, u.prototype = null
        }
        return i
    }
}, function(t, e, i) {
    "use strict";
    var n = i(64);
    t.exports = Function.prototype.bind || n
}, function(t, e, i) {
    "use strict";
    var n = Object.prototype.toString,
        r = i(25),
        o = i(9),
        s = {
            "[[DefaultValue]]": function(t, e) {
                var i = e || ("[object Date]" === n.call(t) ? String : Number);
                if (i === String || i === Number) {
                    var s, a, l = i === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (a = 0; a < l.length; ++a)
                        if (o(t[l[a]]) && (s = t[l[a]](), r(s))) return s;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
        };
    t.exports = function(t, e) {
        return r(t) ? t : s["[[DefaultValue]]"](t, e)
    }
}, function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        r = i(25),
        o = i(9),
        s = i(74),
        a = i(76),
        l = function(t, e) {
            if (void 0 === t || null === t) throw new TypeError("Cannot call method on " + t);
            if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
            var i, n, s, a = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (s = 0; s < a.length; ++s)
                if (i = t[a[s]], o(i) && (n = i.call(t), r(n))) return n;
            throw new TypeError("No default value")
        },
        c = function(t, e) {
            var i = t[e];
            if (null !== i && void 0 !== i) {
                if (!o(i)) throw new TypeError(i + " returned for property " + e + " of object " + t + " is not a function");
                return i
            }
        };
    t.exports = function(t, e) {
        if (r(t)) return t;
        var i = "default";
        arguments.length > 1 && (e === String ? i = "string" : e === Number && (i = "number"));
        var o;
        if (n && (Symbol.toPrimitive ? o = c(t, Symbol.toPrimitive) : a(t) && (o = Symbol.prototype.valueOf)), void 0 !== o) {
            var u = o.call(t, i);
            if (r(u)) return u;
            throw new TypeError("unable to convert exotic object to primitive")
        }
        return "default" === i && (s(t) || a(t)) && (i = "string"), l(t, "default" === i ? "number" : i)
    }
}, function(t, e) {
    var i = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString;
    t.exports = function(t, e, r) {
        if ("[object Function]" !== n.call(e)) throw new TypeError("iterator must be a function");
        var o = t.length;
        if (o === +o)
            for (var s = 0; s < o; s++) e.call(r, t[s], s, t);
        else
            for (var a in t) i.call(t, a) && e.call(r, t[a], a, t)
    }
}, function(t, e) {
    var i = Array.prototype.slice,
        n = Object.prototype.toString;
    t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== n.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
        for (var r, o = i.call(arguments, 1), s = function() {
                if (this instanceof r) {
                    var n = e.apply(this, o.concat(i.call(arguments)));
                    return Object(n) === n ? n : this
                }
                return e.apply(t, o.concat(i.call(arguments)))
            }, a = Math.max(0, e.length - o.length), l = [], c = 0; c < a; c++) l.push("$" + c);
        if (r = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(s), e.prototype) {
            var u = function() {};
            u.prototype = e.prototype, r.prototype = new u, u.prototype = null
        }
        return r
    }
}, function(t, e, i) {
    var n = i(69);
    t.exports = Function.prototype.bind || n
}, function(t, e, i) {
    (function(n) {
        var r, o, s, a = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (a._gsQueue || (a._gsQueue = [])).push(function() {
                "use strict";
                var t = document.documentElement,
                    e = a,
                    i = function(i, n) {
                        var r = "x" === n ? "Width" : "Height",
                            o = "scroll" + r,
                            s = "client" + r,
                            a = document.body;
                        return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + r] || t[s] || a[s]) : i[o] - i["offset" + r]
                    },
                    n = function(t) {
                        return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null
                    },
                    r = function(i, n) {
                        var r = "scroll" + ("x" === n ? "Left" : "Top");
                        return i === e && (null != i.pageXOffset ? r = "page" + n.toUpperCase() + "Offset" : i = null != t[r] ? t : document.body),
                            function() {
                                return i[r]
                            }
                    },
                    o = function(i, o) {
                        var s = n(i).getBoundingClientRect(),
                            a = !o || o === e || o === document.body,
                            l = (a ? t : o).getBoundingClientRect(),
                            c = {
                                x: s.left - l.left,
                                y: s.top - l.top
                            };
                        return !a && o && (c.x += r(o, "x")(), c.y += r(o, "y")()), c
                    },
                    s = function(t, e, n) {
                        var r = typeof t;
                        return "number" === r || "string" === r && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), o(t, e)[n])
                    },
                    l = a._gsDefine.plugin({
                        propName: "scrollTo",
                        API: 2,
                        global: !0,
                        version: "1.8.1",
                        init: function(t, i, n) {
                            return this._wdw = t === e, this._target = t, this._tween = n, "object" != typeof i ? (i = {
                                y: i
                            }, "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                                y: i,
                                x: i
                            }), this.vars = i, this._autoKill = !1 !== i.autoKill, this.getX = r(t, "x"), this.getY = r(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, s(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, s(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                        },
                        set: function(t) {
                            this._super.setRatio.call(this, t);
                            var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                o = r - this.yPrev,
                                s = n - this.xPrev,
                                a = l.autoKillThreshold;
                            this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (s > a || s < -a) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (o > a || o < -a) && r < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                        }
                    }),
                    c = l.prototype;
                l.max = i, l.getOffset = o, l.autoKillThreshold = 7, c._kill = function(t) {
                    return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
                }
            }), a._gsDefine && a._gsQueue.pop()(),
            function(n) {
                "use strict";
                var l = function() {
                    return (a.GreenSockGlobals || a).ScrollToPlugin
                };
                o = [i(26)], r = l, void 0 !== (s = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = s)
            }()
    }).call(e, i(2))
}, function(t, e, i) {
    (function(n) {
        var r, o, s, a = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (a._gsQueue || (a._gsQueue = [])).push(function() {
                "use strict";
                a._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                    var n = function(e) {
                            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                        },
                        r = e._internals,
                        o = r.lazyTweens,
                        s = r.lazyRender,
                        l = a._gsDefine.globals,
                        c = new i(null, null, 1, 0),
                        u = n.prototype = new t;
                    return u.constructor = n, u.kill()._gc = !1, n.version = "1.19.1", u.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                    }, u.addCallback = function(t, i, n, r) {
                        return this.add(e.delayedCall(0, t, n, r), i)
                    }, u.removeCallback = function(t, e) {
                        if (t)
                            if (null == e) this._kill(null, t);
                            else
                                for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this
                    }, u.removePause = function(e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }, u.tweenTo = function(t, i) {
                        i = i || {};
                        var n, r, o, s = {
                                ease: c,
                                useFrames: this.usesFrames(),
                                immediateRender: !1
                            },
                            a = i.repeat && l.TweenMax || e;
                        for (r in i) s[r] = i[r];
                        return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function() {
                            o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                        }, o
                    }, u.tweenFromTo = function(t, e, i) {
                        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        }, i.immediateRender = !1 !== i.immediateRender;
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }, u.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, a, l, c, u, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                            d = this._duration,
                            m = this._time,
                            g = this._totalTime,
                            v = this._startTime,
                            _ = this._timeScale,
                            y = this._rawPrevTime,
                            b = this._paused,
                            w = this._cycle;
                        if (t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (c = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                        else if (t < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                t = 0, this._initted || (c = !0)
                            }
                        else if (0 === d && y < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < d) {
                            if ((t = this._time) >= m || this._repeat && w !== this._cycle)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== w && !this._locked) {
                            var T = this._yoyo && 0 != (1 & w),
                                x = T === (this._yoyo && 0 != (1 & this._cycle)),
                                S = this._totalTime,
                                k = this._cycle,
                                C = this._rawPrevTime,
                                P = this._time;
                            if (this._totalTime = w * d, this._cycle < w ? T = !T : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), m !== this._time) return;
                            if (x && (this._cycle = w, this._locked = !0, m = T ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                            this._time = P, this._totalTime = S, this._cycle = k, this._rawPrevTime = C
                        }
                        if (!(this._time !== m && this._first || i || c || h)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= m)
                            for (n = this._first; n && (a = n._next, f === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, f === this._time && (!this._paused || b));) {
                                if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (o.length && s(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    }, u.getActive = function(t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n, r, o = [],
                            s = this.getChildren(t, e, i),
                            a = 0,
                            l = s.length;
                        for (n = 0; n < l; n++) r = s[n], r.isActive() && (o[a++] = r);
                        return o
                    }, u.getLabelAfter = function(t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(),
                            n = i.length;
                        for (e = 0; e < n; e++)
                            if (i[e].time > t) return i[e].name;
                        return null
                    }, u.getLabelBefore = function(t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                            if (e[i].time < t) return e[i].name;
                        return null
                    }, u.getLabelsArray = function() {
                        var t, e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = {
                            time: this._labels[t],
                            name: t
                        };
                        return e.sort(function(t, e) {
                            return t.time - e.time
                        }), e
                    }, u.invalidate = function() {
                        return this._locked = !1, t.prototype.invalidate.call(this)
                    }, u.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }, u.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }, u.totalDuration = function(e) {
                        return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, u.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, u.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, u.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, u.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, u.currentLabel = function(t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, n
                }, !0), a._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var n = function(t) {
                            e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var i, n, r = this.vars;
                            for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                        },
                        r = i._internals,
                        o = n._internals = {},
                        s = r.isSelector,
                        l = r.isArray,
                        c = r.lazyTweens,
                        u = r.lazyRender,
                        h = a._gsDefine.globals,
                        f = function(t) {
                            var e, i = {};
                            for (e in t) i[e] = t[e];
                            return i
                        },
                        p = function(t, e, i) {
                            var n, r, o = t.cycle;
                            for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                            delete t.cycle
                        },
                        d = o.pauseCallback = function() {},
                        m = function(t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        g = n.prototype = new e;
                    return n.version = "1.19.1", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                        var o = n.repeat && h.TweenMax || i;
                        return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                    }, g.from = function(t, e, n, r) {
                        return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                    }, g.fromTo = function(t, e, n, r, o) {
                        var s = r.repeat && h.TweenMax || i;
                        return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                    }, g.staggerTo = function(t, e, r, o, a, l, c, u) {
                        var h, d, g = new n({
                                onComplete: l,
                                onCompleteParams: c,
                                callbackScope: u,
                                smoothChildTiming: this.smoothChildTiming
                            }),
                            v = r.cycle;
                        for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], s(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && p(h.startAt, t, d)), v && (p(h, t, d), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[d], e, h, d * o);
                        return this.add(g, a)
                    }, g.staggerFrom = function(t, e, i, n, r, o, s, a) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                    }, g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                    }, g.call = function(t, e, n, r) {
                        return this.add(i.delayedCall(0, t, e, n), r)
                    }, g.set = function(t, e, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                    }, n.exportRoot = function(t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var r, o, s = new n(t),
                            a = s._timeline;
                        for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                        return a.add(s, 0), s
                    }, g.add = function(r, o, s, a) {
                        var c, u, h, f, p, d;
                        if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                            if (r instanceof Array || r && r.push && l(r)) {
                                for (s = s || "normal", a = a || 0, c = o, u = r.length, h = 0; h < u; h++) l(f = r[h]) && (f = new n({
                                    tweens: f
                                })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof r) return this.addLabel(r, o);
                            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                            r = i.delayedCall(0, r)
                        }
                        if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                        return this
                    }, g.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                        }
                        if (e instanceof Array || e && e.push && l(e)) {
                            for (var n = e.length; --n > -1;) this.remove(e[n]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, g._remove = function(t, i) {
                        return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, g.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, g.insert = g.insertMultiple = function(t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }, g.appendMultiple = function(t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }, g.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, g.addPause = function(t, e, n, r) {
                        var o = i.delayedCall(0, d, n, r || this);
                        return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                    }, g.removeLabel = function(t) {
                        return delete this._labels[t], this
                    }, g.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, g._parseTimeOrLabel = function(e, i, n, r) {
                        var o;
                        if (r instanceof t && r.timeline === this) this.remove(r);
                        else if (r && (r instanceof Array || r.push && l(r)))
                            for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                        if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                        else {
                            if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                        }
                        return Number(e) + i
                    }, g.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }, g.stop = function() {
                        return this.paused(!0)
                    }, g.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }, g.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }, g.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, o, s, a, l, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._time,
                            d = this._startTime,
                            m = this._timeScale,
                            g = this._paused;
                        if (t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                        else if (t < 1e-7)
                            if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                t = 0, this._initted || (a = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= p)
                                    for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                                l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== p && this._first || i || a || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (h = this._time) >= p)
                                for (n = this._first; n && (o = n._next, h === this._time && (!this._paused || g));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                            else
                                for (n = this._last; n && (o = n._prev, h === this._time && (!this._paused || g));) {
                                    if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                        if (l === n) {
                                            for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                            l = null, this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = o
                                }
                            this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), s && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                        }
                    }, g._hasPausedChild = function() {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                            t = t._next
                        }
                        return !1
                    }, g.getChildren = function(t, e, n, r) {
                        r = r || -9999999999;
                        for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                        return o
                    }, g.getTweensOf = function(t, e) {
                        var n, r, o = this._gc,
                            s = [],
                            a = 0;
                        for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                        return o && this._enabled(!1, !0), s
                    }, g.recent = function() {
                        return this._recent
                    }, g._contains = function(t) {
                        for (var e = t.timeline; e;) {
                            if (e === this) return !0;
                            e = e.timeline
                        }
                        return !1
                    }, g.shiftChildren = function(t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                        if (e)
                            for (n in o) o[n] >= i && (o[n] += t);
                        return this._uncache(!0)
                    }, g._kill = function(t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                        return r
                    }, g.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0)
                    }, g.invalidate = function() {
                        for (var e = this._first; e;) e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, g._enabled = function(t, i) {
                        if (t === this._gc)
                            for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, g.totalTime = function(e, i, n) {
                        this._forcingPlayhead = !0;
                        var r = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, r
                    }, g.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, g.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                this._duration = this._totalDuration = n, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }, g.paused = function(e) {
                        if (!e)
                            for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, g.usesFrames = function() {
                        for (var e = this._timeline; e._timeline;) e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, g.rawTime = function(t) {
                        return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }, n
                }, !0)
            }), a._gsDefine && a._gsQueue.pop()(),
            function(n) {
                "use strict";
                var l = function() {
                    return (a.GreenSockGlobals || a).TimelineMax
                };
                o = [i(26)], r = l, void 0 !== (s = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = s)
            }()
    }).call(e, i(2))
}, function(t, e, i) {
    (function(t) {
        /*!
         * VERSION: 0.1.12
         * DATE: 2017-01-17
         * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
         *
         * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
         *
         * @license Copyright (c) 2013-2017, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        ! function(t) {
            "use strict";
            var e, i, n, r = t.fn.animate,
                o = t.fn.stop,
                s = !0,
                a = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                l = {
                    overwrite: 1,
                    delay: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    autoCSS: 1
                },
                c = ",scrollTop,scrollLeft,show,hide,toggle,",
                u = function(t, e) {
                    for (var i in l) l[i] && void 0 !== t[i] && (e[i] = t[i])
                },
                h = function(t) {
                    return function(e) {
                        return t.getRatio(e)
                    }
                },
                f = {},
                p = function() {
                    var r, o, s, a = window.GreenSockGlobals || window;
                    if (e = a.TweenMax || a.TweenLite, e && (r = (e.version + ".0.0").split("."), o = !(Number(r[0]) > 0 && Number(r[1]) > 7), a = a.com.greensock, i = a.plugins.CSSPlugin, f = a.easing.Ease.map || {}), !e || !i || o) return e = null, void(!n && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (o ? " Version " + r.join(".") + " is too old." : "")), n = !0));
                    if (t.easing) {
                        for (s in f) t.easing[s] = h(f[s]);
                        p = !1
                    }
                };
            t.fn.animate = function(n, o, l, h) {
                if (n = n || {}, p && (p(), !e || !i)) return r.call(this, n, o, l, h);
                if (!s || !0 === n.skipGSAP || "object" == typeof o && "function" == typeof o.step) return r.call(this, n, o, l, h);
                var d, m, g, v, _ = t.speed(o, l, h),
                    y = {
                        ease: f[_.easing] || (!1 === _.easing ? f.linear : f.swing)
                    },
                    b = this,
                    w = "object" == typeof o ? o.specialEasing : null;
                for (m in n) {
                    if (d = n[m], d instanceof Array && f[d[1]] && (w = w || {}, w[m] = d[1], d = d[0]), "show" === d || "hide" === d || "toggle" === d || -1 !== c.indexOf(m) && -1 !== c.indexOf("," + m + ",")) return r.call(this, n, o, l, h);
                    y[-1 === m.indexOf("-") ? m : t.camelCase(m)] = d
                }
                if (w) {
                    y = a(y), v = [];
                    for (m in w) d = v[v.length] = {}, u(y, d), d.ease = f[w[m]] || y.ease, -1 !== m.indexOf("-") && (m = t.camelCase(m)), d[m] = y[m], delete y[m];
                    0 === v.length && (v = null)
                }
                return g = function(i) {
                    var n, r = a(y);
                    if (v)
                        for (n = v.length; --n > -1;) e.to(this, t.fx.off ? 0 : _.duration / 1e3, v[n]);
                    r.onComplete = function() {
                        i ? i() : _.old && t(this).each(_.old)
                    }, e.to(this, t.fx.off ? 0 : _.duration / 1e3, r)
                }, !1 !== _.queue ? (b.queue(_.queue, g), "function" == typeof _.old && t(b[b.length - 1]).queue(_.queue, function(t) {
                    _.old.call(b), t()
                })) : g.call(b), b
            }, t.fn.stop = function(t, i) {
                if (o.call(this, t, i), e) {
                    if (i)
                        for (var n, r = e.getTweensOf(this), s = r.length; --s > -1;)(n = r[s].totalTime() / r[s].totalDuration()) > 0 && n < 1 && r[s].seek(r[s].totalDuration());
                    e.killTweensOf(this)
                }
                return this
            }, t.gsap = {
                enabled: function(t) {
                    s = t
                },
                version: "0.1.12",
                legacyProps: function(t) {
                    c = ",scrollTop,scrollLeft,show,hide,toggle," + t + ","
                }
            }
        }(t)
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    var n = Date.prototype.getDay,
        r = function(t) {
            try {
                return n.call(t), !0
            } catch (t) {
                return !1
            }
        },
        o = Object.prototype.toString,
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        return "object" == typeof t && null !== t && (s ? r(t) : "[object Date]" === o.call(t))
    }
}, function(t, e, i) {
    "use strict";
    var n = i(8),
        r = RegExp.prototype.exec,
        o = Object.getOwnPropertyDescriptor,
        s = function(t) {
            try {
                var e = t.lastIndex;
                return t.lastIndex = 0, r.call(t), !0
            } catch (t) {
                return !1
            } finally {
                t.lastIndex = e
            }
        },
        a = Object.prototype.toString,
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t || "object" != typeof t) return !1;
        if (!l) return "[object RegExp]" === a.call(t);
        var e = o(t, "lastIndex");
        return !(!e || !n(e, "value")) && s(t)
    }
}, function(t, e, i) {
    "use strict";
    var n = Object.prototype.toString;
    if ("function" == typeof Symbol && "symbol" == typeof Symbol()) {
        var r = Symbol.prototype.toString,
            o = /^Symbol\(.*\)$/,
            s = function(t) {
                return "symbol" == typeof t.valueOf() && o.test(r.call(t))
            };
        t.exports = function(t) {
            if ("symbol" == typeof t) return !0;
            if ("[object Symbol]" !== n.call(t)) return !1;
            try {
                return s(t)
            } catch (t) {
                return !1
            }
        }
    } else t.exports = function(t) {
        return !1
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
    }
}, function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        o = Array.prototype.slice,
        s = i(79),
        a = Object.prototype.propertyIsEnumerable,
        l = !a.call({
            toString: null
        }, "toString"),
        c = a.call(function() {}, "prototype"),
        u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        h = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        },
        f = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        p = function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                if (!f["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                    h(window[t])
                } catch (t) {
                    return !0
                }
            } catch (t) {
                return !0
            }
            return !1
        }(),
        d = function(t) {
            if ("undefined" == typeof window || !p) return h(t);
            try {
                return h(t)
            } catch (t) {
                return !1
            }
        },
        m = function(t) {
            var e = null !== t && "object" == typeof t,
                i = "[object Function]" === r.call(t),
                o = s(t),
                a = e && "[object String]" === r.call(t),
                h = [];
            if (!e && !i && !o) throw new TypeError("Object.keys called on a non-object");
            var f = c && i;
            if (a && t.length > 0 && !n.call(t, 0))
                for (var p = 0; p < t.length; ++p) h.push(String(p));
            if (o && t.length > 0)
                for (var m = 0; m < t.length; ++m) h.push(String(m));
            else
                for (var g in t) f && "prototype" === g || !n.call(t, g) || h.push(String(g));
            if (l)
                for (var v = d(t), _ = 0; _ < u.length; ++_) v && "constructor" === u[_] || !n.call(t, u[_]) || h.push(u[_]);
            return h
        };
    m.shim = function() {
        if (Object.keys) {
            if (! function() {
                    return 2 === (Object.keys(arguments) || "").length
                }(1, 2)) {
                var t = Object.keys;
                Object.keys = function(e) {
                    return t(s(e) ? o.call(e) : e)
                }
            }
        } else Object.keys = m;
        return Object.keys || m
    }, t.exports = m
}, function(t, e, i) {
    "use strict";
    var n = Object.prototype.toString;
    t.exports = function(t) {
        var e = n.call(t),
            i = "[object Arguments]" === e;
        return i || (i = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), i
    }
}, function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        m && p && (m = !1, p.length ? d = p.concat(d) : g = -1, d.length && a())
    }

    function a() {
        if (!m) {
            var t = r(s);
            m = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++g < e;) p && p[g].run();
                g = -1, e = d.length
            }
            p = null, m = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var u, h, f = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            u = i
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            h = n
        }
    }();
    var p, d = [],
        m = !1,
        g = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        d.push(new l(t, e)), 1 !== d.length || m || r(a)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(t, e) {
    t.exports = "#define GLSLIFY 1\nattribute vec2 position;\n\nvoid main() {\n  gl_Position = vec4(3.0 * position, 0.0, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "#define TWO_PI 6.2831853072\n#define PI 3.14159265359\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float globaltime;\nuniform vec2 resolution;\nuniform float aspect;\nuniform float scroll;\nuniform float velocity;\nuniform sampler2D texture;\n\nconst float timescale = 0.1;\nconst float twist = 2.0;\n\nvec2 rotate(vec2 v, float angle) {\n\tfloat c = cos(angle);\n\tfloat s = sin(angle);\n\treturn v * mat2(c, -s, s, c);\n}\n\nfloat nsin(float value) {\n\treturn sin(value * TWO_PI) * 0.5 + 0.5;\n}\n\nvoid main(void) {\n\tfloat time = globaltime * timescale;\n\tvec2 center = vec2(sin(TWO_PI * time * 0.2), cos(TWO_PI * time * 0.2)) * nsin(time * 0.3) * 0.5;\n\tvec2 tx = (gl_FragCoord.xy / resolution.xy - 0.5 - center) * vec2(aspect, 1.0);\n\tfloat len = 1.0 - length(tx);\n\tfloat zoom = 1.0 + scroll - len * 3.0 * (1.0 - scroll) + len * velocity * 2.0;\n\n\tvec4 imgColor = texture2D(\n\t\ttexture,\n\t\trotate(\n\t\t\t(tx + center) * vec2(1.0, -1.0) * zoom,\n\t\t\ttwist * TWO_PI * nsin(len + time) * scroll + time\n\t\t) + 0.5\n\t);\n\n\tgl_FragColor = imgColor;\n}\n"
}, function(t, e, i) {
    ! function(e, i) {
        t.exports = i()
    }(0, function() {
        "use strict";

        function t(t) {
            return "undefined" != typeof btoa ? btoa(t) : "base64:" + t
        }

        function e(t) {
            var e = new Error("(regl) " + t);
            throw console.error(e), e
        }

        function i(t, i) {
            t || e(i)
        }

        function n(t) {
            return t ? ": " + t : ""
        }

        function r(t, i, r) {
            t in i || e("unknown parameter (" + t + ")" + n(r) + ". possible values: " + Object.keys(i).join())
        }

        function o(t, i) {
            Zt(t) || e("invalid parameter type" + n(i) + ". must be a typed array")
        }

        function s(t, i, r) {
            typeof t !== i && e("invalid parameter type" + n(r) + ". expected " + i + ", got " + typeof t)
        }

        function a(t, i) {
            t >= 0 && (0 | t) === t || e("invalid parameter type, (" + t + ")" + n(i) + ". must be a nonnegative integer")
        }

        function l(t, i, r) {
            i.indexOf(t) < 0 && e("invalid value" + n(r) + ". must be one of: " + i)
        }

        function c(t) {
            Object.keys(t).forEach(function(t) {
                te.indexOf(t) < 0 && e('invalid regl constructor argument "' + t + '". must be one of ' + te)
            })
        }

        function u(t, e) {
            for (t += ""; t.length < e;) t = " " + t;
            return t
        }

        function h() {
            this.name = "unknown", this.lines = [], this.index = {}, this.hasErrors = !1
        }

        function f(t, e) {
            this.number = t, this.line = e, this.errors = []
        }

        function p(t, e, i) {
            this.file = t, this.line = e, this.message = i
        }

        function d() {
            var t = new Error,
                e = (t.stack || t).toString(),
                i = /compileProcedure.*\n\s*at.*\((.*)\)/.exec(e);
            if (i) return i[1];
            var n = /compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(e);
            return n ? n[1] : "unknown"
        }

        function m() {
            var t = new Error,
                e = (t.stack || t).toString(),
                i = /at REGLCommand.*\n\s+at.*\((.*)\)/.exec(e);
            if (i) return i[1];
            var n = /at REGLCommand.*\n\s+at\s+(.*)\n/.exec(e);
            return n ? n[1] : "unknown"
        }

        function g(e, i) {
            var n = e.split("\n"),
                r = 1,
                o = 0,
                s = {
                    unknown: new h,
                    0: new h
                };
            s.unknown.name = s[0].name = i || d(), s.unknown.lines.push(new f(0, ""));
            for (var a = 0; a < n.length; ++a) {
                var l = n[a],
                    c = /^\s*\#\s*(\w+)\s+(.+)\s*$/.exec(l);
                if (c) switch (c[1]) {
                    case "line":
                        var u = /(\d+)(\s+\d+)?/.exec(c[2]);
                        u && (r = 0 | u[1], u[2] && ((o = 0 | u[2]) in s || (s[o] = new h)));
                        break;
                    case "define":
                        var p = /SHADER_NAME(_B64)?\s+(.*)$/.exec(c[2]);
                        p && (s[o].name = p[1] ? t(p[2]) : p[2])
                }
                s[o].lines.push(new f(r++, l))
            }
            return Object.keys(s).forEach(function(t) {
                var e = s[t];
                e.lines.forEach(function(t) {
                    e.index[t.number] = t
                })
            }), s
        }

        function v(t) {
            var e = [];
            return t.split("\n").forEach(function(t) {
                if (!(t.length < 5)) {
                    var i = /^ERROR\:\s+(\d+)\:(\d+)\:\s*(.*)$/.exec(t);
                    i ? e.push(new p(0 | i[1], 0 | i[2], i[3].trim())) : t.length > 0 && e.push(new p("unknown", 0, t))
                }
            }), e
        }

        function _(t, e) {
            e.forEach(function(e) {
                var i = t[e.file];
                if (i) {
                    var n = i.index[e.line];
                    if (n) return n.errors.push(e), void(i.hasErrors = !0)
                }
                t.unknown.hasErrors = !0, t.unknown.lines[0].errors.push(e)
            })
        }

        function y(t, e, n, r, o) {
            if (!t.getShaderParameter(e, t.COMPILE_STATUS)) {
                var s = t.getShaderInfoLog(e),
                    a = r === t.FRAGMENT_SHADER ? "fragment" : "vertex";
                C(n, "string", a + " shader source must be a string", o);
                var l = g(n, o),
                    c = v(s);
                _(l, c), Object.keys(l).forEach(function(t) {
                    function e(t, e) {
                        n.push(t), r.push(e || "")
                    }
                    var i = l[t];
                    if (i.hasErrors) {
                        var n = [""],
                            r = [""];
                        e("file number " + t + ": " + i.name + "\n", "color:red;text-decoration:underline;font-weight:bold"), i.lines.forEach(function(t) {
                            if (t.errors.length > 0) {
                                e(u(t.number, 4) + "|  ", "background-color:yellow; font-weight:bold"), e(t.line + "\n", "color:red; background-color:yellow; font-weight:bold");
                                var i = 0;
                                t.errors.forEach(function(n) {
                                    var r = n.message,
                                        o = /^\s*\'(.*)\'\s*\:\s*(.*)$/.exec(r);
                                    if (o) {
                                        var s = o[1];
                                        switch (r = o[2], s) {
                                            case "assign":
                                                s = "="
                                        }
                                        i = Math.max(t.line.indexOf(s, i), 0)
                                    } else i = 0;
                                    e(u("| ", 6)), e(u("^^^", i + 3) + "\n", "font-weight:bold"), e(u("| ", 6)), e(r + "\n", "font-weight:bold")
                                }), e(u("| ", 6) + "\n")
                            } else e(u(t.number, 4) + "|  "), e(t.line + "\n", "color:red")
                        }), "undefined" != typeof document ? (r[0] = n.join("%c"), console.log.apply(console, r)) : console.log(n.join(""))
                    }
                }), i.raise("Error compiling " + a + " shader, " + l[0].name)
            }
        }

        function b(t, e, n, r, o) {
            if (!t.getProgramParameter(e, t.LINK_STATUS)) {
                var s = t.getProgramInfoLog(e),
                    a = g(n, o),
                    l = g(r, o),
                    c = 'Error linking program with vertex shader, "' + l[0].name + '", and fragment shader "' + a[0].name + '"';
                "undefined" != typeof document ? console.log("%c" + c + "\n%c" + s, "color:red;text-decoration:underline;font-weight:bold", "color:red") : console.log(c + "\n" + s), i.raise(c)
            }
        }

        function w(t) {
            t._commandRef = d()
        }

        function T(t, e, i, n) {
            function r(t) {
                return t ? n.id(t) : 0
            }

            function o(t, e) {
                Object.keys(e).forEach(function(e) {
                    t[n.id(e)] = !0
                })
            }
            w(t), t._fragId = r(t.static.frag), t._vertId = r(t.static.vert);
            var s = t._uniformSet = {};
            o(s, e.static), o(s, e.dynamic);
            var a = t._attributeSet = {};
            o(a, i.static), o(a, i.dynamic), t._hasCount = "count" in t.static || "count" in t.dynamic || "elements" in t.static || "elements" in t.dynamic
        }

        function x(t, i) {
            var n = m();
            e(t + " in command " + (i || d()) + ("unknown" === n ? "" : " called from " + n))
        }

        function S(t, e, i) {
            t || x(e, i || d())
        }

        function k(t, e, i, r) {
            t in e || x("unknown parameter (" + t + ")" + n(i) + ". possible values: " + Object.keys(e).join(), r || d())
        }

        function C(t, e, i, r) {
            typeof t !== e && x("invalid parameter type" + n(i) + ". expected " + e + ", got " + typeof t, r || d())
        }

        function P(t) {
            t()
        }

        function A(t, e, i) {
            t.texture ? l(t.texture._texture.internalformat, e, "unsupported texture format for attachment") : l(t.renderbuffer._renderbuffer.format, i, "unsupported renderbuffer format for attachment")
        }

        function O(t, e) {
            return t === ce || t === le || t === ue ? 2 : t === he ? 4 : fe[t] * e
        }

        function E(t) {
            return !(t & t - 1 || !t)
        }

        function $(t, e, n) {
            var r, o = e.width,
                s = e.height,
                a = e.channels;
            i(o > 0 && o <= n.maxTextureSize && s > 0 && s <= n.maxTextureSize, "invalid texture shape"), t.wrapS === ee && t.wrapT === ee || i(E(o) && E(s), "incompatible wrap mode for texture, both width and height must be power of 2"), 1 === e.mipmask ? 1 !== o && 1 !== s && i(t.minFilter !== ne && t.minFilter !== oe && t.minFilter !== re && t.minFilter !== se, "min filter requires mipmap") : (i(E(o) && E(s), "texture must be a square power of 2 to support mipmapping"), i(e.mipmask === (o << 1) - 1, "missing or incomplete mipmap data")), e.type === ae && (n.extensions.indexOf("oes_texture_float_linear") < 0 && i(t.minFilter === ie && t.magFilter === ie, "filter not supported, must enable oes_texture_float_linear"), i(!t.genMipmaps, "mipmap generation not supported with float textures"));
            var l = e.images;
            for (r = 0; r < 16; ++r)
                if (l[r]) {
                    var c = o >> r,
                        u = s >> r;
                    i(e.mipmask & 1 << r, "missing mipmap data");
                    var h = l[r];
                    if (i(h.width === c && h.height === u, "invalid shape for mip images"), i(h.format === e.format && h.internalformat === e.internalformat && h.type === e.type, "incompatible type for mip image"), h.compressed);
                    else if (h.data) {
                        var f = Math.ceil(O(h.type, a) * c / h.unpackAlignment) * h.unpackAlignment;
                        i(h.data.byteLength === f * u, "invalid data for image, buffer size is inconsistent with image format")
                    } else h.element || h.copy
                } else t.genMipmaps || i(0 == (e.mipmask & 1 << r), "extra mipmap data");
            e.compressed && i(!t.genMipmaps, "mipmap generation for compressed images not supported")
        }

        function D(t, e, n, r) {
            var o = t.width,
                s = t.height,
                a = t.channels;
            i(o > 0 && o <= r.maxTextureSize && s > 0 && s <= r.maxTextureSize, "invalid texture shape"), i(o === s, "cube map must be square"), i(e.wrapS === ee && e.wrapT === ee, "wrap mode not supported by cube map");
            for (var l = 0; l < n.length; ++l) {
                var c = n[l];
                i(c.width === o && c.height === s, "inconsistent cube map face shape"), e.genMipmaps && (i(!c.compressed, "can not generate mipmap for compressed textures"), i(1 === c.mipmask, "can not specify mipmaps and generate mipmaps"));
                for (var u = c.images, h = 0; h < 16; ++h) {
                    var f = u[h];
                    if (f) {
                        var p = o >> h,
                            d = s >> h;
                        i(c.mipmask & 1 << h, "missing mipmap data"), i(f.width === p && f.height === d, "invalid shape for mip images"), i(f.format === t.format && f.internalformat === t.internalformat && f.type === t.type, "incompatible type for mip image"), f.compressed || (f.data ? i(f.data.byteLength === p * d * Math.max(O(f.type, a), f.unpackAlignment), "invalid data for image, buffer size is inconsistent with image format") : f.element || f.copy)
                    }
                }
            }
        }

        function R(t, e) {
            this.id = de++, this.type = t, this.data = e
        }

        function M(t) {
            return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        }

        function j(t) {
            if (0 === t.length) return [];
            var e = t.charAt(0),
                i = t.charAt(t.length - 1);
            if (t.length > 1 && e === i && ('"' === e || "'" === e)) return ['"' + M(t.substr(1, t.length - 2)) + '"'];
            var n = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(t);
            if (n) return j(t.substr(0, n.index)).concat(j(n[1])).concat(j(t.substr(n.index + n[0].length)));
            var r = t.split(".");
            if (1 === r.length) return ['"' + M(t) + '"'];
            for (var o = [], s = 0; s < r.length; ++s) o = o.concat(j(r[s]));
            return o
        }

        function I(t) {
            return "[" + j(t).join("][") + "]"
        }

        function L(t, e) {
            return new R(t, I(e + ""))
        }

        function F(t) {
            return "function" == typeof t && !t._reglType || t instanceof R
        }

        function z(t, e) {
            return "function" == typeof t ? new R(me, t) : t
        }

        function N() {
            var t = {
                    "": 0
                },
                e = [""];
            return {
                id: function(i) {
                    var n = t[i];
                    return n || (n = t[i] = e.length, e.push(i), n)
                },
                str: function(t) {
                    return e[t]
                }
            }
        }

        function B(t, e, i) {
            function n() {
                var e = window.innerWidth,
                    n = window.innerHeight;
                if (t !== document.body) {
                    var r = t.getBoundingClientRect();
                    e = r.right - r.left, n = r.bottom - r.top
                }
                o.width = i * e, o.height = i * n, Jt(o.style, {
                    width: e + "px",
                    height: n + "px"
                })
            }

            function r() {
                window.removeEventListener("resize", n), t.removeChild(o)
            }
            var o = document.createElement("canvas");
            return Jt(o.style, {
                border: 0,
                margin: 0,
                padding: 0,
                top: 0,
                left: 0
            }), t.appendChild(o), t === document.body && (o.style.position = "absolute", Jt(t.style, {
                margin: 0,
                padding: 0
            })), window.addEventListener("resize", n, !1), n(), {
                canvas: o,
                onDestroy: r
            }
        }

        function H(t, e) {
            function i(i) {
                try {
                    return t.getContext(i, e)
                } catch (t) {
                    return null
                }
            }
            return i("webgl") || i("experimental-webgl") || i("webgl-experimental")
        }

        function W(t) {
            return "string" == typeof t.nodeName && "function" == typeof t.appendChild && "function" == typeof t.getBoundingClientRect
        }

        function X(t) {
            return "function" == typeof t.drawArrays || "function" == typeof t.drawElements
        }

        function U(t) {
            return "string" == typeof t ? t.split() : (pe(Array.isArray(t), "invalid extension array"), t)
        }

        function G(t) {
            return "string" == typeof t ? (pe("undefined" != typeof document, "not supported outside of DOM"), document.querySelector(t)) : t
        }

        function q(t) {
            var e, i, n, r, o = t || {},
                s = {},
                a = [],
                l = [],
                c = "undefined" == typeof window ? 1 : window.devicePixelRatio,
                u = !1,
                h = function(t) {
                    t && pe.raise(t)
                },
                f = function() {};
            if ("string" == typeof o ? (pe("undefined" != typeof document, "selector queries only supported in DOM enviroments"), e = document.querySelector(o), pe(e, "invalid query string for element")) : "object" == typeof o ? W(o) ? e = o : X(o) ? (r = o, n = r.canvas) : (pe.constructor(o), "gl" in o ? r = o.gl : "canvas" in o ? n = G(o.canvas) : "container" in o && (i = G(o.container)), "attributes" in o && (s = o.attributes, pe.type(s, "object", "invalid context attributes")), "extensions" in o && (a = U(o.extensions)), "optionalExtensions" in o && (l = U(o.optionalExtensions)), "onDone" in o && (pe.type(o.onDone, "function", "invalid or missing onDone callback"), h = o.onDone), "profile" in o && (u = !!o.profile), "pixelRatio" in o && (c = +o.pixelRatio, pe(c > 0, "invalid pixel ratio"))) : pe.raise("invalid arguments to regl"), e && ("canvas" === e.nodeName.toLowerCase() ? n = e : i = e), !r) {
                if (!n) {
                    pe("undefined" != typeof document, "must manually specify webgl context outside of DOM environments");
                    var p = B(i || document.body, h, c);
                    if (!p) return null;
                    n = p.canvas, f = p.onDestroy
                }
                r = H(n, s)
            }
            return r ? {
                gl: r,
                canvas: n,
                container: i,
                extensions: a,
                optionalExtensions: l,
                pixelRatio: c,
                profile: u,
                onDone: h,
                onDestroy: f
            } : (f(), h("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"), null)
        }

        function Y(t, e) {
            function i(e) {
                pe.type(e, "string", "extension name must be string");
                var i, r = e.toLowerCase();
                try {
                    i = n[r] = t.getExtension(r)
                } catch (t) {}
                return !!i
            }
            for (var n = {}, r = 0; r < e.extensions.length; ++r) {
                var o = e.extensions[r];
                if (!i(o)) return e.onDestroy(), e.onDone('"' + o + '" extension is not supported by the current WebGL context, try upgrading your system or a different browser'), null
            }
            return e.optionalExtensions.forEach(i), {
                extensions: n,
                restore: function() {
                    Object.keys(n).forEach(function(t) {
                        if (!i(t)) throw new Error("(regl): error restoring extension " + t)
                    })
                }
            }
        }

        function V(t) {
            return !!t && "object" == typeof t && Array.isArray(t.shape) && Array.isArray(t.stride) && "number" == typeof t.offset && t.shape.length === t.stride.length && (Array.isArray(t.data) || Zt(t.data))
        }

        function Q(t, e) {
            for (var i = Array(t), n = 0; n < t; ++n) i[n] = e(n);
            return i
        }

        function K(t) {
            for (var e = 16; e <= 1 << 28; e *= 16)
                if (t <= e) return e;
            return 0
        }

        function Z(t) {
            var e, i;
            return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, (e |= i) | t >> 1
        }

        function J(t) {
            var e = K(t),
                i = Ae[Z(e) >> 2];
            return i.length > 0 ? i.pop() : new ArrayBuffer(e)
        }

        function tt(t) {
            Ae[Z(t.byteLength) >> 2].push(t)
        }

        function et(t, e) {
            var i = null;
            switch (t) {
                case we:
                    i = new Int8Array(J(e), 0, e);
                    break;
                case Te:
                    i = new Uint8Array(J(e), 0, e);
                    break;
                case xe:
                    i = new Int16Array(J(2 * e), 0, e);
                    break;
                case Se:
                    i = new Uint16Array(J(2 * e), 0, e);
                    break;
                case ke:
                    i = new Int32Array(J(4 * e), 0, e);
                    break;
                case Ce:
                    i = new Uint32Array(J(4 * e), 0, e);
                    break;
                case Pe:
                    i = new Float32Array(J(4 * e), 0, e);
                    break;
                default:
                    return null
            }
            return i.length !== e ? i.subarray(0, e) : i
        }

        function it(t) {
            tt(t.buffer)
        }

        function nt(t, e, i) {
            for (var n = 0; n < e; ++n) i[n] = t[n]
        }

        function rt(t, e, i, n) {
            for (var r = 0, o = 0; o < e; ++o)
                for (var s = t[o], a = 0; a < i; ++a) n[r++] = s[a]
        }

        function ot(t, e, i, n, r, o) {
            for (var s = o, a = 0; a < e; ++a)
                for (var l = t[a], c = 0; c < i; ++c)
                    for (var u = l[c], h = 0; h < n; ++h) r[s++] = u[h]
        }

        function st(t, e, i, n, r) {
            for (var o = 1, s = i + 1; s < e.length; ++s) o *= e[s];
            var a = e[i];
            if (e.length - i == 4) {
                var l = e[i + 1],
                    c = e[i + 2],
                    u = e[i + 3];
                for (s = 0; s < a; ++s) ot(t[s], l, c, u, n, r), r += o
            } else
                for (s = 0; s < a; ++s) st(t[s], e, i + 1, n, r), r += o
        }

        function at(t, e, i, n) {
            var r = 1;
            if (e.length)
                for (var o = 0; o < e.length; ++o) r *= e[o];
            else r = 0;
            var s = n || Oe.allocType(i, r);
            switch (e.length) {
                case 0:
                    break;
                case 1:
                    nt(t, e[0], s);
                    break;
                case 2:
                    rt(t, e[0], e[1], s);
                    break;
                case 3:
                    ot(t, e[0], e[1], e[2], s, 0);
                    break;
                default:
                    st(t, e, 0, s, 0)
            }
            return s
        }

        function lt(t) {
            for (var e = [], i = t; i.length; i = i[0]) e.push(i.length);
            return e
        }

        function ct(t) {
            return 0 | Kt[Object.prototype.toString.call(t)]
        }

        function ut(t, e) {
            for (var i = 0; i < e.length; ++i) t[i] = e[i]
        }

        function ht(t, e, i, n, r, o, s) {
            for (var a = 0, l = 0; l < i; ++l)
                for (var c = 0; c < n; ++c) t[a++] = e[r * l + o * c + s]
        }

        function ft(t, e, i) {
            function n(e) {
                this.id = h++, this.buffer = t.createBuffer(), this.type = e, this.usage = je, this.byteLength = 0, this.dimension = 1, this.dtype = Le, this.persistentData = null, i.profile && (this.stats = {
                    size: 0
                })
            }

            function r(t, e) {
                var i = p.pop();
                return i || (i = new n(t)), i.bind(), a(i, e, Ie, 0, 1, !1), i
            }

            function o(t) {
                p.push(t)
            }

            function s(e, i, n) {
                e.byteLength = i.byteLength, t.bufferData(e.type, i, n)
            }

            function a(t, e, i, n, r, o) {
                var a;
                if (t.usage = i, Array.isArray(e)) {
                    if (t.dtype = n || Fe, e.length > 0) {
                        var l;
                        if (Array.isArray(e[0])) {
                            a = Me(e);
                            for (var c = 1, u = 1; u < a.length; ++u) c *= a[u];
                            t.dimension = c, l = Re(e, a, t.dtype), s(t, l, i), o ? t.persistentData = l : Oe.freeType(l)
                        } else if ("number" == typeof e[0]) {
                            t.dimension = r;
                            var h = Oe.allocType(t.dtype, e.length);
                            ut(h, e), s(t, h, i), o ? t.persistentData = h : Oe.freeType(h)
                        } else Zt(e[0]) ? (t.dimension = e[0].length, t.dtype = n || ct(e[0]) || Fe, l = Re(e, [e.length, e[0].length], t.dtype), s(t, l, i), o ? t.persistentData = l : Oe.freeType(l)) : pe.raise("invalid buffer data")
                    }
                } else if (Zt(e)) t.dtype = n || ct(e), t.dimension = r, s(t, e, i), o && (t.persistentData = new Uint8Array(new Uint8Array(e.buffer)));
                else if (V(e)) {
                    a = e.shape;
                    var f = e.stride,
                        p = e.offset,
                        d = 0,
                        m = 0,
                        g = 0,
                        v = 0;
                    1 === a.length ? (d = a[0], m = 1, g = f[0], v = 0) : 2 === a.length ? (d = a[0], m = a[1], g = f[0], v = f[1]) : pe.raise("invalid shape"), t.dtype = n || ct(e.data) || Fe, t.dimension = m;
                    var _ = Oe.allocType(t.dtype, d * m);
                    ht(_, e.data, d, m, g, v, p), s(t, _, i), o ? t.persistentData = _ : Oe.freeType(_)
                } else pe.raise("invalid buffer data")
            }

            function l(i) {
                e.bufferCount--;
                var n = i.buffer;
                pe(n, "buffer must not be deleted already"), t.deleteBuffer(n), i.buffer = null, delete f[i.id]
            }

            function c(r, o, s, c) {
                function u(e) {
                    var n = je,
                        r = null,
                        o = 0,
                        s = 0,
                        l = 1;
                    return Array.isArray(e) || Zt(e) || V(e) ? r = e : "number" == typeof e ? o = 0 | e : e && (pe.type(e, "object", "buffer arguments must be an object, a number or an array"), "data" in e && (pe(null === r || Array.isArray(r) || Zt(r) || V(r), "invalid data for buffer"), r = e.data), "usage" in e && (pe.parameter(e.usage, De, "invalid buffer usage"), n = De[e.usage]), "type" in e && (pe.parameter(e.type, $e, "invalid buffer type"), s = $e[e.type]), "dimension" in e && (pe.type(e.dimension, "number", "invalid dimension"), l = 0 | e.dimension), "length" in e && (pe.nni(o, "buffer length must be a nonnegative integer"), o = 0 | e.length)), d.bind(), r ? a(d, r, n, s, l, c) : (t.bufferData(d.type, o, n), d.dtype = s || Le, d.usage = n, d.dimension = l, d.byteLength = o), i.profile && (d.stats.size = d.byteLength * ze[d.dtype]), u
                }

                function h(e, i) {
                    pe(i + e.byteLength <= d.byteLength, "invalid buffer subdata call, buffer is too small.  Can't write data of size " + e.byteLength + " starting from offset " + i + " to a buffer of size " + d.byteLength), t.bufferSubData(d.type, i, e)
                }

                function p(t, e) {
                    var i, n = 0 | (e || 0);
                    if (d.bind(), Array.isArray(t)) {
                        if (t.length > 0)
                            if ("number" == typeof t[0]) {
                                var r = Oe.allocType(d.dtype, t.length);
                                ut(r, t), h(r, n), Oe.freeType(r)
                            } else if (Array.isArray(t[0]) || Zt(t[0])) {
                            i = Me(t);
                            var o = Re(t, i, d.dtype);
                            h(o, n), Oe.freeType(o)
                        } else pe.raise("invalid buffer data")
                    } else if (Zt(t)) h(t, n);
                    else if (V(t)) {
                        i = t.shape;
                        var s = t.stride,
                            a = 0,
                            l = 0,
                            c = 0,
                            f = 0;
                        1 === i.length ? (a = i[0], l = 1, c = s[0], f = 0) : 2 === i.length ? (a = i[0], l = i[1], c = s[0], f = s[1]) : pe.raise("invalid shape");
                        var p = Array.isArray(t.data) ? d.dtype : ct(t.data),
                            m = Oe.allocType(p, a * l);
                        ht(m, t.data, a, l, c, f, t.offset), h(m, n), Oe.freeType(m)
                    } else pe.raise("invalid data for buffer subdata");
                    return u
                }
                e.bufferCount++;
                var d = new n(o);
                return f[d.id] = d, s || u(r), u._reglType = "buffer", u._buffer = d, u.subdata = p, i.profile && (u.stats = d.stats), u.destroy = function() {
                    l(d)
                }, u
            }

            function u() {
                be(f).forEach(function(e) {
                    e.buffer = t.createBuffer(), t.bindBuffer(e.type, e.buffer), t.bufferData(e.type, e.persistentData || e.byteLength, e.usage)
                })
            }
            var h = 0,
                f = {};
            n.prototype.bind = function() {
                t.bindBuffer(this.type, this.buffer)
            }, n.prototype.destroy = function() {
                l(this)
            };
            var p = [];
            return i.profile && (e.getTotalBufferSize = function() {
                var t = 0;
                return Object.keys(f).forEach(function(e) {
                    t += f[e].stats.size
                }), t
            }), {
                create: c,
                createStream: r,
                destroyStream: o,
                clear: function() {
                    be(f).forEach(l), p.forEach(l)
                },
                getBuffer: function(t) {
                    return t && t._buffer instanceof n ? t._buffer : null
                },
                restore: u,
                _initBuffer: a
            }
        }

        function pt(t, e, i, n) {
            function r(t) {
                this.id = h++, u[this.id] = this, this.buffer = t, this.primType = We, this.vertCount = 0, this.type = 0
            }

            function o(t) {
                var e = p.pop();
                return e || (e = new r(i.create(null, Qe, !0, !1)._buffer)), a(e, t, Ke, -1, -1, 0, 0), e
            }

            function s(t) {
                p.push(t)
            }

            function a(n, r, o, s, a, l, c) {
                if (n.buffer.bind(), r) {
                    var u = c;
                    c || Zt(r) && (!V(r) || Zt(r.data)) || (u = e.oes_element_index_uint ? Ve : qe), i._initBuffer(n.buffer, r, o, u, 3)
                } else t.bufferData(Qe, l, o), n.buffer.dtype = h || Ue, n.buffer.usage = o, n.buffer.dimension = 3, n.buffer.byteLength = l;
                var h = c;
                if (!c) {
                    switch (n.buffer.dtype) {
                        case Ue:
                        case Xe:
                            h = Ue;
                            break;
                        case qe:
                        case Ge:
                            h = qe;
                            break;
                        case Ve:
                        case Ye:
                            h = Ve;
                            break;
                        default:
                            pe.raise("unsupported type for element array")
                    }
                    n.buffer.dtype = h
                }
                n.type = h, pe(h !== Ve || !!e.oes_element_index_uint, "32 bit element buffers not supported, enable oes_element_index_uint first");
                var f = a;
                f < 0 && (f = n.buffer.byteLength, h === qe ? f >>= 1 : h === Ve && (f >>= 2)), n.vertCount = f;
                var p = s;
                if (s < 0) {
                    p = We;
                    var d = n.buffer.dimension;
                    1 === d && (p = Be), 2 === d && (p = He), 3 === d && (p = We)
                }
                n.primType = p
            }

            function l(t) {
                n.elementsCount--, pe(null !== t.buffer, "must not double destroy elements"), delete u[t.id], t.buffer.destroy(), t.buffer = null
            }

            function c(t, e) {
                function o(t) {
                    if (t)
                        if ("number" == typeof t) s(t), c.primType = We, c.vertCount = 0 | t, c.type = Ue;
                        else {
                            var e = null,
                                i = Ze,
                                n = -1,
                                r = -1,
                                l = 0,
                                u = 0;
                            Array.isArray(t) || Zt(t) || V(t) ? e = t : (pe.type(t, "object", "invalid arguments for elements"), "data" in t && (e = t.data, pe(Array.isArray(e) || Zt(e) || V(e), "invalid data for element buffer")), "usage" in t && (pe.parameter(t.usage, De, "invalid element buffer usage"), i = De[t.usage]), "primitive" in t && (pe.parameter(t.primitive, Ne, "invalid element buffer primitive"), n = Ne[t.primitive]), "count" in t && (pe("number" == typeof t.count && t.count >= 0, "invalid vertex count for elements"), r = 0 | t.count), "type" in t && (pe.parameter(t.type, f, "invalid buffer type"), u = f[t.type]), "length" in t ? l = 0 | t.length : (l = r, u === qe || u === Ge ? l *= 2 : u !== Ve && u !== Ye || (l *= 4))), a(c, e, i, n, r, l, u)
                        }
                    else s(), c.primType = We, c.vertCount = 0, c.type = Ue;
                    return o
                }
                var s = i.create(null, Qe, !0),
                    c = new r(s._buffer);
                return n.elementsCount++, o(t), o._reglType = "elements", o._elements = c, o.subdata = function(t, e) {
                    return s.subdata(t, e), o
                }, o.destroy = function() {
                    l(c)
                }, o
            }
            var u = {},
                h = 0,
                f = {
                    uint8: Ue,
                    uint16: qe
                };
            e.oes_element_index_uint && (f.uint32 = Ve), r.prototype.bind = function() {
                this.buffer.bind()
            };
            var p = [];
            return {
                create: c,
                createStream: o,
                destroyStream: s,
                getElements: function(t) {
                    return "function" == typeof t && t._elements instanceof r ? t._elements : null
                },
                clear: function() {
                    be(u).forEach(l)
                }
            }
        }

        function dt(t) {
            for (var e = Oe.allocType(ei, t.length), i = 0; i < t.length; ++i)
                if (isNaN(t[i])) e[i] = 65535;
                else if (t[i] === 1 / 0) e[i] = 31744;
            else if (t[i] === -1 / 0) e[i] = 64512;
            else {
                Je[0] = t[i];
                var n = ti[0],
                    r = n >>> 31 << 15,
                    o = (n << 1 >>> 24) - 127,
                    s = n >> 13 & 1023;
                if (o < -24) e[i] = r;
                else if (o < -14) {
                    var a = -14 - o;
                    e[i] = r + (s + 1024 >> a)
                } else e[i] = o > 15 ? r + 31744 : r + (o + 15 << 10) + s
            }
            return e
        }

        function mt(t) {
            return Array.isArray(t) || Zt(t)
        }

        function gt(t) {
            return "[object " + t + "]"
        }

        function vt(t) {
            return Array.isArray(t) && (0 === t.length || "number" == typeof t[0])
        }

        function _t(t) {
            return !!Array.isArray(t) && !(0 === t.length || !mt(t[0]))
        }

        function yt(t) {
            return Object.prototype.toString.call(t)
        }

        function bt(t) {
            return yt(t) === pn
        }

        function wt(t) {
            return yt(t) === dn
        }

        function Tt(t) {
            return yt(t) === mn
        }

        function xt(t) {
            return yt(t) === gn
        }

        function St(t) {
            if (!t) return !1;
            var e = yt(t);
            return vn.indexOf(e) >= 0 || (vt(t) || _t(t) || V(t))
        }

        function kt(t) {
            return 0 | Kt[Object.prototype.toString.call(t)]
        }

        function Ct(t, e) {
            var i = e.length;
            switch (t.type) {
                case ji:
                case Ii:
                case Li:
                case Fi:
                    var n = Oe.allocType(t.type, i);
                    n.set(e), t.data = n;
                    break;
                case Ti:
                    t.data = dt(e);
                    break;
                default:
                    pe.raise("unsupported texture type, must specify a typed array")
            }
        }

        function Pt(t, e) {
            return Oe.allocType(t.type === Ti ? Fi : t.type, e)
        }

        function At(t, e) {
            t.type === Ti ? (t.data = dt(e), Oe.freeType(e)) : t.data = e
        }

        function Ot(t, e, i, n, r, o) {
            for (var s = t.width, a = t.height, l = t.channels, c = s * a * l, u = Pt(t, c), h = 0, f = 0; f < a; ++f)
                for (var p = 0; p < s; ++p)
                    for (var d = 0; d < l; ++d) u[h++] = e[i * p + n * f + r * d + o];
            At(t, u)
        }

        function Et(t, e, i, n, r, o) {
            var s;
            if (s = void 0 !== yn[t] ? yn[t] : fn[t] * _n[e], o && (s *= 6), r) {
                for (var a = 0, l = i; l >= 1;) a += s * l * l, l /= 2;
                return a
            }
            return s * i * n
        }

        function $t(t, e, i, n, r, o, s) {
            function a() {
                this.internalformat = si, this.format = si, this.type = ji, this.compressed = !1, this.premultiplyAlpha = !1, this.flipY = !1, this.unpackAlignment = 1, this.colorSpace = 0, this.width = 0, this.height = 0, this.channels = 0
            }

            function l(t, e) {
                t.internalformat = e.internalformat, t.format = e.format, t.type = e.type, t.compressed = e.compressed, t.premultiplyAlpha = e.premultiplyAlpha, t.flipY = e.flipY, t.unpackAlignment = e.unpackAlignment, t.colorSpace = e.colorSpace, t.width = e.width, t.height = e.height, t.channels = e.channels
            }

            function c(t, n) {
                if ("object" == typeof n && n) {
                    if ("premultiplyAlpha" in n && (pe.type(n.premultiplyAlpha, "boolean", "invalid premultiplyAlpha"), t.premultiplyAlpha = n.premultiplyAlpha), "flipY" in n && (pe.type(n.flipY, "boolean", "invalid texture flip"), t.flipY = n.flipY), "alignment" in n && (pe.oneOf(n.alignment, [1, 2, 4, 8], "invalid texture unpack alignment"), t.unpackAlignment = n.alignment), "colorSpace" in n && (pe.parameter(n.colorSpace, F, "invalid colorSpace"), t.colorSpace = F[n.colorSpace]), "type" in n) {
                        var r = n.type;
                        pe(e.oes_texture_float || !("float" === r || "float32" === r), "you must enable the OES_texture_float extension in order to use floating point textures."), pe(e.oes_texture_half_float || !("half float" === r || "float16" === r), "you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."), pe(e.webgl_depth_texture || !("uint16" === r || "uint32" === r || "depth stencil" === r), "you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."), pe.parameter(r, z, "invalid texture type"), t.type = z[r]
                    }
                    var o = t.width,
                        s = t.height,
                        a = t.channels,
                        l = !1;
                    "shape" in n ? (pe(Array.isArray(n.shape) && n.shape.length >= 2, "shape must be an array"), o = n.shape[0], s = n.shape[1], 3 === n.shape.length && (a = n.shape[2], pe(a > 0 && a <= 4, "invalid number of channels"), l = !0), pe(o >= 0 && o <= i.maxTextureSize, "invalid width"), pe(s >= 0 && s <= i.maxTextureSize, "invalid height")) : ("radius" in n && (o = s = n.radius, pe(o >= 0 && o <= i.maxTextureSize, "invalid radius")), "width" in n && (o = n.width, pe(o >= 0 && o <= i.maxTextureSize, "invalid width")), "height" in n && (s = n.height, pe(s >= 0 && s <= i.maxTextureSize, "invalid height")), "channels" in n && (a = n.channels, pe(a > 0 && a <= 4, "invalid number of channels"), l = !0)), t.width = 0 | o, t.height = 0 | s, t.channels = 0 | a;
                    var c = !1;
                    if ("format" in n) {
                        var u = n.format;
                        pe(e.webgl_depth_texture || !("depth" === u || "depth stencil" === u), "you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."), pe.parameter(u, N, "invalid texture format");
                        var h = t.internalformat = N[u];
                        t.format = Q[h], u in z && ("type" in n || (t.type = z[u])), u in B && (t.compressed = !0), c = !0
                    }!l && c ? t.channels = fn[t.format] : l && !c ? t.channels !== hn[t.format] && (t.format = t.internalformat = hn[t.channels]) : c && l && pe(t.channels === fn[t.format], "number of channels inconsistent with specified format")
                }
            }

            function u(e) {
                t.pixelStorei(on, e.flipY), t.pixelStorei(sn, e.premultiplyAlpha), t.pixelStorei(an, e.colorSpace), t.pixelStorei(rn, e.unpackAlignment)
            }

            function h() {
                a.call(this), this.xOffset = 0, this.yOffset = 0, this.data = null, this.needsFree = !1, this.element = null, this.needsCopy = !1
            }

            function f(t, e) {
                var n = null;
                if (St(e) ? n = e : e && (pe.type(e, "object", "invalid pixel data type"), c(t, e), "x" in e && (t.xOffset = 0 | e.x), "y" in e && (t.yOffset = 0 | e.y), St(e.data) && (n = e.data)), pe(!t.compressed || n instanceof Uint8Array, "compressed texture data must be stored in a uint8array"), e.copy) {
                    pe(!n, "can not specify copy and data field for the same texture");
                    var o = r.viewportWidth,
                        s = r.viewportHeight;
                    t.width = t.width || o - t.xOffset, t.height = t.height || s - t.yOffset, t.needsCopy = !0, pe(t.xOffset >= 0 && t.xOffset < o && t.yOffset >= 0 && t.yOffset < s && t.width > 0 && t.width <= o && t.height > 0 && t.height <= s, "copy texture read out of bounds")
                } else if (n) {
                    if (Zt(n)) t.channels = t.channels || 4, t.data = n, "type" in e || t.type !== ji || (t.type = kt(n));
                    else if (vt(n)) t.channels = t.channels || 4, Ct(t, n), t.alignment = 1, t.needsFree = !0;
                    else if (V(n)) {
                        var a = n.data;
                        Array.isArray(a) || t.type !== ji || (t.type = kt(a));
                        var l, u, h, f, p, d, m = n.shape,
                            g = n.stride;
                        3 === m.length ? (h = m[2], d = g[2]) : (pe(2 === m.length, "invalid ndarray pixel data, must be 2 or 3D"), h = 1, d = 1), l = m[0], u = m[1], f = g[0], p = g[1], t.alignment = 1, t.width = l, t.height = u, t.channels = h, t.format = t.internalformat = hn[h], t.needsFree = !0, Ot(t, a, f, p, d, n.offset)
                    } else if (bt(n) || wt(n)) bt(n) ? t.element = n : t.element = n.canvas, t.width = t.element.width, t.height = t.element.height, t.channels = 4;
                    else if (Tt(n)) t.element = n, t.width = n.naturalWidth, t.height = n.naturalHeight, t.channels = 4;
                    else if (xt(n)) t.element = n, t.width = n.videoWidth, t.height = n.videoHeight, t.channels = 4;
                    else if (_t(n)) {
                        var v = t.width || n[0].length,
                            _ = t.height || n.length,
                            y = t.channels;
                        y = mt(n[0][0]) ? y || n[0][0].length : y || 1;
                        for (var b = Ee.shape(n), w = 1, T = 0; T < b.length; ++T) w *= b[T];
                        var x = Pt(t, w);
                        Ee.flatten(n, b, "", x), At(t, x), t.alignment = 1, t.width = v, t.height = _, t.channels = y, t.format = t.internalformat = hn[y], t.needsFree = !0
                    }
                } else t.width = t.width || 1, t.height = t.height || 1, t.channels = t.channels || 4;
                t.type === Fi ? pe(i.extensions.indexOf("oes_texture_float") >= 0, "oes_texture_float extension not enabled") : t.type === Ti && pe(i.extensions.indexOf("oes_texture_half_float") >= 0, "oes_texture_half_float extension not enabled")
            }

            function p(e, i, r) {
                var o = e.element,
                    s = e.data,
                    a = e.internalformat,
                    l = e.format,
                    c = e.type,
                    h = e.width,
                    f = e.height;
                u(e), o ? t.texImage2D(i, r, l, l, c, o) : e.compressed ? t.compressedTexImage2D(i, r, a, h, f, 0, s) : e.needsCopy ? (n(), t.copyTexImage2D(i, r, l, e.xOffset, e.yOffset, h, f, 0)) : t.texImage2D(i, r, l, h, f, 0, l, c, s)
            }

            function d(e, i, r, o, s) {
                var a = e.element,
                    l = e.data,
                    c = e.internalformat,
                    h = e.format,
                    f = e.type,
                    p = e.width,
                    d = e.height;
                u(e), a ? t.texSubImage2D(i, s, r, o, h, f, a) : e.compressed ? t.compressedTexSubImage2D(i, s, r, o, c, p, d, l) : e.needsCopy ? (n(), t.copyTexSubImage2D(i, s, r, o, e.xOffset, e.yOffset, p, d)) : t.texSubImage2D(i, s, r, o, p, d, h, f, l)
            }

            function m() {
                return K.pop() || new h
            }

            function g(t) {
                t.needsFree && Oe.freeType(t.data), h.call(t), K.push(t)
            }

            function v() {
                a.call(this), this.genMipmaps = !1, this.mipmapHint = Ji, this.mipmask = 0, this.images = Array(16)
            }

            function _(t, e, i) {
                var n = t.images[0] = m();
                t.mipmask = 1, n.width = t.width = e, n.height = t.height = i, n.channels = t.channels = 4
            }

            function y(t, e) {
                var i = null;
                if (St(e)) i = t.images[0] = m(), l(i, t), f(i, e), t.mipmask = 1;
                else if (c(t, e), Array.isArray(e.mipmap))
                    for (var n = e.mipmap, r = 0; r < n.length; ++r) i = t.images[r] = m(), l(i, t), i.width >>= r, i.height >>= r, f(i, n[r]), t.mipmask |= 1 << r;
                else i = t.images[0] = m(), l(i, t), f(i, e), t.mipmask = 1;
                l(t, t.images[0]), (t.compressed && t.internalformat === xi || t.internalformat === Si || t.internalformat === ki || t.internalformat === Ci) && pe(t.width % 4 == 0 && t.height % 4 == 0, "for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")
            }

            function b(t, e) {
                for (var i = t.images, n = 0; n < i.length; ++n) {
                    if (!i[n]) return;
                    p(i[n], e, n)
                }
            }

            function w() {
                var t = Z.pop() || new v;
                a.call(t), t.mipmask = 0;
                for (var e = 0; e < 16; ++e) t.images[e] = null;
                return t
            }

            function T(t) {
                for (var e = t.images, i = 0; i < e.length; ++i) e[i] && g(e[i]), e[i] = null;
                Z.push(t)
            }

            function x() {
                this.minFilter = Gi, this.magFilter = Gi, this.wrapS = Hi, this.wrapT = Hi, this.anisotropic = 1, this.genMipmaps = !1, this.mipmapHint = Ji
            }

            function S(t, e) {
                if ("min" in e) {
                    var n = e.min;
                    pe.parameter(n, L), t.minFilter = L[n], un.indexOf(t.minFilter) >= 0 && (t.genMipmaps = !0)
                }
                if ("mag" in e) {
                    var r = e.mag;
                    pe.parameter(r, I), t.magFilter = I[r]
                }
                var o = t.wrapS,
                    s = t.wrapT;
                if ("wrap" in e) {
                    var a = e.wrap;
                    "string" == typeof a ? (pe.parameter(a, j), o = s = j[a]) : Array.isArray(a) && (pe.parameter(a[0], j), pe.parameter(a[1], j), o = j[a[0]], s = j[a[1]])
                } else {
                    if ("wrapS" in e) {
                        var l = e.wrapS;
                        pe.parameter(l, j), o = j[l]
                    }
                    if ("wrapT" in e) {
                        var c = e.wrapT;
                        pe.parameter(c, j), s = j[c]
                    }
                }
                if (t.wrapS = o, t.wrapT = s, "anisotropic" in e) {
                    var u = e.anisotropic;
                    pe("number" == typeof u && u >= 1 && u <= i.maxAnisotropic, "aniso samples must be between 1 and "), t.anisotropic = e.anisotropic
                }
                if ("mipmap" in e) {
                    var h = !1;
                    switch (typeof e.mipmap) {
                        case "string":
                            pe.parameter(e.mipmap, M, "invalid mipmap hint"), t.mipmapHint = M[e.mipmap], t.genMipmaps = !0, h = !0;
                            break;
                        case "boolean":
                            h = t.genMipmaps = e.mipmap;
                            break;
                        case "object":
                            pe(Array.isArray(e.mipmap), "invalid mipmap type"), t.genMipmaps = !1, h = !0;
                            break;
                        default:
                            pe.raise("invalid mipmap type")
                    }!h || "min" in e || (t.minFilter = Yi)
                }
            }

            function k(i, n) {
                t.texParameteri(n, Ui, i.minFilter), t.texParameteri(n, Xi, i.magFilter), t.texParameteri(n, zi, i.wrapS), t.texParameteri(n, Ni, i.wrapT), e.ext_texture_filter_anisotropic && t.texParameteri(n, nn, i.anisotropic), i.genMipmaps && (t.hint(Zi, i.mipmapHint), t.generateMipmap(n))
            }

            function C(e) {
                a.call(this), this.mipmask = 0, this.internalformat = si, this.id = J++, this.refCount = 1, this.target = e, this.texture = t.createTexture(), this.unit = -1, this.bindCount = 0, this.texInfo = new x, s.profile && (this.stats = {
                    size: 0
                })
            }

            function P(e) {
                t.activeTexture(cn), t.bindTexture(e.target, e.texture)
            }

            function A() {
                var e = it[0];
                e ? t.bindTexture(e.target, e.texture) : t.bindTexture(ni, null)
            }

            function O(e) {
                var i = e.texture;
                pe(i, "must not double destroy texture");
                var n = e.unit,
                    r = e.target;
                n >= 0 && (t.activeTexture(cn + n), t.bindTexture(r, null), it[n] = null), t.deleteTexture(i), e.texture = null, e.params = null, e.pixels = null, e.refCount = 0, delete tt[e.id], o.textureCount--
            }

            function E(e, n) {
                function r(t, e) {
                    var n = u.texInfo;
                    x.call(n);
                    var o = w();
                    return "number" == typeof t ? "number" == typeof e ? _(o, 0 | t, 0 | e) : _(o, 0 | t, 0 | t) : t ? (pe.type(t, "object", "invalid arguments to regl.texture"), S(n, t), y(o, t)) : _(o, 1, 1), n.genMipmaps && (o.mipmask = (o.width << 1) - 1), u.mipmask = o.mipmask, l(u, o), pe.texture2D(n, o, i), u.internalformat = o.internalformat, r.width = o.width, r.height = o.height, P(u), b(o, ni), k(n, ni), A(), T(o), s.profile && (u.stats.size = Et(u.internalformat, u.type, o.width, o.height, n.genMipmaps, !1)), r.format = X[u.internalformat], r.type = U[u.type], r.mag = G[n.magFilter], r.min = q[n.minFilter], r.wrapS = Y[n.wrapS], r.wrapT = Y[n.wrapT], r
                }

                function a(t, e, i, n) {
                    pe(!!t, "must specify image data");
                    var o = 0 | e,
                        s = 0 | i,
                        a = 0 | n,
                        c = m();
                    return l(c, u), c.width = 0, c.height = 0, f(c, t), c.width = c.width || (u.width >> a) - o, c.height = c.height || (u.height >> a) - s, pe(u.type === c.type && u.format === c.format && u.internalformat === c.internalformat, "incompatible format for texture.subimage"), pe(o >= 0 && s >= 0 && o + c.width <= u.width && s + c.height <= u.height, "texture.subimage write out of bounds"), pe(u.mipmask & 1 << a, "missing mipmap data"), pe(c.data || c.element || c.needsCopy, "missing image data"), P(u), d(c, ni, o, s, a), A(), g(c), r
                }

                function c(e, i) {
                    var n = 0 | e,
                        o = 0 | i || n;
                    if (n === u.width && o === u.height) return r;
                    r.width = u.width = n, r.height = u.height = o, P(u);
                    for (var a = 0; u.mipmask >> a; ++a) t.texImage2D(ni, a, u.format, n >> a, o >> a, 0, u.format, u.type, null);
                    return A(), s.profile && (u.stats.size = Et(u.internalformat, u.type, n, o, !1, !1)), r
                }
                var u = new C(ni);
                return tt[u.id] = u, o.textureCount++, r(e, n), r.subimage = a, r.resize = c, r._reglType = "texture2d", r._texture = u, s.profile && (r.stats = u.stats), r.destroy = function() {
                    u.decRef()
                }, r
            }

            function $(e, n, r, a, u, h) {
                function p(t, e, n, r, o, a) {
                    var u, h = E.texInfo;
                    for (x.call(h), u = 0; u < 6; ++u) $[u] = w();
                    if ("number" != typeof t && t)
                        if ("object" == typeof t)
                            if (e) y($[0], t), y($[1], e), y($[2], n), y($[3], r), y($[4], o), y($[5], a);
                            else if (S(h, t), c(E, t), "faces" in t) {
                        var f = t.faces;
                        for (pe(Array.isArray(f) && 6 === f.length, "cube faces must be a length 6 array"), u = 0; u < 6; ++u) pe("object" == typeof f[u] && !!f[u], "invalid input for cube map face"), l($[u], E), y($[u], f[u])
                    } else
                        for (u = 0; u < 6; ++u) y($[u], t);
                    else pe.raise("invalid arguments to cube map");
                    else {
                        var d = 0 | t || 1;
                        for (u = 0; u < 6; ++u) _($[u], d, d)
                    }
                    for (l(E, $[0]), h.genMipmaps ? E.mipmask = ($[0].width << 1) - 1 : E.mipmask = $[0].mipmask, pe.textureCube(E, h, $, i), E.internalformat = $[0].internalformat, p.width = $[0].width, p.height = $[0].height, P(E), u = 0; u < 6; ++u) b($[u], oi + u);
                    for (k(h, ri), A(), s.profile && (E.stats.size = Et(E.internalformat, E.type, p.width, p.height, h.genMipmaps, !0)), p.format = X[E.internalformat], p.type = U[E.type], p.mag = G[h.magFilter], p.min = q[h.minFilter], p.wrapS = Y[h.wrapS], p.wrapT = Y[h.wrapT], u = 0; u < 6; ++u) T($[u]);
                    return p
                }

                function v(t, e, i, n, r) {
                    pe(!!e, "must specify image data"), pe("number" == typeof t && t === (0 | t) && t >= 0 && t < 6, "invalid face");
                    var o = 0 | i,
                        s = 0 | n,
                        a = 0 | r,
                        c = m();
                    return l(c, E), c.width = 0, c.height = 0, f(c, e), c.width = c.width || (E.width >> a) - o, c.height = c.height || (E.height >> a) - s, pe(E.type === c.type && E.format === c.format && E.internalformat === c.internalformat, "incompatible format for texture.subimage"), pe(o >= 0 && s >= 0 && o + c.width <= E.width && s + c.height <= E.height, "texture.subimage write out of bounds"), pe(E.mipmask & 1 << a, "missing mipmap data"), pe(c.data || c.element || c.needsCopy, "missing image data"), P(E), d(c, oi + t, o, s, a), A(), g(c), p
                }

                function O(e) {
                    var i = 0 | e;
                    if (i !== E.width) {
                        p.width = E.width = i, p.height = E.height = i, P(E);
                        for (var n = 0; n < 6; ++n)
                            for (var r = 0; E.mipmask >> r; ++r) t.texImage2D(oi + n, r, E.format, i >> r, i >> r, 0, E.format, E.type, null);
                        return A(), s.profile && (E.stats.size = Et(E.internalformat, E.type, p.width, p.height, !1, !0)), p
                    }
                }
                var E = new C(ri);
                tt[E.id] = E, o.cubeCount++;
                var $ = new Array(6);
                return p(e, n, r, a, u, h), p.subimage = v, p.resize = O, p._reglType = "textureCube", p._texture = E, s.profile && (p.stats = E.stats), p.destroy = function() {
                    E.decRef()
                }, p
            }

            function D() {
                for (var e = 0; e < et; ++e) t.activeTexture(cn + e), t.bindTexture(ni, null), it[e] = null;
                be(tt).forEach(O), o.cubeCount = 0, o.textureCount = 0
            }

            function R() {
                be(tt).forEach(function(e) {
                    e.texture = t.createTexture(), t.bindTexture(e.target, e.texture);
                    for (var i = 0; i < 32; ++i)
                        if (0 != (e.mipmask & 1 << i))
                            if (e.target === ni) t.texImage2D(ni, i, e.internalformat, e.width >> i, e.height >> i, 0, e.internalformat, e.type, null);
                            else
                                for (var n = 0; n < 6; ++n) t.texImage2D(oi + n, i, e.internalformat, e.width >> i, e.height >> i, 0, e.internalformat, e.type, null);
                    k(e.texInfo, e.target)
                })
            }
            var M = {
                    "don't care": Ji,
                    "dont care": Ji,
                    nice: en,
                    fast: tn
                },
                j = {
                    repeat: Bi,
                    clamp: Hi,
                    mirror: Wi
                },
                I = {
                    nearest: Gi,
                    linear: qi
                },
                L = Jt({
                    mipmap: Ki,
                    "nearest mipmap nearest": Yi,
                    "linear mipmap nearest": Vi,
                    "nearest mipmap linear": Qi,
                    "linear mipmap linear": Ki
                }, I),
                F = {
                    none: 0,
                    browser: ln
                },
                z = {
                    uint8: ji,
                    rgba4: di,
                    rgb565: gi,
                    "rgb5 a1": mi
                },
                N = {
                    alpha: ai,
                    luminance: ci,
                    "luminance alpha": ui,
                    rgb: li,
                    rgba: si,
                    rgba4: hi,
                    "rgb5 a1": fi,
                    rgb565: pi
                },
                B = {};
            e.ext_srgb && (N.srgb = bi, N.srgba = wi), e.oes_texture_float && (z.float32 = z.float = Fi), e.oes_texture_half_float && (z.float16 = z["half float"] = Ti), e.webgl_depth_texture && (Jt(N, {
                depth: _i,
                "depth stencil": yi
            }), Jt(z, {
                uint16: Ii,
                uint32: Li,
                "depth stencil": vi
            })), e.webgl_compressed_texture_s3tc && Jt(B, {
                "rgb s3tc dxt1": xi,
                "rgba s3tc dxt1": Si,
                "rgba s3tc dxt3": ki,
                "rgba s3tc dxt5": Ci
            }), e.webgl_compressed_texture_atc && Jt(B, {
                "rgb atc": Pi,
                "rgba atc explicit alpha": Ai,
                "rgba atc interpolated alpha": Oi
            }), e.webgl_compressed_texture_pvrtc && Jt(B, {
                "rgb pvrtc 4bppv1": Ei,
                "rgb pvrtc 2bppv1": $i,
                "rgba pvrtc 4bppv1": Di,
                "rgba pvrtc 2bppv1": Ri
            }), e.webgl_compressed_texture_etc1 && (B["rgb etc1"] = Mi);
            var H = Array.prototype.slice.call(t.getParameter(ii));
            Object.keys(B).forEach(function(t) {
                var e = B[t];
                H.indexOf(e) >= 0 && (N[t] = e)
            });
            var W = Object.keys(N);
            i.textureFormats = W;
            var X = [];
            Object.keys(N).forEach(function(t) {
                var e = N[t];
                X[e] = t
            });
            var U = [];
            Object.keys(z).forEach(function(t) {
                var e = z[t];
                U[e] = t
            });
            var G = [];
            Object.keys(I).forEach(function(t) {
                var e = I[t];
                G[e] = t
            });
            var q = [];
            Object.keys(L).forEach(function(t) {
                var e = L[t];
                q[e] = t
            });
            var Y = [];
            Object.keys(j).forEach(function(t) {
                var e = j[t];
                Y[e] = t
            });
            var Q = W.reduce(function(t, e) {
                    var i = N[e];
                    return i === ci || i === ai || i === ci || i === ui || i === _i || i === yi ? t[i] = i : i === fi || e.indexOf("rgba") >= 0 ? t[i] = si : t[i] = li, t
                }, {}),
                K = [],
                Z = [],
                J = 0,
                tt = {},
                et = i.maxTextureUnits,
                it = Array(et).map(function() {
                    return null
                });
            return Jt(C.prototype, {
                bind: function() {
                    var e = this;
                    e.bindCount += 1;
                    var i = e.unit;
                    if (i < 0) {
                        for (var n = 0; n < et; ++n) {
                            var r = it[n];
                            if (r) {
                                if (r.bindCount > 0) continue;
                                r.unit = -1
                            }
                            it[n] = e, i = n;
                            break
                        }
                        i >= et && pe.raise("insufficient number of texture units"), s.profile && o.maxTextureUnits < i + 1 && (o.maxTextureUnits = i + 1), e.unit = i, t.activeTexture(cn + i), t.bindTexture(e.target, e.texture)
                    }
                    return i
                },
                unbind: function() {
                    this.bindCount -= 1
                },
                decRef: function() {
                    --this.refCount <= 0 && O(this)
                }
            }), s.profile && (o.getTotalTextureSize = function() {
                var t = 0;
                return Object.keys(tt).forEach(function(e) {
                    t += tt[e].stats.size
                }), t
            }), {
                create2D: E,
                createCube: $,
                clear: D,
                getTexture: function(t) {
                    return null
                },
                restore: R
            }
        }

        function Dt(t, e, i) {
            return Tn[t] * e * i
        }

        function Rt(t, e, i, n, r, o) {
            function s(t, e, i) {
                this.target = t, this.texture = e, this.renderbuffer = i;
                var n = 0,
                    r = 0;
                e ? (n = e.width, r = e.height) : i && (n = i.width, r = i.height), this.width = n, this.height = r
            }

            function a(t) {
                t && (t.texture && t.texture._texture.decRef(), t.renderbuffer && t.renderbuffer._renderbuffer.decRef())
            }

            function l(t, e, i) {
                if (t)
                    if (t.texture) {
                        var n = t.texture._texture,
                            r = Math.max(1, n.width),
                            o = Math.max(1, n.height);
                        pe(r === e && o === i, "inconsistent width/height for supplied texture"), n.refCount += 1
                    } else {
                        var s = t.renderbuffer._renderbuffer;
                        pe(s.width === e && s.height === i, "inconsistent width/height for renderbuffer"), s.refCount += 1
                    }
            }

            function c(e, i) {
                i && (i.texture ? t.framebufferTexture2D(Sn, e, i.target, i.texture._texture.texture, 0) : t.framebufferRenderbuffer(Sn, e, kn, i.renderbuffer._renderbuffer.renderbuffer))
            }

            function u(t) {
                var e = Cn,
                    i = null,
                    n = null,
                    r = t;
                "object" == typeof t && (r = t.data, "target" in t && (e = 0 | t.target)), pe.type(r, "function", "invalid attachment data");
                var o = r._reglType;
                return "texture2d" === o ? (i = r, pe(e === Cn)) : "textureCube" === o ? (i = r, pe(e >= Pn && e < Pn + 6, "invalid cube map target")) : "renderbuffer" === o ? (n = r, e = kn) : pe.raise("invalid regl object for attachment"), new s(e, i, n)
            }

            function h(t, e, i, o, a) {
                if (i) {
                    var l = n.create2D({
                        width: t,
                        height: e,
                        format: o,
                        type: a
                    });
                    return l._texture.refCount = 0, new s(Cn, l, null)
                }
                var c = r.create({
                    width: t,
                    height: e,
                    format: o
                });
                return c._renderbuffer.refCount = 0, new s(kn, null, c)
            }

            function f(t) {
                return t && (t.texture || t.renderbuffer)
            }

            function p(t, e, i) {
                t && (t.texture ? t.texture.resize(e, i) : t.renderbuffer && t.renderbuffer.resize(e, i))
            }

            function d() {
                this.id = k++, C[this.id] = this, this.framebuffer = t.createFramebuffer(), this.width = 0, this.height = 0, this.colorAttachments = [], this.depthAttachment = null, this.stencilAttachment = null, this.depthStencilAttachment = null
            }

            function m(t) {
                t.colorAttachments.forEach(a), a(t.depthAttachment), a(t.stencilAttachment), a(t.depthStencilAttachment)
            }

            function g(e) {
                var i = e.framebuffer;
                pe(i, "must not double destroy framebuffer"), t.deleteFramebuffer(i), e.framebuffer = null, o.framebufferCount--, delete C[e.id]
            }

            function v(e) {
                var n;
                t.bindFramebuffer(Sn, e.framebuffer);
                var r = e.colorAttachments;
                for (n = 0; n < r.length; ++n) c(An + n, r[n]);
                for (n = r.length; n < i.maxColorAttachments; ++n) t.framebufferTexture2D(Sn, An + n, Cn, null, 0);
                t.framebufferTexture2D(Sn, $n, Cn, null, 0), t.framebufferTexture2D(Sn, On, Cn, null, 0), t.framebufferTexture2D(Sn, En, Cn, null, 0), c(On, e.depthAttachment), c(En, e.stencilAttachment), c($n, e.depthStencilAttachment);
                var o = t.checkFramebufferStatus(Sn);
                o !== Dn && pe.raise("framebuffer configuration not supported, status = " + Bn[o]), t.bindFramebuffer(Sn, w.next), w.cur = w.next, t.getError()
            }

            function _(t, n) {
                function r(t, n) {
                    var o;
                    pe(w.next !== a, "can not update framebuffer which is currently in use");
                    var s = e.webgl_draw_buffers,
                        c = 0,
                        p = 0,
                        d = !0,
                        g = !0,
                        _ = null,
                        y = !0,
                        b = "rgba",
                        k = "uint8",
                        C = 1,
                        P = null,
                        A = null,
                        O = null,
                        E = !1;
                    if ("number" == typeof t) c = 0 | t, p = 0 | n || c;
                    else if (t) {
                        pe.type(t, "object", "invalid arguments for framebuffer");
                        var $ = t;
                        if ("shape" in $) {
                            var D = $.shape;
                            pe(Array.isArray(D) && D.length >= 2, "invalid shape for framebuffer"), c = D[0], p = D[1]
                        } else "radius" in $ && (c = p = $.radius), "width" in $ && (c = $.width), "height" in $ && (p = $.height);
                        ("color" in $ || "colors" in $) && (_ = $.color || $.colors, Array.isArray(_) && pe(1 === _.length || s, "multiple render targets not supported")), _ || ("colorCount" in $ && (C = 0 | $.colorCount, pe(C > 0, "invalid color buffer count")), "colorTexture" in $ && (y = !!$.colorTexture, b = "rgba4"), "colorType" in $ && (k = $.colorType, y ? (pe(e.oes_texture_float || !("float" === k || "float32" === k), "you must enable OES_texture_float in order to use floating point framebuffer objects"), pe(e.oes_texture_half_float || !("half float" === k || "float16" === k), "you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")) : "half float" === k || "float16" === k ? (pe(e.ext_color_buffer_half_float, "you must enable EXT_color_buffer_half_float to use 16-bit render buffers"), b = "rgba16f") : "float" !== k && "float32" !== k || (pe(e.webgl_color_buffer_float, "you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"), b = "rgba32f"), pe.oneOf(k, S, "invalid color type")), "colorFormat" in $ && (b = $.colorFormat, T.indexOf(b) >= 0 ? y = !0 : x.indexOf(b) >= 0 ? y = !1 : y ? pe.oneOf($.colorFormat, T, "invalid color format for texture") : pe.oneOf($.colorFormat, x, "invalid color format for renderbuffer"))), ("depthTexture" in $ || "depthStencilTexture" in $) && (E = !(!$.depthTexture && !$.depthStencilTexture), pe(!E || e.webgl_depth_texture, "webgl_depth_texture extension not supported")), "depth" in $ && ("boolean" == typeof $.depth ? d = $.depth : (P = $.depth, g = !1)), "stencil" in $ && ("boolean" == typeof $.stencil ? g = $.stencil : (A = $.stencil, d = !1)), "depthStencil" in $ && ("boolean" == typeof $.depthStencil ? d = g = $.depthStencil : (O = $.depthStencil, d = !1, g = !1))
                    } else c = p = 1;
                    var R = null,
                        M = null,
                        j = null,
                        I = null;
                    if (Array.isArray(_)) R = _.map(u);
                    else if (_) R = [u(_)];
                    else
                        for (R = new Array(C), o = 0; o < C; ++o) R[o] = h(c, p, y, b, k);
                    pe(e.webgl_draw_buffers || R.length <= 1, "you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."), pe(R.length <= i.maxColorAttachments, "too many color attachments, not supported"), c = c || R[0].width, p = p || R[0].height, P ? M = u(P) : d && !g && (M = h(c, p, E, "depth", "uint32")), A ? j = u(A) : g && !d && (j = h(c, p, !1, "stencil", "uint8")), O ? I = u(O) : !P && !A && g && d && (I = h(c, p, E, "depth stencil", "depth stencil")), pe(!!P + !!A + !!O <= 1, "invalid framebuffer configuration, can specify exactly one depth/stencil attachment");
                    var L = null;
                    for (o = 0; o < R.length; ++o)
                        if (l(R[o], c, p), pe(!R[o] || R[o].texture && Mn.indexOf(R[o].texture._texture.format) >= 0 || R[o].renderbuffer && Nn.indexOf(R[o].renderbuffer._renderbuffer.format) >= 0, "framebuffer color attachment " + o + " is invalid"), R[o] && R[o].texture) {
                            var F = jn[R[o].texture._texture.format] * In[R[o].texture._texture.type];
                            null === L ? L = F : pe(L === F, "all color attachments much have the same number of bits per pixel.")
                        } return l(M, c, p), pe(!M || M.texture && M.texture._texture.format === Rn || M.renderbuffer && M.renderbuffer._renderbuffer.format === Ln, "invalid depth attachment for framebuffer object"), l(j, c, p), pe(!j || j.renderbuffer && j.renderbuffer._renderbuffer.format === Fn, "invalid stencil attachment for framebuffer object"), l(I, c, p), pe(!I || I.texture && I.texture._texture.format === zn || I.renderbuffer && I.renderbuffer._renderbuffer.format === zn, "invalid depth-stencil attachment for framebuffer object"), m(a), a.width = c, a.height = p, a.colorAttachments = R, a.depthAttachment = M, a.stencilAttachment = j, a.depthStencilAttachment = I, r.color = R.map(f), r.depth = f(M), r.stencil = f(j), r.depthStencil = f(I), r.width = a.width, r.height = a.height, v(a), r
                }

                function s(t, e) {
                    pe(w.next !== a, "can not resize a framebuffer which is currently in use");
                    var i = 0 | t,
                        n = 0 | e || i;
                    if (i === a.width && n === a.height) return r;
                    for (var o = a.colorAttachments, s = 0; s < o.length; ++s) p(o[s], i, n);
                    return p(a.depthAttachment, i, n), p(a.stencilAttachment, i, n), p(a.depthStencilAttachment, i, n), a.width = r.width = i, a.height = r.height = n, v(a), r
                }
                var a = new d;
                return o.framebufferCount++, r(t, n), Jt(r, {
                    resize: s,
                    _reglType: "framebuffer",
                    _framebuffer: a,
                    destroy: function() {
                        g(a), m(a)
                    },
                    use: function(t) {
                        w.setFBO({
                            framebuffer: r
                        }, t)
                    }
                })
            }

            function y(t) {
                function r(t) {
                    var i;
                    pe(s.indexOf(w.next) < 0, "can not update framebuffer which is currently in use");
                    var o = e.webgl_draw_buffers,
                        a = {
                            color: null
                        },
                        l = 0,
                        c = null,
                        u = "rgba",
                        h = "uint8",
                        f = 1;
                    if ("number" == typeof t) l = 0 | t;
                    else if (t) {
                        pe.type(t, "object", "invalid arguments for framebuffer");
                        var p = t;
                        if ("shape" in p) {
                            var d = p.shape;
                            pe(Array.isArray(d) && d.length >= 2, "invalid shape for framebuffer"), pe(d[0] === d[1], "cube framebuffer must be square"), l = d[0]
                        } else "radius" in p && (l = 0 | p.radius), "width" in p ? (l = 0 | p.width, "height" in p && pe(p.height === l, "must be square")) : "height" in p && (l = 0 | p.height);
                        ("color" in p || "colors" in p) && (c = p.color || p.colors, Array.isArray(c) && pe(1 === c.length || o, "multiple render targets not supported")), c || ("colorCount" in p && (f = 0 | p.colorCount, pe(f > 0, "invalid color buffer count")), "colorType" in p && (pe.oneOf(p.colorType, S, "invalid color type"), h = p.colorType), "colorFormat" in p && (u = p.colorFormat, pe.oneOf(p.colorFormat, T, "invalid color format for texture"))), "depth" in p && (a.depth = p.depth), "stencil" in p && (a.stencil = p.stencil), "depthStencil" in p && (a.depthStencil = p.depthStencil)
                    } else l = 1;
                    var m;
                    if (c)
                        if (Array.isArray(c))
                            for (m = [], i = 0; i < c.length; ++i) m[i] = c[i];
                        else m = [c];
                    else {
                        m = Array(f);
                        var g = {
                            radius: l,
                            format: u,
                            type: h
                        };
                        for (i = 0; i < f; ++i) m[i] = n.createCube(g)
                    }
                    for (a.color = Array(m.length), i = 0; i < m.length; ++i) {
                        var v = m[i];
                        pe("function" == typeof v && "textureCube" === v._reglType, "invalid cube map"), l = l || v.width, pe(v.width === l && v.height === l, "invalid cube map shape"), a.color[i] = {
                            target: Pn,
                            data: m[i]
                        }
                    }
                    for (i = 0; i < 6; ++i) {
                        for (var y = 0; y < m.length; ++y) a.color[y].target = Pn + i;
                        i > 0 && (a.depth = s[0].depth, a.stencil = s[0].stencil, a.depthStencil = s[0].depthStencil), s[i] ? s[i](a) : s[i] = _(a)
                    }
                    return Jt(r, {
                        width: l,
                        height: l,
                        color: m
                    })
                }

                function o(t) {
                    var e, n = 0 | t;
                    if (pe(n > 0 && n <= i.maxCubeMapSize, "invalid radius for cube fbo"), n === r.width) return r;
                    var o = r.color;
                    for (e = 0; e < o.length; ++e) o[e].resize(n);
                    for (e = 0; e < 6; ++e) s[e].resize(n);
                    return r.width = r.height = n, r
                }
                var s = Array(6);
                return r(t), Jt(r, {
                    faces: s,
                    resize: o,
                    _reglType: "framebufferCube",
                    destroy: function() {
                        s.forEach(function(t) {
                            t.destroy()
                        })
                    }
                })
            }

            function b() {
                be(C).forEach(function(e) {
                    e.framebuffer = t.createFramebuffer(), v(e)
                })
            }
            var w = {
                    cur: null,
                    next: null,
                    dirty: !1,
                    setFBO: null
                },
                T = ["rgba"],
                x = ["rgba4", "rgb565", "rgb5 a1"];
            e.ext_srgb && x.push("srgba"), e.ext_color_buffer_half_float && x.push("rgba16f", "rgb16f"), e.webgl_color_buffer_float && x.push("rgba32f");
            var S = ["uint8"];
            e.oes_texture_half_float && S.push("half float", "float16"), e.oes_texture_float && S.push("float", "float32");
            var k = 0,
                C = {};
            return Jt(w, {
                getFramebuffer: function(t) {
                    if ("function" == typeof t && "framebuffer" === t._reglType) {
                        var e = t._framebuffer;
                        if (e instanceof d) return e
                    }
                    return null
                },
                create: _,
                createCube: y,
                clear: function() {
                    be(C).forEach(g)
                },
                restore: b
            })
        }

        function Mt() {
            this.state = 0, this.x = 0, this.y = 0, this.z = 0, this.w = 0, this.buffer = null, this.size = 0, this.normalized = !1, this.type = Hn, this.offset = 0, this.stride = 0, this.divisor = 0
        }

        function jt(t, e, i, n, r) {
            for (var o = i.maxAttributes, s = new Array(o), a = 0; a < o; ++a) s[a] = new Mt;
            return {
                Record: Mt,
                scope: {},
                state: s
            }
        }

        function It(t, e, i, n) {
            function r(t, e, i, n) {
                this.name = t, this.id = e, this.location = i, this.info = n
            }

            function o(t, e) {
                for (var i = 0; i < t.length; ++i)
                    if (t[i].id === e.id) return void(t[i].location = e.location);
                t.push(e)
            }

            function s(i, n, r) {
                var o = i === Wn ? u : h,
                    s = o[n];
                if (!s) {
                    var a = e.str(n);
                    s = t.createShader(i), t.shaderSource(s, a), t.compileShader(s), pe.shaderError(t, s, a, i, r), o[n] = s
                }
                return s
            }

            function a(t, e) {
                this.id = d++, this.fragId = t, this.vertId = e, this.program = null, this.uniforms = [], this.attributes = [], n.profile && (this.stats = {
                    uniformsCount: 0,
                    attributesCount: 0
                })
            }

            function l(i, a) {
                var l, c, u = s(Wn, i.fragId),
                    h = s(Xn, i.vertId),
                    f = i.program = t.createProgram();
                t.attachShader(f, u), t.attachShader(f, h), t.linkProgram(f), pe.linkError(t, f, e.str(i.fragId), e.str(i.vertId), a);
                var p = t.getProgramParameter(f, Un);
                n.profile && (i.stats.uniformsCount = p);
                var d = i.uniforms;
                for (l = 0; l < p; ++l)
                    if (c = t.getActiveUniform(f, l))
                        if (c.size > 1)
                            for (var m = 0; m < c.size; ++m) {
                                var g = c.name.replace("[0]", "[" + m + "]");
                                o(d, new r(g, e.id(g), t.getUniformLocation(f, g), c))
                            } else o(d, new r(c.name, e.id(c.name), t.getUniformLocation(f, c.name), c));
                var v = t.getProgramParameter(f, Gn);
                n.profile && (i.stats.attributesCount = v);
                var _ = i.attributes;
                for (l = 0; l < v; ++l)(c = t.getActiveAttrib(f, l)) && o(_, new r(c.name, e.id(c.name), t.getAttribLocation(f, c.name), c))
            }

            function c() {
                u = {}, h = {};
                for (var t = 0; t < p.length; ++t) l(p[t])
            }
            var u = {},
                h = {},
                f = {},
                p = [],
                d = 0;
            return n.profile && (i.getMaxUniformsCount = function() {
                var t = 0;
                return p.forEach(function(e) {
                    e.stats.uniformsCount > t && (t = e.stats.uniformsCount)
                }), t
            }, i.getMaxAttributesCount = function() {
                var t = 0;
                return p.forEach(function(e) {
                    e.stats.attributesCount > t && (t = e.stats.attributesCount)
                }), t
            }), {
                clear: function() {
                    var e = t.deleteShader.bind(t);
                    be(u).forEach(e), u = {}, be(h).forEach(e), h = {}, p.forEach(function(e) {
                        t.deleteProgram(e.program)
                    }), p.length = 0, f = {}, i.shaderCount = 0
                },
                program: function(t, e, n) {
                    pe.command(t >= 0, "missing vertex shader", n), pe.command(e >= 0, "missing fragment shader", n);
                    var r = f[e];
                    r || (r = f[e] = {});
                    var o = r[t];
                    return o || (o = new a(e, t), i.shaderCount++, l(o, n), r[t] = o, p.push(o)), o
                },
                restore: c,
                shader: s,
                frag: -1,
                vert: -1
            }
        }

        function Lt(t, e, i, n, r, o) {
            function s(s) {
                var a;
                null === e.next ? (pe(r.preserveDrawingBuffer, 'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'), a = Yn) : (pe(null !== e.next.colorAttachments[0].texture, "You cannot read from a renderbuffer"), a = e.next.colorAttachments[0].texture._texture.type, o.oes_texture_float ? pe(a === Yn || a === Qn, "Reading from a framebuffer is only allowed for the types 'uint8' and 'float'") : pe(a === Yn, "Reading from a framebuffer is only allowed for the type 'uint8'"));
                var l = 0,
                    c = 0,
                    u = n.framebufferWidth,
                    h = n.framebufferHeight,
                    f = null;
                Zt(s) ? f = s : s && (pe.type(s, "object", "invalid arguments to regl.read()"), l = 0 | s.x, c = 0 | s.y, pe(l >= 0 && l < n.framebufferWidth, "invalid x offset for regl.read"), pe(c >= 0 && c < n.framebufferHeight, "invalid y offset for regl.read"), u = 0 | (s.width || n.framebufferWidth - l), h = 0 | (s.height || n.framebufferHeight - c), f = s.data || null), f && (a === Yn ? pe(f instanceof Uint8Array, "buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'") : a === Qn && pe(f instanceof Float32Array, "buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")), pe(u > 0 && u + l <= n.framebufferWidth, "invalid width for read pixels"), pe(h > 0 && h + c <= n.framebufferHeight, "invalid height for read pixels"), i();
                var p = u * h * 4;
                return f || (a === Yn ? f = new Uint8Array(p) : a === Qn && (f = f || new Float32Array(p))), pe.isTypedArray(f, "data buffer for regl.read() must be a typedarray"), pe(f.byteLength >= p, "data buffer for regl.read() too small"), t.pixelStorei(Vn, 4), t.readPixels(l, c, u, h, qn, a, f), f
            }

            function a(t) {
                var i;
                return e.setFBO({
                    framebuffer: t.framebuffer
                }, function() {
                    i = s(t)
                }), i
            }

            function l(t) {
                return t && "framebuffer" in t ? a(t) : s(t)
            }
            return l
        }

        function Ft(t) {
            return Array.prototype.slice.call(t)
        }

        function zt(t) {
            return Ft(t).join("")
        }

        function Nt() {
            function t(t) {
                for (var e = 0; e < l.length; ++e)
                    if (l[e] === t) return a[e];
                var i = "g" + s++;
                return a.push(i), l.push(t), i
            }

            function e() {
                function t() {
                    i.push.apply(i, Ft(arguments))
                }

                function e() {
                    var t = "v" + s++;
                    return n.push(t), arguments.length > 0 && (i.push(t, "="), i.push.apply(i, Ft(arguments)), i.push(";")), t
                }
                var i = [],
                    n = [];
                return Jt(t, {
                    def: e,
                    toString: function() {
                        return zt([n.length > 0 ? "var " + n + ";" : "", zt(i)])
                    }
                })
            }

            function i() {
                function t(t, e) {
                    n(t, e, "=", i.def(t, e), ";")
                }
                var i = e(),
                    n = e(),
                    r = i.toString,
                    o = n.toString;
                return Jt(function() {
                    i.apply(i, Ft(arguments))
                }, {
                    def: i.def,
                    entry: i,
                    exit: n,
                    save: t,
                    set: function(e, n, r) {
                        t(e, n), i(e, n, "=", r, ";")
                    },
                    toString: function() {
                        return r() + o()
                    }
                })
            }

            function n() {
                var t = zt(arguments),
                    e = i(),
                    n = i(),
                    r = e.toString,
                    o = n.toString;
                return Jt(e, {
                    then: function() {
                        return e.apply(e, Ft(arguments)), this
                    },
                    else: function() {
                        return n.apply(n, Ft(arguments)), this
                    },
                    toString: function() {
                        var e = o();
                        return e && (e = "else{" + e + "}"), zt(["if(", t, "){", r(), "}", e])
                    }
                })
            }

            function r(t, e) {
                function n() {
                    var t = "a" + r.length;
                    return r.push(t), t
                }
                var r = [];
                e = e || 0;
                for (var o = 0; o < e; ++o) n();
                var s = i(),
                    a = s.toString;
                return u[t] = Jt(s, {
                    arg: n,
                    toString: function() {
                        return zt(["function(", r.join(), "){", a(), "}"])
                    }
                })
            }

            function o() {
                var t = ['"use strict";', c, "return {"];
                Object.keys(u).forEach(function(e) {
                    t.push('"', e, '":', u[e].toString(), ",")
                }), t.push("}");
                var e = zt(t).replace(/;/g, ";\n").replace(/}/g, "}\n").replace(/{/g, "{\n");
                return Function.apply(null, a.concat(e)).apply(null, l)
            }
            var s = 0,
                a = [],
                l = [],
                c = e(),
                u = {};
            return {
                global: c,
                link: t,
                block: e,
                proc: r,
                scope: i,
                cond: n,
                compile: o
            }
        }

        function Bt(t) {
            return Array.isArray(t) || Zt(t) || V(t)
        }

        function Ht(t) {
            return t.sort(function(t, e) {
                return t === Dr ? -1 : e === Dr ? 1 : t < e ? -1 : 1
            })
        }

        function Wt(t, e, i, n) {
            this.thisDep = t, this.contextDep = e, this.propDep = i, this.append = n
        }

        function Xt(t) {
            return t && !(t.thisDep || t.contextDep || t.propDep)
        }

        function Ut(t) {
            return new Wt(!1, !1, !1, t)
        }

        function Gt(t, e) {
            var i = t.type;
            if (i === er) {
                var n = t.data.length;
                return new Wt(!0, n >= 1, n >= 2, e)
            }
            if (i === or) {
                var r = t.data;
                return new Wt(r.thisDep, r.contextDep, r.propDep, e)
            }
            return new Wt(i === rr, i === nr, i === ir, e)
        }

        function qt(t, e, i, n, r, o, s, a, l, c, u, h, f, p, d) {
            function m(t) {
                return t.replace(".", "_")
            }

            function g(t, e, i) {
                var n = m(t);
                et.push(t), tt[n] = J[n] = !!i, it[n] = e
            }

            function v(t, e, i) {
                var n = m(t);
                et.push(t), Array.isArray(i) ? (J[n] = i.slice(), tt[n] = i.slice()) : J[n] = tt[n] = i, nt[n] = e
            }

            function _() {
                var t = Nt(),
                    i = t.link,
                    n = t.global;
                t.id = st++, t.batchId = "0";
                var r = i(rt),
                    o = t.shared = {
                        props: "a0"
                    };
                Object.keys(rt).forEach(function(t) {
                    o[t] = n.def(r, ".", t)
                }), pe.optional(function() {
                    t.CHECK = i(pe), t.commandStr = pe.guessCommand(), t.command = i(t.commandStr), t.assert = function(t, e, n) {
                        t("if(!(", e, "))", this.CHECK, ".commandRaise(", i(n), ",", this.command, ");")
                    }, ot.invalidBlendCombinations = Ho
                });
                var s = t.next = {},
                    a = t.current = {};
                Object.keys(nt).forEach(function(t) {
                    Array.isArray(J[t]) && (s[t] = n.def(o.next, ".", t), a[t] = n.def(o.current, ".", t))
                });
                var l = t.constants = {};
                Object.keys(ot).forEach(function(t) {
                    l[t] = n.def(JSON.stringify(ot[t]))
                }), t.invoke = function(e, n) {
                    switch (n.type) {
                        case er:
                            var r = ["this", o.context, o.props, t.batchId];
                            return e.def(i(n.data), ".call(", r.slice(0, Math.max(n.data.length + 1, 4)), ")");
                        case ir:
                            return e.def(o.props, n.data);
                        case nr:
                            return e.def(o.context, n.data);
                        case rr:
                            return e.def("this", n.data);
                        case or:
                            return n.data.append(t, e), n.data.ref
                    }
                }, t.attribCache = {};
                var u = {};
                return t.scopeAttrib = function(t) {
                    var n = e.id(t);
                    if (n in u) return u[n];
                    var r = c.scope[n];
                    return r || (r = c.scope[n] = new Y), u[n] = i(r)
                }, t
            }

            function y(t) {
                var e, i = t.static,
                    n = t.dynamic;
                if (Rr in i) {
                    var r = !!i[Rr];
                    e = Ut(function(t, e) {
                        return r
                    }), e.enable = r
                } else if (Rr in n) {
                    var o = n[Rr];
                    e = Gt(o, function(t, e) {
                        return t.invoke(e, o)
                    })
                }
                return e
            }

            function b(t, e) {
                var i = t.static,
                    n = t.dynamic;
                if (Mr in i) {
                    var r = i[Mr];
                    return r ? (r = a.getFramebuffer(r), pe.command(r, "invalid framebuffer object"), Ut(function(t, e) {
                        var i = t.link(r),
                            n = t.shared;
                        e.set(n.framebuffer, ".next", i);
                        var o = n.context;
                        return e.set(o, "." + Hr, i + ".width"), e.set(o, "." + Wr, i + ".height"), i
                    })) : Ut(function(t, e) {
                        var i = t.shared;
                        e.set(i.framebuffer, ".next", "null");
                        var n = i.context;
                        return e.set(n, "." + Hr, n + "." + Gr), e.set(n, "." + Wr, n + "." + qr), "null"
                    })
                }
                if (Mr in n) {
                    var o = n[Mr];
                    return Gt(o, function(t, e) {
                        var i = t.invoke(e, o),
                            n = t.shared,
                            r = n.framebuffer,
                            s = e.def(r, ".getFramebuffer(", i, ")");
                        pe.optional(function() {
                            t.assert(e, "!" + i + "||" + s, "invalid framebuffer object")
                        }), e.set(r, ".next", s);
                        var a = n.context;
                        return e.set(a, "." + Hr, s + "?" + s + ".width:" + a + "." + Gr), e.set(a, "." + Wr, s + "?" + s + ".height:" + a + "." + qr), s
                    })
                }
                return null
            }

            function w(t, e, i) {
                function n(t) {
                    if (t in r) {
                        var n = r[t];
                        pe.commandType(n, "object", "invalid " + t, i.commandStr);
                        var s, a, l = !0,
                            c = 0 | n.x,
                            u = 0 | n.y;
                        return "width" in n ? (s = 0 | n.width, pe.command(s >= 0, "invalid " + t, i.commandStr)) : l = !1, "height" in n ? (a = 0 | n.height, pe.command(a >= 0, "invalid " + t, i.commandStr)) : l = !1, new Wt(!l && e && e.thisDep, !l && e && e.contextDep, !l && e && e.propDep, function(t, e) {
                            var i = t.shared.context,
                                r = s;
                            "width" in n || (r = e.def(i, ".", Hr, "-", c));
                            var o = a;
                            return "height" in n || (o = e.def(i, ".", Wr, "-", u)), [c, u, r, o]
                        })
                    }
                    if (t in o) {
                        var h = o[t],
                            f = Gt(h, function(e, i) {
                                var n = e.invoke(i, h);
                                pe.optional(function() {
                                    e.assert(i, n + "&&typeof " + n + '==="object"', "invalid " + t)
                                });
                                var r = e.shared.context,
                                    o = i.def(n, ".x|0"),
                                    s = i.def(n, ".y|0"),
                                    a = i.def('"width" in ', n, "?", n, ".width|0:", "(", r, ".", Hr, "-", o, ")"),
                                    l = i.def('"height" in ', n, "?", n, ".height|0:", "(", r, ".", Wr, "-", s, ")");
                                return pe.optional(function() {
                                    e.assert(i, a + ">=0&&" + l + ">=0", "invalid " + t)
                                }), [o, s, a, l]
                            });
                        return e && (f.thisDep = f.thisDep || e.thisDep, f.contextDep = f.contextDep || e.contextDep, f.propDep = f.propDep || e.propDep), f
                    }
                    return e ? new Wt(e.thisDep, e.contextDep, e.propDep, function(t, e) {
                        var i = t.shared.context;
                        return [0, 0, e.def(i, ".", Hr), e.def(i, ".", Wr)]
                    }) : null
                }
                var r = t.static,
                    o = t.dynamic,
                    s = n(Dr);
                if (s) {
                    var a = s;
                    s = new Wt(s.thisDep, s.contextDep, s.propDep, function(t, e) {
                        var i = a.append(t, e),
                            n = t.shared.context;
                        return e.set(n, "." + Xr, i[2]), e.set(n, "." + Ur, i[3]), i
                    })
                }
                return {
                    viewport: s,
                    scissor_box: n($r)
                }
            }

            function T(t) {
                function i(t) {
                    if (t in r) {
                        var i = e.id(r[t]);
                        pe.optional(function() {
                            u.shader(Uo[t], i, pe.guessCommand())
                        });
                        var n = Ut(function() {
                            return i
                        });
                        return n.id = i, n
                    }
                    if (t in o) {
                        var s = o[t];
                        return Gt(s, function(e, i) {
                            var n = e.invoke(i, s),
                                r = i.def(e.shared.strings, ".id(", n, ")");
                            return pe.optional(function() {
                                i(e.shared.shader, ".shader(", Uo[t], ",", r, ",", e.command, ");")
                            }), r
                        })
                    }
                    return null
                }
                var n, r = t.static,
                    o = t.dynamic,
                    s = i(Ir),
                    a = i(jr),
                    l = null;
                return Xt(s) && Xt(a) ? (l = u.program(a.id, s.id), n = Ut(function(t, e) {
                    return t.link(l)
                })) : n = new Wt(s && s.thisDep || a && a.thisDep, s && s.contextDep || a && a.contextDep, s && s.propDep || a && a.propDep, function(t, e) {
                    var i, n = t.shared.shader;
                    i = s ? s.append(t, e) : e.def(n, ".", Ir);
                    var r;
                    r = a ? a.append(t, e) : e.def(n, ".", jr);
                    var o = n + ".program(" + r + "," + i;
                    return pe.optional(function() {
                        o += "," + t.command
                    }), e.def(o + ")")
                }), {
                    frag: s,
                    vert: a,
                    progVar: n,
                    program: l
                }
            }

            function x(t, e) {
                function i(t, i) {
                    if (t in n) {
                        var o = 0 | n[t];
                        return pe.command(!i || o >= 0, "invalid " + t, e.commandStr), Ut(function(t, e) {
                            return i && (t.OFFSET = o), o
                        })
                    }
                    if (t in r) {
                        var a = r[t];
                        return Gt(a, function(e, n) {
                            var r = e.invoke(n, a);
                            return i && (e.OFFSET = r, pe.optional(function() {
                                e.assert(n, r + ">=0", "invalid " + t)
                            })), r
                        })
                    }
                    return i && s ? Ut(function(t, e) {
                        return t.OFFSET = "0", 0
                    }) : null
                }
                var n = t.static,
                    r = t.dynamic,
                    s = function() {
                        if (Lr in n) {
                            var t = n[Lr];
                            Bt(t) ? t = o.getElements(o.create(t, !0)) : t && (t = o.getElements(t), pe.command(t, "invalid elements", e.commandStr));
                            var i = Ut(function(e, i) {
                                if (t) {
                                    var n = e.link(t);
                                    return e.ELEMENTS = n, n
                                }
                                return e.ELEMENTS = null, null
                            });
                            return i.value = t, i
                        }
                        if (Lr in r) {
                            var s = r[Lr];
                            return Gt(s, function(t, e) {
                                var i = t.shared,
                                    n = i.isBufferArgs,
                                    r = i.elements,
                                    o = t.invoke(e, s),
                                    a = e.def("null"),
                                    l = e.def(n, "(", o, ")"),
                                    c = t.cond(l).then(a, "=", r, ".createStream(", o, ");").else(a, "=", r, ".getElements(", o, ");");
                                return pe.optional(function() {
                                    t.assert(c.else, "!" + o + "||" + a, "invalid elements")
                                }), e.entry(c), e.exit(t.cond(l).then(r, ".destroyStream(", a, ");")), t.ELEMENTS = a, a
                            })
                        }
                        return null
                    }(),
                    a = i(Nr, !0);
                return {
                    elements: s,
                    primitive: function() {
                        if (Fr in n) {
                            var t = n[Fr];
                            return pe.commandParameter(t, Ne, "invalid primitve", e.commandStr), Ut(function(e, i) {
                                return Ne[t]
                            })
                        }
                        if (Fr in r) {
                            var i = r[Fr];
                            return Gt(i, function(t, e) {
                                var n = t.constants.primTypes,
                                    r = t.invoke(e, i);
                                return pe.optional(function() {
                                    t.assert(e, r + " in " + n, "invalid primitive, must be one of " + Object.keys(Ne))
                                }), e.def(n, "[", r, "]")
                            })
                        }
                        return s ? Xt(s) ? Ut(s.value ? function(t, e) {
                            return e.def(t.ELEMENTS, ".primType")
                        } : function() {
                            return Co
                        }) : new Wt(s.thisDep, s.contextDep, s.propDep, function(t, e) {
                            var i = t.ELEMENTS;
                            return e.def(i, "?", i, ".primType:", Co)
                        }) : null
                    }(),
                    count: function() {
                        if (zr in n) {
                            var t = 0 | n[zr];
                            return pe.command("number" == typeof t && t >= 0, "invalid vertex count", e.commandStr), Ut(function() {
                                return t
                            })
                        }
                        if (zr in r) {
                            var i = r[zr];
                            return Gt(i, function(t, e) {
                                var n = t.invoke(e, i);
                                return pe.optional(function() {
                                    t.assert(e, "typeof " + n + '==="number"&&' + n + ">=0&&" + n + "===(" + n + "|0)", "invalid vertex count")
                                }), n
                            })
                        }
                        if (s) {
                            if (Xt(s)) {
                                if (s) return a ? new Wt(a.thisDep, a.contextDep, a.propDep, function(t, e) {
                                    var i = e.def(t.ELEMENTS, ".vertCount-", t.OFFSET);
                                    return pe.optional(function() {
                                        t.assert(e, i + ">=0", "invalid vertex offset/element buffer too small")
                                    }), i
                                }) : Ut(function(t, e) {
                                    return e.def(t.ELEMENTS, ".vertCount")
                                });
                                var o = Ut(function() {
                                    return -1
                                });
                                return pe.optional(function() {
                                    o.MISSING = !0
                                }), o
                            }
                            var l = new Wt(s.thisDep || a.thisDep, s.contextDep || a.contextDep, s.propDep || a.propDep, function(t, e) {
                                var i = t.ELEMENTS;
                                return t.OFFSET ? e.def(i, "?", i, ".vertCount-", t.OFFSET, ":-1") : e.def(i, "?", i, ".vertCount:-1")
                            });
                            return pe.optional(function() {
                                l.DYNAMIC = !0
                            }), l
                        }
                        return null
                    }(),
                    instances: i(Br, !1),
                    offset: a
                }
            }

            function S(t, e) {
                var i = t.static,
                    r = t.dynamic,
                    o = {};
                return et.forEach(function(t) {
                    function s(e, n) {
                        if (t in i) {
                            var s = e(i[t]);
                            o[a] = Ut(function() {
                                return s
                            })
                        } else if (t in r) {
                            var l = r[t];
                            o[a] = Gt(l, function(t, e) {
                                return n(t, e, t.invoke(e, l))
                            })
                        }
                    }
                    var a = m(t);
                    switch (t) {
                        case gr:
                        case ar:
                        case sr:
                        case kr:
                        case hr:
                        case Er:
                        case br:
                        case Tr:
                        case xr:
                        case dr:
                            return s(function(i) {
                                return pe.commandType(i, "boolean", t, e.commandStr), i
                            }, function(e, i, n) {
                                return pe.optional(function() {
                                    e.assert(i, "typeof " + n + '==="boolean"', "invalid flag " + t, e.commandStr)
                                }), n
                            });
                        case fr:
                            return s(function(i) {
                                return pe.commandParameter(i, Wo, "invalid " + t, e.commandStr), Wo[i]
                            }, function(e, i, n) {
                                var r = e.constants.compareFuncs;
                                return pe.optional(function() {
                                    e.assert(i, n + " in " + r, "invalid " + t + ", must be one of " + Object.keys(Wo))
                                }), i.def(r, "[", n, "]")
                            });
                        case pr:
                            return s(function(t) {
                                return pe.command(mt(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1] && t[0] <= t[1], "depth range is 2d array", e.commandStr), t
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, t.shared.isArrayLike + "(" + i + ")&&" + i + ".length===2&&typeof " + i + '[0]==="number"&&typeof ' + i + '[1]==="number"&&' + i + "[0]<=" + i + "[1]", "depth range must be a 2d array")
                                }), [e.def("+", i, "[0]"), e.def("+", i, "[1]")]
                            });
                        case ur:
                            return s(function(t) {
                                pe.commandType(t, "object", "blend.func", e.commandStr);
                                var i = "srcRGB" in t ? t.srcRGB : t.src,
                                    n = "srcAlpha" in t ? t.srcAlpha : t.src,
                                    r = "dstRGB" in t ? t.dstRGB : t.dst,
                                    o = "dstAlpha" in t ? t.dstAlpha : t.dst;
                                return pe.commandParameter(i, Bo, a + ".srcRGB", e.commandStr), pe.commandParameter(n, Bo, a + ".srcAlpha", e.commandStr), pe.commandParameter(r, Bo, a + ".dstRGB", e.commandStr), pe.commandParameter(o, Bo, a + ".dstAlpha", e.commandStr), pe.command(-1 === Ho.indexOf(i + ", " + r), "unallowed blending combination (srcRGB, dstRGB) = (" + i + ", " + r + ")", e.commandStr), [Bo[i], Bo[r], Bo[n], Bo[o]]
                            }, function(e, i, n) {
                                function r(r, s) {
                                    var a = i.def('"', r, s, '" in ', n, "?", n, ".", r, s, ":", n, ".", r);
                                    return pe.optional(function() {
                                        e.assert(i, a + " in " + o, "invalid " + t + "." + r + s + ", must be one of " + Object.keys(Bo))
                                    }), a
                                }
                                var o = e.constants.blendFuncs;
                                pe.optional(function() {
                                    e.assert(i, n + "&&typeof " + n + '==="object"', "invalid blend func, must be an object")
                                });
                                var s = r("src", "RGB"),
                                    a = r("dst", "RGB");
                                pe.optional(function() {
                                    var t = e.constants.invalidBlendCombinations;
                                    e.assert(i, t + ".indexOf(" + s + '+", "+' + a + ") === -1 ", "unallowed blending combination for (srcRGB, dstRGB)")
                                });
                                var l = i.def(o, "[", s, "]"),
                                    c = i.def(o, "[", r("src", "Alpha"), "]");
                                return [l, i.def(o, "[", a, "]"), c, i.def(o, "[", r("dst", "Alpha"), "]")]
                            });
                        case cr:
                            return s(function(i) {
                                return "string" == typeof i ? (pe.commandParameter(i, V, "invalid " + t, e.commandStr), [V[i], V[i]]) : "object" == typeof i ? (pe.commandParameter(i.rgb, V, t + ".rgb", e.commandStr), pe.commandParameter(i.alpha, V, t + ".alpha", e.commandStr), [V[i.rgb], V[i.alpha]]) : void pe.commandRaise("invalid blend.equation", e.commandStr)
                            }, function(e, i, n) {
                                var r = e.constants.blendEquations,
                                    o = i.def(),
                                    s = i.def(),
                                    a = e.cond("typeof ", n, '==="string"');
                                return pe.optional(function() {
                                    function i(t, i, n) {
                                        e.assert(t, n + " in " + r, "invalid " + i + ", must be one of " + Object.keys(V))
                                    }
                                    i(a.then, t, n), e.assert(a.else, n + "&&typeof " + n + '==="object"', "invalid " + t), i(a.else, t + ".rgb", n + ".rgb"), i(a.else, t + ".alpha", n + ".alpha")
                                }), a.then(o, "=", s, "=", r, "[", n, "];"), a.else(o, "=", r, "[", n, ".rgb];", s, "=", r, "[", n, ".alpha];"), i(a), [o, s]
                            });
                        case lr:
                            return s(function(t) {
                                return pe.command(mt(t) && 4 === t.length, "blend.color must be a 4d array", e.commandStr), Q(4, function(e) {
                                    return +t[e]
                                })
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, t.shared.isArrayLike + "(" + i + ")&&" + i + ".length===4", "blend.color must be a 4d array")
                                }), Q(4, function(t) {
                                    return e.def("+", i, "[", t, "]")
                                })
                            });
                        case Cr:
                            return s(function(t) {
                                return pe.commandType(t, "number", a, e.commandStr), 0 | t
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, "typeof " + i + '==="number"', "invalid stencil.mask")
                                }), e.def(i, "|0")
                            });
                        case Pr:
                            return s(function(i) {
                                pe.commandType(i, "object", a, e.commandStr);
                                var n = i.cmp || "keep",
                                    r = i.ref || 0,
                                    o = "mask" in i ? i.mask : -1;
                                return pe.commandParameter(n, Wo, t + ".cmp", e.commandStr), pe.commandType(r, "number", t + ".ref", e.commandStr), pe.commandType(o, "number", t + ".mask", e.commandStr), [Wo[n], r, o]
                            }, function(t, e, i) {
                                var n = t.constants.compareFuncs;
                                return pe.optional(function() {
                                    function r() {
                                        t.assert(e, Array.prototype.join.call(arguments, ""), "invalid stencil.func")
                                    }
                                    r(i + "&&typeof ", i, '==="object"'), r('!("cmp" in ', i, ")||(", i, ".cmp in ", n, ")")
                                }), [e.def('"cmp" in ', i, "?", n, "[", i, ".cmp]", ":", Mo), e.def(i, ".ref|0"), e.def('"mask" in ', i, "?", i, ".mask|0:-1")]
                            });
                        case Ar:
                        case Or:
                            return s(function(i) {
                                pe.commandType(i, "object", a, e.commandStr);
                                var n = i.fail || "keep",
                                    r = i.zfail || "keep",
                                    o = i.zpass || "keep";
                                return pe.commandParameter(n, Xo, t + ".fail", e.commandStr), pe.commandParameter(r, Xo, t + ".zfail", e.commandStr), pe.commandParameter(o, Xo, t + ".zpass", e.commandStr), [t === Or ? Ao : Po, Xo[n], Xo[r], Xo[o]]
                            }, function(e, i, n) {
                                function r(r) {
                                    return pe.optional(function() {
                                        e.assert(i, '!("' + r + '" in ' + n + ")||(" + n + "." + r + " in " + o + ")", "invalid " + t + "." + r + ", must be one of " + Object.keys(Xo))
                                    }), i.def('"', r, '" in ', n, "?", o, "[", n, ".", r, "]:", Mo)
                                }
                                var o = e.constants.stencilOps;
                                return pe.optional(function() {
                                    e.assert(i, n + "&&typeof " + n + '==="object"', "invalid " + t)
                                }), [t === Or ? Ao : Po, r("fail"), r("zfail"), r("zpass")]
                            });
                        case wr:
                            return s(function(t) {
                                pe.commandType(t, "object", a, e.commandStr);
                                var i = 0 | t.factor,
                                    n = 0 | t.units;
                                return pe.commandType(i, "number", a + ".factor", e.commandStr), pe.commandType(n, "number", a + ".units", e.commandStr), [i, n]
                            }, function(e, i, n) {
                                return pe.optional(function() {
                                    e.assert(i, n + "&&typeof " + n + '==="object"', "invalid " + t)
                                }), [i.def(n, ".factor|0"), i.def(n, ".units|0")]
                            });
                        case vr:
                            return s(function(t) {
                                var i = 0;
                                return "front" === t ? i = Po : "back" === t && (i = Ao), pe.command(!!i, a, e.commandStr), i
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, i + '==="front"||' + i + '==="back"', "invalid cull.face")
                                }), e.def(i, '==="front"?', Po, ":", Ao)
                            });
                        case yr:
                            return s(function(t) {
                                return pe.command("number" == typeof t && t >= n.lineWidthDims[0] && t <= n.lineWidthDims[1], "invalid line width, must positive number between " + n.lineWidthDims[0] + " and " + n.lineWidthDims[1], e.commandStr), t
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, "typeof " + i + '==="number"&&' + i + ">=" + n.lineWidthDims[0] + "&&" + i + "<=" + n.lineWidthDims[1], "invalid line width")
                                }), i
                            });
                        case _r:
                            return s(function(t) {
                                return pe.commandParameter(t, Go, a, e.commandStr), Go[t]
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, i + '==="cw"||' + i + '==="ccw"', "invalid frontFace, must be one of cw,ccw")
                                }), e.def(i + '==="cw"?' + Oo + ":" + Eo)
                            });
                        case mr:
                            return s(function(t) {
                                return pe.command(mt(t) && 4 === t.length, "color.mask must be length 4 array", e.commandStr), t.map(function(t) {
                                    return !!t
                                })
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, t.shared.isArrayLike + "(" + i + ")&&" + i + ".length===4", "invalid color.mask")
                                }), Q(4, function(t) {
                                    return "!!" + i + "[" + t + "]"
                                })
                            });
                        case Sr:
                            return s(function(t) {
                                pe.command("object" == typeof t && t, a, e.commandStr);
                                var i = "value" in t ? t.value : 1,
                                    n = !!t.invert;
                                return pe.command("number" == typeof i && i >= 0 && i <= 1, "sample.coverage.value must be a number between 0 and 1", e.commandStr), [i, n]
                            }, function(t, e, i) {
                                return pe.optional(function() {
                                    t.assert(e, i + "&&typeof " + i + '==="object"', "invalid sample.coverage")
                                }), [e.def('"value" in ', i, "?+", i, ".value:1"), e.def("!!", i, ".invert")]
                            })
                    }
                }), o
            }

            function k(t, e) {
                var i = t.static,
                    n = t.dynamic,
                    r = {};
                return Object.keys(i).forEach(function(t) {
                    var n, o = i[t];
                    if ("number" == typeof o || "boolean" == typeof o) n = Ut(function() {
                        return o
                    });
                    else if ("function" == typeof o) {
                        var s = o._reglType;
                        "texture2d" === s || "textureCube" === s ? n = Ut(function(t) {
                            return t.link(o)
                        }) : "framebuffer" === s || "framebufferCube" === s ? (pe.command(o.color.length > 0, 'missing color attachment for framebuffer sent to uniform "' + t + '"', e.commandStr), n = Ut(function(t) {
                            return t.link(o.color[0])
                        })) : pe.commandRaise('invalid data for uniform "' + t + '"', e.commandStr)
                    } else mt(o) ? n = Ut(function(e) {
                        return e.global.def("[", Q(o.length, function(i) {
                            return pe.command("number" == typeof o[i] || "boolean" == typeof o[i], "invalid uniform " + t, e.commandStr), o[i]
                        }), "]")
                    }) : pe.commandRaise('invalid or missing data for uniform "' + t + '"', e.commandStr);
                    n.value = o, r[t] = n
                }), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    r[t] = Gt(e, function(t, i) {
                        return t.invoke(i, e)
                    })
                }), r
            }

            function C(t, i) {
                var n = t.static,
                    o = t.dynamic,
                    s = {};
                return Object.keys(n).forEach(function(t) {
                    var o = n[t],
                        a = e.id(t),
                        l = new Y;
                    if (Bt(o)) l.state = Jn, l.buffer = r.getBuffer(r.create(o, Vr, !1, !0)), l.type = 0;
                    else {
                        var c = r.getBuffer(o);
                        if (c) l.state = Jn, l.buffer = c, l.type = 0;
                        else if (pe.command("object" == typeof o && o, "invalid data for attribute " + t, i.commandStr), o.constant) {
                            var u = o.constant;
                            l.buffer = "null", l.state = tr, "number" == typeof u ? l.x = u : (pe.command(mt(u) && u.length > 0 && u.length <= 4, "invalid constant for attribute " + t, i.commandStr), Kn.forEach(function(t, e) {
                                e < u.length && (l[t] = u[e])
                            }))
                        } else {
                            c = Bt(o.buffer) ? r.getBuffer(r.create(o.buffer, Vr, !1, !0)) : r.getBuffer(o.buffer), pe.command(!!c, 'missing buffer for attribute "' + t + '"', i.commandStr);
                            var h = 0 | o.offset;
                            pe.command(h >= 0, 'invalid offset for attribute "' + t + '"', i.commandStr);
                            var f = 0 | o.stride;
                            pe.command(f >= 0 && f < 256, 'invalid stride for attribute "' + t + '", must be integer betweeen [0, 255]', i.commandStr);
                            var p = 0 | o.size;
                            pe.command(!("size" in o) || p > 0 && p <= 4, 'invalid size for attribute "' + t + '", must be 1,2,3,4', i.commandStr);
                            var d = !!o.normalized,
                                m = 0;
                            "type" in o && (pe.commandParameter(o.type, $e, "invalid type for attribute " + t, i.commandStr), m = $e[o.type]);
                            var g = 0 | o.divisor;
                            "divisor" in o && (pe.command(0 === g || K, 'cannot specify divisor for attribute "' + t + '", instancing not supported', i.commandStr), pe.command(g >= 0, 'invalid divisor for attribute "' + t + '"', i.commandStr)), pe.optional(function() {
                                var e = i.commandStr,
                                    n = ["buffer", "offset", "divisor", "normalized", "type", "size", "stride"];
                                Object.keys(o).forEach(function(i) {
                                    pe.command(n.indexOf(i) >= 0, 'unknown parameter "' + i + '" for attribute pointer "' + t + '" (valid parameters are ' + n + ")", e)
                                })
                            }), l.buffer = c, l.state = Jn, l.size = p, l.normalized = d, l.type = m || c.dtype, l.offset = h, l.stride = f, l.divisor = g
                        }
                    }
                    s[t] = Ut(function(t, e) {
                        var i = t.attribCache;
                        if (a in i) return i[a];
                        var n = {
                            isStream: !1
                        };
                        return Object.keys(l).forEach(function(t) {
                            n[t] = l[t]
                        }), l.buffer && (n.buffer = t.link(l.buffer), n.type = n.type || n.buffer + ".dtype"), i[a] = n, n
                    })
                }), Object.keys(o).forEach(function(t) {
                    function e(e, n) {
                        function r(t) {
                            n(c[t], "=", o, ".", t, "|0;")
                        }
                        var o = e.invoke(n, i),
                            s = e.shared,
                            a = s.isBufferArgs,
                            l = s.buffer;
                        pe.optional(function() {
                            e.assert(n, o + "&&(typeof " + o + '==="object"||typeof ' + o + '==="function")&&(' + a + "(" + o + ")||" + l + ".getBuffer(" + o + ")||" + l + ".getBuffer(" + o + ".buffer)||" + a + "(" + o + '.buffer)||("constant" in ' + o + "&&(typeof " + o + '.constant==="number"||' + s.isArrayLike + "(" + o + ".constant))))", 'invalid dynamic attribute "' + t + '"')
                        });
                        var c = {
                                isStream: n.def(!1)
                            },
                            u = new Y;
                        u.state = Jn, Object.keys(u).forEach(function(t) {
                            c[t] = n.def("" + u[t])
                        });
                        var h = c.buffer,
                            f = c.type;
                        return n("if(", a, "(", o, ")){", c.isStream, "=true;", h, "=", l, ".createStream(", Vr, ",", o, ");", f, "=", h, ".dtype;", "}else{", h, "=", l, ".getBuffer(", o, ");", "if(", h, "){", f, "=", h, ".dtype;", '}else if("constant" in ', o, "){", c.state, "=", tr, ";", "if(typeof " + o + '.constant === "number"){', c[Kn[0]], "=", o, ".constant;", Kn.slice(1).map(function(t) {
                            return c[t]
                        }).join("="), "=0;", "}else{", Kn.map(function(t, e) {
                            return c[t] + "=" + o + ".constant.length>=" + e + "?" + o + ".constant[" + e + "]:0;"
                        }).join(""), "}}else{", "if(", a, "(", o, ".buffer)){", h, "=", l, ".createStream(", Vr, ",", o, ".buffer);", "}else{", h, "=", l, ".getBuffer(", o, ".buffer);", "}", f, '="type" in ', o, "?", s.glTypes, "[", o, ".type]:", h, ".dtype;", c.normalized, "=!!", o, ".normalized;"), r("size"), r("offset"), r("stride"), r("divisor"), n("}}"), n.exit("if(", c.isStream, "){", l, ".destroyStream(", h, ");", "}"), c
                    }
                    var i = o[t];
                    s[t] = Gt(i, e)
                }), s
            }

            function P(t) {
                var e = t.static,
                    i = t.dynamic,
                    n = {};
                return Object.keys(e).forEach(function(t) {
                    var i = e[t];
                    n[t] = Ut(function(t, e) {
                        return "number" == typeof i || "boolean" == typeof i ? "" + i : t.link(i)
                    })
                }), Object.keys(i).forEach(function(t) {
                    var e = i[t];
                    n[t] = Gt(e, function(t, i) {
                        return t.invoke(i, e)
                    })
                }), n
            }

            function A(t, e, i, n, r) {
                function o(t) {
                    var e = c[t];
                    e && (h[t] = e)
                }
                var s = t.static,
                    a = t.dynamic;
                pe.optional(function() {
                    function t(t) {
                        Object.keys(t).forEach(function(t) {
                            pe.command(e.indexOf(t) >= 0, 'unknown parameter "' + t + '"', r.commandStr)
                        })
                    }
                    var e = [Mr, jr, Ir, Lr, Fr, Nr, zr, Br, Rr].concat(et);
                    t(s), t(a)
                });
                var l = b(t, r),
                    c = w(t, l, r),
                    u = x(t, r),
                    h = S(t, r),
                    f = T(t, r);
                o(Dr), o(m($r));
                var p = Object.keys(h).length > 0,
                    d = {
                        framebuffer: l,
                        draw: u,
                        shader: f,
                        state: h,
                        dirty: p
                    };
                return d.profile = y(t, r), d.uniforms = k(i, r), d.attributes = C(e, r), d.context = P(n, r), d
            }

            function O(t, e, i) {
                var n = t.shared,
                    r = n.context,
                    o = t.scope();
                Object.keys(i).forEach(function(n) {
                    e.save(r, "." + n);
                    var s = i[n];
                    o(r, ".", n, "=", s.append(t, e), ";")
                }), e(o)
            }

            function E(t, e, i, n) {
                var r, o = t.shared,
                    s = o.gl,
                    a = o.framebuffer;
                Z && (r = e.def(o.extensions, ".webgl_draw_buffers"));
                var l, c = t.constants,
                    u = c.drawBuffer,
                    h = c.backBuffer;
                l = i ? i.append(t, e) : e.def(a, ".next"), n || e("if(", l, "!==", a, ".cur){"), e("if(", l, "){", s, ".bindFramebuffer(", zo, ",", l, ".framebuffer);"), Z && e(r, ".drawBuffersWEBGL(", u, "[", l, ".colorAttachments.length]);"), e("}else{", s, ".bindFramebuffer(", zo, ",null);"), Z && e(r, ".drawBuffersWEBGL(", h, ");"), e("}", a, ".cur=", l, ";"), n || e("}")
            }

            function $(t, e, i) {
                var n = t.shared,
                    r = n.gl,
                    o = t.current,
                    s = t.next,
                    a = n.current,
                    l = n.next,
                    c = t.cond(a, ".dirty");
                et.forEach(function(e) {
                    var n = m(e);
                    if (!(n in i.state)) {
                        var u, h;
                        if (n in s) {
                            u = s[n], h = o[n];
                            var f = Q(J[n].length, function(t) {
                                return c.def(u, "[", t, "]")
                            });
                            c(t.cond(f.map(function(t, e) {
                                return t + "!==" + h + "[" + e + "]"
                            }).join("||")).then(r, ".", nt[n], "(", f, ");", f.map(function(t, e) {
                                return h + "[" + e + "]=" + t
                            }).join(";"), ";"))
                        } else {
                            u = c.def(l, ".", n);
                            var p = t.cond(u, "!==", a, ".", n);
                            c(p), n in it ? p(t.cond(u).then(r, ".enable(", it[n], ");").else(r, ".disable(", it[n], ");"), a, ".", n, "=", u, ";") : p(r, ".", nt[n], "(", u, ");", a, ".", n, "=", u, ";")
                        }
                    }
                }), 0 === Object.keys(i.state).length && c(a, ".dirty=false;"), e(c)
            }

            function D(t, e, i, n) {
                var r = t.shared,
                    o = t.current,
                    s = r.current,
                    a = r.gl;
                Ht(Object.keys(i)).forEach(function(r) {
                    var l = i[r];
                    if (!n || n(l)) {
                        var c = l.append(t, e);
                        if (it[r]) {
                            var u = it[r];
                            Xt(l) ? c ? e(a, ".enable(", u, ");") : e(a, ".disable(", u, ");") : e(t.cond(c).then(a, ".enable(", u, ");").else(a, ".disable(", u, ");")), e(s, ".", r, "=", c, ";")
                        } else if (mt(c)) {
                            var h = o[r];
                            e(a, ".", nt[r], "(", c, ");", c.map(function(t, e) {
                                return h + "[" + e + "]=" + t
                            }).join(";"), ";")
                        } else e(a, ".", nt[r], "(", c, ");", s, ".", r, "=", c, ";")
                    }
                })
            }

            function R(t, e) {
                K && (t.instancing = e.def(t.shared.extensions, ".angle_instanced_arrays"))
            }

            function M(t, e, i, n, r) {
                function o() {
                    return "undefined" == typeof performance ? "Date.now()" : "performance.now()"
                }

                function s(t) {
                    c = e.def(), t(c, "=", o(), ";"), "string" == typeof r ? t(d, ".count+=", r, ";") : t(d, ".count++;"), p && (n ? (u = e.def(), t(u, "=", g, ".getNumPendingQueries();")) : t(g, ".beginQuery(", d, ");"))
                }

                function a(t) {
                    t(d, ".cpuTime+=", o(), "-", c, ";"), p && (n ? t(g, ".pushScopeStats(", u, ",", g, ".getNumPendingQueries(),", d, ");") : t(g, ".endQuery();"))
                }

                function l(t) {
                    var i = e.def(m, ".profile");
                    e(m, ".profile=", t, ";"), e.exit(m, ".profile=", i, ";")
                }
                var c, u, h, f = t.shared,
                    d = t.stats,
                    m = f.current,
                    g = f.timer,
                    v = i.profile;
                if (v) {
                    if (Xt(v)) return void(v.enable ? (s(e), a(e.exit), l("true")) : l("false"));
                    h = v.append(t, e), l(h)
                } else h = e.def(m, ".profile");
                var _ = t.block();
                s(_), e("if(", h, "){", _, "}");
                var y = t.block();
                a(y), e.exit("if(", h, "){", y, "}")
            }

            function j(t, e, i, n, r) {
                function o(t) {
                    switch (t) {
                        case co:
                        case po:
                        case _o:
                            return 2;
                        case uo:
                        case mo:
                        case yo:
                            return 3;
                        case ho:
                        case go:
                        case bo:
                            return 4;
                        default:
                            return 1
                    }
                }

                function s(i, n, r) {
                    function o() {
                        e("if(!", u, ".buffer){", l, ".enableVertexAttribArray(", c, ");}");
                        var i, o = r.type;
                        if (i = r.size ? e.def(r.size, "||", n) : n, e("if(", u, ".type!==", o, "||", u, ".size!==", i, "||", d.map(function(t) {
                                return u + "." + t + "!==" + r[t]
                            }).join("||"), "){", l, ".bindBuffer(", Vr, ",", f, ".buffer);", l, ".vertexAttribPointer(", [c, i, o, r.normalized, r.stride, r.offset], ");", u, ".type=", o, ";", u, ".size=", i, ";", d.map(function(t) {
                                return u + "." + t + "=" + r[t] + ";"
                            }).join(""), "}"), K) {
                            var s = r.divisor;
                            e("if(", u, ".divisor!==", s, "){", t.instancing, ".vertexAttribDivisorANGLE(", [c, s], ");", u, ".divisor=", s, ";}")
                        }
                    }

                    function s() {
                        e("if(", u, ".buffer){", l, ".disableVertexAttribArray(", c, ");", "}if(", Kn.map(function(t, e) {
                            return u + "." + t + "!==" + p[e]
                        }).join("||"), "){", l, ".vertexAttrib4f(", c, ",", p, ");", Kn.map(function(t, e) {
                            return u + "." + t + "=" + p[e] + ";"
                        }).join(""), "}")
                    }
                    var l = a.gl,
                        c = e.def(i, ".location"),
                        u = e.def(a.attributes, "[", c, "]"),
                        h = r.state,
                        f = r.buffer,
                        p = [r.x, r.y, r.z, r.w],
                        d = ["buffer", "normalized", "offset", "stride"];
                    h === Jn ? o() : h === tr ? s() : (e("if(", h, "===", Jn, "){"), o(), e("}else{"), s(), e("}"))
                }
                var a = t.shared;
                n.forEach(function(n) {
                    var a, l = n.name,
                        c = i.attributes[l];
                    if (c) {
                        if (!r(c)) return;
                        a = c.append(t, e)
                    } else {
                        if (!r(qo)) return;
                        var u = t.scopeAttrib(l);
                        pe.optional(function() {
                            t.assert(e, u + ".state", "missing attribute " + l)
                        }), a = {}, Object.keys(new Y).forEach(function(t) {
                            a[t] = e.def(u, ".", t)
                        })
                    }
                    s(t.link(n), o(n.info.type), a)
                })
            }

            function I(t, i, n, r, o) {
                for (var s, a = t.shared, l = a.gl, c = 0; c < r.length; ++c) {
                    var u, h = r[c],
                        f = h.name,
                        p = h.info.type,
                        d = n.uniforms[f],
                        m = t.link(h),
                        g = m + ".location";
                    if (d) {
                        if (!o(d)) continue;
                        if (Xt(d)) {
                            var v = d.value;
                            if (pe.command(null !== v && void 0 !== v, 'missing uniform "' + f + '"', t.commandStr), p === So || p === ko) {
                                pe.command("function" == typeof v && (p === So && ("texture2d" === v._reglType || "framebuffer" === v._reglType) || p === ko && ("textureCube" === v._reglType || "framebufferCube" === v._reglType)), "invalid texture for uniform " + f, t.commandStr);
                                var _ = t.link(v._texture || v.color[0]._texture);
                                i(l, ".uniform1i(", g, ",", _ + ".bind());"), i.exit(_, ".unbind();")
                            } else if (p === wo || p === To || p === xo) {
                                pe.optional(function() {
                                    pe.command(mt(v), "invalid matrix for uniform " + f, t.commandStr), pe.command(p === wo && 4 === v.length || p === To && 9 === v.length || p === xo && 16 === v.length, "invalid length for matrix uniform " + f, t.commandStr)
                                });
                                var y = t.global.def("new Float32Array([" + Array.prototype.slice.call(v) + "])"),
                                    b = 2;
                                p === To ? b = 3 : p === xo && (b = 4), i(l, ".uniformMatrix", b, "fv(", g, ",false,", y, ");")
                            } else {
                                switch (p) {
                                    case lo:
                                        pe.commandType(v, "number", "uniform " + f, t.commandStr), s = "1f";
                                        break;
                                    case co:
                                        pe.command(mt(v) && 2 === v.length, "uniform " + f, t.commandStr), s = "2f";
                                        break;
                                    case uo:
                                        pe.command(mt(v) && 3 === v.length, "uniform " + f, t.commandStr), s = "3f";
                                        break;
                                    case ho:
                                        pe.command(mt(v) && 4 === v.length, "uniform " + f, t.commandStr), s = "4f";
                                        break;
                                    case vo:
                                        pe.commandType(v, "boolean", "uniform " + f, t.commandStr), s = "1i";
                                        break;
                                    case fo:
                                        pe.commandType(v, "number", "uniform " + f, t.commandStr), s = "1i";
                                        break;
                                    case _o:
                                    case po:
                                        pe.command(mt(v) && 2 === v.length, "uniform " + f, t.commandStr), s = "2i";
                                        break;
                                    case yo:
                                    case mo:
                                        pe.command(mt(v) && 3 === v.length, "uniform " + f, t.commandStr), s = "3i";
                                        break;
                                    case bo:
                                    case go:
                                        pe.command(mt(v) && 4 === v.length, "uniform " + f, t.commandStr), s = "4i"
                                }
                                i(l, ".uniform", s, "(", g, ",", mt(v) ? Array.prototype.slice.call(v) : v, ");")
                            }
                            continue
                        }
                        u = d.append(t, i)
                    } else {
                        if (!o(qo)) continue;
                        u = i.def(a.uniforms, "[", e.id(f), "]")
                    }
                    p === So ? i("if(", u, "&&", u, '._reglType==="framebuffer"){', u, "=", u, ".color[0];", "}") : p === ko && i("if(", u, "&&", u, '._reglType==="framebufferCube"){', u, "=", u, ".color[0];", "}"), pe.optional(function() {
                        function e(e, n) {
                            t.assert(i, e, 'bad data or missing for uniform "' + f + '".  ' + n)
                        }

                        function n(t) {
                            e("typeof " + u + '==="' + t + '"', "invalid type, expected " + t)
                        }

                        function r(i, n) {
                            e(a.isArrayLike + "(" + u + ")&&" + u + ".length===" + i, "invalid vector, should have length " + i, t.commandStr)
                        }

                        function o(i) {
                            e("typeof " + u + '==="function"&&' + u + '._reglType==="texture' + (i === Kr ? "2d" : "Cube") + '"', "invalid texture type", t.commandStr)
                        }
                        switch (p) {
                            case fo:
                                n("number");
                                break;
                            case po:
                                r(2, "number");
                                break;
                            case mo:
                                r(3, "number");
                                break;
                            case go:
                                r(4, "number");
                                break;
                            case lo:
                                n("number");
                                break;
                            case co:
                                r(2, "number");
                                break;
                            case uo:
                                r(3, "number");
                                break;
                            case ho:
                                r(4, "number");
                                break;
                            case vo:
                                n("boolean");
                                break;
                            case _o:
                                r(2, "boolean");
                                break;
                            case yo:
                                r(3, "boolean");
                                break;
                            case bo:
                                r(4, "boolean");
                                break;
                            case wo:
                                r(4, "number");
                                break;
                            case To:
                                r(9, "number");
                                break;
                            case xo:
                                r(16, "number");
                                break;
                            case So:
                                o(Kr);
                                break;
                            case ko:
                                o(Zr)
                        }
                    });
                    var w = 1;
                    switch (p) {
                        case So:
                        case ko:
                            var T = i.def(u, "._texture");
                            i(l, ".uniform1i(", g, ",", T, ".bind());"), i.exit(T, ".unbind();");
                            continue;
                        case fo:
                        case vo:
                            s = "1i";
                            break;
                        case po:
                        case _o:
                            s = "2i", w = 2;
                            break;
                        case mo:
                        case yo:
                            s = "3i", w = 3;
                            break;
                        case go:
                        case bo:
                            s = "4i", w = 4;
                            break;
                        case lo:
                            s = "1f";
                            break;
                        case co:
                            s = "2f", w = 2;
                            break;
                        case uo:
                            s = "3f", w = 3;
                            break;
                        case ho:
                            s = "4f", w = 4;
                            break;
                        case wo:
                            s = "Matrix2fv";
                            break;
                        case To:
                            s = "Matrix3fv";
                            break;
                        case xo:
                            s = "Matrix4fv"
                    }
                    if (i(l, ".uniform", s, "(", g, ","), "M" === s.charAt(0)) {
                        var x = Math.pow(p - wo + 2, 2),
                            S = t.global.def("new Float32Array(", x, ")");
                        i("false,(Array.isArray(", u, ")||", u, " instanceof Float32Array)?", u, ":(", Q(x, function(t) {
                            return S + "[" + t + "]=" + u + "[" + t + "]"
                        }), ",", S, ")")
                    } else i(w > 1 ? Q(w, function(t) {
                        return u + "[" + t + "]"
                    }) : u);
                    i(");")
                }
            }

            function L(t, e, i, n) {
                function r(r) {
                    var o = u[r];
                    return o ? o.contextDep && n.contextDynamic || o.propDep ? o.append(t, i) : o.append(t, e) : e.def(c, ".", r)
                }

                function o() {
                    function t() {
                        i(g, ".drawElementsInstancedANGLE(", [f, d, v, p + "<<((" + v + "-" + Zn + ")>>1)", m], ");")
                    }

                    function e() {
                        i(g, ".drawArraysInstancedANGLE(", [f, p, d, m], ");")
                    }
                    h ? _ ? t() : (i("if(", h, "){"), t(), i("}else{"), e(), i("}")) : e()
                }

                function s() {
                    function t() {
                        i(l + ".drawElements(" + [f, d, v, p + "<<((" + v + "-" + Zn + ")>>1)"] + ");")
                    }

                    function e() {
                        i(l + ".drawArrays(" + [f, p, d] + ");")
                    }
                    h ? _ ? t() : (i("if(", h, "){"), t(), i("}else{"), e(), i("}")) : e()
                }
                var a = t.shared,
                    l = a.gl,
                    c = a.draw,
                    u = n.draw,
                    h = function() {
                        var r, o = u.elements,
                            s = e;
                        return o ? ((o.contextDep && n.contextDynamic || o.propDep) && (s = i), r = o.append(t, s)) : r = s.def(c, ".", Lr), r && s("if(" + r + ")" + l + ".bindBuffer(" + Qr + "," + r + ".buffer.buffer);"), r
                    }(),
                    f = r(Fr),
                    p = r(Nr),
                    d = function() {
                        var r, o = u.count,
                            s = e;
                        return o ? ((o.contextDep && n.contextDynamic || o.propDep) && (s = i), r = o.append(t, s), pe.optional(function() {
                            o.MISSING && t.assert(e, "false", "missing vertex count"), o.DYNAMIC && t.assert(s, r + ">=0", "missing vertex count")
                        })) : (r = s.def(c, ".", zr), pe.optional(function() {
                            t.assert(s, r + ">=0", "missing vertex count")
                        })), r
                    }();
                if ("number" == typeof d) {
                    if (0 === d) return
                } else i("if(", d, "){"), i.exit("}");
                var m, g;
                K && (m = r(Br), g = t.instancing);
                var v = h + ".type",
                    _ = u.elements && Xt(u.elements);
                K && ("number" != typeof m || m >= 0) ? "string" == typeof m ? (i("if(", m, ">0){"), o(), i("}else if(", m, "<0){"), s(), i("}")) : o() : s()
            }

            function F(t, e, i, n, r) {
                var o = _(),
                    s = o.proc("body", r);
                return pe.optional(function() {
                    o.commandStr = e.commandStr, o.command = o.link(e.commandStr)
                }), K && (o.instancing = s.def(o.shared.extensions, ".angle_instanced_arrays")), t(o, s, i, n), o.compile().body
            }

            function z(t, e, i, n) {
                R(t, e), j(t, e, i, n.attributes, function() {
                    return !0
                }), I(t, e, i, n.uniforms, function() {
                    return !0
                }), L(t, e, e, i)
            }

            function N(t, e) {
                var i = t.proc("draw", 1);
                R(t, i), O(t, i, e.context), E(t, i, e.framebuffer), $(t, i, e), D(t, i, e.state), M(t, i, e, !1, !0);
                var n = e.shader.progVar.append(t, i);
                if (i(t.shared.gl, ".useProgram(", n, ".program);"), e.shader.program) z(t, i, e, e.shader.program);
                else {
                    var r = t.global.def("{}"),
                        o = i.def(n, ".id"),
                        s = i.def(r, "[", o, "]");
                    i(t.cond(s).then(s, ".call(this,a0);").else(s, "=", r, "[", o, "]=", t.link(function(i) {
                        return F(z, t, e, i, 1)
                    }), "(", n, ");", s, ".call(this,a0);"))
                }
                Object.keys(e.state).length > 0 && i(t.shared.current, ".dirty=true;")
            }

            function B(t, e, i, n) {
                function r() {
                    return !0
                }
                t.batchId = "a1", R(t, e), j(t, e, i, n.attributes, r), I(t, e, i, n.uniforms, r), L(t, e, e, i)
            }

            function H(t, e, i, n) {
                function r(t) {
                    return t.contextDep && s || t.propDep
                }

                function o(t) {
                    return !r(t)
                }
                R(t, e);
                var s = i.contextDep,
                    a = e.def(),
                    l = e.def();
                t.shared.props = l, t.batchId = a;
                var c = t.scope(),
                    u = t.scope();
                if (e(c.entry, "for(", a, "=0;", a, "<", "a1", ";++", a, "){", l, "=", "a0", "[", a, "];", u, "}", c.exit), i.needsContext && O(t, u, i.context), i.needsFramebuffer && E(t, u, i.framebuffer), D(t, u, i.state, r), i.profile && r(i.profile) && M(t, u, i, !1, !0), n) j(t, c, i, n.attributes, o), j(t, u, i, n.attributes, r), I(t, c, i, n.uniforms, o), I(t, u, i, n.uniforms, r), L(t, c, u, i);
                else {
                    var h = t.global.def("{}"),
                        f = i.shader.progVar.append(t, u),
                        p = u.def(f, ".id"),
                        d = u.def(h, "[", p, "]");
                    u(t.shared.gl, ".useProgram(", f, ".program);", "if(!", d, "){", d, "=", h, "[", p, "]=", t.link(function(e) {
                        return F(B, t, i, e, 2)
                    }), "(", f, ");}", d, ".call(this,a0[", a, "],", a, ");")
                }
            }

            function W(t, e) {
                function i(t) {
                    return t.contextDep && r || t.propDep
                }
                var n = t.proc("batch", 2);
                t.batchId = "0", R(t, n);
                var r = !1,
                    o = !0;
                Object.keys(e.context).forEach(function(t) {
                    r = r || e.context[t].propDep
                }), r || (O(t, n, e.context), o = !1);
                var s = e.framebuffer,
                    a = !1;
                s ? (s.propDep ? r = a = !0 : s.contextDep && r && (a = !0), a || E(t, n, s)) : E(t, n, null), e.state.viewport && e.state.viewport.propDep && (r = !0), $(t, n, e), D(t, n, e.state, function(t) {
                    return !i(t)
                }), e.profile && i(e.profile) || M(t, n, e, !1, "a1"), e.contextDep = r, e.needsContext = o, e.needsFramebuffer = a;
                var l = e.shader.progVar;
                if (l.contextDep && r || l.propDep) H(t, n, e, null);
                else {
                    var c = l.append(t, n);
                    if (n(t.shared.gl, ".useProgram(", c, ".program);"), e.shader.program) H(t, n, e, e.shader.program);
                    else {
                        var u = t.global.def("{}"),
                            h = n.def(c, ".id"),
                            f = n.def(u, "[", h, "]");
                        n(t.cond(f).then(f, ".call(this,a0,a1);").else(f, "=", u, "[", h, "]=", t.link(function(i) {
                            return F(H, t, e, i, 2)
                        }), "(", c, ");", f, ".call(this,a0,a1);"))
                    }
                }
                Object.keys(e.state).length > 0 && n(t.shared.current, ".dirty=true;")
            }

            function X(t, i) {
                function n(e) {
                    var n = i.shader[e];
                    n && r.set(o.shader, "." + e, n.append(t, r))
                }
                var r = t.proc("scope", 3);
                t.batchId = "a2";
                var o = t.shared,
                    s = o.current;
                O(t, r, i.context), i.framebuffer && i.framebuffer.append(t, r), Ht(Object.keys(i.state)).forEach(function(e) {
                    var n = i.state[e],
                        s = n.append(t, r);
                    mt(s) ? s.forEach(function(i, n) {
                        r.set(t.next[e], "[" + n + "]", i)
                    }) : r.set(o.next, "." + e, s)
                }), M(t, r, i, !0, !0), [Lr, Nr, zr, Br, Fr].forEach(function(e) {
                    var n = i.draw[e];
                    n && r.set(o.draw, "." + e, "" + n.append(t, r))
                }), Object.keys(i.uniforms).forEach(function(n) {
                    r.set(o.uniforms, "[" + e.id(n) + "]", i.uniforms[n].append(t, r))
                }), Object.keys(i.attributes).forEach(function(e) {
                    var n = i.attributes[e].append(t, r),
                        o = t.scopeAttrib(e);
                    Object.keys(new Y).forEach(function(t) {
                        r.set(o, "." + t, n[t])
                    })
                }), n(jr), n(Ir), Object.keys(i.state).length > 0 && (r(s, ".dirty=true;"), r.exit(s, ".dirty=true;")), r("a1(", t.shared.context, ",a0,", t.batchId, ");")
            }

            function U(t) {
                if ("object" == typeof t && !mt(t)) {
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i)
                        if (ge.isDynamic(t[e[i]])) return !0;
                    return !1
                }
            }

            function G(t, e, i) {
                function n(t, e) {
                    s.forEach(function(i) {
                        var n = r[i];
                        if (ge.isDynamic(n)) {
                            var o = t.invoke(e, n);
                            e(u, ".", i, "=", o, ";")
                        }
                    })
                }
                var r = e.static[i];
                if (r && U(r)) {
                    var o = t.global,
                        s = Object.keys(r),
                        a = !1,
                        l = !1,
                        c = !1,
                        u = t.global.def("{}");
                    s.forEach(function(e) {
                        var i = r[e];
                        if (ge.isDynamic(i)) {
                            "function" == typeof i && (i = r[e] = ge.unbox(i));
                            var n = Gt(i, null);
                            a = a || n.thisDep, c = c || n.propDep, l = l || n.contextDep
                        } else {
                            switch (o(u, ".", e, "="), typeof i) {
                                case "number":
                                    o(i);
                                    break;
                                case "string":
                                    o('"', i, '"');
                                    break;
                                case "object":
                                    Array.isArray(i) && o("[", i.join(), "]");
                                    break;
                                default:
                                    o(t.link(i))
                            }
                            o(";")
                        }
                    }), e.dynamic[i] = new ge.DynamicVariable(or, {
                        thisDep: a,
                        contextDep: l,
                        propDep: c,
                        ref: u,
                        append: n
                    }), delete e.static[i]
                }
            }

            function q(t, e, i, n, r) {
                var o = _();
                o.stats = o.link(r), Object.keys(e.static).forEach(function(t) {
                    G(o, e, t)
                }), Yr.forEach(function(e) {
                    G(o, t, e)
                });
                var s = A(t, e, i, n, o);
                return N(o, s), X(o, s), W(o, s), o.compile()
            }
            var Y = c.Record,
                V = {
                    add: 32774,
                    subtract: 32778,
                    "reverse subtract": 32779
                };
            i.ext_blend_minmax && (V.min = $o, V.max = Do);
            var K = i.angle_instanced_arrays,
                Z = i.webgl_draw_buffers,
                J = {
                    dirty: !0,
                    profile: d.profile
                },
                tt = {},
                et = [],
                it = {},
                nt = {};
            g(sr, eo), g(ar, to), v(lr, "blendColor", [0, 0, 0, 0]), v(cr, "blendEquationSeparate", [Lo, Lo]), v(ur, "blendFuncSeparate", [Io, jo, Io, jo]), g(hr, no, !0), v(fr, "depthFunc", Fo), v(pr, "depthRange", [0, 1]), v(dr, "depthMask", !0), v(mr, mr, [!0, !0, !0, !0]), g(gr, Jr), v(vr, "cullFace", Ao), v(_r, _r, Eo), v(yr, yr, 1), g(br, oo), v(wr, "polygonOffset", [0, 0]), g(Tr, so), g(xr, ao), v(Sr, "sampleCoverage", [1, !1]), g(kr, io), v(Cr, "stencilMask", -1), v(Pr, "stencilFunc", [Ro, 0, -1]), v(Ar, "stencilOpSeparate", [Po, Mo, Mo, Mo]), v(Or, "stencilOpSeparate", [Ao, Mo, Mo, Mo]), g(Er, ro), v($r, "scissor", [0, 0, t.drawingBufferWidth, t.drawingBufferHeight]), v(Dr, Dr, [0, 0, t.drawingBufferWidth, t.drawingBufferHeight]);
            var rt = {
                    gl: t,
                    context: f,
                    strings: e,
                    next: tt,
                    current: J,
                    draw: h,
                    elements: o,
                    buffer: r,
                    shader: u,
                    attributes: c.state,
                    uniforms: l,
                    framebuffer: a,
                    extensions: i,
                    timer: p,
                    isBufferArgs: Bt
                },
                ot = {
                    primTypes: Ne,
                    compareFuncs: Wo,
                    blendFuncs: Bo,
                    blendEquations: V,
                    stencilOps: Xo,
                    glTypes: $e,
                    orientationType: Go
                };
            pe.optional(function() {
                rt.isArrayLike = mt
            }), Z && (ot.backBuffer = [Ao], ot.drawBuffer = Q(n.maxDrawbuffers, function(t) {
                return 0 === t ? [0] : Q(t, function(t) {
                    return No + t
                })
            }));
            var st = 0;
            return {
                next: tt,
                current: J,
                procs: function() {
                    var e = _(),
                        i = e.proc("poll"),
                        r = e.proc("refresh"),
                        o = e.block();
                    i(o), r(o);
                    var s = e.shared,
                        a = s.gl,
                        l = s.next,
                        c = s.current;
                    o(c, ".dirty=false;"), E(e, i), E(e, r, null, !0);
                    var u, h = t.getExtension("angle_instanced_arrays");
                    h && (u = e.link(h));
                    for (var f = 0; f < n.maxAttributes; ++f) {
                        var p = r.def(s.attributes, "[", f, "]"),
                            d = e.cond(p, ".buffer");
                        d.then(a, ".enableVertexAttribArray(", f, ");", a, ".bindBuffer(", Vr, ",", p, ".buffer.buffer);", a, ".vertexAttribPointer(", f, ",", p, ".size,", p, ".type,", p, ".normalized,", p, ".stride,", p, ".offset);").else(a, ".disableVertexAttribArray(", f, ");", a, ".vertexAttrib4f(", f, ",", p, ".x,", p, ".y,", p, ".z,", p, ".w);", p, ".buffer=null;"), r(d), h && r(u, ".vertexAttribDivisorANGLE(", f, ",", p, ".divisor);")
                    }
                    return Object.keys(it).forEach(function(t) {
                        var n = it[t],
                            s = o.def(l, ".", t),
                            u = e.block();
                        u("if(", s, "){", a, ".enable(", n, ")}else{", a, ".disable(", n, ")}", c, ".", t, "=", s, ";"), r(u), i("if(", s, "!==", c, ".", t, "){", u, "}")
                    }), Object.keys(nt).forEach(function(t) {
                        var n, s, u = nt[t],
                            h = J[t],
                            f = e.block();
                        if (f(a, ".", u, "("), mt(h)) {
                            var p = h.length;
                            n = e.global.def(l, ".", t), s = e.global.def(c, ".", t), f(Q(p, function(t) {
                                return n + "[" + t + "]"
                            }), ");", Q(p, function(t) {
                                return s + "[" + t + "]=" + n + "[" + t + "];"
                            }).join("")), i("if(", Q(p, function(t) {
                                return n + "[" + t + "]!==" + s + "[" + t + "]"
                            }).join("||"), "){", f, "}")
                        } else n = o.def(l, ".", t), s = o.def(c, ".", t), f(n, ");", c, ".", t, "=", n, ";"), i("if(", n, "!==", s, "){", f, "}");
                        r(f)
                    }), e.compile()
                }(),
                compile: q
            }
        }

        function Yt() {
            return {
                bufferCount: 0,
                elementsCount: 0,
                framebufferCount: 0,
                shaderCount: 0,
                textureCount: 0,
                cubeCount: 0,
                renderbufferCount: 0,
                maxTextureUnits: 0
            }
        }

        function Vt(t, e) {
            for (var i = 0; i < t.length; ++i)
                if (t[i] === e) return i;
            return -1
        }

        function Qt(t) {
            function e() {
                if (0 === X.length) return S && S.update(), void(Q = null);
                Q = ve.next(e), f();
                for (var t = X.length - 1; t >= 0; --t) {
                    var i = X[t];
                    i && i(A, null, 0)
                }
                v.flush(), S && S.update()
            }

            function i() {
                !Q && X.length > 0 && (Q = ve.next(e))
            }

            function n() {
                Q && (ve.cancel(e), Q = null)
            }

            function r(t) {
                t.preventDefault(), y = !0, n(), U.forEach(function(t) {
                    t()
                })
            }

            function o(t) {
                v.getError(), y = !1, b.restore(), j.restore(), D.restore(), I.restore(), L.restore(), F.restore(), S && S.restore(), z.procs.refresh(), i(), G.forEach(function(t) {
                    t()
                })
            }

            function s() {
                X.length = 0, n(), W && (W.removeEventListener(is, r), W.removeEventListener(ns, o)), j.clear(), F.clear(), L.clear(), I.clear(), R.clear(), D.clear(), S && S.clear(), V.forEach(function(t) {
                    t()
                })
            }

            function a(t) {
                function e(t) {
                    var e = {},
                        i = {};
                    return Object.keys(t).forEach(function(n) {
                        var r = t[n];
                        ge.isDynamic(r) ? i[n] = ge.unbox(r, n) : e[n] = r
                    }), {
                        dynamic: i,
                        static: e
                    }
                }

                function i(t) {
                    for (; p.length < t;) p.push(null);
                    return p
                }

                function n(t, e) {
                    var n;
                    if (y && pe.raise("context lost"), "function" == typeof t) return f.call(this, null, t, 0);
                    if ("function" == typeof e) {
                        if ("number" == typeof t) {
                            for (n = 0; n < t; ++n) f.call(this, null, e, n);
                            return
                        }
                        if (Array.isArray(t)) {
                            for (n = 0; n < t.length; ++n) f.call(this, t[n], e, n);
                            return
                        }
                        return f.call(this, t, e, 0)
                    }
                    if ("number" == typeof t) {
                        if (t > 0) return h.call(this, i(0 | t), 0 | t)
                    } else {
                        if (!Array.isArray(t)) return u.call(this, t);
                        if (t.length) return h.call(this, t, t.length)
                    }
                }
                pe(!!t, "invalid args to regl({...})"), pe.type(t, "object", "invalid args to regl({...})");
                var r = e(t.context || {}),
                    o = e(t.uniforms || {}),
                    s = e(t.attributes || {}),
                    a = e(function(t) {
                        function e(t) {
                            if (t in i) {
                                var e = i[t];
                                delete i[t], Object.keys(e).forEach(function(n) {
                                    i[t + "." + n] = e[n]
                                })
                            }
                        }
                        var i = Jt({}, t);
                        return delete i.uniforms, delete i.attributes, delete i.context, "stencil" in i && i.stencil.op && (i.stencil.opBack = i.stencil.opFront = i.stencil.op, delete i.stencil.op), e("blend"), e("depth"), e("cull"), e("stencil"), e("polygonOffset"), e("scissor"), e("sample"), i
                    }(t)),
                    l = {
                        gpuTime: 0,
                        cpuTime: 0,
                        count: 0
                    },
                    c = z.compile(a, s, o, r, l),
                    u = c.draw,
                    h = c.batch,
                    f = c.scope,
                    p = [];
                return Jt(n, {
                    stats: l
                })
            }

            function l(t, e) {
                var i = 0;
                z.procs.poll();
                var n = e.color;
                n && (v.clearColor(+n[0] || 0, +n[1] || 0, +n[2] || 0, +n[3] || 0), i |= Zo), "depth" in e && (v.clearDepth(+e.depth), i |= Jo), "stencil" in e && (v.clearStencil(0 | e.stencil), i |= ts), pe(!!i, "called regl.clear with no buffer specified"), v.clear(i)
            }

            function c(t) {
                if (pe("object" == typeof t && t, "regl.clear() takes an object as input"), "framebuffer" in t)
                    if (t.framebuffer && "framebufferCube" === t.framebuffer_reglType)
                        for (var e = 0; e < 6; ++e) K(Jt({
                            framebuffer: t.framebuffer.faces[e]
                        }, t), l);
                    else K(t, l);
                else l(null, t)
            }

            function u(t) {
                function e() {
                    function e() {
                        var t = Vt(X, e);
                        X[t] = X[X.length - 1], X.length -= 1, X.length <= 0 && n()
                    }
                    var i = Vt(X, t);
                    pe(i >= 0, "cannot cancel a frame twice"), X[i] = e
                }
                return pe.type(t, "function", "regl.frame() callback must be a function"), X.push(t), i(), {
                    cancel: e
                }
            }

            function h() {
                var t = H.viewport,
                    e = H.scissor_box;
                t[0] = t[1] = e[0] = e[1] = 0, A.viewportWidth = A.framebufferWidth = A.drawingBufferWidth = t[2] = e[2] = v.drawingBufferWidth, A.viewportHeight = A.framebufferHeight = A.drawingBufferHeight = t[3] = e[3] = v.drawingBufferHeight
            }

            function f() {
                A.tick += 1, A.time = d(), h(), z.procs.poll()
            }

            function p() {
                h(), z.procs.refresh(), S && S.update()
            }

            function d() {
                return (_e() - k) / 1e3
            }

            function m(t, e) {
                pe.type(e, "function", "listener callback must be a function");
                var i;
                switch (t) {
                    case "frame":
                        return u(e);
                    case "lost":
                        i = U;
                        break;
                    case "restore":
                        i = G;
                        break;
                    case "destroy":
                        i = V;
                        break;
                    default:
                        pe.raise("invalid event, must be one of frame,lost,restore,destroy")
                }
                return i.push(e), {
                    cancel: function() {
                        for (var t = 0; t < i.length; ++t)
                            if (i[t] === e) return i[t] = i[i.length - 1], void i.pop()
                    }
                }
            }
            var g = q(t);
            if (!g) return null;
            var v = g.gl,
                _ = v.getContextAttributes(),
                y = v.isContextLost(),
                b = Y(v, g);
            if (!b) return null;
            var w = N(),
                T = Yt(),
                x = b.extensions,
                S = Ko(v, x),
                k = _e(),
                C = v.drawingBufferWidth,
                P = v.drawingBufferHeight,
                A = {
                    tick: 0,
                    time: 0,
                    viewportWidth: C,
                    viewportHeight: P,
                    framebufferWidth: C,
                    framebufferHeight: P,
                    drawingBufferWidth: C,
                    drawingBufferHeight: P,
                    pixelRatio: g.pixelRatio
                },
                O = {},
                E = {
                    elements: null,
                    primitive: 4,
                    count: -1,
                    offset: 0,
                    instances: -1
                },
                $ = ye(v, x),
                D = ft(v, T, g),
                R = pt(v, x, D, T),
                M = jt(v, x, $, D, w),
                j = It(v, w, T, g),
                I = $t(v, x, $, function() {
                    z.procs.poll()
                }, A, T, g),
                L = xn(v, x, $, T, g),
                F = Rt(v, x, $, I, L, T),
                z = qt(v, w, x, $, D, R, I, F, O, M, j, E, A, S, g),
                B = Lt(v, F, z.procs.poll, A, _, x),
                H = z.next,
                W = v.canvas,
                X = [],
                U = [],
                G = [],
                V = [g.onDestroy],
                Q = null;
            W && (W.addEventListener(is, r, !1), W.addEventListener(ns, o, !1));
            var K = F.setFBO = a({
                framebuffer: ge.define.call(null, rs, "framebuffer")
            });
            p();
            var Z = Jt(a, {
                clear: c,
                prop: ge.define.bind(null, rs),
                context: ge.define.bind(null, os),
                this: ge.define.bind(null, ss),
                draw: a({}),
                buffer: function(t) {
                    return D.create(t, es, !1, !1)
                },
                elements: function(t) {
                    return R.create(t, !1)
                },
                texture: I.create2D,
                cube: I.createCube,
                renderbuffer: L.create,
                framebuffer: F.create,
                framebufferCube: F.createCube,
                attributes: _,
                frame: u,
                on: m,
                limits: $,
                hasExtension: function(t) {
                    return $.extensions.indexOf(t.toLowerCase()) >= 0
                },
                read: B,
                destroy: s,
                _gl: v,
                _refresh: p,
                poll: function() {
                    f(), S && S.update()
                },
                now: d,
                stats: T
            });
            return g.onDone(null, Z), Z
        }
        var Kt = {
                "[object Int8Array]": 5120,
                "[object Int16Array]": 5122,
                "[object Int32Array]": 5124,
                "[object Uint8Array]": 5121,
                "[object Uint8ClampedArray]": 5121,
                "[object Uint16Array]": 5123,
                "[object Uint32Array]": 5125,
                "[object Float32Array]": 5126,
                "[object Float64Array]": 5121,
                "[object ArrayBuffer]": 5121
            },
            Zt = function(t) {
                return Object.prototype.toString.call(t) in Kt
            },
            Jt = function(t, e) {
                for (var i = Object.keys(e), n = 0; n < i.length; ++n) t[i[n]] = e[i[n]];
                return t
            },
            te = ["gl", "canvas", "container", "attributes", "pixelRatio", "extensions", "optionalExtensions", "profile", "onDone"],
            ee = 33071,
            ie = 9728,
            ne = 9984,
            re = 9985,
            oe = 9986,
            se = 9987,
            ae = 5126,
            le = 32819,
            ce = 32820,
            ue = 33635,
            he = 34042,
            fe = {};
        fe[5120] = fe[5121] = 1, fe[5122] = fe[5123] = fe[36193] = fe[ue] = fe[le] = fe[ce] = 2, fe[5124] = fe[5125] = fe[ae] = fe[he] = 4;
        var pe = Jt(i, {
                optional: P,
                raise: e,
                commandRaise: x,
                command: S,
                parameter: r,
                commandParameter: k,
                constructor: c,
                type: s,
                commandType: C,
                isTypedArray: o,
                nni: a,
                oneOf: l,
                shaderError: y,
                linkError: b,
                callSite: m,
                saveCommandRef: w,
                saveDrawInfo: T,
                framebufferFormat: A,
                guessCommand: d,
                texture2D: $,
                textureCube: D
            }),
            de = 0,
            me = 0,
            ge = {
                DynamicVariable: R,
                define: L,
                isDynamic: F,
                unbox: z,
                accessor: I
            },
            ve = {
                next: "function" == typeof requestAnimationFrame ? function(t) {
                    return requestAnimationFrame(t)
                } : function(t) {
                    return setTimeout(t, 16)
                },
                cancel: "function" == typeof cancelAnimationFrame ? function(t) {
                    return cancelAnimationFrame(t)
                } : clearTimeout
            },
            _e = "undefined" != typeof performance && performance.now ? function() {
                return performance.now()
            } : function() {
                return +new Date
            },
            ye = function(t, e) {
                var i = 1;
                e.ext_texture_filter_anisotropic && (i = t.getParameter(34047));
                var n = 1,
                    r = 1;
                return e.webgl_draw_buffers && (n = t.getParameter(34852), r = t.getParameter(36063)), {
                    colorBits: [t.getParameter(3410), t.getParameter(3411), t.getParameter(3412), t.getParameter(3413)],
                    depthBits: t.getParameter(3414),
                    stencilBits: t.getParameter(3415),
                    subpixelBits: t.getParameter(3408),
                    extensions: Object.keys(e).filter(function(t) {
                        return !!e[t]
                    }),
                    maxAnisotropic: i,
                    maxDrawbuffers: n,
                    maxColorAttachments: r,
                    pointSizeDims: t.getParameter(33901),
                    lineWidthDims: t.getParameter(33902),
                    maxViewportDims: t.getParameter(3386),
                    maxCombinedTextureUnits: t.getParameter(35661),
                    maxCubeMapSize: t.getParameter(34076),
                    maxRenderbufferSize: t.getParameter(34024),
                    maxTextureUnits: t.getParameter(34930),
                    maxTextureSize: t.getParameter(3379),
                    maxAttributes: t.getParameter(34921),
                    maxVertexUniforms: t.getParameter(36347),
                    maxVertexTextureUnits: t.getParameter(35660),
                    maxVaryingVectors: t.getParameter(36348),
                    maxFragmentUniforms: t.getParameter(36349),
                    glsl: t.getParameter(35724),
                    renderer: t.getParameter(7937),
                    vendor: t.getParameter(7936),
                    version: t.getParameter(7938)
                }
            },
            be = function(t) {
                return Object.keys(t).map(function(e) {
                    return t[e]
                })
            },
            we = 5120,
            Te = 5121,
            xe = 5122,
            Se = 5123,
            ke = 5124,
            Ce = 5125,
            Pe = 5126,
            Ae = Q(8, function() {
                return []
            }),
            Oe = {
                alloc: J,
                free: tt,
                allocType: et,
                freeType: it
            },
            Ee = {
                shape: lt,
                flatten: at
            },
            $e = {
                int8: 5120,
                int16: 5122,
                int32: 5124,
                uint8: 5121,
                uint16: 5123,
                uint32: 5125,
                float: 5126,
                float32: 5126
            },
            De = {
                dynamic: 35048,
                stream: 35040,
                static: 35044
            },
            Re = Ee.flatten,
            Me = Ee.shape,
            je = 35044,
            Ie = 35040,
            Le = 5121,
            Fe = 5126,
            ze = [];
        ze[5120] = 1, ze[5122] = 2, ze[5124] = 4, ze[5121] = 1, ze[5123] = 2, ze[5125] = 4, ze[5126] = 4;
        var Ne = {
                points: 0,
                point: 0,
                lines: 1,
                line: 1,
                triangles: 4,
                triangle: 4,
                "line loop": 2,
                "line strip": 3,
                "triangle strip": 5,
                "triangle fan": 6
            },
            Be = 0,
            He = 1,
            We = 4,
            Xe = 5120,
            Ue = 5121,
            Ge = 5122,
            qe = 5123,
            Ye = 5124,
            Ve = 5125,
            Qe = 34963,
            Ke = 35040,
            Ze = 35044,
            Je = new Float32Array(1),
            ti = new Uint32Array(Je.buffer),
            ei = 5123,
            ii = 34467,
            ni = 3553,
            ri = 34067,
            oi = 34069,
            si = 6408,
            ai = 6406,
            li = 6407,
            ci = 6409,
            ui = 6410,
            hi = 32854,
            fi = 32855,
            pi = 36194,
            di = 32819,
            mi = 32820,
            gi = 33635,
            vi = 34042,
            _i = 6402,
            yi = 34041,
            bi = 35904,
            wi = 35906,
            Ti = 36193,
            xi = 33776,
            Si = 33777,
            ki = 33778,
            Ci = 33779,
            Pi = 35986,
            Ai = 35987,
            Oi = 34798,
            Ei = 35840,
            $i = 35841,
            Di = 35842,
            Ri = 35843,
            Mi = 36196,
            ji = 5121,
            Ii = 5123,
            Li = 5125,
            Fi = 5126,
            zi = 10242,
            Ni = 10243,
            Bi = 10497,
            Hi = 33071,
            Wi = 33648,
            Xi = 10240,
            Ui = 10241,
            Gi = 9728,
            qi = 9729,
            Yi = 9984,
            Vi = 9985,
            Qi = 9986,
            Ki = 9987,
            Zi = 33170,
            Ji = 4352,
            tn = 4353,
            en = 4354,
            nn = 34046,
            rn = 3317,
            on = 37440,
            sn = 37441,
            an = 37443,
            ln = 37444,
            cn = 33984,
            un = [Yi, Qi, Vi, Ki],
            hn = [0, ci, ui, li, si],
            fn = {};
        fn[ci] = fn[ai] = fn[_i] = 1, fn[yi] = fn[ui] = 2, fn[li] = fn[bi] = 3, fn[si] = fn[wi] = 4;
        var pn = gt("HTMLCanvasElement"),
            dn = gt("CanvasRenderingContext2D"),
            mn = gt("HTMLImageElement"),
            gn = gt("HTMLVideoElement"),
            vn = Object.keys(Kt).concat([pn, dn, mn, gn]),
            _n = [];
        _n[ji] = 1, _n[Fi] = 4, _n[Ti] = 2, _n[Ii] = 2, _n[Li] = 4;
        var yn = [];
        yn[hi] = 2, yn[fi] = 2, yn[pi] = 2, yn[yi] = 4, yn[xi] = .5, yn[Si] = .5, yn[ki] = 1, yn[Ci] = 1, yn[Pi] = .5, yn[Ai] = 1, yn[Oi] = 1, yn[Ei] = .5, yn[$i] = .25, yn[Di] = .5, yn[Ri] = .25, yn[Mi] = .5;
        var bn = 36161,
            wn = 32854,
            Tn = [];
        Tn[wn] = 2, Tn[32855] = 2, Tn[36194] = 2, Tn[33189] = 2, Tn[36168] = 1, Tn[34041] = 4, Tn[35907] = 4, Tn[34836] = 16, Tn[34842] = 8, Tn[34843] = 6;
        var xn = function(t, e, i, n, r) {
                function o(t) {
                    this.id = h++, this.refCount = 1, this.renderbuffer = t, this.format = wn, this.width = 0, this.height = 0, r.profile && (this.stats = {
                        size: 0
                    })
                }

                function s(e) {
                    var i = e.renderbuffer;
                    pe(i, "must not double destroy renderbuffer"), t.bindRenderbuffer(bn, null), t.deleteRenderbuffer(i), e.renderbuffer = null, e.refCount = 0, delete f[e.id], n.renderbufferCount--
                }

                function a(e, s) {
                    function a(e, n) {
                        var o = 0,
                            s = 0,
                            l = wn;
                        if ("object" == typeof e && e) {
                            var f = e;
                            if ("shape" in f) {
                                var p = f.shape;
                                pe(Array.isArray(p) && p.length >= 2, "invalid renderbuffer shape"), o = 0 | p[0], s = 0 | p[1]
                            } else "radius" in f && (o = s = 0 | f.radius), "width" in f && (o = 0 | f.width), "height" in f && (s = 0 | f.height);
                            "format" in f && (pe.parameter(f.format, c, "invalid renderbuffer format"), l = c[f.format])
                        } else "number" == typeof e ? (o = 0 | e, s = "number" == typeof n ? 0 | n : o) : e ? pe.raise("invalid arguments to renderbuffer constructor") : o = s = 1;
                        if (pe(o > 0 && s > 0 && o <= i.maxRenderbufferSize && s <= i.maxRenderbufferSize, "invalid renderbuffer size"), o !== h.width || s !== h.height || l !== h.format) return a.width = h.width = o, a.height = h.height = s, h.format = l, t.bindRenderbuffer(bn, h.renderbuffer), t.renderbufferStorage(bn, l, o, s), r.profile && (h.stats.size = Dt(h.format, h.width, h.height)), a.format = u[h.format], a
                    }

                    function l(e, n) {
                        var o = 0 | e,
                            s = 0 | n || o;
                        return o === h.width && s === h.height ? a : (pe(o > 0 && s > 0 && o <= i.maxRenderbufferSize && s <= i.maxRenderbufferSize, "invalid renderbuffer size"), a.width = h.width = o, a.height = h.height = s, t.bindRenderbuffer(bn, h.renderbuffer), t.renderbufferStorage(bn, h.format, o, s), r.profile && (h.stats.size = Dt(h.format, h.width, h.height)), a)
                    }
                    var h = new o(t.createRenderbuffer());
                    return f[h.id] = h, n.renderbufferCount++, a(e, s), a.resize = l, a._reglType = "renderbuffer", a._renderbuffer = h, r.profile && (a.stats = h.stats), a.destroy = function() {
                        h.decRef()
                    }, a
                }

                function l() {
                    be(f).forEach(function(e) {
                        e.renderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(bn, e.renderbuffer), t.renderbufferStorage(bn, e.format, e.width, e.height)
                    }), t.bindRenderbuffer(bn, null)
                }
                var c = {
                    rgba4: wn,
                    rgb565: 36194,
                    "rgb5 a1": 32855,
                    depth: 33189,
                    stencil: 36168,
                    "depth stencil": 34041
                };
                e.ext_srgb && (c.srgba = 35907), e.ext_color_buffer_half_float && (c.rgba16f = 34842, c.rgb16f = 34843), e.webgl_color_buffer_float && (c.rgba32f = 34836);
                var u = [];
                Object.keys(c).forEach(function(t) {
                    var e = c[t];
                    u[e] = t
                });
                var h = 0,
                    f = {};
                return o.prototype.decRef = function() {
                    --this.refCount <= 0 && s(this)
                }, r.profile && (n.getTotalRenderbufferSize = function() {
                    var t = 0;
                    return Object.keys(f).forEach(function(e) {
                        t += f[e].stats.size
                    }), t
                }), {
                    create: a,
                    clear: function() {
                        be(f).forEach(s)
                    },
                    restore: l
                }
            },
            Sn = 36160,
            kn = 36161,
            Cn = 3553,
            Pn = 34069,
            An = 36064,
            On = 36096,
            En = 36128,
            $n = 33306,
            Dn = 36053,
            Rn = 6402,
            Mn = [6408],
            jn = [];
        jn[6408] = 4;
        var In = [];
        In[5121] = 1, In[5126] = 4, In[36193] = 2;
        var Ln = 33189,
            Fn = 36168,
            zn = 34041,
            Nn = [32854, 32855, 36194, 35907, 34842, 34843, 34836],
            Bn = {};
        Bn[Dn] = "complete", Bn[36054] = "incomplete attachment", Bn[36057] = "incomplete dimensions", Bn[36055] = "incomplete, missing attachment", Bn[36061] = "unsupported";
        var Hn = 5126,
            Wn = 35632,
            Xn = 35633,
            Un = 35718,
            Gn = 35721,
            qn = 6408,
            Yn = 5121,
            Vn = 3333,
            Qn = 5126,
            Kn = "xyzw".split(""),
            Zn = 5121,
            Jn = 1,
            tr = 2,
            er = 0,
            ir = 1,
            nr = 2,
            rr = 3,
            or = 4,
            sr = "dither",
            ar = "blend.enable",
            lr = "blend.color",
            cr = "blend.equation",
            ur = "blend.func",
            hr = "depth.enable",
            fr = "depth.func",
            pr = "depth.range",
            dr = "depth.mask",
            mr = "colorMask",
            gr = "cull.enable",
            vr = "cull.face",
            _r = "frontFace",
            yr = "lineWidth",
            br = "polygonOffset.enable",
            wr = "polygonOffset.offset",
            Tr = "sample.alpha",
            xr = "sample.enable",
            Sr = "sample.coverage",
            kr = "stencil.enable",
            Cr = "stencil.mask",
            Pr = "stencil.func",
            Ar = "stencil.opFront",
            Or = "stencil.opBack",
            Er = "scissor.enable",
            $r = "scissor.box",
            Dr = "viewport",
            Rr = "profile",
            Mr = "framebuffer",
            jr = "vert",
            Ir = "frag",
            Lr = "elements",
            Fr = "primitive",
            zr = "count",
            Nr = "offset",
            Br = "instances",
            Hr = Mr + "Width",
            Wr = Mr + "Height",
            Xr = Dr + "Width",
            Ur = Dr + "Height",
            Gr = "drawingBufferWidth",
            qr = "drawingBufferHeight",
            Yr = [ur, cr, Pr, Ar, Or, Sr, Dr, $r, wr],
            Vr = 34962,
            Qr = 34963,
            Kr = 3553,
            Zr = 34067,
            Jr = 2884,
            to = 3042,
            eo = 3024,
            io = 2960,
            no = 2929,
            ro = 3089,
            oo = 32823,
            so = 32926,
            ao = 32928,
            lo = 5126,
            co = 35664,
            uo = 35665,
            ho = 35666,
            fo = 5124,
            po = 35667,
            mo = 35668,
            go = 35669,
            vo = 35670,
            _o = 35671,
            yo = 35672,
            bo = 35673,
            wo = 35674,
            To = 35675,
            xo = 35676,
            So = 35678,
            ko = 35680,
            Co = 4,
            Po = 1028,
            Ao = 1029,
            Oo = 2304,
            Eo = 2305,
            $o = 32775,
            Do = 32776,
            Ro = 519,
            Mo = 7680,
            jo = 0,
            Io = 1,
            Lo = 32774,
            Fo = 513,
            zo = 36160,
            No = 36064,
            Bo = {
                0: 0,
                1: 1,
                zero: 0,
                one: 1,
                "src color": 768,
                "one minus src color": 769,
                "src alpha": 770,
                "one minus src alpha": 771,
                "dst color": 774,
                "one minus dst color": 775,
                "dst alpha": 772,
                "one minus dst alpha": 773,
                "constant color": 32769,
                "one minus constant color": 32770,
                "constant alpha": 32771,
                "one minus constant alpha": 32772,
                "src alpha saturate": 776
            },
            Ho = ["constant color, constant alpha", "one minus constant color, constant alpha", "constant color, one minus constant alpha", "one minus constant color, one minus constant alpha", "constant alpha, constant color", "constant alpha, one minus constant color", "one minus constant alpha, constant color", "one minus constant alpha, one minus constant color"],
            Wo = {
                never: 512,
                less: 513,
                "<": 513,
                equal: 514,
                "=": 514,
                "==": 514,
                "===": 514,
                lequal: 515,
                "<=": 515,
                greater: 516,
                ">": 516,
                notequal: 517,
                "!=": 517,
                "!==": 517,
                gequal: 518,
                ">=": 518,
                always: 519
            },
            Xo = {
                0: 0,
                zero: 0,
                keep: 7680,
                replace: 7681,
                increment: 7682,
                decrement: 7683,
                "increment wrap": 34055,
                "decrement wrap": 34056,
                invert: 5386
            },
            Uo = {
                frag: 35632,
                vert: 35633
            },
            Go = {
                cw: Oo,
                ccw: Eo
            },
            qo = new Wt(!1, !1, !1, function() {}),
            Yo = 34918,
            Vo = 34919,
            Qo = 35007,
            Ko = function(t, e) {
                function i() {
                    return f.pop() || h.createQueryEXT()
                }

                function n(t) {
                    f.push(t)
                }

                function r(t) {
                    var e = i();
                    h.beginQueryEXT(Qo, e), p.push(e), c(p.length - 1, p.length, t)
                }

                function o() {
                    h.endQueryEXT(Qo)
                }

                function s() {
                    this.startQueryIndex = -1, this.endQueryIndex = -1, this.sum = 0, this.stats = null
                }

                function a() {
                    return d.pop() || new s
                }

                function l(t) {
                    d.push(t)
                }

                function c(t, e, i) {
                    var n = a();
                    n.startQueryIndex = t, n.endQueryIndex = e, n.sum = 0, n.stats = i, m.push(n)
                }

                function u() {
                    var t, e, i = p.length;
                    if (0 !== i) {
                        v.length = Math.max(v.length, i + 1), g.length = Math.max(g.length, i + 1), g[0] = 0, v[0] = 0;
                        var r = 0;
                        for (t = 0, e = 0; e < p.length; ++e) {
                            var o = p[e];
                            h.getQueryObjectEXT(o, Vo) ? (r += h.getQueryObjectEXT(o, Yo), n(o)) : p[t++] = o, g[e + 1] = r, v[e + 1] = t
                        }
                        for (p.length = t, t = 0, e = 0; e < m.length; ++e) {
                            var s = m[e],
                                a = s.startQueryIndex,
                                c = s.endQueryIndex;
                            s.sum += g[c] - g[a];
                            var u = v[a],
                                f = v[c];
                            f === u ? (s.stats.gpuTime += s.sum / 1e6, l(s)) : (s.startQueryIndex = u, s.endQueryIndex = f, m[t++] = s)
                        }
                        m.length = t
                    }
                }
                var h = e.ext_disjoint_timer_query;
                if (!h) return null;
                var f = [],
                    p = [],
                    d = [],
                    m = [],
                    g = [],
                    v = [];
                return {
                    beginQuery: r,
                    endQuery: o,
                    pushScopeStats: c,
                    update: u,
                    getNumPendingQueries: function() {
                        return p.length
                    },
                    clear: function() {
                        f.push.apply(f, p);
                        for (var t = 0; t < f.length; t++) h.deleteQueryEXT(f[t]);
                        p.length = 0, f.length = 0
                    },
                    restore: function() {
                        p.length = 0, f.length = 0
                    }
                }
            },
            Zo = 16384,
            Jo = 256,
            ts = 1024,
            es = 34962,
            is = "webglcontextlost",
            ns = "webglcontextrestored",
            rs = 1,
            os = 2,
            ss = 3;
        return Qt
    })
}, function(t, e, i) {
    var n, r, o;
    ! function(s) {
        "use strict";
        r = [i(0)], n = s, void 0 !== (o = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = o)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var r = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= r.slideCount) return !1;
            r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : !0 === n ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                r = this;
            r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
                left: e
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: e
            }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t({
                animStart: r.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === r.options.vertical ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, r, o, s, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = t * s + (e * a.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, r, o, s = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0, n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                    break;
                case "next":
                    r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var r in e) {
                    if (t < e[r]) {
                        t = i;
                        break
                    }
                    i = e[r]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                r = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(r, o) {
                if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft) return e = o, !1
            }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                    }, n.src = i
                })
            }
            var i, n, r, o, s = this;
            !0 === s.options.centerMode ? !0 === s.options.infinite ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), !0 === s.options.fade && (r > 0 && r--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(r, o), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, r, o = this,
                s = t("img[data-lazy]", o.$slider);
            s.length ? (i = s.first(), n = i.attr("data-lazy"), r = document.createElement("img"), r.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad()
            }, r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad())
            }, r.src = n) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function(e) {
            var i, n, r = this;
            n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
                currentSlide: i
            }), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, r = this,
                o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o)
                    if (n = r.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                        r.breakpoints.push(i), r.breakpointSettings[i] = o[e].settings
                    } r.breakpoints.sort(function(t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if ("boolean" == typeof t ? (e = t, t = !0 === e ? 0 : n.slideCount - 1) : t = !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                r = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, r) {
                e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, r, o, s = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[n] = r;
            else if ("multiple" === o) t.each(n, function(t, e) {
                s.options[t] = e
            });
            else if ("responsive" === o)
                for (i in r)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[i]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(r[i])
                    } a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, r, o = this;
            i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, r = this;
            if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow)) {
                for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(n.attr("data-slick-index"));
            if (r || (r = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(r), void i.asNavFor(r);
            i.slideHandler(r)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, r, o, s, a, l = null,
                c = this;
            if (e = e || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) {
                if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                    c.postSlide(n)
                }) : c.postSlide(n)));
                if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                    c.postSlide(n)
                }) : c.postSlide(n)));
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                    c.postSlide(r)
                })) : c.postSlide(r), void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(r)
                }) : c.postSlide(r)
            }
        }, e.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, r, o, s = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = e + n * r : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = e + n * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = n.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof r || void 0 === r ? n[t].slick = new e(n[t], r) : i = n[t].slick[r].apply(n[t].slick, o), void 0 !== i) return i;
            return n
        }
    })
}, function(t, e, i) {
    (function(n, r) {
        var o, s, a;
        ! function(n) {
            "object" == typeof t && "object" == typeof t.exports ? n(i(0)) : (s = [], o = n(r), void 0 !== (a = "function" == typeof o ? o.apply(e, s) : o) && (t.exports = a))
        }(function(t) {
            if (!t) return console.warn("Unslider needs jQuery");
            t.Unslider = function(e, i) {
                var r = this;
                return r._ = "unslider", r.defaults = {
                    autoplay: !1,
                    delay: 3e3,
                    speed: 750,
                    easing: "swing",
                    keys: {
                        prev: 37,
                        next: 39
                    },
                    nav: !0,
                    arrows: {
                        prev: '<a class="' + r._ + '-arrow prev">Prev</a>',
                        next: '<a class="' + r._ + '-arrow next">Next</a>'
                    },
                    animation: "horizontal",
                    selectors: {
                        container: "ul:first",
                        slides: "li"
                    },
                    animateHeight: !1,
                    activeClass: r._ + "-active",
                    swipe: !0,
                    swipeThreshold: .2
                }, r.$context = e, r.options = {}, r.$parent = null, r.$container = null, r.$slides = null, r.$nav = null, r.$arrows = [], r.total = 0, r.current = 0, r.prefix = r._ + "-", r.eventSuffix = "." + r.prefix + ~~(2e3 * Math.random()), r.interval = [], r.init = function(e) {
                    return r.options = t.extend({}, r.defaults, e), r.$container = r.$context.find(r.options.selectors.container).addClass(r.prefix + "wrap"), r.$slides = r.$container.children(r.options.selectors.slides), r.setup(), t.each(["nav", "arrows", "keys", "infinite"], function(e, i) {
                        r.options[i] && r["init" + t._ucfirst(i)]()
                    }), n.event.special.swipe && r.options.swipe && r.initSwipe(), r.options.autoplay && r.start(), r.calculateSlides(), r.$context.trigger(r._ + ".ready"), r.animate(r.options.index || r.current, "init")
                }, r.setup = function() {
                    r.$context.addClass(r.prefix + r.options.animation).wrap('<div class="' + r._ + '" />'), r.$parent = r.$context.parent("." + r._), "static" === r.$context.css("position") && r.$context.css("position", "relative"), r.$context.css("overflow", "hidden")
                }, r.calculateSlides = function() {
                    if (r.$slides = r.$container.children(r.options.selectors.slides), r.total = r.$slides.length, "fade" !== r.options.animation) {
                        var t = "width";
                        "vertical" === r.options.animation && (t = "height"), r.$container.css(t, 100 * r.total + "%").addClass(r.prefix + "carousel"), r.$slides.css(t, 100 / r.total + "%")
                    }
                }, r.start = function() {
                    return r.interval.push(setTimeout(function() {
                        r.next()
                    }, r.options.delay)), r
                }, r.stop = function() {
                    for (var t; t = r.interval.pop();) clearTimeout(t);
                    return r
                }, r.initNav = function() {
                    var e = t('<nav class="' + r.prefix + 'nav"><ol /></nav>');
                    r.$slides.each(function(i) {
                        var n = this.getAttribute("data-nav") || i + 1;
                        t.isFunction(r.options.nav) && (n = r.options.nav.call(r.$slides.eq(i), i, n)), e.children("ol").append('<li data-slide="' + i + '">' + n + "</li>")
                    }), r.$nav = e.insertAfter(r.$context), r.$nav.find("li").on("click" + r.eventSuffix, function() {
                        var e = t(this).addClass(r.options.activeClass);
                        e.siblings().removeClass(r.options.activeClass), r.animate(e.attr("data-slide"))
                    })
                }, r.initArrows = function() {
                    !0 === r.options.arrows && (r.options.arrows = r.defaults.arrows), t.each(r.options.arrows, function(e, i) {
                        r.$arrows.push(t(i).insertAfter(r.$context).on("click" + r.eventSuffix, r[e]))
                    })
                }, r.initKeys = function() {
                    !0 === r.options.keys && (r.options.keys = r.defaults.keys), t(document).on("keyup" + r.eventSuffix, function(e) {
                        t.each(r.options.keys, function(i, n) {
                            e.which === n && t.isFunction(r[i]) && r[i].call(r)
                        })
                    })
                }, r.initSwipe = function() {
                    var t = r.$slides.width();
                    "fade" !== r.options.animation && r.$container.on({
                        movestart: function(t) {
                            if (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) return !!t.preventDefault();
                            r.$container.css("position", "relative")
                        },
                        move: function(e) {
                            r.$container.css("left", -100 * r.current + 100 * e.distX / t + "%")
                        },
                        moveend: function(e) {
                            Math.abs(e.distX) / t > r.options.swipeThreshold ? r[e.distX < 0 ? "next" : "prev"]() : r.$container.animate({
                                left: -100 * r.current + "%"
                            }, r.options.speed / 2)
                        }
                    })
                }, r.initInfinite = function() {
                    var e = ["first", "last"];
                    t.each(e, function(t, i) {
                        r.$slides.push.apply(r.$slides, r.$slides.filter(':not(".' + r._ + '-clone")')[i]().clone().addClass(r._ + "-clone")["insert" + (0 === t ? "After" : "Before")](r.$slides[e[~~!t]]()))
                    })
                }, r.destroyArrows = function() {
                    t.each(r.$arrows, function(t, e) {
                        e.remove()
                    })
                }, r.destroySwipe = function() {
                    r.$container.off("movestart move moveend")
                }, r.destroyKeys = function() {
                    t(document).off("keyup" + r.eventSuffix)
                }, r.setIndex = function(t) {
                    return t < 0 && (t = r.total - 1), r.current = Math.min(Math.max(0, t), r.total - 1), r.options.nav && r.$nav.find('[data-slide="' + r.current + '"]')._active(r.options.activeClass), r.$slides.eq(r.current)._active(r.options.activeClass), r
                }, r.animate = function(e, i) {
                    if ("first" === e && (e = 0), "last" === e && (e = r.total), isNaN(e)) return r;
                    r.options.autoplay && r.stop().start(), r.setIndex(e), r.$context.trigger(r._ + ".change", [e, r.$slides.eq(e)]);
                    var n = "animate" + t._ucfirst(r.options.animation);
                    return t.isFunction(r[n]) && r[n](r.current, i), r
                }, r.next = function() {
                    var t = r.current + 1;
                    return t >= r.total && (t = 0), r.animate(t, "next")
                }, r.prev = function() {
                    return r.animate(r.current - 1, "prev")
                }, r.animateHorizontal = function(t) {
                    var e = "left";
                    return "rtl" === r.$context.attr("dir") && (e = "right"), r.options.infinite && r.$container.css("margin-" + e, "-100%"), r.slide(e, t)
                }, r.animateVertical = function(t) {
                    return r.options.animateHeight = !0, r.options.infinite && r.$container.css("margin-top", -r.$slides.outerHeight()), r.slide("top", t)
                }, r.slide = function(t, e) {
                    if (r.animateHeight(e), r.options.infinite) {
                        var i;
                        e === r.total - 1 && (i = r.total - 3, e = -1), e === r.total - 2 && (i = 0, e = r.total - 2), "number" == typeof i && (r.setIndex(i), r.$context.on(r._ + ".moved", function() {
                            r.current === i && r.$container.css(t, -100 * i + "%").off(r._ + ".moved")
                        }))
                    }
                    var n = {};
                    return n[t] = -100 * e + "%", r._move(r.$container, n)
                }, r.animateFade = function(t) {
                    r.animateHeight(t);
                    var e = r.$slides.eq(t).addClass(r.options.activeClass);
                    r._move(e.siblings().removeClass(r.options.activeClass), {
                        opacity: 0
                    }), r._move(e, {
                        opacity: 1
                    }, !1)
                }, r.animateHeight = function(t) {
                    r.options.animateHeight && r._move(r.$context, {
                        height: r.$slides.eq(t).outerHeight()
                    }, !1)
                }, r._move = function(t, e, i, n) {
                    return !1 !== i && (i = function() {
                        r.$context.trigger(r._ + ".moved")
                    }), t._move(e, n || r.options.speed, r.options.easing, i)
                }, r.init(i)
            }, t.fn._active = function(t) {
                return this.addClass(t).siblings().removeClass(t)
            }, t._ucfirst = function(t) {
                return (t + "").toLowerCase().replace(/^./, function(t) {
                    return t.toUpperCase()
                })
            }, t.fn._move = function() {
                return this.stop(!0, !0), t.fn[t.fn.velocity ? "velocity" : "animate"].apply(this, arguments)
            }, t.fn.unslider = function(e) {
                return this.each(function(i, n) {
                    var r = t(n);
                    if (!(t(n).data("unslider") instanceof t.Unslider)) {
                        if ("string" == typeof e && r.data("unslider")) {
                            e = e.split(":");
                            var o = r.data("unslider")[e[0]];
                            if (t.isFunction(o)) return o.apply(r, e[1] ? e[1].split(",") : null)
                        }
                        return r.data("unslider", new t.Unslider(r, e))
                    }
                })
            }
        })
    }).call(e, i(0), i(0))
}, function(t, e, i) {
    i(28), t.exports = i(29)
}]);