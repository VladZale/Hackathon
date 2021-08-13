;(function () {

reviews = gsap.timeline({
    scrollTrigger:{
        trigger: ".reviews__inner",
        start: "top 30%+=100px",
        end: "top 30%+=100px",
        toggleActions:PlayReverse,
    }
})
    reviews.from(".reviews__text",{
        opacity:0
    });
})();