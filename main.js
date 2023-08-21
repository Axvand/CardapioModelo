const boxMenu2 = document.querySelector('.boxNav2')
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.mainMenu')
boxMenu2.addEventListener('click',()=>{
    menu.style.display='block'
    menuMain.style.display='block'
    menuMain.style.animation='fadeInRight'
    menuMain.style.animationDuration='0.7s'
    boxMenu2.style.backgroundColor='yellow'
})
menu.addEventListener('click',()=>{
    menuMain.style.animation='fadeOutRight'
    menuMain.style.animationDuration='0.6s'
    setTimeout(()=>{
            boxMenu2.style.backgroundColor='transparent'
            menu.style.display='none'
        },500)
})