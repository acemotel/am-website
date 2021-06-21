const tree = (p) => {

    let angle;
    let axiom = "X";
    let sentence = axiom;
    let len = 100;

    let frameCount = 0;
    let rules = [];
    rules[0] = {
        a: "F",
        b: "FF"
    };
    rules[1] = {
        a: "X",
        b: "F+[-F-XF-XF][-XF[+X]][+F-X]"
    };

    p.generate = () => {
        len *= 0.5;
        let nextSentence = "";
        for (let i = 0; i < sentence.length; i++) {
            let curr = sentence.charAt(i);
            let found = false;
            for (let j = 0; j < rules.length; j++) {
                if (curr === rules[j].a) {
                    found = true;
                    nextSentence += rules[j].b;
                    break;
                }
            }
            if (!found) {
                nextSentence += curr;
            }
        }
        sentence = nextSentence;
        p.turtle();
    }

    p.setup = () => {
        angle = p.random(-30, 30);
        p.frameRate(1);
        p.createCanvas(400, 400);
        p.angleMode(p.DEGREES);
        p.stroke(0, 100);
        p.turtle();
    }

    p.draw = () => {
        if (frameCount < 8) {
            if (frameCount < 5) {
                p.generate();
            }
            frameCount++;
        } else {
            p.reset();
            frameCount = 0;
        }
    }

    p.turtle = () => {
        p.background(255);
        p.resetMatrix();
        p.translate(p.width / 2, p.height - 20);
        for (let i = 0; i < sentence.length; i++) {
            let curr = sentence.charAt(i);
            if (curr === "F") {
                p.line(0, 0, 0, -len);
                p.translate(0, -len);
            } else if (curr === "+") {
                p.rotate(angle);
            } else if (curr === "-") {
                p.rotate(-angle);
            } else if (curr === "[") {
                p.push();
            } else if (curr === "]") {
                p.pop();
            }
        }
    }

    p.reset = () => {
        p.background(255);
        sentence = axiom;
        angle = p.random(-30, 30);
        len = 100;
    }
}

export default tree;
