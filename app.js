// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
const catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const value = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets${value}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;

    middleCount++;
    middleEl.style.backgroundImage = `url("./assets${value}-middle.png")`;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;

    bottomCount++;
    bottomEl.style.backgroundImage = `url("./assets${value}-bottom.png")`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(newCatchphrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function createStatsString(headNum, middleNum, bottomNum) {
    return `You have changed the head ${headNum} times, the body ${middleNum} times, and the pants ${bottomNum} times. Nobody can forget your character's catchphrases:`;
}

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = createStatsString(headCount, middleCount, bottomCount);

    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.classList.add('catchphrase');
        p.textContent = catchphrase;

        catchphrasesEl.append(p);
    }
}
