gsap.registerPlugin(ScrollTrigger);

//loading----------------------------------------------

function loading() {
    const loadtl = gsap.timeline();
    loadtl
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
        .from(".square1", {
            y: 400,
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
            onComplete: sec1(),
        })
        .to(".background--light", {
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
        });
    return loadtl;
}

// --------------------------------------------------1

function sec1() {
    const sq1tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section1",
            start: "bottom center",
            end: "bottom center",
            markers: true,
            toggleActions: "play none reverse none",
        },
    });
    sq1tl
        .to(".square1", {
            y: 350,
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
        })
        .from(
            ".square2", {
                y: 400,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                onComplete: sec2(),
            },
            "-=1"
        )
        .to(
            ".section1 .background--dark", {
                opacity: 0,
            },
            "-=0.5"
        );

    return sq1tl;
}

// --------------------------------------------------2
function sec2() {
    const sq2tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "bottom center",
            end: "bottom center",
            markers: true,
            toggleActions: "play none reverse none",
        },
    });
    sq2tl
        .to(".square2", {
            y: 350,
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
        })
        .from(
            ".square3", {
                y: 400,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                onComplete: sec3(),
            },
            "-=1"
        )
        .to(
            ".section3 .background--orange,.section2 .background--orange", {
                opacity: 0,
            },
            "-=0.5"
        );
    return sq2tl;
}

// --------------------------------------------------3
function sec3() {
    const sq3tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            start: "bottom center",
            end: "bottom center",
            markers: true,

            toggleActions: "play none reverse none",
        },
    });
    sq3tl
        .to(".square3", {
            y: 350,
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
        })
        .from(
            ".square4", {
                y: 400,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
                onComplete: sec4(),
            },
            "-=1"
        )
        .to(
            ".section4 .background--white,.section3 .background--white", {
                opacity: 0,
            },
            "-=0.5"
        );

    return sq3tl;
}

// --------------------------------------------------4

function sec4() {
    const sq4tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            start: "bottom center",
            end: "bottom center",
            markers: true,

            toggleActions: "play none reverse none",
        },
    });
    sq4tl

        .to(
            ".square4", {
                y: 350,
                opacity: 0,
                duration: 1,
                ease: Power4.easeInOut,
            },
            "-=1"
        )

        .from(
            ".square5", {
                y: 400,
                opacity: 0,
                duration: 1,
                // onComplete: sec5(),
            },
            "-=1"
        )

        .to(
            ".section4 .background--beige,.section5 .background--beige", {
                opacity: 0,
            },
            "-=0.5"
        );
    return sq4tl;
}

// --------------------------------------------------5
// function sec5() {
//   const sq5tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".section5",
//       start: "bottom center",
//      end: "bottom center",
//       markers: true,

//       toggleActions: "play none reverse none",
//     },
//   });
//   sq5tl

//     .to(
//       ".square5",
//       {
//         y: 350,
//         opacity: 0,
//         duration: 1,
//         ease: Power4.easeInOut,
//       },
//       "-=1"
//     )
//     .to(
//       ".section4 .background--beige,.section5 .background--beige",
//       {
//         opacity: 0,
//       },
//       "-=0.5"
//     );

//   return sq5tl;
// }

var master = gsap.timeline();
master.add(loading());
// .add(sec1()).add(sec2()).add(sec3());