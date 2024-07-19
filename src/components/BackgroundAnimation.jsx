import React, { useRef, useEffect } from "react";
import p5 from "p5";

const BackgroundAnimation = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      const numParticles = 75;
      const repelDistance = 120;

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle(p));
        }
      };

      p.draw = () => {
        p.background(0);
        particles.forEach((particle) => {
          particle.update();
          particle.edges();
          particle.show();
        });
      };

      class Particle {
        constructor(p) {
          this.p = p;
          this.pos = p.createVector(p.width / 2, p.height); // Start at the bottom center
          this.vel = p.createVector(p.random(-2, 2), p.random(-5, -2)); // Initial upward and outward velocity
          this.acc = p.createVector(0, 0);
        }

        update() {
          let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
          let force = p5.Vector.sub(this.pos, mouse);
          let distance = force.mag();

          if (distance < repelDistance) {
            force.setMag(0.5);
            this.acc.add(force);
          }

          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }

        edges() {
          if (this.pos.x > this.p.width) {
            this.pos.x = this.p.width;
            this.vel.x *= -1;
            this.vel.mult(0.9); // Slow down after hitting the edge
          } else if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1;
            this.vel.mult(0.9); // Slow down after hitting the edge
          }

          if (this.pos.y > this.p.height) {
            this.pos.y = this.p.height;
            this.vel.y *= -1;
            this.vel.mult(0.9); // Slow down after hitting the edge
          } else if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -1;
            this.vel.mult(0.9); // Slow down after hitting the edge
          }
        }

        show() {
          this.p.stroke(255);
          this.p.strokeWeight(2);
          this.p.point(this.pos.x, this.pos.y);
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></div>
  );
};

export default BackgroundAnimation;
