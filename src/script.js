'use strict';

import { codeinfo } from "./code-info/info.js";

const nav = document.querySelector('nav');
const leftNav = nav.querySelector('.left-nav');
const hamBar = nav.querySelector('.hambar');

const actions = document.querySelector('.actions');
const parts = actions.querySelectorAll('.parts');
const rangeInputs = parts[1].querySelectorAll('[type="range"]');
const arraySizeInput = actions.querySelector('.array-size');
const algoChoices = actions.querySelector('.algo');
const runBtns = actions.querySelectorAll('.run');

const board = document.querySelector('.board');
const barSpace = document.querySelector('.bar-space');

hamBar.addEventListener('click', () => {
    leftNav.classList.toggle('hidden');
    hamBar.classList.toggle('rotate');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        leftNav.classList.add('hidden');
        hamBar.classList.remove('rotate');
    }
    running = false;
    makeAllBarDefaultColor();
    setMaxArrayCount();
})

// speed
let transitionSpeed = 400; // ms
let shuffleSpeed = 400; // ms
let speedTimeout;
let running = false;

// action buttons click eventlistener
actions.addEventListener('click', (e) => {
    // drop down
    if (e.target.classList.contains('drop-down')) {
        e.target.classList.toggle('rotate');

        const extraRun = e.target.previousElementSibling;
        extraRun.classList.toggle('hidden');

        parts.forEach(part => { part.classList.toggle('hidden'); });
    }

    // shuffle
    if (e.target.classList.contains('shuffle')) {
        clearTimeout(speedTimeout);

        running = false;
        makeAllBarDefaultColor();

        barArray.forEach(bar => {
            bar.style.transition = `transform ${shuffleSpeed}ms`;
        })

        shuffleArray();

        speedTimeout = setTimeout(() => {
            barArray.forEach(bar => {
                bar.style.transition = `none`;
            })
        }, shuffleSpeed);
    }

    // increase duplicates
    if (e.target.classList.contains('inc-dup')) {
        running = false;
        makeAllBarDefaultColor();
        increaseDuplicates();
    }

    // create array
    if (e.target.classList.contains('create')) {
        running = false;
        makeAllBarDefaultColor();
        CreateArray(+arraySizeInput.value);
    }

    // run
    if (e.target.classList.contains('run')) {
        if (!running) {
            // which algo
            let algoType = algoChoices.value;

            if (algoType != 'Algorithms') {
                runBtns.forEach(btn => {
                    btn.innerHTML = 'Stop';
                });
            }

            switch (algoType) {
                case 'bubble': BubbleSort(); break;
                case 'selection': SelectionSort(); break;
                case 'insertion': InsertionSort(); break;
                case 'merge': MergeSort(); break;
                case 'quick': QuickSort(); break;
                case 'heap': HeapSort(); break;
                case 'shell': ShellSort(); break;
                case 'bogo': BogoSort(); break;
                case 'gnome': GnomeSort(); break;
                case 'pancake': PancakeSort(); break;
                case 'cocktail': CocktailSort(); break;
                case 'odd even': OddevenSort(); break;
            }
        }
        else {
            runBtns.forEach(btn => {
                btn.innerHTML = 'Run';
            });

            running = false;
            makeAllBarDefaultColor();
        }
    }
})

// action ranges input eventlistener
function updateRangeInfo(element) {
    const sibling = element.nextElementSibling;
    sibling.innerHTML = element.className === 'speed' ? `Speed ${+element.value * 0.25}x` : `Array Size ${element.value}`;

    if (element.className == 'array-size') {
        running = false;
        makeAllBarDefaultColor();
        CreateArray(+element.value);
    }
    if (element.className == 'speed') {
        transitionSpeed = 1600 / +element.value;
    }
}

rangeInputs.forEach(range => {
    range.addEventListener('input', () => {
        updateRangeInfo(range);
    })
})

////////////////////////////////////////////////////////////
let barArray = [];

// set the maxarray count
function setMaxArrayCount() {
    let availableWidth = board.clientWidth - window.innerWidth * 0.1;
    barSpace.style.width = `${availableWidth}px`;

    let count = Math.trunc(availableWidth / 15);
    arraySizeInput.setAttribute('max', `${count}`);
    arraySizeInput.value = Math.max(Math.trunc(count / 2), 10);
    arraySizeInput.nextElementSibling.innerHTML = `Array Size ${Math.max(Math.trunc(count / 2), 10)}`;
    CreateArray(+arraySizeInput.value);
}
setMaxArrayCount();

// create array 
function CreateArray(size) {
    let availableWidth = board.clientWidth - window.innerWidth * 0.1;
    barSpace.style.width = `${availableWidth}px`;

    let barWidth = Math.trunc(availableWidth / size) - 5;
    barWidth = barWidth > 45 ? 45 : barWidth;
    let addValue = (barWidth >= 20) ? true : false;


    let content = '';
    for (let i = 1; i <= size; i++) {
        content += `<div class="bar" width="${barWidth}" data-val="${i}">${addValue ? i : ''}</div>`;
    }
    barSpace.innerHTML = content;
    barSpace.style.width = `${size * barWidth + (size - 1) * 5}px`;

    barArray = [...barSpace.querySelectorAll('.bar')];
    shuffleArray();
    displayBars();
}

function displayBars() {
    barArray.forEach((bar, ind) => {
        let val = +bar.dataset.val;
        bar.style.height = `${val / barArray.length * 270 + 30}px`;
        bar.style.width = `${+bar.getAttribute('width')}px`;
        bar.style.transform = `translateX(${(bar.clientWidth + 5) * ind}px)`;
        bar.setAttribute('data-x', `${(bar.clientWidth + 5) * ind}`);
    })
}

// increase duplicate
function increaseDuplicates() {
    for (let i = 0; i < barArray.length; i++) {
        let r1 = Math.trunc(Math.random() * barArray.length);
        let newVal = Math.trunc(Math.random() * barArray.length) + 1;
        let addValue = +barArray[r1].getAttribute('width') >= 20 ? true : false;

        barArray[r1].setAttribute('data-val', `${newVal}`);
        barArray[r1].innerHTML = addValue ? newVal : '';
    }
    displayBars();
}

// shuffle
function shuffleArray() {
    for (let i = 0; i < barArray.length * 5; i++) {
        let r1 = Math.trunc(Math.random() * barArray.length);
        let r2 = Math.trunc(Math.random() * barArray.length);
        [barArray[r1], barArray[r2]] = [barArray[r2], barArray[r1]];
    }
    displayBars();
}

///////////////////////////////////////////////////////////////

function swap(ind1, ind2) {
    if (!running) return;

    let tem1 = +barArray[ind1].dataset.x;
    let tem2 = +barArray[ind2].dataset.x;

    [barArray[ind1], barArray[ind2]] = [barArray[ind2], barArray[ind1]];
    barArray[ind1].setAttribute('data-x', tem1);
    barArray[ind2].setAttribute('data-x', tem2);

    barArray[ind1].style.transition = `transform ${transitionSpeed}ms`;
    barArray[ind1].style.transform = `translateX(${tem1}px)`;
    barArray[ind1].style.zIndex = `9`;


    barArray[ind2].style.transition = `transform ${transitionSpeed}ms`;
    barArray[ind2].style.transform = `translateX(${tem2}px)`;
    barArray[ind2].style.zIndex = `9`;

    setTimeout(() => {
        barArray[ind1].style.zIndex = `0`;
        barArray[ind1].style.transition = 'none';
        barArray[ind2].style.zIndex = `0`;
        barArray[ind2].style.transition = 'none';
    }, transitionSpeed);
}

function colorBar(ind, type) {
    barArray[ind].style.background = `var(--bg-bar-type-${type})`;
}

/////////////////////////////////////

async function SortFinishingAnimation() {
    let cnt = Math.trunc(barArray.length * 0.1);

    for (let i = 0; i < cnt; i++) {
        colorBar(i, 4);
        await givePromise(600 / barArray.length);
    }
    for (let i = cnt; i < barArray.length; i++) {
        colorBar(i, 4);
        colorBar(i - cnt, 1);
        await givePromise(600 / barArray.length);
    }
    for (let i = barArray.length - cnt; i < barArray.length; i++) {
        colorBar(i, 1);
        await givePromise(600 / barArray.length);
    }
    makeAllBarDefaultColor();
}

function givePromise(time) {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, time);
    })
}

function makeAllBarDefaultColor() {
    for (let i = 0; i < barArray.length; i++) {
        colorBar(i, 1);
    }

    runBtns.forEach(btn => {
        btn.innerHTML = 'Run';
    });
}

function getValue(i) {
    return +barArray[i].dataset.val;
}

//////////////////////////SORTING ALGORITHMS//////////////////////////

// Bubble Sort
async function BubbleSort() {
    running = true;

    for (let i = 0; i < barArray.length - 1; i++) {
        let flag = true;

        for (let j = 0; j < barArray.length - i - 1; j++) {
            colorBar(j, 2);
            colorBar(j + 1, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(j) > getValue(j + 1)) {
                swap(j, j + 1);
                flag = false;
                await givePromise(transitionSpeed);
            }

            colorBar(j, 1);
            colorBar(j + 1, 1);

            if (!running) return;
        }

        colorBar(barArray.length - i - 1, 3);
        if (flag) break;
    }

    SortFinishingAnimation();
    running = false;
}

// Selection Sort
async function SelectionSort() {
    running = true;

    for (let i = 0; i < barArray.length - 1; i++) {
        let minIndex = i;
        colorBar(i, 4);
        await givePromise(transitionSpeed);
        if (!running) return;

        for (let j = i + 1; j < barArray.length; j++) {
            colorBar(j, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(j) < getValue(minIndex)) {
                colorBar(minIndex, 1);
                colorBar(j, 4);
                minIndex = j;
                await givePromise(transitionSpeed);
            }
            else {
                colorBar(j, 1);
            }

            if (!running) return;
        }

        if (minIndex != i) {
            colorBar(i, 4);
            swap(minIndex, i);
            await givePromise(transitionSpeed);
            colorBar(minIndex, 1);
        }

        if (!running) return;

        colorBar(i, 3);
        await givePromise(transitionSpeed);
        if (!running) return;
    }

    SortFinishingAnimation();
    running = false;
}

// Insertion Sort
async function InsertionSort() {
    running = true;
    colorBar(0, 3);

    for (let i = 1; i < barArray.length; i++) {
        let key = getValue(i);
        let j = i - 1;
        colorBar(i, 2);
        await givePromise(transitionSpeed);
        if (!running) return;

        while (j >= 0 && getValue(j) > key) {
            swap(j, j + 1);
            await givePromise(transitionSpeed);
            if (!running) return;

            j--;
        }

        colorBar(j + 1, 3);
        await givePromise(transitionSpeed);
        if (!running) return;
    }

    SortFinishingAnimation();
    running = false;
}

// Merge Sort
function multiSwap(i, j) {
    for (let k = j - 1; k >= i; k--) {
        swap(k, k + 1);
    }

    barArray[i].style.zIndex = `10`;
    setTimeout(() => {
        barArray[i].style.zIndex = `0`;
    }, transitionSpeed);
}

async function merge(l, m, r) {
    let s = m + 1;

    while (l <= m && s <= r) {
        colorBar(l, 2);
        colorBar(s, 2);
        await givePromise(transitionSpeed);
        if (!running) return;

        if (getValue(l) > getValue(s)) {
            multiSwap(l, s);
            await givePromise(transitionSpeed);
            l++; s++; m++;
        } else {
            l++;
        }
        colorBar(l - 1, 3);

        if (!running) return;
    }
    while (l <= m) {
        colorBar(l++, 3);
    }
    while (s <= r) {
        colorBar(s++, 3);
    }
}

async function mergeSort(l, r) {
    if (l < r) {
        let m = l + Math.trunc((r - l) / 2);

        await mergeSort(l, m);
        if (!running) return;

        await mergeSort(m + 1, r);
        if (!running) return;

        await merge(l, m, r);
    }
}

async function MergeSort() {
    running = true;
    await mergeSort(0, barArray.length - 1);
    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Quick Sort
async function partition(l, r) {
    let pivot = l, minEl = 0;
    colorBar(l, 3);
    await givePromise(transitionSpeed);
    if (!running) return;

    for (let i = l + 1; i <= r; i++) {
        colorBar(i, 6);
        await givePromise(transitionSpeed);
        if (!running) return;

        if (getValue(i) <= getValue(pivot)) {
            minEl++;
            colorBar(i, 2);

            if (l + minEl != i) {
                swap(l + minEl, i);
                await givePromise(transitionSpeed);
                    if (!running) return;
            }
        }
        else {
            colorBar(i, 4);
        }
    }

    if (minEl) {
        await givePromise(transitionSpeed);
        if (!running) return;
    }
    swap(l + minEl, l);
    await givePromise(transitionSpeed);
    if (!running) return;

    pivot += minEl;

    for (let i = l; i <= r; i++) {
        if (i == pivot) continue;
        colorBar(i, 1);
    }

    colorBar(pivot, 5);
    await givePromise(transitionSpeed);
    if (!running) return;

    return pivot;
}

async function quickSort(l, r) {
    if (l < r) {
        let pivot = await partition(l, r);
        if (!running) return;

        await quickSort(l, pivot - 1);
        if (!running) return;

        await quickSort(pivot + 1, r);
        if (!running) return;
    }
    else if (l == r) {
        colorBar(l, 5);
        await givePromise(transitionSpeed);
        if (!running) return;
    }
}

async function QuickSort() {
    running = true;
    await quickSort(0, barArray.length - 1);
    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Heap Sort
async function maxHeapify(n, parent) {
    let largest = parent;
    let c1 = parent * 2 + 1;
    let c2 = parent * 2 + 2;

    colorBar(parent, 2);
    await givePromise(transitionSpeed);
    if (!running) return;

    if (c1 < n) {
        colorBar(c1, 5);
        await givePromise(transitionSpeed);
        if (!running) return;
    }
    if (c2 < n) {
        colorBar(c2, 5);
        await givePromise(transitionSpeed);
        if (!running) return;
    }

    if (c1 < n && getValue(c1) > getValue(largest)) largest = c1;
    if (c2 < n && getValue(c2) > getValue(largest)) largest = c2;

    if (largest != parent) {
        colorBar(largest, 4);
        await givePromise(transitionSpeed);
        if (!running) return;

        swap(parent, largest);
        await givePromise(transitionSpeed);
        if (!running) return;

        colorBar(parent, 1);
        colorBar(c1, 1);
        if (c2 < n) colorBar(c2, 1);

        await maxHeapify(n, largest);
    }
    else {
        colorBar(parent, 1);
        if (c1 < n) colorBar(c1, 1);
        if (c2 < n) colorBar(c2, 1);
    }
}

async function HeapSort() {
    running = true;

    let n = barArray.length;
    for (let i = Math.trunc(n / 2) - 1; i >= 0; i--) {
        await maxHeapify(n, i);
        if (!running) break;
    }

    for (let i = n - 1; i >= 0 && running; i--) {
        colorBar(0, 3);
        await givePromise(transitionSpeed);
        if (!running) break;

        swap(0, i);
        await givePromise(transitionSpeed);
        if (!running) break;

        await maxHeapify(i, 0);
        if (!running) break;
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Shell Sort
async function ShellSort() {
    running = true;

    let n = barArray.length;

    for (let gap = Math.trunc(n / 2); gap > 0; gap = Math.trunc(gap / 2)) {
        for (let i = gap; i < n; i++) {
            colorBar(i, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            let j;
            for (j = i; j >= gap; j -= gap) {
                if (j != i) {
                    colorBar(j, 2);
                    await givePromise(transitionSpeed);
                            if (!running) return;
                }

                colorBar(j - gap, 2);
                await givePromise(transitionSpeed);
                    if (!running) return;

                let flag = false;

                if (getValue(j - gap) > getValue(j)) {
                    colorBar(j - gap, 4);
                    await givePromise(transitionSpeed);
                            if (!running) return;

                    swap(j, j - gap);
                    await givePromise(transitionSpeed);
                            if (!running) return;

                    flag = true;
                }
                else {
                    colorBar(j, 4);
                    await givePromise(transitionSpeed);
                            if (!running) return;
                }

                colorBar(j, 1);
                colorBar(j - gap, 1);

                if (flag) colorBar(j - gap, 2);
                else break;
            }

            if (j < gap) {
                colorBar(j, 1);
            }
        }
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Bogo Sort
function isSorted() {
    for (let i = 0; i < barArray.length - 1; i++) {
        if (getValue(i) > getValue(i + 1)) return false;
    }
    return true;
}

async function bogoShuffle() {
    let n = barArray.length;
    for (let i = 0; i < n; i++) {
        colorBar(i, 2);
        await givePromise(transitionSpeed);
        if (!running) return;

        let ind = Math.trunc(Math.random() * n);

        colorBar(ind, 2);
        await givePromise(transitionSpeed);
        if (!running) return;

        swap(i, ind);
        await givePromise(transitionSpeed);
        if (!running) return;

        colorBar(i, 1);
        colorBar(ind, 1);
    }
}

async function BogoSort() {
    running = true;

    while (!isSorted()) {
        await bogoShuffle();
        if (!running) return;
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Gnome Sort
async function GnomeSort() {
    running = true;

    let index = 0;
    while (index < barArray.length) {
        colorBar(index, 2);
        await givePromise(transitionSpeed);
        if (!running) return;

        if (index == 0) {
            colorBar(index, 1);
            index++;
        }
        else if (getValue(index) >= getValue(index - 1)) {
            colorBar(index, 1);
            index++;
        }
        else {
            swap(index, index - 1);
            await givePromise(transitionSpeed);
            if (!running) return;

            index--;
            colorBar(index, 1);
        }
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Pancake Sort
function flipSubArray(r) {
    let l = 0;
    while (l < r) {
        swap(l, r);
        l++; r--;
    }
}

function findMaxIndex(n) {
    let ind = 0;
    for (let i = 1; i < n; i++) {
        if (getValue(i) > getValue(ind)) {
            ind = i;
        }
    }
    return ind;
}

async function PancakeSort() {
    running = true;

    for (let i = barArray.length; i > 1; i--) {
        let maxIndex = findMaxIndex(i);

        colorBar(maxIndex, 4);
        await givePromise(transitionSpeed);
        if (!running) return;

        if (maxIndex < i - 1) {
            if (maxIndex > 0) {
                flipSubArray(maxIndex);

                await givePromise(transitionSpeed);
                    if (!running) return;
            }

            flipSubArray(i - 1);

            await givePromise(transitionSpeed);
            if (!running) return;
        }

        colorBar(i - 1, 3);
        await givePromise(transitionSpeed);
        if (!running) return;
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// Cocktail Sort
async function CocktailSort() {
    running = true;

    let swapped = true;
    let start = 0;
    let end = barArray.length - 1;

    while (swapped) {
        swapped = false;
        colorBar(start, 2);

        for (let i = start; i < end; i++) {
            colorBar(i + 1, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(i) > getValue(i + 1)) {
                colorBar(i, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swap(i, i + 1);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swapped = true;
            }
            else {
                colorBar(i, 2);
                colorBar(i + 1, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;
            }

            colorBar(i, 1);
        }

        colorBar(end, 3);

        if (!swapped) break;

        swapped = false;
        end--;

        colorBar(end, 2);

        for (let i = end - 1; i >= start; i--) {
            colorBar(i, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(i) > getValue(i + 1)) {
                colorBar(i + 1, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swap(i, i + 1);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swapped = true;
            }
            else {
                colorBar(i, 4);
                colorBar(i + 1, 2);
                await givePromise(transitionSpeed);
                    if (!running) return;
            }

            colorBar(i + 1, 1);
        }

        colorBar(start, 3);

        start++;
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}

// oddeven Sort
async function OddevenSort() {
    running = true;

    let sorted = false;
    while (!sorted) {
        sorted = true;

        for (let i = 1; i < barArray.length - 1; i += 2) {
            colorBar(i, 2);
            colorBar(i + 1, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(i) > getValue(i + 1)) {
                colorBar(i, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swap(i, i + 1);
                await givePromise(transitionSpeed);
                    if (!running) return;

                sorted = false;
            }
            else {
                colorBar(i + 1, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;
            }

            colorBar(i, 1);
            colorBar(i + 1, 1);
        }

        for (let i = 0; i < barArray.length - 1; i += 2) {
            colorBar(i, 2);
            colorBar(i + 1, 2);
            await givePromise(transitionSpeed);
            if (!running) return;

            if (getValue(i) > getValue(i + 1)) {
                colorBar(i, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;

                swap(i, i + 1);
                await givePromise(transitionSpeed);
                    if (!running) return;

                sorted = false;
            }
            else {
                colorBar(i + 1, 4);
                await givePromise(transitionSpeed);
                    if (!running) return;
            }

            colorBar(i, 1);
            colorBar(i + 1, 1);
        }
    }

    if (running) SortFinishingAnimation();
    else makeAllBarDefaultColor();
    running = false;
}


/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
STEPS TO ADD NEW ALGORITHMS:
    STEP 1: ADD ALGORITHM OPTION IN HTML FILE
    STEP 2: ADD THE ALGO SHORT FORM IN THE "availableSortingAlgorithms" ARRAY IN JS FILE
    STEP 3: ADD AN ASYNC FUNCTION WHICH WILL BE THE STARTING POINT OF THE NEW ALGORITHM IN JS FILE
    STEP 4: ADD THE ALGO SHORT FORM IN THE SWITCH CASE IN THE RUN BUTTON CLICK EVENT LISTENER AND CALL THE NEWLY CREATED ASYNC FUNCTION IN JS FILE

FUNCTIONS NEEDED TO BUILT AN ALGORITHM:
    1) await givePromise(transitionSpeed);   => TO GET SOME DELAY (MUST BE CALLED WITH await KEYWORD)
    2) colorBar(ind, colorType);             => TO COLOR THE INDEX OF GIVEN TYPE
    3) swap(ind1, ind2);                     => TO SWAP TO INDICES VALUES/BARS OF THE ARRAY
    4) getValue(ind);                        => TO GET THE INTEGER VALUE OF THE GIVEN INDEX
    5) SortFinishingAnimation();             => FINISHING ANIMATION
    6) makeAllBarDefaultColor();             => IT WILL SET THE DEFAULT COLOR FOR ALL BARS PRESENT

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/////////////////////////////////////////////////////////////
const infoBox = document.querySelector('.info-box');
const descriptionPlaceholder = infoBox.querySelector('.description p');
const bestTimeComplexity = infoBox.querySelector('.cx-table .best');
const averageTimeComplexity = infoBox.querySelector('.cx-table .average');
const worstTimeComplexity = infoBox.querySelector('.cx-table .worst');
const spaceComplexity = infoBox.querySelector('.cx-table .space');

const codeChoices = infoBox.querySelectorAll('.code-section .lang div');
const codePlaceholder = infoBox.querySelector('.code-section .snippet .code');

const copyCode = infoBox.querySelector('.copy-code');
const copyImg = copyCode.querySelector('.copy-img');
const tickImg = copyCode.querySelector('.tick-img');
const copyMsg = copyCode.querySelector('p');

function updateCodeInformations() {
    let algoType = algoChoices.value;
    updateCodeInfoWithType(algoType);
}

function updateCodeInfoWithType(algoType) {
    descriptionPlaceholder.innerHTML = codeinfo[algoType].description;

    bestTimeComplexity.innerHTML = codeinfo[algoType].complexity.best;
    averageTimeComplexity.innerHTML = codeinfo[algoType].complexity.average;
    worstTimeComplexity.innerHTML = codeinfo[algoType].complexity.worst;
    spaceComplexity.innerHTML = codeinfo[algoType].complexity.space;

    codeChoices[0].click();
}

function updateCodeSnippet(algoType, codeType) {
    codePlaceholder.textContent = codeinfo[algoType].implementation[codeType];
}

let codeAlreadyCopied = false;
function showCodeCopied() {
    if (codeAlreadyCopied) return;

    copyImg.classList.add('hidden');
    tickImg.classList.remove('hidden');
    copyMsg.innerHTML = `Copied!`;
    codeAlreadyCopied = true;

    setTimeout(() => {
        copyImg.classList.remove('hidden');
        tickImg.classList.add('hidden');
        copyMsg.innerHTML = `Copy Code`;
        codeAlreadyCopied = false;
    }, 2000);
}

function copyCodeToUserClipboard(algoType, codeType) {
    const targetCode = codeinfo[algoType].implementation[codeType];

    navigator.clipboard.writeText(targetCode)
        .then(() => {
            showCodeCopied();
        })
        .catch(err => {
            console.log(err);
        })
}

algoChoices.addEventListener('change', () => {
    updateCodeInformations();
})

codeChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        codeChoices.forEach(ch => {
            ch.classList.remove('selected');
        });
        choice.classList.add('selected');

        updateCodeSnippet(algoChoices.value, choice.getAttribute('type'));
    })
});

copyCode.addEventListener('click', () => {
    let codeType = "c";
    codeChoices.forEach(ch => {
        if (ch.classList.contains('selected')) {
            codeType = ch.getAttribute('type');
            return;
        }
    })
    copyCodeToUserClipboard(algoChoices.value, codeType);
});

codeChoices[0].click();