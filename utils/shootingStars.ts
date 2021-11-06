class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  trailLengthDelta: number;
  isSpawning: boolean;
  isDying: boolean;
  isDead: boolean;

  constructor(x: number, y: number, speed: number, direction: number) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(direction) * speed;
    this.vy = Math.sin(direction) * speed;
    this.opacity = 0;
    this.trailLengthDelta = 0;
    this.isSpawning = true;
    this.isDying = false;
    this.isDead = false;
  }

  getSpeed = () => {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  };

  setSpeed = (speed: number) => {
    let heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  getHeading = () => {
    return Math.atan2(this.vy, this.vx);
  };

  setHeading = (heading: number) => {
    let speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  update = () => {
    this.x += this.vx;
    this.y += this.vy;
  };
}

export default class ShootingStar {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private shootingStars: Particle[];
  private shootingStarSpeed: { min: number; max: number };
  private shootingStarOpacityDelta: number;
  private trailLengthDelta: number;
  private shootingStarEmittingInterval: { min: number; max: number };
  private shootingStarLifeTime: number;
  private maxTrailLength: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.shootingStars = [];
    this.shootingStarSpeed = {
      min: 15,
      max: 20,
    };
    this.shootingStarOpacityDelta = 0.01;
    this.trailLengthDelta = 0.01;
    this.shootingStarEmittingInterval = { min: 500, max: 1500 };
    this.shootingStarLifeTime = 500;
    this.maxTrailLength = 300;
  }

  private lineToAngle = (
    x1: number,
    y1: number,
    length: number,
    radians: number
  ) => {
    let x2 = x1 + length * Math.cos(radians),
      y2 = y1 + length * Math.sin(radians);
    return { x: x2, y: y2 };
  };

  private randomRange = (min: number, max: number) => {
    return min + Math.random() * (max - min);
  };

  private degreesToRads = (degrees: number) => {
    return (degrees / 180) * Math.PI;
  };

  private createShootingStar = () => {
    const shootingStar = new Particle(
      this.randomRange(this.width / 2, this.width),
      this.randomRange(0, this.height / 2),
      0,
      0
    );
    shootingStar.setSpeed(
      this.randomRange(this.shootingStarSpeed.min, this.shootingStarSpeed.max)
    );
    shootingStar.setHeading(this.degreesToRads(this.randomRange(120, 175)));
    this.shootingStars.push(shootingStar);
  };

  private killShootingStar = (shootingStar: Particle) => {
    setTimeout(() => {
      shootingStar.isDying = true;
    }, this.shootingStarLifeTime);
  };

  private drawShootingStar = (particle: Particle) => {
    const x = particle.x,
      y = particle.y,
      currentTrailLength = this.maxTrailLength * particle.trailLengthDelta,
      pos = this.lineToAngle(x, y, -currentTrailLength, particle.getHeading());

    this.context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;

    //trail
    this.context.fillStyle = `rgba(255, 221, 157, ${particle.opacity})`;
    this.context.beginPath();
    this.context.moveTo(x - 1, y - 1);
    this.context.lineTo(pos.x, pos.y);
    this.context.lineTo(x + 1, y + 1);
    this.context.closePath();
    this.context.fill();
  };

  private update = () => {
    this.context.clearRect(0, 0, this.width, this.height);

    this.shootingStars.forEach((shootingStar) => {
      if (shootingStar.isSpawning) {
        shootingStar.opacity += this.shootingStarOpacityDelta;
        if (shootingStar.opacity >= 1) {
          shootingStar.isSpawning = false;
          this.killShootingStar(shootingStar);
        }
      }
      if (shootingStar.isDying) {
        shootingStar.opacity -= this.shootingStarOpacityDelta;
        if (shootingStar.opacity <= 0) {
          shootingStar.isDying = false;
          shootingStar.isDead = true;
        }
      }
      shootingStar.trailLengthDelta += this.trailLengthDelta;

      shootingStar.update();
      if (shootingStar.opacity > 0) {
        this.drawShootingStar(shootingStar);
      }
    });

    //Delete dead shooting shootingStars
    this.shootingStars.forEach((shootingStar, index) => {
      if (shootingStar.isDead) {
        this.shootingStars.splice(index, 1);
      }
    });

    requestAnimationFrame(this.update);
  };

  public defineSize = () => {
    this.canvas.width = this.width = window.innerWidth;
    this.canvas.height = this.height = window.innerHeight;
  };

  public start = () => {
    this.update();
    setInterval(
      this.createShootingStar,
      this.randomRange(
        this.shootingStarEmittingInterval.min,
        this.shootingStarEmittingInterval.max
      )
    );
  };
}
