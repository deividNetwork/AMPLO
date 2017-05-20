$(document).ready(function () {
    var app = {
        init: function () {
            menuMobile.init();
        }
    };

    var menuMobile = {
        selector: 'header .top-header .menu .menu-mobile',

        init: function () {
            this.element = $(this.selector);

            this.bindEvents();
        },

        bindEvents: function () {
            this.element.bind('click', this.toggleMenu);
        },

        toggleMenu: function () {
            $(this).toggleClass('open');
        }
    };

    app.init();
});