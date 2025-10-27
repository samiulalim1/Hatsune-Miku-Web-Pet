(function () {
  const e = "Miku";
  const t = ["run", "creep", "walk"];
  const i = {
    c: [{
      x: 128,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    L: [{
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    read: [{
      x: 640,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    i: [{
      x: 0,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 384,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 512,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 512,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 768,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    G: [{
      x: 512,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 896,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 512,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    walk: [{
      x: 0,
      y: 384,
      Q: 1,
      e: 0
    }, {
      x: 512,
      y: 512,
      Q: 1,
      e: 0
    }, {
      x: 384,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 768,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 384,
      y: 512,
      Q: 1,
      e: 0
    }, {
      x: 768,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 384,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 768,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 384,
      y: 512,
      Q: 1,
      e: 0
    }, {
      x: 768,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 384,
      y: 256,
      Q: 1,
      e: 0
    }, {
      x: 0,
      y: 384,
      Q: 1,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    creep: [{
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 128,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 384,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    run: [{
      x: 896,
      y: 0,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 384,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 0,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 384,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 0,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 384,
      Q: 1.5,
      e: 0
    }, {
      x: 896,
      y: 256,
      Q: 1.5,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    t: [{
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 256,
      Q: 0,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 256,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0.5,
      e: 0
    }, {
      x: 512,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0.5,
      e: 0
    }, {
      x: 512,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0.5,
      e: 0
    }, {
      x: 256,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0.5,
      e: 0
    }, {
      x: 512,
      y: 640,
      Q: 0.5,
      e: 0
    }, {
      x: 0,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 640,
      y: 640,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }],
    D: [{
      x: 128,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 768,
      y: 0,
      Q: 0,
      e: 0
    }, {
      x: 768,
      y: 128,
      Q: 0,
      e: 0
    }, {
      x: 768,
      y: 512,
      Q: 0,
      e: 0
    }, {
      x: 768,
      y: 640,
      Q: 0,
      e: 0
    }, {
      x: 128,
      y: 0,
      Q: 0,
      e: 1
    }]
  };
  const s = [{
    x: 0,
    y: 640,
    s: 1
  }, {
    x: 256,
    y: 896,
    s: -1
  }, {
    x: 512,
    y: 896,
    s: 1
  }, {
    x: 256,
    y: 896,
    s: 1
  }, {
    x: 768,
    y: 768,
    s: 1
  }, {
    x: 768,
    y: 384,
    s: 0
  }, {
    x: 128,
    y: 1,
    s: 0
  }, {
    x: 384,
    y: 128,
    s: 1
  }, {
    x: 768,
    y: 896,
    s: 1
  }, {
    x: 384,
    y: 0,
    s: 1
  }, {
    x: 128,
    y: 128,
    s: 0
  }, {
    x: 256,
    y: 0,
    s: 0
  }, {
    x: 256,
    y: 128,
    s: 0
  }, {
    x: 896,
    y: 512,
    s: 0
  }];
  window.Miku = class {
    constructor() {
      this.X = 0;
      this.z = 0;
      this.time = 0;
      this.C = 1;
      this.b = 0;
      this.p = 0;
      this.V = 0;
      this.d = 0;
      this.Y = 0;
      this.o = 0;
      this.h = false;
      this.l = true;
      this.v = true;
      this.H = false;
      this.q = false;
      this.K = null;
      this.E = false;
      this.U = function () {
        let t = document.getElementById(e + "WorkArea");
        if (!t) {
          t = document.createElement("div");
          t.id = e + "WorkArea";
          t.style = "position: fixed; background: transparent; z-index: 2147483643; width: 100vw; height: 100vh; left: 0px; top: 0px; transform: translate(0px, 0px); pointer-events: none; touch-action: none; -webkit-user-select: none; user-select: none;";
          document.body.appendChild(t);
        }
        return t;
      }();
      this.O = function () {
        let t = document.createElement("div");
        t.style = "position: absolute; background: url(\"https://cdn.jsdelivr.net/gh/samiulalim1/Hatsune-Miku-Web-Pet@v1.0.0/spritesheet.png\") 0px -128px; z-index: 2; width: 128px; height: 128px; left: -64px; top: -128px; transform: translate(" + innerWidth / 3 + "px, 0px) scaleX(1); pointer-events: auto; cursor: context-menu; touch-action: none; -webkit-user-select: none; user-select: none;";
        document.getElementById(e + "WorkArea").appendChild(t);
        return t;
      }();
      this.B();
      this.Z = this.Z.bind(this);
      this.Z();
    }
    remove() {
      this.h = true;
      if (this.K) {
        cancelAnimationFrame(this.K);
      }
      if (this.O) {
        this.O.remove();
        this.O = null;
      }
    }
    B() {
      this.O.addEventListener("pointerdown", e => {
        e.preventDefault();
        this.q = true;
        this.l = false;
        this.H = false;
        this.v = false;
        this.E = false;
        this.d = 0;
        this.Y = 0;
        this.b = e.clientX;
        this.p = e.clientY;
        this.V = e.pointerId;
        this.O.setPointerCapture(this.V);
      });
      this.O.addEventListener("pointermove", e => {
        if (this.q && e.pointerId === this.V) {
          this.v = false;
          this.X = e.clientX - this.b;
          this.z = e.clientY - this.p;
          this.b = e.clientX;
          this.p = e.clientY;
        }
      });
      const e = e => {
        if (e.pointerId === this.V) {
          this.v = true;
          this.q = false;
          this.V = 0;
          this.b = e.clientX;
          this.p = e.clientY;
          this.O.releasePointerCapture(e.pointerId);
        }
      };
      this.O.addEventListener("pointerup", e);
      this.O.addEventListener("pointercancel", e);
    }
    Z() {
      if (this.h) {
        return;
      }
      const e = this.U.getBoundingClientRect();
      const x = this.O.getBoundingClientRect();
      const y = x.bottom === innerHeight;
      if (this.q) {
        let e = performance.now();
        let t = this.p + x.height - 15;
        let i = x.x + x.width / 2;
        let y = this.b - i;
        if (e - this.time > 250) {
          let t = s[y < -6 ? 0 : y < -3 ? 1 : y > 6 ? 2 : y > 3 ? 3 : 4];
          this.r(t.x, t.y);
          this.C = t.s;
          this.time = e;
        }
        this.R(this.b, t, this.C);
      } else if (this.v) {
        if (y) {
          this.o++;
          this.l = false;
          let e = s[this.o > 30 ? 6 : this.o > 20 ? 7 : this.o > 10 ? 8 : 9];
          this.r(e.x, e.y);
          this.v = e.s;
        } else {
          this.o = 0;
          this.z = this.z < -30 ? -30 : this.z;
          let t = e.width;
          let i = innerHeight - x.bottom;
          let y = x.x + x.width / 2 + this.X / 2;
          let h = i > 0 ? x.bottom + this.z + 7 : innerHeight;
          if (y < 50 || y > t - 50) {
            if (h < 100 || this.l) {
              this.l = true;
              y = y < 50 ? 50 : t - 50;
            } else if (y < 0 || y > t) {
              this.H = true;
              this.l = false;
              this.v = false;
              y = y < 0 ? 0 : t;
              this.C = y === t ? -1 : 1;
              this.R(y, h, this.C);
              this.r(s[10].x, s[10].y);
              this.K = requestAnimationFrame(this.Z);
              return;
            }
          }
          this.C = this.X < 0 ? -1 : 1;
          this.z = this.z < 0 ? this.z + 0.5 : this.z;
          this.r(s[5].x, s[5].y);
          this.R(y, h, this.C);
        }
      } else if (this.H) {
        if (y) {
          this.H = false;
          this.Y = 0;
          var h = t[Math.floor(Math.random() * t.length)];
          this.E = i[h];
        } else {
          this.Y++;
          let e = Math.floor(this.Y / 15);
          let t = e === 4 || e === 12 ? 13 : e === 5 || e === 11 ? 12 : e === 6 || e === 10 ? 11 : 0;
          if (t) {
            let e = innerHeight - x.bottom;
            let i = x.x + x.width / 2;
            let y = e > 0 ? x.bottom + 1 : innerHeight;
            this.R(i, y, this.C);
            this.r(s[t].x, s[t].y);
          }
          if (this.Y > 180) {
            this.Y = 0;
          }
        }
      } else if (this.E) {
        this.d = 0;
        this.Y++;
        let t = this.E[Math.floor(this.Y / 25)];
        this.r(t.x, t.y);
        if (t.Q) {
          var Q = x.x + x.width / 2;
          if (Q < 50) {
            this.C = -1;
          } else if (Q > e.width - 50) {
            this.C = 1;
          }
          Q = this.C === 1 ? Q - t.Q : Q + t.Q;
          this.R(Q, innerHeight, this.C);
        }
        if (t.e) {
          this.Y = 0;
          this.E = false;
        }
      } else if (this.d > 100) {
        this.Y = 0;
        var n = Object.keys(i);
        h = n[Math.floor(Math.random() * n.length)];
        this.E = i[h];
      } else {
        this.d++;
      }
      this.K = requestAnimationFrame(this.Z);
    }
    R(e, t, i = 1, s = 1) {
      this.O.style.transform = "translate(" + e + "px, " + t + "px) scale(" + i + ", " + s + ")";
    }
    r(e, t) {
      this.O.style.backgroundPosition = -e + "px " + -t + "px";
    }
  };
})();
