(window.webpackJsonp_name_ = window.webpackJsonp_name_ || []).push([
    [1], {
        121: function(t, i, s) {
            "use strict";
            var n = s(98);
            s.n(n).a
        },
        122: function(t, i, s) {
            (t.exports = s(14)(!1)).push([t.i, "\n.popup[data-v-862dd850] {\r\n\tz-index: var(--md-depth);\r\n\tmax-width: 50vw;\n}\n.content[data-v-862dd850] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\twidth: 100%;\r\n\tmin-height:200px;\n}\n.content .items[data-v-862dd850] {\r\n\tdisplay:flex;\r\n\tflex-flow: row wrap;\r\n\tflex-grow: 1;\r\n\twidth:auto;\n}\n.content .title[data-v-862dd850] {\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tmargin-bottom: var(--sm-gap);\n}\n.action-btn[data-v-862dd850] {\r\n\twidth: 100%;\n}\n.action-btn button[data-v-862dd850] {\r\n\r\n\tmax-height: 2em;\r\n\twidth:100%;\n}\nbutton.close-btn[data-v-862dd850] {\r\n\tmin-height: 2em;\r\n\twidth: 114px;\r\n\tfont-size:0.9em;\n}\r\n\r\n\r\n", ""])
        },
        168: function(t, i, s) {
            "use strict";
            s.r(i);
            var n = function() {
                var t = this,
                    i = t.$createElement,
                    s = t._self._c || i;
                return null != t.choices && t.choices.length > 0 ? s("div", {
                    staticClass: "popup"
                }, [s("div", {
                    staticClass: "content"
                }, [t.title ? s("span", {
                    staticClass: "title"
                }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), s("div", {
                    staticClass: "items"
                }, t._l(t.choices, (function(i) {
                    return s("span", {
                        key: t.strings ? i : i.id,
                        staticClass: "action-btn",
                        on: {
                            "!mouseenter": function(s) {
                                s.stopPropagation(), !t.strings && t.emit("itemover", s, i)
                            }
                        }
                    }, [s("button", {
                        staticClass: "wrapped-btn",
                        attrs: {
                            disabled: !t.strings && !t.usable(i)
                        },
                        on: {
                            click: function(s) {
                                return t.choose(i)
                            }
                        }
                    }, [t._v(t._s(t.strings ? i : i.name))])])
                })), 0), t._v(" "), s("span", [s("button", {
                    staticClass: "close-btn",
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")])])])]) : t._e()
            };
            n._withStripped = !0;
            var e = s(1),
                l = s(29),
                o = s(12),
                a = (s(6), {
                    data: () => ({
                        title: null,
                        list: null,
                        elm: null,
                        item: null,
                        open: !1,
                        strings: !1
                    }),
                    mixins: [o.a],
                    created() {
                        this.cb = null, this.plisten = () => {
                            this.add("choice", this.show, this)
                        }, this.listen("game-loaded", this.plisten)
                    },
                    beforeDestroy() {
                        this.removeListener("game-loaded", this.plisten), this.plisten = null, this.cancel()
                    },
                    updated() {
                        !1 !== this.open && (this.elm ? Object(l.b)(this.$el, this.elm, 0) : Object(l.a)(this.$el))
                    },
                    computed: {
                        choices: {
                            get() {
                                return this.list
                            },
                            set(t) {
                                if (t || (this.list = null), "string" == typeof t) this.list = e.c.state.getTagList(t);
                                else if (Array.isArray(t))
                                    if (this.strings) this.list = t;
                                    else {
                                        var i = [];
                                        for (let n = t.length - 1; n >= 0; n--) {
                                            var s = e.c.state.findData(t[n]);
                                            s && i.push(s)
                                        }
                                        this.list = i
                                    }
                                else this.list = null
                            }
                        }
                    },
                    methods: {
                        show(t, i = null, s = null, n = null, e = !1) {
                            this.title = n, this.cb = i, this.elm = s, this.strings = e, this.choices = t, this.open = !0
                        },
                        itemChoices(t, i) {
                            i ? (this.item = t, this.choices = i) : t.choices ? (this.item = t, this.choices = t.choice) : this.choices = t
                        },
                        choose(t) {
                            if (this.open = !1, this.item = null, this.choices = null, this.elm = null, this.cb) {
                                let i = this.cb;
                                this.cb = null, i(t)
                            }
                        },
                        cancel() {
                            this.open = !1, this.cb = null, this.item = null, this.choices = null, this.elm = null
                        }
                    }
                }),
                c = (s(121), s(5)),
                h = Object(c.a)(a, n, [], !1, null, "862dd850", null);
            h.options.__file = "src/ui/components/choice.vue";
            i.default = h.exports
        },
        98: function(t, i, s) {
            var n = s(122);
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var e = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s(15)(n, e);
            n.locals && (t.exports = n.locals)
        }
    }
]);
