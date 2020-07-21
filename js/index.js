// функция y = sin(x), для любого значения x, возвращает значения, находящиеся в диапазоне от -1 до 1.
// В результате, значения, которые мы назначаем cy, будут находиться в диапазоне от centreY - 1 до centreY + 1
// Операция умножения функции на константу называют масштабированием.

// verticalPositionInTheSky = sunsVerticalPositionAt( [time] );

const circleLeft = document.querySelector('.circleLeft');
const circleCenter = document.querySelector('.circleCenter');
const circleRight = document.querySelector('.circleRight');

let circles = [circleLeft, circleCenter, circleRight];

let currentAnimationTime = 0;
const centreY = 75;
const amplitude = 50;

function runAnimate() {
    currentAnimationTime += 0.09;

    circles.forEach((item, index) => {
        if(index === 0) item.setAttribute('cy', centreY + Math.sin(currentAnimationTime) * amplitude);
        if(index === 1) item.setAttribute('cy', centreY + Math.sin(currentAnimationTime - 1) * amplitude);
        if(index === 2) item.setAttribute('cy', centreY + Math.sin(currentAnimationTime - 2) * amplitude);
    })

    requestAnimationFrame(runAnimate);
}

runAnimate();
