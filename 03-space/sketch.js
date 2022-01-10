let NUM_PLANETS = 5;
let planets = [];

class Planet {
    constructor(radius, orbit_radius, speed, color_) {
        this.radius = radius;
        this.orbit_radius = orbit_radius;
        this.speed = speed;
        this.color = color(color_);
        this.angle = random(0, TWO_PI);
    }

    update() {
        this.angle += this.speed;
    }

    draw() {
        push();
        let x = this.orbit_radius * sin(this.angle);
        let y = this.orbit_radius * cos(this.angle);
        noStroke();
        fill(this.color);
        translate(width/2, height/2);
        circle(x, y, this.radius);
        pop();
    }

}

function setup() {
    createCanvas(800, 800);
    colorMode(HSL);
    background(0, 0, 0, 1);

    stroke(0, 0, 1, 1);
    fill(0, 0, 1, 1);

    let sun = new Planet(80, 0, 0, color(50, 100, 60, 1));

    palette = [
        color(41, 66, 56),
        color(17, 75, 41),
        color(28, 100, 76),
        color(89, 30, 63),
        color(207, 71, 69),
        color(182, 45, 57),
        color(78, 34, 45),
        color(23, 26, 40),
        color(329, 87, 86),
        color(329, 36, 37),

    ]

    planets.push(sun);

    for(let i=0; i<NUM_PLANETS; i++) {
        let r = random(5, 15);
        let offset = (noise(i) * 0.2) - 0.5;
        let orbit_r = sun.radius * (i+1) + offset;
        let speed = random(0, 0.01);
        planets.push(new Planet(r, orbit_r, speed, random(palette)));
    }

    frameRate(30)
    createLoop({duration:10, gif:true})
}

function draw() {
    clear();
    background(0);
    for (let i=0; i<planets.length; i++) {
        let planet = planets[i];
        planet.update();
        planet.draw();
    }
}
