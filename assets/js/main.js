$(document).ready(function () {
    var app = {
        init: function () {
            menuMobile.init();
            owlCarousel.init();
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

    var owlCarousel = {
        selector: '.owl-carousel',

        init: function () {
            this.element = $(this.selector);

            if (this.element.length) {
                this.bindEvents();
            }
        },

        bindEvents: function () {
            this.element.owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    1000: {
                        items: 4
                    }
                }
            });

            this.element.on('translated.owl.carousel', function () {
                var allItems = $(this).find('.owl-item');
                var activeItems = $(this).find('.owl-item.active');

                allItems.removeClass('enabled');
                activeItems.eq(0).addClass('enabled');
            });

            this.element.trigger('translated.owl.carousel');
        }
    };

    app.init();
});