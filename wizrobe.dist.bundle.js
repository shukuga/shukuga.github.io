var wizrobe = function(t) {
    function e(e) {
        for (var i, n, r = e[0], a = e[1], o = 0, h = []; o < r.length; o++) n = r[o], Object.prototype.hasOwnProperty.call(s, n) && s[n] && h.push(s[n][0]), s[n] = 0;
        for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
        for (l && l(e); h.length;) h.shift()()
    }
    var i = {},
        s = {
            14: 0
        };

    function n(e) {
        if (i[e]) return i[e].exports;
        var s = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.e = function(t) {
        var e = [],
            i = s[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var r = new Promise((function(e, n) {
                    i = s[t] = [e, n]
                }));
                e.push(i[2] = r);
                var a, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.src = function(t) {
                    return n.p + "" + ({
                        0: "bestiary-ui",
                        1: "choice-ui",
                        2: "enchant-ui",
                        3: "equip-ui",
                        4: "hall-ui",
                        5: "suits-ui",
                        6: "inv-ui",
                        7: "minions-ui",
                        8: "player-ui",
                        9: "potions-ui",
                        10: "raid-ui",
                        11: "scraft-ui",
                        12: "skills-ui",
                        13: "spells-ui"
                    } [t] || t) + ".bundle.js"
                }(t);
                var l = new Error;
                a = function(e) {
                    o.onerror = o.onload = null, clearTimeout(h);
                    var i = s[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")", l.name = "ChunkLoadError", l.type = n, l.request = r, i[1](l)
                        }
                        s[t] = void 0
                    }
                };
                var h = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: o
                    })
                }), 12e4);
                o.onerror = o.onload = a, document.head.appendChild(o)
            } return Promise.all(e)
    }, n.m = t, n.c = i, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) n.d(i, s, function(e) {
                return t[e]
            }.bind(null, s));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n.oe = function(t) {
        throw console.error(t), t
    };
    var r = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [],
        a = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var o = 0; o < r.length; o++) e(r[o]);
    var l = a;
    return n(n.s = 93)
}([function(t, e, i) {
    "use strict";
    i.d(e, "B", (function() {
        return d
    })), i.d(e, "C", (function() {
        return p
    })), i.d(e, "G", (function() {
        return f
    })), i.d(e, "H", (function() {
        return m
    })), i.d(e, "I", (function() {
        return v
    })), i.d(e, "E", (function() {
        return g
    })), i.d(e, "y", (function() {
        return k
    })), i.d(e, "j", (function() {
        return O
    })), i.d(e, "t", (function() {
        return F
    })), i.d(e, "i", (function() {
        return P
    })), i.d(e, "D", (function() {
        return U
    })), i.d(e, "A", (function() {
        return J
    })), i.d(e, "h", (function() {
        return R
    })), i.d(e, "f", (function() {
        return q
    })), i.d(e, "x", (function() {
        return T
    })), i.d(e, "q", (function() {
        return l
    })), i.d(e, "r", (function() {
        return h
    })), i.d(e, "u", (function() {
        return c
    })), i.d(e, "w", (function() {
        return N
    })), i.d(e, "s", (function() {
        return u
    })), i.d(e, "c", (function() {
        return j
    })), i.d(e, "e", (function() {
        return _
    })), i.d(e, "g", (function() {
        return y
    })), i.d(e, "p", (function() {
        return E
    })), i.d(e, "v", (function() {
        return $
    })), i.d(e, "z", (function() {
        return M
    })), i.d(e, "F", (function() {
        return C
    })), i.d(e, "m", (function() {
        return L
    })), i.d(e, "b", (function() {
        return A
    })), i.d(e, "d", (function() {
        return S
    })), i.d(e, "a", (function() {
        return I
    })), i.d(e, "k", (function() {
        return w
    })), i.d(e, "l", (function() {
        return x
    })), i.d(e, "o", (function() {
        return b
    })), i.d(e, "n", (function() {
        return D
    }));
    var s = i(54),
        n = i.n(s),
        r = i(4);
    const a = new n.a,
        o = new n.a,
        l = "combat",
        h = "event",
        c = "unlock",
        u = "loot",
        d = 8,
        p = {
            event: 1,
            unlock: 2,
            loot: 4,
            combat: d
        },
        f = "buy",
        m = "tryuse",
        v = "use",
        g = "set_slot",
        y = "char_died",
        _ = "ally_died",
        b = "slain",
        x = "defeated",
        w = "damage_miss",
        k = "dmg_immune",
        O = "char_hit",
        A = "actchanged",
        S = "actimprove",
        C = "stopall",
        j = "act_done",
        T = "halt_act",
        I = "act_blocked",
        N = "exp_max",
        M = "item_atk",
        L = "delitem",
        D = "enc_start",
        E = "enter_loc",
        $ = "exit_loc",
        P = "chartitle",
        U = "newtitle",
        R = "charname",
        J = "levelup",
        q = "charclass",
        F = "stat";
    e.J = {
        log: null,
        init(t) {
            this.log = t.log, this.game = t, this.clearGameEvents(), a.addListener(u, this.onLoot, this), a.addListener(c, this.onUnlock, this), a.addListener(h, this.onEvent, this), a.addListener(J, this.onLevel, this), a.addListener(U, this.onNewTitle, this), a.addListener(S, this.actImproved, this), a.addListener(l, this.onCombat, this), a.addListener(O, this.onHit, this), a.addListener(b, this.enemySlain, this), a.addListener(x, this.onDefeat, this), a.addListener(w, this.onMiss, this), a.addListener(k, this.onImmune, this), a.addListener(D, this.onEnc, this)
        },
        clearGameEvents() {
            a.removeAllListeners()
        },
        onEvent(t) {
            t.hidden || this.log.log(t.name, t.desc, 1)
        },
        onUnlock(t) {
            t.hidden || "event" === t.type || this.log.log(Object(r.o)(t.type) + " Unlocked: " + t.name, null, 2)
        },
        onLoot(t) {
            let e = this.getDisplay(t);
            e && !Number.isNaN(e) && this.log.log("LOOT", e, 4)
        },
        getDisplay(t) {
            if (!t) return null;
            if ("object" == typeof t) {
                if (!Array.isArray(t)) return t.name; {
                    let e, i = [];
                    for (let s = t.length - 1; s >= 0; s--)(e = this.getDisplay(t[s])) && i.push(e);
                    if (i.length > 0) return i.join(", ")
                }
            } else if ("string" == typeof t) return t;
            return null
        },
        actionDone(t) {},
        onNewTitle(t, e) {
            this.log.log("Title Earned: " + Object(r.o)(t), null, 2), this.dispatch(F, "titles", e)
        },
        actImproved(t) {
            this.log.log(t.name + " Improved", null, 2)
        },
        onLevel(t, e) {
            this.log.log(t.name + " Level Up!", null, 1), this.dispatch(F, "level", e)
        },
        onDefeat(t) {
            this.log.log("Retreat", "", d)
        },
        onImmune(t) {
            this.log.log("IMMUNE", t, d)
        },
        onMiss(t) {
            this.log.log("", t, d)
        },
        onEnc(t, e) {
            this.log.log(t, e, d)
        },
        onCombat(t, e) {
            this.log.log(t, e, d)
        },
        onHit(t, e, i) {
            this.log.log("", t.name + " hit" + (i ? " by " + i + ": " : "") + e.toFixed(1), d)
        },
        enemySlain(t, e) {
            this.log.log(t.name + " slain", e && e.name ? " by " + e.name : "", d)
        },
        emit(...t) {
            a.emit.apply(a, t)
        },
        add(t, e, i) {
            a.addListener(t, e, i)
        },
        listen(t, e, i) {
            o.addListener(t, e, i)
        },
        removeListener(t, e) {
            o.removeListener(t, e)
        },
        dispatch(...t) {
            o.emit.apply(o, t)
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(28),
        n = i(4),
        r = (i(6), i(0));
    class a {
        constructor(t = "", e = "", i = 1, s = "") {
            this.text = e, this.title = t, this.type = i, this.subtype = s, this.count = 1
        }
    }
    var o = i(51),
        l = i(9),
        h = i(21);
    const c = /[^\.]\b\w+\.((?:\w|\.)+\b)/gi;
    class u {
        constructor(t) {
            this.items = t, this.unlocks = {};
            for (let t in this.items) this.mapUnlockers(this.items[t]);
            this.fringe = [];
            for (let t in this.items)
                if (!this.items[t].locked && this.unlocks[t]) this.fringe.push(this.items[t]);
                else {
                    let e = this.unlocks[t];
                    e && e.includes(t) && this.fringe.push(this.items[t])
                }
        }
        forceCheck() {
            for (let t in this.items) {
                this.items[t].disabled || this.changed(t)
            }
        }
        unlocked(t) {
            void 0 !== this.unlocks[t.id] && this.fringe.push(t)
        }
        checkFringe() {
            let t = this.fringe;
            for (let i = t.length - 1; i >= 0; i--) {
                var e = t[i];
                e.disabled ? Object(n.k)(t, i) : !0 === e.dirty && (e.dirty = !1, !1 === this.changed(e.id) && Object(n.k)(t, i))
            }
        }
        changed(t) {
            let e, i = this.unlocks[t];
            if (void 0 === i) return !1;
            for (let t = i.length - 1; t >= 0; t--)(e = this.items[i[t]]) ? (!1 === e.locked || !0 === e.disabled || x.tryUnlock(e)) && Object(n.k)(i, t) : (console.warn("BAD UNLOCK LINK: " + id), Object(n.k)(i, t));
            return 0 !== i.length || (this.unlocks[t] = void 0, !1)
        }
        mapUnlockers(t) {
            t.locked && !t.disabled && (t.require && this.markLinks(t, t.require), t.need && this.markLinks(t, t.need))
        }
        markLinks(t, e) {
            let i = typeof e;
            if ("string" === i) this.markUnlocker(e, t);
            else if ("function" === i) this.markFunc(t, e);
            else if (Array.isArray(e)) return e.forEach(e => this.markLinks(t, e), this)
        }
        markFunc(t, e) {
            let i, s = e.toString();
            for (; i = c.exec(s);) {
                let e = i[1].split(".")[0];
                "mod" !== e && "slot" !== e && this.markUnlocker(e, t)
            }(s.includes("this") || s.includes("s.")) && this.markUnlocker(t.id, t)
        }
        markUnlocker(t, e) {
            if (!t) return;
            let i = this.items[t];
            if (void 0 === i) return void((i = x.state.getTagList(t)) && i.forEach(t => this.markUnlocker(t.id, e)));
            let s = this.unlocks[t];
            void 0 === s && (this.unlocks[t] = s = []), s.includes(e.id) || s.push(e.id)
        }
    }
    var d, p = i(24),
        f = i(32),
        m = i(3),
        v = i(16),
        g = i(2),
        y = i(18);
    i.d(e, "b", (function() {
        return _
    })), i.d(e, "a", (function() {
        return b
    }));
    const _ = 200,
        b = _ / 1e3;
    var x = e.c = {
        toJSON() {
            return JSON.stringify(this.state)
        },
        state: null,
        get items() {
            return this._items
        },
        loaded: !1,
        log: new class {
            constructor(t = null) {
                t && Object.assign(this, t), this.items = this.items || [], this.maxItems = this.maxItems || 100, this.initCounts()
            }
            initCounts() {
                this.counts = this.counts || {};
                for (let t in r.C) this.counts[r.C[t]] = 0
            }
            clear(t) {
                t ? this.cut(t, this.items.length) : (this.items.splice(0, this.items.length), this.initCounts())
            }
            log(t = "", e = "", i = 1, s = null) {
                this.tryMatch(t, e, i) || (this.items.push(new a(t, e, i, s)), ++this.counts[i] >= this.maxItems + 50 && this.cut(i))
            }
            cut(t, e = 50) {
                let i = this.items.length,
                    s = 0,
                    n = [];
                for (var r = 0; r < i;) {
                    var a = this.items[r++];
                    if (a.type === t) {
                        if (++s >= e) break
                    } else n.push(a)
                }
                this.counts[t] -= s, this.items = r < i ? n.concat(this.items.slice(r)) : n
            }
            tryMatch(t, e, i) {
                for (let n = this.items.length - 1; n >= 0; n--) {
                    var s = this.items[n];
                    if (0 != (i & s.type)) return s.title === t && s.text === e && (s.count++, !0)
                }
            }
            logItem(t) {
                this.tryMatch(t.title, t.text, t.type) || (this.items.push(t), ++this.counts[type] >= this.maxItems + 50 && this.cut(type))
            }
        },
        runner: null,
        get player() {
            return this.state.player
        },
        addTimer(t) {
            this.runner.addTimer(t)
        },
        reset() {
            this.loaded = !1, this.state = null, this._items = null
        },
        load(t = null, e = null) {
            return this.reset(), this.log.clear(), r.J.init(this), this.runner = null, this.loader = s.a.loadGame(t).then(i => (this.state = new o.b(i, t), this.itemGen = new h.a(this.state), this._items = this.state.items, this.runner = this.state.runner, e && this.addData(e), this.restoreMods(), d = new u(this._items), r.J.add(r.u, d.unlocked, d), d.forceCheck(), r.J.add(r.p, this.enterLoc, this), r.J.add(r.v, this.enterLoc, this), r.J.add(r.E, this.setSlot, this), r.J.add(r.m, this.onDelete, this), this.loaded = !0, this), t => {
                console.error(t.message + "\n" + t.stack)
            })
        },
        logStat(t, e) {
            let i = this.getData(t);
            i ? (e && Object(n.h)(i, "LOG STAT"), console.warn(t + " value: " + i.value), console.log(i.constructor.name)) : console.warn("STAT MISSING: " + t)
        },
        restoreMods() {
            let t = this.state.items;
            this.state.player.begin();
            for (let i in t) {
                var e = t[i];
                e.locked || e.disabled || e.instance || e.isRecipe || e.value > 0 && (e.mod && this.addMod(e.mod, e.value), e.lock && this.lock(e.lock, e.value))
            }
            for (let t of this.state.equip) t.mod && this.addMod(t.mod, 1)
        },
        addData(t) {
            for (let e in t) {
                let i = t[e];
                this.state.addItem(i)
            }
        },
        setSlot(t) {
            let e = this.state.getSlot(t.slot);
            return e && this.remove(e, 1), this.state.setSlot(t.slot, t), this.payCost(t.cost), t.amount(this)
        },
        enterLoc(t, e = !0) {
            let i = "dungeon" === t.type ? this.state.raid : this.state.explore;
            e ? (i.enter(t), this.setAction(i)) : (i.locale = null, this.haltAction(i))
        },
        update() {
            let t = Date.now(),
                e = Math.min((t - this.lastUpdate) / 1e3, 1);
            this.lastUpdate = t, this.state.player.update(e), this.state.minions.update(e), this.runner.update(e), this.doResources(this.state.resources, e), this.doResources(this.state.playerStats, e), this.doResources(this.state.stressors, e), d.checkFringe()
        },
        doResources(t, e) {
            let i;
            for (let s = t.length - 1; s >= 0; s--) !1 !== (i = t[s]).locked || i.disabled || 0 !== i.rate.value && i.amount(this, i.rate.value * e)
        },
        toggleAction(t) {
            this.runner.toggleAct(t)
        },
        doRest() {
            this.runner.tryAdd(this.state.getSlot(o.a))
        },
        haltAction(t) {
            this.runner.stopAction(t)
        },
        setAction(t) {
            this.runner.setAction(t)
        },
        filled(t, e, i) {
            if (Array.isArray(t)) {
                for (let s = t.length - 1; s >= 0; s--)
                    if (!this.filled(t[s], e, i)) return !1;
                return !0
            }
            let s = this.getData(t);
            return void 0 === s ? void 0 === (s = this.state.getTagList(t)) || this.filled(s, e, t) : !s.rate || !e.effect || s.rate.value >= 0 ? s.maxed() : !(i = e.effect[i || t]) || s.filled(i)
        },
        disable(t) {
            if (Array.isArray(t))
                for (let e of t) this.disable(e);
            else {
                if ("string" == typeof t) {
                    let e = this.getData(t);
                    if (!e) {
                        let e = this.state.getTagList(t);
                        if (e)
                            for (let t of e) this.disable(t);
                        return
                    }
                    t = e
                }
                t && !t.disabled && (t.disabled = !0, t.slot && this.state.getSlot(t.slot, t.type) === t && this.remove(t, 1), t.running && this.runner.stopAction(t), t == this.state.raid.dungeon && this.state.raid.setDungeon(null), t instanceof p.a || t instanceof f.a ? this.remove(t, t.value) : t.mod && this.removeMod(t.mod, t.value))
            }
        },
        removeAll(t) {
            if ("object" == typeof t) this.remove(t, t.value);
            else if (Array.isArray(t)) t.forEach(this.removeAll, this);
            else {
                let e = this.getData(t);
                e ? this.remove(t, t.value) : (e = this.state.getTagList(t)) && e.forEach(this.removeAll, this)
            }
        },
        tryBuy(t, e = !1) {
            return !1 !== this.canPay(t.buy) && (this.payCost(t.buy), t.isRecipe && this.create(t, 1, e), t.owned = !0, t.slot && !this.state.getSlot(t.slot) && this.setSlot(t), !0)
        },
        use(t, e = null) {
            t.onUse(this, e || this.state.inventory)
        },
        tryItem(t) {
            if (t) return "dungeon" === t.type || "locale" === t.type ? this.enterLoc(t) : !!this.canUse(t) && void(t.instance ? t.onUse(this, this.state.inventory) : t.buy && !t.owned ? this.tryBuy(t) : t.isRecipe ? this.craft(t) : t.perpetual || t.length > 0 ? this.setAction(t) : t.slot ? this.setSlot(t) : (this.payCost(t.cost), t.amount(this)))
        },
        craft(t) {
            if (!this.canPay(t.cost)) return !1;
            this.payCost(t.cost), this.create(t)
        },
        onDelete(t) {
            this.state.deleteItem(t)
        },
        instance(t) {
            return "string" == typeof t && (t = this.state.getData(t)), this.itemGen.instance(t)
        },
        create(t, e = 1, i = !1) {
            if (t.type === g.h) t.onCreate && t.onCreate(this, v.a, i);
            else {
                var s = this.itemGen.instance(t);
                s && this.state.inventory.add(s), r.J.emit(r.s, s)
            }
        },
        tryUseOn(t, e) {
            null != e && (t.buy && !t.owned ? (this.payCost(t.buy), t.owned = !0) : t.length ? this.runner.useOn(t, e) : (this.payCost(t.cost), this.useOn(t, e)))
        },
        useOn(t, e) {
            null != e && ("function" == typeof t.useOn && t.useOn(e), t.value++, console.log("USING: " + t.id + " with " + e.id), t.mod && e.permVars(t.mod), t.effect && e.permVars(t.effect))
        },
        fillItem(t) {
            let e = this.getData(t);
            e && e.max && e.max.value - e.value > 0 && e.amount(this, e.max.value - e.value)
        },
        doLog(t) {
            r.J.emit(r.r, t)
        },
        sellPrice(t) {
            let e = t.sell || t.cost || 5 * t.level || 5;
            return "object" == typeof e && (e = e.gold || t.level || 1), Math.ceil(e * this.state.sellRate)
        },
        trySell(t, e, i = 1) {
            return !(t.value < 1 && !t.instance) && (i > t.value && (i = t.valueOf()), this.getData("gold").value += i * this.sellPrice(t), t.instance ? (t.value -= i, e && (!t.stack || t.value <= 0) && e.remove(t)) : this.remove(t, i), !0)
        },
        remove(t, e = 1) {
            let i = "string" == typeof t ? this.getData(t) : t;
            (i || (i = (i = this.state.getTagList(t)) ? i.find(t => !t.disabled && t.value >= e) : null)) && (i.slot && this.state.getSlot(i.slot) === i && this.state.setSlot(i.slot, null), i.cost && i.cost.space && this.getData("space").value.add(-e * i.cost.space), i.remove(e), i.mod && this.addMod(i.mod, -e), i.lock && this.unlock(i.lock, e), i.dirty = !0)
        },
        tryUnlock(t) {
            if (t.disabled || t.locks > 0) return !1;
            let e = t.require || t.need;
            return !(e && !this.unlockTest(e, t)) && (t.doUnlock(this), !0)
        },
        modChanged(t) {
            let e = t.value;
            t.mod && this.removeMod(t.mod, e), t.lock && this.unlock(t.lock)
        },
        unlockTest(t, e = null) {
            let i = typeof t;
            if ("function" === i) return t(this._items, e, this.state);
            if ("string" === i) {
                let e = this.getData(t);
                return null == e ? !!(e = this.state.getTagList(t)) && e.some(this.unlockTest, this) : "resource" === e.type || "action" === e.type ? !1 === e.locked : e.value > 0
            }
            if (Array.isArray(t)) return t.every(t => this.unlockTest(t, e), this);
            if ("object" === i) {
                if (t.id) return "resource" === t.type || "action" === t.type ? !1 === t.locked : t.value > 0;
                let e, i;
                for (let s in t)
                    if ((i = this.getData(s)) && (e = t[s], i.value < e)) return !1;
                return !0
            }
            return null != t.type ? "resource" === t.type || "action" === t.type ? !t.locked : t.value > 0 : void 0
        },
        applyEffect(t, e = 1) {
            if ("object" == typeof t) {
                if (Array.isArray(t)) {
                    for (let i of t) this.applyEffect(i, e);
                    return
                }
                let i, s;
                for (let n in t) i = this.getData(n), s = t[n], null == i ? "title" === n ? this.state.player.addTitle(s) : "log" === n ? r.J.emit(r.r, s) : this.applyToTag(n, s, e) : ("number" == typeof s || s instanceof l.b ? i.amount(this, s * e) : !0 === s ? (i.doUnlock(this), i.onUse(this)) : s instanceof y.b ? s.roll(this.getData("luck").valueOf()) && i.amount(this, 1) : i.applyVars(s, e), i.dirty = !0)
            } else if ("string" == typeof t) {
                let i = this.getData(t);
                void 0 !== i ? i.amount(this, e) : this.listGet(this.getTagList(t), e)
            }
        },
        applyToTag(t, e, i) {
            let s = this.state.getTagList(t);
            if (s)
                for (let t = s.length - 1; t >= 0; t--) s[t].applyVars(e, i), s[t].dirty = !0
        },
        removeMod(t, e = 1) {
            this.addMod(t, -e)
        },
        addMod(t, e = 1) {
            if (t)
                if (Array.isArray(t))
                    for (let i of t) this.addMod(i, e);
                else if ("object" == typeof t)
                for (let s in t) {
                    var i = this.getData(s);
                    void 0 === i ? this.modTag(s, t[s], e) : !0 === t[s] ? i.doUnlock(this) : i.applyMods ? (i.applyMods(t[s], e), i.dirty = !0) : console.warn("no applyMods func: " + i)
                } else if ("string" == typeof t) {
                    let e = this.getData(t);
                    if (e) console.warn("!!!!!!!!!!!!!!ADDING NUMBER MOD: " + t), e.amount(this, 1);
                    else {
                        let e = this.getTagList(t);
                        e && e.forEach(this.addMod, this)
                    }
                }
        },
        listGet(t, e = 1) {
            if (t)
                for (let i = t.length - 1; i >= 0; i--) t[i].amount(this, e)
        },
        modTag(t, e, i) {
            let s = this.state.getTagList(t);
            if (s)
                for (let t = s.length - 1; t >= 0; t--) s[t].applyMods(e, i), s[t].dirty = !0
        },
        canRun(t) {
            if (t.canRun) return t.canRun(this, b);
            console.error(t.id + " missing canRun()")
        },
        canUse(t) {
            if (t.canUse) return t.canUse(this);
            console.error(t.id + " missing canUse()")
        },
        payCost(t, e = 1) {
            if (null == t) return;
            if (Array.isArray(t)) return t.forEach(t => this.payCost(t, e), this);
            let i;
            if ("object" == typeof t) {
                if (t instanceof m.a) {
                    var s = this.getData("gold");
                    return s.value -= t.value * e, void(s.dirty = !0)
                }
                for (let s in t)
                    if (i = this.getData(s)) {
                        if (i.instance || i.isRecipe) {
                            this.payInst(s, t[s] * e);
                            continue
                        }
                        isNaN(t[s]) ? i.applyVars(t[s], -e) : this.remove(i, t[s] * e), i.dirty = !0
                    } else this.payInst(s, t[s])
            } else {
                if ("boolean" == typeof t) return;
                isNaN(t) || ((i = this.getData("gold")).value -= t * e, i.dirty = !0)
            }
        },
        payInst(t, e) {
            var i = this.state.inventory.find(t, !0);
            i ? this.state.inventory.removeQuant(i, e) : console.warn("QUANT NOT FOUND: " + t)
        },
        canPay(t, e = 1) {
            if (Array.isArray(t)) return t.every(t => this.canPay(t, e), this);
            let i;
            if ("object" == typeof t) {
                if (t instanceof m.a) return this.getData("gold").value >= t.value * e;
                for (let n in t) {
                    var s = t[n];
                    if (!(i = this.state.getData(n))) return !1;
                    if ((i.instance || i.isRecipe) && !(i = this.state.inventory.findMatch(i))) return !1;
                    if (!isNaN(s) || s instanceof m.a) {
                        if (!i.canPay(s * e)) return !1
                    } else if (!this.canPayObj(i, s, e)) return !1
                }
            } else {
                if ("boolean" == typeof t) return !0;
                if (!isNaN(t)) return (i = this.getData("gold")) || console.error("Error: Gold is missing"), i.value >= t * e
            }
            return !0
        },
        canPayObj(t, e, i = 1) {
            if (e instanceof m.a || !isNaN(e)) return t.value >= e;
            for (let n in e) {
                var s = e[n];
                if (!isNaN(s) || s instanceof m.a) {
                    if (t.value < s * i) return !1
                } else if ("object" == typeof s && !this.canPayObj(t[n], s, i)) return !1
            }
            return !0
        },
        canEquip(t) {
            let e = this.state.inventory.includes(t) ? 1 : 0;
            return this.state.equip.replaceCount(t) <= this.state.inventory.freeSpace() + e
        },
        equip(t, e = null) {
            if (!this.canEquip(t)) return !1;
            console.log("equip:" + t.id + " it.type: " + t.type + " it.kind: " + t.kind);
            let i = this.state.equip.equip(t);
            i && ((e || this.state.inventory).remove(t), this.onUnequip(i), t.equip(this))
        },
        onUnequip(t) {
            if (t && "boolean" != typeof t)
                if (Array.isArray(t))
                    for (let e = t.length - 1; e >= 0; e--) this.onUnequip(t[e]);
                else this.state.inventory.add(t), t.unequip(this)
        },
        unequip(t, e) {
            if (this.state.inventory.full()) return !1;
            let i = this.state.player.weapon;
            this.onUnequip(this.state.equip.remove(e, t)), e && e === i && (this.player.weapon = this.state.equip.getWeapon())
        },
        take(t) {
            return this.state.inventory.add(t)
        },
        getLoot(t, e = null) {
            if (!t) return null;
            if (e = e || this.state.inventory, "object" == typeof t && t.stack) {
                let i = e.findMatch(t);
                if (i) return void i.value++
            }
            let i = this.itemGen.getLoot(t);
            null != i && (r.J.emit(r.s, i), e.add(i))
        },
        unlock(t) {
            this.lock(t, -1)
        },
        lock(t, e = 1) {
            if (Array.isArray(t)) t.forEach(t => this.lock(t, e), this);
            else if ("object" == typeof t) t.locks += e, t.dirty = !0;
            else {
                let i = this.getData(t);
                i ? this.lock(i) : (i = this.state.getTagList(t)) && i.forEach(t => this.lock(t, e), this)
            }
        },
        filterItems(t) {
            let e = [],
                i = this._items;
            for (let s in i) t(i[s]) && e.push(i[s]);
            return e
        },
        getData(t) {
            return this._items[t] || this.state[t]
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "j", (function() {
        return n
    })), i.d(e, "f", (function() {
        return r
    })), i.d(e, "k", (function() {
        return y
    })), i.d(e, "b", (function() {
        return m
    })), i.d(e, "d", (function() {
        return g
    })), i.d(e, "g", (function() {
        return v
    })), i.d(e, "e", (function() {
        return d
    })), i.d(e, "l", (function() {
        return o
    })), i.d(e, "i", (function() {
        return a
    })), i.d(e, "m", (function() {
        return l
    })), i.d(e, "c", (function() {
        return h
    })), i.d(e, "o", (function() {
        return c
    })), i.d(e, "h", (function() {
        return u
    })), i.d(e, "a", (function() {
        return p
    })), i.d(e, "n", (function() {
        return f
    })), i.d(e, "p", (function() {
        return x
    })), i.d(e, "u", (function() {
        return w
    })), i.d(e, "r", (function() {
        return k
    })), i.d(e, "t", (function() {
        return O
    })), i.d(e, "q", (function() {
        return A
    })), i.d(e, "s", (function() {
        return S
    }));
    const s = {
        mana: {
            id: "lore",
            reqs: 2
        }
    };
    s.arcane = s.lore = s.mana;
    const n = "potion",
        r = "item",
        a = "npc",
        o = "resource",
        l = "skill",
        h = "enc",
        c = "wearable",
        u = "monster",
        d = "suit",
        p = "armor",
        f = "weapon",
        m = "dungeon",
        v = "locale",
        g = "explore",
        y = "raid",
        _ = [0, 3, 6, 11, 20],
        b = {
            arcane: "mana",
            swamp: ["shadow", "water"],
            plains: "light",
            woods: "nature",
            holy: "light",
            mountains: ["fire", "earth", "air"],
            hills: ["earth", "air"],
            cave: ["shadow", "earth"],
            sea: "water",
            town: ["blood", "mana"],
            humanoid: "blood",
            undead: "shadow",
            ghost: "spirit",
            construct: "craft",
            dragon: "fire",
            beast: "nature",
            magicbeast: ["mana", "nature"]
        },
        x = (t, e) => {
            if (Array.isArray(t)) {
                for (let s = t.length - 1; s >= 0; s--) {
                    var i = t[s];
                    if (i && i == e.type || i === e.kind || i === e.slot || e.hasTag(i)) return !0
                }
                return !1
            }
            return t === e.type || t === e.kind || t === e.slot || e.hasTag(targ)
        },
        w = t => {
            for (let e = _.length - 1; e >= 0; e--)
                if (t >= _[e]) return t - _[e]
        },
        k = (t = 1) => {
            for (let e = _.length - 1; e >= 0; e--)
                if (t >= _[e]) return e
        },
        O = t => s[t] || t,
        A = t => b[t] || t,
        S = (t, e) => {
            e = k(e);
            let i = C[t];
            return i && (i = i[e]) ? i : (i = C.other)[e] || "gems"
        },
        C = {
            shadow: {
                0: "bonedust",
                1: "bones",
                2: "shadowgem",
                3: "bodies"
            },
            nature: {
                0: "herbs",
                1: "naturegem"
            },
            fire: {
                1: "firegem",
                5: "firerune"
            },
            earth: {
                1: "earthgem",
                5: "earthrune"
            },
            water: {
                1: "watergem",
                5: "waterrune"
            },
            air: {
                1: "airgem",
                5: "airrune"
            },
            spirit: {
                1: "bonedust",
                2: "spiritgem",
                3: "souls"
            },
            light: {
                1: "lightgem",
                4: "sindel"
            },
            blood: {
                2: "bloodgem",
                3: "souls",
                5: "ichor"
            },
            other: {
                0: "gold",
                1: "gems",
                2: "managem",
                3: "runestones"
            }
        }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return r
    }));
    var s = i(13),
        n = i(4);
    class r {
        toJSON() {
            if (0 === this._basePct) return this._base;
            return {
                base: this._base,
                pct: this._basePct
            }
        }
        toString() {
            return Object(s.d)(this.value)
        }
        get id() {
            return this._id
        }
        set id(t) {
            this._id = t
        }
        get value() {
            return !0 === this._pos ? Math.max((this._base + this._mBase) * (1 + this._basePct + this._mPct), 0) : (this._base + this._mBase) * (1 + this._basePct + this._mPct)
        }
        set value(t) {}
        valueOf() {
            return !0 === this._pos ? Math.max((this._base + this._mBase) * (1 + this._basePct + this._mPct), 0) : (this._base + this._mBase) * (1 + this._basePct + this._mPct)
        }
        get base() {
            return this._base
        }
        set base(t) {
            this._base = t
        }
        get basePct() {
            return this._basePct
        }
        set basePct(t) {
            this._basePct = t
        }
        get mBase() {
            return this._mBase
        }
        get mPct() {
            return this._mPct
        }
        get mods() {
            return this._mods
        }
        set mods(t) {
            for (let i in t) {
                var e = t[i];
                t[i] = e instanceof Mod ? e : new Mod(t[i])
            }
            this._mods = t
        }
        get pos() {
            return this._pos
        }
        set pos(t) {
            this._pos = t
        }
        constructor(t = null, e, i) {
            t && ("object" == typeof t ? (this.base = t.base, this.basePct = t.pct) : isNaN(t) || (this.base = Number(t))), e && (this.id = e), i && (this.pos = i), this.base || (this.base = 0), this.basePct || (this.basePct = 0), this.mods || (this.mods = {}), this.recalc()
        }
        set(t) {
            this._base = t
        }
        add(t) {
            this._base += t
        }
        perm(t) {
            t.bonusTot || t.pctTot ? (this.base += t.bonusTot, this.basePct += t.pctTot) : "number" == typeof t && (this.base += t)
        }
        apply(t, e = 1) {
            if (t instanceof r && t.id) return this.addMod(t, e);
            "number" != typeof t ? "object" == typeof t ? (this.base += e * (t.bonus || t.value || 0), this.basePct += e * (t.pct || 0)) : (console.log("UNKNOWN MOD: " + typeof t), Object(n.h)(t)) : this.base += e * t
        }
        addMod(t, e = 1) {
            t.id ? (this.mods[t.id] = t, this.recalc()) : this.apply(t, e)
        }
        removeMod(t) {
            void 0 !== this.mods[t.id] && (this.mods[t.id] = void 0, this.recalc())
        }
        canApply(t, e) {
            return this.delValue(e * (t.bonus || 0), e * (t.pct || 0)) >= 0
        }
        delValue(t = 0, e = 0) {
            return (this._base + this._mBase + t) * (1 + this._basePct + this._mPct + e)
        }
        recalc() {
            let t = 0,
                e = 0;
            for (let s in this._mods) {
                var i = this._mods[s];
                void 0 !== i && (e += i.count * i.pct, t += i.count * i.bonus)
            }
            this._mPct = e, this._mBase = t
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return n
    })), i.d(e, "i", (function() {
        return r
    })), i.d(e, "j", (function() {
        return a
    })), i.d(e, "f", (function() {
        return o
    })), i.d(e, "e", (function() {
        return l
    })), i.d(e, "g", (function() {
        return h
    })), i.d(e, "c", (function() {
        return c
    })), i.d(e, "n", (function() {
        return u
    })), i.d(e, "m", (function() {
        return d
    })), i.d(e, "d", (function() {
        return p
    })), i.d(e, "h", (function() {
        return m
    })), i.d(e, "l", (function() {
        return v
    })), i.d(e, "o", (function() {
        return g
    })), i.d(e, "k", (function() {
        return y
    })), i.d(e, "b", (function() {
        return _
    }));
    var s = i(7);
    const n = (t, e) => t.name < e.name ? -1 : 1,
        r = (t, e) => {
            let i = t.length,
                s = [];
            for (let r = 0; r < i; r++) {
                var n = e(t[r]);
                null != n && s.push(n)
            }
            return s
        },
        a = (t, e) => {
            let i = e.length;
            for (let n = 0; n < i; n++) {
                var s = e[n];
                null != s && t.push(s)
            }
            return t
        },
        o = (t, e) => {
            for (let s = e.length - 1; s >= 0; s--) {
                var i = e[s];
                t.hasOwnProperty(i) || (t[i] = null)
            }
        },
        l = (t, e = null) => {
            let i;
            if (!e) {
                let i = Object.getPrototypeOf(t);
                e = Array.isArray(t) ? [] : i ? Object.create(i) : {}
            }
            for (let r in t) {
                i = t[r];
                var n = Object(s.d)(e, r);
                (!n || n.writable && void 0 !== n.set) && (null == i ? e[r] = i : "object" == typeof i ? i.clone && "function" == typeof i.clone ? e[r] = i.clone.call(i) : e[r] = l(i) : e[r] = i)
            }
            return e
        },
        h = (t, e) => {
            for (let i = t.length - 1; i >= 0; i--)
                if (e(t[i])) {
                    let e = t[i];
                    return t.splice(i, 1), e
                } return null
        },
        c = (t, e) => {
            for (var i = e; i !== Object.prototype;) {
                for (let r of Object.getOwnPropertyNames(i))
                    if ("_" !== r[0] && "function" != typeof e[r]) {
                        var n = Object(s.d)(t, r);
                        n && !n.writable && void 0 === n.set || (t[r] = e[r])
                    } i = Object.getPrototypeOf(i)
            }
            return t
        },
        u = t => {
            if ("object" == typeof t)
                for (let i in t) {
                    var e = t[i];
                    i.includes(".") && d(t, i), "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype && u(e)
                }
        },
        d = (t, e) => {
            let i = t[e];
            delete t[e];
            let s = e.split("."),
                n = s.length - 1;
            for (let e = 0; e < n; e++) {
                var r = t[s[e]];
                null == r ? r = {} : "object" == typeof r && Object.getPrototypeOf(r) === Object.prototype || (r = {
                    value: r
                }), t = t[s[e]] = r
            }
            t[s[n]] = i
        },
        p = (t, e) => {
            for (var i = e; i !== Object.prototype;) {
                for (let r of Object.getOwnPropertyNames(i))
                    if ("_" !== r[0]) {
                        var n = Object(s.d)(t, r);
                        n && !n.writable && void 0 === n.set || (t[r] = e[r])
                    } i = Object.getPrototypeOf(i)
            }
            return t
        },
        f = t => {
            if (Array.isArray(t)) return "[ \n" + t.map(t => f(t)).join(", ") + "\n ]";
            if ("object" == typeof t) {
                let e = "{ ";
                for (let i in t) e += `\n${i}: ` + f(t[i]);
                return e += "\n}"
            }
            return "" + t
        },
        m = (t, e = "") => {
            console.log((e ? e + ": " : "") + f(t))
        },
        v = t => {
            if (null == t) return null;
            return t[Math.floor(Math.random() * t.length)]
        },
        g = t => t ? t.length > 1 ? t[0].toUpperCase() + t.slice(1) : t[0].toUpperCase() : "",
        y = (t, e) => {
            t[e] = t[t.length - 1], t.pop()
        },
        _ = (t, e) => Array.isArray(t) ? Array.isArray(e) ? t.concat(e) : (t.push(e), t) : Array.isArray(e) ? (e.push(t), e) : [t, e]
}, function(t, e, i) {
    "use strict";

    function s(t, e, i, s, n, r, a, o) {
        var l, h = "function" == typeof t ? t.options : t;
        if (e && (h.render = e, h.staticRenderFns = i, h._compiled = !0), s && (h.functional = !0), r && (h._scopeId = "data-v-" + r), a ? (l = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, h._ssrRegister = l) : n && (l = o ? function() {
                n.call(this, this.$root.$options.shadowRoot)
            } : n), l)
            if (h.functional) {
                h._injectStyles = l;
                var c = h.render;
                h.render = function(t, e) {
                    return l.call(e), c(t, e)
                }
            } else {
                var u = h.beforeCreate;
                h.beforeCreate = u ? [].concat(u, l) : [l]
            } return {
            exports: t,
            options: h
        }
    }
    i.d(e, "a", (function() {
        return s
    }))
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return c
    }));
    var s = i(7),
        n = i(3),
        r = i(8),
        a = i(4),
        o = i(0),
        l = (i(25), i(1)),
        h = i(2);
    class c {
        get disabled() {
            return this._disabled
        }
        set disabled(t) {
            this._disabled = t
        }
        get sym() {
            return this._sym
        }
        set sym(t) {
            this._sym = t
        }
        get max() {
            return this._max
        }
        set max(t) {
            null != t && (this._max ? t instanceof n.a ? this._max.base = t.base : isNaN(t) || (this._max.base = t) : this._max = t instanceof n.a ? t : new n.a(t, this.id + ".max", !0))
        }
        get rate() {
            return this._rate
        }
        set rate(t) {
            t instanceof n.a ? (t.id = this.id + ".rate", this._rate = t) : this._rate ? "object" == typeof t ? Object.assign(this._rate, t) : this._rate.base = t : this._rate = new n.a(t, this.id + ".rate")
        }
        get cost() {
            return this._cost
        }
        set cost(t) {
            this._cost = t
        }
        get require() {
            return this._require
        }
        set require(t) {
            this._require = t
        }
        get warn() {
            return this._warn
        }
        set warn(t) {
            this._warn = t
        }
        get warnMsg() {
            return this._warnMsg
        }
        set warnMsg(t) {
            this._warnMsg = t
        }
        get effect() {
            return this._effect
        }
        set effect(t) {
            this._effect = t
        }
        get locks() {
            return this._locks || 0
        }
        set locks(t) {
            this._locks = t
        }
        get locked() {
            return this._locked
        }
        set locked(t) {
            this._locked = t
        }
        get owned() {
            return this._owned
        }
        set owned(t) {
            this._owned = t
        }
        get value() {
            return this._value
        }
        set value(t) {
            t instanceof n.a ? null === this._value || void 0 === this._value ? this._value = t : t !== this._value && (this._value.base = t.base, this._value.basePct = t.basePct) : void 0 !== this._value ? this._value.base = "object" == typeof t ? t.value : t : this._value = new n.a(t, this.id)
        }
        get val() {
            return this.value
        }
        set val(t) {
            this.value = t
        }
        valueOf() {
            return this._value.valueOf()
        }
        constructor(t = null, e = null) {
            t && ("object" == typeof t ? (t.id && (this.id = t.id), Object(a.d)(this, t)) : isNaN(t) || (this.val = t)), e && this.setDefaults(e), void 0 !== this._locked && null !== this._locked || (this.locked = !0), this.locks = 0, null !== this._value && void 0 !== this._value || (this.val = 0), Object(s.c)(this, null, ["require", "rate", "current", "need", "value", "buy", "max", "cost", "id", "name", "warn", "effect", "slot"]), this.mod && Object(r.b)(this.mod, this.value)
        }
        canRun(t, e = l.a) {
            return !(this.disabled || this.maxed() || this.need && !t.unlockTest(this.need, this)) && (!(this.buy && !this.owned && !t.canPay(this.buy)) && (!(this.cost && 0 === this.exp && !t.canPay(this.cost)) && ((!this.fill || !t.filled(this.fill, this)) && (!this.run || t.canPay(this.run, e)))))
        }
        canPay(t) {
            return this.value >= t
        }
        remove(t) {
            this.value.base -= t
        }
        canUse(t) {
            return !(this.disabled || this.locks > 0 || this.need && !t.unlockTest(this.need, this)) && (!(this.buy && !this.owned && !t.canPay(this.buy)) && (this.perpetual || this.length > 0 ? this.canRun(t) : (!this.slot || t.state.getSlot(this.slot, this.type) !== this) && (!this.maxed() && ((!this.fill || !t.filled(this.fill, this)) && (!this.cost || t.canPay(this.cost))))))
        }
        canBuy(t) {
            return !(this.disabled || this.locked || this.locks > 0) && (!(this.buy && !t.canPay(this.buy)) && !1 === this.maxed())
        }
        topoff(t) {
            return t <= 0 ? this.value <= 0 || 0 === t ? 0 : (this.value + t < 0 && (t = -this.value.valueOf()), this.value.base += t, t) : !0 === this.repeat || this.max || !(this.value > 1) || this.buy && !0 !== this.owned ? (this.max && this.value + t >= this.max.value && (t = this.max.value - this.value), 0 === t ? 0 : (this.value.base += t, t)) : 0
        }
        doUnlock() {
            this.disabled || !1 === this.locked || this.locks > 0 || (this.locked = !1, o.J.emit(o.u, this), this.dirty = !0)
        }
        onUse(t) {
            this.slot ? t.setSlot(this) : this.amount(t, 1)
        }
        amount(t, e = 1) {
            if (this.topoff && (e = this.topoff(e)), 0 !== e) return this.isRecipe ? t.create(this, e) : (this.exec && this.exec(), this.title && t.state.player.setTitle(this.title), this.effect && t.applyEffect(this.effect, e), this.result && t.applyEffect(this.result, e), this.mod && t.addMod(this.mod), this.lock && t.lock(this.lock), this.dot && t.state.player.addDot(this.dot, this.id, this.name), this.disable && t.disable(this.disable), this.log && o.J.emit(o.r, this.log), this.attack && this.type !== h.o && "weapon" !== this.type && o.J.emit(o.z, this), this.dirty = !0, !0)
        }
        filled(t = 0) {
            return this.max && this.value >= this.max.value || this.rate && this.rate + t <= 0
        }
        maxed() {
            return this.max ? this.value >= Math.floor(this.max.value) : !(this.repeat || this.owned) && this.value > 0
        }
        setDefaults(t) {
            var e;
            for (let n in t) {
                var i = this[n];
                null == i && (e = t[n], this[n] = "function" == typeof e ? e(this) : "object" == typeof e ? Object(s.b)(e) : e)
            }
        }
        blocked() {
            return this.locked || this.disabled || this.locks > 0
        }
        scaleCost(t) {
            let e = this.cost;
            if (!e) return;
            let i = typeof e;
            "string" !== i && isNaN(i)
        }
        addRequire(t) {
            if (this.require) {
                if (this.require === t || Array.isArray(this.require) && this.require.includes(t)) return;
                this.require = Object(a.b)(this.require, t)
            } else this.require = t
        }
    }
    Object(r.c)(c, r.a)
}, function(t, e, i) {
    "use strict";

    function s(t, e) {
        let i = null;
        for (let a in t) {
            var n = t[a],
                r = e[a];
            if (n !== e[a]) {
                if (n) {
                    if ("object" == typeof n && "object" == typeof r && null !== r && null === (n = s(n, r))) continue
                } else if (!r) continue;
                null === i && (i = {}), i[a] = n
            }
        }
        return i
    }

    function n(t, e) {
        for (let s in e) {
            var i = t[s];
            let a = e[s];
            void 0 !== i ? null !== i && a && "object" == typeof i && "object" == typeof a && (Array.isArray(i) || Array.isArray(a) || n(i, a)) : t[s] = null !== a && "object" == typeof a ? r(a, Array.isArray(a) ? [] : {}) : a
        }
    }

    function r(t, e = {}) {
        let i, s;
        for (let n in t) null == (i = t[n]) ? e[n] = i : Array.isArray(i) ? e[n] = r(i, []) : "object" == typeof i ? (s = i.clone, e[n] = s && "function" == typeof s ? s.call(i) : r(i)) : e[n] = i;
        return e
    }

    function a(t, ...e) {
        for (let i = e.length - 1; i >= 0; i--)
            if (t.includes(e[i])) return !0;
        return !1
    }

    function o(t, e = null, i = []) {
        if (!t) return;
        let s = t;
        for (; s !== Object.prototype;) {
            for (let n of Object.getOwnPropertyNames(s)) i.includes(n) || void 0 !== t[n] || void 0 !== Object.getOwnPropertyDescriptor(s, n).set && (t[n] = e);
            s = Object.getPrototypeOf(s)
        }
    }

    function l(t, e) {
        for (; t !== Object.prototype;) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (i) return i;
            t = Object.getPrototypeOf(t)
        }
        return null
    }

    function h(t, e = null, i = null, s = !0) {
        let n, r, a = {};
        if (i) {
            for (let e = i.length - 1; e >= 0; e--) n = i[e], t.hasOwnProperty(n) && ("object" == typeof(r = t[n]) && null !== r && "function" == typeof r.toJSON ? a[n] = r.toJSON() : a[n] = r)
        }
        for (var o = Object.getPrototypeOf(t); o != Object.prototype;) {
            for (n of Object.getOwnPropertyNames(o))
                if (!e || !e.includes(n)) {
                    var l = Object.getOwnPropertyDescriptor(o, n);
                    s && void 0 === l.set && !l.writable || "function" != typeof(r = t[n]) && ("object" == typeof r && null !== r && "function" == typeof r.toJSON ? a[n] = r.toJSON() : a[n] = r)
                } o = Object.getPrototypeOf(o)
        }
        return a
    }
    i.d(e, "a", (function() {
        return s
    })), i.d(e, "b", (function() {
        return r
    })), i.d(e, "g", (function() {
        return n
    })), i.d(e, "e", (function() {
        return a
    })), i.d(e, "d", (function() {
        return l
    })), i.d(e, "c", (function() {
        return o
    })), i.d(e, "f", (function() {
        return h
    }))
}, function(t, e, i) {
    "use strict";
    i.d(e, "d", (function() {
        return l
    })), i.d(e, "b", (function() {
        return h
    })), i.d(e, "c", (function() {
        return c
    }));
    var s = i(7),
        n = i(1),
        r = i(3),
        a = i(10),
        o = i(4);
    const l = (t, e) => {
            if (t instanceof a.c) t.count = e;
            else if ("object" == typeof t)
                for (let i in t) l(t[i], e)
        },
        h = (t, e) => {
            if (t instanceof a.c) t.count = e;
            else if ("object" == typeof t)
                for (let i in t) h(t[i], e)
        };

    function c(t, e) {
        let i = t.prototype || t,
            s = Object.getOwnPropertyDescriptors(e);
        for (let t in s) i.hasOwnProperty(t) || Object.defineProperty(i, t, s[t]);
        return t
    }
    const u = ["template", "id", "type", "defaults", "sname", "sym", "name", "desc", "running", "current", "warnMsg", "locked", "locks", "value", "exp", "delta", "tags", "mod", "effect", "progress", "need", "require"];
    e.a = {
        excludeJSON(t) {
            if (this.save && (this.value > 0 || this.owned)) return this.forceSave();
            t = t ? u.concat(t) : u;
            let e = Object(s.a)(Object(s.f)(this, t), this.template || {});
            return !1 === this.locked && this.template && !1 !== this.template.locked && ((e = e || {}).locked = this.locked), e || void 0
        },
        toJSON() {
            if (this.save && (this.value > 0 || this.owned)) return this.forceSave();
            let t = Object(s.a)(Object(s.f)(this, u), this.template || {});
            return !1 === this.locked && this.template && !1 !== this.template.locked && ((t = t || {}).locked = this.locked), t || void 0
        },
        forceSave() {
            let t = Object(s.f)(this);
            return this.mod && (t.mod = this.mod), this.slot && (t.slot = this.slot), this.effect && (t.effect = this.effect), t.template && "object" == typeof t.template && (t.template = t.template.id), t.val && (t.value = void 0), t.name = this._name, t
        },
        get id() {
            return this._id
        },
        set id(t) {
            this._id = t
        },
        get template() {
            return this._template
        },
        set template(t) {
            this._template = t
        },
        get type() {
            return this._type
        },
        set type(t) {
            this._type = t
        },
        toString() {
            return this.id
        },
        get sname() {
            return this._name || this.id
        },
        set sname(t) {},
        get name() {
            return (this._actname && this._value < 1 ? this.actname : this._name || this.id) + (this.sym || "")
        },
        set name(t) {
            if (t && this.sym) {
                let e = t.indexOf(this.sym);
                this._name = e >= 0 ? t.slice(0, e) : t
            } else this._name = t
        },
        get desc() {
            return this.actdesc && this._value < 1 ? this.actdesc : this._desc || null
        },
        set desc(t) {
            this._desc = t
        },
        get current() {
            return this.value
        },
        set current(t) {},
        get ex() {
            return this._exp
        },
        set ex(t) {
            this._exp = t
        },
        get val() {
            return this._value
        },
        set val(t) {
            this._value = t
        },
        get value() {
            return this._value
        },
        set value(t) {
            this._value = t
        },
        valueOf() {
            return this._value
        },
        get tags() {
            return this._tags
        },
        set tags(t) {
            "string" == typeof t ? this._tags = t.split(",") : Array.isArray(t) ? this._tags = t : this._tags = null
        },
        permVars(t, e = this) {
            if ("number" == typeof e);
            else if ("object" == typeof t) {
                for (let s in t) {
                    var i = e[s];
                    void 0 === i ? i = e[s] = Object(o.e)(t[s]) : i instanceof r.a ? i.perm(t[s]) : i && "number" != typeof i ? "object" == typeof i ? this.permVars(t[s], i) : console.log(this.id + " UNKNOWN PERM VAR: " + s + " typ: " + typeof i) : e[s] = (i || 0) + t[s].valueOf()
                }
                "object" == typeof e && e && e.mod && Object(a.b)(e.mod, e.id)
            }
        },
        applyVars(t, e = 1) {
            if ("number" == typeof t || t instanceof r.a) this.value = this.value.base + t * e;
            else if ("object" == typeof t) {
                t.mod && this.changeMod(t.mod, e);
                for (let s in t)
                    if ("skipLocked" !== s && "value" !== s) {
                        var i = this[s];
                        i instanceof r.a || i instanceof a.c ? i.apply(t[s], e) : "object" == typeof t[s] ? t[s] instanceof a.c ? t[s].applyTo(this, s, e) : "number" == typeof i ? this[s] += Number(t[s]) * e : this.subeffect(this[s], t[s], e) : void 0 !== this[s] ? this[s] += Number(t[s]) * e : (console.log("NEW SUB: " + s), this.newSub(this, s, t[s], e))
                    } t.value && (this.value += Number(t.value) * e)
            }
        },
        applyMods(t, e = 1, i = this) {
            t instanceof a.c ? t.applyTo(i, "value", e) : "object" == typeof t ? (this.applyObj(t, e, i), t.mod && this.changeMod(t.mod, this.value)) : "number" == typeof t ? i instanceof r.a || i instanceof a.c ? i.apply(t, e) : "object" == typeof i ? i.value = (i.value || 0) + e * t : console.error(this.id + " invalid mod: " + mod) : console.warn(this.id + " unknown mod type: " + t)
        },
        applyObj(t, e, i, s) {
            for (let n in t) {
                var o = t[n],
                    l = i[n];
                if (null == l)
                    if ("number" == typeof o || o instanceof a.c || o instanceof r.a) {
                        let t = i[n] = s ? new a.c("number" == typeof o ? o * e : 0) : new r.a("number" == typeof o ? o * e : 0);
                        s && (t.count = this.value), o instanceof a.c && t.addMod(o, e), console.log(this.id + ".[" + n + "]:" + o + ": targ null: " + t.valueOf() + " isMod? " + s)
                    } else i[n] = {}, this.applyObj(o, e, i[n], s || "mod" === n);
                else l.applyMods ? l.applyMods(o, e, l) : l instanceof r.a ? l.apply(o, e) : o instanceof a.c ? o.applyTo(i, n, e) : "object" == typeof o ? this.applyObj(o, e, l, s || "mod" === n) : "number" == typeof o ? "number" == typeof l ? i[n] = new r.a(i[n] + o * e) : this.applyMods(o, e, l) : console.warn(`UNKNOWN Mod applied to ${this.id}.${n}: ${o}` + "  " + typeof o)
            }
            t.mod && n.c.addMod(this.mod, this.value)
        },
        subeffect(t, e, i) {
            if ("object" == typeof t)
                for (let s in e) "object" == typeof e[s] ? this.subeffect(t[s], e[s], i) : "object" == typeof t[s] ? t[s].value = (t[s].value || 0) + Number(e[s]) * i : t[s] += Number(e[s]) * i
        },
        newSub(t, e, i, s = 1) {
            console.warn("ADD SUB: " + this.id + " " + e + " stat value: " + s * i.value);
            let n = t[e] = new r.a("number" == typeof i ? i * s : 0, "key");
            i instanceof a.c && n.apply(i, s)
        },
        changeMod(t, e) {
            this.equippable || n.c.addMod(t, e * this.value)
        },
        addTag(t) {
            null === this._tags || void 0 === this._tags ? this._tags = [t] : this._tags.includes(t) || this._tags.push(t)
        },
        hasTags(t) {
            if (!this._tags) return !1;
            for (let e = t.length - 1; e >= 0; e--)
                if (!this._tags.includes(t[e])) return !1;
            return !0
        },
        anyTag(t) {
            if (!this._tags) return !1;
            for (let e = t.length - 1; e >= 0; e--)
                if (!this._tags.includes(t[e])) return !0;
            return !1
        },
        hasTag(t) {
            return this.tags && this._tags.includes(t)
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return s
    })), i.d(e, "b", (function() {
        return r
    }));
    const s = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i,
        n = "~";
    class r {
        toJSON() {
            return this.min + n + this.max
        }
        toString() {
            return this.min + " " + n + " " + this.max
        }
        get type() {
            return "range"
        }
        get value() {
            return this.min + Math.random() * (this.max - this.min)
        }
        valueOf() {
            return this.value
        }
        constructor(t = 0, e) {
            let i = typeof t;
            if ("object" === i) Object.assign(this, t);
            else if ("string" === i) {
                let e = t.split(n);
                this.min = Number(e[0]), this.max = Number(e[1])
            } else this.min = Number(t), this.max = Number(void 0 === e ? t : e)
        }
        add(t) {
            "number" == typeof t ? (this.min += t, this.max += t) : "object" == typeof t && (this.min += t.min, this.max += t.max)
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return h
    })), i.d(e, "c", (function() {
        return c
    })), i.d(e, "a", (function() {
        return u
    }));
    var s = i(18),
        n = i(3),
        r = i(4),
        a = i(13);
    const o = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/i,
        l = "all",
        h = (t, e) => {
            if (t instanceof c) t.id = e;
            else if ("object" == typeof t)
                for (let i in t) h(t[i], e)
        };
    class c extends n.a {
        toJSON() {
            return {
                str: 0 === this._basePct ? this.base : (this.base || "") + (this._basePct > 0 ? "+" : "") + 100 * this.basePct + "%",
                count: this.count.valueOf()
            }
        }
        toString() {
            let t = 0 !== this.bonus ? Object(a.d)(this.bonus.toString()) : "";
            return 0 !== this.pct && (0 !== this.bonus && (t += ", "), t += (this.pct > 0 ? "+" : "") + Object(a.d)(100 * this.pct) + "%"), t
        }
        get count() {
            return this._count
        }
        set count(t) {
            t && "object" == typeof t && t.str ? this.count = t.str : this._count = t
        }
        get bonus() {
            return (this.base + this.mBase) * (1 + this.mPct)
        }
        get pct() {
            return this.basePct * (1 + this.mPct)
        }
        get str() {
            return this.value
        }
        set str(t) {
            if ("string" == typeof t) {
                let e = o.exec(t);
                e ? (this.base = Number(e[1]) || 0, this.basePct = Number(e[2]) / 100 || 0) : console.error(this.id + " no mod regex: " + t)
            } else t instanceof s.b ? this.basePct = t.value : isNaN(t) ? "object" == typeof t && t && "object" == typeof t && t.str && (this.str = t.str) : this.base = t
        }
        get pctTot() {
            return this.pct * this._count
        }
        get bonusTot() {
            return this.bonus * this._count
        }
        constructor(t = null, e = null) {
            super(null, e), "number" == typeof t ? this.base = t : "string" == typeof t ? this.str = t : t && (t.value ? (this.str = t.value, this.count = t.count) : Object.assign(this, t)), void 0 !== this._count && null !== this._count || (this._count = 1), this.base = this.base || 0, this.basePct = this.basePct || 0, this.id = e || this.id || l
        }
        clone() {
            return new c({
                base: this.base,
                basePct: this.basePct,
                count: 1
            }, this.id)
        }
        applyTo(t, e, i) {
            let s = t[e];
            if (s instanceof n.a) s.addMod(this, i);
            else if (null == s || "number" == typeof s) {
                console.log("MOD.applyTo() NEW AT: " + e), (t[e] = new n.a(s || 0, e)).addMod(this, i)
            } else "object" == typeof s && (console.warn(this.id + " !!Generic Mod Targ: " + s.id), s.value = ((Number(s.value) || 0) + i * this.bonus) * (1 + i * this.pct))
        }
    }
    const u = (t, e) => t ? (e || Object(r.h)(t, "no mod id"), t = d(t, e), Object(r.n)(t), t) : null,
        d = (t, e) => {
            if (null == t) return null;
            if ("string" == typeof t) return o.test(t) ? new c(t, e) : t;
            if ("number" == typeof t) return new c(t, e);
            for (let i in t) {
                let s = t[i],
                    n = typeof s;
                s instanceof c ? e && (s.id = e) : "string" === n ? o.test(s) && (t[i] = new c(s, e)) : "number" === n ? t[i] = new c(s, e) : "object" === n && (s.id || s.base || s.str ? t[i] = new c(s, e) : t[i] = d(s, e))
            }
            return t
        }
}, function(t, e, i) {
    "use strict";
    const s = {
        autoSave: !0,
        saveTime: 30,
        darkMode: !1,
        compactMode: !1,
        curview: null,
        spells: {},
        skills: {
            hideMaxed: !1
        }
    };
    Object.freeze(s), e.a = {
        toJSON() {
            return this.vars
        },
        vars: {
            autoSave: !0,
            saveTime: 30,
            darkMode: !1,
            compactMode: !1,
            spells: {}
        },
        getAll() {
            return this.vars
        },
        setSubVar(t, e, i) {
            let s = this.vars[t];
            return s || (this.vars[t] = s = {}), s[e] = i, i
        },
        getSubVar(t, e) {
            let i = this.vars[t];
            return i ? i[e] : null
        },
        set(t, e) {
            this.vars[t] = e
        },
        get(t) {
            return this.vars[t]
        },
        getSubVars(t) {
            let e = this.vars[t];
            return void 0 === e && (e = this.vars[t] = {}), e
        },
        setSettings(t) {
            this.vars = Object.assign({}, s);
            for (let e in t) this.vars[e] = t[e]
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(13),
        n = i(1),
        r = (i(32), i(3)),
        a = i(2);
    e.a = {
        methods: {
            floor: s.b,
            usable: t => t.length || t.perpetual ? t.canRun(n.c, n.a) : t.canUse(n.c),
            buyable: t => t.canBuy(n.c),
            reslocked: t => !0 === t.disabled || t.locks > 0 || !1 !== t.locked,
            locked: t => !0 === t.disabled || t.maxed() || t.locks > 0 || !1 !== t.locked,
            stripTags(t) {
                return Array.isArray(t) ? t.map(this.stripTags, this) : "string" == typeof t && "t_" === t.substring(0, 2) ? t.slice(2) : t
            },
            effectItems(t, e = !1) {
                let i = typeof t,
                    a = {};
                if ("number" === i) a.gold = Object(s.d)(t);
                else if ("string" === i) {
                    let e = n.c.getData(t);
                    a[e ? e.name : this.stripTags(t)] = !0
                } else Array.isArray(t) ? t.forEach(t => this.effectList(t, a)) : "function" === i || "object" === i && (t instanceof r.a ? a.gold = t.value : this.effectList(t, a, "", e));
                return a
            },
            effectList(t, e = {}, i = "", r = !1) {
                if ("string" != typeof t)
                    for (let c in t) {
                        var o = c,
                            l = t[c],
                            h = r;
                        if ("skipLocked" !== c) {
                            if ("mod" === c || "effect" === c) o = i;
                            else if ("max" === c) o = "max " + i;
                            else if ("base" === c || "value" === c) o = i;
                            else if ("rate" === c) {
                                o = i, h = !0;
                                let t = n.c.getData(i.split(".")[0]);
                                t && t.type === a.m && (o = "train " + o + " rate")
                            } else {
                                let t = n.c.getData(c);
                                o = t ? t.name : this.stripTags(c), o = i ? i + " " + o : o
                            }
                            if ("object" != typeof l) e[o] = Object(s.d)(l) + (h ? "/s" : "");
                            else if ("function" == typeof l);
                            else {
                                if (l.skipLocked) {
                                    let t = n.c.getData(c);
                                    if (t && (t.locked || t.disabled)) continue
                                }
                                l.toString && l.toString !== Object.prototype.toString ? e[o] = l.toString() + (h ? "/s" : "") : this.effectList(l, e, o, h)
                            }
                        }
                    } else {
                        let i = n.c.getData(t);
                        e[i ? i.name : this.stripTags(t)] = !0
                    }
            }
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "d", (function() {
        return s
    })), i.d(e, "a", (function() {
        return n
    })), i.d(e, "c", (function() {
        return r
    })), i.d(e, "e", (function() {
        return a
    })), i.d(e, "b", (function() {
        return o
    }));
    Math.floor;
    const s = (t, e = 2) => {
            let i = Number(t);
            if (Number.isNaN(i)) return t;
            if (i === Math.floor(i)) return i;
            let s = Math.pow(10, e),
                n = 0;
            for (; i !== Math.floor(i) && i < s;) i *= 10, n++;
            return Math.round(i) / Math.pow(10, n)
        },
        n = t => {
            if (!t) return "";
            let e = t.name || t.id;
            if (!e) return t;
            let i = e.indexOf(" ");
            return i >= 0 && i < e.length ? e[0] + e[i + 1] : e.slice(0, 2)
        },
        r = (t, e = 2) => {
            let i = Math.pow(10, e);
            return Math.floor(t * i) / i
        },
        a = t => Math.ceil(t) + " s",
        o = t => null === t || isNaN(t) ? 0 : Math.floor(t)
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var i = function(t, e) {
                    var i = t[1] || "",
                        s = t[3];
                    if (!s) return i;
                    if (e && "function" == typeof btoa) {
                        var n = (a = s, o = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(l, " */")),
                            r = s.sources.map((function(t) {
                                return "/*# sourceURL=".concat(s.sourceRoot).concat(t, " */")
                            }));
                        return [i].concat(r).concat([n]).join("\n")
                    }
                    var a, o, l;
                    return [i].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], "{").concat(i, "}") : i
            })).join("")
        }, e.i = function(t, i) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var s = {}, n = 0; n < this.length; n++) {
                var r = this[n][0];
                null != r && (s[r] = !0)
            }
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                null != o[0] && s[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(".concat(o[2], ") and (").concat(i, ")")), e.push(o))
            }
        }, e
    }
}, function(t, e, i) {
    var s, n, r = {},
        a = (s = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === n && (n = s.apply(this, arguments)), n
        }),
        o = function(t, e) {
            return e ? e.querySelector(t) : document.querySelector(t)
        },
        l = function(t) {
            var e = {};
            return function(t, i) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var s = o.call(this, t, i);
                    if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try {
                        s = s.contentDocument.head
                    } catch (t) {
                        s = null
                    }
                    e[t] = s
                }
                return e[t]
            }
        }(),
        h = null,
        c = 0,
        u = [],
        d = i(61);

    function p(t, e) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i],
                n = r[s.id];
            if (n) {
                n.refs++;
                for (var a = 0; a < n.parts.length; a++) n.parts[a](s.parts[a]);
                for (; a < s.parts.length; a++) n.parts.push(_(s.parts[a], e))
            } else {
                var o = [];
                for (a = 0; a < s.parts.length; a++) o.push(_(s.parts[a], e));
                r[s.id] = {
                    id: s.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }

    function f(t, e) {
        for (var i = [], s = {}, n = 0; n < t.length; n++) {
            var r = t[n],
                a = e.base ? r[0] + e.base : r[0],
                o = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            s[a] ? s[a].parts.push(o) : i.push(s[a] = {
                id: a,
                parts: [o]
            })
        }
        return i
    }

    function m(t, e) {
        var i = l(t.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var s = u[u.length - 1];
        if ("top" === t.insertAt) s ? s.nextSibling ? i.insertBefore(e, s.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), u.push(e);
        else if ("bottom" === t.insertAt) i.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = l(t.insertAt.before, i);
            i.insertBefore(e, n)
        }
    }

    function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1)
    }

    function g(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var s = function() {
                0;
                return i.nc
            }();
            s && (t.attrs.nonce = s)
        }
        return y(e, t.attrs), m(t, e), e
    }

    function y(t, e) {
        Object.keys(e).forEach((function(i) {
            t.setAttribute(i, e[i])
        }))
    }

    function _(t, e) {
        var i, s, n, r;
        if (e.transform && t.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
            t.css = r
        }
        if (e.singleton) {
            var a = c++;
            i = h || (h = g(e)), s = w.bind(null, i, a, !1), n = w.bind(null, i, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), m(t, e), e
        }(e), s = O.bind(null, i, e), n = function() {
            v(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = g(e), s = k.bind(null, i), n = function() {
            v(i)
        });
        return s(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    s(t = e)
                } else n()
            }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var i = f(t, e);
        return p(i, e),
            function(t) {
                for (var s = [], n = 0; n < i.length; n++) {
                    var a = i[n];
                    (o = r[a.id]).refs--, s.push(o)
                }
                t && p(f(t, e), e);
                for (n = 0; n < s.length; n++) {
                    var o;
                    if (0 === (o = s[n]).refs) {
                        for (var l = 0; l < o.parts.length; l++) o.parts[l]();
                        delete r[o.id]
                    }
                }
            }
    };
    var b, x = (b = [], function(t, e) {
        return b[t] = e, b.filter(Boolean).join("\n")
    });

    function w(t, e, i, s) {
        var n = i ? "" : s.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, n);
        else {
            var r = document.createTextNode(n),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
        }
    }

    function k(t, e) {
        var i = e.css,
            s = e.media;
        if (s && t.setAttribute("media", s), t.styleSheet) t.styleSheet.cssText = i;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }

    function O(t, e, i) {
        var s = i.css,
            n = i.sourceMap,
            r = void 0 === e.convertToAbsoluteUrls && n;
        (e.convertToAbsoluteUrls || r) && (s = d(s)), n && (s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var a = new Blob([s], {
                type: "text/css"
            }),
            o = t.href;
        t.href = URL.createObjectURL(a), o && URL.revokeObjectURL(o)
    }
}, function(t, e, i) {
    "use strict";
    var s = i(19),
        n = i(9),
        r = i(3),
        a = i(18);
    class o {
        toJSON() {
            let t = this._value.toJSON(),
                e = this.max.toJSON();
            return t === e ? t : {
                v: t,
                max: e
            }
        }
        get base() {
            return this._value.base
        }
        set base(t) {
            this._value.base = t && "object" == typeof t ? t.base || t.value : t
        }
        get value() {
            return this._value.value
        }
        set value(t) {
            t > this._max.value && (t = this._max.value), t instanceof r.a ? this._value = t : void 0 === this._value || "object" == typeof t ? this._value = new r.a(t, "value") : this._value.base = t
        }
        get max() {
            return this._max
        }
        set max(t) {
            this._max = t instanceof r.a ? t : new r.a(t, this.path + ".max", !0)
        }
        valueOf() {
            return this._value.value
        }
        set(t) {
            t > this.max.value && (t = this.max.value), this._value.set(t)
        }
        add(t) {
            this._value.base += t, this._value.value > this.max.value && (this._value.base = this.max.value)
        }
        constructor(t = null) {
            t ? "object" == typeof t ? (t.max ? this.max = t.max : t.v ? this.max = t.v : this.max = 0, t.v ? this.value = t.v : t.max ? this.value = t.max : this.value = 0) : "number" == typeof t ? (this.max = t, this.value = t) : (console.warn(t + " invalid type: " + typeof t), this.value = 0, this.max = 0) : (this.value = 0, this.max = 0)
        }
    }
    i.d(e, "a", (function() {
        return l
    })), i.d(e, "b", (function() {
        return h
    }));
    const l = 1;
    class h extends s.a {
        toJSON() {
            let t = super.toJSON();
            return t.id = this.id, t.cost = void 0, t.team = this.team || void 0, t.timer = this.timer, t.attack = this.attack, this.template ? (t.template = this.template.id, this._name != this.template.name && (t.name = this._name)) : t.name = this._name, t.keep = this.keep, t.maxHp = void 0, t
        }
        get keep() {
            return this._keep
        }
        set keep(t) {
            this._keep = t
        }
        get maxHp() {
            return this._hp.max
        }
        set maxHp(t) {}
        get hp() {
            return this._hp
        }
        set hp(t) {
            void 0 === this._hp || null === this._hp || "object" == typeof t ? this._hp = t instanceof o ? t : new o(t) : this._hp.value = t
        }
        get loot() {
            return this._loot
        }
        set loot(t) {
            if ("object" == typeof t) {
                for (var e in t) {
                    var i = t[e];
                    "string" == typeof i && (a.a.test(i) ? t[e] = new a.b(i) : n.a.test(i) ? t[e] = new n.b(i) : isNaN(i) || (t[e] = Number(i)))
                }
                this._loot = t
            } else this._loot = t
        }
        get damage() {
            return this._damage
        }
        set damage(t) {
            !t || t instanceof n.b ? this._damage = t : this._damage = "string" == typeof t || "object" == typeof t ? new n.b(t) : Number(t)
        }
        get team() {
            return this._team
        }
        set team(t) {
            this._team = t
        }
        get active() {
            return this._active
        }
        set active(t) {
            this._active = t
        }
        constructor(t, e = null) {
            super(t), e && Object.assign(this, e), this.dodge = this.dodge || this.level / 2, this.active = void 0 !== this.active && null !== this.active && this.active, "string" == typeof this.hp ? this.hp = new n.b(this.hp).value : this.hp instanceof n.b && (this.hp = this.hp.value), t.maxHp && (this.hp.max = t.maxHp), this.hp || (this.hp = 1), this.tohit = this.tohit || 0, !this.dmg || null !== this.damage && void 0 !== this.damage || (this.damage = this.dmg)
        }
        res() {
            this.hp = 1
        }
        rest(t) {
            this.hp += .01 * this.hp.max.value * t
        }
        getDamage() {
            return this.attack ? this.attack.getDamage() : "number" == typeof this._damage ? this._damage : this._damage.value
        }
    }
}, function(t, e, i) {
    "use strict";
    class s {
        toJSON() {
            if (!this.empty) return {
                name: this.name,
                hid: this.hid,
                level: this.level,
                gclass: this.gclass,
                title: this.title || void 0,
                titles: this.titles || void 0,
                gender: this.gender || void 0,
                school: this.school || void 0,
                fame: this.fame || void 0,
                points: this.points || void 0
            }
        }
        get name() {
            return this._name
        }
        set name(t) {
            this._name = t
        }
        get hid() {
            return this._hid
        }
        set hid(t) {
            this._hid = t
        }
        get level() {
            return this._level
        }
        set level(t) {
            this._level = t
        }
        get title() {
            return this._title
        }
        set title(t) {
            this._title = t
        }
        get fame() {
            return this._fame
        }
        set fame(t) {
            this._fame = t
        }
        get titles() {
            return this._titles
        }
        set titles(t) {
            this._titles = t
        }
        get gender() {
            return this._gender
        }
        set gender(t) {
            this._gender = t
        }
        get school() {
            return this._school
        }
        set school(t) {
            this._school = t
        }
        get points() {
            return this._points
        }
        set points(t) {
            this._points = t
        }
        constructor(t = null) {
            t ? (Object.assign(this, t), t.empty || !t.name ? this.empty = !0 : this.empty = !1) : this.empty = !0, this.points || (this.points = 0), this.fame || (this.fame = 0), this.titles || (this.titles = 0), this.level || (this.level = 0)
        }
        update(t) {
            this.name = t.name, this.level = t.level.valueOf(), this.hid = t.hid, this.title = t.title, this.titles = t.titles.length, this.fame = t.fame.valueOf(), this.gclass = t.gclass, this.empty = !1, console.log("chr pts: " + this.getPoints())
        }
        getPoints() {
            return this.empty ? 0 : (isNaN(this.points) && console.warn(this.name + "points: NaN: " + this.points), isNaN(this.fame) && console.warn(this.name + "fame: NaN: " + this.fame), isNaN(this.titles) && console.warn(this.name + "titles: NaN: " + this.titles), isNaN(this.level) && console.warn(this.name + "level: NaN: " + this.level), this.points + this.fame + (this.titles + this.level) / 10)
        }
    }
    var n = i(3),
        r = i(31);
    class a {
        toJSON() {
            return {
                name: this.name,
                chars: this.chars,
                active: this.active,
                items: this.items
            }
        }
        get active() {
            return this._active
        }
        set active(t) {
            this._active = t
        }
        get name() {
            return this._name
        }
        set name(t) {
            this._name = t
        }
        get chars() {
            return this._chars
        }
        set chars(t) {
            for (let e = t.length - 1; e >= 0; e--) t[e] = new s(t[e]);
            this._chars = t
        }
        get prestige() {
            return this._prestige
        }
        set prestige(t) {
            this._prestige = t
        }
        get items() {
            return this._items
        }
        set items(t) {
            this._items = t
        }
        get max() {
            return this._max
        }
        set max(t) {
            this._max = t instanceof n.a ? t : new n.a(t)
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.chars || (this.chars = []), this.active || (this.active = 0), this.name || (this.name = "Wizard's Hall"), this.max = 3;
            let e = this.items.prestige;
            e ? this.prestige = e : (console.warn("cannot find prestige data"), this.prestige = new r.a(0)), this.initChars()
        }
        dismiss(t) {
            return !(t < 0 || t >= this.chars.length) && (this.chars[t].empty = !0, this.chars[t].name = null, this.chars[t].hid = null, !0)
        }
        calcPoints() {
            let t = 0;
            for (let e = this.chars.length - 1; e >= 0; e--) t += this.chars[e].getPoints();
            this.prestige.value = t
        }
        initChars() {
            let t = 0,
                e = this.max.value;
            for (let n = 0; n < e; n++) {
                var i = this.chars[n];
                void 0 === i ? this.chars.push(new s) : t += i.getPoints()
            }
            this.chars.length > this.max && (this.chars = this.chars.slice(0, Math.floor(e))), this.prestige.value = t
        }
        setActive(t) {
            return t < 0 || t >= this.chars.length ? (console.warn("invalid char slot: " + t), !1) : (this.active = t, !0)
        }
        updateChar(t, e = -1) {
            let i = this.getSlot(e);
            i || (i = this.chars[e < 0 ? this.active : e] = new s), i.update(t)
        }
        setLevel(t, e = -1) {
            let i = this.getSlot(e);
            i && (i.level = t)
        }
        setName(t, e = -1) {
            let i = this.getSlot(e);
            i && (i.name = t)
        }
        hidSlot(t) {
            return this.chars.findIndex(e => e.hid == t)
        }
        setTitle(t, e = -1) {
            let i = this.getSlot(e);
            i && (i.title = t)
        }
        getSlot(t = -1) {
            return this.chars[t < 0 ? this.active : t]
        }
        findSlot(t) {
            return this.chars.findIndex(t)
        }
        byName(t) {
            return this.chars.findIndex(e => e.name === t)
        }
        rmChar(t) {
            this.chars[t] = void 0
        }
    }
    var o = i(11),
        l = i(0),
        h = i(50);
    e.a = {
        hall: null,
        legacySave: () => "gameData",
        loadHallData(t) {
            let e = new h.a;
            return e.load("hall").then(() => e.instance(t))
        },
        async loadHall() {
            let t = window.localStorage.getItem("hall");
            if (t) try {
                t = JSON.parse(t)
            } catch (t) {
                console.error(t.message + "\n" + t.stack)
            }
            t = await this.loadHallData(t), this.hall = new a(t)
        },
        onCharLevel(t, e) {
            this.hall.updateChar(t), this.saveHall()
        },
        updateChar(t, e = -1) {
            this.hall.updateChar(t, e), this.saveHall()
        },
        setHallName(t) {
            this.hall.name = t, this.saveHall()
        },
        setActive(t, e) {
            this.hall.updateChar(e.player), this.saveActive(e), this.hall.setActive(t), this.saveHall()
        },
        getHallData() {
            return this.hall.items
        },
        gameLoaded(t) {
            let e = t.state.player,
                i = this.hall.hidSlot(e.hid);
            i >= 0 && this.hall.setActive(i), this.hall.updateChar(e), this.saveHall(), this.hall.calcPoints(), l.J.add(l.A, this.onCharLevel, this), l.J.add(l.h, this.updateChar, this), l.J.add(l.i, this.updateChar, this), l.J.add(l.f, this.updateChar, this)
        },
        clearAll() {
            window.localStorage.clear()
        },
        clearActive() {
            window.localStorage.setItem(this.activeLoc(), null)
        },
        dismiss(t) {
            this.hall.dismiss(t) && (window.localStorage.setItem(this.charLoc(t), null), window.localStorage.setItem(this.settingsLoc(t), null), this.saveHall())
        },
        loadActive() {
            try {
                let t = window.localStorage,
                    e = t.getItem(this.activeLoc());
                return e || 0 !== this.hall.active || (console.log("NO Char. USING LEGACY"), e = t.getItem(this.legacySave())), e
            } catch (t) {
                return console.error(t.message + "\n" + t.stack), null
            }
        },
        saveActive(t) {
            try {
                let e = window.localStorage,
                    i = JSON.stringify(t);
                return i && e.setItem(this.activeLoc(), i), this.saveSettings(), !0
            } catch (t) {
                return console.error(t.message + "\n" + t.stack), !1
            }
        },
        loadSettings() {
            try {
                let t = window.localStorage.getItem(this.settingsLoc()),
                    e = JSON.parse(t);
                return o.a.setSettings(e), o.a.getAll()
            } catch (t) {
                console.error(t.message + "\n" + t.stack)
            }
        },
        saveSettings() {
            try {
                let t = JSON.stringify(o.a);
                t && window.localStorage.setItem(this.settingsLoc(), t)
            } catch (t) {
                console.error(t.message + "\n" + t.stack)
            }
        },
        activeLoc() {
            return "chars/" + this.hall.active
        },
        charLoc: t => "chars/" + t,
        settingsLoc(t) {
            return "settings/" + (void 0 === t ? this.hall.active : t)
        },
        saveHall() {
            try {
                let t = JSON.stringify(this.hall);
                t && window.localStorage.setItem("hall", t)
            } catch (t) {
                console.error(t.message + "\n" + t.stack)
            }
        },
        setName(t) {},
        setLevel(t) {},
        setTitle(t) {}
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return n
    })), i.d(e, "b", (function() {
        return r
    }));
    var s = i(13);
    const n = /^(\d+(?:\.?\d+)?)\%$/i;
    class r {
        toJSON() {
            return 100 * this.pct + "%"
        }
        get value() {
            return Math.random() < this.pct ? 1 : 0
        }
        roll(t = 0) {
            return 100 * Math.random() < this.pct * (100 + t)
        }
        get type() {
            return "%"
        }
        toString() {
            return Object(s.d)(100 * this.pct) + "%"
        }
        constructor(t) {
            if ("string" == typeof t) {
                let e = n.exec(t);
                this.pct = e ? e[1] : Number(t)
            } else isNaN(t) || (this.pct = t);
            this.pct = (this.pct || 0) / 100
        }
        clone() {
            return new r(100 * this.pct)
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return u
    })), i.d(e, "a", (function() {
        return d
    }));
    var s = i(8),
        n = i(26),
        r = i(3),
        a = i(25),
        o = i(22),
        l = (i(51), i(2)),
        h = i(4);
    const c = 3.5;

    function u(t) {
        return .5 + c * Math.exp(-t / 8)
    }
    class d {
        get states() {
            return this._states
        }
        set states(t) {
            this._states = t
        }
        get defense() {
            return this._defense
        }
        set defense(t) {
            t instanceof r.a ? this._defense = t : this._defense ? this._defense.base = t : this._defense = new r.a(t, this.id + ".defense")
        }
        get tohit() {
            return this._tohit
        }
        set tohit(t) {
            t instanceof r.a ? this._tohit = t : this._tohit ? this._tohit.base = t : this._tohit = new r.a(t)
        }
        get resist() {
            return this._resist
        }
        set resist(t) {
            this._resist = t
        }
        get speed() {
            return this._speed
        }
        set speed(t) {
            this._speed = t instanceof r.a ? t : new r.a(t), this.delay = u(t)
        }
        get immunities() {
            return this._immunities
        }
        set immunities(t) {
            for (let i in t) {
                var e = t[i];
                e instanceof r.a || (t[i] = new r.a(e))
            }
            this._immunities = t
        }
        get attack() {
            return this._attack
        }
        set attack(t) {
            if (Array.isArray(t)) {
                let e = [];
                for (let i = t.length - 1; i >= 0; i--) e.push(t[i] instanceof o.a ? t[i] : new o.a(t[i]));
                this._attack = e
            } else this._attack = t instanceof o.a ? t : new o.a(t)
        }
        get dots() {
            return this._dots
        }
        set dots(t) {
            let e = [];
            for (let i = t.length - 1; i >= 0; i--) e.push(t[i] instanceof a.a ? t[i] : new a.a(t[i]));
            this._dots = e
        }
        get instance() {
            return !0
        }
        set instance(t) {}
        get regen() {
            return this._regen
        }
        set regen(t) {
            this._regen = t instanceof r.a ? t : new r.a(t)
        }
        get alive() {
            return this.hp.value > 0
        }
        set alive(t) {}
        constructor(t) {
            for (let e in t) this[e] = t[e];
            this.type = l.i, this.states = this.states || {}, this.immunities = this.immunities || {}, this._resist = this._resist || {}, this.dots || (this.dots = []), this.timer = this.timer || this.delay
        }
        revive(t) {
            for (let e = this.dots.length - 1; e >= 0; e--) this.dots[e].revive(t);
            this.delay = u(this.speed), this.template && (this.attack || console.warn("NO ATTACK: " + this.id), this.name || (this._name = it.name))
        }
        begin() {}
        addDot(t, e, i) {
            let s = t.id;
            if (s || (s = t.id = i || (e ? e.id || e.name : "")), !s) return;
            let n = this.dots.find(t => t.id === s);
            void 0 !== n ? n.duration < t.duration && (n.duration = t.duration) : (t instanceof a.a || (t = new a.a(Object(h.e)(t), e, i)), this.dots.push(t), t.mod && this.applyDot(t))
        }
        applyDot(t) {
            this.applyMods(t.mod, 1)
        }
        rmDot(t) {
            let e = this.dots[t];
            this.dots.splice(t, 1), e.mod && this.applyMods(e.mod, -1)
        }
        update(t) {
            for (let i = this.dots.length - 1; i >= 0; i--) {
                var e = this.dots[i];
                e.tick(t) && (e.duration <= 0 && this.rmDot(i), e.damage && Object(n.b)(this, e, e.source))
            }
            this.regen && (this.hp += this.regen * t)
        }
        combat(t) {
            if (this.alive) return this.timer -= t, this.timer <= 0 ? (this.timer += u(this.speed), this.getAttack()) : void 0
        }
        getAttack() {
            return Array.isArray(this.attack) ? this.attack[Math.floor(Math.random() * this.attack.length)] : this.attack || this
        }
        hasStatus(t) {
            return this.states[t] > 0
        }
        isImmune(t) {
            return this.immunities[t] > 0
        }
        tryResist(t) {
            return !(!this.resist || !this.resist[t]) && 100 * Math.random() < this.resist[t]
        }
        getHit(t) {
            return this.tohit.valueOf()
        }
        getResist(t) {
            return (this._resist[t] || 0) / 100
        }
        removeResist(t, e) {
            this._resist[t] && (this._resist[t] -= e)
        }
        addResist(t, e) {
            this._resist[t] ? this._resist[t].base += e : this._resist[t] = e
        }
        addStatus(t) {
            this.states[t] = this.states[t] ? this.states[t] + 1 : 1
        }
        removeStatus(t) {
            this.states[t] = this.states[t] ? this.states[t] - 1 : 0
        }
        addImmune(t) {
            this.immunities[t] = this.immunities[t] ? this.immunities[t] + 1 : 1
        }
        removeImmune(t) {
            this.immunities[t] = this.immunities[t] ? this.immunities[t] - 1 : 0
        }
    }
    Object(s.c)(d, s.a)
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return o
    }));
    var s = i(6),
        n = i(1),
        r = i(0),
        a = i(3);
    class o extends s.a {
        valueOf() {
            return this.locked ? 0 : this.value.valueOf()
        }
        toJSON() {
            let t = super.toJSON();
            return this.timer > 0 && (t.timer = this.timer), t
        }
        get level() {
            return this._level
        }
        set level(t) {
            this._level = t
        }
        get exp() {
            return this._exp
        }
        set exp(t) {
            this.locked || this.disabled || (t < 0 ? console.warn(this.id + " exp neg: " + t) : (this._exp = t, (this._length && t >= this._length || !this._length && this.perpetual && t >= 1) && r.J.emit(r.w, this)))
        }
        get length() {
            return this._length
        }
        set length(t) {
            this._length = null == t ? null : t instanceof a.a ? t : new a.a(t)
        }
        get running() {
            return this._running
        }
        set running(t) {
            this._running = t
        }
        percent() {
            return this._exp / this._length * 100
        }
        constructor(t = null) {
            super(t), this.repeat = !1 !== this.repeat, this.type = "action", !this.length && !this.perpetual || this._exp || (this._exp = 0), this.running = this.running || !1, this.applyImproves()
        }
        applyImproves() {
            let t = this.valueOf();
            if (this.at)
                for (let e in this.at) t >= Number(e) && this.applyMods(this.at[e]);
            if (this.every)
                for (let i in this.every) {
                    var e = Math.floor(t / i);
                    e > 0 && this.applyMods(this.every[i], e)
                }
        }
        canUse(t) {
            return !this.timer && super.canUse(t)
        }
        canRun(t) {
            return !this.timer && super.canRun(t)
        }
        update(t) {
            this.exp += (this.rate ? this.rate.valueOf() : 1) * t
        }
        complete() {
            this.value++, this.log && n.c.doLog(this.log), this.mod && n.c.addMod(this.mod), this.result && n.c.applyEffect(this.result), this.exec && this.exec(), r.J.emit(r.c, this)
        }
        exec() {
            this.cd && n.c.addTimer(this), this.loot && n.c.getLoot(this.loot);
            var t = !1;
            if (this.at) {
                let e = this.at[this.valueOf()];
                e && (t = !0, this.applyMods(e))
            } else if (this.every) {
                let e = this.valueOf();
                for (let i in this.every) e % i == 0 && (t = !0, this.applyMods(this.every[i]))
            }
            t && r.J.emit(r.d, this), this._exp = 0
        }
        tick(t) {
            return this.timer -= t, this.timer < 0 && (this.timer = 0, !0)
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(1),
        n = i(30),
        r = i(7),
        a = i(18),
        o = i(23),
        l = i(27),
        h = i(16),
        c = i(4);
    const u = "any";
    class d {
        constructor(t) {
            this.items = t.filter(t => !t.unique), this.filters = {}
        }
        randBelow(t = 1, e) {
            let i = this.filters.level,
                s = 1 + Math.floor(Math.random() * t);
            var n;
            do {
                if (null != (n = Object(c.l)(i[s])) && (!e || e(n))) return n;
                --s < 0 && (s = t)
            } while (--t >= 0);
            return n
        }
        rand() {
            return 0 === this.items.length ? null : this.items[Math.floor(Math.random() * this.items.length)]
        }
        filtered(t, e) {
            let i = this.filters[t];
            return void 0 !== i ? i[e] : null
        }
        filterRand(t, e) {
            var i = this.filters[t];
            return void 0 === i ? null : void 0 === (i = t[e]) || 0 === i.length ? null : i[Math.floor(Math.random() * i.length)]
        }
        makeFilter(t, e = "") {
            let i = this.filters[t] = {};
            e = e || t;
            for (let t = this.items.length - 1; t >= 0; t--) {
                var s = this.items[t],
                    n = s[e] || u,
                    r = i[n];
                void 0 === r ? i[n] = [s] : r.push(s)
            }
        }
    }
    var p = i(6),
        f = i(2);

    function m(t, e) {
        if (!e) return console.warn("Missing gen item: " + e), null;
        var i = e.template || e.recipe;
        "string" == typeof i && (i = t.getData(i));
        var s = i ? i.type : e.type;
        if (!s) {
            if (!e.id) return null;
            console.warn("gen unknown: " + e.id + " -> " + e.template + " -> " + e.recipe), s = "item"
        }
        return e.template = i, (e = s === f.a || s === f.n || s === f.o ? new n.a(e) : s === f.h ? new h.b(i, e) : s === f.c ? new l.a(i, e) : new o.a(e)).owned = !0, e.revive(t), e
    }
    i.d(e, "b", (function() {
        return m
    })), i.d(e, "a", (function() {
        return v
    }));
    class v {
        constructor(t) {
            this.state = t, this.groups = {}, this.luck = t.getData("luck"), this.initGroup(f.a, t.armors), this.initGroup(f.n, t.weapons), this.initGroup("materials", t.materials);
            let e = this.initGroup(f.h, t.monsters);
            e.makeFilter("biome"), e.makeFilter("kind")
        }
        npc(t) {
            let e = new h.b(t);
            return e.value = 1, e.name = t.name, e.id = this.state.nextId(t.id), e
        }
        randEnemy(t, e = 1) {
            var i = 1;
            t.level ? ((i = t.level) instanceof Object && (i = i.value), t.scale && (i *= e)) : t.min && t.max && (i = t.min + e * (t.max - t.min)), t.range && (i += t.range * (2 * Math.random() - 1)), i = Math.ceil(i);
            let s = this.groups.monster.randBelow(i);
            return s ? this.npc(s) : null
        }
        instance(t) {
            let e;
            if (t.type === f.a || t.type === f.n || t.type === f.o) return this.itemClone(t, this.matForItem(t));
            if (t.type === f.c) e = new l.a(t);
            else if ("potion" === t.type) e = new o.a(t);
            else if ("item" === t.type) e = new o.a(t);
            else if (t.type === f.h) return this.npc(t);
            return void 0 === e ? null : (e.id = t.id + this.state.nextIdNum(), e.value = 1, e.owned = !0, e)
        }
        fromData(t, e = null) {
            if (null == t) return null;
            let i = t.material || e;
            return "number" != typeof i && i || (i = this.matForItem(t, i)), "string" == typeof i && (i = this.state.getData(i)), this.itemClone(t, i)
        }
        getLoot(t, e = 1) {
            if (e instanceof a.b) {
                if (!e.roll(this.luck.value)) return null;
                e = 1
            } else e.value && (e = e.value);
            return Array.isArray(t) ? t.flatMap ? t.flatMap(this.getLoot, this) : this.flatMap.call(t, this.getLoot, this) : "string" == typeof t && (t = this.state.getData(t)) instanceof p.a && !t.isRecipe && !t.instance ? this.getGData(t, e) : t ? t.pct && 100 * Math.random() > t.pct ? null : t.type === f.o || t.type === f.n || t.type === f.a ? this.fromData(t, t.level) : t.instance || t.isRecipe ? this.instance(t) : this.randLoot(t, e) : null
        }
        flatMap(t, e) {
            let i = [],
                s = this.length;
            for (let n = 0; n < s; n++) {
                let s = this[n];
                if (Array.isArray(s)) {
                    s = s.flatMap(t, e);
                    for (let t = 0; t < s.length; t++) i.push(s[t])
                } else i.push(t.call(e, s))
            }
            return i
        }
        randLoot(t, e) {
            if ((100 + this.luck / 2) * Math.random() < 50) return null;
            if (t.level) return this.fromLevel(t.level / 2, t.type, t.material);
            if (t.max) return this.randBelow(t.max / 2, t.type, t.material);
            let i = [];
            for (let e in t) {
                var s = this.getLoot(e, t[e]);
                s && (Array.isArray(s) ? i = Object(c.j)(i, s) : i.push(s))
            }
            return i
        }
        getGData(t, e) {
            if ("number" == typeof e || "boolean" == typeof e) {
                if ("upgrade" === t.type || "action" === t.type || "furniture" === t.type ? t.doUnlock(s.c) : t.amount(s.c, e), e > 0) return t.name
            } else console.warn("unknown amount: " + t + " -> " + e);
            return null
        }
        fromLevel(t = 0, e = null, i = null) {
            e = e || this.wearableType();
            let s = this.groups[e];
            if (s) {
                let e = s.filterRand("level", t);
                if (e) return this.fromData(e, i || t)
            } else console.warn("No group: " + e);
            return null
        }
        randBelow(t = 1, e = null, i = null) {
            e = e || this.wearableType();
            let s = this.groups[e];
            t = Math.floor(1 + Math.random() * t);
            let n = s.randBelow(t);
            return n ? this.fromData(n, i || t) : null
        }
        initGroup(t, e) {
            if (!e) return void console.warn("group undefined: " + t);
            let i = this.groups[t] = new d(e);
            return i.makeFilter("level"), i
        }
        matForItem(t, e = 1) {
            let i = t.only,
                s = t.exclude;
            return this.groups.materials.randBelow(Math.max(t.level + 1, e), e => !(i && !Object(r.e)(i, e.type, e.kind)) && ((!s || !Object(r.e)(s, e.type, e.kind, e.name)) && (!(e.only && !Object(r.e)(e.only, t.type, t.kind)) && (!e.exclude || !Object(r.e)(e.exclude, t.type, t.kind)))))
        }
        wearableType() {
            return Math.random() < .65 ? f.a : f.n
        }
        itemClone(t, e) {
            let i = new n.a(t);
            return e ? (i.applyMaterial(e), e.id && (i.name = e.id + " " + (t.name || t.id))) : i.name = t.name || t.id, i.id = t.id + this.state.nextIdNum(), i
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return a
    }));
    var s = i(9),
        n = i(4),
        r = i(3);
    class a {
        toJSON() {
            return {
                name: this.name,
                dmg: this._damage,
                tohit: this.tohit || void 0,
                bonus: this.bonus || void 0,
                kind: this.kind,
                id: this.id,
                dot: this.dot
            }
        }
        get name() {
            return this._name
        }
        set name(t) {
            this._name = t
        }
        get kind() {
            return this._kind
        }
        set kind(t) {
            this._kind = t, this.dot && (this.dot.kind || (this.dot.kind = t))
        }
        get targets() {
            return this._targets
        }
        set targets(t) {
            this._targets = t
        }
        get bonus() {
            return this._bonus
        }
        set bonus(t) {
            this._bonus ? this._bonus.base = t instanceof r.a ? t.base : t : this._bonus = new r.a(t)
        }
        set dmg(t) {
            this.damage = t
        }
        get damage() {
            return this._damage
        }
        set damage(t) {
            t instanceof s.b || "string" == typeof t || "object" == typeof t ? this._damage = new s.b(t) : isNaN(t) ? "string" != typeof t && "object" != typeof t || (this._damage = new s.b(t)) : this._damage = Number(t)
        }
        clone() {
            return new a({
                name: this.name,
                damage: this.damage,
                bonus: this.bonus,
                tohit: this.tohit,
                kind: this.kind,
                targets: this.targets,
                dot: this.dot
            })
        }
        constructor(t = null) {
            t && Object(n.d)(this, t), this.damage = this.damage || 0, this.bonus = this.bonus || 0, this.tohit = this.tohit || 0
        }
        getDamage() {
            return this.bonus + ("number" == typeof this._damage ? this._damage : this._damage.value)
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return o
    }));
    var s = i(8),
        n = i(4),
        r = i(10);
    const a = {
        stack: !0,
        consume: !0
    };
    class o {
        toJSON() {
            let t = this.excludeJSON() || {};
            return this.template || this.recipe || (t.type = this.type), t.id = this.id, t.recipe = this.recipe, t || void 0
        }
        get instance() {
            return !0
        }
        set instance(t) {}
        get recipe() {
            return this.template ? this.template.id : this._id
        }
        set recipe(t) {}
        get consume() {
            return this._consume
        }
        set consume(t) {
            this._consume = t
        }
        get stack() {
            return this._stack
        }
        set stack(t) {
            this._stack = t
        }
        get defaults() {
            return this._defaults || a
        }
        set defaults(t) {
            this._defaults = t
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.value = this._value || 1, null !== this.consume && void 0 !== this.consume || (this.consume = this.defaults.consume), null !== this.stack && void 0 !== this.stack || (this.stack = this.defaults.stack)
        }
        canPay(t) {
            return this.value >= t
        }
        canUse(t) {
            return this.consume || this.use
        }
        onUse(t, e) {
            !0 === this.consume && (this.value--, this.value <= 0 && (e || t.state.inventory).remove(this)), this.use && (this.use.dot && t.state.player.addDot(this.use.dot, this.id, this.name), t.applyEffect(this.use))
        }
        amount(t) {}
        maxed() {
            return !1 === this.stack && this.value > 0 || this.max && this.value >= this.max
        }
        revive(t) {
            "string" == typeof this.template && (this.template = t.getData(this.template)), this.template && Object(n.e)(this.template, this), this.mod && (this.mod = Object(r.a)(this.mod, this.id))
        }
    }
    Object(s.c)(o, s.a)
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return r
    }));
    var s = i(6),
        n = i(2);
    class r extends s.a {
        get require() {
            return super.require || (this._locked ? t => this.positive() : null)
        }
        set require(t) {
            super.require = t
        }
        positive() {
            return super.value > 0 || this.rate.value > 0 && (!this.max || this.max.value > 0)
        }
        get current() {
            return this.unit ? Math.floor(super.value.valueOf()) : super.value.valueOf()
        }
        get val() {
            return super.value
        }
        set val(t) {
            super.value = t
        }
        get value() {
            return super.value
        }
        set value(t) {
            t > this.max ? t < super.value ? super.value = t : super.value = Math.max(this.max.value, super.value.valueOf()) : super.value = t >= 0 ? t : 0
        }
        get delta() {
            return this._delta
        }
        set delta(t) {
            this._delta = t
        }
        constructor(t = null) {
            super(t), !1 !== this.repeat && (this.repeat = !0), null !== this.unit && void 0 !== this.unit || (this.unit = !0), null !== this.rate && void 0 !== this.rate || (this.rate = 0), this._lastValue = super.value.valueOf(), this.type = this.type || n.l, this._delta = 0
        }
        maxed() {
            return !!this.max && this.value >= this.max
        }
        update(t) {
            if (0 !== this._rate.value) {
                let e = super.value.base + this._rate.value * t;
                this.max && e > this.max.value ? e = this.max.value : e < 0 && (e = 0), this._delta = e - this._lastValue, super.value = this._lastValue = e
            } else this._delta = 0
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return a
    }));
    var s = i(9),
        n = i(10),
        r = i(8);
    class a {
        toJSON() {
            if (this.id) return {
                id: this.id,
                kind: this.kind || void 0,
                name: this.name || void 0,
                dmg: this.damage || void 0,
                effect: this.effect || void 0,
                mod: this.mod || void 0,
                acc: this.acc || void 0,
                duration: this.duration,
                source: this.source ? "string" == typeof this.source ? this.source : this.source.id : void 0
            };
            console.warn("MISSING DOT ID: " + this)
        }
        set dmg(t) {
            this.damage = t
        }
        get damage() {
            return this._damage
        }
        set damage(t) {
            t instanceof s.b ? this._damage = t : isNaN(t) ? "string" != typeof t && "object" != typeof t || (this._damage = new s.b(t)) : this._damage = Number(t)
        }
        getDamage() {
            return "number" == typeof this._damage ? this._damage : this._damage.value
        }
        valueOf() {
            return this.duration > 0 ? 1 : 0
        }
        constructor(t, e, i) {
            Object.assign(this, t), this.source = this.source || e || null, this.name || (this.name = i || (e ? e.name : "")), this.id || console.error("BAD DOT ID: " + this.name), this.duration || (this.duration = 10), this.mod && (this.mod = Object(n.a)(this.mod, this.id), Object(r.d)(this.mod, this)), this.acc = this.acc || 0
        }
        revive(t) {
            this.source && "string" == typeof this.source && (this.source = t.getData(this.source))
        }
        tick(t) {
            return this.acc += t, this.acc >= 1 ? (this.acc--, this.duration--, 1) : 0
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return u
    })), i.d(e, "a", (function() {
        return d
    }));
    var s = i(1),
        n = (i(9), i(25), i(16)),
        r = i(0),
        a = i(21),
        o = i(19);
    const l = "enemies",
        h = "self",
        c = "rand";

    function u(t, e, i = null) {
        if (t && t.alive) {
            if (t.isImmune(e.kind)) return r.J.emit(r.y, t.name + " IMMUNE to " + e.kind), !1;
            if (e.damage) {
                e.getDamage || console.error("NO DMG FUNC: " + e);
                let s = e.getDamage();
                i && i !== e && i.damage && (s += i.getDamage(e.kind));
                let n = t.getResist(e.kind);
                if (n > 0 && (s *= 1 - n), t.hp -= s, t.hp <= 0 && r.J.emit(r.g, t, e), r.J.emit(r.j, t, s, e.name || (i ? i.name : "")), e.leech && i) {
                    let t = Math.floor(100 * e.leech * s) / 100;
                    i.hp += t, r.J.emit(r.q, null, i.name + " steals " + t + " life.")
                }
            }
            return e.dot && t.addDot(e.dot, i, e.name), !0
        }
    }
    class d {
        toJSON() {
            var t = void 0;
            if (this.allies.length > 1) {
                t = [];
                for (let i = 1; i < this.allies.length; i++) {
                    var e = this.allies[i];
                    t.push(e.keep ? e.id : e)
                }
            }
            return {
                enemies: this._enemies,
                allies: t
            }
        }
        get enemies() {
            return this._enemies
        }
        set enemies(t) {
            this._enemies = t
        }
        get allies() {
            return this._allies
        }
        set allies(t) {
            this._allies = t
        }
        get complete() {
            return 0 === this._enemies.length
        }
        constructor(t = null) {
            t && Object.assign(this, t), this._enemies || (this._enemies = []), this.allies || (this.allies = [])
        }
        revive(t) {
            this.state = t, this.player = t.player;
            for (let e = this._enemies.length - 1; e >= 0; e--) this._enemies[e] = Object(a.b)(t, this._enemies[e]), this._enemies[e] || this._enemies.splice(e, 1);
            r.J.add(r.g, this.charDied, this);
            for (let i = this._allies.length - 1; i >= 0; i--) {
                var e = this._allies[i];
                "string" == typeof e ? this._allies[i] = t.minions.find(e) : e && "object" == typeof e && (this._allies[i] = Object(a.b)(t, e)), this._allies[i] || this._allies.splice(i, 1)
            }
            this._allies.unshift(this.player)
        }
        addNpc(t) {
            t.timer = Object(o.b)(t.speed), t.team === n.a ? this._allies.push(t) : this._enemies.push(t)
        }
        update(t) {
            if (0 !== this._enemies.length && !1 !== this.player.alive) {
                var e, i;
                for (let s = this._allies.length - 1; s >= 0; s--) !1 !== (e = this._allies[s]).alive ? (e !== this.player && e.update(t), (i = e.combat(t)) && this.attack(e, i, this._enemies)) : (e.hp -= t, e.hp < -5 && this._allies.splice(s, 1));
                for (let s = this._enemies.length - 1; s >= 0; s--)(e = this._enemies[s]).update(t), !1 !== e.alive ? (i = e.combat(t)) && this.attack(e, i, this._allies) : this._enemies.splice(s, 1)
            }
        }
        spellAttack(t) {
            0 === this._enemies.length ? r.J.emit(r.q, null, this.player.name + " casts " + t.name + " at the darkness.") : this.attack(this.player, t.attack, this.enemies)
        }
        attack(t, e, i) {
            e && e.targets === l ? i.forEach(i => i.alive ? this.doAttack(t, e, i) : null) : this.doAttack(t, e, this.nextTarget(i))
        }
        doAttack(t, e, i) {
            i && this.tryHit(t, i, e) && u(i, e, t)
        }
        getTarget(t, e) {
            if (!e) return t.team === n.a ? this.nextTarget(this._enemies) : this.nextTarget(this.allies);
            if (e === l) return t.team === n.a ? this._enemies : this.allies;
            if (e === h) return t;
            if (e === c) {
                return Math.floor(Math.random() * (this._allies.length + this._enemies.length)) < this.allies.length ? this.nextTarget(this.allies) : this.nextTarget(this.enemies)
            }
        }
        nextTarget(t) {
            for (let e = t.length - 1; e >= 0; e--)
                if (t[e].alive) return t[e]
        }
        tryHit(t, e, i) {
            let s = t.getHit();
            if (i && i != t && (s += i.tohit || 0), this.dodgeRoll(e.dodge, s)) r.J.emit(r.k, e.name + " dodges " + (i.name || t.name));
            else {
                if (Math.random() * (10 + s) >= Math.random() * (10 + e.defense)) return !0;
                r.J.emit(r.k, t.name + " misses " + e.name)
            }
        }
        setEnemies(t, e) {
            var i, s = [];
            if (Array.isArray(t))
                for (let n = t.length - 1; n >= 0; n--)(i = this.makeEnemy(t[n], e)) && s.push(i);
            else(i = this.makeEnemy(t, e)) && s.push(i);
            s.length > 0 && s[0] && r.J.emit(r.q, s[0].name + " Encountered"), this.enemies = s, this.setTimers()
        }
        setTimers() {
            let t = this.player.delay;
            for (let e = this.enemies.length - 1; e >= 0; e--) this.enemies[e].delay < t && (t = this.enemies[e].delay);
            for (let e = this.allies.length - 1; e >= 0; e--) this.allies[e].delay < t && (t = this.allies[e].delay);
            t -= 1, this.player.timer = this.player.delay - t;
            for (let e = this.enemies.length - 1; e >= 0; e--) this.enemies[e].timer = this.enemies[e].delay - t;
            for (let e = this.allies.length - 1; e >= 0; e--) this.allies[e].timer = this.allies[e].delay - t
        }
        makeEnemy(t, e = 1) {
            return "string" == typeof t && (t = s.c.getData(t)) ? s.c.itemGen.npc(t) : t ? ((t = s.c.itemGen.randEnemy(t, e)) || console.warn("Missing Enemy: "), t) : null
        }
        begin() {
            this._enemies = [], this.allies = this.state.minions.active.slice(0), this.allies.unshift(this.player)
        }
        dodgeRoll(t, e) {
            let i = (e > t ? 1 : t - e) / 16;
            return Math.random() > Math.exp(-i * i)
        }
        charDied(t, e) {
            t !== this.player && (t.team === n.a ? r.J.emit(r.e, t) : r.J.emit(r.o, t, e))
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return a
    }));
    var s = i(6),
        n = i(1),
        r = i(2);
    class a extends s.a {
        get isRecipe() {
            return !0
        }
        get exp() {
            return this._exp
        }
        set exp(t) {
            this._exp = t
        }
        get length() {
            return this._length
        }
        set length(t) {
            this._length = t
        }
        encode() {
            return this.excludeJSON()
        }
        toJSON() {
            return this.value > 0 ? {
                value: this.value
            } : void 0
        }
        clone() {
            let t = new a(this);
            return t.exp = 0, t
        }
        get done() {
            return this._exp >= this.length
        }
        constructor(t = null, e = null) {
            super(t), e && Object.assign(this, e), this.type = r.c, this._exp = this._exp || 0, this.level = this.level || 1, this.length = this.length || 5 * this.level
        }
        revive(t) {}
        update(t) {
            this._exp += t, this.effect && n.c.applyEffect(this.effect, t)
        }
        maxed() {
            return !1
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(6),
        n = i(3),
        r = i(24),
        a = i(1),
        o = i(26),
        l = i(19),
        h = i(0),
        c = i(30),
        u = i(33),
        d = i(4);
    i(25);
    const p = new c.a({
            id: "baseWeapon",
            name: "fists",
            attack: {
                name: "fists",
                tohit: 1,
                kind: "blunt",
                damage: "0~1"
            }
        }),
        f = () => Math.random().toString(36),
        m = .125;
    class v extends l.a {
        get level() {
            return this._level
        }
        set level(t) {
            this._level && "number" == typeof t ? this._level.value = t : this._level = t
        }
        get title() {
            return this._title
        }
        set title(t) {
            this._title = t
        }
        get titles() {
            return null == this._titles && (this._titles = []), this._titles
        }
        set titles(t) {
            this._titles = t
        }
        get exp() {
            return this._exp
        }
        set exp(t) {
            if (void 0 === this._exp) this._exp = t;
            else
                for (this._exp.value = t; this._next > 0 && this._exp.value >= this._next;) this.levelUp()
        }
        get gclass() {
            return this._gclass
        }
        set gclass(t) {
            this._gclass = t
        }
        get next() {
            return this._next
        }
        set next(t) {
            this._next = t
        }
        get hp() {
            return this._hp
        }
        set hp(t) {
            this._hp ? this._hp.value = t : t instanceof s.a ? this._hp = t : console.error("Invalid Hp: " + t)
        }
        get damage() {
            return this._damage
        }
        set damage(t) {
            this._damage = t instanceof n.a ? t : new n.a(t)
        }
        get speed() {
            return this._speed
        }
        set speed(t) {
            this._speed ? this._speed.value = t : t instanceof s.a && (this._speed = t), this._speed ? this.delay = Object(l.b)(this._speed.value) : console.warn("no speed: " + this.id)
        }
        get weapon() {
            return this._weapon
        }
        set weapon(t) {
            t ? (this._weapon = t, t instanceof c.a || console.log("NON WEAPON: " + t)) : this._weapon = p
        }
        get alive() {
            return this._hp.value > 0
        }
        get points() {
            return this._points
        }
        set points(t) {
            this._points = t instanceof n.a ? t : new n.a(t)
        }
        get hits() {
            return this._hits ? this._hits : this._hits = {}
        }
        set hits(t) {
            this._hits = Object(u.b)(t)
        }
        get bonuses() {
            return this._bonuses ? this._bonuses : this._bonuses = {}
        }
        set bonuses(t) {
            this._bonuses = Object(u.b)(t)
        }
        get hid() {
            return this._hid
        }
        set hid(t) {
            this._hid = t
        }
        toJSON() {
            let t = {};
            return t.hid = this.hid, t.defense = this.defense, t.tohit = this.tohit, t.title = this.title, t.name = this.name, t.titles = this.titles, t.title = this.title, t.next = this.next, t.timer = this.timer, t.alignment = this.alignment, t.damage = this.damage, t.dots = this.dots, t.points = this.points, t.bonuses = this.bonuses, t.hits = this.hits, t.immunities = this.immunities, t.resist = this.resist, t.retreat = this.retreat || void 0, t.states = this.states, t.gclass = this.gclass, this.weapon && (t.weapon = this.weapon.id), t
        }
        getDamage(t) {
            return this.damage.valueOf() + (t && this.bonuses[t] || 0)
        }
        getHit(t) {
            return this.tohit.valueOf() + (t && this.hits[t] || 0)
        }
        get sp() {
            return this._sp
        }
        set sp(t) {
            t instanceof s.a ? this._sp = t : this._sp.value = t
        }
        constructor(t = null) {
            super(t), this.id = this.type = "player", t && t.name || (this.name = "Unnamed Survivor"), this.hid || (this.hid = f()), this.level || (this.level = 0), this._title = this._title || "waif", this.titles = this._titles || [], this._next = this._next || 50, this.retreat = this.retreat || 0, this.initStates(), this.tohit || (this.tohit = 1), this.defense || (this.defense = 0), this.alignment = this.alignment || "neutral", null !== this.damage && void 0 !== this.damage || (this.damage = 1), this.weapon || (this.weapon = p)
        }
        setClass(t) {
            this.gclass = t, this.setTitle(t), h.J.emit(h.f, this)
        }
        setName(t) {
            t && (this.name = t, h.J.emit(h.h, this))
        }
        setTitle(t) {
            t && (this.title = t, this.addTitle(t), h.J.emit(h.i, this))
        }
        addTitle(t) {
            this._titles.includes(t) || (this._titles.push(t), h.J.emit(h.D, t, this._titles.length))
        }
        revive(t) {
            super.revive(t), this.weapon && "string" == typeof this.weapon && (this.weapon = t.equip.find(this.weapon)), this.spelllist = t.getData("spelllist"), this.stressors = t.stressors
        }
        begin() {
            for (let t = this.dots.length - 1; t >= 0; t--) this.dots[t].mod && a.c.addMod(this.dots[t].mod, 1)
        }
        defeated() {
            if (this._hp.value <= 0 || this.stamina.value < 0) return !0;
            for (let e = this.stressors.length - 1; e >= 0; e--) {
                var t = this.stressors[e];
                if (t.value >= t.max.value) return !0
            }
            return !1
        }
        update(t) {
            let e, i = this.dots;
            for (let s = i.length - 1; s >= 0; s--)(e = i[s]).tick(t) && (e.effect && a.c.applyEffect(e.effect, 1), e.damage && Object(o.b)(this, e, e.source), e.duration <= t && (i.splice(s, 1), e.mod && a.c.addMod(e.mod, -1)));
            this.regen && (this.hp += this.regen * t)
        }
        combat(t) {
            if (this.timer -= t, this.timer <= 0 && (this.timer += Object(l.b)(this.speed), 0 === this.spelllist.count || !this.tryCast())) return this.weapon.attack
        }
        tryCast() {
            return !!this.spelllist.canUse(a.c) && this.spelllist.onUse(a.c)
        }
        getResources() {
            let t = [];
            for (let i in this) {
                var e = this[i];
                null !== e && "object" == typeof e && "resource" === e.type && t.push(e)
            }
            return t
        }
        applyDot(t) {
            a.c.addMod(t.mod, 1)
        }
        removeResist(t, e) {
            this._resist[t] && (this._resist[t].base -= e)
        }
        addResist(t, e) {
            this._resist[t] ? this._resist[t].base += e : this._resist[t] = new n.a(e)
        }
        levelUp() {
            this._level.add(1), this.dirty = !0, this._level % 3 == 0 && this.sp.add(1), this._level % 5 == 0 && (a.c.getData("minions").maxAllies.base += 1), this._level % 4 == 0 && a.c.getData("speed").add(1), a.c.getData("spelllist").max.base += 1, this.tohit.base += 1, this.hp.max.base += 2, this.stamina.max.base += 1, this._exp.value -= this._next, this._next = Math.floor(this._next * (1 + m)), h.J.emit(h.A, this, this._level.valueOf())
        }
        initStates() {
            this._resist = this._resist || {};
            for (let t in this._resist) this._resist[t] = new n.a(this._resist[t]);
            this.regen = this.regen || 0, this._states = this._states || {
                fly: 0,
                sleep: 0,
                swim: 0,
                immortal: 0,
                paralyzed: 0,
                stoned: 0,
                confused: 0
            }, this.immunities || (this.immunities = {
                fire: 0,
                water: 0,
                air: 0,
                earth: 0,
                light: 0,
                shadow: 0,
                arcane: 0,
                physical: 0,
                natural: 0,
                poison: 0,
                disease: 0
            }), this.bonuses || (this.bonuses = {})
        }
    }
    var g = i(9),
        y = i(18),
        _ = i(10);
    class b extends r.a {
        constructor(t) {
            super(t), this._max || (this.max = 0), t.used && (this.value.base = t.used)
        }
        free() {
            return this.max - this.value
        }
        empty() {
            return this.value >= this.max.value
        }
        canPay(t) {
            return this.value + t <= this.max.value
        }
        remove(t) {
            this.value.base += t
        }
        filled(t = 0) {
            return this.value <= 0 || this.rate && this.rate + t >= 0
        }
        maxed() {
            return this.value <= 0
        }
    }
    var x = i(31),
        w = i(32),
        k = i(16),
        O = i(2);
    const A = {
        level: 1,
        locked: !1
    };
    class S extends s.a {
        get defaults() {
            return A
        }
        get isRecipe() {
            return !0
        }
        toJSON() {
            return this.value > 0 ? {
                value: this.value
            } : void 0
        }
        constructor(t = null) {
            super(t, A), this.type = O.h, super.buy || (super.buy = null), this.hp = this.hp || 2 * this.level, this.speed = this.speed || this.level, this.tohit = this.tohit || this.level, this.defense = null === this.defense || void 0 === this.defense ? this.level : this.defense
        }
        amount(t, e = 1) {
            t.create(this, e)
        }
        onCreate(t, e = k.a, i = !1) {
            let s = t.itemGen.npc(this);
            s.team = e, s.active = !i, i ? t.state.minions.add(s) : t.state.raid.addNpc(s)
        }
        maxed() {
            return !1
        }
    }
    var C = i(20);
    const j = t => Math.ceil(4.4 * Math.exp(.3 * t)),
        T = (t, e) => t.dist >= e.dist,
        I = (t, e) => t.player.level >= e.level - 1;
    class N extends C.a {
        get encs() {
            return this._encs
        }
        set encs(t) {
            let e = [];
            for (let i in t) e.push(t[i]);
            this._encs = e
        }
        constructor(t = null) {
            super(t), null !== this.level && void 0 !== this.level || (this.level = 1), this.type = O.g, this._exp = this._exp || 0, this._length = this._length || 100, this.require || (this.require = I), this.need || (this.need = T), this.dist = void 0 === this.dist || null === this.dist ? j(this.level) : this.dist, this.sym || (this.sym = "🌳"), null == this._encs && (this._encs = [])
        }
        getEnc() {
            return this._encs[Math.floor(Math.random() * this._encs.length)]
        }
        complete() {}
        lockReq() {
            return !1
        }
    }
    var M = i(52);
    class L extends C.a {
        get enemies() {
            return this._enemies
        }
        set enemies(t) {
            let e = [];
            for (let i in t) e.push(t[i]);
            this._enemies = e
        }
        constructor(t = null) {
            super(t), this.level = void 0 !== this.level ? this.level : 1, this.type = M.a, this._exp = this._exp || 0, this.length || (this.length = 10 * this.level), this.require = this.require || this.levelTest, this.dist = void 0 === this.dist || null === this.dist ? j(this.level) : this.dist, this.sym || (this.sym = "⚔"), null == this.need && (this.need = this.distTest)
        }
        getEnemy() {
            return this.getBoss(this.boss) || this._enemies[Math.floor(Math.random() * this._enemies.length)]
        }
        getMob() {
            return this._enemies[Math.floor(Math.random() * this._enemies.length)]
        }
        getBoss(t) {
            if (!t) return null;
            if ("string" == typeof t) {
                if (this.exp !== this.length - 1) return null
            } else {
                if (Array.isArray(t)) {
                    if (this.exp !== this.length - 1) return null;
                    var e = Object(d.i)(t, t => this.getBoss(t));
                    return e.length > 0 ? e : null
                }
                t.hasOwnProperty(this.exp + 1) && (t = t[this.exp + 1])
            }
            return (t = a.c.state.getUnique(t)) ? t.id : null
        }
        complete() {}
        distTest(t, e) {
            return t.dist >= e.dist
        }
        levelTest(t, e) {
            return t.player.level >= e.level - 1
        }
    }
    var D = i(22);
    const E = (t, e) => t.player.level >= 2 * e.level,
        $ = (t, e = 1) => {
            if ("string" == typeof t) return t = "g." + t, new Function("g", "return !" + t + "||" + t + ">=" + e);
            if (Array.isArray(t)) {
                if (1 === t.length) return $(t[0]);
                var i = "return ";
                for (let n = t.length - 1; n >= 0; n--) {
                    var s = "g." + t[n];
                    i += "!" + s + "||" + s + ">=" + e, n > 0 && (i += "&&")
                }
                return new Function("g", i)
            }
            return null
        };
    class P extends C.a {
        get targets() {
            return this._targets
        }
        set targets(t) {
            this._targets = "string" == typeof t ? t.split(",") : t
        }
        toJSON() {
            let t = super.toJSON();
            return this.owned && (t.owned = this.owned), t
        }
        constructor(t = null) {
            if (super(t), this.repeat = !0, this.type = "spell", this.level = this.level || 1, this.owned = this.owned || !1, this.owned || (this.buy || (this.buy = {}), !this.buy.arcana && this.level > 1 && (this.buy.arcana = this.level - 1)), this.attack && (this.attack instanceof D.a || (this.attack = new D.a(this.attack)), this.attack.name = this.name, this.attack.kind || (this.attack.kind = this.school)), !1 !== this.locked)
                if (this.school) {
                    let t = $(this.school, this.level, this.ratio);
                    t ? this.addRequire(t) : this.addRequire(E)
                } else this.addRequire(E)
        }
        canUseOn(t) {
            return !(t.level && 2 * this.level < t.level) && (!this.targets || Object(O.p)(this.targets, t))
        }
    }
    var U = i(7);
    class R extends s.a {
        toJSON() {
            return this.value > 0 ? this.value : void 0
        }
        get isRecipe() {
            return !0
        }
        get material() {
            return this._material
        }
        set material(t) {
            this._material = t
        }
        get armor() {
            return this._armor
        }
        set armor(t) {
            this._armor = t
        }
        get attack() {
            return this._attack
        }
        set attack(t) {
            this._attack = t
        }
        get kind() {
            return this._kind
        }
        set kind(t) {
            this._kind = t
        }
        constructor(t = null) {
            super(t), this.level = this.level || 1, this.attack && (this.attack.damage || (this.attack.damage = this.attack.dmg))
        }
    }
    var J = i(8);
    class q {
        get isRecipe() {
            return !0
        }
        constructor(t = null) {
            t && Object.assign(this, t)
        }
    }
    Object(J.c)(q, J.a);
    class F extends C.a {
        get targets() {
            return this._targets
        }
        set targets(t) {
            this._targets = "string" == typeof t ? t.split(",") : t
        }
        constructor(t) {
            super(t), this.verb = this.verb || "enchanting", this.level = this.level || 1, this.need = this.need || "enchantsource", this.mod && Object(J.d)(this.mod, 1)
        }
        beginUseOn(t) {
            t.enchants = (t.enchants || 0) + this.level, t.busy = !0
        }
        useOn(t) {
            this.adj && !t.name.includes(this.adj) ? t.name += " " + this.adj : t.name.includes("Enchanted") || (t.name = "Enchanted " + t.name), t.busy = !1, this.exec()
        }
        onStop(t) {
            t && (t.busy = !1, t.enchants -= this.level)
        }
        complete() {}
        canUseOn(t) {
            let e = t.level || 1;
            return !(t.enchants + this.level > e || t.busy) && (!this._targets || Object(O.p)(this._targets, t))
        }
    }
    var H = i(23);
    const B = {
        level: 1,
        repeat: !0,
        stack: !0
    };
    class V extends s.a {
        get isRecipe() {
            return !0
        }
        constructor(t = null) {
            super(t, B), this.require = this.require || this.unlockTest
        }
        unlockTest(t, e) {
            return t.potions.value >= e.level || t.herbalism.value / 2 >= e.level
        }
    }
    var z = i(27);
    class G extends s.a {
        get rand() {
            return this._rand
        }
        set rand(t) {
            this._rand = t
        }
        get cd() {
            return this._cd
        }
        set cd(t) {
            this._cd = t
        }
        constructor(t = null) {
            super(t)
        }
        doUnlock(t) {
            this.disabled || this.value > 0 && !this.repeat || (this.locked && h.J.emit(h.u, this), this.loot && t.getLoot(this.loot), this.rand || super.amount(t, 1), this.locked = !1, h.J.emit(h.r, this))
        }
        amount(t, e) {
            this.doUnlock(t)
        }
    }
    class W {
        get results() {
            return this._results
        }
        get promise() {
            return this._promise
        }
        constructor(t, e) {
            this._dir = t || "/", e && this.setFiles(e)
        }
        setFiles(t) {
            this._files = t;
            let e = {};
            for (let i = t.length - 1; i >= 0; i--) e[t[i]] = null;
            this._loads = e
        }
        load(t = null) {
            t && this.setFiles(t);
            let e = this._loads,
                i = this.requestInfo(),
                s = [];
            for (let t in e) s.push(window.fetch(this._dir + t + ".json", i).then(i => 200 !== i.status ? (console.warn("Bad Status: " + i.status), e[t] = null, e[t]) : i.json().then(i => e[t] = i), i => e[t] = null));
            return this._promise = Promise.all(s).then(() => e, t => {
                console.error(t.message + "\n" + t.stack)
            })
        }
        requestInfo() {
            let t = new Headers;
            return t.append("Content-Type", "text/json"), {
                method: "GET",
                headers: t,
                mode: "cors",
                credentials: "same-origin"
            }
        }
    }
    class K extends s.a {
        constructor(t = null) {
            super(t), !1 !== t.warn && (this.warnMsg = "Alternate Wizard classes of this tier will be locked.", this.warn = !0)
        }
        amount(t, e) {
            super.amount(t, e) && (t.state.player.setClass(this.name), this.loot && t.getLoot(this.loot), this.locked = !1, h.J.emit(h.r, this))
        }
    }
    var X = i(50);
    i.d(e, "c", (function() {
        return Z
    })), i.d(e, "b", (function() {
        return tt
    }));
    const Q = ["resources", "upgrades", "actions", "suits", "furniture", "items", "skills", "player", "spells", "monsters", "dungeons", "events", "classes", "armors", "weapons", "materials", "enchants", "sections", "potions", "encounters", "locales", "stressors", "seasonal"],
        Y = /^[A-Za-z_]+\w*$/,
        Z = (t, e = "") => {
            return new W(e, t).load()
        };
    e.a = {
        main: null,
        async loadGame(t) {
            return null === this.main ? (this.main = new X.a, this.main.load(Q).then(e => this.instance(e.templates, e.lists, t))) : this.instance(this.main.templates, this.main.lists, t)
        },
        instance(t, e, i = {}) {
            i = i || {};
            for (let t in i) "items" !== t && (i[t] = et(i[t], t));
            let s = i.items;
            if (s)
                for (let e in t) {
                    let i = t[e];
                    if (i.alias && !s[e]) {
                        var n = s[i.alias];
                        n && (console.warn("alias: " + i.alias + " -> " + e), s[e] = n, delete s[i.alias])
                    }
                } else s = {};
            i.items = this.mergeItems(s, t);
            let r = this.buildLists(i.items, e);
            return this.initInstance(i, r)
        },
        buildLists(t, e) {
            let i = {};
            for (let r in e) {
                var s = e[r];
                if (s) {
                    var n = i[r] = [];
                    for (let e = 0; e < s.length; e++) n[e] = t[s[e].id]
                }
            }
            return i
        },
        mergeItems(t, e) {
            for (let s in e) {
                var i = t[s] || {};
                "number" == typeof i && (i = {
                    val: i
                }), Object(U.g)(i, e[s]), t[s] = et(i, s), i.template = e[s]
            }
            return t
        },
        initInstance(t, e) {
            var i = t.items;
            return e.resources && (t.resources = this.initItems(i, e.resources, r.a)), e.stressors && (t.stressors = this.initItems(i, e.stressors, r.a, "stress", "stress"), t.stressors.forEach(t => t.hidden = !0)), e.upgrades && (t.upgrades = this.initItems(i, e.upgrades, s.a, null, "upgrade")), e.suits && (t.suits = this.initItems(i, e.suits, s.a, O.e, O.e), t.suits.forEach(t => t.slot = O.e)), e.furniture && this.initItems(i, e.furniture, s.a, "furniture", "furniture"), e.skills && (t.skills = this.initItems(i, e.skills, w.a, O.m)), e.encounters && (t.encounters = this.initItems(i, e.encounters, z.a, O.c, O.c)), e.monsters && (t.monsters = this.initItems(i, e.monsters, S, O.h, O.h)), e.locales && this.initItems(i, e.locales, N), e.dungeons && this.initItems(i, e.dungeons, L), e.spells && this.initItems(i, e.spells, P), e.stats && this.initItems(i, e.stats, x.a, "stat", "stat"), this.initItems(i, e.items, H.a, O.f, O.f), e.armors && (t.armors = this.initItems(i, e.armors, R, O.a, O.a), t.armors.forEach(t => t.kind = t.kind || O.a)), e.weapons && (t.weapons = this.initItems(i, e.weapons, R, O.n, O.n), t.weapons.forEach(t => t.kind = t.kind || O.n)), e.potions && (t.potions = this.initItems(i, e.potions, V, O.j, O.j)), e.materials && (t.materials = this.initItems(i, e.materials, q, "material", "material ")), e.events && (t.events = this.initItems(i, e.events, G, "event", "event")), e.classes && (t.classes = this.initItems(i, e.classes, K, "class", "class")), e.actions && (t.actions = this.initItems(i, e.actions, C.a, null, "action")), e.enchants && (t.enchants = this.initItems(i, e.enchants, F, null, "enchant")), e.sections && (t.sections = this.initItems(i, e.sections)), e.player && (t.player = this.initPlayer(i, e.player, t.items.player)), t
        },
        initItems(t, e, i = s.a, n = null, r = null) {
            if (null != e) {
                for (let s = e.length - 1; s >= 0; s--) {
                    var a = e[s];
                    a.reverse ? e[s] = a = new b(a) : a.stat ? e[s] = a = new x.a(a) : e[s] = a = new i(a), n && a.addTag(n), r && (a.type = r), t[a.id] = a
                }
                return e
            }
        },
        initPlayer(t, e, i = null) {
            if (!e) return;
            let s, n = i || {};
            for (let i of e)(s = n[i.id] = !0 === i.stat ? new x.a(i) : !0 === i.reverse ? new b(i) : new r.a(i)).type = "resource", t[i.id] = s;
            return t.player = new v(n)
        }
    };
    const tt = t => {
            let e;
            for (let i in t) "object" == typeof(e = t[i]) ? tt(e) : Object.freeze(e);
            return Object.freeze(t)
        },
        et = (t, e = "") => {
            if (Array.isArray(t))
                for (let i = t.length - 1; i >= 0; i--) t[i] = et(t[i], e);
            else if ("object" == typeof t)
                for (let n in t)
                    if ("mod" !== n)
                        if ("require" !== n && "need" !== n) {
                            n.includes(".") && Object(d.m)(t, n);
                            var i = t[n],
                                s = typeof i;
                            "string" === s ? y.a.test(i) ? t[n] = new y.b(i) : g.a.test(i) ? t[n] = new g.b(i) : isNaN(i) ? "damage" !== n && "dmg" !== n || (t[n] = st(i)) : null != i && "" !== i && console.warn("string used as Number: " + n + " -> " + i) : "object" === s && et(i, e)
                        } else t[n] = it(t[n]);
            else t[n] = Object(_.a)(t[n], t.id || e);
            else if ("string" == typeof t) {
                if (g.a.test(t)) return new g.b(t);
                if (y.a.test(t)) return new y.b(t)
            }
            return t
        },
        it = t => {
            if (null != t && !1 !== t && "" !== t) {
                if (Array.isArray(t))
                    for (let e = t.length - 1; e >= 0; e--) t[e] = it(t[e]);
                else if ("string" == typeof t && !Y.test(t)) return function(t) {
                    return new Function("g", "i", "s", "return " + t)
                }(t);
                return t
            }
        };

    function st(t) {
        return new Function("g", "p", "t", "return " + t)
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return s
    })), i.d(e, "b", (function() {
        return n
    }));
    const s = t => {
            t.style.left = (window.innerWidth - t.offsetWidth) / 2 + "px"
        },
        n = (t, e, i = 32) => {
            let s = t.style,
                n = e.getBoundingClientRect(),
                r = n.left;
            r < window.innerWidth / 2 ? s.left = r + e.offsetWidth + i + "px" : s.left = r - t.offsetWidth - i + "px", s.top = ((t, e) => {
                let i = e.top - 40;
                return i < 20 ? 20 : i + t.offsetHeight > window.innerHeight - 20 ? window.innerHeight - 20 - t.offsetHeight : i
            })(t, n) + "px"
        }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return u
    }));
    var s = i(8),
        n = i(9),
        r = i(22),
        a = i(7),
        o = i(10),
        l = i(4),
        h = i(23),
        c = i(2);
    class u extends h.a {
        toJSON() {
            let t = this.excludeJSON(["material", "kind"]) || {};
            return t.id = this.id, this.template ? "string" == typeof this.template ? t.template = this.template : t.template = this.template.id : t.type = this.type, t.name = this._name, t.attack = this.attack || void 0, t.enchants = this.enchants || void 0, this.mod && (t.mod = this.mod), this.material && (t || (t = {}), t.material = this.material.id), t || void 0
        }
        get busy() {
            return this._busy
        }
        set busy(t) {
            this._busy = t
        }
        get equippable() {
            return !this.busy
        }
        get enchants() {
            return this._enchants || 0
        }
        set enchants(t) {
            this._enchants = t
        }
        get material() {
            return this._material
        }
        set material(t) {
            this._material = t
        }
        get armor() {
            return this._armor
        }
        set armor(t) {
            this._armor = t
        }
        get attack() {
            return this._attack
        }
        set attack(t) {
            this._attack = t ? t instanceof r.a ? t.clone() : new r.a(t) : null
        }
        get slot() {
            return this._slot
        }
        set slot(t) {
            this._slot = t
        }
        get kind() {
            return this._kind
        }
        set kind(t) {
            this._kind = t
        }
        constructor(t = null) {
            super(), this.stack = !1, this.consume = !1, this.busy = this.busy || !1, t && Object(l.c)(this, t), this.value = this.val = 1, this.type || (this.type = c.o), this._attack && !this._attack.name && (this._attack.name = this.name)
        }
        maxed() {
            return !1
        }
        revive(t) {
            "string" == typeof this.material && (this.material = t.getMaterial(this.material)), "string" == typeof this.recipe ? this.template = t.getData(this.recipe) : "string" == typeof this.template && (this.template = t.getData(this.template)), this.template ? (null !== this.armor && void 0 !== this.armor || (this.armor = this.template.armor), null !== this.tohit && void 0 !== this.tohit || (this.tohit = this.template.tohit || 0), null !== this.attack && void 0 !== this.attack || (this.attack = this.template.attack), this.type = this.template.type || this.type, Object(a.g)(this, this.template)) : console.log("bad template: " + this.template), (!this.level || this.template && this.level <= this.template.level) && (this.template && this.template.level ? this.level = this.template.level.valueOf() || 1 : this.level = 1, this.material && this.material.level && (this.level += this.material.level.valueOf() || 0)), this.mod && (this.mod = Object(o.a)(this.mod, this.id))
        }
        applyMaterial(t) {
            t && (this.material = t, this.level += this.material.level || 0, null !== this.armor && void 0 !== this.armor && this.applyBonus(this, c.a, t.bonus), this.attack && (null !== this.attack.damage && void 0 !== this.attack.damage && this.applyBonus(this.attack, "damage", t.bonus), t.tohit && this.applyBonus(this.attack, "tohit", t.tohit)))
        }
        applyBonus(t, e, i = 0) {
            let s = t[e];
            null == s ? (console.log("item tohit undefined. assign: " + i), t[e] = i) : "number" == typeof s ? t[e] = s + i : s instanceof n.b && s.add(i)
        }
        equip(t) {
            let e = t.state.player;
            this.armor && e.defense.add(this.armor), "weapon" === this.type && (e.weapon = this), this.mod && (Object(s.d)(this.mod, 1), t.addMod(this.mod))
        }
        unequip(t) {
            let e = t.state.player;
            console.log("UNEQUIP: " + t.id), this.armor && e.defense.add(-this.armor), e.weapon === this && (e.weapon = null), this.mod && (Object(s.d)(this.mod, 0), t.addMod(this.mod))
        }
        convertMods(t) {
            let e = typeof t;
            if (t instanceof o.c) return t;
            if (console.log("CONVERT MOD: " + this.id), "object" === e) {
                if (t.id) {
                    console.log("create mod: ");
                    for (let e in t) console.log(e + " -> " + t[e]);
                    return new o.c(t)
                }
                for (let e in t) t[e] = this.convertMods(t[e])
            } else if ("string" === e || "number" === e) return new o.c(t, this.id);
            return t
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return n
    }));
    var s = i(6);
    class n extends s.a {
        get current() {
            return this.unit ? Math.floor(this.value) : this._value
        }
        add(t) {
            this.value.base += t
        }
        constructor(t = null) {
            super(t), void 0 === this.value && (this.value = 0), this._max = void 0, this.repeat = !0, null !== this.unit && void 0 !== this.unit || (this.unit = !0), null !== this._rate && void 0 !== this.rate || (this.rate = 0)
        }
        maxed() {
            return !1
        }
        filled() {
            return !1
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return l
    }));
    var s = i(20),
        n = i(3),
        r = i(2);
    const a = .35,
        o = t => 10 * Math.pow(1 + a, t);
    class l extends s.a {
        get exp() {
            return super.exp
        }
        set exp(t) {
            this.locked || this.maxed() || this.buy && !this.owned || (super.exp = t)
        }
        showLevel() {
            return Math.floor(this.value.valueOf())
        }
        constructor(t = null) {
            if (super(t), this.type = r.m, this.length && 0 != this.value || (this.length = o(this.level + this.value.valueOf())), this._exp = this._exp || 0, this.value >= 1) {
                let t = o(this.level + this.value.valueOf());
                this.length > t && (this.length = t)
            }
            this.buy || (this.buy = {
                sp: 1
            }), this.rate ? this.rate.base || (this.rate.base = 1) : this.rate = new n.a(1, "rate"), this.max || (this.max = new n.a(2, "max", !0))
        }
        canBuy(t) {
            return !(this.disabled || this.locked || this.locks > 0) && !(this.buy && !t.canPay(this.buy))
        }
        exec() {
            this.value > Math.floor(this._max.value) ? this.value = Math.floor(this.max.value) : (this._length += this._length * a, this.dirty = !0, super.exec())
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return r
    })), i.d(e, "a", (function() {
        return a
    }));
    var s = i(7),
        n = i(3);
    const r = t => {
            for (let i in t) {
                var e = t[i];
                t[i] = e instanceof n.a ? e : new n.a(e, i)
            }
            return t
        },
        a = (t, e) => {
            if ("string" == typeof e) {
                let i = t[e];
                i ? isNaN(i) ? "object" == typeof i && (i.value = (i.value || 0) + 1) : t[e] = i + 1 : t[e] = 1
            } else if ("object" == typeof e)
                for (let i in e) {
                    let n = t[i],
                        r = e[i];
                    n ? "object" == typeof n ? "object" == typeof r ? a(n, r) : n.value = (n.value || 0) + r : "object" == typeof r ? (r = t[i] = Object(s.b)(r)).value = (r.value || 0) + n : t[i] = (n || 0) + r : t[i] = isNaN(r) ? Object(s.b)(r) : r
                }
        }
}, function(t, e, i) {
    var s = i(60);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(63);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(65);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(67);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(69);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(71);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(73);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(75);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(77);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(79);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(81);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(83);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(85);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(87);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    var s = i(89);
    "string" == typeof s && (s = [
        [t.i, s, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(15)(s, n);
    s.locals && (t.exports = s.locals)
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return s
    }));
    class s {
        get id() {
            return this.item ? this.item.id : ""
        }
        get name() {
            return this.item ? this.item.name : ""
        }
        set name(t) {}
        set count(t) {}
        hasTag(t) {
            return this.item && this.item.hasTag(t)
        }
        hasTags(t) {
            return this.item && this.items.hasTag(t)
        }
        get buy() {
            return this.item ? this.item.buy : null
        }
        get cost() {
            return this.item ? this.item.cost : null
        }
        get run() {
            return this.item ? this.item.run : null
        }
        get effect() {
            return this.item ? this.item.effect : null
        }
        get length() {
            return this.item ? this.item.length : null
        }
        get perpetual() {
            return !!this._item && this._item.perpetual
        }
        get item() {
            return this._item
        }
        set item(t) {
            this._item = t
        }
        get owned() {
            return !!this._item && this.item.owned
        }
        set owned(t) {
            this._item && (this._item.owned = t)
        }
        get running() {
            return !!this.item && this.item.running
        }
        set running(t) {
            this.item && (this.item.running = t)
        }
        isProxy() {
            return !0
        }
        maxed() {
            return !this.item || this.item.maxed()
        }
        canUse(t) {
            return !!this.item && this.item.canUse(t)
        }
        canRun(t) {
            return !!this.item && this.item.canRun(t)
        }
        constructor(t = null) {
            t && Object.assign(this, t)
        }
        amount(t, e) {
            this._item && this._item.amount(t, e)
        }
        revive(t) {
            "string" == typeof this._item && (this._item = t.findData(this._item))
        }
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return n
    }));
    var s = i(28);
    class n {
        get templates() {
            return this._templates
        }
        set templates(t) {
            this._templates = t
        }
        get lists() {
            return this._lists
        }
        set lists(t) {
            this._lists = t
        }
        get name() {
            return this._name
        }
        set name(t) {
            this._name = t
        }
        get sym() {
            return this._sym
        }
        set sym(t) {
            this._sym = t
        }
        constructor() {}
        setData(t) {
            this.fileLoaded(t)
        }
        load(t) {
            return Array.isArray(t) ? Object(s.c)(t).then(t => this.typesLoaded(t)) : (this.name = t, Object(s.c)([t]).then(e => this.fileLoaded(e[t])))
        }
        typesLoaded(t) {
            this.templates = {}, this.lists = {};
            let e = [];
            for (let s in t) {
                var i = t[s];
                if (i)
                    if (i.module) {
                        let t = new n;
                        t.setData(i), e.push(t)
                    } else this.lists[s] = this.parseList(t[s]);
                else console.warn("no file: " + s)
            }
            for (let t = e.length - 1; t >= 0; t--) this.merge(e[t]);
            return this
        }
        fileLoaded(t) {
            return this.templates = {}, this.lists = t.data, this.name = t.module || this.name, this.sym = t.sym, t.data && this.parseLists(t.data), this
        }
        parseLists(t) {
            for (let e in t) this.parseList(t[e])
        }
        parseList(t) {
            let e = this.sym;
            for (let n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                i.id ? (e && (i.sym = i.sym || e), this.templates[i.id] = Object(s.b)(i)) : console.warn("missing id: " + i.name)
            }
            return t
        }
        merge(t) {
            let e = t.templates,
                i = this.templates;
            for (let t in e) i[t] = e[t];
            for (let e in t.lists) {
                let s = t.lists[e];
                if (i = this.lists[e], Array.isArray(i))
                    for (let t = s.length - 1; t >= 0; t--) i.push(s[t]);
                else this.lists[e] = s.slice(0)
            }
        }
        instance(t = {}) {
            return s.a.instance(this.templates, this.lists, t)
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(3),
        n = i(8),
        r = (i(23), i(21));
    class a {
        get count() {
            return this.items.length
        }
        valueOf() {
            return this.items.length
        }
        toJSON() {
            return {
                items: this.items.map(t => t.instance ? t : t.id),
                max: this.max,
                name: this.name || void 0,
                id: "inventory" !== this.id ? this.id : void 0
            }
        }
        get spaceProp() {
            return this._spaceProp
        }
        set spaceProp(t) {
            this._spaceProp = t
        }
        get used() {
            return this._used
        }
        set used(t) {
            this._used = t
        }
        get name() {
            return this._name || this.id
        }
        set name(t) {
            this._name = t
        }
        get max() {
            return this._max
        }
        set max(t) {
            this._max = t instanceof s.a ? t : new s.a(t, "max", !0)
        }
        get removeDupes() {
            return this._removeDupes
        }
        set removeDupes(t) {
            this._removeDupes = t
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.items || (this.items = []), this.type = this.id = "inventory", this.max = this._max || 0
        }
        revive(t) {
            var e = {};
            for (let s = this.items.length - 1; s >= 0; s--) {
                var i = this.items[s];
                "object" == typeof i ? i = Object(r.b)(t, i) : "string" == typeof i && (i = t.getData(i)), null == i || !i.id || this.removeDupes && !0 === e[i.id] ? this.items.splice(s, 1) : (e[i.id] = !0, this.items[s] = i)
            }
            this.calcUsed()
        }
        add(t) {
            if (null == t || "boolean" == typeof t || "string" == typeof t || this.full()) return !1;
            if (Array.isArray(t))
                for (let e = t.length - 1; e >= 0; e--) this.add(t[e]);
            else {
                if (!t.id) return !1;
                if (t.stack) {
                    let e = this.findMatch(t);
                    if (e) return void(e.value += t.value)
                } else if (this.removeDupes && this.find(t.id)) return !1;
                this.items.push(t), this.used += this.spaceProp ? t[this.spaceProp] || 0 : 1
            }
            this.dirty = !0
        }
        canAdd(t) {
            if (!this.max || 0 === this.max.value) return !0;
            let e = this.spaceProp ? t[this.spaceProp] || 0 : 1;
            return this.used + e <= this.max.value
        }
        includes(t) {
            return this.items.includes(t)
        }
        freeSpace() {
            return this.max ? this.max - this.used : Number.MAX_SAFE_INTEGER
        }
        full() {
            return this.max > 0 && this.used >= Math.floor(this.max.value)
        }
        removeAll() {
            return this.used = 0, this.items.splice(0, this.items.length)
        }
        removeAt(t) {
            let e = this.items[t];
            this.used -= this.spaceProp ? e[this.spaceProp || 0] : 1, this.items.splice(t, 1)
        }
        removeQuant(t, e) {
            t.value -= e, t.value <= 0 && this.remove(t)
        }
        remove(t) {
            let e = this.items.indexOf(t);
            e < 0 || this.removeAt(e)
        }
        filter(t) {
            return this.items.filter(t)
        }
        findMatch(t) {
            let e = t.id,
                i = t.recipe;
            return this.items.find(t => t.id === e || i && t.recipe === i)
        }
        find(t, e = !1) {
            return !0 === e ? this.items.find(e => e.id === t || e.recipe === t) : this.items.find(e => e.id === t)
        }
        calcUsed() {
            let t = 0,
                e = this.spaceProp;
            for (let s = this.items.length - 1; s >= 0; s--) {
                var i = this.items[s];
                t += e ? i[e] || 0 : 1
            }
            this.used = t
        }
    }
    Object(n.c)(a, n.a);
    var o = i(0),
        l = i(1),
        h = i(26),
        c = i(19),
        u = i(2);
    class d {
        get id() {
            return u.k
        }
        toJSON() {
            return {
                locale: this.locale ? this.locale.id : void 0,
                drops: this.drops,
                combat: this.combat
            }
        }
        get name() {
            return this.locale ? this.locale.name : ""
        }
        get cost() {
            return this.locale ? this.locale.cost : null
        }
        get run() {
            return this.locale ? this.locale.run : null
        }
        get exp() {
            return this.locale ? this.locale.exp : 0
        }
        set exp(t) {
            t >= this.locale.length ? this.complete() : this.locale.exp = t
        }
        percent() {
            return this.locale ? this.locale.percent() : 0
        }
        maxed() {
            return !this.locale || this.locale.maxed()
        }
        canRun(t) {
            return null != this.locale && this.locale.canRun(t)
        }
        canUse() {
            return this.locale && !this.locale.maxed()
        }
        set dungeon(t) {
            this.locale = t
        }
        get length() {
            return this.locale ? this.locale.length : 0
        }
        get combat() {
            return this._combat
        }
        set combat(t) {
            this._combat = t instanceof h.a ? t : new h.a(t)
        }
        get enc() {
            return this._combat
        }
        set enc(t) {}
        get done() {
            return this.exp === this.length
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.drops = this._drops || new a, this._combat = this._combat || new h.a, this.running = this.running || !1, this.type = u.k, this.locale = this.locale || null
        }
        revive(t) {
            this.state = t, this.player = t.player, o.J.add(o.o, this.enemyDied, this), o.J.add(o.z, this.spellAttack, this), o.J.add(o.g, this.charDied, this), "string" == typeof this.locale && (this.locale = t.getData(this.locale)), this.locale || (this.running = !1), this._combat.revive(t)
        }
        charDied(t) {
            t === this.player && this.running && (this.player.luck > 100 * Math.random() && (this.player.hp.value = Math.ceil(.05 * this.player.hp.max), o.J.emit(o.q, "Lucky Recovery", this.player.name + " has a close call.")), this.emitDefeat())
        }
        emitDefeat() {
            o.J.emit(o.l, null), o.J.emit(o.a, this, this.locale && this.player.level > this.locale.level && this.player.retreat > 0)
        }
        update(t) {
            null == this.locale || this.done || (this._combat.complete ? (this.advance(), this.done || this.nextEnc()) : this._combat.update(t))
        }
        addNpc(t) {
            this.running && this._combat.addNpc(t)
        }
        spellAttack(t) {
            this.locale && this.running && this._combat.spellAttack(t)
        }
        nextEnc() {
            this.player.delay = Object(c.b)(this.player.speed), this.combat.setEnemies(this.locale.getEnemy(), this.exp / this.length)
        }
        enemyDied(t, e) {
            if (this.player.exp += Math.max(1.5 * t.level - this.player.level, 1), t.template && t.template.id) {
                let e = this.state.getData(t.template.id);
                e && e.value++
            }
            t.result && l.c.applyEffect(t.result), t.loot ? l.c.getLoot(t.loot, l.c.state.drops) : l.c.getLoot({
                max: t.level,
                pct: 30
            }, l.c.state.drops)
        }
        advance() {
            this.exp += 1
        }
        complete() {
            this.locale.exp = this.locale.length, this.locale.dirty = !0, this.locale.loot && l.c.getLoot(this.locale.loot, l.c.state.drops), this.locale.result && l.c.applyEffect(this.locale.result), this.locale.value++;
            var t = Math.max(1 + this.player.level - this.locale.level, 1);
            this.player.exp += this.locale.level * (15 + this.locale.length) / (.8 * t), o.J.emit(o.c, this, !1), this.locale = null
        }
        enter(t) {
            this.player.timer = this.player.delay, null != t && (t != this.locale && this.combat.begin(), t.exp >= t.length && (t.exp = 0)), this.locale = t, this.combat.complete && this.nextEnc()
        }
        hasTag(t) {
            return t === u.k
        }
    }
    i(6);
    class p {
        toJSON() {
            return {
                id: this.id,
                item: this.item,
                multi: this.multi,
                max: this.max
            }
        }
        get item() {
            return this._item
        }
        set item(t) {
            this._item = t
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.max = this.max || 1, this.item = this.item || (this.max > 1 ? [] : null), this.multi = Array.isArray(this.item), this.name = this._name || this.id
        }
        freeSpace() {
            let t = this.max;
            if (!this.item) return t;
            if (1 === t) return 0;
            if (!Array.isArray(this.item)) return 0;
            for (let e = this.item.length - 1; e >= 0; e--) t -= this.item[e].numslots || 1;
            return t
        }
        equip(t) {
            let e = t.numslots || 1;
            if (e > this.max) return !1;
            if (!0 === this.multi) return this.addMult(t, e);
            if (this.item) {
                let e = this.item;
                return this.item = t, e
            }
            return this.item = t, !0
        }
        addMult(t, e) {
            if (this.item.find(e => e.id === t.id)) return !1;
            this.item.push(t);
            for (let t = this.item.length - 2; t >= 0; t--)
                if ((e += this.item[t].numslots || 1) > this.max) return this.item.splice(0, t + 1);
            return !0
        }
        find(t) {
            return null === this.item ? null : this.multi ? this.item.find(e => e.id === t) : this.item.id === t ? this.item : null
        }
        has(t) {
            return !1 === this.multi ? this.item === t : this.item.includes(t)
        }
        remove(t) {
            if (this.item === t) return this.item = null, t;
            if (null == t) return t = this.item, this.item = null, t;
            if (this.multi) {
                let e = this.item.indexOf(t);
                return !(e < 0) && this.item.splice(e, 1)[0]
            }
            return !1
        }
        revive(t) {
            if (null !== this.item && void 0 !== this.item)
                if (Array.isArray(this.item)) {
                    let i = {},
                        s = this.item;
                    for (let n = s.length - 1; n >= 0; n--) {
                        var e = Object(r.b)(t, s[n]);
                        e && !0 !== i[e.id] ? (s[n] = e, i[e.id] = !0) : s.splice(n, 1)
                    }
                } else this.item = Object(r.b)(t, this.item)
        }
        hands() {
            return null != this.item && this.item.hands || 0
        }
        empty() {
            return null === this.item || Array.isArray(this.item) && 0 === this.item.length
        }
    }
    class f {
        get slots() {
            return this._slots
        }
        set slots(t) {
            for (let i in t) {
                var e = t[i];
                e instanceof p || (t[i] = new p(e))
            }
            this._slots = t
        }
        constructor(t = null) {
            t && Object.assign(this, t)
        }
        find(t) {
            for (let i in this.slots) {
                var e = this.slots[i].find(t);
                if (e) return e
            }
            return null
        }
        get(t) {
            if (void 0 !== (t = this.slots[t])) return t.item
        }
        freeSpace(t) {
            return void 0 === (t = this.slots[t]) ? 0 : t.freeSpace()
        }
        remove(t, e = null) {
            return "string" == typeof(e = e || t.slot) && (e = this.slots[e]), !!e && e.remove(t)
        }
        revive(t) {
            for (let e in this.slots) this.slots[e].revive(t)
        }
        setSlot(t, e = null) {
            if (null === (e = e || t.slot) || !this.slots.hasOwnProperty(e)) return !1;
            return this.slots[e].equip(t)
        }* slotNames() {
            for (let t in this.slots) yield t
        }*[Symbol.iterator]() {
            for (let e in this.slots) {
                var t = this.slots[e].item;
                if (Array.isArray(t))
                    for (let e = t.length - 1; e >= 0; e--) t[e] && (yield t[e]);
                else t && (yield t)
            }
        }
    }
    class m extends f {
        toJSON() {
            return {
                slots: this.slots
            }
        }
        constructor(t = null) {
            super(t), this.slots = this._slots || {
                left: new p({
                    id: "left"
                }),
                right: new p({
                    id: "right"
                }),
                head: new p({
                    id: "head"
                }),
                hands: new p({
                    id: "hands"
                }),
                back: new p({
                    id: "back"
                }),
                waist: new p({
                    id: "waist"
                }),
                neck: new p({
                    id: "neck",
                    max: 3
                }),
                fingers: new p({
                    id: "fingers",
                    max: 4
                }),
                chest: new p({
                    id: "chest"
                }),
                shins: new p({
                    id: "shins"
                }),
                feet: new p({
                    id: "feet"
                })
            }
        }
        remove(t, e = null) {
            return "weapon" === t.type ? this.removeWeap(t) : super.remove(t, e)
        }
        removeWeap(t) {
            return this.slots.right.remove(t) || this.slots.left.remove(t)
        }
        replaceCount(t) {
            let e = "weapon" === t.type ? this.freeSpace("right") + this.freeSpace("left") : this.freeSpace(t.slot);
            return Math.max((t.numslots || 1) - e, 0)
        }
        equip(t, e = null) {
            if ("weapon" === t.type) return this.equipWeap(t);
            if (null === (e = e || t.slot) || !this.slots.hasOwnProperty(e)) return !1;
            return this.slots[e].equip(t)
        }
        getWeapon() {
            return !1 === this.slots.right.empty() ? this.slots.right.item : this.slots.left.item
        }
        equipWeap(t) {
            let e = this.slots.right,
                i = this.slots.left;
            if (2 === t.hands) {
                let s = e.equip(t),
                    n = i.remove();
                return s && n ? [s, n] : s || n
            }
            if (e.empty()) return console.log("setting right."), e.equip(t), !(i.hands() > 1) || i.remove();
            if (i.empty()) return console.log("setting left."), i.equip(t), !(e.hands() > 1) || e.remove();
            return console.log("NEITHER EMPTY. switch hands."), e.equip(i.equip(t))
        }
    }
    var v = i(16);
    class g extends a {
        get maxAllies() {
            return this._maxAllies
        }
        set maxAllies(t) {
            this._maxAllies = t instanceof s.a ? t : new s.a(t, "maxAllies", !0)
        }
        get allyTotal() {
            return this._allyTotal
        }
        set allyTotal(t) {
            this._allyTotal = t
        }
        get active() {
            return this._active
        }
        set active(t) {
            this._active = t
        }
        constructor(t = null) {
            super(t), this.type = this.id = "minions", this.max || (this.max = 0), this._active = []
        }
        update(t) {
            for (let i = this.items.length - 1; i >= 0; i--) {
                var e = this.items[i];
                !1 === e.active && e.alive && e.rest(t)
            }
        }
        add(t) {
            super.add(t), t.team = v.a, t.active && this.setActive(t)
        }
        getList(t) {
            return this.items.filter(e => t.includes(e.id))
        }
        setActive(t, e = !0) {
            if (!0 === e) {
                if (!t.alive || t.level + this.allyTotal > this.maxAllies) return t.active = !1, !1;
                this.active.includes(t) || (this.allyTotal += t.level, this.active.push(t))
            } else {
                let e = this.active.indexOf(t);
                e >= 0 && (this.allyTotal -= t.level, this.active.splice(e, 1))
            }
            t.active = e
        }
        revive(t) {
            super.revive(t), this.maxAllies || (this.maxAllies = Math.floor(t.player.level / 5));
            let e = 0;
            for (let t = this.items.length - 1; t >= 0; t--) {
                var i = this.items[t];
                i.type === u.i ? (i.active && (e += i.level, this._active.push(i)), i.team = v.a) : this.items.splice(t, 1)
            }
            this.calcUsed(), this.allyTotal = e, o.J.add(o.e, this.died, this), o.J.add(o.b, this.resetActives, this)
        }
        resetActives() {
            for (let t = this.active.length - 1; t >= 0; t--) this.active[t].active && this.active[t].alive || this.setActive(this.active[t], !1)
        }
        remove(t) {
            super.remove(t), console.log("removing minion: " + t.id), this.setActive(t, !1)
        }
        died(t) {}
    }
    var y = i(52),
        _ = i(27);
    class b {
        get id() {
            return u.d
        }
        toJSON() {
            let t = this.enc;
            return {
                locale: this.locale ? this.locale.id : void 0,
                enc: t ? {
                    id: t.id,
                    exp: t.exp,
                    recipe: t.recipe,
                    template: t.template ? "string" == typeof t.template ? t.template : t.template.id : void 0
                } : void 0
            }
        }
        get name() {
            return this.locale ? this.locale.name : ""
        }
        get cost() {
            return this.locale ? this.locale.cost : null
        }
        get run() {
            return this.locale ? this.locale.run : null
        }
        get exp() {
            return this.locale ? this.locale.exp : 0
        }
        set exp(t) {
            t >= this.locale.length ? this.complete() : this.locale.exp = t
        }
        percent() {
            return this.locale ? this.locale.percent() : 0
        }
        maxed() {
            return !this.locale || this.locale.maxed()
        }
        canUse() {
            return this.locale && !this.locale.maxed()
        }
        canRun(t) {
            return this.locale && this.locale.canRun(t)
        }
        get encs() {
            return this.locale ? this.locale.encs : null
        }
        get length() {
            return this.locale ? this.locale.length : 0
        }
        get enc() {
            return this._enc
        }
        set enc(t) {
            this._enc = t
        }
        get done() {
            return this.exp === this.length
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.running = this.running || !1, this.type = u.d, this._enc = this._enc || null, this.locale = this.locale || null
        }
        revive(t) {
            this.state = t, this.player = t.player, this.spelllist = t.getData("spelllist"), "string" == typeof this.locale && (this.locale = t.getData(this.locale)), this._enc && (this.enc = Object(r.b)(t, this._enc)), !this.enc || this.enc instanceof _.a || (console.warn("bad encounter: " + (this.enc ? this.enc.id : this.enc)), this.enc = null), this.locale || (this.running = !1)
        }
        tryCast() {
            return !!this.spelllist.canUse(l.c) && this.spelllist.onUse(l.c)
        }
        update(t) {
            null == this.locale || this.done || (this.enc || this.nextEnc(), this.enc && (this.player.timer -= t, this.player.timer <= 0 && (this.player.timer += Object(c.b)(this.player.speed), this.spelllist.count > 0 && this.tryCast()), this.enc.update(t), this.player.defeated() ? (o.J.emit(o.l, this), o.J.emit(o.a, this, !0)) : this.enc.done && (this.encDone(this.enc), this.advance())))
        }
        nextEnc() {
            if (this.locale) {
                this.player.delay = Object(c.b)(this.player.speed);
                var t = this.locale.getEnc();
                if ("string" == typeof t) {
                    var e = l.c.instance(t);
                    e ? (o.J.emit(o.n, e.name, e.desc), this._enc = e, e.exp = 0) : console.warn("MISSING ENCOUNTER: " + t)
                }
            }
        }
        encDone(t) {
            if (this.player.exp += .75 + Math.max(t.level - this.player.level, 0), t.template && t.template.id) {
                let e = this.state.getData(t.template.id);
                e && e.value++
            } else t.value++;
            t.result && l.c.applyEffect(t.result), t.loot && l.c.getLoot(t.loot, l.c.state.drops), this.enc = null
        }
        advance() {
            this.exp += 1
        }
        complete() {
            this.locale.exp = this.locale.length, this.locale.dirty = !0, this.locale.loot && l.c.getLoot(this.locale.loot, l.c.state.drops), this.locale.result && l.c.applyEffect(this.locale.result), this.locale.value++;
            var t = Math.max(1 + this.player.level - this.locale.level, 1);
            this.player.exp += this.locale.level * (15 + this.locale.length) / (.8 * t), this.enc = null, o.J.emit(o.c, this, !1), this.locale = null
        }
        enter(t) {
            this.player.timer = this.player.delay, null != t && (t != this.locale && (this.enc = null), t.exp >= t.length && (t.exp = 0)), this.locale = t
        }
        hasTag(t) {
            return t === u.d
        }
    }
    var x = i(4);
    const w = "top",
        k = "rand",
        O = "loop";
    class A extends a {
        toJSON() {
            let t = super.toJSON();
            return t.order = this.order, t.lastInd = this.lastInd || void 0, t
        }
        get lastInd() {
            return this._lastInd
        }
        set lastInd(t) {
            this._lastInd = t
        }
        get order() {
            return this._order
        }
        set order(t) {
            this._order = t
        }
        constructor(t = null) {
            super(t), this.name = this.id = "spelllist", this.lastInd = this.lastInd || 0, this.spaceProp = "level", this.order = this.order || O
        }
        canUse(t) {
            for (let e = this.items.length - 1; e >= 0; e--)
                if (this.items[e].canUse(t)) return !0;
            return !1
        }
        onUse(t) {
            var e = this.items.length;
            let i = this.nextInd(),
                s = i;
            do {
                if (this.items[s].canUse(t)) return t.payCost(this.items[s].cost), this.items[s].onUse(t), this.lastInd = s, !0;
                ++s >= e && (s = 0)
            } while (s !== i);
            return !1
        }
        nextInd() {
            return this.order === w ? 0 : this.order === O ? this.lastInd < this.items.length - 1 ? this.lastInd + 1 : 0 : this.order === k ? Math.floor(Math.random() * this.items.length) : 0
        }
        dataDeleted(t) {
            this.remove(t)
        }
        revive(t) {
            super.revive(t), 0 === this.max.value && (this.max.value = t.player.level), o.J.add(o.m, this.dataDeleted, this)
        }
    }
    var S = i(33);
    class C {
        toJSON() {
            return {
                id: this.id,
                items: this.items.map(t => t.id),
                name: this.name,
                type: this.type,
                val: this.value,
                custom: this.custom
            }
        }
        get id() {
            return this._id
        }
        set id(t) {
            this._id = t
        }
        get items() {
            return this._items
        }
        set items(t) {
            var e = [];
            let i = 0;
            if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                    var s = t[n];
                    "object" == typeof s && (i += s.level || 0), e[n] = s
                }
            this.level = i, this._items = e
        }
        get type() {
            return this._type
        }
        set type(t) {
            this._type = t
        }
        get custom() {
            return "group"
        }
        set custom(t) {}
        get name() {
            return this._name
        }
        set name(t) {
            this._name = t
        }
        get level() {
            return this._level
        }
        set level(t) {
            this._level = t
        }
        get cost() {
            return this._cost
        }
        set cost(t) {
            this._cost = t
        }
        get locked() {
            return !1
        }
        get owned() {
            return !0
        }
        maxed() {
            return !1
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.items || (this.items = null)
        }
        computeCost() {
            if (!this.items || 0 === this.items.length) return void(this.cost = null);
            let t = {};
            for (let i = this.items.length - 1; i >= 0; i--) {
                var e = this.items[i];
                e ? e.cost && Object(S.a)(t, e.cost) : this.items.splice(i, 1)
            }
            this.effect = this.items.map(t => "string" == typeof t ? t : t.name), this.cost = t
        }
        canUse(t) {
            return t.canPay(this.cost)
        }
        onUse(t) {
            for (let e = this.items.length - 1; e >= 0; e--) this.items[e].onUse(t)
        }
        add(t) {
            this.items.push(t)
        }
        amount(t, e) {
            for (let i = this.items.length - 1; i >= 0; i--) this.items[i].amount(t, e)
        }
        exec() {
            for (let t = this.items.length - 1; t >= 0; t--) this.items[t].exec()
        }
        revive(t) {
            this.items = t.toData(this.items), this.computeCost()
        }
    }
    Object(n.c)(C, n.a);
    class j extends a {
        constructor(t = null) {
            super(t), this.id = "userSpells", this.name = "crafted spells"
        }
        revive(t) {
            super.revive(t), this.state = t
        }
        remove(t) {
            o.J.emit(o.m, t), super.remove(t)
        }
        create(t, e = null) {
            let i = new C;
            return i.school = "crafted", i.items = t, i.id = this.state.nextId("spell"), i.type = "spell", i.name = e || "new spell", i.computeCost(), this.state.addItem(i), this.add(i), i
        }
    }
    var T = i(49);
    class I extends T.a {
        toJSON() {
            if (this._item || this.recipe) return this.recipe ? {
                item: this.item.id,
                recipe: this.recipe
            } : this._item.id
        }
        get name() {
            return super.item ? super.item.name : this.recipe || ""
        }
        get item() {
            return super.item
        }
        set item(t) {
            super.item = t, t && "object" == typeof t ? t.id !== this.recipe && (this.recipe = t.recipe || null) : this.recipe = null
        }
        get recipe() {
            return this._recipe
        }
        set recipe(t) {
            this._recipe = t
        }
        constructor(t = null) {
            super(), t ? "string" == typeof t ? (this.item = t, this.recipe = null) : "object" == typeof t && (this.item = t.item, this.recipe = t.recipe) : (this.item = null, this.recipe = null)
        }
        getTarget(t) {
            return this.item && !this.recipe ? this.item : this.item && this.item.value > 0 && (!this.recipe || this.recipe !== this.item.id) ? this.item : this.recipe ? t.state.findInstance(this.recipe, !0) : null
        }
        onUse(t) {
            let e = this.getTarget(t);
            null != e && e.value > 0 && e.onUse(t)
        }
        revive(t) {
            if (this.item) {
                var e = t.findData(this.item, !1);
                if (e) return void(this.item = e)
            }
            if (this.recipe) {
                let e = this.recipe;
                this.item = t.findInstance(e, !0) || t.getData(e)
            }
        }
    }
    const N = 10;
    class M {
        toJSON() {
            return {
                slots: this.slots
            }
        }
        get slots() {
            return this._slots
        }
        set slots(t) {
            if (null == t) return;
            let e = [];
            for (let i = 0; i < N; i++) e[i] = new I(t[i]);
            this._slots = e
        }
        constructor(t = null) {
            Array.isArray(t) ? this.slots = t : t ? (Object.assign(this, t), t.slots || (this.slots = [])) : this.slots = []
        }
        revive(t) {
            for (let e = this._slots.length - 1; e >= 0; e--) this._slots[e].revive(t)
        }
        remove(t) {
            for (let i in this.slots) {
                var e = this.slots[i];
                e && e.item && e.id === t && this.clear(i)
            }
        }
        clear(t) {
            this.slots[t].item = null
        }
        setSlot(t, e) {
            if ((!t || t.type !== u.l) && e >= 0 && e <= 9) {
                let i = e > 0 ? e - 1 : 9;
                this.slots[i].item = t
            }
        }
        getSlot(t) {
            return this._slots[t > 0 ? t - 1 : 9]
        }
    }
    class L {
        toJSON() {
            return {
                bars: this.bars,
                index: this.index,
                max: this.max
            }
        }
        get bars() {
            return this._bars
        }
        set bars(t) {
            if (Array.isArray(t)) {
                for (let e = t.length - 1; e >= 0; e--) t[e] = t[e] instanceof M ? t[e] : new M(t[e]);
                this._bars = t
            } else console.warn("NONARRAY: " + t)
        }
        get active() {
            return this._active
        }
        get index() {
            return this._index
        }
        set index(t) {
            this._index = t
        }
        constructor(t = null) {
            t && Object.assign(this, t), this.bars && 0 !== this.bars.length || (this.bars = [{}]), this.max || (this.max = new s.a(1, "quickbars.max"))
        }
        next() {
            ++this._index >= this.bars.length && (this._index = 0), this._active = this._bars[this._index]
        }
        prev() {
            --this._index < 0 && (this._index = this._bars.length - 1), this._active = this._bars[this._index]
        }
        dataDeleted(t) {
            if (t)
                for (let e = this.bars.length - 1; e >= 0; e--) this._bars[e].remove(t.id)
        }
        revive(t) {
            for (let e = this.bars.length - 1; e >= 0; e--) this._bars[e].revive(t);
            this._index = this._index || 0, this._active = this._bars[this._index], o.J.add(o.m, this.dataDeleted, this)
        }
    }
    i.d(e, "a", (function() {
        return D
    })), i.d(e, "b", (function() {
        return E
    }));
    const D = "rest";
    class E {
        toJSON() {
            let t = {};
            for (let e in this.slots) this.slots[e] && (t[e] = this.slots[e].id);
            return {
                version: 1,
                items: this.items,
                bars: this.bars,
                slots: t,
                equip: this.equip,
                raid: this.raid,
                drops: this.drops,
                explore: this.explore,
                sellRate: this.sellRate,
                NEXT_ID: this.NEXT_ID
            }
        }
        nextId(t = "") {
            return t + this.nextIdNum()
        }
        nextIdNum() {
            return this.NEXT_ID++
        }
        constructor(t) {
            Object.assign(this, t), this.NEXT_ID = this.NEXT_ID || 0, this.initSlots(), this.bars = new L(t.bars || {
                bars: [t.quickbar]
            }), this.initMaterials(this.materials), this.inventory = new a(this.items.inv || t.inventory || {
                max: 3
            }), this.items.inv = this.inventory, this.inventory.removeDupes = !0, this.drops = new a, this.minions = this.items.minions = new g(this.items.minions || null), this.equip = new m(t.equip), this.initStats(), this.raid = new d(t.raid), this.explore = new b(t.explore), this.runner = this.items.runner = new y.b(this.items.runner), this.prepItems(), this.userSpells = this.items.userSpells = new j(this.items.userSpells), this.items.spelllist = this.spelllist = new A(this.items.spelllist), this.revive(), this.readyItems(), this.spelllist.calcUsed(), this.playerStats = this.player.getResources(), this.tagLists = this.makeLists(this.items)
        }
        initStats() {
            this.sellRate = this.sellRate || new s.a(.5, "sellRate")
        }
        prepItems() {
            for (let e in this.items) {
                var t = this.items[e];
                "group" === t.custom ? this.items[e] = new C(t) : t.instance
            }
        }
        revive() {
            for (let t in this.slots) "string" == typeof this.slots[t] && (this.slots[t] = this.getData(this.slots[t]));
            this.restAction = this.slots[D], this.equip.revive(this), this.player.revive(this), this.drops.revive(this), this.raid.revive(this), this.explore.revive(this), this.bars.revive(this)
        }
        readyItems() {
            let t = 0;
            for (let i in this.items) {
                var e = this.items[i];
                e.revive && "function" == typeof e.revive && e.revive(this), e.hasTag ? (e.hasTag(u.e) && (e.need = this.suitTest), t++) : (console.warn(i + " -> " + this.items[i].id + " missing hasTag(). Removing."), delete this.items[i])
            }
            console.log("Items Total: " + t)
        }
        initSlots() {
            this.slots = this.slots || {}, Object(x.f)(this.slots, [u.e, "mount", "bed", D]), this.slots[D] || (this.slots[D] = this.getData("rest"))
        }
        suitTest(t, e, i) {
            var s = i.slots.suit;
            return t.space.valueOf() <= t.space.max.delValue(e.mod.space.max.bonus - (s ? s.mod.space.max.bonus : 0))
        }
        initMaterials(t) {
            let e = {};
            for (let i = t.length - 1; i >= 0; i--) e[t[i].id] = t[i];
            this.matsById = e
        }
        mergeItems(t, e) {
            let i;
            for (let s in e)(i = t[s]) ? i.hasOwnProperty("reviver") ? i.reviver(t, e[s]) : Object.assign(t[s], e[s]) : (console.warn(`Attempt to revive undefined object: ${s}`), t[s] = e[s])
        }
        makeLists(t) {
            var e = {};
            for (let a in t) {
                var i = t[a],
                    s = i.tags;
                if (s)
                    for (var n of s) {
                        var r = e[n];
                        r || (e[n] = r = []), r.push(i)
                    }
            }
            return e
        }
        setQuickSlot(t, e) {
            this.bars.active.setSlot(t, e)
        }
        getQuickSlot(t) {
            return this.bars.active.getSlot(t)
        }
        toData(t) {
            if (!t) return [];
            for (let i = t.length - 1; i >= 0; i--) {
                var e = t[i];
                "string" == typeof e && (t[i] = this.getData(e))
            }
            return t
        }
        getTagList(t) {
            return this.tagLists[t]
        }
        typeCost(t, e) {
            return t ? isNaN(t) ? t.hasOwnProperty(e) ? t[e] : 0 : "gold" === e ? t : 0 : 0
        }
        addMax(t, e = 50) {
            let i = "string" == typeof t ? this.getData(t) : t;
            i && (i.max.base += e)
        }
        filterItems(t) {
            let e = [],
                i = this.items;
            for (let s in i) t(i[s]) && e.push(i[s]);
            return e
        }
        filterByTag(t) {
            let e = [];
            for (let i in this.items) this.items[i].hasTags(t) && e.push(this.items[i]);
            return e
        }
        addItem(t) {
            return !!t.hasTag && (this.items[t.id] = t, !0)
        }
        deleteItem(t) {
            delete this.items[t.id]
        }
        tagItems(t, e) {
            let i = this.items;
            for (let s in i) t(i[s]) && i[s].addTag(e)
        }
        getSlots() {
            return this.slots
        }
        getSlot(t, e) {
            return e === u.o || e === u.a || e === u.n ? null : this.slots[t]
        }
        setSlot(t, e) {
            e && e.type === u.o || (this.slots[t] = e, t === D && (this.restAction = e))
        }
        findInstance(t) {
            return this.inventory.find(t, !0) || this.equip.find(t, !0)
        }
        exists(t) {
            return this.items.hasOwnProperty(t)
        }
        findData(t, e = !1) {
            return this.getData(t) || this.inventory.find(t, e) || this.equip.find(t, e)
        }
        getUnique(t) {
            let e = this.items[t];
            return void 0 !== e && e.unique && e.value > 0 ? null : e
        }
        getData(t) {
            return this.items[t] || this[t]
        }
        getMaterial(t) {
            return this.matsById[t]
        }
    }
}, function(t, e, i) {
    "use strict";
    var s = i(1),
        n = i(4),
        r = i(0),
        a = i(3),
        o = i(8),
        l = i(49);
    const h = "runnable";
    class c extends l.a {
        toJSON() {
            return {
                item: this.item ? this.item.id : void 0,
                target: this.target ? this.target.id : void 0,
                exp: this._exp
            }
        }
        get type() {
            return h
        }
        get target() {
            return this._target
        }
        set target(t) {
            this._target = t
        }
        get exp() {
            return this._exp
        }
        set exp(t) {
            this._exp = t
        }
        get running() {
            return !!this._item && this._item.running
        }
        set running(t) {
            this._item && (this._item.running = t), this._target && (this._target.running = t)
        }
        get repeatable() {
            return this._item && this._item.repeatable || !1
        }
        percent() {
            return this._length ? 100 * this._exp / this._length : 0
        }
        get length() {
            return this._length
        }
        set length(t) {
            this._length = t
        }
        complete() {
            return this._exp < this._length
        }
        constructor(t = null, e = null) {
            super(), e ? (this.target = e, this.item = t) : t && Object.assign(this, t), this.length = "object" == typeof this.item && this.item.length || 0, this.exp = this._exp || 0
        }
        update(t) {
            this.exp += t, this.exp > this.length && (this.target && s.c.useOn(this.item, this.target), r.J.emit(r.c, this, this.repeatable))
        }
        onStop() {
            this.item.onStop && this.item.onStop(this.target)
        }
        revive(t) {
            super.revive(t), "string" == typeof this._target && (this._target = t.findData(this._target)), this.item && (this._length = this.item.length)
        }
    }
    var u = i(2);
    i.d(e, "a", (function() {
        return p
    })), i.d(e, "b", (function() {
        return f
    }));
    const d = "t_rest",
        p = "dungeon";
    class f {
        constructor(t = null) {
            t && Object.assign(this, t), this.id = "runner", this.name = "activity", this.actives = this.actives || null, this.waiting = this.waiting || null, this.timers = this.timers || null
        }
        toJSON() {
            return {
                max: this.max,
                waiting: this.waiting.map(t => t.type === h ? t : t.id),
                actives: this.actives.map(t => t.type === h ? t : t.id),
                timers: this.timers.length > 0 ? this.timers.map(t => t.id) : void 0
            }
        }
        get exp() {
            for (let e = this.actives.length - 1; e >= 0; e--) {
                var t = this.actives[e];
                if (t.type === u.m) return t.exp
            }
            return 0
        }
        set exp(t) {
            for (let i = this.actives.length - 1; i >= 0; i--) {
                var e = this.actives[i];
                if (e.type === u.m) return void(e.exp = t)
            }
        }
        addTimer(t) {
            t.timer = t.cd, this.timers.push(t)
        }
        autoProgress() {
            for (let e = 0; e < this.actives.length; e++) {
                var t = this.actives[e];
                t.length && (t.exp = t.length - .01)
            }
        }
        get type() {
            return "runner"
        }
        hasTag() {
            return !1
        }
        get running() {
            return this.actives.length
        }
        get free() {
            return this.max.value - this.actives.length
        }
        get max() {
            return this._max
        }
        set max(t) {
            t instanceof a.a ? this._max = t : this._max && "number" == typeof t ? this._max.base = t : this._max = new a.a(t, "max", !0)
        }
        revive(t) {
            this.max = this._max || 1, this.waiting = this.reviveList(this.waiting, t, !1), this.waiting.length > this.max && (this.waiting = this.waiting.slice(this.waiting.length - this.max)), this.actives = this.reviveList(this.actives, t, !0), this.timers ? this.timers = t.toData(this.timers) : this.timers = [], r.J.add(r.c, this.actDone, this), r.J.add(r.x, this.haltAction, this), r.J.add(r.a, this.actBlocked, this), r.J.add(r.w, this.expMax, this), r.J.add(r.F, this.stopAll, this)
        }
        expMax(t) {
            t.complete && "function" == typeof t.complete && t.complete()
        }
        reviveList(t, e, i = !1) {
            if (!t) return [];
            for (let n = t.length - 1; n >= 0; n--) {
                var s = t[n] = this.reviveAct(t[n], e, i);
                null == s && t.splice(s, 1)
            }
            return t
        }
        reviveAct(t, e, i = !1) {
            if (t) {
                if ("string" == typeof t) {
                    if (!(t = e.getData(t))) return null
                } else if ("object" == typeof t && ("function" == typeof(t = new c(t)).revive && t.revive(e), null == t.target || null == t.item)) return null;
                return t.type === p ? e.raid : (t.running = i, t)
            }
        }
        useOn(t, e) {
            let i = t.id,
                s = e.id,
                r = Object(n.g)(this.waiting, t => t.type === h && i === t.item.id && s === t.target.id);
            if (!r) {
                if (!0 === e.running || !0 === t.running) return !1;
                console.log("CREATE RUNNABLE"), r = new c(t, e), t.beginUseOn && t.beginUseOn(e)
            }
            this.setAction(r)
        }
        isWaiting(t, e) {
            for (let s = this.waiting.length - 1; s >= 0; s--) {
                var i = this.waiting[s];
                if (i.type === h) {
                    if (i.item === t && i.target === e) return !0
                } else if (i === t) return !0
            }
            return !1
        }
        toggleAct(t) {
            let e = this.actives.indexOf(t);
            e >= 0 ? this.stopAction(e, !1) : this.setAction(t)
        }
        setAction(t) {
            if (t && (t.cost && 0 === t.exp && s.c.payCost(t.cost), !this.has(t))) {
                if (this.actives.length > 0 && this.free <= 0) {
                    let t = 0,
                        e = this.actives[t];
                    this.stopAction(t, !1), e.type === h && (console.log("WAIT RUNNABLE"), this.addWait(e))
                }
                r.J.emit(r.b), this.runAction(t)
            }
        }
        actBlocked(t, e = !0) {
            this.stopAction(t, !1), t.hasTag(d) ? this.tryResume(!0) : (e && this.addWait(t), this.doRest())
        }
        stopAction(t, e = !0) {
            if ("number" != typeof t && (t = this.actives.indexOf(t)) < 0) return;
            this.actives[t].running = !1, this.actives.splice(t, 1), e && this.tryResume()
        }
        tryAdd(t) {
            return !!this.free && (this.setAction(t), !0)
        }
        addWait(t) {
            if (t.hasTag(d)) return;
            this.waiting.push(t);
            let e = this.waiting.length - this.max.value,
                i = 0;
            for (; e > 0;)(t = this.waiting[i]).type !== h ? this.waiting.splice(i, 1) : i++, e--
        }
        haltAction(t) {
            0 === this.waiting.length && t.hasTag(d) ? this.stopAction(t, !1) : (t.type === h && this.addWait(t), this.stopAction(t))
        }
        stopAll() {
            for (let t = this.actives.length - 1; t >= 0; t--) this.actives[t].onStop && this.actives[t].onStop(), this.stopAction(t, !1);
            this.clearWaits()
        }
        actDone(t, e = !0) {
            !1 !== t.running ? e ? s.c.canRun(t) ? this.setAction(t) : t.hasTag(d) ? this.stopAction(t, !0) : (this.stopAction(t), this.addWait(t), this.tryResume()) : (this.stopAction(t), this.tryResume()) : this.stopAction(t)
        }
        clearWaits() {
            this.waiting.splice(0, this.waiting.length)
        }
        tryResume(t = !1) {
            let e = this.free;
            for (let t = this.waiting.length - 1; t >= 0; t--) {
                var i = this.waiting[t];
                if (null == i) Object(n.k)(this.waiting, t);
                else if (s.c.canRun(i) && this.tryAdd(i) && (Object(n.k)(this.waiting, t), --e <= 0)) return
            }
            e > 0 && !t && this.tryAdd(s.c.state.restAction)
        }
        update(t) {
            for (let e = this.actives.length - 1; e >= 0; e--) this.doAction(this.actives[e], t);
            for (let e = this.timers.length - 1; e >= 0; e--) this.timers[e].tick(t) && Object(n.k)(this.timers, e)
        }
        doRest() {
            this.tryAdd(s.c.state.restAction)
        }
        doAction(t, e) {
            if (t.maxed()) return this.stopAction(t), void this.tryAdd(s.c.state.restAction);
            t.run && (s.c.canPay(t.run, e) || (this.stopAction(t), this.addWait(t), this.tryAdd(s.c.state.restAction)), s.c.payCost(t.run, e)), t.fill && s.c.filled(t.fill, t) ? this.actBlocked(t) : t.update && (t.update(e), t.effect && s.c.applyEffect(t.effect, e), t.dirty = !0)
        }
        runAction(t) {
            t.running = !0, this.actives.push(t)
        }
        has(t) {
            return this.actives.includes(t)
        }
        typeIndex(t) {
            let e = t.type;
            for (let s = this.actives.length - 1; s >= 0; s--) {
                var i = this.actives[s];
                if (i.type === e && i != t) return s
            }
            return -1
        }
        hasType(t) {
            let e = "string" == typeof t ? t : t.type;
            for (let t = this.actives.length - 1; t >= 0; t--) {
                if (this.actives[t].type === e) return !0
            }
            return !1
        }
    }
    Object(o.c)(f, o.a)
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    "use strict";
    var s = Object.prototype.hasOwnProperty,
        n = "~";

    function r() {}

    function a(t, e, i) {
        this.fn = t, this.context = e, this.once = i || !1
    }

    function o(t, e, i, s, r) {
        if ("function" != typeof i) throw new TypeError("The listener must be a function");
        var o = new a(i, s || t, r),
            l = n ? n + e : e;
        return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
    }

    function l(t, e) {
        0 == --t._eventsCount ? t._events = new r : delete t._events[e]
    }

    function h() {
        this._events = new r, this._eventsCount = 0
    }
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), h.prototype.eventNames = function() {
        var t, e, i = [];
        if (0 === this._eventsCount) return i;
        for (e in t = this._events) s.call(t, e) && i.push(n ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
    }, h.prototype.listeners = function(t) {
        var e = n ? n + t : t,
            i = this._events[e];
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var s = 0, r = i.length, a = new Array(r); s < r; s++) a[s] = i[s].fn;
        return a
    }, h.prototype.listenerCount = function(t) {
        var e = n ? n + t : t,
            i = this._events[e];
        return i ? i.fn ? 1 : i.length : 0
    }, h.prototype.emit = function(t, e, i, s, r, a) {
        var o = n ? n + t : t;
        if (!this._events[o]) return !1;
        var l, h, c = this._events[o],
            u = arguments.length;
        if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), u) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, e), !0;
                case 3:
                    return c.fn.call(c.context, e, i), !0;
                case 4:
                    return c.fn.call(c.context, e, i, s), !0;
                case 5:
                    return c.fn.call(c.context, e, i, s, r), !0;
                case 6:
                    return c.fn.call(c.context, e, i, s, r, a), !0
            }
            for (h = 1, l = new Array(u - 1); h < u; h++) l[h - 1] = arguments[h];
            c.fn.apply(c.context, l)
        } else {
            var d, p = c.length;
            for (h = 0; h < p; h++) switch (c[h].once && this.removeListener(t, c[h].fn, void 0, !0), u) {
                case 1:
                    c[h].fn.call(c[h].context);
                    break;
                case 2:
                    c[h].fn.call(c[h].context, e);
                    break;
                case 3:
                    c[h].fn.call(c[h].context, e, i);
                    break;
                case 4:
                    c[h].fn.call(c[h].context, e, i, s);
                    break;
                default:
                    if (!l)
                        for (d = 1, l = new Array(u - 1); d < u; d++) l[d - 1] = arguments[d];
                    c[h].fn.apply(c[h].context, l)
            }
        }
        return !0
    }, h.prototype.on = function(t, e, i) {
        return o(this, t, e, i, !1)
    }, h.prototype.once = function(t, e, i) {
        return o(this, t, e, i, !0)
    }, h.prototype.removeListener = function(t, e, i, s) {
        var r = n ? n + t : t;
        if (!this._events[r]) return this;
        if (!e) return l(this, r), this;
        var a = this._events[r];
        if (a.fn) a.fn !== e || s && !a.once || i && a.context !== i || l(this, r);
        else {
            for (var o = 0, h = [], c = a.length; o < c; o++)(a[o].fn !== e || s && !a[o].once || i && a[o].context !== i) && h.push(a[o]);
            h.length ? this._events[r] = 1 === h.length ? h[0] : h : l(this, r)
        }
        return this
    }, h.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = n ? n + t : t, this._events[e] && l(this, e)) : (this._events = new r, this._eventsCount = 0), this
    }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = n, h.EventEmitter = h, t.exports = h
}, function(t, e, i) {
    "use strict";
    (function(t, i) {
        /*!
         * Vue.js v2.6.10
         * (c) 2014-2019 Evan You
         * Released under the MIT License.
         */
        var s = Object.freeze({});

        function n(t) {
            return null == t
        }

        function r(t) {
            return null != t
        }

        function a(t) {
            return !0 === t
        }

        function o(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
        }

        function l(t) {
            return null !== t && "object" == typeof t
        }
        var h = Object.prototype.toString;

        function c(t) {
            return "[object Object]" === h.call(t)
        }

        function u(t) {
            return "[object RegExp]" === h.call(t)
        }

        function d(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t)
        }

        function p(t) {
            return r(t) && "function" == typeof t.then && "function" == typeof t.catch
        }

        function f(t) {
            return null == t ? "" : Array.isArray(t) || c(t) && t.toString === h ? JSON.stringify(t, null, 2) : String(t)
        }

        function m(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function v(t, e) {
            for (var i = Object.create(null), s = t.split(","), n = 0; n < s.length; n++) i[s[n]] = !0;
            return e ? function(t) {
                return i[t.toLowerCase()]
            } : function(t) {
                return i[t]
            }
        }
        v("slot,component", !0);
        var g = v("key,ref,slot,slot-scope,is");

        function y(t, e) {
            if (t.length) {
                var i = t.indexOf(e);
                if (i > -1) return t.splice(i, 1)
            }
        }
        var _ = Object.prototype.hasOwnProperty;

        function b(t, e) {
            return _.call(t, e)
        }

        function x(t) {
            var e = Object.create(null);
            return function(i) {
                return e[i] || (e[i] = t(i))
            }
        }
        var w = /-(\w)/g,
            k = x((function(t) {
                return t.replace(w, (function(t, e) {
                    return e ? e.toUpperCase() : ""
                }))
            })),
            O = x((function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            })),
            A = /\B([A-Z])/g,
            S = x((function(t) {
                return t.replace(A, "-$1").toLowerCase()
            }));
        var C = Function.prototype.bind ? function(t, e) {
            return t.bind(e)
        } : function(t, e) {
            function i(i) {
                var s = arguments.length;
                return s ? s > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
            }
            return i._length = t.length, i
        };

        function j(t, e) {
            e = e || 0;
            for (var i = t.length - e, s = new Array(i); i--;) s[i] = t[i + e];
            return s
        }

        function T(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function I(t) {
            for (var e = {}, i = 0; i < t.length; i++) t[i] && T(e, t[i]);
            return e
        }

        function N(t, e, i) {}
        var M = function(t, e, i) {
                return !1
            },
            L = function(t) {
                return t
            };

        function D(t, e) {
            if (t === e) return !0;
            var i = l(t),
                s = l(e);
            if (!i || !s) return !i && !s && String(t) === String(e);
            try {
                var n = Array.isArray(t),
                    r = Array.isArray(e);
                if (n && r) return t.length === e.length && t.every((function(t, i) {
                    return D(t, e[i])
                }));
                if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                if (n || r) return !1;
                var a = Object.keys(t),
                    o = Object.keys(e);
                return a.length === o.length && a.every((function(i) {
                    return D(t[i], e[i])
                }))
            } catch (t) {
                return !1
            }
        }

        function E(t, e) {
            for (var i = 0; i < t.length; i++)
                if (D(t[i], e)) return i;
            return -1
        }

        function $(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments))
            }
        }
        var P = "data-server-rendered",
            U = ["component", "directive", "filter"],
            R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            J = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: M,
                isReservedAttr: M,
                isUnknownElement: M,
                getTagNamespace: N,
                parsePlatformTagName: L,
                mustUseProp: M,
                async: !0,
                _lifecycleHooks: R
            },
            q = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

        function F(t, e, i, s) {
            Object.defineProperty(t, e, {
                value: i,
                enumerable: !!s,
                writable: !0,
                configurable: !0
            })
        }
        var H = new RegExp("[^" + q.source + ".$_\\d]");
        var B, V = "__proto__" in {},
            z = "undefined" != typeof window,
            G = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            W = G && WXEnvironment.platform.toLowerCase(),
            K = z && window.navigator.userAgent.toLowerCase(),
            X = K && /msie|trident/.test(K),
            Q = K && K.indexOf("msie 9.0") > 0,
            Y = K && K.indexOf("edge/") > 0,
            Z = (K && K.indexOf("android"), K && /iphone|ipad|ipod|ios/.test(K) || "ios" === W),
            tt = (K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K), K && K.match(/firefox\/(\d+)/)),
            et = {}.watch,
            it = !1;
        if (z) try {
            var st = {};
            Object.defineProperty(st, "passive", {
                get: function() {
                    it = !0
                }
            }), window.addEventListener("test-passive", null, st)
        } catch (t) {}
        var nt = function() {
                return void 0 === B && (B = !z && !G && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)), B
            },
            rt = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function at(t) {
            return "function" == typeof t && /native code/.test(t.toString())
        }
        var ot, lt = "undefined" != typeof Symbol && at(Symbol) && "undefined" != typeof Reflect && at(Reflect.ownKeys);
        ot = "undefined" != typeof Set && at(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t]
            }, t.prototype.add = function(t) {
                this.set[t] = !0
            }, t.prototype.clear = function() {
                this.set = Object.create(null)
            }, t
        }();
        var ht = N,
            ct = 0,
            ut = function() {
                this.id = ct++, this.subs = []
            };
        ut.prototype.addSub = function(t) {
            this.subs.push(t)
        }, ut.prototype.removeSub = function(t) {
            y(this.subs, t)
        }, ut.prototype.depend = function() {
            ut.target && ut.target.addDep(this)
        }, ut.prototype.notify = function() {
            var t = this.subs.slice();
            for (var e = 0, i = t.length; e < i; e++) t[e].update()
        }, ut.target = null;
        var dt = [];

        function pt(t) {
            dt.push(t), ut.target = t
        }

        function ft() {
            dt.pop(), ut.target = dt[dt.length - 1]
        }
        var mt = function(t, e, i, s, n, r, a, o) {
                this.tag = t, this.data = e, this.children = i, this.text = s, this.elm = n, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            vt = {
                child: {
                    configurable: !0
                }
            };
        vt.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(mt.prototype, vt);
        var gt = function(t) {
            void 0 === t && (t = "");
            var e = new mt;
            return e.text = t, e.isComment = !0, e
        };

        function yt(t) {
            return new mt(void 0, void 0, void 0, String(t))
        }

        function _t(t) {
            var e = new mt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
        }
        var bt = Array.prototype,
            xt = Object.create(bt);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(t) {
            var e = bt[t];
            F(xt, t, (function() {
                for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
                var n, r = e.apply(this, i),
                    a = this.__ob__;
                switch (t) {
                    case "push":
                    case "unshift":
                        n = i;
                        break;
                    case "splice":
                        n = i.slice(2)
                }
                return n && a.observeArray(n), a.dep.notify(), r
            }))
        }));
        var wt = Object.getOwnPropertyNames(xt),
            kt = !0;

        function Ot(t) {
            kt = t
        }
        var At = function(t) {
            this.value = t, this.dep = new ut, this.vmCount = 0, F(t, "__ob__", this), Array.isArray(t) ? (V ? function(t, e) {
                t.__proto__ = e
            }(t, xt) : function(t, e, i) {
                for (var s = 0, n = i.length; s < n; s++) {
                    var r = i[s];
                    F(t, r, e[r])
                }
            }(t, xt, wt), this.observeArray(t)) : this.walk(t)
        };

        function St(t, e) {
            var i;
            if (l(t) && !(t instanceof mt)) return b(t, "__ob__") && t.__ob__ instanceof At ? i = t.__ob__ : kt && !nt() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (i = new At(t)), e && i && i.vmCount++, i
        }

        function Ct(t, e, i, s, n) {
            var r = new ut,
                a = Object.getOwnPropertyDescriptor(t, e);
            if (!a || !1 !== a.configurable) {
                var o = a && a.get,
                    l = a && a.set;
                o && !l || 2 !== arguments.length || (i = t[e]);
                var h = !n && St(i);
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = o ? o.call(t) : i;
                        return ut.target && (r.depend(), h && (h.dep.depend(), Array.isArray(e) && function t(e) {
                            for (var i = void 0, s = 0, n = e.length; s < n; s++)(i = e[s]) && i.__ob__ && i.__ob__.dep.depend(), Array.isArray(i) && t(i)
                        }(e))), e
                    },
                    set: function(e) {
                        var s = o ? o.call(t) : i;
                        e === s || e != e && s != s || o && !l || (l ? l.call(t, e) : i = e, h = !n && St(e), r.notify())
                    }
                })
            }
        }

        function jt(t, e, i) {
            if (Array.isArray(t) && d(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, i), i;
            if (e in t && !(e in Object.prototype)) return t[e] = i, i;
            var s = t.__ob__;
            return t._isVue || s && s.vmCount ? i : s ? (Ct(s.value, e, i), s.dep.notify(), i) : (t[e] = i, i)
        }

        function Tt(t, e) {
            if (Array.isArray(t) && d(e)) t.splice(e, 1);
            else {
                var i = t.__ob__;
                t._isVue || i && i.vmCount || b(t, e) && (delete t[e], i && i.dep.notify())
            }
        }
        At.prototype.walk = function(t) {
            for (var e = Object.keys(t), i = 0; i < e.length; i++) Ct(t, e[i])
        }, At.prototype.observeArray = function(t) {
            for (var e = 0, i = t.length; e < i; e++) St(t[e])
        };
        var It = J.optionMergeStrategies;

        function Nt(t, e) {
            if (!e) return t;
            for (var i, s, n, r = lt ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < r.length; a++) "__ob__" !== (i = r[a]) && (s = t[i], n = e[i], b(t, i) ? s !== n && c(s) && c(n) && Nt(s, n) : jt(t, i, n));
            return t
        }

        function Mt(t, e, i) {
            return i ? function() {
                var s = "function" == typeof e ? e.call(i, i) : e,
                    n = "function" == typeof t ? t.call(i, i) : t;
                return s ? Nt(s, n) : n
            } : e ? t ? function() {
                return Nt("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
            } : e : t
        }

        function Lt(t, e) {
            var i = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
            return i ? function(t) {
                for (var e = [], i = 0; i < t.length; i++) - 1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }(i) : i
        }

        function Dt(t, e, i, s) {
            var n = Object.create(t || null);
            return e ? T(n, e) : n
        }
        It.data = function(t, e, i) {
            return i ? Mt(t, e, i) : e && "function" != typeof e ? t : Mt(t, e)
        }, R.forEach((function(t) {
            It[t] = Lt
        })), U.forEach((function(t) {
            It[t + "s"] = Dt
        })), It.watch = function(t, e, i, s) {
            if (t === et && (t = void 0), e === et && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var n = {};
            for (var r in T(n, t), e) {
                var a = n[r],
                    o = e[r];
                a && !Array.isArray(a) && (a = [a]), n[r] = a ? a.concat(o) : Array.isArray(o) ? o : [o]
            }
            return n
        }, It.props = It.methods = It.inject = It.computed = function(t, e, i, s) {
            if (!t) return e;
            var n = Object.create(null);
            return T(n, t), e && T(n, e), n
        }, It.provide = Mt;
        var Et = function(t, e) {
            return void 0 === e ? t : e
        };

        function $t(t, e, i) {
            if ("function" == typeof e && (e = e.options), function(t, e) {
                    var i = t.props;
                    if (i) {
                        var s, n, r = {};
                        if (Array.isArray(i))
                            for (s = i.length; s--;) "string" == typeof(n = i[s]) && (r[k(n)] = {
                                type: null
                            });
                        else if (c(i))
                            for (var a in i) n = i[a], r[k(a)] = c(n) ? n : {
                                type: n
                            };
                        else 0;
                        t.props = r
                    }
                }(e), function(t, e) {
                    var i = t.inject;
                    if (i) {
                        var s = t.inject = {};
                        if (Array.isArray(i))
                            for (var n = 0; n < i.length; n++) s[i[n]] = {
                                from: i[n]
                            };
                        else if (c(i))
                            for (var r in i) {
                                var a = i[r];
                                s[r] = c(a) ? T({
                                    from: r
                                }, a) : {
                                    from: a
                                }
                            } else 0
                    }
                }(e), function(t) {
                    var e = t.directives;
                    if (e)
                        for (var i in e) {
                            var s = e[i];
                            "function" == typeof s && (e[i] = {
                                bind: s,
                                update: s
                            })
                        }
                }(e), !e._base && (e.extends && (t = $t(t, e.extends, i)), e.mixins))
                for (var s = 0, n = e.mixins.length; s < n; s++) t = $t(t, e.mixins[s], i);
            var r, a = {};
            for (r in t) o(r);
            for (r in e) b(t, r) || o(r);

            function o(s) {
                var n = It[s] || Et;
                a[s] = n(t[s], e[s], i, s)
            }
            return a
        }

        function Pt(t, e, i, s) {
            if ("string" == typeof i) {
                var n = t[e];
                if (b(n, i)) return n[i];
                var r = k(i);
                if (b(n, r)) return n[r];
                var a = O(r);
                return b(n, a) ? n[a] : n[i] || n[r] || n[a]
            }
        }

        function Ut(t, e, i, s) {
            var n = e[t],
                r = !b(i, t),
                a = i[t],
                o = qt(Boolean, n.type);
            if (o > -1)
                if (r && !b(n, "default")) a = !1;
                else if ("" === a || a === S(t)) {
                var l = qt(String, n.type);
                (l < 0 || o < l) && (a = !0)
            }
            if (void 0 === a) {
                a = function(t, e, i) {
                    if (!b(e, "default")) return;
                    var s = e.default;
                    0;
                    if (t && t.$options.propsData && void 0 === t.$options.propsData[i] && void 0 !== t._props[i]) return t._props[i];
                    return "function" == typeof s && "Function" !== Rt(e.type) ? s.call(t) : s
                }(s, n, t);
                var h = kt;
                Ot(!0), St(a), Ot(h)
            }
            return a
        }

        function Rt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
        }

        function Jt(t, e) {
            return Rt(t) === Rt(e)
        }

        function qt(t, e) {
            if (!Array.isArray(e)) return Jt(e, t) ? 0 : -1;
            for (var i = 0, s = e.length; i < s; i++)
                if (Jt(e[i], t)) return i;
            return -1
        }

        function Ft(t, e, i) {
            pt();
            try {
                if (e)
                    for (var s = e; s = s.$parent;) {
                        var n = s.$options.errorCaptured;
                        if (n)
                            for (var r = 0; r < n.length; r++) try {
                                if (!1 === n[r].call(s, t, e, i)) return
                            } catch (t) {
                                Bt(t, s, "errorCaptured hook")
                            }
                    }
                Bt(t, e, i)
            } finally {
                ft()
            }
        }

        function Ht(t, e, i, s, n) {
            var r;
            try {
                (r = i ? t.apply(e, i) : t.call(e)) && !r._isVue && p(r) && !r._handled && (r.catch((function(t) {
                    return Ft(t, s, n + " (Promise/async)")
                })), r._handled = !0)
            } catch (t) {
                Ft(t, s, n)
            }
            return r
        }

        function Bt(t, e, i) {
            if (J.errorHandler) try {
                return J.errorHandler.call(null, t, e, i)
            } catch (e) {
                e !== t && Vt(e, null, "config.errorHandler")
            }
            Vt(t, e, i)
        }

        function Vt(t, e, i) {
            if (!z && !G || "undefined" == typeof console) throw t;
            console.error(t)
        }
        var zt, Gt = !1,
            Wt = [],
            Kt = !1;

        function Xt() {
            Kt = !1;
            var t = Wt.slice(0);
            Wt.length = 0;
            for (var e = 0; e < t.length; e++) t[e]()
        }
        if ("undefined" != typeof Promise && at(Promise)) {
            var Qt = Promise.resolve();
            zt = function() {
                Qt.then(Xt), Z && setTimeout(N)
            }, Gt = !0
        } else if (X || "undefined" == typeof MutationObserver || !at(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) zt = void 0 !== i && at(i) ? function() {
            i(Xt)
        } : function() {
            setTimeout(Xt, 0)
        };
        else {
            var Yt = 1,
                Zt = new MutationObserver(Xt),
                te = document.createTextNode(String(Yt));
            Zt.observe(te, {
                characterData: !0
            }), zt = function() {
                Yt = (Yt + 1) % 2, te.data = String(Yt)
            }, Gt = !0
        }

        function ee(t, e) {
            var i;
            if (Wt.push((function() {
                    if (t) try {
                        t.call(e)
                    } catch (t) {
                        Ft(t, e, "nextTick")
                    } else i && i(e)
                })), Kt || (Kt = !0, zt()), !t && "undefined" != typeof Promise) return new Promise((function(t) {
                i = t
            }))
        }
        var ie = new ot;

        function se(t) {
            ! function t(e, i) {
                var s, n;
                var r = Array.isArray(e);
                if (!r && !l(e) || Object.isFrozen(e) || e instanceof mt) return;
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (i.has(a)) return;
                    i.add(a)
                }
                if (r)
                    for (s = e.length; s--;) t(e[s], i);
                else
                    for (n = Object.keys(e), s = n.length; s--;) t(e[n[s]], i)
            }(t, ie), ie.clear()
        }
        var ne = x((function(t) {
            var e = "&" === t.charAt(0),
                i = "~" === (t = e ? t.slice(1) : t).charAt(0),
                s = "!" === (t = i ? t.slice(1) : t).charAt(0);
            return {
                name: t = s ? t.slice(1) : t,
                once: i,
                capture: s,
                passive: e
            }
        }));

        function re(t, e) {
            function i() {
                var t = arguments,
                    s = i.fns;
                if (!Array.isArray(s)) return Ht(s, null, arguments, e, "v-on handler");
                for (var n = s.slice(), r = 0; r < n.length; r++) Ht(n[r], null, t, e, "v-on handler")
            }
            return i.fns = t, i
        }

        function ae(t, e, i, s, r, o) {
            var l, h, c, u;
            for (l in t) h = t[l], c = e[l], u = ne(l), n(h) || (n(c) ? (n(h.fns) && (h = t[l] = re(h, o)), a(u.once) && (h = t[l] = r(u.name, h, u.capture)), i(u.name, h, u.capture, u.passive, u.params)) : h !== c && (c.fns = h, t[l] = c));
            for (l in e) n(t[l]) && s((u = ne(l)).name, e[l], u.capture)
        }

        function oe(t, e, i) {
            var s;
            t instanceof mt && (t = t.data.hook || (t.data.hook = {}));
            var o = t[e];

            function l() {
                i.apply(this, arguments), y(s.fns, l)
            }
            n(o) ? s = re([l]) : r(o.fns) && a(o.merged) ? (s = o).fns.push(l) : s = re([o, l]), s.merged = !0, t[e] = s
        }

        function le(t, e, i, s, n) {
            if (r(e)) {
                if (b(e, i)) return t[i] = e[i], n || delete e[i], !0;
                if (b(e, s)) return t[i] = e[s], n || delete e[s], !0
            }
            return !1
        }

        function he(t) {
            return o(t) ? [yt(t)] : Array.isArray(t) ? function t(e, i) {
                var s = [];
                var l, h, c, u;
                for (l = 0; l < e.length; l++) n(h = e[l]) || "boolean" == typeof h || (c = s.length - 1, u = s[c], Array.isArray(h) ? h.length > 0 && (ce((h = t(h, (i || "") + "_" + l))[0]) && ce(u) && (s[c] = yt(u.text + h[0].text), h.shift()), s.push.apply(s, h)) : o(h) ? ce(u) ? s[c] = yt(u.text + h) : "" !== h && s.push(yt(h)) : ce(h) && ce(u) ? s[c] = yt(u.text + h.text) : (a(e._isVList) && r(h.tag) && n(h.key) && r(i) && (h.key = "__vlist" + i + "_" + l + "__"), s.push(h)));
                return s
            }(t) : void 0
        }

        function ce(t) {
            return r(t) && r(t.text) && !1 === t.isComment
        }

        function ue(t, e) {
            if (t) {
                for (var i = Object.create(null), s = lt ? Reflect.ownKeys(t) : Object.keys(t), n = 0; n < s.length; n++) {
                    var r = s[n];
                    if ("__ob__" !== r) {
                        for (var a = t[r].from, o = e; o;) {
                            if (o._provided && b(o._provided, a)) {
                                i[r] = o._provided[a];
                                break
                            }
                            o = o.$parent
                        }
                        if (!o)
                            if ("default" in t[r]) {
                                var l = t[r].default;
                                i[r] = "function" == typeof l ? l.call(e) : l
                            } else 0
                    }
                }
                return i
            }
        }

        function de(t, e) {
            if (!t || !t.length) return {};
            for (var i = {}, s = 0, n = t.length; s < n; s++) {
                var r = t[s],
                    a = r.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, r.context !== e && r.fnContext !== e || !a || null == a.slot)(i.default || (i.default = [])).push(r);
                else {
                    var o = a.slot,
                        l = i[o] || (i[o] = []);
                    "template" === r.tag ? l.push.apply(l, r.children || []) : l.push(r)
                }
            }
            for (var h in i) i[h].every(pe) && delete i[h];
            return i
        }

        function pe(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
        }

        function fe(t, e, i) {
            var n, r = Object.keys(e).length > 0,
                a = t ? !!t.$stable : !r,
                o = t && t.$key;
            if (t) {
                if (t._normalized) return t._normalized;
                if (a && i && i !== s && o === i.$key && !r && !i.$hasNormal) return i;
                for (var l in n = {}, t) t[l] && "$" !== l[0] && (n[l] = me(e, l, t[l]))
            } else n = {};
            for (var h in e) h in n || (n[h] = ve(e, h));
            return t && Object.isExtensible(t) && (t._normalized = n), F(n, "$stable", a), F(n, "$key", o), F(n, "$hasNormal", r), n
        }

        function me(t, e, i) {
            var s = function() {
                var t = arguments.length ? i.apply(null, arguments) : i({});
                return (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : he(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
            };
            return i.proxy && Object.defineProperty(t, e, {
                get: s,
                enumerable: !0,
                configurable: !0
            }), s
        }

        function ve(t, e) {
            return function() {
                return t[e]
            }
        }

        function ge(t, e) {
            var i, s, n, a, o;
            if (Array.isArray(t) || "string" == typeof t)
                for (i = new Array(t.length), s = 0, n = t.length; s < n; s++) i[s] = e(t[s], s);
            else if ("number" == typeof t)
                for (i = new Array(t), s = 0; s < t; s++) i[s] = e(s + 1, s);
            else if (l(t))
                if (lt && t[Symbol.iterator]) {
                    i = [];
                    for (var h = t[Symbol.iterator](), c = h.next(); !c.done;) i.push(e(c.value, i.length)), c = h.next()
                } else
                    for (a = Object.keys(t), i = new Array(a.length), s = 0, n = a.length; s < n; s++) o = a[s], i[s] = e(t[o], o, s);
            return r(i) || (i = []), i._isVList = !0, i
        }

        function ye(t, e, i, s) {
            var n, r = this.$scopedSlots[t];
            r ? (i = i || {}, s && (i = T(T({}, s), i)), n = r(i) || e) : n = this.$slots[t] || e;
            var a = i && i.slot;
            return a ? this.$createElement("template", {
                slot: a
            }, n) : n
        }

        function _e(t) {
            return Pt(this.$options, "filters", t) || L
        }

        function be(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }

        function xe(t, e, i, s, n) {
            var r = J.keyCodes[e] || i;
            return n && s && !J.keyCodes[e] ? be(n, s) : r ? be(r, t) : s ? S(s) !== e : void 0
        }

        function we(t, e, i, s, n) {
            if (i)
                if (l(i)) {
                    var r;
                    Array.isArray(i) && (i = I(i));
                    var a = function(a) {
                        if ("class" === a || "style" === a || g(a)) r = t;
                        else {
                            var o = t.attrs && t.attrs.type;
                            r = s || J.mustUseProp(e, o, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                        }
                        var l = k(a),
                            h = S(a);
                        l in r || h in r || (r[a] = i[a], n && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                            i[a] = t
                        }))
                    };
                    for (var o in i) a(o)
                } else;
            return t
        }

        function ke(t, e) {
            var i = this._staticTrees || (this._staticTrees = []),
                s = i[t];
            return s && !e ? s : (Ae(s = i[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), s)
        }

        function Oe(t, e, i) {
            return Ae(t, "__once__" + e + (i ? "_" + i : ""), !0), t
        }

        function Ae(t, e, i) {
            if (Array.isArray(t))
                for (var s = 0; s < t.length; s++) t[s] && "string" != typeof t[s] && Se(t[s], e + "_" + s, i);
            else Se(t, e, i)
        }

        function Se(t, e, i) {
            t.isStatic = !0, t.key = e, t.isOnce = i
        }

        function Ce(t, e) {
            if (e)
                if (c(e)) {
                    var i = t.on = t.on ? T({}, t.on) : {};
                    for (var s in e) {
                        var n = i[s],
                            r = e[s];
                        i[s] = n ? [].concat(n, r) : r
                    }
                } else;
            return t
        }

        function je(t, e, i, s) {
            e = e || {
                $stable: !i
            };
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                Array.isArray(r) ? je(r, e, i) : r && (r.proxy && (r.fn.proxy = !0), e[r.key] = r.fn)
            }
            return s && (e.$key = s), e
        }

        function Te(t, e) {
            for (var i = 0; i < e.length; i += 2) {
                var s = e[i];
                "string" == typeof s && s && (t[e[i]] = e[i + 1])
            }
            return t
        }

        function Ie(t, e) {
            return "string" == typeof t ? e + t : t
        }

        function Ne(t) {
            t._o = Oe, t._n = m, t._s = f, t._l = ge, t._t = ye, t._q = D, t._i = E, t._m = ke, t._f = _e, t._k = xe, t._b = we, t._v = yt, t._e = gt, t._u = je, t._g = Ce, t._d = Te, t._p = Ie
        }

        function Me(t, e, i, n, r) {
            var o, l = this,
                h = r.options;
            b(n, "_uid") ? (o = Object.create(n))._original = n : (o = n, n = n._original);
            var c = a(h._compiled),
                u = !c;
            this.data = t, this.props = e, this.children = i, this.parent = n, this.listeners = t.on || s, this.injections = ue(h.inject, n), this.slots = function() {
                return l.$slots || fe(t.scopedSlots, l.$slots = de(i, n)), l.$slots
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return fe(t.scopedSlots, this.slots())
                }
            }), c && (this.$options = h, this.$slots = this.slots(), this.$scopedSlots = fe(t.scopedSlots, this.$slots)), h._scopeId ? this._c = function(t, e, i, s) {
                var r = qe(o, t, e, i, s, u);
                return r && !Array.isArray(r) && (r.fnScopeId = h._scopeId, r.fnContext = n), r
            } : this._c = function(t, e, i, s) {
                return qe(o, t, e, i, s, u)
            }
        }

        function Le(t, e, i, s, n) {
            var r = _t(t);
            return r.fnContext = i, r.fnOptions = s, e.slot && ((r.data || (r.data = {})).slot = e.slot), r
        }

        function De(t, e) {
            for (var i in e) t[k(i)] = e[i]
        }
        Ne(Me.prototype);
        var Ee = {
                init: function(t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var i = t;
                        Ee.prepatch(i, i)
                    } else {
                        (t.componentInstance = function(t, e) {
                            var i = {
                                    _isComponent: !0,
                                    _parentVnode: t,
                                    parent: e
                                },
                                s = t.data.inlineTemplate;
                            r(s) && (i.render = s.render, i.staticRenderFns = s.staticRenderFns);
                            return new t.componentOptions.Ctor(i)
                        }(t, Qe)).$mount(e ? t.elm : void 0, e)
                    }
                },
                prepatch: function(t, e) {
                    var i = e.componentOptions;
                    ! function(t, e, i, n, r) {
                        0;
                        var a = n.data.scopedSlots,
                            o = t.$scopedSlots,
                            l = !!(a && !a.$stable || o !== s && !o.$stable || a && t.$scopedSlots.$key !== a.$key),
                            h = !!(r || t.$options._renderChildren || l);
                        t.$options._parentVnode = n, t.$vnode = n, t._vnode && (t._vnode.parent = n);
                        if (t.$options._renderChildren = r, t.$attrs = n.data.attrs || s, t.$listeners = i || s, e && t.$options.props) {
                            Ot(!1);
                            for (var c = t._props, u = t.$options._propKeys || [], d = 0; d < u.length; d++) {
                                var p = u[d],
                                    f = t.$options.props;
                                c[p] = Ut(p, f, e, t)
                            }
                            Ot(!0), t.$options.propsData = e
                        }
                        i = i || s;
                        var m = t.$options._parentListeners;
                        t.$options._parentListeners = i, Xe(t, i, m), h && (t.$slots = de(r, n.context), t.$forceUpdate());
                        0
                    }(e.componentInstance = t.componentInstance, i.propsData, i.listeners, e, i.children)
                },
                insert: function(t) {
                    var e, i = t.context,
                        s = t.componentInstance;
                    s._isMounted || (s._isMounted = !0, ei(s, "mounted")), t.data.keepAlive && (i._isMounted ? ((e = s)._inactive = !1, si.push(e)) : ti(s, !0))
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? function t(e, i) {
                        if (i && (e._directInactive = !0, Ze(e))) return;
                        if (!e._inactive) {
                            e._inactive = !0;
                            for (var s = 0; s < e.$children.length; s++) t(e.$children[s]);
                            ei(e, "deactivated")
                        }
                    }(e, !0) : e.$destroy())
                }
            },
            $e = Object.keys(Ee);

        function Pe(t, e, i, o, h) {
            if (!n(t)) {
                var c = i.$options._base;
                if (l(t) && (t = c.extend(t)), "function" == typeof t) {
                    var u;
                    if (n(t.cid) && void 0 === (t = function(t, e) {
                            if (a(t.error) && r(t.errorComp)) return t.errorComp;
                            if (r(t.resolved)) return t.resolved;
                            var i = He;
                            i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i);
                            if (a(t.loading) && r(t.loadingComp)) return t.loadingComp;
                            if (i && !r(t.owners)) {
                                var s = t.owners = [i],
                                    o = !0,
                                    h = null,
                                    c = null;
                                i.$on("hook:destroyed", (function() {
                                    return y(s, i)
                                }));
                                var u = function(t) {
                                        for (var e = 0, i = s.length; e < i; e++) s[e].$forceUpdate();
                                        t && (s.length = 0, null !== h && (clearTimeout(h), h = null), null !== c && (clearTimeout(c), c = null))
                                    },
                                    d = $((function(i) {
                                        t.resolved = Be(i, e), o ? s.length = 0 : u(!0)
                                    })),
                                    f = $((function(e) {
                                        r(t.errorComp) && (t.error = !0, u(!0))
                                    })),
                                    m = t(d, f);
                                return l(m) && (p(m) ? n(t.resolved) && m.then(d, f) : p(m.component) && (m.component.then(d, f), r(m.error) && (t.errorComp = Be(m.error, e)), r(m.loading) && (t.loadingComp = Be(m.loading, e), 0 === m.delay ? t.loading = !0 : h = setTimeout((function() {
                                    h = null, n(t.resolved) && n(t.error) && (t.loading = !0, u(!1))
                                }), m.delay || 200)), r(m.timeout) && (c = setTimeout((function() {
                                    c = null, n(t.resolved) && f(null)
                                }), m.timeout)))), o = !1, t.loading ? t.loadingComp : t.resolved
                            }
                        }(u = t, c))) return function(t, e, i, s, n) {
                        var r = gt();
                        return r.asyncFactory = t, r.asyncMeta = {
                            data: e,
                            context: i,
                            children: s,
                            tag: n
                        }, r
                    }(u, e, i, o, h);
                    e = e || {}, ki(t), r(e.model) && function(t, e) {
                        var i = t.model && t.model.prop || "value",
                            s = t.model && t.model.event || "input";
                        (e.attrs || (e.attrs = {}))[i] = e.model.value;
                        var n = e.on || (e.on = {}),
                            a = n[s],
                            o = e.model.callback;
                        r(a) ? (Array.isArray(a) ? -1 === a.indexOf(o) : a !== o) && (n[s] = [o].concat(a)) : n[s] = o
                    }(t.options, e);
                    var d = function(t, e, i) {
                        var s = e.options.props;
                        if (!n(s)) {
                            var a = {},
                                o = t.attrs,
                                l = t.props;
                            if (r(o) || r(l))
                                for (var h in s) {
                                    var c = S(h);
                                    le(a, l, h, c, !0) || le(a, o, h, c, !1)
                                }
                            return a
                        }
                    }(e, t);
                    if (a(t.options.functional)) return function(t, e, i, n, a) {
                        var o = t.options,
                            l = {},
                            h = o.props;
                        if (r(h))
                            for (var c in h) l[c] = Ut(c, h, e || s);
                        else r(i.attrs) && De(l, i.attrs), r(i.props) && De(l, i.props);
                        var u = new Me(i, l, a, n, t),
                            d = o.render.call(null, u._c, u);
                        if (d instanceof mt) return Le(d, i, u.parent, o, u);
                        if (Array.isArray(d)) {
                            for (var p = he(d) || [], f = new Array(p.length), m = 0; m < p.length; m++) f[m] = Le(p[m], i, u.parent, o, u);
                            return f
                        }
                    }(t, d, e, i, o);
                    var f = e.on;
                    if (e.on = e.nativeOn, a(t.options.abstract)) {
                        var m = e.slot;
                        e = {}, m && (e.slot = m)
                    }! function(t) {
                        for (var e = t.hook || (t.hook = {}), i = 0; i < $e.length; i++) {
                            var s = $e[i],
                                n = e[s],
                                r = Ee[s];
                            n === r || n && n._merged || (e[s] = n ? Ue(r, n) : r)
                        }
                    }(e);
                    var v = t.options.name || h;
                    return new mt("vue-component-" + t.cid + (v ? "-" + v : ""), e, void 0, void 0, void 0, i, {
                        Ctor: t,
                        propsData: d,
                        listeners: f,
                        tag: h,
                        children: o
                    }, u)
                }
            }
        }

        function Ue(t, e) {
            var i = function(i, s) {
                t(i, s), e(i, s)
            };
            return i._merged = !0, i
        }
        var Re = 1,
            Je = 2;

        function qe(t, e, i, s, h, c) {
            return (Array.isArray(i) || o(i)) && (h = s, s = i, i = void 0), a(c) && (h = Je),
                function(t, e, i, s, o) {
                    if (r(i) && r(i.__ob__)) return gt();
                    r(i) && r(i.is) && (e = i.is);
                    if (!e) return gt();
                    0;
                    Array.isArray(s) && "function" == typeof s[0] && ((i = i || {}).scopedSlots = {
                        default: s[0]
                    }, s.length = 0);
                    o === Je ? s = he(s) : o === Re && (s = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                        return t
                    }(s));
                    var h, c;
                    if ("string" == typeof e) {
                        var u;
                        c = t.$vnode && t.$vnode.ns || J.getTagNamespace(e), h = J.isReservedTag(e) ? new mt(J.parsePlatformTagName(e), i, s, void 0, void 0, t) : i && i.pre || !r(u = Pt(t.$options, "components", e)) ? new mt(e, i, s, void 0, void 0, t) : Pe(u, i, t, s, e)
                    } else h = Pe(e, i, t, s);
                    return Array.isArray(h) ? h : r(h) ? (r(c) && function t(e, i, s) {
                        e.ns = i;
                        "foreignObject" === e.tag && (i = void 0, s = !0);
                        if (r(e.children))
                            for (var o = 0, l = e.children.length; o < l; o++) {
                                var h = e.children[o];
                                r(h.tag) && (n(h.ns) || a(s) && "svg" !== h.tag) && t(h, i, s)
                            }
                    }(h, c), r(i) && function(t) {
                        l(t.style) && se(t.style);
                        l(t.class) && se(t.class)
                    }(i), h) : gt()
                }(t, e, i, s, h)
        }
        var Fe, He = null;

        function Be(t, e) {
            return (t.__esModule || lt && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
        }

        function Ve(t) {
            return t.isComment && t.asyncFactory
        }

        function ze(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (r(i) && (r(i.componentOptions) || Ve(i))) return i
                }
        }

        function Ge(t, e) {
            Fe.$on(t, e)
        }

        function We(t, e) {
            Fe.$off(t, e)
        }

        function Ke(t, e) {
            var i = Fe;
            return function s() {
                var n = e.apply(null, arguments);
                null !== n && i.$off(t, s)
            }
        }

        function Xe(t, e, i) {
            Fe = t, ae(e, i || {}, Ge, We, Ke, t), Fe = void 0
        }
        var Qe = null;

        function Ye(t) {
            var e = Qe;
            return Qe = t,
                function() {
                    Qe = e
                }
        }

        function Ze(t) {
            for (; t && (t = t.$parent);)
                if (t._inactive) return !0;
            return !1
        }

        function ti(t, e) {
            if (e) {
                if (t._directInactive = !1, Ze(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var i = 0; i < t.$children.length; i++) ti(t.$children[i]);
                ei(t, "activated")
            }
        }

        function ei(t, e) {
            pt();
            var i = t.$options[e],
                s = e + " hook";
            if (i)
                for (var n = 0, r = i.length; n < r; n++) Ht(i[n], t, null, t, s);
            t._hasHookEvent && t.$emit("hook:" + e), ft()
        }
        var ii = [],
            si = [],
            ni = {},
            ri = !1,
            ai = !1,
            oi = 0;
        var li = 0,
            hi = Date.now;
        if (z && !X) {
            var ci = window.performance;
            ci && "function" == typeof ci.now && hi() > document.createEvent("Event").timeStamp && (hi = function() {
                return ci.now()
            })
        }

        function ui() {
            var t, e;
            for (li = hi(), ai = !0, ii.sort((function(t, e) {
                    return t.id - e.id
                })), oi = 0; oi < ii.length; oi++)(t = ii[oi]).before && t.before(), e = t.id, ni[e] = null, t.run();
            var i = si.slice(),
                s = ii.slice();
            oi = ii.length = si.length = 0, ni = {}, ri = ai = !1,
                function(t) {
                    for (var e = 0; e < t.length; e++) t[e]._inactive = !0, ti(t[e], !0)
                }(i),
                function(t) {
                    var e = t.length;
                    for (; e--;) {
                        var i = t[e],
                            s = i.vm;
                        s._watcher === i && s._isMounted && !s._isDestroyed && ei(s, "updated")
                    }
                }(s), rt && J.devtools && rt.emit("flush")
        }
        var di = 0,
            pi = function(t, e, i, s, n) {
                this.vm = t, n && (t._watcher = this), t._watchers.push(this), s ? (this.deep = !!s.deep, this.user = !!s.user, this.lazy = !!s.lazy, this.sync = !!s.sync, this.before = s.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = i, this.id = ++di, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ot, this.newDepIds = new ot, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                    if (!H.test(t)) {
                        var e = t.split(".");
                        return function(t) {
                            for (var i = 0; i < e.length; i++) {
                                if (!t) return;
                                t = t[e[i]]
                            }
                            return t
                        }
                    }
                }(e), this.getter || (this.getter = N)), this.value = this.lazy ? void 0 : this.get()
            };
        pi.prototype.get = function() {
            var t;
            pt(this);
            var e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                if (!this.user) throw t;
                Ft(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && se(t), ft(), this.cleanupDeps()
            }
            return t
        }, pi.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, pi.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--;) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var i = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0
        }, pi.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                var e = t.id;
                if (null == ni[e]) {
                    if (ni[e] = !0, ai) {
                        for (var i = ii.length - 1; i > oi && ii[i].id > t.id;) i--;
                        ii.splice(i + 1, 0, t)
                    } else ii.push(t);
                    ri || (ri = !0, ee(ui))
                }
            }(this)
        }, pi.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || l(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        Ft(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, pi.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, pi.prototype.depend = function() {
            for (var t = this.deps.length; t--;) this.deps[t].depend()
        }, pi.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                this.active = !1
            }
        };
        var fi = {
            enumerable: !0,
            configurable: !0,
            get: N,
            set: N
        };

        function mi(t, e, i) {
            fi.get = function() {
                return this[e][i]
            }, fi.set = function(t) {
                this[e][i] = t
            }, Object.defineProperty(t, i, fi)
        }

        function vi(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && function(t, e) {
                var i = t.$options.propsData || {},
                    s = t._props = {},
                    n = t.$options._propKeys = [];
                t.$parent && Ot(!1);
                var r = function(r) {
                    n.push(r);
                    var a = Ut(r, e, i, t);
                    Ct(s, r, a), r in t || mi(t, "_props", r)
                };
                for (var a in e) r(a);
                Ot(!0)
            }(t, e.props), e.methods && function(t, e) {
                t.$options.props;
                for (var i in e) t[i] = "function" != typeof e[i] ? N : C(e[i], t)
            }(t, e.methods), e.data ? function(t) {
                var e = t.$options.data;
                c(e = t._data = "function" == typeof e ? function(t, e) {
                    pt();
                    try {
                        return t.call(e, e)
                    } catch (t) {
                        return Ft(t, e, "data()"), {}
                    } finally {
                        ft()
                    }
                }(e, t) : e || {}) || (e = {});
                var i = Object.keys(e),
                    s = t.$options.props,
                    n = (t.$options.methods, i.length);
                for (; n--;) {
                    var r = i[n];
                    0, s && b(s, r) || (a = void 0, 36 !== (a = (r + "").charCodeAt(0)) && 95 !== a && mi(t, "_data", r))
                }
                var a;
                St(e, !0)
            }(t) : St(t._data = {}, !0), e.computed && function(t, e) {
                var i = t._computedWatchers = Object.create(null),
                    s = nt();
                for (var n in e) {
                    var r = e[n],
                        a = "function" == typeof r ? r : r.get;
                    0, s || (i[n] = new pi(t, a || N, N, gi)), n in t || yi(t, n, r)
                }
            }(t, e.computed), e.watch && e.watch !== et && function(t, e) {
                for (var i in e) {
                    var s = e[i];
                    if (Array.isArray(s))
                        for (var n = 0; n < s.length; n++) xi(t, i, s[n]);
                    else xi(t, i, s)
                }
            }(t, e.watch)
        }
        var gi = {
            lazy: !0
        };

        function yi(t, e, i) {
            var s = !nt();
            "function" == typeof i ? (fi.get = s ? _i(e) : bi(i), fi.set = N) : (fi.get = i.get ? s && !1 !== i.cache ? _i(e) : bi(i.get) : N, fi.set = i.set || N), Object.defineProperty(t, e, fi)
        }

        function _i(t) {
            return function() {
                var e = this._computedWatchers && this._computedWatchers[t];
                if (e) return e.dirty && e.evaluate(), ut.target && e.depend(), e.value
            }
        }

        function bi(t) {
            return function() {
                return t.call(this, this)
            }
        }

        function xi(t, e, i, s) {
            return c(i) && (s = i, i = i.handler), "string" == typeof i && (i = t[i]), t.$watch(e, i, s)
        }
        var wi = 0;

        function ki(t) {
            var e = t.options;
            if (t.super) {
                var i = ki(t.super);
                if (i !== t.superOptions) {
                    t.superOptions = i;
                    var s = function(t) {
                        var e, i = t.options,
                            s = t.sealedOptions;
                        for (var n in i) i[n] !== s[n] && (e || (e = {}), e[n] = i[n]);
                        return e
                    }(t);
                    s && T(t.extendOptions, s), (e = t.options = $t(i, t.extendOptions)).name && (e.components[e.name] = t)
                }
            }
            return e
        }

        function Oi(t) {
            this._init(t)
        }

        function Ai(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var i = this,
                    s = i.cid,
                    n = t._Ctor || (t._Ctor = {});
                if (n[s]) return n[s];
                var r = t.name || i.options.name;
                var a = function(t) {
                    this._init(t)
                };
                return (a.prototype = Object.create(i.prototype)).constructor = a, a.cid = e++, a.options = $t(i.options, t), a.super = i, a.options.props && function(t) {
                    var e = t.options.props;
                    for (var i in e) mi(t.prototype, "_props", i)
                }(a), a.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var i in e) yi(t.prototype, i, e[i])
                }(a), a.extend = i.extend, a.mixin = i.mixin, a.use = i.use, U.forEach((function(t) {
                    a[t] = i[t]
                })), r && (a.options.components[r] = a), a.superOptions = i.options, a.extendOptions = t, a.sealedOptions = T({}, a.options), n[s] = a, a
            }
        }

        function Si(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function Ci(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
        }

        function ji(t, e) {
            var i = t.cache,
                s = t.keys,
                n = t._vnode;
            for (var r in i) {
                var a = i[r];
                if (a) {
                    var o = Si(a.componentOptions);
                    o && !e(o) && Ti(i, r, s, n)
                }
            }
        }

        function Ti(t, e, i, s) {
            var n = t[e];
            !n || s && n.tag === s.tag || n.componentInstance.$destroy(), t[e] = null, y(i, e)
        }! function(t) {
            t.prototype._init = function(t) {
                var e = this;
                e._uid = wi++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                        var i = t.$options = Object.create(t.constructor.options),
                            s = e._parentVnode;
                        i.parent = e.parent, i._parentVnode = s;
                        var n = s.componentOptions;
                        i.propsData = n.propsData, i._parentListeners = n.listeners, i._renderChildren = n.children, i._componentTag = n.tag, e.render && (i.render = e.render, i.staticRenderFns = e.staticRenderFns)
                    }(e, t) : e.$options = $t(ki(e.constructor), t || {}, e), e._renderProxy = e, e._self = e,
                    function(t) {
                        var e = t.$options,
                            i = e.parent;
                        if (i && !e.abstract) {
                            for (; i.$options.abstract && i.$parent;) i = i.$parent;
                            i.$children.push(t)
                        }
                        t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                    }(e),
                    function(t) {
                        t._events = Object.create(null), t._hasHookEvent = !1;
                        var e = t.$options._parentListeners;
                        e && Xe(t, e)
                    }(e),
                    function(t) {
                        t._vnode = null, t._staticTrees = null;
                        var e = t.$options,
                            i = t.$vnode = e._parentVnode,
                            n = i && i.context;
                        t.$slots = de(e._renderChildren, n), t.$scopedSlots = s, t._c = function(e, i, s, n) {
                            return qe(t, e, i, s, n, !1)
                        }, t.$createElement = function(e, i, s, n) {
                            return qe(t, e, i, s, n, !0)
                        };
                        var r = i && i.data;
                        Ct(t, "$attrs", r && r.attrs || s, null, !0), Ct(t, "$listeners", e._parentListeners || s, null, !0)
                    }(e), ei(e, "beforeCreate"),
                    function(t) {
                        var e = ue(t.$options.inject, t);
                        e && (Ot(!1), Object.keys(e).forEach((function(i) {
                            Ct(t, i, e[i])
                        })), Ot(!0))
                    }(e), vi(e),
                    function(t) {
                        var e = t.$options.provide;
                        e && (t._provided = "function" == typeof e ? e.call(t) : e)
                    }(e), ei(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
        }(Oi),
        function(t) {
            var e = {
                    get: function() {
                        return this._data
                    }
                },
                i = {
                    get: function() {
                        return this._props
                    }
                };
            Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = jt, t.prototype.$delete = Tt, t.prototype.$watch = function(t, e, i) {
                if (c(e)) return xi(this, t, e, i);
                (i = i || {}).user = !0;
                var s = new pi(this, t, e, i);
                if (i.immediate) try {
                    e.call(this, s.value)
                } catch (t) {
                    Ft(t, this, 'callback for immediate watcher "' + s.expression + '"')
                }
                return function() {
                    s.teardown()
                }
            }
        }(Oi),
        function(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, i) {
                var s = this;
                if (Array.isArray(t))
                    for (var n = 0, r = t.length; n < r; n++) s.$on(t[n], i);
                else(s._events[t] || (s._events[t] = [])).push(i), e.test(t) && (s._hasHookEvent = !0);
                return s
            }, t.prototype.$once = function(t, e) {
                var i = this;

                function s() {
                    i.$off(t, s), e.apply(i, arguments)
                }
                return s.fn = e, i.$on(t, s), i
            }, t.prototype.$off = function(t, e) {
                var i = this;
                if (!arguments.length) return i._events = Object.create(null), i;
                if (Array.isArray(t)) {
                    for (var s = 0, n = t.length; s < n; s++) i.$off(t[s], e);
                    return i
                }
                var r, a = i._events[t];
                if (!a) return i;
                if (!e) return i._events[t] = null, i;
                for (var o = a.length; o--;)
                    if ((r = a[o]) === e || r.fn === e) {
                        a.splice(o, 1);
                        break
                    } return i
            }, t.prototype.$emit = function(t) {
                var e = this,
                    i = e._events[t];
                if (i) {
                    i = i.length > 1 ? j(i) : i;
                    for (var s = j(arguments, 1), n = 'event handler for "' + t + '"', r = 0, a = i.length; r < a; r++) Ht(i[r], e, s, e, n)
                }
                return e
            }
        }(Oi),
        function(t) {
            t.prototype._update = function(t, e) {
                var i = this,
                    s = i.$el,
                    n = i._vnode,
                    r = Ye(i);
                i._vnode = t, i.$el = n ? i.__patch__(n, t) : i.__patch__(i.$el, t, e, !1), r(), s && (s.__vue__ = null), i.$el && (i.$el.__vue__ = i), i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
            }, t.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }, t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    ei(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || y(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var i = t._watchers.length; i--;) t._watchers[i].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), ei(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                }
            }
        }(Oi),
        function(t) {
            Ne(t.prototype), t.prototype.$nextTick = function(t) {
                return ee(t, this)
            }, t.prototype._render = function() {
                var t, e = this,
                    i = e.$options,
                    s = i.render,
                    n = i._parentVnode;
                n && (e.$scopedSlots = fe(n.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = n;
                try {
                    He = e, t = s.call(e._renderProxy, e.$createElement)
                } catch (i) {
                    Ft(i, e, "render"), t = e._vnode
                } finally {
                    He = null
                }
                return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof mt || (t = gt()), t.parent = n, t
            }
        }(Oi);
        var Ii = [String, RegExp, Array],
            Ni = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Ii,
                        exclude: Ii,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        for (var t in this.cache) Ti(this.cache, t, this.keys)
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", (function(e) {
                            ji(t, (function(t) {
                                return Ci(e, t)
                            }))
                        })), this.$watch("exclude", (function(e) {
                            ji(t, (function(t) {
                                return !Ci(e, t)
                            }))
                        }))
                    },
                    render: function() {
                        var t = this.$slots.default,
                            e = ze(t),
                            i = e && e.componentOptions;
                        if (i) {
                            var s = Si(i),
                                n = this.include,
                                r = this.exclude;
                            if (n && (!s || !Ci(n, s)) || r && s && Ci(r, s)) return e;
                            var a = this.cache,
                                o = this.keys,
                                l = null == e.key ? i.Ctor.cid + (i.tag ? "::" + i.tag : "") : e.key;
                            a[l] ? (e.componentInstance = a[l].componentInstance, y(o, l), o.push(l)) : (a[l] = e, o.push(l), this.max && o.length > parseInt(this.max) && Ti(a, o[0], o, this._vnode)), e.data.keepAlive = !0
                        }
                        return e || t && t[0]
                    }
                }
            };
        ! function(t) {
            var e = {
                get: function() {
                    return J
                }
            };
            Object.defineProperty(t, "config", e), t.util = {
                    warn: ht,
                    extend: T,
                    mergeOptions: $t,
                    defineReactive: Ct
                }, t.set = jt, t.delete = Tt, t.nextTick = ee, t.observable = function(t) {
                    return St(t), t
                }, t.options = Object.create(null), U.forEach((function(e) {
                    t.options[e + "s"] = Object.create(null)
                })), t.options._base = t, T(t.options.components, Ni),
                function(t) {
                    t.use = function(t) {
                        var e = this._installedPlugins || (this._installedPlugins = []);
                        if (e.indexOf(t) > -1) return this;
                        var i = j(arguments, 1);
                        return i.unshift(this), "function" == typeof t.install ? t.install.apply(t, i) : "function" == typeof t && t.apply(null, i), e.push(t), this
                    }
                }(t),
                function(t) {
                    t.mixin = function(t) {
                        return this.options = $t(this.options, t), this
                    }
                }(t), Ai(t),
                function(t) {
                    U.forEach((function(e) {
                        t[e] = function(t, i) {
                            return i ? ("component" === e && c(i) && (i.name = i.name || t, i = this.options._base.extend(i)), "directive" === e && "function" == typeof i && (i = {
                                bind: i,
                                update: i
                            }), this.options[e + "s"][t] = i, i) : this.options[e + "s"][t]
                        }
                    }))
                }(t)
        }(Oi), Object.defineProperty(Oi.prototype, "$isServer", {
            get: nt
        }), Object.defineProperty(Oi.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(Oi, "FunctionalRenderContext", {
            value: Me
        }), Oi.version = "2.6.10";
        var Mi = v("style,class"),
            Li = v("input,textarea,option,select,progress"),
            Di = v("contenteditable,draggable,spellcheck"),
            Ei = v("events,caret,typing,plaintext-only"),
            $i = function(t, e) {
                return qi(e) || "false" === e ? "false" : "contenteditable" === t && Ei(e) ? e : "true"
            },
            Pi = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Ui = "http://www.w3.org/1999/xlink",
            Ri = function(t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            Ji = function(t) {
                return Ri(t) ? t.slice(6, t.length) : ""
            },
            qi = function(t) {
                return null == t || !1 === t
            };

        function Fi(t) {
            for (var e = t.data, i = t, s = t; r(s.componentInstance);)(s = s.componentInstance._vnode) && s.data && (e = Hi(s.data, e));
            for (; r(i = i.parent);) i && i.data && (e = Hi(e, i.data));
            return function(t, e) {
                if (r(t) || r(e)) return Bi(t, Vi(e));
                return ""
            }(e.staticClass, e.class)
        }

        function Hi(t, e) {
            return {
                staticClass: Bi(t.staticClass, e.staticClass),
                class: r(t.class) ? [t.class, e.class] : e.class
            }
        }

        function Bi(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function Vi(t) {
            return Array.isArray(t) ? function(t) {
                for (var e, i = "", s = 0, n = t.length; s < n; s++) r(e = Vi(t[s])) && "" !== e && (i && (i += " "), i += e);
                return i
            }(t) : l(t) ? function(t) {
                var e = "";
                for (var i in t) t[i] && (e && (e += " "), e += i);
                return e
            }(t) : "string" == typeof t ? t : ""
        }
        var zi = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Gi = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Wi = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Ki = function(t) {
                return Gi(t) || Wi(t)
            };
        var Xi = Object.create(null);
        var Qi = v("text,number,password,search,email,tel,url");
        var Yi = Object.freeze({
                createElement: function(t, e) {
                    var i = document.createElement(t);
                    return "select" !== t ? i : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i)
                },
                createElementNS: function(t, e) {
                    return document.createElementNS(zi[t], e)
                },
                createTextNode: function(t) {
                    return document.createTextNode(t)
                },
                createComment: function(t) {
                    return document.createComment(t)
                },
                insertBefore: function(t, e, i) {
                    t.insertBefore(e, i)
                },
                removeChild: function(t, e) {
                    t.removeChild(e)
                },
                appendChild: function(t, e) {
                    t.appendChild(e)
                },
                parentNode: function(t) {
                    return t.parentNode
                },
                nextSibling: function(t) {
                    return t.nextSibling
                },
                tagName: function(t) {
                    return t.tagName
                },
                setTextContent: function(t, e) {
                    t.textContent = e
                },
                setStyleScope: function(t, e) {
                    t.setAttribute(e, "")
                }
            }),
            Zi = {
                create: function(t, e) {
                    ts(e)
                },
                update: function(t, e) {
                    t.data.ref !== e.data.ref && (ts(t, !0), ts(e))
                },
                destroy: function(t) {
                    ts(t, !0)
                }
            };

        function ts(t, e) {
            var i = t.data.ref;
            if (r(i)) {
                var s = t.context,
                    n = t.componentInstance || t.elm,
                    a = s.$refs;
                e ? Array.isArray(a[i]) ? y(a[i], n) : a[i] === n && (a[i] = void 0) : t.data.refInFor ? Array.isArray(a[i]) ? a[i].indexOf(n) < 0 && a[i].push(n) : a[i] = [n] : a[i] = n
            }
        }
        var es = new mt("", {}, []),
            is = ["create", "activate", "update", "remove", "destroy"];

        function ss(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && function(t, e) {
                if ("input" !== t.tag) return !0;
                var i, s = r(i = t.data) && r(i = i.attrs) && i.type,
                    n = r(i = e.data) && r(i = i.attrs) && i.type;
                return s === n || Qi(s) && Qi(n)
            }(t, e) || a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
        }

        function ns(t, e, i) {
            var s, n, a = {};
            for (s = e; s <= i; ++s) r(n = t[s].key) && (a[n] = s);
            return a
        }
        var rs = {
            create: as,
            update: as,
            destroy: function(t) {
                as(t, es)
            }
        };

        function as(t, e) {
            (t.data.directives || e.data.directives) && function(t, e) {
                var i, s, n, r = t === es,
                    a = e === es,
                    o = ls(t.data.directives, t.context),
                    l = ls(e.data.directives, e.context),
                    h = [],
                    c = [];
                for (i in l) s = o[i], n = l[i], s ? (n.oldValue = s.value, n.oldArg = s.arg, cs(n, "update", e, t), n.def && n.def.componentUpdated && c.push(n)) : (cs(n, "bind", e, t), n.def && n.def.inserted && h.push(n));
                if (h.length) {
                    var u = function() {
                        for (var i = 0; i < h.length; i++) cs(h[i], "inserted", e, t)
                    };
                    r ? oe(e, "insert", u) : u()
                }
                c.length && oe(e, "postpatch", (function() {
                    for (var i = 0; i < c.length; i++) cs(c[i], "componentUpdated", e, t)
                }));
                if (!r)
                    for (i in o) l[i] || cs(o[i], "unbind", t, t, a)
            }(t, e)
        }
        var os = Object.create(null);

        function ls(t, e) {
            var i, s, n = Object.create(null);
            if (!t) return n;
            for (i = 0; i < t.length; i++)(s = t[i]).modifiers || (s.modifiers = os), n[hs(s)] = s, s.def = Pt(e.$options, "directives", s.name);
            return n
        }

        function hs(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }

        function cs(t, e, i, s, n) {
            var r = t.def && t.def[e];
            if (r) try {
                r(i.elm, t, i, s, n)
            } catch (s) {
                Ft(s, i.context, "directive " + t.name + " " + e + " hook")
            }
        }
        var us = [Zi, rs];

        function ds(t, e) {
            var i = e.componentOptions;
            if (!(r(i) && !1 === i.Ctor.options.inheritAttrs || n(t.data.attrs) && n(e.data.attrs))) {
                var s, a, o = e.elm,
                    l = t.data.attrs || {},
                    h = e.data.attrs || {};
                for (s in r(h.__ob__) && (h = e.data.attrs = T({}, h)), h) a = h[s], l[s] !== a && ps(o, s, a);
                for (s in (X || Y) && h.value !== l.value && ps(o, "value", h.value), l) n(h[s]) && (Ri(s) ? o.removeAttributeNS(Ui, Ji(s)) : Di(s) || o.removeAttribute(s))
            }
        }

        function ps(t, e, i) {
            t.tagName.indexOf("-") > -1 ? fs(t, e, i) : Pi(e) ? qi(i) ? t.removeAttribute(e) : (i = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, i)) : Di(e) ? t.setAttribute(e, $i(e, i)) : Ri(e) ? qi(i) ? t.removeAttributeNS(Ui, Ji(e)) : t.setAttributeNS(Ui, e, i) : fs(t, e, i)
        }

        function fs(t, e, i) {
            if (qi(i)) t.removeAttribute(e);
            else {
                if (X && !Q && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== i && !t.__ieph) {
                    var s = function(e) {
                        e.stopImmediatePropagation(), t.removeEventListener("input", s)
                    };
                    t.addEventListener("input", s), t.__ieph = !0
                }
                t.setAttribute(e, i)
            }
        }
        var ms = {
            create: ds,
            update: ds
        };

        function vs(t, e) {
            var i = e.elm,
                s = e.data,
                a = t.data;
            if (!(n(s.staticClass) && n(s.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
                var o = Fi(e),
                    l = i._transitionClasses;
                r(l) && (o = Bi(o, Vi(l))), o !== i._prevClass && (i.setAttribute("class", o), i._prevClass = o)
            }
        }
        var gs, ys = {
                create: vs,
                update: vs
            },
            _s = "__r",
            bs = "__c";

        function xs(t, e, i) {
            var s = gs;
            return function n() {
                var r = e.apply(null, arguments);
                null !== r && Os(t, n, i, s)
            }
        }
        var ws = Gt && !(tt && Number(tt[1]) <= 53);

        function ks(t, e, i, s) {
            if (ws) {
                var n = li,
                    r = e;
                e = r._wrapper = function(t) {
                    if (t.target === t.currentTarget || t.timeStamp >= n || t.timeStamp <= 0 || t.target.ownerDocument !== document) return r.apply(this, arguments)
                }
            }
            gs.addEventListener(t, e, it ? {
                capture: i,
                passive: s
            } : i)
        }

        function Os(t, e, i, s) {
            (s || gs).removeEventListener(t, e._wrapper || e, i)
        }

        function As(t, e) {
            if (!n(t.data.on) || !n(e.data.on)) {
                var i = e.data.on || {},
                    s = t.data.on || {};
                gs = e.elm,
                    function(t) {
                        if (r(t[_s])) {
                            var e = X ? "change" : "input";
                            t[e] = [].concat(t[_s], t[e] || []), delete t[_s]
                        }
                        r(t[bs]) && (t.change = [].concat(t[bs], t.change || []), delete t[bs])
                    }(i), ae(i, s, ks, Os, xs, e.context), gs = void 0
            }
        }
        var Ss, Cs = {
            create: As,
            update: As
        };

        function js(t, e) {
            if (!n(t.data.domProps) || !n(e.data.domProps)) {
                var i, s, a = e.elm,
                    o = t.data.domProps || {},
                    l = e.data.domProps || {};
                for (i in r(l.__ob__) && (l = e.data.domProps = T({}, l)), o) i in l || (a[i] = "");
                for (i in l) {
                    if (s = l[i], "textContent" === i || "innerHTML" === i) {
                        if (e.children && (e.children.length = 0), s === o[i]) continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === i && "PROGRESS" !== a.tagName) {
                        a._value = s;
                        var h = n(s) ? "" : String(s);
                        Ts(a, h) && (a.value = h)
                    } else if ("innerHTML" === i && Wi(a.tagName) && n(a.innerHTML)) {
                        (Ss = Ss || document.createElement("div")).innerHTML = "<svg>" + s + "</svg>";
                        for (var c = Ss.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                        for (; c.firstChild;) a.appendChild(c.firstChild)
                    } else if (s !== o[i]) try {
                        a[i] = s
                    } catch (t) {}
                }
            }
        }

        function Ts(t, e) {
            return !t.composing && ("OPTION" === t.tagName || function(t, e) {
                var i = !0;
                try {
                    i = document.activeElement !== t
                } catch (t) {}
                return i && t.value !== e
            }(t, e) || function(t, e) {
                var i = t.value,
                    s = t._vModifiers;
                if (r(s)) {
                    if (s.number) return m(i) !== m(e);
                    if (s.trim) return i.trim() !== e.trim()
                }
                return i !== e
            }(t, e))
        }
        var Is = {
                create: js,
                update: js
            },
            Ns = x((function(t) {
                var e = {},
                    i = /:(.+)/;
                return t.split(/;(?![^(]*\))/g).forEach((function(t) {
                    if (t) {
                        var s = t.split(i);
                        s.length > 1 && (e[s[0].trim()] = s[1].trim())
                    }
                })), e
            }));

        function Ms(t) {
            var e = Ls(t.style);
            return t.staticStyle ? T(t.staticStyle, e) : e
        }

        function Ls(t) {
            return Array.isArray(t) ? I(t) : "string" == typeof t ? Ns(t) : t
        }
        var Ds, Es = /^--/,
            $s = /\s*!important$/,
            Ps = function(t, e, i) {
                if (Es.test(e)) t.style.setProperty(e, i);
                else if ($s.test(i)) t.style.setProperty(S(e), i.replace($s, ""), "important");
                else {
                    var s = Rs(e);
                    if (Array.isArray(i))
                        for (var n = 0, r = i.length; n < r; n++) t.style[s] = i[n];
                    else t.style[s] = i
                }
            },
            Us = ["Webkit", "Moz", "ms"],
            Rs = x((function(t) {
                if (Ds = Ds || document.createElement("div").style, "filter" !== (t = k(t)) && t in Ds) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < Us.length; i++) {
                    var s = Us[i] + e;
                    if (s in Ds) return s
                }
            }));

        function Js(t, e) {
            var i = e.data,
                s = t.data;
            if (!(n(i.staticStyle) && n(i.style) && n(s.staticStyle) && n(s.style))) {
                var a, o, l = e.elm,
                    h = s.staticStyle,
                    c = s.normalizedStyle || s.style || {},
                    u = h || c,
                    d = Ls(e.data.style) || {};
                e.data.normalizedStyle = r(d.__ob__) ? T({}, d) : d;
                var p = function(t, e) {
                    var i, s = {};
                    if (e)
                        for (var n = t; n.componentInstance;)(n = n.componentInstance._vnode) && n.data && (i = Ms(n.data)) && T(s, i);
                    (i = Ms(t.data)) && T(s, i);
                    for (var r = t; r = r.parent;) r.data && (i = Ms(r.data)) && T(s, i);
                    return s
                }(e, !0);
                for (o in u) n(p[o]) && Ps(l, o, "");
                for (o in p)(a = p[o]) !== u[o] && Ps(l, o, null == a ? "" : a)
            }
        }
        var qs = {
                create: Js,
                update: Js
            },
            Fs = /\s+/;

        function Hs(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(Fs).forEach((function(e) {
                    return t.classList.add(e)
                })) : t.classList.add(e);
                else {
                    var i = " " + (t.getAttribute("class") || "") + " ";
                    i.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (i + e).trim())
                }
        }

        function Bs(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(Fs).forEach((function(e) {
                    return t.classList.remove(e)
                })) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                else {
                    for (var i = " " + (t.getAttribute("class") || "") + " ", s = " " + e + " "; i.indexOf(s) >= 0;) i = i.replace(s, " ");
                    (i = i.trim()) ? t.setAttribute("class", i): t.removeAttribute("class")
                }
        }

        function Vs(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return !1 !== t.css && T(e, zs(t.name || "v")), T(e, t), e
                }
                return "string" == typeof t ? zs(t) : void 0
            }
        }
        var zs = x((function(t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            })),
            Gs = z && !Q,
            Ws = "transition",
            Ks = "animation",
            Xs = "transition",
            Qs = "transitionend",
            Ys = "animation",
            Zs = "animationend";
        Gs && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Xs = "WebkitTransition", Qs = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ys = "WebkitAnimation", Zs = "webkitAnimationEnd"));
        var tn = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
            return t()
        };

        function en(t) {
            tn((function() {
                tn(t)
            }))
        }

        function sn(t, e) {
            var i = t._transitionClasses || (t._transitionClasses = []);
            i.indexOf(e) < 0 && (i.push(e), Hs(t, e))
        }

        function nn(t, e) {
            t._transitionClasses && y(t._transitionClasses, e), Bs(t, e)
        }

        function rn(t, e, i) {
            var s = on(t, e),
                n = s.type,
                r = s.timeout,
                a = s.propCount;
            if (!n) return i();
            var o = n === Ws ? Qs : Zs,
                l = 0,
                h = function() {
                    t.removeEventListener(o, c), i()
                },
                c = function(e) {
                    e.target === t && ++l >= a && h()
                };
            setTimeout((function() {
                l < a && h()
            }), r + 1), t.addEventListener(o, c)
        }
        var an = /\b(transform|all)(,|$)/;

        function on(t, e) {
            var i, s = window.getComputedStyle(t),
                n = (s[Xs + "Delay"] || "").split(", "),
                r = (s[Xs + "Duration"] || "").split(", "),
                a = ln(n, r),
                o = (s[Ys + "Delay"] || "").split(", "),
                l = (s[Ys + "Duration"] || "").split(", "),
                h = ln(o, l),
                c = 0,
                u = 0;
            return e === Ws ? a > 0 && (i = Ws, c = a, u = r.length) : e === Ks ? h > 0 && (i = Ks, c = h, u = l.length) : u = (i = (c = Math.max(a, h)) > 0 ? a > h ? Ws : Ks : null) ? i === Ws ? r.length : l.length : 0, {
                type: i,
                timeout: c,
                propCount: u,
                hasTransform: i === Ws && an.test(s[Xs + "Property"])
            }
        }

        function ln(t, e) {
            for (; t.length < e.length;) t = t.concat(t);
            return Math.max.apply(null, e.map((function(e, i) {
                return hn(e) + hn(t[i])
            })))
        }

        function hn(t) {
            return 1e3 * Number(t.slice(0, -1).replace(",", "."))
        }

        function cn(t, e) {
            var i = t.elm;
            r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
            var s = Vs(t.data.transition);
            if (!n(s) && !r(i._enterCb) && 1 === i.nodeType) {
                for (var a = s.css, o = s.type, h = s.enterClass, c = s.enterToClass, u = s.enterActiveClass, d = s.appearClass, p = s.appearToClass, f = s.appearActiveClass, v = s.beforeEnter, g = s.enter, y = s.afterEnter, _ = s.enterCancelled, b = s.beforeAppear, x = s.appear, w = s.afterAppear, k = s.appearCancelled, O = s.duration, A = Qe, S = Qe.$vnode; S && S.parent;) A = S.context, S = S.parent;
                var C = !A._isMounted || !t.isRootInsert;
                if (!C || x || "" === x) {
                    var j = C && d ? d : h,
                        T = C && f ? f : u,
                        I = C && p ? p : c,
                        N = C && b || v,
                        M = C && "function" == typeof x ? x : g,
                        L = C && w || y,
                        D = C && k || _,
                        E = m(l(O) ? O.enter : O);
                    0;
                    var P = !1 !== a && !Q,
                        U = pn(M),
                        R = i._enterCb = $((function() {
                            P && (nn(i, I), nn(i, T)), R.cancelled ? (P && nn(i, j), D && D(i)) : L && L(i), i._enterCb = null
                        }));
                    t.data.show || oe(t, "insert", (function() {
                        var e = i.parentNode,
                            s = e && e._pending && e._pending[t.key];
                        s && s.tag === t.tag && s.elm._leaveCb && s.elm._leaveCb(), M && M(i, R)
                    })), N && N(i), P && (sn(i, j), sn(i, T), en((function() {
                        nn(i, j), R.cancelled || (sn(i, I), U || (dn(E) ? setTimeout(R, E) : rn(i, o, R)))
                    }))), t.data.show && (e && e(), M && M(i, R)), P || U || R()
                }
            }
        }

        function un(t, e) {
            var i = t.elm;
            r(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
            var s = Vs(t.data.transition);
            if (n(s) || 1 !== i.nodeType) return e();
            if (!r(i._leaveCb)) {
                var a = s.css,
                    o = s.type,
                    h = s.leaveClass,
                    c = s.leaveToClass,
                    u = s.leaveActiveClass,
                    d = s.beforeLeave,
                    p = s.leave,
                    f = s.afterLeave,
                    v = s.leaveCancelled,
                    g = s.delayLeave,
                    y = s.duration,
                    _ = !1 !== a && !Q,
                    b = pn(p),
                    x = m(l(y) ? y.leave : y);
                0;
                var w = i._leaveCb = $((function() {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null), _ && (nn(i, c), nn(i, u)), w.cancelled ? (_ && nn(i, h), v && v(i)) : (e(), f && f(i)), i._leaveCb = null
                }));
                g ? g(k) : k()
            }

            function k() {
                w.cancelled || (!t.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t), d && d(i), _ && (sn(i, h), sn(i, u), en((function() {
                    nn(i, h), w.cancelled || (sn(i, c), b || (dn(x) ? setTimeout(w, x) : rn(i, o, w)))
                }))), p && p(i, w), _ || b || w())
            }
        }

        function dn(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function pn(t) {
            if (n(t)) return !1;
            var e = t.fns;
            return r(e) ? pn(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
        }

        function fn(t, e) {
            !0 !== e.data.show && cn(e)
        }
        var mn = function(t) {
            var e, i, s = {},
                l = t.modules,
                h = t.nodeOps;
            for (e = 0; e < is.length; ++e)
                for (s[is[e]] = [], i = 0; i < l.length; ++i) r(l[i][is[e]]) && s[is[e]].push(l[i][is[e]]);

            function c(t) {
                var e = h.parentNode(t);
                r(e) && h.removeChild(e, t)
            }

            function u(t, e, i, n, o, l, c) {
                if (r(t.elm) && r(l) && (t = l[c] = _t(t)), t.isRootInsert = !o, ! function(t, e, i, n) {
                        var o = t.data;
                        if (r(o)) {
                            var l = r(t.componentInstance) && o.keepAlive;
                            if (r(o = o.hook) && r(o = o.init) && o(t, !1), r(t.componentInstance)) return d(t, e), p(i, t.elm, n), a(l) && function(t, e, i, n) {
                                var a, o = t;
                                for (; o.componentInstance;)
                                    if (o = o.componentInstance._vnode, r(a = o.data) && r(a = a.transition)) {
                                        for (a = 0; a < s.activate.length; ++a) s.activate[a](es, o);
                                        e.push(o);
                                        break
                                    } p(i, t.elm, n)
                            }(t, e, i, n), !0
                        }
                    }(t, e, i, n)) {
                    var u = t.data,
                        m = t.children,
                        v = t.tag;
                    r(v) ? (t.elm = t.ns ? h.createElementNS(t.ns, v) : h.createElement(v, t), y(t), f(t, m, e), r(u) && g(t, e), p(i, t.elm, n)) : a(t.isComment) ? (t.elm = h.createComment(t.text), p(i, t.elm, n)) : (t.elm = h.createTextNode(t.text), p(i, t.elm, n))
                }
            }

            function d(t, e) {
                r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, m(t) ? (g(t, e), y(t)) : (ts(t), e.push(t))
            }

            function p(t, e, i) {
                r(t) && (r(i) ? h.parentNode(i) === t && h.insertBefore(t, e, i) : h.appendChild(t, e))
            }

            function f(t, e, i) {
                if (Array.isArray(e)) {
                    0;
                    for (var s = 0; s < e.length; ++s) u(e[s], i, t.elm, null, !0, e, s)
                } else o(t.text) && h.appendChild(t.elm, h.createTextNode(String(t.text)))
            }

            function m(t) {
                for (; t.componentInstance;) t = t.componentInstance._vnode;
                return r(t.tag)
            }

            function g(t, i) {
                for (var n = 0; n < s.create.length; ++n) s.create[n](es, t);
                r(e = t.data.hook) && (r(e.create) && e.create(es, t), r(e.insert) && i.push(t))
            }

            function y(t) {
                var e;
                if (r(e = t.fnScopeId)) h.setStyleScope(t.elm, e);
                else
                    for (var i = t; i;) r(e = i.context) && r(e = e.$options._scopeId) && h.setStyleScope(t.elm, e), i = i.parent;
                r(e = Qe) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && h.setStyleScope(t.elm, e)
            }

            function _(t, e, i, s, n, r) {
                for (; s <= n; ++s) u(i[s], r, t, e, !1, i, s)
            }

            function b(t) {
                var e, i, n = t.data;
                if (r(n))
                    for (r(e = n.hook) && r(e = e.destroy) && e(t), e = 0; e < s.destroy.length; ++e) s.destroy[e](t);
                if (r(e = t.children))
                    for (i = 0; i < t.children.length; ++i) b(t.children[i])
            }

            function x(t, e, i, s) {
                for (; i <= s; ++i) {
                    var n = e[i];
                    r(n) && (r(n.tag) ? (w(n), b(n)) : c(n.elm))
                }
            }

            function w(t, e) {
                if (r(e) || r(t.data)) {
                    var i, n = s.remove.length + 1;
                    for (r(e) ? e.listeners += n : e = function(t, e) {
                            function i() {
                                0 == --i.listeners && c(t)
                            }
                            return i.listeners = e, i
                        }(t.elm, n), r(i = t.componentInstance) && r(i = i._vnode) && r(i.data) && w(i, e), i = 0; i < s.remove.length; ++i) s.remove[i](t, e);
                    r(i = t.data.hook) && r(i = i.remove) ? i(t, e) : e()
                } else c(t.elm)
            }

            function k(t, e, i, s) {
                for (var n = i; n < s; n++) {
                    var a = e[n];
                    if (r(a) && ss(t, a)) return n
                }
            }

            function O(t, e, i, o, l, c) {
                if (t !== e) {
                    r(e.elm) && r(o) && (e = o[l] = _t(e));
                    var d = e.elm = t.elm;
                    if (a(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? C(t.elm, e, i) : e.isAsyncPlaceholder = !0;
                    else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) e.componentInstance = t.componentInstance;
                    else {
                        var p, f = e.data;
                        r(f) && r(p = f.hook) && r(p = p.prepatch) && p(t, e);
                        var v = t.children,
                            g = e.children;
                        if (r(f) && m(e)) {
                            for (p = 0; p < s.update.length; ++p) s.update[p](t, e);
                            r(p = f.hook) && r(p = p.update) && p(t, e)
                        }
                        n(e.text) ? r(v) && r(g) ? v !== g && function(t, e, i, s, a) {
                            var o, l, c, d = 0,
                                p = 0,
                                f = e.length - 1,
                                m = e[0],
                                v = e[f],
                                g = i.length - 1,
                                y = i[0],
                                b = i[g],
                                w = !a;
                            for (0; d <= f && p <= g;) n(m) ? m = e[++d] : n(v) ? v = e[--f] : ss(m, y) ? (O(m, y, s, i, p), m = e[++d], y = i[++p]) : ss(v, b) ? (O(v, b, s, i, g), v = e[--f], b = i[--g]) : ss(m, b) ? (O(m, b, s, i, g), w && h.insertBefore(t, m.elm, h.nextSibling(v.elm)), m = e[++d], b = i[--g]) : ss(v, y) ? (O(v, y, s, i, p), w && h.insertBefore(t, v.elm, m.elm), v = e[--f], y = i[++p]) : (n(o) && (o = ns(e, d, f)), n(l = r(y.key) ? o[y.key] : k(y, e, d, f)) ? u(y, s, t, m.elm, !1, i, p) : ss(c = e[l], y) ? (O(c, y, s, i, p), e[l] = void 0, w && h.insertBefore(t, c.elm, m.elm)) : u(y, s, t, m.elm, !1, i, p), y = i[++p]);
                            d > f ? _(t, n(i[g + 1]) ? null : i[g + 1].elm, i, p, g, s) : p > g && x(0, e, d, f)
                        }(d, v, g, i, c) : r(g) ? (r(t.text) && h.setTextContent(d, ""), _(d, null, g, 0, g.length - 1, i)) : r(v) ? x(0, v, 0, v.length - 1) : r(t.text) && h.setTextContent(d, "") : t.text !== e.text && h.setTextContent(d, e.text), r(f) && r(p = f.hook) && r(p = p.postpatch) && p(t, e)
                    }
                }
            }

            function A(t, e, i) {
                if (a(i) && r(t.parent)) t.parent.data.pendingInsert = e;
                else
                    for (var s = 0; s < e.length; ++s) e[s].data.hook.insert(e[s])
            }
            var S = v("attrs,class,staticClass,staticStyle,key");

            function C(t, e, i, s) {
                var n, o = e.tag,
                    l = e.data,
                    h = e.children;
                if (s = s || l && l.pre, e.elm = t, a(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                if (r(l) && (r(n = l.hook) && r(n = n.init) && n(e, !0), r(n = e.componentInstance))) return d(e, i), !0;
                if (r(o)) {
                    if (r(h))
                        if (t.hasChildNodes())
                            if (r(n = l) && r(n = n.domProps) && r(n = n.innerHTML)) {
                                if (n !== t.innerHTML) return !1
                            } else {
                                for (var c = !0, u = t.firstChild, p = 0; p < h.length; p++) {
                                    if (!u || !C(u, h[p], i, s)) {
                                        c = !1;
                                        break
                                    }
                                    u = u.nextSibling
                                }
                                if (!c || u) return !1
                            }
                    else f(e, h, i);
                    if (r(l)) {
                        var m = !1;
                        for (var v in l)
                            if (!S(v)) {
                                m = !0, g(e, i);
                                break
                            }! m && l.class && se(l.class)
                    }
                } else t.data !== e.text && (t.data = e.text);
                return !0
            }
            return function(t, e, i, o) {
                if (!n(e)) {
                    var l, c = !1,
                        d = [];
                    if (n(t)) c = !0, u(e, d);
                    else {
                        var p = r(t.nodeType);
                        if (!p && ss(t, e)) O(t, e, d, null, null, o);
                        else {
                            if (p) {
                                if (1 === t.nodeType && t.hasAttribute(P) && (t.removeAttribute(P), i = !0), a(i) && C(t, e, d)) return A(e, d, !0), t;
                                l = t, t = new mt(h.tagName(l).toLowerCase(), {}, [], void 0, l)
                            }
                            var f = t.elm,
                                v = h.parentNode(f);
                            if (u(e, d, f._leaveCb ? null : v, h.nextSibling(f)), r(e.parent))
                                for (var g = e.parent, y = m(e); g;) {
                                    for (var _ = 0; _ < s.destroy.length; ++_) s.destroy[_](g);
                                    if (g.elm = e.elm, y) {
                                        for (var w = 0; w < s.create.length; ++w) s.create[w](es, g);
                                        var k = g.data.hook.insert;
                                        if (k.merged)
                                            for (var S = 1; S < k.fns.length; S++) k.fns[S]()
                                    } else ts(g);
                                    g = g.parent
                                }
                            r(v) ? x(0, [t], 0, 0) : r(t.tag) && b(t)
                        }
                    }
                    return A(e, d, c), e.elm
                }
                r(t) && b(t)
            }
        }({
            nodeOps: Yi,
            modules: [ms, ys, Cs, Is, qs, z ? {
                create: fn,
                activate: fn,
                remove: function(t, e) {
                    !0 !== t.data.show ? un(t, e) : e()
                }
            } : {}].concat(us)
        });
        Q && document.addEventListener("selectionchange", (function() {
            var t = document.activeElement;
            t && t.vmodel && kn(t, "input")
        }));
        var vn = {
            inserted: function(t, e, i, s) {
                "select" === i.tag ? (s.elm && !s.elm._vOptions ? oe(i, "postpatch", (function() {
                    vn.componentUpdated(t, e, i)
                })) : gn(t, e, i.context), t._vOptions = [].map.call(t.options, bn)) : ("textarea" === i.tag || Qi(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", xn), t.addEventListener("compositionend", wn), t.addEventListener("change", wn), Q && (t.vmodel = !0)))
            },
            componentUpdated: function(t, e, i) {
                if ("select" === i.tag) {
                    gn(t, e, i.context);
                    var s = t._vOptions,
                        n = t._vOptions = [].map.call(t.options, bn);
                    if (n.some((function(t, e) {
                            return !D(t, s[e])
                        })))(t.multiple ? e.value.some((function(t) {
                        return _n(t, n)
                    })) : e.value !== e.oldValue && _n(e.value, n)) && kn(t, "change")
                }
            }
        };

        function gn(t, e, i) {
            yn(t, e, i), (X || Y) && setTimeout((function() {
                yn(t, e, i)
            }), 0)
        }

        function yn(t, e, i) {
            var s = e.value,
                n = t.multiple;
            if (!n || Array.isArray(s)) {
                for (var r, a, o = 0, l = t.options.length; o < l; o++)
                    if (a = t.options[o], n) r = E(s, bn(a)) > -1, a.selected !== r && (a.selected = r);
                    else if (D(bn(a), s)) return void(t.selectedIndex !== o && (t.selectedIndex = o));
                n || (t.selectedIndex = -1)
            }
        }

        function _n(t, e) {
            return e.every((function(e) {
                return !D(e, t)
            }))
        }

        function bn(t) {
            return "_value" in t ? t._value : t.value
        }

        function xn(t) {
            t.target.composing = !0
        }

        function wn(t) {
            t.target.composing && (t.target.composing = !1, kn(t.target, "input"))
        }

        function kn(t, e) {
            var i = document.createEvent("HTMLEvents");
            i.initEvent(e, !0, !0), t.dispatchEvent(i)
        }

        function On(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : On(t.componentInstance._vnode)
        }
        var An = {
                model: vn,
                show: {
                    bind: function(t, e, i) {
                        var s = e.value,
                            n = (i = On(i)).data && i.data.transition,
                            r = t.__vOriginalDisplay = "escapesuit2" === t.style.display ? "" : t.style.display;
                        s && n ? (i.data.show = !0, cn(i, (function() {
                            t.style.display = r
                        }))) : t.style.display = s ? r : "escapesuit3"
                    },
                    update: function(t, e, i) {
                        var s = e.value;
                        !s != !e.oldValue && ((i = On(i)).data && i.data.transition ? (i.data.show = !0, s ? cn(i, (function() {
                            t.style.display = t.__vOriginalDisplay
                        })) : un(i, (function() {
                            t.style.display = "escapesuit4"
                        }))) : t.style.display = s ? t.__vOriginalDisplay : "escapesuit5")
                    },
                    unbind: function(t, e, i, s, n) {
                        n || (t.style.display = t.__vOriginalDisplay)
                    }
                }
            },
            Sn = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

        function Cn(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? Cn(ze(e.children)) : t
        }

        function jn(t) {
            var e = {},
                i = t.$options;
            for (var s in i.propsData) e[s] = t[s];
            var n = i._parentListeners;
            for (var r in n) e[k(r)] = n[r];
            return e
        }

        function Tn(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                props: e.componentOptions.propsData
            })
        }
        var In = function(t) {
                return t.tag || Ve(t)
            },
            Nn = function(t) {
                return "show" === t.name
            },
            Mn = {
                name: "transition",
                props: Sn,
                abstract: !0,
                render: function(t) {
                    var e = this,
                        i = this.$slots.default;
                    if (i && (i = i.filter(In)).length) {
                        0;
                        var s = this.mode;
                        0;
                        var n = i[0];
                        if (function(t) {
                                for (; t = t.parent;)
                                    if (t.data.transition) return !0
                            }(this.$vnode)) return n;
                        var r = Cn(n);
                        if (!r) return n;
                        if (this._leaving) return Tn(t, n);
                        var a = "__transition-" + this._uid + "-";
                        r.key = null == r.key ? r.isComment ? a + "comment" : a + r.tag : o(r.key) ? 0 === String(r.key).indexOf(a) ? r.key : a + r.key : r.key;
                        var l = (r.data || (r.data = {})).transition = jn(this),
                            h = this._vnode,
                            c = Cn(h);
                        if (r.data.directives && r.data.directives.some(Nn) && (r.data.show = !0), c && c.data && ! function(t, e) {
                                return e.key === t.key && e.tag === t.tag
                            }(r, c) && !Ve(c) && (!c.componentInstance || !c.componentInstance._vnode.isComment)) {
                            var u = c.data.transition = T({}, l);
                            if ("out-in" === s) return this._leaving = !0, oe(u, "afterLeave", (function() {
                                e._leaving = !1, e.$forceUpdate()
                            })), Tn(t, n);
                            if ("in-out" === s) {
                                if (Ve(r)) return h;
                                var d, p = function() {
                                    d()
                                };
                                oe(l, "afterEnter", p), oe(l, "enterCancelled", p), oe(u, "delayLeave", (function(t) {
                                    d = t
                                }))
                            }
                        }
                        return n
                    }
                }
            },
            Ln = T({
                tag: String,
                moveClass: String
            }, Sn);

        function Dn(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function En(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function $n(t) {
            var e = t.data.pos,
                i = t.data.newPos,
                s = e.left - i.left,
                n = e.top - i.top;
            if (s || n) {
                t.data.moved = !0;
                var r = t.elm.style;
                r.transform = r.WebkitTransform = "translate(" + s + "px," + n + "px)", r.transitionDuration = "0s"
            }
        }
        delete Ln.mode;
        var Pn = {
            Transition: Mn,
            TransitionGroup: {
                props: Ln,
                beforeMount: function() {
                    var t = this,
                        e = this._update;
                    this._update = function(i, s) {
                        var n = Ye(t);
                        t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, n(), e.call(t, i, s)
                    }
                },
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), s = this.prevChildren = this.children, n = this.$slots.default || [], r = this.children = [], a = jn(this), o = 0; o < n.length; o++) {
                        var l = n[o];
                        if (l.tag)
                            if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) r.push(l), i[l.key] = l, (l.data || (l.data = {})).transition = a;
                            else;
                    }
                    if (s) {
                        for (var h = [], c = [], u = 0; u < s.length; u++) {
                            var d = s[u];
                            d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), i[d.key] ? h.push(d) : c.push(d)
                        }
                        this.kept = t(e, null, h), this.removed = c
                    }
                    return t(e, null, r)
                },
                updated: function() {
                    var t = this.prevChildren,
                        e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(Dn), t.forEach(En), t.forEach($n), this._reflow = document.body.offsetHeight, t.forEach((function(t) {
                        if (t.data.moved) {
                            var i = t.elm,
                                s = i.style;
                            sn(i, e), s.transform = s.WebkitTransform = s.transitionDuration = "", i.addEventListener(Qs, i._moveCb = function t(s) {
                                s && s.target !== i || s && !/transform$/.test(s.propertyName) || (i.removeEventListener(Qs, t), i._moveCb = null, nn(i, e))
                            })
                        }
                    })))
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!Gs) return !1;
                        if (this._hasMove) return this._hasMove;
                        var i = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach((function(t) {
                            Bs(i, t)
                        })), Hs(i, e), i.style.display = "escapesuit6", this.$el.appendChild(i);
                        var s = on(i);
                        return this.$el.removeChild(i), this._hasMove = s.hasTransform
                    }
                }
            }
        };
        Oi.config.mustUseProp = function(t, e, i) {
            return "value" === i && Li(t) && "button" !== e || "selected" === i && "option" === t || "checked" === i && "input" === t || "muted" === i && "video" === t
        }, Oi.config.isReservedTag = Ki, Oi.config.isReservedAttr = Mi, Oi.config.getTagNamespace = function(t) {
            return Wi(t) ? "svg" : "math" === t ? "math" : void 0
        }, Oi.config.isUnknownElement = function(t) {
            if (!z) return !0;
            if (Ki(t)) return !1;
            if (t = t.toLowerCase(), null != Xi[t]) return Xi[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? Xi[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Xi[t] = /HTMLUnknownElement/.test(e.toString())
        }, T(Oi.options.directives, An), T(Oi.options.components, Pn), Oi.prototype.__patch__ = z ? mn : N, Oi.prototype.$mount = function(t, e) {
            return function(t, e, i) {
                var s;
                return t.$el = e, t.$options.render || (t.$options.render = gt), ei(t, "beforeMount"), s = function() {
                    t._update(t._render(), i)
                }, new pi(t, s, N, {
                    before: function() {
                        t._isMounted && !t._isDestroyed && ei(t, "beforeUpdate")
                    }
                }, !0), i = !1, null == t.$vnode && (t._isMounted = !0, ei(t, "mounted")), t
            }(this, t = t && z ? function(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }(t) : void 0, e)
        }, z && setTimeout((function() {
            J.devtools && rt && rt.emit("init", Oi)
        }), 0), e.a = Oi
    }).call(this, i(53), i(90).setImmediate)
}, function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("div", {
            staticClass: "container"
        }, [t.label ? i("label", {
            attrs: {
                for: t.elmId("bar")
            }
        }, [t._v(t._s(t.label))]) : t._e(), t._v(" "), i("div", {
            staticClass: "bar",
            attrs: {
                id: t.elmId("bar")
            }
        }, [i("div", {
            staticClass: "fill",
            style: "width:" + t.width
        }, [t.hideStats ? i("span", [t._v(" ")]) : i("span", {
            staticClass: "bar-text"
        }, [t._v(t._s((this.value || 0).toFixed(1) + "/" + t.max.toFixed(1)))])])])])
    };
    s._withStripped = !0;
    var n = {
            props: ["value", "max", "label", "hideStats"],
            computed: {
                width() {
                    let t = Math.floor(this.value / this.max * 100);
                    return t > 100 ? t = 100 : t < 0 && (t = 0), t + "%;"
                }
            }
        },
        r = (i(66), i(5)),
        a = Object(r.a)(n, s, [], !1, null, null, null);
    a.options.__file = "src/ui/components/progbar.vue";
    e.a = a.exports
}, function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("div", {
            staticClass: "dot-view"
        }, t._l(t.dots, (function(e) {
            return i("div", {
                key: e.id,
                class: ["dot", e.kind, e.school, t.mini ? "mini" : ""],
                on: {
                    "!mouseenter": function(i) {
                        return i.stopPropagation(), t.emit("itemover", i, e)
                    }
                }
            }, [i("span", [t._v(t._s(Math.ceil(e.duration)))]), t._v(" "), t.mini ? t._e() : i("span", [i("br"), t._v(t._s(t.mini ? t.abbr(e) : e.name))]), t._v(" "), e.kind || e.school ? i("div", {
                staticClass: "bgfill"
            }, [t._v(" ")]) : t._e()])
        })), 0)
    };
    s._withStripped = !0;
    var n = i(13),
        r = {
            props: ["dots", "mini"],
            mixins: [i(12).a],
            beforeCreate() {
                this.seconds = n.e, this.abbr = n.a
            }
        },
        a = (i(72), i(5)),
        o = Object(a.a)(r, s, [], !1, null, "7dcb4a2c", null);
    o.options.__file = "src/ui/dotView.vue";
    e.a = o.exports
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var s = function() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("div", {
            staticClass: "item-info"
        }, [i("span", {
            staticClass: "separate"
        }, [i("span", {
            staticClass: "item-name"
        }, [t._v(t._s(t.name))]), t._v(" "), "resource" === t.item.type || "stat" === t.item.type ? i("span", [t._v(t._s(t.item.current.toFixed(0) + (t.item.max ? " / " + Math.floor(t.item.max.value) : "")))]) : "furniture" === t.item.type ? i("span", [t._v("max: " + t._s(t.item.max ? Math.floor(t.item.max.value) : t.item.repeat ? "∞" : 1))]) : t._e(), t._v(" "), t.item.sym ? i("span", [t._v(t._s(t.item.sym))]) : t._e()]), t._v(" "), t.item.tags ? i("div", {
            staticClass: "tight note-text"
        }, [t._v(t._s(t.tags))]) : t._e(), t._v(" "), t.item.rate && 0 != t.item.rate.value ? i("span", {
            staticClass: "flex-right"
        }, [t._v(t._s(t.precise(t.item.rate.value)) + " /s")]) : t._e(), t._v(" "), i("div", [i("span", {
            staticClass: "separate"
        }, [t.item.showLevel ? i("span", [t._v("lvl: " + t._s(t.item.showLevel()))]) : t.item.level ? i("span", [t._v("lvl: " + t._s(t.item.level))]) : t._e(), t._v(" "), t.item.slot ? i("span", [t._v("slot: " + t._s(t.item.slot))]) : t._e()]), t._v(" "), t.item.at && t.nextAt > 0 ? i("span", {
            staticClass: "note-text"
        }, [t._v("\r\n\t\t\tNext Improvement: " + t._s(Math.round(100 * t.item.value / t.nextAt) + "%") + "\r\n\t\t")]) : t.item.every && t.nextEvery >= 0 ? i("span", {
            staticClass: "note-text"
        }, [t._v("\r\n\t\t\tNext Improvement: " + t._s(Math.round(100 * t.nextEvery) + "%") + "\r\n\t\t")]) : t._e(), t._v(" "), t.item.cd && t.item.timer > 0 ? i("div", [t._v("Cooldown: " + t._s(t.item.timer.toFixed(2)))]) : t._e(), t._v(" "), t.item.dist ? i("div", [t._v("distance: " + t._s(t.item.dist))]) : t._e(), t._v(" "), t.item.armor ? i("div", [t._v("armor: " + t._s(t.item.armor))]) : t._e(), t._v(" "), t.item.desc ? i("div", {
            staticClass: "item-desc"
        }, [t._v(t._s(t.item.desc))]) : t._e()]), t._v(" "), t.item.need ? i("info", {
            attrs: {
                info: t.item.need,
                title: "need"
            }
        }) : t._e(), t._v(" "), t.item.buy && !t.item.owned ? i("info", {
            attrs: {
                info: t.item.buy,
                title: "purchase cost"
            }
        }) : t._e(), t._v(" "), t.item.cost ? i("info", {
            attrs: {
                info: t.item.cost,
                title: "cost"
            }
        }) : t._e(), t._v(" "), t.item.sell || t.item.instance || "furniture" === t.item.type ? i("info", {
            attrs: {
                info: t.sellPrice,
                title: "sell"
            }
        }) : t._e(), t._v(" "), t.item.run ? i("info", {
            attrs: {
                info: t.item.run,
                title: "progress cost",
                rate: "true"
            }
        }) : t._e(), t._v(" "), t.item.attack ? i("attack", {
            attrs: {
                item: t.item.attack
            }
        }) : t._e(), t._v(" "), t.item.effect || t.item.mod || t.item.result || t.item.dot || t.item.use ? i("div", {
            staticClass: "popup-sect"
        }, [t._v("effects:")]) : t._e(), t._v(" "), t.item.dot ? i("dot", {
            attrs: {
                dot: t.item.dot
            }
        }) : t._e(), t._v(" "), t.item.effect ? i("info", {
            attrs: {
                info: t.item.effect,
                rate: t.item.perpetual || t.item.length > 0
            }
        }) : t._e(), t._v(" "), t.item.mod ? i("info", {
            attrs: {
                info: t.item.mod
            }
        }) : t._e(), t._v(" "), t.item.use ? i("info", {
            attrs: {
                info: t.item.use
            }
        }) : t._e(), t._v(" "), t.item.result ? i("info", {
            attrs: {
                info: t.item.result
            }
        }) : t._e(), t._v(" "), t.item.lock || t.item.disable ? i("div", {
            staticClass: "popup-sect"
        }, [t._v("locks:")]) : t._e(), t._v(" "), t.item.lock ? i("info", {
            attrs: {
                info: t.item.lock
            }
        }) : t._e(), t._v(" "), t.item.disable ? i("info", {
            attrs: {
                info: t.item.disable
            }
        }) : t._e(), t._v(" "), t.item.flavor ? i("div", {
            staticClass: "note-text"
        }, [t._v(t._s(t.item.flavor))]) : t._e()], 1)
    };
    s._withStripped = !0;
    var n = i(1),
        r = i(12),
        a = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return t.info ? i("div", [t.title ? i("div", {
                staticClass: "note-text"
            }, [i("hr"), t._v(t._s(t.title))]) : t._e(), t._v(" "), t._l(t.effectItems(t.info, t.rate), (function(e, s) {
                return i("div", {
                    key: s
                }, [i("span", "boolean" == typeof e ? [t._v(t._s(s))] : [t._v(t._s(s + ": " + e))])])
            }))], 2) : t._e()
        };
    a._withStripped = !0;
    var o = {
            props: ["title", "info", "rate"],
            mixins: [r.a]
        },
        l = (i(74), i(5)),
        h = Object(l.a)(o, a, [], !1, null, "408e302f", null);
    h.options.__file = "src/ui/items/info-block.vue";
    var c = h.exports,
        u = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "attack"
            }, [i("div", {
                staticClass: "popup-sect"
            }, [t._v("attack")]), t._v(" "), t.hitBonus ? i("div", [t._v("hit bonus: " + t._s(t.hitBonus))]) : t._e(), t._v(" "), t.item.hands > 1 ? i("div", [t._v("Two-Handed")]) : t._e(), t._v(" "), null !== t.damage ? i("div", {
                staticClass: "damage"
            }, [i("span", [t._v("damage: " + t._s(t.damage))]), t.bonus ? i("span", [t._v(t._s(t.bonus))]) : t._e()]) : t._e(), t._v(" "), i("div", [t._v("kind: " + t._s(t.item.kind))]), t._v(" "), t.item.dot ? i("dot", {
                attrs: {
                    dot: t.item.dot
                }
            }) : t._e()], 1)
        };
    u._withStripped = !0;
    var d = i(9),
        p = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "dot"
            }, [i("div", {
                staticClass: "note-text"
            }, [t._v(t._s(t.title || "dot") + ":")]), t._v(" "), i("div", [i("div", [i("span", [t._v("duration: ")]), i("span", [t._v(t._s(t.dot.duration || "infinity"))])]), t._v(" "), t.dot.damage ? i("div", [i("span", [t._v("dmg: ")]), i("span", [t._v(t._s(t.damage))])]) : t._e(), t._v(" "), t.dot.kind ? i("div", [i("span", [t._v("kind: ")]), i("span", [t._v(t._s(t.dot.kind))])]) : t._e()]), t._v(" "), t.dot.effect || t.dot.mod ? i("div", [t.dot.effect || t.dot.mod ? i("div", {
                staticClass: "note-text"
            }, [t._v("effects:")]) : t._e(), t._v(" "), t.dot.effect ? i("info", {
                attrs: {
                    info: t.dot.effect,
                    runnable: "true"
                }
            }) : t._e(), t._v(" "), t.dot.mod ? i("info", {
                attrs: {
                    info: t.dot.mod
                }
            }) : t._e()], 1) : t._e()])
        };
    p._withStripped = !0;
    var f = {
            props: ["dot", "title"],
            name: "dot",
            mixins: [r.a],
            components: {
                info: c
            },
            computed: {
                damage() {
                    let t = this.dot.damage;
                    return "number" == typeof t ? t : t instanceof d.b ? t.toString() : void 0
                }
            }
        },
        m = Object(l.a)(f, p, [], !1, null, null, null);
    m.options.__file = "src/ui/items/dot.vue";
    var v = m.exports,
        g = {
            props: ["item"],
            name: "attack",
            components: {
                gdata: () => Promise.resolve().then(i.bind(null, 58)),
                dot: v
            },
            computed: {
                damage() {
                    let t = this.item.damage || this.item.dmg;
                    return "number" == typeof t ? t : t instanceof d.b ? t.toString() : t ? (console.log("unknown damage:" + this.item.damage), t.toString()) : void 0
                },
                hitBonus() {
                    return this.item.tohit || 0
                },
                bonus() {
                    let t = this.item.bonus;
                    return t ? t > 0 ? " (+" + t + ")" : " (" + t + ")" : 0
                }
            }
        },
        y = Object(l.a)(g, u, [], !1, null, null, null);
    y.options.__file = "src/ui/items/attack.vue";
    var _ = y.exports,
        b = i(13),
        x = {
            props: ["item"],
            name: "gdata",
            mixins: [r.a],
            components: {
                info: c,
                attack: _,
                dot: v
            },
            methods: {
                precise: b.d
            },
            computed: {
                name() {
                    return this.item.sname || this.item.name
                },
                sellPrice() {
                    return n.c.sellPrice(this.item)
                },
                nextImprove() {
                    return this.nextAt > 0 ? this.nextAt : this.nextEvery
                },
                nextEvery() {
                    let t = Math.floor(this.item.value);
                    var e, i = Number.MAX_VALUE;
                    for (let n in this.item.every) {
                        var s = n - t % n;
                        s < i && (i = s, e = n)
                    }
                    return i !== Number.MAX_VALUE ? (e - s) / e : -1
                },
                nextAt() {
                    let t = this.item.value;
                    var e = Number.MAX_VALUE;
                    for (let i in this.item.at)(i = Number(i)) > t && i < e && (e = i);
                    return e > t && e !== Number.MAX_VALUE ? e : -1
                },
                tags() {
                    let t = this.item.tags;
                    return "string" == typeof t ? this.stripTags(t) : Array.isArray(t) ? t.map(this.stripTags, this).join(", ") : void 0
                }
            }
        },
        w = (i(76), Object(l.a)(x, s, [], !1, null, "2d591720", null));
    w.options.__file = "src/ui/items/gdata.vue";
    e.default = w.exports
}, function(t, e, i) {
    "use strict";
    var s = i(34);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.res-list[data-v-9c4a587a] {\r\n\toverflow-y:auto;\r\n\toverflow-x:visible;\r\n\twidth: fit-content;\r\n\tmargin: 0; padding: 0 var(--tiny-gap);\r\n\tmin-width: 200px;\n}\n.rsrc[data-v-9c4a587a] {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\n}\n.rsrc .item-name[data-v-9c4a587a] {\r\n\tflex:1;\r\n\tcolor:#999;\r\n\tpadding-right: 6px;\n}\r\n\r\n", ""])
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var i = e.protocol + "//" + e.host,
            s = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(t, e) {
            var n, r = e.trim().replace(/^"(.*)"$/, (function(t, e) {
                return e
            })).replace(/^'(.*)'$/, (function(t, e) {
                return e
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (n = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : s + r.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        }))
    }
}, function(t, e, i) {
    "use strict";
    var s = i(35);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, '\np.use-msg[data-v-3473ec58] {\r\n\tfont-size:20px;\r\n\tline-height: 1.4em;\r\n\tmargin-left: 10%;\n}\ndiv.quickbar[data-v-3473ec58] {\r\n\r\n\tdisplay:flex;\r\n\tflex-basis: 72px;\r\n\twidth:100%;\r\n\tflex-direction: row;\r\n\tjustify-self: flex-end;\r\n\tz-index: 50;\r\n\tmargin: 0;\n}\ndiv.quickslot[data-v-3473ec58] {\r\n\tmin-width: 52px;\r\n\tmin-height:52px;\r\n\tcursor: pointer;\r\n\ttext-transform: capitalize;\r\n\tmargin: 2px 6px 4px 4px;\r\n\tpadding:2px;\r\n\ttext-align: center;\r\n\t/** relative so remove button correctly placed. **/\r\n\tposition: relative;\r\n\tfont-size:xx-large;\r\n\tborder: 1px solid #181818;\n}\ndiv.remove[data-v-3473ec58] {\r\n\tposition:absolute;\r\n\tborder: 1px solid #181818;\r\n\ttop:0px;\r\n\tright:0px;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tbackground:white;\r\n\topacity:0.65;\r\n\tz-index: 10;\r\n\tmin-height:12px;\r\n\tmin-width: 12px;\r\n\tfont-size: 0.8rem;\n}\ndiv.remove[data-v-3473ec58]::after {\r\n\tcontent:"x";\n}\n.quickslot div.remove[data-v-3473ec58] { background: #FFF0; color: #000; border: none; font-weight: bold;\n}\r\n\r\n\r\n\r\n', ""])
}, function(t, e, i) {
    "use strict";
    var s = i(36);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.skip[data-v-b5da6c06] {\r\n\tmargin-top:1em;\r\n\tfont-size: 0.9em;\n}\ndiv.popup div[data-v-b5da6c06] {\r\n\tmargin:6px 0px;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(37);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.bar .fill {\n\t  height:100%;\n\t  padding:0;\n\t  margin:0;\n}\ndiv.bar .bar-text {\n\tcolor: var( --progbar-dark-text );\n}\ndiv.container {\n\tdisplay:inline-block;\n\tmargin-bottom: var(--md-gap);\n\theight:100%;\n\twidth: 100%;\n}\ndiv.bar {\n\n\tpadding:unset;\n\tdisplay:inline-block;\n\tbackground: #333;\n\toverflow:hidden;\n\tmargin:4px 4px 0px 2px;\n\tpadding:2px;\n\tmin-height:18px;\n\theight:100%;\n\twidth:-webkit-fill-available;\n\twidth:-moz-available;\n\tborder-radius: 10px;\n}\ndiv.bar > div {\n\tbackground:orange;\n\tborder-radius: 8px;\n\theight:100%;\n\tmin-width:0px;\n\twidth:0px;\n}\n\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(38);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.running[data-v-a3fd1046] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(39);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.vitals[data-v-0b887939] {\r\n\tmargin:4px 8px;\r\n\tflex-basis: 19%;\r\n\tmin-width: 200px;\n}\ndiv.vitals .bars[data-v-0b887939] {\r\n\twidth: -moz-available;\r\n\twidth:-webkit-fill-available;\n}\ntable .td-prog[data-v-0b887939] {\r\n\tcolumns: 2;\n}\ntr td[data-v-0b887939]:first-child {\r\n\tmax-width: 33%;\n}\ntr td[data-v-0b887939]:last-child {\r\n\twidth:100%;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(40);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.dot-view[data-v-7dcb4a2c] {\n\tmax-width: 100%;\n\tposition:relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\ndiv.dot-view span.mini[data-v-7dcb4a2c] {\n\tdisplay:flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\talign-items: center;\n}\ndiv.dot[data-v-7dcb4a2c] {\n\tposition: relative;\n\toverflow-x:visible;\n\toverflow-y: visible;\n\tmax-height:40px;\n\ttext-align: center;\n\tpadding:4px;\n\tbackground: unset;\n\tborder: 1px solid black;\n}\ndiv.mini[data-v-7dcb4a2c] {\n\theight:22px;\n\twidth: 22px;\n\tfont-size: 0.7em;\n\tpadding:0;\n}\n\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(41);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\nhr[data-v-408e302f] {\r\nmargin-bottom: 4px;\n}\ndiv.item-desc[data-v-408e302f] {\r\n\tmargin: 5px 0px 10px;\r\n\tfont-size: 0.96em;\n}\n.item-name[data-v-408e302f] {\r\n\tfont-weight: bold;\n}\n.flavor[data-v-408e302f] {\r\n\tfont-style: italic;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(42);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\n.tight[data-v-2d591720] {\r\n\tmargin:0;\r\n\tpadding:0;\n}\ndiv.item-desc[data-v-2d591720] {\r\n\tmargin: 5px 0px 10px;\r\n\tfont-size: 0.96em;\n}\n.item-name[data-v-2d591720] {\r\n\tfont-weight: bold;\n}\n.separate > span[data-v-2d591720] {\r\n\tmargin-left:var(--small-gap);\n}\n.flavor[data-v-2d591720] {\r\n\tfont-style: italic;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(43);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.pop-title[data-v-6756f468] {\r\n\r\n\tfont-weight: bold;\r\n\tborder-bottom: 1px solid black;\r\n\tmargin-bottom: 8px;\n}\n.popup-content[data-v-6756f468] {\r\n\tpadding: 10px;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(44);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, '\nspan.vers[data-v-5e8f13b9] {\r\n\tfont-size: 0.9em;\r\n\talign-self: center;\r\n\tmargin-bottom: 4px;\n}\ndiv.text-button a[data-v-5e8f13b9] {\r\n\ttext-decoration: none;\n}\ninput[type="file"][data-v-5e8f13b9] {\r\n\tdisplay:none;\n}\n#drop-file[data-v-5e8f13b9] {\r\n\tborder: 1.75px dashed rgb(117, 117, 117);\n}\ndiv.top-bar[data-v-5e8f13b9] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\r\n\tjustify-content: flex-start;\r\n\tjustify-items: flex-start;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tmin-height:56px;\r\n\tmax-width:100%;\r\n\toverflow:hidden;\r\n\tpadding: 0px 14px 4px;\r\n\tborder-bottom: 1px solid var(--separator-color);\n}\n.top-bar .items[data-v-5e8f13b9] {\r\n\tdisplay:flex;\r\n\tmargin-left:20px;\n}\n.load-opts[data-v-5e8f13b9] {\r\n\tdisplay:flex;\n}\n.load-opts button[data-v-5e8f13b9] {\r\n\tmin-height:29px;\r\n\theight:29px;\r\n\tmax-height:29px;\n}\n.load-opts .text-button[data-v-5e8f13b9] {\r\n\tmax-height:21px;\n}\n.link-bar[data-v-5e8f13b9] {\r\n\tjustify-self: flex-end;\r\n\tdisplay:flex;\r\n\tflex-grow: 1;\r\n\tflex-flow: row nowrap;\r\n\tfont-size: 0.90em;\n}\n.link-bar a[data-v-5e8f13b9] {\r\n\tmargin:0px 10px 4px;\r\n\talign-self:center;\n}\nspan.load-message[data-v-5e8f13b9] {\r\n\tpadding: 8px 8px 2px;\n}\r\n\r\n', ""])
}, function(t, e, i) {
    "use strict";
    var s = i(45);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\n.settings[data-v-0188e9fc] {\r\n\theight:auto;\r\n\tmin-height:200px;\r\n\tmin-width:300px;\r\n\tmax-width:440px;\r\n\tposition: absolute;\r\n\tz-index:10000;\r\n\ttop:120px;\r\n\tbackground:inherit;\r\n\tborder: 1.5px solid rgb( 100, 100,100);\r\n\tborder-radius: 0.20rem;\r\n\tpadding: 12px;\n}\nbutton.close[data-v-0188e9fc] {\r\n\tposition:absolute;\r\n\tbottom: 10px;\r\n\tright:10px;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(46);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.outlog[data-v-c9d4ddf0] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\toverflow-y:auto;\r\n\tmax-height: 82vh;\n}\ndiv.log-view[data-v-c9d4ddf0] {\r\n\tborder-left:1px solid var(--very-quiet-text-color);\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tmargin-left: 8px;\r\n\tflex-basis:20%;\r\n\tmax-width: 250px;\r\n\tmax-height: inherit;\n}\ndiv.top-span[data-v-c9d4ddf0] {\r\n\tmax-height:64px;\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\r\n\tmargin: 2px 8px 5px;\r\n\tpadding-bottom: 2px;\r\n\tborder-bottom: 1px solid rgb(88, 87, 87);\n}\nspan.checks[data-v-c9d4ddf0] {\r\n\tdisplay:flex;\r\n\tflex-flow: row wrap;\r\n\talign-items: flex-start;\n}\n.checks span[data-v-c9d4ddf0] { flex-basis: 50%;\n}\r\n\r\n/*div.log-item {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tmargin: 8px 0px;\r\n}*/\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(47);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\ndiv.full[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tbackground:inherit;\r\n\tflex-direction: column;\r\n\tmin-width:500px;\r\n\tmax-height:100vh;\r\n\theight:100vh;\n}\ndiv.game-main[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tmax-height: calc( 100vh - 150px);\r\n\tflex-direction: row;\r\n\tflex-grow: 1;\r\n\tjustify-content: space-between;\n}\ndiv.game-mid[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tborder-left: 1px solid var(--separator-color); border-right: 1px solid var(--separator-color);\r\n\tmax-height: 100%;\r\n\theight:100%;\r\n\tflex-basis:48%;\r\n\tflex-grow:1;\r\n\talign-content: space-around;\n}\ndiv.game-mid div.main-actions[data-v-6f034aea] {\r\n\toverflow-y: auto;\r\n\theight:100%;\n}\ndiv.action-list[data-v-6f034aea], div.upgrade-list[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tmin-height:0;\r\n\tflex-flow: row wrap;\r\n\tflex-direction: row;\r\n\tpadding:0px 6px;\r\n\ttext-transform: capitalize;\n}\ndiv.action-list[data-v-6f034aea] {\r\n\tjustify-items: flex-start;\n}\ndiv.upgrade-list[data-v-6f034aea], div.action-list[data-v-6f034aea] {\r\n\tmargin: 8px 2px 2px 8px;\n}\ndiv.upgrade-list[data-v-6f034aea] {\r\n\tmin-height:0;\r\n\t/*border-top: 1px solid var( --separator-color );*/\r\n\tmargin-top:4px;\n}\ndiv.inv-equip[data-v-6f034aea] {\r\n\theight:100%;\r\n\tpadding: 0; display: grid; grid-template-rows: 50% 50%; grid-auto-columns: 1fr;\n}\ndiv.inv-equip > div[data-v-6f034aea]:nth-child(2) {\r\n    border-top: 1px solid var(--separator-color);\n}\ndiv.bot-bar[data-v-6f034aea] {\r\n\tbackground: inherit;\r\n\tborder-top: 1px solid var(--separator-color); padding: var(--md-gap);\n}\r\n\r\n", ""])
}, function(t, e, i) {
    "use strict";
    var s = i(48);
    i.n(s).a
}, function(t, e, i) {
    (t.exports = i(14)(!1)).push([t.i, "\nspan.my-span[data-v-193f0119] {\r\n\tdisplay:contents;\n}\r\n\r\n", ""])
}, function(t, e, i) {
    (function(t) {
        var s = void 0 !== t && t || "undefined" != typeof self && self || window,
            n = Function.prototype.apply;

        function r(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new r(n.call(setTimeout, s, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new r(n.call(setInterval, s, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(s, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout((function() {
                t._onTimeout && t._onTimeout()
            }), e))
        }, i(91), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, i(53))
}, function(t, e, i) {
    (function(t, e) {
        ! function(t, i) {
            "use strict";
            if (!t.setImmediate) {
                var s, n, r, a, o, l = 1,
                    h = {},
                    c = !1,
                    u = t.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? s = function(t) {
                    e.nextTick((function() {
                        f(t)
                    }))
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            i = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = i, e
                    }
                }() ? t.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function(t) {
                    f(t.data)
                }, s = function(t) {
                    r.port2.postMessage(t)
                }) : u && "onreadystatechange" in u.createElement("script") ? (n = u.documentElement, s = function(t) {
                    var e = u.createElement("script");
                    e.onreadystatechange = function() {
                        f(t), e.onreadystatechange = null, n.removeChild(e), e = null
                    }, n.appendChild(e)
                }) : s = function(t) {
                    setTimeout(f, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", o = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && f(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", o, !1) : t.attachEvent("onmessage", o), s = function(e) {
                    t.postMessage(a + e, "*")
                }), d.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                    var n = {
                        callback: t,
                        args: e
                    };
                    return h[l] = n, s(l), l++
                }, d.clearImmediate = p
            }

            function p(t) {
                delete h[t]
            }

            function f(t) {
                if (c) setTimeout(f, 0, t);
                else {
                    var e = h[t];
                    if (e) {
                        c = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    s = t.args;
                                switch (s.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(s[0]);
                                        break;
                                    case 2:
                                        e(s[0], s[1]);
                                        break;
                                    case 3:
                                        e(s[0], s[1], s[2]);
                                        break;
                                    default:
                                        e.apply(i, s)
                                }
                            }(e)
                        } finally {
                            p(t), c = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, i(53), i(92))
}, function(t, e) {
    var i, s, n = t.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
        try {
            return i(t, 0)
        } catch (e) {
            try {
                return i.call(null, t, 0)
            } catch (e) {
                return i.call(this, t, 0)
            }
        }
    }! function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            i = r
        }
        try {
            s = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            s = a
        }
    }();
    var l, h = [],
        c = !1,
        u = -1;

    function d() {
        c && l && (c = !1, l.length ? h = l.concat(h) : u = -1, h.length && p())
    }

    function p() {
        if (!c) {
            var t = o(d);
            c = !0;
            for (var e = h.length; e;) {
                for (l = h, h = []; ++u < e;) l && l[u].run();
                u = -1, e = h.length
            }
            l = null, c = !1,
                function(t) {
                    if (s === clearTimeout) return clearTimeout(t);
                    if ((s === a || !s) && clearTimeout) return s = clearTimeout, clearTimeout(t);
                    try {
                        s(t)
                    } catch (e) {
                        try {
                            return s.call(null, t)
                        } catch (e) {
                            return s.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function f(t, e) {
        this.fun = t, this.array = e
    }

    function m() {}
    n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        h.push(new f(t, e)), 1 !== h.length || c || o(p)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(t) {
        return []
    }, n.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var s = i(55),
        n = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "full",
                on: {
                    "!mouseover": function(e) {
                        return e.stopPropagation(), t.emit("itemout")
                    }
                }
            }, [i("top-bar", [i("template", {
                slot: "center"
            }, [t.state ? t._e() : i("span", {
                staticClass: "load-message"
            }, [t._v("LOADING DATA...")]), t._v(" "), t.state ? i("dots", {
                attrs: {
                    dots: t.state.player.dots
                }
            }) : t._e()], 1)], 2), t._v(" "), i("itempopup", {
                attrs: {
                    item: t.overItem,
                    elm: t.overElm,
                    title: t.overTitle
                }
            }), t._v(" "), i("warn", {
                ref: "warn",
                on: {
                    confirmed: t.onConfirmed
                }
            }), t._v(" "), i("choice"), t._v(" "), i("settings"), t._v(" "), t.state ? i("div", {
                staticClass: "game-main"
            }, [i("resources", {
                attrs: {
                    items: t.state.resources
                }
            }), t._v(" "), i("vue-menu", {
                staticClass: "game-mid",
                attrs: {
                    items: t.menuItems
                },
                model: {
                    value: t.section,
                    callback: function(e) {
                        t.section = e
                    },
                    expression: "section"
                }
            }, [i("template", {
                slot: "sect_main"
            }, [i("actions", {
                staticClass: "main-actions"
            })], 1), t._v(" "), i("template", {
                slot: "sect_skills"
            }, [i("skills", {
                attrs: {
                    state: t.state
                }
            })], 1), t._v(" "), i("template", {
                slot: "sect_player"
            }, [i("player")], 1), t._v(" "), i("template", {
                slot: "sect_house"
            }, [i("suits", {
                attrs: {
                    state: t.state
                }
            })], 1), t._v(" "), i("template", {
                slot: "sect_raid"
            }, [i("adventure", {
                attrs: {
                    state: t.state
                }
            })], 1), t._v(" "), i("template", {
                slot: "sect_equip"
            }, [i("div", {
                staticClass: "inv-equip"
            }, [i("equip", {
                attrs: {
                    equip: t.state.equip
                }
            }), t._v(" "), i("inventory", {
                attrs: {
                    inv: t.state.inventory
                }
            })], 1)]), t._v(" "), i("template", {
                slot: "sect_spells"
            }, [i("spells")], 1), t._v(" "), i("template", {
                slot: "sect_scraft"
            }, [i("scraft")], 1), t._v(" "), i("template", {
                slot: "sect_potions"
            }, [i("potions")], 1), t._v(" "), i("template", {
                slot: "sect_bestiary"
            }, [i("bestiary")], 1), t._v(" "), i("template", {
                slot: "sect_minions"
            }, [i("minions")], 1), t._v(" "), i("template", {
                slot: "sect_enchant"
            }, [i("enchanting")], 1)], 2), t._v(" "), i("vitals", {
                attrs: {
                    state: t.state
                }
            }), t._v(" "), i("log")], 1) : t._e(), t._v(" "), t.state ? i("div", {
                staticClass: "bot-bar"
            }, [i("quickbar", {
                attrs: {
                    bars: t.state.bars
                }
            })], 1) : t._e()], 1)
        };
    n._withStripped = !0;
    var r = i(1),
        a = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "menu"
            }, [i("div", {
                staticClass: "menu-items"
            }, t._l(t.items, (function(e) {
                return i("div", {
                    key: e.id,
                    staticClass: "menu-item"
                }, [e != t.value ? i("span", {
                    key: t.itemTitle(e),
                    on: {
                        click: function(i) {
                            return t.setActive(e)
                        }
                    }
                }, [i("u", [t._v(" " + t._s(t.itemTitle(e)) + " ")])]) : i("span", {
                    key: t.itemTitle(e)
                }, [t._v(" " + t._s(t.itemTitle(e)) + " ")])])
            })), 0), t._v(" "), i("span", {
                staticClass: "menu-content"
            }, [t._t(t.itemId(t.value))], 2)])
        };
    a._withStripped = !0;
    var o = {
            props: ["value", "items"],
            methods: {
                itemTitle: t => t instanceof Object ? t.name || t.desc || t.id : t,
                itemId: t => t instanceof Object ? t.id : t,
                setActive(t) {
                    this.$emit("input", t), this.$emit("changed", t)
                }
            }
        },
        l = i(5),
        h = Object(l.a)(o, a, [], !1, null, null, null);
    h.options.__file = "src/ui/components/menu.vue";
    var c = h.exports,
        u = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "res-list"
            }, [i("div", {
                staticClass: "config"
            }, [i("button", {
                ref: "btnHides",
                staticClass: "btnConfig"
            })]), t._v(" "), t._l(t.shown, (function(e) {
                return i("div", {
                    key: e.id,
                    staticClass: "rsrc hidable",
                    attrs: {
                        "data-key": e.id
                    },
                    on: {
                        "!mouseenter": function(i) {
                            return i.stopPropagation(), t.emit("itemover", i, e)
                        }
                    }
                }, [i("span", {
                    staticClass: "item-name"
                }, [t._v(t._s(e.name))]), t._v(" "), i("span", {
                    staticClass: "num-align"
                }, [t._v(t._s(t.floor(e.value) + (e.max && e.max.value > 0 ? "/" + t.floor(e.max.value) : "")))])])
            }))], 2)
        };
    u._withStripped = !0;
    var d = i(12),
        p = {
            data: () => ({
                togglingHides: !1,
                hides: {}
            }),
            mounted() {
                let t = this.$refs.btnHides;
                t && t.addEventListener("click", t => {
                    t.preventDefault(), this.togglingHides ? (this.stopHides(), t.target.classList.remove("inConfig")) : (this.togglingHides = !0, t.target.classList.add("inConfig"), this.$nextTick(() => this.configHides()))
                })
            },
            methods: {
                show(t) {
                    return this.togglingHides || !this.hide[t.id]
                },
                configHides() {
                    var t = (this.$refs.hidables || this.$el).querySelectorAll(".hidable");
                    if (t) {
                        this.onTogHide = t => this.hideToggle(t);
                        for (let i = t.length - 1; i >= 0; i--) {
                            var e = t[i];
                            this.hide[e.dataset.key] ? e.classList.add("inConfig", "configHiding") : e.classList.add("inConfig"), e.addEventListener("pointerdown", this.onTogHide, !0)
                        }
                    }
                },
                stopHides() {
                    var t = (this.$refs.hidables || this.$el).querySelectorAll(".hidable");
                    if (t) {
                        for (let i = t.length - 1; i >= 0; i--) {
                            var e = t[i];
                            e.removeEventListener("pointerdown", this.onTogHide, !0), e.classList.remove("configHiding", "inConfig")
                        }
                        this.onTogHide = null, this.togglingHides = !1
                    }
                },
                hideToggle(t) {
                    t.preventDefault(), t.stopPropagation();
                    let e = t.currentTarget,
                        i = e.dataset.key;
                    if (!i) return;
                    let s = this.hide[i];
                    null == s ? this.$set(this.hide, i, !0) : this.hide[i] = !s, s ? e.classList.remove("configHiding") : e.classList.add("configHiding")
                },
                beforeDestroy() {
                    this.onTogHide = null
                }
            }
        },
        f = i(11),
        m = {
            props: ["items"],
            mixins: [d.a, p],
            data() {
                let t = f.a.getSubVars("resview");
                return t.hide || (t.hide = {}), {
                    hide: t.hide
                }
            },
            computed: {
                all() {
                    return this.items.filter(t => !t.hasTag("manas") && "space" !== t.id && !this.reslocked(t))
                },
                shown() {
                    return this.all.filter(t => this.show(t))
                }
            }
        },
        v = (i(59), Object(l.a)(m, u, [], !1, null, "9c4a587a", null));
    v.options.__file = "src/ui/resources.vue";
    var g = v.exports,
        y = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                ref: "hidables",
                staticClass: "main-actions"
            }, [i("div", {
                staticClass: "config"
            }, [i("button", {
                ref: "btnHides",
                staticClass: "btnConfig"
            })]), t._v(" "), i("upgrades", {
                staticClass: "action-list",
                attrs: {
                    items: t.visActs
                }
            }), t._v(" "), i("upgrades", {
                staticClass: "action-list",
                attrs: {
                    items: t.visRuns
                }
            }), t._v(" "), i("upgrades", {
                staticClass: "upgrade-list",
                attrs: {
                    items: t.ups
                }
            }), t._v(" "), i("upgrades", {
                staticClass: "upgrade-list",
                attrs: {
                    items: t.classes
                }
            })], 1)
        };
    y._withStripped = !0;
    var _ = function() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;
        return i("div", t._l(t.items, (function(e) {
            return i("span", {
                key: e.id,
                class: {
                    "action-btn": !0, locked: t.locked(e) || e.owned && !e.repeat, hidable: !0, running: e.running, runnable: e.perpetual || e.length > 0
                },
                attrs: {
                    "data-key": e.id
                },
                on: {
                    "!mouseenter": function(i) {
                        return i.stopPropagation(), t.emit("itemover", i, e)
                    }
                }
            }, [i("button", {
                staticClass: "wrapped-btn",
                attrs: {
                    disabled: !t.usable(e)
                },
                on: {
                    click: function(i) {
                        return t.emit("upgrade", e)
                    }
                }
            }, [t._v(t._s(e.name))])])
        })), 0)
    };
    _._withStripped = !0;
    var b = {
            props: ["items"],
            mixins: [d.a]
        },
        x = Object(l.a)(b, _, [], !1, null, null, null);
    x.options.__file = "src/ui/upgrades.vue";
    var w = x.exports,
        k = {
            mixins: [d.a, p],
            components: {
                upgrades: w
            },
            data() {
                let t = f.a.getSubVars("main");
                return t.hide || (t.hide = {}), {
                    hide: t.hide
                }
            },
            computed: {
                actions: () => r.c.state.actions.filter(t => !t.perpetual && !t.length),
                runnables: () => r.c.state.actions.filter(t => t.perpetual || t.length > 0),
                visActs() {
                    return this.actions.filter(t => this.show(t))
                },
                visRuns() {
                    return this.runnables.filter(t => this.show(t))
                },
                ups() {
                    return r.c.state.upgrades.filter(t => !this.locked(t) && this.show(t))
                },
                classes() {
                    return r.c.state.classes.filter(t => !this.locked(t) && this.show(t))
                }
            }
        },
        O = Object(l.a)(k, y, [], !1, null, "aeb40b24", null);
    O.options.__file = "src/ui/sections/actions.vue";
    var A = O.exports,
        S = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return t.hasItems ? i("div", {
                staticClass: "quickbar"
            }, t._l(t.slots, (function(e, s) {
                return i("div", {
                    key: s,
                    staticClass: "quickslot"
                }, [null != e.item ? i("div", {
                    class: e.item.school ? e.item.school : "",
                    on: {
                        click: function(i) {
                            return t.emit("quickslot", e)
                        },
                        "!mouseenter": function(i) {
                            return i.stopPropagation(), t.emit("itemover", i, e.item || e)
                        }
                    }
                }, [i("div", [t._v(t._s(t.abbr(e)))]), t._v(" "), i("div", {
                    staticClass: "remove",
                    on: {
                        click: function(e) {
                            return t.bar.clear(s)
                        }
                    }
                }), t._v(" "), e.item.school ? i("div", {
                    staticClass: "bgfill"
                }, [t._v(" ")]) : t._e()]) : i("div", [t._v(t._s(9 != s ? s + 1 : 0))])])
            })), 0) : i("div", {
                staticClass: "quickbar"
            }, [t._m(0)])
        };
    S._withStripped = !0;
    var C = i(13),
        j = i(0),
        T = {
            props: ["bars"],
            methods: {
                abbr: C.a
            },
            computed: {
                bar() {
                    return this.bars.active
                },
                slots() {
                    return this.bar.slots
                },
                hasItems() {
                    return this.slots.some(t => null != t.item)
                }
            }
        },
        I = (i(62), Object(l.a)(T, S, [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("p", {
                staticClass: "use-msg"
            }, [this._v("\n\t\tRoll-over Item and hold {Shift} + {Number} to assign quickslot."), e("br"), this._v("\n\t\tPress {Number} again to use quickslot Item.\n\t")])
        }], !1, null, "3473ec58", null));
    I.options.__file = "src/ui/quickbar.vue";
    var N = I.exports,
        M = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return t.item ? i("div", {
                staticClass: "popup"
            }, ["string" == typeof t.item ? i("div", [i("div", [t._v(t._s(t.item))]), t._v(" "), i("div", [t._v(t._s(t.msg))])]) : i("div", [i("div", {
                staticClass: "log-title"
            }, [t._v(t._s(t.item.name))]), t._v(" "), i("div", [t._v(t._s(t.item.desc))]), t._v(" "), i("div", [t._v(t._s(t.msg))]), t._v(" "), i("div", {
                staticClass: "skip"
            }, [i("label", {
                attrs: {
                    for: t.elmId("nowarn")
                }
            }, [t._v("Skip Warning")]), t._v(" "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.nowarn,
                    expression: "nowarn"
                }],
                attrs: {
                    type: "checkbox",
                    id: t.elmId("nowarn")
                },
                domProps: {
                    checked: Array.isArray(t.nowarn) ? t._i(t.nowarn, null) > -1 : t.nowarn
                },
                on: {
                    change: function(e) {
                        var i = t.nowarn,
                            s = e.target,
                            n = !!s.checked;
                        if (Array.isArray(i)) {
                            var r = t._i(i, null);
                            s.checked ? r < 0 && (t.nowarn = i.concat([null])) : r > -1 && (t.nowarn = i.slice(0, r).concat(i.slice(r + 1)))
                        } else t.nowarn = n
                    }
                }
            })])]), t._v(" "), i("div", [i("button", {
                on: {
                    click: t.confirm
                }
            }, [t._v("Confirm")]), t._v(" "), i("button", {
                on: {
                    click: t.cancel
                }
            }, [t._v("Cancel")])])]) : t._e()
        };
    M._withStripped = !0;
    var L = i(29);
    const D = "This action is not reversible. Continue?";
    var E = {
            data: () => ({
                item: null,
                cb: null,
                nowarn: !1
            }),
            updated() {
                this.item && Object(L.a)(this.$el)
            },
            computed: {
                msg() {
                    return "string" == typeof this.item ? D : this.item.warnMsg || D
                }
            },
            methods: {
                show(t, e = null) {
                    this.item = t, this.cb = e, this.nowarn = !1
                },
                confirm() {
                    let t = this.item,
                        e = this.cb,
                        i = this.nowarn;
                    this.item = null, this.cb = null, this.nowarn = !1, t && this.$emit("confirmed", t, i), e && e()
                },
                cancel() {
                    this.cb = null, this.nowarn = !1, this.item = null
                }
            }
        },
        $ = (i(64), Object(l.a)(E, M, [], !1, null, "b5da6c06", null));
    $.options.__file = "src/ui/components/warn.vue";
    var P = $.exports,
        U = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "vitals"
            }, [i("div", {
                staticClass: "separate"
            }, [i("button", {
                staticClass: "btn-sm",
                on: {
                    click: function(e) {
                        return t.emit(t.STOP_ALL)
                    }
                }
            }, [t._v("Stop All")]), t._v(" "), i("button", {
                staticClass: "btn-sm",
                attrs: {
                    disabled: t.resting
                },
                on: {
                    click: function(e) {
                        return t.emit("rest")
                    },
                    "!mouseenter": function(e) {
                        return e.stopPropagation(), t.emit("itemover", e, t.state.restAction)
                    }
                }
            }, [t._v(t._s(t.state.restAction.name))]), t._v(" "), t.focus.locked ? t._e() : i("button", {
                staticClass: "btn-sm",
                attrs: {
                    disabled: !t.usable(t.focus)
                },
                on: {
                    "!mouseenter": function(e) {
                        return e.stopPropagation(), t.emit("itemover", e, t.focus)
                    },
                    click: function(e) {
                        return t.emit("action", t.focus)
                    }
                }
            }, [t._v("Focus")])]), t._v(" "), i("running", {
                attrs: {
                    runner: t.state.runner
                }
            }), t._v(" "), i("div", {
                staticClass: "config"
            }, [i("button", {
                ref: "btnHides",
                staticClass: "btnConfig"
            })]), t._v(" "), i("table", {
                staticClass: "bars"
            }, [i("tr", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show(t.stamina),
                    expression: "show(stamina)"
                }],
                staticClass: "hidable",
                attrs: {
                    "data-key": "stamina"
                }
            }, [i("td", [t._v("stamina")]), i("td", {
                attrs: {
                    colspan: "2"
                }
            }, [i("progbar", {
                staticClass: "stamina",
                attrs: {
                    value: t.stamina.valueOf(),
                    max: t.stamina.max.value
                },
                nativeOn: {
                    "!mouseenter": function(e) {
                        return e.stopPropagation(), t.emit("itemover", e, t.stamina)
                    }
                }
            })], 1)]), t._v(" "), i("tr", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show(t.hp),
                    expression: "show(hp)"
                }],
                staticClass: "hidable",
                attrs: {
                    "data-key": "hp"
                }
            }, [i("td", [t._v("hp")]), i("td", {
                attrs: {
                    colspan: "2"
                }
            }, [i("progbar", {
                staticClass: "hp",
                attrs: {
                    value: t.hp.valueOf(),
                    max: t.hp.max.value
                },
                nativeOn: {
                    "!mouseenter": function(e) {
                        return e.stopPropagation(), t.emit("itemover", e, t.hp)
                    }
                }
            })], 1)]), t._v(" "), t._l(t.visMana, (function(e) {
                return i("tr", {
                    key: e.key,
                    staticClass: "hidable",
                    attrs: {
                        "data-key": e.id
                    }
                }, [i("td", [t._v(t._s(e.name))]), i("td", {
                    attrs: {
                        colspan: "2"
                    }
                }, [i("progbar", {
                    class: e.id,
                    attrs: {
                        value: e.valueOf(),
                        max: e.max.value
                    },
                    nativeOn: {
                        "!mouseenter": function(i) {
                            return i.stopPropagation(), t.emit("itemover", i, e)
                        }
                    }
                })], 1)])
            }))], 2)], 1)
        };
    U._withStripped = !0;
    var R = i(56),
        J = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "running"
            }, t._l(t.runner.actives, (function(e) {
                return i("div", {
                    key: e.id
                }, [i("button", {
                    on: {
                        click: function(i) {
                            return t.halt(e)
                        }
                    }
                }, [t._v("Stop")]), i("span", [t._v(t._s(t.actionStr(e)))]), "skill" === e.type ? i("span", [t._v(t._s(t.levelStr(e)))]) : t._e()])
            })), 0)
        };
    J._withStripped = !0;
    i(2);
    var q = {
            props: ["runner"],
            methods: {
                actionStr: t => (t.verb || t.name) + (t.length ? " " + Math.floor(t.percent()) + "%" : ""),
                levelStr: t => " (" + Math.floor(t.valueOf()) + "/" + Math.floor(t.max.valueOf()) + ")",
                halt(t) {
                    this.emit(j.x, t)
                }
            }
        },
        F = (i(68), Object(l.a)(q, J, [], !1, null, "a3fd1046", null));
    F.options.__file = "src/ui/running.vue";
    var H = F.exports,
        B = {
            props: ["state"],
            mixins: [d.a, p],
            components: {
                progbar: R.a,
                running: H
            },
            data() {
                let t = f.a.getSubVars("vitals");
                return t.hide || (t.hide = {}), {
                    hide: t.hide
                }
            },
            created() {
                this.STOP_ALL = j.F
            },
            computed: {
                hp() {
                    return this.state.getData("hp")
                },
                focus() {
                    return this.state.getData("focus")
                },
                manaList() {
                    return this.state.filterItems(t => t.hasTag("manas") && !t.locked)
                },
                visMana() {
                    return this.manaList.filter(t => this.show(t))
                },
                resting() {
                    return this.state.restAction.running
                },
                stamina() {
                    return this.state.getData("stamina")
                }
            }
        },
        V = (i(70), Object(l.a)(B, U, [], !1, null, "0b887939", null));
    V.options.__file = "src/ui/vitals.vue";
    var z = V.exports,
        G = i(57),
        W = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: null != t.item,
                    expression: "item!=null"
                }],
                staticClass: "item-popup"
            }, [i("div", {
                staticClass: "popup-content"
            }, [t.title ? i("div", {
                staticClass: "pop-title"
            }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), Array.isArray(t.item) ? t._l(t.item, (function(e) {
                return i("div", {
                    key: e
                }, [t._v(t._s(e.toString()))])
            })) : [t.item ? i("gdata", {
                attrs: {
                    item: t.item
                }
            }) : t._e()]], 2)])
        };
    W._withStripped = !0;
    var K = {
            props: ["item", "elm", "sell", "title"],
            updated() {
                this.item && Object(L.b)(this.$el, this.elm)
            },
            components: {
                gdata: i(58).default
            }
        },
        X = (i(78), Object(l.a)(K, W, [], !1, null, "6756f468", null));
    X.options.__file = "src/ui/items/itemPopup.vue";
    var Q = X.exports,
        Y = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "top-bar"
            }, [i("span", {
                staticClass: "load-opts"
            }, [i("button", {
                on: {
                    click: function(e) {
                        return t.dispatch("save")
                    }
                }
            }, [t._v("save")]), t._v(" "), i("button", {
                on: {
                    click: function(e) {
                        return t.dispatch("load")
                    }
                }
            }, [t._v("load")]), t._v(" "), i("div", {
                staticClass: "text-button"
            }, [i("a", {
                staticClass: "text-button",
                attrs: {
                    id: "save-file",
                    href: "",
                    download: "",
                    type: "text/json"
                },
                on: {
                    click: function(e) {
                        return e.target !== e.currentTarget ? null : t.dispatch("save-file", e)
                    }
                }
            }, [t._v("get save")])]), t._v(" "), i("button", {
                attrs: {
                    id: "drop-file",
                    name: "[Drop Save]"
                },
                on: {
                    click: function(e) {
                        return t.$refs.fileInput.click()
                    },
                    drop: t.fileDrop,
                    dragover: t.fileDrag,
                    "!dragleave": function(e) {
                        return e.stopPropagation(), t.dragOut(e)
                    }
                }
            }, [t._v("[Drop Save]")]), t._v(" "), i("input", {
                ref: "fileInput",
                attrs: {
                    type: "file",
                    accept: "text/json text/*"
                },
                on: {
                    change: t.fileSelect
                }
            }), t._v(" "), i("confirm", {
                on: {
                    confirm: function(e) {
                        return t.dispatch("reset")
                    }
                }
            }, [t._v("reset")])], 1), t._v(" "), i("span", {
                staticClass: "items"
            }, [t._t("center")], 2), t._v(" "), i("span", {
                staticClass: "link-bar"
            }, [i("a", {
                attrs: {
                    href: "",
                    target: "_blank"
                }
            }, [t._v("")]), t._v(" "), i("a", {
                attrs: {
                    href: "http://wiki.lerpinglemur.com/dhrune",
                    target: "_blank"
                }
            }, [t._v("")]), t._v(" "), i("a", {
                attrs: {
                    href: "https://www.patreon.com/theoryofmagic",
                    target: "_blank"
                }
            }, [t._v("")]), t._v(" "), i("a", {
                attrs: {
                    href: "https://www.reddit.com/r/wizrobe/",
                    target: "_blank"
                }
            }, [t._v("")]), t._v(" "), i("span", {
                staticClass: "vers"
            }, [t._v("build# " + t._s(t.VERSION))]), t._v(" "), i("button", {
                staticClass: "text-button",
                on: {
                    click: function(e) {
                        return t.dispatch("open-settings")
                    }
                }
            }, [t._v("⚙")])])])
        };
    Y._withStripped = !0;
    var Z = {
            computed: {
                VERSION: () => 1
            },
            methods: {
                fileSelect(t) {
                    t.stopPropagation(), t.preventDefault(), this.dispatch("load-file", t.target.files)
                },
                fileDrop(t) {
                    t.stopPropagation(), t.preventDefault(), t.target.classList.remove("hilite");
                    const e = t.dataTransfer;
                    this.dispatch("load-file", e.files)
                },
                fileDrag(t) {
                    t.stopPropagation(), t.preventDefault(), t.currentTarget.classList.add("hilite")
                },
                dragOut(t) {
                    t.stopPropagation(), t.preventDefault(), t.currentTarget.classList.remove("hilite")
                }
            }
        },
        tt = (i(80), Object(l.a)(Z, Y, [], !1, null, "5e8f13b9", null));
    tt.options.__file = "src/ui/top-bar.vue";
    var et = tt.exports,
        it = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return t.closed ? t._e() : i("div", {
                class: ["settings", "popup"]
            }, [i("div", [i("label", {
                attrs: {
                    for: t.elmId("auto-save")
                }
            }, [t._v("auto-save")]), t._v(" "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.autoSave,
                    expression: "autoSave"
                }],
                attrs: {
                    type: "checkbox",
                    id: t.elmId("auto-save")
                },
                domProps: {
                    checked: Array.isArray(t.autoSave) ? t._i(t.autoSave, null) > -1 : t.autoSave
                },
                on: {
                    change: function(e) {
                        var i = t.autoSave,
                            s = e.target,
                            n = !!s.checked;
                        if (Array.isArray(i)) {
                            var r = t._i(i, null);
                            s.checked ? r < 0 && (t.autoSave = i.concat([null])) : r > -1 && (t.autoSave = i.slice(0, r).concat(i.slice(r + 1)))
                        } else t.autoSave = n
                    }
                }
            })]), t._v(" "), i("div", [i("label", {
                attrs: {
                    for: t.elmId("dark-mode")
                }
            }, [t._v("dark mode")]), t._v(" "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.darkMode,
                    expression: "darkMode"
                }],
                attrs: {
                    type: "checkbox",
                    id: t.elmId("dark-mode")
                },
                domProps: {
                    checked: Array.isArray(t.darkMode) ? t._i(t.darkMode, null) > -1 : t.darkMode
                },
                on: {
                    change: function(e) {
                        var i = t.darkMode,
                            s = e.target,
                            n = !!s.checked;
                        if (Array.isArray(i)) {
                            var r = t._i(i, null);
                            s.checked ? r < 0 && (t.darkMode = i.concat([null])) : r > -1 && (t.darkMode = i.slice(0, r).concat(i.slice(r + 1)))
                        } else t.darkMode = n
                    }
                }
            })]), t._v(" "), i("div", [i("label", {
                attrs: {
                    for: t.elmId("compact-mode")
                }
            }, [t._v("compact mode")]), t._v(" "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.compactMode,
                    expression: "compactMode"
                }],
                attrs: {
                    type: "checkbox",
                    id: t.elmId("compact-mode")
                },
                domProps: {
                    checked: Array.isArray(t.compactMode) ? t._i(t.compactMode, null) > -1 : t.compactMode
                },
                on: {
                    change: function(e) {
                        var i = t.compactMode,
                            s = e.target,
                            n = !!s.checked;
                        if (Array.isArray(i)) {
                            var r = t._i(i, null);
                            s.checked ? r < 0 && (t.compactMode = i.concat([null])) : r > -1 && (t.compactMode = i.slice(0, r).concat(i.slice(r + 1)))
                        } else t.compactMode = n
                    }
                }
            })]), t._v(" "), t._m(0), t._v(" "), i("button", {
                staticClass: "close",
                on: {
                    click: t.close
                }
            }, [t._v("close")])])
        };
    it._withStripped = !0;
    var st = i(17),
        nt = {
            data: () => ({
                closed: !0
            }),
            updated() {
                this.closed || Object(L.a)(this.$el)
            },
            created() {
                this.listen("open-settings", this.show);
                for (let t in f.a.vars) this.dispatch("setting", t, f.a.vars[t])
            },
            methods: {
                clear() {},
                close() {
                    this.dispatch("save-settings"), this.closed = !0
                },
                show() {
                    this.closed = !1
                }
            },
            computed: {
                compactMode: {
                    get: () => f.a.vars.compactMode,
                    set(t) {
                        f.a.vars.compactMode = t, this.dispatch("setting", "compactMode", t)
                    }
                },
                autoSave: {
                    get: () => f.a.vars.autoSave,
                    set(t) {
                        f.a.vars.autoSave = t, this.dispatch("setting", "autoSave", t)
                    }
                },
                darkMode: {
                    get: () => f.a.vars.darkMode,
                    set(t) {
                        f.a.vars.darkMode = t, this.dispatch("setting", "darkMode", t)
                    }
                }
            }
        },
        rt = (i(82), Object(l.a)(nt, it, [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "note-text sm"
            }, [this._v("thanks to:"), e("br"), this._v("\r\n\t\tkermit tears"), e("br"), this._v("\r\n\t\tdbulm2"), e("br"), this._v("\r\n\t\tmathias"), e("br"), this._v("\r\n\t\tvondrey\r\n\t")])
        }], !1, null, "0188e9fc", null));
    rt.options.__file = "src/ui/sections/settings.vue";
    var at = rt.exports,
        ot = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "log-view"
            }, [i("div", {
                staticClass: "top-span"
            }, [i("button", {
                staticClass: "inline btn-sm",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.clearLog
                }
            }, [t._v("Clear")]), t._v(" "), i("span", {
                staticClass: "checks"
            }, t._l(t.LogTypes, (function(e, s) {
                return i("span", {
                    key: s
                }, [i("input", {
                    attrs: {
                        type: "checkbox",
                        id: t.elmId(s)
                    },
                    domProps: {
                        value: e,
                        checked: t.filter & e
                    },
                    on: {
                        change: function(e) {
                            return t.changed(e.target)
                        }
                    }
                }), t._v(" "), i("label", {
                    attrs: {
                        for: t.elmId(s)
                    }
                }, [t._v(t._s(s))])])
            })), 0), t._v(" "), t.showOptions ? i("div", {
                staticClass: "options"
            }) : t._e()]), t._v(" "), i("div", {
                staticClass: "outlog"
            }, t._l(t.visItems, (function(e, s) {
                return i("div", {
                    key: s,
                    staticClass: "log-item"
                }, [e.title ? i("span", {
                    staticClass: "log-title item-name"
                }, [t._v(t._s(e.title))]) : t._e(), t._v(" "), i("span", {
                    staticClass: "log-text"
                }, [t._v(t._s(e.text))]), t._v(" "), e.count > 1 ? i("span", {
                    staticClass: "num-align"
                }, [t._v("(x" + t._s(e.count) + ")")]) : t._e()])
            })), 0)])
        };
    ot._withStripped = !0;
    var lt = {
            data() {
                var t = 0;
                for (let e in j.C) t |= j.C[e];
                return {
                    log: r.c.log,
                    LogTypes: j.C,
                    filter: t,
                    showOptions: !1
                }
            },
            methods: {
                changed(t) {
                    t.checked ? this.filter = this.filter | t.value : this.filter = ~t.value & this.filter
                },
                doOptions() {
                    this.showOptions = !this.showOptions
                },
                clearLog() {
                    this.log.clear()
                }
            },
            computed: {
                visItems() {
                    let t = this.log.items,
                        e = [];
                    for (let s = t.length - 1; s >= 0; s--) {
                        var i = t[s];
                        (!i.type || (this.filter & i.type) > 0) && e.push(i)
                    }
                    return e
                }
            }
        },
        ht = (i(84), Object(l.a)(lt, ot, [], !1, null, "c9d4ddf0", null));
    ht.options.__file = "src/ui/outlog.vue";
    var ct, ut = ht.exports; {
        const t = {
            b: "herbs",
            g: "gold",
            s: "scrolls",
            e: "exp",
            t: "stamina",
            h: "hp",
            k: "sp",
            m: "mana",
            c: "codices",
            a: "arcana",
            r: "research",
            w: "wizardhall"
        };
        ct = {
            created() {
                window.addEventListener("keydown", t => {
                    t.repeat || this.cheatKey(t)
                }, !1), this.enabled = !1, this.code = "bodias", this.input = ""
            },
            methods: {
                cheatKey(e) {
                    if (!this.runner) return;
                    let i = e.key.toLowerCase();
                    if (!this.enabled) return void this.testUnlock(i);
                    let s = t[i];
                    if ("p" === i) this.state.getData("runner").autoProgress(), e.stopPropagation();
                    else if ("f" === i) this.fillAll(), e.stopPropagation();
                    else if (s) {
                        if (e.shiftKey) this.state.addMax(s);
                        else {
                            let t = this.state.getData(s);
                            t.locked && (t.locked = !1), r.c.fillItem(s)
                        }
                        e.stopPropagation()
                    }
                },
                fillAll() {
                    let t = this.state.resources;
                    for (let i in t) {
                        var e = t[i];
                        e.locked || "space" === e.id || r.c.fillItem(e)
                    }
                },
                testUnlock(t) {
                    this.input += t, this.input === this.code ? (console.warn("CHEATS ON"), this.enabled = !0) : this.input.length >= this.code.length && (this.input = this.input.slice(1 + this.input.length - this.code.length))
                }
            }
        }
    }
    var dt = ct;
    var pt = {
            mixins: [d.a, dt],
            components: {
                resources: g,
                actions: A,
                itempopup: Q,
                vitals: z,
                log: ut,
                quickbar: N,
                dots: G.a,
                warn: P,
                "top-bar": et,
                settings: at,
                choice: () => i.e(1).then(i.bind(null, 168)),
                skills: () => i.e(12).then(i.bind(null, 165)),
                equip: () => i.e(3).then(i.bind(null, 169)),
                inventory: () => i.e(6).then(i.bind(null, 170)),
                potions: () => i.e(9).then(i.bind(null, 171)),
                suits: () => i.e(5).then(i.bind(null, 172)),
                player: () => i.e(8).then(i.bind(null, 166)),
                bestiary: () => i.e(0).then(i.bind(null, 173)),
                spells: () => i.e(13).then(i.bind(null, 164)),
                adventure: () => i.e(10).then(i.bind(null, 163)),
                enchanting: () => i.e(2).then(i.bind(null, 174)),
                minions: () => i.e(7).then(i.bind(null, 175)),
                scraft: () => i.e(11).then(i.bind(null, 176)),
                "vue-menu": c
            },
            data: () => ({
                state: null,
                overItem: null,
                overTitle: null,
                overElm: null,
                psection: null
            }),
            created() {
                this.listen("game-loaded", this.gameLoaded), this.listen("setting", this.onSetting), this.listen("pause", this.pause), this.listen("unpause", this.unpause)
            },
            beforeDestroy() {
                this.removeListener("game-loaded", this.gameLoaded), this.removeListener("setting", this.onSetting), this.removeListener("pause", this.pause), this.removeListener("unpause", this.unpause)
            },
            methods: {
                gameLoaded() {
                    this.state = r.c.state;
                    let t = f.a.get("curview") || "sect_main";
                    this.section = this.state.sections.find(e => e.id === t), this.initEvents()
                },
                initEvents() {
                    this.add("itemover", this.itemOver), this.add("itemout", this.itemOut), this.add("sell", this.onSell), this.add("take", this.onTake), this.add("upgrade", this.onItem), this.add("action", this.onItem), this.add("spell", this.onItem), this.add("rest", this.onRest), this.add("equip", this.onEquip), this.add("unequip", this.onUnequip), this.add("enchant", this.onEnchant), this.add("craft", this.onCraft), this.add("warn", this.onWarn), this.add(j.H, this.tryUse), this.add(j.I, this.onUse), this.add("quickslot", this.doQuickslot), this.add(j.G, this.onBuy), this.dispatch(j.t, "titles", this.state.player.titles.length), this.dispatch(j.t, "level", this.state.getData("level").valueOf()), this.dispatch(j.t, "prestige", this.state.getData("prestige").valueOf())
                },
                onSetting(t, e) {
                    "autoSave" === t && (e ? this.startAutoSave() : this.stopAutoSave())
                },
                stopAutoSave() {
                    if (this.saver) {
                        let t = this.saver;
                        this.saver = null, clearInterval(t)
                    }
                },
                startAutoSave() {
                    this.runner && f.a.get("autoSave") && !this.saver && (this.saver = setInterval(() => this.dispatch("autosave"), 3e4))
                },
                pause() {
                    if (this.runner) {
                        let t = this.runner;
                        this.runner = null, clearInterval(t)
                    }
                    this.stopAutoSave(), this.keyListen && window.removeEventListener("keydown", this.keyListen, !1)
                },
                unpause() {
                    r.c.loaded && (r.c.lastUpdate = Date.now(), this.runner || (this.runner = setInterval(() => r.c.update(), r.b)), this.keyListen = t => {
                        t.repeat || (this.keyDown(t), t.stopPropagation())
                    }, window.addEventListener("keydown", this.keyListen, !1), this.startAutoSave())
                },
                keyDown(t) {
                    if (!this.runner) return;
                    let e = t.code.slice(0, -1);
                    if ("Digit" === e || "Numpad" === e) {
                        let e = Number(t.code.slice(-1));
                        if (t.shiftKey && this.overItem) this.state.setQuickSlot(this.overItem, e);
                        else {
                            let t = this.state.getQuickSlot(e);
                            t && this.doQuickslot(t)
                        }
                    }
                },
                doQuickslot(t) {
                    r.c.tryItem(t.getTarget(r.c))
                },
                onEquip(t, e) {
                    r.c.equip(t, e)
                },
                onUnequip(t, e) {
                    r.c.unequip(t, e)
                },
                onTake(t) {
                    r.c.take(t)
                },
                onCraft(t) {
                    r.c.craft(t)
                },
                onUse(t, e) {
                    r.c.use(t, e)
                },
                onEnchant(t, e) {
                    r.c.tryUseOn(t, e)
                },
                onSell(t, e, i) {
                    r.c.trySell(t, e, i)
                },
                itemOver(t, e, i) {
                    this.overItem = e, this.overTitle = i, this.overElm = t.currentTarget
                },
                itemOut() {
                    this.overElm = null, this.overItem = null
                },
                onRest() {
                    r.c.toggleAction(this.state.restAction)
                },
                onItem(t) {
                    t.warn ? this.$refs.warn.show(t) : r.c.tryItem(t)
                },
                onConfirmed(t, e) {
                    "string" != typeof t && (t.warn = !e, r.c.tryItem(t))
                },
                onWarn(t, e) {
                    this.$refs.warn.show(t, e)
                },
                tryUse(t) {
                    r.c.tryItem(t)
                },
                onBuy(t) {
                    r.c.tryBuy(t, !0)
                }
            },
            computed: {
                section: {
                    get() {
                        return this.psection
                    },
                    set(t) {
                        this.psection = t, f.a.set("curview", t.id)
                    }
                },
                menuItems() {
                    return this.state.sections.filter(t => !this.locked(t))
                }
            }
        },
        ft = (i(86), Object(l.a)(pt, n, [], !1, null, "6f034aea", null));
    ft.options.__file = "src/ui/main.vue";
    var mt = ft.exports,
        vt = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return t.confirming ? i("span", {
                staticClass: "my-span"
            }, [i("button", {
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.confirmClick
                }
            }, [t._v(t._s(t.btnConfirm))]), t._v(" "), i("button", {
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.cancelClick
                }
            }, [t._v(t._s(t.btnCancel))])]) : i("span", {
                staticClass: "my-span"
            }, [i("button", {
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.mainClick
                }
            }, [t._t("default", [t._v("Delete")])], 2)])
        };
    vt._withStripped = !0;
    var gt = {
            props: ["confirm", "cancel"],
            data() {
                return {
                    btnConfirm: this.confirm || "Confirm",
                    btnCancel: this.cancel || "Cancel",
                    confirming: !1
                }
            },
            methods: {
                reset() {
                    this.confirming = !1
                },
                mainClick() {
                    this.confirming = !0, this.$emit("click")
                },
                confirmClick() {
                    this.confirming = !1, this.$emit("confirm")
                },
                cancelClick() {
                    this.confirming = !1, this.$emit("cancel")
                }
            }
        },
        yt = (i(88), Object(l.a)(gt, vt, [], !1, null, "193f0119", null));
    yt.options.__file = "src/ui/components/confirm.vue";
    var _t = yt.exports;
    s.a.mixin({
        components: {
            confirm: _t
        },
        methods: {
            listen: j.J.listen,
            dispatch: j.J.dispatch,
            removeListener: j.J.removeListener,
            emit: j.J.emit,
            add: j.J.add,
            elmId(t) {
                return t + this._uid
            }
        }
    });
    new s.a({
        el: "#vueRoot",
        components: {
            Main: mt
        },
        data: () => ({
            renderKey: 1
        }),
        created() {
            this.lastSave = null, this.game = r.c, this.listen("save-file", this.saveFile, this), this.listen("load-file", this.loadFile, this), this.listen("load", this.loadSave, this), this.listen("reset", this.reset, this), this.listen("stat", this.doStat, this), this.listen("save-settings", st.a.saveSettings, st.a), this.listen("set-char", this.setChar, this), this.listen("dismiss-char", this.dismissChar, this), this.listen("save", this.save), this.listen("autosave", this.save), this.listen("setting", this.onSetting, this), this.loadProfile()
        },
        methods: {
            doStat(t, e) {
                window.kong && window.kong.stats.submit(t, e)
            },
            setChar(t) {
                st.a.setActive(t, this.game.state), this.loadSave()
            },
            dismissChar(t) {
                st.a.dismiss(t)
            },
            loadProfile() {
                console.warn("LOADING PROFILE"), st.a.loadHall().then(() => this.loadSave())
            },
            loadSave() {
                try {
                    console.warn("LOADING SAVE");
                    let t = st.a.loadActive();
                    t || console.log("no data saved."), this.setStateJSON(t)
                } catch (t) {
                    console.error(t.message + "\n" + t.stack)
                }
            },
            gameLoaded(t) {
                t || console.warn("gameloaded(): NULL");
                let e = st.a.loadSettings();
                this.onSettings(e), this.dispatch("game-loaded"), st.a.gameLoaded(t), this.dispatch("unpause")
            },
            onSettings(t) {
                t && (this.onSetting("darkMode", t.darkMode), this.onSetting("compactMode", t.compactMode))
            },
            onSetting(t, e) {
                "darkMode" === t ? e ? document.body.classList.add("darkmode") : document.body.classList.remove("darkmode") : "compactMode" === t && (e ? document.body.classList.add("compact") : document.body.classList.remove("compact"))
            },
            saveFile(t) {
                if (t) try {
                    this.lastSave && URL.revokeObjectURL(this.lastSave);
                    let e = this.game.state,
                        i = JSON.stringify(e);
                    this.lastSave = new File([i], (e.player.name || "arcanum") + ".json", {
                        type: "text/json;charset=utf-8"
                    }), t.target.title = this.lastSave.name, t.target.href = URL.createObjectURL(this.lastSave)
                } catch (t) {
                    console.error(t.message + "\n" + t.stack)
                }
            },
            loadFile(t) {
                const e = t[0];
                if (!e) return;
                const i = new FileReader;
                i.onload = t => {
                    this.setStateJSON(t.target.result)
                }, i.readAsText(e)
            },
            setStateJSON(t) {
                this.dispatch("pause");
                
                    this.game.loaded && this.renderKey++;
                    let e = t ? JSON.parse(t) : null;
                    this.game.load(e, st.a.getHallData()).then(this.gameLoaded, t => console.error(t.message + "\n" + t.stack))
                 
            },
            save() {
                this.game.loaded && st.a.saveActive(this.game.state)
            },
            reset() {
                this.dispatch("pause"), st.a.clearAll(), this.setStateJSON(null)
            }
        },
        render(t) {
            return t(mt, {
                key: this.renderKey
            })
        }
    })
}]);
