document.querySelectorAll(".faq__item").forEach((item) => {
    // begin
    faq = gsap.timeline({
        scrollTrigger:{
            trigger: item,
            start: "top 50%+=100px",
            end: "top 50%+=100px",
            toggleActions:PlayReverse,
        }
    })
    faq.from((item),{
                x:-150, 
                y:100,
                z:-30, 
                transformOrigin:"0% 100%",
                opacity:0,
            })
})
faq__title = gsap.timeline({
    scrollTrigger:{
        trigger: ".faq__title",
        start: "top 35%+=100px",
        end: "top 35%+=100px",
        toggleActions:PlayReverse,
    }
})
faq__title.from((".faq__title"),{
    opacity:0,
})
    .from((".block__item"),{
        opacity: 0,
        duration: 0.7,
        stagger: 0.5
    });