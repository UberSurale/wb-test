const hideAvailableButton = document.querySelector('.checkbox-control__button');
const hideNotAvailableButton = document.querySelector('.basket-list__button');


hideAvailableButton.addEventListener('click', () => {
    const listAvailable = document.querySelector('.basket__list');
    const availableItems = listAvailable.getElementsByTagName('li');

    for (let i = 0; i < availableItems.length; i++) {
        availableItems[i].classList.toggle('visually-hidden');
    }
})

hideNotAvailableButton.addEventListener('click', () => {
    const listAvailable = document.querySelector('.basket__list--not-available');
    const notAvailableItems = listAvailable.getElementsByTagName('li');

    for (let i = 0; i < notAvailableItems.length; i++) {
        notAvailableItems[i].classList.toggle('visually-hidden');
    }
})
