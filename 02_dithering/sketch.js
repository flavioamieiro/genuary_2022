let CELL_SIZE = 5;
let NOISE_SCALE = 0.01


function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    let c = color(340, 100, 80, 1);
    fill(c);
    stroke(c);
}

function draw_cell(x, y, bright) {
    let size = map(bright, 0, 1, 0, CELL_SIZE);
    circle(x, y, size);
}

function draw() {
    clear();
    background(color(0, 0, 0, 1));
    for (let i=0; i < width; i+= CELL_SIZE) {
        for (let j=0; j < height; j += CELL_SIZE) {
            let bright = noise(i * NOISE_SCALE, j * NOISE_SCALE, frameCount * 5 * NOISE_SCALE);
            draw_cell(i, j, bright);
        }
    }
}
