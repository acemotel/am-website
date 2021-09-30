const canvSize = 400;

let squares = [];

setup = () => {
    let canv = createCanvas(canvSize, canvSize, WEBGL);
    canv.parent('squares');
    noStroke();
    setupRects(15);
    console.log(squares);
}

draw = () => {
    if (!window.navhover) {
        background(255, 0);
    }
    fill(255, 0);

    //rotateZ(millis() / 1000);
    squares.forEach((square) => {
        square.toRender && square.render();
    });

}

setupRects = (n) => {
    for (let i = 0; i < n; i++) {
        let size = random(canvSize / 30, canvSize / 12);
        let x = random(canvSize / 30, canvSize / 6);
        let y = random(-canvSize / 3, canvSize / 3);
        let rot = random(500, 1000);
        const square = new Square(x, y, size, rot);
        squares.push(square);
    }
}

noteHit = () => {
    const sIndex = randomIntFromInterval(0, squares.length - 1);
    squares[sIndex].setRender();
}

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Square {
    constructor(x, y, size, rot){
        this.x = x;
        this.y = y;
        this.size = size;
        this.rot = rot;
        this.toRender = false;
        this.opacity = 0;
    }

    render = () => {
        push();
        this.rotateAxis();
        if (this.opacity > 0) {
            fill(0, this.opacity);
            this.opacity -= 1;
        }
        rect(this.x, this.y, this.size, this.size)
        pop();
    }

    rotateAxis = () => {
        const speed = 1.25;
        rotateY(millis() / this.rot * speed);
    }

    setRender = () => {
        this.opacity = 500;
        this.toRender = true;
    }
    
}