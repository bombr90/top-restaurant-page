import logo from './linux.png';
import footer from './static/footer.html';
import header from './static/header.html';
import nav from './static/nav.html';

const initalLoad = (function() {
    console.log('initialLoad success');
    //cacheDOM
    let _content = document.getElementById('content');
    //create unique div elements and append
    const _header = addDiv('header');
    const _nav = addDiv('nav');
    const _main = addDiv('main');
    const _footer = addDiv('footer');
    //populate div elements with imported html
    _header.appendChild(addComponent(header));
    _nav.appendChild(addComponent(nav));
    // _header.appendChild(addImage(logo));
    _footer.appendChild(addComponent(footer))
    //methods
    function addDiv(name)   {
        let newDiv = document.createElement('div');
        newDiv.id = name;
        _content.appendChild(newDiv);
        return newDiv;
    }
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
    function addText(str)  {
        let _text = document.createTextNode(str);
        return _text;
    }
})();

export {initalLoad};