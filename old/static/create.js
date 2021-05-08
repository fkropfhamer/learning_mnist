const originalSize = 256;
const scaledSize = 64;
const scaledSize2 = 32;

const random = () => Math.floor(Math.random() * 10)
let randomLabel = random();

const socket = io("http://localhost:8080");

socket.emit("msg", [["test"]]);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const canvas2 = document.getElementById("scaled-canvas");
const ctx2 = canvas2.getContext("2d");

const canvas3 = document.getElementById("scaled-canvas2");
const ctx3 = canvas3.getContext("2d");

drawing = [[]]

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
        ctx2.drawImage(canvas, 0, 0, scaledSize, scaledSize)
        ctx3.drawImage(canvas, 0, 0, scaledSize2, scaledSize2)
    });
}

function clear() {
    drawing = [[]];
    ctx.clearRect(0, 0, 256, 256)
    ctx2.clearRect(0, 0, scaledSize, scaledSize)
    ctx3.clearRect(0, 0, scaledSize2, scaledSize2)
    randomLabel = random();
    p.innerHTML = randomLabel;
}

const button = document.getElementById('button');
button.onclick = () => send();

const button2 = document.getElementById('button2');
button2.onclick = () => clear(); 

const p = document.getElementById('p');
p.innerHTML = randomLabel;


socket.on("saved", () => {
    clear();
})

function send() {
    img64 = getPixelArray(ctx2, scaledSize);
    img32 = getPixelArray(ctx3, scaledSize2);
    
    socket.emit("save", {label: randomLabel, img64, img32});
}

function getPixelArray(ctx, size) {
    const imgd = ctx2.getImageData(0,0,size, size);
    const pix = imgd.data;
    const greyScale = []
    for (let i = 0; i < pix.length; i+=4) {
       /* const red = pix[i];
        const green = pix[i + 1];
        const blue = pix[i + 2]; */
        const alpha = pix[i + 3];
        // pixels.push({red, green, blue, alpha});
        greyScale.push(alpha);
    }
    return greyScale;
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