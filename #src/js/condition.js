;(function () {
conditions = gsap.timeline({
    scrollTrigger:{
        trigger: ".conditions__inner",
        start: "top 50%+=100px",
        end: "top 50%+=100px",
        toggleActions:PlayReverse,
    }
})
    conditions.from(".conditions__item-img",{
        scale:0
    })
    .from(".conditions__item-img",{
        y:-20,
        z:-30,
        repeat:-1,
        duration:1.3,
        yoyo:true,
        ease: "power1.inOut",
    })
    .from(".conditions__title",{
        opacity:0,
        duration: .3
    })
    .from(".conditions__text",{
        opacity:0,
        duration: .3
    })
        .from(".conditions__subtitle",{
            opacity:0,
            duration: .3
        })
    .from(".conditions__box",{
        opacity:0,
        stagger:1
    })
    .from(".conditions__desc",{
        opacity:0,
        stagger:1,
        duration: .3
    });
})();