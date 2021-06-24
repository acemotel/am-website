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
//let square_sketch = new p5(squares, 'squares');

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

const imgs = document.getElementsByClassName("imgs");

var nav = document.getElementsByClassName("am");
console.log(nav);
for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function() {
    console.log("Clicked index: " + i);
  })
}


// let amCode = document.getElementById("code");
// // Randomly generate the code AMxxx
// setInterval(() => {
//     let value = Math.floor(100 + Math.random() * 900);
//     amCode.innerHTML = "AM" + value;
// }, 100);

// give each element a random skew
// let elementSkew = document.getElementsByClassName("am");
// [].forEach.call(elementSkew, function (el) {
//     let valueX = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
//     let valueY = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
//     el.style.transform = `skew(${valueX}deg, ${valueY}deg)`;
// });

let tree_sketch = new p5(tree, 'tree');

// document.getElementById("play").addEventListener("click", play);
// document.getElementById("stop").addEventListener("click", stop);

// const nav_links = document.querySelectorAll(".nav a");
// nav_links.forEach(item => {
//     item.addEventListener("mouseenter", nav_enter);
//     item.addEventListener("mouseout", nav_out);
// });
