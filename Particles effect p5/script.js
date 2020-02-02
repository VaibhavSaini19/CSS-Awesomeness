let NUM_PARTICLES = Math.floor(window.innerWidth / 15);
let particles = [];


class Particle{
    constructor(x, y){
        if(!arguments.length)
            this.pos = createVector(random(width), random(height));
        else
            this.pos = createVector(x, y)
        this.size = 10;
        this.vel = createVector(random(-2, 2), random(-2, 2));
    }
    update(){
        this.checkBoundary();
        this.pos.add(this.vel);
    }
    checkBoundary(){
        if (this.pos.x < 0 || this.pos.x > width){
            this.vel.x *= -1;
        }
        if (this.pos.y < 0 || this.pos.y > height){
            this.vel.y *= -1;
        }
    }
    connect(particles){
        particles.forEach(particle => {
            let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if(d < width/12){
                stroke('rgba(255, 255, 255, 0.25)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        })
    }
    show(){
        noStroke();
        fill('rgba(255, 255, 255, 0.75)')
        circle(this.pos.x, this.pos.y, this.size);
    }
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for(let i=0; i<NUM_PARTICLES; i++){
        particles.push(new Particle());
    }
}

function draw(){
    clear();
    particles.forEach((p, index) => {
        p.update();
        p.show();
        p.connect(particles.slice(index));
    })
}

function mouseClicked(){
    particles.push(new Particle(mouseX, mouseY));
}