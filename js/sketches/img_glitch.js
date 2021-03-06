const img_glitch = (p) => {

    let glitch;
    let cnv;

    p.setup = () => {
        cnv = p.createCanvas(900, 550);
        p.imageMode(p.CENTER);
        p.frameRate(12);

        glitch = new Glitch(p);
        p.loadImage('../../assets/imgs/img1.jpeg', function (im) {
            glitch.loadImage(im);
        });
        //glitch.limitStart = 0.3;
    }
    let mx = 0,
        my = 0;

    p.draw = () => {
        p.background(255);
        glitch.resetBytes();

        // if (p.mouseIsPressed) {
        //     glitch.replaceBytes(100, 104);
        // }

        let byte1 = p.random(100,104);
        let byte2 = p.random(100,104);
        //glitch.replaceBytes(byte1, byte2); // swap all decimal byte 100 for 104
        //glitch.replaceBytes(100, 104); // swap all decimal byte 100 for 104
        //glitch.replaceBytes(slider.value()); // swap all decimal byte 100 for 104
        if (window.navhover){
            glitch.randomBytes(1);
        }


        glitch.buildImage();
        p.image(glitch.image, p.width / 2, p.height / 2, p.width, p.height)

    }

}

export default img_glitch;