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

const pedido =[];

const buttonPush = document.querySelectorAll('.PushCard');

function setAttribute(Atributo, valor, Elemento){
    const atributo = document.createAttribute(Atributo);
    atributo.value = `${valor}`;
    Elemento.setAttributeNode(atributo);
};

    console.log(Card)

fetch('./pizzas.json', {
    headers: {
        accept: "application/json"
    }
}
).then(res => res.json()).then((res) => {
    const pizzas = res.pizzas

    for (x = 0; x < 9; x++) {
        setAttribute('src', pizzas[x].img, imgCard[x]);
        pratoCard[x].innerHTML = `${pizzas[x].prato}`;
        ingredientesCard[x].innerHTML = `${pizzas[x].description}`;
        precoCard[x].innerHTML = `${pizzas[x].preco}`;

        buttonPush[x].addEventListener('click', () => {
            pedido.push(pizzas[0])
            console.log(pedido)
        })
    }
    
});


/*
imgCard
PratoCard
ingredientesCard
precoCard

 for (x = 0; x < 9; x++) {
        setAttribute('src', pizzas[x].img, imgCard[x]);
        pratoCard[x].innerHTML = `${pizzas[x].prato}`;
        ingredientesCard[x].innerHTML = `${pizzas[x].description}`;
        precoCard[x].innerHTML = `${pizzas[x].preco}`;

        buttonPush[x].addEventListener('click', () => {
            pedido.push(pizzas.id)
            console.log(pedido)
        })
    }
*/
//const x = document.querySelectorAll('ccc')