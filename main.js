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


const imgCard = document.querySelectorAll('.imgCard');
const pratoCard = document.querySelectorAll('.PratoCard');
const ingredientesCard = document.querySelectorAll('.ingredientesCard');
const precoCard = document.querySelectorAll('.precoCard');
const Card = document.querySelectorAll('.card')
const buttonCard = document.querySelectorAll('.Buy')

const pedido =[];

const buttonPush = document.querySelectorAll('.PushCard');

function setAttribute(Atributo, valor, Elemento){
    const atributo = document.createAttribute(Atributo);
    atributo.value = `${valor}`;
    Elemento.setAttributeNode(atributo);
};



//setInCar
function setInCar(button,array,pizza){
    button.addEventListener('click',()=>{
        array.push(pizza)
        console.log(array)
    })
};
fetch('./pizzas.json', {
    headers: {
        accept: "application/json"
    }
})
.then(res => res.json()).then((res) => {
    const pizzas = res.pizzas
    for(var x =0; x<9;x++){
    setInCar(buttonCard[x],pedido,pizzas[x])
    }
});