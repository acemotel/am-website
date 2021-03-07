const img_glitch = (p) => {

    let glitch;
    let cnv;

    p.setup = () => {
        cnv = p.createCanvas(900, 550);
        p.imageMode(p.CENTER);
        p.frameRate(12);

        glitch = new Glitch(p);
        p.loadImage('https://lh3.googleusercontent.com/fife/ABSRlIqRIdOsu-c_ks9oz3AAPcaad1wfwBEcL5WGzI26Y5mwBdZHUk635230g-55V1g6Yzio8prvVMVJUZhI8GflaL9qfDc0XVEPwoc50IXCyB1QJnZ1qlZ51YJSV7s2vHBoKHHLxtZSjkD-sKTgoGt7Lw_-mEa4FBqpFxc_4XrSlzBLCbsjsGBN_mR28j_MTq9qEeLf_2iRimGSeGiNAa5iB_X1OYgofOAG0t6SwkIrFPfsdz7cxOMt7dHxO49iRUeUCMppXUp3EUBiQed1fBlfxZLd-GE1gAGEGp1BbSN7TR_Q_aRIuKvnEXhJKEcGJWrYMaKGi2dwQ1xCbX6CKmwCWoOQQZfyyoUAP7M-pRymDZsh0EnF-ZnNpW8iM6GnpI-wMApccsElTP1ZWxavuTHIicym2IEWxrjtFto9M_9UZxiU8cr3d6H7FfPP_2E8nYVYm-cQZr6qLWQFhQlOfAujuU3ZnflQPAypmylNXZj0DxRqiJ2kVVIKb-DaXVLbBCDVacah1CMVc2ErA7NFY4U9cY2yGlU9nUjgR-BmZoiLNNYD-Qq9Z8ym31Ss8ETHs15R_TIhvnlfgbIc8Kyx8NNEQ7j3J2Zh5eUKerBQL3ccLjYAxBvOL7q_klzXDRez6G2v4mDWZIilbwfqfO27fjiIuzQUqgCRw2nXaqE0_4nuIDwVfYMUuAdGXucU8OHywsqWz-KX9MjUtB7QIu96jvEtC2POgr03uyzksVQ=w2560-h1297-ft', function (im) {
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
        if (window.navhover || p.random() < 0.05){
            glitch.randomBytes(1);
        }


        glitch.buildImage();
        p.image(glitch.image, p.width / 2, p.height / 2, p.width, p.height)

    }

}

export default img_glitch;