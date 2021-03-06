import tree from './sketches/tree.js';
import squares from './sketches/squares.js';
import img_glitch from './sketches/img_glitch.js';

window.navhover = false;

let img_glitch_sketch = new p5(img_glitch, 'img_glitch');
let tree_sketch = new p5(tree, 'tree');
let square_sketch = new p5(squares, 'squares');

const play = () => {
    console.log('click')
    document.getElementById('play').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
    document.getElementById('music_text').style.display = 'block';
}

const stop = () => {
    document.getElementById('stop').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    document.getElementById('music_text').style.display = 'none';
}

const nav_enter = () => {
    window.navhover = true;
}

const nav_out = () => {
    window.navhover = false;
}

document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);

const nav_links = document.querySelectorAll(".nav a");
nav_links.forEach(item => {
    item.addEventListener("mouseenter", nav_enter);
    item.addEventListener("mouseout", nav_out);
});