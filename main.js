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
//caixa de pedidos
const boxPedidos = document.querySelector('.boxPedidosMenuCart')

console.log(boxPedidos)



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
        //indicador de qtd carrinho
        array.push(pizza)
        //-----------------
        //total
        total.push(pizza.preco)
        //------------------
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

        //incrementar o total
        var sum = 0;
        for (var x = 0; x < totalObj.length; x++) {
            sum += totalObj[x];
        }
        document.querySelector('.totalValorCart').innerHTML=`R$${sum},00`;


      // renderProdutono carrinho
        addBox()
        for(var i =0; i<pedido.length;i++){
            txtAdd(i,pedido[i].prato)
            addImg(pedido[i].img ,i)
        }
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
    for(var x = 0 ; x < pizzas.length ; x++){
    setInCar(buttonCard[x], pedido, totalObj, pizzas[x])
    }

});



//Produtos Pedidos:
function addBox(){
    //box principal:
    const box = document.createElement('div');
    boxPedidos.appendChild(box);
    setAttribute('class', 'produtos', box);
    //box>img(.imgCart)
    const img = document.createElement('img');
    box.appendChild(img);
    setAttribute('class', 'imgCart', img);
    //
    const txt = document.createElement('h4');
    box.appendChild(txt);
    setAttribute('class','textPedido',txt);
}
// função set>Nome dos pratos no carrinho


function txtAdd(y,NomeDoPrato){
    const textPedido = document.querySelectorAll('.textPedido');
    textPedido[y].innerHTML=NomeDoPrato;
}
// função set > Imagem dos pratos no carrinho
function addImg(imgUrl, i) {
    const imgCart = document.querySelectorAll(".imgCart")
    const atributo = document.createAttribute('src');
    atributo.value = `${imgUrl}`;
    imgCart[i].setAttributeNode(atributo);
    console.log(textPedido)
}