(window.webpackJsonp_name_ = window.webpackJsonp_name_ || []).push([
    [8], {
        105: function(t, e, a) {
            var r = a(136);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a(15)(r, i);
            r.locals && (t.exports = r.locals)
        },
        106: function(t, e, a) {
            var r = a(138);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a(15)(r, i);
            r.locals && (t.exports = r.locals)
        },
        120: function(t, e, a) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return !t.hideEmpty || t.avail.length > 0 ? a("div", [t.title ? a("span", [t._v(t._s(t.title) + ":")]) : t._e(), t._v(" "), a("span", {
                    staticClass: "action-btn",
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.cur)
                        }
                    }
                }, [t.avail.length > 0 ? a("button", {
                    on: {
                        click: t.select
                    }
                }, [t._v(t._s(t.cur ? t.cur.name : "Escapesuit"))]) : t._e()])]) : t._e()
            };
            r._withStripped = !0;
            var i = a(1),
                s = a(12),
                n = a(0),
                l = {
                    props: ["pick", "title", "choices", "pickEvent", "hideEmpty"],
                    mixins: [s.a],
                    data() {
                        return {
                            pEvent: this.pickEvent || n.E,
                            cur: i.c.state.getSlot(this.pick)
                        }
                    },
                    methods: {
                        toggleChange() {
                            this.changing = !this.changing
                        },
                        select() {
                            this.emit("choice", this.avail, t => {
                                t && (this.emit(this.pEvent, t), this.cur = i.c.state.getSlot(this.pick))
                            }, this.$el, this.title || this.pick)
                        }
                    },
                    computed: {
                        avail() {
                            return this.choices ? this.choices : i.c.state.filterItems(t => t.slot === this.pick && !t.disabled && !t.locks && !t.locked && (t.owned || !t.buy))
                        }
                    }
                },
                o = a(5),
                v = Object(o.a)(l, r, [], !1, null, "6f6112d4", null);
            v.options.__file = "src/ui/components/slotpick.vue";
            e.a = v.exports
        },
        135: function(t, e, a) {
            "use strict";
            var r = a(105);
            a.n(r).a
        },
        136: function(t, e, a) {
            (t.exports = a(14)(!1)).push([t.i, "\ndiv.allupgrades[data-v-71795d16] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\theight:100%;\n}\ndiv.up-list[data-v-71795d16] {\r\n\tmargin-bottom:14px;\r\n\toverflow-x:visible;\n}\r\n\r\n", ""])
        },
        137: function(t, e, a) {
            "use strict";
            var r = a(106);
            a.n(r).a
        },
        138: function(t, e, a) {
            (t.exports = a(14)(!1)).push([t.i, "\ndiv.player-view[data-v-427c5533] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\theight:100%;\r\n\tpadding-left:14px;\r\n\tjustify-content: space-between;\n}\ndiv.player-view div.player-tables[data-v-427c5533] {\r\n\tdisplay:flex;\r\n\tflex-flow: row wrap;\r\n\talign-content:flex-start;\r\n\tflex-grow: 1;\n}\ndiv.player-tables div[data-v-427c5533] {\r\n\tmargin-top:10px;\r\n\tflex-basis: 50%;\n}\ndiv.player-view input[type=text].fld-name[data-v-427c5533] { margin: 0;\n}\ndiv.player-view input[type=text][data-v-427c5533] {\r\n\tborder: none; background: transparent; font-size: 1em; cursor: text; position: relative;\n}\ntd[data-v-427c5533], th[data-v-427c5533] {\r\n\tpadding: 2px 4px;\r\n\tvertical-align: text-top;\n}\ntd[data-v-427c5533] {\r\n\ttext-align:right;\n}\nth[data-v-427c5533] { text-align: left;\n}\r\n\r\n", ""])
        },
        166: function(t, e, a) {
            "use strict";
            a.r(e);
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "player-view"
                }, [t.hallOpen ? a("hall", {
                    on: {
                        close: t.closeHall
                    }
                }) : t._e(), t._v(" "), a("div", {
                    staticClass: "player-tables"
                }, [a("div", [a("table", [a("tr", [a("td", [t._v("name")]), a("th", {
                    staticClass: "text-entry"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.wizName,
                        expression: "wizName"
                    }],
                    staticClass: "fld-name",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.wizName
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.wizName = e.target.value)
                        }
                    }
                })])]), t._v(" "), t.hallUnlocked ? a("tr", [a("td"), a("th", [a("button", {
                    on: {
                        click: t.openHall
                    }
                }, [t._v(t._s(t.hallName))])])]) : t._e(), t._v(" "), a("tr", {
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.player.titles, "Titles")
                        }
                    }
                }, [a("td", [t.player.titles.length > 0 ? a("span", [a("button", {
                    staticClass: "config",
                    on: {
                        click: function(e) {
                            return t.pickTitle(e)
                        }
                    }
                })]) : t._e(), t._v("title")]), a("th", [t._v(" " + t._s(t.title))])]), t._v(" "), a("tr", [a("td", [t._v("notoriety")]), a("th", [t._v(t._s(Math.floor(t.player.fame.valueOf())))])]), t._v(" "), a("tr", [a("td", [t._v("level")]), a("th", [t._v(" " + t._s(t.level))])]), t._v(" "), a("tr", [a("td", [t._v("exp")]), a("th", [t._v(" " + t._s(t.exp) + " / " + t._s(t.next) + " ")])]), t._v(" "), a("tr", [a("td", [t._v("virtue : evil")]), a("th", [t._v(" " + t._s(Math.floor(t.player.virtue.valueOf())) + " : " + t._s(Math.floor(t.player.evilamt.valueOf())))])]), t._v(" "), a("tr", [a("td", {
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.sp)
                        }
                    }
                }, [t._v("skill points")]), a("th", [t._v(" " + t._s(t.spStr))])]), t._v(" "), a("tr", [a("td", [t._v("rest")]), a("th", [a("slotpick", {
                    attrs: {
                        pick: "rest"
                    }
                })], 1)]), t._v(" "), a("tr", [a("td", [t._v("mount")]), a("th", [a("slotpick", {
                    attrs: {
                        pick: "mount"
                    }
                })], 1)]), t._v(" "), a("tr", [a("td", {
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.dist)
                        }
                    }
                }, [t._v("distance")]), a("th", [t._v(t._s(t.dist.current))])])])]), t._v(" "), a("div", [a("table", [a("tr", [a("td", {
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.hp)
                        }
                    }
                }, [t._v("life")]), a("th", [t._v("\n\t\t" + t._s(t.floor(t.hp.valueOf())) + " / " + t._s(t.floor(t.hp.max.value)))])]), t._v(" "), a("tr", [a("td", [t._v("stamina")]), a("th", [t._v("\n\t\t" + t._s(t.floor(t.stamina.valueOf())) + " / " + t._s(t.floor(t.stamina.max.value)))])]), t._v(" "), a("tr", [a("td", [t._v("defense")]), a("th", [t._v(t._s(t.defense))])]), t._v(" "), a("tr", [a("td", [t._v("dodge")]), a("th", [t._v(t._s(t.dodge))])]), t._v(" "), a("tr", [a("td", [t._v("luck")]), a("th", [t._v(t._s(t.luck))])]), t._v(" "), a("tr", [a("td", [t._v("damage bonus")]), a("th", [t._v(t._s(t.damage))])]), t._v(" "), a("tr", [a("td", [t._v("hit bonus")]), a("th", [t._v(t._s(t.precise(t.tohit)))])]), t._v(" "), a("tr", [a("td", [t._v("speed")]), a("th", [t._v(t._s(t.speed.toFixed(2)))])]), t._v(" "), a("tr", {
                    on: {
                        "!mouseenter": function(e) {
                            return e.stopPropagation(), t.emit("itemover", e, t.player.weapon)
                        }
                    }
                }, [a("td", [t._v("weapon")]), a("th", [t._v(t._s(t.player.weapon ? t.player.weapon.name : "None"))])])])]), t._v(" "), a("div", [a("table", {
                    staticClass: "resists"
                }, [t._m(0), t._v(" "), t._l(t.player.resist, (function(e, r) {
                    return a("tr", {
                        key: r
                    }, [a("td", [t._v(t._s(r))]), a("td", {
                        staticClass: "num-align"
                    }, [t._v(t._s(t.precise(e.value)) + "%")])])
                }))], 2)]), t._v(" "), a("div", [a("table", {
                    staticClass: "bonuses"
                }, [t._m(1), t._v(" "), t._l(t.player.bonuses, (function(e, r) {
                    return a("tr", {
                        key: r
                    }, [0 !== e.valueOf() ? a("td", [t._v(t._s(r) + ": " + t._s(e.valueOf()))]) : t._e()])
                }))], 2)]), t._v(" "), a("div", [a("table", {
                    staticClass: "hits"
                }, [t._m(2), t._v(" "), t._l(t.player.hits, (function(e, r) {
                    return a("tr", {
                        key: r
                    }, [0 !== e.valueOf() ? a("td", [t._v(t._s(r) + ": " + t._s(e.valueOf()))]) : t._e()])
                }))], 2)]), t._v(" "), a("div", [a("table", {
                    staticClass: "immunities"
                }, [t._m(3), t._v(" "), t._l(t.player.immunities, (function(e, r) {
                    return a("tr", {
                        key: r
                    }, [e > 0 ? a("td", [t._v(t._s(r))]) : t._e()])
                }))], 2)])]), t._v(" "), a("upgrades")], 1)
            };
            r._withStripped = !0;
            var i = a(1),
                s = a(13),
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "allupgrades"
                    }, [a("div", {
                        staticClass: "div-hr"
                    }, [t._v("upgrades")]), t._v(" "), a("div", {
                        staticClass: "up-list"
                    }, [t._l(t.classes, (function(e) {
                        return a("div", {
                            key: e.id,
                            on: {
                                "!mouseenter": function(a) {
                                    return a.stopPropagation(), t.emit("itemover", a, e)
                                }
                            }
                        }, [t._v(t._s(e.name + t.count(e)))])
                    })), t._v(" "), t._l(t.actions, (function(e) {
                        return a("div", {
                            key: e.id,
                            on: {
                                "!mouseenter": function(a) {
                                    return a.stopPropagation(), t.emit("itemover", a, e)
                                }
                            }
                        }, [t._v(t._s(e.name + t.count(e)))])
                    })), t._v(" "), t._l(t.upgrades, (function(e) {
                        return a("div", {
                            key: e.id,
                            on: {
                                "!mouseenter": function(a) {
                                    return a.stopPropagation(), t.emit("itemover", a, e)
                                }
                            }
                        }, [t._v(t._s(e.name + t.count(e)))])
                    }))], 2)])
                };
            n._withStripped = !0;
            var l = a(4),
                o = {
                    methods: {
                        count: t => t.value > 1 ? " (" + Math.floor(t.value) + ")" : ""
                    },
                    computed: {
                        classes: () => i.c.state.classes.filter(t => !t.disabled && t.value >= 1),
                        actions: () => i.c.state.actions.filter(t => !t.repeat && !t.disabled && t.value >= 1).sort(l.a),
                        upgrades: () => i.c.state.upgrades.filter(t => !t.disabled && t.value >= 1).sort(l.a)
                    }
                },
                v = (a(135), a(5)),
                u = Object(v.a)(o, n, [], !1, null, "71795d16", null);
            u.options.__file = "src/ui/allupgrades.vue";
            var p = u.exports,
                c = a(120),
                _ = a(17),
                d = {
                    components: {
                        upgrades: p,
                        slotpick: c.a,
                        hall: () => a.e(4).then(a.bind(null, 167))
                    },
                    data: () => ({
                        hallOpen: !1
                    }),
                    computed: {
                        player: () => i.c.state.player,
                        wizName: {
                            get() {
                                return this.player.name
                            },
                            set(t) {
                                t && this.player.setName(t)
                            }
                        },
                        hallUnlocked: () => i.c.state.getData("evt_hall") > 0,
                        hallName: () => _.a.hall.name,
                        title() {
                            return this.player.title
                        },
                        speed() {
                            return this.player.speed.valueOf()
                        },
                        stamina() {
                            return this.player.stamina
                        },
                        hp() {
                            return this.player.hp
                        },
                        bonusNames() {
                            return Object.keys(this.player.bonuses)
                        },
                        hitNames() {
                            return Object.keys(this.player.hits)
                        },
                        level() {
                            return this.player.level.valueOf()
                        },
                        defense() {
                            return this.player.defense.valueOf()
                        },
                        dodge() {
                            return Math.floor(this.player.dodge.valueOf())
                        },
                        luck() {
                            return Math.floor(this.player.luck.valueOf())
                        },
                        damage() {
                            return this.player.damage.valueOf()
                        },
                        tohit() {
                            return this.player.tohit.value
                        },
                        exp() {
                            return this.floor(this.player.exp.value)
                        },
                        next() {
                            return this.floor(this.player.next)
                        },
                        mount: () => i.c.state.getSlot("mount"),
                        dist() {
                            return this.player.dist
                        },
                        sp() {
                            return this.player.sp
                        },
                        spStr() {
                            return Object(s.c)(this.player.sp)
                        }
                    },
                    methods: {
                        floor: s.b,
                        precise: s.d,
                        openHall() {
                            this.hallOpen = !0
                        },
                        closeHall() {
                            this.hallOpen = !1
                        },
                        pickTitle(t) {
                            this.emit("choice", this.player.titles, t => {
                                t && this.player.setTitle(t)
                            }, t.target, "", !0)
                        }
                    }
                },
                h = (a(137), Object(v.a)(d, r, [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("tr", [e("th", [this._v("resists")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("tr", [e("th", [this._v("bonus damage")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("tr", [e("th", [this._v("tohit bonus")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("tr", [e("th", [this._v("immunities")])])
                }], !1, null, "427c5533", null));
            h.options.__file = "src/ui/player.vue";
            e.default = h.exports
        }
    }
]);
