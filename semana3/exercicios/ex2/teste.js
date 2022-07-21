

function criaLi(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(criaLi('Home'));
menu.appendChild(criaLi('Services'));
menu.appendChild(criaLi('About Us'));
