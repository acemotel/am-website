// array containg colours for each wave form
const waveColours = ['#000000', '#54aaa4', '#c780bd']
console.log(waveData);
function setup() {
    const canv = createCanvas(250, 400);
    canv.parent('wave');
}

function draw() {
    clear();
    background(255, 0);

    const y = height / 2;
    translate(0, y);

    // for each wave data in the array, draw it with a matching colour
    for (let i = 0; i < waveData.length; i++) {
        drawWave(waveData[i].getValue(), waveColours[0]);
    }
}

const drawWave = (data, colour) => {
    const size = width / data.length;
    push();
    stroke(colour);
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < data.length; i++) {
        let scale = i / data.length * 2;
        const scaleRes = scale > 1 ? 2 - scale : scale;
        vertex(i * size, data[i] * 5000 * scaleRes);
    }
    endShape();
    pop();
}