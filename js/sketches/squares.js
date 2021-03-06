const squares = (p) => {

    const canvSize = 400;

    let rects = [];
    let speed = 1.5;
    let whichAxis = 'Y';

    p.setup = () => {
        p.createCanvas(canvSize, canvSize, p.WEBGL);
        p.noStroke();
        p.setupRects(15);
        //p.noLoop();

    }

    p.draw = () => {
        if (!window.navhover) {
            p.background(255, 0);
        }
        p.fill(0);

        //rotateZ(millis() / 1000);
        rects.forEach((r) => {
            p.push();
            let c = p.random() < 0.3 ? -1 : 1;
            let rot = r.rot * 1;
            p.rotateAxis(rot);
            p.rect(r.x, r.y, r.size, r.size)
            p.pop();
        });

    }

    p.setupRects = (n) => {
        for (let i = 0; i < n; i++) {
            let size = p.random(canvSize / 30, canvSize / 12);
            let x = p.random(canvSize / 30, canvSize / 6);
            let y = p.random(-canvSize / 3, canvSize / 3);
            let rot = p.random(500, 1000);
            rects.push({
                x: x,
                y: y,
                size: size,
                rot: rot
            });
        }
    }

    p.rotateAxis = (rot) => {
        switch (whichAxis) {
            case 'X':
                p.rotateX(p.millis() / rot * speed);
                break;
            case 'Y':
                p.rotateY(p.millis() / rot * speed);
                break;
            case 'Z':
                p.rotateZ(p.millis() / rot * speed);
                break;
        }
    }
}

export default squares;