import tree from './sketches/tree.js';
import squares from './sketches/squares.js';
import img_glitch from './sketches/img_glitch.js';

const options = {
	"cursorOuter": "circle-basic",
	"hoverEffect": "circle-move",
	"hoverItemMove": false,
	"defaultCursor": false,
	"outerWidth": 1,
	"outerHeight": 1
      };
magicMouse(options);

//let img_glitch_sketch = new p5(img_glitch, 'img_glitch');


let isPlaying = false;
document.getElementById("play").onclick = () => {
    if (!isPlaying){
        awotb_play();
        isPlaying = true;
    }
    else {
        awotb_stop();
        isPlaying = false;
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (!isPlaying){
            awotb_play();
            isPlaying = true;
        }
        else {
            awotb_stop();
            isPlaying = false;
        }
    }
}

const imgs = document.getElementsByClassName("imgs");

const nav = document.getElementsByClassName("am");
const squaresel = document.getElementById("squares");

for(let i = 1; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function () {
        imgs[i-1].style.display = 'block';
        if (i == 3) {
            squaresel.style.display = 'block';
        }
        // for (let j = 0; j <= i; j++) {
        //     imgs[j].style.display = 'block';
        // }
    });
    nav[i].addEventListener("mouseout", function () {
        // for (let j = 0; j <= i; j++) {
        //     imgs[j].style.display = 'none';
        // }
        imgs[i-1].style.display = 'none';
        squaresel.style.display = 'none';
    });
}


function play() {
    
}

let amCode = document.getElementById("code");
// Randomly generate the code AMxxx
setInterval(() => {
    let value = Math.floor(100 + Math.random() * 900);
    amCode.innerHTML = "AM" + value;
}, 100);

// give each element a random skew
[].forEach.call(nav, function (el) {
    let valueX = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    let valueY = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    el.style.transform = `skew(${valueX}deg, ${valueY}deg)`;
});


let tree_sketch = new p5(tree, 'tree');
let square_sketch = new p5(squares, 'squares');

// document.getElementById("play").addEventListener("click", play);
// document.getElementById("stop").addEventListener("click", stop);

// const nav_links = document.querySelectorAll(".nav a");
// nav_links.forEach(item => {
//     item.addEventListener("mouseenter", nav_enter);
//     item.addEventListener("mouseout", nav_out);
// });
