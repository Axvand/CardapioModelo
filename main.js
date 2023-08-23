const boxMenu2 = document.querySelector('.boxNav2')
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.mainMenu')

//ShowMenu
boxMenu2.addEventListener('click',()=>{
    menu.style.display='block'
    menuMain.style.display='block'
    menuMain.style.animation='fadeInRight'
    menuMain.style.animationDuration='0.7s'
    boxMenu2.style.backgroundColor='yellow'
})
//CloseMenu
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
const boxAlert = document.querySelector('.boxAlert')
//============================================
const identificadorQtd = document.querySelector(".identificadorQtdCarrinho")
const qtdCart = identificadorQtd.innerHTML;
//=====================================
//carrinhoMenu
const carrinhoMenu = document.querySelector(".carrinho")
//carrinhobutton
const carrinhoButton = document.querySelector('.boxNav3')
//mainCarrinho
const mainCarrinho = document.querySelector('.mainCarrinho')
//Indicadpr de total dentro do menu carrinho
const totalValorCart =document.querySelector('.totalValorCart')
//====================================

const pedido =[];
const totalObj =[]
const buttonPush = document.querySelectorAll('.PushCard');


//setarAtrinutoEmElementos
function setAttribute(Atributo, valor, Elemento){
    const atributo = document.createAttribute(Atributo);
    atributo.value = `${valor}`;
    Elemento.setAttributeNode(atributo);
};

//setInCar
function setInCar(button, array,total, pizza) {
    button.addEventListener('click', () => {
        //inclusao na array produtos
        array.push(pizza)
        total.push(pizza.preco)
        console.log(array)
        console.log(total)
        //animação do alerta
        boxAlert.style.animation = 'fadeIn'
        boxAlert.style.animationDuration = '0.3s'
        boxAlert.style.display = 'block'

        //condicional do indicador de quantidade
        if(pedido.length>0){
            identificadorQtd.style.display='block'
        }
        //indicado de quatidade
        document.querySelector(".identificadorQtdCarrinho").innerHTML=`${pedido.length}`
       //saida do alerta animação
        setTimeout(() => {
            boxAlert.style.animation = 'fadeOut'
            boxAlert.style.animationDuration = '0.6s'
            setTimeout(() => {
                boxAlert.style.display = 'none'
            },600)
        }, 1000)

        var sum = 0;
        for (var x = 0; x < totalObj.length; x++) {
            sum += totalObj[x];
        }

        /*const a = document.querySelector('.totalValorCart').innerHTML;
        x = parseInt(a)+sum*/
        document.querySelector('.totalValorCart').innerHTML=`R$${sum},00`


    })

};


//showCart
carrinhoButton.addEventListener('click',()=>{
    carrinhoMenu.style.display='block'
    mainCarrinho.style.animation='fadeInLeft'
    mainCarrinho.style.animationDuration='1s'
    mainCarrinho.style.display='block'
    carrinhoButton.style.backgroundColor='yellow'
     
})
//closeCart
carrinhoMenu.addEventListener('click',()=>{
    mainCarrinho.style.animation='fadeOutLeft'
    mainCarrinho.style.animationDuration='0.5s'
    mainCarrinho.style.display='block'
    carrinhoButton.style.backgroundColor='transparent'
    setTimeout(()=>{
        carrinhoMenu.style.display='none'

    },500)
})
//================================


//CardapioPizzasParaPedido
fetch('./pizzas.json', {
    headers: {
        accept: "application/json"
    }
})
.then(res => res.json()).then((res) => {
    const pizzas = res.pizzas
    for(var x =0; x<9;x++){
    setInCar(buttonCard[x], pedido, totalObj, pizzas[x])
    }
});




/*
function Somar(Valores,localParaSoma){
         let totalSoma = 0;
         for(var i =0;i<Valores.length;i++){
         totalSoma+=Valores[i];
         localParaSoma.innerHTML=`Total: ${totalSoma}` 
        }
      } 

      Somar(totalObj, totalValorCart)
*/