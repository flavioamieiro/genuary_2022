let MAX_SIDE = 100;
//let hu_choices = [160, 52, 190, 300, 345];
let hu_choices = [52, 160, 300];

function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, MAX_SIDE, 1);

    let hu = random(hu_choices);

    for (let i=0; i < 10000; i++) {
        let side = random(1, MAX_SIDE);
        let x = random(0-side, width);
        let y = random(0-side, height);
        let c = color(hu, 100, side, 0.2);
        stroke(c);
        fill(c);
        rect(x, y, side);
    }
}

function draw() {
}
