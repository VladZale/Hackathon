aboutTitle = gsap.timeline().pause();

aboutTitle.from(".about__title",1,{
    opacity:0,
    duration:2
})
    .to(".about__title",1,{
        scale:1.15,
        repeat:-1,
        yoyo:true,
        ease: "power1.inOut"
    })
.from(".about__desc",{
    opacity:0,
    duration:0.3
});