
const easterEgg = document.getElementById('easterEgg1');
const menuList = document.querySelectorAll('a');


function testTwo() {
    document.body.style.backgroundColor = '#008080';
    document.body.style.color = 'white';

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].style.color = 'white';
    }
}
easterEgg.addEventListener('click', testTwo);
