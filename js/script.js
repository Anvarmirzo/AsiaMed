document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.page-nav-right').classList.toggle("show-nav");
    document.querySelector('.burger').classList.toggle("white");
    document.querySelector('body').classList.toggle("no-scroll");
})
