function change(n) {
    'use strict';
    var pages = ["img/background/image.jpg", "img/background/image1.jpg", "../img/background/image2.jpg", "img/background/image3.jpg"];
    n = n < 3 ? 0 : n < 8 ? 1 : 2;
    window.location.replace(pages[n]);
}
(Math.floor(Math.random() * 10));

