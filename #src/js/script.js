let availableScreenWidth = window.screen.availWidth;
    

@@include('lazy.js')
@@include('webp.js')
@@include('_gsapLib.js')

let PlayReverse = "play none";

if(availableScreenWidth <= 1000){
    PlayReverse = "play none reverse"
}

@@include('accordeon.js')
@@include('popup.js')
@@include('burger.js')
@@include('header.js')
@@include('about.js')
@@include('info.js')
@@include('reviews.js')
@@include('condition.js')
@@include('date.js')
@@include('prize.js')
@@include('faq.js')
