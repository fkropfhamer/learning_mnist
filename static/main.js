const originalSize = 256;
const scaledSize = 28

const test_image = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 18, 18, 18, 126, 136, 175, 26, 166, 255, 247, 127, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 30, 36, 94, 154, 170, 253, 253, 253, 253, 253, 225, 172, 253, 242, 195, 64, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 49, 238, 253, 253, 253, 253, 253, 253, 253, 253, 251, 93, 82, 82, 56, 39, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 18, 219, 253, 253, 253, 253, 253, 198, 182, 247, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 80, 156, 107, 253, 253, 205, 11, 0, 43, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 1, 154, 253, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 253, 190, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 190, 253, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 241, 225, 160, 108, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 240, 253, 253, 119, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 186, 253, 253, 150, 27, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 93, 252, 253, 187, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 249, 253, 249, 64, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 130, 183, 253, 253, 207, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 148, 229, 253, 253, 253, 250, 182, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 114, 221, 253, 253, 253, 253, 201, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 23, 66, 213, 253, 253, 253, 253, 198, 81, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 18, 171, 219, 253, 253, 253, 253, 195, 80, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 55, 172, 226, 253, 253, 253, 253, 244, 133, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 136, 253, 253, 253, 212, 135, 132, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

const socket = io("http://localhost:8080");

socket.emit("msg", [["test"]]);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const canvas2 = document.getElementById("scaled-canvas");
const ctx2 = canvas2.getContext("2d");

// ctx2.scale(scaledSize/originalSize, scaledSize/originalSize)

drawing = [[]]

/*
for (let i = 0; i < originalSize; i++) {
    drawing[i] = [];
    for (let j = 0; j < originalSize; j++) {
        drawing[i][j] = 0;
    }
}*/

// draw2(test_image)

let mouseIsDown = false;

canvas.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (mouseIsDown) {
        drawing[drawing.length - 1].push({x, y});
        draw();
    }
});

window.addEventListener("mousedown", () => {
    mouseIsDown = true;
});

window.addEventListener("mouseup", () => {
    drawing.push([])
    mouseIsDown = false;
})

function draw() {
    drawing.forEach(d => {
        drawPoints(ctx, d)
        //drawPoints(ctx2, d)
        ctx2.drawImage(canvas, 0, 0, 28, 28)
    });
    
    /*drawing.forEach((a, i) => {
        next = drawing[i + 1];
        // console.log(a, next);
        if (next) {
            if (a.pen && next.pen) {
                ctx.lineWidth = 20;
                ctx2.lineWidth = 40;
                //console.log("drawing");
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.fillStyle = "black";
                ctx.quadraticCurveTo(next.x, next.y);
                ctx.stroke();

                ctx2.beginPath();
                ctx2.moveTo(a.x, a.y);
                ctx2.fillStyle = "black";
                ctx2.quadraticCurveTo(next.x, next.y);
                ctx2.stroke();
                
            }
        }
    });*/
}

function clear() {
    drawing = [[]];
    ctx.clearRect(0, 0, 256, 256)
    ctx2.clearRect(0, 0, 28, 28)
}

const button = document.getElementById('button');
button.onclick = () => getPixelArray();

const button2 = document.getElementById('button2');
button2.onclick = () => clear(); 

const p = document.getElementById('p');

socket.on("classified", data => {
    console.log(data);
    p.innerHTML = `label: ${data.label}, probability: ${data.probability}`; 
})

function getPixelArray() {
    const imgd = ctx2.getImageData(0,0,scaledSize, scaledSize);
    const pix = imgd.data;
    // console.log(pix);
    //const pixels = []
    const greyScale = []
    for (let i = 0; i < pix.length; i+=4) {
       /* const red = pix[i];
        const green = pix[i + 1];
        const blue = pix[i + 2]; */
        const alpha = pix[i + 3];
        // pixels.push({red, green, blue, alpha});
        greyScale.push(alpha);
    }
    
    greyScale.forEach(x => {
    //    console.log(x)
    })
    socket.emit("classify", greyScale);
}


function draw2(drawing) {
    for (let i = 0; i < drawing.length; i++) {
        for (let j = 0; j < drawing[i].length; j++) {
            if (drawing[i][j]) {
                ctx2.fillStyle = "black";
                ctx2.fillRect(j, i, 1, 1);
            }
        }
    }
}

function drawPoints(ctx, points) {
    // draw a basic circle instead
    if (points.length < 6) {
        const b = points[0];
        ctx.beginPath(), ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0), ctx.closePath(), ctx.fill();
        return
    }
    ctx.beginPath(), ctx.moveTo(points[0].x, points[0].y);
    // draw a bunch of quadratics, using the average of two points as the control point
    for (i = 1; i < points.length - 2; i++) {
        const c = (points[i].x + points[i + 1].x) / 2;
        const d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d)
    }
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y), ctx.stroke()
}