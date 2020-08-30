//Статика
var product = document.createElement("div");
document.body.appendChild(product);
product.classList.add("product");

var allBasket = document.createElement("div");
document.body.appendChild(allBasket);
allBasket.classList.add("basket");
allBasket.id = 'allBasket';

var headerBasket = document.createElement("div");
allBasket.appendChild(headerBasket);
headerBasket.classList.add("headerBasket");
headerBasket.append("Корзина товаров");

var buttonClear = document.createElement("button");
allBasket.appendChild(buttonClear);
buttonClear.classList.add("buttonIn");
buttonClear.append("очистить корзину");
buttonClear.id = 'Clear';
buttonClear.onclick = buttonClearGo;

function buttonClearGo() {

    basket.splice(0, basket.length);


    document.querySelector('.containerProductInBasket').innerHTML = '';
    document.querySelector('.costBasket').remove();
    var headerBasket = document.createElement("div");
    allBasket.appendChild(headerBasket);
    headerBasket.classList.add("costBasket");
    headerBasket.append("В корзине нет товаров");

}

var containerProductInBasket = document.createElement("div");
allBasket.appendChild(containerProductInBasket);
containerProductInBasket.classList.add("containerProductInBasket");

var headerBasket = document.createElement("div");
allBasket.appendChild(headerBasket);
headerBasket.classList.add("costBasket");
headerBasket.append("В корзине нет товаров");


// Массив с объектами товаров    
var clothes = [
    { id: 'q1234', name: 'Shirt', price: 1000, img: 'img/shirt.png' },
    { id: 'w1234', name: 'Boots', price: 2000, img: 'img/boots.png' },
    { id: 'e1234', name: 'Jeans', price: 3000, img: 'img/jeans.png' },
];

// Basket это массив , в который мы будем помещать объект, на который кликнули в каталоге

var basket = [];


// считывает нажатие по ай_ди и добавляет товар в наш баскет


function buttonclickPlus(e) {
    var allSum = 0;
    var targid = e.target.id
    var foundProduct = clothes.find(func => func.id == targid) // ищем объект в каталоге

    if (basket.indexOf(foundProduct) == -1) { //если в массиве крзины объекта нет добавлем его в массив и добавляем свойства количества и общей стоимости 
        foundProduct.count = 1
        foundProduct.cost = foundProduct.count * foundProduct.price
        basket.push(foundProduct)

    } else if (basket.indexOf(foundProduct) !== -1) { //если в массиве есть такой объект, то просто изменяем кол-во и общ. стоимость
        foundProduct.count++
            foundProduct.cost = foundProduct.count * foundProduct.price
    }

    for (var i = 0; i < basket.length; i++) { // Считаем общую стоимость корзины
        allSum += basket[i].cost
    }
    console.log(basket)
    document.querySelector('.costBasket').remove(); // Очищаем общ. стоимость корзины

    var headerBasket = document.createElement("div"); // выводим общую стоимость корзины
    allBasket.appendChild(headerBasket);
    headerBasket.classList.add("costBasket");
    headerBasket.append("Общая стоимость покупок " + allSum);
    document.querySelector('.containerProductInBasket').innerHTML = ''; // Удаляем старую карточку товара в корзине

    rednerBasket();

}

function buttonclickMinus(e) { // все по аналогии
    var allSum = 0;
    var targid = e.target.id
    var foundProduct = clothes.find(func => func.id == targid)

    if (foundProduct.count > 0) {
        foundProduct.count--
            foundProduct.cost = foundProduct.count * foundProduct.price
    }

    for (var i = 0; i < basket.length; i++) {
        allSum += basket[i].cost
    }
    console.log(basket)
    document.querySelector('.costBasket').remove();

    var headerBasket = document.createElement("div");
    allBasket.appendChild(headerBasket);
    headerBasket.classList.add("costBasket");
    headerBasket.append("Общая стоимость покупок " + allSum);
    document.querySelector('.containerProductInBasket').innerHTML = '';

    rednerBasket();

    if (foundProduct.count == 0) { //Удаляем карточку товара если количество равно 0
        basket.splice(basket.indexOf(foundProduct), 1)
        document.getElementById(targid + 'block').remove();

    }
    if (allSum == 0) {
        document.querySelector('.costBasket').remove();
        var headerBasket = document.createElement("div");
        allBasket.appendChild(headerBasket);
        headerBasket.classList.add("costBasket");
        headerBasket.append("В корзине нет товаров");
    }

}


// Отрисовываем каталог
function rednerCatalog() {
    for (var i = 0; i < clothes.length; i++) {
        var cardElement = createCard(clothes[i])
        product.append(cardElement); // вызвал
    }
}
rednerCatalog();

function createCard(any) {
    var div = document.createElement('div');
    div.className = "block";
    div.append(any.name + "\n");
    div.append("Price : " + any.price + 'р');

    var img = document.createElement("IMG");
    img.src = any.img;
    div.appendChild(img);
    img.className = "img";

    var button = document.createElement("button");
    div.append(button);
    button.innerHTML = "Добавить товар в корзину";
    button.className = "buttonIn";
    button.id = any.id;
    button.onclick = buttonclickPlus
    return div
}


//rednerBasket Отрисовывает товары в корзине
function rednerBasket() {
    for (var i = 0; i < basket.length; i++) {

        var cardElement = createCardInBasket(basket[i]);
        containerProductInBasket.append(cardElement); // вызвал

    }
}
rednerBasket();


//createCardInBasket создает товар
function createCardInBasket(any) {

    var div = document.createElement('div');
    div.className = "clothesInBasket";
    div.append(any.name + "\n");
    div.append("Цена : " + any.price + 'р');
    div.id = any.id + "block"

    var img = document.createElement("IMG");
    img.src = any.img;
    div.appendChild(img);
    img.className = "basketImg";

    var buttonPlus = document.createElement("button");
    div.append(buttonPlus);
    buttonPlus.innerHTML = "Добавить единицу товара";
    buttonPlus.className = "buttonBasket";
    buttonPlus.id = any.id;
    buttonPlus.onclick = buttonclickPlus

    var buttonMinus = document.createElement("button");
    div.append(buttonMinus);
    buttonMinus.innerHTML = "Убрать единицу товара";
    buttonMinus.className = "buttonBasket";
    buttonMinus.id = any.id;
    buttonMinus.onclick = buttonclickMinus

    var counter = document.createElement('div');
    counter.className = "headerBasket";

    div.append("Общая Цена: " + any.cost + ' р'); //выводим стоимость карточки товара

    return div
}
