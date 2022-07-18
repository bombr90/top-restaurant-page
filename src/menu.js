import logo from './linux.png';

const menu = function(modifyDiv)  {
    let header = `<h2>Menu</h2>`
    let filler = `<p>Odin's Eatery has an assortment of snacks, entrees, beverages and desserts.</p>`

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(filler));

    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }
    
    function addImage(img)    {
        const _image = new Image();
        _image.src = img;
        return _image;
    }

    const cards = document.createElement('div');
    cards.classList = 'cards';

    const menu = [{
        name: "Snack",
        type: "snack",
        description: "A light snack.",
        price: "$8"
    },  {
        name: "Entree",
        type: "entree",
        description: "A mouth-watering entree.",
        price: "$23"
    },  {
        name: "Beverage",
        type: "beverage",
        description: "A delicious beverage.",
        price: "$2"
    },  {
        name: "Dessert",
        type: "dessert",
        description: "A to-die-for dessert.",
        price: "$12"
    }];
    
    menu.forEach(el =>    {
        const card = document.createElement('div');
        card.classList = 'menucard';
    
        const content = `
        <h3>${el.name}</h3>
        <p>${el.description}</p>
        <img class='image' src=${logo} alt='img'>
        <p>${el.price}</p>
        <p><button>Order ${el.name}</button></p>
        `
        card.innerHTML += content;
        cards.appendChild(card);
    });

    modifyDiv.appendChild(cards);
};

export {menu};