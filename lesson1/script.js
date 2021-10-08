const products = [
    { id: 1, title: 'Платье', price: 1500 },
    { id: 2, title: 'Рубашка', price: 800 },
    { id: 3, title: 'Блузка', price: 1000 },
    { id: 4, title: 'Шляпа', price: 500 },
    { id: 5, title: 'Пальто', price: 15000 },
    { id: 6, title: 'Джинсы', price: 1700 },
    { id: 7, title: 'Брюки', price: 1600 },
    { id: 8, title: 'Пижама', price: 1500 },
    { id: 9, title: 'Футболка', price: 750 },
    { id: 10, title: 'Носки', price: 200 },
];

const renderProduct = (item, img ='https://via.placeholder.com/150') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.main-Container').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);