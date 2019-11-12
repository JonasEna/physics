let leon, canvas, ctx;

const sw = 100;
const sh = 500;
const pixelRatio = 1;

function init() {
    canvas = document.createElement('canvas');
    document.getElementById('enander-static').appendChild(canvas);
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    // canvas.style.border = '1px solid #FFF'; // temporary to see placement

    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        // text: 'E\nN\nA\nN\nD\nE\nR',
        text: 'E\nN\nA\nN\nD\nE\nR',
        color: ['#FFFFFF'],
        size: 60,
        weight: 400,
        tracking: 6,
        leading: 2,
        align: 'center'
    });

    requestAnimationFrame(animate);

    let i, total = leon.drawing.length;
    let letterSpeed = 0;
    let letterSpeedSpread = 0.1;

    // See https://greensock.com/docs/v2/Easing for ease options

    for (i = 0; i < total; i++) {
        TweenMax.fromTo(leon.drawing[i], letterSpeed, {
            value: 0
        }, {
            delay: i * 0,
            value: 1,
            ease: Power2.easeOut
        });
    }
}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;

    leon.position(x, y);

    leon.draw(ctx);
}

window.onload = () => {
    init();
};