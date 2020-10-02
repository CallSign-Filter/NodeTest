/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var	$window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $nav = $('#nav'),
        $main = $('#main'),
        $navPanelToggle, $navPanel, $navPanelInner;

    // Breakpoints.
    breakpoints({
        default:   ['1681px',   null       ],
        xlarge:    ['1281px',   '1680px'   ],
        large:     ['981px',    '1280px'   ],
        medium:    ['737px',    '980px'    ],
        small:     ['481px',    '736px'    ],
        xsmall:    ['361px',    '480px'    ],
        xxsmall:   [null,       '360px'    ]
    });

    /**
     * Applies parallax scrolling to an element's background image.
     * @return {jQuery} jQuery object.
     */
    $.fn._parallax = function(intensity) {

        var	$window = $(window),
            $this = $(this);

        if (this.length == 0 || intensity === 0)
            return $this;

        if (this.length > 1) {

            for (var i=0; i < this.length; i++)
                $(this[i])._parallax(intensity);

            return $this;

        }

        if (!intensity)
            intensity = 0.25;

        $this.each(function() {

            var $t = $(this),
                $bg = $('<div class="bg"></div>').appendTo($t),
                on, off;

            on = function() {

                $bg
                    .removeClass('fixed')
                    .css('transform', 'matrix(1,0,0,1,0,0)');

                $window
                    .on('scroll._parallax', function() {

                        var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

                        $bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

                    });

            };

            off = function() {

                $bg
                    .addClass('fixed')
                    .css('transform', 'none');

                $window
                    .off('scroll._parallax');

            };

            // Disable parallax on ..
            if (browser.name == 'ie'			// IE
                ||	browser.name == 'edge'			// Edge
                ||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
                ||	browser.mobile)					// Mobile devices
                off();

            // Enable everywhere else.
            else {

                breakpoints.on('>large', on);
                breakpoints.on('<=large', off);

            }

        });

        $window
            .off('load._parallax resize._parallax')
            .on('load._parallax resize._parallax', function() {
                $window.trigger('scroll');
            });

        return $(this);

    };

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Background.
    $wrapper._parallax(0.925);

    // Nav Panel.

    // Toggle.
    $navPanelToggle = $(
        '<a href="#navPanel" id="navPanelToggle">Menu</a>'
    )
        .appendTo($wrapper);

    // Change toggle styling once we've scrolled past the header.
    $header.scrollex({
        bottom: '5vh',
        enter: function() {
            $navPanelToggle.removeClass('alt');
        },
        leave: function() {
            $navPanelToggle.addClass('alt');
        }
    });

    // Panel.
    $navPanel = $(
        '<div id="navPanel">' +
        '<nav>' +
        '</nav>' +
        '<a href="#navPanel" class="close"></a>' +
        '</div>'
    )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-navPanel-visible'
        });

    // Get inner.
    $navPanelInner = $navPanel.children('nav');

    // Move nav content on breakpoint change.
    var $navContent = $nav.children();

    breakpoints.on('>medium', function() {

        // NavPanel -> Nav.
        $navContent.appendTo($nav);

        // Flip icon classes.
        $nav.find('.icons, .icon')
            .removeClass('alt');

    });

    breakpoints.on('<=medium', function() {

        // Nav -> NavPanel.
        $navContent.appendTo($navPanelInner);

        // Flip icon classes.
        $navPanelInner.find('.icons, .icon')
            .addClass('alt');

    });

    // Hack: Disable transitions on WP.
    if (browser.os == 'wp'
        &&	browser.osVersion < 10)
        $navPanel
            .css('transition', 'none');

    // Intro.
    var $intro = $('#intro');

    if ($intro.length > 0) {

        // Hack: Fix flex min-height on IE.
        if (browser.name == 'ie') {
            $window.on('resize.ie-intro-fix', function() {

                var h = $intro.height();

                if (h > $window.height())
                    $intro.css('height', 'auto');
                else
                    $intro.css('height', h);

            }).trigger('resize.ie-intro-fix');
        }

        // Hide intro on scroll (> small).
        breakpoints.on('>small', function() {

            $main.unscrollex();

            $main.scrollex({
                mode: 'bottom',
                top: '25vh',
                bottom: '-50vh',
                enter: function() {
                    $intro.addClass('hidden');
                },
                leave: function() {
                    $intro.removeClass('hidden');
                }
            });

        });

        // Hide intro on scroll (<= small).
        breakpoints.on('<=small', function() {

            $main.unscrollex();

            $main.scrollex({
                mode: 'middle',
                top: '15vh',
                bottom: '-15vh',
                enter: function() {
                    $intro.addClass('hidden');
                },
                leave: function() {
                    $intro.removeClass('hidden');
                }
            });

        });

    }

    (function($){
        var initialContainer = $('.columns1'),
            columnItems = $('.columns1 li'),
            columns = null,
            column = 1; // account for initial column
        function updateColumns(){
            column = 0;
            columnItems.each(function(idx, el){
                if (idx !== 0 && idx > (columnItems.length / columns.length) + (column * idx)){
                    column += 1;
                }
                $(columns.get(column)).append(el);
            });
        }
        function setupColumns(){
            columnItems.detach();
            while (column++ < initialContainer.data('columns1')){
                initialContainer.clone().insertBefore(initialContainer);
                column++;
            }
            columns = $('.columns1');
        }

        $(function(){
            setupColumns();
            updateColumns();
        });
    })(jQuery);

    (function($){
        var initialContainer = $('.columns2'),
            columnItems = $('.columns2 li'),
            columns = null,
            column = 1; // account for initial column
        function updateColumns(){
            column = 0;
            columnItems.each(function(idx, el){
                if (idx !== 0 && idx > (columnItems.length / columns.length) + (column * idx)){
                    column += 1;
                }
                $(columns.get(column)).append(el);
            });
        }
        function setupColumns(){
            columnItems.detach();
            while (column++ < initialContainer.data('columns2')){
                initialContainer.clone().insertBefore(initialContainer);
                column++;
            }
            columns = $('.columns2');
        }

        $(function(){
            setupColumns();
            updateColumns();
        });
    })(jQuery);

    //Show top experience
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons0 = document.querySelectorAll('.toggle-content0');
        var fullTextWrappers0 = document.querySelectorAll('.fulltext0');
        var fullText0;
        var toggleButtonText0;


        [].forEach.call(fullTextWrappers0, function(fullTextWrapper) {
            // hide all full text on load
            fullTextWrapper.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons0, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext');
                toggleButtonText0 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText0.innerText = 'Full Story';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText0.innerText = 'Hide';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //Show 'Software experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons1 = document.querySelectorAll('.toggle-content1');
        var fullTextWrappers1 = document.querySelectorAll('.fulltext1');
        var fullText1;
        var toggleButtonText1;


        [].forEach.call(fullTextWrappers1, function(fullTextWrapper) {
            // hide all full text on load
            fullTextWrapper.setAttribute('hidden', false);
        });

        [].forEach.call(toggleButtons1, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext1');
                toggleButtonText1 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText1.innerText = 'Show Experience';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText1.innerText = 'Show Less';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }


// cut the mustard
    //Show 'Military Experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons2 = document.querySelectorAll('.toggle-content2');
        var fullTextWrappers2 = document.querySelectorAll('.fulltext2');
        var fullText2;
        var toggleButtonText2;


        [].forEach.call(fullTextWrappers2, function(fullTextWrapper2) {
            // hide all full text on load
            fullTextWrapper2.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons2, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext2');
                toggleButtonText2 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText2.innerText = 'Show Experience';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText2.innerText = 'Show Less';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Other Experience'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons3 = document.querySelectorAll('.toggle-content3');
        var fullTextWrappers3 = document.querySelectorAll('.fulltext3');
        var fullText3;
        var toggleButtonText3;


        [].forEach.call(fullTextWrappers3, function(fullTextWrapper3) {
            // hide all full text on load
            fullTextWrapper3.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons3, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext3');
                toggleButtonText3 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText3.innerText = 'Show Experience';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText3.innerText = 'Show Less';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Masters Courses'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons4 = document.querySelectorAll('.toggle-content4');
        var fullTextWrappers4 = document.querySelectorAll('.fulltext4');
        var fullText4;
        var toggleButtonText4;


        [].forEach.call(fullTextWrappers4, function(fullTextWrapper4) {
            // hide all full text on load
            fullTextWrapper4.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons4, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext4');
                toggleButtonText4 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText4.innerText = 'Show Courses';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText4.innerText = 'Hide Courses';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

    //show 'Bachelor Courses'
    if ('querySelector' in document &&
        'addEventListener' in window) {

        var toggleButtons5 = document.querySelectorAll('.toggle-content5');
        var fullTextWrappers5 = document.querySelectorAll('.fulltext5');
        var fullText5;
        var toggleButtonText5;


        [].forEach.call(fullTextWrappers5, function(fullTextWrapper5) {
            // hide all full text on load
            fullTextWrapper5.setAttribute('hidden', true);
        });

        [].forEach.call(toggleButtons5, function(toggleButton) {
            // show toggle more buttons
            toggleButton.removeAttribute('hidden');

            // add listener for each button
            toggleButton.addEventListener('click', function () {

                fullTextWrapper = this.parentElement.querySelector('.fulltext5');
                toggleButtonText5 = this.querySelector('.text');

                // change attributes and text if full text is shown/hidden
                if (!fullTextWrapper.hasAttribute('hidden')) {
                    toggleButtonText5.innerText = 'Show Relevant Courses';
                    fullTextWrapper.setAttribute('hidden', true);
                    toggleButton.setAttribute('aria-expanded', false);
                } else {
                    toggleButtonText5.innerText = 'Hide Courses';
                    fullTextWrapper.removeAttribute('hidden');
                    toggleButton.setAttribute('aria-expanded', true);
                }
            });
        });
    }

})(jQuery);