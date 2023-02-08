let particules = []

for (i = 0; i < 300; i++) {
    let particule = document.createElement('span')
    particule.className = 'snow snow-anim'
    particule.style.setProperty('left', Math.random() * 100 + '%');
    particule.style.setProperty('opacity', Math.random() * 0.8 + 0.2);
    particule.style.setProperty('--time-swing', Math.random() * 2 + 2 + 's');
    particule.style.setProperty('--delay', Math.random() * 14 + 's');
    particule.style.setProperty('--size', Math.random() * 3 + 4 + 'px');
    document.body.append(particule)
    particules.push(particule)
}

function onWindowResize() {
    n_particules = window.innerWidth * window.innerHeight / 6400
    console.log(n_particules)
    particules.forEach(function (p, index) {
        p.style.setProperty('--time-drop', (Math.random() * 5 + 9) * (window.innerHeight / 1000) + 's');
        if (index > n_particules) {
            p.style.setProperty('visibility', 'hidden')
        }
        else {
            p.style.setProperty('visibility', 'visible')
        }
    });
}

window.onresize = onWindowResize;
onWindowResize()

