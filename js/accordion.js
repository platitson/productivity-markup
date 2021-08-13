const htmlElements = {
    arrow: Array.from(document.querySelectorAll('.accordion-item img')),
    accordionVisible: Array.from(document.querySelectorAll('.accordion-item .visible')),
    accordionHidden: Array.from(document.querySelectorAll('.accordion-item .hidden')),
    accordionHeaders: Array.from(document.querySelectorAll('.accordion-item h6'))
}

function Accordion() { };

Accordion.prototype.init = function () {

    window.addEventListener('load', () => {
        htmlElements.accordionHidden.forEach(item => {
            item.style.display = 'none';
        })
    });

    const showAndHideContent = function (index) {
        if (htmlElements.accordionHidden[index].style.display === 'none') {
            htmlElements.accordionHidden[index].style.display = 'flex';
            htmlElements.arrow[index].style.transform = "rotate(180deg)";
            htmlElements.accordionHeaders[index].classList.add('bold');
        } else {
            htmlElements.accordionHidden[index].style.display = 'none';
            htmlElements.arrow[index].style.transform = 'none';
            htmlElements.accordionHeaders[index].classList.remove('bold');
        }
    };

    htmlElements.accordionVisible.forEach((item, index) => {
        item.addEventListener('click', showAndHideContent.bind(this, index));
    });
}

export { Accordion };