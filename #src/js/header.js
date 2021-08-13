header = gsap.timeline();

header.from(".header__bg-img",{
        opacity:0,
        duration:1.5
    })
    .from(".header",{
        opacity:0,
        duration:0.5,
    })
    .from(".header__logo",{
        x:-100,
        opacity:0,
        duration:1,
        onComplete: () => aboutTitle.play()
    })
    .from(".logo__text",{
        opacity:0,
        y:100,
        duration:1,
    })
    .to(".header__logo",{
        y: -10,
        duration:1.5,
        repeat:-1,
        yoyo:true,
        ease: "power1.inOut",
    });