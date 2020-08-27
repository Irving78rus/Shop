//Статика
var product = document.createElement("div");
document.body.appendChild(product);
product.classList.add("product");

var allBasket = document.createElement("div");
    document.body.appendChild(allBasket);
    allBasket.classList.add("basket");
    allBasket.id = 'allBasket';
    allBasket.append("Корзина товаров");


// Массив с объектами товаров    
var clothes = [
    { id: 'q1234', name: 'maika', price: 1000, img: 'img/shirt.png' },
    { id: 'w1234', name: 'boots', price: 2000, img: 'img/boots.png' },
    { id: 'e1234', name: 'legs', price: 3000, img: 'img/jeans.png' },
];



// Отрисовываем каталог
function rednerCatalog() {
    for (var i = 0; i < clothes.length; i++) {
        var div = document.createElement('div');
        product.append(div);
        div.className = "block";
        div.append(clothes[i].name );
        div.append("Цена : " + clothes[i].price + 'р');


        var img = document.createElement("IMG");
        img.src = clothes[i].img;
        div.appendChild(img);
        img.className = "img";

        var button = document.createElement("button");
        div.append(button);
        button.innerHTML = "Добавить товар в корзину";
        button.className = "buttonIn";
        button.id = clothes[i].id;
    }
}
rednerCatalog();
















    