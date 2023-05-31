let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let list1 = document.querySelector('.list1');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add.toggle('active');
// })
openShopping.onclick = () =>{
    body.classList.toggle('active');
    
}
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'North Indian Thali',
        image: 'NT1.png',
        price: 350
    },
    {
        id: 2,
        name: 'Special Thali',
        image: 'NT2.png',
        price: 450
    },
    {
        id: 3,
        name: 'Maratha Thali',
        image: 'NT3.png',
        price: 360
    },
    {
        id: 4,
        name: 'Punjabi Thali',
        image: 'NT4.png',
        price: 330
    }
];

let products1 = [
    {
        id: 1,
        name: 'Chapati',
        image: 'Chapati.JPG',
        price: 15
    },
    {
        id: 2,
        name: 'Chicken 65',
        image: 'Chicken 65.JPG',
        price: 180
    },
    {
        id: 3,
        name: 'Dal Fry',
        image: 'Dal fry.JPG',
        price: 110
    },
    {
        id: 4,
        name: 'Dum Aloo',
        image: 'Dum aloo.JPG',
        price: 120
    },
    {
        id: 5,
        name: 'Garlic Rice',
        image: 'Garlic rice.JPG',
        price: 130
    },
    {
        id: 6,
        name: 'Chicken Fry',
        image: 'Chicken Fry.JPG',
        price: 150
    }
    ,
    {
        id: 7,
        name: 'Keema',
        image: 'Keema.JPG',
        price: 150
    },
    {
        id: 8,
        name: 'Mutton Masala',
        image: 'Mutton masala.JPG',
        price: 200
    },
    {
        id: 9,
        name: 'Palak Paneer',
        image: 'Palak paneer.JPG',
        price: 120
    },
    {
        id: 10,
        name: 'Veg Pulao',
        image: 'Veg pulao.JPG',
        price: 130
    },
    {
        id: 11,
        name: 'Tanduri Naan',
        image: 'Tanduri naan.JPG',
        price: 80
    },
    {
        id: 12,
        name: 'Roasted Papad',
        image: 'Roasted papad.JPG',
        price: 30
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

function initApp1(){
    products1.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item1');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard1(${key})">Add To Card</button>`;
        list1.appendChild(newDiv);
    })
}


initApp();
initApp1();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
 reloadCard();

}
function addToCard1(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products1[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products1[key].price;
    }
    reloadCard();
}