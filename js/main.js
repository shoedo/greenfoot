(function () {

    var $ = {
        toggle: document.querySelector('.site-nav-toggle a'),
        close: document.querySelector('.site-nav-close a'),
        body: document.querySelector('body')
    };
    
    $.toggle.addEventListener('click', () => {
        console.log('whattt')
        $.body.classList.toggle('drawer-open');
    });

    $.close.addEventListener('click', () => {
        $.body.classList.remove('drawer-open');
    });
})();