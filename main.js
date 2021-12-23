(() => {
  const e = {
    426: (e, t, n) => {
      n.d(t, { Z: () => a });
      const o = n(81);
      const r = n.n(o);
      const c = n(645);
      const i = n.n(c)()(r());
      i.push([
        e.id,
        "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Space+Mono&display=swap);",
      ]),
        i.push([
          e.id,
          '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Space Mono", monospace;\n  text-transform: capitalize;\n  font-size: 20px;\n  color: #1e293b;\n}\n\nh1,\nh2,\nh4 {\n  font-family: "Libre Baskerville", serif;\n}\nbody {\n  height: 100vh;\n}\n/* HEADER */\n\n.header {\n  font-size: 50px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  padding: 1rem;\n\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  background-color: #1e293b;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\n.header h1,\n.header i {\n  color: #f8fafc;\n  font-size: 50px;\n}\n\n/* DISPLAY STYLE */\n#content {\n  display: flex;\n  height: 100%;\n}\n/* FORM */\n\n.form-container {\n  background-color: #cbd5e1;\n  width: 350px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-container h2 {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh2 {\n  font-size: 25px;\n  letter-spacing: 2px;\n}\n\nh2 i {\n  font-size: 32px;\n}\n\nh2 i:hover {\n  transform: scale(1.2);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n\n  font-size: 20px;\n\n  gap: 10px;\n}\n\nform fieldset {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  border: 2px solid #1e293b;\n}\nform .input-fieldset {\n  display: flex;\n  flex-direction: column;\n  border: 0;\n  gap: 10px;\n}\n\n.todo-input-btn {\n  font-size: 32px;\n  font-weight: 800;\n  text-transform: uppercase;\n  background-color: #22c55e;\n}\n\n.todo-input-btn:hover {\n  color: #22c55e;\n  background-color: #1e293b;\n}\n\n.show-form {\n  height: 0;\n  overflow: hidden;\n}\n/* MISC BAR */\n.misc-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.clear-all-btn {\n  display: inline-block;\n  padding: 0 10px;\n  font-size: 20px;\n}\n/* SORT CONTAINER */\n.sort-container {\n  display: inline-block;\n}\n\n.sort-container fieldset {\n  border: 0;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\nselect#sort {\n  font-size: 20px;\n}\n\n.sort-container button {\n  padding: 0 10px;\n  font-size: 20px;\n}\n/* TODO-DISPLAY */\n\n.display-todo {\n  padding: 20px 40px;\n  width: 100%;\n  background-color: #f1f5f9;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.todo {\n  width: 100%;\n  padding: 5px 20px;\n  border: 2px solid #1e293b;\n  border-radius: 20px;\n  font-size: 20px;\n  overflow-wrap: break-word;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n\n  background-color: #cbd5e1;\n}\n\n.others-info {\n  display: flex;\n  gap: 10px;\n}\n.priority {\n  width: 100px;\n  font-size: 20px;\n  padding: 0 10px;\n}\n\np.task {\n  width: 100%;\n}\np.due {\n  width: 130px;\n}\n\np.project {\n  width: 130px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 10px;\n}\n\n.del-btn,\n.edit-btn {\n  border: transparent;\n  font-size: 20px;\n  background: transparent;\n}\n',
          "",
        ]);
      const a = i;
    },
    645: (e) => {
      e.exports = function (e) {
        const t = [];
        return (
          (t.toString = function () {
            return this.map((t) => {
              let n = "";
              const o = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                o &&
                  (n += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {"
                  )),
                (n += e(t)),
                o && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, o, r, c) {
            typeof e === "string" && (e = [[null, e, void 0]]);
            const i = {};
            if (o)
              for (let a = 0; a < this.length; a++) {
                const s = this[a][0];
                s != null && (i[s] = !0);
              }
            for (let d = 0; d < e.length; d++) {
              const l = [].concat(e[d]);
              (o && i[l[0]]) ||
                (void 0 !== c &&
                  (void 0 === l[5] ||
                    (l[1] = "@layer"
                      .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                      .concat(l[1], "}")),
                  (l[5] = c)),
                n &&
                  (l[2]
                    ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                      (l[2] = n))
                    : (l[2] = n)),
                r &&
                  (l[4]
                    ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = r))
                    : (l[4] = "".concat(r))),
                t.push(l));
            }
          }),
          t
        );
      };
    },
    81: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    },
    379: (e) => {
      const t = [];
      function n(e) {
        for (var n = -1, o = 0; o < t.length; o++)
          if (t[o].identifier === e) {
            n = o;
            break;
          }
        return n;
      }
      function o(e, o) {
        for (var c = {}, i = [], a = 0; a < e.length; a++) {
          const s = e[a];
          const d = o.base ? s[0] + o.base : s[0];
          const l = c[d] || 0;
          const p = "".concat(d, " ").concat(l);
          c[d] = l + 1;
          const u = n(p);
          const m = {
            css: s[1],
            media: s[2],
            sourceMap: s[3],
            supports: s[4],
            layer: s[5],
          };
          if (u !== -1) t[u].references++, t[u].updater(m);
          else {
            const f = r(m, o);
            (o.byIndex = a),
              t.splice(a, 0, { identifier: p, updater: f, references: 1 });
          }
          i.push(p);
        }
        return i;
      }
      function r(e, t) {
        const n = t.domAPI(t);
        return (
          n.update(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          }
        );
      }
      e.exports = function (e, r) {
        let c = o((e = e || []), (r = r || {}));
        return function (e) {
          e = e || [];
          for (let i = 0; i < c.length; i++) {
            const a = n(c[i]);
            t[a].references--;
          }
          for (var s = o(e, r), d = 0; d < c.length; d++) {
            const l = n(c[d]);
            t[l].references === 0 && (t[l].updater(), t.splice(l, 1));
          }
          c = s;
        };
      };
    },
    569: (e) => {
      const t = {};
      e.exports = function (e, n) {
        const o = (function (e) {
          if (void 0 === t[e]) {
            let n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        })(e);
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(n);
      };
    },
    216: (e) => {
      e.exports = function (e) {
        const t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
      };
    },
    565: (e, t, n) => {
      e.exports = function (e) {
        const t = n.nc;
        t && e.setAttribute("nonce", t);
      };
    },
    795: (e) => {
      e.exports = function (e) {
        const t = e.insertStyleElement(e);
        return {
          update(n) {
            !(function (e, t, n) {
              let o = "";
              n.supports && (o += "@supports (".concat(n.supports, ") {")),
                n.media && (o += "@media ".concat(n.media, " {"));
              const r = void 0 !== n.layer;
              r &&
                (o += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {"
                )),
                (o += n.css),
                r && (o += "}"),
                n.media && (o += "}"),
                n.supports && (o += "}");
              const c = n.sourceMap;
              c &&
                typeof btoa !== "undefined" &&
                (o +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                    " */"
                  )),
                t.styleTagTransform(o, e, t.options);
            })(t, e, n);
          },
          remove() {
            !(function (e) {
              if (e.parentNode === null) return !1;
              e.parentNode.removeChild(e);
            })(t);
          },
        };
      };
    },
    589: (e) => {
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e));
        }
      };
    },
  };
  const t = {};
  function n(o) {
    const r = t[o];
    if (void 0 !== r) return r.exports;
    const c = (t[o] = { id: o, exports: {} });
    return e[o](c, c.exports, n), c.exports;
  }
  (n.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (const o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  const o = {};
  (() => {
    function e(e) {
      return localStorage.getItem(e) ? JSON.parse(localStorage.getItem(e)) : [];
    }
    function t(t, n, o) {
      const r = { id: t, item: n };
      const c = e(o);
      c.push(r), localStorage.setItem(o, JSON.stringify(c));
    }
    function r(t, n) {
      let o = e(n);
      (o = o.filter((e) => e.id !== t)),
        localStorage.setItem(n, JSON.stringify(o));
    }
    function c(t, n, o) {
      let r = e(o);
      (r = r.map((e) => (e.id === t && (e.item = n), e))),
        localStorage.setItem(o, JSON.stringify(r));
    }
    n.d(o, { L: () => M });
    class i {
      constructor(e, t, n, o, r) {
        (this.id = e),
          (this._task = t),
          (this._due = n),
          (this._priority = o),
          (this._project = r);
      }

      get task() {
        return this._task;
      }

      set task(e) {
        this._task = e;
      }

      get due() {
        return this._due;
      }

      set due(e) {
        this._due = e;
      }

      get priority() {
        return this._priority;
      }

      set priority(e) {
        this._priority = e;
      }

      get project() {
        return this._project;
      }

      set project(e) {
        this._project = e;
      }
    }
    function a(e) {
      e.preventDefault();
      const t = document.querySelector("#sort").value;
      m(t !== "all" ? M.filter((e) => e._project === t) : M);
    }
    let s = !1;
    let d = "";
    function l(e, t) {
      const n = document.createElement("i");
      n.setAttribute("class", t), e.appendChild(n);
    }
    function p() {
      const e = document.querySelectorAll(".todo");
      const t = document.querySelector(".todo-container");
      for (
        e.length > 0 &&
        e.forEach((e) => {
          t.removeChild(e);
        });
        M.length > 0;

      )
        M.splice(0, 1);
      localStorage.removeItem("todoList");
    }
    function u(e, t, n) {
      const o = document.querySelector(".todo-input-btn");
      (s = e), (d = t), (o.textContent = n);
    }
    function m(e) {
      const t = document.querySelector(".todo-container");
      t.querySelectorAll(".todo").forEach((e) => {
        t.removeChild(e);
      }),
        e.forEach((e) => {
          t.appendChild(
            (function (e) {
              const t = document.createElement("div");
              (t.className = "todo"), t.setAttribute("data-id", e.id);
              const n = document.createElement("p");
              (n.textContent = e._task), (n.className = "task");
              const o = document.createElement("p");
              (o.textContent = e._due), (o.className = "due");
              const i = document.createElement("p");
              (i.textContent = e._project), (i.className = "project");
              const a = document.createElement("button");
              (a.textContent = e._priority),
                (a.className = "priority"),
                a.addEventListener("click", (t) => {
                  !(function (e, t) {
                    const n = e.currentTarget;
                    t._priority === "low"
                      ? ((t.priority = "normal"), (n.textContent = t._priority))
                      : t._priority === "normal"
                      ? ((t.priority = "high"), (n.textContent = t._priority))
                      : t._priority === "high" &&
                        ((t.priority = "low"), (n.textContent = t._priority)),
                      c(t.id, t, "todoList");
                  })(t, e);
                });
              const s = document.createElement("div");
              s.className = "btn-container";
              const d = document.createElement("button");
              d.setAttribute("class", "btn del-btn"),
                l(d, "fas fa-trash"),
                d.addEventListener("click", (t) => {
                  !(function (e, t) {
                    const n =
                      e.currentTarget.parentElement.parentElement.parentElement;
                    n.parentElement.removeChild(n);
                    const o = M.indexOf(t);
                    M.splice(o, 1), r(t.id, "todoList");
                  })(t, e);
                });
              const p = document.createElement("button");
              p.setAttribute("class", "btn edit-btn"),
                l(p, "fas fa-edit"),
                p.addEventListener("click", (t) => {
                  !(function (e, t) {
                    u(!0, t.id, "edit");
                    const n = document.querySelector("form");
                    n.classList.contains("show-form") &&
                      n.classList.remove("show-form");
                    const o =
                      e.currentTarget.parentElement.parentElement.parentElement;
                    ["task", "due", "project", "priority"].forEach((e) => {
                      const t = o.querySelector(`.${e}`);
                      document.querySelector(`#${e}`).value = t.innerHTML;
                    });
                  })(t, e);
                });
              const m = document.createElement("div");
              return (
                (m.className = "others-info"),
                s.appendChild(d),
                s.appendChild(p),
                m.appendChild(o),
                m.appendChild(i),
                m.appendChild(s),
                t.appendChild(n),
                t.appendChild(a),
                t.appendChild(m),
                t
              );
            })(e)
          );
        });
    }
    function f(e) {
      e.preventDefault();
      const n = document.querySelector("#task").value;
      const o = new Date().getTime().toString();
      if (n === "" || s) {
        if (n !== "" && s) {
          const t = M.filter((e) => (e.id = d))[0];
          const n = document.querySelector(`[data-id="${d}" ]`);
          ["task", "due", "priority", "project"].forEach((e) => {
            const { value: o } = document.querySelector(`#${e}`);
            (t[e] = o), (n.querySelector(`.${e}`).textContent = o);
          }),
            c(t.id, t, "todoList"),
            u(!1, "", "create"),
            e.currentTarget.reset();
        }
      } else {
        const n = [o];
        ["task", "due", "priority", "project"].forEach((e) => {
          n.push(document.querySelector(`#${e}`).value);
        });
        const r = new i(n[0], n[1], n[2], n[3], n[4]);
        M.push(r), e.currentTarget.reset(), t(o, r, "todoList"), m(M);
      }
    }
    function h(e) {
      const t = document.createElement("button");
      return (
        t.setAttribute("class", `btn submit-btn ${e}-btn`),
        t.setAttribute("type", "submit"),
        (t.textContent = "Add"),
        t
      );
    }
    function y(e, t) {
      const n = document.createElement("option");
      n.setAttribute("value", e), (n.textContent = e), t.add(n);
    }
    function b(e, t, n) {
      const o = document.createElement("input");
      const r = document.createElement("label");
      (r.textContent = t),
        r.setAttribute("for", t),
        o.setAttribute("name", t),
        o.setAttribute("id", t),
        o.setAttribute("type", e),
        n.appendChild(r),
        n.appendChild(o);
    }
    function x(e, t, n) {
      const o = document.createElement("label");
      const r = document.createElement("select");
      o.setAttribute("for", e),
        (o.textContent = `${e} :`),
        r.setAttribute("id", e),
        t.forEach((e) => {
          r.appendChild(
            (function (e) {
              const t = document.createElement("option");
              return t.setAttribute("value", e), (t.textContent = e), t;
            })(e)
          );
        }),
        n.appendChild(o),
        n.appendChild(r);
    }
    function v(e, t) {
      t.querySelectorAll("option").forEach((n) => {
        n.value === e && t.removeChild(n);
      });
    }
    function g(e) {
      e.preventDefault();
      const t = document.querySelector("#project");
      const n = document.querySelector("#sort");
      const o = document.querySelector("#remove-project");
      const [c] = o.value;
      !M.some((e) => e._project === c) &&
        (v(c, o), v(c, t), v(c, n), r(c, "projectList"));
    }
    const C = n(379);
    const E = n.n(C);
    const S = n(795);
    const j = n.n(S);
    const w = n(569);
    const k = n.n(w);
    const A = n(565);
    const L = n.n(A);
    const q = n(216);
    const _ = n.n(q);
    const N = n(589);
    const T = n.n(N);
    const z = n(426);
    const I = {};
    (I.styleTagTransform = T()),
      (I.setAttributes = L()),
      (I.insert = k().bind(null, "head")),
      (I.domAPI = j()),
      (I.insertStyleElement = _()),
      E()(z.Z, I),
      z.Z && z.Z.locals && z.Z.locals;
    const O = document.querySelector("#content");
    let M = [];
    const D = (function () {
      const e = document.createElement("header");
      (e.className = "header"), l(e, "fas fa-tasks");
      const t = document.createElement("h1");
      return (t.textContent = "Todo List"), e.appendChild(t), e;
    })();
    document.body.insertBefore(D, document.body.firstChild);
    const R = (function () {
      const e = document.createElement("div");
      e.className = "form-container";
      const n = document.createElement("h2");
      (n.textContent = "create your todo"),
        l(n, "fas fa-caret-square-down"),
        e.appendChild(n);
      const o = document.createElement("form");
      o.className = "todo-input";
      const r = (function () {
        const e = document.createElement("fieldset");
        return (
          b("text", "task", e),
          b("date", "due", e),
          x("priority", ["low", "normal", "high"], e),
          x("project", ["personal", "work"], e),
          e
        );
      })();
      r.className = "input-fieldset";
      const c = (function () {
        const e = document.createElement("fieldset");
        (document.createElement("label").textContent = "Add new project"),
          b("text", "add-project", e);
        const n = h("add-project");
        return (
          n.addEventListener("click", (e) => {
            !(function (e) {
              e.preventDefault();
              const n = document.querySelector("#add-project");
              const o = document.querySelector("#project");
              const r = document.querySelector("#sort");
              const c = document.querySelector("#remove-project");
              const { value: i } = n;
              (n.value = ""),
                i && (t(i, i, "projectList"), y(i, o), y(i, r), y(i, c));
            })(e);
          }),
          e.appendChild(n),
          e
        );
      })();
      o.appendChild(r);
      const i = (function () {
        const e = document.createElement("fieldset");
        const t = document.createElement("label");
        t.textContent = "Remove project";
        const n = document.createElement("select");
        n.setAttribute("id", "remove-project");
        const o = document.createElement("button");
        return (
          o.setAttribute("type", "submit"),
          (o.textContent = "Remove"),
          o.addEventListener("click", g),
          e.appendChild(t),
          e.appendChild(n),
          e.appendChild(o),
          e
        );
      })();
      const a = h("todo-input");
      return (
        (a.textContent = "Create"),
        o.appendChild(a),
        o.addEventListener("submit", f),
        o.appendChild(c),
        o.appendChild(i),
        n.addEventListener("click", () => {
          o.classList.toggle("show-form");
        }),
        e.appendChild(o),
        e
      );
    })();
    O.appendChild(R);
    const $ = (function () {
      const e = document.createElement("div");
      e.className = "display-todo";
      const t = document.createElement("div");
      t.className = "misc-bar";
      const n = (function () {
        const e = document.createElement("button");
        return (
          e.setAttribute("class", "btn clear-all-btn"),
          e.addEventListener("click", p),
          (e.textContent = "Remove All"),
          e
        );
      })();
      t.appendChild(n);
      const o = (function () {
        const e = document.createElement("div");
        e.className = "sort-container";
        const t = document.createElement("fieldset");
        const n = document.createElement("label");
        n.textContent = "Sort project";
        const o = document.createElement("select");
        o.setAttribute("id", "sort"),
          (function (e) {
            const t = document.createElement("option");
            t.setAttribute("value", "all"),
              (t.textContent = "all"),
              e.add(t),
              document
                .querySelector("#project")
                .querySelectorAll("option")
                .forEach((t) => {
                  const n = document.importNode(t, !0);
                  e.appendChild(n);
                });
          })(o);
        const r = document.createElement("button");
        return (
          r.setAttribute("type", "submit"),
          (r.textContent = "Sort"),
          r.addEventListener("click", a),
          t.appendChild(n),
          t.appendChild(o),
          t.appendChild(r),
          e.appendChild(t),
          e
        );
      })();
      t.appendChild(o), e.appendChild(t);
      const r = document.createElement("div");
      return (r.className = "todo-container"), e.appendChild(r), e;
    })();
    O.appendChild($),
      document.addEventListener("DOMContentLoaded", () => {
        const t = e("todoList");
        t.length > 0 &&
          t.forEach((e) => {
            const t = e.item;
            const n = new i(t.id, t._task, t._due, t._priority, t._project);
            M.push(n);
          }),
          m(M);
        const n = e("projectList");
        n.length > 0 &&
          n.forEach((e) => {
            const t = e.item;
            const n = document.querySelector("#project");
            const o = document.querySelector("#sort");
            const r = document.querySelector("#remove-project");
            y(t, n), y(t, o), y(t, r);
          });
      });
  })();
})();
