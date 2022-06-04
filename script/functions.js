function allValues() {
    return isbn.value = title.value = author.value = year.value = '';
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function clearStats() {
    if (stats.firstElementChild) {
        stats.removeChild(stats.firstElementChild);
    }
}

function toStats() {
        const divStats = document.createElement('div');
        const amount = createInfoElement(library.booksIn(), 'h2');
        const old = createInfoElement(library.oldestIn(), 'h2');
        const young = createInfoElement(library.youngestIn(), 'h2');
        divStats.append(amount, old, young);
        if (stats.firstElementChild) {
            stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(divStats);
        }
}