
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


//----------------------RICK-ROLL!!------------------------

const pattern = ['r', 'i', 'c', 'k'];
let current = 0;

const keyHandler = function (event) {
    if (pattern.indexOf(event.key) < 0 || event.key != pattern[current]) 
    {
        current = 0;
        return;
    }
    current++;

    if (pattern.length === current) {
        current = 0;
        openModal(modal)
        $('modal').modal(show)
        //window.alert('Nu ska modal popup kicka igång och köra rick-roll');
    }
};
document.addEventListener('keydown', keyHandler, false);

//------------------ModalPopup for RickRoll------------------

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')   
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')   
}