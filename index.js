let inc = .1;
let scl = 25;
let cols, rows;
let particles2 = []
let particles = [];
let flowfield = [];
let flowfield2 = [];

zoff = 0;

function setup() {
    createCanvas (windowWidth - 20, windowHeight - 20);
    // createCanvas(1430, 880);
    background (0);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);
    flowfield2 = new Array(cols * rows);
    for (let i = 0; i < 250; i++) {
        particles [i] = new Particle();
        }
    for (let i = 0; i < 250; i++) {
        particles2 [i] = new Particle2();
        }
}

function draw() {
    // background(0);

//FIRST FLOW FIELD
    let yoff = 0;

    for (let x = 0; x < cols; x++) {
        let xoff = 0;
        for (let y = 0; y < rows; y++) {
            let indx = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2;
            let v = p5.Vector.fromAngle(angle);
            if (keyCode === RIGHT_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2 + 90;
                v = p5.Vector.fromAngle(angle);
            } else if (keyCode === DOWN_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2;
                v = p5.Vector.fromAngle(angle);
            } else if (keyCode === LEFT_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2 - 90;
                v = p5.Vector.fromAngle(angle);
            }


            flowfield[indx] = v;
            xoff += inc;

            v.setMag(.3);
            stroke(200, 100);
            strokeWeight(1);


            //SHOW VECTORS
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // line(0, 0, scl, 0);
            // pop();
            
    }
        yoff += inc;
        zoff += .00001;
    }

//  SECOND FLOWFIELD


    for (let x = 0; x < cols; x++) {
        let xoff = 0;
        for (let y = 0; y < rows; y++) {
            let indx = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2;
            let v = p5.Vector.fromAngle(angle);
            if (keyCode === RIGHT_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2 + 90;
                v = p5.Vector.fromAngle(angle);
            } else if (keyCode === DOWN_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2;
                v = p5.Vector.fromAngle(angle);
            } else if (keyCode === LEFT_ARROW) {
                angle = noise(xoff, yoff, zoff) * TWO_PI * 3.2 - 90;
                v = p5.Vector.fromAngle(angle);
            }
            flowfield2[indx] = v;
            xoff += inc;

            v.setMag(.3);
            stroke(200, 100);
            strokeWeight(1);
    }
        yoff += inc;
        zoff += .00001;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
        particles[i].edges ();
    }

    for (let i = 0; i < particles2.length; i++) {
        particles2[i].follow(flowfield2);
        particles2[i].update();
        particles2[i].show();
        particles2[i].edges ();
        }

} 

    function mousePressed() {

            for (let i = 0; i < 250; i++) {
                particles [i] = new Particle();
                    }
            for (let i = 0; i < 250; i++) {
                particles2 [i] = new Particle2();
                    }
    }

    function keyPressed () {
        if (keyCode === UP_ARROW) {
            background(1);
        } 
    }

    function doubleClicked() {
        noLoop();
    }
