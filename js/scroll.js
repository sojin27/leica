$(document).ready(function () {
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    function resize() {
        winWidth = $(window).width();
        winHeight = $(window).height();
        playPoint = $(".row2").offset().top; //row2
        typoPinStart = $(".row2 .typo_pin").position().top; //row2
        playPoint2 = $(".row4").offset().top - $(window).height() / 3; //row4
    }

    gsap.to(".logo_box", {
        scrollTrigger: {
            trigger: ".row1",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pinSpacing: false,
            pin: true,
        },
        scale: 0,
        alpha: 0
    });

    // 
    gsap.to(".row2 .pin_wrap", {
        scrollTrigger: {
            trigger: ".row2 .pin_wrap",
            start: "top top",
            end: "300% top",
            pin: true,
            //pinSpacing: false,
        },
    });

    //section2 image sequence
    var playPoint = $(".row2").offset().top;
    $(window).on("scroll", function () {
        var sequenceLen = 95;
        var pinHeight = $(".row2").height();
        var track = pinHeight - $(window).height();

        var scr = $(window).scrollTop();
        var currentScr = scr - playPoint;


        var per = track / sequenceLen;
        var sequenceCount = currentScr / per
        sequenceCount = parseInt(sequenceCount) + 1;

        if (sequenceCount > 0 && sequenceCount <= sequenceLen) {
            if (sequenceCount < 10) {
                $(".row2").find("img").attr("src", `images/sequence_01_new/sequence_0${sequenceCount}.png`)
            } else {
                $(".row2").find("img").attr("src", `images/sequence_01_new/sequence_${sequenceCount}.png`)
            }
        }
    });

    var typoPinStart = $(".row2 .typo_pin").position().top;
    gsap.to(".row2 .typo_wrap .typo_pin", {
        scrollTrigger: {
            trigger: ".row2 .typo_wrap",
            start: `${typoPinStart} top`,
            end: "bottom bottom",
            pin: true,
            onLeave: () => {
                gsap.to(".row2 .typo_wrap .typo_pin", {
                    "opacity": 0
                })
            },
            onEnterBack: () => {
                gsap.to(".row2 .typo_wrap .typo_pin", {
                    "opacity": 1
                })
            }
        }
    });

    gsap.to(".row2 .typo_wrap .typo_box1 h2", {
        scrollTrigger: {
            trigger: ".row2 .typo_wrap .typo_pin",
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause resume reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.4
    });
    gsap.to(".row2 .typo_wrap .typo_box2 h2", {
        scrollTrigger: {
            trigger: ".row2 .typo_wrap .typo_pin",
            start: "50% top",
            end: "bottom top",
            toggleActions: "play pause resume reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.4
    });
    // .row2 fin

    gsap.to(".row3", {
        scrollTrigger: {
            trigger: ".row3",
            pin: true,
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        backgroundColor: "#000"
    });
    $(window).on("scroll", function () { //row3
        var offsetRow3 = $(".row3").offset().top;
        var scrollEnd = $(".row4").offset().top - $(window).height();
        var scr = $(this).scrollTop();
        if (scr >= offsetRow3 && scr < scrollEnd) {
            $(".row3").addClass("anim");
            $(".row3").removeClass("blur")
        } else if (scr >= scrollEnd && scr < scrollEnd + $(window).height()) {
            $(".row3").addClass("blur");
        } else {
            $(".row3").removeClass("anim")
        }
    });

    var texts = gsap.utils.toArray(".row4 .headline_box *");
    texts.map(item => {
        var i = texts.indexOf(item);

        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: `top 50%`,
                // start: `top ${item.parentNode.offsetTop}`,
                end: `bottom top`,
                toggleActions: "play pause resume reverse",
            },
            alpha: 1,
            duration: 0.3
        });
    });
    gsap.to(".row4 .headline_box .p_color", {
        scrollTrigger: {
            trigger: ".row4 .headline_box .p_color",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "play pause resume reverse",
            scrub: true,
        },
        backgroundPosition: "-100% 0"
    }); //text gradient anim.

    var playPoint2 = $(".row4").offset().top - $(window).height() / 3;
    $(window).on("scroll", function () {
        var sequenceLen = 28;
        var pinHeight = $(".row4").height();
        var track = pinHeight;

        var scr = $(window).scrollTop();
        var currentScr = scr - playPoint2;

        var per = track / sequenceLen;
        var sequenceCount = currentScr / per
        sequenceCount = parseInt(sequenceCount) + 1;
        if (sequenceCount > 0 && sequenceCount <= sequenceLen) {
            if (sequenceCount < 10) {
                $(".row4").find("img").attr("src", `images/sequence_02/product2_0${sequenceCount}.png`)
            } else {
                $(".row4").find("img").attr("src", `images/sequence_02/product2_${sequenceCount}.png`)
            }
        }
    });
    gsap.to(".row4 .typo_box", {
        scrollTrigger: {
            trigger: ".row4",
            start: "50% bottom",
            end: "bottom top",
            scrub: 0.4,
        },
        y: 0
    });
    gsap.to(".row4 .typo_box h3", {
        scrollTrigger: {
            trigger: ".row4 .typo_box",
            start: "50% 50%",
            end: "bottom top",
            toggleActions: "play pause resume reverse"
        },
        color: "#ffffff",
        duration: 0
    }); //row4


    var typoWidth = $(".row5 .wide_p").width();
    var typoBoxHeight = $(".row5 .typo_box").height();

    $(window).on("resize", function () {
        typoWidth = $(".row5 .wide_p").width();
        typoBoxHeight = $(".row5 .typo_box").height();
    })

    gsap.to(".row5 .wide_box", {
        scrollTrigger: {
            trigger: ".row5 .wide_box",
            start: "top top",
            end: "bottom top",
            // end: `100%+=298px top`,
            // end: `${winWidth/2} top`,
            pin: true,
            scrub: true,
            pinSpacing: false,
        }
    });
    gsap.to(".row5 .wide_box .track", {
        scrollTrigger: {
            trigger: ".row5 .wide_box .track",
            scrub: true,
            start: "top 50%",
            end: "bottom 50%",
            onLeave: () => {
                gsap.to(".row5 .cover_layer", {
                    width: "100%",
                    duration: 0.5
                });
                gsap.to(".row5 .wide_p", {
                    x: -winWidth,
                    duration: 0.5
                });
            },
            onEnterBack: () => {
                gsap.to(".row5 .cover_layer", {
                    width: 0,
                    duration: 0.5
                });
                gsap.to(".row5 .wide_p", {
                    x: 0,
                    duration: 0.5
                });
            },
        },
        x: -typoWidth + winWidth
    })

    gsap.to(".row5 .cover_layer", {
        scrollTrigger: {
            trigger: ".row5 .wide_p",
            scrub: true,
            start: `bottom 50%`,
            end: "bottom top",
        },
        backgroundColor: "#555"
    });

    // markers: {
    //     startColor: "#fff",
    //     endColor: "#fff"
    // },
    $(window).on("resize", resize);
});