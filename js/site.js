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

// check if this element is visible to see if its mobile or not
const imgContainer = document.getElementById("imgContainer");
let isMobile = false;
if (imgContainer.style.display === 'none') {
    isMobile = true;
}

//let img_glitch_sketch = new p5(img_glitch, 'img_glitch');
let tree_sketch = new p5(tree, 'tree');
let square_sketch = new p5(squares, 'squares');

let isPlaying = false;
document.getElementById("play").onclick = () => {
    playTrack();
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        playTrack();
    }
}

const playTrack = () => {
    if (!isPlaying){
        awotb_play();
        if (!isMobile) {
            document.getElementById("squares").style.display = 'block';
        }
        isPlaying = true;
    }
    else {
        awotb_stop();
        if (!isMobile) {
         document.getElementById("squares").style.display = 'none';
        }
        isPlaying = false;
    }
}



const nav = document.getElementsByClassName("am");

if (!isMobile) {
    const imgs = document.getElementsByClassName("imgs");
    

    for (let i = 1; i < nav.length-1; i++) {
        nav[i].addEventListener("mouseover", function () {
            imgs[i - 1].style.display = 'block';
        });
        nav[i].addEventListener("mouseout", function () {
            setTimeout(() => {
                imgs[i - 1].style.display = 'none';
            },50);
        });
    }
}
