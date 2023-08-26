const boxMenu2 = document.querySelector('.boxNav2')
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.mainMenu')

//ShowMenu
boxMenu2.addEventListener('click', () => {
    menu.style.display = 'block'
    menuMain.style.display = 'block'
    menuMain.style.animation = 'fadeInRight'
    menuMain.style.animationDuration = '0.7s'
    boxMenu2.style.backgroundColor = 'yellow'
})
//CloseMenu
menu.addEventListener('click', () => {
    menuMain.style.animation = 'fadeOutRight'
    menuMain.style.animationDuration = '0.6s'
    setTimeout(() => {
        boxMenu2.style.backgroundColor = 'transparent'
        menu.style.display = 'none'
    }, 500)
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
const mainCarrinho2 = document.querySelector('.mainCarrinho2')
const carrinhoMenu = document.querySelector(".carrinho")
//carrinhobutton
const carrinhoButton = document.querySelector('.boxNav3')
//mainCarrinho
const mainCarrinho = document.querySelector('.mainCarrinho')
//Indicadpr de total dentro do menu carrinho
const totalValorCart = document.querySelector('.totalValorCart')
//====================================

const pedido = [];
const totalObj = []
const buttonPush = document.querySelectorAll('.PushCard');
//caixa de pedidos
const boxPedidos = document.querySelector('.boxPedidosMenuCart')

//setarAtrinutoEmElementos
function setAttribute(Atributo, valor, Elemento) {
    const atributo = document.createAttribute(Atributo);
    atributo.value = `${valor}`;
    Elemento.setAttributeNode(atributo);
};
//setInCar
function setInCar(button, array, total, pizza) {
    button.addEventListener('click', () => {
        //inclusao na array produtos
        //indicador de qtd carrinho
        array.push(pizza)
        //-----------------
        //total
        total.push(pizza.preco)
        //------------------
        //animação do alerta
        boxAlert.style.animation = 'fadeIn'
        boxAlert.style.animationDuration = '0.3s'
        boxAlert.style.display = 'block'

        //condicional do indicador de quantidade
        if (pedido.length > 0) {
            identificadorQtd.style.display = 'block'
        }
        //indicado de quatidade
        document.querySelector(".identificadorQtdCarrinho").innerHTML = `${pedido.length}`
        //saida do alerta animação
        setTimeout(() => {
            boxAlert.style.animation = 'fadeOut'
            boxAlert.style.animationDuration = '0.6s'
            setTimeout(() => {
                boxAlert.style.display = 'none'
            }, 600)
        }, 1000)

        //incrementar o total
        sum = 0;
        for (var x = 0; x < pedido.length; x++) {
            sum += pedido[x].preco
                ;
        }

        document.querySelector('.totalValorCart').innerHTML = `R$${sum},00`;

        console.log(sum)


        // renderProdutono carrinho 

        addBox()
        for (var i = 0; i < pedido.length; i++) {
            txtAdd(i, pedido[i].prato)
            addImg(pedido[i].img, i)
        }
    })
};

//showCart
carrinhoButton.addEventListener('click', () => {
    carrinhoMenu.style.display = 'block'
    mainCarrinho.style.animation = 'fadeInLeft'
    mainCarrinho.style.animationDuration = '1s'
    mainCarrinho.style.display = 'block'
    carrinhoButton.style.backgroundColor = 'yellow'

})
//closeCart
mainCarrinho2.addEventListener('click', () => {
    mainCarrinho.style.animation = 'fadeOutLeft'
    mainCarrinho.style.animationDuration = '0.5s'
    mainCarrinho.style.display = 'block'
    carrinhoButton.style.backgroundColor = 'transparent'
    setTimeout(() => {
        carrinhoMenu.style.display = 'none'

    }, 500)
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
        for (var x = 0; x < 10; x++) {
            setInCar(buttonCard[x], pedido, totalObj, pizzas[x])
        }

    });



//Produtos Pedidos:
function addBox() {
    //box principal:
    const box = document.createElement('div');
    boxPedidos.appendChild(box);
    setAttribute('class', 'produtos', box);
    //box>img(.imgCart)
    const img = document.createElement('img');
    box.appendChild(img);
    setAttribute('class', 'imgCart', img);
    //box>txt(.h4)
    const txt = document.createElement('h4');
    box.appendChild(txt);
    setAttribute('class', 'textPedido', txt);

    
}
// função set>Nome dos pratos no carrinho
function txtAdd(y, NomeDoPrato) {
    const textPedido = document.querySelectorAll('.textPedido');
    textPedido[y].innerHTML = NomeDoPrato;
}
// função set>imagem dos pratos no carrinho
function addImg(imgUrl, i) {
    const imgCart = document.querySelectorAll(".imgCart")
    const atributo = document.createAttribute('src');
    atributo.value = `${imgUrl}`;
    imgCart[i].setAttributeNode(atributo);
}

const imgDelete = document.querySelector('.imgDelete')


imgDelete.addEventListener('click', () => {
    const box = document.querySelectorAll('.produtos')
    pedido.pop()

    box[box.length - 1].style.animation='fadeOutLeft'
    box[box.length - 1].style.animationDuration='0.3s'


    setTimeout(()=>{
        boxPedidos.removeChild(box[box.length - 1])
    },200)


    som = 0;
    for (var x = 0; x < pedido.length; x++) {
        som += pedido[x].preco
            ;
    }

    document.querySelector('.totalValorCart').innerHTML = `R$ ${som},00`
    if (pedido.length >= 0) {
        document.querySelector(".identificadorQtdCarrinho").style.display = 'none';
    } else if (pedido.length > 0) {
        document.querySelector(".identificadorQtdCarrinho").innerHTML = `${pedido.length}`
    }

})