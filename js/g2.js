//+toggleaction
gsap.registerPlugin(ScrollTrigger);

//loading----------------------------------------------
const timeline = gsap.timeline();
timeline
    .to(".loading__block--filter", {
        x: "1200px",

        duration: 1,
    })
    .to(".loading__block--filter", {
        y: "250px",
        x: "-730px",

        duration: 1,
    })
    .to(".loading__block--filter", {
        y: "0",
        // x:'-730px',
        duration: 1,
    })
    .to(".loading__block--filter", {
        width: "1500px",
        duration: 1,
    })
    .to(".loading", {
        opacity: 0,
    })

    // --------------------------------------------------1
    .from(".square1", {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
      
        onComplete: () => {
            gsap.to(".square1", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: ".section1",
                    start: "bottom center",
                    markers: true,
                    // scrub: true,
                    // end: "bottom top",
                    toggleActions: "play complete reverse none",
                    //                     //onenter  onleave   onenterback  onleveback
                    //                     //play pause resume reverse restart reset complete none
                },
                onComplete: () => {
                    gsap.to(".section1 .background--dark", {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: ".section1",
                            start: "bottom center",
                            markers: true,
                            // scrub: true,
                            // end: "bottom top",
                        },
                    });
                },
            });
        },
    })
    .to(".background--light", {
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
    })

    // --------------------------------------------------2
    .from(".square2", {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: ".section1",
            start: "bottom center",
            markers: true,
            // scrub: true,
            // end: "bottom top",
        },
        onComplete: () => {
            gsap.to(".square2", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: ".section2",
                    start: "bottom center",
                    markers: true,
                    scrub: true,
                    end: "bottom top",
                },
                onComplete: () => {
                    gsap.to(
                        ".section3 .background--orange,.section2 .background--orange", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: ".section2",
                                start: "bottom top",
                                markers: true,
                                scrub: true,
                            },
                        }
                    );
                },
            });
        },
    })

    // --------------------------------------------------3
    .from(".square3", {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: ".section2",
            start: "bottom center",
            markers: true,
            scrub: true,
            end: "bottom top",
        },
        onComplete: () => {
            gsap.to(".square3", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: ".section3",
                    start: "bottom center",
                    markers: true,
                    scrub: true,
                    end: "bottom top",
                },
                onComplete: () => {
                    gsap.to(".section4 .background--white,.section3 .background--white", {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: ".section3",
                            start: "bottom center",
                            markers: true,
                            scrub: true,
                            end: "bottom top",
                        },
                    });
                },
            });
        },
    })

    // --------------------------------------------------4
    .from(".square4", {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: ".section3",
            start: "bottom center",
            markers: true,
            scrub: true,
            end: "bottom top",
        },
        onComplete: () => {
            gsap.to(".square4", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: ".section4",
                    start: "bottom center",
                    markers: true,
                    scrub: true,
                    end: "bottom top",
                },
                onComplete: () => {
                    gsap.to(".section4 .background--beige,.section5 .background--beige", {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: ".section4",
                            start: "bottom center",
                            markers: true,
                            scrub: true,
                            end: "bottom top",
                        },
                    });
                },
            });
        },
    })

    // --------------------------------------------------5
    .from(".square5", {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: ".section4",
            start: "bottom center",
            markers: true,
            scrub: true,
            end: "bottom top",
        },
        onComplete: () => {
            gsap.to(".square5", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: ".section5",
                    start: "bottom center",
                    markers: true,
                    scrub: true,
                    end: "bottom top",
                },
                onComplete: () => {
                    gsap.to(".section4 .background--beige,.section5 .background--beige", {
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".section5",
                            start: "bottom center",
                            markers: true,
                            scrub: true,
                            end: "bottom top",
                        },
                    });
                },
            });
        },
    });