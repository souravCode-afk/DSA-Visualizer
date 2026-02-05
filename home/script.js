import { utils } from "../utils/utility.js";

const algos = document.querySelector('.algos');
const start = document.querySelector('.start');
const sideBar = document.querySelector('.side-bar');
const sideBarOptions = document.querySelector('.side-bar-options');

sideBar.addEventListener('click', () => {
    const style = window.getComputedStyle(sideBarOptions);
    if (style.display == 'none') {
        sideBarOptions.style.display = 'flex';
        sideBar.style.transform = 'rotate(90deg)';
    }
    else {
        sideBarOptions.style.display = 'none';
        sideBar.style.transform = 'rotate(0)';
    }
})

;(function addAlgorithmsInContainer() {
    let content = '';

    utils.algorithms.forEach(algo => {
        content += `<div class="algorithm-card card">
            <h2 class="algo-name card">${algo.name}</h2>
            <p class="algo-complexity card">Complexity: ${algo.complexity}</p>
            <img class="algo-sign card" src="./img/${algo.sign}.png" alt="">
        </div>`
    })

    algos.innerHTML = content;
})();

algos.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        start.click();
    }
})