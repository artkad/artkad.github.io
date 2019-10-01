class BasketList {
    constructor(containerBasket = '.productsInBasket') {
        this.container = containerBasket;
        this.goodsInBasket = [];
        this._sumBasket();
    }
    _sumBasket() {
        //sum function
    };
    delProduct() {
        //delete basket product
    };
    clearBasket() {
        //clear
    };
    addProduct() {
        //add
    };

    render() {
        //pay
    }

}

class BasketItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.amoutn = product.amount;
        this.img = img;
    }
    render(){
        return `<div class = 'product-item' data-id = '${this.id}'>
                <img src="${this.img}" alt="image">
                <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <p>${this.amoutn} $</p>
                </div>
            </div>`
}
}

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();

    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Chair', price: 150},
        ];
    }
    render(){
            const block = document.querySelector(this.container);
            for (let product of this.goods) {
                const productObj = new ProductItem(product);
                this.allProducts.push(productObj);
                block.insertAdjacentHTML('beforeend', productObj.render());
            }
    }

    calcSum() {

        let sum =  0;
        const block = document.querySelector('.sumProducts');

        for(let product of this.allProducts) {
            sum = sum + product.price;
        }
        block.insertAdjacentHTML('beforeend', sum);
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class = 'product-item' data-id = '${this.id}'>
                <img src="${this.img}" alt="image">
                <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();
list.calcSum();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
//     {id: 5, title: 'Chair', price: 150},
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//
//     return `<div class = 'product-item'>
//                 <img src="${img}" alt="image">
//                 <div class="desc">
//                 <h3>${product.title}</h3>
//                 <p>${product.price} $</p>
//                 <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
//
// };
//
// const renderPage = list => {
//
//     const productsList = list.map(item => renderProduct(item));
//     document.querySelector('.products').innerHTML = productsList.join('');
// };
//
// renderPage(products);