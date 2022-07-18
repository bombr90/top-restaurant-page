import main from './static/main.html';

const home = function(modifyDiv)  {
    let header = `<h2>Home</h2>`
    let address = `<h3>Address</h3><p class='center'>123 Fake Street, MiddleOfNoWhere, Middle Earth</p>`;

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(main));
    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }

    modifyDiv.appendChild(addComponent(`<h3>Hours</h3>`))
    const tablecards = document.createElement('div');
    tablecards.classList = 'tablecards';

    const hours = [{
        day: "Day",
        open: "Open",
        close: "Close",
    },  {    
        day: "Sunday",
        open: "9am",
        close: "2pm"
    },  {
        day: "Monday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Tuesday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Wednesday",
        open: "Closed",
        close: ""
    },  {
        day: "Thursday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Friday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Saturday",
        open: "9am",
        close: "2pm"
    }];
    
    hours.forEach(hour =>    {
        const tablecard = document.createElement('div');
        tablecard.classList = 'tablecard';
    
        const content = `
        <span>${hour.day}</span>
        <span>${hour.open}</span>
        <span>${hour.close}</span>
        `
        tablecard.innerHTML += content;
        tablecards.appendChild(tablecard);
    });

    modifyDiv.appendChild(tablecards);

    modifyDiv.appendChild(addComponent(address));
};

export {home};