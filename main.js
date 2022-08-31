function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(350, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill(0, 255, 55);
    rect(20, 20, 50, 50, 15);
    rect(570, 20, 50, 50, 15);
    rect(20, 410, 50, 50, 15);
    rect(570, 410, 50, 50, 15);
    
    fill(0, 255, 221);
    rect(70, 420, 225, 30);
    rect(345, 420, 225, 30);
    rect(70, 30, 225, 30);
    rect(345, 30, 225, 30);
    rect(30, 70, 30, 160);
    rect(30, 250, 30, 160);
    rect(580, 250, 30, 160);
    rect(580, 70, 30, 160);
    
    fill(255, 0, 0);
    rect(295, 410, 50, 50, 15);
    rect(295, 20, 50, 50, 15);
    rect(20, 230, 50, 50, 15);
    rect(570, 230, 50, 50, 15);

    image(video, 80, 70, 480, 340);
}

function take_snap() {
    save('p5.png');
}