const contact = function(modifyDiv)  {
    let header = `<h2>Contact Us</h2>`
    let filler = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Metus vulputate eu scelerisque felis imperdiet. Iaculis urna id volutpat lacus. Nibh tellus molestie nunc non blandit. Egestas tellus rutrum tellus pellentesque eu tincidunt. Elementum sagittis vitae et leo duis ut diam quam. Cursus vitae congue mauris rhoncus aenean. Blandit turpis cursus in hac. Ultricies leo integer malesuada nunc vel risus. Commodo ullamcorper a lacus vestibulum sed. In hac habitasse platea dictumst quisque sagittis purus sit amet. Tincidunt eget nullam non nisi est sit amet. Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>`

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(filler));

    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }

    const cards = document.createElement('div');
    cards.classList = 'cards';

    const contacts = [{
        name: "Joe",
        description: "Head Chef",
        number: "(012)-345-6789"
    },  {
        name: "Jane",
        description: "Sous Chef",
        number: "(012)-345-6789"
    },  {
        name: "Alexa",
        description: "Answering Machine",
        number: "(012)-345-6789"
    },  {
        name: "Siri",
        description: "Virtual Assistant",
        number: "(012-345-6789)"
    }];
    
    contacts.forEach(contact =>    {
        const card = document.createElement('div');
        card.classList = 'card';
    
        const content = `
        <h3>${contact.name}</h3>
        <p>${contact.description}</p>
        <p>${contact.number}</p>
        <p><button>Contact ${contact.name}</button></p>
        `
        card.innerHTML += content;
        cards.appendChild(card);
    });

    modifyDiv.appendChild(cards);
};

export {contact};