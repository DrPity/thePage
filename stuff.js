! function(e) {
    var t = {
        strength: 25,
        scale: 1.05,
        animationSpeed: "100ms",
        contain: true,
        wrapContent: false
    };
    e.fn.interactive_bg = function(n) {
        return this.each(function() {
            var r = e.extend({}, t, n),
                i = e(this),
                s = i.outerHeight(),
                o = i.outerWidth(),
                u = r.strength / s,
                a = r.strength / o,
                f = "ontouchstart" in document.documentElement;
            if (r.contain == true) {
                i.css({
                    overflow: "hidden"
                })
            }
            if (r.wrapContent == false) {
                i.prepend("<div class='ibg-bg'></div>")
            } else {
                i.wrapInner("<div class='ibg-bg'></div>")
            }
            if (i.data("ibg-bg") !== undefined) {
                i.find("> .ibg-bg").css({
                    background: "url('" + i.data("ibg-bg") + "') no-repeat center center",
                    "background-size": "cover"
                })
            }
            i.find("> .ibg-bg").css({
                width: o,
                height: s
            });
            if (f || screen.width <= 699) {
                window.addEventListener("devicemotion", l, false);

                function l(e) {
                    var t = Math.round(event.accelerationIncludingGravity.x * 10) / 10,
                        n = Math.round(event.accelerationIncludingGravity.y * 10) / 10,
                        s = -(t / 10) * r.strength,
                        o = -(n / 10) * r.strength,
                        u = -(s * 2),
                        a = -(o * 2);
                    i.find("> .ibg-bg").css({
                        "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + u + "," + a + ")",
                        "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + u + "," + a + ")",
                        "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + u + "," + a + ")",
                        transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + u + "," + a + ")"
                    })
                }
            } else {
                i.mouseenter(function(e) {
                    if (r.scale != 1) i.addClass("ibg-entering");
                    i.find("> .ibg-bg").css({
                        "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        transform: "matrix(" + r.scale + ",0,0," + r.scale + ",0,0)",
                        "-webkit-transition": "-webkit-transform " + r.animationSpeed + " linear",
                        "-moz-transition": "-moz-transform " + r.animationSpeed + " linear",
                        "-o-transition": "-o-transform " + r.animationSpeed + " linear",
                        transition: "transform " + r.animationSpeed + " linear"
                    }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        i.removeClass("ibg-entering")
                    })
                }).mousemove(function(e) {
                    if (!i.hasClass("ibg-entering") && !i.hasClass("exiting")) {
                        var t = e.pageX || e.clientX,
                            n = e.pageY || e.clientY,
                            t = t - i.offset().left - o / 2,
                            n = n - i.offset().top - s / 2,
                            f = a * t * -1,
                            l = u * n * -1;
                        i.find("> .ibg-bg").css({
                            "-webkit-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-moz-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-o-transform": "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            transform: "matrix(" + r.scale + ",0,0," + r.scale + "," + f + "," + l + ")",
                            "-webkit-transition": "none",
                            "-moz-transition": "none",
                            "-o-transition": "none",
                            transition: "none"
                        })
                    }
                }).mouseleave(function(e) {
                    if (r.scale != 1) i.addClass("ibg-exiting");
                    i.addClass("ibg-exiting").find("> .ibg-bg").css({
                        "-webkit-transform": "matrix(1,0,0,1,0,0)",
                        "-moz-transform": "matrix(1,0,0,1,0,0)",
                        "-o-transform": "matrix(1,0,0,1,0,0)",
                        transform: "matrix(1,0,0,1,0,0)",
                        "-webkit-transition": "-webkit-transform " + r.animationSpeed + " linear",
                        "-moz-transition": "-moz-transform " + r.animationSpeed + " linear",
                        "-o-transition": "-o-transform " + r.animationSpeed + " linear",
                        transition: "transform " + r.animationSpeed + " linear"
                    }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        i.removeClass("ibg-exiting")
                    })
                })
            }
        })
    }
}(window.jQuery)

function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
        $('<img/>')[0].src = this;
    });
}

// Usage:

preload([
    'images/button-about-hover.png',
    'images/button-fb-hover.png',
    'images/button-tw-hover.png',
    'images/button-be-hover.png'
]);

$(document).ready(function() {
    $(".bg").interactive_bg({
        strength: 140,
        scale: 1.2,
        animationSpeed: "100ms",
        contain: true,
        wrapContent: false
    });
});
if (!Modernizr.svg) {
    $('img[src$="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.jpg');
    });
}
$(window).resize(function() {
    $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
    })
})

$(document).ready(function() {
    $('#b-about').hover(function() {
        $('#b-about-hover').animate({
            width: 'toggle'
        }, 250);
    });
    $(document).on('click', '.inactive', function() {
        $(this).addClass('active').removeClass('inactive');
        $('#full').slideToggle(400, 'swing');
        $('.move').animate({
            bottom: "+=160"
        }, 400);
        $('#teaser').fadeOut();

    });
    $(document).on('click', '.active', function() {
        $(this).addClass('inactive').removeClass('active');
        $('#full').slideToggle(400, 'swing');
        $('.move').animate({
            bottom: "-=160"
        }, 400);
        $('#teaser').delay(200).fadeIn();
    });
    $('#full').mouseleave(function() {
        $('.active').addClass('inactive').removeClass('active');
        $('#full').slideToggle(400, 'swing');
        $('.move').animate({
            bottom: "-=160"
        }, 400);
        $('#teaser').delay(200).fadeIn();
    });
    $(".hover").hover(
        function() {
            this.src = this.src.replace(".png", "-hover.png");
        },
        function() {
            this.src = this.src.replace("-hover.png", ".png");
        });
});
