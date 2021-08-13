"use strict"

// Прокрутка при клике


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuClick);
  });

  function onMenuClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            if (document.body.classList.contains('_lock')) {
                document.body.classList.remove('_lock');
                toggleMenu.reverse();
            }

          window.scrollTo({
              top: gotoBlockValue
          });
          e.preventDefault();
      }
  }
}

const menuPrevius = document.querySelectorAll('.goto[data-goto]');
if (menuPrevius.length > 0) {
    menuPrevius.forEach(menuPreviu => {
        menuPreviu.addEventListener("click", onMenuClickPreviu);
});

  function onMenuClickPreviu(e) {
      const menuPreviu = e.target;
      if (menuPreviu.dataset.goto && document.querySelector(menuPreviu.dataset.goto)) {
          const gotoBlockPreviu = document.querySelector(menuPreviu.dataset.goto);
           const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
          window.scrollTo({
              top: gotoBlockPreviu
          });
          e.preventDefault();
      }
  }
}

let iconMenuBurger = document.querySelector('.menu__icon');
let menuBodyBurger = document.querySelector('.menu__body');

const arrowOne = document.querySelector('.menu__arrow-one');
    const arrowTwo = document.querySelector('.menu__arrow-two');
    const arrowThree = document.querySelector('.menu__arrow-three');
    
    const arrows = [arrowOne,arrowTwo,arrowThree];
    
    const toggleMenu = new gsap.timeline({paused: true, reversed:true});

    let posYStart = 8;
    let posYEnd = -8;
    if (availableScreenWidth <= 1145) {
    
    toggleMenu
        .to(arrowTwo,0.125,{
            scaleX:0,
            opacity:0
        })
            .to(arrowOne,0.25,{
                transformOrigin: "50% 50%",
                y: posYStart,
                ease:Power2.easeInOut
            },"slide")
            .to(arrowThree,0.25,{
                transformOrigin: "50% 50%",
                y: posYEnd,
                ease:Power2.easeInOut
            },"slide")
            .to(iconMenuBurger,.5,{
                rotation:360,
                ease:Power4.easeInOut
            })
            .to(arrowOne,0.25,{
                rotation:45,
                ease:Power2.easeInOut
            },"cross")
            .to(arrowThree,0.25,{
                rotation:-45,
                ease:Power2.easeInOut
            },"cross")
            .to(menuBodyBurger,{
                duration:1,
                left: "0%",
                ease:Expo.easeInOut
            },"-=0.9")
            .from(".menu__item",{
                stagger:0.5,
                x:-200,
                opacity:0,
                ease: Expo.easeInOut
            })
            .from(".lang__item",{
                stagger:0.5,
                x:-200,
                opacity:0,
                ease: Expo.easeInOut
            })
            .from(".send-request",{
                scale:0,
                ease: Expo.easeInOut
            });
    
            iconMenuBurger.addEventListener('click', _ => {
            toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
            document.body.classList.toggle('_lock');
        });
    }