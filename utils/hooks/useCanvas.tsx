import React, { useEffect, useRef } from "react";

const useCanvas = () => {
  const cvs = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    cvs.current = document.querySelector("canvas");
    cvs.current.width = window.innerWidth;
    cvs.current.height = window.innerHeight * 0.5;
    window.addEventListener("resize", () => {
      cvs.current.width = window.innerWidth;
      cvs.current.height = window.innerHeight * 0.5;
    });

    return () =>
      window.removeEventListener("resize", () => {
        cvs.current.width = window.innerWidth;
        cvs.current.height = window.innerHeight * 0.5;
      });
  }, []);

  return cvs;
};

export const getRandomInt = (max: number, min = 1) =>
  Math.floor(Math.random() * (max - min) + min);

export class Star {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  ctx: CanvasRenderingContext2D;
  speed: number;
  multiplier: number;
  multiplierSpeed: number;
  wait: number;
  waiting: boolean;
  constructor(
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D,
    maxRadius: number,
    speed: number,
    wait: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = maxRadius;
    this.ctx = ctx;
    this.speed = speed / 100;
    this.multiplierSpeed = (speed * 2) / 100;
    this.multiplier = 1;
    this.wait = wait;
    this.waiting = false;
  }

  draw = () => {
    this.ctx.strokeStyle = "hsl(34, 30%, 97%)";
    this.ctx.fillStyle = "hsl(34, 30%, 97%)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.moveTo(this.x - this.radius / 2, this.y);

    this.ctx.lineTo(this.x, this.y - this.radius * this.multiplier);
    this.ctx.lineTo(this.x + this.radius / 2, this.y - this.radius / 2);
    this.ctx.lineTo(this.x + this.radius * this.multiplier, this.y);
    this.ctx.lineTo(this.x + this.radius / 2, this.y + this.radius / 2);

    this.ctx.lineTo(this.x, this.y + this.radius * this.multiplier);
    this.ctx.lineTo(this.x - this.radius / 2, this.y + this.radius / 2);
    this.ctx.lineTo(this.x - this.radius * this.multiplier, this.y);
    this.ctx.lineTo(this.x - this.radius / 2, this.y - this.radius / 2);

    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.closePath();

    this.update();
  };

  update = () => {
    if (this.radius === 0) {
      if (!this.waiting) {
        this.waiting = true;
        setTimeout(() => {
          this.waiting = false;
          this.radius = 0.01;
          this.speed = -this.speed;
          this.multiplierSpeed = -this.multiplierSpeed;
        }, this.wait);
      }
      return;
    }
    if (this.radius > this.maxRadius) {
      this.speed = -this.speed;
      this.multiplierSpeed = -this.multiplierSpeed;
    }
    this.multiplier += this.multiplierSpeed;
    this.radius = this.radius + this.speed < 0 ? 0 : this.radius + this.speed;
  };
}

export const animate = (ctx: CanvasRenderingContext2D, stars: Star[]) => () => {
  requestAnimationFrame(animate(ctx, stars));
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.5);
  stars.forEach((star) => star.draw());
};

export default useCanvas;
