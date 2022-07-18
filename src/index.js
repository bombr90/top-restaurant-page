import './style.css';
import {initLoad} from './initLoad';
import {contact} from './contact';
import {home} from './home';
import {menu} from "./menu";

let main = document.getElementById('main');

(function(){
    home(main);
})();

const navigateTabs = (function()  {
    //cache DOM
    let homebtn = document.getElementById('homebtn');
    let contactbtn = document.getElementById('contactbtn');
    let menubtn = document.getElementById('menubtn');
    let navbuttons = document.querySelectorAll('#nav button');
    //add event listeners    
    navbuttons.forEach(el => el.addEventListener('click', changeTab));
    //methods
    function changeTab(e)   {
    console.log('changetab');
    clear_content(main);
    e.target.classList.add('clicked');
        switch(e.target.id) {
            case 'contactbtn':
                contact(main);
                break;
            case 'menubtn':
                menu(main);
                break;
            default:
                home(main);
        }
    }
    function clear_content(div) {
        div.replaceChildren();
        navbuttons.forEach(el => el.classList.remove('clicked'));
    }
})();
