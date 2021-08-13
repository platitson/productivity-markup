const htmlElements = {
    links: document.querySelectorAll('.nav nav > ul > li > a'),
    chkNav: document.querySelector('.nav input#chk-nav'),
    navSelectedText: document.querySelector('.nav .nav-selected-text')
};

function Nav() { }

Nav.prototype.init = () => {
    const addClass = (className, element) => {
        element.classList.add(className);
    };

    const removeClass = (className, ...elements) => {
        elements.forEach(link => {
            link.classList.remove(className);
        });
    };

    htmlElements.links.forEach(link => {
        link.addEventListener('click', () => {
            removeClass('selected', ...htmlElements.links);
            addClass('selected', link);
            htmlElements.chkNav.checked = false;
            htmlElements.navSelectedText.textContent = link.textContent;
        });
    });
};

export { Nav };