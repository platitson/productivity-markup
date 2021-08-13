const htmlElements = {
    items: Array.from(document.querySelectorAll('.carousel-item')),
    nextButton: document.querySelector('.carousel-button-next'),
    prevButton: document.querySelector('.carousel-button-prev'),
    indicators: Array.from(document.querySelectorAll('.carousel-indicator'))
}

function Carousel() { };

Carousel.prototype.init = function (interval) {
    let cantMovingViaInterval = false;
    let currentIdx = 0;

    const update = function (increment, event) {
        if (event) {
            cantMovingViaInterval = true;
            setTimeout(() => {
                cantMovingViaInterval = false;
            }, interval);
        }

        if (!event && cantMovingViaInterval) {
            return;
        }

        if (event && event.target.tagName === 'LI') {
            let slideNumber = event.target.dataset.slide;
            currentIdx = slideNumber;
        } else {
            currentIdx = (currentIdx + htmlElements.items.length + increment) % htmlElements.items.length;
        }
        const nextIdx = (currentIdx + 1) % htmlElements.items.length;
        const prevIdx = (currentIdx - 1 + htmlElements.items.length) % htmlElements.items.length;

        htmlElements.items.forEach(item => (item.className = 'carousel-item'));
        htmlElements.items[currentIdx].classList.add('active');
        htmlElements.items[nextIdx].classList.add('next');
        htmlElements.items[prevIdx].classList.add('prev');

        htmlElements.indicators.forEach(item => (item.className = 'carousel-indicator'));
        htmlElements.indicators[currentIdx].classList.add('active');
        htmlElements.indicators[nextIdx].classList.add('next');
        htmlElements.indicators[prevIdx].classList.add('prev');
    };

    htmlElements.nextButton.addEventListener('click', update.bind(this, 1));
    htmlElements.prevButton.addEventListener('click', update.bind(this, -1));

    htmlElements.indicators.forEach(item => item.addEventListener('click', update.bind(this, 1)));

    setInterval(update.bind(null, 1), interval);
};

export { Carousel };