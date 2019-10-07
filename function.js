/** ================== Credits ============================
Author: M_Rahman
Source: RexVel Web Solution
URL : https://rexvel.com
Blog: https://blog.rexvel.com 
( Note: Don't Change credit area. It's completely free. )
===================== Thank You!! ========================**/
document.addEventListener('DOMContentLoaded', function () {
    let gototop = document.querySelector('.sticky');
    let body = document.documentElement;

    window.addEventListener('scroll', check);

    function check() {
        pageYOffset >= 500 && gototop.classList.add('visible');
        pageYOffset < 500 && gototop.classList.remove('visible');
    }


    gototop.onclick = function() {
        animate({
            duration: 700,
            timing: gogototopEaseOut,
            draw: progress =>
                body.scrollTop = (body.scrollTop * (1 - progress / 7))
        });
    }

    let circ = timeFraction =>
        1 - Math.sin(Math.acos(timeFraction > 1 ? timeFraction = 1 : timeFraction));

    let makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction);
    let gogototopEaseOut = makeEaseOut(circ);
});

function animate(options) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;
        timeFraction > 1 && (timeFraction = 1);

        let progress = options.timing(timeFraction)

        options.draw(progress);
        timeFraction < 1 && requestAnimationFrame(animate);
    });
}


/** ================== Credits ============================
Author: M_Rahman
Source: RexVel Web Solution
URL : https://rexvel.com
Blog: https://blog.rexvel.com 
( Note: Don't Change credit area. It's completely free. )
===================== Thank You!! ========================**/